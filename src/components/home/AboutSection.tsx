'use client'

import Reveal from '@/components/ui/Reveal'
import MaskText from '@/components/ui/MaskText'
import Eyebrow from '@/components/ui/Eyebrow'
import { User, Briefcase, Stethoscope, Building2 } from 'lucide-react'
import CareerTimeline from '@/components/company/CareerTimeline'
import { HISTORY_IT, HISTORY_MED, BARTENDER, type CareerItem } from '@/lib/content'
import { useLocale } from '@/lib/i18n'

export default function AboutSection() {
  const { t } = useLocale()
  const a = t.about

  // merge translated text (dict) with language-neutral iso/highlight (content)
  const itBase: CareerItem[] = t.history.it.map((x, i) => ({ ...x, iso: HISTORY_IT[i].iso, highlight: HISTORY_IT[i].highlight }))
  const bartender: CareerItem = { ...t.history.bartender, iso: BARTENDER.iso, instagram: BARTENDER.instagram }
  const itItems: CareerItem[] = [...itBase.slice(0, 2), bartender, ...itBase.slice(2)]
  const medItems: CareerItem[] = t.history.med.map((x, i) => ({ ...x, iso: HISTORY_MED[i].iso, highlight: HISTORY_MED[i].highlight }))

  return (
    <section id="about" className="py-24 sm:py-28 hairline-t" style={{ backgroundColor: 'var(--color-surface-1)' }}>
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-12">
          <Eyebrow className="mb-5" icon={<User size={14} strokeWidth={1.5} aria-hidden="true" style={{ color: 'var(--color-text-muted)' }} />}>{a.eyebrow}</Eyebrow>
          <h2 className="heading-section"><MaskText>{a.heading}</MaskText></h2>
        </div>

        {/* careers — individual first */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 mb-16">
          <div>
            <Reveal>
              <Eyebrow className="mb-2" icon={<Briefcase size={13} strokeWidth={1.5} aria-hidden="true" style={{ color: 'var(--color-text-muted)' }} />}>{a.itRole}</Eyebrow>
              <h3 className="heading-card mb-1">
                {a.itNameEn} <span className="text-muted text-sm font-normal">{a.itNameJa}</span>
              </h3>
              <p className="text-muted text-sm leading-relaxed mb-7">{a.itBio}</p>
            </Reveal>
            <CareerTimeline items={itItems} />
            <Reveal>
              <p className="text-muted text-xs leading-relaxed mt-5">{a.careerNote}</p>
            </Reveal>
          </div>

          <div>
            <Reveal>
              <Eyebrow className="mb-2" icon={<Stethoscope size={13} strokeWidth={1.5} aria-hidden="true" style={{ color: 'var(--color-text-muted)' }} />}>{a.medRole}</Eyebrow>
              <h3 className="heading-card mb-1">{a.medName}</h3>
              <p className="text-muted text-sm leading-relaxed mb-7">{a.medBio}</p>
            </Reveal>
            <CareerTimeline items={medItems} compact />
          </div>
        </div>

        {/* company */}
        <Reveal>
          <Eyebrow className="mb-5" icon={<Building2 size={14} strokeWidth={1.5} aria-hidden="true" style={{ color: 'var(--color-text-muted)' }} />}>{a.companyEyebrow}</Eyebrow>
          <div className="card overflow-hidden">
            <table className="w-full text-sm">
              <tbody>
                {a.company.map((item) => (
                  <tr key={item.label} className="hairline-b align-top">
                    <th
                      scope="row"
                      className="text-left px-6 py-5 font-medium w-28 md:w-44 align-top whitespace-nowrap"
                      style={{ color: 'var(--color-text)', backgroundColor: 'var(--color-surface-3)' }}
                    >
                      {item.label}
                    </th>
                    <td className="px-6 py-5 leading-loose whitespace-pre-line" style={{ color: 'var(--color-text-body)' }}>
                      {item.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
