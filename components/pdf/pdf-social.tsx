import type { jsPDF } from "jspdf"
import type { SocialLink } from "@/types"
import { COLORS, SPACING, addSectionDivider } from "./pdf-utils"

interface PDFSocialProps {
  doc: jsPDF
  links: SocialLink[]
  currentY: number
  margin: number
  checkAndAddNewPage: (currentY: number, requiredSpace: number) => number
}

export function renderPDFSocial({ doc, links, currentY, margin, checkAndAddNewPage }: PDFSocialProps): number {
  currentY = checkAndAddNewPage(currentY, 60 + links.length * SPACING.lineHeight)

  // Add section divider
  addSectionDivider(doc, currentY)
  currentY += SPACING.paragraphGap

  // Section title
  doc.setFontSize(16)
  doc.setFont("helvetica", "bold")
  doc.setTextColor(...COLORS.primary)
  doc.text("Social Media", margin, (currentY += SPACING.lineHeight))

  currentY += SPACING.paragraphGap

  doc.setFontSize(12)
  doc.setFont("helvetica", "normal")
  doc.setTextColor(...COLORS.text)

  links.forEach((social) => {
    currentY = checkAndAddNewPage(currentY, SPACING.lineHeight + 5)

    doc.setFont("helvetica", "bold")
    const platformText = `${social.platform}: `
    doc.text(platformText, margin, (currentY += SPACING.lineHeight))

    // Calculate exact position for alignment
    const platformWidth = doc.getTextWidth(platformText)

    doc.setFont("helvetica", "normal")
    doc.text(social.displayUrl, margin + platformWidth, currentY)
  })

  return currentY + SPACING.sectionGap
}

