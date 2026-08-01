'use client';
import { useState } from "react";
import Link from "next/link";

function CalendarIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0 mt-[2px]">
      <rect x="1" y="2" width="12" height="11" rx="1.5" stroke="#a3a3a3" strokeWidth="1.2"/>
      <path d="M1 5.5h12" stroke="#a3a3a3" strokeWidth="1.2"/>
      <path d="M4.5 1v2M9.5 1v2" stroke="#a3a3a3" strokeWidth="1.2" strokeLinecap="round"/>
    </svg>
  );
}

function CodeBlock({ filename, code }: { filename: string; code: string }) {
  return (
    <div className="mb-12 px-6 md:px-14 lg:px-20">
      <div className="overflow-hidden rounded-lg border border-[#222]">
        <div className="flex items-center gap-3 border-b border-[#222] bg-[#141414] px-5 py-3">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-[#EF7F1A]">
            <path d="M13 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V9z" fill="currentColor" opacity=".2"/>
            <path d="M13 2v7h7M13 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V9L13 2z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className="font-mono text-[13px] text-[#a3a3a3]">{filename}</span>
        </div>
        <pre className="overflow-x-auto bg-[#0d0d0d] p-6 text-[13px] leading-[1.75] text-[#e2e8f0]">
          <code>{code}</code>
        </pre>
      </div>
    </div>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <p className="font-inter text-[1.75rem] font-light text-white tracking-tight md:text-[2.25rem]">{value}</p>
      <p className="font-helvetica mt-1 text-[13px] leading-snug text-[#a3a3a3]">{label}</p>
    </div>
  );
}

function ImageLightbox({
  src,
  alt,
  caption,
}: {
  src: string;
  alt: string;
  caption: string;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <figure className="group cursor-pointer flex flex-col h-full" onClick={() => setIsOpen(true)}>
        <div className="relative flex-1 overflow-hidden rounded-xl border border-[#262626] bg-[#141414] p-2 sm:p-3 flex items-center justify-center transition-all duration-300 group-hover:border-[#EF7F1A]/60 group-hover:shadow-lg group-hover:shadow-[#EF7F1A]/10">
          <img
            src={src}
            alt={alt}
            className="w-full h-auto rounded-lg object-contain transition-transform duration-300 group-hover:scale-[1.01]"
            style={{ imageRendering: '-webkit-optimize-contrast' }}
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
            <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-black/85 text-white text-[12px] font-medium px-3.5 py-1.5 rounded-full border border-white/20 backdrop-blur-sm">
              🔍 Click to view Fullscreen
            </span>
          </div>
        </div>
        <figcaption className="mt-3.5 font-helvetica text-[14px] leading-relaxed text-[#d4d4d4] group-hover:text-white transition-colors">
          {caption}
        </figcaption>
      </figure>

      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/94 backdrop-blur-md p-4 animate-fadeIn"
          onClick={() => setIsOpen(false)}
        >
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-5 right-6 text-white/80 hover:text-white text-3xl font-light p-2 transition-colors z-50"
            aria-label="Close fullscreen view"
          >
            ✕
          </button>
          <div
            className="relative max-w-[94vw] max-h-[88vh] flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={src}
              alt={alt}
              className="max-h-[80vh] max-w-[92vw] object-contain rounded-lg shadow-2xl border border-white/10"
            />
            <p className="font-helvetica text-[14px] leading-relaxed text-[#ececec] mt-4 text-center max-w-2xl font-normal">
              {caption}
            </p>
          </div>
        </div>
      )}
    </>
  );
}

export default function BellaHomesEngineeringProject() {
  return (
    <div className="min-h-screen text-[#ededed]">

      {/* ── Back link ── */}
      <div className="px-6 py-4 pb-0 md:px-6 lg:px-8">
        <Link
          href="/"
          className="font-helvetica flex items-center gap-1.5 text-[13px] text-[#eeeeee] transition-colors hover:text-[#a8a8a8] w-fit"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M9 2L4 7l5 5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
          Back
        </Link>
      </div>

      {/* ── Top Full-Bleed Hero Strip ── */}
      <div className="mt-4 w-full overflow-hidden">
        <img src="/bellahomestrip.png" alt="Bella Homes Ltd overview" className="w-full h-auto" />
      </div>

      {/* ── Project Header ── */}
      <div className="px-6 pt-10 pb-0 md:px-14 lg:px-20">
        <h1 className="font-inter text-[1.75rem] font-light leading-snug tracking-tight text-white md:text-[2.25rem] lg:text-[2.75rem]">
          Bella Homes Ltd — Luxury Short-Let &amp; Property Portal
        </h1>
        <p className="font-helvetica mt-3 text-[16px] text-[#cccccc] font-normal leading-relaxed">
          Luxury short-let &amp; property investment portal engineered for executive hospitality
        </p>

        <div className="mt-6 flex flex-col gap-6 sm:flex-row sm:gap-14 flex-wrap">
          <div className="flex items-start gap-2">
            <CalendarIcon />
            <div>
              <p className="font-helvetica text-[11px] font-semibold uppercase tracking-widest text-[#a3a3a3]">Timeline</p>
              <p className="font-helvetica mt-1 text-[14px] leading-snug text-[#e2e2e2]">2026 · Full-Stack Web App</p>
            </div>
          </div>

          <div className="flex items-start gap-2">
            <CalendarIcon />
            <div>
              <p className="font-helvetica text-[11px] font-semibold uppercase tracking-widest text-[#a3a3a3]">Role</p>
              <p className="font-helvetica mt-1 text-[14px] leading-snug text-[#e2e2e2]">Lead Product Designer &amp; Frontend Engineer</p>
            </div>
          </div>

          <div className="flex items-start gap-2">
            <CalendarIcon />
            <div>
              <p className="font-helvetica text-[11px] font-semibold uppercase tracking-widest text-[#a3a3a3]">Live at</p>
              <a
                href="https://bellahomes.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-helvetica mt-1 block text-[14px] leading-snug text-[#e2e2e2] underline underline-offset-2 hover:text-[#EF7F1A] transition-colors"
              >
                bellahomes.vercel.app
              </a>
            </div>
          </div>
        </div>

        <hr className="mt-8 border-[#262626]" />
      </div>

      {/* ── Executive Summary & Overview ── */}
      <div className="px-6 py-12 md:px-14 lg:px-20">
        <div className="space-y-5 font-helvetica text-[16px] leading-[1.8] text-[#dedede]">
          <p>
            Bella Homes Ltd is a premier real estate development and luxury hospitality enterprise operating across Lagos and Benin City, Nigeria. The company specializes in executive short-let suites, luxury duplexes, and high-yield property investment prospectus opportunities tailored for business executives, returning diaspora travelers, and discerning vacationers.
          </p>
          <p>
            <strong className="text-white font-medium">The Business Challenge:</strong> Legacy short-let booking platforms suffer from rigid reservation forms, slow mobile page loads, unoptimized checkout friction, and lack of real-time multi-currency support (NGN ₦, USD $, GBP £). I was brought on as Lead Product Designer &amp; Frontend Engineer to architect a modern, hotel-grade digital booking platform delivering sub-second page performance, intuitive touch search, direct WhatsApp concierge integration, and an isolated owner administration portal.
          </p>
        </div>

        {/* Key Metrics Grid */}
        <div className="mt-12 grid grid-cols-2 gap-8 border-t border-b border-[#262626] py-8 sm:grid-cols-4">
          <Stat value="< 500ms" label="Initial Page Load Speed" />
          <Stat value="100/100" label="Lighthouse Performance Score" />
          <Stat value="3" label="Multi-Currency Engine (₦, $, £)" />
          <Stat value="$0/mo" label="Static Edge Infrastructure Cost" />
        </div>
      </div>

      <hr className="mx-6 mb-16 border-[#262626] md:mx-14 lg:mx-20" />

      {/* ── DESIGN SYSTEM & VISUAL TOKEN ARCHITECTURE ── */}
      <div className="px-6 pb-16 md:px-14 lg:px-20">
        <h2 className="font-inter text-[1.35rem] font-light text-white mb-4 tracking-tight md:text-[1.6rem]">
          Bella Homes Design System
        </h2>

        {/* System Alert Note Callout */}
        <div className="mb-10 rounded-xl border border-[#EF7F1A]/40 bg-[#161616] p-5 shadow-sm">
          <div className="flex items-start gap-3">
            <span className="shrink-0 text-[#EF7F1A] text-base mt-0.5">ℹ️</span>
            <div className="font-helvetica text-[14px] leading-relaxed text-[#e0e0e0]">
              <strong className="text-white font-medium">Design System Overview:</strong> This design system outlines the visual language, typography, and core components used across the Bella Homes premium real estate and concierge platform. It serves as a unified reference for development and design consistency.
            </div>
          </div>
        </div>

        {/* Brand Colors Grid */}
        <div className="mb-12">
          <h3 className="font-inter text-[1.1rem] font-medium text-white mb-6 tracking-tight">
            🎨 Brand Color Tokens
          </h3>

          {/* Primary Palette */}
          <div className="mb-6">
            <p className="font-helvetica text-[11px] font-semibold uppercase tracking-widest text-[#a3a3a3] mb-3">Primary Palette</p>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              {[
                { name: "Pure White", hex: "#FFFFFF", bg: "#FFFFFF", text: "#111111", border: "#e5e5e5", usage: "Main background for cards, modals, and input fields." },
                { name: "Off-White", hex: "#F4F5F7", bg: "#F4F5F7", text: "#111111", border: "#e0e0e0", usage: "Global application background. Reduces eye strain." },
                { name: "Obsidian", hex: "#111111", bg: "#111111", text: "#FFFFFF", border: "#333333", usage: "Primary text color, top navigation bars, and footer." },
              ].map((c) => (
                <div key={c.name} className="rounded-xl border border-[#262626] bg-[#141414] p-4 flex flex-col justify-between">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg shrink-0 border" style={{ backgroundColor: c.bg, borderColor: c.border }} />
                    <div>
                      <p className="font-semibold text-sm text-white">{c.name}</p>
                      <p className="font-mono text-xs text-[#a3a3a3]">{c.hex}</p>
                    </div>
                  </div>
                  <p className="font-helvetica text-[13px] text-[#cccccc] leading-normal">{c.usage}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Accents & Highlights */}
          <div>
            <p className="font-helvetica text-[11px] font-semibold uppercase tracking-widest text-[#a3a3a3] mb-3">Accents &amp; Highlights</p>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              {[
                { name: "Sunset Orange", hex: "#EF7F1A", bg: "#EF7F1A", text: "#FFFFFF", border: "#EF7F1A", usage: "Primary calls-to-action, active navigation links, and price highlights." },
                { name: "Heritage Green", hex: "#5A6B47", bg: "#5A6B47", text: "#FFFFFF", border: "#5A6B47", usage: "Dedicated specifically to the Admin Management Portal to distinguish internal tools." },
                { name: "Alert Red", hex: "#EF4444", bg: "#EF4444", text: "#FFFFFF", border: "#EF4444", usage: "Used sparingly for error states, destructive actions, and active wishlist icons." },
              ].map((c) => (
                <div key={c.name} className="rounded-xl border border-[#262626] bg-[#141414] p-4 flex flex-col justify-between">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg shrink-0 border" style={{ backgroundColor: c.bg, borderColor: c.border }} />
                    <div>
                      <p className="font-semibold text-sm text-white">{c.name}</p>
                      <p className="font-mono text-xs text-[#a3a3a3]">{c.hex}</p>
                    </div>
                  </div>
                  <p className="font-helvetica text-[13px] text-[#cccccc] leading-normal">{c.usage}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Typography System */}
        <div className="mb-12">
          <h3 className="font-inter text-[1.1rem] font-medium text-white mb-6 tracking-tight">
            🖋 Typography Architecture (Poppins)
          </h3>
          <div className="rounded-xl border border-[#262626] bg-[#141414] p-6 space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#262626] pb-5">
              <div>
                <p className="font-inter text-lg text-white font-medium">Font Family: Poppins, sans-serif</p>
                <p className="font-helvetica text-xs text-[#a3a3a3] mt-1">Served via Google Fonts · Clean, geometric, architectural aesthetic</p>
              </div>
              <span className="font-mono text-xs bg-[#222] text-[#EF7F1A] px-3 py-1 rounded-full border border-[#333]">
                `Poppins`, sans-serif
              </span>
            </div>

            {/* Weights */}
            <div>
              <p className="font-helvetica text-[11px] font-semibold uppercase tracking-widest text-[#a3a3a3] mb-3">Weight Hierarchy</p>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-5">
                {[
                  { weight: "300", label: "Light", sample: "Architectural Titles" },
                  { weight: "400", label: "Regular", sample: "Standard Body Text" },
                  { weight: "500", label: "Medium", sample: "Navigation Links" },
                  { weight: "600", label: "Semi-Bold", sample: "Section Headers" },
                  { weight: "700", label: "Bold", sample: "Primary CTAs & Rates" },
                ].map(({ weight, label, sample }) => (
                  <div key={weight} className="rounded-lg border border-[#262626] bg-[#0d0d0d] p-3 text-center">
                    <span className="font-mono text-xs text-[#EF7F1A]">{weight}</span>
                    <p className="font-semibold text-xs text-white mt-1">{label}</p>
                    <p className="font-helvetica text-[11px] text-[#a3a3a3] mt-0.5 truncate">{sample}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Sizing Scale */}
            <div>
              <p className="font-helvetica text-[11px] font-semibold uppercase tracking-widest text-[#a3a3a3] mb-3">Sizing Scale (Tailwind Tokens)</p>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                <div className="rounded-lg border border-[#262626] bg-[#0d0d0d] p-4">
                  <span className="font-mono text-xs text-[#a3a3a3]">Small / Micro</span>
                  <p className="font-mono text-xs text-[#EF7F1A] mt-1">text-[10px] — text-xs</p>
                  <p className="font-helvetica text-xs text-[#cccccc] mt-2">Labels, tracking tags, uppercase meta info</p>
                </div>
                <div className="rounded-lg border border-[#262626] bg-[#0d0d0d] p-4">
                  <span className="font-mono text-xs text-[#a3a3a3]">Body Reading</span>
                  <p className="font-mono text-xs text-[#EF7F1A] mt-1">text-sm — text-base</p>
                  <p className="font-helvetica text-xs text-[#cccccc] mt-2">Standard reading content and descriptions</p>
                </div>
                <div className="rounded-lg border border-[#262626] bg-[#0d0d0d] p-4">
                  <span className="font-mono text-xs text-[#a3a3a3]">Headings</span>
                  <p className="font-mono text-xs text-[#EF7F1A] mt-1">text-2xl — text-4xl</p>
                  <p className="font-helvetica text-xs text-[#cccccc] mt-2">Page titles, hero sections &amp; key features</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* UI Components & Styling */}
        <div className="mb-12">
          <h3 className="font-inter text-[1.1rem] font-medium text-white mb-6 tracking-tight">
            📐 UI Components &amp; Styling Tokens
          </h3>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            
            {/* 1. Glassmorphism */}
            <div className="rounded-xl border border-[#262626] bg-[#141414] p-5">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-base">✨</span>
                <h4 className="font-semibold text-sm text-white">1. Glassmorphism &amp; Overlays</h4>
              </div>
              <p className="font-helvetica text-[13px] leading-relaxed text-[#cccccc] mb-3">
                Floating panels utilize frosted glass overlays over high-resolution property photos:
              </p>
              <ul className="space-y-1.5 font-mono text-[12px] text-[#e2e2e2]">
                <li className="flex items-center gap-2"><span className="text-[#EF7F1A]">•</span> Backdrops: <code className="bg-[#222] px-1.5 py-0.5 rounded text-[11px]">bg-white/95 backdrop-blur-md</code></li>
                <li className="flex items-center gap-2"><span className="text-[#EF7F1A]">•</span> Dark Overlays: <code className="bg-[#222] px-1.5 py-0.5 rounded text-[11px]">bg-black/60 backdrop-blur-[2px]</code></li>
              </ul>
            </div>

            {/* 2. Border Radii */}
            <div className="rounded-xl border border-[#262626] bg-[#141414] p-5">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-base">🔳</span>
                <h4 className="font-semibold text-sm text-white">2. Border Radii (Corner Language)</h4>
              </div>
              <p className="font-helvetica text-[13px] leading-relaxed text-[#cccccc] mb-3">
                A mix of pill-shaped elements and soft-rounded containers defines the modern shape language:
              </p>
              <ul className="space-y-1.5 font-mono text-[12px] text-[#e2e2e2]">
                <li className="flex items-center gap-2"><span className="text-[#EF7F1A]">•</span> Buttons &amp; Pills: <code className="bg-[#222] px-1.5 py-0.5 rounded text-[11px]">rounded-full</code></li>
                <li className="flex items-center gap-2"><span className="text-[#EF7F1A]">•</span> Cards &amp; Modals: <code className="bg-[#222] px-1.5 py-0.5 rounded text-[11px]">rounded-2xl / rounded-[2.5rem]</code></li>
                <li className="flex items-center gap-2"><span className="text-[#EF7F1A]">•</span> Photos Frame: <code className="bg-[#222] px-1.5 py-0.5 rounded text-[11px]">rounded-xl</code></li>
              </ul>
            </div>

            {/* 3. Shadows & Elevation */}
            <div className="rounded-xl border border-[#262626] bg-[#141414] p-5">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-base">☀️</span>
                <h4 className="font-semibold text-sm text-white">3. Shadows &amp; Elevation</h4>
              </div>
              <p className="font-helvetica text-[13px] leading-relaxed text-[#cccccc] mb-3">
                Soft, dispersed, color-tinted shadows to prevent harsh black drops:
              </p>
              <ul className="space-y-1.5 font-mono text-[12px] text-[#e2e2e2]">
                <li className="flex items-center gap-2"><span className="text-[#EF7F1A]">•</span> Cards: <code className="bg-[#222] px-1.5 py-0.5 rounded text-[11px]">shadow-sm</code></li>
                <li className="flex items-center gap-2"><span className="text-[#EF7F1A]">•</span> CTA Glow: <code className="bg-[#222] px-1.5 py-0.5 rounded text-[11px]">shadow-xl shadow-[#EF7F1A]/20</code></li>
                <li className="flex items-center gap-2"><span className="text-[#EF7F1A]">•</span> Overlays: <code className="bg-[#222] px-1.5 py-0.5 rounded text-[11px]">shadow-2xl</code></li>
              </ul>
            </div>

            {/* 4. Interactive Micro-animations */}
            <div className="rounded-xl border border-[#262626] bg-[#141414] p-5">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-base">⚡</span>
                <h4 className="font-semibold text-sm text-white">4. Micro-animations &amp; Feel</h4>
              </div>
              <p className="font-helvetica text-[13px] leading-relaxed text-[#cccccc] mb-3">
                Interactive elements feel responsive, smooth, and alive on touch:
              </p>
              <ul className="space-y-1.5 font-mono text-[12px] text-[#e2e2e2]">
                <li className="flex items-center gap-2"><span className="text-[#EF7F1A]">•</span> CTAs: <code className="bg-[#222] px-1.5 py-0.5 rounded text-[11px]">transition-all duration-300</code></li>
                <li className="flex items-center gap-2"><span className="text-[#EF7F1A]">•</span> Photos: <code className="bg-[#222] px-1.5 py-0.5 rounded text-[11px]">group-hover:scale-105</code></li>
                <li className="flex items-center gap-2"><span className="text-[#EF7F1A]">•</span> Drawers: <code className="bg-[#222] px-1.5 py-0.5 rounded text-[11px]">type: "spring", damping: 25</code></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Accessibility & Localization */}
        <div className="mb-12">
          <h3 className="font-inter text-[1.1rem] font-medium text-white mb-6 tracking-tight">
            📱 Accessibility &amp; Multi-Currency Engine
          </h3>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-[#262626] bg-[#141414] p-5">
              <span className="font-mono text-xs text-[#EF7F1A]">Dynamic Text Scaling</span>
              <p className="font-semibold text-sm text-white mt-1">Font Size Accessibility (A / A+ / A++)</p>
              <p className="font-helvetica text-xs text-[#cccccc] mt-2 leading-relaxed">
                Integrated accessibility controls allowing guests to dynamically scale root font sizes from <code className="text-[#ededed] bg-[#222] px-1 rounded">100%</code> up to <code className="text-[#ededed] bg-[#222] px-1 rounded">125%</code> for enhanced legibility.
              </p>
            </div>
            <div className="rounded-xl border border-[#262626] bg-[#141414] p-5">
              <span className="font-mono text-xs text-[#EF7F1A]">Currency Switcher</span>
              <p className="font-semibold text-sm text-white mt-1">Multi-Currency State (NGN ₦, USD $, GBP £)</p>
              <p className="font-helvetica text-xs text-[#cccccc] mt-2 leading-relaxed">
                Instant currency switching tailored for international guests and diaspora investors with live mathematical rate recalculations.
              </p>
            </div>
          </div>
        </div>

        {/* System Visual Architecture Flowchart */}
        <div>
          <h3 className="font-inter text-[1.1rem] font-medium text-white mb-6 tracking-tight">
            📊 System Component Architecture
          </h3>
          <div className="overflow-hidden rounded-xl border border-[#262626] bg-[#0d0d0d] p-6 md:p-10">
            <div className="flex w-full items-center justify-center">
              <svg viewBox="0 0 800 320" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-2xl h-auto">
                {/* Central Root Node */}
                <rect x="250" y="20" width="300" height="48" rx="24" fill="#141414" stroke="#EF7F1A" strokeWidth="1.5"/>
                <text x="400" y="49" fill="#FFFFFF" fontSize="14" fontFamily="Poppins" fontWeight="600" textAnchor="middle">Bella Homes Design System</text>

                {/* Connecting Lines from Root */}
                <path d="M400 68V110" stroke="#EF7F1A" strokeWidth="1.5" strokeDasharray="4 4"/>
                <path d="M160 110H640" stroke="#333333" strokeWidth="1.5"/>
                <path d="M160 110V140M400 110V140M640 110V140" stroke="#333333" strokeWidth="1.5"/>

                {/* Branch 1: Typography */}
                <rect x="60" y="140" width="200" height="42" rx="10" fill="#161616" stroke="#333333" strokeWidth="1.5"/>
                <text x="160" y="166" fill="#FFFFFF" fontSize="13" fontFamily="Poppins" fontWeight="500" textAnchor="middle">Typography: Poppins</text>

                {/* Branch 2: Colors */}
                <rect x="300" y="140" width="200" height="42" rx="10" fill="#161616" stroke="#333333" strokeWidth="1.5"/>
                <text x="400" y="166" fill="#FFFFFF" fontSize="13" fontFamily="Poppins" fontWeight="500" textAnchor="middle">Color Palette</text>

                {/* Branch 3: UI Components */}
                <rect x="540" y="140" width="200" height="42" rx="10" fill="#161616" stroke="#333333" strokeWidth="1.5"/>
                <text x="640" y="166" fill="#FFFFFF" fontSize="13" fontFamily="Poppins" fontWeight="500" textAnchor="middle">UI Components</text>

                {/* Color Sub-nodes */}
                <path d="M400 182V220" stroke="#333333" strokeWidth="1.5"/>
                <path d="M260 220H540" stroke="#333333" strokeWidth="1.5"/>
                <path d="M260 220V245M400 220V245M540 220V245" stroke="#333333" strokeWidth="1.5"/>

                {/* Color Chips */}
                <rect x="180" y="245" width="160" height="36" rx="18" fill="#111111" stroke="#444444" strokeWidth="1"/>
                <text x="260" y="268" fill="#FFFFFF" fontSize="11" fontFamily="Poppins" textAnchor="middle">#111111 Obsidian</text>

                <rect x="355" y="245" width="160" height="36" rx="18" fill="#EF7F1A" />
                <text x="435" y="268" fill="#FFFFFF" fontSize="11" fontFamily="Poppins" fontWeight="600" textAnchor="middle">#EF7F1A Sunset Orange</text>

                <rect x="530" y="245" width="160" height="36" rx="18" fill="#5A6B47" />
                <text x="610" y="268" fill="#FFFFFF" fontSize="11" fontFamily="Poppins" fontWeight="600" textAnchor="middle">#5A6B47 Admin Green</text>

                {/* Component Sub-nodes */}
                <path d="M640 182V210" stroke="#333333" strokeWidth="1"/>
                <circle cx="640" cy="210" r="3" fill="#EF7F1A"/>
              </svg>
            </div>
            <p className="font-helvetica text-[12px] text-[#a3a3a3] text-center mt-4">
              Bella Homes System Architecture &amp; Token Mapping Flowchart
            </p>
          </div>
        </div>

      </div>

      <hr className="mx-6 mb-16 border-[#262626] md:mx-14 lg:mx-20" />

      {/* ── ACT I: Architecture & Modern Stack ── */}
      <div className="px-6 pb-6 md:px-14 lg:px-20">
        <h2 className="font-inter text-[1.2rem] font-light text-white mb-6 tracking-tight">
          Act I: Architecture — React 19, Vite &amp; TanStack Routing
        </h2>
        <div className="space-y-5 font-helvetica text-[16px] leading-[1.8] text-[#dedede]">
          <p>
            To achieve instantaneous page transitions and hotel-grade responsiveness, I built the application on React 19 and TypeScript, powered by Vite for sub-second HMR compilation (~200ms dev startup) and tree-shaken production bundles.
          </p>
          <p>
            For routing, I implemented TanStack Router &amp; Start for strict, 100% type-safe file-based routing. This eliminated runtime URL typo errors and allowed prefetching suite data before route navigation completed.
          </p>
          <p>
            <strong className="text-white font-medium">Solving Vercel SPA Routing &amp; 404s:</strong> Deploying client-side SPA routing with TanStack Start onto Vercel static edge hosting introduced sub-route 404 errors when refreshing routes like <code className="text-[#ededed] bg-[#222] px-1.5 py-0.5 rounded text-[13px]">/search</code> or <code className="text-[#ededed] bg-[#222] px-1.5 py-0.5 rounded text-[13px]">/admin</code>. I solved this by engineering a custom Node.js postbuild script (<code className="text-[#ededed] bg-[#222] px-1.5 py-0.5 rounded text-[13px]">scripts/postbuild.js</code>) integrated directly into the build pipeline.
          </p>
        </div>
      </div>

      {/* Code Block 1: Postbuild Script */}
      <CodeBlock
        filename="scripts/postbuild.js"
        code={`import fs from 'fs';
import path from 'path';

// Post-build generator to prevent static sub-route 404s on Vercel Edge
const distDir = path.resolve(process.cwd(), 'dist/client');
const indexHtmlPath = path.join(distDir, 'index.html');

if (!fs.existsSync(indexHtmlPath)) {
  const assets = fs.readdirSync(path.join(distDir, 'assets'));
  const jsFile = assets.find(f => f.endsWith('.js'));
  const cssFile = assets.find(f => f.endsWith('.css'));

  const htmlContent = \`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Bella Homes Ltd — Executive Short-Lets</title>
  \${cssFile ? \`<link rel="stylesheet" href="/assets/\${cssFile}">\` : ''}
</head>
<body class="bg-[#0b0b0b] text-[#ededed]">
  <div id="root"></div>
  \${jsFile ? \`<script type="module" src="/assets/\${jsFile}"></script>\` : ''}
</body>
</html>\`;

  fs.writeFileSync(indexHtmlPath, htmlContent);
  console.log('✅ Generated fallback dist/client/index.html for SPA routing');
}`}
      />

      {/* ── ACT II: Real-Time Search & Multi-Currency Engine ── */}
      <div className="px-6 pb-6 md:px-14 lg:px-20">
        <h2 className="font-inter text-[1.2rem] font-light text-white mb-6 tracking-tight">
          Act II: Smart Search Engine &amp; Multi-Currency System
        </h2>
        <div className="space-y-5 font-helvetica text-[16px] leading-[1.8] text-[#dedede]">
          <p>
            Guest conversion drops drastically when international travelers cannot view pricing in their local currency or face complex search inputs.
          </p>
          <p>
            <strong className="text-white font-medium">Smart Search Pill (CustomSearchPill):</strong> Engineered a composite search bar featuring a custom date popover with quick shortcuts (<em className="text-white">Today, Tomorrow, This Weekend</em>), guest occupancy selector (1 to 4+ guests), and instant live keyword filtering across locations (e.g. GRA, Benin City), property types (Executive Duplex, Suite), and signature luxury amenities.
          </p>
          <p>
            <strong className="text-white font-medium">Multi-Currency Engine:</strong> Developed a React Context state (<code className="text-[#ededed] bg-[#222] px-1.5 py-0.5 rounded text-[13px]">CurrencyContext</code>) providing instantaneous switching between ₦ NGN, $ USD, and £ GBP. All suite price badges, deposit calculations, and total reservation quotes re-render instantaneously without page reloads.
          </p>
        </div>
      </div>

      {/* Code Block 2: CurrencyContext */}
      <CodeBlock
        filename="src/context/CurrencyContext.tsx"
        code={`export type Currency = 'NGN' | 'USD' | 'GBP';

const RATES: Record<Currency, { symbol: string; rate: number }> = {
  NGN: { symbol: '₦', rate: 1 },
  USD: { symbol: '$', rate: 0.00067 },
  GBP: { symbol: '£', rate: 0.00052 },
};

export const CurrencyProvider = ({ children }: { children: React.ReactNode }) => {
  const [currency, setCurrency] = useState<Currency>('NGN');

  const formatPrice = (amountInNaira: number): string => {
    const { symbol, rate } = RATES[currency];
    const converted = amountInNaira * rate;
    return \`\${symbol}\${Math.round(converted).toLocaleString()}\`;
  };

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency, formatPrice }}>
      {children}
    </CurrencyContext.Provider>
  );
};`}
      />

      {/* ── Section Figure 1 & 1B: Side-by-Side Search Workflow ── */}
      <div className="mb-16 px-6 md:px-14 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ImageLightbox
            src="/bellahomessearch.png"
            alt="Bella Homes Interactive Search Bar"
            caption="Interactive search engine showing live date popovers (Today, Tomorrow, Weekend shortcuts), guest occupancy counters, and real-time multi-currency selection header controls."
          />
          <ImageLightbox
            src="/bellahomesresults.png"
            alt="Bella Homes Available Residences Search Results"
            caption="Available Residences search results view displaying active search parameters (e.g., Benin City · 2 Guests), property type checkboxes (Duplex, Suites), price sliders, signature amenities, and residence cards."
          />
        </div>
      </div>

      {/* ── ACT III: Mobile-First UX & Direct WhatsApp Concierge ── */}
      <div className="px-6 pb-6 md:px-14 lg:px-20">
        <h2 className="font-inter text-[1.2rem] font-light text-white mb-6 tracking-tight">
          Act III: Mobile-First UX &amp; WhatsApp Concierge Booking Flow
        </h2>
        <div className="space-y-5 font-helvetica text-[16px] leading-[1.8] text-[#dedede]">
          <p>
            Over 75% of short-let inquiries in Nigeria originate on mobile devices. I implemented touch-manipulation CSS and minimum 54px tap target boundaries across mobile components to completely eliminate 300ms touch delay on iOS Safari and Android Chrome.
          </p>
          <p>
            <strong className="text-white font-medium">Direct WhatsApp Concierge Generator:</strong> Rather than forcing guests through lengthy registration forms, reservations seamlessly compile selected check-in/out dates, guest counts, and suite details into a pre-formatted, encoded WhatsApp payload dispatched directly to the executive concierge team.
          </p>
        </div>
      </div>

      {/* Code Block 3: WhatsApp Concierge Generator */}
      <CodeBlock
        filename="src/utils/whatsapp.ts"
        code={`export const generateConciergeBookingLink = ({
  suiteName,
  checkIn,
  checkOut,
  guests,
  formattedPrice,
}: BookingPayload) => {
  const phoneNumber = "2348000000000"; // Executive Concierge Line
  const message = \`Hello Bella Homes Concierge,

I would like to reserve *\${suiteName}*.

📅 Check-in: \${checkIn}
📅 Check-out: \${checkOut}
👥 Guests: \${guests}
💰 Rate Quote: \${formattedPrice}

Please confirm availability and booking procedure.\`;

  return \`https://wa.me/\${phoneNumber}?text=\${encodeURIComponent(message)}\`;
};`}
      />

      {/* ── ACT IV: Isolated Owner Portal ── */}
      <div className="px-6 pb-6 md:px-14 lg:px-20">
        <h2 className="font-inter text-[1.2rem] font-light text-white mb-6 tracking-tight">
          Act IV: Isolated Owner Administration Portal (/admin)
        </h2>
        <div className="space-y-5 font-helvetica text-[16px] leading-[1.8] text-[#dedede]">
          <p>
            To empower property managers without cluttering guest-facing layouts, I engineered an isolated administration portal (<code className="text-[#ededed] bg-[#222] px-1.5 py-0.5 rounded text-[13px]">/admin</code>) that strips away public headers and footers.
          </p>
          <p>
            The admin portal features responsive tabbed management across 6 core operational modules: <em className="text-white">Overview Stats, Web Bookings, Suites &amp; Rates, Guest Reviews, Prospectus Leads, and Newsletter Subscribers</em>.
          </p>
        </div>
      </div>

      {/* Code Block 4: Suite Manager */}
      <CodeBlock
        filename="src/app/admin/SuitesManager.tsx"
        code={`export const SuitesManager = ({ suites, onUpdateSuite }: SuitesManagerProps) => {
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
      {suites.map((suite) => (
        <div key={suite.id} className="rounded-xl border border-[#222] bg-[#141414] p-5">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-semibold text-white">{suite.title}</h3>
            <span className={\`px-2 py-0.5 rounded text-[11px] font-mono \${
              suite.status === 'Available' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' :
              suite.status === 'Booked' ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20' :
              'bg-rose-500/10 text-rose-400 border border-rose-500/20'
            }\`}>
              {suite.status}
            </span>
          </div>

          <p className="text-xs text-[#888] mb-4">{suite.location} · {suite.category}</p>

          <button
            onClick={() => onUpdateSuite(suite)}
            className="w-full rounded-lg bg-[#222] py-2 text-xs font-medium text-white hover:bg-[#2a2a2a] transition-colors"
          >
            Edit Suite &amp; Rates
          </button>
        </div>
      ))}
    </div>
  );
};`}
      />

      {/* ── Section Figure 2: Isolated Owner Administration Portal ── */}
      <div className="mb-16 px-6 md:px-14 lg:px-20 max-w-[1024px] mx-auto">
        <ImageLightbox
          src="/bellahomesadmin.png"
          alt="Bella Homes Isolated Owner Administration Portal (/admin)"
          caption="Isolated Owner Administration Portal (/admin) featuring Management Overview metrics (Total Revenue ₦450,000, Active Reservations 2, Managed Residences 7, Guest Feedback 14 Reviews) and live Web Bookings table."
        />
      </div>

      {/* ── Footer ── */}
      <div className="px-6 pb-20 md:px-14 lg:px-20">
        <hr className="mb-10 border-[#262626]" />
        <p className="font-helvetica text-[15px] text-[#a3a3a3]">Thanks for reading.</p>
        <p className="font-helvetica mt-2 text-[15px] text-[#a3a3a3]">
          Questions about this project?{" "}
          <Link href="/" className="text-[#e2e2e2] underline underline-offset-2 hover:text-[#EF7F1A] transition-colors">
            Back to home
          </Link>
        </p>
      </div>

    </div>
  );
}
