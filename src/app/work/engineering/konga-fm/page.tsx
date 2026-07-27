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
          <span className="font-mono text-[12px] text-[#6a6a6a]">{filename}</span>
        </div>
        <pre className="overflow-x-auto bg-[#0d0d0d] p-6 text-[13px] leading-[1.75] text-[#c9d1d9]">
          <code>{code}</code>
        </pre>
      </div>
    </div>
  );
}

export default function KongaFMEngineeringProject() {
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

      {/* ── Project Header ── */}
      <div className="px-6 pt-10 pb-0 md:px-14 lg:px-20">
        <h1 className="font-inter text-[1.75rem] font-light leading-snug tracking-tight text-white md:text-[2.25rem] lg:text-[2.75rem]">
          Konga FM — Web Platform & Custom CMS
        </h1>

        <div className="mt-6 flex flex-col gap-6 sm:flex-row sm:gap-16">
          <div className="flex items-start gap-2">
            <CalendarIcon />
            <div>
              <p className="font-helvetica text-[11px] font-semibold uppercase tracking-widest text-[#6a6a6a]">Timeline</p>
              <p className="font-helvetica mt-1 text-[13px] leading-snug text-[#c0c0c0]">June — July 2026</p>
            </div>
          </div>

          <div className="flex items-start gap-2">
            <CalendarIcon />
            <div>
              <p className="font-helvetica text-[11px] font-semibold uppercase tracking-widest text-[#6a6a6a]">Stack</p>
              <p className="font-helvetica mt-1 text-[13px] leading-snug text-[#c0c0c0]">Next.js, TypeScript, Firebase</p>
            </div>
          </div>

          <div className="flex items-start gap-2">
            <CalendarIcon />
            <div>
              <p className="font-helvetica text-[11px] font-semibold uppercase tracking-widest text-[#6a6a6a]">Role</p>
              <p className="font-helvetica mt-1 text-[13px] leading-snug text-[#c0c0c0]">Lead Engineer / Full-Stack</p>
            </div>
          </div>

          <div className="flex items-start gap-2">
            <CalendarIcon />
            <div>
              <p className="font-helvetica text-[11px] font-semibold uppercase tracking-widest text-[#6a6a6a]">Live at</p>
              <a
                href="https://kongafm.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-helvetica mt-1 block text-[13px] leading-snug text-[#c0c0c0] underline underline-offset-2 hover:text-[#005994] transition-colors"
              >
                kongafm.com
              </a>
            </div>
          </div>
        </div>

        <hr className="mt-8 border-[#222]" />
      </div>

      {/* ── Intro Paragraphs ── */}
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
            This covers the engineering side of the Konga FM V2 platform: the complete architecture rewrite from a legacy React SPA to Next.js, building a custom Firebase-backed CMS from scratch, and solving the complex UX challenges of live persistent audio playback.
          </p>

          <p>
            I led the technical rebuild. We had a strict requirement for speed, SEO performance, and a completely self-managed Admin portal so the content team could update News, Podcasts, and Banners on the fly without developer intervention. Every technical decision was focused on performance and seamless media playback.
          </p>
        </div>
      </div>

      {/* ── Hero Image Placeholder / Banner ── */}
      <div className="mb-12 px-6 md:px-14 lg:px-20">
        <div className="flex w-full items-center justify-center rounded-lg border border-dashed border-[#2e2e2e] bg-[#141414] aspect-[16/9] min-h-[220px]">
          <p className="font-helvetica text-[13px] text-[#5c5c5c] px-4 text-center">
            Image — Dark-mode Konga FM homepage side-by-side with Admin Dashboard stats
          </p>
        </div>
      </div>

      {/* ── Stats ── */}
      <div className="px-6 pb-16 md:px-14 lg:px-20">
        <div className="grid grid-cols-2 gap-y-10 gap-x-8 sm:grid-cols-3 lg:grid-cols-5">
          {[
            { stat: "100%", label: "Custom CMS built" },
            { stat: "< 6s", label: "Static build time" },
            { stat: "9+", label: "Data Collections" },
            { stat: "1", label: "Exclusive Admin Identity" },
            { stat: "0", label: "Backend Servers" },
          ].map(({ stat, label }) => (
            <div key={label}>
              <p className="font-inter text-[1.75rem] font-light text-white">{stat}</p>
              <p className="font-helvetica mt-1 text-[13px] leading-snug text-[#5c5c5c]">{label}</p>
            </div>
          ))}
        </div>
      </div>

      <hr className="mx-6 mb-16 border-[#1f1f1f] md:mx-14 lg:mx-20" />

      {/* ── ACT I: Architecture & Routing ── */}
      <div className="px-6 pb-6 md:px-14 lg:px-20">
        <h2 className="font-inter text-[1.1rem] font-light text-white mb-6 tracking-tight">
          Architecture: The V2 Rewrite
        </h2>
        <div className="space-y-4 font-helvetica text-[15px] leading-[1.8] text-[#b8b8b8]">
          <p>
            The V1 platform was a standard React application. It was fine, but it suffered from slow initial load times and poor SEO—a death sentence for a media and news broadcasting company.
          </p>
          <p>
            I made the call to migrate the entire platform to Next.js (App Router). This gave us Server-Side Rendering (SSR) for the public-facing pages (News, Shows, Podcasts) to ensure search engines could index the content immediately. For the backend, instead of spinning up a Node/Express server, I integrated Firebase Firestore. This allowed the application to remain serverless while providing real-time data sync for the Admin Dashboard.
          </p>
        </div>
      </div>

      <div className="px-6 pb-6 md:px-14 lg:px-20">
        <h2 className="font-inter text-[1.1rem] font-light text-white mb-6 tracking-tight">
          Why Next.js? (App Router & SSR)
        </h2>
        <div className="space-y-4 font-helvetica text-[15px] leading-[1.8] text-[#b8b8b8]">
          <p>
            Standard Client-Side Rendered (CSR) applications send an empty HTML container to the browser, relying on client JavaScript to fetch and render content. For a media company publishing breaking news and show updates, this created a major SEO handicap: search crawlers failed to index dynamic article bodies and open-graph meta tags.
          </p>
          <p>
            Choosing Next.js App Router gave us instantaneous Server-Side Rendering (SSR) for news and show routes, automatic font &amp; image optimization for heavy media assets, and a unified serverless architecture—drastically cutting time-to-first-byte (TTFB) while maximizing search indexing across all search engines.
          </p>
        </div>
      </div>

      <div className="px-6 pb-6 md:px-14 lg:px-20">
        <h2 className="font-inter text-[1.1rem] font-light text-white mb-6 tracking-tight">
          Dynamic Routing & Strict Type Safety
        </h2>
        <div className="space-y-4 font-helvetica text-[15px] leading-[1.8] text-[#b8b8b8]">
          <p>
            A major requirement for V2 was ensuring every news update, podcast, and show had its own dedicated URL for SEO and social sharing. I utilized Next.js dynamic routing (<code className="text-[#ededed] bg-[#222] px-1.5 py-0.5 rounded text-[13px]">app/updates/[slug]/page.tsx</code>) to generate these pages on the server.
          </p>
          <p>
            The technical challenge came from the data mismatch between the legacy V1 dummy data and the live V2 Firestore schema. For example, older articles relied on a <code className="text-[#ededed] bg-[#222] px-1.5 py-0.5 rounded text-[13px]">description</code> key, while the new CMS generated an <code className="text-[#ededed] bg-[#222] px-1.5 py-0.5 rounded text-[13px]">excerpt</code> key. I engineered a robust TypeScript interface for the <code className="text-[#ededed] bg-[#222] px-1.5 py-0.5 rounded text-[13px]">NewsArticle</code> type that elegantly handled these discrepancies, ensuring the build wouldn&apos;t fail on missing legacy fields while still maintaining strict type safety for all new content pushed through the CMS.
          </p>
        </div>
      </div>

      {/* Code Block: Dynamic Routing & Type Safety */}
      <CodeBlock
        filename="src/types/news.ts"
        code={`export interface NewsArticle {
  id: string;
  slug: string;
  title: string;
  content: string;
  // Handle V1 legacy field alongside V2 CMS excerpt
  excerpt?: string;
  description?: string;
  author: string;
  publishedAt: string;
  coverImage?: string;
}`}
      />

      {/* ── ACT II: Audio UX & Persistence ── */}
      <div className="px-6 pb-6 md:px-14 lg:px-20">
        <h2 className="font-inter text-[1.1rem] font-light text-white mb-6 tracking-tight">
          The FM Player Persistence Problem
        </h2>
        <div className="space-y-4 font-helvetica text-[15px] leading-[1.8] text-[#b8b8b8]">
          <p>
            One of the biggest user complaints in V1 was that if a user was listening to the live FM stream and reloaded the page, the audio would die, and they&apos;d lose their spot.
          </p>
          <p>
            Browsers have strict autoplay policies, making it difficult to auto-resume audio on a fresh page load. The workaround I engineered involved a global <code className="text-[#ededed] bg-[#222] px-1.5 py-0.5 rounded text-[13px]">FMPlayerContext</code> paired with browser <code className="text-[#ededed] bg-[#222] px-1.5 py-0.5 rounded text-[13px]">localStorage</code>.
          </p>
          <p>
            Every time the user toggled the stream, we wrote the exact playback state and track metadata to storage. On page mount, the context instantly read from storage and attempted to resume playback. We wrapped the <code className="text-[#ededed] bg-[#222] px-1.5 py-0.5 rounded text-[13px]">.play()</code> promise in a strict try/catch block to gracefully handle <code className="text-[#ededed] bg-[#222] px-1.5 py-0.5 rounded text-[13px]">NotAllowedError</code> browser policies, ensuring the UI accurately reflected the player&apos;s true state without throwing console errors.
          </p>
        </div>
      </div>

      {/* Code Block 1: FM Player */}
      <CodeBlock
        filename="src/context/FMPlayerContext.tsx"
        code={`useEffect(() => {
  const savedState = localStorage.getItem("konga_fm_playing");
  if (savedState === "true" && audioRef.current) {
    audioRef.current.play().then(() => {
      setIsPlaying(true);
    }).catch((error) => {
      // Handle strict browser autoplay policies gracefully
      setIsPlaying(false);
      localStorage.setItem("konga_fm_playing", "false");
    });
  }
}, []);`}
      />

      {/* ── ACT III: Admin Dashboard & Developer Tooling ── */}
      <div className="px-6 pb-6 md:px-14 lg:px-20">
        <h2 className="font-inter text-[1.1rem] font-light text-white mb-6 tracking-tight">
          Admin Dashboard: The Over-Optimization Trap
        </h2>
        <div className="space-y-4 font-helvetica text-[15px] leading-[1.8] text-[#b8b8b8]">
          <p>
            The CMS needed to manage Banners, FM Data, TV Data, News, Videos, Events, and Podcasts.
          </p>
          <p>
            Initially, I over-optimized the data fetching. To save Firebase read costs, I structured the dashboard to only fetch data for the specific tab the admin was currently viewing. The unintended consequence? The global statistics bar at the top of the dashboard showed &quot;0&quot; for everything except the active tab.
          </p>
          <p>
            Speed and accuracy were massive criteria for the client. The fix was ripping out the lazy-loading logic and replacing it with a concurrent <code className="text-[#ededed] bg-[#222] px-1.5 py-0.5 rounded text-[13px]">Promise.all</code> fetch on dashboard mount. Because the Firestore SDK caches data locally, this single parallel network request was incredibly fast, instantly populating all dashboard stats without locking up the UI thread.
          </p>
        </div>
      </div>

      {/* Code Block 2: Admin Dashboard */}
      <CodeBlock
        filename="src/app/admin/dashboard/page.tsx"
        code={`const fetchData = async () => {
  setDataLoading(true);
  try {
    // Concurrent fetching drastically reduced dashboard load time
    // and populated the global stats bar instantly
    const [bData, fmData, tvData, newsData, podData] = await Promise.all([
      fetchCollection('Banners'),
      fetchCollection('FM'),
      fetchCollection('TV'),
      fetchCollection('News'),
      fetchCollection('Podcasts')
    ]);
    
    setStats({ 
      banners: bData.length, 
      news: newsData.length,
      podcasts: podData.length
    });
  } catch (error) {
    console.error("Failed to sync dashboard:", error);
  }
}`}
      />

      <div className="px-6 pb-6 md:px-14 lg:px-20">
        <h2 className="font-inter text-[1.1rem] font-light text-white mb-6 tracking-tight">
          The Database Seeder Tool
        </h2>
        <div className="space-y-4 font-helvetica text-[15px] leading-[1.8] text-[#b8b8b8]">
          <p>
            Transitioning to a new Firebase architecture meant we had a completely empty production database. Manually re-uploading hundreds of old banners, FM schedules, and news articles through the new Admin Dashboard would have taken the content team days.
          </p>
          <p>
            To solve this, I built a hidden &quot;Database Initializer&quot; directly into the admin portal (<code className="text-[#ededed] bg-[#222] px-1.5 py-0.5 rounded text-[13px]">/admin/seed</code>). It was an authenticated, client-facing utility script that took our massive local JSON seed files, mapped them to the new Firestore schema, and batched-wrote them to the live cloud database. What would have taken days of manual data entry was automated into a single button click that took less than 2 seconds, drastically accelerating our launch timeline.
          </p>
        </div>
      </div>

      {/* Code Block 3: Database Seeder Tool */}
      <CodeBlock
        filename="src/app/admin/seed/page.tsx"
        code={`const seedCollection = async (collectionName: string, seedData: any[]) => {
  const batch = writeBatch(db);
  
  seedData.forEach((item) => {
    // Map legacy local JSON to live Firestore schema
    const docRef = doc(collection(db, collectionName), item.id || undefined);
    batch.set(docRef, {
      ...item,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    });
  });

  // Batch commit to Firestore in a single network request (< 2 seconds)
  await batch.commit();
  console.log(\`Successfully seeded \${seedData.length} documents to \${collectionName}\`);
};`}
      />

      {/* ── ACT IV: Security & Deployment ── */}
      <div className="px-6 pb-6 md:px-14 lg:px-20">
        <h2 className="font-inter text-[1.1rem] font-light text-white mb-6 tracking-tight">
          Security & Transitioning the Codebase
        </h2>
        <div className="space-y-4 font-helvetica text-[15px] leading-[1.8] text-[#b8b8b8]">
          <p>
            Because the admin portal lived on the same domain (<code className="text-[#ededed] bg-[#222] px-1.5 py-0.5 rounded text-[13px]">/admin</code>), security was paramount. I locked down the Firebase Authentication strictly to <code className="text-[#ededed] bg-[#222] px-1.5 py-0.5 rounded text-[13px]">info@kongafm.com</code>. The Next.js API routes and Firestore Security Rules completely reject any write operations that do not contain a valid JWT from that specific email address.
          </p>
          <p>
            The final hurdle was deployment. Because V2 was a complete rewrite, pushing to GitLab caused massive &quot;unrelated history&quot; merge conflicts that broke the CI/CD pipeline. I had to manually intervene via the terminal, orchestrating a <code className="text-[#ededed] bg-[#222] px-1.5 py-0.5 rounded text-[13px]">git merge -s ours --allow-unrelated-histories</code> to forcibly overwrite the V1 history with the Next.js V2 architecture, resulting in a clean, zero-conflict merge to the live production server.
          </p>
        </div>
      </div>

      {/* Code Block: Firestore Security Rules */}
      <CodeBlock
        filename="firestore.rules"
        code={`rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Restrict write access strictly to authorized admin identity
    function isAdmin() {
      return request.auth != null && request.auth.token.email == "info@kongafm.com";
    }

    // Public read for news, broadcasts & podcasts; admin-only writes
    match /{document=**} {
      allow read: if true;
      allow write: if isAdmin();
    }
  }
}`}
      />

      <div className="px-6 pb-6 md:px-14 lg:px-20">
        <h2 className="font-inter text-[1.1rem] font-light text-white mb-6 tracking-tight">
          Why Docker & Containerization?
        </h2>
        <div className="space-y-4 font-helvetica text-[15px] leading-[1.8] text-[#b8b8b8]">
          <p>
            Deploying high-concurrency media applications to bare-metal servers or cloud virtual machines often introduces environmental drift—where differences in OS package versions, Node runtime environments, or system codecs cause unpredictable runtime failures.
          </p>
          <p>
            I containerized the entire Next.js application using a multi-stage <code className="text-[#ededed] bg-[#222] px-1.5 py-0.5 rounded text-[13px]">Dockerfile.k8s</code> based on Alpine Linux. By isolating dependencies into standalone build and runner stages, dev-dependencies were automatically purged from the final production image. This shrank our deployment artifact size, guaranteed 100% environment parity between local development and Kubernetes production clusters, and enabled zero-downtime rolling deployments.
          </p>
        </div>
      </div>

      {/* Code Block 4: Docker Containerization */}
      <CodeBlock
        filename="Dockerfile.k8s"
        code={`# Multi-stage Docker build for Next.js production container
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

EXPOSE 3000
CMD ["node", "server.js"]`}
      />

      {/* ── Secondary Image Placeholder ── */}
      <div className="mb-12 px-6 md:px-14 lg:px-20">
        <div className="flex w-full items-center justify-center rounded-lg border border-dashed border-[#2e2e2e] bg-[#141414] aspect-[16/9] min-h-[220px]">
          <p className="font-helvetica text-[13px] text-[#5c5c5c] px-4 text-center">
            Image — Admin Dashboard showing &quot;Push All Content to Firebase&quot; database seeder tool & Firestore security rules
          </p>
        </div>
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
          <Link href="/work/engineering/cerave-cerawards" className="font-helvetica text-[#5c5c5c] transition-colors hover:text-[#005994]">
            ← CeraVe CerAwards
          </Link>
          <Link href="/work/engineering/konga-group" className="font-helvetica text-[#5c5c5c] transition-colors hover:text-[#005994]">
            Konga Group →
          </Link>
        </div>
      </div>

    </div>
  );
}
