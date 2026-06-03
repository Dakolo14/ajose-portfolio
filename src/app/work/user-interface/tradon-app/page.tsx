'use client';
import Link from "next/link";

const ACCENT = "#22c55e";

function CalendarIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0 mt-[2px]">
      <rect x="1" y="2" width="12" height="11" rx="1.5" stroke="#6a6a6a" strokeWidth="1.2"/>
      <path d="M1 5.5h12" stroke="#6a6a6a" strokeWidth="1.2"/>
      <path d="M4.5 1v2M9.5 1v2" stroke="#6a6a6a" strokeWidth="1.2" strokeLinecap="round"/>
    </svg>
  );
}

function P({ label, aspect = "16/9" }: { label: string; aspect?: string }) {
  return (
    <div className="mb-12 px-6 md:px-14 lg:px-20">
      <div className="flex w-full items-center justify-center rounded-lg border border-dashed border-[#2e2e2e] bg-[#141414]" style={{ aspectRatio: aspect }}>
        <p className="font-helvetica text-[13px] text-[#3a3a3a] px-4 text-center">{label}</p>
      </div>
    </div>
  );
}

function TriplePlaceholder({ a, b, c }: { a: string; b: string; c: string }) {
  return (
    <div className="mb-12 px-6 md:px-14 lg:px-20">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {[a, b, c].map((label) => (
          <div key={label} className="flex aspect-[3/4] items-center justify-center rounded-lg border border-dashed border-[#2e2e2e] bg-[#141414]">
            <p className="font-helvetica text-[13px] text-[#3a3a3a] px-4 text-center">{label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <p className="font-helvetica text-[11px] font-semibold uppercase tracking-widest text-[#6a6a6a] mb-4">{children}</p>;
}

function H2({ children }: { children: React.ReactNode }) {
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

export default function TradonAppProject() {
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
          <p className="font-helvetica text-[13px] text-[#3a3a3a]">Hero image — Tradon platform overview</p>
        </div>
      </div>

      {/* ── Header ── */}
      <div className="px-6 pt-10 pb-0 md:px-14 lg:px-20">
        <h1 className="font-inter text-[1.75rem] font-light leading-snug tracking-tight text-white md:text-[2.25rem] lg:text-[2.75rem]">
          Tradon — Distribution Management System
        </h1>
        <p className="font-helvetica mt-3 text-[15px] text-[#6a6a6a]">
          One product. Three very different users. One broken industry.
        </p>

        <div className="mt-6 flex flex-col gap-6 sm:flex-row sm:flex-wrap sm:gap-14">
          {[
            { label: "Timeline", value: "January 2026 — Ongoing" },
            { label: "Location", value: "Lagos, Nigeria (Global Scope)" },
            { label: "Role", value: "Founder · Product Designer · UX Strategist" },
            { label: "Surfaces", value: "Web Application · Mobile (Android-first)" },
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
        <Body>
          <p>
            If you&apos;d like to learn more,{" "}
            <Link href="/" className="text-[#ededed] underline underline-offset-2 transition-colors hover:text-[#22c55e]">please get in touch</Link>.
          </p>
          <p>
            Nigeria&apos;s FMCG industry moves billions of naira every single day. Chivita reaches Lagos from a factory
            in Ota. Indomie travels from Port Harcourt to Kano. Peak Milk lands on shelves in Accra, Cairo and
            Nairobi. And behind every single one of those journeys is a distributor network being managed almost
            entirely on spreadsheets and phone calls.
          </p>
          <p>
            Tradon was not born from a trend. It was born from a problem I witnessed directly, watching some of
            Nigeria&apos;s biggest consumer brands struggle to answer the most basic operational question: what is
            happening in my distribution network right now? The answer, in most cases, was silence.
          </p>
          <p>
            Tradon is a three-surface product. The main SaaS platform gives FMCG brand headquarters full command
            over their distribution network. The Distributor Management System gives distributors their own
            workspace to manage retailers, orders and payments. And the Retailer Platform, a white-labelled,
            fully customisable storefront, gives every retailer a branded digital ordering experience under
            their distributor&apos;s identity.
          </p>
        </Body>
      </div>

      <P label="Image — Product overview: all three surfaces side by side" aspect="16/7" />

      <hr className="mx-6 mb-16 border-[#1f1f1f] md:mx-14 lg:mx-20" />

      {/* ── Users ── */}
      <div className="px-6 pb-6 md:px-14 lg:px-20">
        <SectionLabel>The Users</SectionLabel>
        <H2>Three surfaces. Three distinct audiences. One connected system.</H2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 mb-8">
          {[
            {
              label: "Surface 1 — FMCG HQ",
              desc: "Sales Directors, Trade Marketing Managers, Finance Controllers, Field Sales Managers and the MD. Time-poor, results-driven, frustrated by the gap between what their team reports and what is actually happening on the ground.",
              color: "#22c55e",
            },
            {
              label: "Surface 2 — Distributor",
              desc: "A business owner running a distribution company. Manages their own field reps, handles credit relationships with retailers, processes dozens of orders daily. Operationally overwhelmed and technically mixed.",
              color: "#facc15",
            },
            {
              label: "Surface 3 — Retailer",
              desc: "A shop owner, from a large supermarket to a neighbourhood provision store. Mobile-first, extremely price and convenience sensitive. The less friction between them and placing an order, the better.",
              color: "#60a5fa",
            },
          ].map(({ label, desc, color }) => (
            <div key={label} className="rounded-lg border border-[#1f1f1f] bg-[#111] p-6">
              <div className="w-2 h-2 rounded-full mb-4" style={{ backgroundColor: color }} />
              <p className="font-inter text-[0.95rem] font-light text-white mb-3 tracking-tight">{label}</p>
              <p className="font-helvetica text-[14px] leading-[1.7] text-[#909090]">{desc}</p>
            </div>
          ))}
        </div>
      </div>

      <TriplePlaceholder
        a="Persona — FMCG HQ Admin"
        b="Persona — Distributor"
        c="Persona — Retailer"
      />

      <hr className="mx-6 mb-16 border-[#1f1f1f] md:mx-14 lg:mx-20" />

      {/* ── Problem ── */}
      <div className="px-6 pb-6 md:px-14 lg:px-20">
        <SectionLabel>The Problem</SectionLabel>
        <H2>The infrastructure of Nigerian FMCG is running on informal tools.</H2>
        <Body>
          <p>
            Before Tradon, a typical order journey looked like this: A retailer in Ibadan calls their
            distributor&apos;s personal number. The distributor&apos;s sales rep manually writes it in a notebook, calls
            the warehouse to check stock, and then updates a shared Excel sheet if the internet is working.
            The FMCG brand&apos;s regional manager calls the distributor at the end of the week to ask how sales
            are going. Nobody truly knows.
          </p>
          <p>This is not an edge case. This is the norm across Africa&apos;s FMCG industry.</p>
        </Body>
      </div>

      {/* Problem stats */}
      <div className="px-6 pb-12 md:px-14 lg:px-20">
        <p className="font-helvetica text-[11px] font-semibold uppercase tracking-widest text-[#6a6a6a] mb-8">What this costs — by the numbers</p>
        <div className="grid grid-cols-2 gap-y-10 gap-x-8 sm:grid-cols-4">
          <Stat value="₦M+" label="Lost annually per FMCG brand to untracked distributor debt" />
          <Stat value="4–6 hrs" label="Spent daily by sales managers manually collecting order updates" />
          <Stat value="23%" label="Average revenue gap between FMCG projections and actual sell-through" />
          <Stat value="0" label="Real-time dashboards in use at the average mid-size Nigerian FMCG before a DMS" />
        </div>
      </div>

      <P label="Image — Problem illustration: chaotic spreadsheet workflow vs clean Tradon dashboard" />

      <hr className="mx-6 mb-16 border-[#1f1f1f] md:mx-14 lg:mx-20" />

      {/* ── Challenges ── */}
      <div className="px-6 pb-6 md:px-14 lg:px-20">
        <SectionLabel>Design Challenges</SectionLabel>
        <H2>What made this hard</H2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { num: "01", title: "Three radically different users on one connected system", body: "The same underlying data needed to look completely different depending on who was looking at it. An MD needs aggregated regional performance. A distributor needs their daily order queue. A retailer needs a fast, frictionless catalogue. Designing one product that serves all three without confusing any of them required deliberate role-based experience design from day one." },
            { num: "02", title: "Building trust with users burned by software before", body: "Every FMCG company I spoke to had tried some form of software before and abandoned it. Too complex, stopped working without internet, support disappeared after onboarding, or clearly built for a different market. Trust had to be designed in, not assumed." },
            { num: "03", title: "Mobile-first on low-end Android devices", body: "Retailers and field reps in Nigeria use affordable Android phones, often with cracked screens, limited RAM and inconsistent connectivity. Every flow had to work perfectly on a ₦30,000 device before being tested on anything better." },
            { num: "04", title: "Offline-first on a platform that runs on real-time data", body: "Field reps travel roads where 4G is a luxury. A product that freezes without internet is not just annoying, it destroys adoption. Designing an experience that feels seamless regardless of connectivity required a fundamentally different approach to state and feedback." },
            { num: "05", title: "Enterprise-grade complexity simple enough for a first-time user", body: "Tradon needed to be powerful enough for Unilever Nigeria and simple enough for a small regional drinks brand onboarding their first 20 distributors. The same product. The same interface. This tension defined almost every design decision across the platform." },
          ].map(({ num, title, body }) => (
            <div key={num} className={`rounded-lg border border-[#1f1f1f] bg-[#111] p-6 ${num === "05" ? "sm:col-span-2" : ""}`}>
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
        <H2>How each challenge was solved</H2>
      </div>

      {[
        {
          num: "Solution 01",
          title: "Role-Based Experience Architecture",
          body: "Rather than building one interface with visibility toggles, Tradon was designed as three separate but connected experiences sharing one data layer. Each role has its own navigation structure, information hierarchy and primary actions. The HQ dashboard leads with macro intelligence (revenue, regional performance, rep activity). The distributor workspace leads with operational urgency (pending orders, credit alerts, deliveries). The retailer storefront leads with catalogue and speed.",
          placeholder: "Image — Three dashboard screenshots side by side: HQ / Distributor / Retailer",
        },
        {
          num: "Solution 02",
          title: "Progressive Trust Design",
          body: "The onboarding experience was designed to earn trust before asking for commitment. The first screen a new company sees is their branded workspace URL (yourbrand.tradon.app), already personalised with their company name. Before they enter a single piece of data, they already feel ownership. The setup flow is broken into five-minute steps with visible progress. Every empty state has a human explanation, not a generic 'no data found.'",
          placeholder: "Image — Onboarding flow: workspace claim → product setup → first distributor invite",
        },
        {
          num: "Solution 03",
          title: "Mobile-First Retailer Ordering",
          body: "The retailer storefront was designed at 390px first. Browse, select and order in under two minutes on a low-end Android device. Large tap targets, minimal form steps, and a persistent cart state mean partial orders are never lost. The flow was tested on 2G connections until it felt genuinely fast, not just technically functional.",
          placeholder: "Image — Retailer mobile ordering flow: catalogue → product → order confirmation",
        },
        {
          num: "Solution 04",
          title: "Offline-First Field Rep Mobile App",
          body: "The mobile app for field reps was built on a local-first data architecture. Everything the rep needs for their day is downloaded to their device at the start of each session. Orders captured, check-ins logged, shelf photos taken and forms completed are all stored locally and synced in the background. The sync status is communicated through a subtle but always-visible indicator: green for synced, amber for pending, never red unless something truly needs attention.",
          placeholder: "Image — Mobile app: route map → retailer check-in → order capture → offline indicator",
        },
        {
          num: "Solution 05",
          title: "The Executive Summary View",
          body: "The most-loved feature in user testing was the daily intelligence summary on the HQ dashboard: a single scrollable view of the previous day's total revenue, best and worst performing region, top rep, and overdue distributor debt. Every metric was chosen based on the decision it enables. The design challenge was distilling a full analytics layer into something readable in 90 seconds.",
          placeholder: "Image — Executive summary view with daily performance breakdown alongside full analytics",
        },
      ].map(({ num, title, body, placeholder }) => (
        <div key={num}>
          <div className="px-6 pb-6 md:px-14 lg:px-20">
            <p className="font-helvetica text-[11px] font-semibold uppercase tracking-widest text-[#3a3a3a] mb-2">{num}</p>
            <h3 className="font-inter text-[1rem] font-light text-white mb-4 tracking-tight">{title}</h3>
            <Body><p>{body}</p></Body>
          </div>
          <P label={placeholder} />
        </div>
      ))}

      <hr className="mx-6 mb-16 border-[#1f1f1f] md:mx-14 lg:mx-20" />

      {/* ── Key Screens ── */}
      <div className="px-6 pb-10 md:px-14 lg:px-20">
        <SectionLabel>Key Screens</SectionLabel>
        <H2>Screen breakdown</H2>
      </div>

      {[
        { num: "Screen 01", title: "FMCG HQ Main Dashboard", body: "The command centre. At a glance: today's total orders, revenue against target, active field reps, and a live regional heat map of Nigeria showing distributor activity by state. The visual hierarchy is designed for a 30-second read. The most important number is always the largest thing on the page.", placeholder: "Image — HQ main dashboard full screen" },
        { num: "Screen 02", title: "Distributor Order Management", body: "The distributor's daily workspace. Incoming orders from retailers, via the storefront and field rep capture, appear in a unified queue. Each order shows product, quantity, delivery address, payment status and credit position. One-click confirmation triggers invoicing and warehouse notification simultaneously.", placeholder: "Image — Distributor order management screen" },
        { num: "Screen 03", title: "Field Rep Live Map", body: "A real-time map showing every field rep's current location, their check-in history for the day, and their completion rate against their assigned route. Colour coding distinguishes reps who are on track, ahead, or behind. Managers can tap any rep to see their full day activity without a single phone call.", placeholder: "Image — Live map screen with rep pins and activity panel" },
        { num: "Screen 04", title: "Retailer Storefront", body: "The white-labelled retailer ordering portal. Every distributor gets a fully branded storefront with their own logo, colours and product catalogue. Retailers browse, select quantities in cartons, see their credit balance and outstanding invoices, and place orders in under two minutes. Built mobile-first, tested on low-end Android devices, functional on 2G connections.", placeholder: "Image — Retailer storefront on mobile: catalogue and order flow" },
        { num: "Screen 05", title: "Credit & Debt Control Panel", body: "Every distributor's credit limit, current balance, outstanding debt and payment history in one place. Automated reminder schedules are visible and editable. Overdue accounts are flagged with escalation status. The screen was designed to replace the most common Excel spreadsheet we found during research, almost exactly.", placeholder: "Image — Credit control panel" },
        { num: "Screen 06", title: "Promotions Engine", body: "Create, schedule and track trade promotions across the entire distributor network. Define the mechanic, eligible products, qualifying distributors, redemption cap and duration. The system enforces eligibility automatically at order placement. A live redemption tracker shows how the promotion is performing in real time.", placeholder: "Image — Promotions creation and tracking screen" },
        { num: "Screen 07", title: "Unified Order Inbox", body: "Every order from every retailer across the network, captured via the retailer storefront or by a field rep, appears in a single unified inbox. Filterable by distributor, region, product and status. Orders can be confirmed, modified or queried directly from the inbox without switching context.", placeholder: "Image — Unified order inbox view" },
        { num: "Screen 08", title: "Analytics & Reporting", body: "Sell-through by product, region, distributor and rep. Target vs actual across every dimension. Exportable reports in PDF and Excel. The analytics layer was designed with one principle: every chart should answer a question a real person in an FMCG company actually asks. No vanity metrics. No decorative data visualisation.", placeholder: "Image — Analytics screen with regional breakdown and rep performance" },
      ].map(({ num, title, body, placeholder }) => (
        <div key={num}>
          <div className="px-6 pb-6 md:px-14 lg:px-20">
            <p className="font-helvetica text-[11px] font-semibold uppercase tracking-widest text-[#3a3a3a] mb-2">{num}</p>
            <h3 className="font-inter text-[1rem] font-light text-white mb-4 tracking-tight">{title}</h3>
            <Body><p>{body}</p></Body>
          </div>
          <P label={placeholder} />
        </div>
      ))}

      <hr className="mx-6 mb-16 border-[#1f1f1f] md:mx-14 lg:mx-20" />

      {/* ── Design System ── */}
      <div className="px-6 pb-6 md:px-14 lg:px-20">
        <SectionLabel>Design System</SectionLabel>
        <H2>The visual language</H2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 mb-8">
          {[
            { title: "Colour", body: "Forest green as the primary brand colour. It signals trust, growth and money without the coldness of blue or the aggression of red. Gold as the accent, connecting to the value and ambition of the brands using the platform. Tested across low-brightness mobile screens in outdoor Nigerian light conditions." },
            { title: "Typography", body: "Space Grotesk for headlines: confident, modern, slightly characterful at large sizes. DM Sans for body and interface text: clean, highly legible at small sizes, works across all screen densities." },
            { title: "Components", body: "Built on a mobile-first component library. Every component was tested at 360px width before being adapted for desktop. Form inputs are large enough for fat-finger accuracy. Tables are horizontally scrollable on mobile without breaking the layout." },
            { title: "Motion", body: "Minimal and purposeful. Transitions communicate state change, not decoration. The offline sync animation is the only branded motion moment: a subtle pulse that communicates activity without causing anxiety." },
          ].map(({ title, body }) => (
            <div key={title} className="border-t border-[#1f1f1f] pt-5">
              <p className="font-inter text-[0.95rem] font-light text-white mb-2">{title}</p>
              <p className="font-helvetica text-[14px] leading-[1.7] text-[#909090]">{body}</p>
            </div>
          ))}
        </div>
      </div>

      <P label="Image — Design system: colour palette, typography scale, core components, iconography" />

      <hr className="mx-6 mb-16 border-[#1f1f1f] md:mx-14 lg:mx-20" />

      {/* ── Outcomes ── */}
      <div className="px-6 pb-16 md:px-14 lg:px-20">
        <SectionLabel>Outcomes</SectionLabel>
        <H2>What the design achieved</H2>
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
          {[
            { value: "47", sublabel: "Users onboarded in first month", desc: "Distributors and retailers across the first pilot companies, onboarded within 30 days of product launch with zero manual setup on their part." },
            { value: "73%", sublabel: "Reduction in order processing time", desc: "Average time from order placement to confirmation dropped from 4+ hours to under 20 minutes across all tested distributor workflows." },
            { value: "$180k+", sublabel: "Pipeline value generated", desc: "Total annual contract value in active sales conversations with FMCG companies across Nigeria, Ghana and Kenya within the first 90 days of outreach." },
          ].map(({ value, sublabel, desc }) => (
            <div key={sublabel} className="border-t border-[#1f1f1f] pt-6">
              <p className="font-inter text-[2rem] font-light text-white">{value}</p>
              <p className="font-helvetica mt-1 text-[13px] font-semibold text-[#22c55e] mb-3">{sublabel}</p>
              <p className="font-helvetica text-[14px] leading-[1.7] text-[#909090]">{desc}</p>
            </div>
          ))}
        </div>
      </div>

      <hr className="mx-6 mb-16 border-[#1f1f1f] md:mx-14 lg:mx-20" />

      {/* ── Reflection ── */}
      <div className="px-6 pb-6 md:px-14 lg:px-20">
        <SectionLabel>Reflection</SectionLabel>
        <H2>What I learned</H2>
        <Body>
          <p>
            Tradon taught me that the hardest design problems are not visual. The hardest problems are
            structural: understanding who really makes decisions, what they are actually afraid of, and how
            to design something that removes that fear before they even articulate it. Every FMCG company I
            spoke to knew they had a distribution problem. None of them had framed it as a design problem.
            That reframing was the first and most important design decision I made.
          </p>
          <p>
            Building across three surfaces simultaneously forced a kind of design discipline I had not
            previously needed. Every decision made on the HQ dashboard had implications for the distributor
            app. Every interaction designed for the retailer storefront had to be consistent with the
            language of the wider system. The design system was not a nice-to-have. It was the only thing
            that kept the product coherent as complexity grew.
          </p>
          <p>
            If I were starting over, I would spend twice as long in the research phase specifically talking
            to field sales reps and retailers, the users furthest from the buying decision but most critical
            to product adoption. The most valuable insights I collected came from sitting in a distributor&apos;s
            office in Lagos watching a sales rep try to log an order on a low-end Android phone with a
            cracked screen. No design exercise could have taught me what that 20 minutes did. Go to where
            the work actually happens. The product will tell you what it needs to be.
          </p>
        </Body>
      </div>

      {/* ── Footer ── */}
      <div className="px-6 pb-20 pt-8 md:px-14 lg:px-20">
        <hr className="mb-10 border-[#1f1f1f]" />
        <p className="font-helvetica text-[15px] text-[#5c5c5c]">Thanks for reading.</p>
        <p className="font-helvetica mt-2 text-[15px] text-[#5c5c5c]">
          Questions about this project?{" "}
          <Link href="/" className="text-[#c0c0c0] underline underline-offset-2 transition-colors hover:text-[#22c55e]">Get in touch</Link>.
        </p>
        <div className="mt-8 flex flex-wrap gap-8 text-sm">
          <Link href="/work/user-interface/statmind" className="font-helvetica text-[#5c5c5c] transition-colors hover:text-[#22c55e]">
            ← StatMind
          </Link>
          <Link href="/work/user-interface/payfly-ecosystem" className="font-helvetica text-[#5c5c5c] transition-colors hover:text-[#22c55e]">
            Payfly Ecosystem →
          </Link>
        </div>
      </div>

    </div>
  );
}

const _ = ACCENT;
