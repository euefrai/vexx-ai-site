import { NextResponse, type NextRequest } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { getStripe } from "@/lib/stripe";
import { getPriceId, type PlanTier, type BillingPeriod } from "@/lib/pricing";

export const dynamic = "force-dynamic";

export async function POST(request: NextRequest) {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }

  const body = (await request.json().catch(() => ({}))) as {
    plan?: PlanTier;
    billing?: BillingPeriod;
  };
  const plan = body.plan;
  const billing = body.billing ?? "monthly";

  if (plan !== "pro" && plan !== "premium") {
    return NextResponse.json({ error: "invalid_plan" }, { status: 400 });
  }

  const priceId = getPriceId(plan, billing);
  if (!priceId) {
    return NextResponse.json(
      { error: "price_not_configured" },
      { status: 500 }
    );
  }

  // Find or create the Stripe customer for this user.
  const { data: profile } = await supabase
    .from("users")
    .select("stripe_customer_id, email")
    .eq("id", user.id)
    .single();

  const stripe = getStripe();
  let customerId = profile?.stripe_customer_id ?? null;

  if (!customerId) {
    const customer = await stripe.customers.create({
      email: user.email ?? profile?.email ?? undefined,
      metadata: { supabase_user_id: user.id },
    });
    customerId = customer.id;
    await supabase
      .from("users")
      .update({ stripe_customer_id: customerId })
      .eq("id", user.id);
  }

  const origin =
    process.env.NEXT_PUBLIC_SITE_URL ?? new URL(request.url).origin;

  const session = await stripe.checkout.sessions.create({
    mode: "subscription",
    customer: customerId,
    line_items: [{ price: priceId, quantity: 1 }],
    success_url: `${origin}/settings?status=success`,
    cancel_url: `${origin}/pricing?status=canceled`,
    allow_promotion_codes: true,
    client_reference_id: user.id,
    subscription_data: {
      metadata: { supabase_user_id: user.id, plan, billing },
    },
    metadata: { supabase_user_id: user.id, plan, billing },
  });

  return NextResponse.json({ url: session.url });
}
