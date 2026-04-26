"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import Link from "next/link";

export default function HeroNovo() {
  return (
    <section className="pt-24 md:pt-32 pb-20 md:pb-28">
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mx-auto text-center"
        >
          <span className="pill mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            Beta aberto · v1.0
          </span>

          <h1 className="h-display mb-6">
            A IA que entende
            <br />
            seu computador.
          </h1>

          <p className="lead max-w-xl mx-auto mb-10">
            Vexx vê sua tela, planeja a ação e executa tarefas reais —
            tudo localmente, com sua própria chave de API.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="/downloads/Vexx-AI-Setup.exe" download>
              <button className="btn btn-primary btn-lg w-full sm:w-auto">
                <Download size={16} />
                Baixar para Windows
              </button>
            </a>
            <Link href="/demo">
              <button className="btn btn-secondary btn-lg w-full sm:w-auto">
                Ver demonstração
                <ArrowRight size={16} />
              </button>
            </Link>
          </div>

          <p className="mt-5 text-xs text-ink-subtle">
            Grátis para baixar · Sem cartão de crédito · macOS e Linux em breve
          </p>
        </motion.div>

        {/* Product preview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 md:mt-20 max-w-4xl mx-auto"
        >
          <div className="card overflow-hidden shadow-elevated">
            {/* window chrome */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-line bg-[#FCFBF8]">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-line-strong" />
                <div className="w-2.5 h-2.5 rounded-full bg-line-strong" />
                <div className="w-2.5 h-2.5 rounded-full bg-line-strong" />
              </div>
              <div className="flex-1 text-center">
                <span className="text-xs text-ink-subtle font-mono">vexx</span>
              </div>
              <div className="w-8" />
            </div>

            <div className="p-6 md:p-8">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-full bg-accent-soft text-accent flex items-center justify-center text-xs font-semibold mt-0.5">
                    Eu
                  </div>
                  <div className="flex-1 pt-1">
                    <p className="text-sm text-ink">Organize os arquivos da minha área de trabalho por tipo.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-full bg-ink text-white flex items-center justify-center text-xs font-semibold mt-0.5">
                    V
                  </div>
                  <div className="flex-1 space-y-2 pt-1">
                    <p className="text-sm text-ink-muted">Analisando sua área de trabalho…</p>
                    <p className="text-sm text-ink-muted">Identifiquei 24 arquivos em 4 categorias.</p>
                    <p className="text-sm text-ink">Pronto. Criei <span className="font-medium text-ink">Documentos</span>, <span className="font-medium text-ink">Imagens</span>, <span className="font-medium text-ink">Vídeos</span> e <span className="font-medium text-ink">Outros</span> — e movi tudo para os lugares certos.</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-line">
                <div className="flex items-center gap-3 input cursor-text">
                  <span className="text-ink-subtle text-sm">Pergunte ou peça uma tarefa…</span>
                </div>
              </div>
            </div>
          </div>

          {/* Trust row */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs text-ink-subtle">
            <span>100% local</span>
            <span className="w-1 h-1 rounded-full bg-line-strong" />
            <span>Sem telemetria</span>
            <span className="w-1 h-1 rounded-full bg-line-strong" />
            <span>Suas próprias APIs</span>
            <span className="w-1 h-1 rounded-full bg-line-strong" />
            <span>Código auditável</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
