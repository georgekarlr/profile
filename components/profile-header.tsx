import { Mail, MapPin, Phone } from "lucide-react"
import { ResumePDF } from "@/components/resume-pdf"
import type { ContactInfo } from "@/types"

interface ProfileHeaderProps {
  contactInfo: ContactInfo
  imageUrl: string
  name: string
  title: string
}

export function ProfileHeader({ contactInfo, imageUrl, name, title }: ProfileHeaderProps) {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start gap-6 mb-8">
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 text-center sm:text-left">
        <img
          src={imageUrl || "/placeholder.svg"}
          alt="Profile"
          className="w-24 h-24 sm:w-32 sm:h-32 rounded-full border-4 border-pink-500/20"
        />
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2">{name}</h1>
          <h2 className="text-lg sm:text-xl text-pink-400 mb-4">{title}</h2>
          <div className="space-y-1 text-gray-300 text-sm sm:text-base">
            <p className="flex items-center justify-center sm:justify-start gap-2">
              <Mail className="h-4 w-4 shrink-0" />
              <span className="break-all">{contactInfo.email}</span>
            </p>
            <p className="flex items-center justify-center sm:justify-start gap-2">
              <MapPin className="h-4 w-4 shrink-0" />
              {contactInfo.location}
            </p>
            <p className="flex items-center justify-center sm:justify-start gap-2">
              <Phone className="h-4 w-4 shrink-0" />
              {contactInfo.phone}
            </p>
          </div>
        </div>
      </div>
      <div className="w-full sm:w-auto">
        <ResumePDF />
      </div>
    </div>
  )
}

