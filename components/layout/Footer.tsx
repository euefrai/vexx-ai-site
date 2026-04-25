"use client";

import React from "react";
import Link from "next/link";
import { Github, Twitter, MessageCircle, Heart, Cpu } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 py-16 mt-12">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent-cyan/30 to-transparent" />
      <div className="container-page">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Marca */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-5 group">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-accent-cyan via-white to-accent-purple flex items-center justify-center shadow-[0_0_24px_-4px_rgba(0,245,255,0.6)] group-hover:rotate-6 transition-transform">
                <Cpu className="text-black w-5 h-5" />
              </div>
              <span className="text-xl font-semibold tracking-tight text-white">
                Vexx<span className="text-accent-cyan">·</span>AI
              </span>
            </Link>
            <p className="text-zinc-500 text-sm leading-relaxed">
              A IA que pensa, planeja e executa tarefas no seu computador. 100% local.
            </p>
          </div>

          {/* Produto */}
          <div>
            <h4 className="font-semibold mb-4 text-zinc-300 text-sm uppercase tracking-wider">Produto</h4>
            <ul className="space-y-3">
              <li><Link href="/download" className="text-zinc-500 hover:text-white transition-colors text-sm">Baixar</Link></li>
              <li><Link href="/features" className="text-zinc-500 hover:text-white transition-colors text-sm">Recursos</Link></li>
              <li><Link href="/pricing" className="text-zinc-500 hover:text-white transition-colors text-sm">Preço</Link></li>
              <li><Link href="/demo" className="text-zinc-500 hover:text-white transition-colors text-sm">Demonstração</Link></li>
              <li><Link href="/remote" className="text-zinc-500 hover:text-white transition-colors text-sm">Controle remoto</Link></li>
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <h4 className="font-semibold mb-4 text-zinc-300 text-sm uppercase tracking-wider">Empresa</h4>
            <ul className="space-y-3">
              <li><Link href="/security" className="text-zinc-500 hover:text-white transition-colors text-sm">Segurança</Link></li>
              <li><Link href="/policies" className="text-zinc-500 hover:text-white transition-colors text-sm">Políticas</Link></li>
              <li><Link href="/how-it-works" className="text-zinc-500 hover:text-white transition-colors text-sm">Como funciona</Link></li>
              <li><a href="https://github.com/vexx-ai" className="text-zinc-500 hover:text-white transition-colors text-sm">GitHub</a></li>
            </ul>
          </div>

          {/* Conexão */}
          <div>
            <h4 className="font-semibold mb-4 text-zinc-300 text-sm uppercase tracking-wider">Conecte-se</h4>
            <p className="text-zinc-500 text-sm mb-4">Siga nosso desenvolvimento e participe da comunidade.</p>
            <div className="flex gap-3">
              <a href="https://github.com/vexx-ai" aria-label="GitHub" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-accent-cyan/40 transition-all">
                <Github size={18} className="text-zinc-300" />
              </a>
              <a href="https://twitter.com/vexx-ai" aria-label="Twitter" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-accent-cyan/40 transition-all">
                <Twitter size={18} className="text-zinc-300" />
              </a>
              <a href="https://discord.gg/vexx" aria-label="Discord" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-accent-cyan/40 transition-all">
                <MessageCircle size={18} className="text-zinc-300" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-zinc-600 text-sm">
            © {new Date().getFullYear()} Vexx-AI. Todos os direitos reservados.
          </p>
          <p className="text-zinc-600 text-sm flex items-center gap-2">
            Feito com <Heart size={14} className="text-accent-red fill-accent-red animate-pulse" /> no Brasil
          </p>
        </div>
      </div>
    </footer>
  );
}
