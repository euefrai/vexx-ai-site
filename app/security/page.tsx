"use client";

import React from "react";
import { motion } from "framer-motion";
import { Shield, Lock, Eye, Database, Check } from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";

const cards = [
  {
    icon: Lock,
    title: "Arquitetura local-first",
    desc: "Vexx roda inteiramente na sua máquina. Sem processamento em nuvem, sem transmissão para nossos servidores.",
  },
  {
    icon: Shield,
    title: "Controle por permissão",
    desc: "Cada ação requer sua aprovação. Configure zonas seguras e monitore atividades em tempo real.",
  },
  {
    icon: Eye,
    title: "Mascaramento de privacidade",
    desc: "Os modelos de visão podem ser configurados para mascarar senhas, cartões e dados pessoais.",
  },
  {
    icon: Database,
    title: "Armazenamento criptografado",
    desc: "Todos os dados locais — chaves, memória e histórico — são criptografados com AES-256.",
  },
];

const promises = [
  "Nenhum dado sai da sua máquina sem consentimento",
  "Chaves de API são armazenadas localmente, nunca transmitidas",
  "Componentes core open-source para auditoria",
  "Auditorias de segurança regulares",
];

export default function SecurityPage() {
  return (
    <div className="pt-20 pb-24">
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto text-center mb-14"
        >
          <h1 className="h-display mb-5">Segurança em primeiro lugar.</h1>
          <p className="lead">
            Vexx-AI é construído com privacidade e segurança no núcleo.
            Seus dados ficam locais, suas chaves são suas.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto mb-16">
          {cards.map((c, i) => (
            <GlassCard key={c.title} delay={i * 0.06}>
              <div className="w-10 h-10 rounded-xl bg-accent-soft flex items-center justify-center mb-4">
                <c.icon size={18} className="text-accent" />
              </div>
              <h3 className="h-card mb-2">{c.title}</h3>
              <p className="text-sm text-ink-muted leading-relaxed">{c.desc}</p>
            </GlassCard>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <div className="card p-8 md:p-10">
            <h2 className="h-section mb-6 text-center">Nossa promessa</h2>
            <ul className="space-y-4">
              {promises.map((p) => (
                <li key={p} className="flex items-start gap-3">
                  <Check size={16} className="text-accent mt-0.5 flex-shrink-0" strokeWidth={2.5} />
                  <span className="text-sm text-ink leading-relaxed">{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
