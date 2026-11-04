import React from 'react'

const SectionHeading = ({ title, description }) => (
  <div className="mb-10 max-w-2xl">
    <span className="mb-4 block h-1 w-12 rounded-full bg-gradient-to-r from-brand to-accent" aria-hidden />
    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
    {description && <p className="mt-3 text-muted">{description}</p>}
  </div>
)

export default SectionHeading
