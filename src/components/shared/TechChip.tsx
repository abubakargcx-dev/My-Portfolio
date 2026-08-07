export function TechChip({ label }: { label: string }) {
  return (
    <span className="rounded border border-border px-2.5 py-1 font-mono text-xs text-foreground-dim">
      {label}
    </span>
  )
}
