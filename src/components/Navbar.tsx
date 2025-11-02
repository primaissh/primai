"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-[10px] border-b border-black/6 z-50 py-4">
      <div className="max-w-6xl mx-auto px-10 flex justify-between items-center">
        <div className="flex items-center">
          <img
            src="/logo.jpg"
            alt="PrimAI Logo"
            className="h-12 w-auto"
          />
        </div>
        <ul className="hidden md:flex gap-10 list-none items-center">
          <li><Link href="#solutions" className="text-gray-700 hover:text-indigo-600 text-[15px] font-medium transition-colors">Solutions</Link></li>
          <li><Link href="#products" className="text-gray-700 hover:text-indigo-600 text-[15px] font-medium transition-colors">Products</Link></li>
          <li><Link href="#company" className="text-gray-700 hover:text-indigo-600 text-[15px] font-medium transition-colors">Company</Link></li>
          <li><Link href="#resources" className="text-gray-700 hover:text-indigo-600 text-[15px] font-medium transition-colors">Resources</Link></li>
          <li><Link href="#contact" className="bg-indigo-600 text-white px-6 py-2.5 rounded-lg font-semibold transition-all hover:bg-indigo-700 hover:-translate-y-0.5 shadow-lg hover:shadow-xl">Get Started</Link></li>
        </ul>
      </div>
    </nav>
  );
}
