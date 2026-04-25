"use client";

import React from "react";
import { motion } from "framer-motion";
import { Shield, Lock, Eye, Database, CheckCircle2, Fingerprint } from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";

export default function SecurityPage() {
  return (
    <div className="pt-32 pb-20">
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto text-center mb-16 md:mb-24"
        >
          <h1 className="h-display mb-8">Security <span className="gradient-text">First.</span></h1>
          <p className="lead max-w-3xl mx-auto">
            Vexx-AI is built with privacy and security at its core. Your data stays local, 
            your keys stay yours, and you're always in control.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
          <GlassCard className="p-8" delay={0.1}>
            <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6">
              <Lock className="text-accent-cyan" size={28} />
            </div>
            <h3 className="text-xl md:text-2xl font-bold mb-4">Local-First Architecture</h3>
            <p className="text-body text-zinc-400 leading-relaxed">
              Vexx runs entirely on your machine. No cloud processing, no data transmission to our servers. 
              Your AI models, your data, your control.
            </p>
          </GlassCard>

          <GlassCard className="p-8" delay={0.2}>
            <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6">
              <Shield className="text-accent-purple" size={28} />
            </div>
            <h3 className="text-xl md:text-2xl font-bold mb-4">Permission-Based Control</h3>
            <p className="text-body text-zinc-400 leading-relaxed">
              Every action requires your approval. Configure safe zones, approval requirements, 
              and real-time monitoring of all agent activities.
            </p>
          </GlassCard>

          <GlassCard className="p-8" delay={0.3}>
            <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6">
              <Eye className="text-accent-green" size={28} />
            </div>
            <h3 className="text-xl md:text-2xl font-bold mb-4">Privacy Masking</h3>
            <p className="text-body text-zinc-400 leading-relaxed">
              Vision models can be configured to mask sensitive information like passwords, 
              credit cards, and personal data before processing.
            </p>
          </GlassCard>

          <GlassCard className="p-8" delay={0.4}>
            <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6">
              <Database className="text-accent-amber" size={28} />
            </div>
            <h3 className="text-xl md:text-2xl font-bold mb-4">Encrypted Storage</h3>
            <p className="text-body text-zinc-400 leading-relaxed">
              All local data including API keys, agent memory, and task history is encrypted 
              at rest using industry-standard AES-256 encryption.
            </p>
          </GlassCard>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 md:mt-24 max-w-4xl mx-auto"
        >
          <GlassCard className="p-12">
            <h2 className="h-section mb-8 text-center">Our Security Promise</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <CheckCircle2 className="text-accent-green flex-shrink-0 mt-1" size={20} />
                <p className="text-body text-zinc-300">No data leaves your machine without explicit consent</p>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle2 className="text-accent-green flex-shrink-0 mt-1" size={20} />
                <p className="text-body text-zinc-300">API keys are stored locally and never transmitted to our servers</p>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle2 className="text-accent-green flex-shrink-0 mt-1" size={20} />
                <p className="text-body text-zinc-300">Open-source core components for community audit</p>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle2 className="text-accent-green flex-shrink-0 mt-1" size={20} />
                <p className="text-body text-zinc-300">Regular security audits and penetration testing</p>
              </div>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </div>
  );
}
