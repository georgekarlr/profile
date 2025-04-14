import type React from "react"
import "@/styles/globals.css"
import { Inter } from "next/font/google"
import { cn } from "@/lib/utils"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "George Karl M. Real - Software Developer Portfolio",
  description:
    "Portfolio of George Karl M. Real, a Software Developer specializing in Kotlin Multiplatform, Java, JavaScript, and AI integration. View my projects and download my resume.",
  keywords: [
    "Kotlin",
    "Java",
    "JavaScript",
    "Software Developer",
    "Full Stack Developer",
    "Web Development",
    "Mobile Development",
  ],
  authors: [{ name: "George Karl M. Real" }],
  openGraph: {
    title: "George Karl M. Real - Software Developer Portfolio",
    description:
      "Portfolio of George Karl M. Real, a Software Developer specializing in Kotlin Multiplatform, Java, JavaScript, and AI integration.",
    url: "https://georgekarlreal-transparency.netlify.app/",
    siteName: "George Karl M. Real Portfolio",
    locale: "en_US",
    type: "website",
  },
  // Add the verification meta tag
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={cn(inter.className, "min-h-screen bg-black text-white antialiased")}>{children}</body>
    </html>
  )
}



import './globals.css'