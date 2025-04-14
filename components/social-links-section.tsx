import { Button } from "@/components/ui/button"
import type { SocialLink } from "@/types"

interface SocialLinksSectionProps {
  links: SocialLink[]
}

export function SocialLinksSection({ links }: SocialLinksSectionProps) {
  return (
    <div className="border border-zinc-800 rounded-lg p-4 sm:p-6 mt-6">
      <h4 className="text-base sm:text-lg font-medium text-white mb-4">Social Media</h4>
      <div className="space-y-3">
        {links.map((social) => (
          <div
            key={social.platform}
            className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2"
          >
            <span className="text-gray-500 text-sm break-all">{social.displayUrl}</span>
            <Button
              variant="outline"
              size="sm"
              className="w-full sm:w-auto group hover:bg-pink-500 hover:text-white transition-all"
              asChild
            >
              <a
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center"
              >
                <social.icon className="mr-2 h-4 w-4 group-hover:animate-pulse" />
                {social.platform}
              </a>
            </Button>
          </div>
        ))}
      </div>
    </div>
  )
}

