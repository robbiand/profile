import React from 'react'

export const tones = {
  brand: {
    soft: 'border-line bg-brand-soft text-brand',
    strong: 'border-accent bg-accent text-surface',
    card: 'border-brand/40',
    title: 'text-brand',
    dot: 'bg-brand',
  },
  cobalt: {
    soft: 'border-cobalt/20 bg-cobalt/10 text-cobalt dark:border-sky/20 dark:bg-sky/10 dark:text-sky',
    strong: 'border-cobalt bg-cobalt text-white dark:border-sky dark:bg-sky dark:text-navy',
    card: 'border-cobalt/40 dark:border-sky/40',
    title: 'text-cobalt dark:text-sky',
    dot: 'bg-cobalt dark:bg-sky',
  },
  teal: {
    soft: 'border-accent/25 bg-accent-soft text-accent',
    strong: 'border-accent bg-accent text-surface',
    card: 'border-accent/40',
    title: 'text-accent',
    dot: 'bg-accent',
  },
  wine: {
    soft: 'border-berry/25 bg-berry-soft text-berry',
    strong: 'border-berry bg-berry text-surface',
    card: 'border-berry/40',
    title: 'text-berry',
    dot: 'bg-berry',
  },
}

// `strong` marks a core skill: solid fill instead of the soft tint.
const Badge = ({ children, strong = false, tone = 'brand' }) => (
  <span
    className={`inline-flex items-center rounded-md border px-2.5 py-1 text-xs font-medium ${
      tones[tone][strong ? 'strong' : 'soft']
    }`}
  >
    {children}
  </span>
)

export default Badge
