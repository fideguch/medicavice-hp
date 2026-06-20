'use client'

import { ArrowUpRight } from 'lucide-react'
import Reveal from '@/components/ui/Reveal'
import MaskText from '@/components/ui/MaskText'
import ContributionGraph from '@/components/home/ContributionGraph'
import { GH_USER, type Repo } from '@/lib/works'
import { PRODUCTS, MEDIMONY_URL } from '@/lib/content'
import { useLocale } from '@/lib/i18n'

interface Contributions {
  days: { date: string; count: number; level: number }[]
  total: number
}

/** Activity section: contribution heatmap + private products + open-source builds. */
export default function WorksSection({ repos, contributions }: { repos: Repo[]; contributions: Contributions }) {
  const { t } = useLocale()
  const a = t.activity
  const pr = t.products
  const repoText = t.repos as Record<string, { label: string; description: string }>
  const productText = pr.items as Record<string, { name: string; label: string; description: string }>

  return (
    <section id="works" className="py-24 sm:py-28 hairline-t" style={{ backgroundColor: 'var(--color-bg)' }}>
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-12">
          <p className="eyebrow mb-5">{a.eyebrow}</p>
          <h2 className="heading-section"><MaskText>{a.heading}</MaskText></h2>
          <p className="text-muted mt-4 max-w-xl text-sm leading-loose">{a.intro}</p>
        </div>

        {/* heatmap + products: side-by-side on desktop, stacked on mobile */}
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-14 items-start mb-14">
          <Reveal>
            <p className="eyebrow mb-5">{a.contribEyebrow}</p>
            <ContributionGraph days={contributions.days} total={contributions.total} />
          </Reveal>

          {PRODUCTS.length > 0 && (
            <Reveal delay={0.06}>
              <p className="eyebrow mb-5">{pr.eyebrow}</p>
              <ul className="flex flex-col gap-4">
                {PRODUCTS.map((p) => {
                  const txt = productText[p.id]
                  if (!txt) return null
                  return (
                    <li key={p.id}>
                      <div className="card p-6 sm:p-7 h-full">
                        <div className="flex items-center gap-3 mb-3">
                          <span className="heading-card" style={{ fontSize: '1.05rem' }}>{txt.name}</span>
                          {p.isPrivate && (
                            <span className="chip shrink-0" style={{ padding: '0.18rem 0.55rem', fontSize: '0.62rem' }}>{pr.privateBadge}</span>
                          )}
                        </div>
                        <p className="text-muted text-[13px] leading-relaxed mb-3">{txt.description}</p>
                        <span className="mono text-[10px]" style={{ color: 'var(--color-text-dim)' }}>{txt.label}</span>
                      </div>
                    </li>
                  )
                })}
              </ul>
            </Reveal>
          )}
        </div>

        {/* co-development partner: Medimony / WaWaTalk (device demo embed + backlink) */}
        <div className="mb-14">
          <p className="eyebrow mb-5">{a.collab.eyebrow}</p>
          <Reveal>
            <div className="card p-6 sm:p-7">
              <div className="flex flex-col lg:flex-row lg:items-stretch gap-6 lg:gap-8">
                <div className="lg:w-[38%] shrink-0 flex flex-col">
                  <h3 className="heading-card mb-3" style={{ fontSize: '1.1rem' }}>{a.collab.title}</h3>
                  <p className="text-muted text-[13.5px] leading-relaxed mb-4 flex-1">{a.collab.body}</p>
                  <a href={MEDIMONY_URL} target="_blank" rel="noopener noreferrer" className="link-wipe inline-flex items-center gap-1.5 text-sm font-medium focus-ring w-fit" style={{ color: 'var(--color-accent-text)' }}>
                    {a.collab.linkLabel}
                    <ArrowUpRight size={14} aria-hidden="true" />
                  </a>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="rounded-lg overflow-hidden" style={{ border: '1px solid var(--color-border)', aspectRatio: '16 / 10', backgroundColor: 'var(--color-surface-2)' }}>
                    <iframe
                      src="https://www.medimony.co.jp/wawatalk/"
                      title={a.collab.iframeTitle}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="w-full h-full"
                      style={{ border: 0 }}
                    />
                  </div>
                  <p className="mono mt-2 text-[10px]" style={{ color: 'var(--color-text-dim)' }}>{a.collab.caption}</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* builds / OSS */}
        {repos.length > 0 && (
          <>
            <p className="eyebrow mb-6">{a.reposEyebrow}</p>
            <ul className="grid gap-4 sm:grid-cols-2">
              {repos.map((r, i) => {
                const txt = repoText[r.name]
                return (
                  <li key={r.name}>
                    <Reveal delay={i * 0.04}>
                      <a
                        href={r.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="card card-hover focus-ring group flex flex-col h-full p-6"
                        aria-label={`${r.name} — GitHub`}
                      >
                        <div className="flex items-center justify-between gap-3 mb-3">
                          <span className="mono text-sm" style={{ color: 'var(--color-text)' }}>{r.name}</span>
                          <ArrowUpRight size={16} aria-hidden="true" className="shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" style={{ color: 'var(--color-text-muted)' }} />
                        </div>
                        <p className="text-muted text-[13px] leading-relaxed mb-5 flex-1">{txt?.description}</p>
                        <div className="flex flex-wrap items-center gap-x-2 gap-y-1.5">
                          <span className="chip" style={{ padding: '0.18rem 0.55rem', fontSize: '0.64rem' }}>{txt?.label}</span>
                          {r.topics.map((tp) => (
                            <span key={tp} className="mono text-[10px]" style={{ color: 'var(--color-text-dim)' }}>#{tp}</span>
                          ))}
                          <span className="mono text-[10px] ml-auto" style={{ color: 'var(--color-text-dim)' }}>{a.updatedLabel} {r.updated}</span>
                        </div>
                      </a>
                    </Reveal>
                  </li>
                )
              })}
            </ul>
          </>
        )}

        <Reveal>
          <a href={`https://github.com/${GH_USER}`} target="_blank" rel="noopener noreferrer" className="link-wipe inline-flex items-center gap-1.5 text-sm font-medium mt-9 focus-ring" style={{ color: 'var(--color-accent-text)' }}>
            {a.viewAllGithub}
            <ArrowUpRight size={14} aria-hidden="true" />
          </a>
        </Reveal>
      </div>
    </section>
  )
}
