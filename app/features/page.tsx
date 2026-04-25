"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  MessageSquare, 
  Bot, 
  Zap, 
  Smartphone, 
  Database, 
  Eye, 
  ShieldCheck, 
  Terminal,
  Layers,
  Search,
  MousePointer2,
  Lock
} from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";

const mainFeatures = [
  {
    title: "Command Center",
    description: "The primary chat interface where you interact with Vexx. Supports rich formatting, code blocks, and streaming responses.",
    icon: <MessageSquare className="text-accent-cyan" />,
    details: ["Natural language commands", "Context-aware chat", "Code execution", "Multi-modal support"]
  },
  {
    title: "Autonomous Agents",
    description: "Specialized agents like YUI and JUH that run in the background to complete long-running tasks without supervision.",
    icon: <Bot className="text-accent-purple" />,
    details: ["Self-correction", "Task decomposition", "Parallel execution", "Memory retention"]
  },
  {
    title: "Remote Control",
    description: "Control your PC from any mobile device via the Vexx Bridge. Low latency, high frame-rate screen sharing.",
    icon: <Smartphone className="text-accent-green" />,
    details: ["Virtual touchpad", "Secure tunnel", "Touch gestures", "Wake-on-LAN"]
  },
  {
    title: "Screen Awareness",
    description: "Vexx literally sees what you see. Uses vision models to understand UI elements, text, and icons in real-time.",
    icon: <Eye className="text-accent-amber" />,
    details: ["OCR engine", "UI element detection", "Visual reasoning", "Privacy masking"]
  },
  {
    title: "Project Kanban",
    description: "Manage your tasks and AI-generated outputs in a clean, Notion-style board integrated into the dashboard.",
    icon: <Layers className="text-accent-red" />,
    details: ["Auto-categorization", "AI task creation", "Asset management", "Timeline view"]
  },
  {
    title: "Long-term Memory",
    description: "Vexx remembers your preferences, past tasks, and specific file locations across sessions.",
    icon: <Database className="text-white" />,
    details: ["Vector database", "Local-first storage", "Privacy-focused", "Context retrieval"]
  }
];

export default function FeaturesPage() {
  return (
    <div className="pt-32 pb-20">
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16 md:mb-24"
        >
          <h1 className="h-display mb-8">Capabilities.</h1>
          <p className="lead max-w-3xl mx-auto">
            More than just a chatbot. Vexx-AI is a full-featured operating system 
            companion designed for maximum productivity and safety.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {mainFeatures.map((feature, idx) => (
            <GlassCard key={idx} className="p-8 h-full flex flex-col" delay={idx * 0.1}>
              <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-4">{feature.title}</h3>
              <p className="text-body text-zinc-400 leading-relaxed mb-6 flex-grow">
                {feature.description}
              </p>
              <div className="space-y-3 pt-6 border-t border-white/5">
                {feature.details.map((detail, dIdx) => (
                  <div key={dIdx} className="flex items-center gap-3 text-sm text-zinc-500">
                    <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
                    {detail}
                  </div>
                ))}
              </div>
            </GlassCard>
          ))}
        </div>

        {/* Secondary Features list */}
        <div className="mt-24 md:mt-32 pt-24 md:pt-32 border-t border-white/5">
           <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
           >
              <h2 className="h-section mb-6">Under the hood.</h2>
              <p className="lead max-w-2xl mx-auto">
                Advanced features that power the Vexx experience.
              </p>
           </motion.div>
           <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
              <motion.div
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: 0.1 }}
                 className="text-center"
              >
                 <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mx-auto mb-4">
                    <Terminal className="text-zinc-400" size={20} />
                 </div>
                 <h4 className="font-bold mb-2">CLI Integration</h4>
                 <p className="text-sm text-zinc-500">Execute shell commands safely</p>
              </motion.div>
              <motion.div
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: 0.2 }}
                 className="text-center"
              >
                 <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mx-auto mb-4">
                    <Search className="text-zinc-400" size={20} />
                 </div>
                 <h4 className="font-bold mb-2">Omni-Search</h4>
                 <p className="text-sm text-zinc-500">Find anything on your PC instantly</p>
              </motion.div>
              <motion.div
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: 0.3 }}
                 className="text-center"
              >
                 <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mx-auto mb-4">
                    <MousePointer2 className="text-zinc-400" size={20} />
                 </div>
                 <h4 className="font-bold mb-2">Precision Control</h4>
                 <p className="text-sm text-zinc-500">Pixel-perfect click accuracy</p>
              </motion.div>
              <motion.div
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: 0.4 }}
                 className="text-center"
              >
                 <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mx-auto mb-4">
                    <Lock className="text-zinc-400" size={20} />
                 </div>
                 <h4 className="font-bold mb-2">Local Privacy</h4>
                 <p className="text-sm text-zinc-500">Your data never leaves your machine</p>
              </motion.div>
           </div>
        </div>
      </div>
    </div>
  );
}
