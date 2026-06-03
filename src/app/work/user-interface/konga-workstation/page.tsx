'use client';
import Link from "next/link";

const ACCENT = "#ED017F";

function CalendarIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0 mt-[2px]">
      <rect x="1" y="2" width="12" height="11" rx="1.5" stroke="#6a6a6a" strokeWidth="1.2"/>
      <path d="M1 5.5h12" stroke="#6a6a6a" strokeWidth="1.2"/>
      <path d="M4.5 1v2M9.5 1v2" stroke="#6a6a6a" strokeWidth="1.2" strokeLinecap="round"/>
    </svg>
  );
}

function Placeholder({ label, aspect = "16/9" }: { label: string; aspect?: string }) {
  return (
    <div className="mb-12 px-6 md:px-14 lg:px-20">
      <div
        className="flex w-full items-center justify-center rounded-lg border border-dashed border-[#2e2e2e] bg-[#141414]"
        style={{ aspectRatio: aspect }}
      >
        <p className="font-helvetica text-[13px] text-[#3a3a3a] px-4 text-center">{label}</p>
      </div>
    </div>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <p className="font-inter text-[1.75rem] font-light text-white">{value}</p>
      <p className="font-helvetica mt-1 text-[13px] leading-snug text-[#5c5c5c]">{label}</p>
    </div>
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
    <div className="space-y-4 font-helvetica text-[15px] leading-[1.8] text-[#b8b8b8]">
      {children}
    </div>
  );
}

export default function KongaWorkstationProject() {
  return (
    <div className="min-h-screen text-[#ededed]">

      {/* ── Back ── */}
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
        <img src="/kongastrip.png" alt="Konga WorkStation overview" className="w-full h-auto" />
      </div>

      {/* ── Header ── */}
      <div className="px-6 pt-4 pb-0 md:px-14 lg:px-20">
        <h1 className="font-inter text-[1.75rem] font-light leading-snug tracking-tight text-white md:text-[2.25rem] lg:text-[2.75rem]">
          Konga WorkStation
        </h1>
        <p className="font-helvetica mt-3 text-[15px] text-[#6a6a6a]">
          3 years designing and building digital products for Konga Group
        </p>

        <div className="mt-6 flex flex-col gap-6 sm:flex-row sm:flex-wrap sm:gap-14">
          <div className="flex items-start gap-2">
            <CalendarIcon />
            <div>
              <p className="font-helvetica text-[11px] font-semibold uppercase tracking-widest text-[#6a6a6a]">Timeline</p>
              <p className="font-helvetica mt-1 text-[13px] leading-snug text-[#c0c0c0]">2023 — Present</p>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <CalendarIcon />
            <div>
              <p className="font-helvetica text-[11px] font-semibold uppercase tracking-widest text-[#6a6a6a]">Location</p>
              <p className="font-helvetica mt-1 text-[13px] leading-snug text-[#c0c0c0]">Lagos, Nigeria</p>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <CalendarIcon />
            <div>
              <p className="font-helvetica text-[11px] font-semibold uppercase tracking-widest text-[#6a6a6a]">Role</p>
              <p className="font-helvetica mt-1 text-[13px] leading-snug text-[#c0c0c0]">Product Designer & Developer</p>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <CalendarIcon />
            <div>
              <p className="font-helvetica text-[11px] font-semibold uppercase tracking-widest text-[#6a6a6a]">Properties</p>
              <p className="font-helvetica mt-1 text-[13px] leading-snug text-[#c0c0c0]">group.konga.com · kongafm.com</p>
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
            <Link href="/" className="text-[#ededed] underline underline-offset-2 hover:text-[#ED017F] transition-colors">
              please get in touch
            </Link>
            .
          </p>
          <p>
            Konga Group is one of Nigeria&apos;s largest e-commerce and retail groups. Over three years as
            their in-house Product Designer and Developer, I&apos;ve owned the design and build of their
            corporate digital presence, from the group website to a dedicated media property and
            internal tooling.
          </p>
          <p>
            Each project sat at the intersection of brand, product, and engineering. Designed in
            Figma, built in code, and shipped to production by me. This page covers the design thinking
            behind each property. The engineering detail lives in a{" "}
            <Link href="/work/engineering/konga-group" className="text-[#ededed] underline underline-offset-2 hover:text-[#ED017F] transition-colors">
              separate case study
            </Link>
            .
          </p>
        </Body>
      </div>

      {/* ── Stats ── */}
      <div className="px-6 pb-16 md:px-14 lg:px-20">
        <div className="grid grid-cols-2 gap-y-10 gap-x-8 sm:grid-cols-3 lg:grid-cols-5">
          <Stat value="3 yrs" label="At Konga Group" />
          <Stat value="3" label="Products shipped" />
          <Stat value="2" label="Public websites" />
          <Stat value="1" label="Internal dashboard" />
          <Stat value="—" label="Metrics (add yours)" />
        </div>
      </div>

      <hr className="mx-6 mb-16 border-[#1f1f1f] md:mx-14 lg:mx-20" />

      {/* ══ group.konga.com ══ */}
      <div className="px-6 pb-6 md:px-14 lg:px-20">
        <SectionHeading>group.konga.com — Corporate Website</SectionHeading>
        <Body>
          <p>
            The Konga Group corporate website is the public-facing home for the holding company,
            communicating what the group is, what it owns, and what it stands for to partners,
            investors, and prospective talent.
          </p>
          <p>
            I owned the design end-to-end: information architecture, visual direction, component
            design, and the final build. The brief called for a platform that felt authoritative and
            modern without losing the warmth Konga is known for in the Nigerian market.
          </p>
        </Body>
      </div>

      <div className="mb-12 px-6 md:px-14 lg:px-20">
        <img src="/kgroupfig1.png" alt="group.konga.com full page design" className="w-full h-auto" />
      </div>

      <div className="px-6 pb-6 md:px-14 lg:px-20">
        <Body>
          <p>
            The site needed to work cleanly across both desktop and mobile. Corporate visitors on
            laptops and job seekers browsing on phones. Responsive layout was a hard requirement,
            not an afterthought.
          </p>
        </Body>
      </div>

      <Placeholder label="Image — group.konga.com mobile view" />
      <Placeholder label="Image — group.konga.com key sections / component detail" />

      <hr className="mx-6 mb-16 border-[#1f1f1f] md:mx-14 lg:mx-20" />

      {/* ══ kongafm.com ══ */}
      <div className="px-6 pb-6 md:px-14 lg:px-20">
        <SectionHeading>kongafm.com — Media Property</SectionHeading>
        <Body>
          <p>
            KongaFM is Konga&apos;s dedicated media channel, a content-driven property that sits alongside
            the e-commerce platform. I designed and developed the full website from scratch, building
            a layout that could carry editorial content, brand storytelling, and product promotion
            simultaneously.
          </p>
          <p>
            The design challenge here was distinct from the corporate site: this needed to feel
            energetic and current, closer to a media brand than a corporate one, while still
            sitting clearly within the Konga visual family.
          </p>
        </Body>
      </div>

      <Placeholder label="Image — kongafm.com homepage design" />

      <div className="px-6 pb-6 md:px-14 lg:px-20">
        <Body>
          <p>
            Content structure was the core design problem. The site needed to surface different
            content types (articles, videos, brand features) without the hierarchy feeling cluttered.
            I used a modular grid that could flex based on content volume without breaking the layout.
          </p>
        </Body>
      </div>

      <Placeholder label="Image — kongafm.com content pages / article view" />
      <Placeholder label="Image — kongafm.com mobile experience" />

      <hr className="mx-6 mb-16 border-[#1f1f1f] md:mx-14 lg:mx-20" />

      {/* ══ Career Dashboard ══ */}
      <div className="px-6 pb-6 md:px-14 lg:px-20">
        <SectionHeading>Career Dashboard — Internal Tool</SectionHeading>
        <Body>
          <p>
            Alongside the public properties, I designed and built an internal career management
            dashboard for the Konga Group HR and admin team. The tool handles job postings, applicant
            tracking, and internal review workflows.
          </p>
          <p>
            Screens for this project are kept private out of respect for internal tooling. Happy to
            walk through the design decisions in a conversation. Get in touch if you&apos;d like to know
            more.
          </p>
        </Body>
      </div>

      {/* Private notice instead of placeholder */}
      <div className="mb-12 px-6 md:px-14 lg:px-20">
        <div className="flex items-center gap-4 rounded-lg border border-[#2e2e2e] bg-[#141414] px-6 py-5">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0 text-[#5c5c5c]">
            <rect x="3" y="7" width="10" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.2"/>
            <path d="M5 7V5a3 3 0 016 0v2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
          </svg>
          <p className="font-helvetica text-[13px] text-[#5c5c5c]">
            Screens withheld (internal dashboard).{" "}
            <Link href="/" className="text-[#c0c0c0] underline underline-offset-2 hover:text-[#ED017F] transition-colors">
              Get in touch
            </Link>{" "}
            to see more.
          </p>
        </div>
      </div>

      <hr className="mx-6 mb-16 border-[#1f1f1f] md:mx-14 lg:mx-20" />

      {/* ── Design system note ── */}
      <div className="px-6 pb-6 md:px-14 lg:px-20">
        <SectionHeading>Design Language</SectionHeading>
        <Body>
          <p>
            Across all three properties, the challenge was consistency without uniformity. Each
            product has a different audience and purpose, but they all needed to feel like they came
            from the same family.
          </p>
          <p>
            I maintained a shared component library across the builds: typography scale, colour
            tokens, button states, and layout grids that could adapt to each context without
            fragmenting the visual identity.
          </p>
        </Body>
      </div>

      <Placeholder label="Image — Design system / shared components across properties" />

      {/* ── Footer ── */}
      <div className="px-6 pb-20 md:px-14 lg:px-20">
        <hr className="mb-10 border-[#1f1f1f]" />
        <p className="font-helvetica text-[15px] text-[#5c5c5c]">Thanks for reading.</p>
        <p className="font-helvetica mt-2 text-[15px] text-[#5c5c5c]">
          Questions about this project?{" "}
          <Link href="/" className="text-[#c0c0c0] underline underline-offset-2 hover:text-[#ED017F] transition-colors">
            Get in touch
          </Link>
          .
        </p>
        <div className="mt-8 flex flex-wrap gap-8 text-sm">
          <Link href="/work/user-interface/cerave-cerawards" className="font-helvetica text-[#5c5c5c] transition-colors hover:text-[#ED017F]">
            ← CeraVe CerAwards
          </Link>
          <Link href="/work/user-interface/statmind" className="font-helvetica text-[#5c5c5c] transition-colors hover:text-[#ED017F]">
            StatMind →
          </Link>
        </div>
      </div>

    </div>
  );
}

const _ = ACCENT; // keep import used
