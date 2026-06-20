import { siteUrl } from '@/lib/site-config'

interface OrganizationJsonLd {
  '@context': 'https://schema.org'
  '@type': 'Organization'
  name: string
  url: string
  logo: string
  description: string
  address: {
    '@type': 'PostalAddress'
    streetAddress: string
    addressLocality: string
    addressRegion: string
    postalCode: string
    addressCountry: string
  }
  telephone: string
  foundingDate: string
  founder: {
    '@type': 'Person'
    name: string
    jobTitle: string
  }
}

interface WebSiteJsonLd {
  '@context': 'https://schema.org'
  '@type': 'WebSite'
  name: string
  url: string
  description: string
  inLanguage: string
}

const DESCRIPTION =
  'プロダクトの企画・開発ディレクション、AI活用・業務自動化（DX）を中心に事業を支援。医療領域のご相談にも対応します。'

const organizationData: OrganizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: '株式会社メディカバイス',
  url: siteUrl,
  logo: `${siteUrl}/logo.png`,
  description: DESCRIPTION,
  address: {
    '@type': 'PostalAddress',
    streetAddress: '西五反田5丁目23番3号 5階5D室',
    addressLocality: '品川区',
    addressRegion: '東京都',
    postalCode: '141-0031',
    addressCountry: 'JP',
  },
  telephone: '080-7532-4086',
  foundingDate: '2024-10-01',
  founder: {
    '@type': 'Person',
    name: '出口誠',
    jobTitle: '代表取締役社長',
  },
}

const websiteData: WebSiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: '株式会社メディカバイス',
  url: siteUrl,
  description: DESCRIPTION,
  inLanguage: 'ja',
}

// `<` を < にエスケープし、</script> によるDOMブレイクアウトを防ぐ
function jsonLdSafe(data: object): string {
  return JSON.stringify(data).replace(/</g, '\\u003c')
}

export default function JsonLd() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdSafe(organizationData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdSafe(websiteData) }}
      />
    </>
  )
}
