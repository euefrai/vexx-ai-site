"use client";

import React from "react";
import { motion } from "framer-motion";
import { Smartphone, Monitor, ShieldCheck, Zap, ArrowRight, MousePointer2 } from "lucide-react";
import Button from "@/components/ui/Button";
import GlassCard from "@/components/ui/GlassCard";

export default function RemotePage() {
  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-24">
          <h1 className="text-5xl md:text-7xl font-bold mb-8">Desktop in your <span className="text-accent-green">pocket.</span></h1>
          <p className="text-white/60 text-xl leading-relaxed">
            The Vexx Bridge allows you to control your entire computer from your 
            mobile phone with zero setup and ultra-low latency.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
           <div className="relative">
              {/* Phone Mockup Animation */}
              <div className="relative mx-auto w-[280px] h-[580px] bg-black rounded-[3rem] border-[8px] border-white/10 shadow-2xl overflow-hidden">
                 <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl z-20" />
                 
                 {/* Screen Content */}
                 <div className="relative h-full w-full bg-slate-900 overflow-hidden">
                    {/* Fake Desktop View on Phone */}
                    <div className="absolute inset-0 opacity-40 grayscale scale-150 origin-top">
                       <img 
                          src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=600" 
                          className="w-full h-full object-cover"
                          alt="Desktop"
                       />
                    </div>
                    
                    {/* Control Overlay */}
                    <div className="absolute inset-0 z-10 flex flex-col">
                       <div className="p-6 bg-black/40 backdrop-blur-md border-b border-white/5">
                          <div className="flex items-center justify-between">
                             <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-accent-green" />
                                <span className="text-[10px] font-bold text-white uppercase tracking-widest">CONNECTED</span>
                             </div>
                             <span className="text-[10px] text-white/40">14ms LATENCY</span>
                          </div>
                       </div>
                       
                       <div className="flex-grow flex items-center justify-center relative">
                          <motion.div
                             animate={{ 
                                x: [0, 50, -30, 20, 0],
                                y: [0, -40, 60, -20, 0]
                             }}
                             transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                             className="text-accent-cyan drop-shadow-[0_0_10px_rgba(0,245,255,0.5)]"
                          >
                             <MousePointer2 size={32} />
                          </motion.div>
                       </div>

                       <div className="p-8 grid grid-cols-2 gap-4 bg-black/60 backdrop-blur-2xl border-t border-white/10">
                          <div className="h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                             <span className="text-xs font-bold text-white/40">TOUCHPAD</span>
                          </div>
                          <div className="h-12 rounded-xl bg-accent-green/20 border border-accent-green/40 flex items-center justify-center">
                             <span className="text-xs font-bold text-accent-green">ACTIONS</span>
                          </div>
                       </div>
                    </div>
                 </div>
              </div>
              
              {/* Floating Icons */}
              <motion.div 
                 animate={{ y: [0, -10, 0] }}
                 transition={{ duration: 4, repeat: Infinity }}
                 className="absolute -top-10 -right-10 w-20 h-20 rounded-2xl glass flex items-center justify-center shadow-2xl"
              >
                 <Zap className="text-accent-amber" />
              </motion.div>
              <motion.div 
                 animate={{ y: [0, 10, 0] }}
                 transition={{ duration: 3, repeat: Infinity }}
                 className="absolute bottom-10 -left-10 w-16 h-16 rounded-2xl glass flex items-center justify-center shadow-2xl"
              >
                 <ShieldCheck className="text-accent-cyan" />
              </motion.div>
           </div>

           <div className="space-y-12">
              <div className="space-y-6">
                 <h2 className="text-4xl font-bold">Total command, <br />wherever you are.</h2>
                 <p className="text-white/50 text-lg">
                    Whether you're in the next room or across the globe, Vexx Bridge 
                    maintains a secure, high-speed encrypted tunnel to your desktop.
                 </p>
              </div>

              <div className="space-y-8">
                 <div className="flex gap-6">
                    <div className="w-12 h-12 rounded-xl bg-white/5 flex flex-shrink-0 items-center justify-center">
                       <Smartphone className="text-accent-green" />
                    </div>
                    <div>
                       <h4 className="text-xl font-bold mb-2">Virtual Touchpad</h4>
                       <p className="text-white/40 text-sm">Use your phone screen as a precise trackpad for your PC with gesture support.</p>
                    </div>
                 </div>
                 <div className="flex gap-6">
                    <div className="w-12 h-12 rounded-xl bg-white/5 flex flex-shrink-0 items-center justify-center">
                       <Monitor className="text-accent-cyan" />
                    </div>
                    <div>
                       <h4 className="text-xl font-bold mb-2">60 FPS Streaming</h4>
                       <p className="text-white/40 text-sm">Proprietary compression algorithm ensures a smooth visual experience even on 4G.</p>
                    </div>
                 </div>
                 <div className="flex gap-6">
                    <div className="w-12 h-12 rounded-xl bg-white/5 flex flex-shrink-0 items-center justify-center">
                       <ShieldCheck className="text-accent-purple" />
                    </div>
                    <div>
                       <h4 className="text-xl font-bold mb-2">Zero Trust Architecture</h4>
                       <p className="text-white/40 text-sm">End-to-end encryption with peer-to-peer connection. No data stays on our servers.</p>
                    </div>
                 </div>
              </div>

              <div className="pt-8">
                 <Button variant="primary" size="lg">
                    Get the App
                    <ArrowRight className="w-5 h-5" />
                 </Button>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
