import Image from 'next/image'
import SectionWrapper from '@/components/ui/SectionWrapper'

const services = [
  {
    id: 1,
    number: '01',
    title: '医療デバイス開発コンサルティング',
    description:
      '医師としての豊富な臨床経験をもとに、医療機器・デバイスの企画・開発から薬事申請まで、現場目線のコンサルティングを提供します。',
    featured: true,
  },
  {
    id: 2,
    number: '02',
    title: '美容医療オンライン診療',
    description: '場所を選ばず、専門医による質の高い美容医療をオンラインで提供します。',
    featured: false,
  },
  {
    id: 3,
    number: '03',
    title: 'プロダクトマネジメント業務',
    description:
      '医療・IT領域における製品・サービスの企画・設計・推進をトータルでサポートします。',
    featured: false,
  },
  {
    id: 4,
    number: '04',
    title: 'ホームページ作成',
    description:
      '医療機関・クリニック向けを中心に、信頼感と清潔感を重視したウェブサイト制作を行います。',
    featured: false,
  },
  {
    id: 5,
    number: '05',
    title: '外国人向け料理教室',
    description:
      '日本の食文化を通じた国際交流の場を提供します。在日外国人や訪日客向けの料理体験を企画・運営します。',
    featured: false,
  },
]

export default function ServicesSection() {
  const featuredService = services.find((s) => s.featured)!
  const otherServices = services.filter((s) => !s.featured)

  return (
    <SectionWrapper data-section-bg="light" className="bg-[#FDFBF7]">
      {/* Section Header */}
      <div className="mb-20">
        <p className="text-xs text-[#64748B] tracking-[0.2em] uppercase mb-6 font-medium">Services</p>
        <h2 className="text-section text-[#1E293B]">サービス概要</h2>
      </div>

      {/* 主軸事業 — 120点 */}
      <div className="bg-[#0F172A] mb-4 overflow-hidden" style={{ borderRadius: '6px' }}>
        <div className="flex flex-col md:flex-row">
          <div className="flex-1 p-10 md:p-14">
            <span className="text-xs text-white/40 tracking-[0.2em] uppercase font-medium block mb-8">
              {featuredService.number} — 主軸事業
            </span>
            <h3 className="text-headline text-white mb-6">
              {featuredService.title}
            </h3>
            <p className="text-sm text-white/70 leading-loose max-w-lg">
              {featuredService.description}
            </p>
          </div>
          {/* サービス紹介画像 */}
          <div className="relative hidden md:block md:w-72 shrink-0" style={{ minHeight: '280px' }}>
            <Image
              src="/services.png"
              alt="医療デバイス開発コンサルティングのイメージ"
              fill
              className="object-cover object-center"
            />
          </div>
        </div>
      </div>

      {/* その他サービス — 60点（シンプルなリスト） */}
      <div className="divide-y divide-[#1E293B]/8">
        {otherServices.map((service) => (
          <div key={service.id} className="py-6 flex gap-8 items-baseline">
            <span className="text-xs text-[#64748B] font-medium tracking-widest shrink-0 w-8">
              {service.number}
            </span>
            <div className="flex-1 flex flex-col sm:flex-row sm:items-baseline sm:gap-8">
              <h3 className="text-sm font-medium text-[#1E293B] shrink-0 sm:w-56">
                {service.title}
              </h3>
              <p className="text-sm text-[#64748B] leading-loose mt-1 sm:mt-0">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  )
}
