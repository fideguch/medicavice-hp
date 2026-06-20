import type { CSSProperties } from 'react'

/** Blurred radial blue->violet aurora glow. Glow-only voltage colors. */
export default function AuroraGlow({
  className = '',
  style,
}: {
  className?: string
  style?: CSSProperties
}) {
  return <div className={`aurora animate-aurora ${className}`} aria-hidden="true" style={style} />
}
