"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Activity, Cpu, HardDrive, Bot, Send } from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";
import Button from "@/components/ui/Button";

export default function DemoPage() {
  const [cpuUsage, setCpuUsage] = useState(24);
  const [ramUsage, setRamUsage] = useState(42);
  const [streamingText, setStreamingText] = useState("");
  const [isDemoRunning, setIsDemoRunning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCpuUsage(Math.floor(Math.random() * 30) + 10);
      setRamUsage(Math.floor(Math.random() * 10) + 40);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const runDemo = () => {
    setIsDemoRunning(true);
    setStreamingText("");
    const text =
      "Procurando arquivos relevantes… 3 documentos encontrados. Extraindo insights e gerando resumo no seu workspace.";
    let i = 0;
    const typing = setInterval(() => {
      if (i < text.length) {
        setStreamingText((prev) => prev + text.charAt(i));
        i++;
      } else {
        clearInterval(typing);
        setIsDemoRunning(false);
      }
    }, 30);
  };

  return (
    <div className="pt-20 pb-24">
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto text-center mb-12"
        >
          <h1 className="h-display mb-4">Experiência interativa.</h1>
          <p className="lead">
            Explore a interface do Vexx e veja a IA em ação.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto space-y-6">
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { icon: Cpu, label: "CPU", value: `${cpuUsage}%` },
              { icon: Activity, label: "Memória", value: `${ramUsage}%` },
              { icon: HardDrive, label: "Disco", value: "1.2 TB" },
            ].map((stat) => (
              <GlassCard key={stat.label} className="p-5 flex items-center gap-4" hoverEffect={false}>
                <div className="w-10 h-10 rounded-xl bg-accent-soft flex items-center justify-center">
                  <stat.icon size={18} className="text-accent" />
                </div>
                <div>
                  <p className="eyebrow">{stat.label}</p>
                  <p className="text-xl font-semibold text-ink">{stat.value}</p>
                </div>
              </GlassCard>
            ))}
          </div>

          {/* Chat */}
          <div className="card overflow-hidden">
            <div className="p-5 border-b border-line flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-ink text-white flex items-center justify-center">
                <Bot size={16} />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-ink">Vexx Assistant</h3>
                <p className="text-xs text-ink-subtle">Processo ativo · Pronto</p>
              </div>
            </div>

            <div className="p-6 md:p-8 space-y-5 min-h-[280px]">
              <div className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-full bg-ink text-white flex items-center justify-center text-xs font-semibold flex-shrink-0">
                  V
                </div>
                <div className="bg-background border border-line rounded-2xl rounded-tl-sm px-4 py-3 max-w-xl">
                  <p className="text-sm text-ink">
                    Bem-vindo de volta. Tenho 4 automações pendentes e 12 notificações.
                  </p>
                </div>
              </div>

              {streamingText && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-7 h-7 rounded-full bg-accent text-white flex items-center justify-center text-xs font-semibold flex-shrink-0">
                    V
                  </div>
                  <div className="bg-accent-soft border border-accent/15 rounded-2xl rounded-tl-sm px-4 py-3 max-w-xl">
                    <p className="text-sm text-ink">{streamingText}</p>
                  </div>
                </motion.div>
              )}
            </div>

            <div className="p-4 border-t border-line">
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  placeholder="Peça algo ao Vexx…"
                  className="input flex-1"
                />
                <Button
                  variant="primary"
                  onClick={runDemo}
                  disabled={isDemoRunning}
                >
                  <Send size={14} />
                  {isDemoRunning ? "Trabalhando…" : "Executar"}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
