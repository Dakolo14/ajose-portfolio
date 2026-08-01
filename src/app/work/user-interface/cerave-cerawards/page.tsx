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

function Section({
  image,
  caption,
  children,
}: {
  image: string;
  caption?: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="mb-12 px-6 md:px-14 lg:px-20">
      {children && (
        <div className="mb-8 space-y-4 font-helvetica text-[15px] leading-[1.8] text-[#b8b8b8]">
          {children}
        </div>
      )}
      <figure>
        <div className="overflow-hidden rounded-lg bg-[#f0f0f0] p-6 md:p-10">
          <div className="relative w-full aspect-[1336/1002]">
            <Image
              src={image}
              alt={caption ?? ""}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 90vw"
            />
          </div>
        </div>
        {caption && (
          <figcaption className="mt-4 font-helvetica text-[13px] leading-relaxed text-[#5c5c5c]">
            {caption}
          </figcaption>
        )}
      </figure>
    </div>
  );
}

export default function CeraveCerawardsProject() {
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
            alt="CeraVe CerAwards campaign"
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
          CeraVe CerAwards Campaign
        </h1>

        <div className="mt-6 flex flex-col gap-6 sm:flex-row sm:gap-16">
          <div className="flex items-start gap-2">
            <CalendarIcon />
            <div>
              <p className="font-helvetica text-[11px] font-semibold uppercase tracking-widest text-[#6a6a6a]">Timeline</p>
              <p className="font-helvetica mt-1 text-[13px] leading-snug text-[#c0c0c0]">February — March 2026</p>
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
              <p className="font-helvetica text-[11px] font-semibold uppercase tracking-widest text-[#6a6a6a]">Live at</p>
              <a
                href="https://www.cerawards.com.ng"
                target="_blank"
                rel="noopener noreferrer"
                className="font-helvetica mt-1 block text-[13px] leading-snug text-[#c0c0c0] underline underline-offset-2 hover:text-[#005994] transition-colors"
              >
                cerawards.com.ng
              </a>
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
            <Link href="/" className="text-[#ededed] underline underline-offset-2 hover:text-[#005994] transition-colors">
              please get in touch
            </Link>
            .
          </p>
          <p>
            CerAwards 2026: The CeramoVE Edition was CeraVe&apos;s first foray into the Nigerian market —
            a global campaign landing in local culture for the very first time. The campaign celebrated
            Nigerian creators across six content categories, with public voting at its core.
          </p>
          <p>
            CeraVe, through Redrick Public Relations, reached out needing a voting platform that could
            handle thousands of creator submissions and a high-traffic public vote, all while feeling
            native to how Nigerian audiences use the web.
          </p>
          <p>
            I led the design and co-built the platform alongside two other developers. This page covers
            the design process: the wireframes, the user flows, and the decisions behind how it all worked.
            The engineering detail lives in a{" "}
            <Link href="/work/engineering/cerave-cerawards" className="text-[#ededed] underline underline-offset-2 hover:text-[#005994] transition-colors">
              separate case study
            </Link>
            .
          </p>
        </div>
      </div>

      {/* ── Results ── */}
      <div className="px-6 pb-16 md:px-14 lg:px-20">
        <div className="grid grid-cols-2 gap-y-10 gap-x-8 sm:grid-cols-3 lg:grid-cols-6">
          {[
            { stat: "800+", label: "Creator entries" },
            { stat: "68,000+", label: "Public votes" },
            { stat: "250+", label: "Gala guests" },
            { stat: "500M+", label: "Total reach" },
            { stat: "50M+", label: "Video views" },
            { stat: "3.5M+", label: "Engagements" },
          ].map(({ stat, label }) => (
            <div key={label}>
              <p className="font-inter text-[1.75rem] font-light text-white">{stat}</p>
              <p className="font-helvetica mt-1 text-[13px] leading-snug text-[#5c5c5c]">{label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Interactive Prototype ── */}
      <div className="px-6 pb-6 md:px-14 lg:px-20">
        <h2 className="font-inter text-[1.35rem] font-light text-white mb-4 tracking-tight md:text-[1.6rem]">
          Interactive Prototype
        </h2>
        <p className="font-helvetica text-[14px] leading-relaxed text-[#a3a3a3] mb-8">
          Explore the fully functional prototype of the CeraVe CerAwards campaign below. Feel free to interact with the voting mechanics, category exploration, and overall user flow to experience the campaign exactly as a user would.
        </p>
        <div className="w-full overflow-hidden rounded-xl border border-[#005C9A]/40 bg-[#0B0F17]">
          <iframe 
            width="100%" 
            height="750" 
            src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FwM3PieEHzCAea0qyOs774M%2FCeramoVe-Campaign%3Fnode-id%3D5-2%26viewport%3D162%252C347%252C0.04%26t%3DH4nSgxdTHf43jix5-1%26scaling%3Dscale-down-width%26content-scaling%3Dfixed%26starting-point-node-id%3D61%253A1066%26page-id%3D0%253A1" 
            allowFullScreen
            style={{ border: 'none' }}
          ></iframe>
        </div>
      </div>
      
      <hr className="mx-6 mb-16 border-[#1f1f1f] md:mx-14 lg:mx-20" />

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
                This design system outlines the visual language, typography, and core components used across the Cera-Awards campaign platform. It translates Cerave&apos;s dermatologist-recommended brand identity into a digital interface, prioritizing clinical cleanliness, high accessibility, and engaging interactions for the voting experience.
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
                { name: "Dermatologist White", hex: "#FFFFFF", bg: "#FFFFFF", text: "#111827", border: "#e5e5e5", usage: "Main background for cards, modals, and the global application." },
                { name: "Clinical Slate", hex: "#F4F6F8", bg: "#F4F6F8", text: "#111827", border: "#e5e5e5", usage: "Secondary background for active states, hover effects, and dividers." },
                { name: "Obsidian Navy", hex: "#0F172A", bg: "#0F172A", text: "#FFFFFF", border: "#0F172A", usage: "Primary text color and top navigation bars." },
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
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              {[
                { name: "Cerave Medical Blue", hex: "#005C9A", bg: "#005C9A", text: "#FFFFFF", border: "#005C9A", usage: "Primary CTAs, active navigation links & active voting states." },
                { name: "Success Emerald", hex: "#10B981", bg: "#10B981", text: "#FFFFFF", border: "#10B981", usage: "Successful vote casting, form validation & positive toast notifications." },
                { name: "Campaign Gold", hex: "#F59E0B", bg: "#F59E0B", text: "#FFFFFF", border: "#F59E0B", usage: "Highlighting award categories, trophy icons & top-ranking nominees." },
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
                <h3 className="font-helvetica text-[24px] font-light text-white leading-tight mb-2">
                  Clean, engineered, highly legible geometric sans-serif tailored for modern digital displays.
                </h3>
                <p className="font-helvetica text-[13px] text-[#a3a3a3] mt-4"><strong>Weights:</strong> Regular (400), Medium (500), Semi-Bold (600), Bold (700)</p>
              </div>
              <div className="space-y-4">
                <div>
                  <p className="font-helvetica text-[12px] text-[#a3a3a3] uppercase tracking-widest mb-1">Small / Micro</p>
                  <p className="font-helvetica text-[12px] text-white">Labels, vote counts, uppercase meta info</p>
                </div>
                <div>
                  <p className="font-helvetica text-[12px] text-[#a3a3a3] uppercase tracking-widest mb-1">Body Reading</p>
                  <p className="font-helvetica text-[15px] text-white">Standard reading content and nominee biographies</p>
                </div>
                <div>
                  <p className="font-helvetica text-[12px] text-[#a3a3a3] uppercase tracking-widest mb-1">Headings</p>
                  <p className="font-helvetica text-[24px] font-medium text-white">Page titles, hero sections & award categories</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* UI Components Section */}
        <div className="mb-14">
          <p className="font-helvetica text-[11px] font-semibold uppercase tracking-widest text-[#a3a3a3] mb-3">UI Components & Styling Tokens</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="rounded-xl border border-[#222] bg-[#141414] p-5">
              <h4 className="font-helvetica text-[14px] font-medium text-white mb-2">1. Clinical Frost</h4>
              <p className="font-helvetica text-[13px] leading-relaxed text-[#a3a3a3] mb-3">Floating panels and modals utilize subtle frosted glass without overwhelming the user.</p>
              <div className="flex gap-2">
                <span className="bg-[#222] text-[#c0c0c0] px-2 py-1 rounded text-[11px] font-mono">bg-white/90</span>
              </div>
            </div>
            
            <div className="rounded-xl border border-[#222] bg-[#141414] p-5">
              <h4 className="font-helvetica text-[14px] font-medium text-white mb-2">2. Approachable Radii</h4>
              <p className="font-helvetica text-[13px] leading-relaxed text-[#a3a3a3] mb-3">A mix of pill-shaped buttons and soft-rounded containers to make the brand feel friendly.</p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-[#222] text-[#c0c0c0] px-2 py-1 rounded text-[11px] font-mono">rounded-full</span>
                <span className="bg-[#222] text-[#c0c0c0] px-2 py-1 rounded text-[11px] font-mono">rounded-2xl</span>
              </div>
            </div>
            
            <div className="rounded-xl border border-[#222] bg-[#141414] p-5">
              <h4 className="font-helvetica text-[14px] font-medium text-white mb-2">3. Accessible Shadows</h4>
              <p className="font-helvetica text-[13px] leading-relaxed text-[#a3a3a3] mb-3">Soft, dispersed, cool-tinted shadows to prevent harsh contrast and maintain the light aesthetic.</p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-[#222] text-[#c0c0c0] px-2 py-1 rounded text-[11px] font-mono">shadow-sm</span>
                <span className="bg-[#222] text-[#c0c0c0] px-2 py-1 rounded text-[11px] font-mono">shadow-lg</span>
              </div>
            </div>

            <div className="rounded-xl border border-[#222] bg-[#141414] p-5">
              <h4 className="font-helvetica text-[14px] font-medium text-white mb-2">4. Micro-animations</h4>
              <p className="font-helvetica text-[13px] leading-relaxed text-[#a3a3a3] mb-3">Interactive elements feel responsive, confirming user actions instantly to build trust.</p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-[#222] text-[#c0c0c0] px-2 py-1 rounded text-[11px] font-mono">active:scale-95</span>
              </div>
            </div>
          </div>
        </div>

        {/* Accessibility & Interaction Engine */}
        <div className="mb-14">
          <p className="font-helvetica text-[11px] font-semibold uppercase tracking-widest text-[#a3a3a3] mb-3">Accessibility & Interaction Engine</p>
          <div className="rounded-xl border border-[#222] bg-[#141414] p-5">
            <h4 className="font-helvetica text-[14px] font-medium text-white mb-2">Dynamic Contrast & Scalability</h4>
            <ul className="list-disc pl-5 font-helvetica text-[13px] leading-relaxed text-[#a3a3a3] space-y-2">
              <li><strong>Focus States:</strong> High-visibility focus rings (<code className="font-mono bg-[#222] text-[#c0c0c0] px-1 rounded">focus-visible:ring-[#005C9A]</code>) implemented globally via Radix UI primitives.</li>
              <li><strong>ARIA Compliance:</strong> All interactive elements (<code className="font-mono bg-[#222] text-[#c0c0c0] px-1 rounded">react-accordion</code>, <code className="font-mono bg-[#222] text-[#c0c0c0] px-1 rounded">react-dialog</code>) are inherently accessible for screen readers, ensuring everyone can participate.</li>
            </ul>
          </div>
        </div>

        {/* System Component Architecture */}
        <div>
          <p className="font-helvetica text-[11px] font-semibold uppercase tracking-widest text-[#a3a3a3] mb-3">System Component Architecture</p>
          <div className="overflow-hidden rounded-lg border border-[#222]">
            <div className="flex items-center gap-3 border-b border-[#222] bg-[#141414] px-5 py-3">
              <span className="font-mono text-[12px] text-[#6a6a6a]">architecture.mermaid</span>
            </div>
            <pre className="overflow-x-auto bg-[#0d0d0d] p-6 text-[13px] leading-[1.75] text-[#c9d1d9] font-mono">
              <code>{`graph TD
    A[Cerave Design System] --> B(Typography: Geist)
    A --> C(Color Palette)
    A --> D(UI Components)
    
    C --> C1(#005C9A Cerave Blue)
    C --> C2(#FFFFFF Dermatologist White)
    C --> C3(#F59E0B Campaign Gold)
    
    D --> D1(Radix UI Primitives)
    D --> D2(Tailwind v4 Utilities)`}</code>
            </pre>
          </div>
        </div>
      </div>

      <hr className="mx-6 border-[#1f1f1f] mb-16 md:mx-14 lg:mx-20" />

      {/* ── The Brief ── */}
      <div className="px-6 pb-6 md:px-14 lg:px-20">
        <h2 className="font-inter text-[1.1rem] font-light text-white mb-6 tracking-tight">The Brief</h2>
        <div className="space-y-4 font-helvetica text-[15px] leading-[1.8] text-[#b8b8b8]">
          <p>
            The ask was clear: build a platform where Nigerian creators could submit entries across
            six content categories, and where the public could vote to decide the winners.
          </p>
          <p>
            Simple on the surface. But the constraints made it interesting. Submissions had to be
            controlled (one email, one entry per category), voting had to be fair and tamper-resistant,
            and the whole thing had to run smoothly on mobile for an audience that primarily accesses
            the web through their phones.
          </p>
        </div>
      </div>

      <div className="mb-12 px-6 md:px-14 lg:px-20">
        <img
          src="/cerawardshero.png"
          alt="CerAwards 2026 — the live campaign homepage"
          className="w-full h-auto rounded-lg"
        />
      </div>

      {/* ── Wireframing ── */}
      <div className="px-6 pb-6 md:px-14 lg:px-20">
        <h2 className="font-inter text-[1.1rem] font-light text-white mb-6 tracking-tight">Mapping the Flow</h2>
        <div className="space-y-4 font-helvetica text-[15px] leading-[1.8] text-[#b8b8b8]">
          <p>
            Before any screen was designed, I mapped out the full user journey. Two distinct paths
            had to coexist cleanly on the same platform: the creator submission flow and the
            public voting flow.
          </p>
          <p>
            The submission side needed the most thought. A creator could enter up to six categories.
            Their email was their identity. Once they submitted to a category, that slot was locked.
            They could return and submit to remaining categories until all six were filled, at which
            point their email became inactive for uploads. This prevented double entries while still
            allowing creators to participate fully.
          </p>
          <p>
            Getting this logic right on paper, before touching any UI, saved a lot of back-and-forth
            with the developers later.
          </p>
        </div>
      </div>


      <hr className="mx-6 mb-16 border-[#1f1f1f] md:mx-14 lg:mx-20" />

      {/* ── Upload flow ── */}
      <div className="px-6 pb-6 md:px-14 lg:px-20">
        <h2 className="font-inter text-[1.1rem] font-light text-white mb-6 tracking-tight">The Submission Experience</h2>
        <div className="space-y-4 font-helvetica text-[15px] leading-[1.8] text-[#b8b8b8]">
          <p>
            The six categories each had their own entry point. A creator landing on the site needed to
            immediately understand: what they&apos;re entering, what&apos;s required, and how to know if
            they&apos;ve already submitted.
          </p>
          <p>
            The design had to handle two states clearly: first-time visitor and returning submitter.
            For returning users, their progress across categories needed to be visible at a glance
            so they could pick up where they left off without confusion.
          </p>
        </div>
      </div>

      <div className="mb-12 px-6 md:px-14 lg:px-20">
        <img
          src="/participateform.png"
          alt="CerAwards submission form"
          className="w-full h-auto rounded-lg"
        />
      </div>

      {/* ── Multiple categories ── */}
      <div className="px-6 pb-6 md:px-14 lg:px-20">
        <h2 className="font-inter text-[1.1rem] font-light text-white mb-6 tracking-tight">Six Categories, One Creator</h2>
        <div className="space-y-4 font-helvetica text-[15px] leading-[1.8] text-[#b8b8b8]">
          <p>
            One of the more nuanced parts of the submission design was handling multiple category entries
            from the same creator. A creator could enter all six categories, but each submission was
            independent, with its own upload and confirmation.
          </p>
          <p>
            The interface needed to show which categories were already entered, which were still open,
            and make it easy to come back and complete the remaining ones. Progress had to feel clear
            without adding friction to the first-time experience.
          </p>
        </div>
      </div>

      <div className="mb-12 px-6 md:px-14 lg:px-20">
        <img
          src="/multiplecat.png"
          alt="CerAwards — multiple category selection"
          className="w-full h-auto rounded-lg"
        />
      </div>

      <hr className="mx-6 mb-16 border-[#1f1f1f] md:mx-14 lg:mx-20" />

      {/* ── Voting experience ── */}
      <div className="px-6 pb-6 md:px-14 lg:px-20">
        <h2 className="font-inter text-[1.1rem] font-light text-white mb-6 tracking-tight">The Voting Experience</h2>
        <div className="space-y-4 font-helvetica text-[15px] leading-[1.8] text-[#b8b8b8]">
          <p>
            The public voting side was a different challenge. This was the high-traffic surface.
            68,000+ votes came in over the campaign period. The interface needed to be fast to scan,
            easy to act on, and impossible to game.
          </p>
          <p>
            Each entry was presented as a card with the creator handle, category, and content itself. Voting was one tap. Confirmation was immediate.
            The experience was designed to feel light, not like filling out a form.
          </p>
        </div>
      </div>

      <div className="mb-12 px-6 md:px-14 lg:px-20">
        <img
          src="/voting.png"
          alt="CerAwards voting interface"
          className="w-full h-auto rounded-lg"
        />
      </div>

      {/* ── Mobile ── */}
      <div className="px-6 pb-6 md:px-14 lg:px-20">
        <h2 className="font-inter text-[1.1rem] font-light text-white mb-6 tracking-tight">Mobile-First, by Default</h2>
        <div className="space-y-4 font-helvetica text-[15px] leading-[1.8] text-[#b8b8b8]">
          <p>
            The brief was explicit: the platform had to deliver a seamless mobile experience for
            thousands of Nigerian creators. Every screen was designed mobile-first. Desktop was
            the secondary consideration.
          </p>
          <p>
            That shaped decisions across the whole design: tap targets, scroll behaviour, how content
            previewed before submission, and how much information was visible without needing to scroll.
            A good desktop layout means nothing if it falls apart at 390px.
          </p>
        </div>
      </div>

      <div className="mb-12 px-6 md:px-14 lg:px-20">
        <img
          src="/preview.png"
          alt="CerAwards — mobile experience"
          className="w-full h-auto rounded-lg"
        />
      </div>

      {/* ── Final design ── */}
      <div className="px-6 pb-6 md:px-14 lg:px-20">
        <h2 className="font-inter text-[1.1rem] font-light text-white mb-6 tracking-tight">Final Platform</h2>
        <div className="space-y-4 font-helvetica text-[15px] leading-[1.8] text-[#b8b8b8]">
          <p>
            The finished platform held up. 800+ creator entries across six categories. A public vote
            that ran without issues. A Gala with 250+ guests celebrating the winners, all driven by
            what was submitted and voted on through the site.
          </p>
        </div>
      </div>

      <div className="mb-12 px-6 md:px-14 lg:px-20">
        <img
          src="/final.png"
          alt="CerAwards — the live platform"
          className="w-full h-auto rounded-lg"
        />
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
          <Link href="/work/user-interface/konga-workstation" className="font-helvetica text-[#5c5c5c] transition-colors hover:text-[#005994]">
            Konga WorkStation →
          </Link>
        </div>
      </div>

    </div>
  );
}
