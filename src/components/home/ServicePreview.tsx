import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const mainServices = [
  {
    number: '01',
    title: '医療デバイス開発コンサルティング',
    description: '医師としての臨床経験をもとに、医療機器の企画・開発から薬事申請まで現場目線でサポートします。',
    tag: '主軸事業',
  },
  {
    number: '02',
    title: '美容医療オンライン診療',
    description: '場所を問わず、専門医による質の高い美容医療をオンラインで提供します。',
    tag: null,
  },
  {
    number: '03',
    title: 'プロダクトマネジメント業務',
    description: '医療・IT領域における製品・サービスの企画設計・推進をトータルでサポートします。',
    tag: null,
  },
]

export default function ServicePreview() {
  return (
    <section data-section-bg="light" style={{ backgroundColor: '#FFFFFF', paddingTop: '112px', paddingBottom: '112px' }}>
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <p
              className="uppercase tracking-[0.2em] mb-6"
              style={{ fontSize: '11px', fontWeight: 500, color: '#64748B' }}
            >
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

        {/* 主軸事業 — 大きく表示 */}
        <div
          className="p-10 md:p-12 mb-4"
          style={{ backgroundColor: '#0F172A', borderRadius: '6px' }}
        >
          <span
            className="inline-block text-xs font-medium uppercase tracking-[0.15em] mb-8"
            style={{ color: 'rgba(255,255,255,0.4)' }}
          >
            {mainServices[0].number} — {mainServices[0].tag}
          </span>
          <h3
            className="text-headline mb-4"
            style={{ color: '#FFFFFF' }}
          >
            {mainServices[0].title}
          </h3>
          <p style={{ fontSize: '14px', lineHeight: 1.85, color: 'rgba(255,255,255,0.65)', maxWidth: '36rem' }}>
            {mainServices[0].description}
          </p>
        </div>

        {/* その他2サービス */}
        <div className="grid sm:grid-cols-2 gap-4">
          {mainServices.slice(1).map((service) => (
            <div
              key={service.number}
              className="service-card-side p-8"
            >
              <span
                className="text-xs font-medium uppercase tracking-[0.15em] block mb-6"
                style={{ color: '#64748B' }}
              >
                {service.number}
              </span>
              <h3
                className="text-headline mb-3"
                style={{ color: '#1E293B' }}
              >
                {service.title}
              </h3>
              <p style={{ fontSize: '13px', lineHeight: 1.85, color: '#64748B' }}>
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
