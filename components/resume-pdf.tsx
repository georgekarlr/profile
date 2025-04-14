"use client"

import { Button } from "@/components/ui/button"
import { FileDown, ExternalLink } from "lucide-react"
import { jsPDF } from "jspdf"
import { contactInfo, programmingLanguages, softwareStacks, projects, socialLinks } from "@/data/profile-data"
import {
  PAGE_WIDTH,
  MARGIN,
  CONTENT_WIDTH,
  addPageNumber,
  addHeader,
  createCheckAndAddNewPage,
} from "@/components/pdf/pdf-utils"
import { renderPDFHeader } from "@/components/pdf/pdf-header"
import { renderPDFSection } from "@/components/pdf/pdf-section"
import { renderPDFSkills } from "@/components/pdf/pdf-skills"
import { renderPDFStacks } from "@/components/pdf/pdf-stacks"
import { renderPDFProjects } from "@/components/pdf/pdf-projects"
import { renderPDFSocial } from "@/components/pdf/pdf-social"

export function ResumePDF() {
  const generateResume = () => {
    // Create document with higher quality
    const doc = new jsPDF({
      unit: "pt",
      format: "a4",
      compress: false,
    })

    // Set document properties
    doc.setProperties({
      title: "George Karl M. Real - Resume",
      subject: "Software Developer Resume",
      author: "George Karl M. Real",
      keywords: "resume, software developer, kotlin, java, javascript",
      creator: "Resume Generator",
    })

    // Set fonts
    doc.setFont("helvetica")
    let currentY = MARGIN

    // Add header and page number to first page
    addHeader(doc)
    addPageNumber(doc, 1)

    // Create page check function
    const checkAndAddNewPage = createCheckAndAddNewPage(doc)

    // Render PDF sections
    currentY = renderPDFHeader({
      doc,
      contactInfo,
      name: "George Karl M. Real",
      title: "Software Developer",
      startY: currentY,
      margin: MARGIN,
    })

    // Professional Summary
    currentY = renderPDFSection({
      doc,
      title: "Professional Summary",
      content: '"Judge me by my works and my progress. Self-Learner."',
      currentY,
      margin: MARGIN,
      checkAndAddNewPage,
    })

    // Programming Languages
    currentY = renderPDFSkills({
      doc,
      skills: programmingLanguages,
      currentY,
      margin: MARGIN,
      pageWidth: PAGE_WIDTH,
      checkAndAddNewPage,
    })

    // Software Stacks
    currentY = renderPDFStacks({
      doc,
      stacks: softwareStacks,
      currentY,
      margin: MARGIN,
      contentWidth: CONTENT_WIDTH,
      checkAndAddNewPage,
    })

    // Projects
    currentY = renderPDFProjects({
      doc,
      projects,
      currentY,
      margin: MARGIN,
      contentWidth: CONTENT_WIDTH,
      checkAndAddNewPage,
    })

    // Social Links
    renderPDFSocial({
      doc,
      links: socialLinks,
      currentY,
      margin: MARGIN,
      checkAndAddNewPage,
    })

    doc.save("GeorgeKarlReal-Resume.pdf")
  }


  return (
    <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
    
      <Button
        onClick={generateResume}
        variant="outline"
        className="w-full sm:w-auto group hover:bg-pink-500 hover:text-white transition-all border-pink-500/20"
      >
        <FileDown className="mr-2 h-4 w-4 group-hover:animate-pulse" />
        <span className="hidden sm:inline">Generate Resume</span>
        <span className="sm:hidden">Generate</span>
      </Button>
    </div> 
  )
}

