"use client";

import React from "react";
import { motion } from "framer-motion";
import { Download, Check, Monitor, Apple, Layout, KeyRound, Shield, Rocket, Terminal } from "lucide-react";
import Button from "@/components/ui/Button";
import GlassCard from "@/components/ui/GlassCard";

const INSTALLER_HREF = "/downloads/Vexx-AI-Setup.exe";
const INSTALLER_VERSION = "v1.0.0 Beta";

const platforms = [
  { name: "Windows", desc: "Windows 10 e 11 (64-bit)", icon: Monitor, available: true, cta: "Baixar .exe" },
  { name: "macOS", desc: "Em desenvolvimento", icon: Apple, available: false, cta: "Avise-me" },
  { name: "Linux", desc: "Lista de espera", icon: Layout, available: false, cta: "Lista de espera" },
];

const steps = [
  { n: 1, icon: Download, title: "Baixar e instalar", desc: "Baixe o instalador e execute. No Windows, clique em \"Mais informações\" → \"Executar mesmo assim\" se aparecer um aviso de SmartScreen." },
  { n: 2, icon: KeyRound, title: "Conectar sua IA", desc: "Insira sua chave da OpenAI ou Anthropic, ou aponte para sua instância local do Ollama." },
  { n: 3, icon: Shield, title: "Conceder permissões", desc: "Autorize o Vexx a controlar mouse, teclado e ler a tela. Pause ou interrompa a qualquer momento." },
  { n: 4, icon: Rocket, title: "Comece a automatizar", desc: "Abra o Centro de Comando e dê sua primeira tarefa. Veja o Vexx pensar e executar." },
];

export default function DownloadPage() {
  return (
    <div className="pt-20 pb-24">
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto text-center mb-14"
        >
          <span className="pill mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            {INSTALLER_VERSION}
          </span>
          <h1 className="h-display mb-5">Baixe o Vexx.</h1>
          <p className="lead">
            Instale e dê um cérebro ao seu computador. Disponível para Windows.
            macOS e Linux estão a caminho.
          </p>
        </motion.div>

        {/* Plataformas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-4xl mx-auto mb-16">
          {platforms.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className={`card p-6 ${p.available ? "border-ink shadow-card" : ""}`}
            >
              <div className="flex items-start justify-between mb-5">
                <div className="w-11 h-11 rounded-xl bg-accent-soft flex items-center justify-center">
                  <p.icon size={20} className="text-accent" />
                </div>
                <span className={`text-[10px] font-semibold uppercase tracking-wider ${p.available ? "text-accent" : "text-ink-subtle"}`}>
                  {p.available ? "Disponível" : "Em breve"}
                </span>
              </div>
              <h3 className="h-card mb-1">{p.name}</h3>
              <p className="text-sm text-ink-muted mb-5">{p.desc}</p>
              {p.available ? (
                <a href={INSTALLER_HREF} download>
                  <Button variant="primary" className="w-full">
                    <Download size={14} />
                    {p.cta}
                  </Button>
                </a>
              ) : (
                <Button variant="secondary" className="w-full" disabled>
                  {p.cta}
                </Button>
              )}
            </motion.div>
          ))}
        </div>

        {/* Nota */}
        <div className="max-w-2xl mx-auto mb-20">
          <div className="card p-6 text-center">
            <p className="text-sm text-ink-muted leading-relaxed">
              <span className="text-ink font-medium">O Vexx roda 100% local.</span>{" "}
              Você conecta sua própria IA — OpenAI, Anthropic ou Ollama —
              e mantém o controle dos seus dados.
            </p>
          </div>
        </div>

        {/* Passos */}
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="h-section mb-3">Como instalar</h2>
            <p className="text-body">Quatro passos. Cinco minutos.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              {steps.map((s) => (
                <motion.div
                  key={s.n}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: s.n * 0.05 }}
                  className="flex gap-4"
                >
                  <div className="w-9 h-9 rounded-full bg-ink text-white flex items-center justify-center flex-shrink-0 text-sm font-semibold">
                    {s.n}
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-ink mb-1.5 flex items-center gap-2">
                      <s.icon size={14} className="text-accent" />
                      {s.title}
                    </h4>
                    <p className="text-sm text-ink-muted leading-relaxed">{s.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <GlassCard className="space-y-6 sticky top-24">
                <h4 className="text-base font-semibold text-ink flex items-center gap-2">
                  <Terminal size={16} className="text-accent" />
                  Requisitos do sistema
                </h4>
                <ul className="space-y-3">
                  {[
                    "8 GB de RAM (16 GB recomendado)",
                    "Windows 10 ou 11 (64-bit)",
                    "2 GB de espaço em disco",
                    "Internet ativa (para modelos em nuvem)",
                    "Chave de API ou Ollama local",
                  ].map((req) => (
                    <li key={req} className="flex items-start gap-2.5 text-sm text-ink">
                      <Check size={14} className="text-accent mt-0.5 flex-shrink-0" strokeWidth={2.5} />
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-5 border-t border-line">
                  <p className="eyebrow mb-3">Diferenciais</p>
                  <div className="flex flex-wrap gap-2">
                    {["100% local", "Suas APIs", "Open Beta", "Sem telemetria"].map((tag) => (
                      <span key={tag} className="pill">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <a href={INSTALLER_HREF} download className="block">
                  <Button variant="primary" className="w-full">
                    <Download size={14} />
                    Baixar agora
                  </Button>
                </a>
              </GlassCard>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
