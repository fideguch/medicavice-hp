import type { Metadata } from 'next'
import PrivacyContent from '@/components/privacy/PrivacyContent'

export const metadata: Metadata = {
  title: '個人情報保護方針 / Privacy Policy',
  description: '株式会社メディカバイスの個人情報保護方針です。',
  openGraph: {
    title: '個人情報保護方針 | 株式会社メディカバイス',
    description: '株式会社メディカバイスの個人情報保護方針です。',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: '株式会社メディカバイス' }],
  },
  robots: { index: false, follow: false },
}

export default function PrivacyPage() {
  return <PrivacyContent />
}
