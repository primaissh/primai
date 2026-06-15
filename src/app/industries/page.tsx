import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import MeshBackground from "@/components/ui/MeshBackground";
import GlassCard from "@/components/ui/GlassCard";
import SectionLabel from "@/components/ui/SectionLabel";
import { TrendingUp, BarChart2, Heart, GraduationCap, Landmark, Package, Factory, Building2 } from "lucide-react";

export default function IndustriesPage() {
  const industries = [
    {
      id: "finance",
      name: "Finance & Banking",
      icon: TrendingUp,
      challenge: "High transaction auditing times, heavy KYC procedures, and manual fraud investigations.",
      solution: "Deploy semantic search vectors across bank accounts and run anomaly-detection models.",
      outcome: "Audits processed in under 1 minute with a 99% accuracy rate.",
      glow: "electric" as const,
    },
    {
      id: "trading",
      name: "Quant Trading",
      icon: BarChart2,
      challenge: "Strategy backtest delays, order execution slippages, and fragmented api pipelines.",
      solution: "Sub-millisecond multi-exchange spot and futures arbitrage execution modules.",
      outcome: "Executed over $2.4B in automated trading volume with minimal slip margins.",
      glow: "cyan" as const,
    },
    {
      id: "healthcare",
      name: "Healthcare",
      icon: Heart,
      challenge: "Fragmented patient data intake, manual scheduling logs, and slow clinical diagnostics.",
      solution: "Deploy local transcription AI systems that parse patient records automatically.",
      outcome: "Cut document administration times by 65%, letting doctors focus on care.",
      glow: "neon" as const,
    },
    {
      id: "education",
      name: "Education",
      icon: GraduationCap,
      challenge: "Falsified diploma credentials, slow assignments review, and rigid learning models.",
      solution: "Build Web3 zero-knowledge proof credentialing systems and custom tutor agents.",
      outcome: "Instant verified credential checks and improved student engagement indicators.",
      glow: "electric" as const,
    },
    {
      id: "government",
      name: "Government",
      icon: Landmark,
      challenge: "Opaque procurement pipelines, slow query responses, and manual paper processing.",
      solution: "Establish auditable smart contracts and citizen query vector chat systems.",
      outcome: "Automated citizen support systems reducing administrative queues by 40%.",
      glow: "cyan" as const,
    },
    {
      id: "logistics",
      name: "Logistics & Delivery",
      icon: Package,
      challenge: "Inefficient multi-stop vehicle route planning and manual customs document checks.",
      solution: "Dynamic TSP routing models and automated custom clearance parsers.",
      outcome: "Reduced route fuel overhead by 15% and cut warehouse dispatch queues.",
      glow: "neon" as const,
    },
    {
      id: "manufacturing",
      name: "Manufacturing",
      icon: Factory,
      challenge: "Unexpected machine repair downtime and manual physical catalog part audits.",
      solution: "IoT sensor failure prediction systems and catalog vision scanning APIs.",
      outcome: "Reduced factory line downtime by 30% via automated alerts.",
      glow: "electric" as const,
    },
    {
      id: "realestate",
      name: "Real Estate",
      icon: Building2,
      challenge: "Illiquid property investments, slow mortgage approvals, and manual lease paper reviews.",
      solution: "Avalanche subnet RWA minting pools and OCR lease auditing engines.",
      outcome: "Enabled fractional real estate transactions with instant verification.",
      glow: "cyan" as const,
    },
  ];

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <MeshBackground />
      <Navbar />

      <main className="pt-32 pb-16 px-6 max-w-6xl mx-auto space-y-24">
        {/* Industry Intro */}
        <section className="text-center space-y-4 max-w-3xl mx-auto">
          <SectionLabel>Verticals We Serve</SectionLabel>
          <h1 className="text-3xl md:text-5xl font-bold font-display tracking-tight text-text-primary">
            Specialized Enterprise Deployments
          </h1>
          <p className="text-sm text-text-secondary leading-relaxed">
            We adapt advanced cognitive networks, on-chain execution, and fast database syncs to fit compliance-heavy, high-throughput industries.
          </p>
        </section>

        {/* Detailed Industry Cards */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {industries.map((ind, idx) => {
            const Icon = ind.icon;
            return (
              <div key={idx} id={ind.id} className="scroll-mt-28">
                <GlassCard
                  glowColor={ind.glow}
                  className="p-8 space-y-6 bg-surface/30 h-full"
                >
                <div className="flex items-center gap-3 pb-4 border-b border-border/50">
                  <div className={`p-2.5 rounded-lg bg-${ind.glow}/10 text-${ind.glow}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold font-display text-text-primary">{ind.name}</h3>
                </div>

                <div className="space-y-4 text-xs md:text-sm">
                  <div className="space-y-1">
                    <span className="text-red-400 font-mono font-bold uppercase tracking-wider block text-[10px]">
                      The Challenge
                    </span>
                    <p className="text-text-secondary leading-relaxed">{ind.challenge}</p>
                  </div>

                  <div className="space-y-1">
                    <span className="text-electric font-mono font-bold uppercase tracking-wider block text-[10px]">
                      PrimAI Solution
                    </span>
                    <p className="text-text-primary leading-relaxed">{ind.solution}</p>
                  </div>

                  <div className="space-y-1">
                    <span className="text-emerald font-mono font-bold uppercase tracking-wider block text-[10px]">
                      The Outcome
                    </span>
                    <p className="text-text-secondary leading-relaxed font-semibold">{ind.outcome}</p>
                  </div>
                </div>
              </GlassCard>
            </div>
          );
        })}
        </section>
      </main>

      <Footer />
    </div>
  );
}
