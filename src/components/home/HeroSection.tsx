"use client";

import dynamic from "next/dynamic";
import { ArrowRight, Sparkles } from "lucide-react";
import Button from "../ui/Button";
import AnimatedCounter from "../ui/AnimatedCounter";
import { motion } from "framer-motion";

// Lazy-load the Three.js canvas on the client side only to optimize initial page render times
const HeroCanvas = dynamic(() => import("../canvas/HeroCanvas"), {
  ssr: false,
});

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-6 overflow-hidden z-10">
      {/* Dynamic particles background */}
      <HeroCanvas />

      {/* Grid overlay for futuristic vibe */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] -z-10" />

      <div className="max-w-5xl mx-auto text-center flex flex-col items-center gap-6">
        {/* Badge Pill */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full border border-electric/30 bg-electric/5 text-xs font-mono font-medium tracking-wider text-text-primary uppercase"
        >
          <Sparkles className="w-3.5 h-3.5 text-electric animate-pulse" />
          <span>Enterprise AI + Blockchain + Quant</span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="text-4xl md:text-7xl font-bold tracking-tight leading-[1.1] font-display max-w-4xl"
        >
          We Build What <br />
          <span className="bg-gradient-to-r from-electric via-cyan to-neon bg-clip-text text-transparent">
            The Future Runs On.
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="text-base md:text-xl text-text-secondary max-w-2xl leading-relaxed"
        >
          AI systems, blockchain infrastructure, and algorithmic trading engines for companies that can&apos;t afford to be second.
        </motion.p>

        {/* CTA Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4 mt-4 w-full sm:w-auto"
        >
          <Button href="/book-consultation" variant="filled" glow className="px-8 py-4 text-base gap-2 w-full sm:w-auto">
            <span>Book a Strategy Call</span>
            <ArrowRight className="w-4 h-4" />
          </Button>
          <Button href="/case-studies" variant="outline" className="px-8 py-4 text-base w-full sm:w-auto">
            Explore Our Work
          </Button>
        </motion.div>

        {/* Metric Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 w-full max-w-4xl mt-16 p-8 border border-border bg-surface/50 rounded-2xl backdrop-blur-md"
        >
          <div className="flex flex-col items-center gap-1">
            <span className="text-3xl md:text-4xl font-bold font-display text-electric">
              <AnimatedCounter value={50} suffix="+" />
            </span>
            <span className="text-xs md:text-sm font-mono text-text-secondary uppercase tracking-wider">
              AI Projects Delivered
            </span>
          </div>

          <div className="flex flex-col items-center gap-1 border-t md:border-t-0 md:border-x border-border/50 py-6 md:py-0">
            <span className="text-3xl md:text-4xl font-bold font-display text-cyan">
              <AnimatedCounter value={2} prefix="$" suffix="B+" />
            </span>
            <span className="text-xs md:text-sm font-mono text-text-secondary uppercase tracking-wider">
              Trading Volume Automated
            </span>
          </div>

          <div className="flex flex-col items-center gap-1">
            <span className="text-3xl md:text-4xl font-bold font-display text-neon">
              <AnimatedCounter value={12} suffix="+" />
            </span>
            <span className="text-xs md:text-sm font-mono text-text-secondary uppercase tracking-wider">
              Countries Served
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
