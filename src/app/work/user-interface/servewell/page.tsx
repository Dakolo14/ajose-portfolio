'use client';
import Image from "next/image";
import Link from "next/link";

const ACCENT = "#FF934F";

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

function DualPlaceholder({ labelA, labelB }: { labelA: string; labelB: string }) {
  return (
    <div className="mb-12 px-6 md:px-14 lg:px-20">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="flex aspect-[4/3] items-center justify-center rounded-lg border border-dashed border-[#2e2e2e] bg-[#141414]">
          <p className="font-helvetica text-[13px] text-[#3a3a3a] px-4 text-center">{labelA}</p>
        </div>
        <div className="flex aspect-[4/3] items-center justify-center rounded-lg border border-dashed border-[#2e2e2e] bg-[#141414]">
          <p className="font-helvetica text-[13px] text-[#3a3a3a] px-4 text-center">{labelB}</p>
        </div>
      </div>
    </div>
  );
}

function Fig({ src, alt, caption }: { src: string; alt: string; caption?: string }) {
  return (
    <div className="mb-12 px-6 md:px-14 lg:px-20">
      <figure>
        <div className="relative w-full aspect-[1336/1002] overflow-hidden rounded-lg">
          <Image src={src} alt={alt} fill className="object-cover" sizes="(max-width: 768px) 100vw, 90vw" />
        </div>
        {caption && (
          <figcaption className="mt-4 font-helvetica text-[13px] leading-relaxed text-[#5c5c5c] text-center">
            {caption}
          </figcaption>
        )}
      </figure>
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <p className="font-helvetica text-[11px] font-semibold uppercase tracking-widest text-[#6a6a6a] mb-6">{children}</p>;
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return <h2 className="font-inter text-[1.1rem] font-light text-white mb-6 tracking-tight">{children}</h2>;
}

function Body({ children }: { children: React.ReactNode }) {
  return <div className="space-y-4 font-helvetica text-[15px] leading-[1.8] text-[#b8b8b8]">{children}</div>;
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <p className="font-inter text-[1.75rem] font-light text-white">{value}</p>
      <p className="font-helvetica mt-1 text-[13px] leading-snug text-[#5c5c5c]">{label}</p>
    </div>
  );
}

function Challenge({ num, title, children }: { num: string; title: string; children: React.ReactNode }) {
  return (
    <div className="border-t border-[#1f1f1f] pt-6 pb-2">
      <p className="font-helvetica text-[11px] font-semibold uppercase tracking-widest text-[#3a3a3a] mb-2">{num}</p>
      <h3 className="font-inter text-[1rem] font-light text-white mb-3 tracking-tight">{title}</h3>
      <Body>{children}</Body>
    </div>
  );
}

export default function ServeWellProject() {
  return (
    <div className="min-h-screen text-[#ededed]">

      {/* ── Back ── */}
      <div className="px-6 py-4 pb-0 md:px-6 lg:px-8">
        <Link href="/" className="font-helvetica flex items-center gap-1.5 text-[13px] text-[#eeeeee] transition-colors hover:text-[#a8a8a8] w-fit">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M9 2L4 7l5 5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
          Back
        </Link>
      </div>

      {/* ── Hero ── */}
      <div className="mt-4 w-full overflow-hidden">
        <div className="relative w-full aspect-[4/1] max-h-[72vh] flex items-center justify-center bg-[#141414] border-y border-dashed border-[#2e2e2e]">
          <p className="font-helvetica text-[13px] text-[#3a3a3a]">Hero image — Servewell platform overview</p>
        </div>
      </div>

      {/* ── Header ── */}
      <div className="px-6 pt-10 pb-0 md:px-14 lg:px-20">
        <h1 className="font-inter text-[1.75rem] font-light leading-snug tracking-tight text-white md:text-[2.25rem] lg:text-[2.75rem]">
          Servewell
        </h1>
        <p className="font-helvetica mt-3 text-[15px] text-[#6a6a6a]">
          Designing a dual-surface platform: a consumer booking experience and a full admin dashboard for hotel operators.
        </p>

        <div className="mt-6 flex flex-col gap-6 sm:flex-row sm:flex-wrap sm:gap-14">
          {[
            { label: "Timeline", value: "2024 — 2025" },
            { label: "Location", value: "Lagos, Nigeria" },
            { label: "Role", value: "Product Designer" },
            { label: "Surfaces", value: "Web · Mobile · Dashboard" },
          ].map(({ label, value }) => (
            <div key={label} className="flex items-start gap-2">
              <CalendarIcon />
              <div>
                <p className="font-helvetica text-[11px] font-semibold uppercase tracking-widest text-[#6a6a6a]">{label}</p>
                <p className="font-helvetica mt-1 text-[13px] leading-snug text-[#c0c0c0]">{value}</p>
              </div>
            </div>
          ))}
        </div>
        <hr className="mt-8 border-[#222]" />
      </div>

      {/* ── Intro ── */}
      <div className="px-6 py-12 md:px-14 lg:px-20">
        <SectionLabel>One product, two very different users</SectionLabel>
        <Body>
          <p>
            If you&apos;d like to learn more,{" "}
            <Link href="/" className="text-[#ededed] underline underline-offset-2 transition-colors" style={{ color: ACCENT }}>please get in touch</Link>.
          </p>
          <p>
            Servewell is a platform that lets hotels in Nigeria sell their amenities (pools, gyms, spas,
            restaurants) as day-pass products to guests who aren&apos;t staying overnight. Think of it as
            unlocking the full hotel experience without booking a room.
          </p>
          <p>
            The challenge was building this coherently across two surfaces that have almost nothing in common:
            a sleek consumer marketplace where guests discover and book experiences, and a dense admin dashboard
            where hotel operators manage their entire operation day-to-day.
          </p>
        </Body>
      </div>

      <Placeholder label="Image — Platform overview: consumer + admin side by side" />

      {/* ── Problem ── */}
      <div className="px-6 pb-6 md:px-14 lg:px-20">
        <SectionLabel>The Problem</SectionLabel>
        <SectionHeading>Hotels were losing revenue to friction</SectionHeading>
        <Body>
          <p>
            Before Servewell, a hotel guest wanting to use the pool at a nearby property had no clean way
            to do it. No booking flow, no pricing clarity, no confirmation. Hotels, meanwhile, had no system
            to manage those bookings, track who checked in, or understand their revenue across amenities.
          </p>
          <p>
            The opportunity was clear. The design problem was harder: how do you build a product that satisfies
            a first-time mobile user booking a ₦10,000 pool pass and a hotel manager processing 500+ reservations
            in a week?
          </p>
        </Body>
      </div>

      {/* ── Stats ── */}
      <div className="px-6 pb-16 md:px-14 lg:px-20">
        <div className="grid grid-cols-2 gap-y-10 gap-x-8 sm:grid-cols-4">
          <Stat value="534" label="Reservations tracked in one hotel account" />
          <Stat value="₦702k" label="Total revenue visible at a glance on overview" />
          <Stat value="1,500+" label="Customers per hotel profile managed" />
          <Stat value="3" label="Core product categories: gym, pool, spa" />
        </div>
      </div>

      <hr className="mx-6 mb-16 border-[#1f1f1f] md:mx-14 lg:mx-20" />

      {/* ── Personas ── */}
      <div className="px-6 pb-6 md:px-14 lg:px-20">
        <SectionLabel>User Personas</SectionLabel>
        <SectionHeading>Two users. Completely different jobs to be done.</SectionHeading>
      </div>

      <DualPlaceholder
        labelA="Persona A — Consumer: first-time mobile user booking a day pass"
        labelB="Persona B — Hotel operator managing reservations, products, revenue"
      />

      <hr className="mx-6 mb-16 border-[#1f1f1f] md:mx-14 lg:mx-20" />

      {/* ── Challenges ── */}
      <div className="px-6 pb-6 md:px-14 lg:px-20">
        <SectionLabel>Design Challenges</SectionLabel>
        <SectionHeading>What made this hard</SectionHeading>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { num: "01", title: "Dual-surface coherence", body: "The dashboard and the consumer app needed to feel like the same product while solving completely different problems. Shared design language, different layout logic." },
            { num: "02", title: "Information density vs. clarity", body: "The admin dashboard needed to surface 500+ reservations, customer data, revenue stats, and product management without overwhelming the operator at first glance." },
            { num: "03", title: "Mobile-first booking on consumer side", body: "Nigerian consumers primarily browse on mobile. Every booking flow, product card, and hotel profile had to work perfectly at narrow widths before desktop was considered." },
            { num: "04", title: "Product configurability for hotels", body: "Hotels needed to create products with optional add-ons (brunch packages, drinks), set pricing, manage images, and describe their experience, all from a profile they control." },
          ].map(({ num, title, body }) => (
            <div key={num} className="rounded-lg border border-[#1f1f1f] bg-[#111] p-6">
              <p className="font-helvetica text-[11px] font-semibold uppercase tracking-widest text-[#3a3a3a] mb-3">{num}</p>
              <p className="font-inter text-[0.95rem] font-light text-white mb-3 tracking-tight">{title}</p>
              <p className="font-helvetica text-[14px] leading-[1.7] text-[#909090]">{body}</p>
            </div>
          ))}
        </div>
      </div>

      <hr className="mx-6 mb-16 border-[#1f1f1f] md:mx-14 lg:mx-20" />

      {/* ── Solutions ── */}
      <div className="px-6 pb-6 md:px-14 lg:px-20">
        <SectionLabel>Design Solutions</SectionLabel>
        <SectionHeading>How each challenge was solved</SectionHeading>
      </div>

      <div className="px-6 pb-6 md:px-14 lg:px-20">
        <h3 className="font-inter text-[1rem] font-light text-white mb-4 tracking-tight">Overview dashboard as command center</h3>
        <Body>
          <p>
            The Overview page leads with a hotel hero banner and calendar side-by-side, giving operators an
            immediate visual anchor before diving into stats. Four metric cards (reservations, guests, cancelled,
            revenue) establish the health of the business before the customer table appears below. The layout
            is scannable top-to-bottom: context → numbers → detail.
          </p>
        </Body>
      </div>
      <Placeholder label="Image — Overview dashboard: hero banner, calendar, metric cards" />

      <div className="px-6 pb-6 md:px-14 lg:px-20">
        <h3 className="font-inter text-[1rem] font-light text-white mb-4 tracking-tight">Tabbed filtering on the Reservations page</h3>
        <Body>
          <p>
            With 1,500+ customers, status becomes the primary navigational axis. The Reservations page uses
            four tabs (All, Checked-In, Not-Checked-In, Expired) so operators can immediately triage the
            list that matters right now. No search required for common workflows; it&apos;s there when needed.
          </p>
        </Body>
      </div>
      <Placeholder label="Image — Reservations page with tabbed status filters" />

      <div className="px-6 pb-6 md:px-14 lg:px-20">
        <h3 className="font-inter text-[1rem] font-light text-white mb-4 tracking-tight">Profile pages as hotel storefronts</h3>
        <Body>
          <p>
            The Profile section doubles as what guests see and what operators manage. Five tabs (About,
            Products, Photos, Policy, Review) give hotels structured control over their listing. The Products
            tab lets operators configure individual amenity offerings with descriptions, add-on packages, and
            imagery, all in a card-based layout.
          </p>
        </Body>
      </div>
      <Placeholder label="Image — Profile tabs: About, Products, Photos, Policy, Review" />

      <div className="px-6 pb-6 md:px-14 lg:px-20">
        <h3 className="font-inter text-[1rem] font-light text-white mb-4 tracking-tight">Consumer side built bottom-up on mobile</h3>
        <Body>
          <p>
            The homepage, hotel profile, and product description sheet were all designed at 390px first.
            The product sheet (hero image, scarcity indicator, add-on selection, quantity counter) functions
            as a lightweight native-app-style bottom sheet rather than a web form.
          </p>
        </Body>
      </div>
      <Placeholder label="Image — Mobile product sheet: hero, scarcity signal, add-ons, CTA" />

      <div className="px-6 pb-6 md:px-14 lg:px-20">
        <h3 className="font-inter text-[1rem] font-light text-white mb-4 tracking-tight">Gamification through hotel levels</h3>
        <Body>
          <p>
            Hotel accounts are assigned a progression level (e.g. &quot;Level 3&quot; visible in the top nav). This
            creates an incentive system that motivates hotels to complete their profiles, publish products,
            and accumulate bookings, building platform quality through operator motivation rather than
            enforcement.
          </p>
        </Body>
      </div>
      <Placeholder label="Image — Hotel level indicator in admin nav" />

      <hr className="mx-6 mb-16 border-[#1f1f1f] md:mx-14 lg:mx-20" />

      {/* ── Key Screens ── */}
      <div className="px-6 pb-10 md:px-14 lg:px-20">
        <SectionLabel>The Key Screens</SectionLabel>
        <SectionHeading>Key screens and their design logic</SectionHeading>
      </div>

      {[
        {
          title: "Overview Dashboard",
          body: "The command center. Revenue trends, calendar availability, and top-level metrics in a single scrollable view. The hotel banner acts as visual grounding before the numbers appear. Designed so an operator can assess the day's status within 5 seconds of opening the app.",
          placeholder: "Image — Overview dashboard full screen",
        },
        {
          title: "Reservations Page",
          body: `A data table designed for real workload: sortable columns, status badges (Checked In, Not Checked In, Expired), and search by name or client ID. The "+1500" count badge signals scale without requiring the operator to paginate to feel it. Filter tabs reduce cognitive load for the most common workflows.`,
          placeholder: "Image — Reservations page with data table and status tabs",
        },
        {
          title: "Profile · Products Tab",
          body: `Each amenity category gets its own product card with a hero image, unique product count, description, and a "View Products" CTA. The orange "+" button enables quick product creation in context. Empty-state guidance nudges hotels that haven't configured products yet without blocking the rest of the UI.`,
          placeholder: "Image — Profile Products tab with amenity cards",
        },
        {
          title: "Profile · Photos Tab",
          body: "Hotel images and product images are separated into two distinct sections. Operators need to manage them independently. A contextual Upload button and overlapping avatar stacks visible on product cards hint at collaborative image management across teams.",
          placeholder: "Image — Profile Photos tab",
        },
        {
          title: "Profile · About Tab",
          body: "A structured content form: description, facility type (adult only / family friendly), available amenities as visual pills, and a step-by-step check-in guide. Clear information architecture so guests know exactly what they're booking into before they commit.",
          placeholder: "Image — Profile About tab with amenity pills and check-in guide",
        },
        {
          title: "Consumer Homepage (Mobile)",
          body: "Explore by amenity type, explore by city, best deals, popular hotels. A familiar discovery pattern tailored for Nigeria's top cities (Lagos, Abuja, Benin, Ibadan, Ilesha). The search bar filters by city and date for same-day daycation planning.",
          placeholder: "Image — Consumer mobile homepage",
        },
        {
          title: "Hotel Detail Page (Mobile)",
          body: "A product-led hotel profile with overview stats, product cards with scarcity signals, and a \"Pools You May Like\" recommendation rail. Designed to convert a browse into a booking in under 3 taps. The review score, amenity icons, and family-friendly tag all appear above the fold on mobile.",
          placeholder: "Image — Hotel detail page on mobile",
        },
        {
          title: "Product Description Sheet (Mobile)",
          body: `A modal-style sheet with a full-bleed hero, product name, pricing, add-on selections (Small Bites, Drinks, Meals, each required or optional), quantity control, and a clear "Add ₦35,000" CTA. No ambiguity about what you're paying or what you're getting. Scarcity messaging above the fold creates urgency without dark patterns.`,
          placeholder: "Image — Product description sheet on mobile",
        },
      ].map(({ title, body, placeholder }) => (
        <div key={title}>
          <div className="px-6 pb-6 md:px-14 lg:px-20">
            <h3 className="font-inter text-[1rem] font-light text-white mb-4 tracking-tight">{title}</h3>
            <Body><p>{body}</p></Body>
          </div>
          <Placeholder label={placeholder} />
        </div>
      ))}

      <hr className="mx-6 mb-16 border-[#1f1f1f] md:mx-14 lg:mx-20" />

      {/* ── Design System ── */}
      <div className="px-6 pb-6 md:px-14 lg:px-20">
        <SectionLabel>Design System</SectionLabel>
        <SectionHeading>The visual language</SectionHeading>
        <Body>
          <p>
            Servewell&apos;s design language is defined by its orange, a warm, energetic primary colour that
            carries trust without being aggressive. White surfaces, clean typography, and generous card
            spacing keep the dashboard readable under pressure. On mobile, the same orange becomes a booking
            CTA, a scarcity badge, and a filter button.
          </p>
          <p>
            The same sidebar navigation structure appears consistently across the admin (Overview, Profile,
            Calendar, Reservations, Reviews, Settings), ensuring operators always know where they are.
            Iconography is minimal and functional, never decorative.
          </p>
        </Body>
      </div>
      <Placeholder label="Image — Design system: colour tokens, typography, components" />

      <hr className="mx-6 mb-16 border-[#1f1f1f] md:mx-14 lg:mx-20" />

      {/* ── Outcomes ── */}
      <div className="px-6 pb-10 md:px-14 lg:px-20">
        <SectionLabel>Outcomes</SectionLabel>
        <SectionHeading>What the design achieved</SectionHeading>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          {[
            { title: "Full hotel lifecycle in one dashboard", body: "From profile setup to product creation to reservation management. Operators never leave the platform to complete a workflow." },
            { title: "Seamless mobile booking in under 3 taps", body: "Discover, select, and confirm a day pass without a registration wall, complex forms, or desktop redirects." },
            { title: "Revenue visibility for operators", body: "Real-time metrics (total reservations, guests, cancellations, revenue) surfaced on the overview without any extra navigation." },
          ].map(({ title, body }) => (
            <div key={title} className="border-t border-[#1f1f1f] pt-6">
              <p className="font-inter text-[0.95rem] font-light text-white mb-3">{title}</p>
              <p className="font-helvetica text-[14px] leading-[1.7] text-[#909090]">{body}</p>
            </div>
          ))}
        </div>
      </div>

      <hr className="mx-6 mb-16 border-[#1f1f1f] md:mx-14 lg:mx-20" />

      {/* ── Reflection ── */}
      <div className="px-6 pb-6 md:px-14 lg:px-20">
        <SectionLabel>Reflection</SectionLabel>
        <SectionHeading>What I learned</SectionHeading>
        <Body>
          <p>
            The hardest part of this project wasn&apos;t any single screen. It was maintaining coherence
            across two surfaces with fundamentally different users, devices, and jobs to be done. The admin
            dashboard demanded density and control. The consumer app demanded simplicity and speed. The same
            brand had to work in both contexts without feeling split.
          </p>
          <p>
            The solution was a shared visual language (orange, clean cards, consistent status patterns)
            applied with different layout logic depending on the surface. On desktop admin, that means
            scannable data tables and sidebar navigation. On mobile consumer, it means full-bleed imagery,
            clear pricing, and one-tap actions.
          </p>
          <p>
            Designing the dashboard also reshaped how I think about information architecture under pressure.
            Power users don&apos;t need simpler tools. They need better-organised ones. The reservations page
            isn&apos;t simple. The right tabs, the right columns, and the right status colours are what makes
            500 rows manageable.
          </p>
        </Body>
      </div>

      {/* ── Footer ── */}
      <div className="px-6 pb-20 pt-8 md:px-14 lg:px-20">
        <hr className="mb-10 border-[#1f1f1f]" />
        <p className="font-helvetica text-[15px] text-[#5c5c5c]">Thanks for reading.</p>
        <p className="font-helvetica mt-2 text-[15px] text-[#5c5c5c]">
          Questions about this project?{" "}
          <Link href="/" className="text-[#c0c0c0] underline underline-offset-2 transition-colors hover:text-[#FF934F]">
            Get in touch
          </Link>.
        </p>
        <div className="mt-8 flex flex-wrap gap-8 text-sm">
          <Link href="/work/user-interface/payfly-ecosystem" className="font-helvetica text-[#5c5c5c] transition-colors hover:text-[#FF934F]">
            ← Payfly Ecosystem
          </Link>
        </div>
      </div>

    </div>
  );
}
