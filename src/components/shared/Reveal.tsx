import type { ReactNode } from 'react'
import { useScrollReveal } from '../../hooks/useScrollReveal'

export function Reveal({ children, className = '', delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const ref = useScrollReveal<HTMLDivElement>()
  return (
    <div ref={ref} className={`reveal ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  )
}
