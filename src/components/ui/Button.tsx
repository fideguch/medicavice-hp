import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import type { ReactNode } from 'react'

type Variant = 'accent' | 'ghost'

interface ButtonProps {
  href: string
  children: ReactNode
  variant?: Variant
  arrow?: boolean
  external?: boolean
  className?: string
  ariaLabel?: string
}

/** Shared full-pill CTA. Renders a Next Link (internal) or anchor (external). */
export default function Button({
  href,
  children,
  variant = 'accent',
  arrow = false,
  external = false,
  className = '',
  ariaLabel,
}: ButtonProps) {
  const cls = `btn ${variant === 'accent' ? 'btn-accent' : 'btn-ghost'} focus-ring ${className}`
  const inner = (
    <>
      {children}
      {arrow && <ArrowRight size={16} className="arrow" aria-hidden="true" />}
    </>
  )

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls} aria-label={ariaLabel}>
        {inner}
      </a>
    )
  }
  return (
    <Link href={href} className={cls} aria-label={ariaLabel}>
      {inner}
    </Link>
  )
}
