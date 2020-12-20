import { useState, useEffect } from 'react'

interface State {
  x: number
  y: number
  direction: string
}

export const useScroll = () => {
  const initialState = {
    x: window.scrollX,
    y: window.scrollY,
    direction: 'none',
  }
  // Set a single object `{ x: ..., y: ..., direction: ... }` once on init
  const [scroll, setScroll] = useState<State>(initialState)
  const { x, y, direction } = scroll

  const listener = () => {
    setScroll((prev) => ({
      x: window.scrollX,
      y: window.scrollY,
      direction: prev.y > window.scrollY ? 'up' : 'down',
    }))
  }

  useEffect(() => {
    window.addEventListener('scroll', listener)

    return () => window.removeEventListener('scroll', listener)
  }, [])

  return { x, y, direction }
}
