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
export const GOSHINROKU_URL = 'https://www.medimony.co.jp/goshinroku/'
export const WAWATALK_URL = 'https://www.medimony.co.jp/wawatalk/'
/** Medimony co-developed devices, in display order (paired by index with dict.collab.devices). */
export const MEDIMONY_DEVICE_URLS = [GOSHINROKU_URL, WAWATALK_URL] as const

/** Capability areas for the 対応可能領域 strip — grouped clusters. Language-neutral: chips carry ja+en. */
export const CAPABILITY_GROUPS = [
  {
    key: 'product',
    label: 'PRODUCT',
    chips: [
      { ja: 'プロダクトマネジメント', en: 'Product Management' },
      { ja: '要件定義・仕様駆動開発', en: 'Spec-Driven Development' },
      { ja: '開発ディレクション', en: 'Dev Direction' },
      { ja: 'プロトタイピング・MVP開発', en: 'Rapid Prototyping & MVP' },
    ],
  },
  {
    key: 'ai',
    label: 'AI & AUTOMATION',
    chips: [
      { ja: 'AIエージェント設計・運用', en: 'AI Agent Design & Ops' },
      { ja: '業務自動化ワークフロー構築', en: 'Workflow Automation' },
      { ja: '生成AI業務導入支援', en: 'Generative AI Adoption' },
      { ja: 'AI活用の業務プロセス設計', en: 'AI Process Redesign' },
      { ja: 'AI評価・精度改善（Eval）', en: 'AI Evaluation & Evals' },
      { ja: '社内ナレッジ検索基盤（RAG）', en: 'Knowledge Retrieval (RAG)' },
    ],
  },
  {
    key: 'data',
    label: 'DATA & DX',
    chips: [
      { ja: 'データ分析・KPI設計', en: 'Data Analysis & KPIs' },
      { ja: 'DX推進・伴走支援', en: 'DX Enablement' },
      { ja: '医療・ヘルスケアDX', en: 'Healthcare DX' },
    ],
  },
] as const

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
