import SectionWrapper from '@/components/ui/SectionWrapper'

const companyInfo = [
  { label: '会社名', value: '株式会社メディカバイス' },
  { label: '設立', value: '令和6年10月' },
  { label: '資本金', value: '1,000,000円' },
  {
    label: '役員',
    value: '代表取締役社長　出口誠\n取締役　出口史門',
  },
  {
    label: '所在地',
    value: '〒141-0031\n東京都品川区西五反田5丁目23番3号 5階5D室',
  },
]

export default function CompanyOverview() {
  return (
    <SectionWrapper data-section-bg="light" className="bg-white">
      <div className="mb-12">
        <p className="text-sm text-[#64748B] tracking-widest uppercase mb-4 font-medium">About</p>
        <h2 className="text-section" style={{ color: '#1E293B' }}>会社概要</h2>
      </div>

      <div className="bg-[#FDFBF7] shadow-sm shadow-[#1E293B]/5 overflow-hidden" style={{ borderRadius: '6px' }}>
        <table className="w-full text-sm">
          <tbody>
            {companyInfo.map((item, index) => (
              <tr
                key={item.label}
                className={index !== companyInfo.length - 1 ? 'border-b border-[#1E293B]/8' : ''}
              >
                <th className="text-left px-6 py-5 font-medium text-[#1E293B] w-32 md:w-40 align-top whitespace-nowrap bg-white/50">
                  {item.label}
                </th>
                <td className="px-6 py-5 text-[#64748B] leading-loose whitespace-pre-line">
                  {item.value}
                </td>
              </tr>
            ))}
            <tr>
              <th className="text-left px-6 py-5 font-medium text-[#1E293B] w-32 md:w-40 align-top whitespace-nowrap bg-white/50">
                パートナー
              </th>
              <td className="px-6 py-5 text-[#64748B] leading-loose">
                音声機器デバイス共同開発先：{' '}
                <a
                  href="https://www.medimony.co.jp/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#1E293B] underline underline-offset-4 hover:opacity-70 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E293B] focus-visible:ring-offset-2"
                >
                  株式会社メディモニー
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </SectionWrapper>
  )
}
