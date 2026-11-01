import React, { useState } from 'react'
import { Menu, Moon, Sun, X } from 'lucide-react'
import { nav, profile } from '../../data/content'

const Navbar = ({ active, dark, onToggleTheme }) => {
  const [open, setOpen] = useState(false)

  const linkClass = (id) =>
    `text-sm font-medium transition-colors ${active === id ? 'text-brand' : 'text-muted hover:text-ink'}`

  return (
    <header className="sticky top-0 z-20 border-b border-line bg-bg/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#about" className="font-bold tracking-tight">
          {profile.name}
        </a>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Main navigation">
          {nav.map(({ id, label }) => (
            <a key={id} href={`#${id}`} className={linkClass(id)}>
              {label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={onToggleTheme}
            className="rounded-lg border border-line p-2 text-muted transition-colors hover:text-ink"
            aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            onClick={() => setOpen((v) => !v)}
            className="rounded-lg border border-line p-2 text-muted md:hidden"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="flex flex-col gap-4 border-t border-line px-5 py-4 md:hidden" aria-label="Mobile navigation">
          {nav.map(({ id, label }) => (
            <a key={id} href={`#${id}`} onClick={() => setOpen(false)} className={linkClass(id)}>
              {label}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}

export default Navbar
