import type { jsPDF } from "jspdf"
import { COLORS, SPACING, addSectionDivider } from "./pdf-utils"

interface PDFSectionProps {
  doc: jsPDF
  title: string
  content: string
  currentY: number
  margin: number
  checkAndAddNewPage: (currentY: number, requiredSpace: number) => number
}

export function renderPDFSection({
  doc,
  title,
  content,
  currentY,
  margin,
  checkAndAddNewPage,
}: PDFSectionProps): number {
  currentY = checkAndAddNewPage(currentY, 80)

  // Add section divider
  addSectionDivider(doc, currentY)
  currentY += SPACING.paragraphGap

  // Section title
  doc.setFontSize(16)
  doc.setFont("helvetica", "bold")
  doc.setTextColor(...COLORS.primary)
  doc.text(title, margin, (currentY += SPACING.lineHeight))

  // Content
  doc.setFontSize(12)
  doc.setFont("helvetica", "italic")
  doc.setTextColor(...COLORS.text)
  doc.text(content, margin, (currentY += SPACING.paragraphGap))

  return currentY + SPACING.sectionGap
}

