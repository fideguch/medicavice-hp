# メディカバイス — Fumito Ideguchi

医療の現場知を持つプロダクトマネージャーの個人ブランドサイト。
企画から運用、AI活用・自動化（DX）までを扱う。

- **Production**: https://medicavice.com
- **Repository**: https://github.com/fideguch/medicavice-hp

## Stack

Next.js 16 (App Router) / React 19 / Tailwind CSS v4 / TypeScript

## Development

```bash
npm run dev     # start dev server (http://localhost:3000)
npm run build   # production build
npm run lint    # eslint
```

## Environment variables (Vercel)

| Name | Purpose |
|------|---------|
| `NEXT_PUBLIC_SITE_URL` | Canonical site origin, e.g. `https://medicavice.com` (used for metadata / sitemap / robots / JSON-LD). Build-time — redeploy after changing. |
| `GMAIL_USER` / `GMAIL_APP_PASSWORD` | Contact form sender (nodemailer). |
| `CONTACT_TO_EMAILS` | Comma-separated contact recipients. |
