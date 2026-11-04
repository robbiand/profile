import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Gallery from '../Gallery'

const images = [
  { src: '/a.webp', width: 100, height: 50, alt: 'Shot A' },
  { src: '/b.webp', width: 100, height: 50, alt: 'Shot B' },
  { src: '/c.webp', width: 100, height: 50, alt: 'Shot C' },
]

const dialog = () => document.querySelector('dialog')

describe('Gallery', () => {
  it('renders a labelled region with one button per screenshot', () => {
    render(<Gallery images={images} label="Checkout" />)
    expect(screen.getByRole('region', { name: 'Checkout screenshots' })).toBeInTheDocument()
    images.forEach(({ alt }) => expect(screen.getByRole('button', { name: `Enlarge: ${alt}` })).toBeInTheDocument())
  })

  it('opens the dialog with the clicked screenshot', async () => {
    render(<Gallery images={images} label="Checkout" />)
    expect(dialog()).not.toHaveAttribute('open')
    await userEvent.click(screen.getByRole('button', { name: 'Enlarge: Shot B' }))
    expect(dialog()).toHaveAttribute('open')
    expect(dialog().querySelector('img')).toHaveAttribute('alt', 'Shot B')
  })

  it('navigates next and previous, wrapping around', async () => {
    render(<Gallery images={images} label="Checkout" />)
    await userEvent.click(screen.getByRole('button', { name: 'Enlarge: Shot C' }))
    fireEvent.click(screen.getByRole('button', { name: 'Next screenshot' }))
    expect(dialog().querySelector('img')).toHaveAttribute('alt', 'Shot A')
    fireEvent.click(screen.getByRole('button', { name: 'Previous screenshot' }))
    expect(dialog().querySelector('img')).toHaveAttribute('alt', 'Shot C')
  })

  it('navigates with the arrow keys', async () => {
    render(<Gallery images={images} label="Checkout" />)
    await userEvent.click(screen.getByRole('button', { name: 'Enlarge: Shot A' }))
    fireEvent.keyDown(dialog(), { key: 'ArrowRight' })
    expect(dialog().querySelector('img')).toHaveAttribute('alt', 'Shot B')
    fireEvent.keyDown(dialog(), { key: 'ArrowLeft' })
    expect(dialog().querySelector('img')).toHaveAttribute('alt', 'Shot A')
  })

  it('closes with the close button', async () => {
    render(<Gallery images={images} label="Checkout" />)
    await userEvent.click(screen.getByRole('button', { name: 'Enlarge: Shot A' }))
    fireEvent.click(screen.getByRole('button', { name: 'Close' }))
    expect(dialog()).not.toHaveAttribute('open')
    expect(screen.queryByRole('button', { name: 'Close' })).toBeNull()
  })

  it('closes when the backdrop is clicked', async () => {
    render(<Gallery images={images} label="Checkout" />)
    await userEvent.click(screen.getByRole('button', { name: 'Enlarge: Shot A' }))
    fireEvent.click(dialog())
    expect(dialog()).not.toHaveAttribute('open')
  })

  it('hides prev/next controls for a single image', async () => {
    render(<Gallery images={[images[0]]} label="Solo" />)
    await userEvent.click(screen.getByRole('button', { name: 'Enlarge: Shot A' }))
    expect(screen.queryByRole('button', { name: 'Next screenshot' })).toBeNull()
    expect(screen.queryByRole('button', { name: 'Previous screenshot' })).toBeNull()
  })
})
