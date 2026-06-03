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

function Placeholder({ label }: { label: string }) {
  return (
    <div className="mb-12 px-6 md:px-14 lg:px-20">
      <div className="flex aspect-[16/9] w-full items-center justify-center rounded-lg border border-dashed border-[#2e2e2e] bg-[#141414]">
        <p className="font-helvetica text-[13px] text-[#3a3a3a]">{label}</p>
      </div>
    </div>
  );
}


export default function StatMindProject() {
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
            src="/statmindstrips.png"
            alt="StatMind platform"
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
          StatMind
        </h1>

        <div className="mt-6 flex flex-col gap-6 sm:flex-row sm:flex-wrap sm:gap-14">
          <div className="flex items-start gap-2">
            <CalendarIcon />
            <div>
              <p className="font-helvetica text-[11px] font-semibold uppercase tracking-widest text-[#6a6a6a]">Timeline</p>
              <p className="font-helvetica mt-1 text-[13px] leading-snug text-[#c0c0c0]">August 2025 — December 2025</p>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <CalendarIcon />
            <div>
              <p className="font-helvetica text-[11px] font-semibold uppercase tracking-widest text-[#6a6a6a]">Location</p>
              <p className="font-helvetica mt-1 text-[13px] leading-snug text-[#c0c0c0]">Texas, United States</p>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <CalendarIcon />
            <div>
              <p className="font-helvetica text-[11px] font-semibold uppercase tracking-widest text-[#6a6a6a]">Role</p>
              <p className="font-helvetica mt-1 text-[13px] leading-snug text-[#c0c0c0]">UI/UX Designer</p>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <CalendarIcon />
            <div>
              <p className="font-helvetica text-[11px] font-semibold uppercase tracking-widest text-[#6a6a6a]">Status</p>
              <p className="font-helvetica mt-1 text-[13px] leading-snug text-[#c0c0c0]">Live</p>
            </div>
          </div>
        </div>

        <hr className="mt-8 border-[#222]" />
      </div>

      {/* ── Intro ── */}
      <div className="px-6 py-12 md:px-14 lg:px-20">
        <div className="space-y-5 font-helvetica text-[15px] leading-[1.8] text-[#b8b8b8]">
          <p>
            If you&apos;d like to learn more,{" "}
            <Link href="/" className="text-[#ededed] underline underline-offset-2 hover:text-[#5A6BFF] transition-colors">
              please get in touch
            </Link>
            .
          </p>
          <p>
            StatMind is an analytics platform designed to help businesses make data-driven decisions
            without the cognitive overhead that comes with most analytics tools. The goal was to make
            complex data feel approachable: powerful for experts, readable for everyone else.
          </p>
          <p>
            I led the UI/UX design from concept through to final screens: information architecture,
            dashboard layout system, data visualisation patterns, and the component library the
            product runs on.
          </p>
        </div>
      </div>

      {/* ── Main visual ── */}
      <div className="mb-12 px-6 md:px-14 lg:px-20">
        <figure>
          <div className="relative w-full aspect-[1336/1002] overflow-hidden rounded-lg">
            <Image
              src="/fig1.png"
              alt="StatMind dashboard — primary analytics view"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 90vw"
            />
          </div>
          <figcaption className="mt-4 font-helvetica text-[13px] leading-relaxed text-[#5c5c5c] text-center">
            StatMind dashboard — primary analytics view with real-time data and intelligent insight panels.
          </figcaption>
        </figure>
      </div>

      {/* ── Design sections ── */}
      <div className="px-6 pb-6 md:px-14 lg:px-20">
        <h2 className="font-inter text-[1.1rem] font-light text-white mb-6 tracking-tight">The Challenge</h2>
        <div className="space-y-4 font-helvetica text-[15px] leading-[1.8] text-[#b8b8b8]">
          <p>
            Complex data needed to be visualised intuitively without overwhelming users. The
            platform had to serve two very different audiences simultaneously: analysts who want
            raw control, and decision-makers who just need the headline.
          </p>
          <p>
            The design challenge was building one system that could flex between both without
            feeling schizophrenic. The solution was a consistent visual language that scales from simple to deep.
          </p>
        </div>
      </div>

      <div className="mb-12 px-6 md:px-14 lg:px-20">
        <figure>
          <div className="relative w-full aspect-[1336/1002] overflow-hidden rounded-lg">
            <Image
              src="/lowstatmindwireframe.png"
              alt="StatMind wireframes — dashboard layout exploration"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 90vw"
            />
          </div>
          <figcaption className="mt-4 font-helvetica text-[13px] leading-relaxed text-[#5c5c5c] text-center">
            Early wireframes — dashboard layout exploration before visual design.
          </figcaption>
        </figure>
      </div>

      <div className="px-6 pb-6 md:px-14 lg:px-20">
        <h2 className="font-inter text-[1.1rem] font-light text-white mb-6 tracking-tight">Dashboard System</h2>
        <div className="space-y-4 font-helvetica text-[15px] leading-[1.8] text-[#b8b8b8]">
          <p>
            I designed a modular widget system where each card is an independent unit with its own
            data context, resize behaviour, and interaction state. Users can build personalised
            views by composing widgets, without needing to understand the underlying data model.
          </p>
          <p>
            Real-time updates are animated subtly. Values transition rather than jump, so the
            dashboard feels alive without being distracting during a live presentation or a deep
            analysis session.
          </p>
        </div>
      </div>

      <Placeholder label="Image — Widget system / component breakdown" />

      <div className="px-6 pb-6 md:px-14 lg:px-20">
        <h2 className="font-inter text-[1.1rem] font-light text-white mb-6 tracking-tight">AI Insights Layer</h2>
        <div className="space-y-4 font-helvetica text-[15px] leading-[1.8] text-[#b8b8b8]">
          <p>
            StatMind surfaces intelligent recommendations alongside the raw data: pattern
            detection, anomaly flags, and trend summaries. Designing this layer required
            careful thought around trust: the AI suggestions needed to feel useful, not
            intrusive, and never more confident than the data warranted.
          </p>
        </div>
      </div>

      <Placeholder label="Image — AI insights panel / recommendation UI" />

      <div className="mb-12 px-6 md:px-14 lg:px-20">
        <figure>
          <div className="relative w-full aspect-[1336/1002] overflow-hidden rounded-lg">
            <Image
              src="/statmind.png"
              alt="StatMind final screens"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 90vw"
            />
          </div>
          <figcaption className="mt-4 font-helvetica text-[13px] leading-relaxed text-[#5c5c5c] text-center">
            Final screens — full platform view across dashboard, reports, and insights.
          </figcaption>
        </figure>
      </div>

      {/* ── Footer ── */}
      <div className="px-6 pb-20 md:px-14 lg:px-20">
        <hr className="mb-10 border-[#1f1f1f]" />
        <p className="font-helvetica text-[15px] text-[#5c5c5c]">Thanks for reading.</p>
        <p className="font-helvetica mt-2 text-[15px] text-[#5c5c5c]">
          Questions about this project?{" "}
          <Link href="/" className="text-[#c0c0c0] underline underline-offset-2 hover:text-[#5A6BFF] transition-colors">
            Get in touch
          </Link>
          .
        </p>
        <div className="mt-8 flex flex-wrap gap-8 text-sm">
          <Link href="/work/user-interface/konga-workstation" className="font-helvetica text-[#5c5c5c] transition-colors hover:text-[#5A6BFF]">
            ← Konga WorkStation
          </Link>
          <Link href="/work/user-interface/tradon-app" className="font-helvetica text-[#5c5c5c] transition-colors hover:text-[#5A6BFF]">
            Tradon App →
          </Link>
        </div>
      </div>

    </div>
  );
}
