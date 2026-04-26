"use client";

import React, { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import Button from "@/components/ui/Button";

function LoginForm() {
  const params = useSearchParams();
  const next = params.get("next") ?? "/settings";
  const error = params.get("error");
  const [loading, setLoading] = useState(false);

  const signInWithGoogle = async () => {
    setLoading(true);
    const supabase = createClient();
    const origin =
      process.env.NEXT_PUBLIC_SITE_URL ?? window.location.origin;
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${origin}/auth/callback?next=${encodeURIComponent(next)}`,
      },
    });
    if (error) {
      setLoading(false);
      console.error(error);
    }
  };

  return (
    <div className="card p-8 md:p-10 text-center shadow-card">
      <h1 className="text-2xl font-semibold tracking-tight text-ink mb-2">
        Entrar no Vexx
      </h1>
      <p className="text-sm text-ink-muted mb-8">
        Use sua conta Google para continuar.
      </p>

      {error && (
        <div className="mb-6 p-3 rounded-lg bg-red-50 border border-red-100 text-sm text-red-700">
          Não foi possível autenticar. Tente novamente.
        </div>
      )}

      <Button
        variant="primary"
        size="lg"
        className="w-full"
        onClick={signInWithGoogle}
        disabled={loading}
      >
        <GoogleIcon />
        {loading ? "Redirecionando…" : "Continuar com Google"}
      </Button>

      <p className="mt-6 text-xs text-ink-subtle">
        Ao continuar você concorda com os{" "}
        <a href="/policies" className="underline hover:text-ink">
          Termos
        </a>{" "}
        e a{" "}
        <a href="/policies" className="underline hover:text-ink">
          Política de privacidade
        </a>
        .
      </p>
    </div>
  );
}

export default function LoginPage() {
  return (
    <div className="pt-20 pb-24">
      <div className="container-prose max-w-md">
        <Suspense fallback={<div className="card p-8">Carregando…</div>}>
          <LoginForm />
        </Suspense>
      </div>
    </div>
  );
}

function GoogleIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="#FFFFFF"
        d="M21.6 12.227c0-.708-.064-1.39-.182-2.045H12v3.868h5.382a4.6 4.6 0 0 1-1.996 3.018v2.51h3.232c1.89-1.741 2.982-4.305 2.982-7.35Z"
      />
      <path
        fill="#FFFFFF"
        d="M12 22c2.7 0 4.964-.895 6.618-2.422l-3.232-2.51c-.895.6-2.04.955-3.386.955-2.605 0-4.81-1.76-5.596-4.123H3.064v2.59A9.996 9.996 0 0 0 12 22Z"
      />
      <path
        fill="#FFFFFF"
        d="M6.404 13.9A6.005 6.005 0 0 1 6.09 12c0-.659.114-1.3.314-1.9V7.51H3.064A9.996 9.996 0 0 0 2 12c0 1.614.386 3.14 1.064 4.49l3.34-2.59Z"
      />
      <path
        fill="#FFFFFF"
        d="M12 5.977c1.468 0 2.786.505 3.823 1.495l2.868-2.868C16.96 3.045 14.696 2 12 2A9.996 9.996 0 0 0 3.064 7.51l3.34 2.59C7.19 7.737 9.395 5.977 12 5.977Z"
      />
    </svg>
  );
}
