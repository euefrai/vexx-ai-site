import Stripe from "stripe";

let _stripe: Stripe | null = null;

export function getStripe(): Stripe {
  if (!_stripe) {
    const key = process.env.STRIPE_SECRET_KEY;
    if (!key) {
      throw new Error("STRIPE_SECRET_KEY is not set");
    }
    // Don't pin apiVersion — let the SDK use the default that matches the
    // installed types. Pinning to an older version makes runtime values
    // diverge from the TS types (e.g. v22 moved `current_period_end` onto
    // subscription items).
    _stripe = new Stripe(key, { typescript: true });
  }
  return _stripe;
}
