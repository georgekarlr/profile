import { SectionTitle } from "@/components/section-title"
import { SkillCard } from "@/components/skill-card"
import type { Skill } from "@/types"

interface ProgrammingLanguagesSectionProps {
  languages: Skill[]
}

export function ProgrammingLanguagesSection({ languages }: ProgrammingLanguagesSectionProps) {
  return (
    <section className="mb-8 sm:mb-12">
      <SectionTitle>Programming Languages</SectionTitle>
      <div className="space-y-4">
        {languages.map((lang) => (
          <SkillCard key={lang.name} name={lang.name} percentage={lang.percentage} />
        ))}
      </div>
    </section>
  )
}

