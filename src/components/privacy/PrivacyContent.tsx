'use client'

import PageHero from '@/components/ui/PageHero'
import SectionWrapper from '@/components/ui/SectionWrapper'
import { useLocale } from '@/lib/i18n'

export default function PrivacyContent() {
  const { t } = useLocale()
  const p = t.privacy
  const muted = 'var(--color-text-muted)'

  return (
    <>
      <PageHero eyebrow={p.eyebrow} title={p.heading} />
      <SectionWrapper>
        <article className="max-w-2xl" style={{ color: 'var(--color-text-body)' }}>
          <p className="leading-loose mb-12" style={{ color: muted }}>{p.intro}</p>

          <div className="flex flex-col gap-10">
            {p.sections.map((s) => (
              <section key={s.id} aria-labelledby={`policy-${s.id}`}>
                <h2 id={`policy-${s.id}`} className="text-lg font-bold tracking-tight mb-3" style={{ color: 'var(--color-text)' }}>
                  {s.id}. {s.title}
                </h2>
                <p className="leading-loose text-sm" style={{ color: muted }}>{s.body}</p>
              </section>
            ))}

            <section aria-labelledby="policy-9">
              <h2 id="policy-9" className="text-lg font-bold tracking-tight mb-3" style={{ color: 'var(--color-text)' }}>
                9. {p.contactTitle}
              </h2>
              <p className="leading-loose text-sm mb-4" style={{ color: muted }}>{p.contactIntro}</p>
              <address className="not-italic text-sm leading-loose card p-6" style={{ color: muted }}>
                <strong className="block mb-2" style={{ color: 'var(--color-text)' }}>{p.contactCompany}</strong>
                <ul className="list-none space-y-1">
                  <li>{p.contactAddress}</li>
                  <li>
                    TEL:{' '}
                    <a href="tel:08075324086" className="underline underline-offset-4 transition-opacity hover:opacity-80 focus-ring" style={{ color: 'var(--color-accent-text)' }}>
                      080-7532-4086
                    </a>
                  </li>
                  <li>{p.contactHours}</li>
                </ul>
              </address>
            </section>
          </div>

          <div className="mt-16 pt-8 hairline-t text-sm" style={{ color: muted }}>
            {p.enacted.map((line, i) => (
              <p key={i} className={i === 0 ? '' : 'mt-1'}>{line}</p>
            ))}
          </div>
        </article>
      </SectionWrapper>
    </>
  )
}
