import type { ReactNode } from 'react'
import { useCursorTilt } from '../../hooks/useCursorTilt'

export function Card({ children, className = '' }: { children: ReactNode; className?: string }) {
  const { ref, onMouseMove, onMouseLeave } = useCursorTilt<HTMLDivElement>(6)
  return (
    <div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className={`rounded-xl border border-border bg-surface p-8 transition-[border-color,box-shadow,transform] duration-200 ease-out hover:border-border-strong hover:shadow-xl ${className}`}
      style={{ transformStyle: 'preserve-3d' }}
    >
      {children}
    </div>
  )
}
