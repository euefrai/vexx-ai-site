"use client";

import React from "react";
import { motion } from "framer-motion";
import { MessageSquare, Brain, MousePointer, Check, ArrowRight, Eye, Zap } from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";

const steps = [
  {
    icon: MessageSquare,
    title: "Sua intenção",
    description: "Você dá um comando em linguagem natural. Por exemplo: 'Encontre o relatório de vendas no email e resuma em uma página do Notion.'",
    example: "Abra o Chrome e resuma esta página",
  },
  {
    icon: Brain,
    title: "Planejamento da IA",
    description: "O Vexx quebra sua solicitação em sub-tarefas lógicas. Decide quais ferramentas usar e como navegar com segurança.",
    example: "Plano: Abrir browser → Navegar → Extrair → Resumir",
  },
  {
    icon: MousePointer,
    title: "Execução",
    description: "O agente assume o controle. Abre o browser, navega até o Gmail, encontra o arquivo e troca para o Notion para escrever.",
    example: "Clicando, digitando e navegando automaticamente",
  },
  {
    icon: Check,
    title: "Resultado e feedback",
    description: "O Vexx apresenta o resultado e aguarda sua aprovação ou novas instruções. Você sempre tem o controle.",
    example: "Tarefa concluída. Pronto para nova instrução.",
  },
];

const loop = [
  { icon: Eye, label: "Sentir", desc: "Análise visual e OCR" },
  { icon: Brain, label: "Pensar", desc: "Raciocínio com LLM" },
  { icon: Zap, label: "Agir", desc: "Mouse e teclado" },
];

export default function HowItWorks() {
  return (
    <div className="pt-20 pb-24">
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto text-center mb-14"
        >
          <h1 className="h-display mb-5">Como funciona.</h1>
          <p className="lead">
            A ponte entre suas ideias e seu computador. O Vexx usa um loop
            de raciocínio para transformar objetivos em ações.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-5 mb-20">
          {steps.map((step, idx) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
            >
              <GlassCard className="flex gap-5">
                <div className="w-10 h-10 rounded-xl bg-accent-soft flex items-center justify-center flex-shrink-0">
                  <step.icon size={18} className="text-accent" />
                </div>
                <div className="flex-1">
                  <p className="eyebrow mb-1">Passo {idx + 1}</p>
                  <h3 className="h-card mb-2">{step.title}</h3>
                  <p className="text-sm text-ink-muted leading-relaxed mb-3">
                    {step.description}
                  </p>
                  <p className="text-xs text-ink-subtle italic">
                    "{step.example}"
                  </p>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* Loop diagram */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="h-section mb-3">O loop autônomo</h2>
            <p className="text-body max-w-xl mx-auto">
              Vexx opera em ciclo contínuo: ver, pensar, agir.
            </p>
          </motion.div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            {loop.map((item, idx) => (
              <React.Fragment key={item.label}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className="card p-6 text-center w-full md:w-44"
                >
                  <div className="w-10 h-10 rounded-xl bg-accent-soft flex items-center justify-center mx-auto mb-3">
                    <item.icon size={18} className="text-accent" />
                  </div>
                  <p className="text-sm font-semibold text-ink mb-1">{item.label}</p>
                  <p className="text-xs text-ink-muted">{item.desc}</p>
                </motion.div>
                {idx < loop.length - 1 && (
                  <ArrowRight className="text-ink-subtle rotate-90 md:rotate-0 flex-shrink-0" size={16} />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
