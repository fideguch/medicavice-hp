import type { CSSProperties, ReactNode } from 'react'

/**
 * Mono uppercase section label (the `.eyebrow` style), with an optional leading
 * icon and color override. Centralizes the repeated eyebrow + inline-flex/gap markup.
 */
export default function Eyebrow({
  children,
  icon,
  className = '',
  color,
}: {
  children: ReactNode
  icon?: ReactNode
  className?: string
  color?: string
}) {
  const style: CSSProperties | undefined = color ? { color } : undefined
  return (
    <p className={`eyebrow ${icon ? 'inline-flex items-center gap-1.5 ' : ''}${className}`} style={style}>
      {icon}
      {children}
    </p>
  )
}
