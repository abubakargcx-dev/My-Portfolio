export interface NavItem {
  label: string
  path: string
}

export const navItems: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'Journey', path: '/journey' },
  { label: 'Projects', path: '/projects' },
  { label: 'Craft', path: '/craft' },
  { label: 'Experience', path: '/experience' },
  { label: 'Contact', path: '/contact' },
]
