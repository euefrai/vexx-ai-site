"use client";

import React from "react";
import { motion } from "framer-motion";

const stats = [
  { value: "50ms", label: "Tempo de resposta" },
  { value: "99.9%", label: "Precisão de clique" },
  { value: "60fps", label: "Streaming remoto" },
  { value: "0", label: "Dados na nuvem" },
];

export default function VisualProof() {
  return (
    <section className="section-tight border-t border-line">
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto text-center mb-12"
        >
          <h2 className="h-section mb-4">Não é um chatbot. É um operador.</h2>
          <p className="text-body">
            Enquanto outras IAs apenas conversam, o Vexx clica, digita,
            navega e executa tarefas reais no seu computador.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="card p-5 text-center"
            >
              <div className="text-2xl md:text-3xl font-semibold tracking-tight text-ink mb-1">
                {stat.value}
              </div>
              <div className="text-xs text-ink-muted">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
