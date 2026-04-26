-- =====================================================================
-- Vexx-AI — initial schema
-- Run this in Supabase SQL editor (or via `supabase db push`).
-- =====================================================================

-- ---------- ENUMS ----------
do $$ begin
  create type plan_tier as enum ('free', 'pro', 'premium');
exception when duplicate_object then null; end $$;

do $$ begin
  create type subscription_status as enum (
    'incomplete', 'incomplete_expired', 'trialing',
    'active', 'past_due', 'canceled', 'unpaid', 'paused'
  );
exception when duplicate_object then null; end $$;

-- ---------- USERS ----------
-- One row per signed-up user. PK is auth.users.id (1-1).
create table if not exists public.users (
  id          uuid primary key references auth.users(id) on delete cascade,
  email       text not null,
  name        text,
  plan        plan_tier not null default 'free',
  stripe_customer_id text unique,
  created_at  timestamptz not null default now(),
  updated_at  timestamptz not null default now()
);

create index if not exists users_stripe_customer_idx on public.users(stripe_customer_id);

-- ---------- SUBSCRIPTIONS ----------
create table if not exists public.subscriptions (
  id                       uuid primary key default gen_random_uuid(),
  user_id                  uuid not null references public.users(id) on delete cascade,
  stripe_customer_id       text not null,
  stripe_subscription_id   text not null unique,
  stripe_price_id          text,
  status                   subscription_status not null,
  current_period_end       timestamptz,
  cancel_at_period_end     boolean not null default false,
  created_at               timestamptz not null default now(),
  updated_at               timestamptz not null default now()
);

create index if not exists subscriptions_user_idx on public.subscriptions(user_id);
create index if not exists subscriptions_status_idx on public.subscriptions(status);

-- ---------- updated_at trigger ----------
create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists users_set_updated_at on public.users;
create trigger users_set_updated_at
  before update on public.users
  for each row execute function public.set_updated_at();

drop trigger if exists subscriptions_set_updated_at on public.subscriptions;
create trigger subscriptions_set_updated_at
  before update on public.subscriptions
  for each row execute function public.set_updated_at();

-- ---------- Auto-create user row on signup ----------
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer set search_path = public
as $$
begin
  insert into public.users (id, email, name, plan)
  values (
    new.id,
    new.email,
    coalesce(new.raw_user_meta_data->>'full_name', new.raw_user_meta_data->>'name'),
    'free'
  )
  on conflict (id) do nothing;
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();

-- ---------- ROW LEVEL SECURITY ----------
alter table public.users         enable row level security;
alter table public.subscriptions enable row level security;

-- USERS: each user can read/update only their own row.
drop policy if exists "users_select_own" on public.users;
create policy "users_select_own"
  on public.users for select
  using (auth.uid() = id);

drop policy if exists "users_update_own" on public.users;
create policy "users_update_own"
  on public.users for update
  using (auth.uid() = id)
  with check (auth.uid() = id);

-- SUBSCRIPTIONS: read-only for the owner. Writes happen via service role
-- (Stripe webhook), which bypasses RLS.
drop policy if exists "subscriptions_select_own" on public.subscriptions;
create policy "subscriptions_select_own"
  on public.subscriptions for select
  using (auth.uid() = user_id);
