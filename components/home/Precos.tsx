"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check, Sparkles, Zap } from "lucide-react";
import Link from "next/link";

const plans = [
  {
    name: "Grátis",
    price: "R$0",
    period: "para sempre",
    description: "Perfeito para começar",
    features: [
      "Use suas próprias APIs",
      "Acesso básico ao Vexx",
      "1 agente simultâneo",
      "Suporte da comunidade",
    ],
    cta: "Baixar grátis",
    variant: "outline",
    popular: false,
  },
  {
    name: "Beta Pro",
    price: "R$19",
    period: "por mês",
    description: "Para quem quer mais poder",
    features: [
      "Tudo do plano Grátis",
      "Automações avançadas",
      "Múltiplos agentes",
      "Acesso antecipado",
      "Suporte prioritário",
      "Controle remoto mobile",
    ],
    cta: "Virar Pro",
    variant: "neon",
    popular: true,
  },
];

export default function Precos() {
  return (
    <section className="section-pad relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-purple/5 rounded-full blur-3xl" />
      </div>

      <div className="container-page relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-white">Preço simples.</span>
            <br />
            <span className="gradient-text">Comece grátis.</span>
          </h2>
          <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto">
            Escolha o plano que funciona para você. Sem taxas escondidas, sem complicação.
          </p>
        </motion.div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`relative glass-card p-8 ${
                plan.popular ? "border-accent-cyan/30 bg-accent-cyan/[0.02]" : ""
              }`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-accent-cyan text-black text-xs font-bold">
                    <Sparkles className="w-3.5 h-3.5" />
                    POPULAR
                  </div>
                </div>
              )}

              {/* Plan header */}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-sm text-zinc-500 mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-5xl font-bold gradient-text">{plan.price}</span>
                  <span className="text-zinc-500">/{plan.period}</span>
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center ${
                      plan.popular ? "bg-accent-cyan/20" : "bg-white/10"
                    }`}>
                      <Check className={`w-3 h-3 ${plan.popular ? "text-accent-cyan" : "text-zinc-400"}`} />
                    </div>
                    <span className={`text-sm ${plan.popular ? "text-white" : "text-zinc-400"}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Link href="/download">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full btn-base ${
                    plan.popular ? "btn-neon" : "btn-outline"
                  } py-4 font-semibold`}
                >
                  {plan.popular && <Zap className="w-4 h-4" />}
                  {plan.cta}
                </motion.button>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12 max-w-2xl mx-auto"
        >
          <p className="text-sm text-zinc-500">
            Todos os planos incluem atualizações gratuitas. Você usa suas próprias APIs 
            (OpenAI, Anthropic, etc.) e paga diretamente a elas. Nossa taxa cobre 
            apenas o desenvolvimento do Vexx.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
