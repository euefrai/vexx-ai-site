"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Button from "@/components/ui/Button";
import { createClient, isSupabaseConfigured } from "@/lib/supabase/client";
import type { Plan } from "@/lib/plans";

interface PlanCard {
  id: Plan;
  name: string;
  description: string;
  priceMonthly: string;
  priceYearly: string;
  features: string[];
  highlight: boolean;
}

const PLANS: PlanCard[] = [
  {
    id: "free",
    name: "Community",
    description: "Perfeito para indivíduos.",
    priceMonthly: "R$0",
    priceYearly: "R$0",
    features: [
      "Controle básico do computador",
      "Agente único",
      "Suporte a LLMs locais (Ollama)",
      "Suporte da comunidade",
    ],
    highlight: false,
  },
  {
    id: "pro",
    name: "Pro",
    description: "Para uso profissional diário.",
    priceMonthly: "R$19",
    priceYearly: "R$15",
    features: [
      "Tudo do Community",
      "Sistema multi-agente",
      "Vexx Bridge (controle remoto)",
      "Memória de longo prazo",
      "Suporte prioritário",
    ],
    highlight: true,
  },
  {
    id: "premium",
    name: "Premium",
    description: "Time inteiro, recursos avançados.",
    priceMonthly: "R$49",
    priceYearly: "R$39",
    features: [
      "Tudo do Pro",
      "Agentes ilimitados",
      "Sincronização criptografada",
      "Integrações avançadas",
      "Suporte dedicado",
    ],
    highlight: false,
  },
];

export default function PricingPage() {
  const router = useRouter();
  const [isYearly, setIsYearly] = useState(false);
  const [authed, setAuthed] = useState<boolean | null>(null);
  const [busy, setBusy] = useState<Plan | null>(null);

  useEffect(() => {
    if (!isSupabaseConfigured()) {
      setAuthed(false);
      return;
    }
    const supabase = createClient();
    supabase.auth.getUser().then(({ data }) => setAuthed(Boolean(data.user)));
  }, []);

  const startCheckout = async (plan: Plan) => {
    if (plan === "free") {
      router.push("/download");
      return;
    }
    if (authed === false) {
      router.push(`/login?next=${encodeURIComponent("/pricing")}`);
      return;
    }
    setBusy(plan);
    const res = await fetch("/api/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ plan }),
    });
    const data = await res.json();
    if (data.url) {
      window.location.href = data.url;
    } else {
      setBusy(null);
      alert(data.error ?? "Erro ao iniciar checkout");
    }
  };

  return (
    <div className="pt-20 pb-24">
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto text-center mb-12"
        >
          <h1 className="h-display mb-5">Preço simples.</h1>
          <p className="lead">
            Escolha o plano que combina com você. Sem taxas escondidas.
          </p>
        </motion.div>

        <div className="flex items-center justify-center gap-3 mb-12">
          <span
            className={`text-sm ${
              !isYearly ? "text-ink font-medium" : "text-ink-subtle"
            }`}
          >
            Mensal
          </span>
          <button
            onClick={() => setIsYearly(!isYearly)}
            className="w-11 h-6 rounded-full bg-line p-0.5 flex items-center transition-colors hover:bg-line-strong"
            aria-label="Alternar período de cobrança"
          >
            <div
              className={`w-5 h-5 rounded-full bg-ink transition-transform ${
                isYearly ? "translate-x-5" : "translate-x-0"
              }`}
            />
          </button>
          <span
            className={`text-sm ${
              isYearly ? "text-ink font-medium" : "text-ink-subtle"
            }`}
          >
            Anual <span className="text-accent">−20%</span>
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {PLANS.map((plan, i) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className={`card p-7 md:p-8 flex flex-col relative ${
                plan.highlight ? "border-ink shadow-elevated" : ""
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-2.5 left-1/2 -translate-x-1/2">
                  <span className="px-2.5 py-0.5 rounded-full bg-ink text-white text-[10px] font-semibold uppercase tracking-wider">
                    Popular
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-base font-semibold text-ink mb-1">
                  {plan.name}
                </h3>
                <p className="text-sm text-ink-muted">{plan.description}</p>
              </div>

              <div className="mb-6 flex items-baseline gap-1.5">
                <span className="text-4xl font-semibold tracking-tight text-ink">
                  {isYearly ? plan.priceYearly : plan.priceMonthly}
                </span>
                <span className="text-sm text-ink-subtle">
                  {plan.id === "free" ? "/ para sempre" : "/ mês"}
                </span>
              </div>

              <ul className="space-y-3 mb-7 flex-grow">
                {plan.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-2.5 text-sm text-ink"
                  >
                    <Check
                      size={14}
                      className="text-accent mt-0.5 flex-shrink-0"
                      strokeWidth={2.5}
                    />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <Button
                variant={plan.highlight ? "primary" : "secondary"}
                className="w-full"
                onClick={() => startCheckout(plan.id)}
                disabled={busy === plan.id}
              >
                {busy === plan.id
                  ? "Redirecionando…"
                  : plan.id === "free"
                  ? "Começar grátis"
                  : authed === false
                  ? `Entrar para assinar ${plan.name}`
                  : `Assinar ${plan.name}`}
              </Button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16 max-w-2xl mx-auto"
        >
          <div className="card p-6">
            <h4 className="text-sm font-semibold text-ink mb-2">
              Sobre o modelo Beta
            </h4>
            <p className="text-sm text-ink-muted leading-relaxed">
              Vexx é local-first: você usa suas próprias chaves de API
              (OpenAI, Anthropic) e paga diretamente por elas. Nossa taxa
              cobre o desenvolvimento do motor de orquestração.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
