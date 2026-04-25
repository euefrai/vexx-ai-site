"use client";

import React from "react";
import { motion } from "framer-motion";
import { Shield, Lock, Eye, Cpu, CheckCircle2 } from "lucide-react";

const features = [
  {
    icon: Lock,
    title: "Execução 100% local",
    description: "Todo processamento acontece no seu computador. Seus dados nunca saem da sua máquina.",
  },
  {
    icon: Eye,
    title: "Aprovação de ações",
    description: "Você decide quais ações o Vexx pode executar. Controle total sobre o que é feito.",
  },
  {
    icon: Cpu,
    title: "Suas APIs, seus dados",
    description: "Use suas próprias chaves de API. Nós não temos acesso às suas credenciais.",
  },
];

export default function Seguranca() {
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
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-green/10 border border-accent-green/20 mb-8"
          >
            <Shield className="w-4 h-4 text-accent-green" />
            <span className="text-sm font-medium text-accent-green">Segurança em primeiro lugar</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-white">Você no</span>
            <br />
            <span className="gradient-text">controle total.</span>
          </h2>
          <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto">
            Sua privacidade é nossa prioridade. O Vexx foi projetado para ser 
            totalmente local e seguro desde o primeiro dia.
          </p>
        </motion.div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="glass-card card-glow p-8 text-center group hover:translate-y-[-8px] transition-transform duration-300"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent-cyan/20 to-accent-purple/20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <feature.icon className="w-8 h-8 text-accent-cyan" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-zinc-400 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 flex flex-wrap justify-center gap-6"
        >
          {[
            "Código aberto",
            "Sem telemetria",
            "Sem dados na nuvem",
            "Criptografia AES-256",
          ].map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 + index * 0.1 }}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10"
            >
              <CheckCircle2 className="w-4 h-4 text-accent-green" />
              <span className="text-sm text-zinc-300">{item}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
