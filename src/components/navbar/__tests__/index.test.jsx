import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Navbar from '../index'
import { nav, profile } from '../../../data/content'

describe('Navbar', () => {
  it('renders the name and all nav links', () => {
    render(<Navbar active="about" dark={false} onToggleTheme={() => {}} />)
    expect(screen.getByText(profile.name)).toBeInTheDocument()
    const main = screen.getByRole('navigation', { name: 'Main navigation' })
    nav.forEach(({ label }) => expect(main).toHaveTextContent(label))
  })

  it('exposes the theme toggle as a switch reflecting state', () => {
    const { rerender } = render(<Navbar active="about" dark={false} onToggleTheme={() => {}} />)
    expect(screen.getByRole('switch')).toHaveAttribute('aria-checked', 'false')
    rerender(<Navbar active="about" dark onToggleTheme={() => {}} />)
    expect(screen.getByRole('switch')).toHaveAttribute('aria-checked', 'true')
  })

  it('calls onToggleTheme when the switch is clicked', async () => {
    const onToggle = vi.fn()
    render(<Navbar active="about" dark={false} onToggleTheme={onToggle} />)
    await userEvent.click(screen.getByRole('switch'))
    expect(onToggle).toHaveBeenCalledTimes(1)
  })

  it('toggles the mobile menu', async () => {
    render(<Navbar active="about" dark={false} onToggleTheme={() => {}} />)
    expect(screen.queryByRole('navigation', { name: 'Mobile navigation' })).toBeNull()
    await userEvent.click(screen.getByRole('button', { name: 'Toggle menu' }))
    expect(screen.getByRole('navigation', { name: 'Mobile navigation' })).toBeInTheDocument()
    await userEvent.click(screen.getByRole('button', { name: 'Toggle menu' }))
    expect(screen.queryByRole('navigation', { name: 'Mobile navigation' })).toBeNull()
  })
})
