import type { Metadata } from 'next'
import SectionWrapper from '@/components/ui/SectionWrapper'
import PrivacyContent from '@/components/privacy/PrivacyContent'

export const metadata: Metadata = {
  title: '個人情報保護方針',
  description: '株式会社メディカバイスの個人情報保護方針です。',
  openGraph: {
    title: '個人情報保護方針 | 株式会社メディカバイス',
    description: '株式会社メディカバイスの個人情報保護方針です。',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: '株式会社メディカバイス' }],
  },
  robots: { index: false, follow: false },
}

export default function PrivacyPage() {
  return (
    <div style={{ backgroundColor: '#FDFBF7' }}>
      <div data-section-bg="dark" style={{ backgroundColor: '#0F172A', paddingTop: '112px', paddingBottom: '128px' }}>
        <div className="max-w-5xl mx-auto px-6">
          <p
            className="uppercase tracking-[0.2em] mb-10 animate-fade-in delay-100"
            style={{ fontSize: '11px', fontWeight: 500, color: 'rgba(255,255,255,0.6)' }}
          >
            Privacy
          </p>
          <h1
            className="animate-fade-in-up delay-200"
            style={{
              fontSize: 'clamp(2.2rem, 5vw, 3.25rem)',
              fontWeight: 700,
              letterSpacing: '-0.03em',
              lineHeight: 1.1,
              color: '#FFFFFF',
            }}
          >
            個人情報保護方針
          </h1>
        </div>
      </div>
      <SectionWrapper data-section-bg="light">
        <div className="max-w-2xl">
          <PrivacyContent />
        </div>
      </SectionWrapper>
    </div>
  )
}
