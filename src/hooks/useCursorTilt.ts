import { useRef } from 'react'
import { useReducedMotion } from './useReducedMotion'

export function useCursorTilt<T extends HTMLElement>(maxDeg = 6) {
  const ref = useRef<T | null>(null)
  const reduced = useReducedMotion()

  const onMouseMove = (e: React.MouseEvent) => {
    if (reduced || !ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    ref.current.style.transform = `perspective(1200px) rotateX(${-y * maxDeg}deg) rotateY(${x * maxDeg}deg) translateY(-6px)`
  }

  const onMouseLeave = () => {
    if (!ref.current) return
    ref.current.style.transform = 'perspective(1200px) rotateX(0) rotateY(0) translateY(0)'
  }

  return { ref, onMouseMove, onMouseLeave }
}
