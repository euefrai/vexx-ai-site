"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X, User } from "lucide-react";
import { createClient, isSupabaseConfigured } from "@/lib/supabase/client";
import type { User as SupabaseUser } from "@supabase/supabase-js";

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
  const [user, setUser] = useState<SupabaseUser | null>(null);
  const [authReady, setAuthReady] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!isSupabaseConfigured()) {
      setAuthReady(true);
      return;
    }
    const supabase = createClient();
    let active = true;
    supabase.auth.getUser().then(({ data }) => {
      if (!active) return;
      setUser(data.user);
      setAuthReady(true);
    });
    const { data: sub } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
      setAuthReady(true);
      router.refresh();
    });
    return () => {
      active = false;
      sub.subscription.unsubscribe();
    };
  }, [router]);

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-200 ${
        scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-line"
          : "bg-background/60 backdrop-blur-sm border-b border-transparent"
      }`}
    >
      <div className="container-page">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-7 h-7 rounded-lg bg-ink flex items-center justify-center">
              <span className="text-white text-sm font-semibold">V</span>
            </div>
            <span className="text-base font-semibold tracking-tight text-ink">
              Vexx
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    active ? "text-ink" : "text-ink-muted hover:text-ink"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          <div className="hidden lg:flex items-center gap-2">
            {!authReady ? (
              <div className="w-24 h-8" />
            ) : user ? (
              <Link
                href="/settings"
                className="btn btn-secondary btn-sm"
                aria-label="Configurações"
              >
                <User size={14} />
                Conta
              </Link>
            ) : (
              <>
                <Link href="/login" className="btn btn-ghost btn-sm">
                  Entrar
                </Link>
                <Link href="/download" className="btn btn-primary btn-sm">
                  Baixar
                </Link>
              </>
            )}
          </div>

          <button
            className="lg:hidden text-ink p-2 -mr-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden border-t border-line bg-background">
          <div className="container-page py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="px-3 py-2.5 rounded-lg text-base font-medium text-ink-muted hover:text-ink hover:bg-black/[0.03]"
              >
                {link.name}
              </Link>
            ))}
            <div className="mt-3 flex flex-col gap-2">
              {user ? (
                <Link
                  href="/settings"
                  className="btn btn-secondary btn-md w-full"
                >
                  <User size={14} />
                  Minha conta
                </Link>
              ) : (
                <>
                  <Link href="/login" className="btn btn-secondary btn-md w-full">
                    Entrar
                  </Link>
                  <Link href="/download" className="btn btn-primary btn-md w-full">
                    Baixar
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
