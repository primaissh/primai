"use client";

import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import MeshBackground from "@/components/ui/MeshBackground";
import GlassCard from "@/components/ui/GlassCard";
import SectionLabel from "@/components/ui/SectionLabel";
import Badge from "@/components/ui/Badge";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import Link from "next/link";

interface CaseStudy {
  tag: string;
  category: "ai" | "blockchain" | "trading" | "marketing";
  title: string;
  desc: string;
  metrics: { label: string; value: number; prefix?: string; suffix?: string }[];
  slug: string;
  glow: "electric" | "cyan" | "neon";
}

export default function CaseStudiesPage() {
  const [activeFilter, setActiveFilter] = useState<"all" | "ai" | "blockchain" | "trading" | "marketing">("all");

  const caseStudies: CaseStudy[] = [
    {
      tag: "FINTECH",
      category: "trading",
      title: "Hedge Fund Arbitrage Execution Engine",
      desc: "Built a sub-millisecond multi-exchange spot & futures arbitrage executor.",
      metrics: [
        { label: "Trading Volume", value: 340, prefix: "↑ ", suffix: "%" },
        { label: "Ops Overhead", value: 60, prefix: "↓ ", suffix: "%" },
        { label: "Settlement Speed", value: 4, prefix: "⚡ ", suffix: "×" },
      ],
      slug: "hedge-fund-arbitrage",
      glow: "electric",
    },
    {
      tag: "SUPPLY CHAIN",
      category: "ai",
      title: "Autonomous Procurement Agent Core",
      desc: "Automated supplier pricing audits and invoice clearing using LLM agents.",
      metrics: [
        { label: "Audit Accuracy", value: 99, prefix: "↑ ", suffix: "%" },
        { label: "Cost Savings", value: 45, prefix: "↓ ", suffix: "%" },
        { label: "Processing Speed", value: 10, prefix: "⚡ ", suffix: "×" },
      ],
      slug: "autonomous-procurement",
      glow: "cyan",
    },
    {
      tag: "WEB3 INFRA",
      category: "blockchain",
      title: "RWA Real Estate Tokenization Nodes",
      desc: "Architected regulatory-compliant minting smart contracts on Avalanche.",
      metrics: [
        { label: "On-chain Volume", value: 120, prefix: "$", suffix: "M+" },
        { label: "Legal Overhead", value: 75, prefix: "↓ ", suffix: "%" },
        { label: "Liquidity Turnout", value: 3, prefix: "⚡ ", suffix: "×" },
      ],
      slug: "rwa-tokenization",
      glow: "neon",
    },
    {
      tag: "ENTERPRISE",
      category: "ai",
      title: "AI Customer Support & Ticketing System",
      desc: "Deployed semantic search ticket routing saving thousands of manual hours.",
      metrics: [
        { label: "First Response", value: 95, prefix: "↓ ", suffix: "%" },
        { label: "Ticket Resolution", value: 80, prefix: "↑ ", suffix: "%" },
        { label: "Customer Rating", value: 5, prefix: "⚡ ", suffix: "★" },
      ],
      slug: "ai-support",
      glow: "electric",
    },
  ];

  const filteredStudies = activeFilter === "all"
    ? caseStudies
    : caseStudies.filter((cs) => cs.category === activeFilter);

  const filterTabs = [
    { id: "all" as const, label: "All" },
    { id: "ai" as const, label: "AI" },
    { id: "blockchain" as const, label: "Blockchain" },
    { id: "trading" as const, label: "Trading" },
    { id: "marketing" as const, label: "Marketing" },
  ];

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <MeshBackground />
      <Navbar />

      <main className="pt-32 pb-16 px-6 max-w-6xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <SectionLabel>Client Case Studies</SectionLabel>
          <h1 className="text-3xl md:text-5xl font-bold font-display tracking-tight text-text-primary">
            Proven Performance & Impact
          </h1>
          <p className="text-sm text-text-secondary max-w-xl mx-auto leading-relaxed">
            Discover how our custom pipelines cut operational overhead and automated billions in trading transactions.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex justify-center gap-2 md:gap-4 overflow-x-auto pb-4 border-b border-border/50">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`px-4 py-2 rounded-full font-mono text-xs font-bold transition-all ${
                activeFilter === tab.id
                  ? "bg-electric text-white shadow-lg shadow-electric/25"
                  : "bg-glass border border-border text-text-secondary hover:text-text-primary hover:border-border/80"
              } cursor-pointer`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Cases Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredStudies.map((cs, idx) => (
            <GlassCard
              key={idx}
              glowColor={cs.glow}
              className="flex flex-col justify-between p-6 bg-surface/30 hover:scale-[1.01] transition-all duration-300"
            >
              <div className="space-y-4">
                <Badge variant={cs.glow === "electric" ? "primary" : cs.glow === "cyan" ? "outline" : "secondary"}>
                  {cs.tag}
                </Badge>
                <h3 className="text-xl font-bold font-display text-text-primary">{cs.title}</h3>
                <p className="text-xs text-text-secondary leading-relaxed">{cs.desc}</p>
              </div>

              {/* Metrics block */}
              <div className="space-y-4 mt-6 pt-6 border-t border-border/50">
                <div className="grid grid-cols-3 gap-4">
                  {cs.metrics.map((metric, mIdx) => (
                    <div key={mIdx} className="flex flex-col">
                      <span className="text-[10px] font-mono text-text-muted uppercase tracking-wider block">
                        {metric.label}
                      </span>
                      <span className="text-base font-bold text-text-primary font-mono mt-1">
                        <AnimatedCounter
                          value={metric.value}
                          prefix={metric.prefix}
                          suffix={metric.suffix}
                        />
                      </span>
                    </div>
                  ))}
                </div>

                <Link
                  href={`/case-studies/${cs.slug}`}
                  className="text-xs font-mono font-bold text-electric hover:underline inline-flex items-center gap-1"
                >
                  Read Case Study →
                </Link>
              </div>
            </GlassCard>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
