'use server'

import nodemailer from 'nodemailer'
import { validateContactForm, hasErrors, type ValidationErrors } from '@/lib/validation'

function escapeHtml(str: string) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

// メールヘッダー（件名）用: 改行・タブを除去しヘッダーインジェクションを防ぐ
function safeHeader(str: string) {
  return str.replace(/[\r\n\t]/g, ' ').slice(0, 200)
}

export type ContactCode = 'idle' | 'success' | 'validation' | 'config' | 'error'

export interface ContactFormState {
  success: boolean
  code: ContactCode
  fieldErrors?: ValidationErrors
}

export async function submitContact(
  _prevState: ContactFormState | null,
  formData: FormData
): Promise<ContactFormState> {
  const companyName = String(formData.get('companyName') ?? '')
  const email = String(formData.get('email') ?? '')
  const message = String(formData.get('message') ?? '')
  const inquiryType = String(formData.get('inquiryType') ?? '').trim()

  const errors = validateContactForm({ companyName, email, message })

  if (hasErrors(errors)) {
    return {
      success: false,
      code: 'validation',
      fieldErrors: errors,
    }
  }

  const gmailUser = process.env.GMAIL_USER
  const gmailPass = process.env.GMAIL_APP_PASSWORD
  if (!gmailUser || !gmailPass) {
    console.error('[Contact] Missing env: GMAIL_USER or GMAIL_APP_PASSWORD')
    return {
      success: false,
      code: 'config',
    }
  }

  const toEmails = (process.env.CONTACT_TO_EMAILS ?? '')
    .split(',')
    .map((e) => e.trim())
    .filter(Boolean)
  // 通知先が未設定でも送信元アカウント宛に通知する（取りこぼし防止）
  const recipients = toEmails.length > 0 ? toEmails : [gmailUser]

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: gmailUser,
      pass: gmailPass,
    },
  })

  const notifyHtml = `
<!DOCTYPE html>
<html lang="ja">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#FDFBF7;font-family:'Helvetica Neue',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#FDFBF7;padding:40px 16px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#FFFFFF;border:1px solid #E2E8F0;">
        <tr>
          <td style="background:#0A0B0D;padding:24px 32px;">
            <p style="margin:0;color:#FFFFFF;font-size:18px;font-weight:700;letter-spacing:-0.01em;">株式会社メディカバイス</p>
            <p style="margin:4px 0 0;color:rgba(255,255,255,0.6);font-size:12px;">お問い合わせ通知</p>
          </td>
        </tr>
        <tr>
          <td style="padding:32px;">
            <p style="margin:0 0 24px;color:#1E293B;font-size:15px;line-height:1.7;">新しいお問い合わせが届きました。</p>
            <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
              <tr>
                <td style="padding:12px 16px;background:#F8FAFC;border:1px solid #E2E8F0;width:120px;font-size:12px;font-weight:600;color:#64748B;vertical-align:top;white-space:nowrap;">会社名</td>
                <td style="padding:12px 16px;border:1px solid #E2E8F0;border-left:none;font-size:14px;color:#1E293B;">${escapeHtml(companyName)}</td>
              </tr>
              <tr>
                <td style="padding:12px 16px;background:#F8FAFC;border:1px solid #E2E8F0;border-top:none;font-size:12px;font-weight:600;color:#64748B;vertical-align:top;white-space:nowrap;">種別</td>
                <td style="padding:12px 16px;border:1px solid #E2E8F0;border-left:none;border-top:none;font-size:14px;color:#1E293B;">${escapeHtml(inquiryType || '未選択')}</td>
              </tr>
              <tr>
                <td style="padding:12px 16px;background:#F8FAFC;border:1px solid #E2E8F0;border-top:none;font-size:12px;font-weight:600;color:#64748B;vertical-align:top;white-space:nowrap;">メールアドレス</td>
                <td style="padding:12px 16px;border:1px solid #E2E8F0;border-left:none;border-top:none;font-size:14px;color:#1E293B;"><a href="mailto:${escapeHtml(email)}" style="color:#2563EB;">${escapeHtml(email)}</a></td>
              </tr>
              <tr>
                <td style="padding:12px 16px;background:#F8FAFC;border:1px solid #E2E8F0;border-top:none;font-size:12px;font-weight:600;color:#64748B;vertical-align:top;white-space:nowrap;">お問い合わせ内容</td>
                <td style="padding:12px 16px;border:1px solid #E2E8F0;border-left:none;border-top:none;font-size:14px;color:#1E293B;line-height:1.7;white-space:pre-wrap;">${escapeHtml(message)}</td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td style="padding:16px 32px 24px;border-top:1px solid #E2E8F0;">
            <p style="margin:0;font-size:11px;color:#94A3B8;">このメールは株式会社メディカバイス お問い合わせフォームより自動送信されています。</p>
          </td>
        </tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`

  const replyHtml = `
<!DOCTYPE html>
<html lang="ja">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#FDFBF7;font-family:'Helvetica Neue',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#FDFBF7;padding:40px 16px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#FFFFFF;border:1px solid #E2E8F0;">
        <tr>
          <td style="background:#0A0B0D;padding:24px 32px;">
            <p style="margin:0;color:#FFFFFF;font-size:18px;font-weight:700;letter-spacing:-0.01em;">株式会社メディカバイス</p>
          </td>
        </tr>
        <tr>
          <td style="padding:32px;">
            <p style="margin:0 0 16px;color:#1E293B;font-size:15px;line-height:1.7;">${escapeHtml(companyName)} ${escapeHtml(companyName).endsWith('様') ? '' : '様'}</p>
            <p style="margin:0 0 24px;color:#1E293B;font-size:14px;line-height:1.8;">この度はお問い合わせいただきありがとうございます。<br>内容を確認の上、担当者より改めてご連絡いたします。今しばらくお待ちください。</p>
            <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;border-top:2px solid #2563EB;">
              <tr>
                <td style="padding:16px 0 8px;font-size:11px;font-weight:600;color:#64748B;letter-spacing:0.1em;text-transform:uppercase;">受付内容</td>
              </tr>
              <tr>
                <td style="padding:8px 0;border-bottom:1px solid #E2E8F0;font-size:13px;color:#64748B;">会社名</td>
              </tr>
              <tr>
                <td style="padding:8px 0 16px;font-size:14px;color:#1E293B;">${escapeHtml(companyName)}</td>
              </tr>
              <tr>
                <td style="padding:8px 0;border-top:1px solid #E2E8F0;border-bottom:1px solid #E2E8F0;font-size:13px;color:#64748B;">お問い合わせ内容</td>
              </tr>
              <tr>
                <td style="padding:8px 0 16px;font-size:14px;color:#1E293B;line-height:1.7;white-space:pre-wrap;">${escapeHtml(message)}</td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td style="padding:16px 32px 24px;border-top:1px solid #E2E8F0;">
            <p style="margin:0 0 4px;font-size:12px;color:#1E293B;font-weight:600;">株式会社メディカバイス</p>
            <p style="margin:0;font-size:11px;color:#94A3B8;">〒141-0031 東京都品川区西五反田5丁目23番3号 5階5D室</p>
            <p style="margin:0;font-size:11px;color:#94A3B8;">このメールは自動送信です。返信はお受けできません。</p>
          </td>
        </tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`

  try {
    // 社内通知メール
    await transporter.sendMail({
      from: `株式会社メディカバイス <${gmailUser}>`,
      to: recipients,
      replyTo: email,
      subject: `【お問い合わせ${inquiryType ? `／${safeHeader(inquiryType)}` : ''}】${safeHeader(companyName)} 様より`,
      html: notifyHtml,
    })

    // 問い合わせ者への自動返信
    await transporter.sendMail({
      from: `株式会社メディカバイス <${gmailUser}>`,
      to: email,
      subject: '【メディカバイス】お問い合わせを受け付けました',
      html: replyHtml,
    })

    return {
      success: true,
      code: 'success',
    }
  } catch (err) {
    console.error('[Nodemailer] 送信エラー:', err instanceof Error ? err.message : String(err))
    return {
      success: false,
      code: 'error',
    }
  }
}
