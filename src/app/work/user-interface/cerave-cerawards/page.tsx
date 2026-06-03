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
