"use client";

import React from "react";
import Link from "next/link";
import { Github, Twitter, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="container-page py-14">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 rounded-lg bg-ink flex items-center justify-center">
                <span className="text-white text-sm font-semibold">V</span>
              </div>
              <span className="text-base font-semibold tracking-tight text-ink">
                Vexx
              </span>
            </Link>
            <p className="text-sm text-ink-muted leading-relaxed max-w-xs">
              A IA que pensa, planeja e executa tarefas no seu computador. 100% local.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-ink uppercase tracking-wider mb-4">
              Produto
            </h4>
            <ul className="space-y-3">
              <li><Link href="/download" className="text-sm text-ink-muted hover:text-ink transition-colors">Baixar</Link></li>
              <li><Link href="/features" className="text-sm text-ink-muted hover:text-ink transition-colors">Recursos</Link></li>
              <li><Link href="/pricing" className="text-sm text-ink-muted hover:text-ink transition-colors">Preço</Link></li>
              <li><Link href="/demo" className="text-sm text-ink-muted hover:text-ink transition-colors">Demonstração</Link></li>
              <li><Link href="/remote" className="text-sm text-ink-muted hover:text-ink transition-colors">Controle remoto</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-ink uppercase tracking-wider mb-4">
              Empresa
            </h4>
            <ul className="space-y-3">
              <li><Link href="/security" className="text-sm text-ink-muted hover:text-ink transition-colors">Segurança</Link></li>
              <li><Link href="/policies" className="text-sm text-ink-muted hover:text-ink transition-colors">Políticas</Link></li>
              <li><Link href="/how-it-works" className="text-sm text-ink-muted hover:text-ink transition-colors">Como funciona</Link></li>
              <li><a href="https://github.com/vexx-ai" className="text-sm text-ink-muted hover:text-ink transition-colors">GitHub</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-ink uppercase tracking-wider mb-4">
              Conecte-se
            </h4>
            <div className="flex gap-2">
              <a href="https://github.com/vexx-ai" aria-label="GitHub" className="w-9 h-9 rounded-lg border border-line flex items-center justify-center text-ink-muted hover:text-ink hover:border-line-strong transition-colors">
                <Github size={16} />
              </a>
              <a href="https://twitter.com/vexx-ai" aria-label="Twitter" className="w-9 h-9 rounded-lg border border-line flex items-center justify-center text-ink-muted hover:text-ink hover:border-line-strong transition-colors">
                <Twitter size={16} />
              </a>
              <a href="https://discord.gg/vexx" aria-label="Discord" className="w-9 h-9 rounded-lg border border-line flex items-center justify-center text-ink-muted hover:text-ink hover:border-line-strong transition-colors">
                <MessageCircle size={16} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-line flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-ink-subtle">
            © {new Date().getFullYear()} Vexx-AI. Todos os direitos reservados.
          </p>
          <p className="text-xs text-ink-subtle">Feito no Brasil.</p>
        </div>
      </div>
    </footer>
  );
}
