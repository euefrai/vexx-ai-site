"use client";

import React from "react";
import { Shield, Lock, EyeOff, Key, CheckCircle } from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";

export default function SecurityPage() {
  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-24">
          <Shield size={64} className="text-accent-cyan mx-auto mb-8 animate-pulse" />
          <h1 className="text-5xl md:text-7xl font-bold mb-8">Security First.</h1>
          <p className="text-white/60 text-xl leading-relaxed">
            Giving an AI control over your computer is a big responsibility. 
            We built Vexx-AI with a "Safety-by-Default" architecture.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
           <GlassCard className="p-10 border-accent-cyan/10">
              <div className="w-12 h-12 rounded-xl bg-accent-cyan/10 flex items-center justify-center mb-6">
                 <Lock className="text-accent-cyan" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Local-First Architecture</h3>
              <p className="text-white/50 leading-relaxed">
                Most of Vexx's processing happens directly on your machine. Your file structure, 
                system data, and personal information never leave your local environment. 
                We don't train models on your data.
              </p>
           </GlassCard>

           <GlassCard className="p-10 border-accent-purple/10">
              <div className="w-12 h-12 rounded-xl bg-accent-purple/10 flex items-center justify-center mb-6">
                 <Key className="text-accent-purple" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Your Keys, Your Choice</h3>
              <p className="text-white/50 leading-relaxed">
                Vexx-AI doesn't proxy your AI requests through our servers. You provide your own 
                API keys for OpenAI, Anthropic, or use local LLMs via Ollama. You have full 
                visibility and control over your AI spend.
              </p>
           </GlassCard>

           <GlassCard className="p-10 border-accent-green/10">
              <div className="w-12 h-12 rounded-xl bg-accent-green/10 flex items-center justify-center mb-6">
                 <EyeOff className="text-accent-green" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Approval System</h3>
              <p className="text-white/50 leading-relaxed">
                Critical actions—like deleting files, sending emails, or making payments—require 
                manual approval. You can configure "Safe Zones" where the agent can operate 
                freely, and "Red Zones" where it must always ask first.
              </p>
           </GlassCard>

           <GlassCard className="p-10 border-accent-red/10">
              <div className="w-12 h-12 rounded-xl bg-accent-red/10 flex items-center justify-center mb-6">
                 <Shield className="text-accent-red" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Sandbox Execution</h3>
              <p className="text-white/50 leading-relaxed">
                The agent runs in a controlled environment. Every command is logged and 
                can be audited. You can terminate the agent's process instantly at any 
                time with a global hotkey.
              </p>
           </GlassCard>
        </div>

        <div className="glass rounded-[3rem] p-12 text-center">
           <h2 className="text-3xl font-bold mb-12">Trust is our foundation.</h2>
           <div className="flex flex-wrap justify-center gap-12">
              <div className="flex items-center gap-2 text-white/40">
                 <CheckCircle size={20} className="text-accent-green" />
                 <span className="font-medium">End-to-End Encrypted</span>
              </div>
              <div className="flex items-center gap-2 text-white/40">
                 <CheckCircle size={20} className="text-accent-green" />
                 <span className="font-medium">SOC2 Compliant Infrastructure</span>
              </div>
              <div className="flex items-center gap-2 text-white/40">
                 <CheckCircle size={20} className="text-accent-green" />
                 <span className="font-medium">Open Source Core Bridge</span>
              </div>
              <div className="flex items-center gap-2 text-white/40">
                 <CheckCircle size={20} className="text-accent-green" />
                 <span className="font-medium">Weekly Security Audits</span>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
