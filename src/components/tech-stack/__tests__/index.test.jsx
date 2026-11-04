import React from 'react'
import { render, screen } from '@testing-library/react'
import TechStack from '../index'
import { techStack } from '../../../data/content'

describe('TechStack', () => {
  it('renders a card per category with all items', () => {
    render(<TechStack />)
    techStack.forEach(({ title, items }) => {
      expect(screen.getByRole('heading', { name: title })).toBeInTheDocument()
      items.forEach((item) => expect(screen.getAllByText(item).length).toBeGreaterThan(0))
    })
  })
})
