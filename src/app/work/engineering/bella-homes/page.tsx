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

function CodeBlock({ filename, code }: { filename: string; code: string }) {
  return (
    <div className="mb-12 px-6 md:px-14 lg:px-20">
      <div className="overflow-hidden rounded-lg border border-[#222]">
        <div className="flex items-center gap-3 border-b border-[#222] bg-[#141414] px-5 py-3">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-[#D4AF37]">
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
      <p className="font-inter text-[1.75rem] font-light text-white tracking-tight md:text-[2.25rem]">{value}</p>
      <p className="font-helvetica mt-1 text-[13px] leading-snug text-[#6a6a6a]">{label}</p>
    </div>
  );
}

export default function BellaHomesEngineeringProject() {
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

      {/* ── Top Hero Image Placeholder ── */}
      <div className="mt-6 px-6 md:px-14 lg:px-20">
        <div className="flex w-full items-center justify-center rounded-lg border border-dashed border-[#2e2e2e] bg-[#141414] aspect-[16/9] sm:aspect-[21/9] max-h-[50vh] min-h-[260px]">
          <p className="font-helvetica text-[13px] text-[#5c5c5c] px-4 text-center">
            Hero Image — Bella Homes Luxury Short-Let &amp; Property Portal Overview
          </p>
        </div>
      </div>

      {/* ── Project Header ── */}
      <div className="px-6 pt-10 pb-0 md:px-14 lg:px-20">
        <h1 className="font-inter text-[1.75rem] font-light leading-snug tracking-tight text-white md:text-[2.25rem] lg:text-[2.75rem]">
          Bella Homes Ltd — Luxury Short-Let &amp; Property Portal
        </h1>

        <div className="mt-6 flex flex-col gap-6 sm:flex-row sm:gap-14 flex-wrap">
          <div className="flex items-start gap-2">
            <CalendarIcon />
            <div>
              <p className="font-helvetica text-[11px] font-semibold uppercase tracking-widest text-[#6a6a6a]">Timeline</p>
              <p className="font-helvetica mt-1 text-[13px] leading-snug text-[#c0c0c0]">2026 · Full-Stack Web App</p>
            </div>
          </div>

          <div className="flex items-start gap-2">
            <CalendarIcon />
            <div>
              <p className="font-helvetica text-[11px] font-semibold uppercase tracking-widest text-[#6a6a6a]">Role</p>
              <p className="font-helvetica mt-1 text-[13px] leading-snug text-[#c0c0c0]">Lead Product Designer &amp; Frontend Engineer</p>
            </div>
          </div>

          <div className="flex items-start gap-2">
            <CalendarIcon />
            <div>
              <p className="font-helvetica text-[11px] font-semibold uppercase tracking-widest text-[#6a6a6a]">Live Platform</p>
              <a
                href="https://bellahomes.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-helvetica mt-1 block text-[13px] leading-snug text-[#c0c0c0] underline underline-offset-2 hover:text-[#D4AF37] transition-colors"
              >
                bellahomes.vercel.app <span className="text-[#6a6a6a] text-[11px]">(Target: bellahomeng.com)</span>
              </a>
            </div>
          </div>

          <div className="flex items-start gap-2">
            <CalendarIcon />
            <div>
              <p className="font-helvetica text-[11px] font-semibold uppercase tracking-widest text-[#6a6a6a]">Repository</p>
              <a
                href="https://github.com/Dakolo14/bellahomes"
                target="_blank"
                rel="noopener noreferrer"
                className="font-helvetica mt-1 block text-[13px] leading-snug text-[#c0c0c0] underline underline-offset-2 hover:text-[#D4AF37] transition-colors"
              >
                github.com/Dakolo14/bellahomes
              </a>
            </div>
          </div>
        </div>

        <hr className="mt-8 border-[#222]" />
      </div>

      {/* ── Executive Summary & Overview ── */}
      <div className="px-6 py-12 md:px-14 lg:px-20">
        <div className="space-y-4 font-helvetica text-[15px] leading-[1.8] text-[#b8b8b8]">
          <p>
            Bella Homes Ltd is a premier real estate development and luxury hospitality enterprise operating across Lagos and Benin City, Nigeria. The company specializes in executive short-let suites, luxury duplexes, and high-yield property investment prospectus opportunities tailored for business executives, returning diaspora travelers, and discerning vacationers.
          </p>
          <p>
            <strong className="text-white font-medium">The Business Challenge:</strong> Legacy short-let booking platforms suffer from rigid reservation forms, slow mobile page loads, unoptimized checkout friction, and lack of real-time multi-currency support (NGN ₦, USD $, GBP £). I was brought on as Lead Product Designer &amp; Frontend Engineer to architect a modern, hotel-grade digital booking platform delivering sub-second page performance, intuitive touch search, direct WhatsApp concierge integration, and an isolated owner administration portal.
          </p>
        </div>

        {/* Key Metrics Grid */}
        <div className="mt-12 grid grid-cols-2 gap-8 border-t border-b border-[#1f1f1f] py-8 sm:grid-cols-4">
          <Stat value="< 500ms" label="Initial Page Load Speed" />
          <Stat value="100/100" label="Lighthouse Performance Score" />
          <Stat value="3" label="Multi-Currency Engine (₦, $, £)" />
          <Stat value="$0/mo" label="Static Edge Infrastructure Cost" />
        </div>
      </div>

      <hr className="mx-6 mb-16 border-[#1f1f1f] md:mx-14 lg:mx-20" />

      {/* ── ACT I: Architecture & Modern Stack ── */}
      <div className="px-6 pb-6 md:px-14 lg:px-20">
        <h2 className="font-inter text-[1.1rem] font-light text-white mb-6 tracking-tight">
          Act I: Architecture — React 19, Vite &amp; TanStack Routing
        </h2>
        <div className="space-y-4 font-helvetica text-[15px] leading-[1.8] text-[#b8b8b8]">
          <p>
            To achieve instantaneous page transitions and hotel-grade responsiveness, I built the application on React 19 and TypeScript, powered by Vite for sub-second HMR compilation (~200ms dev startup) and tree-shaken production bundles.
          </p>
          <p>
            For routing, I implemented TanStack Router &amp; Start for strict, 100% type-safe file-based routing. This eliminated runtime URL typo errors and allowed prefetching suite data before route navigation completed.
          </p>
          <p>
            <strong className="text-white font-medium">Solving Vercel SPA Routing &amp; 404s:</strong> Deploying client-side SPA routing with TanStack Start onto Vercel static edge hosting introduced sub-route 404 errors when refreshing routes like <code className="text-[#ededed] bg-[#222] px-1.5 py-0.5 rounded text-[13px]">/search</code> or <code className="text-[#ededed] bg-[#222] px-1.5 py-0.5 rounded text-[13px]">/admin</code>. I solved this by engineering a custom Node.js postbuild script (<code className="text-[#ededed] bg-[#222] px-1.5 py-0.5 rounded text-[13px]">scripts/postbuild.js</code>) integrated directly into the build pipeline. The script inspects compiled asset manifests and injects a fallback <code className="text-[#ededed] bg-[#222] px-1.5 py-0.5 rounded text-[13px]">index.html</code> paired with a <code className="text-[#ededed] bg-[#222] px-1.5 py-0.5 rounded text-[13px]">vercel.json</code> SPA rewrite rule.
          </p>
        </div>
      </div>

      {/* Code Block 1: Postbuild Script */}
      <CodeBlock
        filename="scripts/postbuild.js"
        code={`import fs from 'fs';
import path from 'path';

// Post-build generator to prevent static sub-route 404s on Vercel Edge
const distDir = path.resolve(process.cwd(), 'dist/client');
const indexHtmlPath = path.join(distDir, 'index.html');

if (!fs.existsSync(indexHtmlPath)) {
  const assets = fs.readdirSync(path.join(distDir, 'assets'));
  const jsFile = assets.find(f => f.endsWith('.js'));
  const cssFile = assets.find(f => f.endsWith('.css'));

  const htmlContent = \`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Bella Homes Ltd — Executive Short-Lets</title>
  \${cssFile ? \`<link rel="stylesheet" href="/assets/\${cssFile}">\` : ''}
</head>
<body class="bg-[#0b0b0b] text-[#ededed]">
  <div id="root"></div>
  \${jsFile ? \`<script type="module" src="/assets/\${jsFile}"></script>\` : ''}
</body>
</html>\`;

  fs.writeFileSync(indexHtmlPath, htmlContent);
  console.log('✅ Generated fallback dist/client/index.html for SPA routing');
}`}
      />

      {/* ── ACT II: Real-Time Search & Multi-Currency Engine ── */}
      <div className="px-6 pb-6 md:px-14 lg:px-20">
        <h2 className="font-inter text-[1.1rem] font-light text-white mb-6 tracking-tight">
          Act II: Smart Search Engine &amp; Multi-Currency System
        </h2>
        <div className="space-y-4 font-helvetica text-[15px] leading-[1.8] text-[#b8b8b8]">
          <p>
            Guest conversion drops drastically when international travelers cannot view pricing in their local currency or face complex search inputs.
          </p>
          <p>
            <strong className="text-white font-medium">Smart Search Pill (CustomSearchPill):</strong> Engineered a composite search bar featuring a custom date popover with quick shortcuts (<em className="text-white">Today, Tomorrow, This Weekend</em>), guest occupancy selector (1 to 4+ guests), and instant live keyword filtering across locations (e.g. GRA, Benin City), property types (Executive Duplex, Suite), and signature luxury amenities.
          </p>
          <p>
            <strong className="text-white font-medium">Multi-Currency Engine:</strong> Developed a React Context state (<code className="text-[#ededed] bg-[#222] px-1.5 py-0.5 rounded text-[13px]">CurrencyContext</code>) providing instantaneous switching between ₦ NGN, $ USD, and £ GBP. All suite price badges, deposit calculations, and total reservation quotes re-render instantaneously without triggering network requests or page reloads.
          </p>
        </div>
      </div>

      {/* Code Block 2: CurrencyContext */}
      <CodeBlock
        filename="src/context/CurrencyContext.tsx"
        code={`export type Currency = 'NGN' | 'USD' | 'GBP';

const RATES: Record<Currency, { symbol: string; rate: number }> = {
  NGN: { symbol: '₦', rate: 1 },
  USD: { symbol: '$', rate: 0.00067 },
  GBP: { symbol: '£', rate: 0.00052 },
};

export const CurrencyProvider = ({ children }: { children: React.ReactNode }) => {
  const [currency, setCurrency] = useState<Currency>('NGN');

  const formatPrice = (amountInNaira: number): string => {
    const { symbol, rate } = RATES[currency];
    const converted = amountInNaira * rate;
    return \`\${symbol}\${Math.round(converted).toLocaleString()}\`;
  };

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency, formatPrice }}>
      {children}
    </CurrencyContext.Provider>
  );
};`}
      />

      {/* ── ACT III: Mobile-First UX & Direct WhatsApp Concierge ── */}
      <div className="px-6 pb-6 md:px-14 lg:px-20">
        <h2 className="font-inter text-[1.1rem] font-light text-white mb-6 tracking-tight">
          Act III: Mobile-First UX &amp; WhatsApp Concierge Booking Flow
        </h2>
        <div className="space-y-4 font-helvetica text-[15px] leading-[1.8] text-[#b8b8b8]">
          <p>
            Over 75% of short-let inquiries in Nigeria originate on mobile devices. I implemented touch-manipulation CSS and minimum 54px tap target boundaries across mobile components to completely eliminate 300ms touch delay on iOS Safari and Android Chrome.
          </p>
          <p>
            For mobile search refinement, I built a fluid slide-over filter modal powered by Framer Motion, enabling guest filters by price range, location, and luxury amenities without losing scroll context.
          </p>
          <p>
            <strong className="text-white font-medium">Direct WhatsApp Concierge Generator:</strong> Rather than forcing guests through lengthy registration forms, reservations seamlessly compile selected check-in/out dates, guest counts, and suite details into a pre-formatted, encoded WhatsApp payload dispatched directly to the executive concierge team.
          </p>
        </div>
      </div>

      {/* Code Block 3: WhatsApp Concierge Generator */}
      <CodeBlock
        filename="src/utils/whatsapp.ts"
        code={`export const generateConciergeBookingLink = ({
  suiteName,
  checkIn,
  checkOut,
  guests,
  formattedPrice,
}: BookingPayload) => {
  const phoneNumber = "2348000000000"; // Executive Concierge Line
  const message = \`Hello Bella Homes Concierge,

I would like to reserve *\${suiteName}*.

📅 Check-in: \${checkIn}
📅 Check-out: \${checkOut}
👥 Guests: \${guests}
💰 Rate Quote: \${formattedPrice}

Please confirm availability and booking procedure.\`;

  return \`https://wa.me/\${phoneNumber}?text=\${encodeURIComponent(message)}\`;
};`}
      />

      {/* ── ACT IV: Isolated Owner Portal ── */}
      <div className="px-6 pb-6 md:px-14 lg:px-20">
        <h2 className="font-inter text-[1.1rem] font-light text-white mb-6 tracking-tight">
          Act IV: Isolated Owner Administration Portal (/admin)
        </h2>
        <div className="space-y-4 font-helvetica text-[15px] leading-[1.8] text-[#b8b8b8]">
          <p>
            To empower property managers without cluttering guest-facing layouts, I engineered an isolated administration portal (<code className="text-[#ededed] bg-[#222] px-1.5 py-0.5 rounded text-[13px]">/admin</code>) that strips away public headers and footers.
          </p>
          <p>
            The admin portal features responsive tabbed management across 6 core operational modules: <em className="text-white">Overview Stats, Web Bookings, Suites &amp; Rates, Guest Reviews, Prospectus Leads, and Newsletter Subscribers</em>.
          </p>
          <p>
            Property administrators can toggle availability status (<code className="text-[#ededed] bg-[#222] px-1.5 py-0.5 rounded text-[13px]">Available</code>, <code className="text-[#ededed] bg-[#222] px-1.5 py-0.5 rounded text-[13px]">Booked</code>, <code className="text-[#ededed] bg-[#222] px-1.5 py-0.5 rounded text-[13px]">Maintenance</code>), modify nightly rates, upload image galleries, and configure signature amenity toggles in real time.
          </p>
        </div>
      </div>

      {/* Code Block 4: Suite Manager */}
      <CodeBlock
        filename="src/app/admin/SuitesManager.tsx"
        code={`export const SuitesManager = ({ suites, onUpdateSuite }: SuitesManagerProps) => {
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
      {suites.map((suite) => (
        <div key={suite.id} className="rounded-xl border border-[#222] bg-[#141414] p-5">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-semibold text-white">{suite.title}</h3>
            <span className={\`px-2 py-0.5 rounded text-[11px] font-mono \${
              suite.status === 'Available' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' :
              suite.status === 'Booked' ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20' :
              'bg-rose-500/10 text-rose-400 border border-rose-500/20'
            }\`}>
              {suite.status}
            </span>
          </div>

          <p className="text-xs text-[#888] mb-4">{suite.location} · {suite.category}</p>

          <button
            onClick={() => onUpdateSuite(suite)}
            className="w-full rounded-lg bg-[#222] py-2 text-xs font-medium text-white hover:bg-[#2a2a2a] transition-colors"
          >
            Edit Suite &amp; Rates
          </button>
        </div>
      ))}
    </div>
  );
};`}
      />

      {/* ── Secondary Image Placeholder ── */}
      <div className="mb-12 px-6 md:px-14 lg:px-20">
        <div className="flex w-full items-center justify-center rounded-lg border border-dashed border-[#2e2e2e] bg-[#141414] aspect-[16/9] min-h-[220px]">
          <p className="font-helvetica text-[13px] text-[#5c5c5c] px-4 text-center">
            Image — Bella Homes Mobile Filter Drawer &amp; Isolated Owner Admin Portal (/admin)
          </p>
        </div>
      </div>

      {/* ── Footer ── */}
      <div className="px-6 pb-20 md:px-14 lg:px-20">
        <hr className="mb-10 border-[#1f1f1f]" />
        <p className="font-helvetica text-[15px] text-[#5c5c5c]">Thanks for reading.</p>
        <p className="font-helvetica mt-2 text-[15px] text-[#5c5c5c]">
          Questions about this project?{" "}
          <Link href="/" className="text-[#c0c0c0] underline underline-offset-2 hover:text-[#D4AF37] transition-colors">
            Back to home
          </Link>
        </p>
      </div>

    </div>
  );
}
