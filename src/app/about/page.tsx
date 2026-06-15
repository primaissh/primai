import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import MeshBackground from "@/components/ui/MeshBackground";
import GlassCard from "@/components/ui/GlassCard";
import SectionLabel from "@/components/ui/SectionLabel";
import { Info, Linkedin, Calendar, Cpu, ShieldAlert, Award, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function AboutUs() {
  const timeline = [
    { year: "2022", title: "Inception & Research", desc: "PrimAI was founded to bridge blockchain state layers and LLM cognitive pipelines." },
    { year: "2023", title: "Enterprise Integrations", desc: "Deployed n8n workflows and custom API models for supply chain and logistics customers." },
    { year: "2024", title: "Trading Bot Scaling", desc: "Launched low-latency arbitrage execution nodes for leading digital asset funds." },
    { year: "2025", title: "Enterprise Subnets", desc: "Architected compliant real-world asset (RWA) tokenization smart pools on EVM subnets." },
    { year: "2026", title: "Global Expansion", desc: "Serving clients in over 12 countries, running autonomous operations on custom nodes." },
  ];

  const team = [
    { name: "Shabbeer", role: "Principal Systems Architect", initial: "S", linkedin: "https://linkedin.com" },
    { name: "Aditya Verma", role: "Lead Deep Learning Engineer", initial: "A", linkedin: "https://linkedin.com" },
    { name: "Sarah Connor", role: "Smart Contract Audit Lead", initial: "S", linkedin: "https://linkedin.com" },
    { name: "David Chen", role: "Quant Systems Engineer", initial: "D", linkedin: "https://linkedin.com" },
  ];

  const values = [
    { title: "Zero Tradeoffs", desc: "We write clean, typed code and perform thorough regression tests on all deployments.", icon: Cpu },
    { title: "Strict Compliance", desc: "We configure private LLM networks and write SEC-compliant RWA smart pools.", icon: ShieldAlert },
    { title: "Sub-second Execution", desc: "Whether in database triggers or HFT trading bots, latency is our primary metric.", icon: Award },
  ];

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <MeshBackground />
      <Navbar />

      <main className="pt-32 pb-16 px-6 max-w-6xl mx-auto space-y-24">
        {/* Full-bleed mission hero */}
        <section className="text-center space-y-6 max-w-4xl mx-auto py-12">
          <SectionLabel>Our Mission</SectionLabel>
          <h1 className="text-3xl md:text-5xl font-bold font-display tracking-tight text-text-primary leading-tight">
            "We started PrimAI because enterprise AI was too slow, too expensive, and too fragile."
          </h1>
          <p className="text-sm md:text-base text-text-secondary leading-relaxed max-w-2xl mx-auto">
            We replace manual process blockages with robust code pipelines. Our team integrates state machines, custom large language models, and high-frequency algorithms to let companies automate operations securely.
          </p>
        </section>

        {/* Timeline */}
        <section className="space-y-8">
          <div className="text-center">
            <SectionLabel>Milestones</SectionLabel>
            <h2 className="text-2xl md:text-4xl font-bold font-display text-text-primary mt-2">
              Company Timeline
            </h2>
          </div>

          <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-thin scrollbar-track-transparent scrollbar-thumb-border/40">
            {timeline.map((item, idx) => (
              <GlassCard
                key={idx}
                glowColor="electric"
                className="min-w-[280px] md:min-w-[320px] snap-start flex-shrink-0 p-6 space-y-3 bg-surface/30"
              >
                <span className="text-3xl font-bold text-electric font-display">{item.year}</span>
                <h3 className="font-bold text-text-primary font-display">{item.title}</h3>
                <p className="text-xs text-text-secondary leading-relaxed">{item.desc}</p>
              </GlassCard>
            ))}
          </div>
        </section>

        {/* Team Grid */}
        <section className="space-y-8">
          <div className="text-center">
            <SectionLabel>Team</SectionLabel>
            <h2 className="text-2xl md:text-4xl font-bold font-display text-text-primary mt-2">
              Engineers & Architects
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {team.map((t, idx) => (
              <GlassCard
                key={idx}
                glowColor="neon"
                className="text-center p-6 space-y-4 bg-surface/30 flex flex-col items-center"
              >
                <div className="w-16 h-16 rounded-full bg-neon/10 border border-neon/30 flex items-center justify-center font-display font-bold text-xl text-neon">
                  {t.initial}
                </div>
                <div>
                  <h4 className="font-bold text-text-primary text-sm font-display">{t.name}</h4>
                  <p className="text-[11px] text-text-secondary mt-1">{t.role}</p>
                </div>
                <a
                  href={t.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex p-1.5 rounded-lg bg-glass border border-border text-text-muted hover:text-electric hover:border-electric transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </GlassCard>
            ))}
          </div>
        </section>

        {/* Core Values */}
        <section className="space-y-8">
          <div className="text-center">
            <SectionLabel>Values</SectionLabel>
            <h2 className="text-2xl md:text-4xl font-bold font-display text-text-primary mt-2">
              Our Structural Principles
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((v, idx) => {
              const Icon = v.icon;
              return (
                <GlassCard key={idx} glowColor="cyan" className="space-y-4 p-6 bg-surface/30">
                  <div className="p-2.5 rounded-lg bg-cyan/10 text-cyan inline-flex">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-text-primary font-display">{v.title}</h3>
                  <p className="text-xs text-text-secondary leading-relaxed">{v.desc}</p>
                </GlassCard>
              );
            })}
          </div>
        </section>

        {/* Why Us Comparison Table */}
        <section className="space-y-8">
          <div className="text-center">
            <SectionLabel>Comparison</SectionLabel>
            <h2 className="text-2xl md:text-4xl font-bold font-display text-text-primary mt-2">
              Why PrimAI vs Alternatives
            </h2>
          </div>

          <GlassCard glowColor="electric" className="overflow-x-auto p-0 bg-surface/30">
            <table className="w-full text-left border-collapse min-w-[600px] text-xs md:text-sm">
              <thead>
                <tr className="border-b border-border bg-glass/50 font-mono text-text-secondary text-xs uppercase tracking-wider">
                  <th className="p-4">Feature</th>
                  <th className="p-4 text-electric">PrimAI Team</th>
                  <th className="p-4">Big Agency</th>
                  <th className="p-4">Freelancers</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/50 text-text-secondary">
                <tr>
                  <td className="p-4 font-bold text-text-primary">System Integration</td>
                  <td className="p-4 text-electric font-semibold">Custom Python/Rust code & Webhooks</td>
                  <td className="p-4">Generic template wrappers</td>
                  <td className="p-4">Basic script scripts</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-text-primary">Quant Analytics</td>
                  <td className="p-4 text-electric font-semibold">Sub-millisecond latency profile</td>
                  <td className="p-4">No specialized finance experience</td>
                  <td className="p-4">Fragile single-threaded bots</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-text-primary">Audits & Security</td>
                  <td className="p-4 text-electric font-semibold">Automated testing & sandboxing</td>
                  <td className="p-4">Heavy consulting overhead</td>
                  <td className="p-4">No strict QA methods</td>
                </tr>
              </tbody>
            </table>
          </GlassCard>
        </section>
      </main>

      <Footer />
    </div>
  );
}
