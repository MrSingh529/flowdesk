# FlowDesk — Landing Page

AI-powered workflow automation for Indian ops/admin teams. Built with Next.js 14, Tailwind CSS, and Supabase.

---

## 🚀 Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Set up Supabase

1. Go to [supabase.com](https://supabase.com) and create a new project.
2. In the **SQL Editor**, run this to create the waitlist table:

```sql
create table waitlist (
  id uuid default gen_random_uuid() primary key,
  email text not null unique,
  created_at timestamptz default now()
);

-- Enable Row Level Security
alter table waitlist enable row level security;

-- Allow inserts from anonymous users (for the waitlist form)
create policy "Allow public inserts" on waitlist
  for insert with check (true);

-- Only allow service role to read (keeps emails private)
create policy "Allow service role reads" on waitlist
  for select using (auth.role() = 'service_role');
```

3. Go to **Settings → API** and copy:
   - **Project URL** → `NEXT_PUBLIC_SUPABASE_URL`
   - **anon public key** → `NEXT_PUBLIC_SUPABASE_ANON_KEY`

### 3. Configure environment variables

Copy the example file:

```bash
cp .env.local.example .env.local
```

Fill in your values:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
```

### 4. Run locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## 🌐 Deploy to Vercel

### Option A — Vercel CLI

```bash
npm i -g vercel
vercel
```

When prompted, add environment variables:
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`

### Option B — GitHub + Vercel Dashboard

1. Push this repo to GitHub.
2. Go to [vercel.com](https://vercel.com) → **New Project** → Import your repo.
3. Under **Environment Variables**, add the two Supabase variables.
4. Click **Deploy**.

---

## 📁 Project Structure

```
flowdesk/
├── app/
│   ├── api/
│   │   └── waitlist/
│   │       └── route.ts        # API route — saves email to Supabase
│   ├── privacy/
│   │   └── page.tsx            # Privacy policy page
│   ├── globals.css             # Global styles + brutalist utilities
│   ├── layout.tsx              # Root layout with metadata
│   └── page.tsx                # Main landing page
├── components/
│   ├── Navbar.tsx              # Sticky nav with scroll effect
│   ├── Hero.tsx                # Hero + terminal visual
│   ├── Problem.tsx             # 3 pain point cards
│   ├── Solution.tsx            # 3-step flow section
│   ├── Features.tsx            # 4 feature cards + integrations
│   ├── SocialProof.tsx         # Testimonials + stats
│   ├── Waitlist.tsx            # Email collection form
│   └── Footer.tsx              # Footer with links
├── lib/
│   ├── supabase.ts             # Supabase client
│   └── useScrollReveal.ts      # Scroll animation hook
├── .env.local.example          # Environment variable template
├── tailwind.config.ts
├── next.config.mjs
└── vercel.json
```

---

## 🎨 Design System

| Token | Value |
|---|---|
| Background (Hero) | `#060B18` / `#0F172A` |
| Accent (Indigo) | `#6366F1` |
| Highlight (Acid) | `#C8FF00` |
| Error / Alert | `#FF4D4D` |
| Body font | Space Grotesk |
| Display font | Syne |
| Mono font | JetBrains Mono |

---

## 📧 Viewing Waitlist Emails

In your Supabase dashboard → **Table Editor** → `waitlist` table. You'll see all signups with timestamps.

To export: **Table Editor → Download CSV**.

---

## 📝 Notes

- Testimonials in the Social Proof section are marked as "Early Feedback" and are illustrative examples, not verified customer quotes.
- The waitlist API handles duplicate emails gracefully (returns success without error).
- All animations use CSS transitions for performance — no heavy JS animation libraries.
