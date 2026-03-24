'use client'

import { useActionState, useEffect, useMemo, useState } from 'react'
import { submitContact, ContactFormState } from '@/app/actions/contact'
import { validateContactForm } from '@/lib/validation'
import { CheckCircle, AlertCircle, X } from 'lucide-react'

const initialState: ContactFormState = {
  success: false,
  message: '',
}

export default function ContactForm() {
  const [state, formAction, isPending] = useActionState(submitContact, initialState)
  const [showToast, setShowToast] = useState(false)

  const [fields, setFields] = useState({
    companyName: '',
    email: '',
    message: '',
  })
  const [touched, setTouched] = useState({
    companyName: false,
    email: false,
    message: false,
  })

  // フィールド変化時のみ再計算（毎レンダー実行を防ぐ）
  const clientErrors = useMemo(
    () => validateContactForm(fields),
    [fields.companyName, fields.email, fields.message]
  )

  useEffect(() => {
    if (state.message) {
      setShowToast(true)
      if (state.success) {
        setFields({ companyName: '', email: '', message: '' })
        setTouched({ companyName: false, email: false, message: false })
      }
      const timer = setTimeout(() => setShowToast(false), 6000)
      return () => clearTimeout(timer)
    }
  }, [state])

  useEffect(() => {
    if (state.fieldErrors) {
      const order = ['companyName', 'email', 'message'] as const
      for (const field of order) {
        if (state.fieldErrors[field]) {
          document.getElementById(field)?.focus()
          break
        }
      }
    }
  }, [state.fieldErrors])

  const handleBlur = (field: keyof typeof touched) => {
    setTouched((prev) => ({ ...prev, [field]: true }))
  }

  const handleChange = (field: keyof typeof fields, value: string) => {
    setFields((prev) => ({ ...prev, [field]: value }))
  }

  const getError = (field: keyof typeof fields) => {
    if (touched[field] && clientErrors[field]) return clientErrors[field]
    if (state.fieldErrors?.[field]) return state.fieldErrors[field]
    return null
  }

  const inputBase = 'w-full min-h-[44px] px-4 py-3 text-sm bg-white border transition-colors focus-visible:outline-none focus-visible:ring-2'
  const inputStyle = { color: '#1E293B' }

  return (
    <div className="relative">
      {/* Toast Notification */}
      {showToast && (
        <div
          aria-live="polite"
          role="status"
          className={`fixed top-24 right-4 left-4 sm:left-auto z-50 flex items-start gap-3 max-w-sm w-auto sm:w-full p-4 shadow-lg text-sm ${
            state.success
              ? 'bg-[#0F172A] text-white'
              : 'bg-red-50 text-red-800 border border-red-200'
          }`}
        >
          {state.success ? (
            <CheckCircle size={18} aria-hidden="true" className="shrink-0 mt-0.5 text-white/80" />
          ) : (
            <AlertCircle size={18} aria-hidden="true" className="shrink-0 mt-0.5 text-red-600" />
          )}
          <p className="flex-1 leading-snug">{state.message}</p>
          <button
            onClick={() => setShowToast(false)}
            className="shrink-0 opacity-70 hover:opacity-100 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-current"
            aria-label="閉じる"
            style={{ touchAction: 'manipulation' }}
          >
            <X size={16} aria-hidden="true" />
          </button>
        </div>
      )}

      <form action={formAction} className="flex flex-col gap-6">
        {/* Company Name */}
        <div>
          <label htmlFor="companyName" className="block text-sm font-medium mb-2" style={{ color: '#1E293B' }}>
            会社名<span className="font-normal ml-1" style={{ color: '#64748B' }}>（必須）</span>
          </label>
          <input
            id="companyName"
            name="companyName"
            type="text"
            autoComplete="organization"
            value={fields.companyName}
            onChange={(e) => handleChange('companyName', e.target.value)}
            onBlur={() => handleBlur('companyName')}
            maxLength={101}
            placeholder="株式会社〇〇…"
            aria-describedby={getError('companyName') ? 'companyName-error' : undefined}
            aria-invalid={!!getError('companyName')}
            style={inputStyle}
            className={`${inputBase} ${
              getError('companyName')
                ? 'border-red-400 focus-visible:ring-red-300'
                : 'border-slate-200 hover:border-slate-300 focus-visible:ring-slate-300'
            }`}
          />
          {getError('companyName') && (
            <p id="companyName-error" className="mt-1.5 text-xs text-red-600" role="alert">
              {getError('companyName')}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2" style={{ color: '#1E293B' }}>
            メールアドレス<span className="font-normal ml-1" style={{ color: '#64748B' }}>（必須）</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            inputMode="email"
            autoComplete="email"
            spellCheck={false}
            value={fields.email}
            onChange={(e) => handleChange('email', e.target.value)}
            onBlur={() => handleBlur('email')}
            placeholder="example@company.com…"
            aria-describedby={getError('email') ? 'email-error' : undefined}
            aria-invalid={!!getError('email')}
            style={inputStyle}
            className={`${inputBase} ${
              getError('email')
                ? 'border-red-400 focus-visible:ring-red-300'
                : 'border-slate-200 hover:border-slate-300 focus-visible:ring-slate-300'
            }`}
          />
          {getError('email') && (
            <p id="email-error" className="mt-1.5 text-xs text-red-600" role="alert">
              {getError('email')}
            </p>
          )}
        </div>

        {/* Message */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <label htmlFor="message" className="block text-sm font-medium" style={{ color: '#1E293B' }}>
              お問い合わせ内容<span className="font-normal ml-1" style={{ color: '#64748B' }}>（必須）</span>
            </label>
            <span
              className="text-xs"
              aria-live="polite"
              style={{ color: fields.message.length > 10000 ? '#DC2626' : '#64748B' }}
            >
              {new Intl.NumberFormat('ja-JP').format(fields.message.length)} / 10,000文字
            </span>
          </div>
          <textarea
            id="message"
            name="message"
            rows={8}
            autoComplete="off"
            value={fields.message}
            onChange={(e) => handleChange('message', e.target.value)}
            onBlur={() => handleBlur('message')}
            maxLength={10001}
            placeholder="ご相談内容をご記入ください…"
            aria-describedby={getError('message') ? 'message-error' : undefined}
            aria-invalid={!!getError('message')}
            style={inputStyle}
            className={`w-full px-4 py-3 text-sm bg-white border transition-colors resize-y focus-visible:outline-none focus-visible:ring-2 ${
              getError('message')
                ? 'border-red-400 focus-visible:ring-red-300'
                : 'border-slate-200 hover:border-slate-300 focus-visible:ring-slate-300'
            }`}
          />
          {getError('message') && (
            <p id="message-error" className="mt-1.5 text-xs text-red-600" role="alert">
              {getError('message')}
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={isPending}
          style={{ touchAction: 'manipulation' }}
          className="min-h-[52px] w-full md:w-auto md:px-12 flex items-center justify-center bg-[#0F172A] text-white text-sm font-medium hover:bg-[#1E293B] disabled:opacity-70 disabled:cursor-not-allowed transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#1E293B]"
        >
          {isPending ? '送信中…' : '送信する'}
        </button>
      </form>
    </div>
  )
}
