# PrimAI Website Redesign — Services Addendum
**Version:** 1.0  
**Scope:** 5 new service categories with sub-services, image prompts, component specs, and page template  
**Appends to:** `PrimAI_Redesign_Prompt.md`

---

## HOW TO USE THIS FILE

Paste this addendum immediately after the **"COMPONENT SPECIFICATIONS"** section in the master prompt (`PrimAI_Redesign_Prompt.md`). All conventions, design tokens, and folder structure defined in the master prompt apply here too. Do not repeat the design system — inherit it.

---

## SERVICE CATEGORY 1 — CRYPTO & BLOCKCHAIN SOLUTIONS

**Route:** `/services/crypto-blockchain`  
**Nav label:** Crypto & Blockchain  
**Positioning headline:** "Infrastructure for the decentralised economy"  
**Tagline:** Secure, scalable blockchain ecosystems — from exchange to identity.

### Hero Image Prompt
Save as: `public/images/services/crypto-blockchain.webp`
```
3D isometric render of a blockchain network — interlocking hexagonal nodes connected by 
glowing digital chains, deep navy background, electric blue and cyan accent glow on each 
node, data pulses travelling across connections, ultra-detailed, cinematic depth of field, 
4K, no text
```

### Sub-Services (Bento Grid — 3×2, glassmorphism cards)

| Sub-service | Lucide Icon | Badge Label | 1-line Description | Accent |
|---|---|---|---|---|
| Centralized Exchange (CEX) | `Building2` | Exchange | Full-stack trading engine: order book, matching engine, KYC, and liquidity rails | Electric Blue |
| ICO / Token Launch | `Rocket` | Launch | End-to-end token offering — smart contracts, vesting schedules, launchpad integration | Electric Blue |
| RWA Tokenization | `Landmark` | Tokenise | Tokenise real estate, commodities, and securities with on-chain compliance | Cyber Cyan |
| Layer 1 & Layer 2 Development | `Layers` | Infrastructure | Custom L1 networks and L2 scaling — ZK-rollup and Optimistic rollup | Neon Purple |
| Custodian & Non-Custodian Wallets | `Wallet` | Wallets | MPC-secured custodial wallets and self-sovereign non-custodian solutions | Electric Blue |
| Digital Identity on Blockchain | `Fingerprint` | Identity | Self-sovereign identity, verifiable credentials, and on-chain KYC frameworks | Emerald Green |

### How We Work (4-step process — animate on scroll)
1. **Architecture Design** — Chain selection, consensus model, tokenomics blueprint
2. **Smart Contract Development** — Solidity / Rust / Move, audited by third-party firms
3. **Integration & Testing** — Testnet deployment, load testing, wallet integration
4. **Mainnet Launch & Support** — Monitoring, upgrade paths, community tooling

### Outcome Metrics (illustrative until real data provided)
- 99.97% Smart Contract Audit Pass Rate
- 6-week average CEX MVP delivery
- $2.4B+ Trading Volume Processed

---

## SERVICE CATEGORY 2 — TRADING & FINANCIAL TOOLS

**Route:** `/services/trading-financial`  
**Nav label:** Trading & Finance  
**Positioning headline:** "Where intelligence meets execution"  
**Tagline:** AI-powered systems for markets that never sleep.

### Hero Image Prompt
Save as: `public/images/services/trading-tools.webp`
```
Futuristic holographic trading terminal floating in dark space — multiple transparent 
screens showing candlestick charts, order flow heat maps, and real-time signals in electric 
blue and emerald green, cinematic bokeh, high production quality, no text, 4K
```

### Sub-Services (Bento Grid — 3×1 wide cards)

| Sub-service | Lucide Icon | Badge Label | 1-line Description | Accent |
|---|---|---|---|---|
| AI-Powered Trading Bot | `Bot` | Algorithmic | ML signal generation, backtesting engine, live execution across CEX and DEX | Emerald Green |
| P2P Trading Platform | `ArrowLeftRight` | P2P | Escrow-secured peer-to-peer marketplace with multi-currency and fiat on/off ramps | Cyber Cyan |
| Carbon Market Solutions | `Leaf` | ESG | Tokenised carbon credits, MRV automation, and ESG portfolio analytics | Emerald Green |

### How We Work
1. **Strategy Definition** — Asset class, risk parameters, signal source identification
2. **Model Development** — ML model training, backtesting on historical data (5yr+)
3. **Paper Trading** — Simulation on live market feed, Sharpe ratio validation
4. **Live Deployment** — Exchange API integration, real-time monitoring, kill-switch controls

### Outcome Metrics
- 3× average Sharpe ratio improvement
- Sub-10ms order execution latency
- 18 exchanges integrated across CEX and DEX

---

## SERVICE CATEGORY 3 — AI & GENERATIVE TECHNOLOGY

**Route:** `/services/ai-generative`  
**Nav label:** AI & GenAI  
**Positioning headline:** "AI that thinks, learns, and acts"  
**Tagline:** From language models to autonomous agents — built for enterprise scale.

### Hero Image Prompt
Save as: `public/images/services/ai-generative.webp`
```
Cinematic render of an abstract AI mind — thousands of glowing synaptic nodes forming a 
human brain silhouette floating in deep space, electric violet and cyan neural pathways, 
dark void background, particles drifting outward, ultra HD, 4K, no text
```

### Sub-Services (Bento Grid — 2 wide cards)

| Sub-service | Lucide Icon | Badge Label | 1-line Description | Accent |
|---|---|---|---|---|
| Gen AI Bot | `Sparkles` | Generative | Custom LLM agents with RAG pipelines, tool use, multi-modal input, and enterprise memory | Neon Purple |
| AI Chatbot | `MessageSquare` | Conversational | Omnichannel bots (web, WhatsApp, Telegram) with live agent handoff and CRM sync | Electric Blue |

### Expanded Page Section — "How Our AI Stack Works"
Render as an animated 4-node SVG flow (same `stroke-dashoffset` technique from home page `SolutionFlow.tsx`):

```
[Data Ingestion]
  Documents, APIs, databases, real-time streams
       ↓
[Fine-tuning / RAG]
  Embedding, vector store, retrieval grounding
       ↓
[Agent Orchestration]
  LangChain / CrewAI multi-agent coordination
       ↓
[Output + Feedback Loop]
  Response, action, logging, RLHF improvement
```

### How We Work
1. **Use Case Discovery** — Map workflows where AI replaces manual decision-making
2. **Data Preparation** — Clean, chunk, embed, and store in vector database
3. **Agent Development** — Build, prompt-engineer, and evaluate agent accuracy
4. **Production Deployment** — API wrapper, auth, rate limiting, observability

### Outcome Metrics
- 85% average task automation rate achieved
- 4-week average chatbot go-live timeline
- 40+ enterprise AI agents deployed

---

## SERVICE CATEGORY 4 — EDUCATION & COMMUNITY

**Route:** `/services/education-community`  
**Nav label:** Education & Community  
**Positioning headline:** "Knowledge infrastructure for the Web3 generation"  
**Tagline:** A growing hub where innovators learn, build, and earn together.

### Hero Image Prompt
Save as: `public/images/services/education-community.webp`
```
Futuristic digital classroom — students interacting with holographic Web3 interfaces and 
NFT credentials floating in the air, teal and amber bioluminescent lighting, cinematic 
wide angle, dark background, 4K, no text
```

### Sub-Services (Bento Grid — 2 cards)

| Sub-service | Lucide Icon | Badge Label | 1-line Description | Accent |
|---|---|---|---|---|
| Web3 Educational Platform | `GraduationCap` | EdTech | On-chain credentialing, cohort-based learning, NFT certificates, and DAO governance | Amber |
| MLM-Based Web3 Projects | `Network` | Community | Tokenised referral networks with smart contract reward distribution and real-time dashboards | Emerald Green |

> **Copywriting note for agent:** In all hero and above-the-fold copy, use the term **"Decentralised Incentive Networks"** in place of "MLM". Reserve "MLM" only for technical specification sections and FAQ. This protects enterprise audience trust signals.

### How We Work
1. **Curriculum Architecture** — Learning path design, module structure, assessment framework
2. **Platform Development** — LMS build, wallet integration, credential smart contracts
3. **Community Setup** — Discord server, governance structure, incentive token design
4. **Growth & Retention** — Cohort launches, referral mechanics, leaderboard gamification

### Outcome Metrics
- 12 Web3 learning cohorts launched
- 5,000+ learners onboarded across platforms
- 98% NFT credential verification success rate

---

## SERVICE CATEGORY 5 — ADVANCED DIGITAL MARKETING

**Route:** `/services/digital-marketing`  
**Nav label:** Digital Marketing  
**Positioning headline:** "Growth intelligence at machine speed"  
**Tagline:** From performance analytics to predictive strategy — we help brands evolve, engage, and expand globally.

### Hero Image Prompt
Save as: `public/images/services/digital-marketing.webp`
```
Abstract cinematic render of data flowing through a global network — glowing ad campaign 
funnels, social media signals, and analytics dashboards visualised as light streams 
connecting continents on a dark globe, coral and electric blue tones, ultra-detailed, 4K, 
no text
```

### Sub-Services (Bento Grid — 3×2)

| Sub-service | Lucide Icon | Badge Label | 1-line Description | Accent |
|---|---|---|---|---|
| AI-Powered Content Creation | `PenTool` | Content AI | Brand-voice LLM pipelines for blogs, short-form, ad copy, and video scripts at scale | Coral |
| Web3 & Blockchain Growth Marketing | `TrendingUp` | Web3 Growth | Tokenomics storytelling, whitepaper distribution, Discord/X community growth | Neon Purple |
| Crypto Influencer & Community Campaigns | `Users` | Influencer | KOL identification, campaign execution, and on-chain attribution tracking | Electric Blue |
| Predictive Ad Optimization & Automation | `SlidersHorizontal` | Predictive | ML-driven budget allocation, creative A/B testing, and ROAS forecasting across ad channels | Emerald Green |
| AI-Driven Education & Funnel Marketing | `Filter` | Funnels | Automated lead nurturing, cohort analysis, and personalised drip sequences | Amber |
| SEO, Social Media, Google Ads & Branding | `Globe` | Full Stack | Technical SEO audits, paid media management, social strategy, full brand identity design | Cyber Cyan |

### How We Work
1. **Audit & Strategy** — Full-funnel audit, competitor gap analysis, channel priority map
2. **Content & Creative** — AI content production, visual identity assets, ad creative testing
3. **Campaign Execution** — Paid media launch, influencer outreach, SEO implementation
4. **Optimise & Report** — Weekly analytics review, predictive reallocation, monthly growth report

### Outcome Metrics
- 4.2× average ROAS across managed ad accounts
- 220% average organic traffic growth in 6 months
- 35+ crypto and Web3 brands scaled globally

---

## SHARED COMPONENT — SERVICE SUB-PAGE TEMPLATE

Build as: `components/services/ServicePageLayout.tsx`  
Used by: all 5 service routes above (and all existing service pages from master prompt)

```tsx
// Props
type ServicePageProps = {
  headline: string
  tagline: string
  heroImage: string        // path to /public/images/services/[name].webp
  subServices: SubService[]
  processSteps: Step[]
  techLogos: string[]      // filtered subset of full tech logo list
  metrics: Metric[]
  relatedCaseStudySlug: string
}

// Layout order (do not reorder)
// 1. HeroBlock         — full-bleed image, dark overlay, headline + tagline + 2 CTAs
// 2. SubServiceGrid    — bento grid using GlassCard.tsx, cards from subServices prop
// 3. HowWeWork         — 4-step numbered process, animated left-border reveal on scroll
// 4. TechStack         — filtered LogoWall subset, same infinite scroll as home section
// 5. OutcomeMetrics    — 3 AnimatedCounter metric cards (same component as hero metrics)
// 6. RelatedCaseStudy  — single CaseStudyCard pulled by slug
// 7. ServiceCTA        — "Ready to build your [headline]?" + compact 4-field form
//                        (Name, Email, Phone, Message — posts to /api/consultation)
```

---

## NAVIGATION INTEGRATION

Add all 5 new service routes to the Mega Menu under the "Solutions" column.

```
Solutions (Mega Menu Column 1 — AI & Automation)
  AI & Generative Technology     /services/ai-generative
  [existing AI Solutions]
  [existing Automation]

Solutions (Mega Menu Column 2 — Blockchain & Finance)
  Crypto & Blockchain Solutions  /services/crypto-blockchain
  Trading & Financial Tools      /services/trading-financial
  [existing Web3 & Blockchain]
  [existing Quant Trading]

Solutions (Mega Menu Column 3 — Growth & Community)
  Advanced Digital Marketing     /services/digital-marketing
  Education & Community          /services/education-community
  [existing Digital Transformation]
  [existing Enterprise Software]
```

---

## HOME PAGE INTEGRATION

### Section 2 — "What We Build" Bento Grid
Add 3 new cards to the existing bento grid:

| Card | Span | Accent |
|---|---|---|
| Crypto & Blockchain | 4 cols | Electric Blue |
| Advanced Digital Marketing | 4 cols | Coral |
| Education & Community | 4 cols | Amber |

### Section 5 — Industry Solutions
No changes needed — existing industries already cover Finance, Trading, Education, Government.

### Section 6 — Case Studies Strip
Reserve 2 card slots for Crypto/Trading case studies once real data is available. Use placeholder metric cards with `[COMING SOON]` badge in the interim.

---

## FULL IMAGE GENERATION BATCH

Generate all 6 images below before beginning page development. Store in `public/images/services/`.

| Filename | Prompt Summary |
|---|---|
| `crypto-blockchain.webp` | Isometric blockchain hexagonal nodes, electric blue + cyan glow, dark navy, 4K, no text |
| `trading-tools.webp` | Holographic trading terminal, floating chart screens, emerald + blue, dark space, 4K, no text |
| `ai-generative.webp` | Brain silhouette from synaptic nodes, violet + cyan neural glow, dark void, particles, 4K, no text |
| `education-community.webp` | Futuristic classroom, holographic Web3 credentials, teal + amber lighting, wide angle, 4K, no text |
| `digital-marketing.webp` | Global data funnel network, light streams on dark globe, coral + electric blue, cinematic, 4K, no text |
| `services-hub-hero.webp` | Five glowing domain planes (blockchain, AI, trading, marketing, education) stacked in dark void, all accent colours, ultra-detailed, cinematic, 4K, no text |

**Recommended tools:** Midjourney v6.1 (--ar 16:9 --style raw --q 2) or Flux Pro (aspect 16:9, steps 30)

---

## BUILD ORDER FOR THIS ADDENDUM

Follow this sequence after completing the master prompt deliverables:

1. `ServicePageLayout.tsx` — shared template component
2. Hero images generated and placed in `public/images/services/`
3. `/services/crypto-blockchain` — most complex, validate template here first
4. `/services/trading-financial`
5. `/services/ai-generative` — add the 4-node AI stack flow diagram
6. `/services/education-community`
7. `/services/digital-marketing` — 3×2 bento grid, largest card count
8. Mega Menu update — add all 5 new routes
9. Home page bento grid — add 3 new cards
10. Sitemap + metadata update — add all 5 new routes to `app/sitemap.ts` and generate `generateMetadata()` for each

---

*End of PrimAI Services Addendum — v1.0*  
*Appends to: PrimAI_Redesign_Prompt.md v1.0*
