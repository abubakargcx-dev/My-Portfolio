import { useCursorTilt } from '../../hooks/useCursorTilt'
import profileImg from '../../assets/images/profile/profile.jpg'

export function Portrait() {
  const { ref, onMouseMove, onMouseLeave } = useCursorTilt<HTMLDivElement>(3)

  return (
    <div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className="relative w-full max-w-[320px] aspect-[4/5] overflow-hidden rounded-2xl border border-border transition-transform duration-200 ease-out"
      style={{ transformStyle: 'preserve-3d' }}
    >
      <img
        src={profileImg}
        alt="Portrait of AbuBakar Ghafoor"
        className="h-full w-full object-cover"
        loading="eager"
        width={1200}
        height={1500}
      />
      <div className="absolute inset-0 ring-1 ring-inset ring-border rounded-2xl pointer-events-none" />
    </div>
  )
}
