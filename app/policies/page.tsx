"use client";

import React from "react";
import { motion } from "framer-motion";
import GlassCard from "@/components/ui/GlassCard";

export default function PoliciesPage() {
  return (
    <div className="pt-32 pb-20">
      <div className="container-page">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="h-display mb-12">Policies.</h1>
          </motion.div>
          
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <GlassCard className="p-8 md:p-10">
                <h2 className="h-card mb-6">Privacy Policy</h2>
                <div className="space-y-4 text-body text-zinc-400">
                  <p>
                    At Vexx-AI, we take your privacy seriously. Our local-first architecture ensures that your data stays on your machine.
                  </p>
                  <p>
                    We do not collect, store, or transmit any personal data to our servers. All processing happens locally on your computer.
                  </p>
                  <p>
                    When you use cloud-based AI models (OpenAI, Anthropic, etc.), you are directly interacting with those services under their terms of service.
                  </p>
                </div>
              </GlassCard>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <GlassCard className="p-8 md:p-10">
                <h2 className="h-card mb-6">Terms of Service</h2>
                <div className="space-y-4 text-body text-zinc-400">
                  <p>
                    By using Vexx-AI, you agree to these terms. The software is provided "as is" without warranty of any kind.
                  </p>
                  <p>
                    Vexx-AI is currently in beta. We reserve the right to modify features, pricing, and availability as we develop the product.
                  </p>
                  <p>
                    You are responsible for ensuring your use of Vexx-AI complies with applicable laws and regulations in your jurisdiction.
                  </p>
                </div>
              </GlassCard>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <GlassCard className="p-8 md:p-10">
                <h2 className="h-card mb-6">Data Collection</h2>
                <div className="space-y-4 text-body text-zinc-400">
                  <p>
                    Vexx-AI does not collect telemetry or usage data. We do not track how you use the software.
                  </p>
                  <p>
                    Optional crash reports may be sent to help us improve stability, but this can be disabled in settings.
                  </p>
                </div>
              </GlassCard>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <GlassCard className="p-8 md:p-10">
                <h2 className="h-card mb-6">Contact</h2>
                <p className="text-body text-zinc-400">
                  For questions about these policies, please contact us at legal@vexx-ai.com
                </p>
              </GlassCard>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
