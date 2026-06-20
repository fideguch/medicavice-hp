'use client'

import { useEffect, useRef, useState, type ReactNode } from 'react'

/** Reveals heading text with a clip-path wipe + rise on scroll into view. */
export default function MaskText({ children, className = '' }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setInView(true)
      return
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3, rootMargin: '0px 0px -10% 0px' }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <span ref={ref} className={`mask-reveal ${inView ? 'in-view' : ''} ${className}`}>
      <span className="mask-inner">{children}</span>
    </span>
  )
}
