"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Link from "next/link";

const plans = [
  {
    name: "Grátis",
    price: "R$0",
    period: "para sempre",
    description: "Perfeito para começar.",
    features: [
      "Use suas próprias APIs",
      "Acesso básico ao Vexx",
      "1 agente simultâneo",
      "Suporte da comunidade",
    ],
    cta: "Baixar grátis",
    highlight: false,
  },
  {
    name: "Beta Pro",
    price: "R$19",
    period: "por mês",
    description: "Para quem quer mais poder.",
    features: [
      "Tudo do plano Grátis",
      "Automações avançadas",
      "Múltiplos agentes",
      "Acesso antecipado",
      "Suporte prioritário",
      "Controle remoto mobile",
    ],
    cta: "Virar Pro",
    highlight: true,
  },
];

export default function Precos() {
  return (
    <section className="section border-t border-line bg-[#FCFBF8]">
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto text-center mb-14"
        >
          <h2 className="h-section mb-4">Preço simples. Comece grátis.</h2>
          <p className="text-body">
            Escolha o plano que funciona para você. Sem taxas escondidas.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-3xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`card p-7 md:p-8 relative ${
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
                <h3 className="text-base font-semibold text-ink mb-1">{plan.name}</h3>
                <p className="text-sm text-ink-muted">{plan.description}</p>
              </div>

              <div className="mb-6 flex items-baseline gap-1.5">
                <span className="text-4xl font-semibold tracking-tight text-ink">
                  {plan.price}
                </span>
                <span className="text-sm text-ink-subtle">/ {plan.period}</span>
              </div>

              <ul className="space-y-3 mb-7">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2.5 text-sm text-ink"
                  >
                    <Check
                      size={14}
                      className="text-accent mt-0.5 flex-shrink-0"
                      strokeWidth={2.5}
                    />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Link href="/download" className="block">
                <button
                  className={`btn ${
                    plan.highlight ? "btn-primary" : "btn-secondary"
                  } btn-md w-full`}
                >
                  {plan.cta}
                </button>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mt-10 max-w-xl mx-auto text-xs text-ink-subtle leading-relaxed"
        >
          Você usa suas próprias APIs (OpenAI, Anthropic, etc.) e paga
          diretamente a elas. Nossa taxa cobre apenas o desenvolvimento.
        </motion.p>
      </div>
    </section>
  );
}
