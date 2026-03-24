import type { Metadata } from 'next'
import CompanyHero from '@/components/company/CompanyHero'
import CompanyOverview from '@/components/company/CompanyOverview'
import Timeline from '@/components/company/Timeline'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: '企業情報 | 株式会社メディカバイス',
  description:
    '株式会社メディカバイスの会社概要と代表取締役 出口誠の経歴をご紹介します。',
}

export default function CompanyPage() {
  return (
    <>
      <CompanyHero />
      <CompanyOverview />
      <Timeline />

      {/* ファネル離脱防止: タイムライン読了後のCTA */}
      <section data-section-bg="dark" style={{ backgroundColor: '#0F172A', paddingTop: '80px', paddingBottom: '80px' }}>
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div>
            <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)', marginBottom: '12px' }}>
              医療・IT分野問わず、どのようなご相談もお受けしています
            </p>
            <p
              style={{
                fontSize: 'clamp(1.25rem, 3vw, 1.75rem)',
                fontWeight: 700,
                letterSpacing: '-0.02em',
                lineHeight: 1.3,
                color: '#FFFFFF',
              }}
            >
              まずは、お気軽にご相談ください。
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 w-full md:w-auto shrink-0 min-h-[52px] px-10 text-sm font-medium transition-opacity hover:opacity-85 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0F172A]"
            style={{ backgroundColor: '#FFFFFF', color: '#0F172A', touchAction: 'manipulation' }}
          >
            ご相談・お問い合わせ
            <ArrowRight size={15} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </>
  )
}
