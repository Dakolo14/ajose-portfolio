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

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function Placeholder({ label, aspect = "16/9" }: { label: string; aspect?: string }) {
  return null; // images coming soon
}

function CodeBlock({ filename, code }: { filename: string; code: string }) {
  return (
    <div className="mb-12 px-6 md:px-14 lg:px-20">
      <div className="overflow-hidden rounded-lg border border-[#222]">
        <div className="flex items-center gap-3 border-b border-[#222] bg-[#141414] px-5 py-3">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-[#ED017F]">
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

export default function KongaGroupEngineeringProject() {
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
        <div className="relative w-full aspect-[4/1] max-h-[72vh]">
          <Image
            src="/kongagroupstrip.png"
            alt="Konga Group engineering"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
        </div>
      </div>

      {/* ── Header ── */}
      <div className="px-6 pt-4 pb-0 md:px-14 lg:px-20">
        <h1 className="font-inter text-[1.75rem] font-light leading-snug tracking-tight text-white md:text-[2.25rem] lg:text-[2.75rem]">
          Konga Group — Engineering
        </h1>

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
              <p className="font-helvetica text-[11px] font-semibold uppercase tracking-widest text-[#6a6a6a]">Stack</p>
              <p className="font-helvetica mt-1 text-[13px] leading-snug text-[#c0c0c0]">Next.js, TypeScript</p>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <CalendarIcon />
            <div>
              <p className="font-helvetica text-[11px] font-semibold uppercase tracking-widest text-[#6a6a6a]">Role</p>
              <p className="font-helvetica mt-1 text-[13px] leading-snug text-[#c0c0c0]">Technical Lead</p>
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
            This covers the engineering behind the Konga Group digital properties: the architecture,
            the stack decisions, and the development work across group.konga.com, kongafm.com, and the
            internal career dashboard. The design process lives in a{" "}
            <Link href="/work/user-interface/konga-workstation" className="text-[#ededed] underline underline-offset-2 hover:text-[#ED017F] transition-colors">
              separate case study
            </Link>
            .
          </p>
          <p>
            All three were designed and built by me, from Figma to production, on Next.js
            and deployed under the Konga Group infrastructure.
          </p>
        </Body>
      </div>

      {/* ── Stats ── */}
      <div className="px-6 pb-16 md:px-14 lg:px-20">
        <div className="grid grid-cols-2 gap-y-10 gap-x-8 sm:grid-cols-4">
          <Stat value="3" label="Products built" />
          <Stat value="Next.js" label="Primary framework" />
          <Stat value="92%" label="Performance score (add yours)" />
          <Stat value="1000+" label="Monthly visitors (add yours)" />
        </div>
      </div>

      {/* ── Strip image ── */}
      <div className="mb-16 px-6 md:px-14 lg:px-20">
        <figure>
          <div className="overflow-hidden rounded-lg">
            <div className="relative w-full aspect-[3012/1722]">
              <Image
                src="/kgroupfig1.png"
                alt="Konga Group — site overview"
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 90vw"
              />
            </div>
          </div>
        </figure>
      </div>

      <hr className="mx-6 mb-16 border-[#1f1f1f] md:mx-14 lg:mx-20" />

      {/* ══ group.konga.com ══ */}
      <div className="px-6 pb-6 md:px-14 lg:px-20">
        <SectionHeading>group.konga.com — Architecture</SectionHeading>
        <Body>
          <p>
            group.konga.com is the public-facing corporate site for Konga Group, the parent company
            behind the Konga e-commerce brand. The site covers company information, press, careers
            and the sub-brand properties under the group umbrella.
          </p>
          <p>
            Built on Next.js with TypeScript, the site uses static generation for all public pages —
            keeping load times fast and the deployment simple. There is no CMS dependency; content
            is managed directly in the codebase, which suits the low update frequency of a corporate
            presence and keeps the architecture lean.
          </p>
          <p>
            Routing is handled entirely through the Next.js App Router. Each section (company,
            careers, brands, contact) is a self-contained route with its own layout. The careers
            section connects to the internal ATS dashboard, surfacing live job listings without
            exposing the admin layer to the public domain.
          </p>
          <p>
            Images are served through Next.js&apos;s built-in Image optimisation: automatic WebP
            conversion, responsive sizing, and lazy loading across all hero and brand assets. This
            was the primary performance lever given how image-heavy the brand pages are.
          </p>
        </Body>
      </div>

      <hr className="mx-6 mb-16 border-[#1f1f1f] md:mx-14 lg:mx-20" />

      {/* ══ Career Dashboard ══ */}
      <div className="px-6 pb-6 md:px-14 lg:px-20">
        <SectionHeading>Career Dashboard — Internal Tool</SectionHeading>
        <Body>
          <p>
            The career dashboard at group.konga.com/admin is an internal tool built for HR and admin.
            Engineering notes are kept private. Get in touch if you&apos;d like to know more about the
            technical implementation.
          </p>
        </Body>
      </div>

      <div className="mb-12 px-6 md:px-14 lg:px-20">
        <div className="flex items-center gap-4 rounded-lg border border-[#2e2e2e] bg-[#141414] px-6 py-5">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0 text-[#5c5c5c]">
            <rect x="3" y="7" width="10" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.2"/>
            <path d="M5 7V5a3 3 0 016 0v2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
          </svg>
          <p className="font-helvetica text-[13px] text-[#5c5c5c]">
            Code withheld (internal dashboard).{" "}
            <Link href="/" className="text-[#c0c0c0] underline underline-offset-2 hover:text-[#ED017F] transition-colors">
              Get in touch
            </Link>{" "}
            to learn more.
          </p>
        </div>
      </div>

      {/* Career dashboard images */}
      <div className="mb-4 px-6 md:px-14 lg:px-20">
        <div className="relative w-full aspect-[1512/982] overflow-hidden rounded-lg">
          <Image
            src="/atspipeline.png"
            alt="ATS pipeline — career dashboard"
            fill
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, 90vw"
          />
        </div>
      </div>
      <div className="mb-12 px-6 md:px-14 lg:px-20">
        <div className="relative w-full aspect-[1512/982] overflow-hidden rounded-lg">
          <Image
            src="/clickedatspipeline.png"
            alt="ATS pipeline expanded — career dashboard"
            fill
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, 90vw"
          />
        </div>
      </div>

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
          <Link href="/work/engineering/cerave-cerawards" className="font-helvetica text-[#5c5c5c] transition-colors hover:text-[#ED017F]">
            ← CeraVe Engineering
          </Link>
          <Link href="/work/engineering/konga-rework" className="font-helvetica text-[#5c5c5c] transition-colors hover:text-[#ED017F]">
            Konga Rework →
          </Link>
        </div>
      </div>

    </div>
  );
}
