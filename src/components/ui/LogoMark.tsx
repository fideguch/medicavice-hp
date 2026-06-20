import type { CSSProperties } from 'react'

/**
 * Inline "MV" knockout monogram (Outfit). Robust by design: pure vector,
 * fill=currentColor, no external PNG / CSS filter / background — so it can never
 * render as a blank box from a cached or opaque asset. Set color via `style`/CSS.
 */
export default function LogoMark({
  className = '',
  style,
  title,
}: {
  className?: string
  style?: CSSProperties
  title?: string
}) {
  return (
    <svg
      viewBox="96 315 690 394"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      role={title ? 'img' : undefined}
      aria-hidden={title ? undefined : true}
      aria-label={title}
      className={className}
      style={style}
    >
      <path d="M569 708.68L413.88 315H496.2L616.04 633.64H584.12L705.08 315H786.28L629.48 708.68H569Z" />
      <path d="M293.933 545.676L412.537 355.239L491.36 555.282V708.68H415.76V473.345L319.44 628.04H267.92L172.16 474.243V708.68H96V315H149.76L293.933 545.676Z" />
    </svg>
  )
}
