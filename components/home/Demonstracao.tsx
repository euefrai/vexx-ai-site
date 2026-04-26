"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Folder, FileText, Check, Play } from "lucide-react";

const steps = [
  { id: 1, text: "Analisando arquivos…" },
  { id: 2, text: "Categorizando por tipo e data…" },
  { id: 3, text: "Criando estrutura de pastas…" },
  { id: 4, text: "Movendo arquivos…" },
  { id: 5, text: "Concluído." },
];

export default function Demonstracao() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setCurrentStep((prev) => {
        if (prev >= steps.length - 1) {
          setIsPlaying(false);
          return prev;
        }
        return prev + 1;
      });
    }, 1100);
    return () => clearInterval(interval);
  }, [isPlaying]);

  const handlePlay = () => {
    setCurrentStep(0);
    setIsPlaying(true);
  };

  return (
    <section className="section border-t border-line bg-[#FCFBF8]">
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto text-center mb-12"
        >
          <h2 className="h-section mb-4">Veja em ação.</h2>
          <p className="text-body">
            Um exemplo real: organizando a área de trabalho em segundos.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-3xl mx-auto"
        >
          <div className="card overflow-hidden shadow-card">
            <div className="px-5 py-3 border-b border-line bg-white flex items-center justify-between">
              <span className="text-sm font-medium text-ink">
                "Organize minha área de trabalho"
              </span>
              <button
                onClick={handlePlay}
                disabled={isPlaying}
                className="btn btn-secondary btn-sm disabled:opacity-50"
              >
                <Play size={12} />
                {isPlaying ? "Executando…" : "Reproduzir"}
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 md:p-8 min-h-[280px]">
              {/* Files */}
              <div className="relative">
                <h4 className="eyebrow mb-4">Área de Trabalho</h4>
                <div className="grid grid-cols-3 gap-2">
                  {[1, 2, 3, 4, 5, 6].map((i) => (
                    <motion.div
                      key={i}
                      animate={{
                        opacity: currentStep >= 4 ? 0.35 : 1,
                        scale: currentStep >= 4 ? 0.95 : 1,
                      }}
                      transition={{ duration: 0.3 }}
                      className="flex flex-col items-center gap-1.5 p-3 rounded-lg bg-background border border-line"
                    >
                      <FileText size={20} className="text-ink-muted" />
                      <span className="text-[10px] text-ink-subtle">file_{i}</span>
                    </motion.div>
                  ))}
                </div>

                <AnimatePresence>
                  {currentStep >= 3 && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-4 grid grid-cols-2 gap-2"
                    >
                      {["PDFs", "Imagens"].map((folder) => (
                        <div
                          key={folder}
                          className="flex flex-col items-center gap-1.5 p-3 rounded-lg bg-accent-soft border border-accent/20"
                        >
                          <Folder size={20} className="text-accent" />
                          <span className="text-[10px] text-accent font-medium">
                            {folder}
                          </span>
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Steps */}
              <div>
                <h4 className="eyebrow mb-4">Progresso</h4>
                <div className="space-y-3">
                  {steps.map((step, i) => (
                    <motion.div
                      key={step.id}
                      animate={{ opacity: i <= currentStep ? 1 : 0.4 }}
                      transition={{ duration: 0.3 }}
                      className="flex items-center gap-3"
                    >
                      <div
                        className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${
                          i < currentStep
                            ? "bg-ink text-white"
                            : i === currentStep
                            ? "bg-accent text-white"
                            : "bg-line text-ink-subtle"
                        }`}
                      >
                        {i < currentStep ? (
                          <Check size={11} strokeWidth={3} />
                        ) : (
                          <span className="text-[10px] font-semibold">
                            {step.id}
                          </span>
                        )}
                      </div>
                      <span
                        className={`text-sm ${
                          i <= currentStep ? "text-ink" : "text-ink-subtle"
                        }`}
                      >
                        {step.text}
                      </span>
                    </motion.div>
                  ))}
                </div>

                <AnimatePresence>
                  {currentStep >= 4 && (
                    <motion.div
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-5 p-3 rounded-lg bg-accent-soft border border-accent/20 text-sm text-accent flex items-center gap-2"
                    >
                      <Check size={14} />
                      12 arquivos organizados em 2 pastas
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
