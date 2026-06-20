/**
 * Centralized site DATA (language-neutral).
 * All translatable copy lives in dict.ts (ja / en); this file holds only
 * URLs, ids, dates and structural metadata referenced by index from the dictionary.
 */

/** Social profiles (official icons used in hero + footer). */
export const SOCIAL = {
  github: 'https://github.com/fideguch',
  linkedin: 'https://www.linkedin.com/in/-ideguchi/',
}

export const MEDIMONY_URL = 'https://www.medimony.co.jp/'

/** Service metadata (number + tag). Titles / details are in dict.services.items. */
export interface Service {
  number: string
  tag: string
}

export const SERVICES: Service[] = [
  { number: '01', tag: 'Dev / PdM' },
  { number: '02', tag: 'AI / DX' },
  { number: '03', tag: 'Medical' },
]

/** Private product credits (text in dict.products.items). */
export interface ProductWork {
  id: string
  isPrivate: boolean
  url?: string
}

export const PRODUCTS: ProductWork[] = [{ id: 'kireinavi', isPrivate: true }]

/** Career entry shape. Text comes from dict.history; the fields below are language-neutral. */
export interface CareerItem {
  iso: string
  period: string
  title: string
  sub?: string
  highlight?: boolean
  /** optional Instagram profile link shown on the entry */
  instagram?: string
}

/** Language-neutral career metadata, parallel by index to dict.history.it / .med. */
export const HISTORY_IT: { iso: string; highlight?: boolean }[] = [
  { iso: '2024-06', highlight: true },
  { iso: '2025-06' },
  { iso: '2023-02' },
  { iso: '2021-09' },
  { iso: '2020-11' },
  { iso: '2018-07' },
]

export const HISTORY_MED: { iso: string; highlight?: boolean }[] = [
  { iso: '1996-03' },
  { iso: '2003' },
  { iso: '2004-09' },
  { iso: '2006-11' },
  { iso: '2020-06' },
  { iso: '2024-10', highlight: true },
]

/** Bar work (fun side gig) — inserted into the career timeline with an Instagram link. */
export const BARTENDER = {
  iso: '2025-02',
  instagram: 'https://www.instagram.com/6grams_musashikoyama/',
}
