"use client";

import { useRef } from "react";
import { AlertCircle, Search, Cpu, Share2, Terminal, BarChart2, CheckCircle2 } from "lucide-react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import GlassCard from "../ui/GlassCard";
import SectionLabel from "../ui/SectionLabel";

export default function SolutionFlow() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const springScroll = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  // Map scroll progress to SVG line drawing
  const pathLength = useTransform(springScroll, [0.1, 0.8], [0, 1]);

  const steps = [
    {
      label: "STEP 1",
      title: "Client Problem",
      desc: "Manual operational bottlenecks, fragmented database pipes, or manual trading models.",
      icon: AlertCircle,
      color: "border-l-red-500/80",
      glow: "electric" as const,
    },
    {
      label: "STEP 2",
      title: "PrimAI Discovery",
      desc: "We analyze database structures, audit current APIs, and map exact information bottlenecks.",
      icon: Search,
      color: "border-l-cyan/80",
      glow: "cyan" as const,
    },
    {
      label: "STEP 3",
      title: "AI Layer",
      desc: "Deploy LLM agents, establish semantic index structures, and configure custom prompts.",
      icon: Cpu,
      color: "border-l-electric/80",
      glow: "electric" as const,
    },
    {
      label: "STEP 4",
      title: "Automation Layer",
      desc: "Establish n8n triggers, configure secure webhooks, and map automated schedules.",
      icon: Share2,
      color: "border-l-neon/80",
      glow: "neon" as const,
    },
    {
      label: "STEP 5",
      title: "Blockchain Layer",
      desc: "Program smart contract triggers, mint tokens, and settle state transactions on-chain.",
      icon: Terminal,
      color: "border-l-cyan/80",
      glow: "cyan" as const,
    },
    {
      label: "STEP 6",
      title: "Analytics Layer",
      desc: "Establish real-time operational metrics dashboards and feed algorithmic trading signals.",
      icon: BarChart2,
      color: "border-l-neon/80",
      glow: "neon" as const,
    },
    {
      label: "STEP 7",
      title: "Business Outcome",
      desc: "Up to 60% operational cost savings, instant trade execution, and 24/7 autonomous scale.",
      icon: CheckCircle2,
      color: "border-l-emerald/80",
      glow: "cyan" as const,
    },
  ];

  return (
    <section ref={containerRef} className="py-24 px-6 max-w-5xl mx-auto relative z-10 bg-void">
      <div className="text-center mb-20 space-y-4">
        <SectionLabel>Process & Architecture</SectionLabel>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight font-display">
          How We Connect Your Enterprise
        </h2>
        <p className="text-sm md:text-base text-text-secondary max-w-xl mx-auto">
          From diagnosing manual blockages to deploying on-chain autonomous systems.
        </p>
      </div>

      <div className="relative">
        {/* Vertical SVG Line (Desktop Center, Mobile Left) */}
        <div className="absolute left-[23px] md:left-1/2 top-4 bottom-4 w-1 -translate-x-1/2 pointer-events-none -z-10">
          <svg className="w-full h-full" viewBox="0 0 4 1000" preserveAspectRatio="none">
            {/* Background Line */}
            <line x1="2" y1="0" x2="2" y2="1000" stroke="rgba(255,255,255,0.05)" strokeWidth="4" />
            {/* Animated Draw Line */}
            <motion.line
              x1="2"
              y1="0"
              x2="2"
              y2="1000"
              stroke="#3B82F6"
              strokeWidth="4"
              style={{ pathLength }}
            />
          </svg>
        </div>

        {/* Nodes Grid */}
        <div className="space-y-12">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            const isEven = idx % 2 === 0;

            return (
              <div
                key={idx}
                className={`flex flex-col md:flex-row items-start md:items-center ${
                  isEven ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Left/Right Card column */}
                <div className="w-full md:w-[calc(50%-40px)] ml-12 md:ml-0">
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 30 : -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  >
                    <GlassCard
                      glowColor={step.glow}
                      className={`border-l-4 ${step.color} p-5 space-y-3`}
                    >
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-glass text-text-primary">
                          <Icon className="w-5 h-5 text-electric" />
                        </div>
                        <div>
                          <span className="text-[10px] font-mono text-text-muted tracking-widest block font-bold">
                            {step.label}
                          </span>
                          <h4 className="font-bold text-text-primary font-display">{step.title}</h4>
                        </div>
                      </div>
                      <p className="text-xs text-text-secondary leading-relaxed pl-1">
                        {step.desc}
                      </p>
                    </GlassCard>
                  </motion.div>
                </div>

                {/* Center dot spacer (desktop only) */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-8 h-8 rounded-full border border-border bg-void items-center justify-center text-xs font-mono font-bold text-text-secondary shadow-lg">
                  {idx + 1}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
