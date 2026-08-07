import type { ProjectStatus } from '../../types/project'

const colors: Record<ProjectStatus, string> = {
  Planning: 'text-foreground-dim border-border-strong',
  'In Progress': 'text-accent border-accent-dim',
  Completed: 'text-success border-success',
  Archived: 'text-foreground-dim border-border',
}

export function StatusBadge({ status }: { status: ProjectStatus }) {
  return (
    <span className={`rounded-full border px-3 py-1 font-mono text-[11px] uppercase tracking-wide ${colors[status]}`}>
      {status}
    </span>
  )
}
