"use client";

import React from "react";
import { motion } from "framer-motion";
import { Brain, Zap, MousePointer2, ArrowRight } from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";

const cards = [
  {
    icon: <Brain className="text-accent-cyan" />,
    title: "Think",
    description: "Vexx understands your intent. It reads your natural language command and breaks down what you actually want to accomplish.",
    color: "cyan",
  },
  {
    icon: <Zap className="text-accent-purple" />,
    title: "Plan",
    description: "The AI agent creates a step-by-step execution plan. It decides which tools to use and how to navigate your system safely.",
    color: "purple",
  },
  {
    icon: <MousePointer2 className="text-accent-green" />,
    title: "Act",
    description: "Vexx takes control. It moves your mouse, types on your keyboard, and executes the plan on your actual computer.",
    color: "green",
  },
];

export default function WhatIsVexx() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-purple/[0.03] to-transparent pointer-events-none" />
      
      <div className="container-page relative z-10">
        <div className="text-center mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="h-section mb-6">
              Not a chatbot. <span className="gradient-text">An AI operator.</span>
            </h2>
            <p className="lead max-w-3xl mx-auto">
              Vexx isn't here to answer questions — it's here to get work done. 
              It sees your screen, understands context, and takes action on your behalf.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
            >
              <GlassCard className="h-full p-8 md:p-10 group relative overflow-hidden">
                {/* Gradient accent */}
                <div className={`absolute top-0 left-0 w-1 h-full bg-accent-${card.color} opacity-60 group-hover:opacity-100 transition-opacity`} />
                
                <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-white/10 transition-all duration-300">
                  {card.icon}
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">{card.title}</h3>
                <p className="text-body text-zinc-400 leading-relaxed">
                  {card.description}
                </p>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-zinc-500 text-sm mb-6">
            Example: "Open Chrome, go to Gmail, find the latest sales report, and summarize it in Notion"
          </p>
          <div className="flex items-center justify-center gap-2 text-accent-cyan text-sm font-medium">
            <span className="flex items-center gap-2">
              <Brain className="w-4 h-4" />
              Understand
            </span>
            <ArrowRight className="w-4 h-4" />
            <span className="flex items-center gap-2">
              <Zap className="w-4 h-4" />
              Plan
            </span>
            <ArrowRight className="w-4 h-4" />
            <span className="flex items-center gap-2">
              <MousePointer2 className="w-4 h-4" />
              Execute
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
