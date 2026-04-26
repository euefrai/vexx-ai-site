"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Button from "@/components/ui/Button";

export default function PricingPage() {
  const [isYearly, setIsYearly] = useState(false);

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
          <span className={`text-sm ${!isYearly ? "text-ink font-medium" : "text-ink-subtle"}`}>
            Mensal
          </span>
          <button
            onClick={() => setIsYearly(!isYearly)}
            className="w-11 h-6 rounded-full bg-line p-0.5 flex items-center transition-colors hover:bg-line-strong"
          >
            <div
              className={`w-5 h-5 rounded-full bg-ink transition-transform ${
                isYearly ? "translate-x-5" : "translate-x-0"
              }`}
            />
          </button>
          <span className={`text-sm ${isYearly ? "text-ink font-medium" : "text-ink-subtle"}`}>
            Anual <span className="text-accent">−20%</span>
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.05 }}
            className="card p-7 md:p-8 flex flex-col"
          >
            <div className="mb-6">
              <h3 className="text-base font-semibold text-ink mb-1">Community</h3>
              <p className="text-sm text-ink-muted">Perfeito para indivíduos.</p>
            </div>
            <div className="mb-6 flex items-baseline gap-1.5">
              <span className="text-4xl font-semibold tracking-tight text-ink">R$0</span>
              <span className="text-sm text-ink-subtle">/ para sempre</span>
            </div>
            <ul className="space-y-3 mb-7 flex-grow">
              {[
                "Controle básico do computador",
                "Agente único (YUI)",
                "Suporte a LLMs locais (Ollama)",
                "Suporte da comunidade",
              ].map((f) => (
                <li key={f} className="flex items-start gap-2.5 text-sm text-ink">
                  <Check size={14} className="text-accent mt-0.5 flex-shrink-0" strokeWidth={2.5} />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <Button variant="secondary" className="w-full">Começar</Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.12 }}
            className="card p-7 md:p-8 flex flex-col relative border-ink shadow-elevated"
          >
            <div className="absolute -top-2.5 left-1/2 -translate-x-1/2">
              <span className="px-2.5 py-0.5 rounded-full bg-ink text-white text-[10px] font-semibold uppercase tracking-wider">
                Popular
              </span>
            </div>
            <div className="mb-6">
              <h3 className="text-base font-semibold text-ink mb-1">Beta Pro</h3>
              <p className="text-sm text-ink-muted">Todo o poder dos agentes autônomos.</p>
            </div>
            <div className="mb-6 flex items-baseline gap-1.5">
              <span className="text-4xl font-semibold tracking-tight text-ink">
                R${isYearly ? "15" : "19"}
              </span>
              <span className="text-sm text-ink-subtle">/ mês</span>
            </div>
            <ul className="space-y-3 mb-7 flex-grow">
              {[
                "Sistema multi-agente",
                "Vexx Bridge (controle remoto)",
                "Memória de longo prazo ilimitada",
                "Suporte prioritário",
                "Sincronização em nuvem (criptografada)",
              ].map((f) => (
                <li key={f} className="flex items-start gap-2.5 text-sm text-ink">
                  <Check size={14} className="text-accent mt-0.5 flex-shrink-0" strokeWidth={2.5} />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <Button variant="primary" className="w-full">Virar Pro</Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16 max-w-2xl mx-auto"
        >
          <div className="card p-6">
            <h4 className="text-sm font-semibold text-ink mb-2">Sobre o modelo Beta</h4>
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
