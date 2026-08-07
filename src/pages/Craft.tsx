import { Link } from 'react-router-dom'
import { PageLayout } from '../components/layout/PageLayout'
import { RequestTrace } from '../components/shared/RequestTrace'
import { SectionHeader } from '../components/shared/SectionHeader'
import { Card } from '../components/shared/Card'
import { TechChip } from '../components/shared/TechChip'
import { Reveal } from '../components/shared/Reveal'
import { Button } from '../components/shared/Button'
import { useSEO } from '../hooks/useSEO'
import { engineeringStack, backendEcosystem, developmentWorkflow, currentlyLearning, engineeringMindset } from '../data/craft'

export function Craft() {
  useSEO({
    title: 'Craft',
    description: 'Explore the backend technologies, engineering workflow, and development philosophy of AbuBakar Ghafoor.',
  })

  return (
    <PageLayout>
      <section className="relative max-w-editorial mx-auto px-6 py-24 text-center overflow-hidden">
        <div className="absolute inset-0 opacity-30 pointer-events-none -z-10">
          <RequestTrace className="w-full h-full" />
        </div>
        <h1 className="font-display text-4xl md:text-5xl font-normal mb-6">Craft</h1>
        <p className="text-foreground-dim text-lg leading-relaxed">
          The tools I use are only as valuable as the problems they help solve.
        </p>
      </section>

      <section className="max-w-content mx-auto px-6 md:px-20 py-16">
        <Reveal>
          <SectionHeader eyebrow="Stack" title="Engineering Stack" />
        </Reveal>
        <div className="grid md:grid-cols-3 gap-6">
          {Object.entries(engineeringStack).map(([category, items], i) => (
            <Reveal key={category} delay={i * 60}>
              <Card>
                <h3 className="font-mono text-xs uppercase tracking-widest text-accent mb-4">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((item) => (
                    <TechChip key={item} label={item} />
                  ))}
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="max-w-content mx-auto px-6 md:px-20 py-24 border-t border-border">
        <Reveal>
          <SectionHeader eyebrow="Ecosystem" title="Backend Ecosystem" />
        </Reveal>
        <Reveal className="flex flex-wrap items-center gap-3 font-mono text-sm text-foreground-dim">
          {backendEcosystem.map((step, i) => (
            <span key={step} className="flex items-center gap-3">
              <span className="rounded-full border border-border px-4 py-2">{step}</span>
              {i < backendEcosystem.length - 1 && <span className="text-accent">→</span>}
            </span>
          ))}
        </Reveal>
      </section>

      <section className="max-w-content mx-auto px-6 md:px-20 py-24 border-t border-border">
        <Reveal>
          <SectionHeader eyebrow="Process" title="Development Workflow" />
        </Reveal>
        <div className="grid md:grid-cols-4 gap-x-6 gap-y-10">
          {developmentWorkflow.map((step, i) => (
            <Reveal key={step} delay={i * 50} className="flex gap-3">
              <span className="font-mono text-xs text-accent">{String(i + 1).padStart(2, '0')}</span>
              <p className="text-foreground-dim">{step}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="max-w-content mx-auto px-6 md:px-20 py-24 border-t border-border">
        <Reveal>
          <SectionHeader eyebrow="Now" title="Currently Learning" />
        </Reveal>
        <Reveal className="flex flex-wrap gap-3">
          {currentlyLearning.map((item, i) => (
            <span
              key={item}
              className={`rounded-full border px-4 py-2 font-mono text-xs ${
                i === 0 ? 'border-accent text-accent' : 'border-border text-foreground-dim'
              }`}
            >
              {item}
            </span>
          ))}
        </Reveal>
      </section>

      <section className="max-w-content mx-auto px-6 md:px-20 py-24 border-t border-border">
        <Reveal>
          <SectionHeader eyebrow="Mindset" title="Engineering Mindset" />
        </Reveal>
        <div className="grid md:grid-cols-2 gap-6">
          {engineeringMindset.map((item, i) => (
            <Reveal key={item.title} delay={i * 80}>
              <Card>
                <h3 className="font-display text-xl font-medium mb-2">{item.title}</h3>
                <p className="text-foreground-dim leading-relaxed">{item.description}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="max-w-editorial mx-auto px-6 py-24 text-center border-t border-border">
        <Reveal>
          <h2 className="font-display text-3xl font-medium mb-4">Interested in collaborating?</h2>
          <div className="flex justify-center gap-4 mt-6">
            <Link to="/projects"><Button variant="secondary">View Projects</Button></Link>
            <Link to="/contact"><Button variant="primary">Contact Me</Button></Link>
          </div>
        </Reveal>
      </section>
    </PageLayout>
  )
}
