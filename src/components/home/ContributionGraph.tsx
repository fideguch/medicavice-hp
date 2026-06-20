'use client'

import { useLocale } from '@/lib/i18n'

interface Day {
  date: string
  count: number
  level: number
}

// single-accent intensity ramp (no GitHub green)
const LEVEL = [
  'var(--color-surface-2)',
  'rgba(59, 130, 246, 0.28)',
  'rgba(59, 130, 246, 0.5)',
  'rgba(59, 130, 246, 0.75)',
  'var(--color-accent)',
]

/** GitHub contribution heatmap, treated as an ambient design element (no verbose caption). */
export default function ContributionGraph({ days, total }: { days: Day[]; total: number }) {
  const { t } = useLocale()
  if (!days.length) return null

  const firstWeekday = new Date(`${days[0].date}T00:00:00`).getDay()
  const cells: (Day | null)[] = [...Array(firstWeekday).fill(null), ...days]

  return (
    <div className="overflow-x-auto pb-1">
      <div className="flex items-end gap-4 w-max">
        <div
          aria-hidden="true"
          className="grid grid-flow-col gap-[3px]"
          style={{ gridTemplateRows: 'repeat(7, 13px)', gridAutoColumns: '13px' }}
        >
          {cells.map((d, i) => (
            <span
              key={i}
              style={{
                width: 13,
                height: 13,
                borderRadius: 3,
                backgroundColor: d ? LEVEL[d.level] ?? LEVEL[0] : 'transparent',
                border: d && d.level === 0 ? '1px solid var(--color-border-hairline)' : 'none',
              }}
            />
          ))}
        </div>
        <span className="num text-sm shrink-0 pb-0.5" style={{ color: 'var(--color-text-muted)' }}>
          {total.toLocaleString()} <span className="text-[10px]" style={{ color: 'var(--color-text-dim)' }}>{t.activity.commitsLabel}</span>
        </span>
      </div>
    </div>
  )
}
