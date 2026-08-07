import { useEffect, useRef } from 'react'
import { useReducedMotion } from './useReducedMotion'

/** Applies cursor-driven parallax to elements with a data-depth attribute inside the container. Positive depth = moves toward cursor, negative = away. */
export function useParallax<T extends HTMLElement>(maxPx = 16) {
  const containerRef = useRef<T | null>(null)
  const reduced = useReducedMotion()

  useEffect(() => {
    if (reduced || !containerRef.current) return
    const container = containerRef.current
    const layers = container.querySelectorAll<HTMLElement>('[data-depth]')

    const handleMove = (e: MouseEvent) => {
      const nx = e.clientX / window.innerWidth - 0.5
      const ny = e.clientY / window.innerHeight - 0.5
      layers.forEach((el) => {
        const depth = parseFloat(el.dataset.depth || '5')
        const px = Math.max(-maxPx, Math.min(maxPx, depth))
        el.style.transform = `translate(${nx * px}px, ${ny * px}px)`
      })
    }
    window.addEventListener('mousemove', handleMove)
    return () => window.removeEventListener('mousemove', handleMove)
  }, [reduced, maxPx])

  return containerRef
}
