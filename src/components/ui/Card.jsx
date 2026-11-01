import React from 'react'

// Default padding applies only when the caller doesn't set its own (e.g. p-0, p-8),
// because Tailwind utilities don't override each other by class order in the markup.
const hasPadding = (className) => /(^|\s)(\w+:)?p-\d/.test(className)

const Card = ({ as: Tag = 'div', className = '', children }) => (
  <Tag
    className={`rounded-2xl border border-line bg-surface shadow-sm transition-shadow hover:shadow-md ${
      hasPadding(className) ? '' : 'p-6'
    } ${className}`}
  >
    {children}
  </Tag>
)

export default Card
