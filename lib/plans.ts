export type Plan = "free" | "pro" | "premium";

export const PLAN_RANK: Record<Plan, number> = {
  free: 0,
  pro: 1,
  premium: 2,
};

export function hasPlan(userPlan: Plan | null | undefined, required: Plan): boolean {
  if (!userPlan) return required === "free";
  return PLAN_RANK[userPlan] >= PLAN_RANK[required];
}

export const PLANS = {
  pro: {
    name: "Pro",
    priceEnv: "NEXT_PUBLIC_STRIPE_PRICE_PRO" as const,
  },
  premium: {
    name: "Premium",
    priceEnv: "NEXT_PUBLIC_STRIPE_PRICE_PREMIUM" as const,
  },
} as const;

export function priceIdFor(plan: Exclude<Plan, "free">): string | undefined {
  return process.env[PLANS[plan].priceEnv];
}
