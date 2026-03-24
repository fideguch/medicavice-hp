'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect, useLayoutEffect, useCallback } from 'react'

const NAV_LINKS = [
  { href: '/', label: 'トップ' },
  { href: '/services', label: 'サービス' },
  { href: '/company', label: '企業情報' },
] as const

type Theme = 'dark' | 'light'

const THEMES = {
  dark: {
    bg: 'rgba(15, 23, 42, 0.88)',
    border: 'rgba(255,255,255,0.1)',
    logo: '#FFFFFF',
    navInactive: 'rgba(255,255,255,0.6)',
    navActive: '#FFFFFF',
    navActiveBorder: 'rgba(255,255,255,0.45)',
    ctaBg: '#FFFFFF',
    ctaColor: '#0F172A',
    icon: '#FFFFFF',
    ring: 'focus-visible:ring-white focus-visible:ring-offset-[#0F172A]',
  },
  light: {
    bg: 'rgba(253, 251, 247, 0.88)',
    border: 'rgba(30, 41, 59, 0.1)',
    logo: '#1E293B',
    navInactive: '#64748B',
    navActive: '#1E293B',
    navActiveBorder: '#1E293B',
    ctaBg: '#0F172A',
    ctaColor: '#FFFFFF',
    icon: '#1E293B',
    ring: 'focus-visible:ring-[#1E293B] focus-visible:ring-offset-[#FDFBF7]',
  },
} as const

const HEADER_H = 80
const SCROLL_THRESHOLD = 10

function detectTheme(): Theme {
  if (window.scrollY < 0) return 'light'
  const sections = document.querySelectorAll<HTMLElement>('[data-section-bg]')
  for (const el of sections) {
    const { top, bottom } = el.getBoundingClientRect()
    if (top <= HEADER_H + 4 && bottom > 0) {
      return el.dataset.sectionBg === 'dark' ? 'light' : 'dark'
    }
  }
  return 'light'
}

export default function Header() {
  const pathname = usePathname()
  const [theme, setTheme] = useState<Theme>('light')
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = useCallback(() => setMenuOpen(false), [])

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href)

  useLayoutEffect(() => setTheme(detectTheme()), [pathname])
  useEffect(closeMenu, [pathname, closeMenu])

  // スクロール連動テーマ検出
  useEffect(() => {
    const onScroll = () => setTheme(detectTheme())
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // メニュー展開中：意図的スクロール（10px超）で閉じる
  useEffect(() => {
    if (!menuOpen) return
    const startY = window.scrollY
    const onScroll = () => {
      if (Math.abs(window.scrollY - startY) > SCROLL_THRESHOLD) setMenuOpen(false)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [menuOpen])

  const t = THEMES[theme]

  return (
    <>
      {/* バックドロップ（メニュー外タップで閉じる） */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 md:hidden"
          aria-hidden="true"
          onClick={closeMenu}
        />
      )}

      <header
        className="sticky top-0 z-50"
        style={{
          backgroundColor: t.bg,
          borderBottom: `1px solid ${t.border}`,
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          transition: 'background-color 0.4s ease, border-color 0.4s ease',
        }}
      >
        {/* ヘッダーバー */}
        <div className="relative max-w-5xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link
            href="/"
            className={`flex items-center gap-2.5 hover:opacity-75 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${t.ring}`}
            aria-label="株式会社メディカバイス — トップページへ"
          >
            <img
              src="/logo.png"
              alt=""
              aria-hidden="true"
              width={56}
              height={56}
              style={{
                filter: theme === 'dark' ? 'brightness(0) invert(1)' : 'none',
                transition: 'filter 0.4s ease',
                flexShrink: 0,
                objectFit: 'contain',
              }}
            />
            <span
              className="font-bold tracking-tight"
              style={{ color: t.logo, fontSize: '14px', transition: 'color 0.4s ease' }}
            >
              株式会社メディカバイス
            </span>
          </Link>

          {/* デスクトップナビ */}
          <nav className="hidden md:flex items-center gap-8" aria-label="グローバルナビゲーション">
            {NAV_LINKS.map(({ href, label }) => {
              const active = isActive(href)
              return (
                <Link
                  key={href}
                  href={href}
                  className={`text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${t.ring}`}
                  style={{
                    color: active ? t.navActive : t.navInactive,
                    fontWeight: active ? 600 : 400,
                    borderBottom: active ? `1px solid ${t.navActiveBorder}` : undefined,
                    paddingBottom: active ? '2px' : undefined,
                    transition: 'color 0.4s ease',
                  }}
                >
                  {label}
                </Link>
              )
            })}
            <Link
              href="/contact"
              className={`min-h-[44px] px-5 flex items-center text-sm font-medium transition-opacity hover:opacity-85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${t.ring}`}
              style={{
                backgroundColor: t.ctaBg,
                color: t.ctaColor,
                transition: 'background-color 0.4s ease, color 0.4s ease',
              }}
            >
              お問い合わせ
            </Link>
          </nav>

          {/* ハンバーガーボタン（SP） */}
          <button
            className={`md:hidden min-w-[44px] min-h-[44px] flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${t.ring}`}
            style={{ color: t.icon, transition: 'color 0.4s ease' }}
            onClick={() => setMenuOpen(v => !v)}
            aria-label={menuOpen ? 'メニューを閉じる' : 'メニューを開く'}
            aria-expanded={menuOpen}
          >
            <span className="flex flex-col gap-[5px]" aria-hidden="true">
              <span className="hamburger-bar" style={{ transform: menuOpen ? 'translateY(7px) rotate(45deg)' : undefined }} />
              <span className="hamburger-bar" style={{ opacity: menuOpen ? 0 : 1, transform: menuOpen ? 'scaleX(0)' : undefined }} />
              <span className="hamburger-bar" style={{ transform: menuOpen ? 'translateY(-7px) rotate(-45deg)' : undefined }} />
            </span>
          </button>
        </div>

        {/* モバイルメニュー — absolute でボディを押し下げない */}
        {menuOpen && (
          <nav
            className="md:hidden absolute left-0 right-0 px-6 py-6 flex flex-col items-center gap-1 menu-slide-down"
            style={{
              top: '100%',
              backgroundColor: t.bg,
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
              borderTop: `1px solid ${t.border}`,
            }}
            aria-label="モバイルナビゲーション"
          >
            {NAV_LINKS.map(({ href, label }) => {
              const active = isActive(href)
              return active ? (
                <span
                  key={href}
                  aria-current="page"
                  className="min-h-[48px] w-full flex items-center justify-center gap-2 text-sm"
                  style={{ color: t.navActive, fontWeight: 600, cursor: 'default' }}
                >
                  <span
                    aria-hidden="true"
                    className="inline-block w-1 h-1 rounded-full shrink-0 opacity-50"
                    style={{ backgroundColor: 'currentColor' }}
                  />
                  {label}
                </span>
              ) : (
                <Link
                  key={href}
                  href={href}
                  onClick={closeMenu}
                  className={`min-h-[48px] w-full flex items-center justify-center text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-1 ${t.ring}`}
                  style={{ color: t.navInactive, fontWeight: 400 }}
                >
                  {label}
                </Link>
              )
            })}
            <Link
              href="/contact"
              onClick={closeMenu}
              className={`min-h-[48px] w-full flex items-center justify-center text-sm font-medium mt-3 transition-opacity hover:opacity-85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${t.ring}`}
              style={{ backgroundColor: t.ctaBg, color: t.ctaColor }}
            >
              お問い合わせ
            </Link>
          </nav>
        )}
      </header>
    </>
  )
}
