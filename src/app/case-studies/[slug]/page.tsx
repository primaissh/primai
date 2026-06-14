import { notFound } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import MeshBackground from "@/components/ui/MeshBackground";
import GlassCard from "@/components/ui/GlassCard";
import SectionLabel from "@/components/ui/SectionLabel";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import { getBreadcrumbSchema } from "@/lib/schema";

interface CaseDetailData {
  title: string;
  tag: string;
  desc: string;
  problem: string;
  approach: string;
  stack: string[];
  results: { label: string; value: string }[];
  glow: "electric" | "cyan" | "neon";
}

const caseDetails: Record<string, CaseDetailData> = {
  "hedge-fund-arbitrage": {
    title: "Hedge Fund Arbitrage Execution Engine",
    tag: "FINTECH",
    desc: "Built a sub-millisecond multi-exchange spot & futures arbitrage executor.",
    problem: "Arbitrage opportunities vanish in milliseconds. The client had high latency API bridges and ran single-threaded trade executors that resulted in massive trade slip overhead.",
    approach: "We architected a multi-threaded Rust executor utilizing async tokio loops. We built low-latency WebSocket connection handlers directly mapping orderbook depths and pre-allocated binary memory arrays.",
    stack: ["Rust", "Tokio Async", "WebSockets", "Prometheus", "Docker"],
    results: [
      { label: "Trading Volume Increase", value: "↑ 340%" },
      { label: "Ops Overhead Reduction", value: "↓ 60%" },
      { label: "Execution Speed", value: "<1.2ms" },
    ],
    glow: "electric",
  },
  "autonomous-procurement": {
    title: "Autonomous Procurement Agent Core",
    tag: "SUPPLY CHAIN",
    desc: "Automated supplier pricing audits and invoice clearing using LLM agents.",
    problem: "Procurement staff spent thousands of manual hours auditing supplier invoices against fluctuating master agreements, resulting in audit backlogs.",
    approach: "We built a semantic RAG catalog using Qdrant vector index. We set up an autonomous LangChain pipeline that parses raw PDF invoices, runs schema matching, and flags deviations.",
    stack: ["Python", "LangChain", "Qdrant", "OpenAI GPT-4", "FastAPI"],
    results: [
      { label: "Audit Accuracy", value: "99.2%" },
      { label: "Processing Speedup", value: "10× Faster" },
      { label: "Cost Savings", value: "45%" },
    ],
    glow: "cyan",
  },
  "rwa-tokenization": {
    title: "RWA Real Estate Tokenization Nodes",
    tag: "WEB3 INFRA",
    desc: "Architected regulatory-compliant minting smart contracts on Avalanche.",
    problem: "Real estate investments are highly illiquid. Processing fractional property deeds under legacy frameworks took weeks and incurred massive legal escrow costs.",
    approach: "We programmed ERC-3643 compliant smart contracts on an Avalanche custom subnet. We built validation pools checking KYC states directly on-chain before enabling fractional shares.",
    stack: ["Solidity", "Avalanche Subnets", "Hardhat", "TypeScript", "Ethers.js"],
    results: [
      { label: "On-chain Volume", value: "$120M+" },
      { label: "Legal Overhead", value: "↓ 75%" },
      { label: "Liquidity Turnout", value: "3× Higher" },
    ],
    glow: "neon",
  },
  "ai-support": {
    title: "AI Customer Support & Ticketing System",
    tag: "ENTERPRISE",
    desc: "Deployed semantic search ticket routing saving thousands of manual hours.",
    problem: "High volume of repeat support tickets overwhelmed the support queue, causing delays in high-priority enterprise customer resolution rates.",
    approach: "We deployed n8n trigger webhooks checking incoming ZenDesk tickets. We fed content vectors to a local database routing similar resolved issues directly, drafting replies.",
    stack: ["n8n", "NodeJS", "Zendesk API", "OpenAI API", "PostgreSQL"],
    results: [
      { label: "First Response Delay", value: "↓ 95%" },
      { label: "Auto Ticket Resolution", value: "80%" },
      { label: "Customer Rating", value: "4.8 / 5" },
    ],
    glow: "electric",
  },
};

export async function generateStaticParams() {
  return Object.keys(caseDetails).map((slug) => ({
    slug,
  }));
}

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function CaseStudyDetailPage({ params }: Props) {
  const resolvedParams = await params;
  const content = caseDetails[resolvedParams.slug];

  if (!content) {
    notFound();
  }

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", item: "/" },
    { name: "Case Studies", item: "/case-studies" },
    { name: content.title, item: `/case-studies/${resolvedParams.slug}` },
  ]);

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <MeshBackground />
      <Navbar />

      {/* JSON-LD Breadcrumb schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <main className="pt-32 pb-24 px-6 max-w-5xl mx-auto space-y-12">
        <section className="space-y-4">
          <Badge variant={content.glow === "electric" ? "primary" : content.glow === "cyan" ? "outline" : "secondary"}>
            {content.tag}
          </Badge>
          <h1 className="text-3xl md:text-5xl font-bold font-display tracking-tight text-text-primary">
            {content.title}
          </h1>
          <p className="text-sm md:text-base text-text-secondary leading-relaxed max-w-3xl">
            {content.desc}
          </p>
        </section>

        {/* Results Dashboard Grid */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {content.results.map((res, idx) => (
            <GlassCard
              key={idx}
              glowColor={content.glow}
              className="text-center p-6 bg-surface/30 flex flex-col justify-center"
            >
              <span className="text-[10px] font-mono text-text-muted uppercase tracking-wider block">
                {res.label}
              </span>
              <span className="text-2xl md:text-4xl font-bold text-emerald font-display mt-2">
                {res.value}
              </span>
            </GlassCard>
          ))}
        </section>

        {/* Main Details block */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-8 space-y-8">
            <GlassCard glowColor={content.glow} className="space-y-4 p-8 bg-surface/30">
              <h3 className="text-lg font-bold font-display text-text-primary border-b border-border/50 pb-2">
                The Problem
              </h3>
              <p className="text-xs md:text-sm text-text-secondary leading-relaxed">
                {content.problem}
              </p>
            </GlassCard>

            <GlassCard glowColor={content.glow} className="space-y-4 p-8 bg-surface/30">
              <h3 className="text-lg font-bold font-display text-text-primary border-b border-border/50 pb-2">
                Our Approach & Architecture
              </h3>
              <p className="text-xs md:text-sm text-text-secondary leading-relaxed">
                {content.approach}
              </p>
            </GlassCard>
          </div>

          <div className="md:col-span-4 space-y-6 md:sticky md:top-28">
            <GlassCard glowColor={content.glow} className="space-y-4 p-6 bg-surface/30">
              <h4 className="text-xs font-mono font-bold text-text-muted uppercase tracking-wider">
                Technology Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {content.stack.map((item, idx) => (
                  <Badge key={idx} variant="outline">
                    {item}
                  </Badge>
                ))}
              </div>
            </GlassCard>

            <GlassCard glowColor={content.glow} className="space-y-4 p-6 bg-surface/30 text-center">
              <h4 className="text-xs font-mono font-bold text-text-muted uppercase tracking-wider">
                Ready to scale?
              </h4>
              <p className="text-xs text-text-secondary">
                Let's discuss how we can adapt similar performance pipelines to fit your codebase.
              </p>
              <Button href="/book-consultation" variant="filled" glow className="w-full py-3 text-xs">
                Request Strategy Call
              </Button>
            </GlassCard>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
