"use client";

import React from "react";
import { motion } from "framer-motion";
import { Brain, Zap, MousePointer2, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: Brain,
    title: "Pensar",
    subtitle: "Entende o que você quer fazer",
    description: "A IA analisa sua solicitação em linguagem natural, identifica objetivos e compreende o contexto do seu computador.",
    color: "from-accent-purple to-accent-cyan",
    delay: 0.1,
  },
  {
    icon: Zap,
    title: "Planejar",
    subtitle: "Cria um plano automaticamente",
    description: "Quebra tarefas complexas em ações simples, escolhe as ferramentas certas e otimiza a sequência de execução.",
    color: "from-accent-cyan to-accent-green",
    delay: 0.2,
  },
  {
    icon: MousePointer2,
    title: "Executar",
    subtitle: "Controla o computador por você",
    description: "Move o mouse, clica em botões, digita texto e navega por aplicativos exatamente como um humano faria.",
    color: "from-accent-green to-accent-amber",
    delay: 0.3,
  },
];

export default function ComoFunciona() {
  return (
    <section className="section-pad relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent-cyan/5 rounded-full blur-3xl" />
      </div>

      <div className="container-page relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-white">Como funciona</span>
            <span className="gradient-text">.</span>
          </h2>
          <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto">
            Três passos simples. Resultados extraordinários.
          </p>
        </motion.div>

        {/* Steps grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: step.delay }}
              className="relative"
            >
              {/* Card */}
              <div className="glass-card card-glow p-8 h-full group hover:translate-y-[-8px] transition-transform duration-300">
                {/* Step number */}
                <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center text-sm font-bold text-white border border-white/10">
                  0{index + 1}
                </div>

                {/* Icon */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} p-[1px] mb-6`}>
                  <div className="w-full h-full rounded-2xl bg-black/80 flex items-center justify-center">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-white mb-2">{step.title}</h3>
                <p className="text-accent-cyan font-medium mb-4">{step.subtitle}</p>
                <p className="text-zinc-400 leading-relaxed">{step.description}</p>

                {/* Arrow for non-last items */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform translate-x-full z-10">
                    <ArrowRight className="w-6 h-6 text-zinc-600" />
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16"
        >
          <p className="text-zinc-500 mb-4">Pronto para experimentar?</p>
          <a
            href="/how-it-works"
            className="inline-flex items-center gap-2 text-accent-cyan hover:text-white transition-colors font-medium"
          >
            Ver demonstração completa
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
