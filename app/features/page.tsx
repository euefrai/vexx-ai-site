"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  MessageSquare,
  Bot,
  Smartphone,
  Database,
  Eye,
  Layers,
  Terminal,
  Search,
  MousePointer2,
  Lock,
} from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";

const mainFeatures = [
  {
    title: "Centro de Comando",
    description: "Interface principal de chat onde você interage com o Vexx. Suporta formatação rica, blocos de código e respostas em streaming.",
    icon: MessageSquare,
    details: ["Comandos em linguagem natural", "Chat com contexto", "Execução de código", "Suporte multimodal"],
  },
  {
    title: "Agentes Autônomos",
    description: "Agentes especializados que rodam em segundo plano para completar tarefas longas sem supervisão.",
    icon: Bot,
    details: ["Auto-correção", "Decomposição de tarefas", "Execução paralela", "Memória persistente"],
  },
  {
    title: "Controle Remoto",
    description: "Controle seu PC de qualquer celular via Vexx Bridge. Streaming de tela com baixa latência.",
    icon: Smartphone,
    details: ["Touchpad virtual", "Túnel seguro", "Gestos de toque", "Wake-on-LAN"],
  },
  {
    title: "Visão de Tela",
    description: "Vexx vê literalmente o que você vê. Usa modelos de visão para entender elementos UI, texto e ícones em tempo real.",
    icon: Eye,
    details: ["OCR", "Detecção de UI", "Raciocínio visual", "Mascaramento de privacidade"],
  },
  {
    title: "Kanban de Projetos",
    description: "Gerencie suas tarefas e outputs gerados pela IA em um quadro estilo Notion integrado ao dashboard.",
    icon: Layers,
    details: ["Auto-categorização", "Criação por IA", "Gestão de assets", "Visão de timeline"],
  },
  {
    title: "Memória de Longo Prazo",
    description: "Vexx lembra suas preferências, tarefas passadas e localização de arquivos entre sessões.",
    icon: Database,
    details: ["Banco vetorial", "Local-first", "Foco em privacidade", "Recuperação de contexto"],
  },
];

const secondary = [
  { icon: Terminal, title: "CLI integrado", desc: "Execute shell commands com segurança" },
  { icon: Search, title: "Busca universal", desc: "Encontre qualquer coisa no PC" },
  { icon: MousePointer2, title: "Controle preciso", desc: "Cliques pixel-perfect" },
  { icon: Lock, title: "Privacidade local", desc: "Seus dados não saem da máquina" },
];

export default function FeaturesPage() {
  return (
    <div className="pt-20 pb-24">
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto text-center mb-14"
        >
          <h1 className="h-display mb-5">Recursos.</h1>
          <p className="lead">
            Mais que um chatbot. O Vexx é um companheiro de sistema operacional
            projetado para máxima produtividade e segurança.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {mainFeatures.map((feature, idx) => (
            <GlassCard key={feature.title} className="h-full flex flex-col" delay={idx * 0.05}>
              <div className="w-10 h-10 rounded-xl bg-accent-soft flex items-center justify-center mb-5">
                <feature.icon size={18} className="text-accent" />
              </div>
              <h3 className="h-card mb-2">{feature.title}</h3>
              <p className="text-sm text-ink-muted leading-relaxed mb-5 flex-grow">
                {feature.description}
              </p>
              <div className="space-y-2 pt-4 border-t border-line">
                {feature.details.map((detail) => (
                  <div key={detail} className="flex items-center gap-2 text-xs text-ink-subtle">
                    <div className="w-1 h-1 rounded-full bg-line-strong" />
                    {detail}
                  </div>
                ))}
              </div>
            </GlassCard>
          ))}
        </div>

        <div className="mt-24 pt-16 border-t border-line">
          <div className="text-center mb-12">
            <h2 className="h-section mb-4">Por trás dos panos.</h2>
            <p className="text-body max-w-xl mx-auto">
              Recursos avançados que dão poder ao Vexx.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {secondary.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="text-center"
              >
                <div className="w-10 h-10 rounded-xl bg-white border border-line flex items-center justify-center mx-auto mb-3">
                  <item.icon size={16} className="text-ink-muted" />
                </div>
                <h4 className="text-sm font-semibold text-ink mb-1">{item.title}</h4>
                <p className="text-xs text-ink-muted">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
