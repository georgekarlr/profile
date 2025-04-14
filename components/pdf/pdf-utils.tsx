import type { jsPDF } from "jspdf"

// Constants for PDF generation
export const PAGE_WIDTH = 595.28 // A4 width in points
export const PAGE_HEIGHT = 841.89 // A4 height in points
export const MARGIN = 60 // Increased margin for better readability
export const CONTENT_WIDTH = PAGE_WIDTH - MARGIN * 2
export const FOOTER_HEIGHT = 30

// Colors - simplified for better readability
export const COLORS = {
  primary: [236, 72, 153], // pink-500
  text: [0, 0, 0], // black
  textLight: [100, 100, 100], // gray
  divider: [200, 200, 200], // light gray
}

// Consistent spacing
export const SPACING = {
  sectionGap: 30,
  paragraphGap: 15,
  lineHeight: 20,
}

export function addPageNumber(doc: jsPDF, pageNumber: number) {
  const text = `Page ${pageNumber}`
  doc.setFontSize(10)
  doc.setTextColor(...COLORS.textLight)
  doc.text(text, PAGE_WIDTH / 2, PAGE_HEIGHT - MARGIN / 2, { align: "center" })
}

export function addHeader(doc: jsPDF) {
  // Add subtle header line
  doc.setDrawColor(...COLORS.primary)
  doc.setLineWidth(1)
  doc.line(MARGIN, 40, PAGE_WIDTH - MARGIN, 40)
}

export function addSectionDivider(doc: jsPDF, y: number) {
  doc.setDrawColor(...COLORS.divider)
  doc.setLineWidth(0.5)
  doc.line(MARGIN, y, PAGE_WIDTH - MARGIN, y)
}

export function createCheckAndAddNewPage(doc: jsPDF) {
  return (currentY: number, requiredSpace: number): number => {
    if (currentY + requiredSpace > PAGE_HEIGHT - MARGIN - FOOTER_HEIGHT) {
      doc.addPage()
      addHeader(doc)
      addPageNumber(doc, doc.internal.getNumberOfPages())
      return MARGIN + 20 // Reset Y position on new page with some padding
    }
    return currentY
  }
}

