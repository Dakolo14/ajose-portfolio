'use client';
import Link from "next/link";

const ACCENT = "#6366f1";

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

function CodeBlock({ filename, code }: { filename: string; code: string }) {
  return (
    <div className="mb-12 px-6 md:px-14 lg:px-20">
      <div className="overflow-hidden rounded-lg border border-[#222]">
        <div className="flex items-center gap-3 border-b border-[#222] bg-[#141414] px-5 py-3">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-[#6366f1]">
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

export default function KYCInteractiveFormProject() {
  return (
    <div className="min-h-screen text-[#ededed]">

      {/* ── Back ── */}
      <div className="px-6 py-4 pb-0 md:px-6 lg:px-8">
        <Link
          href="/"
          className="font-helvetica flex items-center gap-1.5 text-[13px] text-[#eeeeee] transition-colors hover:text-[#a8a8a8] w-fit"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M9 2L4 7l5 5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Back
        </Link>
      </div>

      {/* ── Hero ── */}
      <div className="mt-4 w-full overflow-hidden">
        <div className="relative w-full aspect-[4/1] max-h-[72vh] flex items-center justify-center bg-[#141414] border-y border-dashed border-[#2e2e2e]">
          <p className="font-helvetica text-[13px] text-[#3a3a3a]">Hero image — KYC form interface</p>
        </div>
      </div>

      {/* ── Header ── */}
      <div className="px-6 pt-10 pb-0 md:px-14 lg:px-20">
        <h1 className="font-inter text-[1.75rem] font-light leading-snug tracking-tight text-white md:text-[2.25rem] lg:text-[2.75rem]">
          KYC Interactive Form — Engineering
        </h1>

        <div className="mt-6 flex flex-col gap-6 sm:flex-row sm:flex-wrap sm:gap-14">
          {[
            { label: "Timeline", value: "2025 — Ongoing" },
            { label: "Stack", value: "Next.js · TypeScript · Node.js" },
            { label: "Role", value: "Solo Engineer" },
            { label: "Context", value: "Nigerian Identity Verification" },
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
        <div className="space-y-5 font-helvetica text-[15px] leading-[1.8] text-[#b8b8b8]">
          <p>
            If you&apos;d like to learn more,{" "}
            <Link href="/" className="text-[#ededed] underline underline-offset-2 hover:text-[#6366f1] transition-colors">
              please get in touch
            </Link>
            .
          </p>
          <p>
            This is a full-stack KYC (Know Your Customer) verification form built to validate user
            identity against Nigerian government databases. The core idea was straightforward: collect
            personal details, run them against official records, and surface a pass or fail clearly.
            The actual build was anything but.
          </p>
          <p>
            Nigerian identity infrastructure is a patchwork of overlapping databases, inconsistent
            APIs, and real-time connectivity issues. Building something reliable on top of that
            required handling failure at every layer, from bad user input to third-party API
            timeouts to partial verification states that needed to be recoverable.
          </p>
        </div>
      </div>

      <hr className="mx-6 mb-16 border-[#1f1f1f] md:mx-14 lg:mx-20" />

      {/* ── What it verifies ── */}
      <div className="px-6 pb-6 md:px-14 lg:px-20">
        <h2 className="font-inter text-[1.1rem] font-light text-white mb-6 tracking-tight">What It Verifies</h2>
        <div className="space-y-4 font-helvetica text-[15px] leading-[1.8] text-[#b8b8b8]">
          <p>
            The form runs a user through four verification layers in sequence. Each step gates the next:
            you don&apos;t move forward until the current check resolves, either with a confirmed match
            or a documented failure.
          </p>
        </div>
      </div>

      <div className="px-6 pb-12 md:px-14 lg:px-20">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {[
            { step: "01", title: "NIN Lookup", body: "National Identity Number submitted against the NIMC database via a licensed verification provider. Returns first name, last name, date of birth, and phone. All fields are cross-referenced with what the user provided." },
            { step: "02", title: "BVN Validation", body: "Bank Verification Number checked against CBN-linked records. Confirms the user is a registered banking customer and that the biometric data attached to their BVN aligns with their NIN record." },
            { step: "03", title: "Phone Verification", body: "OTP sent to the phone number on file for the NIN, not just the number the user typed in. If they don't control that number, verification stops here." },
            { step: "04", title: "Identity Confirmation", body: "Final comparison across all three data points. If the name, DOB, and phone on the NIN record match the BVN record and the OTP was verified, the identity is confirmed and a signed verification token is issued." },
          ].map(({ step, title, body }) => (
            <div key={step} className="rounded-lg border border-[#1f1f1f] bg-[#111] p-6">
              <p className="font-helvetica text-[11px] font-semibold uppercase tracking-widest text-[#3a3a3a] mb-3">{step}</p>
              <p className="font-inter text-[0.95rem] font-light text-white mb-3 tracking-tight">{title}</p>
              <p className="font-helvetica text-[14px] leading-[1.7] text-[#6a6a6a]">{body}</p>
            </div>
          ))}
        </div>
      </div>

      <Placeholder label="Image — KYC form steps flow: four-stage progress indicator" aspect="16/6" />

      <hr className="mx-6 mb-16 border-[#1f1f1f] md:mx-14 lg:mx-20" />

      {/* ── NIN lookup ── */}
      <div className="px-6 pb-6 md:px-14 lg:px-20">
        <h2 className="font-inter text-[1.1rem] font-light text-white mb-6 tracking-tight">NIN Verification</h2>
        <div className="space-y-4 font-helvetica text-[15px] leading-[1.8] text-[#b8b8b8]">
          <p>
            The first real challenge with NIN lookup is that you can&apos;t query NIMC directly as an
            individual. You have to go through a licensed verification provider. The response
            structure, field naming, and error codes differ across providers and can shift without
            notice.
          </p>
          <p>
            I wrapped the provider call behind an abstraction layer so the rest of the form logic
            never touches provider-specific details. If we needed to switch providers (which happened
            once during development), only the adapter changed. The form didn&apos;t know the difference.
          </p>
          <p>
            The comparison logic itself had to be lenient. Nigerian names on government records have
            inconsistent casing, hyphenation, and spacing. A rigid string match would fail a
            meaningful number of legitimate users. The matching uses normalised comparison with tolerance
            for common variations.
          </p>
        </div>
      </div>

      <CodeBlock
        filename="lib/kyc/nin-verify.ts"
        code={`type NINRecord = {
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  phoneNumber: string;
};

// Normalise names before comparison — handles casing,
// hyphens, and common spacing issues in Nigerian records
function normaliseName(name: string): string {
  return name
    .toLowerCase()
    .replace(/[-_.]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

export async function verifyNIN(
  nin: string,
  userInput: { firstName: string; lastName: string; dob: string }
): Promise<{ verified: boolean; record: NINRecord | null; reason?: string }> {
  const record = await ninProviderAdapter.lookup(nin);

  if (!record) {
    return { verified: false, record: null, reason: "NIN not found in records" };
  }

  const firstNameMatch =
    normaliseName(record.firstName).includes(normaliseName(userInput.firstName)) ||
    normaliseName(userInput.firstName).includes(normaliseName(record.firstName));

  const lastNameMatch =
    normaliseName(record.lastName).includes(normaliseName(userInput.lastName)) ||
    normaliseName(userInput.lastName).includes(normaliseName(record.lastName));

  const dobMatch = record.dateOfBirth === userInput.dob;

  if (!firstNameMatch || !lastNameMatch) {
    return { verified: false, record, reason: "Name does not match NIN record" };
  }

  if (!dobMatch) {
    return { verified: false, record, reason: "Date of birth does not match NIN record" };
  }

  return { verified: true, record };
}`}
      />

      <Placeholder label="Image — NIN input step with validation feedback" />

      {/* ── BVN ── */}
      <div className="px-6 pb-6 md:px-14 lg:px-20">
        <h2 className="font-inter text-[1.1rem] font-light text-white mb-6 tracking-tight">BVN Cross-Reference</h2>
        <div className="space-y-4 font-helvetica text-[15px] leading-[1.8] text-[#b8b8b8]">
          <p>
            BVN verification adds a second independent data source. The goal isn&apos;t just to check that
            the BVN exists. It confirms that the identity behind the BVN matches the identity
            behind the NIN. If someone has stolen one credential, they&apos;re unlikely to have the other.
          </p>
          <p>
            The tricky part here is rate limiting. BVN lookups go through the CBN-approved provider
            network, and providers enforce per-minute call limits that are easy to hit if users
            are refreshing or resubmitting. The API layer queues and retries with exponential
            backoff, and surfaces a clear waiting state to the user rather than silently dropping
            the request.
          </p>
        </div>
      </div>

      <CodeBlock
        filename="lib/kyc/bvn-verify.ts"
        code={`export async function crossReferenceBVN(
  bvn: string,
  ninRecord: NINRecord
): Promise<{ matched: boolean; reason?: string }> {
  let attempt = 0;
  const MAX_RETRIES = 3;

  while (attempt < MAX_RETRIES) {
    try {
      const bvnData = await bvnProviderAdapter.lookup(bvn);

      if (!bvnData) {
        return { matched: false, reason: "BVN not found" };
      }

      // Cross-reference key fields between NIN and BVN records
      const nameMatch =
        normaliseName(bvnData.firstName) === normaliseName(ninRecord.firstName) &&
        normaliseName(bvnData.lastName) === normaliseName(ninRecord.lastName);

      const dobMatch = bvnData.dateOfBirth === ninRecord.dateOfBirth;

      if (!nameMatch || !dobMatch) {
        return {
          matched: false,
          reason: "BVN record does not match NIN record",
        };
      }

      return { matched: true };

    } catch (err: unknown) {
      if (isRateLimitError(err) && attempt < MAX_RETRIES - 1) {
        // Exponential backoff: 1s, 2s, 4s
        await sleep(1000 * Math.pow(2, attempt));
        attempt++;
        continue;
      }
      throw err;
    }
  }

  return { matched: false, reason: "Verification service temporarily unavailable" };
}`}
      />

      <hr className="mx-6 mb-16 border-[#1f1f1f] md:mx-14 lg:mx-20" />

      {/* ── OTP ── */}
      <div className="px-6 pb-6 md:px-14 lg:px-20">
        <h2 className="font-inter text-[1.1rem] font-light text-white mb-6 tracking-tight">Phone OTP — Sent to the Record, Not the Input</h2>
        <div className="space-y-4 font-helvetica text-[15px] leading-[1.8] text-[#b8b8b8]">
          <p>
            This was a deliberate decision that changes how the phone step works. Most KYC flows
            send an OTP to the phone number the user typed in. That just verifies they own that
            number. That doesn&apos;t verify the number is linked to their identity.
          </p>
          <p>
            In this flow, the OTP is sent to the phone number returned by the NIN lookup: the one
            registered against that NIN in the government database. If the user doesn&apos;t have access
            to that number, verification stops. It&apos;s a stricter check, and it catches cases where
            someone has another person&apos;s NIN and BVN but not their registered SIM.
          </p>
          <p>
            The phone number from the NIN record is partially masked when displayed to the user —
            they can see enough to know which number it&apos;s going to, but it&apos;s not shown in full.
          </p>
        </div>
      </div>

      <CodeBlock
        filename="api/kyc/send-otp/route.ts"
        code={`export async function POST(req: Request) {
  const { sessionId } = await req.json();

  // Load the in-progress KYC session — contains the NIN record from step 1
  const session = await kycSessionStore.get(sessionId);
  if (!session?.ninRecord) {
    return Response.json({ error: "Session not found or NIN step incomplete" }, { status: 400 });
  }

  // Send OTP to the phone on the NIN record, not the phone the user typed
  const targetPhone = session.ninRecord.phoneNumber;

  const otpToken = generateSecureOTP(6);
  const expiry = Date.now() + 5 * 60 * 1000; // 5 minutes

  // Store hashed OTP — never the plaintext
  await kycSessionStore.update(sessionId, {
    otpHash: await bcrypt.hash(otpToken, 10),
    otpExpiry: expiry,
    otpAttempts: 0,
  });

  await smsProvider.send({
    to: targetPhone,
    message: \`Your verification code is \${otpToken}. Valid for 5 minutes. Do not share this code.\`,
  });

  // Return masked phone to show in the UI ("sent to 080****1234")
  return Response.json({
    success: true,
    maskedPhone: maskPhone(targetPhone),
  });
}`}
      />

      <Placeholder label="Image — OTP step showing masked phone number and input" />

      <hr className="mx-6 mb-16 border-[#1f1f1f] md:mx-14 lg:mx-20" />

      {/* ── Form state ── */}
      <div className="px-6 pb-6 md:px-14 lg:px-20">
        <h2 className="font-inter text-[1.1rem] font-light text-white mb-6 tracking-tight">Form State & Recovery</h2>
        <div className="space-y-4 font-helvetica text-[15px] leading-[1.8] text-[#b8b8b8]">
          <p>
            A multi-step form where each step makes a network call has a lot of ways to get into
            a broken state. The user could close the tab mid-way, the API could timeout, or a
            verification could partially succeed before an error interrupts it.
          </p>
          <p>
            Each verification attempt writes its state to a server-side session keyed to the user.
            If the form is re-opened, it rehydrates from that session. Already-completed steps are
            shown as confirmed, and the user picks up from wherever they left off. Nothing is lost
            and no step is unnecessarily repeated.
          </p>
        </div>
      </div>

      <CodeBlock
        filename="lib/kyc/session.ts"
        code={`export type KYCStepStatus = "pending" | "in_progress" | "verified" | "failed";

export type KYCSession = {
  sessionId: string;
  userId: string;
  steps: {
    nin: KYCStepStatus;
    bvn: KYCStepStatus;
    otp: KYCStepStatus;
    confirmation: KYCStepStatus;
  };
  ninRecord: NINRecord | null;
  otpHash: string | null;
  otpExpiry: number | null;
  otpAttempts: number;
  completedAt: number | null;
};

// Derive the current active step from session state
export function getActiveStep(session: KYCSession): keyof KYCSession["steps"] {
  const order: (keyof KYCSession["steps"])[] = ["nin", "bvn", "otp", "confirmation"];

  for (const step of order) {
    if (session.steps[step] !== "verified") return step;
  }

  return "confirmation"; // all done
}`}
      />

      <Placeholder label="Image — Form recovery flow or session state diagram" />

      <hr className="mx-6 mb-16 border-[#1f1f1f] md:mx-14 lg:mx-20" />

      {/* ── Error handling ── */}
      <div className="px-6 pb-6 md:px-14 lg:px-20">
        <h2 className="font-inter text-[1.1rem] font-light text-white mb-6 tracking-tight">Handling Partial Failures Gracefully</h2>
        <div className="space-y-4 font-helvetica text-[15px] leading-[1.8] text-[#b8b8b8]">
          <p>
            Not every verification failure means fraud. NIN records sometimes have typos in the
            government database itself. BVN records occasionally have a name formatted differently
            than the NIN. OTPs get delayed by the SMS provider. All of these are real scenarios
            that would break a naive fail-fast implementation.
          </p>
          <p>
            The error layer distinguishes between three types of failure: a hard mismatch (what
            the user provided doesn&apos;t match the record), a soft inconsistency (records exist but
            have a formatting difference), and a service failure (the API didn&apos;t respond). Each gets
            a different UI state: one is a dead end, one prompts the user to double-check their
            input, and one is retried automatically with a visible indicator.
          </p>
        </div>
      </div>

      <CodeBlock
        filename="lib/kyc/errors.ts"
        code={`export type KYCFailureKind =
  | "HARD_MISMATCH"      // Data doesn't match — stop
  | "SOFT_INCONSISTENCY" // Possible formatting difference — prompt user to verify input
  | "SERVICE_UNAVAILABLE"; // Third-party API down — retry

export type KYCError = {
  kind: KYCFailureKind;
  step: string;
  message: string;
  retryable: boolean;
};

export function classifyError(err: unknown, step: string): KYCError {
  if (err instanceof ProviderTimeoutError || err instanceof NetworkError) {
    return {
      kind: "SERVICE_UNAVAILABLE",
      step,
      message: "Verification service is temporarily unavailable. Retrying...",
      retryable: true,
    };
  }

  if (err instanceof RecordMismatchError) {
    // Check if the mismatch is a known formatting issue (e.g. hyphenated names)
    const isSoft = err.field === "name" && levenshteinDistance(err.expected, err.received) <= 2;

    return {
      kind: isSoft ? "SOFT_INCONSISTENCY" : "HARD_MISMATCH",
      step,
      message: isSoft
        ? "There may be a formatting difference. Please confirm the name exactly as it appears on your ID."
        : \`The \${err.field} you entered does not match the record for this \${step.toUpperCase()}.\`,
      retryable: isSoft,
    };
  }

  return {
    kind: "HARD_MISMATCH",
    step,
    message: "Verification could not be completed. Please check your details and try again.",
    retryable: false,
  };
}`}
      />

      <Placeholder label="Image — Error states in the form UI: mismatch vs service unavailable" />

      <hr className="mx-6 mb-16 border-[#1f1f1f] md:mx-14 lg:mx-20" />

      {/* ── Reflection ── */}
      <div className="px-6 pb-6 md:px-14 lg:px-20">
        <h2 className="font-inter text-[1.1rem] font-light text-white mb-6 tracking-tight">What I&apos;d Do Differently</h2>
        <div className="space-y-4 font-helvetica text-[15px] leading-[1.8] text-[#b8b8b8]">
          <p>
            The session-based recovery works, but storing in-progress KYC state server-side has a
            cost: you&apos;re holding onto partially-verified PII for longer than you&apos;d want. A
            better approach would be to encrypt the session payload client-side and pass it back
            on each request, so nothing sensitive persists server-side between steps.
          </p>
          <p>
            The name normalisation logic also grew organically and is now more complex than it
            needs to be. Replacing it with a proper fuzzy match library with configurable tolerance
            thresholds would make it more reliable and easier to reason about.
          </p>
          <p>
            Most importantly, testing against the actual APIs is slow and expensive during
            development. Building a local provider mock earlier would have saved a lot of time. It&apos;s
            the first thing I&apos;d set up on the next project of this kind.
          </p>
        </div>
      </div>

      {/* ── Footer ── */}
      <div className="px-6 pb-20 pt-8 md:px-14 lg:px-20">
        <hr className="mb-10 border-[#1f1f1f]" />
        <p className="font-helvetica text-[15px] text-[#5c5c5c]">Thanks for reading.</p>
        <p className="font-helvetica mt-2 text-[15px] text-[#5c5c5c]">
          Questions about this project?{" "}
          <Link href="/" className="text-[#c0c0c0] underline underline-offset-2 hover:text-[#6366f1] transition-colors">
            Get in touch
          </Link>
          .
        </p>
        <div className="mt-8 flex flex-wrap gap-8 text-sm">
          <Link href="/" className="font-helvetica text-[#5c5c5c] transition-colors hover:text-[#6366f1]">
            ← Home
          </Link>
        </div>
      </div>

    </div>
  );
}

const _ = ACCENT;
