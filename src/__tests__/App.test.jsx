import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from '../App'
import { profile } from '../data/content'

beforeEach(() => {
  global.IntersectionObserver = class {
    observe() {}
    disconnect() {}
  }
})

describe('App', () => {
  it('renders every section', () => {
    const { container } = render(<App />)
    ;['about', 'experience', 'tech-stack', 'projects', 'contact'].forEach((id) =>
      expect(container.querySelector(`section#${id}`)).toBeInTheDocument()
    )
    expect(screen.getByRole('heading', { level: 1, name: profile.name })).toBeInTheDocument()
  })

  it('toggles dark mode on the document from the navbar switch', async () => {
    render(<App />)
    const toggle = screen.getByRole('switch')
    await userEvent.click(toggle)
    expect(document.documentElement).toHaveClass('dark')
    expect(toggle).toHaveAttribute('aria-checked', 'true')
    await userEvent.click(toggle)
    expect(document.documentElement).not.toHaveClass('dark')
  })
})
