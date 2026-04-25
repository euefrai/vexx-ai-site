"use client";

import React from "react";
import GlassCard from "@/components/ui/GlassCard";
import { Cpu, Zap, Shield, Smartphone, Brain, Eye } from "lucide-react";

const features = [
  {
    icon: <Cpu className="text-accent-cyan" />,
    title: "Full Control",
    description: "Vexx-AI can move your mouse, type on your keyboard, and interact with any application.",
  },
  {
    icon: <Brain className="text-accent-purple" />,
    title: "Autonomous Agents",
    description: "Run multi-step workflows. Set a goal, and watch Vexx plan and execute the entire process.",
  },
  {
    icon: <Smartphone className="text-accent-green" />,
    title: "Remote Bridge",
    description: "Control your desktop from your phone with zero latency. Secure, fast, and always connected.",
  },
  {
    icon: <Eye className="text-accent-amber" />,
    title: "Screen Awareness",
    description: "Built-in OCR and visual analysis. Vexx understands what's on your screen in real-time.",
  },
  {
    icon: <Zap className="text-accent-red" />,
    title: "Multi-Model AI",
    description: "Plug in OpenAI, Anthropic, or run Ollama locally for 100% private execution.",
  },
  {
    icon: <Shield className="text-white" />,
    title: "Safe Execution",
    description: "Permission-based architecture. Nothing happens on your computer without your consent.",
  },
];

export default function FeaturesGrid() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Built for the future of work.</h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            Everything you need to automate your digital life, packed into a single, elegant interface.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <GlassCard key={idx} className="group">
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
              <p className="text-white/40 text-sm leading-relaxed">
                {feature.description}
              </p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
