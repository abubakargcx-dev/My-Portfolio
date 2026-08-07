import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { navItems } from '../../data/navigation'
import { personal } from '../../data/personal'
import { ThemeToggle } from '../shared/ThemeToggle'
import { LinkButton } from '../shared/Button'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
  }, [mobileOpen])

  return (
    <header
      className={`sticky top-0 z-50 h-20 transition-all duration-250 ease-out ${
        scrolled ? 'bg-surface/90 backdrop-blur border-b border-border' : 'bg-transparent border-b border-transparent'
      }`}
    >
      <nav className="max-w-content mx-auto h-full px-6 md:px-20 flex items-center justify-between">
        <Link to="/" className="font-name font-semibold text-lg tracking-tight">
          AG
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `relative font-mono text-sm py-1 transition-colors duration-200 ${
                  isActive ? 'text-accent' : 'text-foreground-dim hover:text-foreground'
                } after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-px after:bg-accent after:transition-all after:duration-200 ${
                  isActive ? 'after:w-full' : 'after:w-0 hover:after:w-full'
                }`
              }
              end={item.path === '/'}
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <ThemeToggle />
          <LinkButton href={personal.resumeUrl} variant="secondary" target="_blank" rel="noreferrer" className="!py-2">
            Resume
          </LinkButton>
        </div>

        <button
          className="md:hidden text-foreground"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {mobileOpen && (
        <div className="fixed inset-0 top-20 z-40 bg-background flex flex-col items-center justify-center gap-8 md:hidden animate-in fade-in duration-300">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setMobileOpen(false)}
              className={({ isActive }) => `font-display text-2xl ${isActive ? 'text-accent' : 'text-foreground'}`}
              end={item.path === '/'}
            >
              {item.label}
            </NavLink>
          ))}
          <ThemeToggle />
        </div>
      )}
    </header>
  )
}
