"use client";

import { useState } from "react";
import { ChevronDown, QrCode } from "lucide-react";

export default function Footer() {
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  const toggleAccordion = (section: string) => {
    setOpenAccordion(openAccordion === section ? null : section);
  };

  return (
    <footer className="bg-black text-white pt-12 sm:pt-20 lg:pt-26">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mobile Logo */}
        <img
          src="/logo.svg"
          alt="PrimAI Logo"
          className="mb-7.5 h-6 block sm:hidden"
        />

        {/* Main Heading */}
        <h3 className="px-4 text-sm font-medium sm:text-center sm:text-4xl sm:leading-[60px] mb-1">
          Start your stablecoin payment journey with RedotPay
        </h3>
        <h2 className="px-4 text-[26px] font-semibold sm:text-center sm:text-5xl sm:leading-[60px] mb-8">
          Swift<span className="text-blue-500">.</span> Seamless<span className="text-blue-500">.</span> Secure<span className="text-blue-500">.</span>
        </h2>

        {/* Links Grid - Desktop Layout */}
        <div className="hidden lg:block mb-8">
          <div className="grid grid-cols-5 gap-8">
            {/* Row 1, Col 1 - Empty */}
            <div className="text-start p-4"></div>
            
            {/* Row 1, Col 2 - Company */}
            <div className="text-start p-4">
              <h4 className="mb-5 text-base font-semibold">Company</h4>
              <ul className="mt-5">
                <li className="p-2 rounded transition-colors hover:bg-gray-800"><a href="/about-us" className="text-gray-300 hover:text-white text-nowrap">About Us</a></li>
                <li className="p-2 rounded transition-colors hover:bg-gray-800"><a href="/community" className="text-gray-300 hover:text-white text-nowrap">Community</a></li>
                <li className="p-2 rounded transition-colors hover:bg-gray-800"><a href="/affiliates" className="text-gray-300 hover:text-white text-nowrap">Affiliate</a></li>
              </ul>
            </div>
            
            {/* Row 1, Col 3 - Resources */}
            <div className="text-start p-4">
              <h4 className="mb-5 text-base font-semibold">Resources</h4>
              <ul className="mt-5">
                <li className="p-2 rounded transition-colors hover:bg-gray-800"><a href="/news" className="text-gray-300 hover:text-white text-nowrap">Blogs</a></li>
              </ul>
            </div>
            
            {/* Row 1, Col 4 - Support */}
            <div className="text-start p-4">
              <h4 className="mb-5 text-base font-semibold">Support</h4>
              <ul className="mt-5">
                <li className="p-2 rounded transition-colors hover:bg-gray-800"><a href="/contact-us" className="text-gray-300 hover:text-white text-nowrap">Contact Us</a></li>
                <li className="p-2 rounded transition-colors hover:bg-gray-800"><a href="https://helpcenter.redotpay.com" className="text-gray-300 hover:text-white text-nowrap">Help Center</a></li>
                <li className="p-2 rounded transition-colors hover:bg-gray-800"><a href="/terms" className="text-gray-300 hover:text-white text-nowrap">Terms & Conditions</a></li>
              </ul>
            </div>
            
            {/* Row 1, Col 5 - Empty */}
            <div className="text-start p-4"></div>

            {/* Row 2, Col 1 - Crypto & Blockchain Solutions */}
            <div className="text-start p-4">
              <h5 className="text-sm font-semibold mb-3">Crypto & Blockchain Solutions</h5>
              <ul className="text-xs text-gray-300">
                <li className="p-1 rounded transition-colors hover:bg-gray-800"><a href="/centralized-exchange" className="hover:text-white transition-colors">Centralized Exchange (CEX)</a></li>
                <li className="p-1 rounded transition-colors hover:bg-gray-800"><a href="/ico-offering" className="hover:text-white transition-colors">ICO (Initial Coin Offering)</a></li>
                <li className="p-1 rounded transition-colors hover:bg-gray-800"><a href="/rwa-tokenization" className="hover:text-white transition-colors">RWA Tokenization (Real-World Asset)</a></li>
                <li className="p-1 rounded transition-colors hover:bg-gray-800"><a href="/blockchain-development" className="hover:text-white transition-colors">Layer 1 & Layer 2 Blockchain Development</a></li>
                <li className="p-1 rounded transition-colors hover:bg-gray-800"><a href="/wallets" className="hover:text-white transition-colors">Custodian & Non-Custodian Wallets</a></li>
                <li className="p-1 rounded transition-colors hover:bg-gray-800"><a href="/digital-identity" className="hover:text-white transition-colors">Digital Identity on Blockchain</a></li>
              </ul>
            </div>
            
            {/* Row 2, Col 2 - Trading & Financial Tools */}
            <div className="text-start p-4">
              <h5 className="text-sm font-semibold mb-3">Trading & Financial Tools</h5>
              <ul className="text-xs text-gray-300">
                <li className="p-1 rounded transition-colors hover:bg-gray-800"><a href="/trading-bot" className="hover:text-white transition-colors">AI-Powered Trading Bot</a></li>
                <li className="p-1 rounded transition-colors hover:bg-gray-800"><a href="/p2p-platform" className="hover:text-white transition-colors">P2P Trading Platform</a></li>
                <li className="p-1 rounded transition-colors hover:bg-gray-800"><a href="/carbon-marketing" className="hover:text-white transition-colors">Carbon Marketing Solutions</a></li>
              </ul>
            </div>
            
            {/* Row 2, Col 3 - AI & Generative Technology */}
            <div className="text-start p-4">
              <h5 className="text-sm font-semibold mb-3">AI & Generative Technology</h5>
              <ul className="text-xs text-gray-300">
                <li className="p-1 rounded transition-colors hover:bg-gray-800"><a href="/gen-ai-bot" className="hover:text-white transition-colors">Gen AI Bot</a></li>
                <li className="p-1 rounded transition-colors hover:bg-gray-800"><a href="/ai-chatbot" className="hover:text-white transition-colors">AI Chatbot</a></li>
              </ul>
            </div>
            
            {/* Row 2, Col 4 - Education & Community */}
            <div className="text-start p-4">
              <h5 className="text-sm font-semibold mb-3">Education & Community</h5>
              <ul className="text-xs text-gray-300">
                <li className="p-1 rounded transition-colors hover:bg-gray-800"><a href="/web3-education" className="hover:text-white transition-colors">Web3 Educational Platform</a></li>
                <li className="p-1 rounded transition-colors hover:bg-gray-800"><a href="/mlm-web3" className="hover:text-white transition-colors">MLM-Based Web3 Projects</a></li>
              </ul>
            </div>
            
            {/* Row 2, Col 5 - Advanced Digital Marketing */}
            <div className="text-start p-4">
              <h5 className="text-sm font-semibold mb-3">Advanced Digital Marketing</h5>
              <ul className="text-xs text-gray-300">
                <li className="p-1 rounded transition-colors hover:bg-gray-800"><a href="/content-creation" className="hover:text-white transition-colors">AI-Powered Content Creation</a></li>
                <li className="p-1 rounded transition-colors hover:bg-gray-800"><a href="/web3-growth-marketing" className="hover:text-white transition-colors">Web3 & Blockchain Growth Marketing</a></li>
                <li className="p-1 rounded transition-colors hover:bg-gray-800"><a href="/crypto-influencer" className="hover:text-white transition-colors">Crypto Influencer & Community Campaigns</a></li>
                <li className="p-1 rounded transition-colors hover:bg-gray-800"><a href="/ad-optimization" className="hover:text-white transition-colors">Predictive Ad Optimization & Automation</a></li>
                <li className="p-1 rounded transition-colors hover:bg-gray-800"><a href="/education-funnel" className="hover:text-white transition-colors">AI-Driven Education & Funnel Marketing</a></li>
                <li className="p-1 rounded transition-colors hover:bg-gray-800"><a href="/seo-marketing" className="hover:text-white transition-colors">SEO, Social Media Marketing, Google Ads, Branding</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Mobile Accordions */}
        <div className="block sm:hidden w-full mb-8">
          {/* Product & Features */}
          <div className="border-b border-gray-700 mb-5">
            <button
              onClick={() => toggleAccordion('product')}
              className="w-full flex items-center justify-between py-4 text-left text-base font-semibold"
            >
              Featured Products             
              <ChevronDown className={`w-6 h-6 transition-transform ${openAccordion === 'product' ? 'rotate-180' : ''}`} />
            </button>
            <div className={`pb-4 ${openAccordion === 'product' ? 'block' : 'hidden'}`}>
              <div className="space-y-3 text-gray-300">
                <div><a href="/card" className="hover:text-white">Card</a></div>
                <div><a href="/global-payout" className="hover:text-white">Global Payout</a></div>
                <div><a href="/multi-currency-wallet" className="hover:text-white">Multi-Currency Wallet</a></div>
                <div><a href="/credit" className="hover:text-white">Credit</a></div>
                <div><a href="/earn" className="hover:text-white">Earn</a></div>
                <div><a href="/swap" className="hover:text-white">Swap</a></div>
                <div><a href="/p2p-marketplace" className="hover:text-white">P2P Marketplace</a></div>
              </div>
            </div>
          </div>

          {/* Company */}
          <div className="border-b border-gray-700 mb-5">
            <button
              onClick={() => toggleAccordion('company')}
              className="w-full flex items-center justify-between py-4 text-left text-base font-semibold"
            >
              Company
              <ChevronDown className={`w-6 h-6 transition-transform ${openAccordion === 'company' ? 'rotate-180' : ''}`} />
            </button>
            <div className={`pb-4 ${openAccordion === 'company' ? 'block' : 'hidden'}`}>
              <div className="space-y-3 text-gray-300">
                <div><a href="/about-us" className="hover:text-white">About Us</a></div>
                <div><a href="/community" className="hover:text-white">Community</a></div>
                <div><a href="/affiliates" className="hover:text-white">Affiliate</a></div>
              </div>
            </div>
          </div>

          {/* Resources */}
          <div className="border-b border-gray-700 mb-5">
            <button
              onClick={() => toggleAccordion('resources')}
              className="w-full flex items-center justify-between py-4 text-left text-base font-semibold"
            >
              Resources
              <ChevronDown className={`w-6 h-6 transition-transform ${openAccordion === 'resources' ? 'rotate-180' : ''}`} />
            </button>
            <div className={`pb-4 ${openAccordion === 'resources' ? 'block' : 'hidden'}`}>
              <div className="space-y-3 text-gray-300">
                <div><a href="/news" className="hover:text-white">News</a></div>
              </div>
            </div>
          </div>

          {/* Support */}
          <div className="border-b border-gray-700 mb-5">
            <button
              onClick={() => toggleAccordion('support')}
              className="w-full flex items-center justify-between py-4 text-left text-base font-semibold"
            >
              Support
              <ChevronDown className={`w-6 h-6 transition-transform ${openAccordion === 'support' ? 'rotate-180' : ''}`} />
            </button>
            <div className={`pb-4 ${openAccordion === 'support' ? 'block' : 'hidden'}`}>
              <div className="space-y-3 text-gray-300">
                <div><a href="/contact-us" className="hover:text-white">Contact Us</a></div>
                <div><a href="https://helpcenter.redotpay.com" className="hover:text-white">Help Center</a></div>
                <div><a href="/terms" className="hover:text-white">Terms & Conditions</a></div>
              </div>
            </div>
          </div>
        </div>

        {/* Services Row - Mobile/Tablet */}
        <div className="block lg:hidden mb-8">
          <h4 className="text-lg font-semibold mb-6 text-center">Our Services</h4>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
            <div className="text-start">
              <h5 className="text-sm font-semibold mb-3">Crypto & Blockchain Solutions</h5>
              <ul className="text-xs text-gray-300 space-y-1">
                <li>Centralized Exchange (CEX)</li>
                <li>ICO (Initial Coin Offering)</li>
                <li>RWA Tokenization (Real-World Asset)</li>
                <li>Layer 1 & Layer 2 Blockchain Development</li>
                <li>Custodian & Non-Custodian Wallets</li>
                <li>Digital Identity on Blockchain</li>
              </ul>
            </div>
            <div className="text-start">
              <h5 className="text-sm font-semibold mb-3">Trading & Financial Tools</h5>
              <ul className="text-xs text-gray-300 space-y-1">
                <li>AI-Powered Trading Bot</li>
                <li>P2P Trading Platform</li>
                <li>Carbon Marketing Solutions</li>
              </ul>
            </div>
            <div className="text-start">
              <h5 className="text-sm font-semibold mb-3">AI & Generative Technology</h5>
              <ul className="text-xs text-gray-300 space-y-1">
                <li>Gen AI Bot</li>
                <li>AI Chatbot</li>
              </ul>
            </div>
            <div className="text-start">
              <h5 className="text-sm font-semibold mb-3">Education & Community</h5>
              <ul className="text-xs text-gray-300 space-y-1">
                <li>Web3 Educational Platform</li>
                <li>MLM-Based Web3 Projects</li>
              </ul>
            </div>
            <div className="text-start">
              <h5 className="text-sm font-semibold mb-3">Advanced Digital Marketing</h5>
              <ul className="text-xs text-gray-300 space-y-1">
                <li>AI-Powered Content Creation</li>
                <li>Web3 & Blockchain Growth Marketing</li>
                <li>Crypto Influencer & Community Campaigns</li>
                <li>Predictive Ad Optimization & Automation</li>
                <li>AI-Driven Education & Funnel Marketing</li>
                <li>SEO, Social Media Marketing, Google Ads, Branding</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Download Button (Mobile) */}
        <button className="w-full bg-white text-black border-none rounded-full py-4 px-6 text-lg font-medium flex items-center justify-center gap-3 mb-7.5 sm:hidden">
          Download App
          <QrCode className="w-6 h-6" />
        </button>

        {/* Social Links */}
        <div className="flex justify-center gap-10 mb-8">
          <a href="https://x.com/redotpay" className="text-gray-400 hover:text-white transition-colors">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </a>
          <a href="https://www.linkedin.com/company/redotpayofficial" className="text-gray-400 hover:text-white transition-colors">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
          <a href="https://www.instagram.com/redotpay/" className="text-gray-400 hover:text-white transition-colors">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12.017 0C8.396 0 7.996.014 6.79.067 5.584.12 4.775.302 4.082.559c-.726.275-1.34.64-1.95 1.25-.61.61-.975 1.224-1.25 1.95C.802 4.275.62 5.084.567 6.29.514 7.496.5 7.896.5 11.517s.014 4.021.067 5.227c.053 1.206.235 2.015.492 2.708.275.726.64 1.34 1.25 1.95.61.61 1.224.975 1.95 1.25.693.257 1.502.439 2.708.492 1.206.053 1.606.067 5.227.067s4.021-.014 5.227-.067c1.206-.053 2.015-.235 2.708-.492.726-.275 1.34-.64 1.95-1.25.61-.61.975-1.224 1.25-1.95.257-.693.439-1.502.492-2.708.053-1.206.067-1.606.067-5.227s-.014-4.021-.067-5.227c-.053-1.206-.235-2.015-.492-2.708-.275-.726-.64-1.34-1.25-1.95-.61-.61-1.224-.975-1.95-1.25C19.725.802 18.916.62 17.71.567 16.504.514 16.104.5 12.483.5s-3.988.014-5.194.067c-1.206.053-2.015.235-2.708.492-.726.275-1.34.64-1.95 1.25-.61.61-.975 1.224-1.25 1.95C.802 4.275.62 5.084.567 6.29.514 7.496.5 11.117.5 11.117z"/>
              <path d="M12.017 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4z"/>
              <circle cx="18.406" cy="5.594" r="1.44"/>
            </svg>
          </a>
          <a href="https://www.facebook.com/RedotPayOfficial" className="text-gray-400 hover:text-white transition-colors">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </a>
          <a href="https://t.me/primai" className="text-gray-400 hover:text-white transition-colors">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-.633.335-1.787 1.122-.169.133-.322.198-.462.196-.152-.003-.446-.085-.663-.156-.267-.088-.48-.135-.461-.285.01-.078.125-.158.345-.24 1.353-.592 2.256-.987 2.708-1.183 1.29-.557 1.561-.654 1.738-.657z" />
            </svg>
          </a>
        </div>

        {/* Copyright */}
        <div className="border-t-2 border-gray-700 pt-5 pb-24 text-center">
          <p className="text-gray-400 text-sm mb-2.5">Copyright © 2025 PrimAi All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}
