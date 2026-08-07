# AbuBakar Ghafoor — Personal Portfolio

Premium multi-page developer portfolio built with React 19, TypeScript, Vite, Tailwind CSS,
and a hand-built motion system centered on the "request trace" signature motif.

## Getting started

```bash
npm install
npm run dev      # local dev server
npm run build    # production build → dist/
npm run preview  # preview the production build
```

## Structure

- `src/components/shared/` — reusable UI (Button, Card, ProjectCard, TimelineCard,
  ContactCard, RequestTrace, CursorGlow, ThemeToggle, Accordion, etc.)
- `src/components/layout/` — Navbar, Footer, PageLayout
- `src/pages/` — Home, Journey, Projects, Craft, Experience, Contact
- `src/data/` — all editable content (personal info, projects, experience, craft, FAQ,
  navigation). Edit these files to update content — never hardcode content into pages.
- `src/hooks/` — useParallax, useCursorTilt, useReducedMotion, useScrollReveal, useSEO
- `src/lib/ThemeContext.tsx` — dark/light theme provider, persisted to localStorage

## Updating content

Follow `09-Content-Management.md` from the documentation package — the mapping is:

- Personal info → `src/data/personal.ts`
- Projects → `src/data/projects.ts`
- Experience timeline → `src/data/experience.ts`
- Craft/stack → `src/data/craft.ts`
- Journey roadmap + principles → `src/data/journey.ts` (the editorial paragraphs
  live directly in `src/pages/Journey.tsx` since they're prose, not structured data)
- Resume PDF → replace `public/resume/AbuBakar_Ghafoor_Resume.pdf`, keep the filename
- Profile photo → replace `src/assets/images/profile/profile.jpg`

## Design system

The full design direction (palette, type, motion, the request-trace motif) lives in
`00-design-direction.md` in the documentation package and is implemented as CSS custom
properties in `src/index.css` (light theme on `:root`, dark theme on `.dark`).

## Contact form

Currently client-side validated only, with a placeholder success state. Wire the
`handleSubmit` function in `src/pages/Contact.tsx` to EmailJS, Resend, Formspree, or
Netlify Forms when ready.
