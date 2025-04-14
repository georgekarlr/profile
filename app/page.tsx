import { ProfileHeader } from "@/components/profile-header"
import { ProfessionalSummary } from "@/components/professional-summary"
import { ProgrammingLanguagesSection } from "@/components/programming-languages-section"
import { SoftwareStacksSection } from "@/components/software-stacks-section"
import { ProjectsSection } from "@/components/projects-section"
import { SocialLinksSection } from "@/components/social-links-section"
import { contactInfo, socialLinks, programmingLanguages, softwareStacks, projects } from "@/data/profile-data"

export default function ProfilePage() {
  return (
    <main className="min-h-screen bg-zinc-900 px-4 sm:p-8">
      <div className="max-w-4xl mx-auto bg-black rounded-xl shadow-2xl p-4 sm:p-8">
        {/* Header with Download Button */}
        <ProfileHeader
          contactInfo={contactInfo}
          imageUrl="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/reals.jpg-hqKHYJvQRHtyyPjDJZ2FqMFSEdAXHm.jpeg"
          name="George Karl M. Real"
          title="Software Developer"
        />

        {/* Professional Summary */}
        <ProfessionalSummary summary='"Judge me by my works and my progress. Self-Learner."' />

        {/* Programming Languages */}
        <ProgrammingLanguagesSection languages={programmingLanguages} />

        {/* Software Skill Stack */}
        <SoftwareStacksSection stacks={softwareStacks} />

        {/* Projects & Links */}
        <ProjectsSection projects={projects} />

        {/* Social Links */}
        <SocialLinksSection links={socialLinks} />
      </div>
    </main>
  )
}

