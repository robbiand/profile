import React from 'react'

// `strong` marks a core skill: solid fill instead of the soft tint.
const Badge = ({ children, strong = false }) => (
  <span
    className={`inline-flex items-center rounded-md border px-2.5 py-1 text-xs font-medium ${
      strong ? 'border-brand bg-brand text-surface' : 'border-line bg-brand-soft text-brand'
    }`}
  >
    {children}
  </span>
)

export default Badge
