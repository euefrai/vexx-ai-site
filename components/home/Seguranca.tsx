"use client";

import React from "react";
import { motion } from "framer-motion";
import { Lock, Eye, KeyRound, Check } from "lucide-react";

const cards = [
  {
    icon: Lock,
    title: "Execução 100% local",
    desc: "Todo processamento acontece no seu computador. Sem nuvem, sem terceiros.",
  },
  {
    icon: Eye,
    title: "Aprovação de ações",
    desc: "Você decide o que o Vexx pode executar. Pause ou interrompa a qualquer momento.",
  },
  {
    icon: KeyRound,
    title: "Suas APIs, seus dados",
    desc: "Use suas próprias chaves OpenAI, Anthropic ou Ollama. Nunca tocamos nelas.",
  },
];

const trust = [
  "Código aberto",
  "Sem telemetria",
  "Sem dados na nuvem",
  "Criptografia AES-256",
  "Auditável",
];

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 12 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] as const },
});

export default function Seguranca() {
  return (
    <section className="section border-t border-line">
      <div className="container-page">
        <motion.div {...fade()} className="max-w-2xl mx-auto text-center mb-12">
          <span className="eyebrow mb-4">Privacidade</span>
          <h2 className="h-section mt-4 mb-4">Você no controle.</h2>
          <p className="text-body">
            Vexx foi projetado para ser totalmente local e seguro desde o primeiro dia.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto mb-10">
          {cards.map((c, i) => (
            <motion.div
              key={c.title}
              {...fade(i * 0.06)}
              className="card card-hover p-6"
            >
              <div className="w-10 h-10 rounded-xl bg-accent-soft flex items-center justify-center mb-5">
                <c.icon size={18} className="text-accent" />
              </div>
              <h3 className="h-card mb-2">{c.title}</h3>
              <p className="text-sm text-ink-muted leading-relaxed">{c.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          {...fade(0.2)}
          className="flex flex-wrap justify-center gap-2 max-w-3xl mx-auto"
        >
          {trust.map((t) => (
            <span key={t} className="pill">
              <Check size={12} className="text-accent" />
              {t}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
