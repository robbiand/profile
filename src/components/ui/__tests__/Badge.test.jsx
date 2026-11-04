import React from 'react'
import { render, screen } from '@testing-library/react'
import Badge from '../Badge'

describe('Badge', () => {
  it('renders its children', () => {
    render(<Badge>React</Badge>)
    expect(screen.getByText('React')).toBeInTheDocument()
  })

  it('renders for every supported tone and the strong variant', () => {
    ;['brand', 'cobalt', 'teal', 'wine'].forEach((tone) => {
      render(
        <>
          <Badge tone={tone}>{`soft-${tone}`}</Badge>
          <Badge tone={tone} strong>{`strong-${tone}`}</Badge>
        </>
      )
      expect(screen.getByText(`soft-${tone}`)).toBeInTheDocument()
      expect(screen.getByText(`strong-${tone}`)).toBeInTheDocument()
    })
  })
})
