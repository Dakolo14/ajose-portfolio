import ProjectCard from "../../components/ProjectCard";

export default function Work() {
  return (
    <div className="w-full max-w-5xl mx-auto py-12">
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-white mb-6">Interface</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <ProjectCard
            title="Konga Group"
            subtitle="Product Design"
            description="Designed and developed a new product for Konga Group."
            href="/work/interface/konga-group"
          />
          <ProjectCard
            title="PayFly Ecosystem"
            subtitle="Brand & UI/UX Design"
            description="Designed seamless payment flows and dashboards for PayFly."
            href="/work/interface/payfly-ecosystem"
          />
          <ProjectCard
            title="Buzzy Media"
            subtitle="UI/UX Redesign"
            description="Created brand identity and responsive website for Buzzy Media."
            href="/work/interface/buzzy-media"
          />
          <ProjectCard
            title="Verselift"
            subtitle="Product Design"
            description="Designed and developed for Verselift's SaaS platform."
            href="/work/interface/verselift"
          />
          <ProjectCard
            title="Bet-Inn"
            subtitle="Brand & UI/UX Design, Interaction Specialist"
            description="Crafted engaging betting experiences for Bet-Inn users."
            href="/work/interface/bet-inn"
          />
        </div>
      </section>
      <section>
        <h2 className="text-2xl font-bold text-white mb-6">Design Engineering</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <ProjectCard
            title="Konga Group"
            subtitle="Product Design"
            description="Designed and developed a new product for Konga Group."
            href="/work/design-engineering/konga-group"
          />
          <ProjectCard
            title="Verselift"
            subtitle="Product Design"
            description="Designed and developed for Verselift's SaaS platform."
            href="/work/design-engineering/verselift"
          />
          <ProjectCard
            title="PrepStack"
            subtitle="UI/UX & Engineering"
            description="Built and designed PrepStack's interactive learning platform."
            href="/work/design-engineering/prepstack"
          />
          <ProjectCard
            title="KYC Interactive Form"
            subtitle="UI/UX & Engineering"
            description="Developed a dynamic KYC form for seamless onboarding."
            href="/work/design-engineering/kyc-interactive-form"
          />
        </div>
      </section>
    </div>
  );
} 