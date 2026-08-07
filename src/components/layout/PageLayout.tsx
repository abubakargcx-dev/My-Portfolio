import type { ReactNode } from 'react'

export function PageLayout({ children }: { children: ReactNode }) {
  return <main id="top" className="relative">{children}</main>
}
