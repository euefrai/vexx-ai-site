"use client";

import React, { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Button from "@/components/ui/Button";
import {
  Check,
  ExternalLink,
  LogOut,
  User,
  CreditCard,
  Zap,
  Star,
  Crown,
} from "lucide-react";
import { PRICING_PLANS, type PlanTier, type BillingPeriod } from "@/lib/pricing";

type Subscription = {
  status: string;
  current_period_end: string | null;
  cancel_at_period_end: boolean;
} | null;

interface Props {
  email: string;
  name: string | null;
  plan: PlanTier;
  hasCustomer: boolean;
  subscription: Subscription;
}

/* ------------------------------------------------------------------ */
/*  Plan metadata styles                                                */
/* ------------------------------------------------------------------ */
const PLAN_META: Record<
  PlanTier,
  { icon: React.ReactNode; color: string; bg: string }
> = {
  free: {
    icon: <Zap size={18} />,
    color: "text-ink-muted",
    bg: "bg-[#F4F3F0]",
  },
  pro: {
    icon: <Star size={18} />,
    color: "text-amber-600",
    bg: "bg-amber-50",
  },
  premium: {
    icon: <Crown size={18} />,
    color: "text-accent",
    bg: "bg-accent-soft",
  },
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

  const [tab, setTab] = useState<"account" | "plan">("account");
  const [busy, setBusy] = useState<"checkout" | "portal" | "logout" | null>(
    null
  );
  const [isYearly, setIsYearly] = useState(false);

  /* ---------- Actions ---------- */
  const upgrade = async (target: PlanTier) => {
    setBusy("checkout");
    const res = await fetch("/api/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ plan: target, billing: isYearly ? "yearly" : "monthly" }),
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

  const currentPlanData = PRICING_PLANS.find((p) => p.id === plan)!;
  const meta = PLAN_META[plan];

  /* ---------- Render ---------- */
  return (
    <div className="pt-20 pb-24">
      <div className="container-prose">
        {/* Page header */}
        <div className="mb-8">
          <h1 className="h-display mb-2">Configurações</h1>
          <p className="lead">Gerencie sua conta e assinatura.</p>
        </div>

        {/* Success banner */}
        {status === "success" && (
          <div className="card p-4 mb-6 border-accent/30 bg-accent-soft text-sm text-accent flex items-center gap-2">
            <Check size={16} />
            Pagamento confirmado. Seu plano foi atualizado!
          </div>
        )}

        {/* Tabs */}
        <div className="flex gap-1 mb-6 bg-[#F4F3F0] p-1 rounded-xl w-fit">
          {(
            [
              { key: "account", label: "Conta", icon: <User size={14} /> },
              { key: "plan", label: "Plano", icon: <CreditCard size={14} /> },
            ] as const
          ).map(({ key, label, icon }) => (
            <button
              key={key}
              onClick={() => setTab(key)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                tab === key
                  ? "bg-white text-ink shadow-sm"
                  : "text-ink-muted hover:text-ink"
              }`}
              id={`tab-settings-${key}`}
            >
              {icon}
              {label}
            </button>
          ))}
        </div>

        {/* ---- TAB: ACCOUNT ---- */}
        {tab === "account" && (
          <div className="card p-6 md:p-8 fade-up">
            <h2 className="h-card mb-6">Informações da conta</h2>
            <dl className="space-y-5">
              <Field label="Nome" value={name ?? "—"} />
              <Field label="Email" value={email} />
              <Field
                label="Plano atual"
                value={
                  <span className="inline-flex items-center gap-2">
                    <span
                      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-semibold ${meta.bg} ${meta.color}`}
                    >
                      {meta.icon}
                      {currentPlanData.name}
                    </span>
                    {plan !== "free" && (
                      <span className="text-xs text-ink-subtle">ativo</span>
                    )}
                  </span>
                }
              />
              {subscription?.current_period_end && (
                <Field
                  label={
                    subscription.cancel_at_period_end ? "Cancela em" : "Renova em"
                  }
                  value={new Date(
                    subscription.current_period_end
                  ).toLocaleDateString("pt-BR", {
                    day: "2-digit",
                    month: "long",
                    year: "numeric",
                  })}
                />
              )}
            </dl>

            <div className="mt-7 pt-6 border-t border-line flex flex-wrap gap-3">
              <Button
                variant="secondary"
                onClick={() => setTab("plan")}
                id="btn-view-plan"
              >
                <CreditCard size={14} />
                Ver plano
              </Button>
              {plan !== "free" && (
                <Button
                  variant="secondary"
                  onClick={openPortal}
                  disabled={busy === "portal" || !hasCustomer}
                  id="btn-manage-subscription"
                >
                  Gerenciar assinatura
                  <ExternalLink size={14} />
                </Button>
              )}
              <Button
                variant="ghost"
                onClick={signOut}
                disabled={busy === "logout"}
                className="ml-auto text-red-600 hover:text-red-700 hover:bg-red-50"
                id="btn-logout"
              >
                <LogOut size={14} />
                Sair
              </Button>
            </div>
          </div>
        )}

        {/* ---- TAB: PLAN ---- */}
        {tab === "plan" && (
          <div className="space-y-6 fade-up">
            {/* Current plan highlight */}
            <div
              className={`card p-6 md:p-8 border-2 ${
                plan !== "free" ? "border-accent/30" : "border-line"
              }`}
            >
              <div className="flex items-start justify-between gap-4 flex-wrap">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-ink-subtle mb-2">
                    Seu plano atual
                  </p>
                  <div className="flex items-center gap-3 mb-2">
                    <span
                      className={`inline-flex items-center justify-center w-10 h-10 rounded-xl ${meta.bg} ${meta.color}`}
                    >
                      {meta.icon}
                    </span>
                    <h2 className="text-2xl font-bold tracking-tight text-ink">
                      {currentPlanData.name}
                    </h2>
                    {plan !== "free" && (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent-soft text-accent text-xs font-semibold">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                        Ativo
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-ink-muted">{currentPlanData.description}</p>
                  {subscription?.current_period_end && (
                    <p className="text-xs text-ink-subtle mt-2">
                      {subscription.cancel_at_period_end
                        ? "⚠️ Cancela em "
                        : "Renova automaticamente em "}
                      <span className="font-medium text-ink-muted">
                        {new Date(
                          subscription.current_period_end
                        ).toLocaleDateString("pt-BR", {
                          day: "2-digit",
                          month: "long",
                          year: "numeric",
                        })}
                      </span>
                    </p>
                  )}
                </div>
                {plan !== "free" && (
                  <Button
                    variant="secondary"
                    onClick={openPortal}
                    disabled={busy === "portal" || !hasCustomer}
                    id="btn-manage-plan-portal"
                  >
                    Gerenciar
                    <ExternalLink size={14} />
                  </Button>
                )}
              </div>
            </div>

            <div className="flex items-center justify-center gap-3 my-6">
              <span
                className={`text-sm ${
                  !isYearly ? "text-ink font-medium" : "text-ink-subtle"
                }`}
              >
                Mensal
              </span>
              <button
                onClick={() => setIsYearly(!isYearly)}
                className="w-11 h-6 rounded-full bg-line p-0.5 flex items-center transition-colors hover:bg-line-strong"
                aria-label="Alternar período de cobrança"
              >
                <div
                  className={`w-5 h-5 rounded-full bg-ink transition-transform ${
                    isYearly ? "translate-x-5" : "translate-x-0"
                  }`}
                />
              </button>
              <span
                className={`text-sm ${
                  isYearly ? "text-ink font-medium" : "text-ink-subtle"
                }`}
              >
                Anual <span className="text-accent">−20%</span>
              </span>
            </div>

            {/* Plan comparison cards */}
            <div className="grid md:grid-cols-3 gap-4">
              {PRICING_PLANS.map((p) => {
                const m = PLAN_META[p.id];
                const isCurrent = p.id === plan;
                const isDowngrade =
                  p.id === "free" ||
                  (plan === "premium" && p.id === "pro");

                return (
                  <div
                    key={p.id}
                    className={`card p-6 flex flex-col gap-4 transition-all duration-200 ${
                      isCurrent
                        ? "border-accent/40 shadow-md"
                        : "hover:border-line-strong"
                    }`}
                  >
                    {/* Header */}
                    <div>
                      <span
                        className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-semibold mb-3 ${m.bg} ${m.color}`}
                      >
                        {m.icon}
                        {p.name}
                      </span>
                      {isCurrent && (
                        <span className="ml-2 text-xs font-medium text-accent">
                          ✓ atual
                        </span>
                      )}
                      <div className="mt-2 flex items-baseline gap-1.5">
                        <span className="text-2xl font-semibold text-ink">
                          {isYearly ? p.prices.yearly.amount : p.prices.monthly.amount}
                        </span>
                        <span className="text-xs text-ink-subtle">
                          {p.id === "free" ? "" : "/ mês"}
                        </span>
                      </div>
                    </div>

                    {/* Features */}
                    <ul className="space-y-2.5 flex-1 mt-2">
                      {p.features.map((f) => (
                        <li key={f} className="flex items-center gap-2 text-sm text-ink-muted">
                          <Check
                            size={13}
                            className={isCurrent ? "text-accent" : "text-ink-subtle"}
                          />
                          {f}
                        </li>
                      ))}
                    </ul>

                    {/* CTA */}
                    <div className="pt-4 border-t border-line">
                      {isCurrent ? (
                        <span className="text-xs font-medium text-ink-subtle">
                          Plano atual
                        </span>
                      ) : isDowngrade ? (
                        <span className="text-xs text-ink-subtle">—</span>
                      ) : (
                        <Button
                          variant={p.id === "premium" ? "accent" : "secondary"}
                          size="sm"
                          className="w-full"
                          onClick={() => upgrade(p.id)}
                          disabled={busy === "checkout"}
                          id={`btn-upgrade-${p.id}`}
                        >
                          Fazer upgrade
                        </Button>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Field helper                                                        */
/* ------------------------------------------------------------------ */
function Field({
  label,
  value,
}: {
  label: string;
  value: React.ReactNode;
}) {
  return (
    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1.5">
      <dt className="text-sm text-ink-muted font-medium">{label}</dt>
      <dd className="text-sm text-ink">{value}</dd>
    </div>
  );
}
