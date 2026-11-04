import React, { useState } from 'react'
import { Menu, Moon, Sun, X } from 'lucide-react'
import { nav, profile } from '../../data/content'

const Navbar = ({ active, dark, onToggleTheme }) => {
  const [open, setOpen] = useState(false)

  const linkClass = (id) =>
    `text-sm font-medium transition-colors ${active === id ? 'text-brand' : 'text-muted hover:text-ink'}`

  return (
    <header className="sticky top-0 z-20 border-b border-navy/30 dark:border-line bg-bg/85 backdrop-blur">
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
            type="button"
            role="switch"
            aria-checked={dark}
            onClick={onToggleTheme}
            className="relative inline-flex h-8 w-14 shrink-0 items-center rounded-full border border-navy/30 dark:border-line transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand"
            aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            <Sun size={14} className="absolute left-2 text-muted" aria-hidden />
            <Moon size={14} className="absolute right-2 text-muted" aria-hidden />
            <span
              className={`absolute left-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-brand text-surface shadow transition-transform duration-200 ${
                dark ? 'translate-x-6' : 'translate-x-0'
              }`}
            >
              {dark ? <Moon size={14} aria-hidden /> : <Sun size={14} aria-hidden />}
            </span>
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
        <nav className="flex flex-col gap-4 border-t border-navy/30 dark:border-line px-5 py-4 md:hidden" aria-label="Mobile navigation">
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
