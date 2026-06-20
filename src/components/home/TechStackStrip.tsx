'use client'

import { SquareKanban, Sparkles, ChartLine, type LucideIcon } from 'lucide-react'
import Eyebrow from '@/components/ui/Eyebrow'
import Reveal from '@/components/ui/Reveal'
import { CAPABILITY_GROUPS } from '@/lib/content'
import { useLocale } from '@/lib/i18n'

const GROUP_ICON = {
  product: SquareKanban,
  ai: Sparkles,
  data: ChartLine,
} satisfies Record<(typeof CAPABILITY_GROUPS)[number]['key'], LucideIcon>

/** Capability areas, grouped into labeled clusters (mono sub-label + one icon each). */
export default function TechStackStrip() {
  const { t, locale } = useLocale()
  const c = t.capabilities
  return (
    <section className="py-20 hairline-t" style={{ backgroundColor: 'var(--color-surface-1)' }}>
      <div className="max-w-5xl mx-auto px-6">
        <Reveal>
          <Eyebrow className="mb-8">{c.eyebrow}</Eyebrow>
          <div className="flex flex-col gap-7">
            {CAPABILITY_GROUPS.map((g) => {
              const Icon = GROUP_ICON[g.key]
              return (
                <div key={g.key}>
                  <Eyebrow className="mb-3" color="var(--color-text-dim)" icon={<Icon size={13} strokeWidth={1.5} aria-hidden="true" />}>
                    {g.label}
                  </Eyebrow>
                  <div className="flex flex-wrap gap-2.5">
                    {g.chips.map((chip) => (
                      <span key={chip.en} className="chip">{locale === 'ja' ? chip.ja : chip.en}</span>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
