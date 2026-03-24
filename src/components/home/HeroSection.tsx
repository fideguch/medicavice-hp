import Link from 'next/link'
import Image from 'next/image'

export default function HeroSection() {
  return (
    <section
      data-section-bg="dark"
      className="relative overflow-hidden"
      style={{ height: 'clamp(520px, 75vh, 760px)' }}
    >
      {/* 背景画像 */}
      <Image
        src="/hero.png"
        alt="医療現場で患者に寄り添う医療従事者のイメージ"
        fill
        className="object-cover object-center"
        priority
      />
      {/* オーバーレイ */}
      <div className="absolute inset-0" style={{ background: 'rgba(15,23,42,0.68)' }} />

      {/* コンテンツ — 左下寄せ */}
      <div className="relative h-full max-w-5xl mx-auto px-6 flex flex-col justify-end pb-16 md:pb-24">
        <p
          className="text-xs font-medium tracking-[0.2em] uppercase mb-5 animate-fade-in"
          style={{ color: 'rgba(255,255,255,0.85)' }}
        >
          株式会社メディカバイス
        </p>

        <h1
          className="mb-6 animate-fade-in-up delay-200"
          style={{
            fontSize: 'clamp(2.4rem, 5.5vw, 3.5rem)',
            fontWeight: 700,
            letterSpacing: '-0.03em',
            lineHeight: 1.15,
            color: '#FFFFFF',
          }}
        >
          現場に寄り添う、<br />
          確かな医療を。
        </h1>

        <p
          className="mb-10 animate-fade-in-up delay-300"
          style={{
            fontSize: 'clamp(0.95rem, 1.8vw, 1.1rem)',
            lineHeight: 1.85,
            color: 'rgba(255,255,255,0.9)',
            maxWidth: '30rem',
          }}
        >
          医師としての長年の臨床経験から生まれた、<br className="hidden md:block" />
          本当に現場で役立つソリューションを提供します。
        </p>

        <div className="animate-fade-in-up delay-400">
          <Link
            href="/contact"
            className="btn-white inline-flex items-center min-h-[52px] px-10 text-sm font-medium cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white"
            style={{ touchAction: 'manipulation' }}
          >
            お気軽にご相談ください
          </Link>
          <p className="mt-4 text-xs" style={{ color: 'rgba(255,255,255,0.75)' }}>
            医療・IT分野問わず、どのようなご相談もお受けしています
          </p>
        </div>
      </div>
    </section>
  )
}
