"use client";

import React from "react";
import { motion } from "framer-motion";
import { Smartphone, Wifi, Shield, Eye, MousePointer2 } from "lucide-react";

const features = [
  { icon: Wifi, text: "Acesso remoto seguro" },
  { icon: Eye, text: "Streaming da tela em tempo real" },
  { icon: MousePointer2, text: "Controle total do mouse e teclado" },
  { icon: Shield, text: "Conexão criptografada end-to-end" },
];

export default function ControleRemoto() {
  return (
    <section className="section-pad relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-accent-purple/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
      </div>

      <div className="container-page relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-white">Controle seu PC</span>
              <br />
              <span className="gradient-text">pelo celular.</span>
            </h2>
            <p className="text-lg md:text-xl text-zinc-400 mb-8 leading-relaxed">
              Acesse seu computador de qualquer lugar. Com o Vexx Bridge, 
              seu celular se torna um controle remoto poderoso com streaming 
              em tempo real e latência ultra-baixa.
            </p>

            {/* Feature list */}
            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.text}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10"
                >
                  <feature.icon className="w-5 h-5 text-accent-cyan flex-shrink-0" />
                  <span className="text-sm text-zinc-300">{feature.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Phone mockup */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center"
          >
            {/* Phone frame */}
            <div className="relative w-[280px] h-[560px] bg-black rounded-[3rem] p-3 phone-shadow">
              {/* Phone notch */}
              <div className="absolute top-6 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-full z-20" />

              {/* Screen content */}
              <div className="w-full h-full bg-gradient-to-b from-[#0a0a12] to-[#07070a] rounded-[2.5rem] overflow-hidden relative">
                {/* App header */}
                <div className="px-6 pt-12 pb-4 bg-white/5">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-white">Vexx Bridge</span>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-accent-green animate-pulse" />
                      <span className="text-xs text-accent-green">Conectado</span>
                    </div>
                  </div>
                </div>

                {/* Screen preview */}
                <div className="px-4 py-4">
                  <div className="aspect-[4/3] rounded-xl bg-white/5 border border-white/10 overflow-hidden relative">
                    {/* Simulated desktop view */}
                    <div className="absolute inset-0 p-3">
                      <div className="grid grid-cols-3 gap-2">
                        {[1, 2, 3].map((i) => (
                          <div key={i} className="aspect-square rounded bg-white/10" />
                        ))}
                      </div>
                      <div className="mt-3 h-20 rounded bg-accent-cyan/10 border border-accent-cyan/20" />
                    </div>

                    {/* Simulated cursor */}
                    <motion.div
                      className="absolute"
                      animate={{
                        x: [40, 120, 80, 160, 40],
                        y: [30, 60, 100, 40, 30],
                      }}
                      transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      <svg className="w-5 h-5 text-accent-cyan" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M5.5 3.21V20.8c0 .45.54.67.85.35l4.86-4.86a.5.5 0 0 1 .35-.15h6.87a.5.5 0 0 0 .35-.85L6.35 2.85a.5.5 0 0 0-.85.35Z" />
                      </svg>
                    </motion.div>
                  </div>
                </div>

                {/* Touchpad area */}
                <div className="px-4 py-2">
                  <div className="h-32 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                    <span className="text-xs text-zinc-500">Área de toque</span>
                  </div>
                </div>

                {/* Controls */}
                <div className="px-4 py-2 flex justify-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                    <MousePointer2 className="w-5 h-5 text-zinc-400" />
                  </div>
                  <div className="w-12 h-12 rounded-full bg-accent-cyan/20 flex items-center justify-center">
                    <Smartphone className="w-5 h-5 text-accent-cyan" />
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-accent-cyan/20 rounded-full blur-2xl" />
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-accent-purple/20 rounded-full blur-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
