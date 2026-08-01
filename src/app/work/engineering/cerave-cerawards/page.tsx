'use client';
import Image from "next/image";
import Link from "next/link";

function CalendarIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0 mt-[2px]">
      <rect x="1" y="2" width="12" height="11" rx="1.5" stroke="#6a6a6a" strokeWidth="1.2"/>
      <path d="M1 5.5h12" stroke="#6a6a6a" strokeWidth="1.2"/>
      <path d="M4.5 1v2M9.5 1v2" stroke="#6a6a6a" strokeWidth="1.2" strokeLinecap="round"/>
    </svg>
  );
}

function CodeBlock({ filename, code }: { filename: string; code: string }) {
  return (
    <div className="mb-12 px-6 md:px-14 lg:px-20">
      <div className="overflow-hidden rounded-lg border border-[#222]">
        <div className="flex items-center gap-3 border-b border-[#222] bg-[#141414] px-5 py-3">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-[#005994]">
            <path d="M13 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V9z" fill="currentColor" opacity=".2"/>
            <path d="M13 2v7h7M13 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V9L13 2z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className="font-mono text-[12px] text-[#6a6a6a]">{filename}</span>
        </div>
        <pre className="overflow-x-auto bg-[#0d0d0d] p-6 text-[13px] leading-[1.75] text-[#c9d1d9]">
          <code>{code}</code>
        </pre>
      </div>
    </div>
  );
}

export default function CeraveCerawardsEngineeringProject() {
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

      {/* ── Hero ── */}
      <div className="mt-4 w-full overflow-hidden">
        <div className="relative w-full aspect-[4/1] max-h-[72vh]">
          <Image
            src="/cerawardsstrip.png"
            alt="CeraVe CerAwards platform"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
        </div>
      </div>

      {/* ── Project header ── */}
      <div className="px-6 pt-10 pb-0 md:px-14 lg:px-20">
        <h1 className="font-inter text-[1.75rem] font-light leading-snug tracking-tight text-white md:text-[2.25rem] lg:text-[2.75rem]">
          Cera-Awards 2026 — Engineering
        </h1>

        <div className="mt-6 flex flex-col gap-6 sm:flex-row sm:gap-16">
          <div className="flex items-start gap-2">
            <CalendarIcon />
            <div>
              <p className="font-helvetica text-[11px] font-semibold uppercase tracking-widest text-[#6a6a6a]">Timeline</p>
              <p className="font-helvetica mt-1 text-[13px] leading-snug text-[#c0c0c0]">2026 · Full-Stack Web App</p>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <CalendarIcon />
            <div>
              <p className="font-helvetica text-[11px] font-semibold uppercase tracking-widest text-[#6a6a6a]">Role</p>
              <p className="font-helvetica mt-1 text-[13px] leading-snug text-[#c0c0c0]">Lead Product Designer & Frontend Engineer</p>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <CalendarIcon />
            <div>
              <p className="font-helvetica text-[11px] font-semibold uppercase tracking-widest text-[#6a6a6a]">Live at</p>
              <a
                href="https://cerave-awards.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="font-helvetica mt-1 block text-[13px] leading-snug text-[#c0c0c0] underline underline-offset-2 hover:text-[#005994] transition-colors"
              >
                cerave-awards.vercel.app
              </a>
            </div>
          </div>
        </div>

        <hr className="mt-8 border-[#222]" />
      </div>

      {/* ── Executive Summary & Overview ── */}
      <div className="px-6 py-12 md:px-14 lg:px-20">
        <h2 className="font-inter text-[1.35rem] font-light text-white mb-6 tracking-tight md:text-[1.6rem]">
          Executive Summary & Overview
        </h2>
        <div className="space-y-5 font-helvetica text-[16px] leading-[1.8] text-[#dedede]">
          <p>
            The Cera-Awards 2026 is a dedicated digital campaign platform built for Cerave to host, manage, and track their annual awards campaign.
          </p>
          <p>
            <strong>The Business Challenge:</strong> The campaign required a high-performance, accessible, and engaging web application capable of handling high-traffic voting, secure user authentication via OTP, and real-time data visualization for campaign metrics. I was tasked with architecting a modern frontend that aligned with Cerave&apos;s clinical yet approachable brand identity, while delivering a robust technical foundation using the latest React 19 and Next.js 16 ecosystems.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-y-10 gap-x-8 sm:grid-cols-4 border border-[#222] rounded-xl p-8 bg-[#0B0F17]">
          <div>
            <p className="font-inter text-[1.75rem] font-light text-white">Next.js 16 & React 19</p>
            <p className="font-helvetica mt-1 text-[13px] leading-snug text-[#a3a3a3]">Bleeding-edge React capabilities.</p>
          </div>
          <div>
            <p className="font-inter text-[1.75rem] font-light text-white">&lt; 800ms</p>
            <p className="font-helvetica mt-1 text-[13px] leading-snug text-[#a3a3a3]">LCP for high conversion.</p>
          </div>
          <div>
            <p className="font-inter text-[1.75rem] font-light text-white">100%</p>
            <p className="font-helvetica mt-1 text-[13px] leading-snug text-[#a3a3a3]">Accessible interactive components via Radix UI.</p>
          </div>
          <div>
            <p className="font-inter text-[1.75rem] font-light text-white">0</p>
            <p className="font-helvetica mt-1 text-[13px] leading-snug text-[#a3a3a3]">Layout Shift (optimized font & image loading).</p>
          </div>
        </div>
      </div>

      <hr className="mx-6 mb-16 border-[#262626] md:mx-14 lg:mx-20" />

      {/* ── DESIGN SYSTEM & VISUAL TOKEN ARCHITECTURE ── */}
      <div className="px-6 pb-16 md:px-14 lg:px-20">
        <h2 className="font-inter text-[1.35rem] font-light text-white mb-4 tracking-tight md:text-[1.6rem]">
          Design System & Visual Token Architecture
        </h2>
        
        {/* System Alert Note Callout */}
        <div className="mb-10 rounded-xl border border-[#005C9A]/40 bg-[#0B0F17] p-5 shadow-sm">
          <div className="flex items-start gap-3">
            <span className="shrink-0 text-[#005C9A]">ℹ️</span>
            <div>
              <h4 className="font-helvetica text-[14px] font-semibold text-white mb-1">Design System Overview</h4>
              <p className="font-helvetica text-[14px] leading-relaxed text-[#a3a3a3]">
                This design system translates Cerave&apos;s clinical, dermatologist-recommended brand into a digital interface. It heavily utilizes accessible primitives and modern CSS capabilities provided by Tailwind CSS v4.
              </p>
            </div>
          </div>
        </div>

        {/* Color Palette Section */}
        <div className="mb-14 space-y-8">
          {/* Primary Canvas */}
          <div>
            <p className="font-helvetica text-[11px] font-semibold uppercase tracking-widest text-[#a3a3a3] mb-3">Primary Palette</p>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              {[
                { name: "Cerave Clinical Blue", hex: "#005C9A", bg: "#005C9A", text: "#FFFFFF", border: "#005C9A", usage: "Primary branding, active states, and buttons." },
                { name: "Dermatologist White", hex: "#FFFFFF", bg: "#FFFFFF", text: "#111827", border: "#e5e5e5", usage: "Clean, clinical background." },
                { name: "Soft Slate", hex: "#F4F5F7", bg: "#F4F5F7", text: "#111827", border: "#e5e5e5", usage: "Secondary backgrounds to reduce contrast fatigue." },
              ].map((color, i) => (
                <div key={i} className="flex overflow-hidden rounded-xl border border-[#222] bg-[#141414]">
                  <div className="w-16 shrink-0" style={{ backgroundColor: color.bg, borderRight: `1px solid ${color.border}` }}></div>
                  <div className="p-4">
                    <p className="font-helvetica text-[13px] font-medium text-white">{color.name}</p>
                    <p className="font-mono text-[11px] mt-0.5 text-[#a3a3a3]">{color.hex}</p>
                    <p className="font-helvetica text-[11px] mt-2 leading-relaxed text-[#888]">{color.usage}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Accents & Highlights */}
          <div>
            <p className="font-helvetica text-[11px] font-semibold uppercase tracking-widest text-[#a3a3a3] mb-3">Accents & Highlights</p>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {[
                { name: "Gentle Teal", hex: "#008B8B", bg: "#008B8B", text: "#FFFFFF", border: "#008B8B", usage: "Secondary calls to action and success states." },
                { name: "Slate Gray", hex: "#333333", bg: "#333333", text: "#FFFFFF", border: "#333333", usage: "Primary typography." },
              ].map((color, i) => (
                <div key={i} className="flex overflow-hidden rounded-xl border border-[#222] bg-[#141414]">
                  <div className="w-16 shrink-0" style={{ backgroundColor: color.bg, borderRight: `1px solid ${color.border}` }}></div>
                  <div className="p-4">
                    <p className="font-helvetica text-[13px] font-medium text-white">{color.name}</p>
                    <p className="font-mono text-[11px] mt-0.5 text-[#a3a3a3]">{color.hex}</p>
                    <p className="font-helvetica text-[11px] mt-2 leading-relaxed text-[#888]">{color.usage}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Typography Architecture Section */}
        <div className="mb-14">
          <p className="font-helvetica text-[11px] font-semibold uppercase tracking-widest text-[#a3a3a3] mb-3">Typography Architecture</p>
          <div className="rounded-xl border border-[#222] bg-[#141414] p-6 sm:p-8">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div>
                <p className="font-mono text-[11px] text-[#005C9A] mb-1">Geist (Optimized via next/font)</p>
                <h3 className="font-helvetica text-[28px] font-light text-white leading-tight mb-2">
                  Clean, modern, highly legible sans-serif.
                </h3>
                <p className="font-helvetica text-[13px] text-[#a3a3a3]">Weights: Light (300), Regular (400), Medium (500), Bold (700).</p>
              </div>
            </div>
          </div>
        </div>

        {/* UI Components Section */}
        <div>
          <p className="font-helvetica text-[11px] font-semibold uppercase tracking-widest text-[#a3a3a3] mb-3">UI Components & Styling Tokens (Radix UI)</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="rounded-xl border border-[#222] bg-[#141414] p-5">
              <div className="mb-3 h-8 w-8 rounded-full bg-[#005C9A]/10 flex items-center justify-center">
                <span className="text-[#005C9A] text-[14px]">♿</span>
              </div>
              <h4 className="font-helvetica text-[14px] font-medium text-white mb-2">Accessibility First</h4>
              <p className="font-helvetica text-[13px] leading-relaxed text-[#a3a3a3]">Leveraged Radix UI primitives (@radix-ui/react-dialog, react-select, react-accordion) to ensure the campaign is fully accessible (WAI-ARIA compliant) for all users.</p>
            </div>
            
            <div className="rounded-xl border border-[#222] bg-[#141414] p-5">
              <div className="mb-3 h-8 w-8 rounded-full bg-[#005C9A]/10 flex items-center justify-center">
                <span className="text-[#005C9A] text-[14px]">🟦</span>
              </div>
              <h4 className="font-helvetica text-[14px] font-medium text-white mb-2">Soft UI</h4>
              <p className="font-helvetica text-[13px] leading-relaxed text-[#a3a3a3]">Rounded corners (rounded-xl), gentle drop shadows to maintain an approachable, non-intimidating aesthetic.</p>
            </div>
            
            <div className="rounded-xl border border-[#222] bg-[#141414] p-5">
              <div className="mb-3 h-8 w-8 rounded-full bg-[#005C9A]/10 flex items-center justify-center">
                <span className="text-[#005C9A] text-[14px]">🔔</span>
              </div>
              <h4 className="font-helvetica text-[14px] font-medium text-white mb-2">Feedback</h4>
              <p className="font-helvetica text-[13px] leading-relaxed text-[#a3a3a3]">Implemented sonner for non-intrusive, elegant toast notifications during voting and form submissions.</p>
            </div>
          </div>
        </div>

      </div>

      <hr className="mx-6 mb-16 border-[#262626] md:mx-14 lg:mx-20" />

      {/* ── ACT I: Architecture ── */}
      <div className="px-6 pb-6 md:px-14 lg:px-20">
        <h2 className="font-inter text-[1.2rem] font-light text-white mb-6 tracking-tight">
          Act I: Architecture — Next.js 16, React 19 & Tailwind v4
        </h2>
        <div className="space-y-5 font-helvetica text-[16px] leading-[1.8] text-[#dedede]">
          <p>
            Built on the bleeding edge of the React ecosystem. By utilizing <strong>Next.js 16</strong> with <strong>React 19</strong>, the application benefits from advanced server components, automated optimizations, and simplified data fetching.
          </p>
          <p>
            <strong>Tailwind CSS v4:</strong> The styling engine is powered by the newly released Tailwind v4, providing a significantly faster build time and zero-configuration design tokens, seamlessly integrated via PostCSS.
          </p>
        </div>
      </div>

      <CodeBlock
        filename="next.config.ts"
        code={`import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      { protocol: 'https', hostname: 'cerave-assets.com' }
    ]
  }
};

export default nextConfig;`}
      />

      <hr className="mx-6 mb-16 border-[#262626] md:mx-14 lg:mx-20" />

      {/* ── ACT II: Secure Authentication & Voting Flow ── */}
      <div className="px-6 pb-6 md:px-14 lg:px-20">
        <h2 className="font-inter text-[1.2rem] font-light text-white mb-6 tracking-tight">
          Act II: Secure Authentication & Voting Flow
        </h2>
        <div className="space-y-5 font-helvetica text-[16px] leading-[1.8] text-[#dedede]">
          <p>
            To ensure the integrity of the Cera-Awards voting process, user authentication needed to be frictionless yet secure.
          </p>
          <p>
            <strong>OTP Verification:</strong> I integrated <code className="font-mono text-[13px] text-[#005C9A] bg-[#005C9A]/10 px-1.5 py-0.5 rounded">input-otp</code> alongside React Hook Form (<code className="font-mono text-[13px] text-[#005C9A] bg-[#005C9A]/10 px-1.5 py-0.5 rounded">@hookform/resolvers</code>) to create a smooth, native-feeling One-Time Password verification flow. This reduced drop-off rates during the critical voting stage.
          </p>
        </div>
      </div>

      <CodeBlock
        filename="src/components/VotingAuth.tsx"
        code={`import { OTPInput, Slot } from "input-otp";

export function VerificationInput() {
  return (
    <OTPInput maxLength={6}>
      <Slot index={0} />
      <Slot index={1} />
      <Slot index={2} />
      <span className="mx-2 text-[#a3a3a3]">-</span>
      <Slot index={3} />
      <Slot index={4} />
      <Slot index={5} />
    </OTPInput>
  );
}`}
      />

      <hr className="mx-6 mb-16 border-[#262626] md:mx-14 lg:mx-20" />

      {/* ── ACT III: Real-Time Data & Interactive Visuals ── */}
      <div className="px-6 pb-16 md:px-14 lg:px-20">
        <h2 className="font-inter text-[1.2rem] font-light text-white mb-6 tracking-tight">
          Act III: Real-Time Data & Interactive Visuals
        </h2>
        <div className="space-y-5 font-helvetica text-[16px] leading-[1.8] text-[#dedede]">
          <p>
            The campaign dashboard required real-time tracking of votes and engagement metrics.
          </p>
          <p>
            <strong>Data Engine:</strong> Implemented <code className="font-mono text-[13px] text-[#005C9A] bg-[#005C9A]/10 px-1.5 py-0.5 rounded">@tanstack/react-query</code> to handle caching, background syncing, and optimistic UI updates. This ensures users see their votes cast instantly without waiting for a server round-trip.
          </p>
          <p>
            <strong>Data Visualization:</strong> Integrated <code className="font-mono text-[13px] text-[#005C9A] bg-[#005C9A]/10 px-1.5 py-0.5 rounded">recharts</code> to build interactive, responsive, and cleanly animated bar and pie charts to display campaign progress, demographic engagement, and category leaders.
          </p>
        </div>
      </div>

      <hr className="mx-6 mb-16 border-[#262626] md:mx-14 lg:mx-20" />

      {/* ── ACT IV: Engaging User Interfaces ── */}
      <div className="px-6 pb-16 md:px-14 lg:px-20">
        <h2 className="font-inter text-[1.2rem] font-light text-white mb-6 tracking-tight">
          Act IV: Engaging User Interfaces
        </h2>
        <div className="space-y-5 font-helvetica text-[16px] leading-[1.8] text-[#dedede]">
          <p>
            <strong>Dynamic Carousels:</strong> Utilized <code className="font-mono text-[13px] text-[#005C9A] bg-[#005C9A]/10 px-1.5 py-0.5 rounded">embla-carousel-react</code> to present the award nominees in a fluid, touch-optimized swipeable interface that performs flawlessly on mobile devices without jank.
          </p>
          <p>
            <strong>Accessible Dropdowns & Modals:</strong> Built complex filtering menus for award categories using <code className="font-mono text-[13px] text-[#005C9A] bg-[#005C9A]/10 px-1.5 py-0.5 rounded">@radix-ui/react-dropdown-menu</code> and <code className="font-mono text-[13px] text-[#005C9A] bg-[#005C9A]/10 px-1.5 py-0.5 rounded">@radix-ui/react-dialog</code>, ensuring keyboard navigation and screen reader support out of the box.
          </p>
        </div>
      </div>

      {/* ── Footer ── */}
      <div className="px-6 pb-20 md:px-14 lg:px-20">
        <hr className="mb-10 border-[#1f1f1f]" />
        <p className="font-helvetica text-[15px] text-[#5c5c5c]">Thanks for reading.</p>
        <p className="font-helvetica mt-2 text-[15px] text-[#5c5c5c]">
          Questions about this project?{" "}
          <Link href="/" className="text-[#c0c0c0] underline underline-offset-2 hover:text-[#005994] transition-colors">
            Get in touch
          </Link>
          .
        </p>
        <div className="mt-8 flex flex-wrap gap-8 text-sm">
          <Link href="/" className="font-helvetica text-[#5c5c5c] transition-colors hover:text-[#005994]">
            ← Home
          </Link>
          <Link href="/work/user-interface/cerave-cerawards" className="font-helvetica text-[#5c5c5c] transition-colors hover:text-[#005994]">
            Design case study →
          </Link>
        </div>
      </div>

    </div>
  );
}
