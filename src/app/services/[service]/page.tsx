import { notFound } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import MeshBackground from "@/components/ui/MeshBackground";
import GlassCard from "@/components/ui/GlassCard";
import SectionLabel from "@/components/ui/SectionLabel";
import Button from "@/components/ui/Button";
import { Cpu, Share2, Terminal, TrendingUp, Layers, BarChart2 } from "lucide-react";
import { getServiceSchema } from "@/lib/schema";

interface ServiceData {
  title: string;
  icon: any;
  desc: string;
  features: { title: string; desc: string }[];
  process: string[];
  caseStudy: { title: string; metric: string; desc: string };
  glow: "electric" | "neon" | "cyan";
}

const servicesContent: Record<string, ServiceData> = {
  "ai-solutions": {
    title: "AI Solutions",
    icon: Cpu,
    desc: "Deploy autonomous AI agents, semantic RAG search index structures, and custom LLM prompt sets.",
    features: [
      { title: "Autonomous Agents", desc: "LLM agents that browse, process data, and trigger APIs." },
      { title: "Retrieval-Augmented Generation", desc: "Connect local databases to conversational models securely." },
      { title: "Model Finetuning", desc: "Adapt open-weights models to your company's syntax and codebases." },
    ],
    process: ["API audit", "Knowledge indexing", "Prompt testing", "Autonomous deployment"],
    caseStudy: {
      title: "Autonomous Procurement Agent Core",
      metric: "↑ 99% Audit Accuracy",
      desc: "Automated supplier invoicing reviews for compliance, slashing processing times.",
    },
    glow: "electric",
  },
  "automation": {
    title: "Enterprise Automation",
    icon: Share2,
    desc: "Unify external API databases, webhooks, and legacy programs under n8n and serverless trigger codes.",
    features: [
      { title: "Webhook Orchestration", desc: "Route high-throughput payloads across cloud webhooks." },
      { title: "Scheduled Tasks", desc: "Configure chronologies to verify sync statuses." },
      { title: "Legacy Bridging", desc: "Export CSV files and push data automatically to modern ERP APIs." },
    ],
    process: ["Bottleneck mapping", "n8n pipeline design", "Integration sandboxing", "Live sync"],
    caseStudy: {
      title: "AI Customer Support & Ticketing System",
      metric: "↓ 95% First Response",
      desc: "Auto-routed ticket responses that cut manual helpdesk overhead dramatically.",
    },
    glow: "neon",
  },
  "web3-blockchain": {
    title: "Web3 & Blockchain",
    icon: Terminal,
    desc: "Robust audited smart contracts, tokenization mechanisms, consensus subnets, and dApps.",
    features: [
      { title: "Contract Engineering", desc: "Clean Solidity and Rust code for EVM and Solana runtimes." },
      { title: "Asset Tokenization", desc: "Program RWA structures and fractional ownership protocols." },
      { title: "Secure Multi-Sig", desc: "Configure multisignature vaults to manage treasury transactions." },
    ],
    process: ["Contract design", "Gas optimization", "Third-party audit", "Mainnet deploy"],
    caseStudy: {
      title: "RWA Real Estate Tokenization Nodes",
      metric: "$120M+ On-chain Volume",
      desc: "Created robust compliance minting pools for global property investments.",
    },
    glow: "cyan",
  },
  "quant-trading": {
    title: "Quant Trading Engines",
    icon: TrendingUp,
    desc: "High-speed backtesting, custom strategy models, portfolio rebalancing bots, and dashboard indicators.",
    features: [
      { title: "Arbitrage Execution", desc: "Run multi-exchange price gap trades under milliseconds." },
      { title: "Indicators & Alerts", desc: "Program custom Pine Script or python tickers mapping volume." },
      { title: "Strategy Backtesting", desc: "Test trading logic on years of tick data." },
    ],
    process: ["Logic translation", "API sandboxing", "Latency profiling", "Live trade execution"],
    caseStudy: {
      title: "Hedge Fund Arbitrage Execution Engine",
      metric: "↑ 340% Trading Volume",
      desc: "Connected low-latency API triggers executing trades automatically across exchanges.",
    },
    glow: "electric",
  },
  "enterprise-software": {
    title: "Enterprise Software",
    icon: Layers,
    desc: "High-performance cloud-native web architectures utilizing Next.js, Go/Node, and Docker.",
    features: [
      { title: "Fast Next.js Apps", desc: "Server-side rendering with minimized layout shifts." },
      { title: "Cloud Kubernetes", desc: "Auto-scaling docker pods configured for high traffic spikes." },
      { title: "Relational DBs", desc: "PostgreSQL, Redis, and Supabase integrations configured for ACID safety." },
    ],
    process: ["UI/UX mockup", "API skeleton", "Scale simulation", "Docker build & deploy"],
    caseStudy: {
      title: "Global Supply Chain Dashboard",
      metric: "⚡ 4× Faster Settlement",
      desc: "Replaced outdated systems with a fast, responsive dashboard showing live delivery routes.",
    },
    glow: "neon",
  },
  "digital-transformation": {
    title: "Digital Transformation",
    icon: BarChart2,
    desc: "Scrape intelligence, build automated marketing flows, and construct predictive ROI loops.",
    features: [
      { title: "Sentiment Analysis", desc: "Audit social sentiment indexes to forecast trend surges." },
      { title: "Data Harvesting", desc: "Crawl web endpoints securely to aggregate price data." },
      { title: "Automatic Campaigns", desc: "Adjust ad budget levels dynamically depending on conversion outcomes." },
    ],
    process: ["Data mapping", "Sentiment modeling", "Attribution mapping", "Pipeline execution"],
    caseStudy: {
      title: "Real Estate Valuation Predictor",
      metric: "↓ 75% Valuation Time",
      desc: "Aggregated thousands of market prices to output automatic valuation estimates.",
    },
    glow: "cyan",
  },
};

// Generate static routes for the dynamic service pages
export async function generateStaticParams() {
  return Object.keys(servicesContent).map((service) => ({
    service,
  }));
}

type Props = {
  params: Promise<{ service: string }>;
};

export default async function ServiceDetailPage({ params }: Props) {
  const resolvedParams = await params;
  const content = servicesContent[resolvedParams.service];

  if (!content) {
    notFound();
  }

  const Icon = content.icon;
  const schema = getServiceSchema(content.title, content.desc, `/services/${resolvedParams.service}`);

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <MeshBackground />
      <Navbar />

      {/* JSON-LD Schema injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <main className="pt-32 pb-24 px-6 max-w-6xl mx-auto space-y-24">
        {/* Service Hero */}
        <section className="text-center space-y-6 max-w-3xl mx-auto">
          <div className="inline-flex p-3.5 rounded-full bg-electric/10 text-electric">
            <Icon className="w-8 h-8" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight font-display text-text-primary leading-tight">
            {content.title}
          </h1>
          <p className="text-sm md:text-base text-text-secondary leading-relaxed">
            {content.desc}
          </p>
          <div className="pt-4">
            <Button href="/book-consultation" variant="filled" glow className="px-6 py-3 text-sm">
              Request this solution
            </Button>
          </div>
        </section>

        {/* Features Bento */}
        <section className="space-y-8">
          <div className="text-center">
            <SectionLabel>What We Deliver</SectionLabel>
            <h2 className="text-2xl md:text-4xl font-bold font-display text-text-primary mt-2">
              Capabilities & Features
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {content.features.map((feat, idx) => (
              <GlassCard key={idx} glowColor={content.glow} className="space-y-4 bg-surface/30">
                <span className="text-xs font-mono font-bold text-text-muted">
                  0{idx + 1} / CAPABILITY
                </span>
                <h3 className="text-lg font-bold font-display text-text-primary">{feat.title}</h3>
                <p className="text-xs text-text-secondary leading-relaxed">{feat.desc}</p>
              </GlassCard>
            ))}
          </div>
        </section>

        {/* Deployment Process */}
        <section className="space-y-8">
          <div className="text-center">
            <SectionLabel>Pipeline</SectionLabel>
            <h2 className="text-2xl md:text-4xl font-bold font-display text-text-primary mt-2">
              Our Process Methodology
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
            {content.process.map((proc, idx) => (
              <GlassCard key={idx} glowColor={content.glow} className="space-y-2 text-center bg-surface/30">
                <span className="text-2xl font-bold font-display text-electric">0{idx + 1}</span>
                <h4 className="text-sm font-bold text-text-primary font-display">{proc}</h4>
              </GlassCard>
            ))}
          </div>
        </section>

        {/* Case Study Strip */}
        <section className="space-y-8">
          <div className="text-center">
            <SectionLabel>Case Study</SectionLabel>
            <h2 className="text-2xl md:text-4xl font-bold font-display text-text-primary mt-2">
              Proven Production Impact
            </h2>
          </div>

          <GlassCard glowColor={content.glow} className="max-w-3xl mx-auto p-8 bg-surface/30 flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1 space-y-3">
              <span className="text-xs font-mono font-bold text-text-muted uppercase">CASE PREVIEW</span>
              <h3 className="text-xl font-bold font-display text-text-primary">{content.caseStudy.title}</h3>
              <p className="text-xs text-text-secondary leading-relaxed">{content.caseStudy.desc}</p>
            </div>
            <div className="p-6 rounded-xl bg-glass border border-border text-center min-w-[200px] flex flex-col gap-1.5 shrink-0">
              <span className="text-xs font-mono font-bold text-text-muted">OUTCOME</span>
              <span className="text-2xl font-bold text-emerald font-display">{content.caseStudy.metric}</span>
            </div>
          </GlassCard>
        </section>
      </main>

      <Footer />
    </div>
  );
}
