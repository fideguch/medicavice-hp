'use client'

import { useLocale } from '@/lib/i18n'

export default function SkipLink() {
  const { t } = useLocale()
  return (
    <a
      href="#main-content"
      className="sr-only focus-visible:not-sr-only focus-visible:fixed focus-visible:top-4 focus-visible:left-4 focus-visible:z-[100] focus-visible:px-4 focus-visible:py-2 focus-visible:text-sm focus-visible:font-medium focus-visible:rounded-full"
      style={{ backgroundColor: 'var(--color-accent)', color: '#fff' }}
    >
      {t.ui.skipToContent}
    </a>
  )
}
