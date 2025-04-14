import type { jsPDF } from "jspdf"
import type { Project } from "@/types"
import { COLORS, SPACING, addSectionDivider } from "./pdf-utils"

interface PDFProjectsProps {
  doc: jsPDF
  projects: Project[]
  currentY: number
  margin: number
  contentWidth: number
  checkAndAddNewPage: (currentY: number, requiredSpace: number) => number
}

export function renderPDFProjects({
  doc,
  projects,
  currentY,
  margin,
  contentWidth,
  checkAndAddNewPage,
}: PDFProjectsProps): number {
  currentY = checkAndAddNewPage(currentY, 60)

  // Add section divider
  addSectionDivider(doc, currentY)
  currentY += SPACING.paragraphGap

  // Section title
  doc.setFontSize(16)
  doc.setFont("helvetica", "bold")
  doc.setTextColor(...COLORS.primary)
  doc.text("Projects", margin, (currentY += SPACING.lineHeight))

  currentY += SPACING.paragraphGap

  projects.forEach((project, index) => {
    currentY = checkAndAddNewPage(currentY, 120)

    // Title
    doc.setFontSize(14)
    doc.setFont("helvetica", "bold")
    doc.setTextColor(...COLORS.text)
    doc.text(project.title, margin, (currentY += SPACING.lineHeight))

    currentY += SPACING.paragraphGap / 2

    // Description
    doc.setFontSize(12)
    doc.setFont("helvetica", "normal")
    doc.setTextColor(...COLORS.text)

    const descriptionLines = doc.splitTextToSize(project.description, contentWidth)
    descriptionLines.forEach((line: string) => {
      currentY = checkAndAddNewPage(currentY, SPACING.lineHeight + 5)
      doc.text(line, margin, (currentY += SPACING.lineHeight))
    })

    // Demo credentials
    if (project.demoCredentials) {
      currentY += SPACING.paragraphGap
      currentY = checkAndAddNewPage(currentY, 70)

      doc.setFont("helvetica", "bold")
      doc.text("Demo Credentials:", margin, (currentY += SPACING.lineHeight))

      doc.setFont("helvetica", "normal")
      doc.text(`• Email: ${project.demoCredentials.email}`, margin + 10, (currentY += SPACING.lineHeight))
      doc.text(`• Password: ${project.demoCredentials.password}`, margin + 10, (currentY += SPACING.lineHeight))
    }

    // Links
    if (project.links && project.links.length > 0) {
      currentY += SPACING.paragraphGap
      currentY = checkAndAddNewPage(currentY, SPACING.lineHeight * project.links.length)

      project.links.forEach((link) => {
        // Icon based on link type
        const prefix = link.type === "youtube" ? "• YouTube: " : "• Website: "

        doc.setFont("helvetica", "bold")
        doc.text(prefix, margin, (currentY += SPACING.lineHeight))

        // Calculate exact position for alignment
        const prefixWidth = doc.getTextWidth(prefix)

        doc.setFont("helvetica", "normal")
        doc.text(link.displayUrl, margin + prefixWidth, currentY)
      })
    }

    currentY += SPACING.sectionGap
  })

  return currentY
}

