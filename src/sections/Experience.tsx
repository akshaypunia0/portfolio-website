import { FadeIn } from '../components/ui/FadeIn'
import { Section, SectionHeading } from '../components/ui/Section'
import { portfolioData } from '../data/portfolio'
import type { Experience } from '../types'

function TimelineCard({ item, index }: { item: Experience; index: number }) {
  const isInternship = item.type === 'internship'

  return (
    <FadeIn delay={index * 0.1} className="relative pl-8 sm:pl-10">
      <div className="absolute left-[5px] top-3 flex h-full flex-col items-center sm:left-[7px]">
        <div
          className={`z-10 h-2.5 w-2.5 rounded-full ring-4 ring-zinc-950 ${
            isInternship ? 'bg-cyan-400' : 'bg-blue-500'
          }`}
        />
        <div className="mt-1 w-px flex-1 bg-gradient-to-b from-zinc-700/80 to-transparent" />
      </div>

      <div className="card card-hover group p-5 sm:p-6">
        <div className="mb-3 flex flex-wrap items-center gap-2">
          <span
            className={`rounded-full px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wide ${
              isInternship
                ? 'bg-cyan-500/10 text-cyan-400 ring-1 ring-cyan-500/20'
                : 'bg-blue-500/10 text-blue-400 ring-1 ring-blue-500/20'
            }`}
          >
            {isInternship ? 'Internship' : 'Full-time'}
          </span>
          <span className="text-xs text-zinc-500 sm:text-sm">{item.period}</span>
        </div>

        <h3 className="text-lg font-semibold text-white transition-colors group-hover:text-blue-400 sm:text-xl">
          {item.title}
        </h3>
        <p className="mt-1 text-sm text-zinc-400">
          {item.company} · {item.location}
        </p>

        <ul className="mt-4 space-y-2">
          {item.description.map((point) => (
            <li
              key={point}
              className="flex gap-2.5 text-sm leading-relaxed text-zinc-400"
            >
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-blue-500/60" />
              {point}
            </li>
          ))}
        </ul>
      </div>
    </FadeIn>
  )
}

export function ExperienceSection() {
  return (
    <Section id="experience">
      <SectionHeading
        label="Experience"
        title="Professional journey"
        description="From internship to full-time — building production systems and growing as an engineer."
      />

      <div className="space-y-6">
        {portfolioData.experience.map((item, index) => (
          <TimelineCard key={item.id} item={item} index={index} />
        ))}
      </div>
    </Section>
  )
}
