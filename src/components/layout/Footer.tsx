"use client";

import { useState } from "react";
import Link from "next/link";
import { Twitter, Linkedin, MessageCircle, Send } from "lucide-react";
import Button from "../ui/Button";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setEmail("");
  };

  return (
    <footer className="relative bg-surface border-t border-border mt-20 pt-16 pb-24 md:pb-8 px-6 md:px-12 z-10">
      <div className="max-w-7xl mx-auto">
        {/* Newsletter Strip */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-12 mb-12 border-b border-border/50">
          <div className="max-w-md">
            <h3 className="text-xl font-bold mb-2 font-display">
              Stay ahead of the AI + Web3 curve.
            </h3>
            <p className="text-sm text-text-secondary">
              Get our monthly analysis on enterprise automation trends, blockchain standards, and quant indicators.
            </p>
          </div>
          <form onSubmit={handleSubscribe} className="flex gap-2 w-full md:w-auto max-w-md">
            {subscribed ? (
              <div className="text-sm text-emerald font-semibold py-3 px-4 rounded-lg bg-emerald/5 border border-emerald/20 w-full text-center">
                🎉 Thanks for subscribing!
              </div>
            ) : (
              <>
                <input
                  type="email"
                  placeholder="Enter your work email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-4 py-3 rounded-lg border border-border bg-glass text-sm focus:ring-1 focus:ring-electric focus:outline-none text-text-primary min-w-[200px]"
                />
                <Button type="submit" variant="filled" className="px-5 py-3 text-sm flex gap-1 items-center">
                  <Send className="w-4 h-4" />
                  <span>Subscribe</span>
                </Button>
              </>
            )}
          </form>
        </div>

        {/* 5-Column Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-16">
          {/* Brand Column */}
          <div className="col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2.5">
              <svg
                width="28"
                height="28"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-7 h-7 text-electric"
              >
                <path
                  d="M6 4C6 2.89543 6.89543 2 8 2H20C24.4183 2 28 5.58172 28 10C28 14.4183 24.4183 18 20 18H10V28C10 29.1046 9.10457 30 8 30C6.89543 30 6 29.1046 6 28V4Z"
                  fill="currentColor"
                />
                <circle cx="16" cy="10" r="4" fill="#8B5CF6" />
              </svg>
              <span className="font-display font-semibold text-lg text-text-primary">
                PrimAI
              </span>
            </Link>
            <p className="text-xs text-text-secondary leading-relaxed max-w-sm">
              We build what the future runs on. Enterprise AI solutions, blockchain infrastructure, and quant trading platforms.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <a
                href="https://x.com/Official_PrimAI"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-glass border border-border text-text-secondary hover:text-electric hover:border-electric transition-colors"
                aria-label="Follow us on X"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com/company/primai"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-glass border border-border text-text-secondary hover:text-electric hover:border-electric transition-colors"
                aria-label="Follow us on LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/918333947726"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-glass border border-border text-text-secondary hover:text-emerald hover:border-emerald/40 transition-colors"
                aria-label="Contact us on WhatsApp"
              >
                <MessageCircle className="w-4 h-4 fill-none" />
              </a>
            </div>
          </div>

          {/* Solutions Column */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold text-text-muted uppercase tracking-wider">
              Solutions
            </h4>
            <ul className="space-y-2 text-xs list-none">
              <li>
                <Link href="/services/ai-solutions" className="text-text-secondary hover:text-text-primary transition-colors">
                  AI Solutions
                </Link>
              </li>
              <li>
                <Link href="/services/automation" className="text-text-secondary hover:text-text-primary transition-colors">
                  Automation
                </Link>
              </li>
              <li>
                <Link href="/services/web3-blockchain" className="text-text-secondary hover:text-text-primary transition-colors">
                  Web3 / Blockchain
                </Link>
              </li>
              <li>
                <Link href="/services/quant-trading" className="text-text-secondary hover:text-text-primary transition-colors">
                  Quant Trading
                </Link>
              </li>
              <li>
                <Link href="/services/enterprise-software" className="text-text-secondary hover:text-text-primary transition-colors">
                  Enterprise Dev
                </Link>
              </li>
            </ul>
          </div>

          {/* Industries Column */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold text-text-muted uppercase tracking-wider">
              Industries
            </h4>
            <ul className="space-y-2 text-xs list-none">
              <li>
                <Link href="/industries#finance" className="text-text-secondary hover:text-text-primary transition-colors">
                  Finance
                </Link>
              </li>
              <li>
                <Link href="/industries#trading" className="text-text-secondary hover:text-text-primary transition-colors">
                  Trading
                </Link>
              </li>
              <li>
                <Link href="/industries#healthcare" className="text-text-secondary hover:text-text-primary transition-colors">
                  Healthcare
                </Link>
              </li>
              <li>
                <Link href="/industries#government" className="text-text-secondary hover:text-text-primary transition-colors">
                  Government
                </Link>
              </li>
              <li>
                <Link href="/industries#logistics" className="text-text-secondary hover:text-text-primary transition-colors">
                  Logistics
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold text-text-muted uppercase tracking-wider">
              Company
            </h4>
            <ul className="space-y-2 text-xs list-none">
              <li>
                <Link href="/about" className="text-text-secondary hover:text-text-primary transition-colors">
                  About PrimAI
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-text-secondary hover:text-text-primary transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/technology" className="text-text-secondary hover:text-text-primary transition-colors">
                  Research
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-text-secondary hover:text-text-primary transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/partner" className="text-text-secondary hover:text-text-primary transition-colors">
                  Partner With Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/30 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <p className="text-[10px] text-text-muted font-mono">
            © 2026 PrimAI Technologies. All Rights Reserved. | Built with AI for the AI era.
          </p>
          <div className="flex gap-4 text-[10px] font-mono text-text-muted">
            <Link href="/privacy" className="hover:text-text-secondary transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-text-secondary transition-colors">
              Terms of Service
            </Link>
            <Link href="/cookies" className="hover:text-text-secondary transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
