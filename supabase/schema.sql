-- Starter schema for the announcement feature.
-- Codex should review and expand this file during implementation.

create extension if not exists pgcrypto;

create type public.announcement_level as enum ('normal', 'important', 'emergency');
create type public.announcement_status as enum ('draft', 'published', 'archived');

create table public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  role text not null default 'viewer' check (role in ('viewer', 'admin')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.announcements (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  summary text,
  content text not null,
  level public.announcement_level not null default 'normal',
  is_pinned boolean not null default false,
  status public.announcement_status not null default 'draft',
  publish_at timestamptz,
  expire_at timestamptz,
  link_url text,
  attachment_url text,
  created_by uuid references auth.users(id),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint announcement_time_range check (
    expire_at is null or publish_at is null or expire_at > publish_at
  )
);

alter table public.profiles enable row level security;
alter table public.announcements enable row level security;

create policy "Users can read their own profile"
on public.profiles for select
to authenticated
using (auth.uid() = id);

create policy "Public can read active announcements"
on public.announcements for select
to anon, authenticated
using (
  status = 'published'
  and coalesce(publish_at, created_at) <= now()
  and (expire_at is null or expire_at > now())
);

create policy "Admins can manage announcements"
on public.announcements for all
to authenticated
using (
  exists (
    select 1 from public.profiles p
    where p.id = auth.uid() and p.role = 'admin'
  )
)
with check (
  exists (
    select 1 from public.profiles p
    where p.id = auth.uid() and p.role = 'admin'
  )
);
