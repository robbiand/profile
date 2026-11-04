import { renderHook, act } from '@testing-library/react'
import { useActiveSection } from '../useActiveSection'

let callback
const observe = vi.fn()
const disconnect = vi.fn()
const ids = ['a', 'b', 'c']

beforeEach(() => {
  observe.mockClear()
  disconnect.mockClear()
  global.IntersectionObserver = class {
    constructor(cb) {
      callback = cb
      this.observe = observe
      this.disconnect = disconnect
    }
  }
  ids.forEach((id) => {
    const el = document.createElement('section')
    el.id = id
    document.body.appendChild(el)
  })
})

afterEach(() => {
  document.body.innerHTML = ''
})

describe('useActiveSection', () => {
  it('defaults to the first id and observes all sections', () => {
    const { result } = renderHook(() => useActiveSection(ids))
    expect(result.current).toBe('a')
    expect(observe).toHaveBeenCalledTimes(3)
  })

  it('updates to the intersecting section', () => {
    const { result } = renderHook(() => useActiveSection(ids))
    act(() => callback([{ isIntersecting: true, target: { id: 'b' } }]))
    expect(result.current).toBe('b')
  })

  it('ignores non-intersecting entries', () => {
    const { result } = renderHook(() => useActiveSection(ids))
    act(() => callback([{ isIntersecting: false, target: { id: 'c' } }]))
    expect(result.current).toBe('a')
  })

  it('pins the last section at page bottom', () => {
    const { result } = renderHook(() => useActiveSection(ids))
    Object.defineProperty(window, 'innerHeight', { value: 500, configurable: true })
    Object.defineProperty(window, 'scrollY', { value: 500, configurable: true })
    Object.defineProperty(document.documentElement, 'scrollHeight', { value: 1000, configurable: true })
    act(() => {
      window.dispatchEvent(new Event('scroll'))
    })
    expect(result.current).toBe('c')
  })

  it('disconnects the observer on unmount', () => {
    const { unmount } = renderHook(() => useActiveSection(ids))
    unmount()
    expect(disconnect).toHaveBeenCalled()
  })
})
