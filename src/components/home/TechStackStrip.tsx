'use client'

import Reveal from '@/components/ui/Reveal'
import { useLocale } from '@/lib/i18n'

/** Mono chip row of capability areas. */
export default function TechStackStrip() {
  const { t } = useLocale()
  const c = t.capabilities
  return (
    <section className="py-20 hairline-t" style={{ backgroundColor: 'var(--color-surface-1)' }}>
      <div className="max-w-5xl mx-auto px-6">
        <Reveal>
          <p className="eyebrow mb-7">{c.eyebrow}</p>
          <div className="flex flex-wrap gap-2.5">
            {c.items.map((item) => (
              <span key={item} className="chip">{item}</span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
