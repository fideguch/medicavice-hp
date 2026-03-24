import type { Metadata } from 'next'
import ServicesSection from '@/components/services/ServicesSection'

export const metadata: Metadata = {
  title: 'サービス概要',
  description:
    '医師としての臨床経験をもとに、医療デバイス開発コンサルティングを中心にITなど様々な分野でサービスを展開しています。',
  openGraph: {
    title: 'サービス概要 | 株式会社メディカバイス',
    description:
      '医師としての臨床経験をもとに、医療デバイス開発コンサルティングを中心にITなど様々な分野でサービスを展開しています。',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: '株式会社メディカバイス' }],
  },
}

export default function ServicesPage() {
  return (
    <div style={{ backgroundColor: '#FDFBF7' }}>
      {/* Page Hero */}
      <div data-section-bg="dark" style={{ backgroundColor: '#0F172A', paddingTop: '112px', paddingBottom: '128px' }}>
        <div className="max-w-5xl mx-auto px-6">
          <p
            className="uppercase tracking-[0.2em] mb-10 animate-fade-in delay-100"
            style={{ fontSize: '11px', fontWeight: 500, color: 'rgba(255,255,255,0.6)' }}
          >
            Services
          </p>
          <h1
            className="mb-8 animate-fade-in-up delay-200"
            style={{
              fontSize: 'clamp(2.2rem, 5vw, 3.25rem)',
              fontWeight: 700,
              letterSpacing: '-0.03em',
              lineHeight: 1.1,
              color: '#FFFFFF',
              maxWidth: '36rem',
            }}
          >
            医師の経験から生まれた、<br />
            多彩なソリューション。
          </h1>
          <div
            className="animate-line delay-300"
            style={{ width: '64px', height: '1px', backgroundColor: 'rgba(255,255,255,0.2)', marginBottom: '32px' }}
          />
          <p
            className="animate-fade-in-up delay-300"
            style={{
              fontSize: 'clamp(1rem, 2vw, 1.2rem)',
              lineHeight: 1.8,
              color: 'rgba(255,255,255,0.65)',
              maxWidth: '36rem',
            }}
          >
            医師としての臨床経験をもとに、医療を中心として<br className="hidden md:block" />
            ITなど様々な分野で現場に寄り添うサービスを展開しています。
          </p>
        </div>
      </div>

      <ServicesSection />
    </div>
  )
}
