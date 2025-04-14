import { Card, CardContent } from "@/components/ui/card"
import { ProjectLink } from "@/components/project-link"

interface ProjectCardProps {
  project: {
    title: string
    description: string
    links: {
      type: string
      url: string
      displayUrl: string
      label: string
    }[]
    demoCredentials?: {
      email: string
      password: string
    }
  }
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="bg-zinc-900/50 border-zinc-800 hover:border-pink-500/50 transition-all">
      <CardContent className="pt-6">
        <h4 className="text-base sm:text-lg font-medium text-white mb-2">{project.title}</h4>
        <p className="text-gray-400 mb-4 text-sm sm:text-base">{project.description}</p>

        {project.demoCredentials && (
          <div className="text-gray-400 mb-4 text-sm sm:text-base">
            <p>Demo Credentials:</p>
            <ul className="list-disc list-inside">
              <li>Email: {project.demoCredentials.email}</li>
              <li>Password: {project.demoCredentials.password}</li>
            </ul>
          </div>
        )}

        <div className="flex flex-col gap-3">
          {project.links.map((link, index) => (
            <div key={index} className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
              <span className="text-gray-500 text-sm break-all">{link.displayUrl}</span>
              <ProjectLink link={link} />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

