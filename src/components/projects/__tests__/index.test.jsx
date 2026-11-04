import React from 'react'
import { render, screen } from '@testing-library/react'
import Projects from '../index'
import { projects } from '../../../data/content'

describe('Projects', () => {
  it('renders the section heading and one article per project', () => {
    render(<Projects />)
    expect(screen.getByRole('heading', { level: 2, name: 'Projects' })).toBeInTheDocument()
    expect(screen.getAllByRole('article')).toHaveLength(projects.length)
  })

  it('renders name, description and points for every project', () => {
    render(<Projects />)
    projects.forEach(({ name, description, points }) => {
      expect(screen.getByRole('heading', { level: 3, name })).toBeInTheDocument()
      expect(screen.getByText(description)).toBeInTheDocument()
      points.forEach((point) => expect(screen.getByText(point)).toBeInTheDocument())
    })
  })

  it('renders external links safely in a new tab', () => {
    render(<Projects />)
    projects
      .flatMap((p) => p.links ?? [])
      .forEach(({ label, href }) => {
        const link = screen.getByRole('link', { name: label })
        expect(link).toHaveAttribute('href', href)
        expect(link).toHaveAttribute('target', '_blank')
        expect(link).toHaveAttribute('rel', expect.stringContaining('noopener'))
      })
  })

  it('shows the highlight only for projects that have one', () => {
    render(<Projects />)
    projects.filter((p) => p.highlight).forEach((p) => expect(screen.getByText(p.highlight)).toBeInTheDocument())
  })

  it('renders a screenshot gallery for projects with images', () => {
    render(<Projects />)
    const withImages = projects.filter((p) => p.images)
    expect(screen.getAllByRole('region')).toHaveLength(withImages.length)
    withImages.forEach(({ name }) =>
      expect(screen.getByRole('region', { name: `${name} screenshots` })).toBeInTheDocument()
    )
  })
})
