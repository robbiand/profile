import { renderHook, act } from '@testing-library/react'
import { useTheme } from '../useTheme'

describe('useTheme', () => {
  it('starts light when html has no dark class', () => {
    const { result } = renderHook(() => useTheme())
    expect(result.current[0]).toBe(false)
    expect(localStorage.getItem('theme')).toBe('light')
  })

  it('starts dark when html already has the dark class', () => {
    document.documentElement.classList.add('dark')
    const { result } = renderHook(() => useTheme())
    expect(result.current[0]).toBe(true)
  })

  it('toggles class and persists the choice', () => {
    const { result } = renderHook(() => useTheme())
    act(() => result.current[1]())
    expect(result.current[0]).toBe(true)
    expect(document.documentElement).toHaveClass('dark')
    expect(localStorage.getItem('theme')).toBe('dark')
    act(() => result.current[1]())
    expect(document.documentElement).not.toHaveClass('dark')
    expect(localStorage.getItem('theme')).toBe('light')
  })
})
