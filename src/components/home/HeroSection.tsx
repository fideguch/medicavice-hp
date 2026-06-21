'use client'

import Link from 'next/link'
import { ArrowRight, Milestone } from 'lucide-react'
import Button from '@/components/ui/Button'
import Eyebrow from '@/components/ui/Eyebrow'
import BlueprintGrid from '@/components/ui/BlueprintGrid'
import AuroraGlow from '@/components/ui/AuroraGlow'
import SocialLinks from '@/components/ui/SocialLinks'
import { useLocale } from '@/lib/i18n'

export default function HeroSection() {
  const { t } = useLocale()
  const h = t.hero
  // hero career excerpt: current role only (full history is behind the "view profile" link)
  const career: { period: string; title: string }[] = [
    { period: t.history.it[0].period, title: t.history.it[0].title },
  ]

  return (
    <section className="relative overflow-hidden noise" style={{ backgroundColor: 'var(--color-bg)' }}>
      <BlueprintGrid />
      <AuroraGlow
        style={{ top: '-20%', left: '32%', width: 'min(720px, 80%)', height: '72%', transform: 'translateX(-50%)', opacity: 0.4 }}
      />

      <div className="relative max-w-5xl mx-auto px-6 min-h-[84vh] flex items-center py-28">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 w-full">
          {/* left: statement */}
          <div className="lg:col-span-7">
            <p className="eyebrow mb-6 animate-blur-in">{h.eyebrow}</p>

            <h1 className="heading-hero max-w-2xl" style={{ fontSize: 'clamp(1.9rem, 4.8vw, 3.3rem)', lineHeight: 1.22 }}>
              <span className="block animate-blur-in delay-100">{h.line1}</span>
              <span className="block animate-blur-in delay-200">
                {h.line2pre}
                <span className="text-gradient">{h.gradient}</span>
                {h.line2post}
              </span>
            </h1>

            <p className="text-body mt-7 max-w-md animate-blur-in delay-300" style={{ fontSize: 'clamp(1rem, 1.6vw, 1.0625rem)', lineHeight: 1.85 }}>
              {h.sub}
            </p>

            <div className="mt-9 flex flex-col sm:flex-row gap-3 animate-blur-in delay-400">
              <Button href="#contact" arrow className="w-full sm:w-auto">{h.ctaContact}</Button>
              <Button href="#services" variant="ghost" className="w-full sm:w-auto">{h.ctaServices}</Button>
            </div>

            <SocialLinks className="mt-6 -ml-2 animate-blur-in delay-500" />
          </div>

          {/* right: current role + view-profile link */}
          <div className="lg:col-span-5 lg:self-center lg:pl-12 lg:border-l lg:border-[color:var(--color-border-hairline)] animate-blur-in delay-300">
            <Eyebrow className="mb-4" icon={<Milestone size={14} strokeWidth={1.5} aria-hidden="true" style={{ color: 'var(--color-text-muted)' }} />}>{h.careerHeading}</Eyebrow>
            <ul className="flex flex-col gap-3">
              {career.map((c, i) => (
                <li key={i}>
                  <span className="mono block text-[11px] mb-0.5" style={{ color: 'var(--color-text-dim)', letterSpacing: '0.03em' }}>{c.period}</span>
                  <span className="block text-sm leading-snug" style={{ color: 'var(--color-text-body)' }}>{c.title}</span>
                </li>
              ))}
            </ul>

            <Link href="#about" className="link-wipe inline-flex items-center gap-1.5 text-sm font-medium mt-6 focus-ring" style={{ color: 'var(--color-accent-text)' }}>
              {h.viewProfile}
              <ArrowRight size={13} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
