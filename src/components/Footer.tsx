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
          src="https://staticsource1.redotpay.com/web/img/logo.svg?t=1761894789332"
          alt="RedotPay Logo"
          className="mb-7.5 h-6 block sm:hidden"
        />

        {/* Main Heading */}
        <h3 className="px-4 text-sm font-medium sm:text-center sm:text-4xl sm:leading-[60px] mb-1">
          Start your stablecoin payment journey with RedotPay
        </h3>
        <h2 className="px-4 text-[26px] font-semibold sm:text-center sm:text-5xl sm:leading-[60px] mb-8">
          Swift<span className="text-blue-500">.</span> Seamless<span className="text-blue-500">.</span> Secure<span className="text-blue-500">.</span>
        </h2>

        {/* QR Code Section (Desktop) and Links Grid - Desktop Layout */}
        <div className="hidden lg:flex justify-between gap-8 mb-8">
          {/* QR Code Section */}
          <div className="flex-shrink-0">
            <h4 className="text-base font-semibold mb-5">Scan to Download</h4>
            <div className="rounded-2xl border-2 border-gray-500 bg-white/20 p-4">
              <svg height="120" width="120" viewBox="0 0 29 29" role="img">
                <path fill="#ffffff20" d="M0,0 h29v29H0z" shapeRendering="crispEdges"></path>
                <path fill="#ffffff" d="M0 0h7v1H0zM8 0h1v1H8zM13 0h1v1H13zM15 0h4v1H15zM22,0 h7v1H22zM0 1h1v1H0zM6 1h1v1H6zM10 1h2v1H10zM16 1h1v1H16zM19 1h2v1H19zM22 1h1v1H22zM28,1 h1v1H28zM0 2h1v1H0zM2 2h3v1H2zM6 2h1v1H6zM9 2h2v1H9zM14 2h7v1H14zM22 2h1v1H22zM24 2h3v1H24zM28,2 h1v1H28zM0 3h1v1H0zM2 3h3v1H2zM6 3h1v1H6zM8 3h1v1H8zM10 3h1v1H10zM12 3h4v1H12zM18 3h2v1H18zM22 3h1v1H22zM24 3h3v1H24zM28,3 h1v1H28zM0 4h1v1H0zM2 4h3v1H2zM6 4h1v1H6zM8 4h2v1H8zM11 4h1v1H11zM13 4h4v1H13zM18 4h1v1H18zM20 4h1v1H20zM22 4h1v1H22zM24 4h3v1H24zM28,4 h1v1H28zM0 5h1v1H0zM6 5h1v1H6zM8 5h1v1H8zM10 5h3v1H10zM14 5h1v1H14zM19 5h1v1H19zM22 5h1v1H22zM28,5 h1v1H28zM0 6h7v1H0zM8 6h1v1H8zM10 6h1v1H10zM12 6h1v1H12zM14 6h1v1H14zM16 6h1v1H16zM18 6h1v1H18zM20 6h1v1H20zM22,6 h7v1H22zM8 7h1v1H8zM10 7h1v1H10zM12 7h1v1H12zM14 7h6v1H14zM0 8h1v1H0zM4 8h1v1H4zM6 8h3v1H6zM10 8h1v1H10zM13 8h6v1H13zM20 8h6v1H20zM28,8 h1v1H28zM2 9h4v1H2zM7 9h1v1H7zM9 9h1v1H9zM11 9h1v1H11zM14 9h5v1H14zM21,9 h8v1H21zM0 10h1v1H0zM2 10h2v1H2zM5 10h2v1H5zM8 10h1v1H8zM10 10h1v1H10zM12 10h5v1H12zM18 10h1v1H18zM22 10h1v1H22zM24 10h1v1H24zM28,10 h1v1H28zM0 11h2v1H0zM3 11h1v1H3zM5 11h1v1H5zM10 11h1v1H10zM12 11h2v1H12zM16 11h7v1H16zM24 11h2v1H24zM27,11 h2v1H27zM0 12h2v1H0zM4 12h3v1H4zM10 12h1v1H10zM13 12h1v1H13zM15 12h1v1H15zM20 12h1v1H20zM27 12h1v1H27zM1 13h2v1H1zM4 13h1v1H4zM7 13h2v1H7zM11 13h1v1H11zM13 13h6v1H13zM22,13 h7v1H22zM1 14h2v1H1zM4 14h3v1H4zM9 14h2v1H9zM12 14h1v1H12zM15 14h4v1H15zM20 14h1v1H20zM23 14h1v1H23zM25 14h2v1H25zM28,14 h1v1H28zM0 15h4v1H0zM7 15h2v1H7zM11 15h2v1H11zM14 15h1v1H14zM17 15h2v1H17zM21 15h1v1H21zM27,15 h2v1H27zM6 16h3v1H6zM13 16h2v1H13zM16 16h1v1H16zM20 16h2v1H20zM27 16h1v1H27zM0 17h3v1H0zM5 17h1v1H5zM7 17h3v1H7zM11 17h2v1H11zM15 17h1v1H15zM22 17h4v1H22zM27,17 h2v1H27zM3 18h2v1H3zM6 18h2v1H6zM9 18h1v1H9zM11 18h1v1H11zM13 18h3v1H13zM18 18h1v1H18zM26 18h1v1H26zM28,18 h1v1H28zM2 19h1v1H2zM4 19h2v1H4zM8 19h1v1H8zM13 19h1v1H13zM15 19h3v1H15zM20 19h1v1H20zM27,19 h2v1H27zM0 20h4v1H0zM5 20h2v1H5zM9 20h5v1H9zM16 20h1v1H16zM20 20h6v1H20zM28,20 h1v1H28zM8 21h1v1H8zM12 21h5v1H12zM18 21h3v1H18zM24 21h1v1H24zM28,21 h1v1H28zM0 22h7v1H0zM8 22h1v1H8zM12 22h1v1H12zM15 22h1v1H15zM17 22h4v1H17zM22 22h1v1H22zM24 22h3v1H24zM28,22 h1v1H28zM0 23h1v1H0zM6 23h1v1H6zM10 23h3v1H10zM14 23h1v1H14zM16 23h2v1H16zM19 23h2v1H19zM24 23h1v1H24zM27 23h1v1H27zM0 24h1v1H0zM2 24h3v1H2zM6 24h1v1H6zM8 24h2v1H8zM13 24h2v1H13zM16 24h2v1H16zM19 24h7v1H19zM27 24h1v1H27zM0 25h1v1H0zM2 25h3v1H2zM6 25h1v1H6zM9 25h1v1H9zM11 25h1v1H11zM15 25h1v1H15zM17 25h2v1H17zM20 25h2v1H20zM28,25 h1v1H28zM0 26h1v1H0zM2 26h3v1H2zM6 26h1v1H6zM10 26h6v1H10zM17 26h1v1H17zM19 26h1v1H19zM21 26h1v1H21zM25,26 h4v1H25zM0 27h1v1H0zM6 27h1v1H6zM9 27h1v1H9zM11 27h1v1H11zM13 27h1v1H13zM17 27h1v1H17zM20 27h1v1H20zM23 27h3v1H23zM27,27 h2v1H27zM0 28h7v1H0zM8 28h1v1H8zM11 28h1v1H11zM13 28h3v1H13zM17 28h2v1H17zM20 28h1v1H20zM22 28h1v1H22zM24 28h1v1H24zM27 28h1v1H27z" shapeRendering="crispEdges"></path>
              </svg>
            </div>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-4 gap-8 flex-1">
            <div className="text-start">
              <h4 className="mb-5 text-base font-semibold">Product & Features</h4>
              <ul className="mt-5 space-y-3">
                <li><a href="/card" className="text-gray-300 hover:text-white text-nowrap">Card</a></li>
                <li><a href="/global-payout" className="text-gray-300 hover:text-white text-nowrap">Global Payout</a></li>
                <li><a href="/multi-currency-wallet" className="text-gray-300 hover:text-white text-nowrap">Multi-Currency Wallet</a></li>
                <li><a href="/credit" className="text-gray-300 hover:text-white text-nowrap">Credit</a></li>
                <li><a href="/earn" className="text-gray-300 hover:text-white text-nowrap">Earn</a></li>
                <li><a href="/swap" className="text-gray-300 hover:text-white text-nowrap">Swap</a></li>
                <li><a href="/p2p-marketplace" className="text-gray-300 hover:text-white text-nowrap">P2P Marketplace</a></li>
              </ul>
            </div>
            <div className="text-start">
              <h4 className="mb-5 text-base font-semibold">Company</h4>
              <ul className="mt-5 space-y-3">
                <li><a href="/about-us" className="text-gray-300 hover:text-white text-nowrap">About Us</a></li>
                <li><a href="/community" className="text-gray-300 hover:text-white text-nowrap">Community</a></li>
                <li><a href="/affiliates" className="text-gray-300 hover:text-white text-nowrap">Affiliate</a></li>
              </ul>
            </div>
            <div className="text-start">
              <h4 className="mb-5 text-base font-semibold">Resources</h4>
              <ul className="mt-5 space-y-3">
                <li><a href="/news" className="text-gray-300 hover:text-white text-nowrap">News</a></li>
              </ul>
            </div>
            <div className="text-start">
              <h4 className="mb-5 text-base font-semibold">Support</h4>
              <ul className="mt-5 space-y-3">
                <li><a href="/contact-us" className="text-gray-300 hover:text-white text-nowrap">Contact Us</a></li>
                <li><a href="https://helpcenter.redotpay.com" className="text-gray-300 hover:text-white text-nowrap">Help Center</a></li>
                <li><a href="/terms" className="text-gray-300 hover:text-white text-nowrap">Terms & Conditions</a></li>
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
              Product & Features
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
          <a href="https://t.me/RedotPayAnnouncement" className="text-gray-400 hover:text-white transition-colors">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-1.447-1.238-1.447-1.238s-.155-.093-.466-.09c-.28.003-.57.18-.57.18s-.586 1.353-.584 1.353c.754 3.406 1.797 5.023 1.797 5.023.104.093.2.18.326.246.12.066.245.1.37.1.266 0 .421-.15.421-.15s2.665-2.448 4.326-4.145c1.514-1.543 2.093-2.643 2.093-2.643s.35-.394.35-.394c.184-.172.276-.372.25-.57-.01-.02-.012-.04-.012-.058-.01-.093-.14-.18-.394-.25-.395-.106-.895-.222-1.395-.35-.496-.128-1.093-.286-1.793-.486-.7-.2-1.34-.394-1.94-.586-.6-.192-1.14-.38-1.64-.564-.5-.184-.96-.37-1.36-.554-.4-.184-.74-.37-.94-.554-.2-.184-.34-.37-.34-.37s-.06-.08-.18-.18c-.12-.1-.28-.18-.48-.18-.2 0-.38.08-.48.18-.1.1-.18.18-.18.18s-.18.184-.34.37c-.16.186-.3.37-.44.554-.14.184-.28.37-.42.554-.14.184-.26.37-.36.554-.1.184-.16.37-.16.37s-.08.08-.16.18c-.08.1-.14.18-.14.18s-.08.08-.14.18c-.06.1-.1.18-.1.18s-.04.08-.08.18c-.04.1-.06.18-.06.18s-.02.08-.04.18c-.02.1-.02.18-.02.18s0 .08 0 .18c0 .1 0 .18 0 .18s0 .08 0 .18c0 .1 0 .18 0 .18s0 .08 0 .18c0 .1 0 .18 0 .18s0 .08 0 .18c0 .1 0 .18 0 .18s0 .08 0 .18c0 .1 0 .18 0 .18s0 .08 0 .18c0 .1 0 .18 0 .18s0 .08 0 .18c0 .1 0 .18 0 .18s0 .08 0 .18c0 .1 0 .18 0 .18s0 .08 0 .18c0 .1 0 .18 0 .18s0 .08 0 .18c0 .1 0 .18 0 .18s0 .08 0 .18c0 .1 0 .18 0 .18s0 .08 0 .18c0 .1 0 .18 0 .18s0 .08 0 .18c0 .1 0 .18 0 .18s0 .08 0 .18c0 .1 0 .18 0 .18s0 .08 0 .18c0 .1 0 .18 0 .18s0 .08 0 .18c0 .1 0 .18 0 .18s0 .08 0 .18c0 .1 0 .18 0 .18s0 .08 0 .18c0 .1 0 .18 0 .18s0 .08 0 .18c0 .1 0 .18 0 .18s0 .08 0 .18c0 .1 0 .18 0 .18s0 .08 0 .18c0 .1 0 .18 0 .18s0 .08 0 .18c0 .1 0 .18 0 .18s0 .08 0 .18c0 .1 0 .18 0 .18s0 .08 0 .18c0 .1 0 .18" />
            </svg>
          </a>
        </div>

        {/* Copyright */}
        <div className="border-t-2 border-gray-700 pt-5 pb-24 text-center">
          <p className="text-gray-400 text-sm mb-2.5">Copyright © 2025 PrimAi All Rights Reserved</p>
          <p className="text-gray-400 text-sm">Inscripto bajo el N° 144 en el Registro de PSAV de la CNV (República Argentina).</p>
        </div>
      </div>
    </footer>
  );
}