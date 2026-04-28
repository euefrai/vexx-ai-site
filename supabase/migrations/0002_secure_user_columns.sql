-- =====================================================================
-- Vexx-AI — secure user-owned column updates.
--
-- The original migration (0001_init.sql) only added the row-level
-- security policy "users_update_own", which lets a user update their own
-- row. That policy does NOT restrict columns, so an authenticated client
-- using the public anon key could call:
--
--   await supabase.from("users").update({ plan: "premium" }).eq("id", uid)
--
-- and silently self-promote to a paid tier from the browser. This
-- migration closes that hole by replacing the broad UPDATE privilege
-- with column-scoped GRANTs. The Stripe webhook keeps working because
-- the service role bypasses both GRANTs and RLS.
-- =====================================================================

-- 1. Make sure the avatar column exists before granting on it.
alter table public.users
  add column if not exists avatar_url text;

-- 2. Strip the schema-default UPDATE privilege from end-user roles.
revoke update on public.users from anon;
revoke update on public.users from authenticated;

-- 3. Allow authenticated users to update only the safe profile fields.
grant update (name, avatar_url) on public.users to authenticated;

-- 4. Re-create the row-level policy idempotently. The column-level
--    GRANT above is what restricts which columns are writable; this
--    policy continues to restrict which ROW is writable.
drop policy if exists "users_update_own" on public.users;
create policy "users_update_own"
  on public.users
  for update
  using (auth.uid() = id)
  with check (auth.uid() = id);

-- 5. Defense in depth: explicitly deny end-user writes on
--    public.subscriptions. The Stripe webhook uses the service role
--    and is unaffected.
revoke insert, update, delete on public.subscriptions from anon;
revoke insert, update, delete on public.subscriptions from authenticated;

-- 6. Audit-friendly column docs.
comment on column public.users.plan is
  'Active subscription tier. Writable only via service role (Stripe webhook).';
comment on column public.users.stripe_customer_id is
  'Stripe customer reference. Writable only via service role (checkout endpoint).';
comment on column public.users.avatar_url is
  'Public avatar URL chosen by the user. Self-writable.';
