"use client";

import React, { useState } from "react";
import { Check, Sparkles } from "lucide-react";
import Button from "@/components/ui/Button";
import GlassCard from "@/components/ui/GlassCard";

export default function PricingPage() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold mb-8">Simple <span className="gradient-text">Pricing.</span></h1>
          <p className="text-white/60 text-xl leading-relaxed">
            Choose the plan that fits your workflow. No hidden fees, no complexity.
          </p>
        </div>

        {/* Pricing Toggle */}
        <div className="flex items-center justify-center gap-4 mb-16">
           <span className={`text-sm ${!isYearly ? "text-white" : "text-white/40"}`}>Monthly</span>
           <button 
              onClick={() => setIsYearly(!isYearly)}
              className="w-14 h-8 rounded-full bg-white/10 p-1 flex items-center transition-colors hover:bg-white/20"
           >
              <div className={`w-6 h-6 rounded-full bg-accent-cyan transition-transform ${isYearly ? "translate-x-6" : "translate-x-0"}`} />
           </button>
           <span className={`text-sm ${isYearly ? "text-white" : "text-white/40"}`}>Yearly (-20%)</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
           {/* Free Plan */}
           <GlassCard className="p-10 flex flex-col">
              <div className="mb-8">
                 <h3 className="text-2xl font-bold mb-2">Community</h3>
                 <p className="text-white/40 text-sm">Perfect for individuals and experimenters.</p>
              </div>
              <div className="mb-8">
                 <span className="text-5xl font-bold">$0</span>
                 <span className="text-white/40 ml-2">/ forever</span>
              </div>
              <ul className="space-y-4 mb-12 flex-grow">
                 <li className="flex items-center gap-3 text-white/70">
                    <Check size={18} className="text-accent-cyan" />
                    <span>Basic computer control</span>
                 </li>
                 <li className="flex items-center gap-3 text-white/70">
                    <Check size={18} className="text-accent-cyan" />
                    <span>Single agent (YUI)</span>
                 </li>
                 <li className="flex items-center gap-3 text-white/70">
                    <Check size={18} className="text-accent-cyan" />
                    <span>Local LLM support (Ollama)</span>
                 </li>
                 <li className="flex items-center gap-3 text-white/70">
                    <Check size={18} className="text-accent-cyan" />
                    <span>Community support</span>
                 </li>
              </ul>
              <Button variant="outline" className="w-full">Get Started</Button>
           </GlassCard>

           {/* Beta Pro Plan */}
           <GlassCard className="p-10 border-accent-cyan/30 bg-accent-cyan/[0.02] flex flex-col relative overflow-hidden">
              <div className="absolute top-4 right-4 bg-accent-cyan text-black px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">
                 POPULAR
              </div>
              <div className="mb-8">
                 <h3 className="text-2xl font-bold mb-2">Beta Pro</h3>
                 <p className="text-white/40 text-sm">Unlock the full power of autonomous agents.</p>
              </div>
              <div className="mb-8">
                 <span className="text-5xl font-bold">${isYearly ? "2.50" : "3.00"}</span>
                 <span className="text-white/40 ml-2">/ month</span>
              </div>
              <ul className="space-y-4 mb-12 flex-grow">
                 <li className="flex items-center gap-3 text-white">
                    <Check size={18} className="text-accent-cyan" />
                    <span className="font-medium">Multi-agent system (JUH + YUI)</span>
                 </li>
                 <li className="flex items-center gap-3 text-white">
                    <Check size={18} className="text-accent-cyan" />
                    <span className="font-medium">Remote Control Bridge</span>
                 </li>
                 <li className="flex items-center gap-3 text-white">
                    <Check size={18} className="text-accent-cyan" />
                    <span className="font-medium">Unlimited long-term memory</span>
                 </li>
                 <li className="flex items-center gap-3 text-white">
                    <Check size={18} className="text-accent-cyan" />
                    <span className="font-medium">Priority support</span>
                 </li>
                 <li className="flex items-center gap-3 text-white">
                    <Check size={18} className="text-accent-cyan" />
                    <span className="font-medium">Cloud sync (encrypted)</span>
                 </li>
              </ul>
              <Button variant="neon" className="w-full">
                 <Sparkles size={16} />
                 Upgrade to Pro
              </Button>
           </GlassCard>
        </div>

        <div className="mt-24 max-w-3xl mx-auto glass p-8 rounded-2xl">
           <h4 className="font-bold mb-4 flex items-center gap-2">
              <Sparkles size={18} className="text-accent-amber" />
              About the Beta Model
           </h4>
           <p className="text-sm text-white/50 leading-relaxed">
              We believe in transparency. Vexx-AI is local-first, meaning you use your own API keys 
              (OpenAI, Anthropic, etc.) and pay them directly for usage. Our fee covers the development 
              of the orchestration engine, the remote bridge infrastructure, and the autonomous agent architecture.
           </p>
        </div>
      </div>
    </div>
  );
}
