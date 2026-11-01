import React from 'react'

import Navbar from './components/navbar'
import Hero from './components/hero'
import Experience from './components/experience'
import TechStack from './components/tech-stack'
import Projects from './components/projects'
import Contact from './components/contact'
import { nav } from './data/content'
import { useTheme } from './hooks/useTheme'
import { useActiveSection } from './hooks/useActiveSection'

const sectionIds = nav.map(({ id }) => id)

export const App = () => {
  const [dark, toggleTheme] = useTheme()
  const active = useActiveSection(sectionIds)

  return (
    <>
      <Navbar active={active} dark={dark} onToggleTheme={toggleTheme} />
      <main className="mx-auto max-w-6xl px-5 sm:px-8">
        <Hero />
        <Experience />
        <TechStack />
        <Projects />
        <Contact />
      </main>
    </>
  )
}

export default App
