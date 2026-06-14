"use client";

import Link from "next/link";
import GlassCard from "../ui/GlassCard";
import Badge from "../ui/Badge";
import SectionLabel from "../ui/SectionLabel";
import AnimatedCounter from "../ui/AnimatedCounter";

export default function CaseStudiesStrip() {
  const cases = [
    {
      tag: "FINTECH",
      title: "Hedge Fund Arbitrage Execution Engine",
      desc: "Built a sub-millisecond multi-exchange spot & futures arbitrage executor.",
      metrics: [
        { label: "Trading Volume", value: 340, prefix: "↑ ", suffix: "%" },
        { label: "Ops Overhead", value: 60, prefix: "↓ ", suffix: "%" },
        { label: "Settlement Speed", value: 4, prefix: "⚡ ", suffix: "×" },
      ],
      link: "/case-studies/hedge-fund-arbitrage",
      glow: "electric" as const,
    },
    {
      tag: "SUPPLY CHAIN",
      title: "Autonomous Procurement Agent Core",
      desc: "Automated supplier pricing audits and invoice clearing using LLM agents.",
      metrics: [
        { label: "Audit Accuracy", value: 99, prefix: "↑ ", suffix: "%" },
        { label: "Cost Savings", value: 45, prefix: "↓ ", suffix: "%" },
        { label: "Processing Speed", value: 10, prefix: "⚡ ", suffix: "×" },
      ],
      link: "/case-studies/autonomous-procurement",
      glow: "cyan" as const,
    },
    {
      tag: "WEB3 INFRA",
      title: "RWA Real Estate Tokenization Nodes",
      desc: "Architected regulatory-compliant minting smart contracts on Avalanche.",
      metrics: [
        { label: "On-chain Volume", value: 120, prefix: "$", suffix: "M+" },
        { label: "Legal Overhead", value: 75, prefix: "↓ ", suffix: "%" },
        { label: "Liquidity Turnout", value: 3, prefix: "⚡ ", suffix: "×" },
      ],
      link: "/case-studies/rwa-tokenization",
      glow: "neon" as const,
    },
    {
      tag: "ENTERPRISE",
      title: "AI Customer Support & Ticketing System",
      desc: "Deployed semantic search ticket routing saving thousands of manual hours.",
      metrics: [
        { label: "First Response", value: 95, prefix: "↓ ", suffix: "%" },
        { label: "Ticket Resolution", value: 80, prefix: "↑ ", suffix: "%" },
        { label: "Customer Rating", value: 5, prefix: "⚡ ", suffix: "★" },
      ],
      link: "/case-studies/ai-support",
      glow: "electric" as const,
    },
  ];

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto relative z-10 bg-void">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
        <div className="space-y-4">
          <SectionLabel>Case Studies</SectionLabel>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight font-display">
            Metric-Driven Deployments
          </h2>
          <p className="text-sm md:text-base text-text-secondary max-w-lg">
            Real software running in production. We don't just deliver mock-ups; we scale operations.
          </p>
        </div>
        <Link
          href="/case-studies"
          className="text-sm font-mono font-bold text-electric hover:underline flex items-center gap-1.5"
        >
          <span>View all studies</span>
          <span>→</span>
        </Link>
      </div>

      {/* Horizontal scroll strip container */}
      <div className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-thin scrollbar-track-transparent scrollbar-thumb-border/40">
        {cases.map((cs, idx) => (
          <div key={idx} className="min-w-[320px] md:min-w-[360px] max-w-[360px] snap-start flex-shrink-0">
            <GlassCard
              glowColor={cs.glow}
              className="flex flex-col justify-between h-[380px] p-6 bg-surface/30 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="space-y-4">
                <Badge variant={cs.glow === "electric" ? "primary" : cs.glow === "cyan" ? "outline" : "secondary"}>
                  {cs.tag}
                </Badge>
                <h3 className="text-lg md:text-xl font-bold font-display text-text-primary line-clamp-2">
                  {cs.title}
                </h3>
                <p className="text-xs text-text-secondary leading-relaxed line-clamp-3">
                  {cs.desc}
                </p>
              </div>

              {/* Metrics block */}
              <div className="space-y-3 mt-4 pt-4 border-t border-border/50">
                <div className="grid grid-cols-3 gap-2">
                  {cs.metrics.map((metric, mIdx) => (
                    <div key={mIdx} className="flex flex-col">
                      <span className="text-xs font-mono text-text-muted uppercase tracking-wider block">
                        {metric.label}
                      </span>
                      <span className="text-sm font-bold text-text-primary font-mono mt-0.5">
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
                  href={cs.link}
                  className="text-xs font-mono font-bold text-electric hover:underline inline-flex items-center gap-1 pt-2"
                >
                  Read Case Study →
                </Link>
              </div>
            </GlassCard>
          </div>
        ))}
      </div>
    </section>
  );
}
