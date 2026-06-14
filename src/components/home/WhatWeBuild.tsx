"use client";

import Link from "next/link";
import { Cpu, Share2, Layers, TrendingUp, Terminal, BarChart2, Users, Network } from "lucide-react";
import GlassCard from "../ui/GlassCard";
import SectionLabel from "../ui/SectionLabel";
import { motion } from "framer-motion";

export default function WhatWeBuild() {
  const cards = [
    {
      icon: Cpu,
      badge: "AI LAYER",
      title: "Custom AI Agents",
      desc: "Autonomously execute tasks, process context, and optimize business decisions with custom LLMs.",
      link: "/services/ai-solutions",
      span: "md:col-span-7",
      glow: "electric" as const,
    },
    {
      icon: Share2,
      badge: "INTEGRATION LAYER",
      title: "AI Automation Flows",
      desc: "Chain enterprise databases, webhooks, and legacy systems with n8n and custom backends.",
      link: "/services/automation",
      span: "md:col-span-5",
      glow: "neon" as const,
    },
    {
      icon: Terminal,
      badge: "WEB3 LAYER",
      title: "Smart Contracts & Blockchain",
      desc: "Robust, audited rust/solidity logic, tokenization engines, and custom subnet node protocols.",
      link: "/services/web3-blockchain",
      span: "md:col-span-4",
      glow: "cyan" as const,
    },
    {
      icon: TrendingUp,
      badge: "QUANT LAYER",
      title: "Algorithmic Trading",
      desc: "High-speed backtesting, custom strategy execution bots, and real-time portfolio analytics.",
      link: "/services/quant-trading",
      span: "md:col-span-4",
      glow: "electric" as const,
    },
    {
      icon: Layers,
      badge: "ENTERPRISE LAYER",
      title: "Custom Software",
      desc: "High-performance full-stack web and cloud systems built on Next.js, Node, and Kubernetes.",
      link: "/services/enterprise-software",
      span: "md:col-span-4",
      glow: "neon" as const,
    },
    {
      icon: Terminal,
      badge: "CRYPTO LAYER",
      title: "Crypto & Blockchain Solutions",
      desc: "Centralized exchange matching engines, multi-sig wallets, and custom Layer 1/2 systems.",
      link: "/services/crypto-blockchain",
      span: "md:col-span-4",
      glow: "electric" as const,
    },
    {
      icon: BarChart2,
      badge: "MARKETING LAYER",
      title: "Advanced Digital Marketing",
      desc: "AI-powered copywriting pipelines, paid ad optimization, and technical SEO funnels.",
      link: "/services/digital-marketing",
      span: "md:col-span-4",
      glow: "cyan" as const,
    },
    {
      icon: Users,
      badge: "COMMUNITY LAYER",
      title: "Education & Community",
      desc: "Cohort Web3 learning hubs, NFT credential validations, and decentralized reward pools.",
      link: "/services/education-community",
      span: "md:col-span-4",
      glow: "neon" as const,
    },
    {
      icon: BarChart2,
      badge: "TRANSFORMATION LAYER",
      title: "Digital Intelligence Systems",
      desc: "Deep scraping, social trend sentiment modeling, and automated marketing campaigns based on live ROI feedback loops.",
      link: "/services/digital-transformation",
      span: "md:col-span-12",
      glow: "cyan" as const,
    },
  ];

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto relative z-10">
      <div className="text-center mb-16 space-y-4">
        <SectionLabel>Capabilities</SectionLabel>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight font-display">
          What We Build for the AI Era
        </h2>
        <p className="text-sm md:text-base text-text-secondary max-w-xl mx-auto">
          We construct the core computational intelligence, smart nodes, and automatic architectures powering tomorrow's enterprises.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {cards.map((card, idx) => {
          const Icon = card.icon;
          return (
            <motion.div
              key={idx}
              className={card.span}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
            >
              <Link href={card.link} className="block h-full group cursor-pointer">
                <GlassCard
                  glowColor={card.glow}
                  className="h-full flex flex-col justify-between gap-6"
                >
                  <div className="space-y-4">
                    <div className="flex justify-between items-start">
                      <div className={`p-2.5 rounded-xl bg-${card.glow}/10 text-${card.glow} group-hover:scale-110 transition-transform`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-[10px] font-mono tracking-widest text-text-muted bg-glass px-2 py-0.5 rounded border border-border">
                        {card.badge}
                      </span>
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-xl md:text-2xl font-bold font-display group-hover:text-text-primary transition-colors">
                        {card.title}
                      </h3>
                      <p className="text-sm text-text-secondary leading-relaxed">
                        {card.desc}
                      </p>
                    </div>
                  </div>

                  <div className="text-xs font-mono font-semibold text-text-muted group-hover:text-text-primary flex items-center gap-1.5 transition-colors mt-2">
                    <span>Explore Solutions</span>
                    <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </GlassCard>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
