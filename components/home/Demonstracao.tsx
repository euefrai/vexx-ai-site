"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Folder, FileText, CheckCircle2, Sparkles } from "lucide-react";

const steps = [
  { id: 1, text: "Analisando arquivos desorganizados...", progress: 20 },
  { id: 2, text: "Categorizando por tipo e data...", progress: 45 },
  { id: 3, text: "Criando estrutura de pastas...", progress: 70 },
  { id: 4, text: "Movendo arquivos...", progress: 90 },
  { id: 5, text: "Organização concluída!", progress: 100 },
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
    }, 1500);

    return () => clearInterval(interval);
  }, [isPlaying]);

  const handlePlay = () => {
    setCurrentStep(0);
    setIsPlaying(true);
  };

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
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-white">Veja em ação.</span>
          </h2>
          <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto">
            Um exemplo real: organizando a área de trabalho em segundos.
          </p>
        </motion.div>

        {/* Demo container */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="glass-card glow-pulse p-2">
            <div className="bg-black/60 rounded-xl overflow-hidden">
              {/* Demo header */}
              <div className="px-6 py-4 bg-white/5 border-b border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Sparkles className="w-5 h-5 text-accent-cyan" />
                  <span className="font-medium text-white">"Organize minha área de trabalho"</span>
                </div>
                <button
                  onClick={handlePlay}
                  disabled={isPlaying}
                  className="px-4 py-2 rounded-full bg-accent-cyan/20 text-accent-cyan text-sm font-medium hover:bg-accent-cyan/30 transition-colors disabled:opacity-50"
                >
                  {isPlaying ? "Executando..." : "▶ Reproduzir"}
                </button>
              </div>

              {/* Demo content */}
              <div className="p-8 min-h-[300px] grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Left: File visualization */}
                <div className="relative">
                  <h4 className="text-sm font-medium text-zinc-500 mb-4">Área de Trabalho</h4>
                  <div className="grid grid-cols-3 gap-3">
                    <AnimatePresence>
                      {[1, 2, 3, 4, 5, 6].map((i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 1, scale: 1 }}
                          animate={{
                            opacity: currentStep >= 4 ? 0.3 : 1,
                            scale: currentStep >= 4 ? 0.9 : 1,
                            x: currentStep >= 4 ? 20 : 0,
                          }}
                          className="flex flex-col items-center gap-2 p-3 rounded-lg bg-white/5"
                        >
                          <FileText className="w-8 h-8 text-zinc-400" />
                          <span className="text-xs text-zinc-500">Arquivo_{i}.pdf</span>
                        </motion.div>
                      ))}
                    </AnimatePresence>
                  </div>

                  {/* New folders appearing */}
                  <AnimatePresence>
                    {currentStep >= 3 && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="absolute bottom-0 left-0 right-0 grid grid-cols-2 gap-3"
                      >
                        {["PDFs", "Imagens"].map((folder, i) => (
                          <motion.div
                            key={folder}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.2 }}
                            className="flex flex-col items-center gap-2 p-3 rounded-lg bg-accent-cyan/10 border border-accent-cyan/20"
                          >
                            <Folder className="w-8 h-8 text-accent-cyan" />
                            <span className="text-xs text-accent-cyan">{folder}</span>
                          </motion.div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Right: Progress steps */}
                <div>
                  <h4 className="text-sm font-medium text-zinc-500 mb-4">Progresso</h4>
                  <div className="space-y-4">
                    {steps.map((step, index) => (
                      <motion.div
                        key={step.id}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{
                          opacity: index <= currentStep ? 1 : 0.3,
                          x: 0,
                        }}
                        className="flex items-center gap-3"
                      >
                        <div
                          className={`w-6 h-6 rounded-full flex items-center justify-center ${
                            index < currentStep
                              ? "bg-accent-green text-black"
                              : index === currentStep
                              ? "bg-accent-cyan text-black"
                              : "bg-white/10 text-zinc-500"
                          }`}
                        >
                          {index < currentStep ? (
                            <CheckCircle2 className="w-4 h-4" />
                          ) : (
                            <span className="text-xs">{step.id}</span>
                          )}
                        </div>
                        <div className="flex-1">
                          <p
                            className={`text-sm ${
                              index <= currentStep ? "text-white" : "text-zinc-600"
                            }`}
                          >
                            {step.text}
                          </p>
                          {index === currentStep && isPlaying && (
                            <div className="mt-2 h-1 bg-white/10 rounded-full overflow-hidden">
                              <motion.div
                                className="h-full bg-gradient-to-r from-accent-cyan to-accent-green"
                                initial={{ width: 0 }}
                                animate={{ width: `${step.progress}%` }}
                                transition={{ duration: 1.5, ease: "easeOut" }}
                              />
                            </div>
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Success message */}
                  <AnimatePresence>
                    {currentStep >= 4 && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-6 p-4 rounded-xl bg-accent-green/10 border border-accent-green/20"
                      >
                        <p className="text-sm text-accent-green flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4" />
                          12 arquivos organizados em 2 pastas
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
