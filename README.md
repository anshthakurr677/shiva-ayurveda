# 🌿 SHIVA AYURVEDA — Website Files

## 📁 File Structure (GitHub pe exactly aisa dikhega)

```
shiva-ayurveda/
├── index.html           ← Homepage
├── products.html        ← All products
├── product-detail.html  ← Single product page
├── about.html           ← About us
├── contact.html         ← Contact form
├── cart.html            ← Cart & checkout
├── admin.html           ← Admin panel 🔐
├── css/
│   └── style.css        ← All styles (ek hi file!)
├── js/
│   ├── config.js        ← ⭐ Supabase keys yahan daalo
│   └── utils.js         ← Shared functions
├── images/              ← Product photos yahan
└── vercel.json          ← Deploy config
```

---

## 🗄️ Supabase Setup (3 Tables Banana)

### Supabase pe jaake SQL Editor mein yeh run karo:

```sql
-- 1. Products Table
create table products (
  id             bigserial primary key,
  name           text not null,
  category       text,
  category_label text,
  price          integer,
  old_price      integer,
  badge          text,
  emoji          text default '🌿',
  image_url      text,
  short_desc     text,
  description    text,
  ingredients    jsonb,
  benefits       jsonb,
  usage_steps    jsonb,
  is_featured    boolean default false,
  created_at     timestamptz default now()
);

-- 2. Orders Table
create table orders (
  id             bigserial primary key,
  order_number   text,
  customer_name  text,
  email          text,
  phone          text,
  address        text,
  items          jsonb,
  subtotal       integer,
  tax            integer,
  shipping       integer,
  total          integer,
  payment_method text,
  status         text default 'pending',
  coupon_used    text,
  created_at     timestamptz default now()
);

-- 3. Contacts Table
create table contacts (
  id         bigserial primary key,
  first_name text,
  last_name  text,
  email      text,
  phone      text,
  subject    text,
  message    text,
  created_at timestamptz default now()
);

-- Allow public access (RLS off for now)
alter table products enable row level security;
alter table orders   enable row level security;
alter table contacts enable row level security;

create policy "Public read products" on products for select using (true);
create policy "Public insert orders"  on orders   for insert with check (true);
create policy "Public insert contacts" on contacts for insert with check (true);
create policy "Public read orders"    on orders   for select using (true);
create policy "Public read contacts"  on contacts for select using (true);
```

---

## ⚙️ Config Setup

`js/config.js` mein apni Supabase keys daalo:
```js
const SUPABASE_URL  = "https://abcxyz.supabase.co";
const SUPABASE_ANON = "eyJhbGci...";
const ADMIN_PASSWORD = "apna_password";
```

---

## 🚀 GitHub Pe Upload Karo

1. GitHub pe `shiva-ayurveda` naam ka **public repository** banao
2. Saari files **drag & drop** karo (Chrome browser use karo)
3. **Commit changes** click karo

## ⚡ Vercel Pe Deploy Karo

1. vercel.com → Login with GitHub
2. **Add New Project** → `shiva-ayurveda` select karo
3. **Deploy** → Done! ✅

## 🔐 Admin Panel

`yoursite.vercel.app/admin.html` pe jaao  
Password: `js/config.js` mein `ADMIN_PASSWORD` set karo
