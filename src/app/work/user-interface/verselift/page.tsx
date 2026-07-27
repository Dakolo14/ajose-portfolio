'use client';
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

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-inter text-[1.1rem] font-light text-white mb-6 tracking-tight">
      {children}
    </h2>
  );
}

function Body({ children }: { children: React.ReactNode }) {
  return (
    <div className="space-y-5 font-helvetica text-[15px] leading-[1.8] text-[#b8b8b8]">
      {children}
    </div>
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

      {/* ── Project Header ── */}
      <div className="px-6 pt-10 pb-0 md:px-14 lg:px-20">
        <h1 className="font-inter text-[1.75rem] font-light leading-snug tracking-tight text-white md:text-[2.25rem] lg:text-[2.75rem]">
          Verselift — AI SaaS Platform
        </h1>

        <div className="mt-6 flex flex-col gap-6 sm:flex-row sm:gap-16">
          <div className="flex items-start gap-2">
            <CalendarIcon />
            <div>
              <p className="font-helvetica text-[11px] font-semibold uppercase tracking-widest text-[#6a6a6a]">Timeline</p>
              <p className="font-helvetica mt-1 text-[13px] leading-snug text-[#c0c0c0]">2025 — Present</p>
            </div>
          </div>

          <div className="flex items-start gap-2">
            <CalendarIcon />
            <div>
              <p className="font-helvetica text-[11px] font-semibold uppercase tracking-widest text-[#6a6a6a]">Category</p>
              <p className="font-helvetica mt-1 text-[13px] leading-snug text-[#c0c0c0]">AI SaaS & Growth UX</p>
            </div>
          </div>

          <div className="flex items-start gap-2">
            <CalendarIcon />
            <div>
              <p className="font-helvetica text-[11px] font-semibold uppercase tracking-widest text-[#6a6a6a]">Role</p>
              <p className="font-helvetica mt-1 text-[13px] leading-snug text-[#c0c0c0]">Product Designer & Strategist</p>
            </div>
          </div>

          <div className="flex items-start gap-2">
            <CalendarIcon />
            <div>
              <p className="font-helvetica text-[11px] font-semibold uppercase tracking-widest text-[#6a6a6a]">Live at</p>
              <a
                href="https://verseliftai.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-helvetica mt-1 block text-[13px] leading-snug text-[#c0c0c0] underline underline-offset-2 hover:text-[#3b82f6] transition-colors"
              >
                verseliftai.vercel.app
              </a>
            </div>
          </div>
        </div>

        <hr className="mt-8 border-[#222]" />
      </div>

      {/* ── Intro ── */}
      <div className="px-6 py-12 md:px-14 lg:px-20">
        <Body>
          <p>
            If you&apos;d like to learn more,{" "}
            <Link href="/" className="text-[#ededed] underline underline-offset-2 hover:text-[#3b82f6] transition-colors">
              please get in touch
            </Link>
            .
          </p>
          <p>
            Verselift (<a href="https://verseliftai.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-[#ededed] underline underline-offset-2 hover:text-[#3b82f6] transition-colors">verseliftai.vercel.app</a>) is an AI-powered SaaS platform engineered to solve core operational bottlenecks and drive recurring subscription revenue for businesses.
          </p>
          <p>
            As Lead Product Designer & Strategist, I architected the end-to-end design system, onboarding conversion flows, user analytics dashboards, and monetization touchpoints.
          </p>
        </Body>
      </div>

      {/* ── Hero Image Placeholder ── */}
      <div className="mb-12 px-6 md:px-14 lg:px-20">
        <div className="flex w-full items-center justify-center rounded-lg border border-dashed border-[#2e2e2e] bg-[#141414] aspect-[16/9] min-h-[220px]">
          <p className="font-helvetica text-[13px] text-[#5c5c5c] px-4 text-center">
            Verselift — Main Application Dashboard & AI Workflow Interface
          </p>
        </div>
      </div>

      {/* ── Results / Metrics ── */}
      <div className="px-6 pb-16 md:px-14 lg:px-20">
        <div className="grid grid-cols-2 gap-y-10 gap-x-8 sm:grid-cols-3 lg:grid-cols-5">
          {[
            { stat: "3-Step", label: "Frictionless Onboarding" },
            { stat: "100%", label: "Modular Design System" },
            { stat: "Real-time", label: "Analytics & Insights" },
            { stat: "Active", label: "Live in Production" },
            { stat: "MRR", label: "Revenue Optimized" },
          ].map(({ stat, label }) => (
            <div key={label}>
              <p className="font-inter text-[1.75rem] font-light text-white">{stat}</p>
              <p className="font-helvetica mt-1 text-[13px] leading-snug text-[#5c5c5c]">{label}</p>
            </div>
          ))}
        </div>
      </div>

      <hr className="mx-6 mb-16 border-[#1f1f1f] md:mx-14 lg:mx-20" />

      {/* ── Strategy Section ── */}
      <div className="px-6 pb-6 md:px-14 lg:px-20">
        <SectionHeading>Growth Strategy & Product Architecture</SectionHeading>
        <Body>
          <p>
            The core objective for Verselift was balancing complex AI capabilities with an intuitive, self-serve interface that drives user activation and premium tier conversions.
          </p>
          <p>
            Every user touchpoint—from account creation to template execution—was crafted to reduce cognitive load and deliver immediate value within the first 60 seconds of onboarding.
          </p>
        </Body>
      </div>

      {/* ── Design System Section ── */}
      <div className="px-6 pb-6 md:px-14 lg:px-20">
        <SectionHeading>Design System & Visual Craft</SectionHeading>
        <Body>
          <p>
            To ensure rapid feature expansion without design debt, I established a comprehensive dark-mode UI token architecture, responsive grid layouts, and interactive component states in Figma.
          </p>
        </Body>
      </div>

      {/* ── Image Placeholder ── */}
      <div className="mb-12 px-6 md:px-14 lg:px-20">
        <div className="flex w-full items-center justify-center rounded-lg border border-dashed border-[#2e2e2e] bg-[#141414] aspect-[16/9] min-h-[220px]">
          <p className="font-helvetica text-[13px] text-[#5c5c5c] px-4 text-center">
            Verselift — Design System & Component Token Detail
          </p>
        </div>
      </div>

      {/* ── Footer ── */}
      <div className="px-6 pb-20 md:px-14 lg:px-20">
        <hr className="mb-10 border-[#1f1f1f]" />
        <p className="font-helvetica text-[15px] text-[#5c5c5c]">Thanks for reading.</p>
        <p className="font-helvetica mt-2 text-[15px] text-[#5c5c5c]">
          Questions about this project?{" "}
          <Link href="/" className="text-[#c0c0c0] underline underline-offset-2 hover:text-[#3b82f6] transition-colors">
            Get in touch
          </Link>
          .
        </p>
        <div className="mt-8 flex flex-wrap gap-8 text-sm">
          <Link href="/work/user-interface/konga-workstation" className="font-helvetica text-[#5c5c5c] transition-colors hover:text-[#3b82f6]">
            ← Konga WorkStation
          </Link>
          <Link href="/work/user-interface/statmind" className="font-helvetica text-[#5c5c5c] transition-colors hover:text-[#3b82f6]">
            StatMind →
          </Link>
        </div>
      </div>

    </div>
  );
}
