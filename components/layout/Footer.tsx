"use client";

import React from "react";
import Link from "next/link";
import { Github, Twitter, MessageCircle, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-16">
      <div className="container-page">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold mb-4">Vexx-AI</h3>
            <p className="text-zinc-500 text-sm leading-relaxed">
              The AI that thinks, plans, and executes on your computer.
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="font-bold mb-4 text-zinc-400">Product</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/download" className="text-zinc-500 hover:text-white transition-colors text-sm">
                  Download
                </Link>
              </li>
              <li>
                <Link href="/features" className="text-zinc-500 hover:text-white transition-colors text-sm">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-zinc-500 hover:text-white transition-colors text-sm">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/demo" className="text-zinc-500 hover:text-white transition-colors text-sm">
                  Demo
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-bold mb-4 text-zinc-400">Company</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/security" className="text-zinc-500 hover:text-white transition-colors text-sm">
                  Security
                </Link>
              </li>
              <li>
                <Link href="/policies" className="text-zinc-500 hover:text-white transition-colors text-sm">
                  Policies
                </Link>
              </li>
              <li>
                <a href="https://github.com/vexx-ai" className="text-zinc-500 hover:text-white transition-colors text-sm">
                  GitHub
                </a>
              </li>
              <li>
                <a href="https://discord.gg/vexx" className="text-zinc-500 hover:text-white transition-colors text-sm">
                  Discord
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-bold mb-4 text-zinc-400">Connect</h4>
            <div className="flex gap-4">
              <a href="https://github.com/vexx-ai" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors">
                <Github size={18} className="text-zinc-400" />
              </a>
              <a href="https://twitter.com/vexx-ai" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors">
                <Twitter size={18} className="text-zinc-400" />
              </a>
              <a href="https://discord.gg/vexx" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors">
                <MessageCircle size={18} className="text-zinc-400" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-zinc-600 text-sm">
            2024 Vexx-AI. All rights reserved.
          </p>
          <p className="text-zinc-600 text-sm flex items-center gap-2">
            Made with <Heart size={14} className="text-accent-red" /> for the future of computing
          </p>
        </div>
      </div>
    </footer>
  );
}
