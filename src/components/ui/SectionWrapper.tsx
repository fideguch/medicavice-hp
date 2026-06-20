import type { ReactNode } from 'react'

interface SectionWrapperProps {
  children: ReactNode
  className?: string
  innerClassName?: string
  as?: 'section' | 'div'
  id?: string
}

/** Standard dark section: generous vertical padding + centered container. */
export default function SectionWrapper({
  children,
  className = '',
  innerClassName = '',
  as: Tag = 'section',
  id,
}: SectionWrapperProps) {
  return (
    <Tag id={id} className={`py-24 sm:py-28 ${className}`}>
      <div className={`max-w-5xl mx-auto px-6 ${innerClassName}`}>{children}</div>
    </Tag>
  )
}
