import { useState } from 'react'
import { motion } from 'framer-motion'
import { portfolioData } from '../../data/portfolio'

function getInitials(name: string) {
  return name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()
}

export function ProfileImage() {
  const [hasError, setHasError] = useState(false)
  const initials = getInitials(portfolioData.name)

  return (
    <div className="relative mx-auto w-fit lg:mx-0">
      <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-blue-500 via-cyan-400 to-blue-600 opacity-70 blur-md" />
      <div className="absolute -inset-0.5 rounded-full bg-gradient-to-br from-blue-500/50 to-cyan-400/50" />

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
        className="relative h-56 w-56 overflow-hidden rounded-full border-4 border-zinc-900 bg-zinc-800 shadow-2xl shadow-blue-500/10 sm:h-64 sm:w-64 lg:h-72 lg:w-72"
      >
        {!hasError ? (
          <img
            src={portfolioData.profilePhoto}
            alt={`${portfolioData.name} profile`}
            className="h-full w-full object-cover"
            onError={() => setHasError(true)}
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-zinc-800 to-zinc-900">
            <span className="text-5xl font-bold text-zinc-500 sm:text-6xl">
              {initials}
            </span>
          </div>
        )}
      </motion.div>

      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-zinc-700/80 bg-zinc-900/90 px-4 py-1.5 text-xs font-medium text-zinc-300 shadow-lg backdrop-blur-sm">
        {portfolioData.title}
      </div>
    </div>
  )
}
