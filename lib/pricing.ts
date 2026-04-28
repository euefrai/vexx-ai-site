export type BillingPeriod = "monthly" | "yearly";
export type PlanTier = "free" | "pro" | "premium";

export const PLAN_RANK: Record<PlanTier, number> = {
  free: 0,
  pro: 1,
  premium: 2,
};

export function hasPlan(userPlan: PlanTier | null | undefined, required: PlanTier): boolean {
  if (!userPlan) return required === "free";
  return PLAN_RANK[userPlan] >= PLAN_RANK[required];
}

export interface PricingPlan {
  id: PlanTier;
  name: string;
  description: string;
  features: string[];
  prices: {
    monthly: {
      amount: string;
      priceIdEnv: string | null;
    };
    yearly: {
      amount: string;
      priceIdEnv: string | null;
    };
  };
  highlight?: boolean;
}

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: "free",
    name: "Community",
    description: "Perfeito para indivíduos e testes.",
    features: [
      "Controle básico do computador",
      "Agente único",
      "Suporte a LLMs locais (Ollama)",
      "Suporte da comunidade",
    ],
    prices: {
      monthly: { amount: "R$0", priceIdEnv: null },
      yearly: { amount: "R$0", priceIdEnv: null },
    },
    highlight: false,
  },
  {
    id: "pro",
    name: "Pro",
    description: "Para uso profissional diário.",
    features: [
      "Tudo do Community",
      "Sistema multi-agente",
      "Vexx Bridge (controle remoto)",
      "Memória de longo prazo",
      "Suporte prioritário",
    ],
    prices: {
      monthly: { amount: "R$19", priceIdEnv: "NEXT_PUBLIC_STRIPE_PRICE_PRO_MONTHLY" },
      yearly: { amount: "R$15", priceIdEnv: "NEXT_PUBLIC_STRIPE_PRICE_PRO_YEARLY" },
    },
    highlight: true,
  },
  {
    id: "premium",
    name: "Premium",
    description: "Time inteiro, recursos avançados.",
    features: [
      "Tudo do Pro",
      "Agentes ilimitados",
      "Sincronização criptografada",
      "Integrações avançadas",
      "Suporte dedicado",
    ],
    prices: {
      monthly: { amount: "R$49", priceIdEnv: "NEXT_PUBLIC_STRIPE_PRICE_PREMIUM_MONTHLY" },
      yearly: { amount: "R$39", priceIdEnv: "NEXT_PUBLIC_STRIPE_PRICE_PREMIUM_YEARLY" },
    },
    highlight: false,
  },
];

export function getPriceId(plan: PlanTier, billing: BillingPeriod): string | undefined {
  if (plan === "free") return undefined;
  const planData = PRICING_PLANS.find((p) => p.id === plan);
  if (!planData) return undefined;
  
  const envVar = planData.prices[billing].priceIdEnv;
  return envVar ? process.env[envVar] : undefined;
}
