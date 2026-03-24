import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

const services = [
  {
    number: '01',
    tag: '主軸事業',
    title: '医療デバイス開発コンサルティング',
    description: '医師としての臨床経験をもとに、医療機器の企画・開発から薬事申請まで現場目線でサポートします。',
    image: '/services.png',
  },
  {
    number: '02',
    tag: '医療',
    title: '美容医療オンライン診療',
    description: '場所を問わず、専門医による質の高い美容医療をオンラインで提供します。',
    image: '/online_beauty.png',
  },
  {
    number: '03',
    tag: 'IT',
    title: 'プロダクトマネジメント業務',
    description: '医療・IT領域における製品・サービスの企画設計・推進をトータルでサポートします。',
    image: '/product.png',
  },
]

export default function ServicePreview() {
  return (
    <section data-section-bg="light" style={{ backgroundColor: '#FDFBF7', paddingTop: '112px', paddingBottom: '112px' }}>
      <div className="max-w-5xl mx-auto px-6">

        {/* ヘッダー */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <p className="uppercase tracking-[0.2em] mb-6" style={{ fontSize: '11px', fontWeight: 500, color: '#64748B' }}>
              Services
            </p>
            <h2 className="text-section" style={{ color: '#1E293B' }}>
              サービス概要
            </h2>
          </div>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-medium shrink-0 group cursor-pointer"
            style={{ color: '#1E293B' }}
          >
            すべてのサービスを見る
            <ArrowRight size={14} aria-hidden="true" className="transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>

        {/* アーティクルカード — 縦スタック */}
        <div style={{ borderTop: '1px solid #E2E8F0' }}>
          {services.map((service) => (
            <article
              key={service.number}
              className="flex flex-col md:flex-row"
              style={{ borderBottom: '1px solid #E2E8F0' }}
            >
              {/* 画像 */}
              <div className="relative w-full md:w-[40%] shrink-0 overflow-hidden" style={{ aspectRatio: '4/3' }}>
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover object-center"
                />
              </div>

              {/* テキスト */}
              <div className="flex-1 flex flex-col justify-center px-8 py-10 md:py-12">
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-xs font-medium tracking-[0.15em] uppercase" style={{ color: '#64748B' }}>
                    {service.number}
                  </span>
                  <span
                    className="text-xs font-medium px-2.5 py-0.5"
                    style={{ color: '#1E293B', backgroundColor: '#F1F5F9', borderRadius: '2px' }}
                  >
                    {service.tag}
                  </span>
                </div>
                <h3 className="text-headline mb-4" style={{ color: '#1E293B' }}>
                  {service.title}
                </h3>
                <p className="text-sm leading-loose mb-6" style={{ color: '#64748B', maxWidth: '32rem' }}>
                  {service.description}
                </p>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-1.5 text-sm font-medium group cursor-pointer"
                  style={{ color: '#1E293B' }}
                >
                  詳細を見る
                  <ArrowRight size={13} aria-hidden="true" className="transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  )
}
