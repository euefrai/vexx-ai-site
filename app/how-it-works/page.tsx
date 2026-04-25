"use client";

import React from "react";
import { motion } from "framer-motion";
import { MessageSquare, Brain, MousePointer, CheckCircle2, ArrowRight, Eye, Zap } from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";

const steps = [
  {
    icon: <MessageSquare className="text-accent-cyan" />,
    title: "Your Intent",
    description: "You provide a natural language command. For example: 'Find the latest sales report in my emails and summarize it in a Notion page.'",
    color: "cyan",
    example: "Open Chrome and summarize this page",
  },
  {
    icon: <Brain className="text-accent-purple" />,
    title: "AI Planning",
    description: "Vexx-AI breaks your request into logical sub-tasks. It decides which tools to use and how to navigate your system safely.",
    color: "purple",
    example: "Plan: Open browser → Navigate → Extract → Summarize",
  },
  {
    icon: <MousePointer className="text-accent-green" />,
    title: "Execution",
    description: "The agent takes control. It opens the browser, navigates to Gmail, finds the file, and then switches to Notion to write.",
    color: "green",
    example: "Clicking, typing, and navigating automatically",
  },
  {
    icon: <CheckCircle2 className="text-accent-amber" />,
    title: "Result & Feedback",
    description: "Vexx presents the result and waits for your approval or further instructions. You are always in control.",
    color: "amber",
    example: "Task complete. Ready for next instruction.",
  },
];

export default function HowItWorks() {
  return (
    <div className="pt-32 pb-20">
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto text-center mb-16 md:mb-24"
        >
          <h1 className="h-display mb-8">How it <span className="gradient-text">Works.</span></h1>
          <p className="lead max-w-3xl mx-auto">
            The bridge between your ideas and your computer. Vexx-AI uses a sophisticated 
            reasoning-loop to transform high-level goals into low-level computer actions.
          </p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto mb-16 md:mb-24">
          {/* Vertical Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2 hidden md:block" />

          <div className="space-y-16 md:space-y-24 relative">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className={`flex flex-col ${idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} items-center gap-12 md:gap-24`}
              >
                <div className="flex-1 w-full">
                  <GlassCard className="p-8 md:p-10 group relative overflow-hidden">
                    <div className={`absolute top-0 left-0 w-1 h-full bg-accent-${step.color}`} />
                    <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      {step.icon}
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">{step.title}</h3>
                    <p className="text-body text-zinc-400 leading-relaxed mb-4">
                      {step.description}
                    </p>
                    <div className="mt-6 pt-6 border-t border-white/5">
                      <p className="text-sm text-zinc-500 italic">"{step.example}"</p>
                    </div>
                  </GlassCard>
                </div>

                <div className="hidden md:flex flex-shrink-0 w-12 h-12 rounded-full bg-black border-4 border-white/10 z-10 items-center justify-center">
                   <div className={`w-3 h-3 rounded-full bg-accent-${step.color} shadow-[0_0_15px_rgba(0,0,0,0.5)] animate-pulse`} />
                </div>

                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Pipeline Diagram */}
        <section className="py-24 bg-white/[0.02] rounded-[3rem] border border-white/5 p-12 overflow-hidden relative">
          <div className="absolute top-0 left-0 w-full h-full bg-glow-mesh opacity-30 pointer-events-none" />
          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="h-section mb-6">The Autonomous Loop</h2>
              <p className="lead max-w-2xl mx-auto">
                Vexx operates in a continuous loop: see, think, act. This allows it to handle dynamic environments like web browsers and changing app states.
              </p>
            </motion.div>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8">
               <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="w-48 h-48 md:w-56 md:h-56 rounded-full border border-white/10 flex flex-col items-center justify-center gap-3 p-6 text-center glass-card"
               >
                  <Eye className="text-zinc-400" size={24} />
                  <span className="text-xs font-bold text-zinc-300 uppercase tracking-widest">Sensing</span>
                  <p className="text-xs text-zinc-500">Visual Analysis & OCR</p>
               </motion.div>
               
               <ArrowRight className="text-white/20 rotate-90 md:rotate-0" size={24} />
               
               <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="w-48 h-48 md:w-56 md:h-56 rounded-full border border-accent-cyan/30 bg-accent-cyan/[0.05] flex flex-col items-center justify-center gap-3 p-6 text-center glass-card"
               >
                  <Brain className="text-accent-cyan" size={24} />
                  <span className="text-xs font-bold text-accent-cyan uppercase tracking-widest">Thinking</span>
                  <p className="text-xs text-zinc-400">LLM Reasoning</p>
               </motion.div>
               
               <ArrowRight className="text-white/20 rotate-90 md:rotate-0" size={24} />
               
               <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="w-48 h-48 md:w-56 md:h-56 rounded-full border border-white/10 flex flex-col items-center justify-center gap-3 p-6 text-center glass-card"
               >
                  <Zap className="text-zinc-400" size={24} />
                  <span className="text-xs font-bold text-zinc-300 uppercase tracking-widest">Acting</span>
                  <p className="text-xs text-zinc-500">Mouse & Keyboard</p>
               </motion.div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
