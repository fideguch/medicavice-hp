'use client'

import Reveal from '@/components/ui/Reveal'
import MaskText from '@/components/ui/MaskText'
import Eyebrow from '@/components/ui/Eyebrow'
import { Sparkles, Users, Layers } from 'lucide-react'
import { SERVICES } from '@/lib/content'
import { useLocale } from '@/lib/i18n'

/** Detailed view of the services (overview / audience / value). */
export default function ServicesSection() {
  const { t } = useLocale()
  const s = t.services

  return (
    <section id="services" className="py-24 sm:py-28" style={{ backgroundColor: 'var(--color-bg)' }}>
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-14">
          <Eyebrow className="mb-5" icon={<Sparkles size={14} strokeWidth={1.5} aria-hidden="true" style={{ color: 'var(--color-text-muted)' }} />}>{s.eyebrow}</Eyebrow>
          <h2 className="heading-section"><MaskText>{s.heading}</MaskText></h2>
          <p className="text-muted mt-4 max-w-2xl text-sm leading-loose">{s.intro}</p>
        </div>

        <div className="flex flex-col gap-4">
          {s.items.map((item, i) => {
            const meta = SERVICES[i]
            if (!meta) return null
            return (
              <Reveal key={meta.number} delay={i * 0.05}>
                <article className="card p-7 sm:p-9">
                  <div className="flex flex-col sm:flex-row sm:items-start gap-5 sm:gap-8">
                    <div className="flex items-center gap-3 sm:flex-col sm:items-start sm:gap-3 shrink-0 sm:w-28">
                      <span className="num text-3xl sm:text-4xl font-medium" style={{ color: 'var(--color-text-muted)' }}>
                        {meta.number}
                      </span>
                      <span className="chip" style={{ padding: '0.2rem 0.6rem', whiteSpace: 'nowrap' }}>{meta.tag}</span>
                    </div>

                    <div className="flex-1 min-w-0">
                      <h3 className="heading-card mb-3">{item.title}</h3>
                      <p className="text-body text-sm leading-loose mb-6 max-w-2xl">{item.detail}</p>

                      <div className="grid sm:grid-cols-[auto_1fr] gap-x-6 gap-y-3 items-baseline">
                        <span className="eyebrow inline-flex items-center gap-1.5" style={{ color: 'var(--color-text-muted)' }}><Users size={13} strokeWidth={1.5} aria-hidden="true" />{s.audienceLabel}</span>
                        <span className="text-muted text-sm leading-relaxed">{item.audience}</span>

                        <span className="eyebrow inline-flex items-center gap-1.5" style={{ color: 'var(--color-text-muted)' }}><Layers size={13} strokeWidth={1.5} aria-hidden="true" />{s.areasLabel}</span>
                        <span className="flex flex-wrap gap-1.5">
                          {item.areas.map((a) => (
                            <span key={a} className="mono text-[11px]" style={{ color: 'var(--color-text-muted)' }}>#{a}</span>
                          ))}
                        </span>
                      </div>
                    </div>
                  </div>
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
