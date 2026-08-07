import { Link } from 'react-router-dom'
import { Mail, ArrowUp } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '../shared/icons'
import { navItems } from '../../data/navigation'
import { personal } from '../../data/personal'
import { ThemeToggle } from '../shared/ThemeToggle'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border mt-32">
      <div className="max-w-content mx-auto px-6 md:px-20 py-14 flex flex-col gap-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div>
            <p className="font-name font-semibold text-lg">{personal.name}</p>
            <p className="text-foreground-dim text-sm mt-1">{personal.subtitle}</p>
          </div>

          <div className="flex flex-wrap gap-6">
            {navItems.map((item) => (
              <Link key={item.path} to={item.path} className="font-mono text-sm text-foreground-dim hover:text-accent transition-colors duration-200">
                {item.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <a href={personal.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="text-foreground-dim hover:text-accent transition-colors duration-200">
              <GithubIcon width={18} height={18} />
            </a>
            <a href={personal.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-foreground-dim hover:text-accent transition-colors duration-200">
              <LinkedinIcon width={18} height={18} />
            </a>
            <a href={`mailto:${personal.email}`} aria-label="Email" className="text-foreground-dim hover:text-accent transition-colors duration-200">
              <Mail size={18} />
            </a>
            <ThemeToggle />
          </div>
        </div>

        <div className="flex items-center justify-between border-t border-border pt-6">
          <p className="font-mono text-xs text-foreground-dim">© {year} {personal.name}. Built with intention.</p>
          <a href="#top" className="flex items-center gap-2 font-mono text-xs text-foreground-dim hover:text-accent transition-colors duration-200">
            Back to top <ArrowUp size={12} />
          </a>
        </div>
      </div>
    </footer>
  )
}
