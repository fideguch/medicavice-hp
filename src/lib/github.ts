/**
 * Server-only GitHub connection. NEVER import this from a Client Component.
 * Blends the static curated list (works.ts) with live repo metadata when GITHUB_TOKEN is set;
 * falls back to the static snapshot when there is no token / a fetch error (graceful, no empty UI).
 */
import { FEATURED_REPOS, GH_USER, type Repo } from '@/lib/works'

interface GhRepo {
  name: string
  pushed_at?: string
  topics?: string[]
  description?: string | null
}

export async function getFeaturedRepos(): Promise<Repo[]> {
  const token = process.env.GITHUB_TOKEN
  if (!token) return FEATURED_REPOS

  try {
    const res = await fetch(
      `https://api.github.com/users/${GH_USER}/repos?per_page=100&sort=updated`,
      {
        headers: {
          Accept: 'application/vnd.github+json',
          Authorization: `Bearer ${token}`,
        },
        // ISR: refresh at most every 6h
        next: { revalidate: 60 * 60 * 6 },
      }
    )
    if (!res.ok) return FEATURED_REPOS

    const live: unknown = await res.json()
    if (!Array.isArray(live)) return FEATURED_REPOS

    const byName = new Map<string, GhRepo>(
      (live as GhRepo[]).filter((r) => r && typeof r.name === 'string').map((r) => [r.name, r])
    )

    // keep curated order + labels/descriptions; refresh updated month + topics from live data
    return FEATURED_REPOS.map((r) => {
      const l = byName.get(r.name)
      if (!l) return r
      return {
        ...r,
        updated: typeof l.pushed_at === 'string' ? l.pushed_at.slice(0, 7) : r.updated,
        topics: Array.isArray(l.topics) && l.topics.length ? l.topics.slice(0, 2) : r.topics,
      }
    })
  } catch {
    return FEATURED_REPOS
  }
}

export interface ContribDay {
  date: string
  count: number
  level: number
}

export interface Contributions {
  days: ContribDay[]
  total: number
}

/** GitHub contribution heatmap data (public, no-token API). Empty on failure. */
export async function getContributions(): Promise<Contributions> {
  try {
    const res = await fetch(
      `https://github-contributions-api.jogruber.de/v4/${GH_USER}?y=last`,
      { next: { revalidate: 60 * 60 * 12 } }
    )
    if (!res.ok) return { days: [], total: 0 }
    const data = await res.json()
    const all: ContribDay[] = Array.isArray(data?.contributions) ? data.contributions : []
    // last ~3 months (13 weeks)
    const days = all.slice(-91)
    const total = days.reduce((sum, d) => sum + (d?.count ?? 0), 0)
    return { days, total }
  } catch {
    return { days: [], total: 0 }
  }
}
