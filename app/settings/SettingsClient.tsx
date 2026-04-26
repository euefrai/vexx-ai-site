"use client";

import React, { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Button from "@/components/ui/Button";
import { Check, ExternalLink, LogOut } from "lucide-react";
import type { Plan } from "@/lib/plans";

type Subscription = {
  status: string;
  current_period_end: string | null;
  cancel_at_period_end: boolean;
} | null;

interface Props {
  email: string;
  name: string | null;
  plan: Plan;
  hasCustomer: boolean;
  subscription: Subscription;
}

const PLAN_LABEL: Record<Plan, string> = {
  free: "Grátis",
  pro: "Pro",
  premium: "Premium",
};

export default function SettingsClient({
  email,
  name,
  plan,
  hasCustomer,
  subscription,
}: Props) {
  const router = useRouter();
  const params = useSearchParams();
  const status = params.get("status");

  const [busy, setBusy] = useState<"checkout" | "portal" | "logout" | null>(null);

  const upgrade = async (target: "pro" | "premium") => {
    setBusy("checkout");
    const res = await fetch("/api/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ plan: target }),
    });
    const data = await res.json();
    if (data.url) {
      window.location.href = data.url;
    } else {
      setBusy(null);
      alert(data.error ?? "Erro ao iniciar checkout");
    }
  };

  const openPortal = async () => {
    setBusy("portal");
    const res = await fetch("/api/portal", { method: "POST" });
    const data = await res.json();
    if (data.url) {
      window.location.href = data.url;
    } else {
      setBusy(null);
      alert(data.error ?? "Erro ao abrir portal");
    }
  };

  const signOut = async () => {
    setBusy("logout");
    await fetch("/auth/signout", { method: "POST" });
    router.push("/");
    router.refresh();
  };

  return (
    <div className="pt-20 pb-24">
      <div className="container-prose">
        <div className="mb-10">
          <h1 className="h-display mb-3">Configurações</h1>
          <p className="lead">Gerencie sua conta e plano.</p>
        </div>

        {status === "success" && (
          <div className="card p-4 mb-6 border-accent/30 bg-accent-soft text-sm text-accent flex items-center gap-2">
            <Check size={16} />
            Pagamento confirmado. Seu plano será atualizado em instantes.
          </div>
        )}

        {/* Account */}
        <div className="card p-6 md:p-8 mb-5">
          <h2 className="h-card mb-5">Conta</h2>
          <dl className="space-y-4">
            <Field label="Nome" value={name ?? "—"} />
            <Field label="Email" value={email} />
            <Field
              label="Plano atual"
              value={
                <span className="inline-flex items-center gap-2">
                  <span className="font-medium text-ink">{PLAN_LABEL[plan]}</span>
                  {plan !== "free" && (
                    <span className="pill">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                      ativo
                    </span>
                  )}
                </span>
              }
            />
            {subscription?.current_period_end && (
              <Field
                label={
                  subscription.cancel_at_period_end
                    ? "Cancela em"
                    : "Renova em"
                }
                value={new Date(subscription.current_period_end).toLocaleDateString("pt-BR", {
                  day: "2-digit",
                  month: "long",
                  year: "numeric",
                })}
              />
            )}
          </dl>

          <div className="mt-7 pt-6 border-t border-line flex flex-wrap gap-3">
            {plan === "free" ? (
              <>
                <Button
                  variant="primary"
                  onClick={() => upgrade("pro")}
                  disabled={busy === "checkout"}
                >
                  Fazer upgrade para Pro
                </Button>
                <Button
                  variant="secondary"
                  onClick={() => upgrade("premium")}
                  disabled={busy === "checkout"}
                >
                  Ver Premium
                </Button>
              </>
            ) : (
              <Button
                variant="secondary"
                onClick={openPortal}
                disabled={busy === "portal" || !hasCustomer}
              >
                Gerenciar assinatura
                <ExternalLink size={14} />
              </Button>
            )}
            <Button
              variant="ghost"
              onClick={signOut}
              disabled={busy === "logout"}
              className="ml-auto"
            >
              <LogOut size={14} />
              Sair
            </Button>
          </div>
        </div>

        {/* Premium upsell when on Pro */}
        {plan === "pro" && (
          <div className="card p-6 md:p-8">
            <h3 className="h-card mb-2">Quer mais?</h3>
            <p className="text-sm text-ink-muted mb-5">
              Faça upgrade para Premium e desbloqueie todos os recursos avançados.
            </p>
            <Button
              variant="primary"
              onClick={() => upgrade("premium")}
              disabled={busy === "checkout"}
            >
              Upgrade para Premium
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

function Field({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
      <dt className="text-sm text-ink-muted">{label}</dt>
      <dd className="text-sm text-ink">{value}</dd>
    </div>
  );
}
