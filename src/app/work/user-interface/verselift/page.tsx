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
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-[#3b82f6]">
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
  placeholderTitle,
}: {
  src?: string;
  alt: string;
  caption: string;
  placeholderTitle?: string;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <figure className="group cursor-pointer flex flex-col h-full" onClick={() => setIsOpen(true)}>
        <div className="relative flex-1 overflow-hidden rounded-xl border border-[#262626] bg-[#141414] p-2 sm:p-3 flex items-center justify-center transition-all duration-300 group-hover:border-[#3b82f6]/60 group-hover:shadow-lg group-hover:shadow-[#3b82f6]/10 min-h-[220px]">
          {src ? (
            <img
              src={src}
              alt={alt}
              className="w-full h-auto rounded-lg object-contain transition-transform duration-300 group-hover:scale-[1.01]"
              style={{ imageRendering: '-webkit-optimize-contrast' }}
            />
          ) : (
            <div className="flex w-full aspect-[16/10] items-center justify-center border border-dashed border-[#2e2e2e] bg-[#0d0d0d] rounded-lg p-6">
              <div className="text-center">
                <p className="font-mono text-xs text-[#3b82f6] mb-1">🖼 Image Placeholder</p>
                <p className="font-helvetica text-[14px] text-[#e2e2e2] font-medium">{placeholderTitle || alt}</p>
              </div>
            </div>
          )}
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
            {src ? (
              <img
                src={src}
                alt={alt}
                className="max-h-[80vh] max-w-[92vw] object-contain rounded-lg shadow-2xl border border-white/10"
              />
            ) : (
              <div className="flex w-[80vw] max-w-3xl aspect-[16/9] items-center justify-center border border-dashed border-[#3b82f6]/40 bg-[#0d0d0d] rounded-xl p-8">
                <div className="text-center">
                  <p className="font-mono text-sm text-[#3b82f6] mb-2">🖼 High-Res Screenshot Asset Placeholder</p>
                  <p className="font-inter text-xl text-white font-medium">{placeholderTitle || alt}</p>
                </div>
              </div>
            )}
            <p className="font-helvetica text-[14px] leading-relaxed text-[#ececec] mt-4 text-center max-w-2xl font-normal">
              {caption}
            </p>
          </div>
        </div>
      )}
    </>
  );
}

export default function VerseliftProject() {
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
        <img src="/verseliftstrip.png" alt="Verselift AI overview" className="w-full h-auto" />
      </div>

      {/* ── Project Header ── */}
      <div className="px-6 pt-10 pb-0 md:px-14 lg:px-20">
        <h1 className="font-inter text-[1.75rem] font-light leading-snug tracking-tight text-white md:text-[2.25rem] lg:text-[2.75rem]">
          Verselift — AI SaaS Platform
        </h1>
        <p className="font-helvetica mt-3 text-[16px] text-[#cccccc] font-normal leading-relaxed">
          Scalable AI SaaS platform engineered for operational efficiency &amp; subscription revenue growth
        </p>

        <div className="mt-6 flex flex-col gap-6 sm:flex-row sm:gap-14 flex-wrap">
          <div className="flex items-start gap-2">
            <CalendarIcon />
            <div>
              <p className="font-helvetica text-[11px] font-semibold uppercase tracking-widest text-[#a3a3a3]">Timeline</p>
              <p className="font-helvetica mt-1 text-[14px] leading-snug text-[#e2e2e2]">2026 · Full-Stack SaaS</p>
            </div>
          </div>

          <div className="flex items-start gap-2">
            <CalendarIcon />
            <div>
              <p className="font-helvetica text-[11px] font-semibold uppercase tracking-widest text-[#a3a3a3]">Role</p>
              <p className="font-helvetica mt-1 text-[14px] leading-snug text-[#e2e2e2]">Lead Full-Stack Engineer &amp; Designer</p>
            </div>
          </div>

          <div className="flex items-start gap-2">
            <CalendarIcon />
            <div>
              <p className="font-helvetica text-[11px] font-semibold uppercase tracking-widest text-[#a3a3a3]">Live at</p>
              <a
                href="https://verseliftai.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-helvetica mt-1 block text-[14px] leading-snug text-[#e2e2e2] underline underline-offset-2 hover:text-[#3b82f6] transition-colors"
              >
                verseliftai.vercel.app
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
            Verselift is a cutting-edge AI SaaS platform designed to automate and scale operations for modern businesses. The product transforms complex generative AI capabilities into an intuitive, self-serve interface capable of handling thousands of daily prompt executions.
          </p>
          <p>
            <strong className="text-white font-medium">The Engineering Challenge:</strong> Building a production-grade AI application requires more than just API wrappers. We needed a robust, highly-scalable backend architecture capable of securely managing user authentication, real-time database syncing, tier-based subscription billing, and complex AI response streaming—all while maintaining a sub-second, frictionless user experience.
          </p>
        </div>

        {/* Key Metrics Grid */}
        <div className="mt-12 grid grid-cols-2 gap-8 border-t border-b border-[#262626] py-8 sm:grid-cols-4">
          <Stat value="Next.js 15" label="Modern React App Router" />
          <Stat value="Supabase" label="PostgreSQL &amp; Auth Edge" />
          <Stat value="Stripe" label="Subscription Billing Engine" />
          <Stat value="Radix UI" label="Accessible Component System" />
        </div>
      </div>

      <hr className="mx-6 mb-16 border-[#262626] md:mx-14 lg:mx-20" />

      {/* ── Interactive Prototype ── */}
      <div className="px-6 pb-6 md:px-14 lg:px-20">
        <h2 className="font-inter text-[1.35rem] font-light text-white mb-4 tracking-tight md:text-[1.6rem]">
          Interactive Prototype
        </h2>
        <p className="font-helvetica text-[14px] leading-relaxed text-[#a3a3a3] mb-8">
          Explore the fully functional prototype of the Verselift AI SaaS platform below. Interact with the dashboard, view prompt workflows, and experience the application&apos;s clean, enterprise-ready dark mode design exactly as intended for production.
        </p>
        <div className="w-full overflow-hidden rounded-xl border border-[#3b82f6]/40 bg-[#0B0F17]">
          <iframe 
            width="100%" 
            height="750" 
            src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FBpudlEUitH0ijl4X6gVkmn%2FVerseLift%3Fpage-id%3D1%253A1667%26node-id%3D273-8368%26viewport%3D-743%252C600%252C0.12%26t%3DzFUg59id8vv3U7qh-1%26scaling%3Dscale-down-width%26content-scaling%3Dfixed%26starting-point-node-id%3D273%253A8287" 
            allowFullScreen
            style={{ border: 'none' }}
          ></iframe>
        </div>
      </div>
      
      <hr className="mx-6 mb-16 border-[#262626] md:mx-14 lg:mx-20" />

      {/* ── DESIGN SYSTEM & VISUAL TOKEN ARCHITECTURE ── */}
      <div className="px-6 pb-16 md:px-14 lg:px-20">
        <h2 className="font-inter text-[1.35rem] font-light text-white mb-4 tracking-tight md:text-[1.6rem]">
          Verselift AI Design System
        </h2>

        {/* System Alert Note Callout */}
        <div className="mb-10 rounded-xl border border-[#3b82f6]/40 bg-[#0B0F17] p-5 shadow-sm">
          <div className="flex items-start gap-3">
            <span className="shrink-0 text-[#3b82f6] text-base mt-0.5">ℹ️</span>
            <div className="font-helvetica text-[14px] leading-relaxed text-[#e0e0e0]">
              <strong className="text-white font-medium">Design System Overview:</strong> This design system outlines the visual language, color tokens, typography scale, and accessible UI components engineered for Verselift AI. It enforces design consistency and developer velocity across dark-mode enterprise interfaces.
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
            <p className="font-helvetica text-[11px] font-semibold uppercase tracking-widest text-[#a3a3a3] mb-3">Primary Dark Mode Canvas</p>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              {[
                { name: "Obsidian Core", hex: "#0B0F17", bg: "#0B0F17", text: "#FFFFFF", border: "#1f2937", usage: "Root dark mode application shell and canvas background." },
                { name: "Deep Slate", hex: "#111827", bg: "#111827", text: "#FFFFFF", border: "#374151", usage: "Elevated surfaces, prompt sidebars, cards, and modal drawers." },
                { name: "Pure White", hex: "#FFFFFF", bg: "#FFFFFF", text: "#0B0F17", border: "#e5e5e5", usage: "Primary text headings, crisp icon fills, and high-contrast badges." },
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
            <p className="font-helvetica text-[11px] font-semibold uppercase tracking-widest text-[#a3a3a3] mb-3">Light Mode Palette (Primary: Electric Blue · Secondary: Cyan Glow)</p>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              {[
                { name: "Electric Blue (Primary)", hex: "#3B82F6", bg: "#3B82F6", text: "#FFFFFF", border: "#3B82F6", usage: "Primary brand accent — CTAs, active tab highlights & AI processing triggers." },
                { name: "Cyan Glow (Secondary)", hex: "#06B6D4", bg: "#06B6D4", text: "#FFFFFF", border: "#06B6D4", usage: "Secondary brand accent — active prompt badges, highlights & analytics." },
                { name: "Alert Red", hex: "#EF4444", bg: "#EF4444", text: "#FFFFFF", border: "#EF4444", usage: "Validation errors, destructive account actions & warning notifications." },
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
            🖋 Typography Architecture (Inter &amp; Outfit)
          </h3>
          <div className="rounded-xl border border-[#262626] bg-[#141414] p-6 space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#262626] pb-5">
              <div>
                <p className="font-inter text-lg text-white font-medium">Font Family: Inter &amp; Outfit</p>
                <p className="font-helvetica text-xs text-[#a3a3a3] mt-1">Modern grotesque sans-serif for high-density SaaS dashboard data</p>
              </div>
              <span className="font-mono text-xs bg-[#222] text-[#3b82f6] px-3 py-1 rounded-full border border-[#333]">
                `Inter`, `Outfit`, sans-serif
              </span>
            </div>

            {/* Weights */}
            <div>
              <p className="font-helvetica text-[11px] font-semibold uppercase tracking-widest text-[#a3a3a3] mb-3">Weight Hierarchy</p>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-5">
                {[
                  { weight: "300", label: "Light", sample: "Executive Headings" },
                  { weight: "400", label: "Regular", sample: "Body Descriptions" },
                  { weight: "500", label: "Medium", sample: "Navigation & Tabs" },
                  { weight: "600", label: "Semi-Bold", sample: "Prompt Titles" },
                  { weight: "700", label: "Bold", sample: "Primary Buttons" },
                ].map(({ weight, label, sample }) => (
                  <div key={weight} className="rounded-lg border border-[#262626] bg-[#0d0d0d] p-3 text-center">
                    <span className="font-mono text-xs text-[#3b82f6]">{weight}</span>
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
                  <p className="font-mono text-xs text-[#3b82f6] mt-1">text-[11px] — text-xs</p>
                  <p className="font-helvetica text-xs text-[#cccccc] mt-2">API quota badges, timestamps, code parameters</p>
                </div>
                <div className="rounded-lg border border-[#262626] bg-[#0d0d0d] p-4">
                  <span className="font-mono text-xs text-[#a3a3a3]">Body Reading</span>
                  <p className="font-mono text-xs text-[#3b82f6] mt-1">text-sm — text-base</p>
                  <p className="font-helvetica text-xs text-[#cccccc] mt-2">Standard UI prompts, user inputs &amp; AI outputs</p>
                </div>
                <div className="rounded-lg border border-[#262626] bg-[#0d0d0d] p-4">
                  <span className="font-mono text-xs text-[#a3a3a3]">Headings</span>
                  <p className="font-mono text-xs text-[#3b82f6] mt-1">text-2xl — text-4xl</p>
                  <p className="font-helvetica text-xs text-[#cccccc] mt-2">Dashboard titles, hero conversion headers &amp; tier pricing</p>
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
                Frosted glass overlays for prompt sidebars and modal drawers:
              </p>
              <ul className="space-y-1.5 font-mono text-[12px] text-[#e2e2e2]">
                <li className="flex items-center gap-2"><span className="text-[#3b82f6]">•</span> Sidebars: <code className="bg-[#222] px-1.5 py-0.5 rounded text-[11px]">bg-[#0B0F17]/90 backdrop-blur-md</code></li>
                <li className="flex items-center gap-2"><span className="text-[#3b82f6]">•</span> Overlays: <code className="bg-[#222] px-1.5 py-0.5 rounded text-[11px]">bg-black/80 backdrop-blur-sm</code></li>
              </ul>
            </div>

            {/* 2. Border Radii */}
            <div className="rounded-xl border border-[#262626] bg-[#141414] p-5">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-base">🔳</span>
                <h4 className="font-semibold text-sm text-white">2. Border Radii (Corner Language)</h4>
              </div>
              <p className="font-helvetica text-[13px] leading-relaxed text-[#cccccc] mb-3">
                Clean pill-shaped buttons and soft-corner containers:
              </p>
              <ul className="space-y-1.5 font-mono text-[12px] text-[#e2e2e2]">
                <li className="flex items-center gap-2"><span className="text-[#3b82f6]">•</span> CTAs &amp; Badges: <code className="bg-[#222] px-1.5 py-0.5 rounded text-[11px]">rounded-full</code></li>
                <li className="flex items-center gap-2"><span className="text-[#3b82f6]">•</span> Input Fields &amp; Cards: <code className="bg-[#222] px-1.5 py-0.5 rounded text-[11px]">rounded-xl</code></li>
              </ul>
            </div>

            {/* 3. Ambient Glow */}
            <div className="rounded-xl border border-[#262626] bg-[#141414] p-5">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-base">☀️</span>
                <h4 className="font-semibold text-sm text-white">3. Ambient Glow &amp; Elevation</h4>
              </div>
              <p className="font-helvetica text-[13px] leading-relaxed text-[#cccccc] mb-3">
                Electric blue ambient glows for primary action triggers:
              </p>
              <ul className="space-y-1.5 font-mono text-[12px] text-[#e2e2e2]">
                <li className="flex items-center gap-2"><span className="text-[#3b82f6]">•</span> Primary CTA Glow: <code className="bg-[#222] px-1.5 py-0.5 rounded text-[11px]">shadow-lg shadow-[#3b82f6]/20</code></li>
                <li className="flex items-center gap-2"><span className="text-[#3b82f6]">•</span> Card Borders: <code className="bg-[#222] px-1.5 py-0.5 rounded text-[11px]">border border-[#262626]</code></li>
              </ul>
            </div>

            {/* 4. Micro-animations */}
            <div className="rounded-xl border border-[#262626] bg-[#141414] p-5">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-base">⚡</span>
                <h4 className="font-semibold text-sm text-white">4. Micro-animations &amp; Feel</h4>
              </div>
              <p className="font-helvetica text-[13px] leading-relaxed text-[#cccccc] mb-3">
                Subtle transition feedback for button clicks and prompt submissions:
              </p>
              <ul className="space-y-1.5 font-mono text-[12px] text-[#e2e2e2]">
                <li className="flex items-center gap-2"><span className="text-[#3b82f6]">•</span> Buttons: <code className="bg-[#222] px-1.5 py-0.5 rounded text-[11px]">transition-transform duration-200 active:scale-[0.98]</code></li>
                <li className="flex items-center gap-2"><span className="text-[#3b82f6]">•</span> Streamer: <code className="bg-[#222] px-1.5 py-0.5 rounded text-[11px]">animate-pulse</code></li>
              </ul>
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
                <rect x="250" y="20" width="300" height="48" rx="24" fill="#0B0F17" stroke="#3B82F6" strokeWidth="1.5"/>
                <text x="400" y="49" fill="#FFFFFF" fontSize="14" fontFamily="Inter, sans-serif" fontWeight="600" textAnchor="middle">Verselift AI Architecture</text>

                {/* Connecting Lines from Root */}
                <path d="M400 68V110" stroke="#3B82F6" strokeWidth="1.5" strokeDasharray="4 4"/>
                <path d="M160 110H640" stroke="#333333" strokeWidth="1.5"/>
                <path d="M160 110V140M400 110V140M640 110V140" stroke="#333333" strokeWidth="1.5"/>

                {/* Branch 1 */}
                <rect x="60" y="140" width="200" height="42" rx="10" fill="#111827" stroke="#333333" strokeWidth="1.5"/>
                <text x="160" y="166" fill="#FFFFFF" fontSize="13" fontFamily="Inter, sans-serif" fontWeight="500" textAnchor="middle">Next.js 15 App Router</text>

                {/* Branch 2 */}
                <rect x="300" y="140" width="200" height="42" rx="10" fill="#111827" stroke="#333333" strokeWidth="1.5"/>
                <text x="400" y="166" fill="#FFFFFF" fontSize="13" fontFamily="Inter, sans-serif" fontWeight="500" textAnchor="middle">Supabase Postgres &amp; RLS</text>

                {/* Branch 3 */}
                <rect x="540" y="140" width="200" height="42" rx="10" fill="#111827" stroke="#333333" strokeWidth="1.5"/>
                <text x="640" y="166" fill="#FFFFFF" fontSize="13" fontFamily="Inter, sans-serif" fontWeight="500" textAnchor="middle">Stripe Webhooks Engine</text>

                {/* Sub-nodes */}
                <path d="M160 182V215" stroke="#333333" strokeWidth="1.5"/>
                <rect x="70" y="215" width="180" height="36" rx="18" fill="#141414" stroke="#444444" strokeWidth="1"/>
                <text x="160" y="238" fill="#FFFFFF" fontSize="11" fontFamily="Inter, sans-serif" textAnchor="middle">Zod &amp; React Hook Form</text>

                <path d="M400 182V215" stroke="#333333" strokeWidth="1.5"/>
                <rect x="310" y="215" width="180" height="36" rx="18" fill="#141414" stroke="#444444" strokeWidth="1"/>
                <text x="400" y="238" fill="#FFFFFF" fontSize="11" fontFamily="Inter, sans-serif" textAnchor="middle">Supabase Auth Edge</text>

                <path d="M640 182V215" stroke="#333333" strokeWidth="1.5"/>
                <rect x="550" y="215" width="180" height="36" rx="18" fill="#141414" stroke="#444444" strokeWidth="1"/>
                <text x="640" y="238" fill="#FFFFFF" fontSize="11" fontFamily="Inter, sans-serif" textAnchor="middle">Stripe Portal API</text>

              </svg>
            </div>
            <p className="font-helvetica text-[12px] text-[#a3a3a3] text-center mt-4">
              Verselift AI System Architecture &amp; Data Pipeline Flowchart
            </p>
          </div>
        </div>

      </div>

      <hr className="mx-6 mb-16 border-[#262626] md:mx-14 lg:mx-20" />

      {/* ── ACT I: Seamless Authentication (Login & Signup) ── */}
      <div className="px-6 pb-6 md:px-14 lg:px-20">
        <h2 className="font-inter text-[1.2rem] font-light text-white mb-6 tracking-tight">
          Act I: Frictionless Authentication Flow
        </h2>
        <div className="space-y-5 font-helvetica text-[16px] leading-[1.8] text-[#dedede]">
          <p>
            First impressions are critical for SaaS conversion. I engineered a secure, lightning-fast authentication flow utilizing <strong>Supabase Auth</strong> paired with <strong>React Hook Form</strong> and <strong>Zod</strong> for strict client-side validation.
          </p>
          <p>
            The user interfaces were crafted to reduce cognitive load, offering social OAuth options alongside traditional magic links. This multi-layered approach decreased drop-off rates during sign-ups and provided a deeply integrated session management system across the entire application.
          </p>
        </div>
      </div>

      {/* Authentication Images: Side-by-side Desktop (grid-cols-2), Stacked Mobile (grid-cols-1) */}
      <div className="mb-16 px-6 md:px-14 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ImageLightbox
            src="/verselift-login.png"
            alt="Verselift Secure Login Screen"
            placeholderTitle="Verselift Secure Login Screen (/login)"
            caption="Secure Login Screen: Powered by Supabase Auth, featuring real-time validation via Zod and a clean, conversion-focused layout."
          />
          <ImageLightbox
            src="/verselift-signup.png"
            alt="Verselift Fast Sign Up Screen"
            placeholderTitle="Verselift Registration Screen (/signup)"
            caption="Frictionless Registration: Designed for minimal input friction to maximize user activation and initial engagement."
          />
        </div>
      </div>

      {/* ── ACT II: Robust Backend Architecture & AI Logic ── */}
      <div className="px-6 pb-6 md:px-14 lg:px-20">
        <h2 className="font-inter text-[1.2rem] font-light text-white mb-6 tracking-tight">
          Act II: Backend Architecture, Database Security &amp; AI Logic Pipeline
        </h2>
        <div className="space-y-5 font-helvetica text-[16px] leading-[1.8] text-[#dedede]">
          <p>
            Verselift is backed by a powerful <strong>Supabase PostgreSQL</strong> architecture. I designed a normalized relational database schema to track user accounts, subscription tiers, generation history, and API usage quotas.
          </p>
          <p>
            To guarantee absolute data privacy, I implemented strict <strong>Row Level Security (RLS)</strong> policies directly at the database layer. This ensures that users can only ever query, insert, or modify their own AI generations—preventing unauthorized data leaks natively within the Postgres engine.
          </p>
        </div>
      </div>

      {/* Logic Figure 1: AI Prompt Processing & Stream Pipeline */}
      <div className="mb-12 px-6 md:px-14 lg:px-20">
        <ImageLightbox
          src="/verselift-logic-1.png"
          alt="Verselift AI Generation Pipeline & Stream Handler Logic"
          placeholderTitle="AI Generation Stream & Token Rate Limiter Logic Diagram"
          caption="Verselift AI Execution Logic: Real-time SSE response streaming, token consumption rate-limiter, and Supabase generation history logger."
        />
      </div>

      {/* Code Block: Supabase Client Integration */}
      <CodeBlock
        filename="src/lib/supabase/client.ts"
        code={`import { createBrowserClient } from '@supabase/ssr';
import type { Database } from '@/types/supabase';

// Instantiates a secure, typed Supabase client for client-side operations.
// Leveraging Next.js SSR utilities ensures cookie-based sessions are synced.
export function createClient() {
  return createBrowserClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
}

// Example: Fetching user's protected AI history via RLS policies
export async function getUserGenerations(userId: string) {
  const supabase = createClient();
  const { data, error } = await supabase
    .from('ai_generations')
    .select('*')
    .eq('user_id', userId)
    .order('created_at', { ascending: false });

  if (error) throw new Error(error.message);
  return data;
}`}
      />

      {/* ── ACT III: Monetization & Stripe Subscriptions ── */}
      <div className="px-6 pb-6 md:px-14 lg:px-20">
        <h2 className="font-inter text-[1.2rem] font-light text-white mb-6 tracking-tight">
          Act III: Monetization Engine &amp; Stripe Billing Integration
        </h2>
        <div className="space-y-5 font-helvetica text-[16px] leading-[1.8] text-[#dedede]">
          <p>
            A SaaS is only as strong as its billing engine. I deeply integrated the <strong>Stripe Node.js SDK</strong> and Stripe Webhooks to manage the entire subscription lifecycle.
          </p>
          <p>
            When a user upgrades their plan, a secure checkout session is generated. Once the payment succeeds, a Stripe Webhook securely hits a Next.js Server Action, which verifies the cryptographic signature and instantly updates the user's tier inside the Supabase database. This automated synchronization ensures the user immediately gains access to premium AI limits without manual intervention.
          </p>
        </div>
      </div>

      {/* Logic Figure 2: Billing & Stripe Webhook Sync Logic */}
      <div className="mb-12 px-6 md:px-14 lg:px-20">
        <ImageLightbox
          src="/verselift-logic-2.png"
          alt="Verselift Stripe Webhook Sync & Tier Quota Logic"
          placeholderTitle="Stripe Webhook & Subscription Lifecycle Sync Logic"
          caption="Verselift Billing Logic Flow: Cryptographic webhook verification, tier entitlement state machine, and automated Stripe Customer Portal management."
        />
      </div>

      {/* Code Block: Stripe Webhook Handler */}
      <CodeBlock
        filename="src/app/api/webhooks/stripe/route.ts"
        code={`import { headers } from 'next/headers';
import { NextResponse } from 'next/server';
import { stripe } from '@/lib/stripe';
import { updateSubscriptionStatus } from '@/lib/supabase/admin';

export async function POST(req: Request) {
  const body = await req.text();
  const signature = headers().get('stripe-signature') as string;

  let event;
  try {
    // Cryptographically verify the webhook payload
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (error: any) {
    return NextResponse.json({ error: \`Webhook Error: \${error.message}\` }, { status: 400 });
  }

  // Handle successful subscription payment
  if (event.type === 'checkout.session.completed') {
    const session = event.data.object as Stripe.Checkout.Session;
    const userId = session.metadata?.userId;
    const subscriptionId = session.subscription as string;

    // Securely update the user's tier in Supabase using Service Role
    if (userId) {
      await updateSubscriptionStatus(userId, subscriptionId, 'pro');
    }
  }

  return NextResponse.json({ received: true }, { status: 200 });
}`}
      />

      {/* ── Footer ── */}
      <div className="px-6 pb-20 md:px-14 lg:px-20">
        <hr className="mb-10 border-[#262626]" />
        <p className="font-helvetica text-[15px] text-[#a3a3a3]">Thanks for reading.</p>
        <p className="font-helvetica mt-2 text-[15px] text-[#a3a3a3]">
          Questions about this project?{" "}
          <Link href="/" className="text-[#e2e2e2] underline underline-offset-2 hover:text-[#3b82f6] transition-colors">
            Back to home
          </Link>
        </p>
      </div>

    </div>
  );
}
