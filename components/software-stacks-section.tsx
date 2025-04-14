import { SectionTitle } from "@/components/section-title"
import type { SoftwareStack } from "@/types"

interface SoftwareStacksSectionProps {
  stacks: SoftwareStack[]
}

export function SoftwareStacksSection({ stacks }: SoftwareStacksSectionProps) {
  return (
    <section className="mb-8 sm:mb-12">
      <SectionTitle>Software Skill Stack</SectionTitle>
      <div className="grid gap-4 sm:gap-6">
        {stacks.map((stack, index) => (
          <div
            key={index}
            className="border border-zinc-800 rounded-lg p-4 sm:p-6 hover:border-pink-500/50 transition-all"
          >
            <h4 className="text-base sm:text-lg font-medium text-white mb-2">{stack.title}</h4>
            <p className="text-gray-400 text-sm sm:text-base">{stack.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

