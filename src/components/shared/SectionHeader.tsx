interface SectionHeaderProps {
  eyebrow?: string
  title: string
  description?: string
  align?: 'left' | 'center'
}

export function SectionHeader({ eyebrow, title, description, align = 'left' }: SectionHeaderProps) {
  const alignment = align === 'center' ? 'text-center mx-auto' : 'text-left'
  return (
    <div className={`max-w-editorial ${alignment} mb-14`}>
      {eyebrow && (
        <p className="mb-4 font-mono text-xs tracking-widest text-accent uppercase">{eyebrow}</p>
      )}
      <h2 className="font-display text-3xl md:text-4xl font-medium leading-tight">{title}</h2>
      {description && <p className="mt-4 text-foreground-dim leading-relaxed">{description}</p>}
    </div>
  )
}
