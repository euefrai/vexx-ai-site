import { redirect } from "next/navigation";
import { createClient, isSupabaseConfigured } from "@/lib/supabase/server";
import SettingsClient from "./SettingsClient";

export const dynamic = "force-dynamic";

export default async function SettingsPage() {
  if (!isSupabaseConfigured()) {
    redirect("/login");
  }

  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login?next=/settings");
  }

  const { data: profile } = await supabase
    .from("users")
    .select("email, name, plan, stripe_customer_id, created_at")
    .eq("id", user.id)
    .single();

  const { data: subscription } = await supabase
    .from("subscriptions")
    .select("status, current_period_end, cancel_at_period_end")
    .eq("user_id", user.id)
    .order("created_at", { ascending: false })
    .limit(1)
    .maybeSingle();

  return (
    <SettingsClient
      email={profile?.email ?? user.email ?? ""}
      name={profile?.name ?? null}
      plan={(profile?.plan as "free" | "pro" | "premium") ?? "free"}
      hasCustomer={Boolean(profile?.stripe_customer_id)}
      subscription={subscription ?? null}
    />
  );
}
