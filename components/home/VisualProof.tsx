"use client";

import React from "react";
import { motion } from "framer-motion";
import { Bot, MousePointer, Terminal, CheckCircle2 } from "lucide-react";

const actions = [
  { icon: MousePointer, text: "Movendo mouse para (1240, 680)", time: "0.2s" },
  { icon: Terminal, text: "Executando: criar_pasta('Projetos')", time: "0.5s" },
  { icon: Bot, text: "Analisando conteúdo da tela...", time: "1.2s" },
  { icon: CheckCircle2, text: "Tarefa concluída com sucesso", time: "0.1s" },
];

export default function VisualProof() {
  return (
    <section className="section-pad relative overflow-hidden">
      <div className="container-page">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-white">Não é um chatbot.</span>
            <br />
            <span className="gradient-text">É um operador.</span>
          </h2>
          <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto">
            Enquanto outros IAs apenas conversam, o Vexx realmente faz. 
            Ele clica, digita, navega e executa tarefas no seu computador.
          </p>
        </motion.div>

        {/* Visual demonstration */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative max-w-5xl mx-auto"
        >
          {/* Main visual container */}
          <div className="glass-card p-2 glow-pulse">
            <div className="bg-black/60 rounded-xl overflow-hidden">
              {/* Mock desktop header */}
              <div className="px-4 py-2 bg-white/5 border-b border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/60" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                  <div className="w-3 h-3 rounded-full bg-green-500/60" />
                </div>
                <span className="text-xs text-zinc-500">Área de Trabalho — Vexx Agent Ativo</span>
                <div className="w-16" />
              </div>

              {/* Mock desktop content */}
              <div className="p-8 min-h-[400px] relative">
                {/* Desktop icons */}
                <div className="grid grid-cols-4 gap-4 max-w-md">
                  {["Documentos", "Imagens", "Downloads", "Projetos"].map((folder, i) => (
                    <motion.div
                      key={folder}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="flex flex-col items-center gap-2 p-4 rounded-xl hover:bg-white/5 transition-colors"
                    >
                      <div className="w-12 h-12 rounded-lg bg-accent-cyan/20 flex items-center justify-center">
                        <svg className="w-6 h-6 text-accent-cyan" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" />
                        </svg>
                      </div>
                      <span className="text-xs text-zinc-400">{folder}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Floating action log */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  className="absolute right-4 top-4 w-80 glass-card p-4"
                >
                  <div className="flex items-center gap-2 mb-4 pb-3 border-b border-white/10">
                    <div className="w-2 h-2 rounded-full bg-accent-green animate-pulse" />
                    <span className="text-sm font-medium text-white">Vexx em ação</span>
                  </div>
                  <div className="space-y-3">
                    {actions.map((action, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6 + index * 0.2 }}
                        className="flex items-center gap-3 text-sm"
                      >
                        <action.icon className="w-4 h-4 text-accent-cyan flex-shrink-0" />
                        <span className="text-zinc-300 flex-1">{action.text}</span>
                        <span className="text-xs text-zinc-500">{action.time}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Simulated mouse cursor */}
                <motion.div
                  className="absolute pointer-events-none"
                  animate={{
                    x: [200, 400, 600, 400, 200],
                    y: [150, 200, 150, 300, 150],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <svg className="w-6 h-6 text-accent-cyan drop-shadow-[0_0_8px_rgba(0,245,255,0.8)]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M5.5 3.21V20.8c0 .45.54.67.85.35l4.86-4.86a.5.5 0 0 1 .35-.15h6.87a.5.5 0 0 0 .35-.85L6.35 2.85a.5.5 0 0 0-.85.35Z" />
                  </svg>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Decorative glow */}
          <div className="absolute -top-20 -left-20 w-40 h-40 bg-accent-cyan/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-accent-purple/20 rounded-full blur-3xl" />
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto"
        >
          {[
            { value: "50ms", label: "Tempo de resposta" },
            { value: "99.9%", label: "Precisão de clique" },
            { value: "60fps", label: "Streaming remoto" },
            { value: "0", label: "Dados na nuvem" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 + index * 0.1 }}
              className="text-center p-6 glass-card"
            >
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">{stat.value}</div>
              <div className="text-sm text-zinc-500">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
