import { useEffect, useRef } from 'react'
import { useReducedMotion } from '../../hooks/useReducedMotion'

interface RequestTraceProps {
  nodes?: string[]
  className?: string
  orientation?: 'horizontal' | 'vertical'
}

const defaultNodes = ['client', 'api', 'auth', 'service', 'db']

/**
 * The signature motif: a thin amber line draws itself node to node,
 * pauses, then repeats. Represents a request flowing through a backend system.
 */
export function RequestTrace({ nodes = defaultNodes, className = '', orientation = 'horizontal' }: RequestTraceProps) {
  const pathRef = useRef<SVGPathElement | null>(null)
  const reduced = useReducedMotion()

  useEffect(() => {
    if (reduced || !pathRef.current) return
    const path = pathRef.current
    const length = path.getTotalLength()
    path.style.strokeDasharray = `${length}`
    path.style.strokeDashoffset = `${length}`

    let raf: number
    let start: number | null = null
    const drawMs = 4500
    const pauseMs = 1200

    function frame(ts: number) {
      if (start === null) start = ts
      const elapsed = ts - start
      const cycle = drawMs + pauseMs
      const t = elapsed % cycle

      if (t < drawMs) {
        const progress = t / drawMs
        path.style.strokeDashoffset = `${length * (1 - progress)}`
      } else {
        path.style.strokeDashoffset = '0'
      }
      raf = requestAnimationFrame(frame)
    }
    raf = requestAnimationFrame(frame)
    return () => cancelAnimationFrame(raf)
  }, [reduced])

  const count = nodes.length
  const isVertical = orientation === 'vertical'
  const width = isVertical ? 120 : 1000
  const height = isVertical ? 600 : 160

  const points = nodes.map((_, i) => {
    const t = i / (count - 1)
    if (isVertical) {
      const x = 60 + (i % 2 === 0 ? -18 : 18)
      const y = 40 + t * (height - 80)
      return { x, y }
    }
    const x = 40 + t * (width - 80)
    const y = 80 + Math.sin(i * 1.3) * 30
    return { x, y }
  })

  const d = points.map((p, i) => `${i === 0 ? 'M' : 'L'}${p.x},${p.y}`).join(' ')

  return (
    <svg
      className={className}
      viewBox={`0 0 ${width} ${height}`}
      preserveAspectRatio="xMidYMid meet"
      aria-hidden="true"
      focusable="false"
    >
      <path d={d} stroke="var(--color-border-strong)" strokeWidth={1} fill="none" opacity={0.5} />
      <path ref={pathRef} d={d} stroke="var(--color-accent)" strokeWidth={1.6} fill="none" strokeLinecap="round" opacity={reduced ? 0.6 : 1} />
      {points.map((p, i) => (
        <circle key={i} cx={p.x} cy={p.y} r={4} fill="var(--color-bg)" stroke="var(--color-accent)" strokeWidth={1.3} />
      ))}
      {!isVertical &&
        nodes.map((label, i) => (
          <text key={label} x={points[i].x - 10} y={points[i].y - 14} fontFamily="JetBrains Mono" fontSize={10} fill="var(--color-text-dim)" opacity={0.8}>
            {label}
          </text>
        ))}
    </svg>
  )
}
