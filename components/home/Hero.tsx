"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Play, Sparkles, Cpu } from "lucide-react";
import Button from "@/components/ui/Button";
import Link from "next/link";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
};

export default function Hero() {
  return (
    <section className="relative pt-32 md:pt-40 pb-24 md:pb-32 overflow-hidden">
      {/* Background glows */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[1200px] h-[700px] rounded-full bg-accent-cyan/15 blur-[160px] -z-10 pulse-glow" />
      <div className="pointer-events-none absolute top-32 -left-48 w-[600px] h-[600px] rounded-full bg-accent-purple/20 blur-[140px] -z-10" />
      <div className="pointer-events-none absolute top-16 -right-48 w-[600px] h-[600px] rounded-full bg-accent-green/12 blur-[140px] -z-10" />

      <div className="container-page text-center">
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="eyebrow mb-10">
            <span className="relative flex h-2 w-2">
              <span className="absolute inset-0 rounded-full bg-accent-cyan animate-ping opacity-75" />
              <span className="relative rounded-full h-2 w-2 bg-accent-cyan" />
            </span>
            Vexx-AI Beta · Now Public
          </div>

          <h1 className="h-display max-w-5xl mx-auto mb-8">
            Your computer can now <br className="hidden md:block" />
            <span className="gradient-text">think, act, and execute.</span>
          </h1>

          <p className="lead max-w-3xl mx-auto mb-10">
            Vexx is the AI that doesn&apos;t just answer — it <em className="not-italic text-white font-semibold">does</em>.
            It sees your screen, plans the steps, clicks, types, and ships the result.
            <span className="block mt-2 text-zinc-500">All local. All under your control.</span>
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <Link href="/download" className="w-full sm:w-auto">
              <Button variant="primary" size="lg" className="w-full sm:w-auto">
                Download for Windows
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
            <Link href="/demo" className="w-full sm:w-auto">
              <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                <Play className="w-5 h-5 fill-current" />
                Watch Demo
              </Button>
            </Link>
          </div>

          <div className="flex items-center justify-center gap-6 text-sm text-zinc-500">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-accent-amber" />
              <span>Free Community plan</span>
            </div>
            <span className="w-1 h-1 rounded-full bg-zinc-600" />
            <span>macOS &amp; Linux coming soon</span>
          </div>
        </motion.div>

        {/* App window preview */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-16 md:mt-20 relative max-w-5xl mx-auto"
        >
          <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-accent-cyan/50 via-accent-purple/40 to-accent-amber/40 blur-2xl opacity-70" />
          <div className="relative rounded-3xl border border-white/10 overflow-hidden bg-black/70 backdrop-blur-2xl shadow-[0_40px_140px_-20px_rgba(0,245,255,0.3)]">
            <div className="h-12 bg-white/[0.04] border-b border-white/10 flex items-center px-5 gap-3">
              <div className="flex gap-2">
                <div className="w-3.5 h-3.5 rounded-full bg-red-400/40" />
                <div className="w-3.5 h-3.5 rounded-full bg-amber-400/40" />
                <div className="w-3.5 h-3.5 rounded-full bg-green-400/40" />
              </div>
              <div className="mx-auto flex items-center gap-2 text-[10px] text-white/40 uppercase tracking-[0.25em] font-medium">
                <Cpu className="w-3.5 h-3.5" />
                Vexx · Command Center
              </div>
            </div>
            <div className="aspect-video bg-black/80 p-6 md:p-12">
              <div className="w-full h-full rounded-xl border border-white/5 bg-black/50 p-6 md:p-8 text-left font-mono text-sm md:text-base overflow-hidden">
                <div className="text-accent-cyan mb-4">
                  $ vexx --task "Organize my desktop and move screenshots to /Projects"
                </div>
                <div className="text-zinc-500 mb-6">› Reading screen · planning steps...</div>
                <div className="text-zinc-300 space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="text-accent-green">✓</span> Scanned desktop · 47 items
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-accent-green">✓</span> Identified 12 screenshots via vision model
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-accent-green">✓</span> Created folder /Projects/Screenshots_2026-04
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-2.5 h-2.5 rounded-full bg-accent-purple animate-pulse" />
                    Moving files... <span className="text-zinc-500">8 / 12</span>
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
