'use client'

import Button from '@/components/ui/Button'
import BlueprintGrid from '@/components/ui/BlueprintGrid'
import { useLocale } from '@/lib/i18n'

export default function NotFoundView() {
  const { t } = useLocale()
  const n = t.notFound
  return (
    <section className="relative overflow-hidden" style={{ backgroundColor: 'var(--color-bg)', minHeight: '70vh' }}>
      <BlueprintGrid />
      <div className="relative max-w-5xl mx-auto px-6 py-32 flex flex-col items-center justify-center text-center" style={{ minHeight: '70vh' }}>
        <p className="num text-sm tracking-[0.3em] mb-6" style={{ color: 'var(--color-accent-text)' }}>{n.code}</p>
        <h1 className="heading-section mb-5">{n.heading}</h1>
        <p className="text-muted text-sm leading-loose mb-12 max-w-md">{n.body}</p>
        <div className="flex flex-col sm:flex-row gap-3">
          <Button href="/" arrow>{n.backHome}</Button>
          <Button href="/#contact" variant="ghost">{n.contact}</Button>
        </div>
      </div>
    </section>
  )
}
