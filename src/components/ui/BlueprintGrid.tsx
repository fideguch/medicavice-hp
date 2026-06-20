/** Pure-CSS blueprint dot/line grid backdrop. No JS, no images. */
export default function BlueprintGrid({ className = '' }: { className?: string }) {
  return <div className={`blueprint-grid ${className}`} aria-hidden="true" />
}
