"use client";

import { useState } from "react";
import { TrendingUp, BarChart2, Heart, GraduationCap, Landmark, Package, Factory, Building2 } from "lucide-react";
import GlassCard from "../ui/GlassCard";
import SectionLabel from "../ui/SectionLabel";
import { AnimatePresence, motion } from "framer-motion";

export default function IndustrySolutions() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const industries = [
    {
      name: "Finance & Banking",
      icon: TrendingUp,
      uses: ["AI fraud detection", "Algorithmic risk scoring", "Automated AML reporting"],
      glow: "electric" as const,
    },
    {
      name: "Quant Trading",
      icon: BarChart2,
      uses: ["HFT trading bots", "Backtesting engines", "Signal processing pipelines"],
      glow: "cyan" as const,
    },
    {
      name: "Healthcare",
      icon: Heart,
      uses: ["AI diagnostics assistants", "Patient data intake automation", "Inventory forecasting"],
      glow: "neon" as const,
    },
    {
      name: "Education",
      icon: GraduationCap,
      uses: ["Web3 credential verification", "Personalized learning pathways", "AI grading pipelines"],
      glow: "electric" as const,
    },
    {
      name: "Government",
      icon: Landmark,
      uses: ["Smart contract procurement", "Digital identity verification", "Citizen query agents"],
      glow: "cyan" as const,
    },
    {
      name: "Logistics",
      icon: Package,
      uses: ["Supply chain forecasting", "Multi-stop route optimization", "Automated customs processing"],
      glow: "neon" as const,
    },
    {
      name: "Manufacturing",
      icon: Factory,
      uses: ["Predictive machine maintenance", "Quality control computer vision", "Supply replenishment bots"],
      glow: "electric" as const,
    },
    {
      name: "Real Estate",
      icon: Building2,
      uses: ["RWA tokenization protocols", "Smart lease contract triggers", "Automated valuations"],
      glow: "cyan" as const,
    },
  ];

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto relative z-10 bg-void">
      <div className="text-center mb-16 space-y-4">
        <SectionLabel>Industries We Scale</SectionLabel>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight font-display">
          Tailored Computational Solutions
        </h2>
        <p className="text-sm md:text-base text-text-secondary max-w-xl mx-auto">
          We construct specialized automation models customized for compliance-heavy, high-throughput verticals.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {industries.map((ind, idx) => {
          const Icon = ind.icon;
          const isHovered = hoveredIdx === idx;

          return (
            <div
              key={idx}
              className="relative min-h-[160px] md:min-h-[180px]"
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
            >
              <GlassCard
                glowColor={ind.glow}
                className="absolute inset-0 z-10 flex flex-col justify-between h-full hover:scale-[1.02] transition-transform duration-300"
              >
                <div className="space-y-4 w-full">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg bg-${ind.glow}/10 text-${ind.glow}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <h4 className="font-bold text-text-primary text-sm font-display">{ind.name}</h4>
                  </div>

                  <AnimatePresence initial={false}>
                    {isHovered ? (
                      <motion.ul
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="text-xs text-text-secondary list-disc pl-4 space-y-1"
                      >
                        {ind.uses.map((use, uIdx) => (
                          <li key={uIdx}>{use}</li>
                        ))}
                      </motion.ul>
                    ) : (
                      <motion.p
                        initial={{ opacity: 1 }}
                        className="text-xs text-text-muted"
                      >
                        Hover to view solutions.
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>

                <div className="text-[10px] font-mono font-bold text-text-muted mt-4 group-hover:text-text-primary">
                  See solutions →
                </div>
              </GlassCard>
            </div>
          );
        })}
      </div>
    </section>
  );
}
