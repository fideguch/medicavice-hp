'use client'

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react'

interface RevealProps {
  children: ReactNode
  className?: string
  /** seconds */
  delay?: number
  id?: string
}

/**
 * Wraps content and reveals it on scroll via IntersectionObserver.
 * Respects prefers-reduced-motion (handled in globals.css: .reveal becomes static).
 */
export default function Reveal({ children, className = '', delay = 0, id }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    // reduced-motion: 即時表示にして hydration flash を防ぐ
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setVisible(true)
      return
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      id={id}
      ref={ref}
      className={`reveal ${visible ? 'is-visible' : ''} ${className}`}
      style={{ '--reveal-delay': `${delay}s` } as CSSProperties}
    >
      {children}
    </div>
  )
}
