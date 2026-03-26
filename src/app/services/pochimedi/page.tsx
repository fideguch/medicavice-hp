import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: '美容医療オンライン診療 - PochiMedi',
  description:
    'PochiMedi（ポチメディ）によるオンライン美容医療診療のご案内。メディカルダイエット・まつ毛美容液など、専門医による質の高い美容医療をオンラインで提供します。',
  openGraph: {
    title: '美容医療オンライン診療 - PochiMedi | 株式会社メディカバイス',
    description:
      'PochiMedi（ポチメディ）によるオンライン美容医療診療のご案内。メディカルダイエット・まつ毛美容液など、専門医による質の高い美容医療をオンラインで提供します。',
    images: [{ url: '/pamphlet-beauty-2.jpg', width: 1200, height: 630, alt: 'PochiMedi オンライン診療' }],
  },
}

export default function PochimediPamphletPage() {
  return (
    <div style={{ backgroundColor: '#FDFBF7' }}>
      {/* Page Hero */}
      <div data-section-bg="dark" style={{ backgroundColor: '#0F172A', paddingTop: '112px', paddingBottom: '80px' }}>
        <div className="max-w-5xl mx-auto px-6">
          <p
            className="uppercase tracking-[0.2em] mb-10 animate-fade-in delay-100"
            style={{ fontSize: '11px', fontWeight: 500, color: 'rgba(255,255,255,0.6)' }}
          >
            PochiMedi
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
            美容医療オンライン診療
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
            まずは以下のパンフレットから診療内容をご確認ください。
          </p>
        </div>
      </div>

      {/* Pamphlet Images */}
      <div className="max-w-3xl mx-auto px-6 py-16 flex flex-col items-center gap-12">
        <div className="w-full relative" style={{ aspectRatio: '3/4' }}>
          <Image
            src="/pamphlet-beauty-2.jpg"
            alt="PochiMedi オンライン診療のご案内"
            fill
            className="object-contain"
            priority
          />
        </div>
        <div className="w-full relative" style={{ aspectRatio: '3/4' }}>
          <Image
            src="/pamphlet-beauty-1.jpg"
            alt="PochiMedi メディカルダイエット・ビマトプロスト料金案内"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </div>
  )
}
