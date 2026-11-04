import React from 'react'
import { render, screen } from '@testing-library/react'
import Card from '../Card'

describe('Card', () => {
  it('applies default padding when none is given', () => {
    render(<Card>Hello</Card>)
    expect(screen.getByText('Hello')).toHaveClass('p-6')
  })

  it.each(['p-0', 'p-8', 'md:p-10'])('skips default padding when %s is given', (p) => {
    render(<Card className={p}>Hello</Card>)
    expect(screen.getByText('Hello')).not.toHaveClass('p-6')
  })

  it('renders as a custom element', () => {
    render(<Card as="article">Hello</Card>)
    expect(screen.getByText('Hello').tagName).toBe('ARTICLE')
  })
})
