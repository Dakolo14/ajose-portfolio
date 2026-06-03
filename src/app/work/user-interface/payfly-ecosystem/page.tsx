'use client';
import Link from "next/link";

const ACCENT = "#7c3aed";

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
      <div
        className="flex w-full items-center justify-center rounded-lg border border-dashed border-[#2e2e2e] bg-[#141414]"
        style={{ aspectRatio: aspect }}
      >
        <p className="font-helvetica text-[13px] text-[#3a3a3a] px-4 text-center">{label}</p>
      </div>
    </div>
  );
}

function DualPlaceholder({ a, b }: { a: string; b: string }) {
  return (
    <div className="mb-12 px-6 md:px-14 lg:px-20">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {[a, b].map((label) => (
          <div key={label} className="flex aspect-[9/16] items-center justify-center rounded-lg border border-dashed border-[#2e2e2e] bg-[#141414] sm:aspect-[9/17]">
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

export default function PayflyEcosystemProject() {
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
          <p className="font-helvetica text-[13px] text-[#3a3a3a]">Hero image — PayFly consumer app + POS side by side</p>
        </div>
      </div>

      {/* ── Header ── */}
      <div className="px-6 pt-10 pb-0 md:px-14 lg:px-20">
        <h1 className="font-inter text-[1.75rem] font-light leading-snug tracking-tight text-white md:text-[2.25rem] lg:text-[2.75rem]">
          PayFly — Payments Ecosystem
        </h1>
        <p className="font-helvetica mt-3 text-[15px] text-[#6a6a6a]">
          One ecosystem. Two sides of every transaction.
        </p>

        <div className="mt-6 flex flex-col gap-6 sm:flex-row sm:flex-wrap sm:gap-14">
          {[
            { label: "Timeline", value: "2025 — Ongoing" },
            { label: "Location", value: "Lagos, Nigeria" },
            { label: "Role", value: "Founder · Product Designer" },
            { label: "Surfaces", value: "Consumer Mobile App (iOS & Android) · Web POS" },
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
            <Link href="/" className="text-[#ededed] underline underline-offset-2 transition-colors hover:text-[#7c3aed]">please get in touch</Link>.
          </p>
          <p>
            Every payment has two people in it. The person paying and the person receiving. Most
            payment products pick a side and build for one. PayFly was designed to own both ends
            of the same transaction, and make each experience feel like it was built exclusively
            for that user.
          </p>
          <p>
            PayFly is two products that live inside one ecosystem. The first is a consumer-facing
            mobile app that turns your phone into a payment device. Tap your phone, pay instantly,
            no card needed. The second is a full Point of Sale application for businesses to manage
            products, process payments, track inventory and run your entire counter operation from
            one screen.
          </p>
          <p>
            When a customer pays with PayFly at a business using PayFly POS, the entire transaction
            lives inside one connected system. That closed loop is the product&apos;s most powerful idea.
          </p>
        </Body>
      </div>

      <P label="Image — Consumer app on mobile + POS on desktop/tablet side by side" aspect="16/7" />

      <hr className="mx-6 mb-16 border-[#1f1f1f] md:mx-14 lg:mx-20" />

      {/* ── Users ── */}
      <div className="px-6 pb-6 md:px-14 lg:px-20">
        <SectionLabel>The Users</SectionLabel>
        <H2>Two sides of every counter.</H2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 mb-8">
          {[
            {
              label: "Consumer — The Payer",
              desc: "Urban, mobile-first Nigerians who carry their phone everywhere but don't always carry their card. They want to pay fast, see their transactions clearly and switch between multiple bank accounts without friction. They trust their phone more than their wallet.",
              color: "#7c3aed",
            },
            {
              label: "Business Owner — The Receiver",
              desc: "A shop, restaurant, or retail business processing multiple transactions daily. They need speed at the counter, visibility into their sales, and a system that handles different payment types (cash, card, tap and transfer) without switching between tools.",
              color: "#a78bfa",
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

      <DualPlaceholder a="Persona card — Consumer (Payer)" b="Persona card — Business Owner (Receiver)" />

      <hr className="mx-6 mb-16 border-[#1f1f1f] md:mx-14 lg:mx-20" />

      {/* ── Problem ── */}
      <div className="px-6 pb-6 md:px-14 lg:px-20">
        <SectionLabel>The Problem</SectionLabel>
        <H2>Payments in Nigeria are fragmented on both sides of the counter.</H2>
        <Body>
          <p>
            Consumers juggle multiple banking apps to pay. Businesses juggle POS terminals, manual
            cash logs and separate inventory tools that don&apos;t talk to each other. Nobody has built
            a clean, unified layer that sits comfortably on both sides of the counter.
          </p>
        </Body>
      </div>

      <div className="px-6 pb-12 md:px-14 lg:px-20">
        <p className="font-helvetica text-[11px] font-semibold uppercase tracking-widest text-[#6a6a6a] mb-8">The numbers that shaped the design</p>
        <div className="grid grid-cols-2 gap-y-10 gap-x-8 sm:grid-cols-4">
          <Stat value="3+" label="Banking apps the average Nigerian uses to manage payments across accounts" />
          <Stat value="₦702k" label="Average monthly transaction volume for a mid-size Lagos retail business, across disconnected tools" />
          <Stat value="1,500+" label="Small businesses in Lagos alone running inventory and POS on separate unconnected systems" />
          <Stat value="0" label="Tap-to-pay solutions built natively for the Nigerian market before PayFly" />
        </div>
      </div>

      <P label="Image — Split illustration: fragmented tools on left vs PayFly unified ecosystem on right" />

      <hr className="mx-6 mb-16 border-[#1f1f1f] md:mx-14 lg:mx-20" />

      {/* ── Challenges ── */}
      <div className="px-6 pb-6 md:px-14 lg:px-20">
        <SectionLabel>Design Challenges</SectionLabel>
        <H2>What made this hard</H2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { num: "01", title: "Trust at the point of payment", body: "Tap to pay is psychologically new in Nigeria. Users needed to feel that their money was safe before they tapped. The design had to communicate security without making the experience feel complicated or slow. One wrong screen and the user abandons." },
            { num: "02", title: "Speed above everything at the counter", body: "A POS system used at a busy counter during lunch rush has zero tolerance for confusion. Every action needed to be reachable in two taps or fewer. The cart, the payment method and the confirmation all had to live within one immediate view." },
            { num: "03", title: "Multiple bank cards, one clean experience", body: "Nigerian users commonly hold accounts across UBA, GTBank, Stanbic, Ecobank and more simultaneously. Designing a card switching experience that felt effortless, not like a settings menu, was critical to daily usability." },
            { num: "04", title: "Onboarding a business without losing them", body: "The POS onboarding had to gather enough information to personalise the product while staying short enough that a busy business owner actually completes it. Every extra screen is a drop-off risk." },
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
        <H2>How each challenge was solved</H2>
      </div>

      {[
        {
          num: "Solution 01",
          title: "Tap to Pay as the Hero Moment",
          body: "The consumer homepage is built around a single action. Everything else (cards, transactions, profile) lives in the navigation. The centre of the screen belongs entirely to the Tap to Pay interaction. The face scan icon communicates biometric security without a single word of explanation. The primary account card floats above it, giving the user confidence in what they're paying with before they tap.",
          placeholder: "Image — Homepage empty state + Homepage with card added",
        },
        {
          num: "Solution 02",
          title: "Switch Card as a Bottom Sheet",
          body: "Rather than routing users to a separate cards screen to change their active account, the Switch Account experience lives in a bottom sheet modal that overlays the homepage. Users see their cards visually, not as a list of account numbers, and select with a single tap. Fast, contextual and never disruptive to the primary flow.",
          placeholder: "Image — Switch Bank Card modal screen",
        },
        {
          num: "Solution 03",
          title: "POS Built for the Counter",
          body: "The POS layout is a deliberate three-panel design. Navigation on the left. Product catalogue in the centre. Cart on the right. Everything visible simultaneously. No back and forth. A cashier can browse products, build a cart and process payment without leaving the same screen. The cart panel handles subtotal, tax, commission and total in real time so there are no surprises at checkout.",
          placeholder: "Image — POS system full screen with cart",
        },
        {
          num: "Solution 04",
          title: "Payment Methods Without Friction",
          body: "At checkout, the payment methods panel sits alongside the cart review on the same screen, no navigation. Cash, Card, Tap to Pay and PayFly are presented as equal options. The numpad for cash entry is large, usable under pressure and includes an Exact Amount shortcut that eliminates manual input for precise transactions. One screen handles the entire checkout moment.",
          placeholder: "Image — Payment Methods modal screen",
        },
        {
          num: "Solution 05",
          title: "Personalised Onboarding in Five Steps",
          body: "The POS onboarding was designed to feel like a conversation, not a form. Each screen asks one question. Business name, business type, revenue range: three decisions that let the platform personalise itself to the user. The split layout (brand panel on the left, form on the right) keeps the product feeling premium throughout setup, even before the user sees a single feature.",
          placeholder: "Image — Onboarding flow: Sign Up → Business Name → Business Type → Revenue",
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
        { num: "Screen 01", title: "Consumer Homepage (Empty State)", body: "First launch after account creation. Clean, dark, minimal. The Add Card prompt is the only call to action. The Tap to Pay icon sits waiting, establishing the product's identity before the user has even set up their account.", placeholder: "Image — Consumer homepage empty state" },
        { num: "Screen 02", title: "Consumer Homepage (Active)", body: "Once a card is added, the primary account card dominates the screen. Tap to Pay sits below it, face scan icon centred. Customize Card and Switch Account are understated text links, present but never competing with the core action.", placeholder: "Image — Consumer homepage with card active" },
        { num: "Screen 03", title: "Switch Bank Card", body: "Two cards displayed visually with full bank branding. Checkbox selection. One button to confirm. Designed to take under five seconds from open to close.", placeholder: "Image — Switch card modal" },
        { num: "Screen 04", title: "Transactions", body: "Dark table layout with status badges: Success in green, Processing in amber, Failed in red. Filter by bank name. Pagination at the bottom. Dense but readable. Every transaction visible at a glance without needing to open anything.", placeholder: "Image — Transactions screen" },
        { num: "Screen 05", title: "Profile", body: "Layered settings grouped by function: account details, security, referrals, support. Biometrics toggle inline. Avatar and username at the top. Nothing buried. Nothing unnecessary.", placeholder: "Image — Profile screen" },
        { num: "Screen 06", title: "POS Catalogue & Cart", body: "The full operating screen for a business during trading hours. Category tabs across the top of the catalogue. Product cards with stock count visible. Cart building in real time on the right. Scan Barcode and Customer Display as secondary actions at the cart bottom.", placeholder: "Image — POS catalogue with cart" },
        { num: "Screen 07", title: "Checkout & Payment", body: "Cart review on the left. Payment method selection and numpad on the right. Amount due displayed prominently. Exact Amount shortcut for cash. One Enter button to confirm. Designed to handle the most stressful moment in the user journey, a queue of customers waiting, with complete calm.", placeholder: "Image — Checkout payment methods screen" },
        { num: "Screen 08", title: "POS Onboarding Flow", body: "Five screens that build trust progressively. Each one warmer than the last. By the time the business owner reaches the dashboard, they feel the product already knows them.", placeholder: "Image — Full onboarding flow spread" },
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
        <H2>One brand language, two visual registers</H2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 mb-8">
          {[
            { title: "Consumer — Dark", body: "Near-black backgrounds, high contrast white type, purple as the primary accent. Designed for a user paying at night in low light, holding their phone one-handed. Every element earns its place on the screen." },
            { title: "POS — Light", body: "White surfaces, clean structure, the same purple accent maintaining brand consistency across both products. Designed for a cashier working under bright shop lighting, scanning and tapping at speed throughout a full trading day." },
            { title: "Typography", body: "Clean and neutral, legible at every size from a transaction amount on a dark card to a product name in a busy catalogue grid. Consistent between both surfaces so the ecosystem feels unified even across two completely different visual modes." },
            { title: "Components", body: "Generous touch targets tested on both small Android phones and large tablet POS screens. The same component behaves correctly in dark and light context with no separate libraries and no duplication." },
          ].map(({ title, body }) => (
            <div key={title} className="border-t border-[#1f1f1f] pt-5">
              <p className="font-inter text-[0.95rem] font-light text-white mb-2">{title}</p>
              <p className="font-helvetica text-[14px] leading-[1.7] text-[#909090]">{body}</p>
            </div>
          ))}
        </div>
      </div>

      <P label="Image — Design system: dark palette (consumer) + light palette (POS) + shared components + typography" aspect="16/7" />

      <hr className="mx-6 mb-16 border-[#1f1f1f] md:mx-14 lg:mx-20" />

      {/* ── Outcomes ── */}
      <div className="px-6 pb-16 md:px-14 lg:px-20">
        <SectionLabel>Outcomes</SectionLabel>
        <H2>What the design achieves</H2>
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
          {[
            { value: "4", sublabel: "Payment methods unified", desc: "Cash, Card, Tap to Pay and PayFly, all inside a single checkout screen with no switching between tools." },
            { value: "85%+", sublabel: "Onboarding completion target", desc: "Five-step onboarding designed to maintain completion through progressive personalisation and single-question screens." },
            { value: "Real-time", sublabel: "Transaction visibility", desc: "Every transaction visible to the consumer instantly with status, bank name and amount. No waiting for bank SMS confirmations." },
          ].map(({ value, sublabel, desc }) => (
            <div key={sublabel} className="border-t border-[#1f1f1f] pt-6">
              <p className="font-inter text-[2rem] font-light text-white">{value}</p>
              <p className="font-helvetica mt-1 text-[13px] font-semibold text-[#7c3aed] mb-3">{sublabel}</p>
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
            PayFly started as a tap-to-pay app and became an ecosystem the moment I asked one
            question: what happens on the other side of that tap? Designing both surfaces forced
            me to think about trust differently for each user. The consumer needs to feel safe in
            under three seconds. The business owner needs to feel in control across an entire
            trading day. Same product family. Completely different emotional contracts.
          </p>
          <p>
            The dark and light system split was one of the most considered decisions in the project.
            It would have been easier to use one visual language across both surfaces. But the
            context of use is fundamentally different. A consumer paying at night in low light
            versus a cashier working under bright shop lighting. The design had to serve the
            environment, not just the brand.
          </p>
          <p>
            The most important thing I learned building PayFly is that payment products are not
            really about money. They are about confidence. Every screen, every animation, every
            piece of microcopy exists to answer one silent question the user is always asking:
            is this safe? Get that answer right and everything else follows.
          </p>
        </Body>
      </div>

      {/* ── Footer ── */}
      <div className="px-6 pb-20 pt-8 md:px-14 lg:px-20">
        <hr className="mb-10 border-[#1f1f1f]" />
        <p className="font-helvetica text-[15px] text-[#5c5c5c]">Thanks for reading.</p>
        <p className="font-helvetica mt-2 text-[15px] text-[#5c5c5c]">
          Questions about this project?{" "}
          <Link href="/" className="text-[#c0c0c0] underline underline-offset-2 transition-colors hover:text-[#7c3aed]">Get in touch</Link>.
        </p>
        <div className="mt-8 flex flex-wrap gap-8 text-sm">
          <Link href="/work/user-interface/tradon-app" className="font-helvetica text-[#5c5c5c] transition-colors hover:text-[#7c3aed]">
            ← Tradon App
          </Link>
          <Link href="/" className="font-helvetica text-[#5c5c5c] transition-colors hover:text-[#7c3aed]">
            Coming Soon →
          </Link>
        </div>
      </div>

    </div>
  );
}

const _ = ACCENT;
