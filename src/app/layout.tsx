import type { Metadata } from 'next'
import { Noto_Sans_JP } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import ScrollToTop from '@/components/ui/ScrollToTop'

const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
})

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000')

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: '株式会社メディカバイス | 現場に寄り添う、確かな医療を。',
    template: '%s | 株式会社メディカバイス',
  },
  description:
    '医師としての長年の経験から生まれた、医療デバイス開発コンサルティングを中心とした医療ソリューションを提供します。',
  openGraph: {
    title: '株式会社メディカバイス | 現場に寄り添う、確かな医療を。',
    description:
      '医師としての長年の経験から生まれた、医療デバイス開発コンサルティングを中心とした医療ソリューションを提供します。',
    url: siteUrl,
    siteName: '株式会社メディカバイス',
    locale: 'ja_JP',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: '株式会社メディカバイス',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '株式会社メディカバイス | 現場に寄り添う、確かな医療を。',
    description:
      '医師としての長年の経験から生まれた、医療デバイス開発コンサルティングを中心とした医療ソリューションを提供します。',
    images: ['/og-image.png'],
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/会社ロゴ.png', type: 'image/png' },
    ],
  },
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="theme-color" content="#FDFBF7" />
      </head>
      <body className={notoSansJP.className}>
        {/* スキップリンク */}
        <a
          href="#main-content"
          className="sr-only focus-visible:not-sr-only focus-visible:fixed focus-visible:top-4 focus-visible:left-4 focus-visible:z-[100] focus-visible:px-4 focus-visible:py-2 focus-visible:text-sm focus-visible:font-medium focus-visible:bg-[#0F172A] focus-visible:text-white"
        >
          メインコンテンツへスキップ
        </a>
        <ScrollToTop />
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
