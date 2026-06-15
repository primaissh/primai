"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ServicePageLayout from "@/components/services/ServicePageLayout";
import MeshBackground from "@/components/ui/MeshBackground";
import GlassCard from "@/components/ui/GlassCard";
import SectionLabel from "@/components/ui/SectionLabel";
import { Sparkles, MessageSquare, Database, ArrowRightLeft, Cpu, RefreshCcw } from "lucide-react";

export default function AiGenerativeService() {
  const subServices = [
    {
      title: "Gen AI Bot",
      description: "Custom LLM agents integrated with local RAG pipelines, API tool calling, multimodal file uploads, and persistent enterprise memory databases.",
      icon: Sparkles,
      badge: "Generative",
      accent: "neon" as const,
    },
    {
      title: "AI Chatbot",
      description: "Omnichannel chat widgets (web browser, WhatsApp, Telegram) with automated human-agent handoffs, sentiment checks, and live CRM sync pipelines.",
      icon: MessageSquare,
      badge: "Conversational",
      accent: "electric" as const,
    },
  ];

  const processSteps = [
    { title: "Use Case Discovery", desc: "Audit business directories and identify manual cognitive workflows ripe for agentic automation." },
    { title: "Data Preparation", desc: "Parse raw files, divide strings into semantic chunks, embed text, and write vector indexes to databases." },
    { title: "Agent Development", desc: "Build agent configurations, design context instructions, audit prompts, and run accuracy tests." },
    { title: "Production Deployment", desc: "Wrap agents in fast API layers, set token rate limits, and hook up live observability monitoring logs." },
  ];

  const techLogos = [
    { name: "LangChain", color: "hover:text-[#38BDF8] hover:border-[#38BDF8]/30" },
    { name: "OpenAI", color: "hover:text-[#10A37F] hover:border-[#10A37F]/30" },
    { name: "Mistral", color: "hover:text-[#FD5E53] hover:border-[#FD5E53]/30" },
    { name: "CrewAI", color: "hover:text-[#EC4899] hover:border-[#EC4899]/30" },
    { name: "Qdrant", color: "hover:text-[#FF3E00] hover:border-[#FF3E00]/30" },
  ];

  const metrics = [
    { label: "Task Automation Rate", value: 85, suffix: "% Avg" },
    { label: "Go-Live Timeline", value: 4, suffix: " Wks" },
    { label: "Enterprise Agents Deployed", value: 40, suffix: "+" },
  ];

  const caseStudy = {
    tag: "SUPPLY CHAIN",
    title: "Autonomous Procurement Agent Core",
    desc: "Automated supplier pricing audits and invoice clearing using LLM agents.",
    metric: "↑ 99% Audit Accuracy",
    slug: "autonomous-procurement",
  };

  const stackFlowSteps = [
    {
      title: "Data Ingestion",
      desc: "Retrieve and parse documents, live web APIs, relational databases, and file streams.",
      icon: Database,
    },
    {
      title: "Fine-tuning / RAG",
      desc: "Convert text to high-dimensional embeddings and ground models with vector memory stores.",
      icon: ArrowRightLeft,
    },
    {
      title: "Agent Orchestration",
      desc: "Define agent task guidelines and coordinate multi-agent actions via LangChain or CrewAI.",
      icon: Cpu,
    },
    {
      title: "Output + Feedback Loop",
      desc: "Trigger system actions, audit responses, log tokens, and record human-in-the-loop improvements.",
      icon: RefreshCcw,
    },
  ];

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <MeshBackground />
      <Navbar />

      <main className="pb-16 space-y-24">
        {/* Render standard layout but override parts if necessary - or just wrap layout with custom components */}
        <ServicePageLayout
          headline="AI & Generative Technology"
          tagline="From conversational language models to multi-agent coordinate swarms — custom designed for enterprise scale."
          heroImage="/images/services/ai-generative.webp"
          subServices={subServices}
          processSteps={processSteps}
          techLogos={techLogos}
          metrics={metrics}
          relatedCaseStudy={caseStudy}
          glowColor="neon"
        />

        {/* Custom AI Stack Flow Section */}
        <section className="px-6 max-w-4xl mx-auto space-y-12 pb-12">
          <div className="text-center space-y-4">
            <SectionLabel>Architecture</SectionLabel>
            <h2 className="text-2xl md:text-4xl font-bold font-display text-text-primary">
              How Our AI Stack Works
            </h2>
            <p className="text-xs md:text-sm text-text-secondary max-w-md mx-auto leading-relaxed">
              We compile raw data pipes into self-improving cognitive systems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
            {stackFlowSteps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div key={idx} className="relative group">
                  <GlassCard glowColor="neon" className="h-full p-5 bg-surface/20 flex flex-col justify-between gap-4">
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <div className="p-2 rounded-lg bg-neon/10 text-neon">
                          <Icon className="w-5 h-5" />
                        </div>
                        <span className="text-[10px] font-mono text-text-muted font-bold">
                          LAYER 0{idx + 1}
                        </span>
                      </div>
                      <h4 className="font-bold text-text-primary text-sm font-display">{step.title}</h4>
                      <p className="text-[11px] text-text-secondary leading-relaxed">{step.desc}</p>
                    </div>
                  </GlassCard>

                  {/* Connecting Arrow for desktop */}
                  {idx < 3 && (
                    <div className="hidden md:block absolute top-1/2 -right-4 -translate-y-1/2 text-border z-20">
                      →
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
