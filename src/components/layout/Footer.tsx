'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import SocialLinks from '@/components/ui/SocialLinks'
import LogoMark from '@/components/ui/LogoMark'
import { MEDIMONY_URL } from '@/lib/content'
import { useLocale } from '@/lib/i18n'

const FOOTER_NAV = [
  { href: '/#services', key: 'services' },
  { href: '/#works', key: 'works' },
  { href: '/#about', key: 'about' },
  { href: '/#contact', key: 'contact' },
] as const

export default function Footer() {
  const { t } = useLocale()
  const fo = t.footer
  const muted = 'var(--color-text-muted)'

  return (
    <footer style={{ backgroundColor: 'var(--color-surface-1)' }} className="hairline-t">
      <div className="max-w-5xl mx-auto px-6 pt-14 md:pt-16 pb-10">
        <div className="flex flex-col items-center md:items-start gap-8 pb-10 md:pb-12 md:flex-row md:justify-between hairline-b">
          <div className="flex flex-col items-center md:items-start">
            <Link href="/" className="flex items-center gap-2.5 focus-ring" aria-label={fo.homeAria}>
              <LogoMark style={{ height: 24, width: 'auto', color: 'var(--color-text)', flexShrink: 0 }} />
              <span style={{ fontSize: '16px', fontWeight: 700, color: 'var(--color-text)', letterSpacing: '-0.01em' }}>{fo.companyName}</span>
            </Link>
            <SocialLinks className="mt-3 -ml-2" size={17} />
          </div>

          <nav aria-label={fo.navAria}>
            <div className="flex gap-12 sm:gap-16">
              <div className="flex flex-col gap-3">
                <p className="eyebrow">{fo.menuLabel}</p>
                {FOOTER_NAV.map((link) => (
                  <Link key={link.href} href={link.href} className="text-[13px] transition-colors hover:text-[color:var(--color-text)] focus-ring" style={{ color: muted }}>
                    {t.nav[link.key]}
                  </Link>
                ))}
              </div>
              <div className="flex flex-col gap-3 items-center md:items-start">
                <p className="eyebrow">{fo.locationLabel}</p>
                <p className="text-center md:text-left text-[12px] leading-relaxed whitespace-pre-line" style={{ color: muted }}>{fo.address}</p>
                <a href={MEDIMONY_URL} target="_blank" rel="noopener noreferrer" className="text-[12px] inline-flex items-center gap-1 transition-colors hover:text-[color:var(--color-text)] focus-ring" style={{ color: muted }}>
                  {fo.partner}
                  <ArrowRight size={11} aria-hidden="true" />
                </a>
              </div>
            </div>
          </nav>
        </div>

        <div className="flex flex-col items-center gap-3 pt-8 sm:flex-row sm:justify-between sm:items-center">
          <p className="text-[12px]" style={{ color: muted }}>{fo.copyright}</p>
          <Link href="/privacy" className="text-[12px] inline-flex items-center min-h-[44px] transition-colors hover:text-[color:var(--color-text)] focus-ring" style={{ color: muted }}>
            {fo.privacyLink}
          </Link>
        </div>
      </div>
    </footer>
  )
}
