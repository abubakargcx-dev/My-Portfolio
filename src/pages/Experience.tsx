import { Link } from 'react-router-dom'
import { PageLayout } from '../components/layout/PageLayout'
import { RequestTrace } from '../components/shared/RequestTrace'
import { SectionHeader } from '../components/shared/SectionHeader'
import { Card } from '../components/shared/Card'
import { TimelineCard } from '../components/shared/TimelineCard'
import { Reveal } from '../components/shared/Reveal'
import { Button } from '../components/shared/Button'
import { useSEO } from '../hooks/useSEO'
import { timeline, futureRoadmap } from '../data/experience'

export function Experience() {
  useSEO({
    title: 'Experience',
    description: 'Explore the educational background, professional journey, and future engineering roadmap of AbuBakar Ghafoor.',
  })

  return (
    <PageLayout>
      <section className="relative max-w-editorial mx-auto px-6 py-24 text-center overflow-hidden">
        <div className="absolute inset-0 opacity-30 pointer-events-none -z-10">
          <RequestTrace className="w-full h-full" />
        </div>
        <h1 className="font-display text-4xl md:text-5xl font-normal mb-6">Experience</h1>
        <p className="text-foreground-dim text-lg leading-relaxed">
          Every milestone represents another step toward becoming a better software engineer.
        </p>
      </section>

      <section className="max-w-[900px] mx-auto px-6 py-16">
        <Reveal>
          <SectionHeader eyebrow="Timeline" title="Career Timeline" />
        </Reveal>
        <div className="space-y-6">
          {timeline.map((entry, i) => (
            <Reveal key={entry.title} delay={i * 70}>
              <TimelineCard entry={entry} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="max-w-[900px] mx-auto px-6 py-16 border-t border-border">
        <Reveal>
          <SectionHeader eyebrow="Education" title="Education" />
          <Card>
            <p className="font-mono text-xs text-accent mb-2">In Progress</p>
            <h3 className="font-display text-xl font-medium mb-1">NUML — National University of Modern Languages</h3>
            <p className="text-foreground-dim mb-4">Bachelor of Science in Software Engineering</p>
            <p className="text-foreground-dim leading-relaxed">
              My coursework centers on software design, data structures, and systems thinking, alongside a growing focus
              on backend architecture and how real applications are built and maintained.
            </p>
          </Card>
        </Reveal>
      </section>

      <section className="max-w-[900px] mx-auto px-6 py-16 border-t border-border">
        <Reveal>
          <SectionHeader eyebrow="Now" title="Currently Building Experience" />
          <Card>
            <p className="text-foreground-dim leading-relaxed">
              I'm currently focused on strengthening my backend engineering skills through structured learning, personal
              projects, and continuous practice. This section will naturally grow as I gain professional experience.
            </p>
          </Card>
        </Reveal>
      </section>

      <section className="max-w-[900px] mx-auto px-6 py-16 border-t border-border">
        <Reveal>
          <SectionHeader eyebrow="Certifications" title="Certifications" />
          <p className="text-foreground-dim">Certifications will be added here as they are earned.</p>
        </Reveal>
      </section>

      <section className="max-w-[900px] mx-auto px-6 py-16 border-t border-border">
        <Reveal>
          <SectionHeader eyebrow="Achievements" title="Achievements" />
          <p className="text-foreground-dim">This timeline is intentionally reserved for meaningful achievements rather than quantity.</p>
        </Reveal>
      </section>

      <section className="max-w-content mx-auto px-6 md:px-20 py-24 border-t border-border">
        <Reveal>
          <SectionHeader eyebrow="Ahead" title="The Road Ahead" />
        </Reveal>
        <div className="grid md:grid-cols-3 gap-x-8 gap-y-10">
          {futureRoadmap.map((item, i) => (
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

      <section className="max-w-editorial mx-auto px-6 py-24 text-center border-t border-border">
        <Reveal>
          <h2 className="font-display text-3xl font-medium mb-4">Interested in My Journey?</h2>
          <p className="text-foreground-dim leading-relaxed mb-8">
            Whether you're a recruiter, engineer, or fellow learner, I'd be happy to connect and discuss ideas, opportunities, or backend engineering.
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
