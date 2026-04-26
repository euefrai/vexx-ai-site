"use client";

import React from "react";
import { motion } from "framer-motion";
import { Smartphone, Wifi, Zap, Download } from "lucide-react";
import Button from "@/components/ui/Button";
import GlassCard from "@/components/ui/GlassCard";

const features = [
  {
    icon: Smartphone,
    title: "Touchpad virtual",
    desc: "Seu celular vira um trackpad de precisão. Suporte total a gestos, pinça e clique direito.",
  },
  {
    icon: Wifi,
    title: "Túnel seguro",
    desc: "Conexão criptografada end-to-end. Seus dados nunca saem do túnel entre celular e PC.",
  },
  {
    icon: Zap,
    title: "Baixa latência",
    desc: "Streaming otimizado entrega 60 fps com latência abaixo de 50ms. Parece estar no PC.",
  },
];

export default function RemotePage() {
  return (
    <div className="pt-20 pb-24">
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto text-center mb-14"
        >
          <h1 className="h-display mb-5">Controle remoto.</h1>
          <p className="lead">
            Controle seu desktop de qualquer celular. Streaming de baixa latência
            e alta frequência com o Vexx Bridge.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto mb-20">
          <div className="space-y-4">
            {features.map((f, i) => (
              <GlassCard key={f.title} delay={i * 0.06}>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-accent-soft flex items-center justify-center flex-shrink-0">
                    <f.icon size={18} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="h-card mb-1">{f.title}</h3>
                    <p className="text-sm text-ink-muted leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex justify-center"
          >
            <div className="w-60 h-[480px] bg-ink rounded-[2.5rem] border-4 border-ink p-2 shadow-elevated">
              <div className="w-full h-full bg-background rounded-[2rem] flex items-center justify-center">
                <div className="text-center">
                  <div className="w-14 h-14 rounded-2xl bg-accent-soft mx-auto mb-4 flex items-center justify-center">
                    <Smartphone size={24} className="text-accent" />
                  </div>
                  <p className="text-sm font-medium text-ink">Vexx Bridge</p>
                  <p className="text-xs text-accent mt-1">Conectado</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <div className="card p-10 text-center">
            <h2 className="h-section mb-3">Baixe o app móvel</h2>
            <p className="text-body mb-6 max-w-md mx-auto">
              Disponível para iOS e Android. Requer Vexx Beta Pro.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Button variant="primary" className="w-full sm:w-auto">
                <Download size={14} />
                iOS App Store
              </Button>
              <Button variant="secondary" className="w-full sm:w-auto">
                <Download size={14} />
                Google Play
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
