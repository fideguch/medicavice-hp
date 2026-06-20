/**
 * Curated "Works" — open-source PM / AI tools (real GitHub repos, snapshot baked in
 * so the section always renders without a token; github.ts refreshes them live if GITHUB_TOKEN is set).
 * Single-accent discipline: no language colors / no star counts (vanity, near-zero) — role + description lead.
 */

export const GH_USER = 'fideguch'

export interface Repo {
  name: string
  label: string
  description: string
  topics: string[]
  url: string
  updated: string // YYYY-MM
}

/** Code-level allowlist (curation), in display order. Old 2020-23 learning repos are excluded by omission. */
export const FEATURED_REPOS: Repo[] = [
  {
    name: 'my_pm_tools',
    label: 'PMオペレーション',
    description: 'AI時代のPMオペレーター・スキル。GitHub Projects × Notion × Google Workspace を Claude Code から統合運用するMCPツール群。',
    topics: ['ai-agents', 'claude-code'],
    url: 'https://github.com/fideguch/my_pm_tools',
    updated: '2026-04',
  },
  {
    name: 'requirements_designer',
    label: '要件定義',
    description: '対話型Q&Aで要件定義書（チャーター・FR/NFR・ユーザーストーリー・品質スコア）を生成する Claude Code スキル。',
    topics: ['requirements', 'claude-code'],
    url: 'https://github.com/fideguch/requirements_designer',
    updated: '2026-04',
  },
  {
    name: 'pm_ad_analysis',
    label: '広告運用',
    description: 'PM向けの広告運用エージェント。Google / Meta / ASA / TikTok / Amazon の5媒体に対応し、クリエイティブ生成・MMM・増分検証を支援。',
    topics: ['advertising', 'marketing'],
    url: 'https://github.com/fideguch/pm_ad_analysis',
    updated: '2026-03',
  },
  {
    name: 'pm_data_analysis',
    label: 'データ分析',
    description: 'CSV・JSON・画像を自律ルーティングで分析し、信頼度スコア付きのインサイトを生成する Claude Code スキル。',
    topics: ['data-analysis', 'statistics'],
    url: 'https://github.com/fideguch/pm_data_analysis',
    updated: '2026-03',
  },
  {
    name: 'bochi',
    label: 'アイデア展開',
    description: 'アイデアの種を、ソクラテス式問答・SCAMPER・ReActリサーチで構造化された仮説に展開する Claude Code スキル。',
    topics: ['brainstorming', 'product-management'],
    url: 'https://github.com/fideguch/bochi',
    updated: '2026-04',
  },
  {
    name: 'speckit-bridge',
    label: '要件→仕様',
    description: '要件定義（designs/）を spec-kit 形式（spec.md + constitution + conventions）に変換する Claude Code スキル。',
    topics: ['spec-kit', 'requirements'],
    url: 'https://github.com/fideguch/speckit-bridge',
    updated: '2026-04',
  },
  {
    name: 'figma-refine',
    label: 'デザインレビュー',
    description: 'プロジェクト文脈を読み込み、3層スクリーンショット検証で Figma デザインを精緻化する Claude Code スキル。',
    topics: ['figma', 'design-review'],
    url: 'https://github.com/fideguch/figma-refine',
    updated: '2026-04',
  },
  {
    name: 'medicavice-hp',
    label: 'このサイト',
    description: 'このサイト自体のソースコード。Next.js 16 + React 19 + Tailwind v4 で構築。',
    topics: ['nextjs', 'typescript'],
    url: 'https://github.com/fideguch/medicavice-hp',
    updated: '2026-04',
  },
]
