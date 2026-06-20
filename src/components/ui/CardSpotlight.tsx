'use client'

import { useEffect } from 'react'

/**
 * One delegated pointer listener that makes the single-accent glow on `.card`
 * follow the cursor (--mx / --my). Desktop fine-pointer only; reduced-motion / touch skip it.
 */
export default function CardSpotlight() {
  useEffect(() => {
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return

    let frame = 0
    const onMove = (e: PointerEvent) => {
      const target = (e.target as Element)?.closest?.('.card') as HTMLElement | null
      if (!target) return
      if (frame) return
      frame = requestAnimationFrame(() => {
        frame = 0
        const rect = target.getBoundingClientRect()
        target.style.setProperty('--mx', `${e.clientX - rect.left}px`)
        target.style.setProperty('--my', `${e.clientY - rect.top}px`)
      })
    }

    document.addEventListener('pointermove', onMove, { passive: true })
    return () => {
      document.removeEventListener('pointermove', onMove)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [])

  return null
}
