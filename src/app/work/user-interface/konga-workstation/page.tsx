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
          <Stat value="20+" label="OEM Partner Brands" />
        </div>
      </div>

      <hr className="mx-6 mb-16 border-[#1f1f1f] md:mx-14 lg:mx-20" />

      {/* ══ The Konga Group Redesign ══ */}
      <div className="px-6 pb-6 md:px-14 lg:px-20">
        <SectionHeading>The Konga Group Redesign: Designing for Scale</SectionHeading>
        <Body>
          <p>
            Working on a platform at the scale of Konga reinforces how structural design decisions directly influence both core business outcomes and the daily user experience. As part of a larger cross-functional team, my role centered on redesigning specific, high-impact sections of the platform while ensuring strict alignment with established brand guidelines and maintaining consistency across the entire user journey.
          </p>
          <p>
            A significant part of this process required a data-driven e-commerce strategy, looking closely at how incremental UX improvements and UI optimizations could yield compounding results. The focus was on identifying marginal gains within the interface that would directly support broader revenue growth, enhance conversion efficiency, and elevate overall customer satisfaction without fragmenting the established visual identity.
          </p>
        </Body>
      </div>

      <div className="mb-12 px-6 md:px-14 lg:px-20">
        <div className="w-full overflow-hidden rounded-xl border border-[#222] bg-[#141414]">
          <iframe 
            width="100%" 
            height="750" 
            src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2F3L9Lo10FyTIEug7DmtOWnB%2FKonga-Mobile-App-Redesign%3Fnode-id%3D376-67462%26viewport%3D-1020%252C51%252C0.33%26t%3DoY51VD67pBhteZFM-1%26scaling%3Dscale-down%26content-scaling%3Dfixed%26starting-point-node-id%3D376%253A67792%26page-id%3D376%253A67461" 
            allowFullScreen
            style={{ border: 'none' }}
          ></iframe>
        </div>
      </div>

      <hr className="mx-6 mb-16 border-[#1f1f1f] md:mx-14 lg:mx-20" />

      {/* ══ Brands I've Worked With & Shop-in-Shop Strategy ══ */}
      <div className="px-6 pb-16 md:px-14 lg:px-20">
        <SectionHeading>Brands I&apos;ve Worked With — Shop in Shop Strategy</SectionHeading>
        <Body>
          <p>
            As part of my work at Konga Group, I led the design and digital storefront development for <strong className="text-white">Shop-in-Shop</strong> pages across major global and regional OEM partners.
          </p>
          <p>
            Working directly with brand managers and growth leads, I strategized visual merchandising, layout architectures, and promotional UX aimed at maximizing brand visibility, customer engagement, and revenue performance across the Konga e-commerce ecosystem.
          </p>
        </Body>

        {/* Brand Cards Grid with Larger Logos and Live Storefront Buttons */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            {
              name: "Samsung",
              category: "Consumer Electronics",
              url: "https://www.konga.com/content/samsungsis",
              logoSrc: "/logos/samsung.png"
            },
            {
              name: "HP",
              category: "Computing & Laptops",
              url: "https://www.konga.com/content/hp-store",
              logoSrc: "/logos/hp.png"
            },
            {
              name: "ASUS",
              category: "Computing & Laptops",
              url: "https://www.konga.com/content/asus-store",
              logoSrc: "/logos/asus.png"
            },
            {
              name: "Orca",
              category: "Furniture & Living",
              url: "https://www.konga.com/content/orca-mall",
              logoSrc: "/logos/orca.png"
            },
            {
              name: "Mikano",
              category: "Power & Industrial",
              url: "https://www.konga.com/content/mikano",
              logoSrc: "/logos/mikano.png"
            },
            {
              name: "CeraVe",
              category: "Skincare & Beauty",
              url: "https://www.konga.com/content/cerave",
              logoSrc: "/logos/cerave.png"
            },
            {
              name: "La Roche Posay",
              category: "Skincare & Beauty",
              url: "https://www.konga.com/content/la-roche-posay",
              logoSrc: "/logos/larocheposay.png"
            },
            {
              name: "LG",
              category: "Consumer Electronics",
              url: "https://www.konga.com/content/lgstore",
              logoSrc: "/logos/lg.png"
            },
          ].map(({ name, category, url, logoSrc }) => (
            <div
              key={name}
              className="group flex flex-col justify-between p-6 rounded-xl border border-[#262626] bg-[#141414] transition-all duration-300 hover:border-[#383838] hover:bg-[#1a1a1a] hover:-translate-y-1 hover:shadow-xl hover:shadow-black/60"
            >
              <div>
                {/* Logo Header Container */}
                <div className="h-20 w-full flex items-center justify-center rounded-lg bg-[#8c8c8c] mb-4 p-4 shadow-inner">
                  <img src={logoSrc} alt={`${name} logo`} className="h-full w-auto object-contain max-w-[120px]" />
                </div>

                <h3 className="font-inter text-sm font-semibold text-white group-hover:text-[#ED017F] transition-colors mb-1">
                  {name}
                </h3>

                <p className="font-helvetica text-xs text-[#6a6a6a] mb-5">
                  {category}
                </p>
              </div>

              <a
                href={url}
                target={url.startsWith("http") ? "_blank" : "_self"}
                rel="noopener noreferrer"
                className="inline-flex items-center justify-between w-full px-3.5 py-2.5 rounded-lg bg-[#1e1e1e] border border-[#2a2a2a] text-xs font-medium text-[#c0c0c0] hover:text-white hover:bg-[#252525] hover:border-[#383838] transition-all duration-300 group/btn"
              >
                <span>Visit Storefront</span>
                <span className="transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5">
                  ↗
                </span>
              </a>
            </div>
          ))}
        </div>

        {/* Strategic Impact Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-5 rounded-xl border border-[#222] bg-[#141414]/80 hover:border-[#333] transition-colors">
            <h3 className="font-inter text-sm font-medium text-white mb-2 flex items-center gap-2">
              <span>🛍️</span> Shop-in-Shop Storefronts
            </h3>
            <p className="font-helvetica text-xs text-[#9a9a9a] leading-relaxed">
              Created dedicated digital hubs for flagship partner brands, giving them a distinct brand identity within the core marketplace.
            </p>
          </div>
          <div className="p-5 rounded-xl border border-[#222] bg-[#141414]/80 hover:border-[#333] transition-colors">
            <h3 className="font-inter text-sm font-medium text-white mb-2 flex items-center gap-2">
              <span>📈</span> Revenue & Growth Strategy
            </h3>
            <p className="font-helvetica text-xs text-[#9a9a9a] leading-relaxed">
              Partnered with brand marketing leads to align UX layouts with product launches, flash sales, and targeted bundle offers to drive conversions.
            </p>
          </div>
          <div className="p-5 rounded-xl border border-[#222] bg-[#141414]/80 hover:border-[#333] transition-colors">
            <h3 className="font-inter text-sm font-medium text-white mb-2 flex items-center gap-2">
              <span>🎨</span> Brand Governance & UX
            </h3>
            <p className="font-helvetica text-xs text-[#9a9a9a] leading-relaxed">
              Ensured strict compliance with international brand guidelines while maintaining fast load times, responsive UI, and seamless checkout flows.
            </p>
          </div>
        </div>
      </div>

      <hr className="mx-6 mb-16 border-[#1f1f1f] md:mx-14 lg:mx-20" />

      {/* ══ Product Card Optimization ══ */}
      <div className="px-6 pb-6 md:px-14 lg:px-20">
        <SectionHeading>Product Card Optimization: The Pre-Order Flow</SectionHeading>
        <Body>
          <p>
            <strong className="text-white">The Challenge:</strong> The existing pre-order cards lacked the necessary transparency for high-value transactions. Truncated titles left users guessing about specific models, while a singular price point failed to differentiate between a deposit and the full retail cost. Furthermore, a generic &quot;Add to Cart&quot; button misrepresented the action.
          </p>
          <p>
            <strong className="text-white">The Solution:</strong> I redesigned the component to prioritize data transparency and reduce cognitive load. I introduced an expanded title layout for clarity, added a secondary price token to clearly display the full cost versus the upfront deposit, and changed the CTA to a decisive &quot;Preorder Now.&quot; I also cleaned up visual clutter by removing zero-state reviews and redundant badges, ensuring the user&apos;s focus remains on the core decision-making details.
          </p>
        </Body>
      </div>

      <div className="mb-12 px-6 md:px-14 lg:px-20">
        <img src="/preorder-solution.png" alt="Pre-order flow solution" className="w-full h-auto rounded-xl border border-[#222]" />
      </div>

      <hr className="mx-6 mb-16 border-[#1f1f1f] md:mx-14 lg:mx-20" />

      {/* ══ Optimizing the Homepage for Retention ══ */}
      <div className="px-6 pb-6 md:px-14 lg:px-20">
        <SectionHeading>Optimizing the Homepage for Retention</SectionHeading>
        <Body>
          <p>
            The homepage is the most valuable real estate on the platform. For this phase of the Konga rework, my primary objective was to increase user retention and establish a definitive visual hierarchy across all devices. Recognizing that small UI tweaks often lead to significant behavioral shifts, I implemented a series of strategic adjustments focused on user flow and product discovery:
          </p>
          <ul className="list-disc pl-5 space-y-4">
            <li>
              <strong className="text-white">Mobile View Optimization:</strong> Previously, the mobile carousel displayed only 1.2 products at a time, creating a stagnant scrolling experience. I redesigned this layout to a 2.5 product view. By showing two full items and a deliberate &quot;peek&quot; of the third, the interface instantly signals off-screen content, naturally encouraging horizontal scrolling and increasing engagement.
            </li>
            <li>
              <strong className="text-white">Visual Consistency &amp; Hierarchy:</strong> To reduce cognitive load and improve scannability, I introduced a unified header system utilizing the brand&apos;s deep magenta. Whether a user is browsing &quot;Today&apos;s Deals&quot; or &quot;Official Stores,&quot; the visual language is now uniform and predictable.
            </li>
            <li>
              <strong className="text-white">Strategic OEM Partner Visibility:</strong> I built a dedicated section for OEM-targeted stores. This provided premium, structured visibility to key brand partners—such as Cerave and Midea Group—without disrupting the organic user flow or cluttering the primary feed.
            </li>
            <li>
              <strong className="text-white">Frictionless Navigation:</strong> Long-scrolling e-commerce pages can become tedious, especially on mobile. To solve this, I redesigned the &quot;Back to Top&quot; component to be more visually prominent, ensuring users can instantly return to the main navigation without friction.
            </li>
          </ul>
        </Body>
      </div>

      <div className="mb-12 px-6 md:px-14 lg:px-20">
        <video 
          src="/konga-rework.mp4" 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-auto rounded-xl border border-[#222]" 
        />
      </div>

      <hr className="mx-6 mb-16 border-[#1f1f1f] md:mx-14 lg:mx-20" />

      {/* ══ Recognition & Certification ══ */}
      <div className="px-6 pb-6 md:px-14 lg:px-20">
        <SectionHeading>Recognition & Certification</SectionHeading>
        <Body>
          <p>
            My contributions to scaling the Konga ecosystem and optimizing these core workflows were recognized internally. Below is the certification awarded for exceptional work and dedication to the platform&apos;s growth.
          </p>
        </Body>
      </div>

      <div className="mb-12 px-6 md:px-14 lg:px-20">
        <img src="/kongacertificate.jpeg" alt="Konga Certification for Exceptional Work" className="w-full h-auto rounded-xl border border-[#222]" />
      </div>

      <hr className="mx-6 mb-16 border-[#1f1f1f] md:mx-14 lg:mx-20" />

      {/* ── Konga Proposed Features ── */}
      <div className="px-6 pb-6 md:px-14 lg:px-20">
        <SectionHeading>Konga Proposed Features</SectionHeading>
        <Body>
          <p>
            To further bridge the gap between traditional Nigerian commerce and the digital experience, I proposed and designed a &quot;Negotiate&quot; feature. This concept allows users to make offers on specific items, bringing the familiar haggling experience of local markets into Konga&apos;s e-commerce ecosystem, with the goal of increasing engagement and potential conversions on high-ticket items.
          </p>
        </Body>
      </div>

      <div className="mb-12 px-6 md:px-14 lg:px-20">
        <div className="w-full overflow-hidden rounded-xl border border-[#222] bg-[#141414]">
          <iframe 
            width="100%" 
            height="750" 
            src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2F3L9Lo10FyTIEug7DmtOWnB%2FKonga-Mobile-App-Redesign%3Fnode-id%3D565-32605%26viewport%3D88%252C-173%252C0.33%26t%3DDFmJtlxe5p3vqxzd-1%26scaling%3Dscale-down-width%26content-scaling%3Dfixed%26page-id%3D565%253A32604" 
            allowFullScreen
            style={{ border: 'none' }}
          ></iframe>
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
