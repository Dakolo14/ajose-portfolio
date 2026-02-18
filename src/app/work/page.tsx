import ProjectCard from "../../components/ProjectCard";

export default function Work() {
  return (
    <div className="w-full max-w-5xl mx-auto py-12">
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-white mb-6">User Interface</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <ProjectCard
            title="StatMind"
            subtitle="Product Design & Strategy"
            description="Analytics platform with intelligent insights and real-time dashboards."
            href="/work/user-interface/statmind"
            accentColor="#5A6BFF"
          />
          <ProjectCard
            title="Konga WorkStation"
            subtitle="User Interface Design"
            description="Enterprise workspace management solution for team collaboration."
            href="/work/user-interface/konga-workstation"
          />
          <ProjectCard
            title="Servewell"
            subtitle="UI/UX Design"
            description="Customer service platform with intuitive agent and customer interfaces."
            href="/work/user-interface/servewell"
          />
          <ProjectCard
            title="CeraVe CerAwards Campaign"
            subtitle="Campaign Design & Experience"
            description="Interactive awards campaign with gamification elements."
            href="/work/user-interface/cerave-cerawards"
          />
          <ProjectCard
            title="Payfly Ecosystem"
            subtitle="Payment System Design"
            description="Comprehensive payment infrastructure with seamless integration."
            href="/work/user-interface/payfly-ecosystem"
          />
          <ProjectCard
            title="DriveHelp"
            subtitle="Product Design"
            description="Transportation assistance platform design."
            href="/work/user-interface/drivehelp"
          />
        </div>
      </section>
      <section>
        <h2 className="text-2xl font-bold text-white mb-6">Engineering</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <ProjectCard
            title="CeraVe CerAwards Campaign"
            subtitle="Campaign Engineering"
            description="Interactive awards campaign with gamification elements."
            href="/work/engineering/cerave-cerawards"
          />
          <ProjectCard
            title="Konga Group"
            subtitle="Product Engineering"
            description="Engineering and development for Konga Group platform."
            href="/work/engineering/konga-group"
          />
          <ProjectCard
            title="Konga Rework"
            subtitle="Platform Rework"
            description="Complete platform restructuring and optimization."
            href="/work/engineering/konga-rework"
          />
          <ProjectCard
            title="KYC Interactive Form"
            subtitle="Form Engineering"
            description="Developed a dynamic KYC form for seamless onboarding."
            href="/work/engineering/kyc-interactive-form"
          />
        </div>
      </section>
    </div>
  );
} 