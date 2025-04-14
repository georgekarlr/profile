import { Button } from "@/components/ui/button"
import { Youtube, Globe, ArrowRight } from "lucide-react"

interface ProjectLinkProps {
  link: {
    type: string
    url: string
    displayUrl: string
    label: string
  }
}

export function ProjectLink({ link }: ProjectLinkProps) {
  const isYoutube = link.type === "youtube"

  return (
    <Button
      variant="outline"
      size="sm"
      className="w-full sm:w-auto group hover:bg-pink-500 hover:text-white transition-all"
      asChild
    >
      <a href={link.url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
        {isYoutube ? (
          <Youtube className="mr-2 h-4 w-4 group-hover:animate-pulse" />
        ) : (
          <Globe className="mr-2 h-4 w-4 group-hover:animate-pulse" />
        )}
        {link.label}
        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
      </a>
    </Button>
  )
}

