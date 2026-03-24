import type { Metadata } from 'next'
import SectionWrapper from '@/components/ui/SectionWrapper'
import ContactForm from '@/components/contact/ContactForm'

export const metadata: Metadata = {
  title: 'お問い合わせ',
  description:
    '株式会社メディカバイスへのお問い合わせはこちらから。医療・IT分野問わずご相談をお受けしています。',
  openGraph: {
    title: 'お問い合わせ | 株式会社メディカバイス',
    description:
      '株式会社メディカバイスへのお問い合わせはこちらから。医療・IT分野問わずご相談をお受けしています。',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: '株式会社メディカバイス' }],
  },
}

export default function ContactPage() {
  return (
    <div style={{ backgroundColor: '#FDFBF7' }}>
      <div data-section-bg="dark" style={{ backgroundColor: '#0F172A', paddingTop: '112px', paddingBottom: '128px' }}>
        <div className="max-w-5xl mx-auto px-6">
          <p
            className="uppercase tracking-[0.2em] mb-10 animate-fade-in delay-100"
            style={{ fontSize: '11px', fontWeight: 500, color: 'rgba(255,255,255,0.6)' }}
          >
            Contact
          </p>
          <h1
            className="mb-8 animate-fade-in-up delay-200"
            style={{
              fontSize: 'clamp(2.2rem, 5vw, 3.25rem)',
              fontWeight: 700,
              letterSpacing: '-0.03em',
              lineHeight: 1.1,
              color: '#FFFFFF',
            }}
          >
            お問い合わせ
          </h1>
          <div
            className="animate-line delay-300"
            style={{ width: '64px', height: '1px', backgroundColor: 'rgba(255,255,255,0.2)', marginBottom: '32px' }}
          />
          <p
            className="animate-fade-in-up delay-300"
            style={{ fontSize: 'clamp(1rem, 2vw, 1.2rem)', lineHeight: 1.8, color: 'rgba(255,255,255,0.65)', maxWidth: '36rem' }}
          >
            医療・IT分野問わずご相談等、お気軽にお問い合わせください。
          </p>

        </div>
      </div>

      <SectionWrapper data-section-bg="light">
        <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-start">
          {/* フォーム */}
          <div className="w-full md:flex-1 md:min-w-0">
            <ContactForm />
          </div>

          {/* 送信前の不安解消パネル */}
          <aside className="w-full md:w-64 shrink-0" style={{ borderTop: '1px solid #E2E8F0', paddingTop: '32px' }}>
            <div style={{ borderTop: '2px solid #1E293B', paddingTop: '24px' }}>
              <p style={{ fontSize: '12px', fontWeight: 600, color: '#1E293B', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '20px' }}>
                ご安心ください
              </p>
              <ul className="flex flex-col gap-5">
                {[
                  { title: '営業日2日以内に返信', body: '担当者より折り返しご連絡いたします。' },
                  { title: '秘密厳守', body: 'お問い合わせ内容は外部に開示しません。' },
                  { title: '強引な営業なし', body: 'まずはご相談のみでも歓迎しています。' },
                ].map((item) => (
                  <li key={item.title} className="flex flex-col gap-1">
                    <span style={{ fontSize: '13px', fontWeight: 600, color: '#1E293B' }}>{item.title}</span>
                    <span style={{ fontSize: '12px', lineHeight: 1.7, color: '#64748B' }}>{item.body}</span>
                  </li>
                ))}
              </ul>

            </div>
          </aside>
        </div>
      </SectionWrapper>

    </div>
  )
}
