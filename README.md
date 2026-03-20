# Soothing Solutions — Website

A full wellness website for Maria (Ria Samuels) of Soothing Solutions, featuring yoga classes, the 30 Day Accountability Blueprint, wellness resources, and a booking/contact section.

## Project Structure

```
Soothing-Solutions/
├── web/          # Vite + React frontend (single-page application)
└── studio/       # Sanity Studio (content management)
```

## Sanity CMS

- **Project ID:** `1y9no5l1`
- **Dataset:** `production`
- **Studio:** Run locally with `npm run dev --workspace=studio`

### Content Types

| Type | Description |
|------|-------------|
| Site Settings | Global site config — name, email, Calendly URL, social links |
| Homepage | Hero, about bio, services headline, testimonials |
| Yoga Classes Page | Page headline, class list, CTA |
| 30 Day Program Page | Pricing, inclusions, week breakdown, ebook |
| Resources & Community Page | Resource list, community section |
| Contact & Booking Page | Calendly embed, contact form copy |
| Yoga Class | Individual class cards (type, price, duration, highlights) |
| Testimonial | Client quotes, ratings, photos |
| Resource | Articles, guides, tips with categories |

## Setup

### 1. Web Frontend

```bash
cd web
cp .env.example .env.local
# Add your Sanity read token to .env.local
npm install
npm run dev
```

Opens at `http://localhost:5173`

### 2. Sanity Studio

```bash
cd studio
npm install
npm run dev
```

Opens at `http://localhost:3333`

### Environment Variables

**`web/.env.local`**
```
VITE_SANITY_READ_TOKEN=your_sanity_read_token
```

## Key Features

- **Single-page React app** with smooth scroll navigation
- **Fully responsive** — mobile-first design
- **Sanity-powered** — all content editable via Sanity Studio
- **Graceful fallbacks** — site displays sensible default content if Sanity is unavailable
- **Scroll-reveal animations** — sections animate in as you scroll
- **Warm wellness aesthetic** — teal/sage/cream palette, Playfair Display + DM Sans fonts

## Design System

| Token | Value | Use |
|-------|-------|-----|
| `--teal` | `#2D9B8A` | Primary brand, CTAs |
| `--sage` | `#7FB069` | Secondary accent |
| `--cream` | `#FAF7F2` | Background |
| `--gold` | `#D4A853` | Program pricing |
| `--terracotta` | `#C4622D` | Ebook accent |
| `--charcoal` | `#2C2C2C` | Text |

Fonts: **Playfair Display** (headings) · **DM Sans** (body)

## Pages / Sections

1. **Hero** — Headline, CTA, hero image
2. **Services Overview** — 4 service cards
3. **Yoga Classes** — 4 class types with pricing
4. **30 Day Program** — Sales page with pricing cards ($9.99 / $35.99 beta)
5. **Testimonials** — Client quotes
6. **About Maria** — Bio, credentials, photo
7. **Resources** — 6 article cards + community section
8. **Contact & Booking** — Calendly embed + contact form

## Adding Your Calendly URL

1. Open Sanity Studio → **Site Settings**
2. Paste your Calendly URL in the **Calendly Booking URL** field
3. Publish — the booking section will update automatically

## Deploying

- **Frontend:** Deploy `web/` to Vercel, Netlify, or any static host
- **Studio:** Run `npm run deploy --workspace=studio` to deploy to Sanity's hosted studio
