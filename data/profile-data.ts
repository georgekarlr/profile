import { Twitter, Linkedin, Facebook } from "lucide-react"

export const contactInfo = {
  email: "georgekarlr@gmail.com",
  phone: "09100868963",
  location: "Pagadian City, Philippines",
}

export const socialLinks = [
  {
    platform: "Twitter",
    url: "https://x.com/UmeChannel4",
    displayUrl: "x.com/UmeChannel4",
    icon: Twitter,
  },
  {
    platform: "LinkedIn",
    url: "https://www.linkedin.com/in/georgekarlreal/",
    displayUrl: "linkedin.com/in/georgekarlreal",
    icon: Linkedin,
  },
  {
    platform: "Facebook",
    url: "https://www.facebook.com/profile.php?id=100010122512657",
    displayUrl: "facebook.com/georgekarlreal",
    icon: Facebook,
  },
]

export const programmingLanguages = [
  { name: "Kotlin", percentage: 95 },
  { name: "Java", percentage: 80 },
  { name: "JavaScript", percentage: 50 },
  { name: "SQL", percentage: 85 },
  { name: "Python", percentage: 40 },
]

export const softwareStacks = [
  {
    title: "Kotlin Multiplatform",
    description:
      "Full-stack development with cross-platform capabilities, building shared business logic and platform-specific UIs",
    skills: ["Kotlin/JS", "Kotlin/JVM", "Kotlin/Native", "Ktor", "Compose Multiplatform"],
  },
  {
    title: "Java Development",
    description: "Strong foundation in Java programming, focusing on efficient and maintainable code practices",
    skills: ["Java Coding"],
  },
  {
    title: "JavaScript",
    description: "Using AI: Frontend and full-stack development using modern JavaScript frameworks and tools",
    skills: ["React", "Next.js", "Node.js", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "AI Integration",
    description:
      "Full-stack development with AI integration capabilities, implementing machine learning solutions and AI-powered features",
    skills: ["TensorFlow", "OpenAI API", "Hugging Face"],
  },
]

export const projects = [
  {
    title: "Point of Sales and Inventory with Analytics and AI",
    description:
      "A comprehensive POS system with inventory management, analytics dashboard, and AI-powered insights for business intelligence.",
    links: [
      {
        type: "youtube",
        url: "https://www.youtube.com/watch?v=zy8BG_kIBEY",
        displayUrl: "youtube.com/watch?v=zy8BG_kIBEY",
        label: "POS System Demo",
      },
      {
        type: "youtube",
        url: "https://www.youtube.com/watch?v=1dAexLPnzuk",
        displayUrl: "youtube.com/watch?v=1dAexLPnzuk",
        label: "POS Statistics with AI",
      },
    ],
  },
  {
    title: "Website created with WASM",
    description: "A web application built with WebAssembly technology.",
    demoCredentials: {
      email: "real@gmail.com",
      password: "123456",
    },
    links: [
      {
        type: "website",
        url: "https://real-rentmanager.vercel.app/",
        displayUrl: "real-rentmanager.vercel.app",
        label: "View Project",
      },
    ],
  },
  {
    title: "Kotlin WASM Project",
    description: "Cross-platform application showcasing Kotlin's capabilities.",
    links: [
      {
        type: "website",
        url: "https://georgekarlreal-transparency.netlify.app/",
        displayUrl: "georgekarlreal-transparency.netlify.app",
        label: "View Project",
      },
    ],
  },
]

