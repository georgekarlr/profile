import type { jsPDF } from "jspdf"
import type { Skill } from "@/types"
import { COLORS, SPACING, addSectionDivider } from "./pdf-utils"

interface PDFSkillsProps {
  doc: jsPDF
  skills: Skill[]
  currentY: number
  margin: number
  pageWidth: number
  checkAndAddNewPage: (currentY: number, requiredSpace: number) => number
}

function drawProgressBar(doc: jsPDF, x: number, y: number, width: number, percentage: number) {
  // Draw background bar
  doc.setDrawColor(...COLORS.divider)
  doc.setFillColor(...COLORS.divider)
  doc.rect(x, y, width, 6, "F")

  // Draw progress
  doc.setDrawColor(...COLORS.primary)
  doc.setFillColor(...COLORS.primary)
  doc.rect(x, y, width * (percentage / 100), 6, "F")
}

export function renderPDFSkills({
  doc,
  skills,
  currentY,
  margin,
  pageWidth,
  checkAndAddNewPage,
}: PDFSkillsProps): number {
  currentY = checkAndAddNewPage(currentY, 40 + skills.length * 30)

  // Add section divider
  addSectionDivider(doc, currentY)
  currentY += SPACING.paragraphGap

  // Section title
  doc.setFont("helvetica", "bold")
  doc.setFontSize(16)
  doc.setTextColor(...COLORS.primary)
  doc.text("Programming Languages", margin, (currentY += SPACING.lineHeight))

  currentY += SPACING.paragraphGap

  doc.setFontSize(12)
  doc.setFont("helvetica", "normal")
  skills.forEach((skill) => {
    currentY = checkAndAddNewPage(currentY, 30)

    // Language name
    doc.setFont("helvetica", "bold")
    doc.setTextColor(...COLORS.text)
    doc.text(skill.name, margin, (currentY += SPACING.lineHeight + 5))

    // Percentage
    const percentageText = `${skill.percentage}%`
    const percentageWidth = doc.getTextWidth(percentageText)
    doc.setFont("helvetica", "normal")
    doc.setTextColor(...COLORS.text)
    doc.text(percentageText, pageWidth - margin - percentageWidth, currentY)

    // Progress bar - aligned with text baseline
    const barWidth = 200
    const barX = margin + 100
    drawProgressBar(doc, barX, currentY - 4, barWidth, skill.percentage)

    currentY += 5 // Add a bit more space between skills
  })

  return currentY + SPACING.sectionGap
}

