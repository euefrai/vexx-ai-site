"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Cpu, Download, ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";

const navLinks = [
  { name: "How it Works", href: "/how-it-works" },
  { name: "Features", href: "/features" },
  { name: "Demo", href: "/demo" },
  { name: "Security", href: "/security" },
  { name: "Pricing", href: "/pricing" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "py-4" : "py-6"
      }`}
    >
      <div className="container mx-auto px-6">
        <div
          className={`flex items-center justify-between px-6 py-3 rounded-full transition-all duration-300 ${
            scrolled ? "bg-black/40 backdrop-blur-xl border border-white/10 shadow-2xl" : "bg-transparent"
          }`}
        >
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent-cyan to-accent-purple flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
              <Cpu className="text-white w-6 h-6" />
            </div>
            <span className="text-xl font-bold tracking-tight text-white">Vexx-AI</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-white/70 hover:text-white transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <Link href="/download">
              <Button variant="outline" size="sm">
                <Download className="w-4 h-4" />
                Download
              </Button>
            </Link>
            <Link href="/demo">
              <Button variant="primary" size="sm">
                Try Beta <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-black/90 backdrop-blur-2xl border-b border-white/10 md:hidden p-6"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-lg font-medium text-white/70"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex flex-col gap-4 pt-4 border-t border-white/10">
                <Link href="/download" onClick={() => setIsOpen(false)}>
                  <Button variant="outline" className="w-full">
                    Download
                  </Button>
                </Link>
                <Link href="/demo" onClick={() => setIsOpen(false)}>
                  <Button variant="primary" className="w-full">
                    Try Beta
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
