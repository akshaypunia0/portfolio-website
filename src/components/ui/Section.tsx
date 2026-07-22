import { type ReactNode } from 'react'
import { FadeIn } from './FadeIn'

interface SectionHeadingProps {
  label: string
  title: string
  description?: string
  align?: 'left' | 'center'
}

export function SectionHeading({
  label,
  title,
  description,
  align = 'left',
}: SectionHeadingProps) {
  const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-left'

  return (
    <FadeIn className={`mb-10 sm:mb-12 max-w-2xl ${alignClass}`}>
      <div className={`mb-3 flex items-center gap-3 ${align === 'center' ? 'justify-center' : ''}`}>
        <span className="h-px w-8 bg-gradient-to-r from-blue-500 to-cyan-400" />
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-400">
          {label}
        </p>
      </div>
      <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-base leading-relaxed text-zinc-400 sm:text-lg">
          {description}
        </p>
      )}
    </FadeIn>
  )
}

interface SectionProps {
  id: string
  children: ReactNode
  className?: string
}

export function Section({ id, children, className = '' }: SectionProps) {
  return (
    <section id={id} className={`section-padding scroll-mt-20 ${className}`}>
      <div className="section-container">{children}</div>
    </section>
  )
}
