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

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function Placeholder({ label, aspect = "16/9" }: { label: string; aspect?: string }) {
  return null; // images coming soon
}

function BeforeAfter({ label }: { label: string }) {
  return (
    <div className="mb-12 px-6 md:px-14 lg:px-20">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <figure>
          <div className="flex aspect-[4/3] w-full items-center justify-center rounded-lg border border-dashed border-[#2e2e2e] bg-[#141414]">
            <p className="font-helvetica text-[13px] text-[#3a3a3a] px-4 text-center">Before — {label}</p>
          </div>
          <figcaption className="mt-3 font-helvetica text-[12px] text-[#3a3a3a]">Before</figcaption>
        </figure>
        <figure>
          <div className="flex aspect-[4/3] w-full items-center justify-center rounded-lg border border-dashed border-[#2e2e2e] bg-[#141414]">
            <p className="font-helvetica text-[13px] text-[#3a3a3a] px-4 text-center">After — {label}</p>
          </div>
          <figcaption className="mt-3 font-helvetica text-[12px] text-[#3a3a3a]">After</figcaption>
        </figure>
      </div>
    </div>
  );
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

export default function KongaReworkProject() {
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
        <div className="relative w-full aspect-[4/1] max-h-[72vh] flex items-center justify-center bg-[#141414] border-y border-dashed border-[#2e2e2e]">
          <p className="font-helvetica text-[13px] text-[#3a3a3a]">Hero image — konga.com homepage, new vs old</p>
        </div>
      </div>

      {/* ── Header ── */}
      <div className="px-6 pt-4 pb-0 md:px-14 lg:px-20">
        <h1 className="font-inter text-[1.75rem] font-light leading-snug tracking-tight text-white md:text-[2.25rem] lg:text-[2.75rem]">
          Konga.com Homepage Rework
        </h1>
        <p className="font-helvetica mt-3 text-[15px] text-[#6a6a6a]">
          Optimizing for retention across Africa&apos;s largest e-commerce platform
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
              <p className="font-helvetica text-[11px] font-semibold uppercase tracking-widest text-[#6a6a6a]">Platform</p>
              <p className="font-helvetica mt-1 text-[13px] leading-snug text-[#c0c0c0]">konga.com</p>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <CalendarIcon />
            <div>
              <p className="font-helvetica text-[11px] font-semibold uppercase tracking-widest text-[#6a6a6a]">Role</p>
              <p className="font-helvetica mt-1 text-[13px] leading-snug text-[#c0c0c0]">Designer & Developer</p>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <CalendarIcon />
            <div>
              <p className="font-helvetica text-[11px] font-semibold uppercase tracking-widest text-[#6a6a6a]">Focus</p>
              <p className="font-helvetica mt-1 text-[13px] leading-snug text-[#c0c0c0]">Retention · Visual Hierarchy · Mobile</p>
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
            The homepage is the most valuable real estate on any e-commerce site. I was given the
            ability to redesign and develop key updates to the konga.com homepage, with a clear
            mandate to increase retention and improve visual hierarchy across all devices.
          </p>
          <p>
            This is a case study in small, deliberate changes that compound. Four strategic
            interventions. Each one grounded in how users actually behave on mobile e-commerce.
          </p>
        </Body>
      </div>

      {/* ── Impact ── */}
      <div className="px-6 pb-16 md:px-14 lg:px-20">
        <div className="grid grid-cols-2 gap-y-10 gap-x-8 sm:grid-cols-4">
          <Stat value="4" label="Changes shipped" />
          <Stat value="10M+" label="Monthly visitors" />
          <Stat value="—" label="Retention lift (add metric)" />
          <Stat value="—" label="Scroll depth change (add metric)" />
        </div>
      </div>

      <hr className="mx-6 mb-16 border-[#1f1f1f] md:mx-14 lg:mx-20" />

      {/* ══ Change 1: Mobile Carousel ══ */}
      <div className="px-6 pb-6 md:px-14 lg:px-20">
        <p className="font-helvetica text-[11px] font-semibold uppercase tracking-widest text-[#3a3a3a] mb-3">Change 01</p>
        <SectionHeading>Mobile Carousel — 1.2 → 2.5 Product View</SectionHeading>
        <Body>
          <p>
            Previously, the mobile carousel showed only 1.2 products at a time. One full card and a
            sliver of the next, not enough of a &quot;peek&quot; to signal that more was available.
            The scroll felt stagnant. Users weren&apos;t swiping because they didn&apos;t know there was
            anything to swipe to.
          </p>
          <p>
            I redesigned this to a 2.5 product view. Two full items and a deliberate half-card peek
            of the third. The partial card is the signal that tells the user, without any text or
            icon, that there&apos;s more to see. Scroll behaviour went up immediately.
          </p>
          <p>
            Small UI tweaks lead to big behavioural shifts. This one change was entirely visual, no
            new data, no new logic. Just the right amount of visible affordance.
          </p>
        </Body>
      </div>

      <BeforeAfter label="Mobile carousel (1.2 vs 2.5 product view)" />

      <CodeBlock
        filename="components/ProductCarousel.tsx"
        code={`// Before: 1.2 items visible — one full card, barely a peek
const carouselConfig = {
  slidesPerView: 1.2,
  spaceBetween: 12,
};

// After: 2.5 items visible — two full cards, deliberate half-peek
// The partial third card is the affordance that drives the swipe
const carouselConfig = {
  slidesPerView: 2.5,
  spaceBetween: 10,
};

// Applied via CSS for fine-grained control across breakpoints
// styles/carousel.module.css
// .carousel-slide { width: calc((100% - 20px) / 2.5); }`}
      />

      <hr className="mx-6 mb-16 border-[#1f1f1f] md:mx-14 lg:mx-20" />

      {/* ══ Change 2: Visual Consistency ══ */}
      <div className="px-6 pb-6 md:px-14 lg:px-20">
        <p className="font-helvetica text-[11px] font-semibold uppercase tracking-widest text-[#3a3a3a] mb-3">Change 02</p>
        <SectionHeading>Visual Consistency — Unified Header System</SectionHeading>
        <Body>
          <p>
            The homepage had accumulated inconsistency over time. &quot;Today&apos;s Deals&quot; looked different
            from &quot;Official Stores.&quot; Section headers used different sizes, weights, and colours
            depending on when they were built and by whom. The page felt assembled, not designed.
          </p>
          <p>
            I introduced a unified header system using Konga&apos;s deep magenta as the anchor colour.
            Every section header now uses the same visual treatment: consistent size, consistent
            weight, consistent colour token. Whether you&apos;re looking at a flash sale or a brand store,
            the visual language is now uniform and the page is easier to scan.
          </p>
          <p>
            This was a code change as much as a design change. I refactored the section header into
            a single shared component, replacing five different implementations that had diverged
            over time.
          </p>
        </Body>
      </div>

      <BeforeAfter label="Section headers (inconsistent vs unified magenta system)" />

      <CodeBlock
        filename="components/SectionHeader.tsx"
        code={`// Before: five different implementations scattered across page sections
// Each built independently, each slightly different

// After: single shared component used everywhere
interface SectionHeaderProps {
  title: string;
  viewAllHref?: string;
}

export function SectionHeader({ title, viewAllHref }: SectionHeaderProps) {
  return (
    <div className="flex items-center justify-between mb-4">
      <h2 className="text-base font-semibold" style={{ color: "#C5007C" }}>
        {title}
      </h2>
      {viewAllHref && (
        <a href={viewAllHref} className="text-xs text-[#C5007C] hover:underline">
          See all
        </a>
      )}
    </div>
  );
}`}
      />

      <hr className="mx-6 mb-16 border-[#1f1f1f] md:mx-14 lg:mx-20" />

      {/* ══ Change 3: OEM Partner Section ══ */}
      <div className="px-6 pb-6 md:px-14 lg:px-20">
        <p className="font-helvetica text-[11px] font-semibold uppercase tracking-widest text-[#3a3a3a] mb-3">Change 03</p>
        <SectionHeading>OEM Partner Visibility — Dedicated Brand Section</SectionHeading>
        <Body>
          <p>
            Konga has premium OEM partners (CeraVe, Midea Group, and others) who run
            targeted brand stores within the platform. These partners had no dedicated surface
            on the homepage. They were buried in category listings alongside generic sellers.
          </p>
          <p>
            I built a dedicated OEM partner section that gives these brands a first-class presence
            on the homepage without disrupting the surrounding user flow. Partners get a consistent
            branded tile, recognisable at a glance, that leads directly to their store.
          </p>
          <p>
            The section is data-driven. The partner list is managed through the CMS,
            so the marketing team can update it without a code deployment.
          </p>
        </Body>
      </div>

      <BeforeAfter label="OEM partner visibility (no section vs dedicated section)" />

      <CodeBlock
        filename="components/OEMPartners.tsx"
        code={`// Dynamically rendered from CMS — no code deploy needed to add/remove partners
interface OEMPartner {
  id: string;
  name: string;
  logoUrl: string;
  storeHref: string;
  accentColor: string;
}

export function OEMPartners({ partners }: { partners: OEMPartner[] }) {
  return (
    <section className="mb-8">
      <SectionHeader title="Official Brand Stores" />
      <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
        {partners.map((partner) => (
          <a
            key={partner.id}
            href={partner.storeHref}
            className="shrink-0 flex flex-col items-center gap-2 w-20"
          >
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center"
              style={{ backgroundColor: partner.accentColor + "1a" }}
            >
              <img src={partner.logoUrl} alt={partner.name} className="w-10 h-10 object-contain" />
            </div>
            <span className="text-[11px] text-center text-[#333] leading-tight">{partner.name}</span>
          </a>
        ))}
      </div>
    </section>
  );
}`}
      />

      <hr className="mx-6 mb-16 border-[#1f1f1f] md:mx-14 lg:mx-20" />

      {/* ══ Change 4: Back to Top ══ */}
      <div className="px-6 pb-6 md:px-14 lg:px-20">
        <p className="font-helvetica text-[11px] font-semibold uppercase tracking-widest text-[#3a3a3a] mb-3">Change 04</p>
        <SectionHeading>Back to Top — Friction Reduction</SectionHeading>
        <Body>
          <p>
            The konga.com homepage is long by design. More inventory surface, more discovery
            opportunity. But long pages create a return problem: users who scroll deep lose their
            bearings, and getting back to the top search bar requires effort.
          </p>
          <p>
            The original &quot;Back to Top&quot; button was small, low-contrast, and easy to miss. I redesigned
            it to be more visually prominent: larger tap target, Konga magenta, positioned in the
            lower right away from content so it doesn&apos;t obstruct product cards.
          </p>
          <p>
            The button appears after the user has scrolled past the first viewport, and disappears
            when they return to the top. Present when needed, invisible when not.
          </p>
        </Body>
      </div>

      <BeforeAfter label="Back to Top button (old vs redesigned)" />

      <CodeBlock
        filename="components/BackToTop.tsx"
        code={`'use client';
import { useState, useEffect } from "react";

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      className="fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center
                 rounded-full shadow-lg transition-all duration-200 hover:scale-105 active:scale-95"
      style={{ backgroundColor: "#C5007C" }}
    >
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path d="M9 14V4M4 9l5-5 5 5" stroke="white" strokeWidth="1.6"
              strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </button>
  );
}`}
      />

      <Placeholder label="Image — Back to Top button in context on the live page" />

      <hr className="mx-6 mb-16 border-[#1f1f1f] md:mx-14 lg:mx-20" />

      {/* ── Reflection ── */}
      <div className="px-6 pb-6 md:px-14 lg:px-20">
        <SectionHeading>What This Work Reinforced</SectionHeading>
        <Body>
          <p>
            Working on a platform with 10M+ monthly visitors makes the cost of vague decisions very
            clear. A carousel that shows 2.5 items instead of 1.2 isn&apos;t a stylistic preference —
            it&apos;s a behavioural intervention with measurable consequences.
          </p>
          <p>
            The most impactful changes on the Konga homepage weren&apos;t new features. They were
            refinements to existing surfaces: the right affordance in the right place,
            consistency where there was drift, and removing friction from paths users were
            already trying to take.
          </p>
        </Body>
      </div>

      <Placeholder label="Image — Full homepage overview showing all 4 changes in context" />

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
          <Link href="/work/engineering/konga-group" className="font-helvetica text-[#5c5c5c] transition-colors hover:text-[#ED017F]">
            ← Konga Group Engineering
          </Link>
          <Link href="/work/engineering/kyc-interactive-form" className="font-helvetica text-[#5c5c5c] transition-colors hover:text-[#ED017F]">
            KYC Interactive Form →
          </Link>
        </div>
      </div>

    </div>
  );
}
