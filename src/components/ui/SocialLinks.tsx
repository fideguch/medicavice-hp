import { SOCIAL } from '@/lib/content'
import GithubIcon from '@/components/ui/GithubIcon'

function LinkedinMark({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" role="img">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

interface SocialLinksProps {
  className?: string
  size?: number
}

/** GitHub + LinkedIn links with official brand marks (inline SVG). */
export default function SocialLinks({ className = '', size = 18 }: SocialLinksProps) {
  const linkCls =
    'inline-flex items-center justify-center min-w-[40px] min-h-[40px] rounded-full transition-colors hover:text-[color:var(--color-text)] focus-ring'
  return (
    <div className={`flex items-center gap-1 ${className}`}>
      <a href={SOCIAL.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub（@fideguch）" className={linkCls} style={{ color: 'var(--color-text-muted)' }}>
        <GithubIcon size={size} />
      </a>
      <a href={SOCIAL.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className={linkCls} style={{ color: 'var(--color-text-muted)' }}>
        <LinkedinMark size={size} />
      </a>
    </div>
  )
}
