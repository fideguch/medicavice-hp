import type { ReactNode } from 'react'
import BlueprintGrid from '@/components/ui/BlueprintGrid'
import AuroraGlow from '@/components/ui/AuroraGlow'
import MaskText from '@/components/ui/MaskText'
import Eyebrow from '@/components/ui/Eyebrow'

interface PageHeroProps {
  eyebrow: string
  title: ReactNode
  sub?: ReactNode
  icon?: ReactNode
}

/** Shared dark sub-page hero: eyebrow + title + optional sub, over grid + faint aurora. */
export default function PageHero({ eyebrow, title, sub, icon }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden noise" style={{ backgroundColor: 'var(--color-bg)' }}>
      <BlueprintGrid />
      <AuroraGlow
        style={{ top: '-30%', left: '60%', width: 'min(700px, 80%)', height: '120%', transform: 'translateX(-50%)', opacity: 0.4 }}
      />
      <div className="relative max-w-5xl mx-auto px-6 pt-28 pb-20 sm:pt-32 sm:pb-24">
        <Eyebrow className="mb-7 animate-fade-in" icon={icon}>{eyebrow}</Eyebrow>
        <h1 className="heading-hero max-w-3xl" style={{ fontSize: 'clamp(2rem, 5vw, 3.25rem)' }}>
          <MaskText>{title}</MaskText>
        </h1>
        <div className="animate-line delay-200 mt-8 mb-2" style={{ width: 64, height: 1, backgroundColor: 'var(--color-border-strong)' }} />
        {sub && (
          <p className="text-muted mt-7 max-w-2xl leading-loose animate-blur-in delay-200" style={{ fontSize: 'clamp(1rem, 2vw, 1.125rem)' }}>
            {sub}
          </p>
        )}
      </div>
    </section>
  )
}
