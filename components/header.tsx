"use client"

import { ResumePDF } from "./resume-pdf"

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-pink-500/20">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="text-xl font-bold text-white">George Karl M. Real</div>
        <ResumePDF />
      </div>
    </header>
  )
}

