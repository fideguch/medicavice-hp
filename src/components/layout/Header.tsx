'use client'

import Link from 'next/link'
import { useState, useEffect, useCallback } from 'react'
import { useLocale } from '@/lib/i18n'

const NAV = [
  { href: '/#services', key: 'services' },
  { href: '/#works', key: 'works' },
  { href: '/#about', key: 'about' },
] as const

const SCROLL_THRESHOLD = 10

export default function Header() {
  const { t, toggle } = useLocale()
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = useCallback(() => setMenuOpen(false), [])

  useEffect(() => {
    if (!menuOpen) return
    const startY = window.scrollY
    const onScroll = () => {
      if (Math.abs(window.scrollY - startY) > SCROLL_THRESHOLD) setMenuOpen(false)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [menuOpen])

  const headerStyle = {
    backgroundColor: 'color-mix(in srgb, var(--color-bg) 85%, transparent)',
    borderBottom: '1px solid var(--color-border-hairline)',
    backdropFilter: 'blur(16px)',
    WebkitBackdropFilter: 'blur(16px)',
  } as const

  const LangToggle = ({ onClick }: { onClick?: () => void }) => (
    <button
      type="button"
      onClick={() => { toggle(); onClick?.() }}
      aria-label={t.ui.langToggleAria}
      className="mono min-h-[36px] px-3 text-xs rounded-full transition-colors focus-ring"
      style={{ color: 'var(--color-text-muted)', border: '1px solid var(--color-border)' }}
    >
      {t.ui.langToggleLabel}
    </button>
  )

  return (
    <>
      {menuOpen && <div className="fixed inset-0 z-40 md:hidden" aria-hidden="true" onClick={closeMenu} />}

      <header className="sticky top-0 z-50" style={headerStyle}>
        <div className="relative max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5 hover:opacity-75 transition-opacity focus-ring" aria-label={t.ui.logoHomeAria}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.png" alt="" aria-hidden="true" width={32} height={32} style={{ filter: 'brightness(0) invert(1)', flexShrink: 0, objectFit: 'contain' }} />
            <span className="mono" style={{ color: 'var(--color-text)', fontSize: '13px', fontWeight: 500, letterSpacing: '0.01em' }}>{t.ui.logoText}</span>
          </Link>

          <nav className="hidden md:flex items-center gap-7" aria-label={t.ui.globalNavAria}>
            {NAV.map(({ href, key }) => (
              <Link key={href} href={href} className="text-sm transition-colors focus-ring hover:text-[color:var(--color-text)]" style={{ color: 'var(--color-text-muted)' }}>
                {t.nav[key]}
              </Link>
            ))}
            <LangToggle />
            <Link href="/#contact" className="btn btn-accent focus-ring" style={{ minHeight: 44, padding: '0 1.25rem', fontSize: '0.8125rem' }}>
              {t.nav.contact}
            </Link>
          </nav>

          <button
            className="md:hidden min-w-[44px] min-h-[44px] flex items-center justify-center focus-ring"
            style={{ color: 'var(--color-text)' }}
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? t.ui.closeMenu : t.ui.openMenu}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
          >
            <span className="flex flex-col gap-[5px]" aria-hidden="true">
              <span className="hamburger-bar" style={{ transform: menuOpen ? 'translateY(7px) rotate(45deg)' : undefined }} />
              <span className="hamburger-bar" style={{ opacity: menuOpen ? 0 : 1, transform: menuOpen ? 'scaleX(0)' : undefined }} />
              <span className="hamburger-bar" style={{ transform: menuOpen ? 'translateY(-7px) rotate(-45deg)' : undefined }} />
            </span>
          </button>
        </div>

        {menuOpen && (
          <nav
            id="mobile-nav"
            className="md:hidden absolute left-0 right-0 px-6 py-6 flex flex-col items-stretch gap-1 menu-slide-down"
            style={{ top: '100%', backgroundColor: 'color-mix(in srgb, var(--color-bg) 97%, transparent)', backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)', borderTop: '1px solid var(--color-border-hairline)' }}
            aria-label={t.ui.mobileNavAria}
          >
            {NAV.map(({ href, key }) => (
              <Link key={href} href={href} onClick={closeMenu} className="min-h-[48px] w-full flex items-center justify-center text-sm focus-ring" style={{ color: 'var(--color-text-muted)' }}>
                {t.nav[key]}
              </Link>
            ))}
            <div className="flex justify-center mt-2"><LangToggle onClick={closeMenu} /></div>
            <Link href="/#contact" onClick={closeMenu} className="btn btn-accent focus-ring mt-3 w-full">{t.nav.contact}</Link>
          </nav>
        )}
      </header>
    </>
  )
}
