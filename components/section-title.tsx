import type React from "react"
interface SectionTitleProps {
  children: React.ReactNode
}

export function SectionTitle({ children }: SectionTitleProps) {
  return <h3 className="text-lg sm:text-xl font-semibold text-white mb-6 text-center sm:text-left">{children}</h3>
}

