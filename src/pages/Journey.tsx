import { Link } from 'react-router-dom'
import { PageLayout } from '../components/layout/PageLayout'
import { RequestTrace } from '../components/shared/RequestTrace'
import { SectionHeader } from '../components/shared/SectionHeader'
import { Card } from '../components/shared/Card'
import { Reveal } from '../components/shared/Reveal'
import { Button } from '../components/shared/Button'
import { useSEO } from '../hooks/useSEO'
import { currentFocus, engineeringPrinciples } from '../data/journey'

export function Journey() {
  useSEO({
    title: 'Journey',
    description: "Learn about AbuBakar Ghafoor's journey into Software Engineering, backend development, and his approach to building scalable software systems.",
  })

  return (
    <PageLayout>
      <section className="relative max-w-editorial mx-auto px-6 py-24 text-center overflow-hidden">
        <div className="absolute inset-0 opacity-30 pointer-events-none -z-10">
          <RequestTrace className="w-full h-full" />
        </div>
        <h1 className="font-display text-4xl md:text-5xl font-normal mb-6">My Journey</h1>
        <p className="text-foreground-dim text-lg leading-relaxed">
          Every backend system begins with a single request. Mine began with curiosity.
        </p>
      </section>

      <section className="max-w-editorial mx-auto px-6 py-16 space-y-6 leading-relaxed text-foreground-dim">
        <Reveal>
          <h2 className="font-display text-2xl font-medium text-foreground mb-4">Who I Am</h2>
          <p>
            I'm a Software Engineering student with a growing pull toward understanding how software actually works
            beneath the surface. What draws me in isn't the interface a user sees — it's the reasoning underneath it:
            how a request is authenticated, how data is shaped, how a system stays correct under pressure. I'm building
            toward being someone who can be trusted with that layer.
          </p>
        </Reveal>
      </section>

      <section className="max-w-editorial mx-auto px-6 py-16 space-y-6 leading-relaxed text-foreground-dim border-t border-border">
        <Reveal>
          <h2 className="font-display text-2xl font-medium text-foreground mb-4">Why Backend Engineering?</h2>
          <p>
            Backend work is the part users never see and always depend on — system architecture, APIs, databases,
            authentication, and the business logic that has to be right every single time. I'm drawn to the discipline
            that requires: performance and scalability aren't features, they're constraints you design around from the
            start. This isn't a rejection of frontend work — it's simply where my curiosity keeps pulling me.
          </p>
        </Reveal>
      </section>

      <section className="max-w-editorial mx-auto px-6 py-16 space-y-6 leading-relaxed text-foreground-dim border-t border-border">
        <Reveal>
          <h2 className="font-display text-2xl font-medium text-foreground mb-4">How I Learn</h2>
          <p>
            I try to learn fundamentals before frameworks — understanding why something works before relying on it.
            That means reading documentation directly, building real projects instead of only following tutorials, and
            breaking problems down into pieces small enough to actually reason about. Progress comes from continuous,
            unglamorous iteration more than any single breakthrough.
          </p>
        </Reveal>
      </section>

      <section className="max-w-content mx-auto px-6 md:px-20 py-24 border-t border-border">
        <Reveal>
          <SectionHeader eyebrow="Roadmap" title="Currently Exploring" />
        </Reveal>
        <div className="grid md:grid-cols-3 gap-x-8 gap-y-10">
          {currentFocus.map((item, i) => (
            <Reveal key={item.title} delay={i * 60} className="flex gap-4">
              <span className="font-mono text-xs text-accent pt-1">{String(i + 1).padStart(2, '0')}</span>
              <div>
                <h3 className="font-display text-lg font-medium">{item.title}</h3>
                <p className="text-foreground-dim text-sm mt-1">{item.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="max-w-content mx-auto px-6 md:px-20 py-24 border-t border-border">
        <Reveal>
          <SectionHeader eyebrow="Philosophy" title="Principles I Build By" />
        </Reveal>
        <div className="grid md:grid-cols-2 gap-6">
          {engineeringPrinciples.map((p, i) => (
            <Reveal key={p.title} delay={i * 80}>
              <Card>
                <h3 className="font-display text-xl font-medium mb-2">{p.title}</h3>
                <p className="text-foreground-dim leading-relaxed">{p.description}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="max-w-content mx-auto px-6 md:px-20 py-24 border-t border-border">
        <Reveal>
          <SectionHeader eyebrow="Ahead" title="The Road Ahead" description="Interests I'm building toward — not claims of expertise." />
        </Reveal>
        <Reveal className="flex flex-wrap gap-3">
          {['Backend Engineering', 'Cloud Technologies', 'AI-powered Applications', 'Distributed Systems', 'Building software used by real people'].map((g) => (
            <span key={g} className="rounded-full border border-border px-4 py-2 font-mono text-xs text-foreground-dim">{g}</span>
          ))}
        </Reveal>
      </section>

      <section className="max-w-editorial mx-auto px-6 py-24 border-t border-border">
        <Reveal>
          <h2 className="font-display text-2xl font-medium mb-4">A Personal Note</h2>
          <p className="text-foreground-dim leading-relaxed">
            I don't think the goal is to know everything — it's to stay honest about what I don't know yet, and to keep
            closing that gap deliberately. That discipline matters more to me than any single milestone.
          </p>
        </Reveal>
      </section>

      <section className="max-w-editorial mx-auto px-6 py-24 text-center border-t border-border">
        <Reveal>
          <h2 className="font-display text-3xl font-medium mb-4">Let's Build Something Meaningful</h2>
          <p className="text-foreground-dim leading-relaxed mb-8">
            Whether it's discussing backend architecture, collaborating on a project, or simply exchanging ideas, I'd love to connect.
          </p>
          <div className="flex justify-center gap-4">
            <Link to="/contact"><Button variant="primary">Contact Me</Button></Link>
            <Link to="/projects"><Button variant="secondary">View Projects</Button></Link>
          </div>
        </Reveal>
      </section>
    </PageLayout>
  )
}
