-- =====================================================================
-- Migration: Enforce secure updates for sensitive fields
-- Purpose: Prevent authenticated users from manually updating their 
--          plan or stripe_customer_id, bypassing billing.
-- =====================================================================

create or replace function public.protect_user_fields()
returns trigger
language plpgsql
security definer set search_path = public
as $$
declare
  user_role text;
begin
  user_role := current_setting('request.jwt.claims', true)::jsonb->>'role';
  
  -- Only apply restrictions to 'authenticated' or 'anon' users via API.
  -- Bypasses for 'service_role' or direct db connections.
  if user_role = 'authenticated' or user_role = 'anon' then
    if new.plan <> old.plan then
      raise exception 'Cannot update plan directly. Contact support.';
    end if;
    if new.stripe_customer_id is distinct from old.stripe_customer_id and old.stripe_customer_id is not null then
      raise exception 'Cannot update stripe_customer_id directly.';
    end if;
  end if;
  
  return new;
end;
$$;

drop trigger if exists enforce_secure_user_update on public.users;
create trigger enforce_secure_user_update
  before update on public.users
  for each row execute function public.protect_user_fields();
