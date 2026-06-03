import Image from "next/image";

export default function About() {
  return (
    <div className="w-full">
      {/* Full-width image */}
      <div className="w-full relative aspect-[16/7] min-h-[200px] bg-[#232323]">
        <Image
          src="/photo-corporate.jpg"
          alt="Ajose Damilare"
          fill
          style={{ objectFit: "cover" }}
          sizes="100vw"
          priority
        />
      </div>

      {/* Content */}
      <div className="w-full px-6 py-12 md:px-14 lg:px-20">

        {/* Background */}
        <div className="mb-16">
          <p className="font-helvetica text-[11px] font-semibold uppercase tracking-widest text-[#6a6a6a] mb-6">Background</p>
          <h1 className="font-inter text-[1.75rem] font-light leading-snug tracking-tight text-white mb-8 md:text-[2.25rem]">
            Product designer focused on<br className="hidden md:block" /> product thinking and craft.
          </h1>
          <div className="space-y-4 font-helvetica text-[15px] leading-[1.8] text-[#9a9a9a]">
            <p>
              Ever since I can remember, I&apos;ve always been drawn to creating
              and sharing my creations with others. While I can&apos;t say for
              certain if I had a natural talent for it, I found immense joy in
              seeing people appreciate the things I made.
            </p>
            <p>
              When I first discovered UX design in 2017, it felt like a perfect
              blend of two worlds I was deeply interested in and naturally
              inclined towards: technology and art. The moment I realized the
              potential of this field, I dove in headfirst, never looking back.
            </p>
            <p>
              Now, I&apos;m designing products, hoping they can bring impact and
              value to the people around the world.
            </p>
          </div>
        </div>

        <hr className="border-[#1f1f1f] mb-16" />

        {/* Extra facts */}
        <div className="mb-16">
          <p className="font-helvetica text-[11px] font-semibold uppercase tracking-widest text-[#6a6a6a] mb-8">Recently, I&apos;ve been</p>
          <ul className="space-y-3">
            {[
              { emoji: "🏋️‍♂️", text: "Working out 4 times weekly" },
              { emoji: "⚽", text: "Supporting Arsenal after winning the Premier League" },
              { emoji: "🚀", text: "Interested in SaaS application builds" },
              { emoji: "🤖", text: "Involving myself in AI automations" },
            ].map(({ emoji, text }) => (
              <li key={text} className="flex items-center gap-3">
                <span className="text-base">{emoji}</span>
                <span className="font-helvetica text-[15px] text-[#c0c0c0]">{text}</span>
              </li>
            ))}
          </ul>
        </div>

        <hr className="border-[#1f1f1f] mb-16" />

        {/* Experience */}
        <div className="mb-16">
          <p className="font-helvetica text-[11px] font-semibold uppercase tracking-widest text-[#6a6a6a] mb-8">Experience</p>
          <div className="flex flex-col gap-5">
            {[
              { company: "Konga Group", role: "Product Design", period: "2023 — Present", color: "#ED017F" },
              { company: "CeraVe", role: "Product Designer & Developer", period: "Contract", color: "#005994" },
              { company: "StatMind", role: "UI/UX Designer", period: "Contract · 2025 — 2026", color: "#5A6BFF" },
            ].map(({ company, role, period, color }) => (
              <div key={company} className="flex items-center justify-between border-b border-[#1f1f1f] pb-5">
                <div className="flex items-center gap-3">
                  <span
                    className="px-2 py-1 rounded text-xs font-medium text-white"
                    style={{ backgroundColor: color }}
                  >
                    {company}
                  </span>
                  <span className="font-helvetica text-[14px] text-[#9a9a9a]">{role}</span>
                </div>
                <span className="font-helvetica text-[13px] text-[#5c5c5c]">{period}</span>
              </div>
            ))}
          </div>
        </div>

        <hr className="border-[#1f1f1f] mb-16" />

        {/* Education */}
        <div>
          <p className="font-helvetica text-[11px] font-semibold uppercase tracking-widest text-[#6a6a6a] mb-8">Education</p>
          <div className="flex flex-col gap-5">
            {[
              { institution: "Caleb University", course: "BSc Computer Science", period: "2018 — 2022", color: "#ff4d00" },
              { institution: "Google · Coursera", course: "UX Design Certificate", period: "2022", color: "#232323" },
            ].map(({ institution, course, period, color }) => (
              <div key={institution} className="flex items-center justify-between border-b border-[#1f1f1f] pb-5">
                <div className="flex items-center gap-3">
                  <span
                    className="px-2 py-1 rounded text-xs font-medium text-white"
                    style={{ backgroundColor: color }}
                  >
                    {institution}
                  </span>
                  <span className="font-helvetica text-[14px] text-[#9a9a9a]">{course}</span>
                </div>
                <span className="font-helvetica text-[13px] text-[#5c5c5c]">{period}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
