import type { TimelineEntry } from '../../types/timeline'
import { Card } from './Card'

export function TimelineCard({ entry }: { entry: TimelineEntry }) {
  return (
    <Card>
      <div className="flex items-center gap-3 mb-3 font-mono text-xs text-foreground-dim">
        <span className="text-accent">{entry.date}</span>
        <span>·</span>
        <span className="uppercase tracking-wide">{entry.category}</span>
      </div>
      <h3 className="font-display text-xl font-medium mb-2">{entry.title}</h3>
      <p className="text-foreground-dim leading-relaxed">{entry.description}</p>
    </Card>
  )
}
