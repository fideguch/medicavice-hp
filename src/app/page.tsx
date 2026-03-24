import HeroSection from '@/components/home/HeroSection'
import VisionSection from '@/components/home/VisionSection'
import ServicePreview from '@/components/home/ServicePreview'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <VisionSection />
      <ServicePreview />

      {/* CTA Banner — 具体的な行動誘起 */}
      <section data-section-bg="dark" style={{ backgroundColor: '#0F172A', paddingTop: '112px', paddingBottom: '112px' }}>
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10">
            <div>
              <p
                className="uppercase tracking-[0.2em] mb-6"
                style={{ fontSize: '11px', fontWeight: 500, color: 'rgba(255,255,255,0.6)' }}
              >
                Contact
              </p>
              <h2
                style={{
                  fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
                  fontWeight: 700,
                  letterSpacing: '-0.02em',
                  lineHeight: 1.2,
                  color: '#FFFFFF',
                  maxWidth: '28rem',
                }}
              >
                まずは、お気軽にご相談ください。
              </h2>
              <p className="mt-4 max-w-sm" style={{ fontSize: '14px', lineHeight: 1.85, color: 'rgba(255,255,255,0.55)' }}>
                医療・IT分野を問わず、どのようなご相談もお受けしています。返信は営業日2日以内を目安にお送りします。
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 w-full md:w-auto shrink-0 min-h-[52px] px-10 text-sm font-medium transition-opacity hover:opacity-85 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0F172A]"
              style={{ backgroundColor: '#FFFFFF', color: '#0F172A' }}
            >
              ご相談・お問い合わせ
              <ArrowRight size={15} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
