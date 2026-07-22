import { HiCode } from 'react-icons/hi'
import { FaNpm } from 'react-icons/fa'
import { FadeIn } from '../components/ui/FadeIn'
import { Button } from '../components/ui/Button'
import { Section, SectionHeading } from '../components/ui/Section'
import { portfolioData } from '../data/portfolio'

export function OpenSource() {
  return (
    <Section id="open-source" className="section-divider bg-zinc-950/40">
      <SectionHeading
        label="Open Source"
        title="NPM packages"
        description="Libraries and tools I've published for the developer community."
      />

      <div className="grid gap-4 md:grid-cols-2">
        {portfolioData.openSource.map((pkg, index) => (
          <FadeIn key={pkg.id} delay={index * 0.1}>
            <div className="card card-hover group flex h-full flex-col p-5 sm:p-6">
              <div className="mb-4 flex items-start justify-between gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-500/10 text-red-400 ring-1 ring-red-500/20">
                  <FaNpm className="h-6 w-6" />
                </div>
                {pkg.downloads && (
                  <span className="rounded-full border border-zinc-700/60 bg-zinc-800/60 px-2.5 py-1 text-[11px] font-medium text-zinc-400">
                    {pkg.downloads}
                  </span>
                )}
              </div>

              <h3 className="text-base font-semibold text-white transition-colors group-hover:text-blue-400 sm:text-lg">
                {pkg.name}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-400">
                {pkg.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2 border-t border-zinc-800/80 pt-4">
                <Button href={pkg.githubUrl} variant="ghost" size="sm" className="!px-3 !py-1.5 text-xs">
                  <HiCode className="h-3.5 w-3.5" />
                  GitHub
                </Button>
                <Button href={pkg.npmUrl} variant="ghost" size="sm" className="!px-3 !py-1.5 text-xs text-red-400 hover:text-red-300">
                  <FaNpm className="h-3.5 w-3.5" />
                  NPM
                </Button>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  )
}
