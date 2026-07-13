create extension if not exists pgcrypto;

create table if not exists public.admin_profiles (
  user_id uuid primary key references auth.users(id) on delete cascade,
  role text not null default 'admin' check (role = 'admin'),
  created_at timestamptz not null default now()
);

create table if not exists public.announcements (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  summary text not null,
  content text not null,
  level text not null default 'normal' check (level in ('normal','important','emergency')),
  is_pinned boolean not null default false,
  status text not null default 'draft' check (status in ('draft','published','archived')),
  publish_at timestamptz not null default now(),
  expire_at timestamptz,
  link_url text,
  attachment_url text,
  created_by uuid references auth.users(id),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint valid_active_period check (expire_at is null or expire_at > publish_at)
);

create index if not exists announcements_public_idx on public.announcements(status, publish_at, expire_at);
create index if not exists announcements_updated_idx on public.announcements(updated_at desc);

alter table public.admin_profiles enable row level security;
alter table public.announcements enable row level security;

create or replace function public.is_admin()
returns boolean language sql stable security definer set search_path = public
as $$ select exists(select 1 from public.admin_profiles where user_id = auth.uid() and role = 'admin') $$;

drop policy if exists "public reads active announcements" on public.announcements;
create policy "public reads active announcements" on public.announcements for select
using (status = 'published' and publish_at <= now() and (expire_at is null or expire_at > now()) or public.is_admin());

drop policy if exists "admins insert announcements" on public.announcements;
create policy "admins insert announcements" on public.announcements for insert with check (public.is_admin());
drop policy if exists "admins update announcements" on public.announcements;
create policy "admins update announcements" on public.announcements for update using (public.is_admin()) with check (public.is_admin());
drop policy if exists "admins delete announcements" on public.announcements;
create policy "admins delete announcements" on public.announcements for delete using (public.is_admin());

drop policy if exists "admins read own profile" on public.admin_profiles;
create policy "admins read own profile" on public.admin_profiles for select using (user_id = auth.uid());

create or replace function public.set_updated_at() returns trigger language plpgsql as $$
begin new.updated_at = now(); return new; end; $$;
drop trigger if exists announcements_set_updated_at on public.announcements;
create trigger announcements_set_updated_at before update on public.announcements for each row execute function public.set_updated_at();

-- Demo records are explicitly labelled and must be removed before production launch.
insert into public.announcements (title, summary, content, level, is_pinned, status, publish_at, expire_at)
values
('DEMO｜重要公告示例', '演示数据，不代表学校真实通知。', '用于验证重要公告样式。正式上线前请删除。', 'important', true, 'published', now(), now() + interval '30 days'),
('DEMO｜普通公告示例', '演示数据，不代表学校真实通知。', '用于验证普通公告样式。正式上线前请删除。', 'normal', false, 'published', now(), null),
('DEMO｜限时公告示例', '演示数据，不代表学校真实通知。', '用于验证自动过期。正式上线前请删除。', 'normal', false, 'published', now(), now() + interval '7 days');
