"use client";

import React from "react";
import { motion } from "framer-motion";
import { MessageSquare, Brain, MousePointer, CheckCircle2, ArrowDown } from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";

const steps = [
  {
    icon: <MessageSquare className="text-accent-cyan" />,
    title: "Step 1: Intent",
    description: "You provide a natural language command. 'Find the latest sales report in my emails and summarize it in a Notion page.'",
    color: "cyan",
  },
  {
    icon: <Brain className="text-accent-purple" />,
    title: "Step 2: Planning",
    description: "Vexx-AI breaks the request into logical sub-tasks. It decides which tools to use and how to navigate your system.",
    color: "purple",
  },
  {
    icon: <MousePointer className="text-accent-green" />,
    title: "Step 3: Execution",
    description: "The agent takes control. It opens the browser, navigates to Gmail, finds the file, and then switches to Notion to write.",
    color: "green",
  },
  {
    icon: <CheckCircle2 className="text-accent-amber" />,
    title: "Step 4: Feedback",
    description: "Vexx presents the result and waits for your approval or further instructions. You are always in control.",
    color: "amber",
  },
];

export default function HowItWorks() {
  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-24">
          <h1 className="text-5xl md:text-7xl font-bold mb-8">How it <span className="gradient-text">Works.</span></h1>
          <p className="text-white/60 text-xl leading-relaxed">
            The bridge between your ideas and your computer. Vexx-AI uses a sophisticated 
            reasoning-loop to transform high-level goals into low-level computer actions.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2 hidden md:block" />

          <div className="space-y-24 relative">
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
                  <GlassCard className="p-8 group relative overflow-hidden">
                    <div className={`absolute top-0 left-0 w-1 h-full bg-accent-${step.color}`} />
                    <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      {step.icon}
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-white">{step.title}</h3>
                    <p className="text-white/50 text-lg leading-relaxed">
                      {step.description}
                    </p>
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
        <section className="mt-48 py-24 bg-white/[0.02] rounded-[3rem] border border-white/5 p-12 overflow-hidden relative">
          <div className="absolute top-0 left-0 w-full h-full bg-glow-mesh opacity-30 pointer-events-none" />
          <div className="relative z-10 text-center">
            <h2 className="text-3xl font-bold mb-16">The Autonomous Loop</h2>
            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
               <div className="w-48 h-48 rounded-full border border-white/10 flex flex-col items-center justify-center gap-2 p-4 text-center">
                  <span className="text-xs font-bold text-white/30 uppercase tracking-widest">Sensing</span>
                  <p className="text-xs">Visual Analysis & OCR</p>
               </div>
               <ArrowDown className="md:-rotate-90 text-white/20" />
               <div className="w-48 h-48 rounded-full border border-accent-cyan/20 bg-accent-cyan/5 flex flex-col items-center justify-center gap-2 p-4 text-center">
                  <span className="text-xs font-bold text-accent-cyan uppercase tracking-widest">Thinking</span>
                  <p className="text-xs">Large Language Model reasoning</p>
               </div>
               <ArrowDown className="md:-rotate-90 text-white/20" />
               <div className="w-48 h-48 rounded-full border border-white/10 flex flex-col items-center justify-center gap-2 p-4 text-center">
                  <span className="text-xs font-bold text-white/30 uppercase tracking-widest">Acting</span>
                  <p className="text-xs">Mouse & Keyboard Control</p>
               </div>
            </div>
            <p className="mt-16 text-white/40 max-w-2xl mx-auto italic">
              "Vexx operates in a continuous loop: see, think, act. This allows it to handle dynamic environments like web browsers and changing app states."
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
