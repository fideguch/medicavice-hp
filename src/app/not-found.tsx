import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ページが見つかりません | 株式会社メディカバイス',
}

export default function NotFound() {
  return (
    <main className="flex-1 flex items-center justify-center" style={{ minHeight: '60vh' }}>
      <div className="max-w-5xl mx-auto px-6 py-32 text-center">
        <p className="text-xs tracking-[0.2em] uppercase font-medium mb-6" style={{ color: '#64748B' }}>
          404
        </p>
        <h1 className="text-section text-[#1E293B] mb-6">
          ページが見つかりません
        </h1>
        <p className="text-sm leading-loose mb-12" style={{ color: '#64748B' }}>
          お探しのページは移動または削除された可能性があります。
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center min-h-[52px] px-10 bg-[#0F172A] text-white text-sm font-medium hover:bg-[#1E293B] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#1E293B]"
        >
          トップページへ戻る
        </Link>
      </div>
    </main>
  )
}
