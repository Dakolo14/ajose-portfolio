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
function Placeholder({ label }: { label: string }) {
  return null; // images coming soon
}

function CodeBlock({ filename, code }: { filename: string; code: string }) {
  return (
    <div className="mb-12 px-6 md:px-14 lg:px-20">
      <div className="overflow-hidden rounded-lg border border-[#222]">
        <div className="flex items-center gap-3 border-b border-[#222] bg-[#141414] px-5 py-3">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-[#005994]">
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

export default function CeraveCerawardsEngineeringProject() {
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
            alt="CeraVe CerAwards platform"
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
          CeraVe CerAwards — Engineering
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
            This covers the engineering side of the CerAwards platform: the architecture decisions,
            the problems that only showed up in code, and the workarounds that made it to production.
            The design process lives in a{" "}
            <Link href="/work/user-interface/cerave-cerawards" className="text-[#ededed] underline underline-offset-2 hover:text-[#005994] transition-colors">
              separate case study
            </Link>
            .
          </p>
          <p>
            I led the technical side of the build alongside Damilare and one other developer. Three
            people, one tight deadline, a platform that needed to hold up under thousands of creator
            submissions and a high-traffic public vote. Every decision around structure and performance
            had a real consequence.
          </p>
        </div>
      </div>

      {/* ── Stats ── */}
      <div className="px-6 pb-16 md:px-14 lg:px-20">
        <div className="grid grid-cols-2 gap-y-10 gap-x-8 sm:grid-cols-3 lg:grid-cols-6">
          {[
            { stat: "800+", label: "Creator entries" },
            { stat: "68,000+", label: "Public votes" },
            { stat: "6", label: "Entry categories" },
            { stat: "500M+", label: "Total reach" },
            { stat: "3", label: "Developers" },
            { stat: "~6 wks", label: "Build to live" },
          ].map(({ stat, label }) => (
            <div key={label}>
              <p className="font-inter text-[1.75rem] font-light text-white">{stat}</p>
              <p className="font-helvetica mt-1 text-[13px] leading-snug text-[#5c5c5c]">{label}</p>
            </div>
          ))}
        </div>
      </div>

      <hr className="mx-6 mb-16 border-[#1f1f1f] md:mx-14 lg:mx-20" />

      {/* ── Architecture ── */}
      <div className="px-6 pb-6 md:px-14 lg:px-20">
        <h2 className="font-inter text-[1.1rem] font-light text-white mb-6 tracking-tight">Architecture</h2>
        <div className="space-y-4 font-helvetica text-[15px] leading-[1.8] text-[#b8b8b8]">
          <p>
            Next.js was the right call here. Server-side rendering for the public voting pages
            (SEO and load speed mattered for a campaign site), API routes for all submission and
            vote handling, and a single deployment target that kept the team moving fast.
          </p>
          <p>
            The database layer held two core objects: submissions and votes. Submissions tracked the
            creator, the category, the content link, and the thumbnail. Votes tracked the voter
            identity and the submission they voted for, with deduplication enforced at the database
            level, not just in code.
          </p>
        </div>
      </div>

      <Placeholder label="Image — Architecture diagram or database schema" />

      {/* ── Submission logic ── */}
      <div className="px-6 pb-6 md:px-14 lg:px-20">
        <h2 className="font-inter text-[1.1rem] font-light text-white mb-6 tracking-tight">Submission Logic</h2>
        <div className="space-y-4 font-helvetica text-[15px] leading-[1.8] text-[#b8b8b8]">
          <p>
            Each creator could submit to up to six categories. Their email was the key, used to
            track which categories they&apos;d already entered and lock slots once submitted. The
            validation had to be airtight: the same email couldn&apos;t resubmit to a category, but
            it could come back and fill remaining ones. Once all six were done, the email was
            inactive for uploads entirely.
          </p>
          <p>
            This ran as a server-side check on every submission request. No client-side trust.
          </p>
        </div>
      </div>

      <CodeBlock
        filename="api/submit/route.ts"
        code={`export async function POST(req: Request) {
  const { email, category, contentUrl, thumbnail } = await req.json();

  // Check how many categories this email has already entered
  const existing = await db.submission.findMany({
    where: { email },
    select: { category: true },
  });

  const enteredCategories = existing.map((s) => s.category);

  // Block if already submitted to this category
  if (enteredCategories.includes(category)) {
    return Response.json(
      { error: "Already submitted to this category." },
      { status: 409 }
    );
  }

  // Block if all 6 categories are filled
  if (enteredCategories.length >= 6) {
    return Response.json(
      { error: "All categories submitted. Email is inactive for uploads." },
      { status: 403 }
    );
  }

  // Create the submission
  const submission = await db.submission.create({
    data: { email, category, contentUrl, thumbnail },
  });

  return Response.json({ success: true, id: submission.id });
}`}
      />

      {/* ── Thumbnail problem ── */}
      <div className="px-6 pb-6 md:px-14 lg:px-20">
        <h2 className="font-inter text-[1.1rem] font-light text-white mb-6 tracking-tight">The Thumbnail Problem</h2>
        <div className="space-y-4 font-helvetica text-[15px] leading-[1.8] text-[#b8b8b8]">
          <p>
            This was the part that wasn&apos;t obvious until we were in it. Creators submitted Instagram
            and TikTok links. The voting page needed to show each entry visually. You can&apos;t ask
            68,000 voters to click a link to decide what to vote for.
          </p>
          <p>
            The problem: you cannot reliably pull a thumbnail from an Instagram or TikTok URL on the
            server. Both platforms actively block cross-origin image access. oEmbed returns HTML,
            not a usable image src. Attempting to proxy the thumbnail server-side ran into
            authentication walls and inconsistent responses depending on whether the post was public,
            private, or had already been cached differently.
          </p>
          <p>
            The workaround was to shift the responsibility to the creator at submission time. Rather
            than trying to extract the thumbnail after the fact, we required uploaders to provide a
            still image alongside their link, a screenshot or export from their content. We stored
            that in our own bucket. Controlled, consistent, no third-party dependency at render time.
          </p>
          <p>
            It added a small step to the submission form, but it solved the problem permanently and
            actually gave us better-quality preview images than auto-extracted thumbnails would have.
          </p>
        </div>
      </div>

      <CodeBlock
        filename="api/thumbnail/route.ts"
        code={`// What we tried first — server-side oEmbed extraction
async function tryOEmbed(url: string): Promise<string | null> {
  try {
    // TikTok oEmbed — returns HTML embed, not a direct image URL
    const res = await fetch(
      \`https://www.tiktok.com/oembed?url=\${encodeURIComponent(url)}\`
    );
    const data = await res.json();
    // thumbnail_url exists sometimes — but not reliably for all content types
    return data.thumbnail_url ?? null;
  } catch {
    return null;
  }
}

// What we shipped — creator uploads their own thumbnail at submission
// Stored in our bucket, served directly with no third-party dependency
async function uploadThumbnail(file: File, submissionId: string) {
  const key = \`thumbnails/\${submissionId}-\${Date.now()}\`;

  await storage.put(key, file, {
    contentType: file.type,
    access: "public",
  });

  return \`\${process.env.STORAGE_URL}/\${key}\`;
}`}
      />

      <Placeholder label="Image — Submission form showing thumbnail upload step" />

      {/* ── Voting integrity ── */}
      <div className="px-6 pb-6 md:px-14 lg:px-20">
        <h2 className="font-inter text-[1.1rem] font-light text-white mb-6 tracking-tight">Voting Integrity</h2>
        <div className="space-y-4 font-helvetica text-[15px] leading-[1.8] text-[#b8b8b8]">
          <p>
            68,000+ votes coming in through a public-facing page is a surface for abuse. We needed
            deduplication that was strict enough to prevent ballot-stuffing but not so aggressive
            that it blocked legitimate voters on shared IPs (families, offices, mobile networks).
          </p>
          <p>
            We keyed votes on a combination of email and submission ID at the database level. A
            unique constraint made duplicate votes a hard error, not just a soft warning. The
            API returned a clean error state the UI could handle gracefully, without retrying.
          </p>
        </div>
      </div>

      <CodeBlock
        filename="api/vote/route.ts"
        code={`export async function POST(req: Request) {
  const { voterEmail, submissionId } = await req.json();

  try {
    // Unique constraint on (voterEmail, submissionId) in the DB schema
    // If a duplicate vote is attempted, Prisma throws a P2002 error
    await db.vote.create({
      data: { voterEmail, submissionId },
    });

    // Increment the vote count on the submission atomically
    await db.submission.update({
      where: { id: submissionId },
      data: { voteCount: { increment: 1 } },
    });

    return Response.json({ success: true });

  } catch (err: unknown) {
    if (
      typeof err === "object" &&
      err !== null &&
      "code" in err &&
      (err as { code: string }).code === "P2002"
    ) {
      // Already voted — return a friendly error, not a 500
      return Response.json(
        { error: "You have already voted for this entry." },
        { status: 409 }
      );
    }
    throw err;
  }
}`}
      />

      <Placeholder label="Image — Voting page / vote confirmation UI" />

      {/* ── Performance ── */}
      <div className="px-6 pb-6 md:px-14 lg:px-20">
        <h2 className="font-inter text-[1.1rem] font-light text-white mb-6 tracking-tight">Performance on Mobile</h2>
        <div className="space-y-4 font-helvetica text-[15px] leading-[1.8] text-[#b8b8b8]">
          <p>
            The brief was explicit about mobile performance. Thousands of Nigerian creators, most
            on phones, many on variable network connections. We leaned on Next.js{" "}
            <code className="font-mono text-[13px] text-[#c0c0c0] bg-[#1a1a1a] px-1.5 py-0.5 rounded">Image</code>{" "}
            for automatic format optimisation and lazy loading on the voting gallery.
            Submission thumbnails were stored at a fixed resolution to keep page weight predictable.
          </p>
          <p>
            The voting gallery was the heaviest page, potentially hundreds of entries visible at once.
            We paginated server-side and prefetched the next page in the background so the scroll
            felt continuous even though data was loading in chunks.
          </p>
        </div>
      </div>

      <Placeholder label="Image — Lighthouse score or performance metrics screenshot" />

      {/* ── Reflection ── */}
      <div className="px-6 pb-6 md:px-14 lg:px-20">
        <h2 className="font-inter text-[1.1rem] font-light text-white mb-6 tracking-tight">What I&apos;d Do Differently</h2>
        <div className="space-y-4 font-helvetica text-[15px] leading-[1.8] text-[#b8b8b8]">
          <p>
            Asking creators to upload a still image alongside their link worked, but it added an
            extra step that not every creator expected. A better approach
            would have been to collect the thumbnail information at the point of content creation,
            or pull it from the creator&apos;s own profile data, rather than making it a manual upload
            requirement in the submission form itself.
          </p>
          <p>
            The email OTP step ran into a specific issue with Gmail. Certain Gmail addresses were
            not receiving the OTP reliably due to how Gmail&apos;s servers were handling the sending
            domain. We had to pull the OTP requirement mid-campaign to unblock voters who were
            stuck. It held up well enough without it, but it left the vote integrity layer thinner
            than intended. Next time, I&apos;d test deliverability across Gmail, Yahoo and Outlook
            before launch, not just assume the email goes through.
          </p>
        </div>
      </div>

      <div className="mb-12 px-6 md:px-14 lg:px-20">
        <img
          src="/cerawardshero.png"
          alt="CerAwards — the finished platform"
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
          <Link href="/work/user-interface/cerave-cerawards" className="font-helvetica text-[#5c5c5c] transition-colors hover:text-[#005994]">
            Design case study →
          </Link>
        </div>
      </div>

    </div>
  );
}
