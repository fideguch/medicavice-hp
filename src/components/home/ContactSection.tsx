'use client'

import Reveal from '@/components/ui/Reveal'
import MaskText from '@/components/ui/MaskText'
import Eyebrow from '@/components/ui/Eyebrow'
import { Mail, ShieldCheck } from 'lucide-react'
import ContactForm from '@/components/contact/ContactForm'
import { useLocale } from '@/lib/i18n'

export default function ContactSection() {
  const { t } = useLocale()
  const c = t.contact

  return (
    <section id="contact" className="py-24 sm:py-28 hairline-t" style={{ backgroundColor: 'var(--color-bg)' }}>
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-12 max-w-xl">
          <Eyebrow className="mb-5" icon={<Mail size={14} strokeWidth={1.5} aria-hidden="true" style={{ color: 'var(--color-text-muted)' }} />}>{c.eyebrow}</Eyebrow>
          <h2 className="heading-section"><MaskText>{c.heading}</MaskText></h2>
          <p className="text-muted mt-4 text-sm leading-loose">{c.intro}</p>
        </div>

        <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-start">
          <Reveal className="w-full md:flex-1 md:min-w-0">
            <ContactForm />
          </Reveal>

          <aside className="w-full md:w-64 shrink-0">
            <div style={{ borderTop: '2px solid var(--color-accent-text)', paddingTop: '24px' }}>
              <Eyebrow className="mb-5" icon={<ShieldCheck size={14} strokeWidth={1.5} aria-hidden="true" style={{ color: 'var(--color-text-muted)' }} />}>{c.reassuranceEyebrow}</Eyebrow>
              <ul className="flex flex-col gap-5">
                {c.reassurance.map((item) => (
                  <li key={item.title} className="flex flex-col gap-1">
                    <span className="text-sm font-semibold" style={{ color: 'var(--color-text)' }}>{item.title}</span>
                    <span className="text-xs leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>{item.body}</span>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}
