import { HiExternalLink, HiCode } from 'react-icons/hi'
import { FadeIn } from '../components/ui/FadeIn'
import { Button } from '../components/ui/Button'
import { Section, SectionHeading } from '../components/ui/Section'
import { portfolioData } from '../data/portfolio'

export function Projects() {
  return (
    <Section id="projects">
      <SectionHeading
        label="Projects"
        title="Selected work"
        description="Production-oriented projects showcasing backend architecture and full-stack delivery."
      />

      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {portfolioData.projects.map((project, index) => (
          <FadeIn key={project.id} delay={index * 0.08}>
            <article className="card card-hover group flex h-full flex-col overflow-hidden">
              <div className="relative h-36 overflow-hidden sm:h-32">
                <img
                  src={project.image}
                  alt={`${project.name} preview`}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/90 via-zinc-900/20 to-transparent" />
              </div>

              <div className="flex flex-1 flex-col p-4">
                <h3 className="text-base font-semibold text-white transition-colors group-hover:text-blue-400">
                  {project.name}
                </h3>
                <p className="mt-1.5 flex-1 text-xs leading-relaxed text-zinc-400 sm:text-sm">
                  {project.description}
                </p>

                <div className="mt-3 flex flex-wrap gap-1.5">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md bg-zinc-800/80 px-2 py-0.5 text-[11px] font-medium text-zinc-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-4 flex flex-wrap gap-2 border-t border-zinc-800/80 pt-3">
                  <Button href={project.githubUrl} variant="ghost" size="sm" className="!px-3 !py-1.5 text-xs">
                    <HiCode className="h-3.5 w-3.5" />
                    GitHub
                  </Button>
                  {project.liveUrl && (
                    <Button href={project.liveUrl} variant="ghost" size="sm" className="!px-3 !py-1.5 text-xs text-blue-400 hover:text-blue-300">
                      <HiExternalLink className="h-3.5 w-3.5" />
                      Live Demo
                    </Button>
                  )}
                </div>
              </div>
            </article>
          </FadeIn>
        ))}
      </div>
    </Section>
  )
}
