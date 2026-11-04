import React from 'react'
import { render, screen } from '@testing-library/react'
import SectionHeading from '../SectionHeading'

describe('SectionHeading', () => {
  it('renders the title as a level 2 heading with its description', () => {
    render(<SectionHeading title="Projects" description="Things I built" />)
    expect(screen.getByRole('heading', { level: 2, name: 'Projects' })).toBeInTheDocument()
    expect(screen.getByText('Things I built')).toBeInTheDocument()
  })

  it('omits the description when not provided', () => {
    const { container } = render(<SectionHeading title="Projects" />)
    expect(container.querySelector('p')).toBeNull()
  })
})
