import Image from 'next/image'

export default function CompanyHero() {
  return (
    <section data-section-bg="dark" style={{ backgroundColor: '#0F172A', paddingTop: '112px', paddingBottom: '128px' }}>
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-center md:gap-16">
          {/* テキスト */}
          <div className="flex-1">
            <p
              className="uppercase tracking-[0.2em] mb-10 animate-fade-in delay-100"
              style={{ fontSize: '11px', fontWeight: 500, color: 'rgba(255,255,255,0.6)' }}
            >
              Company
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
              医師としての知識と経験を、<br />
              社会の課題解決へ。
            </h1>
            <div
              className="animate-line delay-300"
              style={{ width: '64px', height: '1px', backgroundColor: 'rgba(255,255,255,0.2)', marginBottom: '32px' }}
            />
            <p
              className="animate-fade-in-up delay-300"
              style={{ fontSize: 'clamp(1rem, 2vw, 1.2rem)', lineHeight: 1.8, color: 'rgba(255,255,255,0.65)', maxWidth: '36rem' }}
            >
              株式会社メディカバイスは、長年の臨床経験を持つ医師が設立した会社です。医療現場と社会をつなぎ、より良い医療環境の実現に取り組んでいます。
            </p>
          </div>

          {/* 企業紹介画像 */}
          <div
            className="hidden md:block relative shrink-0 animate-fade-in delay-400"
            style={{ width: '300px', height: '380px', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '6px', overflow: 'hidden' }}
          >
            <Image
              src="/企業紹介.png"
              alt="株式会社メディカバイス 代表 出口誠のイメージ"
              fill
              className="object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
