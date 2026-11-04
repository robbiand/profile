import React from 'react'
import { render, screen } from '@testing-library/react'
import Hero from '../index'
import { profile, stats } from '../../../data/content'

describe('Hero', () => {
  it('renders the name, role, summary and portrait', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { level: 1, name: profile.name })).toBeInTheDocument()
    expect(screen.getByText(`${profile.role} · ${profile.company}`)).toBeInTheDocument()
    expect(screen.getByText(profile.summary)).toBeInTheDocument()
    expect(screen.getByRole('img', { name: new RegExp(profile.name) })).toBeInTheDocument()
  })

  it('links the call-to-action buttons to their sections', () => {
    render(<Hero />)
    expect(screen.getByRole('link', { name: 'View Experience' })).toHaveAttribute('href', '#experience')
    expect(screen.getByRole('link', { name: 'Contact Me' })).toHaveAttribute('href', '#contact')
  })

  it('renders every stat', () => {
    render(<Hero />)
    stats.forEach(({ value, label }) => {
      expect(screen.getByText(value)).toBeInTheDocument()
      expect(screen.getByText(label)).toBeInTheDocument()
    })
  })
})
