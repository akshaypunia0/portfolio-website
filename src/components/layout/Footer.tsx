import { portfolioData } from '../../data/portfolio'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="section-divider py-8">
      <div className="section-container flex flex-col items-center justify-between gap-3 sm:flex-row">
        <p className="text-sm text-zinc-500">
          © {year} {portfolioData.name}
        </p>
        {/* <p className="text-xs text-zinc-600">
          React · TypeScript · Tailwind CSS
        </p> */}
      </div>
    </footer>
  )
}
