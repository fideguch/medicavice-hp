import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export const metadata: Metadata = {
  title: '美容医療オンライン診療',
  description:
    'PochiMediによるオンライン美容医療。メディカルダイエット（マンジャロ）、医療用まつ毛美容液（ビマトプロスト）など、専門医による質の高い美容医療をオンラインで提供します。',
  openGraph: {
    title: '美容医療オンライン診療 | 株式会社メディカバイス',
    description:
      'PochiMediによるオンライン美容医療。専門医による質の高い美容医療をオンラインで提供します。',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: '株式会社メディカバイス' }],
  },
}

export default function BeautyServicePage() {
  return (
    <div style={{ backgroundColor: '#FDFBF7' }}>
      {/* Page Hero */}
      <div data-section-bg="dark" style={{ backgroundColor: '#0F172A', paddingTop: '112px', paddingBottom: '96px' }}>
        <div className="max-w-5xl mx-auto px-6">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-medium mb-10 group cursor-pointer transition-opacity hover:opacity-80"
            style={{ color: 'rgba(255,255,255,0.6)' }}
          >
            <ArrowLeft size={14} aria-hidden="true" className="transition-transform group-hover:-translate-x-0.5" />
            サービス一覧に戻る
          </Link>
          <p
            className="uppercase tracking-[0.2em] mb-10 animate-fade-in delay-100"
            style={{ fontSize: '11px', fontWeight: 500, color: 'rgba(255,255,255,0.6)' }}
          >
            Beauty Medical
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
            まずは2次元バーコードから診療内容をご確認ください。
          </p>
        </div>
      </div>

      {/* Pamphlet Section */}
      <section style={{ paddingTop: '80px', paddingBottom: '112px' }}>
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex flex-col gap-16">
            {/* Pamphlet 1: Online Clinic Overview */}
            <div
              className="overflow-hidden"
              style={{ border: '1px solid #E2E8F0', borderRadius: '4px', backgroundColor: '#FFFFFF' }}
            >
              <div className="relative w-full" style={{ aspectRatio: '0.707' }}>
                <Image
                  src="/pamphlet-online-clinic.jpg"
                  alt="PochiMedi オンライン診療のご案内 — クリニックに行かなくてもスマホで完結・簡単"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>

            {/* Pamphlet 2: Beauty Menu */}
            <div
              className="overflow-hidden"
              style={{ border: '1px solid #E2E8F0', borderRadius: '4px', backgroundColor: '#FFFFFF' }}
            >
              <div className="relative w-full" style={{ aspectRatio: '0.707' }}>
                <Image
                  src="/pamphlet-beauty-menu.jpg"
                  alt="PochiMedi 診療メニュー — メディカルダイエット マンジャロ・医療用まつ毛美容液 ビマトプロスト"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Back link */}
          <div className="mt-16 text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm font-medium group cursor-pointer transition-opacity hover:opacity-80"
              style={{ color: '#1E293B' }}
            >
              <ArrowLeft size={14} aria-hidden="true" className="transition-transform group-hover:-translate-x-0.5" />
              サービス一覧に戻る
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
