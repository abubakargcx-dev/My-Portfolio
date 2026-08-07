import { useState, type FormEvent } from 'react'
import { Mail, FileText } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '../components/shared/icons'
import { PageLayout } from '../components/layout/PageLayout'
import { RequestTrace } from '../components/shared/RequestTrace'
import { SectionHeader } from '../components/shared/SectionHeader'
import { Card } from '../components/shared/Card'
import { ContactCard } from '../components/shared/ContactCard'
import { Accordion } from '../components/shared/Accordion'
import { Button, LinkButton } from '../components/shared/Button'
import { Reveal } from '../components/shared/Reveal'
import { useSEO } from '../hooks/useSEO'
import { personal } from '../data/personal'
import { faqItems } from '../data/faq'

interface FormState {
  name: string
  email: string
  subject: string
  message: string
}

const initialState: FormState = { name: '', email: '', subject: '', message: '' }

export function Contact() {
  useSEO({
    title: 'Contact',
    description: 'Get in touch with AbuBakar Ghafoor for backend engineering opportunities, collaborations, internships, or technical discussions.',
  })

  const [form, setForm] = useState<FormState>(initialState)
  const [errors, setErrors] = useState<Partial<FormState>>({})
  const [status, setStatus] = useState<'idle' | 'success'>('idle')

  function validate(): boolean {
    const next: Partial<FormState> = {}
    if (!form.name.trim()) next.name = 'Name is required.'
    if (!form.email.trim()) next.email = 'Email is required.'
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) next.email = 'Enter a valid email.'
    if (!form.message.trim()) next.message = 'Message is required.'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    if (!validate()) return
    // Placeholder: wire to EmailJS / Resend / Formspree / Netlify Forms later.
    setStatus('success')
    setForm(initialState)
  }

  return (
    <PageLayout>
      <section className="relative max-w-editorial mx-auto px-6 py-24 text-center overflow-hidden">
        <div className="absolute inset-0 opacity-30 pointer-events-none -z-10">
          <RequestTrace className="w-full h-full" />
        </div>
        <h1 className="font-display text-4xl md:text-5xl font-normal mb-6">Let's Connect</h1>
        <p className="text-foreground-dim text-lg leading-relaxed">
          Whether it's discussing backend engineering, collaborating on a project, or simply exchanging ideas, I'd be happy to hear from you.
        </p>
      </section>

      <section className="max-w-content mx-auto px-6 md:px-20 py-16 grid md:grid-cols-[1.4fr_1fr] gap-12">
        <Reveal>
          <form onSubmit={handleSubmit} noValidate className="space-y-5">
            <div>
              <label htmlFor="name" className="block font-mono text-xs uppercase tracking-wide text-foreground-dim mb-2">Name</label>
              <input
                id="name"
                value={form.name}
                onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                className="w-full h-[52px] rounded-md border border-border bg-surface px-4 outline-none transition-colors duration-200 focus:border-accent"
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? 'name-error' : undefined}
              />
              {errors.name && <p id="name-error" className="text-error text-xs mt-1">{errors.name}</p>}
            </div>

            <div>
              <label htmlFor="email" className="block font-mono text-xs uppercase tracking-wide text-foreground-dim mb-2">Email</label>
              <input
                id="email"
                type="email"
                value={form.email}
                onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                className="w-full h-[52px] rounded-md border border-border bg-surface px-4 outline-none transition-colors duration-200 focus:border-accent"
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? 'email-error' : undefined}
              />
              {errors.email && <p id="email-error" className="text-error text-xs mt-1">{errors.email}</p>}
            </div>

            <div>
              <label htmlFor="subject" className="block font-mono text-xs uppercase tracking-wide text-foreground-dim mb-2">Subject</label>
              <input
                id="subject"
                value={form.subject}
                onChange={(e) => setForm((f) => ({ ...f, subject: e.target.value }))}
                className="w-full h-[52px] rounded-md border border-border bg-surface px-4 outline-none transition-colors duration-200 focus:border-accent"
              />
            </div>

            <div>
              <label htmlFor="message" className="block font-mono text-xs uppercase tracking-wide text-foreground-dim mb-2">Message</label>
              <textarea
                id="message"
                value={form.message}
                onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                className="w-full min-h-[180px] rounded-md border border-border bg-surface p-4 outline-none transition-colors duration-200 focus:border-accent"
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? 'message-error' : undefined}
              />
              {errors.message && <p id="message-error" className="text-error text-xs mt-1">{errors.message}</p>}
            </div>

            <Button type="submit" variant="primary">Send Message</Button>
            {status === 'success' && (
              <p role="status" className="text-success text-sm">Thanks — your message has been noted. I'll get back to you soon.</p>
            )}
          </form>
        </Reveal>

        <Reveal delay={100}>
          <Card>
            <p className="font-mono text-xs uppercase tracking-wide text-accent mb-6">Contact Information</p>
            <dl className="space-y-4 text-sm">
              <div><dt className="font-mono text-xs text-foreground-dim">Name</dt><dd>{personal.name}</dd></div>
              <div><dt className="font-mono text-xs text-foreground-dim">Role</dt><dd>{personal.title} · {personal.subtitle}</dd></div>
              <div><dt className="font-mono text-xs text-foreground-dim">Location</dt><dd>{personal.location}</dd></div>
              <div><dt className="font-mono text-xs text-foreground-dim">Email</dt><dd>{personal.email}</dd></div>
              <div><dt className="font-mono text-xs text-foreground-dim">Availability</dt><dd>{personal.availability}</dd></div>
            </dl>
          </Card>
        </Reveal>
      </section>

      <section className="max-w-content mx-auto px-6 md:px-20 py-24 border-t border-border">
        <Reveal>
          <SectionHeader eyebrow="Elsewhere" title="Social Links" />
        </Reveal>
        <div className="grid md:grid-cols-2 gap-4">
          <Reveal><ContactCard icon={<GithubIcon width={18} height={18} />} label="GitHub" value="abubakargcx-dev" href={personal.github} /></Reveal>
          <Reveal delay={60}><ContactCard icon={<LinkedinIcon width={18} height={18} />} label="LinkedIn" value="abubakargcx" href={personal.linkedin} /></Reveal>
          <Reveal delay={120}><ContactCard icon={<Mail size={18} />} label="Email" value={personal.email} href={`mailto:${personal.email}`} /></Reveal>
          <Reveal delay={180}><ContactCard icon={<FileText size={18} />} label="Resume" value="Download PDF" href={personal.resumeUrl} /></Reveal>
        </div>
      </section>

      <section className="max-w-editorial mx-auto px-6 py-24 border-t border-border">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-wide text-accent mb-3">Current Status</p>
          <div className="flex items-center gap-2 mb-4">
            <span className="h-2 w-2 rounded-full bg-success" />
            <span className="font-medium">Available</span>
          </div>
          <p className="text-foreground-dim leading-relaxed">{personal.availability}</p>
        </Reveal>
      </section>

      <section className="max-w-editorial mx-auto px-6 py-24 border-t border-border">
        <Reveal>
          <SectionHeader eyebrow="FAQ" title="Common Questions" />
          <Accordion items={faqItems} />
        </Reveal>
      </section>

      <section className="max-w-editorial mx-auto px-6 py-24 text-center border-t border-border">
        <Reveal>
          <h2 className="font-display text-3xl font-medium mb-4">Let's Build Something Meaningful</h2>
          <p className="text-foreground-dim leading-relaxed mb-8">
            Great software begins with great conversations. Whether you have an opportunity, a question, or simply want to connect, I'd be glad to hear from you.
          </p>
          <div className="flex justify-center gap-4">
            <LinkButton href={`mailto:${personal.email}`} variant="primary">Send Email</LinkButton>
            <LinkButton href={personal.github} variant="secondary" target="_blank" rel="noreferrer">View GitHub</LinkButton>
          </div>
        </Reveal>
      </section>
    </PageLayout>
  )
}
