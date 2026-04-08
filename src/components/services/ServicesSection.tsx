import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import SectionWrapper from '@/components/ui/SectionWrapper'

const services = [
  {
    id: 1,
    number: '01',
    tag: '主軸事業',
    title: '医療デバイス開発コンサルティング',
    description:
      '医師としての豊富な臨床経験をもとに、医療機器・デバイスの企画・開発から薬事申請まで、現場目線のコンサルティングを提供します。',
    featured: true,
    image: '/services.png',
  },
  {
    id: 2,
    number: '02',
    tag: '医療',
    title: '美容医療オンライン診療',
    description: '場所を選ばず、専門医による質の高い美容医療をオンラインで提供します。',
    featured: false,
    image: '/online_beauty.png',
    link: '/services/beauty',
  },
  {
    id: 3,
    number: '03',
    tag: 'IT',
    title: 'プロダクトマネジメント業務',
    description:
      '医療・IT領域における製品・サービスの企画・設計・推進をトータルでサポートします。',
    featured: false,
    image: '/product.png',
  },
  {
    id: 4,
    number: '04',
    tag: 'Web',
    title: 'ホームページ作成',
    description:
      '医療機関・クリニック向けを中心に、信頼感と清潔感を重視したウェブサイト制作を行います。',
    featured: false,
    image: '/product.png',
  },
  {
    id: 5,
    number: '05',
    tag: '文化',
    title: '外国人向け料理教室',
    description:
      '日本の食文化を通じた国際交流の場を提供します。在日外国人や訪日客向けの料理体験を企画・運営します。',
    featured: false,
    image: '/cooking.png',
  },
]

export default function ServicesSection() {
  const featured = services.find((s) => s.featured)!
  const others = services.filter((s) => !s.featured)

  return (
    <SectionWrapper data-section-bg="light" className="bg-[#FDFBF7]">
      {/* Section Header */}
      <div className="mb-20">
        <p className="text-xs text-[#64748B] tracking-[0.2em] uppercase mb-6 font-medium">Services</p>
        <h2 className="text-section text-[#1E293B]">事業内容</h2>
      </div>

      {/* 主軸事業 — 横並びアーティクルカード */}
      <article
        className="flex flex-col md:flex-row overflow-hidden mb-3"
        style={{ border: '1px solid #E2E8F0', borderRadius: '4px' }}
      >
        <div className="relative w-full md:w-[42%] shrink-0 overflow-hidden" style={{ aspectRatio: '4/3' }}>
          <Image
            src={featured.image!}
            alt={featured.title}
            fill
            className="object-cover object-center"
          />
        </div>
        <div className="flex-1 flex flex-col justify-center p-10 md:p-14" style={{ backgroundColor: '#0F172A' }}>
          <div className="flex items-center gap-3 mb-8">
            <span className="text-xs font-medium tracking-[0.15em] uppercase" style={{ color: 'rgba(255,255,255,0.4)' }}>
              {featured.number}
            </span>
            <span
              className="text-xs font-medium px-2.5 py-0.5"
              style={{ color: 'rgba(255,255,255,0.7)', backgroundColor: 'rgba(255,255,255,0.08)', borderRadius: '2px' }}
            >
              {featured.tag}
            </span>
          </div>
          <h3 className="text-headline text-white mb-5">{featured.title}</h3>
          <p className="text-sm leading-loose" style={{ color: 'rgba(255,255,255,0.65)', maxWidth: '32rem' }}>
            {featured.description}
          </p>
        </div>
      </article>

      {/* その他サービス — タグ+タイトル+説明のリスト */}
      <div style={{ borderTop: '1px solid #E2E8F0' }}>
        {others.map((service) => (
          <div
            key={service.id}
            className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-8 py-7"
            style={{ borderBottom: '1px solid #E2E8F0' }}
          >
            {/* 左: 番号+タグ */}
            <div className="flex items-center gap-3 sm:w-40 shrink-0">
              <span className="text-xs font-medium tracking-widest" style={{ color: '#64748B' }}>
                {service.number}
              </span>
              <span
                className="text-xs font-medium px-2.5 py-0.5"
                style={{ color: '#1E293B', backgroundColor: '#F1F5F9', borderRadius: '2px' }}
              >
                {service.tag}
              </span>
            </div>
            {/* 右: タイトル+説明 */}
            <div className="flex-1 flex flex-col sm:flex-row sm:items-baseline sm:gap-8">
              <h3 className="text-sm font-semibold shrink-0 sm:w-52 mb-1 sm:mb-0" style={{ color: '#1E293B' }}>
                {service.title}
              </h3>
              <div className="flex-1">
                <p className="text-sm leading-loose" style={{ color: '#64748B' }}>
                  {service.description}
                </p>
                {'link' in service && service.link && (
                  <Link
                    href={service.link}
                    className="inline-flex items-center gap-1.5 text-sm font-medium mt-3 group cursor-pointer"
                    style={{ color: '#1E293B' }}
                  >
                    診療内容を確認する
                    <ArrowRight size={13} aria-hidden="true" className="transition-transform group-hover:translate-x-0.5" />
                  </Link>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  )
}
