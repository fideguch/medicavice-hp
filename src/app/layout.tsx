import type { Metadata } from 'next'
import { Inter, Noto_Sans_JP, JetBrains_Mono, Zen_Kaku_Gothic_New, Space_Grotesk, Outfit } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import ScrollToTop from '@/components/ui/ScrollToTop'
import SkipLink from '@/components/ui/SkipLink'
import CardSpotlight from '@/components/ui/CardSpotlight'
import JsonLd from '@/components/seo/JsonLd'
import { LocaleProvider } from '@/lib/i18n'
import { siteUrl } from '@/lib/site-config'

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
})

const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-noto-sans-jp',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
})

const zenKaku = Zen_Kaku_Gothic_New({
  subsets: ['latin'],
  weight: ['500', '700', '900'],
  variable: '--font-zen-kaku',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

// EN company wordmark (medicavice) — pairs with the Outfit MV logo mark
const outfit = Outfit({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-outfit',
  display: 'swap',
})

const DESCRIPTION =
  '受託でのプロダクト開発のディレクションから、AI活用・業務自動化（DX）まで。企画から運用まで一気通貫で支援します。医療領域のご相談にも対応します。'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: '株式会社メディカバイス｜企画から運用、AI活用・自動化まで',
    template: '%s | 株式会社メディカバイス',
  },
  description: DESCRIPTION,
  openGraph: {
    title: '株式会社メディカバイス｜企画から運用、AI活用・自動化まで',
    description: DESCRIPTION,
    url: siteUrl,
    siteName: '株式会社メディカバイス',
    locale: 'ja_JP',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: '株式会社メディカバイス' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '株式会社メディカバイス｜企画から運用、AI活用・自動化まで',
    description: DESCRIPTION,
    images: ['/og-image.png'],
  },
  icons: { icon: '/icon.png', apple: '/icon.png' },
  robots: { index: true, follow: true },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <head>
        <meta name="theme-color" content="#0A0B0D" />
        <meta name="google-site-verification" content="ZyUbXcVPuUsk7xIG24Lo7VzlttNp9xRA0V7KGmGECh0" />
      </head>
      <body
        className={`${inter.variable} ${notoSansJP.variable} ${jetbrainsMono.variable} ${zenKaku.variable} ${spaceGrotesk.variable} ${outfit.variable}`}
      >
        <LocaleProvider>
          <JsonLd />
          {/* スクロール進捗バー（対応ブラウザのみ・CSS scroll-driven） */}
          <div className="scroll-progress" aria-hidden="true" />
          <SkipLink />
          <ScrollToTop />
          <CardSpotlight />
          <Header />
          <main id="main-content">{children}</main>
          <Footer />
        </LocaleProvider>
      </body>
    </html>
  )
}
