"use client";

import React from "react";
import { motion } from "framer-motion";
import { Download, ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

export default function DownloadCTA() {
  return (
    <section className="section-pad relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-accent-cyan/10 via-accent-purple/10 to-accent-green/10 rounded-full blur-3xl" />
      </div>

      <div className="container-page relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-cyan/10 border border-accent-cyan/20 mb-8"
          >
            <Sparkles className="w-4 h-4 text-accent-cyan" />
            <span className="text-sm font-medium text-accent-cyan">Disponível para Windows, macOS e Linux</span>
          </motion.div>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6">
            <span className="text-white">Pronto para</span>
            <br />
            <span className="gradient-text">automatizar tudo?</span>
          </h2>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-zinc-400 mb-12 max-w-2xl mx-auto">
            Junte-se a milhares de usuários que já estão usando o Vexx 
            para transformar suas ideias em ações. Comece grátis hoje.
          </p>

          {/* Main CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <a href="/downloads/Vexx-AI-Setup.exe" download>
              <motion.button
                whileHover={{ scale: 1.05, y: -4 }}
                whileTap={{ scale: 0.98 }}
                className="btn-base btn-primary px-12 py-6 text-lg font-bold shadow-[0_0_60px_-10px_rgba(0,245,255,0.5)]"
              >
                <Download className="w-6 h-6" />
                Baixar Vexx agora
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </a>
            <Link href="/download" className="block mt-4 text-sm text-zinc-400 hover:text-accent-cyan transition-colors">
              Outras plataformas e requisitos →
            </Link>
          </motion.div>

          {/* Trust note */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-8 text-sm text-zinc-500"
          >
            Grátis para usar. Sem cartão de crédito necessário.
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto"
          >
            {[
              { value: "10K+", label: "Downloads" },
              { value: "4.9", label: "Avaliação média" },
              { value: "99%", label: "Satisfação" },
            ].map((stat, index) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-xs md:text-sm text-zinc-500">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
