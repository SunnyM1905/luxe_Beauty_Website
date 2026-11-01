-- ============================================
-- Luxe Beauty Parlour - Database Schema
-- ============================================

-- Enable necessary extensions
create extension if not exists "uuid-ossp";
create extension if not exists "pgcrypto";

-- ============================================
-- Users & Auth
-- ============================================
create table public.users (
  id uuid references auth.users on delete cascade primary key,
  email text unique,
  phone text unique,
  role text not null default 'client' check (role in ('admin', 'receptionist', 'stylist', 'client')),
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create table public.profiles (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid references public.users(id) on delete cascade unique,
  full_name text not null,
  avatar_url text,
  phone text,
  preferences jsonb default '{}',
  private_notes text,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- ============================================
-- Services & Categories
-- ============================================
create table public.categories (
  id uuid primary key default uuid_generate_v4(),
  name text not null unique,
  slug text not null unique,
  description text,
  created_at timestamptz default now()
);

create table public.services (
  id uuid primary key default uuid_generate_v4(),
  category_id uuid references public.categories(id) on delete set null,
  name text not null,
  description text,
  duration_minutes integer not null,
  price numeric(10,2) not null,
  image_url text,
  is_active boolean default true,
  created_at timestamptz default now()
);

-- ============================================
-- Staff & Schedules
-- ============================================
create table public.staff (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid references public.users(id) on delete set null unique,
  full_name text not null,
  role text not null,
  specialties text[] default '{}',
  bio text,
  experience_years integer,
  photo_url text,
  is_active boolean default true,
  created_at timestamptz default now()
);

create table public.staff_schedules (
  id uuid primary key default uuid_generate_v4(),
  staff_id uuid references public.staff(id) on delete cascade,
  day_of_week integer not null check (day_of_week between 0 and 6),
  start_time time not null,
  end_time time not null,
  break_start time,
  break_end time,
  is_available boolean default true,
  created_at timestamptz default now()
);

create table public.staff_time_off (
  id uuid primary key default uuid_generate_v4(),
  staff_id uuid references public.staff(id) on delete cascade,
  start_date date not null,
  end_date date not null,
  reason text,
  created_at timestamptz default now()
);

-- ============================================
-- Bookings
-- ============================================
create table public.bookings (
  id uuid primary key default uuid_generate_v4(),
  client_id uuid references public.users(id) on delete set null,
  staff_id uuid references public.staff(id) on delete set null,
  service_ids uuid[] not null,
  date date not null,
  start_time time not null,
  end_time time not null,
  status text not null default 'confirmed' check (status in ('pending', 'confirmed', 'completed', 'cancelled', 'no_show')),
  notes text,
  deposit_paid numeric(10,2) default 0,
  total_amount numeric(10,2) not null,
  cancellation_reason text,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- ============================================
-- Payments
-- ============================================
create table public.payments (
  id uuid primary key default uuid_generate_v4(),
  booking_id uuid references public.bookings(id) on delete cascade,
  amount numeric(10,2) not null,
  method text not null check (method in ('cash', 'card', 'upi', 'online', 'razorpay', 'stripe')),
  status text not null default 'pending' check (status in ('pending', 'completed', 'failed', 'refunded')),
  transaction_id text,
  receipt_url text,
  paid_at timestamptz,
  created_at timestamptz default now()
);

-- ============================================
-- Reviews
-- ============================================
create table public.reviews (
  id uuid primary key default uuid_generate_v4(),
  booking_id uuid references public.bookings(id) on delete cascade unique,
  client_id uuid references public.users(id) on delete cascade,
  staff_id uuid references public.staff(id) on delete set null,
  rating integer not null check (rating between 1 and 5),
  comment text,
  photos text[] default '{}',
  status text not null default 'pending' check (status in ('pending', 'approved', 'rejected')),
  created_at timestamptz default now()
);

-- ============================================
-- Gallery
-- ============================================
create table public.gallery (
  id uuid primary key default uuid_generate_v4(),
  category text not null,
  image_url text not null,
  caption text,
  is_featured boolean default false,
  created_at timestamptz default now()
);

-- ============================================
-- Offers & Discounts
-- ============================================
create table public.offers (
  id uuid primary key default uuid_generate_v4(),
  code text unique not null,
  description text,
  discount_type text not null check (discount_type in ('percentage', 'flat')),
  discount_value numeric(10,2) not null,
  min_amount numeric(10,2),
  max_uses integer,
  used_count integer default 0,
  expires_at timestamptz,
  is_active boolean default true,
  created_at timestamptz default now()
);

-- ============================================
-- Loyalty & Memberships
-- ============================================
create table public.loyalty_points (
  id uuid primary key default uuid_generate_v4(),
  client_id uuid references public.users(id) on delete cascade,
  points integer not null,
  transaction_type text not null check (transaction_type in ('earned', 'redeemed', 'expired')),
  booking_id uuid references public.bookings(id) on delete set null,
  created_at timestamptz default now()
);

create table public.membership_plans (
  id uuid primary key default uuid_generate_v4(),
  name text not null unique,
  description text,
  price numeric(10,2) not null,
  sessions integer not null,
  validity_days integer not null,
  is_active boolean default true,
  created_at timestamptz default now()
);

create table public.memberships (
  id uuid primary key default uuid_generate_v4(),
  client_id uuid references public.users(id) on delete cascade,
  plan_id uuid references public.membership_plans(id) on delete restrict,
  start_date date not null,
  end_date date not null,
  remaining_sessions integer not null,
  created_at timestamptz default now()
);

-- ============================================
-- Notifications
-- ============================================
create table public.notifications (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid references public.users(id) on delete cascade,
  type text not null check (type in ('booking_confirm', 'booking_reminder', 'booking_cancelled', 'promo', 'review_request')),
  channel text not null check (channel in ('email', 'sms', 'push', 'in_app')),
  content text not null,
  status text not null default 'pending' check (status in ('pending', 'sent', 'delivered', 'failed')),
  sent_at timestamptz,
  error_message text,
  created_at timestamptz default now()
);

-- ============================================
-- Audit Logs
-- ============================================
create table public.audit_logs (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid references public.users(id) on delete set null,
  action text not null,
  entity_type text not null,
  entity_id uuid,
  old_values jsonb,
  new_values jsonb,
  ip_address text,
  created_at timestamptz default now()
);

-- ============================================
-- RLS Policies
-- ============================================
alter table public.users enable row level security;
alter table public.profiles enable row level security;
alter table public.services enable row level security;
alter table public.bookings enable row level security;
alter table public.reviews enable row level security;
alter table public.notifications enable row level security;

create policy "Users can view own data" on public.users for select using (auth.uid() = id);
create policy "Users can update own data" on public.users for update using (auth.uid() = id);
create policy "Users can view own profile" on public.profiles for select using (auth.uid() = user_id);
create policy "Users can update own profile" on public.profiles for update using (auth.uid() = user_id);
create policy "Services are viewable by all" on public.services for select using (true);
create policy "Bookings viewable by client and staff" on public.bookings for select using (auth.uid() = client_id or exists (select 1 from public.staff where staff.user_id = auth.uid()));
create policy "Clients can insert own bookings" on public.bookings for insert with check (auth.uid() = client_id);
create policy "Reviews viewable by all" on public.reviews for select using (true);
create policy "Notifications viewable by recipient" on public.notifications for select using (auth.uid() = user_id);

-- ============================================
-- Functions & Triggers
-- ============================================
create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (user_id, full_name)
  values (new.id, coalesce(new.raw_user_meta_data->>'full_name', ''));
  return new;
end;
$$ language plpgsql security definer;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

create or replace function public.update_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

create trigger update_users_updated_at before update on public.users for each row execute procedure public.update_updated_at();
create trigger update_profiles_updated_at before update on public.profiles for each row execute procedure public.update_updated_at();
create trigger update_bookings_updated_at before update on public.bookings for each row execute procedure public.update_updated_at();
