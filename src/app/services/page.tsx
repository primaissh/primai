import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import MeshBackground from "@/components/ui/MeshBackground";
import GlassCard from "@/components/ui/GlassCard";
import SectionLabel from "@/components/ui/SectionLabel";
import Link from "next/link";
import { Cpu, Share2, Terminal, TrendingUp, Layers, BarChart2 } from "lucide-react";

export default function ServicesHub() {
  const serviceCards = [
    {
      title: "AI Solutions",
      slug: "ai-solutions",
      icon: Cpu,
      desc: "Deploy autonomous AI agents, semantic RAG search index structures, and custom LLM prompt sets.",
      bulletPoints: ["Automated task processing", "Intelligent context routing", "Custom model finetuning"],
      glow: "electric" as const,
    },
    {
      title: "Enterprise Automation",
      slug: "automation",
      icon: Share2,
      desc: "Unify external API databases, webhooks, and legacy programs under n8n and serverless trigger codes.",
      bulletPoints: ["Sub-second process mapping", "Database sync schedulers", "Error correction triggers"],
      glow: "neon" as const,
    },
    {
      title: "Web3 & Blockchain",
      slug: "web3-blockchain",
      icon: Terminal,
      desc: "Robust audited smart contracts, tokenization mechanisms, consensus subnets, and dApps.",
      bulletPoints: ["Solidity & Rust contract audits", "Real-world asset tokenization", "Decentralized state settlement"],
      glow: "cyan" as const,
    },
    {
      title: "Quant Trading Engines",
      slug: "quant-trading",
      icon: TrendingUp,
      desc: "High-speed backtesting, custom strategy models, portfolio rebalancing bots, and dashboard indicators.",
      bulletPoints: ["Sub-millisecond trade execution", "Multi-exchange API integrations", "Historical tick-data backtests"],
      glow: "electric" as const,
    },
    {
      title: "Enterprise Software",
      slug: "enterprise-software",
      icon: Layers,
      desc: "High-performance cloud-native web architectures utilizing Next.js, Go/Node, and Docker.",
      bulletPoints: ["Optimized server-side rendering", "Kubernetes cluster setups", "Secure OAuth validation"],
      glow: "neon" as const,
    },
    {
      title: "Digital Transformation",
      slug: "digital-transformation",
      icon: BarChart2,
      desc: "Scrape intelligence, build automated marketing flows, and construct predictive ROI loops.",
      bulletPoints: ["Sentiment scraping engines", "Dynamic campaign attribution", "Autonomous marketing pipelines"],
      glow: "cyan" as const,
    },
  ];

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <MeshBackground />
      <Navbar />

      <main className="pt-32 pb-16 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <SectionLabel>Capabilities Hub</SectionLabel>
          <h1 className="text-3xl md:text-5xl font-bold font-display tracking-tight text-text-primary">
            Our Technical Infrastructure Services
          </h1>
          <p className="text-sm text-text-secondary max-w-2xl mx-auto leading-relaxed">
            We write clean, documented, and secure software configurations to scale business operations and automate trading transactions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceCards.map((svc, idx) => {
            const Icon = svc.icon;
            return (
              <GlassCard
                key={idx}
                glowColor={svc.glow}
                className="flex flex-col justify-between p-6 h-[380px] bg-surface/30"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className={`p-2.5 rounded-lg bg-${svc.glow}/10 text-${svc.glow}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-xl font-bold font-display text-text-primary">{svc.title}</h3>
                    <p className="text-xs text-text-secondary leading-relaxed">{svc.desc}</p>
                  </div>

                  <ul className="text-xs text-text-muted list-disc pl-4 space-y-1">
                    {svc.bulletPoints.map((bp, bpIdx) => (
                      <li key={bpIdx}>{bp}</li>
                    ))}
                  </ul>
                </div>

                <Link
                  href={`/services/${svc.slug}`}
                  className="text-xs font-mono font-bold text-electric hover:underline flex items-center gap-1 mt-4"
                >
                  <span>Explore this capability</span>
                  <span>→</span>
                </Link>
              </GlassCard>
            );
          })}
        </div>
      </main>

      <Footer />
    </div>
  );
}
