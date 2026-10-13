-- Volt House storefront database
-- Paste this entire file into Supabase Dashboard > SQL Editor > New query, then Run.
--
-- Public visitors can read products/categories and submit orders. Order details and
-- all catalog/order mutations require a trusted JWT app_metadata role of "admin".
-- Before using the admin panel, create its user in Supabase Auth and assign the
-- app_metadata role through a trusted server-side Admin API call. Never assign this
-- role from browser code or user-editable user_metadata.

create table if not exists public.categories (
  id uuid primary key default gen_random_uuid(),
  name text not null unique check (length(trim(name)) > 0),
  name_ar text not null default '',
  created_at timestamptz not null default now()
);

create unique index if not exists categories_name_lower_unique
  on public.categories (lower(name));

create table if not exists public.products (
  id uuid primary key default gen_random_uuid(),
  name text not null check (length(trim(name)) > 0),
  name_ar text not null default '',
  category text not null references public.categories(name)
    on update cascade on delete restrict,
  category_ar text not null default '',
  price numeric(12, 2) not null check (price >= 0),
  compare_price numeric(12, 2) check (compare_price is null or compare_price >= 0),
  stock integer not null default 0 check (stock >= 0),
  badge text not null default '',
  description text not null default '',
  description_ar text not null default '',
  image text not null default '',
  created_at timestamptz not null default now()
);

create table if not exists public.orders (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  customer_name text not null check (length(trim(customer_name)) between 1 and 100),
  customer_phone text not null check (length(trim(customer_phone)) between 1 and 30),
  customer_address text not null check (length(trim(customer_address)) between 1 and 300),
  items jsonb not null check (
    jsonb_typeof(items) = 'array' and jsonb_array_length(items) > 0
  ),
  total numeric(12, 2) not null check (total >= 0),
  status text not null default 'outForDelivery'
    check (status in ('completed', 'outForDelivery', 'returned')),
  inventory_restored boolean not null default false
);

create index if not exists products_created_at_idx
  on public.products (created_at desc);
create index if not exists orders_created_at_idx
  on public.orders (created_at desc);

insert into public.categories (name, name_ar)
values
  ('Electronics', 'إلكترونيات'),
  ('Accessories', 'إكسسوارات'),
  ('Home appliances', 'أجهزة منزلية')
on conflict (name) do nothing;

alter table public.categories enable row level security;
alter table public.products enable row level security;
alter table public.orders enable row level security;

create or replace function public.is_store_admin()
returns boolean
language sql
stable
as $$
  select coalesce(auth.jwt() -> 'app_metadata' ->> 'role', '') = 'admin';
$$;

revoke all on public.categories, public.products, public.orders from anon, authenticated;
grant select on public.categories, public.products to anon, authenticated;
grant select, insert, update, delete on public.categories, public.products to authenticated;
grant select, update on public.orders to authenticated;
grant execute on function public.is_store_admin() to anon, authenticated;

create or replace function public.place_order(
  p_customer_name text,
  p_customer_phone text,
  p_customer_address text,
  p_items jsonb
)
returns setof public.orders
language plpgsql
security definer
set search_path = ''
as $$
declare
  v_item jsonb;
  v_product public.products%rowtype;
  v_order public.orders%rowtype;
  v_product_id uuid;
  v_quantity integer;
  v_items jsonb := '[]'::jsonb;
  v_total numeric(12, 2) := 0;
begin
  if length(trim(coalesce(p_customer_name, ''))) not between 1 and 100
     or length(trim(coalesce(p_customer_phone, ''))) not between 1 and 30
     or length(trim(coalesce(p_customer_address, ''))) not between 1 and 300 then
    raise exception 'Invalid customer details';
  end if;

  if coalesce(jsonb_typeof(p_items), '') <> 'array' then
    raise exception 'Order items must be an array';
  end if;

  if jsonb_array_length(p_items) not between 1 and 50 then
    raise exception 'Order must contain between 1 and 50 items';
  end if;

  for v_item in select value from jsonb_array_elements(p_items)
  loop
    begin
      v_product_id := (v_item ->> 'id')::uuid;
      v_quantity := (v_item ->> 'quantity')::integer;
    exception
      when invalid_text_representation or numeric_value_out_of_range then
        raise exception 'Invalid order item';
    end;

    if v_quantity is null or v_quantity <= 0
       or exists (
         select 1
         from jsonb_array_elements(v_items) as saved(item)
         where saved.item ->> 'id' = v_product_id::text
       ) then
      raise exception 'Invalid or duplicate order item';
    end if;

    select * into v_product
    from public.products
    where id = v_product_id
    for update;

    if not found then
      raise exception 'Product not found';
    end if;
    if v_product.stock < v_quantity then
      raise exception 'Insufficient stock for product %', v_product.name;
    end if;

    update public.products
    set stock = stock - v_quantity
    where id = v_product_id;

    v_items := v_items || jsonb_build_array(jsonb_build_object(
      'id', v_product.id,
      'name', v_product.name,
      'price', v_product.price,
      'quantity', v_quantity
    ));
    v_total := v_total + v_product.price * v_quantity;
  end loop;

  insert into public.orders (
    customer_name,
    customer_phone,
    customer_address,
    items,
    total
  )
  values (
    trim(p_customer_name),
    trim(p_customer_phone),
    trim(p_customer_address),
    v_items,
    v_total
  )
  returning * into v_order;

  return next v_order;
end;
$$;

revoke all on function public.place_order(text, text, text, jsonb) from public, anon, authenticated;
grant execute on function public.place_order(text, text, text, jsonb) to anon, authenticated;

drop policy if exists "Anyone can read categories" on public.categories;
create policy "Anyone can read categories"
  on public.categories for select
  to anon, authenticated
  using (true);

drop policy if exists "Admins manage categories" on public.categories;
create policy "Admins manage categories"
  on public.categories for all
  to authenticated
  using (public.is_store_admin())
  with check (public.is_store_admin());

drop policy if exists "Anyone can read products" on public.products;
create policy "Anyone can read products"
  on public.products for select
  to anon, authenticated
  using (true);

drop policy if exists "Admins manage products" on public.products;
create policy "Admins manage products"
  on public.products for all
  to authenticated
  using (public.is_store_admin())
  with check (public.is_store_admin());

drop policy if exists "Admins read orders" on public.orders;
create policy "Admins read orders"
  on public.orders for select
  to authenticated
  using (public.is_store_admin());

drop policy if exists "Admins update orders" on public.orders;
create policy "Admins update orders"
  on public.orders for update
  to authenticated
  using (public.is_store_admin())
  with check (public.is_store_admin());
