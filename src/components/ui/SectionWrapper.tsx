import { ReactNode } from 'react'

interface SectionWrapperProps {
  children: ReactNode
  className?: string
  innerClassName?: string
  as?: 'section' | 'div'
  id?: string
  'data-section-bg'?: 'dark' | 'light'
}

export default function SectionWrapper({
  children,
  className = '',
  innerClassName = '',
  as: Tag = 'section',
  id,
  'data-section-bg': dataSectionBg,
}: SectionWrapperProps) {
  return (
    <Tag id={id} className={`py-28 ${className}`} data-section-bg={dataSectionBg}>
      <div className={`max-w-5xl mx-auto px-6 ${innerClassName}`}>
        {children}
      </div>
    </Tag>
  )
}
