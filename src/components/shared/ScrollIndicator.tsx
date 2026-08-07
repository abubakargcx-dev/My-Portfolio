import { useEffect, useState } from 'react'

export function ScrollIndicator() {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY < 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (!visible) return null

  return (
    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40 motion-safe:animate-bounce-slow">
      <span className="font-mono text-[10px] tracking-widest text-foreground-dim uppercase">Scroll</span>
      <div className="h-8 w-px bg-foreground-dim" />
    </div>
  )
}
