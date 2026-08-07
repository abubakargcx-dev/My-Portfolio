import { Moon, Sun } from 'lucide-react'
import { useTheme } from '../../lib/ThemeContext'

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      className="relative flex h-9 w-9 items-center justify-center rounded-md border border-border text-foreground-dim transition-colors duration-200 hover:text-accent hover:border-border-strong"
    >
      <span className="transition-transform duration-350" style={{ transform: theme === 'dark' ? 'rotate(0deg)' : 'rotate(180deg)' }}>
        {theme === 'dark' ? <Moon size={16} /> : <Sun size={16} />}
      </span>
    </button>
  )
}
