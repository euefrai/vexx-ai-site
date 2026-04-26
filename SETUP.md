# Setup — Supabase + Stripe

This walks through every credential you need to plug in. The code is already wired.

---

## 1. Environment variables

Copy the template and fill it in:

```bash
cp .env.local.example .env.local
```

You'll come back to this file as you complete steps 2–4.

---

## 2. Supabase

### 2a. Create the project

1. Go to https://supabase.com → **New project**.
2. After it provisions, open **Project Settings → API**. Copy:
   - **Project URL** → `NEXT_PUBLIC_SUPABASE_URL`
   - **anon public** → `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - **service_role** (under "Project API keys") → `SUPABASE_SERVICE_ROLE_KEY`

> The service-role key bypasses Row Level Security. It is only used server-side
> (in `lib/supabase/server.ts → createAdminClient`) and must never be sent to the browser.

### 2b. Run the migration

Open **SQL editor → New query** and paste the entire contents of:

```
supabase/migrations/0001_init.sql
```

Run it. This creates `public.users`, `public.subscriptions`, RLS policies, the
`updated_at` trigger, and the `handle_new_user` trigger that auto-creates a
`users` row whenever someone signs up via Supabase Auth.

### 2c. Enable Google OAuth

1. **Google Cloud Console** → APIs & Services → **Credentials** → **Create OAuth client ID** → Web application.
2. Authorized redirect URI:
   ```
   https://<your-project-ref>.supabase.co/auth/v1/callback
   ```
   (Find `<your-project-ref>` in the Supabase URL.)
3. Copy the resulting **Client ID** and **Client secret**.
4. Back in Supabase → **Authentication → Providers → Google** → paste them and enable.
5. Under **Authentication → URL Configuration**, set:
   - **Site URL**: `http://localhost:3000` (and your production URL when deploying)
   - **Redirect URLs**: add `http://localhost:3000/auth/callback` and the production equivalent.

---

## 3. Stripe

### 3a. Account + keys

1. https://dashboard.stripe.com → start in **test mode** (toggle top-right).
2. **Developers → API keys**:
   - **Publishable key** → `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`
   - **Secret key** → `STRIPE_SECRET_KEY`

### 3b. Products & prices

In **Product catalog**, create two products:

| Product   | Recurring price (monthly) | Use price ID for                  |
| --------- | -------------------------- | --------------------------------- |
| Vexx Pro  | e.g. R$19/month            | `NEXT_PUBLIC_STRIPE_PRICE_PRO`     |
| Vexx Premium | e.g. R$49/month         | `NEXT_PUBLIC_STRIPE_PRICE_PREMIUM` |

After creating each price, click into it and copy the **price ID** (`price_...`)
— that's the value you put in `.env.local`.

### 3c. Enable the customer portal

**Settings → Billing → Customer portal** → click **Activate** and save.
(You only need the defaults — the `/api/portal` route uses it for upgrades, downgrades and cancellations.)

### 3d. Webhook

#### Local development (Stripe CLI)

```bash
stripe login
stripe listen --forward-to localhost:3000/api/webhooks/stripe
```

The CLI prints a **webhook signing secret** (`whsec_...`). Put it in `.env.local` as `STRIPE_WEBHOOK_SECRET`.

#### Production

**Developers → Webhooks → Add endpoint**:

- URL: `https://your-domain.com/api/webhooks/stripe`
- Events to listen for:
  - `checkout.session.completed`
  - `customer.subscription.created`
  - `customer.subscription.updated`
  - `customer.subscription.deleted`
  - `invoice.paid`
  - `invoice.payment_failed`

Copy the resulting signing secret into `STRIPE_WEBHOOK_SECRET` in your hosting environment.

---

## 4. Run

```bash
npm install
npm run dev
```

Open http://localhost:3000.

### Smoke test

1. Click **Entrar** in the navbar → sign in with Google.
2. You land on `/settings` showing your email and `Plano atual: Grátis`.
3. Open `/pricing` and click **Assinar Pro**.
4. In Stripe Checkout, use card `4242 4242 4242 4242`, any future date, any CVC.
5. Stripe redirects back to `/settings?status=success`.
6. Within ~1 second the webhook fires and the page now shows `Plano atual: Pro`.
7. Click **Gerenciar assinatura** to open the Stripe customer portal.

---

## How it fits together

```
Browser                         Server (Next.js)                   Supabase / Stripe
───────                         ────────────────                   ─────────────────

[/login] ─Google sign-in─▶  /auth/callback ─exchange code─▶  Supabase Auth
                                                              │
                                                   trigger handle_new_user
                                                              ▼
                                                       public.users (free)

[/pricing] "Assinar Pro" ─▶  POST /api/checkout ──▶  Stripe Checkout (creates customer)
                                                              │
                                                              ▼
                                                  user redirected to Stripe
                                                              │
                                                       payment confirmed
                                                              ▼
                                              Stripe → POST /api/webhooks/stripe
                                                              │
                                                  syncSubscription() (admin client)
                                                              ▼
                                            public.subscriptions upserted
                                            public.users.plan = 'pro'

[/settings]  ◀─reads users + subscriptions via RLS── Supabase
```

## Code map

| File                                          | Role                                        |
| --------------------------------------------- | ------------------------------------------- |
| `lib/supabase/client.ts`                      | Browser client (anon key)                   |
| `lib/supabase/server.ts`                      | Server client + admin (service role)        |
| `lib/supabase/middleware.ts`                  | Refreshes session, guards `/settings`       |
| `middleware.ts`                               | Wires the above to every request            |
| `lib/stripe.ts`                               | Lazy Stripe SDK singleton                   |
| `lib/plans.ts`                                | Plan tiers + `hasPlan()` gating helper      |
| `supabase/migrations/0001_init.sql`           | Tables, RLS, triggers                       |
| `app/auth/callback/route.ts`                  | OAuth code exchange                         |
| `app/auth/signout/route.ts`                   | POST to sign out                            |
| `app/login/page.tsx`                          | Google sign-in                              |
| `app/api/checkout/route.ts`                   | Creates Stripe Checkout session             |
| `app/api/portal/route.ts`                     | Opens the customer portal                   |
| `app/api/webhooks/stripe/route.ts`            | Stripe → Supabase sync                      |
| `app/settings/page.tsx` + `SettingsClient.tsx`| Account page, upgrade & logout              |

## Gating premium features

Use the helper anywhere you need to check access:

```ts
import { hasPlan } from "@/lib/plans";

if (hasPlan(user.plan, "pro")) {
  // show pro feature
}
```

In Server Components, fetch `users.plan` from Supabase:

```ts
const supabase = createClient();
const { data: { user } } = await supabase.auth.getUser();
const { data: profile } = await supabase
  .from("users")
  .select("plan")
  .eq("id", user!.id)
  .single();

if (!hasPlan(profile?.plan, "pro")) redirect("/pricing");
```
