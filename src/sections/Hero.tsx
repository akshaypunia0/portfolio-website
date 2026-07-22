import { HiArrowDown } from 'react-icons/hi'
import { motion } from 'framer-motion'
import { Button } from '../components/ui/Button'
import { ResumeDownloadButton } from '../components/ui/ResumeDownloadButton'
import { ProfileImage } from '../components/ui/ProfileImage'
import { FadeIn } from '../components/ui/FadeIn'
import { portfolioData } from '../data/portfolio'

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center scroll-mt-20 overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-1/4 h-[28rem] w-[28rem] rounded-full bg-blue-600/8 blur-3xl" />
        <div className="absolute -right-32 bottom-1/4 h-[28rem] w-[28rem] rounded-full bg-cyan-600/8 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)',
            backgroundSize: '72px 72px',
          }}
        />
      </div>

      <div className="section-container relative py-28 sm:py-36 lg:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left — Profile Photo */}
          <FadeIn direction="right" className="order-1 flex justify-center lg:order-1 lg:justify-start">
            <ProfileImage />
          </FadeIn>

          {/* Right — Content */}
          <div className="order-2 lg:order-2">
            <FadeIn delay={0.1}>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-1.5">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-sm font-medium text-blue-300">
                  Available for opportunities
                </span>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl xl:text-6xl">
                Hi, I&apos;m{' '}
                <span className="gradient-text">{portfolioData.name}</span>
              </h1>
            </FadeIn>

            <FadeIn delay={0.3}>
              <p className="mt-4 text-xl font-medium text-zinc-300 sm:text-2xl">
                {portfolioData.title}
              </p>
            </FadeIn>

            <FadeIn delay={0.4}>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-zinc-400 sm:text-lg">
                {portfolioData.tagline}
              </p>
            </FadeIn>

            <FadeIn delay={0.5}>
              <div className="mt-8 flex flex-wrap gap-3 sm:mt-10 sm:gap-4">
                <ResumeDownloadButton size="lg" />
              </div>
            </FadeIn>
          </div>
        </div>

        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 text-zinc-500 transition-colors hover:text-zinc-300 lg:block"
          aria-label="Scroll to about section"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          >
            <HiArrowDown className="h-6 w-6" />
          </motion.div>
        </motion.a>
      </div>
    </section>
  )
}
