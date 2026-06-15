"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, Menu, X, ChevronDown, MessageCircle } from "lucide-react";
import Button from "../ui/Button";
import MegaMenu from "./MegaMenu";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<"solutions" | "industries" | "company" | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus on page transition
  useEffect(() => {
    const timer = setTimeout(() => {
      setMobileMenuOpen(false);
      setActiveMegaMenu(null);
    }, 0);
    return () => clearTimeout(timer);
  }, [pathname]);

  const triggerCommandPalette = () => {
    window.dispatchEvent(new CustomEvent("open-command-palette"));
  };

  return (
    <>
      <header
        className={`fixed left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? "top-0 md:top-3 md:px-6"
            : "top-0 md:top-3 md:px-6"
        }`}
      >
        <nav
          className={`max-w-7xl mx-auto w-full relative transition-all duration-300 ${
            scrolled
              ? "bg-surface/85 backdrop-blur-xl border-b md:border border-border md:rounded-full shadow-2xl py-3 px-6"
              : "bg-transparent border-b border-transparent md:rounded-full py-4 px-6"
          }`}
          onMouseLeave={() => setActiveMegaMenu(null)}
        >
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 hover:opacity-90 transition-opacity">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8 text-electric"
              >
                <path
                  d="M6 4C6 2.89543 6.89543 2 8 2H20C24.4183 2 28 5.58172 28 10C28 14.4183 24.4183 18 20 18H10V28C10 29.1046 9.10457 30 8 30C6.89543 30 6 29.1046 6 28V4Z"
                  fill="currentColor"
                />
                <circle cx="16" cy="10" r="4" fill="#8B5CF6" />
              </svg>
              <span className="font-display font-semibold text-xl tracking-tight text-text-primary">
                PrimAI
              </span>
            </Link>

            {/* Desktop Center Links */}
            <ul className="hidden md:flex items-center gap-1.5 list-none">
              <li
                className="py-2"
                onMouseEnter={() => setActiveMegaMenu("solutions")}
              >
                <button className="flex items-center gap-1 text-sm font-medium text-text-secondary hover:text-text-primary px-3 py-1.5 rounded-full hover:bg-glass transition-colors cursor-pointer">
                  Solutions <ChevronDown className="w-3.5 h-3.5" />
                </button>
                {activeMegaMenu === "solutions" && (
                  <MegaMenu category="solutions" onClose={() => setActiveMegaMenu(null)} />
                )}
              </li>

              <li
                className="py-2"
                onMouseEnter={() => setActiveMegaMenu("industries")}
              >
                <button className="flex items-center gap-1 text-sm font-medium text-text-secondary hover:text-text-primary px-3 py-1.5 rounded-full hover:bg-glass transition-colors cursor-pointer">
                  Industries <ChevronDown className="w-3.5 h-3.5" />
                </button>
                {activeMegaMenu === "industries" && (
                  <MegaMenu category="industries" onClose={() => setActiveMegaMenu(null)} />
                )}
              </li>

              <li>
                <Link
                  href="/case-studies"
                  className="block text-sm font-medium text-text-secondary hover:text-text-primary px-3 py-1.5 rounded-full hover:bg-glass transition-colors"
                >
                  Case Studies
                </Link>
              </li>

              <li>
                <Link
                  href="/technology"
                  className="block text-sm font-medium text-text-secondary hover:text-text-primary px-3 py-1.5 rounded-full hover:bg-glass transition-colors"
                >
                  Research
                </Link>
              </li>

              <li
                className="py-2"
                onMouseEnter={() => setActiveMegaMenu("company")}
              >
                <button className="flex items-center gap-1 text-sm font-medium text-text-secondary hover:text-text-primary px-3 py-1.5 rounded-full hover:bg-glass transition-colors cursor-pointer">
                  Company <ChevronDown className="w-3.5 h-3.5" />
                </button>
                {activeMegaMenu === "company" && (
                  <MegaMenu category="company" onClose={() => setActiveMegaMenu(null)} />
                )}
              </li>
            </ul>

            {/* Desktop Right Actions */}
            <div className="hidden md:flex items-center gap-3">
              {/* Command Palette Trigger */}
              <button
                onClick={triggerCommandPalette}
                className="flex items-center gap-2 px-3 py-1.5 text-xs text-text-secondary hover:text-text-primary bg-glass border border-border rounded-full hover:border-electric/40 transition-colors cursor-pointer"
              >
                <Search className="w-3.5 h-3.5" />
                <span>Search</span>
                <kbd className="hidden lg:inline px-1 py-0.5 text-[9px] font-mono bg-border rounded text-text-muted">
                  ⌘K
                </kbd>
              </button>

              <Button href="/book-consultation" variant="filled" className="px-5 py-2 text-xs">
                Book a Call
              </Button>
            </div>

            {/* Mobile Actions */}
            <div className="flex md:hidden items-center gap-2">
              <button
                onClick={triggerCommandPalette}
                className="p-2 text-text-secondary hover:text-text-primary bg-glass border border-border rounded-full cursor-pointer"
              >
                <Search className="w-4 h-4" />
              </button>
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="p-2 text-text-secondary hover:text-text-primary bg-glass border border-border rounded-full cursor-pointer"
              >
                <Menu className="w-4 h-4" />
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Drawer menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-void flex flex-col md:hidden">
          {/* Header */}
          <div className="flex justify-between items-center px-6 py-4 border-b border-border">
            <Link href="/" className="flex items-center gap-2.5" onClick={() => setMobileMenuOpen(false)}>
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
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-text-secondary hover:text-text-primary bg-glass border border-border rounded-full cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Links list */}
          <div className="flex-1 overflow-y-auto px-6 py-8 space-y-6">
            <div className="space-y-4">
              <h5 className="text-xs font-mono text-text-muted uppercase tracking-wider">Solutions</h5>
              <div className="grid grid-cols-1 gap-2 pl-2 border-l border-border">
                <Link href="/services/ai-solutions" className="text-sm font-medium py-1 text-text-secondary hover:text-text-primary" onClick={() => setMobileMenuOpen(false)}>
                  AI Solutions
                </Link>
                <Link href="/services/automation" className="text-sm font-medium py-1 text-text-secondary hover:text-text-primary" onClick={() => setMobileMenuOpen(false)}>
                  Enterprise Automation
                </Link>
                <Link href="/services/web3-blockchain" className="text-sm font-medium py-1 text-text-secondary hover:text-text-primary" onClick={() => setMobileMenuOpen(false)}>
                  Web3 & Blockchain
                </Link>
                <Link href="/services/quant-trading" className="text-sm font-medium py-1 text-text-secondary hover:text-text-primary" onClick={() => setMobileMenuOpen(false)}>
                  Quant Trading
                </Link>
              </div>
            </div>

            <div className="space-y-4">
              <h5 className="text-xs font-mono text-text-muted uppercase tracking-wider">Industries</h5>
              <div className="grid grid-cols-1 gap-2 pl-2 border-l border-border">
                <Link href="/industries#finance" className="text-sm font-medium py-1 text-text-secondary hover:text-text-primary" onClick={() => setMobileMenuOpen(false)}>
                  Finance & Banking
                </Link>
                <Link href="/industries#trading" className="text-sm font-medium py-1 text-text-secondary hover:text-text-primary" onClick={() => setMobileMenuOpen(false)}>
                  Quant Trading
                </Link>
                <Link href="/industries#healthcare" className="text-sm font-medium py-1 text-text-secondary hover:text-text-primary" onClick={() => setMobileMenuOpen(false)}>
                  Healthcare
                </Link>
                <Link href="/industries#logistics" className="text-sm font-medium py-1 text-text-secondary hover:text-text-primary" onClick={() => setMobileMenuOpen(false)}>
                  Logistics
                </Link>
              </div>
            </div>

            <div className="space-y-4">
              <h5 className="text-xs font-mono text-text-muted uppercase tracking-wider">Resources</h5>
              <div className="grid grid-cols-1 gap-2 pl-2 border-l border-border">
                <Link href="/case-studies" className="text-sm font-medium py-1 text-text-secondary hover:text-text-primary" onClick={() => setMobileMenuOpen(false)}>
                  Case Studies
                </Link>
                <Link href="/technology" className="text-sm font-medium py-1 text-text-secondary hover:text-text-primary" onClick={() => setMobileMenuOpen(false)}>
                  Research & Stack
                </Link>
                <Link href="/blog" className="text-sm font-medium py-1 text-text-secondary hover:text-text-primary" onClick={() => setMobileMenuOpen(false)}>
                  Blog
                </Link>
              </div>
            </div>

            <div className="space-y-4">
              <h5 className="text-xs font-mono text-text-muted uppercase tracking-wider">Company</h5>
              <div className="grid grid-cols-1 gap-2 pl-2 border-l border-border">
                <Link href="/about" className="text-sm font-medium py-1 text-text-secondary hover:text-text-primary" onClick={() => setMobileMenuOpen(false)}>
                  About Us
                </Link>
                <Link href="/careers" className="text-sm font-medium py-1 text-text-secondary hover:text-text-primary" onClick={() => setMobileMenuOpen(false)}>
                  Careers
                </Link>
                <Link href="/partner" className="text-sm font-medium py-1 text-text-secondary hover:text-text-primary" onClick={() => setMobileMenuOpen(false)}>
                  Partner Program
                </Link>
                <Link href="/contact-us" className="text-sm font-medium py-1 text-text-secondary hover:text-text-primary" onClick={() => setMobileMenuOpen(false)}>
                  Contact Us
                </Link>
              </div>
            </div>
          </div>

          {/* Footer inside mobile menu */}
          <div className="p-6 border-t border-border bg-surface flex flex-col gap-3">
            <Button
              href="/book-consultation"
              variant="filled"
              className="w-full py-3 text-sm"
              onClick={() => setMobileMenuOpen(false)}
            >
              Book a Consultation
            </Button>
            <a
              href="https://wa.me/918333947726"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald text-white text-sm font-semibold py-3 rounded-[10px] flex items-center justify-center gap-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              <MessageCircle className="w-5 h-5 fill-white" />
              <span>WhatsApp Chat</span>
            </a>
          </div>
        </div>
      )}
    </>
  );
}
