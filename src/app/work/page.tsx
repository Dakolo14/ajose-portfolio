import ProjectCard from "../../components/ProjectCard";
import { featuredProjects } from "../../data/featuredProjects";

export default function Work() {
  const designProjects = featuredProjects.filter((p) => p.active && p.category === "design");
  const engineeringProjects = featuredProjects.filter((p) => p.active && p.category === "engineering");

  return (
    <div className="w-full max-w-5xl mx-auto py-12 px-4 sm:px-6">
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <span className="w-3 h-3 rounded-full bg-[#ED017F]" />
          User Interface & Product Design
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {designProjects.map((project) => (
            <ProjectCard key={project.href} {...project} />
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <span className="w-3 h-3 rounded-full bg-[#2563eb]" />
          Engineering & Frontend Architecture
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {engineeringProjects.map((project) => (
            <ProjectCard key={project.href} {...project} />
          ))}
        </div>
      </section>
    </div>
  );
}
