# 株式会社メディカバイス — コーポレートサイト

株式会社メディカバイスのコーポレートサイト兼ランディングページ。
投資家・医療機関等の新規顧客に対し、事業と代表者の信頼性を訴求し、お問い合わせへのCVRを最大化することを目的としています。

---

## 技術スタック

| カテゴリ | 使用技術 |
|---|---|
| フレームワーク | Next.js 15 (App Router) |
| UI | React 19 |
| スタイリング | Tailwind CSS v4 |
| 言語 | TypeScript |
| メール送信 | Nodemailer + Gmail SMTP |
| アイコン | Lucide React |

---

## ページ構成

| パス | ページ |
|---|---|
| `/` | トップページ（Hero / Vision / サービスプレビュー / CTA） |
| `/services` | サービス概要（5事業をカードUIで紹介） |
| `/company` | 企業情報・代表経歴（会社概要 + タイムライン形式の経歴） |
| `/contact` | お問い合わせフォーム（バリデーション + メール送信） |
| `/privacy` | 個人情報保護方針 |

---

## ディレクトリ構成

```
src/
├── app/
│   ├── actions/
│   │   └── contact.ts        # メール送信 Server Action
│   ├── company/page.tsx
│   ├── contact/page.tsx
│   ├── privacy/page.tsx
│   ├── services/page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   ├── not-found.tsx
│   └── page.tsx
├── components/
│   ├── company/              # CompanyHero / CompanyOverview / Timeline
│   ├── contact/              # ContactForm
│   ├── home/                 # HeroSection / VisionSection / ServicePreview
│   ├── layout/               # Header / Footer
│   ├── privacy/              # PrivacyContent
│   ├── services/             # ServicesSection
│   └── ui/                   # SectionWrapper / ScrollToTop
└── lib/
    └── validation.ts         # フォームバリデーション共通ロジック
```

---

## デザインシステム

Navy & Cream Minimalism — 3色統一によるミニマルデザイン。

| トークン | カラーコード | 用途 |
|---|---|---|
| Background Base | `#FDFBF7` | ページ全体の背景（ウォームアイボリー） |
| Background Surface | `#FFFFFF` | カード・コンテンツ背景 |
| Primary / Text Main | `#1E293B` | 見出し・本文・ロゴ |
| Accent / CTA | `#0F172A` | CTAボタン・重要アクション |
| Text Muted | `#64748B` | 補足テキスト |

---

## お問い合わせフォームの仕様

- 入力項目：会社名（100文字以下）/ メールアドレス / お問い合わせ内容（10,000文字以下）
- バリデーション：クライアントサイド（リアルタイム）+ サーバーサイド（Server Action）
- 送信処理：Nodemailer + Gmail SMTP（App Password認証）
- 送信先：社内通知メール × 2アドレス ＋ 問い合わせ者への自動返信メール

環境変数（`.env.local`）:

```
GMAIL_USER=...
GMAIL_APP_PASSWORD=...
CONTACT_TO_EMAILS=...,....
```
