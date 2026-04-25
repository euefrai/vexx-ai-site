"use client";

import React from "react";
import { motion } from "framer-motion";
import { Smartphone, Wifi, Zap, Shield, ArrowRight, Download } from "lucide-react";
import Button from "@/components/ui/Button";
import GlassCard from "@/components/ui/GlassCard";

export default function RemotePage() {
  return (
    <div className="pt-32 pb-20">
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto text-center mb-16 md:mb-24"
        >
          <h1 className="h-display mb-8">Remote <span className="gradient-text">Control.</span></h1>
          <p className="lead max-w-3xl mx-auto">
            Control your desktop from anywhere using your phone. Low latency, high frame-rate streaming 
            with the Vexx Bridge.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center mb-16 md:mb-24">
          <div className="space-y-6">
            <GlassCard className="p-8" delay={0.1}>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-accent-cyan/10 flex items-center justify-center">
                  <Smartphone className="text-accent-cyan" size={24} />
                </div>
                <h3 className="text-xl md:text-2xl font-bold">Virtual Touchpad</h3>
              </div>
              <p className="text-body text-zinc-400 leading-relaxed">
                Your phone becomes a precision trackpad. Full gesture support including pinch-to-zoom, 
                two-finger scroll, and right-click simulation.
              </p>
            </GlassCard>

            <GlassCard className="p-8" delay={0.2}>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-accent-purple/10 flex items-center justify-center">
                  <Wifi className="text-accent-purple" size={24} />
                </div>
                <h3 className="text-xl md:text-2xl font-bold">Secure Tunnel</h3>
              </div>
              <p className="text-body text-zinc-400 leading-relaxed">
                End-to-end encrypted connection. Your data never leaves the secure tunnel between 
                your phone and your PC.
              </p>
            </GlassCard>

            <GlassCard className="p-8" delay={0.3}>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-accent-green/10 flex items-center justify-center">
                  <Zap className="text-accent-green" size={24} />
                </div>
                <h3 className="text-xl md:text-2xl font-bold">Low Latency</h3>
              </div>
              <p className="text-body text-zinc-400 leading-relaxed">
                Optimized streaming protocol delivers 60 FPS video with under 50ms latency. 
                Feels like you're right there.
              </p>
            </GlassCard>
          </div>

          <div className="relative">
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              <div className="w-64 h-[500px] mx-auto bg-black rounded-[3rem] border-4 border-white/10 p-3 relative">
                <div className="w-full h-full bg-gradient-to-br from-accent-cyan/20 to-accent-purple/20 rounded-[2.5rem] flex items-center justify-center overflow-hidden">
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-full bg-white/10 mx-auto mb-4 flex items-center justify-center">
                      <Smartphone size={32} className="text-white" />
                    </div>
                    <p className="text-zinc-400 text-sm">Vexx Bridge</p>
                    <p className="text-accent-cyan text-xs mt-1">Connected</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <GlassCard className="p-12 text-center">
            <h2 className="h-section mb-6">Get the Mobile App</h2>
            <p className="text-body text-zinc-400 mb-8 max-w-lg mx-auto">
              Available for iOS and Android. Requires Vexx Beta Pro or higher.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="primary" className="w-full sm:w-auto">
                <Download size={18} />
                iOS App Store
              </Button>
              <Button variant="secondary" className="w-full sm:w-auto">
                <Download size={18} />
                Google Play
              </Button>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </div>
  );
}
