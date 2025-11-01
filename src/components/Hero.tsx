"use client";

import { useState, useEffect } from "react";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="min-h-screen flex items-center pt-20 pb-20 px-10 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        {/* Hero Content */}
        <div className="max-w-2xl">
          <div className={`inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 text-indigo-600 rounded-full text-sm font-semibold mb-6 opacity-0 transition-all duration-600 ${isVisible ? 'opacity-100 translate-y-0' : 'translate-y-4'}`}>
            <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full animate-pulse"></div>
            <span>Pioneering Web3 Innovation</span>
          </div>

          <h1 className={`text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 opacity-0 transition-all duration-600 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'translate-y-4'}`}>
            Build the Future with <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Blockchain & AI</span>
          </h1>

          <p className={`text-xl text-gray-600 leading-relaxed mb-10 opacity-0 transition-all duration-600 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'translate-y-4'}`}>
            Enterprise-grade blockchain solutions, AI-powered automation, and Web3 infrastructure to transform your vision into reality.
          </p>

          <div className={`flex flex-col sm:flex-row gap-4 opacity-0 transition-all duration-600 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'translate-y-4'}`}>
            <button className="bg-indigo-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-indigo-700 hover:-translate-y-1 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2">
              Get Started
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button className="bg-white text-gray-700 border-2 border-gray-200 px-8 py-4 rounded-xl font-semibold hover:border-indigo-600 hover:text-indigo-600 hover:-translate-y-1 transition-all flex items-center justify-center gap-2">
              Watch Demo
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" fill="currentColor"/>
                <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </button>
          </div>

          <div className={`flex gap-3 mt-8 opacity-0 transition-all duration-600 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'translate-y-4'}`}>
            <div className="h-11 bg-black text-white rounded-lg px-4 py-3 text-xs font-semibold flex items-center">App Store</div>
            <div className="h-11 bg-black text-white rounded-lg px-4 py-3 text-xs font-semibold flex items-center">Google Play</div>
          </div>
        </div>

        {/* Hero Visual */}
        <div className={`relative flex justify-center items-center opacity-0 transition-all duration-800 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'translate-y-4'}`}>
          <div className="relative w-full max-w-md h-96">
            {/* Main Card */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-80 h-48 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-6 shadow-2xl animate-pulse">
                <div className="w-12 h-10 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg mb-4 relative overflow-hidden">
                  <div className="absolute inset-0 bg-white/20 rounded"></div>
                </div>
                <div className="text-white text-xl font-semibold mb-2 tracking-widest font-mono">•••• •••• •••• 8942</div>
                <div className="flex justify-between items-end mt-8">
                  <div>
                    <div className="text-white/70 text-xs uppercase tracking-wider">Card Holder</div>
                    <div className="text-white font-semibold">JOHN DOE</div>
                  </div>
                  <div className="text-white font-bold text-2xl">PrimAI</div>
                </div>
              </div>
            </div>

            {/* Floating Badges */}
            <div className="absolute top-16 left-0 bg-white p-3 rounded-lg shadow-lg animate-bounce">
              <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center text-lg">🔒</div>
              <span className="text-sm font-semibold text-gray-900">Secure</span>
            </div>
            <div className="absolute top-20 right-0 bg-white p-3 rounded-lg shadow-lg animate-bounce delay-300">
              <div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center text-lg">⚡</div>
              <span className="text-sm font-semibold text-gray-900">Fast</span>
            </div>
            <div className="absolute bottom-16 left-0 bg-white p-3 rounded-lg shadow-lg animate-bounce delay-700">
              <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center text-lg">✓</div>
              <span className="text-sm font-semibold text-gray-900">Verified</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}