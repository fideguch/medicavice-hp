import Link from 'next/link'
import Image from 'next/image'

export default function HeroSection() {
  return (
    <section data-section-bg="light" style={{ backgroundColor: '#FDFBF7', paddingTop: '112px', paddingBottom: '112px' }}>
      <div className="max-w-5xl mx-auto px-6">

        <div className="flex flex-col md:flex-row md:items-center md:gap-14">

          {/* テキスト */}
          <div className="flex-1">
            {/* SP: 見出しラベル */}
            <p className="md:hidden text-xs font-medium tracking-[0.2em] uppercase mb-5 animate-fade-in" style={{ color: '#64748B' }}>
              株式会社メディカバイス
            </p>

            <h1
              className="mb-6 animate-fade-in-up delay-200"
              style={{
                fontSize: 'clamp(2.2rem, 5vw, 3.25rem)',
                fontWeight: 700,
                letterSpacing: '-0.03em',
                lineHeight: 1.2,
                color: '#1E293B',
              }}
            >
              現場に寄り添う、<br />
              確かな医療を。
            </h1>

            <p
              className="mb-8 animate-fade-in-up delay-300"
              style={{
                fontSize: 'clamp(1rem, 2vw, 1.15rem)',
                lineHeight: 1.85,
                color: '#64748B',
                maxWidth: '32rem',
              }}
            >
              医師としての長年の臨床経験から生まれた、<br className="hidden md:block" />
              本当に現場で役立つソリューションを提供します。
            </p>

            {/* SP: 画像（見出し・テキストの後） */}
            <div
              className="md:hidden mb-8 animate-fade-in delay-300 relative overflow-hidden"
              style={{ aspectRatio: '3/2', borderRadius: '6px' }}
            >
              <Image
                src="/トップページファーストビュー.png"
                alt="医療現場で患者に寄り添う医療従事者のイメージ"
                fill
                className="object-cover object-center"
                priority
              />
            </div>

            {/* CTA — SP: 中央寄せ / PC: 左寄せ */}
            <div className="animate-fade-in-up delay-400 flex flex-col items-center md:items-start">
              <Link
                href="/contact"
                className="btn-navy inline-flex items-center min-h-[52px] px-12 text-sm font-medium cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#1E293B]"
                style={{ touchAction: 'manipulation' }}
              >
                お気軽にご相談ください
              </Link>
              <p className="mt-4 text-xs text-center md:text-left" style={{ color: '#64748B' }}>
                医療・IT分野問わず、どのようなご相談もお受けしています
              </p>
            </div>
          </div>

          {/* PC: 右カラム画像 */}
          <div
            className="hidden md:block relative shrink-0 animate-fade-in delay-300 overflow-hidden"
            style={{ width: '44%', aspectRatio: '4/3', borderRadius: '8px' }}
          >
            <Image
              src="/トップページファーストビュー.png"
              alt="医療現場で患者に寄り添う医療従事者のイメージ"
              fill
              className="object-cover object-center"
              priority
            />
          </div>

        </div>
      </div>
    </section>
  )
}
