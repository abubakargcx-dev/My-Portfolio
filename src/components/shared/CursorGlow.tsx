import { useEffect, useRef } from 'react'
import { useReducedMotion } from '../../hooks/useReducedMotion'

/** Soft radial amber glow tracking the cursor. Disabled on touch and reduced-motion. */
export function CursorGlow() {
  const ref = useRef<HTMLDivElement | null>(null)
  const reduced = useReducedMotion()

  useEffect(() => {
    if (reduced) return
    const isTouch = window.matchMedia('(pointer: coarse)').matches
    if (isTouch) return

    const handleMove = (e: MouseEvent) => {
      if (!ref.current) return
      ref.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`
    }
    window.addEventListener('mousemove', handleMove)
    return () => window.removeEventListener('mousemove', handleMove)
  }, [reduced])

  if (reduced) return null

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none fixed top-0 left-0 z-0 h-[520px] w-[520px] rounded-full opacity-0 md:opacity-100"
      style={{
        background: 'radial-gradient(circle, rgba(231,163,62,0.10) 0%, rgba(231,163,62,0.04) 40%, transparent 70%)',
      }}
    />
  )
}
