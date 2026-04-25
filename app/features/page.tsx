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
    description: "The primary chat interface where you interact with Vexx. It supports rich formatting, code blocks, and streaming responses.",
    icon: <MessageSquare className="text-accent-cyan" />,
    details: ["Natural language commands", "Context-aware chat", "Code execution", "Multi-modal support"]
  },
  {
    title: "Autonomous Agents",
    description: "Specialized agents like YUI and JUH that can run in the background to complete long-running tasks autonomously.",
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
    description: "Vexx literally sees what you see. It uses vision models to understand UI elements, text, and icons.",
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
      <div className="container mx-auto px-6 text-center mb-24">
        <h1 className="text-5xl md:text-7xl font-bold mb-8">Capabilities.</h1>
        <p className="text-white/60 text-xl max-w-3xl mx-auto leading-relaxed">
          More than just a chatbot. Vexx-AI is a full-featured operating system 
          companion designed for maximum productivity and safety.
        </p>
      </div>

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mainFeatures.map((feature, idx) => (
            <GlassCard key={idx} className="p-8 h-full flex flex-col">
              <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-8">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
              <p className="text-white/50 mb-8 leading-relaxed flex-grow">
                {feature.description}
              </p>
              <div className="space-y-3 pt-6 border-t border-white/5">
                {feature.details.map((detail, dIdx) => (
                  <div key={dIdx} className="flex items-center gap-3 text-sm text-white/40">
                    <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
                    {detail}
                  </div>
                ))}
              </div>
            </GlassCard>
          ))}
        </div>

        {/* Secondary Features list */}
        <div className="mt-32 pt-32 border-t border-white/5">
           <h2 className="text-4xl font-bold mb-16 text-center">Under the hood.</h2>
           <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
              <div className="text-center">
                 <Terminal className="w-8 h-8 text-white/20 mx-auto mb-4" />
                 <h4 className="font-bold mb-2">CLI Integration</h4>
                 <p className="text-xs text-white/40">Execute shell commands safely</p>
              </div>
              <div className="text-center">
                 <Search className="w-8 h-8 text-white/20 mx-auto mb-4" />
                 <h4 className="font-bold mb-2">Omni-Search</h4>
                 <p className="text-xs text-white/40">Find anything on your PC instantly</p>
              </div>
              <div className="text-center">
                 <MousePointer2 className="w-8 h-8 text-white/20 mx-auto mb-4" />
                 <h4 className="font-bold mb-2">Precision Control</h4>
                 <p className="text-xs text-white/40">Pixel-perfect click accuracy</p>
              </div>
              <div className="text-center">
                 <Lock className="w-8 h-8 text-white/20 mx-auto mb-4" />
                 <h4 className="font-bold mb-2">Local Privacy</h4>
                 <p className="text-xs text-white/40">Your data never leaves your machine</p>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
