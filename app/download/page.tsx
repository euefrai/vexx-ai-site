"use client";

import React from "react";
import { motion } from "framer-motion";
import { Download, Terminal, CheckCircle2, Monitor, Apple, Layout, Clock, Check } from "lucide-react";
import Button from "@/components/ui/Button";
import GlassCard from "@/components/ui/GlassCard";

export default function DownloadPage() {
  return (
    <div className="pt-32 pb-20">
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto text-center mb-16 md:mb-24"
        >
          <h1 className="h-display mb-8">Get <span className="gradient-text">Vexx.</span></h1>
          <p className="lead max-w-2xl mx-auto">
            Install Vexx and give your computer a brain. Available now for Windows, with macOS and Linux coming soon.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16 md:mb-24">
           {/* Windows - Primary */}
           <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
           >
              <GlassCard className="p-8 border-accent-cyan/30 bg-accent-cyan/[0.03] relative overflow-hidden">
                 <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 rounded-full bg-accent-green/10 border border-accent-green/30 text-[10px] font-bold text-accent-green uppercase tracking-wider">
                       Available
                    </span>
                 </div>
                 <div className="w-16 h-16 rounded-2xl bg-accent-cyan/10 flex items-center justify-center mb-6">
                    <Monitor className="text-accent-cyan" size={32} />
                 </div>
                 <h3 className="text-2xl font-bold mb-2">Windows</h3>
                 <p className="text-zinc-400 text-sm mb-6">v1.2.4 • Windows 10, 11</p>
                 <Button variant="primary" className="w-full">
                    <Download size={18} />
                    Download .exe
                 </Button>
              </GlassCard>
           </motion.div>

           {/* macOS */}
           <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
           >
              <GlassCard className="p-8 opacity-70">
                 <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold text-zinc-400 uppercase tracking-wider flex items-center gap-1.5">
                       <Clock size={10} />
                       Coming Soon
                    </span>
                 </div>
                 <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-6">
                    <Apple className="text-zinc-500" size={32} />
                 </div>
                 <h3 className="text-2xl font-bold mb-2 text-zinc-400">macOS</h3>
                 <p className="text-zinc-500 text-sm mb-6">Coming Summer 2024</p>
                 <Button variant="outline" className="w-full" disabled>Notify Me</Button>
              </GlassCard>
           </motion.div>

           {/* Linux */}
           <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
           >
              <GlassCard className="p-8 opacity-70">
                 <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold text-zinc-400 uppercase tracking-wider flex items-center gap-1.5">
                       <Clock size={10} />
                       Coming Soon
                    </span>
                 </div>
                 <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-6">
                    <Layout className="text-zinc-500" size={32} />
                 </div>
                 <h3 className="text-2xl font-bold mb-2 text-zinc-400">Linux</h3>
                 <p className="text-zinc-500 text-sm mb-6">Coming Late 2024</p>
                 <Button variant="outline" className="w-full" disabled>Join Waitlist</Button>
              </GlassCard>
           </motion.div>
        </div>

        {/* Explanation Box */}
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 0.4 }}
           className="max-w-3xl mx-auto mb-16 md:mb-24"
        >
           <div className="glass rounded-2xl p-8 text-center">
              <p className="text-body text-zinc-300 leading-relaxed">
                 <span className="text-accent-cyan font-semibold">Vexx runs locally</span> on your machine.
                 You bring your own AI — connect OpenAI, Anthropic, or run locally with Ollama.
                 You stay in control.
              </p>
           </div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
           <h2 className="h-section mb-12 text-center">Installation Steps</h2>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-8">
                 <div className="flex gap-6">
                    <div className="w-12 h-12 rounded-full bg-accent-cyan/10 flex items-center justify-center flex-shrink-0 font-bold text-accent-cyan border border-accent-cyan/20">1</div>
                    <div>
                       <h4 className="text-xl font-bold mb-2">Install Vexx</h4>
                       <p className="text-body text-zinc-400">Download and run the installer. Windows may show a SmartScreen warning since we're in Beta — click "Run anyway".</p>
                    </div>
                 </div>
                 <div className="flex gap-6">
                    <div className="w-12 h-12 rounded-full bg-accent-purple/10 flex items-center justify-center flex-shrink-0 font-bold text-accent-purple border border-accent-purple/20">2</div>
                    <div>
                       <h4 className="text-xl font-bold mb-2">Connect Your AI</h4>
                       <p className="text-body text-zinc-400">Enter your OpenAI or Anthropic API keys, or point Vexx to your local Ollama instance for 100% private execution.</p>
                    </div>
                 </div>
                 <div className="flex gap-6">
                    <div className="w-12 h-12 rounded-full bg-accent-green/10 flex items-center justify-center flex-shrink-0 font-bold text-accent-green border border-accent-green/20">3</div>
                    <div>
                       <h4 className="text-xl font-bold mb-2">Allow Permissions</h4>
                       <p className="text-body text-zinc-400">Grant Accessibility permissions so Vexx can move your mouse and read your screen. You're always in control.</p>
                    </div>
                 </div>
                 <div className="flex gap-6">
                    <div className="w-12 h-12 rounded-full bg-accent-amber/10 flex items-center justify-center flex-shrink-0 font-bold text-accent-amber border border-accent-amber/20">4</div>
                    <div>
                       <h4 className="text-xl font-bold mb-2">Start Automating</h4>
                       <p className="text-body text-zinc-400">Open the Command Center and give Vexx your first task. Watch it think, plan, and execute.</p>
                    </div>
                 </div>
              </div>

              <GlassCard className="p-8 space-y-6">
                 <h4 className="text-xl font-bold flex items-center gap-3">
                    <Terminal size={20} className="text-accent-cyan" />
                    System Requirements
                 </h4>
                 <ul className="space-y-4">
                    <li className="flex items-center gap-3 text-sm text-zinc-300">
                       <CheckCircle2 size={18} className="text-accent-green flex-shrink-0" />
                       <span>8GB RAM (16GB recommended)</span>
                    </li>
                    <li className="flex items-center gap-3 text-sm text-zinc-300">
                       <CheckCircle2 size={18} className="text-accent-green flex-shrink-0" />
                       <span>Windows 10/11 (64-bit)</span>
                    </li>
                    <li className="flex items-center gap-3 text-sm text-zinc-300">
                       <CheckCircle2 size={18} className="text-accent-green flex-shrink-0" />
                       <span>2GB free disk space</span>
                    </li>
                    <li className="flex items-center gap-3 text-sm text-zinc-300">
                       <CheckCircle2 size={18} className="text-accent-green flex-shrink-0" />
                       <span>Active internet (for cloud models)</span>
                    </li>
                 </ul>
              </GlassCard>
           </div>
        </div>
      </div>
    </div>
  );
}
