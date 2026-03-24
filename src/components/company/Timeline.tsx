import SectionWrapper from '@/components/ui/SectionWrapper'

const milestones = [
  { date: '8年3月',   era: '平成',  event: '山口大学医学部 卒業' },
  { date: '15年',     era: '平成',  event: '京都大学大学院医学研究科 脳神経外科で再生医療研究' },
  { date: '16年9月',  era: '平成',  event: 'スタンフォード大学 2年3か月留学' },
  { date: '18年11月', era: '平成',  event: '山口大学医学部附属病院 脳神経外科 助教' },
  { date: '2年6月',   era: '令和',  event: '五反田リハビリテーション病院勤務' },
  { date: '6年10月',  era: '令和',  event: '株式会社メディカバイス創業', highlight: true },
]

export default function Timeline() {
  return (
    <SectionWrapper data-section-bg="light" className="bg-white">
      <div className="mb-16">
        <p className="text-xs font-medium uppercase tracking-[0.2em] mb-6" style={{ color: '#64748B' }}>Career</p>
        <h2 className="text-section" style={{ color: '#1E293B' }}>代表経歴</h2>
      </div>

      <ul style={{ borderTop: '1px solid #E2E8F0' }}>
        {milestones.map((m, i) => (
          <li
            key={i}
            className="flex items-start gap-5 sm:gap-10 py-6"
            style={{
              borderBottom: '1px solid #E2E8F0',
              ...(m.highlight ? { backgroundColor: '#F8FAFC' } : {}),
            }}
          >
            {/* 元号タグ */}
            <span
              className="shrink-0 text-xs font-medium px-2.5 py-0.5 mt-0.5"
              style={{
                color: m.highlight ? '#1E293B' : '#64748B',
                backgroundColor: m.highlight ? '#E2E8F0' : '#F8FAFC',
                borderRadius: '2px',
                whiteSpace: 'nowrap',
              }}
            >
              {m.era}
            </span>

            {/* 日付 */}
            <time
              className="shrink-0 text-sm font-medium"
              style={{ color: '#64748B', minWidth: '100px' }}
            >
              {m.date}
            </time>

            {/* イベント */}
            <p
              className="text-sm leading-snug"
              style={{
                color: '#1E293B',
                fontWeight: m.highlight ? 600 : 400,
              }}
            >
              {m.event}
            </p>
          </li>
        ))}
      </ul>
    </SectionWrapper>
  )
}
