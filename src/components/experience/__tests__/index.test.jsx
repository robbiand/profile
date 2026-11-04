import React from 'react'
import { render, screen } from '@testing-library/react'
import Experience from '../index'
import { experience } from '../../../data/content'

describe('Experience', () => {
  it('renders the section heading', () => {
    render(<Experience />)
    expect(screen.getByRole('heading', { level: 2, name: 'Experience' })).toBeInTheDocument()
  })

  it('renders each job with role, company, period and points', () => {
    render(<Experience />)
    expect(screen.getAllByRole('article')).toHaveLength(experience.length)
    experience.forEach(({ role, company, period, points }) => {
      expect(screen.getByRole('heading', { level: 3, name: role, description: undefined })).toBeTruthy()
      expect(screen.getAllByText(company).length).toBeGreaterThan(0)
      expect(screen.getByText(period)).toBeInTheDocument()
      points.forEach((point) => expect(screen.getByText(point)).toBeInTheDocument())
    })
  })

  it('renders the tech badges of each job', () => {
    render(<Experience />)
    experience.forEach(({ tech }) => tech.forEach((t) => expect(screen.getAllByText(t).length).toBeGreaterThan(0)))
  })
})
