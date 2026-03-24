'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ArrowLeft, ArrowRight } from 'lucide-react'

const NAV_LINKS = [
  { href: '/', label: 'トップ' },
  { href: '/services', label: 'サービス' },
  { href: '/company', label: '企業情報' },
  { href: '/contact', label: 'お問い合わせ' },
] as const

export default function Footer() {
  const pathname = usePathname()
  const currentIndex = NAV_LINKS.findIndex((l) =>
    l.href === '/' ? pathname === '/' : pathname.startsWith(l.href)
  )
  const prev = currentIndex > 0 ? NAV_LINKS[currentIndex - 1] : null
  const next = currentIndex < NAV_LINKS.length - 1 ? NAV_LINKS[currentIndex + 1] : null

  return (
    <footer style={{ backgroundColor: '#0F172A' }}>

      {/* prev / next ナビゲーション */}
      {(prev || next) && (
        <div style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
          <div className="max-w-5xl mx-auto px-6">
            <div className="flex">
              {/* prev */}
              <div className="flex-1" style={{ borderRight: next ? '1px solid rgba(255,255,255,0.08)' : 'none' }}>
                {prev && (
                  <Link
                    href={prev.href}
                    className="flex items-center gap-4 py-7 group transition-opacity hover:opacity-70 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white"
                  >
                    <ArrowLeft size={16} style={{ color: 'rgba(255,255,255,0.6)' }} className="transition-transform group-hover:-translate-x-0.5" aria-hidden="true" />
                    <span>
                      <span className="block text-xs tracking-widest uppercase mb-1" style={{ color: 'rgba(255,255,255,0.6)' }}>previous</span>
                      <span className="block text-sm font-medium" style={{ color: 'rgba(255,255,255,0.75)' }}>{prev.label}</span>
                    </span>
                  </Link>
                )}
              </div>

              {/* next */}
              <div className="flex-1">
                {next && (
                  <Link
                    href={next.href}
                    className="flex items-center justify-end gap-4 py-7 text-right group transition-opacity hover:opacity-70 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white"
                  >
                    <span>
                      <span className="block text-xs tracking-widest uppercase mb-1" style={{ color: 'rgba(255,255,255,0.6)' }}>next</span>
                      <span className="block text-sm font-medium" style={{ color: 'rgba(255,255,255,0.75)' }}>{next.label}</span>
                    </span>
                    <ArrowRight size={16} style={{ color: 'rgba(255,255,255,0.6)' }} className="transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* メインフッター */}
      <div className="max-w-5xl mx-auto px-6 pt-10 md:pt-16 pb-10">
        {/* 上部：ロゴ + ナビ */}
        <div
          className="flex flex-col items-center md:items-start gap-8 pb-10 md:pb-12 md:flex-row md:justify-between"
          style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}
        >
          {/* ロゴ */}
          <div className="flex flex-col items-center md:items-start">
            <Link
              href="/"
              className="flex flex-col items-center md:items-start gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0F172A]"
              aria-label="株式会社メディカバイス — トップページへ"
            >
              <img
                src="/logo.png"
                alt=""
                aria-hidden="true"
                width={80}
                height={80}
                style={{ filter: 'brightness(0) invert(1)', flexShrink: 0, objectFit: 'contain' }}
              />
              <p style={{ fontSize: '20px', fontWeight: 700, color: '#FFFFFF', letterSpacing: '-0.01em' }}>
                株式会社メディカバイス
              </p>
            </Link>
            <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.7)', marginTop: '10px', lineHeight: 1.6 }}>
              現場に寄り添う、確かな医療を。
            </p>
          </div>

          {/* ナビ */}
          <nav aria-label="フッターナビゲーション">
            <div className="flex gap-10 sm:gap-16">
              {/* ページ列 */}
              <div className="flex flex-col gap-3">
                <p style={{ fontSize: '13px', fontWeight: 700, color: 'rgba(255,255,255,0.75)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                  ページ
                </p>
                {NAV_LINKS.map((link) => {
                  const isActive = link.href === '/' ? pathname === '/' : pathname.startsWith(link.href)
                  return isActive ? (
                    <span
                      key={link.href}
                      aria-current="page"
                      style={{ fontSize: '13px', fontWeight: 500, color: '#FFFFFF', cursor: 'default', display: 'flex', alignItems: 'center', gap: '6px' }}
                    >
                      <span aria-hidden="true" style={{ display: 'inline-block', width: '4px', height: '4px', borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.5)', flexShrink: 0 }} />
                      {link.label}
                    </span>
                  ) : (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="footer-link focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white"
                      style={{ fontSize: '13px' }}
                    >
                      {link.label}
                    </Link>
                  )
                })}
              </div>

              {/* 所在地列 */}
              <div className="flex flex-col gap-3 items-center md:items-start">
                <p style={{ fontSize: '13px', fontWeight: 700, color: 'rgba(255,255,255,0.75)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                  所在地
                </p>
                <p className="text-center md:text-left" style={{ fontSize: '12px', color: 'rgba(255,255,255,0.65)', lineHeight: 1.6 }}>
                  〒141-0031<br />東京都品川区西五反田5-23-3
                </p>
              </div>
            </div>
          </nav>
        </div>

        {/* 下部：コピーライト */}
        <div className="flex flex-col items-center gap-3 pt-8 sm:flex-row sm:justify-between sm:items-center">
          <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.65)' }}>
            © 株式会社メディカバイス All rights reserved.
          </p>
          <Link
            href="/privacy"
            className="footer-link-dim focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white"
            style={{ fontSize: '12px' }}
          >
            個人情報保護方針
          </Link>
        </div>
      </div>
    </footer>
  )
}
