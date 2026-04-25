"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Download, Play, Sparkles, Zap, Shield, Cpu } from "lucide-react";
import Link from "next/link";

const terminalLines = [
  { text: "> Analisando tela...", delay: 0.5, color: "text-accent-cyan" },
  { text: "> Identificando elementos UI...", delay: 1.2, color: "text-accent-purple" },
  { text: "> Criando plano de ação...", delay: 2.0, color: "text-accent-green" },
  { text: "> Executando: organizar_arquivos()", delay: 2.8, color: "text-accent-cyan" },
  { text: "> ✓ Tarefa concluída", delay: 3.5, color: "text-accent-green" },
];

const features = [
  { icon: Shield, text: "100% local" },
  { icon: Cpu, text: "Controle total" },
  { icon: Zap, text: "Funciona com sua API" },
];

export default function HeroNovo() {
  const [visibleLines, setVisibleLines] = useState<number[]>([]);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    terminalLines.forEach((line, index) => {
      setTimeout(() => {
        setVisibleLines((prev) => [...prev, index]);
      }, line.delay * 1000);
    });

    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] orb orb-cyan float-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] orb orb-purple float-medium" />
        <div className="absolute top-1/2 right-1/3 w-[400px] h-[400px] orb orb-green float-y" />
      </div>

      {/* Scanline effect */}
      <div className="absolute inset-0 scanline pointer-events-none" />

      <div className="container-page relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8"
            >
              <Sparkles className="w-4 h-4 text-accent-cyan" />
              <span className="text-sm font-medium text-zinc-300">IA que controla seu computador</span>
            </motion.div>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6">
              <span className="text-white">Seu computador</span>
              <br />
              <span className="gradient-text">pensa, age e executa</span>
              <br />
              <span className="text-white">por você.</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-zinc-400 leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
              O Vexx é uma IA que controla seu computador em tempo real. 
              Ele vê sua tela, entende o contexto e executa tarefas automaticamente.
            </p>

            {/* Feature pills */}
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start mb-10">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.text}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10"
                >
                  <feature.icon className="w-4 h-4 text-accent-cyan" />
                  <span className="text-sm text-zinc-300">{feature.text}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link href="/download">
                <motion.button
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn-base btn-primary px-8 py-4 text-base font-semibold"
                >
                  <Download className="w-5 h-5" />
                  Baixar para Windows
                </motion.button>
              </Link>
              <Link href="/demo">
                <motion.button
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn-base btn-secondary px-8 py-4 text-base font-semibold"
                >
                  <Play className="w-5 h-5" />
                  Ver demonstração
                </motion.button>
              </Link>
            </div>
          </motion.div>

          {/* Right content - Terminal */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            {/* Terminal window */}
            <div className="relative glass-card p-1 glow-pulse">
              <div className="bg-black/80 rounded-xl overflow-hidden">
                {/* Terminal header */}
                <div className="flex items-center gap-2 px-4 py-3 bg-white/5 border-b border-white/10">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>
                  <div className="flex-1 text-center">
                    <span className="text-xs text-zinc-500 font-mono">vexx-agent — bash</span>
                  </div>
                </div>

                {/* Terminal content */}
                <div className="p-6 font-mono text-sm min-h-[280px]">
                  <div className="text-zinc-500 mb-4">
                    <span className="text-accent-green">➜</span> <span className="text-accent-cyan">~</span> vexx start
                  </div>

                  {terminalLines.map((line, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={visibleLines.includes(index) ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.3 }}
                      className={`${line.color} mb-2`}
                    >
                      {line.text}
                    </motion.div>
                  ))}

                  {/* Cursor */}
                  <div className="flex items-center mt-4">
                    <span className="text-accent-green mr-2">➜</span>
                    <span className="text-accent-cyan mr-2">~</span>
                    <span className="text-zinc-400">_</span>
                    <span
                      className={`w-2 h-5 bg-accent-cyan ml-0.5 ${
                        showCursor ? "opacity-100" : "opacity-0"
                      }`}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent-cyan/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent-purple/20 rounded-full blur-2xl" />
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#07070a] to-transparent pointer-events-none" />
    </section>
  );
}
