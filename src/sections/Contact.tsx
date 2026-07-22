import { HiMail } from 'react-icons/hi'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { FadeIn } from '../components/ui/FadeIn'
import { Button } from '../components/ui/Button'
import { ResumeDownloadButton } from '../components/ui/ResumeDownloadButton'
import { Section, SectionHeading } from '../components/ui/Section'
import { portfolioData } from '../data/portfolio'

const iconMap = {
  email: HiMail,
  linkedin: FaLinkedin,
  github: FaGithub,
}

export function Contact() {
  return (
    <Section id="contact">
      <SectionHeading
        label="Contact"
        title="Let's connect"
        description="Open to full-time roles, contract work, and interesting collaborations."
        align="center"
      />

      <FadeIn>
        <div className="card mx-auto max-w-2xl border-zinc-800/80 bg-gradient-to-br from-zinc-900/70 to-zinc-900/30 p-8 text-center sm:p-12">
          <p className="text-base text-zinc-400 sm:text-lg">
            The best way to reach me is via email. I typically respond within 3 to 4 hours.
          </p>

          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-4">
            <Button href={`mailto:${portfolioData.email}`} size="lg">
              <HiMail className="h-5 w-5" />
              {portfolioData.email}
            </Button>
            <ResumeDownloadButton size="lg" />
          </div>

          <div className="mt-10 flex items-center justify-center gap-3">
            {portfolioData.socialLinks.map((link) => {
              const Icon = iconMap[link.icon]
              return (
                <a
                  key={link.id}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-zinc-700/80 bg-zinc-800/40 text-zinc-400 transition-all duration-200 hover:border-blue-500/40 hover:bg-blue-500/10 hover:text-blue-400"
                  aria-label={link.label}
                >
                  <Icon className="h-[1.15rem] w-[1.15rem]" />
                </a>
              )
            })}
          </div>
        </div>
      </FadeIn>
    </Section>
  )
}
