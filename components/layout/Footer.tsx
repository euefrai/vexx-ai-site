"use client";

import React from "react";
import Link from "next/link";
import { Cpu, Github, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative z-10 bg-black/50 border-t border-white/5 py-20 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent-cyan to-accent-purple flex items-center justify-center">
                <Cpu className="text-white w-5 h-5" />
              </div>
              <span className="text-lg font-bold tracking-tight text-white">Vexx-AI</span>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs">
              The next generation of desktop AI. Empowering you to automate everything, from anywhere.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Product</h4>
            <ul className="space-y-4">
              <li><Link href="/features" className="text-white/50 hover:text-white transition-colors text-sm">Features</Link></li>
              <li><Link href="/how-it-works" className="text-white/50 hover:text-white transition-colors text-sm">How it Works</Link></li>
              <li><Link href="/demo" className="text-white/50 hover:text-white transition-colors text-sm">Live Demo</Link></li>
              <li><Link href="/pricing" className="text-white/50 hover:text-white transition-colors text-sm">Pricing</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Company</h4>
            <ul className="space-y-4">
              <li><Link href="/security" className="text-white/50 hover:text-white transition-colors text-sm">Security</Link></li>
              <li><Link href="/policies" className="text-white/50 hover:text-white transition-colors text-sm">Privacy Policy</Link></li>
              <li><Link href="/policies" className="text-white/50 hover:text-white transition-colors text-sm">Terms of Service</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Connect</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition-all">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition-all">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/30 text-xs">
            © 2024 Vexx-AI. All rights reserved. Built with precision.
          </p>
          <div className="flex gap-6">
            <span className="text-[10px] text-white/20 uppercase tracking-widest">Local-First</span>
            <span className="text-[10px] text-white/20 uppercase tracking-widest">End-to-End Encrypted</span>
            <span className="text-[10px] text-white/20 uppercase tracking-widest">Open Source Core</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
