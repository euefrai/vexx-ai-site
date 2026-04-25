"use client";

import React from "react";
import { motion } from "framer-motion";
import { Download, Terminal, CheckCircle2, Monitor, Apple, Layout, Clock, Sparkles, Shield, Cpu, KeyRound, Rocket } from "lucide-react";
import Button from "@/components/ui/Button";
import GlassCard from "@/components/ui/GlassCard";

const INSTALLER_HREF = "/downloads/Vexx-AI-Setup.exe";
const INSTALLER_VERSION = "v1.0.0 Beta";

export default function DownloadPage() {
  return (
    <div className="pt-32 pb-24 relative overflow-hidden">
      {/* Orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] orb orb-cyan float-slow opacity-40" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] orb orb-purple float-medium opacity-40" />
      </div>

      <div className="container-page relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto text-center mb-16 md:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-cyan/10 border border-accent-cyan/20 mb-8">
            <Sparkles className="w-4 h-4 text-accent-cyan" />
            <span className="text-sm font-medium text-accent-cyan">{INSTALLER_VERSION} · Instalador oficial</span>
          </div>
          <h1 className="h-display mb-6">
            Baixe o <span className="gradient-text">Vexx</span>.
          </h1>
          <p className="lead max-w-2xl mx-auto">
            Instale e dê um cérebro ao seu computador. Disponível agora para Windows.
            macOS e Linux estão a caminho.
          </p>
        </motion.div>

        {/* Plataformas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-20">
          {/* Windows - Principal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <GlassCard className="p-8 border-accent-cyan/30 bg-accent-cyan/[0.04] relative overflow-hidden glow-pulse">
              <div className="absolute top-4 right-4">
                <span className="px-3 py-1 rounded-full bg-accent-green/15 border border-accent-green/30 text-[10px] font-bold text-accent-green uppercase tracking-wider">
                  Disponível
                </span>
              </div>
              <div className="w-16 h-16 rounded-2xl bg-accent-cyan/15 border border-accent-cyan/20 flex items-center justify-center mb-6">
                <Monitor className="text-accent-cyan" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-2">Windows</h3>
              <p className="text-zinc-400 text-sm mb-6">{INSTALLER_VERSION} · Windows 10 e 11 (64-bit)</p>
              <a href={INSTALLER_HREF} download>
                <Button variant="primary" className="w-full">
                  <Download size={18} />
                  Baixar .exe
                </Button>
              </a>
            </GlassCard>
          </motion.div>

          {/* macOS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <GlassCard className="p-8 opacity-70 relative">
              <div className="absolute top-4 right-4">
                <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold text-zinc-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Clock size={10} /> Em breve
                </span>
              </div>
              <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-6">
                <Apple className="text-zinc-500" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-zinc-400">macOS</h3>
              <p className="text-zinc-500 text-sm mb-6">Em desenvolvimento</p>
              <Button variant="outline" className="w-full" disabled>Avise-me</Button>
            </GlassCard>
          </motion.div>

          {/* Linux */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <GlassCard className="p-8 opacity-70 relative">
              <div className="absolute top-4 right-4">
                <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold text-zinc-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Clock size={10} /> Em breve
                </span>
              </div>
              <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-6">
                <Layout className="text-zinc-500" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-zinc-400">Linux</h3>
              <p className="text-zinc-500 text-sm mb-6">Entre na lista de espera</p>
              <Button variant="outline" className="w-full" disabled>Lista de espera</Button>
            </GlassCard>
          </motion.div>
        </div>

        {/* Caixa de explicação */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="max-w-3xl mx-auto mb-20"
        >
          <div className="glass rounded-2xl p-8 text-center">
            <p className="text-body text-zinc-300 leading-relaxed">
              <span className="text-accent-cyan font-semibold">O Vexx roda 100% local</span> na sua máquina.
              Você conecta sua própria IA — OpenAI, Anthropic ou Ollama rodando no seu PC.
              Você mantém o controle dos seus dados.
            </p>
          </div>
        </motion.div>

        {/* Passos de instalação */}
        <div className="max-w-5xl mx-auto">
          <h2 className="h-section mb-4 text-center">Como instalar</h2>
          <p className="text-center text-zinc-500 mb-12">Quatro passos. Cinco minutos.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-8">
              {[
                { n: 1, color: "cyan", icon: Download, title: "Baixar e instalar", desc: "Baixe o instalador e execute. Como estamos em Beta, o Windows pode mostrar um aviso do SmartScreen — clique em \"Mais informações\" e \"Executar mesmo assim\"." },
                { n: 2, color: "purple", icon: KeyRound, title: "Conectar sua IA", desc: "Insira sua chave de API da OpenAI ou Anthropic, ou aponte o Vexx para sua instância local do Ollama para execução 100% privada." },
                { n: 3, color: "green", icon: Shield, title: "Conceder permissões", desc: "Autorize o Vexx a controlar mouse, teclado e ler a tela. Você sempre tem o poder de pausar ou interromper qualquer ação." },
                { n: 4, color: "amber", icon: Rocket, title: "Comece a automatizar", desc: "Abra o Centro de Comando e dê sua primeira tarefa. Veja o Vexx pensar, planejar e executar em tempo real." },
              ].map((s) => (
                <motion.div
                  key={s.n}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: s.n * 0.1 }}
                  className="flex gap-5"
                >
                  <div className={`w-12 h-12 rounded-2xl bg-accent-${s.color}/10 flex items-center justify-center flex-shrink-0 font-bold text-accent-${s.color} border border-accent-${s.color}/20`}>
                    {s.n}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2 flex items-center gap-2">
                      <s.icon size={18} className={`text-accent-${s.color}`} />
                      {s.title}
                    </h4>
                    <p className="text-body text-zinc-400">{s.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <GlassCard className="p-8 space-y-6 sticky top-32">
                <h4 className="text-xl font-bold flex items-center gap-3">
                  <Terminal size={20} className="text-accent-cyan" />
                  Requisitos do sistema
                </h4>
                <ul className="space-y-4">
                  {[
                    "8 GB de RAM (16 GB recomendado)",
                    "Windows 10 ou 11 (64-bit)",
                    "2 GB de espaço em disco",
                    "Internet ativa (para modelos em nuvem)",
                    "Chave de API OpenAI/Anthropic ou Ollama local",
                  ].map((req) => (
                    <li key={req} className="flex items-center gap-3 text-sm text-zinc-300">
                      <CheckCircle2 size={18} className="text-accent-green flex-shrink-0" />
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-6 border-t border-white/10">
                  <p className="text-xs text-zinc-500 mb-3 uppercase tracking-wider font-semibold">Diferenciais</p>
                  <div className="flex flex-wrap gap-2">
                    {["100% local", "Suas APIs", "Open Beta", "Sem telemetria"].map((tag) => (
                      <span key={tag} className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-zinc-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <a href={INSTALLER_HREF} download className="block">
                  <Button variant="neon" className="w-full glow-pulse">
                    <Download size={16} />
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
