import { Button } from "@/components/ui/button"
import type { SocialLink, ContactInfo } from "@/types"
import { Mail, MapPin, Phone } from "lucide-react"

interface HeroSectionProps {
  contactInfo: ContactInfo
  socialLinks: SocialLink[]
}

export function HeroSection({ contactInfo, socialLinks }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-zinc-900 to-black">
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(68,_68,_68,_0.2)_50%,transparent_75%,transparent_100%)] bg-[length:20px_20px] opacity-20"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center text-center space-y-8">
          <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-pink-500/20">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/reals.jpg-hqKHYJvQRHtyyPjDJZ2FqMFSEdAXHm.jpeg"
              alt="Profile"
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-pink-500/10 to-transparent"></div>
          </div>
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-white">George Karl M. Real</h1>
            <h2 className="text-xl md:text-2xl font-medium text-pink-400">Software Developer</h2>
            <p className="max-w-[600px] text-gray-400 italic text-lg">
              "Judge me by my works and my progress. Fast Learner and fast progress."
            </p>
          </div>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button variant="outline" className="group hover:bg-pink-500 hover:text-white transition-all">
              <Mail className="mr-2 h-4 w-4 group-hover:animate-pulse" />
              <span className="hidden sm:inline">{contactInfo.email}</span>
              <span className="sm:hidden">Email</span>
            </Button>
            <Button variant="outline" className="group hover:bg-pink-500 hover:text-white transition-all">
              <Phone className="mr-2 h-4 w-4 group-hover:animate-pulse" />
              <span className="hidden sm:inline">{contactInfo.phone}</span>
              <span className="sm:hidden">Phone</span>
            </Button>
            <Button variant="outline" className="group hover:bg-pink-500 hover:text-white transition-all">
              <MapPin className="mr-2 h-4 w-4 group-hover:animate-pulse" />
              <span className="hidden sm:inline">{contactInfo.location}</span>
              <span className="sm:hidden">Location</span>
            </Button>
            {socialLinks.map((social) => (
              <Button
                key={social.platform}
                variant="outline"
                className="group hover:bg-pink-500 hover:text-white transition-all"
                asChild
              >
                <a href={social.url} target="_blank" rel="noopener noreferrer" className="flex items-center">
                  <social.icon className="mr-2 h-4 w-4 group-hover:animate-pulse" />
                  <span className="hidden sm:inline">{social.username}</span>
                  <span className="sm:hidden">{social.platform}</span>
                </a>
              </Button>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  )
}

