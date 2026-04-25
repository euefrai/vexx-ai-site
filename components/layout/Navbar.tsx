"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Cpu, Download, ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";

const navLinks = [
  { name: "Como funciona", href: "/how-it-works" },
  { name: "Recursos", href: "/features" },
  { name: "Remoto", href: "/remote" },
  { name: "Segurança", href: "/security" },
  { name: "Preço", href: "/pricing" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <nav className="fixed top-0 inset-x-0 z-50 transition-all duration-300">
      <div className="container-page pt-4">
        <div
          className={`flex items-center justify-between gap-6 px-4 md:px-5 py-2.5 rounded-full transition-all duration-300 ${
            scrolled
              ? "bg-black/55 backdrop-blur-2xl border border-white/10 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.6)]"
              : "bg-black/20 backdrop-blur-md border border-white/5"
          }`}
        >
          <Link href="/" className="flex items-center gap-2.5 group shrink-0">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-accent-cyan via-white to-accent-purple flex items-center justify-center shadow-[0_0_24px_-4px_rgba(0,245,255,0.6)] group-hover:rotate-6 transition-transform duration-300">
              <Cpu className="text-black w-5 h-5" />
            </div>
            <span className="text-lg font-semibold tracking-tight text-white">
              Vexx<span className="text-accent-cyan">·</span>AI
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-1 mx-auto">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    active
                      ? "text-white bg-white/[0.06]"
                      : "text-zinc-400 hover:text-white hover:bg-white/[0.04]"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <Link href="/download">
              <Button variant="neon" size="sm" className="glow-pulse">
                <Download className="w-4 h-4" />
                Baixar agora
              </Button>
            </Link>
          </div>

          <button
            className="lg:hidden text-white p-2 -mr-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden mx-6 mt-3 rounded-3xl bg-black/85 backdrop-blur-2xl border border-white/10 p-6"
          >
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="px-4 py-3 rounded-xl text-base font-medium text-zinc-300 hover:text-white hover:bg-white/5"
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex flex-col gap-3 pt-4 mt-2 border-t border-white/10">
                <Link href="/download">
                  <Button variant="neon" className="w-full glow-pulse">
                    <Download className="w-4 h-4" />
                    Baixar agora
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
