import React from 'react'
import { render, screen } from '@testing-library/react'
import Contact from '../index'
import { contacts } from '../../../data/content'

describe('Contact', () => {
  it('renders the section heading', () => {
    render(<Contact />)
    expect(screen.getByRole('heading', { level: 2, name: 'Contact' })).toBeInTheDocument()
  })

  it('renders a link for every contact with its label and value', () => {
    render(<Contact />)
    contacts.forEach(({ label, value, href }) => {
      const link = screen.getByText(value).closest('a')
      expect(link).toHaveAttribute('href', href)
      expect(link).toHaveTextContent(label)
    })
  })

  it('opens external links in a new tab but not mailto links', () => {
    render(<Contact />)
    contacts.forEach(({ value, href }) => {
      const link = screen.getByText(value).closest('a')
      if (href.startsWith('mailto')) expect(link).not.toHaveAttribute('target')
      else expect(link).toHaveAttribute('target', '_blank')
    })
  })

  it('renders the footer with the current year', () => {
    render(<Contact />)
    expect(screen.getByText(new RegExp(String(new Date().getFullYear())))).toBeInTheDocument()
  })
})
