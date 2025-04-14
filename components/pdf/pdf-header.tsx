import type { jsPDF } from "jspdf"
import type { ContactInfo } from "@/types"
import { COLORS, SPACING } from "./pdf-utils"

interface PDFHeaderProps {
  doc: jsPDF
  contactInfo: ContactInfo
  name: string
  title: string
  startY: number
  margin: number
}

export function renderPDFHeader({ doc, contactInfo, name, title, startY, margin }: PDFHeaderProps): number {
  let currentY = startY

  // Name
  doc.setFontSize(22)
  doc.setFont("helvetica", "bold")
  doc.setTextColor(...COLORS.text)
  doc.text(name, margin, (currentY += 30))

  // Title
  doc.setFontSize(16)
  doc.setFont("helvetica", "normal")
  doc.setTextColor(...COLORS.primary)
  doc.text(title, margin, (currentY += 25))

  // Contact Information
  doc.setFontSize(11)
  doc.setTextColor(...COLORS.text)
  currentY += SPACING.paragraphGap

  // Email
  doc.text(`Email: ${contactInfo.email}`, margin, (currentY += SPACING.lineHeight))

  // Phone
  doc.text(`Phone: ${contactInfo.phone}`, margin, (currentY += SPACING.lineHeight))

  // Location
  doc.text(`Location: ${contactInfo.location}`, margin, (currentY += SPACING.lineHeight))

  return currentY + SPACING.sectionGap
}

