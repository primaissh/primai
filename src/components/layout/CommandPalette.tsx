"use client";

import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { Search, Home, BookOpen, MessageSquare, Terminal, Phone, Layers, Info } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export default function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const items = [
    { name: "Home Dashboard", path: "/", icon: Home, category: "Navigation" },
    { name: "About PrimAI", path: "/about", icon: Info, category: "Navigation" },
    { name: "Services & Solutions Hub", path: "/services", icon: Layers, category: "Navigation" },
    { name: "AI Solutions", path: "/services/ai-solutions", icon: Terminal, category: "Services" },
    { name: "Enterprise Automation", path: "/services/automation", icon: Layers, category: "Services" },
    { name: "Web3 & Blockchain Dev", path: "/services/web3-blockchain", icon: Layers, category: "Services" },
    { name: "Quant Trading Engines", path: "/services/quant-trading", icon: Layers, category: "Services" },
    { name: "Technology Stack", path: "/technology", icon: Terminal, category: "Resources" },
    { name: "Book a Consultation", path: "/book-consultation", icon: Phone, category: "Actions" },
    { name: "Read Blog Articles", path: "/blog", icon: BookOpen, category: "Resources" },
    { name: "Contact Support", path: "/contact-us", icon: MessageSquare, category: "Actions" },
  ];

  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase()) ||
    item.category.toLowerCase().includes(search.toLowerCase())
  );

  const handleSelect = (path: string) => {
    router.push(path);
    setIsOpen(false);
    setSearch("");
  };

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener("open-command-palette", handleOpen);
    return () => window.removeEventListener("open-command-palette", handleOpen);
  }, []);

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[100] flex items-start justify-center pt-[15vh] px-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-void/80 backdrop-blur-md"
            />

            {/* Panel */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ type: "spring", duration: 0.3 }}
              className="relative w-full max-w-lg overflow-hidden border border-border bg-surface/95 rounded-2xl shadow-2xl z-10 glass-panel"
            >
              {/* Search input */}
              <div className="flex items-center px-4 border-b border-border">
                <Search className="w-5 h-5 text-text-muted mr-3 flex-shrink-0" />
                <input
                  ref={inputRef}
                  type="text"
                  placeholder="Type a command or search..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full h-12 bg-transparent text-text-primary placeholder-text-muted focus:outline-none text-sm"
                />
                <span className="hidden md:inline px-2 py-0.5 text-xs font-mono bg-border text-text-muted rounded-md">
                  ESC
                </span>
              </div>

              {/* Items list */}
              <div className="max-h-[350px] overflow-y-auto p-2 space-y-1">
                {filteredItems.length === 0 ? (
                  <div className="p-4 text-center text-sm text-text-muted">
                    No results found for "{search}"
                  </div>
                ) : (
                  filteredItems.map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <button
                        key={index}
                        onClick={() => handleSelect(item.path)}
                        className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-left text-sm hover:bg-glass hover:text-electric transition-colors group cursor-pointer"
                      >
                        <div className="flex items-center gap-3">
                          <Icon className="w-4 h-4 text-text-secondary group-hover:text-electric transition-colors" />
                          <span className="font-medium">{item.name}</span>
                        </div>
                        <span className="text-xs text-text-muted uppercase font-mono tracking-wider">
                          {item.category}
                        </span>
                      </button>
                    );
                  })
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
