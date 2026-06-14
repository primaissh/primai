"use client";

import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import MeshBackground from "@/components/ui/MeshBackground";
import GlassCard from "@/components/ui/GlassCard";
import SectionLabel from "@/components/ui/SectionLabel";
import { Cpu, Terminal, Cloud, Database } from "lucide-react";

type StackCategory = "ai" | "blockchain" | "cloud" | "data";

interface TechItem {
  name: string;
  reason: string;
}

interface StackData {
  title: string;
  desc: string;
  icon: any;
  items: TechItem[];
}

export default function TechnologyPage() {
  const [activeTab, setActiveTab] = useState<StackCategory>("ai");

  const stackDetails: Record<StackCategory, StackData> = {
    ai: {
      title: "AI Layer Capabilities",
      desc: "Our machine learning pipelines focus on automated workflow orchestration and semantic indexing.",
      icon: Cpu,
      items: [
        { name: "LangChain & CrewAI", reason: "Autonomously structure complex LLM action logs and agent pipelines." },
        { name: "OpenAI GPT-4o", reason: "Industry benchmark for parsing system instructions and structured schemas." },
        { name: "Llama 3 & Mistral", reason: "Deploy local, private open-source weights to satisfy compliance requirements." },
        { name: "Hugging Face", reason: "Model hosting and specialized classification pipeline deployments." },
      ],
    },
    blockchain: {
      title: "Blockchain & Cryptographic State",
      desc: "We write clean, audited smart contract logic focused on EVM networks and Avalanche subnets.",
      icon: Terminal,
      items: [
        { name: "Solidity & Rust", reason: "The default standard languages for writing secure, audited on-chain contracts." },
        { name: "Avalanche Subnets", reason: "Deploy regulatory-compliant subnets with gasless transactions for RWAs." },
        { name: "Solana Web3", reason: "High-throughput token settlement pipelines with sub-second finality." },
        { name: "Hardhat & Foundry", reason: "Rigorous unit testing and trace gas analysis on smart deployments." },
      ],
    },
    cloud: {
      title: "Cloud & Devops Scale",
      desc: "We deploy serverless REST APIs and auto-scaling container configurations.",
      icon: Cloud,
      items: [
        { name: "Docker & Kubernetes", reason: "Maintain zero-downtime microservice containers under heavy traffic spikes." },
        { name: "Vercel Edge Network", reason: "Ultra-fast Next.js render times with minimal edge server delay." },
        { name: "AWS & GCP", reason: "Secure node setups and database backups running in high-security VPC regions." },
        { name: "GitHub Actions", reason: "Automated lint checks, tests, and production deployments on every commit." },
      ],
    },
    data: {
      title: "Data & Cache Layer",
      desc: "We set up lightning-fast relational databases and vector indexes.",
      icon: Database,
      items: [
        { name: "Qdrant & Pinecone", reason: "High-dimensional vector indexes supporting semantic retrieval search (RAG)." },
        { name: "PostgreSQL", reason: "ACID-compliant relational database for transactional enterprise logic." },
        { name: "Redis", reason: "In-memory key-value cache layer protecting databases from repeat queries." },
        { name: "Supabase Core", reason: "Real-time client listener sync databases with clean authentication." },
      ],
    },
  };

  const tabs = [
    { id: "ai" as const, label: "AI Layer", icon: Cpu },
    { id: "blockchain" as const, label: "Blockchain", icon: Terminal },
    { id: "cloud" as const, label: "Cloud Layer", icon: Cloud },
    { id: "data" as const, label: "Data Layer", icon: Database },
  ];

  const currentStack = stackDetails[activeTab];

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <MeshBackground />
      <Navbar />

      <main className="pt-32 pb-16 px-6 max-w-6xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <SectionLabel>Research & Technology</SectionLabel>
          <h1 className="text-3xl md:text-5xl font-bold font-display tracking-tight text-text-primary">
            Our Core Technology Stack
          </h1>
          <p className="text-sm text-text-secondary max-w-xl mx-auto leading-relaxed">
            Explore the advanced protocols, frameworks, and databases we use to engineer production solutions.
          </p>
        </div>

        {/* Tab Selection */}
        <div className="flex justify-center gap-2 md:gap-4 overflow-x-auto pb-4 border-b border-border/50">
          {tabs.map((tab) => {
            const TabIcon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-full font-mono text-xs font-bold transition-all ${
                  activeTab === tab.id
                    ? "bg-electric text-white shadow-lg shadow-electric/25"
                    : "bg-glass border border-border text-text-secondary hover:text-text-primary hover:border-border/80"
                } cursor-pointer`}
              >
                <TabIcon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Active Tab panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-4 space-y-4">
            <div className="p-3.5 bg-electric/10 text-electric rounded-full inline-flex">
              <currentStack.icon className="w-8 h-8" />
            </div>
            <h2 className="text-2xl font-bold font-display text-text-primary">
              {currentStack.title}
            </h2>
            <p className="text-xs md:text-sm text-text-secondary leading-relaxed">
              {currentStack.desc}
            </p>
          </div>

          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {currentStack.items.map((item, idx) => (
              <GlassCard key={idx} glowColor="electric" className="p-6 space-y-3 bg-surface/30">
                <h3 className="font-bold text-text-primary font-display text-sm md:text-base border-b border-border/50 pb-2">
                  {item.name}
                </h3>
                <p className="text-xs text-text-secondary leading-relaxed">
                  {item.reason}
                </p>
              </GlassCard>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
