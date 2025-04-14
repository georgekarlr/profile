import { SectionTitle } from "@/components/section-title"
import { ProjectCard } from "@/components/project-card"

interface ProjectsSectionProps {
  projects: any[]
}

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <section>
      <SectionTitle>Projects & Links</SectionTitle>
      <div className="grid gap-4 sm:gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  )
}

