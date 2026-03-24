import SectionWrapper from '@/components/ui/SectionWrapper'
import { ArrowRight } from 'lucide-react'

export default function VisionSection() {
  return (
    <SectionWrapper data-section-bg="light" className="bg-white">
      {/* Section Header */}
      <div className="mb-12">
        <p className="text-xs text-[#64748B] tracking-[0.2em] uppercase mb-6 font-medium">Vision</p>
        <h2 className="text-section text-[#1E293B] max-w-xl">
          なぜ、この会社が生まれたのか
        </h2>
      </div>

      {/* 課題 / 解決策 — 2カラム */}
      <div className="grid md:grid-cols-2 gap-8 md:gap-16 mb-16">
        {/* 課題 */}
        <div className="border-t border-[#E2E8F0] pt-8">
          <span className="text-xs text-[#64748B] tracking-[0.15em] uppercase font-medium block mb-5">
            課題
          </span>
          <h3 className="text-headline text-[#1E293B] mb-5">
            高齢化社会が生む、見えない壁
          </h3>
          <p className="text-sm text-[#64748B] leading-loose">
            難聴などを抱える患者さんと医師の間で、円滑なコミュニケーションが困難になるケースが増えています。治療の場で「言葉が届かない」という状況は、患者さんの不安を高め、医療の質にも影響を与えます。
          </p>
        </div>

        {/* 解決策 */}
        <div className="border-t-2 border-[#1E293B] pt-8">
          <span className="text-xs text-[#64748B] tracking-[0.15em] uppercase font-medium block mb-5">
            解決策
          </span>
          <h3 className="text-headline text-[#1E293B] mb-5">
            医療とITの融合で、<br />現場の課題を解き続ける
          </h3>
          <p className="text-sm text-[#64748B] leading-loose mb-4">
            株式会社メディモニーとの共同開発により、医師の言葉をリアルタイムで文字化するタブレット型デバイスを提供します。現場の医師と患者さんが、安心して向き合えるコミュニケーション環境を実現します。
          </p>
          <p className="text-sm text-[#64748B] leading-loose mb-7">
            音声文字化をはじめ、医療とITを掛け合わせた多角的なコンサルティングを今後も継続的に展開してまいります。
          </p>
          <a
            href="https://www.medimony.co.jp/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-[#1E293B] font-medium transition-opacity hover:opacity-70 cursor-pointer group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E293B] focus-visible:ring-offset-2"
          >
            株式会社メディモニー（共同開発パートナー）
            <ArrowRight size={14} aria-hidden="true" className="transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>

      {/* WaWaTalk デモ — フルワイド */}
      <div>
        <p className="text-xs font-medium tracking-[0.15em] uppercase mb-4" style={{ color: '#64748B' }}>
          デバイスデモ — WaWaTalk
        </p>
        <div
          className="relative w-full overflow-hidden"
          style={{ paddingTop: '56.25%', borderRadius: '6px', border: '1px solid rgba(30,41,59,0.08)' }}
        >
          <iframe
            src="https://www.medimony.co.jp/wawatalk/"
            title="WaWaTalk — 音声文字化デバイスのデモページ"
            loading="lazy"
            sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
            className="absolute inset-0 w-full h-full"
            style={{ border: 'none' }}
          />
        </div>
        <p className="mt-3 text-xs" style={{ color: '#64748B' }}>
          ※ 株式会社メディモニーが提供するWaWaTalkのサービスページです。
        </p>
      </div>
    </SectionWrapper>
  )
}
