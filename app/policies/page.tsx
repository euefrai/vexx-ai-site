"use client";

import React from "react";
import { motion } from "framer-motion";
import GlassCard from "@/components/ui/GlassCard";

const sections = [
  {
    title: "Política de privacidade",
    paragraphs: [
      "No Vexx-AI levamos sua privacidade a sério. Nossa arquitetura local-first garante que seus dados permaneçam na sua máquina.",
      "Não coletamos, armazenamos ou transmitimos qualquer dado pessoal aos nossos servidores. Todo processamento acontece localmente.",
      "Quando você usa modelos em nuvem (OpenAI, Anthropic, etc.), está interagindo diretamente com esses serviços sob seus próprios termos.",
    ],
  },
  {
    title: "Termos de serviço",
    paragraphs: [
      'Ao usar o Vexx-AI, você concorda com estes termos. O software é fornecido "como está", sem garantias.',
      "O Vexx-AI está em beta. Reservamos o direito de modificar recursos, preços e disponibilidade durante o desenvolvimento.",
      "Você é responsável por garantir que seu uso esteja em conformidade com leis e regulamentos aplicáveis.",
    ],
  },
  {
    title: "Coleta de dados",
    paragraphs: [
      "Vexx-AI não coleta telemetria ou dados de uso. Não rastreamos como você usa o software.",
      "Relatórios de erro opcionais podem ser enviados para melhorar a estabilidade, mas isso pode ser desativado nas configurações.",
    ],
  },
  {
    title: "Contato",
    paragraphs: [
      "Para dúvidas sobre estas políticas, entre em contato em darkcontent934@gmail.com",
    ],
  },
];

export default function PoliciesPage() {
  return (
    <div className="pt-20 pb-24">
      <div className="container-prose">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="h-display mb-12 text-center">Políticas.</h1>
        </motion.div>

        <div className="space-y-5">
          {sections.map((s, i) => (
            <GlassCard key={s.title} delay={i * 0.06} hoverEffect={false}>
              <h2 className="h-card mb-4">{s.title}</h2>
              <div className="space-y-3 text-sm text-ink-muted leading-relaxed">
                {s.paragraphs.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </div>
  );
}
