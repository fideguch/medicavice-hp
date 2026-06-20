'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import Button from '@/components/ui/Button'
import BlueprintGrid from '@/components/ui/BlueprintGrid'
import AuroraGlow from '@/components/ui/AuroraGlow'
import SocialLinks from '@/components/ui/SocialLinks'
import InstagramIcon from '@/components/ui/InstagramIcon'
import { BARTENDER } from '@/lib/content'
import { useLocale } from '@/lib/i18n'

const INDEX_KEYS = ['01', '02', '03'] as const

export default function HeroSection() {
  const { t } = useLocale()
  const h = t.hero
  // top career excerpt: current role, latest PdM role, then the bar gig
  const career: { period: string; title: string; instagram?: string }[] = [
    { period: t.history.it[0].period, title: t.history.it[0].title },
    { period: t.history.it[1].period, title: t.history.it[1].title },
    { period: t.history.bartender.period, title: t.history.bartender.title, instagram: BARTENDER.instagram },
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

          {/* right: role index + condensed career */}
          <div className="lg:col-span-5 lg:mt-28 lg:pl-12 lg:border-l lg:border-[color:var(--color-border-hairline)] animate-blur-in delay-300">
            <ul className="flex flex-col gap-3.5">
              {INDEX_KEYS.map((n) => (
                <li key={n}>
                  <Link href="#services" className="group flex items-baseline gap-3 focus-ring">
                    <span className="num text-sm shrink-0" style={{ color: 'var(--color-text-dim)' }}>{n}</span>
                    <span className="text-sm transition-colors group-hover:text-[color:var(--color-text)]" style={{ color: 'var(--color-text-muted)' }}>
                      {h.roleIndex[n]}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>

            <div className="hairline-t my-7" />

            <p className="eyebrow mb-4">{h.careerHeading}</p>
            <ul className="flex flex-col gap-3">
              {career.map((c, i) => (
                <li key={i}>
                  <span className="mono block text-[11px] mb-0.5" style={{ color: 'var(--color-text-dim)', letterSpacing: '0.03em' }}>{c.period}</span>
                  <span className="text-sm leading-snug" style={{ color: 'var(--color-text-body)' }}>{c.title}</span>
                  {c.instagram && (
                    <a
                      href={c.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Instagram — 6grams（武蔵小山）"
                      className="inline-flex items-center gap-1 mt-1 text-[11px] transition-colors hover:text-[color:var(--color-text)] focus-ring"
                      style={{ color: 'var(--color-text-muted)' }}
                    >
                      <InstagramIcon size={13} />
                      <span className="mono">@6grams_musashikoyama</span>
                    </a>
                  )}
                </li>
              ))}
            </ul>

            <Link href="#about" className="link-wipe inline-flex items-center gap-1.5 text-sm font-medium mt-6 focus-ring" style={{ color: 'var(--color-accent)' }}>
              {h.viewProfile}
              <ArrowRight size={13} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
