import { PageLayout } from '../components/layout/PageLayout'
import { RequestTrace } from '../components/shared/RequestTrace'
import { SectionHeader } from '../components/shared/SectionHeader'
import { ProjectCard } from '../components/shared/ProjectCard'
import { Reveal } from '../components/shared/Reveal'
import { LinkButton, Button } from '../components/shared/Button'
import { useSEO } from '../hooks/useSEO'
import { projects, futureProjects } from '../data/projects'
import { personal } from '../data/personal'
import { GithubIcon } from '../components/shared/icons'
import { Link } from 'react-router-dom'

export function Projects() {
  useSEO({
    title: 'Projects',
    description: 'Explore backend engineering projects, API development, AI integration, and software architecture concepts by AbuBakar Ghafoor.',
  })

  return (
    <PageLayout>
      <section className="relative max-w-editorial mx-auto px-6 py-24 text-center overflow-hidden">
        <div className="absolute inset-0 opacity-30 pointer-events-none -z-10">
          <RequestTrace className="w-full h-full" />
        </div>
        <h1 className="font-display text-4xl md:text-5xl font-normal mb-6">Projects</h1>
        <p className="text-foreground-dim text-lg leading-relaxed">
          Every project represents another step toward building reliable, scalable software.
        </p>
      </section>

      <section className="max-w-content mx-auto px-6 md:px-20 py-16">
        <Reveal>
          <SectionHeader eyebrow="Featured" title="Featured Projects" />
        </Reveal>
        {projects.length > 0 ? (
          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((p, i) => (
              <Reveal key={p.id} delay={i * 80}>
                <ProjectCard project={p} />
              </Reveal>
            ))}
          </div>
        ) : (
          <p className="text-foreground-dim max-w-editorial">
            I'm currently building projects that reflect the engineering standards I value. Until then, this page
            outlines the systems I'm actively designing and developing.
          </p>
        )}
      </section>

      <section className="max-w-content mx-auto px-6 md:px-20 py-24 border-t border-border">
        <Reveal>
          <SectionHeader eyebrow="Next" title="What's Next" description="Planned learning goals, framed as project ideas — not completed work." />
        </Reveal>
        <Reveal className="flex flex-wrap gap-3">
          {futureProjects.map((p) => (
            <span key={p} className="rounded-full border border-border px-4 py-2 font-mono text-xs text-foreground-dim">
              {p}
            </span>
          ))}
        </Reveal>
      </section>

      <section className="max-w-editorial mx-auto px-6 py-24 text-center border-t border-border">
        <Reveal>
          <h2 className="font-display text-3xl font-medium mb-4">Explore My Code</h2>
          <p className="text-foreground-dim leading-relaxed mb-8">
            Follow my learning journey through real repositories, experiments, and backend projects.
          </p>
          <div className="flex justify-center gap-4">
            <LinkButton href={personal.github} variant="primary" target="_blank" rel="noreferrer">
              <GithubIcon width={16} height={16} /> View GitHub
            </LinkButton>
            <Link to="/contact"><Button variant="secondary">Contact Me</Button></Link>
          </div>
        </Reveal>
      </section>
    </PageLayout>
  )
}
