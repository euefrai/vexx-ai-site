"use client";

import React, { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import Button from "@/components/ui/Button";
import { Mail, Chrome, ArrowRight, CheckCircle2, AlertCircle } from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Inner form (needs useSearchParams → must be inside Suspense)       */
/* ------------------------------------------------------------------ */
function LoginForm() {
  const params = useSearchParams();
  const rawNext = params.get("next");
  const next = rawNext && rawNext.startsWith("/") && !rawNext.startsWith("//") ? rawNext : "/settings";
  const urlError = params.get("error");

  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const [email, setEmail] = useState("");
  const [emailState, setEmailState] = useState<
    "idle" | "loading" | "sent" | "error"
  >("idle");
  const [googleLoading, setGoogleLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  /* ---------- Google OAuth ---------- */
  const signInWithGoogle = async () => {
    setGoogleLoading(true);
    setErrorMsg(null);
    const supabase = createClient();
    const origin = process.env.NEXT_PUBLIC_SITE_URL ?? window.location.origin;
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${origin}/auth/callback?next=${encodeURIComponent(next)}`,
      },
    });
    if (error) {
      setGoogleLoading(false);
      setErrorMsg("Não foi possível conectar com o Google. Tente novamente.");
    }
  };

  /* ---------- Magic Link ---------- */
  const sendMagicLink = async () => {
    if (!email.trim()) {
      setErrorMsg("Por favor, insira seu email.");
      return;
    }
    setEmailState("loading");
    setErrorMsg(null);
    const supabase = createClient();
    const origin = process.env.NEXT_PUBLIC_SITE_URL ?? window.location.origin;

    const { error } = await supabase.auth.signInWithOtp({
      email: email.trim(),
      options: {
        emailRedirectTo: `${origin}/auth/callback?next=${encodeURIComponent(next)}`,
        // shouldCreateUser defaults to true in Supabase — let it handle both
        // sign-in and sign-up automatically (creates account if not existing).
      },
    });

    if (error) {
      setEmailState("error");
      setErrorMsg(error.message ?? "Erro ao enviar o link. Tente novamente.");
    } else {
      setEmailState("sent");
    }
  };

  /* ---------- Render ---------- */
  return (
    <div className="card shadow-card overflow-hidden">
      {/* Header */}
      <div className="px-8 pt-8 pb-6 border-b border-line">
        <div className="flex items-center justify-center gap-2 mb-6">
          {/* Logo mark */}
          <div className="w-9 h-9 rounded-xl bg-ink flex items-center justify-center shadow-sm">
            <span className="text-white text-base font-bold">V</span>
          </div>
        </div>

        {/* Mode toggle */}
        <div className="flex rounded-xl bg-[#F4F3F0] p-1 gap-1 mb-6">
          {(["signin", "signup"] as const).map((m) => (
            <button
              key={m}
              onClick={() => { setMode(m); setEmailState("idle"); setErrorMsg(null); }}
              className={`flex-1 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                mode === m
                  ? "bg-white text-ink shadow-sm"
                  : "text-ink-muted hover:text-ink"
              }`}
            >
              {m === "signin" ? "Entrar" : "Criar conta"}
            </button>
          ))}
        </div>

        <h1 className="text-xl font-semibold tracking-tight text-ink text-center">
          {mode === "signin" ? "Bem-vindo de volta" : "Crie sua conta Vexx"}
        </h1>
        <p className="text-sm text-ink-muted text-center mt-1">
          {mode === "signin"
            ? "Acesse sua conta para continuar."
            : "Comece gratuitamente, sem cartão de crédito."}
        </p>
      </div>

      {/* Body */}
      <div className="px-8 py-7 space-y-4">

        {/* Error from URL param (e.g. ?error=auth) */}
        {urlError && emailState !== "sent" && (
          <div className="flex items-start gap-2.5 p-3.5 rounded-xl bg-red-50 border border-red-100 text-sm text-red-700">
            <AlertCircle size={15} className="mt-0.5 shrink-0" />
            Não foi possível autenticar. Tente novamente.
          </div>
        )}

        {/* Inline error */}
        {errorMsg && emailState !== "sent" && (
          <div className="flex items-start gap-2.5 p-3.5 rounded-xl bg-red-50 border border-red-100 text-sm text-red-700">
            <AlertCircle size={15} className="mt-0.5 shrink-0" />
            {errorMsg}
          </div>
        )}

        {emailState === "sent" ? (
          /* ---- Success state ---- */
          <div className="flex flex-col items-center gap-3 py-6 text-center">
            <div className="w-14 h-14 rounded-full bg-accent-soft flex items-center justify-center">
              <CheckCircle2 size={28} className="text-accent" />
            </div>
            <h2 className="font-semibold text-ink">Link enviado!</h2>
            <p className="text-sm text-ink-muted max-w-xs">
              Verifique <span className="font-medium text-ink">{email}</span> e
              clique no link para {mode === "signin" ? "entrar" : "criar sua conta"}.
            </p>
            <button
              onClick={() => { setEmailState("idle"); setEmail(""); }}
              className="text-xs text-ink-muted underline underline-offset-2 mt-2 hover:text-ink transition-colors"
            >
              Tentar com outro email
            </button>
          </div>
        ) : (
          <>
            {/* Google button */}
            <Button
              variant="secondary"
              size="lg"
              className="w-full"
              onClick={signInWithGoogle}
              disabled={googleLoading || emailState === "loading"}
              id="btn-google-login"
            >
              <GoogleIcon />
              {googleLoading
                ? "Redirecionando…"
                : mode === "signin"
                ? "Continuar com Google"
                : "Cadastrar com Google"}
            </Button>

            {/* Divider */}
            <div className="flex items-center gap-3">
              <div className="flex-1 h-px bg-line" />
              <span className="text-xs text-ink-subtle font-medium">ou</span>
              <div className="flex-1 h-px bg-line" />
            </div>

            {/* Email Magic Link */}
            <div className="space-y-2.5">
              <div className="relative">
                <Mail
                  size={15}
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 text-ink-subtle pointer-events-none"
                />
                <input
                  id="input-email-login"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && sendMagicLink()}
                  placeholder="seu@email.com"
                  className="input pl-9"
                  disabled={emailState === "loading"}
                  autoComplete="email"
                  inputMode="email"
                />
              </div>
              <Button
                variant="primary"
                size="lg"
                className="w-full group"
                onClick={sendMagicLink}
                disabled={emailState === "loading"}
                id="btn-email-magic-link"
              >
                <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
                {emailState === "loading"
                  ? "Enviando…"
                  : mode === "signin"
                  ? "Enviar link de acesso"
                  : "Criar conta com email"}
              </Button>
            </div>
          </>
        )}
      </div>

      {/* Footer */}
      <div className="px-8 pb-7 text-center">
        <p className="text-xs text-ink-subtle leading-relaxed">
          Ao continuar você concorda com os{" "}
          <a href="/policies" className="underline hover:text-ink transition-colors">
            Termos de Uso
          </a>{" "}
          e a{" "}
          <a href="/policies" className="underline hover:text-ink transition-colors">
            Política de Privacidade
          </a>
          .
        </p>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                                */
/* ------------------------------------------------------------------ */
export default function LoginPage() {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center py-20 px-6">
      <div className="w-full max-w-md">
        <Suspense
          fallback={
            <div className="card p-8 text-center text-sm text-ink-muted">
              Carregando…
            </div>
          }
        >
          <LoginForm />
        </Suspense>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Google SVG icon                                                     */
/* ------------------------------------------------------------------ */
function GoogleIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M21.6 12.227c0-.708-.064-1.39-.182-2.045H12v3.868h5.382a4.6 4.6 0 0 1-1.996 3.018v2.51h3.232c1.89-1.741 2.982-4.305 2.982-7.35Z"
      />
      <path
        fill="currentColor"
        d="M12 22c2.7 0 4.964-.895 6.618-2.422l-3.232-2.51c-.895.6-2.04.955-3.386.955-2.605 0-4.81-1.76-5.596-4.123H3.064v2.59A9.996 9.996 0 0 0 12 22Z"
      />
      <path
        fill="currentColor"
        d="M6.404 13.9A6.005 6.005 0 0 1 6.09 12c0-.659.114-1.3.314-1.9V7.51H3.064A9.996 9.996 0 0 0 2 12c0 1.614.386 3.14 1.064 4.49l3.34-2.59Z"
      />
      <path
        fill="currentColor"
        d="M12 5.977c1.468 0 2.786.505 3.823 1.495l2.868-2.868C16.96 3.045 14.696 2 12 2A9.996 9.996 0 0 0 3.064 7.51l3.34 2.59C7.19 7.737 9.395 5.977 12 5.977Z"
      />
    </svg>
  );
}
