create table profiles (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text unique not null,
  role text not null default 'client',
  created_at timestamptz not null default now()
);

create table leads (
  id uuid primary key default gen_random_uuid(),
  protocol text unique not null,
  name text,
  phone text,
  email text,
  city text,
  status text not null default 'Novo contato',
  source text not null default 'Site',
  payload jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);

create table services (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text unique not null,
  description text,
  image_url text,
  active boolean not null default true
);

create table projects (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text unique not null,
  category text,
  location text,
  area text,
  deadline text,
  gallery jsonb not null default '[]'::jsonb
);

create table work_diary (
  id uuid primary key default gen_random_uuid(),
  project_id uuid references projects(id),
  entry_date date not null,
  services_done text,
  team text,
  materials text,
  media jsonb not null default '[]'::jsonb,
  next_steps text,
  created_at timestamptz not null default now()
);

create table calculator_settings (
  id uuid primary key default gen_random_uuid(),
  key text unique not null,
  value jsonb not null,
  updated_at timestamptz not null default now()
);

alter table profiles enable row level security;
alter table leads enable row level security;
alter table services enable row level security;
alter table projects enable row level security;
alter table work_diary enable row level security;
alter table calculator_settings enable row level security;
