import type React from "react"

export type Skill = {
  name: string
  percentage: number
}

export type SoftwareStack = {
  title: string
  description: string
  skills: string[]
}

export type ProjectLink = {
  type: string
  url: string
  displayUrl: string
  label: string
}

export type Project = {
  title: string
  description: string
  links: ProjectLink[]
  demoCredentials?: {
    email: string
    password: string
  }
}

export type SocialLink = {
  platform: string
  url: string
  displayUrl: string
  icon: React.ComponentType<{ className?: string }>
  username?: string
}

export type ContactInfo = {
  email: string
  phone: string
  location: string
}

