export interface Experience {
  id: string
  title: string
  company: string
  location: string
  period: string
  type: string
  description: string[]
}

export interface SkillCategory {
  id: string
  title: string
  skills: string[]
}

export interface Project {
  id: string
  name: string
  description: string
  image: string
  techStack: string[]
  githubUrl: string
  liveUrl?: string
}

export interface OpenSourcePackage {
  id: string
  name: string
  description: string
  downloads?: string
  githubUrl: string
  npmUrl: string
}

export interface SocialLink {
  id: string
  label: string
  url: string
  icon: 'email' | 'linkedin' | 'github'
}

export interface PortfolioData {
  name: string
  title: string
  tagline: string
  email: string
  profilePhoto: string
  resumeUrl: string
  resumeFileName: string
  about: {
      education1: {
        degree: string
        institution: string
        period: string
      },
      education2: {
        degree: string
        institution: string
        period: string
      },
      summary: string
      profile: string

  }
  experience: Experience[]
  skills: SkillCategory[]
  projects: Project[]
  openSource: OpenSourcePackage[]
  socialLinks: SocialLink[]
}
