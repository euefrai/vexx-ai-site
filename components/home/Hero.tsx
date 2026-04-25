"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Play, Download } from "lucide-react";
import Button from "@/components/ui/Button";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-accent-cyan/20 blur-[120px] rounded-full -z-10 animate-pulse-slow" />
      
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-accent-cyan mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-cyan opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-cyan"></span>
            </span>
            Vexx-AI Beta is now public
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8">
            Your AI that <br />
            <span className="gradient-text">actually DOES things.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-12 leading-relaxed">
            Stop chatting, start executing. Vexx-AI is the desktop companion that 
            navigates your computer, manages projects, and controls your workspace 
            so you don't have to.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/download">
              <Button variant="primary" size="lg" className="w-full sm:w-auto">
                Download for Windows
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
            <Link href="/demo">
              <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                <Play className="w-5 h-5 fill-current" />
                See Live Demo
              </Button>
            </Link>
          </div>
        </motion.div>

        {/* Visual Cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-24 relative"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-20" />
          <div className="rounded-2xl border border-white/10 overflow-hidden shadow-2xl shadow-accent-cyan/10 bg-black/40 backdrop-blur-sm">
             {/* Fake App Window Header */}
             <div className="h-10 bg-white/5 border-b border-white/5 flex items-center px-4 gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/20" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/20" />
                  <div className="w-3 h-3 rounded-full bg-green-500/20" />
                </div>
                <div className="mx-auto text-[10px] text-white/20 uppercase tracking-widest font-medium">Vexx-AI Command Center</div>
             </div>
             {/* Content placeholder for the ChatSimulation we'll add next */}
             <div className="aspect-video bg-black/60 flex items-center justify-center p-8">
                <div className="w-full max-w-3xl h-full rounded-xl border border-white/5 bg-black/40 p-6 text-left font-mono text-sm overflow-hidden">
                   <div className="text-accent-cyan mb-2">$ vexx --task "Organize my desktop and move screenshots to the project folder"</div>
                   <div className="text-white/40 mb-4">› Planning actions...</div>
                   <div className="text-white/60 space-y-2">
                      <div className="flex items-center gap-2"><span className="text-accent-green">✓</span> Scanning Desktop</div>
                      <div className="flex items-center gap-2"><span className="text-accent-green">✓</span> Identified 12 screenshots</div>
                      <div className="flex items-center gap-2"><span className="text-accent-green">✓</span> Creating folder: /Projects/Screenshots_Apr24</div>
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-accent-purple animate-pulse" />
                        Moving files...
                      </div>
                   </div>
                </div>
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
