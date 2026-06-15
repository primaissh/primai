# PrimAI Website Redesign — Master AI Agent Prompt
**Version:** 1.0  
**Prepared by:** Senior Website Analyst & Designer  
**Target URL:** https://www.primai.in/

---

## CONTEXT & AUDIT SUMMARY

The current PrimAI site suffers from the following diagnosed issues (verified by live audit):

| Issue | Current State | Required Standard |
|-------|-------------|-----------------|
| Design System | Inconsistent, basic TailwindCSS | Cohesive dark futuristic premium system |
| Hero Section | Static image + text, no interactivity | Immersive animated canvas with live metrics |
| Navigation | 3-item minimal nav with no mega menu | Sticky floating nav with mega menu + command palette |
| Service Cards | Emoji icon + plain text list | Bento grid with glassmorphism, animated hover reveals |
| Case Studies | Static image + badge + title | Metric-led animated story cards (ROI, revenue, automation %) |
| Tech Partners | None shown | Animated infinite-scroll logo wall |
| Lead Capture | No form exists | Full enterprise consultation funnel with WhatsApp + CRM hooks |
| Mobile UX | Unknown but nav is desktop-only | Mobile-first PWA with installable experience |
| SEO | No schema, minimal meta | Full JSON-LD, OG tags, sitemap, structured data |
| Performance | Unknown Lighthouse score | Target 95+ across all Core Web Vitals |

The reference benchmarks studied: **solana.com** and **avax.network**.

---

## YOUR ROLE

You are a team of:
- Principal UX Architect
- Senior Frontend Engineer (Next.js 15 + TypeScript specialist)
- Visual Designer (motion design, 3D, glassmorphism)
- SEO & Growth Engineer
- Conversion Rate Optimization (CRO) Specialist

Build the complete PrimAI website from scratch. Every decision must be deliberate and justified. Do not produce generic AI-flavoured output — make choices specific to PrimAI's brand: **AI + Blockchain + Quant Trading + Enterprise Automation**.

---

## DESIGN SYSTEM (Define before writing a single line of code)

### Color Tokens
```
--color-void:        #050508      /* page background */
--color-surface:     #0A0B12      /* card base */
--color-glass:       rgba(255,255,255,0.04)  /* glassmorphism fill */
--color-border:      rgba(255,255,255,0.08)  /* card borders */

--color-electric:    #3B82F6      /* primary accent — electric blue */
--color-neon:        #8B5CF6      /* secondary accent — neon purple */
--color-cyan:        #06B6D4      /* tertiary accent — cyber cyan */
--color-emerald:     #10B981      /* success / positive metric */

--color-text-primary:   #F0F4FF
--color-text-secondary: #8B9AB5
--color-text-muted:     #4B5875
```

### Typography Stack
```
Display:  'Space Grotesk', sans-serif  — headlines, hero text
Body:     'Inter', sans-serif          — paragraphs, UI
Mono:     'JetBrains Mono', monospace  — code, stats, counters
```

Load via: `next/font/google` for zero-CLS font loading.

### Spacing Scale
Use 4px base grid. Key values: 4, 8, 12, 16, 24, 32, 48, 64, 80, 96, 128px.

### Border Radius
- Cards: `16px`
- Buttons: `10px`
- Badges: `6px`
- Pills: `9999px`

### Signature Design Element
**Animated mesh gradient orbs** — three large radial blurs (electric blue, neon purple, cyan) that drift slowly in the background of key sections, creating a living depth effect. These unify all pages without adding DOM weight.

---

## TECH STACK

```
Framework:       Next.js 15 (App Router, React Server Components)
Language:        TypeScript (strict mode)
Styling:         Tailwind CSS v4
Animation:       Framer Motion 11 (scroll-driven, entrance, hover)
3D / Canvas:     Three.js r160 (hero background only — lazy loaded)
Icons:           Lucide React
Forms:           React Hook Form + Zod validation
Email:           Resend API
Analytics:       Vercel Analytics + Google Tag Manager
SEO:             Next.js Metadata API + next-sitemap
PWA:             next-pwa
Deployment:      Vercel (Edge Runtime for API routes)
```

**Performance rules:**
- No layout shift on font load (use `next/font`)
- Three.js canvas loaded only after LCP fires
- All images: `next/image` with `priority` on hero, `lazy` elsewhere, WebP format
- Route-level code splitting — each page chunk under 100KB JS
- Target: Lighthouse 95+ Performance, 100 Accessibility, 100 Best Practices, 95+ SEO

---

## FOLDER STRUCTURE

```
/
├── app/
│   ├── layout.tsx              # Root layout: fonts, GTM, PWA meta
│   ├── page.tsx                # Home
│   ├── about/page.tsx
│   ├── services/
│   │   ├── page.tsx            # Services hub
│   │   ├── ai-solutions/page.tsx
│   │   ├── automation/page.tsx
│   │   ├── web3-blockchain/page.tsx
│   │   ├── quant-trading/page.tsx
│   │   ├── enterprise-software/page.tsx
│   │   └── digital-transformation/page.tsx
│   ├── industries/page.tsx
│   ├── case-studies/
│   │   ├── page.tsx
│   │   └── [slug]/page.tsx
│   ├── technology/page.tsx
│   ├── research/page.tsx
│   ├── blog/
│   │   ├── page.tsx
│   │   └── [slug]/page.tsx
│   ├── careers/page.tsx
│   ├── contact/page.tsx
│   ├── book-consultation/page.tsx
│   ├── partner/page.tsx
│   └── api/
│       ├── contact/route.ts
│       └── consultation/route.ts
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx          # Floating nav + mega menu
│   │   ├── MegaMenu.tsx
│   │   ├── MobileNav.tsx
│   │   ├── Footer.tsx
│   │   ├── CommandPalette.tsx  # ⌘K search
│   │   └── StickyLeadCTA.tsx
│   ├── home/
│   │   ├── HeroSection.tsx
│   │   ├── WhatWeBuild.tsx     # Bento grid
│   │   ├── TechEcosystem.tsx   # Logo wall
│   │   ├── SolutionFlow.tsx    # Architecture diagram
│   │   ├── IndustrySolutions.tsx
│   │   ├── CaseStudiesStrip.tsx
│   │   ├── ResearchSection.tsx
│   │   └── ConsultationForm.tsx
│   ├── ui/
│   │   ├── GlassCard.tsx
│   │   ├── GradientText.tsx
│   │   ├── AnimatedCounter.tsx
│   │   ├── MeshBackground.tsx
│   │   ├── BentoGrid.tsx
│   │   ├── LogoWall.tsx
│   │   ├── Badge.tsx
│   │   ├── Button.tsx
│   │   └── SectionLabel.tsx
│   └── canvas/
│       └── HeroCanvas.tsx      # Three.js scene (lazy)
├── lib/
│   ├── metadata.ts             # Shared OG/Twitter meta generator
│   ├── schema.ts               # JSON-LD generators
│   └── analytics.ts
├── public/
│   ├── manifest.json           # PWA manifest
│   └── icons/                  # PWA icons (192, 512)
└── styles/
    └── globals.css             # CSS custom properties + Tailwind base
```

---

## COMPONENT SPECIFICATIONS (Build each exactly as described)

---

### 1. NAVBAR — `Navbar.tsx`

**Behaviour:**
- Transparent on page load, transitions to `background: rgba(5,5,8,0.85); backdrop-filter: blur(20px); border-bottom: 1px solid var(--color-border)` after 60px scroll
- Floats 12px from top on desktop, pinned at top on mobile
- Height: 64px desktop, 56px mobile

**Left:** PrimAI logo SVG (wordmark — generate a clean geometric P-mark + "PrimAI" in Space Grotesk 600)

**Center links (desktop):** Solutions | Industries | Case Studies | Research | Company  
Each opens a **Mega Menu panel** (full-width dropdown, dark glass, 3-column layout with icon + label + description per item)

**Right:** 
- `⌘K` command palette trigger (pill button, ghost style)
- "Book a Call" button (filled, electric blue, 10px radius)
- Mobile: hamburger → slide-in drawer

**Mobile drawer:**
- Full-screen takeover, dark background
- Accordion-style service categories
- WhatsApp CTA pinned at bottom

---

### 2. HERO SECTION — `HeroSection.tsx` + `HeroCanvas.tsx`

**Layout:** Full-viewport height (100svh). Content centred vertically. Canvas fills behind content layer.

**Three.js Canvas (lazy load after 1.5s or user interaction):**
- Particle system: 2,000 points forming a slowly rotating neural network graph
- Lines drawn between nearby particles (< 120px distance) at low opacity
- Colour palette: electric blue points (#3B82F6), purple connecting lines (#8B5CF6 at 15% opacity)
- Camera slowly drifts forward — Z parallax on mouse move (subtle, ±30px)
- WebGL context lost handler: degrade gracefully to static CSS gradient

**Content (above canvas):**
```
[Badge pill] — "Enterprise AI + Blockchain + Quant"

[H1 — Space Grotesk 700, 64px desktop / 40px mobile]
We Build What  
The Future Runs On.

[Subheadline — Inter 400, 20px, --color-text-secondary]
AI systems, blockchain infrastructure, and algorithmic trading  
engines for companies that can't afford to be second.

[CTA Row]
  [Primary] Book a Strategy Call →         (filled blue)
  [Secondary] Explore Our Work             (ghost, border)

[Metric Bar — 3 columns, animated counters on viewport enter]
  50+ AI Projects Delivered
  $2.4B+ Trading Volume Automated  
  12 Countries Served
```

**AnimatedCounter component:** Use `framer-motion` `useMotionValue` + `useTransform` to count from 0 to final value when section enters viewport (IntersectionObserver, threshold 0.3).

---

### 3. WHAT WE BUILD — `WhatWeBuild.tsx` (Bento Grid)

**Inspired by:** Solana's feature grid and Avax's card layout.  
**Layout:** Asymmetric CSS grid, 12-column, cards spanning different widths.

**Grid arrangement (desktop):**
```
[ AI Agents — large, 7 cols ]  [ AI Automation — 5 cols ]
[ Blockchain — 4 cols ]  [ Quant Trading — 4 cols ]  [ Enterprise Apps — 4 cols ]
[ Digital Marketing Intelligence — 12 cols, horizontal banner ]
```

**Each card (GlassCard.tsx):**
```css
background: var(--color-glass);
border: 1px solid var(--color-border);
border-radius: 16px;
backdrop-filter: blur(12px);
transition: border-color 0.3s, box-shadow 0.3s;

&:hover {
  border-color: var(--color-electric);
  box-shadow: 0 0 40px rgba(59,130,246,0.15);
}
```

**Card content:**
- Top-left: Icon (Lucide or custom SVG, 28px, accent coloured)
- Category badge (e.g., "AI LAYER")
- Title (Space Grotesk 600, 22px)
- 1-line description
- Bottom: "Explore →" link that fades in on hover
- Large cards: include a subtle animated visual (CSS-only looping gradient or small Lottie)

---

### 4. TECHNOLOGY ECOSYSTEM — `TechEcosystem.tsx`

**Pattern:** Infinite horizontal scroll (CSS `animation: scroll linear infinite`) — two identical rows moving in opposite directions.

**Row 1 (left-to-right):** OpenAI · Anthropic · LangChain · CrewAI · AutoGen · Hugging Face · Mistral  
**Row 2 (right-to-left):** Solana · Ethereum · Avalanche · Polygon · AWS · Azure · Google Cloud · Kubernetes · Docker

**Each logo tile:**
```
width: 140px; height: 56px
background: var(--color-glass);
border: 1px solid var(--color-border);
border-radius: 10px;
display: flex; align-items: center; justify-content: center;
grayscale(100%) on default → color on hover
```

Pause animation on hover (`:hover` on the container row sets `animation-play-state: paused`).

**Section header:**
```
[Label] TECHNOLOGY ECOSYSTEM
[H2] The Stack Behind Everything We Build
[Sub] We integrate best-in-class tools so you don't have to make the tradeoffs.
```

---

### 5. SOLUTION ARCHITECTURE FLOW — `SolutionFlow.tsx`

**Pattern:** Vertical connected flowchart with animated connecting lines (SVG `stroke-dashoffset` animation on scroll).

**Nodes (left-right alternating layout on desktop, stacked on mobile):**

```
  [CLIENT PROBLEM]
        |  animated SVG line draws downward on scroll
  [PRIM AI DISCOVERY]  — "We map your bottlenecks and data flows"
        |
  [AI LAYER]           — "LLM agents, RAG pipelines, custom models"
        |
  [AUTOMATION LAYER]   — "n8n, Zapier, custom orchestrators"
        |
  [BLOCKCHAIN LAYER]   — "On-chain logic, tokenisation, smart contracts"
        |
  [ANALYTICS LAYER]    — "Real-time dashboards, quant signals"
        |
  [BUSINESS OUTCOME]   — "Revenue ↑  Cost ↓  Speed ↑"
```

Each node: GlassCard with accent-coloured left border, icon, title, one-line description.  
The SVG path between nodes has `stroke-dasharray` = path length, animates `stroke-dashoffset` from full to 0 when in viewport.

---

### 6. INDUSTRY SOLUTIONS — `IndustrySolutions.tsx`

**Layout:** 4×2 grid of interactive cards. On hover, card expands to reveal use-case detail.

**Industries with icon + hover content:**

| Industry | Icon | Hover Reveal |
|----------|------|-------------|
| Finance & Banking | `TrendingUp` | AI fraud detection, algorithmic risk scoring |
| Quant Trading | `BarChart2` | HFT bots, backtesting engines, signal processing |
| Healthcare | `Heart` | AI diagnostics, patient data automation |
| Education | `GraduationCap` | Web3 credentialing, personalised learning AI |
| Government | `Landmark` | Smart contracts for procurement, digital identity |
| Logistics | `Package` | Supply chain AI, route optimisation |
| Manufacturing | `Factory` | Predictive maintenance, quality AI |
| Real Estate | `Building2` | RWA tokenisation, smart lease contracts |

**Hover animation:**  
`framer-motion` `layoutId` + `AnimatePresence` for smooth card expand. Reveal layer shows 2–3 bullet use-cases + "See solutions →" link.

---

### 7. CASE STUDIES STRIP — `CaseStudiesStrip.tsx`

**Pattern:** Horizontally scrollable row of metric-led cards (inspired by Solana's stats panels).

**Each card structure:**
```
[Client type tag — e.g., "FINTECH"]
[Project title]
[3 metric pills]:
  ↑ 340% Trading Volume
  ↓ 60% Ops Cost
  ⚡ 4× Faster Settlement
[1-line description]
[Read Case Study →]
```

Card: 360px wide, full card height scroll snap. On desktop, show 3 cards + partial 4th (indicating scroll). Mobile: 1 card visible.

**Metrics animate** (count up) when card enters viewport.

---

### 8. LEAD GENERATION FORM — `ConsultationForm.tsx`

**Placement:** Home page Section 8, also `/book-consultation` full page.

**Form fields:**
```
Full Name          [text input]
Company Name       [text input]
Work Email         [email input]
Phone Number       [tel input, +91 default]
Industry           [select — dropdown, matches industry list above]
Budget Range       [radio cards: <$10K / $10K–$50K / $50K–$200K / $200K+]
Project Summary    [textarea, 3 rows]
How did you find us [select]
```

**Submit flow:**
1. Client-side validation (Zod schema)
2. POST to `/api/consultation` route
3. API route: send email via Resend, optionally write to a Google Sheet via fetch (CRM-ready)
4. Success state: animated checkmark + "We'll contact you within 24 hours" + WhatsApp deep link

**Design:**
```
Two-column layout on desktop (label left, input right)
All inputs: dark glass background, electric blue focus ring
Submit button: full-width, filled electric blue, Space Grotesk 600
```

---

### 9. STICKY LEAD CTA — `StickyLeadCTA.tsx`

- Desktop: fixed bottom-right corner, pill button: "💬 Talk to Us" (opens WhatsApp `wa.me/918333947726`)
- After 30s or 70% scroll: expands to mini card with "Book a Free Strategy Call" + email input
- Mobile: fixed bottom bar with two buttons: `[Book a Call]` `[WhatsApp]`
- Include exit-intent trigger (desktop only): show modal if mouse leaves viewport top edge after 20s

---

### 10. FOOTER — `Footer.tsx`

**Layout:** 5-column grid, dark surface background.

**Column 1 — Brand:**
- Logo + PrimAI wordmark
- 1-line brand statement: "We build what the future runs on."
- Social icons: X, LinkedIn, WhatsApp

**Columns 2–5 — Links:**
```
Solutions          Industries         Company            Legal
AI Solutions       Finance            About PrimAI       Privacy Policy
Automation         Trading            Careers            Terms of Service
Web3 / Blockchain  Healthcare         Research           Cookie Policy
Quant Trading      Government         Blog
Enterprise Dev     Logistics          Partner With Us
```

**Bottom bar:** `© 2025 PrimAI Technologies. All Rights Reserved. | Built with AI for the AI era.`

**Newsletter strip** (above columns):
```
[H3] Stay ahead of the AI + Web3 curve.
[Input: email] [Subscribe button]
```

---

## PAGE-LEVEL SPECIFICATIONS

### `/about` — About PrimAI
- Full-bleed hero: "We started PrimAI because enterprise AI was too slow, too expensive, and too fragile." — mission statement hero
- Timeline: Company milestones (2022 → Present) using horizontal scroll on desktop
- Team grid: name + role + LinkedIn (no photos needed — use coloured avatar initials)
- Core values: 4-card grid with icon + principle + 1-line rationale
- "Why PrimAI vs Agencies" comparison table: glassmorphism table, 3-col (Us | Big Agency | Freelancer)

### `/services` — Services Hub
- Full-width intro with animated category pills
- 6 service cards (full detail: each links to sub-page)
- Each sub-page (`/services/ai-solutions`, etc.): hero + what we build + process + relevant case study + CTA

### `/industries` — Industries
- Hero with the 8-industry interactive map (SVG India map optional, or icon grid)
- Per-industry: challenge → PrimAI solution → outcome format

### `/case-studies`
- Filter bar: All | AI | Blockchain | Trading | Marketing
- Card grid with metrics shown prominently
- Each `[slug]` page: problem → approach → tech stack used → results dashboard

### `/technology`
- Full interactive tech stack viewer: tabs for AI Layer | Blockchain Layer | Cloud Layer | Data Layer
- Each tab: animated logo grid + short explanation of why each tool

### `/book-consultation`
- Full-page form (same as section 8 form)
- Left panel: what to expect (4 bullets), team availability, recent client logos
- Right panel: the form

---

## SEO ARCHITECTURE

### Metadata (in `lib/metadata.ts`)
Generate per-page metadata using Next.js `generateMetadata()`:

```typescript
export const defaultMetadata = {
  metadataBase: new URL('https://www.primai.in'),
  title: { default: 'PrimAI — AI, Blockchain & Quant Trading Solutions', template: '%s | PrimAI' },
  description: 'PrimAI builds enterprise AI agents, blockchain infrastructure, and algorithmic trading systems for startups, enterprises, and governments.',
  openGraph: { type: 'website', locale: 'en_IN', siteName: 'PrimAI' },
  twitter: { card: 'summary_large_image', creator: '@Official_PrimAI' },
  robots: { index: true, follow: true },
}
```

### JSON-LD Schema (`lib/schema.ts`)
Inject on each page:
- `Organization` schema on all pages
- `Service` schema on each service page
- `FAQPage` schema on service pages (add 3 FAQs per service)
- `Article` schema on blog/case study pages
- `BreadcrumbList` on all sub-pages

### Core Keywords to Target
```
Primary:
- AI development company India
- Blockchain development company
- AI automation services
- Quant trading system development
- Web3 solutions India

Long-tail:
- AI agent development for enterprises
- Algorithmic trading bot development India
- RWA tokenization platform
- Enterprise automation with AI
- LangChain development company
```

### Technical SEO Files
- `app/sitemap.ts` — dynamic sitemap including all blog and case study slugs
- `app/robots.ts` — allow all, disallow `/admin/*`
- `public/manifest.json` — PWA manifest

---

## PWA CONFIGURATION

```json
// public/manifest.json
{
  "name": "PrimAI",
  "short_name": "PrimAI",
  "description": "AI, Blockchain & Quant Trading Solutions",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#050508",
  "theme_color": "#3B82F6",
  "icons": [
    { "src": "/icons/icon-192.png", "sizes": "192x192", "type": "image/png" },
    { "src": "/icons/icon-512.png", "sizes": "512x512", "type": "image/png", "purpose": "maskable" }
  ]
}
```

Use `next-pwa` with Workbox `StaleWhileRevalidate` for pages, `CacheFirst` for static assets.

---

## IMAGE GENERATION PROMPTS

Generate the following images using a high-quality text-to-image model (Midjourney v6 / Flux Pro / DALL-E 3). Use as hero visuals, section backgrounds, and service page headers. All should be **1920×1080 or 1200×800, WebP format**.

1. **AI Agents Visual**  
   "Cinematic render of a glowing neural network of interconnected orbs in deep space, electric blue and violet nodes, dark void background, data streams flowing between nodes, ultra-detailed, 4K, octane render, no text"

2. **Quant Trading System**  
   "Futuristic trading terminal in a dark room, multiple holographic screens displaying real-time candlestick charts and algorithmic signals in electric blue and cyan, bokeh background, cinematic lighting, photorealistic"

3. **Blockchain Infrastructure**  
   "Abstract 3D visualisation of a blockchain — hexagonal nodes connected by glowing chains in deep space, purple and blue gradient, cinematic depth of field, ultra HD, no text"

4. **Enterprise Automation**  
   "Futuristic factory floor with AI robots and holographic process flows, teal and electric blue lighting, dark industrial background, high production quality, 4K"

5. **Web3 Ecosystem**  
   "Digital decentralised network — glowing nodes across a world map rendered in dark blue void, interconnected light trails, neon emerald and cyan tones, cinematic"

6. **AI Research Lab**  
   "Interior of a high-tech AI research lab, scientists in front of massive compute cluster displays, dark ambient with monitor glow, photorealistic, cinematic, 4K"

7. **Digital Transformation**  
   "Split visual: left side showing an old industrial office (muted, grey), seamlessly blending into right side of a gleaming futuristic digital command centre (electric blue, holograms), cinematic transition"

8. **Quant Data Intelligence**  
   "Abstract data visualisation — rivers of glowing numbers and financial charts flowing through a dark cosmic landscape, purple and cyan tones, ultra-detailed, 4K"

---

## ANIMATION GUIDELINES

Use `framer-motion` for all animations. Follow these principles:

| Animation Type | Duration | Easing | Trigger |
|---------------|----------|--------|---------|
| Section entrance | 0.6s | `easeOut` | IntersectionObserver |
| Card hover scale | 0.2s | `easeInOut` | Mouse enter |
| Metric counter | 1.5s | `linear` | Viewport enter |
| Nav appearance | 0.3s | `easeOut` | Scroll threshold |
| Modal/drawer | 0.35s | `spring(stiffness:300)` | Click |
| Logo wall scroll | 30s | `linear` | Continuous |

**Respect `prefers-reduced-motion`:** Wrap all `motion.*` components in a check:
```tsx
const shouldAnimate = !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
```

---

## DEPLOYMENT CHECKLIST

### Vercel Setup
1. Connect GitHub repo to Vercel
2. Set environment variables: `RESEND_API_KEY`, `NEXT_PUBLIC_GTM_ID`, `NEXT_PUBLIC_WA_NUMBER`
3. Enable Vercel Analytics
4. Set `NEXT_PUBLIC_SITE_URL=https://www.primai.in`
5. Configure custom domain `primai.in` + `www.primai.in`
6. Enable Edge Network for all regions

### Post-Deploy Verification
- [ ] Lighthouse scores ≥ 95 across all 4 metrics
- [ ] Mobile viewport renders correctly on 375px width
- [ ] All forms submit and deliver email
- [ ] WhatsApp CTA links open correct chat
- [ ] Sitemap accessible at `/sitemap.xml`
- [ ] `robots.txt` accessible
- [ ] PWA installs on Chrome Android
- [ ] Offline fallback page visible when disconnected
- [ ] OG image renders correctly (test with `https://opengraph.xyz`)
- [ ] JSON-LD validates on `https://validator.schema.org`
- [ ] No console errors on production build

---

## WHAT NOT TO DO

- ❌ Do not use stock photography or Unsplash images — use generated images or SVG illustrations only
- ❌ Do not use Bootstrap, Material UI, or any pre-themed component library
- ❌ Do not hard-code any colour values — use CSS custom properties only
- ❌ Do not load Three.js on the main thread or block LCP with it
- ❌ Do not use `<img>` tags — always use `next/image`
- ❌ Do not write inline styles — use Tailwind utility classes
- ❌ Do not build pages without `generateMetadata` exports
- ❌ Do not skip mobile-first testing — build mobile layout first, scale up

---

## DELIVERY ORDER

Build in this sequence to validate architecture before expanding:

1. Design token file (`globals.css`) + Tailwind config
2. `Navbar.tsx` + `Footer.tsx` (shell tested on blank page)
3. Home page Hero section
4. Remaining home sections (in order listed)
5. `book-consultation` page + form API route
6. Service sub-pages (can use shared template component)
7. Industries, Case Studies, Research, Blog pages
8. About, Careers, Partner, Contact pages
9. PWA config, sitemap, robots
10. SEO metadata pass on all pages
11. Performance audit + Lighthouse fixes
12. Final deployment + verification checklist

---

*End of PrimAI Redesign Master Prompt — v1.0*
