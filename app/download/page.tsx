"use client";

import React from "react";
import { Download, Terminal, CheckCircle2, Monitor, Apple, Layout } from "lucide-react";
import Button from "@/components/ui/Button";
import GlassCard from "@/components/ui/GlassCard";

export default function DownloadPage() {
  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-24">
          <h1 className="text-5xl md:text-7xl font-bold mb-8">Get <span className="text-accent-cyan">Vexx.</span></h1>
          <p className="text-white/60 text-xl leading-relaxed">
            Download the desktop client and start automating your workspace today.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-24">
           {/* Windows - Primary */}
           <GlassCard className="md:col-span-1 p-8 border-accent-cyan/20 bg-accent-cyan/[0.02]">
              <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-8">
                 <Monitor className="text-accent-cyan" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Windows</h3>
              <p className="text-white/40 text-sm mb-8">v1.2.4 • Windows 10, 11</p>
              <Button variant="primary" className="w-full">
                 <Download size={18} />
                 Download .exe
              </Button>
           </GlassCard>

           {/* macOS */}
           <GlassCard className="p-8">
              <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-8">
                 <Apple className="text-white/40" />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-white/40">macOS</h3>
              <p className="text-white/20 text-sm mb-8">Coming Summer 2024</p>
              <Button variant="outline" className="w-full" disabled>Notify Me</Button>
           </GlassCard>

           {/* Linux */}
           <GlassCard className="p-8">
              <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-8">
                 <Layout className="text-white/40" />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-white/40">Linux</h3>
              <p className="text-white/20 text-sm mb-8">Coming Late 2024</p>
              <Button variant="outline" className="w-full" disabled>Join Waitlist</Button>
           </GlassCard>
        </div>

        <div className="max-w-4xl mx-auto">
           <h2 className="text-3xl font-bold mb-12 text-center">Installation Steps</h2>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-8">
                 <div className="flex gap-6">
                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0 font-bold">1</div>
                    <div>
                       <h4 className="font-bold mb-2">Run the Installer</h4>
                       <p className="text-white/50 text-sm">Download and execute the installer. Windows might show a "SmartScreen" warning since we are in Beta.</p>
                    </div>
                 </div>
                 <div className="flex gap-6">
                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0 font-bold">2</div>
                    <div>
                       <h4 className="font-bold mb-2">Configure API Keys</h4>
                       <p className="text-white/50 text-sm">Enter your OpenAI or Anthropic keys, or point Vexx to your local Ollama instance.</p>
                    </div>
                 </div>
                 <div className="flex gap-6">
                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0 font-bold">3</div>
                    <div>
                       <h4 className="font-bold mb-2">Enable Permissions</h4>
                       <p className="text-white/50 text-sm">Allow Vexx to access Accessibility features so it can move the mouse and read the screen.</p>
                    </div>
                 </div>
              </div>

              <div className="glass p-8 rounded-3xl space-y-6">
                 <h4 className="font-bold flex items-center gap-2">
                    <Terminal size={18} className="text-accent-cyan" />
                    System Requirements
                 </h4>
                 <ul className="space-y-4">
                    <li className="flex items-center gap-3 text-sm text-white/60">
                       <CheckCircle2 size={16} className="text-accent-green" />
                       8GB RAM (16GB recommended)
                    </li>
                    <li className="flex items-center gap-3 text-sm text-white/60">
                       <CheckCircle2 size={16} className="text-accent-green" />
                       Python 3.10+ installed
                    </li>
                    <li className="flex items-center gap-3 text-sm text-white/60">
                       <CheckCircle2 size={16} className="text-accent-green" />
                       DirectX 11 compatible GPU
                    </li>
                    <li className="flex items-center gap-3 text-sm text-white/60">
                       <CheckCircle2 size={16} className="text-accent-green" />
                       Active internet connection (for cloud models)
                    </li>
                 </ul>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
