"use client";

import React from "react";
import { motion } from "framer-motion";
import GlassCard from "@/components/ui/GlassCard";
import { Cpu, Zap, Shield, Smartphone, Brain, Eye, Database, Lock } from "lucide-react";

const features = [
  {
    icon: <Cpu className="text-accent-cyan" />,
    title: "Full System Control",
    description: "Vexx moves your mouse, types on your keyboard, and interacts with any application on your computer.",
    detail: "Pixel-perfect control over your entire desktop",
  },
  {
    icon: <Brain className="text-accent-purple" />,
    title: "Autonomous Agents",
    description: "Set a goal and watch Vexx plan and execute multi-step workflows without constant supervision.",
    detail: "Self-correcting, task-aware AI agents",
  },
  {
    icon: <Smartphone className="text-accent-green" />,
    title: "Remote From Phone",
    description: "Control your desktop from anywhere using your phone. Low latency, high frame-rate streaming.",
    detail: "Virtual touchpad with gesture support",
  },
  {
    icon: <Eye className="text-accent-amber" />,
    title: "Screen Awareness",
    description: "Built-in OCR and visual analysis. Vexx understands UI elements, text, and icons in real-time.",
    detail: "Vision models that see what you see",
  },
  {
    icon: <Database className="text-white" />,
    title: "Long-term Memory",
    description: "Vexx remembers your preferences, past tasks, and file locations across sessions.",
    detail: "Local vector database for context retention",
  },
  {
    icon: <Shield className="text-accent-red" />,
    title: "Permission-Based Safety",
    description: "Nothing happens without your consent. Configure safe zones and approval requirements.",
    detail: "You're always in control",
  },
];

export default function FeaturesGrid() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-cyan/[0.02] to-transparent pointer-events-none" />
      
      <div className="container-page relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="h-section mb-6">
            Built for the <span className="gradient-text">future of work.</span>
          </h2>
          <p className="lead max-w-3xl mx-auto">
            Everything you need to automate your digital life, packed into a single, elegant interface.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, idx) => (
            <GlassCard key={idx} className="group h-full" delay={idx * 0.1}>
              <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-white/10 transition-all duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-3 text-white">{feature.title}</h3>
              <p className="text-body text-zinc-400 leading-relaxed mb-4">
                {feature.description}
              </p>
              <p className="text-sm text-zinc-500 font-medium">
                {feature.detail}
              </p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
