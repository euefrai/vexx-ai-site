"use client";

import React from "react";
import { motion } from "framer-motion";
import { Brain, Zap, MousePointer2, ArrowRight } from "lucide-react";
import Link from "next/link";

const steps = [
  {
    icon: Brain,
    label: "01 · Pensar",
    title: "Entende o que você quer",
    desc: "Analisa sua solicitação em linguagem natural e compreende o contexto da tela antes de agir.",
  },
  {
    icon: Zap,
    label: "02 · Planejar",
    title: "Cria um plano de ação",
    desc: "Quebra tarefas complexas em passos simples e otimiza a sequência de execução.",
  },
  {
    icon: MousePointer2,
    label: "03 · Executar",
    title: "Controla o computador",
    desc: "Move o mouse, clica, digita e navega exatamente como um humano faria.",
  },
];

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 12 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] as const },
});

export default function ComoFunciona() {
  return (
    <section className="section border-t border-line">
      <div className="container-page">
        <motion.div {...fade()} className="max-w-2xl mx-auto text-center mb-14">
          <span className="eyebrow mb-4">Como funciona</span>
          <h2 className="h-section mt-4 mb-4">Pensa, planeja e executa.</h2>
          <p className="text-body">Três passos simples. Resultados reais.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              {...fade(i * 0.06)}
              className="card card-hover p-6 md:p-7"
            >
              <div className="w-10 h-10 rounded-xl bg-accent-soft flex items-center justify-center mb-5">
                <step.icon size={18} className="text-accent" />
              </div>
              <p className="text-xs text-ink-subtle mb-2 font-medium tracking-wider uppercase">
                {step.label}
              </p>
              <h3 className="h-card mb-2">{step.title}</h3>
              <p className="text-sm text-ink-muted leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div {...fade(0.2)} className="text-center mt-10">
          <Link
            href="/how-it-works"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-ink-muted hover:text-ink transition-colors"
          >
            Ver demonstração completa
            <ArrowRight size={14} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
