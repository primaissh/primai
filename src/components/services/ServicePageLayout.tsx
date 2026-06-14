"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { ArrowRight, CheckCircle2, MessageSquare, Loader2, Send } from "lucide-react";
import GlassCard from "../ui/GlassCard";
import Button from "../ui/Button";
import SectionLabel from "../ui/SectionLabel";
import AnimatedCounter from "../ui/AnimatedCounter";
import Badge from "../ui/Badge";
import { motion } from "framer-motion";

const ctaFormSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  email: z.string().email("Please enter a valid work email"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type CtaFormData = z.infer<typeof ctaFormSchema>;

export interface SubService {
  title: string;
  description: string;
  icon: any; // Lucide Icon component
  badge: string;
  accent: "electric" | "neon" | "cyan" | "emerald" | "coral" | "amber";
}

export interface Step {
  title: string;
  desc: string;
}

export interface Metric {
  label: string;
  value: number;
  prefix?: string;
  suffix?: string;
}

interface ServicePageLayoutProps {
  headline: string;
  tagline: string;
  heroImage: string;
  subServices: SubService[];
  processSteps: Step[];
  techLogos: { name: string; color: string }[];
  metrics: Metric[];
  relatedCaseStudy: {
    tag: string;
    title: string;
    desc: string;
    metric: string;
    slug: string;
  };
  glowColor: "electric" | "cyan" | "neon";
}

export default function ServicePageLayout({
  headline,
  tagline,
  heroImage,
  subServices,
  processSteps,
  techLogos,
  metrics,
  relatedCaseStudy,
  glowColor,
}: ServicePageLayoutProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CtaFormData>({
    resolver: zodResolver(ctaFormSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = async (data: CtaFormData) => {
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/consultation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          industry: headline,
          budget: "<$10K",
          companyName: "N/A (Subpage)",
          source: "Service Page CTA",
          summary: data.message,
        }),
      });

      if (response.ok) {
        setSuccess(true);
      }
    } catch (e) {
      console.error(e);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-24">
      {/* 1. HeroBlock */}
      <section className="relative min-h-[70vh] flex items-center justify-center pt-32 pb-16 px-6 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 -z-20">
          <Image
            src={heroImage}
            alt={headline}
            fill
            className="object-cover opacity-25"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-void via-void/80 to-transparent" />
        </div>

        <div className="max-w-4xl mx-auto text-center space-y-6 relative z-10">
          <SectionLabel>SERVICE CATEGORY</SectionLabel>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight font-display text-text-primary leading-tight">
            {headline}
          </h1>
          <p className="text-base md:text-xl text-text-secondary leading-relaxed max-w-2xl mx-auto">
            {tagline}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button href="#cta-section" variant="filled" glow className="px-6 py-3 text-sm">
              Book a Strategy Call
            </Button>
            <Button href="#features-section" variant="outline" className="px-6 py-3 text-sm">
              Explore Features
            </Button>
          </div>
        </div>
      </section>

      {/* 2. SubServiceGrid */}
      <section id="features-section" className="px-6 max-w-6xl mx-auto space-y-8">
        <div className="text-center">
          <SectionLabel>Sub-Services</SectionLabel>
          <h2 className="text-2xl md:text-4xl font-bold font-display text-text-primary mt-2">
            Detailed Capabilities
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {subServices.map((sub, idx) => {
            const Icon = sub.icon;
            const borderColors = {
              electric: "border-l-electric",
              neon: "border-l-neon",
              cyan: "border-l-cyan",
              emerald: "border-l-emerald",
              coral: "border-l-red-400",
              amber: "border-l-amber-500",
            };

            return (
              <GlassCard
                key={idx}
                glowColor={glowColor}
                className={`border-l-4 ${borderColors[sub.accent] || "border-l-border"} bg-surface/30 p-6 flex flex-col justify-between h-[220px]`}
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="p-2 rounded-lg bg-glass text-text-primary">
                      <Icon className="w-5 h-5 text-electric" />
                    </div>
                    <Badge variant="outline">{sub.badge}</Badge>
                  </div>
                  <h3 className="font-bold text-text-primary text-sm md:text-base font-display">
                    {sub.title}
                  </h3>
                  <p className="text-xs text-text-secondary leading-relaxed line-clamp-3">
                    {sub.description}
                  </p>
                </div>
              </GlassCard>
            );
          })}
        </div>
      </section>

      {/* 3. HowWeWork */}
      <section className="px-6 max-w-5xl mx-auto space-y-8">
        <div className="text-center">
          <SectionLabel>Methodology</SectionLabel>
          <h2 className="text-2xl md:text-4xl font-bold font-display text-text-primary mt-2">
            How We Work
          </h2>
        </div>

        <div className="relative border-l border-border/50 ml-4 md:ml-12 pl-6 md:pl-12 space-y-12">
          {processSteps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative group"
            >
              {/* Dot */}
              <div className="absolute -left-[31px] md:-left-[55px] top-1.5 w-4 h-4 rounded-full border-2 border-electric bg-void group-hover:scale-115 transition-transform" />
              <div className="space-y-1">
                <span className="text-xs font-mono font-bold text-electric">STEP 0{idx + 1}</span>
                <h3 className="text-lg font-bold font-display text-text-primary">{step.title}</h3>
                <p className="text-xs md:text-sm text-text-secondary leading-relaxed max-w-2xl">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4. TechStack */}
      <section className="py-12 overflow-hidden bg-void relative">
        <div className="text-center mb-8">
          <SectionLabel>Integrations</SectionLabel>
          <h2 className="text-xl md:text-3xl font-bold font-display text-text-primary mt-1">
            Engineered Integrations
          </h2>
        </div>

        <div className="flex w-full group overflow-hidden">
          <div className="flex animate-scroll hover:[animation-play-state:paused] gap-4 py-2 logo-loop-container">
            {[...techLogos, ...techLogos, ...techLogos].map((item, idx) => (
              <div
                key={idx}
                className={`w-[140px] h-[56px] bg-glass border border-border rounded-xl flex items-center justify-center font-mono font-bold text-xs text-text-muted select-none transition-all duration-300 ${item.color} cursor-default`}
              >
                {item.name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. OutcomeMetrics */}
      <section className="px-6 max-w-4xl mx-auto space-y-8">
        <div className="text-center">
          <SectionLabel>Target Metrics</SectionLabel>
          <h2 className="text-2xl md:text-4xl font-bold font-display text-text-primary mt-2">
            Target Performance Outcomes
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {metrics.map((m, idx) => (
            <GlassCard
              key={idx}
              glowColor={glowColor}
              className="text-center p-6 bg-surface/30 flex flex-col justify-center gap-1.5"
            >
              <span className="text-[10px] font-mono text-text-muted uppercase tracking-wider block">
                {m.label}
              </span>
              <span className="text-2xl md:text-3xl font-bold text-emerald font-display">
                <AnimatedCounter value={m.value} prefix={m.prefix} suffix={m.suffix} />
              </span>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* 6. RelatedCaseStudy */}
      {relatedCaseStudy && (
        <section className="px-6 max-w-4xl mx-auto space-y-8">
          <div className="text-center">
            <SectionLabel>Case Study</SectionLabel>
            <h2 className="text-2xl md:text-4xl font-bold font-display text-text-primary mt-2">
              Proven Performance Impact
            </h2>
          </div>

          <GlassCard
            glowColor={glowColor}
            className="p-8 bg-surface/30 flex flex-col md:flex-row items-center gap-8"
          >
            <div className="flex-1 space-y-3">
              <Badge variant="secondary">{relatedCaseStudy.tag}</Badge>
              <h3 className="text-xl font-bold font-display text-text-primary">
                {relatedCaseStudy.title}
              </h3>
              <p className="text-xs text-text-secondary leading-relaxed">
                {relatedCaseStudy.desc}
              </p>
              <Link
                href={`/case-studies/${relatedCaseStudy.slug}`}
                className="text-xs font-mono font-bold text-electric hover:underline inline-flex items-center gap-1.5"
              >
                <span>Read Full Case Study</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
            <div className="p-6 rounded-xl bg-glass border border-border text-center min-w-[200px] flex flex-col gap-1.5 shrink-0">
              <span className="text-xs font-mono text-text-muted">OUTCOME</span>
              <span className="text-2xl font-bold text-emerald font-display">
                {relatedCaseStudy.metric}
              </span>
            </div>
          </GlassCard>
        </section>
      )}

      {/* 7. ServiceCTA */}
      <section id="cta-section" className="px-6 max-w-3xl mx-auto">
        <GlassCard glowColor={glowColor} className="p-8 md:p-12 bg-surface/40">
          {success ? (
            <div className="text-center space-y-4 py-8">
              <div className="inline-flex p-3 rounded-full bg-emerald/10 text-emerald animate-bounce">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold font-display text-text-primary">
                Application Received!
              </h3>
              <p className="text-xs text-text-secondary max-w-sm mx-auto leading-relaxed">
                We'll reach out within 24 hours. Connect on WhatsApp for instant routing.
              </p>
              <a
                href="https://wa.me/918333947726?text=Hi%20PrimAI,%20I'm%20asking%20about%20your%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-emerald text-white px-5 py-2.5 rounded-lg text-xs font-semibold hover:bg-emerald/90 transition-colors"
              >
                <MessageSquare className="w-4 h-4 fill-white" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="text-center space-y-2">
                <h3 className="text-xl md:text-2xl font-bold font-display text-text-primary">
                  Ready to build your {headline}?
                </h3>
                <p className="text-xs text-text-secondary">
                  Fill out the 4-field request form to coordinate with our systems architect.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-[10px] font-mono font-bold text-text-secondary uppercase">
                    Full Name
                  </label>
                  <input
                    type="text"
                    {...register("fullName")}
                    placeholder="Jane Doe"
                    className="w-full px-3 py-2 rounded-lg border border-border bg-glass text-xs focus:ring-1 focus:ring-electric focus:outline-none text-text-primary"
                  />
                  {errors.fullName && (
                    <p className="text-[10px] text-red-500 font-mono">{errors.fullName.message}</p>
                  )}
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-mono font-bold text-text-secondary uppercase">
                    Work Email
                  </label>
                  <input
                    type="email"
                    {...register("email")}
                    placeholder="jane@metacorp.com"
                    className="w-full px-3 py-2 rounded-lg border border-border bg-glass text-xs focus:ring-1 focus:ring-electric focus:outline-none text-text-primary"
                  />
                  {errors.email && (
                    <p className="text-[10px] text-red-500 font-mono">{errors.email.message}</p>
                  )}
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] font-mono font-bold text-text-secondary uppercase">
                  Phone Number
                </label>
                <input
                  type="tel"
                  {...register("phone")}
                  placeholder="+91 98765 43210"
                  className="w-full px-3 py-2 rounded-lg border border-border bg-glass text-xs focus:ring-1 focus:ring-electric focus:outline-none text-text-primary"
                />
                {errors.phone && (
                  <p className="text-[10px] text-red-500 font-mono">{errors.phone.message}</p>
                )}
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] font-mono font-bold text-text-secondary uppercase">
                  Message
                </label>
                <textarea
                  rows={3}
                  {...register("message")}
                  placeholder="Describe your current system bottlenecks..."
                  className="w-full px-3 py-2 rounded-lg border border-border bg-glass text-xs focus:ring-1 focus:ring-electric focus:outline-none text-text-primary resize-none"
                />
                {errors.message && (
                  <p className="text-[10px] text-red-500 font-mono">{errors.message.message}</p>
                )}
              </div>

              <Button
                type="submit"
                variant="filled"
                glow
                disabled={isSubmitting}
                className="w-full py-3 text-xs font-mono font-bold gap-2"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Sending Proposal...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Strategy Request</span>
                  </>
                )}
              </Button>
            </form>
          )}
        </GlassCard>
      </section>
    </div>
  );
}
