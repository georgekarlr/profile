import type { jsPDF } from "jspdf"
import type { SoftwareStack } from "@/types"
import { COLORS, SPACING, addSectionDivider } from "./pdf-utils"

interface PDFStacksProps {
  doc: jsPDF
  stacks: SoftwareStack[]
  currentY: number
  margin: number
  contentWidth: number
  checkAndAddNewPage: (currentY: number, requiredSpace: number) => number
}

export function renderPDFStacks({
  doc,
  stacks,
  currentY,
  margin,
  contentWidth,
  checkAndAddNewPage,
}: PDFStacksProps): number {
  currentY = checkAndAddNewPage(currentY, 60)

  // Add section divider
  addSectionDivider(doc, currentY)
  currentY += SPACING.paragraphGap

  // Section title
  doc.setFontSize(16)
  doc.setFont("helvetica", "bold")
  doc.setTextColor(...COLORS.primary)
  doc.text("Software Skill Stack", margin, (currentY += SPACING.lineHeight))

  currentY += SPACING.paragraphGap

  doc.setFontSize(12)
  stacks.forEach((stack, index) => {
    currentY = checkAndAddNewPage(currentY, 100)

    // Title
    doc.setFont("helvetica", "bold")
    doc.setTextColor(...COLORS.text)
    doc.text(stack.title, margin, (currentY += SPACING.lineHeight))

    // Description
    doc.setFont("helvetica", "normal")
    doc.setTextColor(...COLORS.text)
    const lines = doc.splitTextToSize(stack.description, contentWidth)
    lines.forEach((line: string) => {
      currentY = checkAndAddNewPage(currentY, SPACING.lineHeight + 5)
      doc.text(line, margin, (currentY += SPACING.lineHeight))
    })

    // Skills bullets if available
    if (stack.skills && stack.skills.length > 0) {
      currentY += SPACING.paragraphGap

      // Create two columns for skills
      const midPoint = margin + contentWidth / 2 - 20 // Adjust for better alignment
      let skillY = currentY

      stack.skills.forEach((skill, idx) => {
        const column = idx % 2 === 0 ? 0 : 1
        const x = column === 0 ? margin : midPoint

        if (column === 0 && idx > 0) {
          skillY += SPACING.lineHeight
        }

        doc.setTextColor(...COLORS.text)
        doc.text(`• ${skill}`, x, skillY)
      })

      currentY = Math.max(currentY, skillY + SPACING.lineHeight)
    }

    currentY += SPACING.sectionGap
  })

  return currentY
}

