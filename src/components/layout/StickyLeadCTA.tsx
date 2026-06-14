"use client";

import { useEffect, useState } from "react";
import { MessageCircle, Mail, X, PhoneCall } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import Button from "../ui/Button";

export default function StickyLeadCTA() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showExitModal, setShowExitModal] = useState(false);
  const [emailInput, setEmailInput] = useState("");
  const [hasShownExit, setHasShownExit] = useState(false);

  useEffect(() => {
    // 1. Expand pill after 30s
    const timer = setTimeout(() => {
      setIsExpanded(true);
    }, 30000);

    // 2. Expand pill after 70% scroll
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      if (height > 0 && scrolled / height > 0.7) {
        setIsExpanded(true);
      }
    };
    window.addEventListener("scroll", handleScroll);

    // 3. Exit intent trigger (mouse leaves top edge after 20s)
    let isEligibleForExit = false;
    const eligibilityTimer = setTimeout(() => {
      isEligibleForExit = true;
    }, 20000);

    const handleMouseLeave = (e: MouseEvent) => {
      if (isEligibleForExit && e.clientY < 20 && !hasShownExit) {
        setShowExitModal(true);
        setHasShownExit(true);
      }
    };
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      clearTimeout(timer);
      clearTimeout(eligibilityTimer);
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [hasShownExit]);

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailInput) return;
    // Redirect to full booking page with email prefilled
    window.location.href = `/book-consultation?email=${encodeURIComponent(emailInput)}`;
  };

  return (
    <>
      {/* Desktop Sticky lead CTA (bottom-right) */}
      <div className="hidden md:block fixed bottom-6 right-6 z-50">
        <AnimatePresence mode="wait">
          {!isExpanded ? (
            <motion.button
              key="pill"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              onClick={() => setIsExpanded(true)}
              className="flex items-center gap-2 bg-emerald hover:bg-emerald/90 text-white font-medium px-5 py-3 rounded-full shadow-lg shadow-emerald/20 transition-transform active:scale-95 cursor-pointer"
            >
              <MessageCircle className="w-5 h-5 fill-white" />
              <span>Talk to Us</span>
            </motion.button>
          ) : (
            <motion.div
              key="card"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              className="w-80 bg-surface border border-border p-5 rounded-2xl shadow-2xl glass-panel relative"
            >
              <button
                onClick={() => setIsExpanded(false)}
                className="absolute top-3 right-3 text-text-muted hover:text-text-primary transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
              <h4 className="text-sm font-semibold mb-2">Book a Free Strategy Call</h4>
              <p className="text-xs text-text-secondary mb-4">
                Let's discuss how we can automate your ops, build your dApp, or scale your trading systems.
              </p>
              <form onSubmit={handleEmailSubmit} className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  required
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  className="flex-1 px-3 py-1.5 rounded-lg border border-border bg-glass text-xs focus:ring-1 focus:ring-electric focus:outline-none text-text-primary"
                />
                <button
                  type="submit"
                  className="bg-electric text-white text-xs px-3 py-1.5 rounded-lg font-medium hover:bg-blue-600 transition-colors cursor-pointer"
                >
                  Go
                </button>
              </form>
              <div className="mt-3 border-t border-border/50 pt-3 flex justify-between items-center text-xs">
                <span className="text-text-muted">Or chat on WhatsApp:</span>
                <a
                  href="https://wa.me/918333947726"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald font-semibold flex items-center gap-1 hover:underline"
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-emerald" /> WhatsApp
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Mobile Sticky bottom navigation bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-surface/90 border-t border-border backdrop-blur-lg px-4 py-3 flex gap-3">
        <Button
          href="/book-consultation"
          variant="filled"
          className="flex-1 text-xs py-2.5 flex items-center justify-center gap-1.5"
        >
          <PhoneCall className="w-4 h-4" />
          <span>Book a Call</span>
        </Button>
        <a
          href="https://wa.me/918333947726"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 bg-emerald hover:bg-emerald/90 text-white text-xs font-semibold py-2.5 rounded-[10px] flex items-center justify-center gap-1.5 transition-colors"
        >
          <MessageCircle className="w-4 h-4 fill-white" />
          <span>WhatsApp</span>
        </a>
      </div>

      {/* Exit Intent Modal */}
      <AnimatePresence>
        {showExitModal && (
          <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowExitModal(false)}
              className="absolute inset-0 bg-void/80 backdrop-blur-md"
            />
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="relative w-full max-w-md bg-surface border border-border p-6 rounded-2xl shadow-2xl z-10 glass-panel"
            >
              <button
                onClick={() => setShowExitModal(false)}
                className="absolute top-4 right-4 text-text-muted hover:text-text-primary transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
              <h3 className="text-xl font-bold mb-2">Wait! Don't Miss Out</h3>
              <p className="text-sm text-text-secondary mb-4">
                Get a free architectural audit of your company's processes. Find out how AI or automation could cut costs by up to 60%.
              </p>
              <div className="flex flex-col gap-3">
                <Button
                  href="/book-consultation"
                  variant="filled"
                  glow
                  className="w-full text-sm py-3"
                  onClick={() => setShowExitModal(false)}
                >
                  Claim My Free Strategy Call
                </Button>
                <button
                  onClick={() => setShowExitModal(false)}
                  className="text-xs text-text-muted hover:text-text-primary transition-colors"
                >
                  No thanks, I'd rather stay manual
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
