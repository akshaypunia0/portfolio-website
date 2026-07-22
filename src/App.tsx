import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import { Hero } from './sections/Hero'
import { About } from './sections/About'
import { ExperienceSection } from './sections/Experience'
import { Skills } from './sections/Skills'
import { Projects } from './sections/Projects'
import { OpenSource } from './sections/OpenSource'
import { Contact } from './sections/Contact'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <ExperienceSection />
        <Skills />
        <Projects />
        <OpenSource />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
