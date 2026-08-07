import { Link } from 'react-router-dom'
import { PageLayout } from '../components/layout/PageLayout'
import { RequestTrace } from '../components/shared/RequestTrace'
import { Portrait } from '../components/shared/Portrait'
import { ScrollIndicator } from '../components/shared/ScrollIndicator'
import { Button, LinkButton } from '../components/shared/Button'
import { SectionHeader } from '../components/shared/SectionHeader'
import { ProjectCard } from '../components/shared/ProjectCard'
import { Reveal } from '../components/shared/Reveal'
import { useParallax } from '../hooks/useParallax'
import { useSEO } from '../hooks/useSEO'
import { personal } from '../data/personal'
import { projects } from '../data/projects'

export function Home() {
  useSEO({
    title: 'Home',
    description: 'AbuBakar Ghafoor — Software Engineering student and aspiring Python backend developer building reliable APIs and scalable systems.',
  })

  const parallaxRef = useParallax<HTMLDivElement>(16)
  const featured = projects.filter((p) => p.featured).slice(0, 3)

  return (
    <PageLayout>
      <section ref={parallaxRef} className="relative min-h-[85vh] flex items-center overflow-hidden px-6 md:px-20">
        <div data-depth="-14" className="absolute inset-0 opacity-60 pointer-events-none">
          <RequestTrace className="w-full h-full" />
        </div>

        <div className="relative z-10 max-w-content mx-auto w-full grid md:grid-cols-[1fr_auto] gap-16 items-center">
          <div>
            <div data-depth="6" className="flex items-center gap-2 mb-6 font-mono text-xs tracking-widest text-accent uppercase">
              <span className="h-1.5 w-1.5 rounded-full bg-success shadow-[0_0_0_3px_rgba(111,207,151,0.15)]" />
              Available for backend work — Python / Django / PostgreSQL
            </div>

            <h1 data-depth="10" className="font-display text-4xl md:text-6xl font-normal leading-[1.05] max-w-[720px]">
              Systems that hold up under <em className="italic text-accent not-italic md:italic">real</em> load.
            </h1>

            <p data-depth="4" className="mt-6 text-foreground-dim text-lg leading-relaxed max-w-[520px]">
              I'm {personal.name}, a {personal.title.toLowerCase()} building backend infrastructure — APIs, data pipelines, and the reliable parts that make products actually work.
            </p>

            <div data-depth="8" className="flex flex-wrap gap-4 mt-10">
              <Link to="/projects">
                <Button variant="primary">View Projects →</Button>
              </Link>
              <Link to="/contact">
                <Button variant="secondary">Get in Touch</Button>
              </Link>
            </div>

            <div data-depth="5" className="flex flex-wrap gap-6 mt-14 font-mono text-xs text-foreground-dim">
              {['Python', 'Django', 'PostgreSQL', 'REST APIs', 'Docker'].map((s) => (
                <span key={s} className="relative pl-4 before:content-[''] before:absolute before:left-0 before:top-2 before:h-px before:w-2.5 before:bg-foreground-dim">
                  {s}
                </span>
              ))}
            </div>
          </div>

          <div data-depth="-6" className="hidden md:block">
            <Portrait />
          </div>
        </div>

        <ScrollIndicator />
      </section>

      <section className="max-w-content mx-auto px-6 md:px-20 py-28">
        <Reveal>
          <SectionHeader
            eyebrow="Selected Work"
            title="A few things I'm building"
            description="Currently in the planning and early-build stages — each one designed the way I'd want a real production system built."
          />
        </Reveal>
        <div className="grid md:grid-cols-3 gap-6">
          {featured.map((project, i) => (
            <Reveal key={project.id} delay={i * 80}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
        <Reveal delay={200} className="mt-10">
          <Link to="/projects">
            <Button variant="text">See all projects →</Button>
          </Link>
        </Reveal>
      </section>

      <section className="max-w-content mx-auto px-6 md:px-20 py-28 border-t border-border">
        <Reveal className="text-center max-w-editorial mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-medium mb-6">Let's build something meaningful.</h2>
          <p className="text-foreground-dim leading-relaxed mb-10">
            Whether it's discussing backend architecture, collaborating on a project, or simply exchanging ideas, I'd love to connect.
          </p>
          <div className="flex justify-center gap-4">
            <Link to="/contact">
              <Button variant="primary">Contact Me</Button>
            </Link>
            <LinkButton href={personal.github} variant="secondary" target="_blank" rel="noreferrer">
              View GitHub
            </LinkButton>
          </div>
        </Reveal>
      </section>
    </PageLayout>
  )
}
