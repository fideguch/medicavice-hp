'use client'

import Reveal from '@/components/ui/Reveal'
import type { CareerItem } from '@/lib/content'

interface CareerTimelineProps {
  items: CareerItem[]
  /** smaller, secondary styling */
  compact?: boolean
}

/** Reusable reveal-on-scroll career timeline. Used for both the IT and medical histories. */
export default function CareerTimeline({ items, compact = false }: CareerTimelineProps) {
  return (
    <ol className="relative">
      <div
        aria-hidden="true"
        className="absolute top-1 bottom-1 w-px"
        style={{ left: 5, backgroundColor: 'var(--color-border)' }}
      />
      {items.map((m, i) => (
        <li key={m.iso} className={`relative pl-9 ${compact ? 'pb-7' : 'pb-9'} last:pb-0`}>
          <span
            aria-hidden="true"
            className={`absolute top-1.5 ${m.highlight ? 'now-dot' : ''}`}
            style={{
              left: 0,
              width: 11,
              height: 11,
              borderRadius: 9999,
              backgroundColor: m.highlight ? 'var(--color-accent-text)' : 'var(--color-surface-3)',
              border: m.highlight ? 'none' : '1px solid var(--color-border-strong)',
            }}
          />
          <Reveal delay={i * 0.04}>
            <time
              dateTime={m.iso}
              className="mono block text-[11px] mb-1.5"
              style={{ color: m.highlight ? 'var(--color-accent-text)' : 'var(--color-text-muted)', letterSpacing: '0.04em' }}
            >
              {m.period}
            </time>
            <p
              className="leading-snug"
              style={{
                color: m.highlight ? 'var(--color-text)' : 'var(--color-text-body)',
                fontWeight: m.highlight ? 600 : 500,
                fontSize: compact ? '0.875rem' : '0.95rem',
              }}
            >
              {m.title}
            </p>
            {m.sub && (
              <p className="text-muted leading-relaxed mt-1" style={{ fontSize: compact ? '0.78rem' : '0.82rem' }}>
                {m.sub}
              </p>
            )}
          </Reveal>
        </li>
      ))}
    </ol>
  )
}
