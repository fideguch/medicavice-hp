import SectionWrapper from '@/components/ui/SectionWrapper'

const milestones = [
  {
    date: '平成8年3月',
    event: '山口大学医学部 卒業',
  },
  {
    date: '平成15年',
    event: '京都大学大学院医学研究科 脳神経外科で再生医療研究',
  },
  {
    date: '平成16年9月',
    event: 'スタンフォード大学 2年3か月留学',
  },
  {
    date: '平成18年11月',
    event: '山口大学医学部附属病院 脳神経外科 助教',
  },
  {
    date: '令和2年6月',
    event: '五反田リハビリテーション病院勤務',
  },
  {
    date: '令和6年10月',
    event: '株式会社メディカバイス創業',
  },
]

export default function Timeline() {
  return (
    <SectionWrapper data-section-bg="light" className="bg-white">
      <div className="mb-16">
        <p className="text-xs font-medium uppercase tracking-[0.2em] mb-6" style={{ color: '#64748B' }}>Career</p>
        <h2 className="text-section" style={{ color: '#1E293B' }}>代表経歴</h2>
      </div>

      <div className="relative">
        {/* Vertical line — モバイル: ドット位置(7px)、デスクトップ: 日付列(160px) + ドット中心(7px) = 167px */}
        <div
          className="absolute top-3 bottom-3 w-px md:hidden"
          style={{ left: '7px', backgroundColor: '#64748B' }}
        />
        <div
          className="absolute top-3 bottom-3 w-px hidden md:block"
          style={{ left: '167px', backgroundColor: '#64748B' }}
        />

        <div className="flex flex-col">
          {milestones.map((milestone, index) => {
            const isLast = index === milestones.length - 1
            const isHighlight = isLast
            return (
              <div key={index} className="relative flex pb-10 last:pb-0">
                {/* Date (desktop left column) */}
                <div
                  className="hidden md:flex shrink-0 pr-8 justify-end items-start pt-0.5"
                  style={{ width: '160px', color: '#64748B' }}
                >
                  <span className="text-sm font-medium text-right leading-snug">
                    {milestone.date}
                  </span>
                </div>

                {/* Dot */}
                <div className="relative z-10 shrink-0 pt-1">
                  <div
                    className="rounded-full"
                    style={{
                      width: isHighlight ? '20px' : '14px',
                      height: isHighlight ? '20px' : '14px',
                      backgroundColor: '#1E293B',
                      marginTop: isHighlight ? '-3px' : '0',
                    }}
                  />
                </div>

                {/* Content */}
                <div className="flex-1" style={{ paddingLeft: '24px' }}>
                  {/* Date (mobile) */}
                  <span
                    className="md:hidden block text-xs font-medium mb-1.5"
                    style={{ color: '#64748B' }}
                  >
                    {milestone.date}
                  </span>
                  {isHighlight ? (
                    <div
                      className="inline-block px-4 py-2.5"
                      style={{
                        backgroundColor: '#F1F5F9',
                        borderLeft: '2px solid #1E293B',
                      }}
                    >
                      <p
                        className="font-semibold text-base leading-snug"
                        style={{ color: '#1E293B' }}
                      >
                        {milestone.event}
                      </p>
                    </div>
                  ) : (
                    <p
                      className="font-medium text-base leading-snug"
                      style={{ color: '#1E293B' }}
                    >
                      {milestone.event}
                    </p>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </SectionWrapper>
  )
}
