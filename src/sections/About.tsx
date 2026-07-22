import { HiAcademicCap } from 'react-icons/hi'
import { FadeIn } from '../components/ui/FadeIn'
import { Section, SectionHeading } from '../components/ui/Section'
import { portfolioData } from '../data/portfolio'

export function About() {
  const { about } = portfolioData

  return (
    <Section id="about" className="section-divider bg-zinc-950/40">
      <SectionHeading
        label="About"
        title="Backend-Focused, Full-stack developer"
        description="I build systems that are reliable under load and straightforward to maintain."
      />

      <div className="grid gap-5 lg:grid-cols-2">
        <FadeIn>
          <div className="card card-hover p-6 sm:p-7">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400 ring-1 ring-blue-500/20">
                <HiAcademicCap className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold text-white">Education</h3>
            </div>
            <p className="font-medium text-zinc-200">{about.education1.degree}</p>
            <p className="mt-1 text-zinc-400">{about.education1.institution}</p>
            <p className="mt-1 text-sm text-zinc-500">{about.education1.period}</p>
          </div>
        </FadeIn>
        
        <FadeIn>
          <div className="card card-hover p-6 sm:p-7">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400 ring-1 ring-blue-500/20">
                <HiAcademicCap className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold text-white">Education</h3>
            </div>
            <p className="font-medium text-zinc-200">{about.education2.degree}</p>
            <p className="mt-1 text-zinc-400">{about.education2.institution}</p>
            <p className="mt-1 text-sm text-zinc-500">{about.education2.period}</p>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="card card-hover p-6 sm:p-7">
            <h3 className="mb-4 text-lg font-semibold text-white">
              Experience Summary
            </h3>
            <p className="leading-relaxed text-zinc-400">{about.summary}</p>
          </div>
        </FadeIn>

        <FadeIn delay={0.2} className="lg:col-span-2">
          <div className="card card-hover border-blue-500/10 bg-gradient-to-br from-zinc-900/60 to-blue-950/10 p-6 sm:p-7">
            <h3 className="mb-3 text-lg font-semibold text-white">
              Developer Profile
            </h3>
            <p className="max-w-3xl leading-relaxed text-zinc-400">
              {about.profile}
            </p>
          </div>
        </FadeIn>
      </div>
    </Section>
  )
}
