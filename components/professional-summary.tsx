import { SectionTitle } from "@/components/section-title"

interface ProfessionalSummaryProps {
  summary: string
}

export function ProfessionalSummary({ summary }: ProfessionalSummaryProps) {
  return (
    <section className="mb-8 sm:mb-12">
      <SectionTitle>Professional Summary</SectionTitle>
      <p className="text-gray-300 italic text-center sm:text-left text-sm sm:text-base">{summary}</p>
    </section>
  )
}

