import { Youtube, ExternalLink, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface VideoLinkProps {
  url: string
  displayUrl: string
}

export function VideoLink({ url, displayUrl }: VideoLinkProps) {
  const isYouTube = url.includes("youtube.com") || url.includes("youtu.be")

  return (
    <Button variant="outline" className="group hover:bg-pink-500 hover:text-white transition-all" asChild>
      <a href={url} target="_blank" rel="noopener noreferrer" className="flex items-center">
        {isYouTube ? (
          <Youtube className="mr-2 h-4 w-4 group-hover:animate-pulse" />
        ) : (
          <ExternalLink className="mr-2 h-4 w-4 group-hover:animate-pulse" />
        )}
        Watch Video
        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
      </a>
    </Button>
  )
}

