import type { ReactNode } from 'react'
import { useCursorTilt } from '../../hooks/useCursorTilt'
import { ArrowUpRight } from 'lucide-react'

interface ContactCardProps {
  icon: ReactNode
  label: string
  value: string
  href: string
}

export function ContactCard({ icon, label, value, href }: ContactCardProps) {
  const { ref, onMouseMove, onMouseLeave } = useCursorTilt<HTMLAnchorElement>(4)
  return (
    <a
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noreferrer' : undefined}
      className="flex items-center justify-between gap-4 rounded-xl border border-border bg-surface px-6 py-5 transition-[border-color,box-shadow] duration-200 hover:border-accent-dim"
      style={{ transformStyle: 'preserve-3d' }}
    >
      <div className="flex items-center gap-4">
        <span className="text-accent">{icon}</span>
        <div>
          <p className="font-mono text-[11px] uppercase tracking-wide text-foreground-dim">{label}</p>
          <p className="font-medium">{value}</p>
        </div>
      </div>
      <ArrowUpRight size={16} className="text-foreground-dim" />
    </a>
  )
}
