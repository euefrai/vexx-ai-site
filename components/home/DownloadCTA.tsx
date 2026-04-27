"use client";

import React from "react";
import { motion } from "framer-motion";
import { Download, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function DownloadCTA() {
  return (
    <section className="section border-t border-line">
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="h-section mb-4">Pronto para automatizar?</h2>
          <p className="text-body mb-8">
            Junte-se a milhares de usuários que já usam o Vexx para
            transformar ideias em ações. Comece grátis hoje.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="https://github.com/euefrai/vexx-ai-releases/releases/download/v1.0.0/Vexx-AI-Setup-v1.0.0.exe">
              <button className="btn btn-primary btn-lg w-full sm:w-auto">
                <Download size={16} />
                Baixar Vexx
              </button>
            </a>
            <Link href="/download">
              <button className="btn btn-secondary btn-lg w-full sm:w-auto">
                Outras plataformas
                <ArrowRight size={16} />
              </button>
            </Link>
          </div>

          <p className="mt-5 text-xs text-ink-subtle">
            Grátis · Sem cartão de crédito · Disponível para Windows
          </p>
        </motion.div>
      </div>
    </section>
  );
}
