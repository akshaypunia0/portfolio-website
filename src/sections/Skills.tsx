import { FadeIn } from '../components/ui/FadeIn'
import { Section, SectionHeading } from '../components/ui/Section'
import { portfolioData } from '../data/portfolio'

export function Skills() {
  return (
    <Section id="skills" className="section-divider bg-zinc-950/40">
      <SectionHeading
        label="Skills"
        title="Technical toolkit"
        description="Technologies I use to build scalable backends and polished frontends."
      />

      <div className="grid gap-4 sm:grid-cols-2">
        {portfolioData.skills.map((category, index) => (
          <FadeIn key={category.id} delay={index * 0.08}>
            <div className="card card-hover group h-full p-5 sm:p-6">
              <h3 className="mb-3 text-base font-semibold text-white sm:text-lg">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-zinc-700/60 bg-zinc-800/40 px-2.5 py-1 text-xs font-medium text-zinc-300 transition-colors group-hover:border-zinc-600 sm:text-sm sm:px-3 sm:py-1.5"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  )
}
