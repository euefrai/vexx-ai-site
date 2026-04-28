import { NextResponse, type NextRequest } from "next/server";
import type Stripe from "stripe";
import { getStripe } from "@/lib/stripe";
import { createAdminClient } from "@/lib/supabase/server";
import {
  PAID_PLANS,
  PLANS,
  type PlanId,
} from "@/lib/pricing";

export const dynamic = "force-dynamic";
// Stripe needs the raw body to verify the signature.
export const runtime = "nodejs";

// Lazy because env vars must resolve at request time, not module load time.
function priceToPlanMap(): Record<string, PlanId> {
  const map: Record<string, PlanId> = {};
  for (const plan of PAID_PLANS) {
    const def = PLANS[plan];
    const monthly = process.env[def.stripeMonthlyPriceEnv!];
    const yearly = process.env[def.stripeYearlyPriceEnv!];
    if (monthly) map[monthly] = plan;
    if (yearly) map[yearly] = plan;
  }
  return map;
}

function planFromSubscription(sub: Stripe.Subscription): PlanId {
  const map = priceToPlanMap();
  for (const item of sub.items.data) {
    const matched = map[item.price.id];
    if (matched) return matched;
  }
  return "free";
}

async function syncSubscription(stripe: Stripe, subscriptionId: string) {
  const supabase = createAdminClient();
  const sub = await stripe.subscriptions.retrieve(subscriptionId);

  const customerId =
    typeof sub.customer === "string" ? sub.customer : sub.customer.id;

  // Lookup #1 — by stripe_customer_id (set when checkout created the
  // customer).
  let { data: profile } = await supabase
    .from("users")
    .select("id")
    .eq("stripe_customer_id", customerId)
    .single();

  // Lookup #2 — fallback via subscription metadata. Avoids the race where
  // `customer.subscription.created` arrives before the checkout endpoint
  // has had time to persist `stripe_customer_id` on the user row.
  if (!profile) {
    const supabaseUserId = sub.metadata?.supabase_user_id;
    if (supabaseUserId) {
      const { data: byMeta } = await supabase
        .from("users")
        .select("id")
        .eq("id", supabaseUserId)
        .single();
      if (byMeta) {
        profile = byMeta;
        // Backfill so the customer-id lookup wins next time.
        await supabase
          .from("users")
          .update({ stripe_customer_id: customerId })
          .eq("id", byMeta.id);
      }
    }
  }

  if (!profile) {
    console.warn(`[stripe webhook] no user for customer ${customerId}`);
    return;
  }

  const planTier: PlanId =
    sub.status === "active" || sub.status === "trialing"
      ? planFromSubscription(sub)
      : "free";

  // Stripe API ≥ 2024-11-20 puts the billing period on subscription items.
  const item = sub.items.data[0];
  const periodEndUnix = item?.current_period_end ?? null;

  await supabase.from("subscriptions").upsert(
    {
      user_id: profile.id,
      stripe_customer_id: customerId,
      stripe_subscription_id: sub.id,
      stripe_price_id: item?.price.id ?? null,
      status: sub.status,
      current_period_end: periodEndUnix
        ? new Date(periodEndUnix * 1000).toISOString()
        : null,
      cancel_at_period_end: sub.cancel_at_period_end,
    },
    { onConflict: "stripe_subscription_id" }
  );

  await supabase
    .from("users")
    .update({ plan: planTier })
    .eq("id", profile.id);
}

export async function POST(request: NextRequest) {
  const signature = request.headers.get("stripe-signature");
  const secret = process.env.STRIPE_WEBHOOK_SECRET;

  if (!signature || !secret) {
    return NextResponse.json(
      { error: "missing_signature_or_secret" },
      { status: 400 }
    );
  }

  const body = await request.text();
  const stripe = getStripe();

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(body, signature, secret);
  } catch (err) {
    const msg = err instanceof Error ? err.message : "invalid signature";
    return NextResponse.json({ error: msg }, { status: 400 });
  }

  try {
    switch (event.type) {
      case "checkout.session.completed": {
        const session = event.data.object as Stripe.Checkout.Session;
        if (session.mode === "subscription" && session.subscription) {
          const subId =
            typeof session.subscription === "string"
              ? session.subscription
              : session.subscription.id;
          await syncSubscription(stripe, subId);
        }
        break;
      }
      case "customer.subscription.created":
      case "customer.subscription.updated":
      case "customer.subscription.deleted": {
        const sub = event.data.object as Stripe.Subscription;
        await syncSubscription(stripe, sub.id);
        break;
      }
      case "invoice.paid":
      case "invoice.payment_failed": {
        const invoice = event.data.object as Stripe.Invoice;
        // Stripe API ≥ 2024-11-20 nests this under parent.subscription_details.
        const sub = invoice.parent?.subscription_details?.subscription ?? null;
        if (sub) {
          const subId = typeof sub === "string" ? sub : sub.id;
          await syncSubscription(stripe, subId);
        }
        break;
      }
      default:
        // Unhandled event types are fine — Stripe will retry only on 4xx/5xx.
        break;
    }
  } catch (err) {
    console.error("[stripe webhook] handler error", err);
    return NextResponse.json({ error: "handler_error" }, { status: 500 });
  }

  return NextResponse.json({ received: true });
}
