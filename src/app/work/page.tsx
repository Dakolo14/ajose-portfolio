import ProjectCard from "../../components/ProjectCard";
import { featuredProjects } from "../../data/featuredProjects";

export default function Work() {
  return (
    <div className="w-full max-w-5xl mx-auto py-12">
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-white mb-6">User Interface</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.href} {...project} />
          ))}
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
            accentColor="#005994"
            thumbnail="/cerawards.png"
          />
          <ProjectCard
            title="Konga Group"
            subtitle="Product Engineering"
            description="Engineering and development for Konga Group platform."
            href="/work/engineering/konga-group"
            thumbnail="/kongagroupthumb.png"
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
