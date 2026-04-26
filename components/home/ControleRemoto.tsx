"use client";

import React from "react";
import { motion } from "framer-motion";
import { Wifi, Shield, Eye, MousePointer2, Smartphone } from "lucide-react";

const features = [
  { icon: Wifi, text: "Acesso remoto seguro" },
  { icon: Eye, text: "Streaming em tempo real" },
  { icon: MousePointer2, text: "Mouse e teclado virtuais" },
  { icon: Shield, text: "Conexão criptografada" },
];

export default function ControleRemoto() {
  return (
    <section className="section border-t border-line">
      <div className="container-page">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="h-section mb-4">Controle seu PC pelo celular.</h2>
            <p className="text-body mb-8">
              Acesse seu computador de qualquer lugar. O Vexx Bridge transforma
              seu celular em um controle remoto com streaming de baixa latência.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {features.map((feature, i) => (
                <motion.div
                  key={feature.text}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-8 h-8 rounded-lg bg-accent-soft flex items-center justify-center flex-shrink-0">
                    <feature.icon size={14} className="text-accent" />
                  </div>
                  <span className="text-sm text-ink">{feature.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex justify-center"
          >
            <div className="relative w-[260px] h-[520px] bg-ink rounded-[2.5rem] p-2 shadow-elevated">
              <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-5 bg-ink rounded-full z-20" />
              <div className="w-full h-full bg-background rounded-[2rem] overflow-hidden relative flex flex-col">
                <div className="px-5 pt-10 pb-4 border-b border-line">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-ink">Vexx Bridge</span>
                    <div className="flex items-center gap-1.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                      <span className="text-[10px] text-accent font-medium">Conectado</span>
                    </div>
                  </div>
                </div>

                <div className="px-4 py-4 flex-1 flex flex-col gap-3">
                  <div className="aspect-[4/3] rounded-xl bg-white border border-line p-3">
                    <div className="grid grid-cols-3 gap-1.5 mb-2">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="aspect-square rounded bg-line" />
                      ))}
                    </div>
                    <div className="h-12 rounded bg-accent-soft border border-accent/20" />
                  </div>

                  <div className="flex-1 rounded-xl bg-white border border-line flex items-center justify-center">
                    <span className="text-xs text-ink-subtle">Área de toque</span>
                  </div>

                  <div className="flex justify-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-white border border-line flex items-center justify-center">
                      <MousePointer2 size={14} className="text-ink-muted" />
                    </div>
                    <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                      <Smartphone size={14} className="text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
