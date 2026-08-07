import type { Project } from '../../types/project'
import { Card } from './Card'
import { StatusBadge } from './StatusBadge'
import { TechChip } from './TechChip'
import { LinkButton } from './Button'
import { GithubIcon } from './icons'

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="flex flex-col gap-5">
      <div className="flex items-start justify-between gap-4">
        <h3 className="font-display text-2xl font-medium">{project.title}</h3>
        <StatusBadge status={project.status} />
      </div>
      <p className="text-foreground-dim leading-relaxed">{project.summary}</p>

      <div className="grid gap-3 font-mono text-xs text-foreground-dim">
        <p><span className="text-accent">Problem — </span>{project.problem}</p>
        <p><span className="text-accent">Solution — </span>{project.solution}</p>
      </div>

      <div className="flex items-center gap-2 flex-wrap font-mono text-xs text-foreground-dim">
        {project.architecture.map((step, i) => (
          <span key={step} className="flex items-center gap-2">
            {step}
            {i < project.architecture.length - 1 && <span className="text-accent">→</span>}
          </span>
        ))}
      </div>

      <div className="flex flex-wrap gap-2">
        {project.techStack.map((t) => (
          <TechChip key={t} label={t} />
        ))}
      </div>

      <div className="mt-2 flex gap-3">
        <LinkButton href={project.githubUrl} variant="secondary" target="_blank" rel="noreferrer">
          <GithubIcon width={14} height={14} /> GitHub
        </LinkButton>
        <LinkButton href={project.liveUrl} variant="text">
          Live Demo
        </LinkButton>
      </div>
    </Card>
  )
}
