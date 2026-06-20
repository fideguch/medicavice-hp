'use client'

import { useActionState, useEffect, useMemo, useState } from 'react'
import { submitContact, type ContactFormState } from '@/app/actions/contact'
import { validateContactForm } from '@/lib/validation'
import { useLocale } from '@/lib/i18n'
import { CheckCircle, AlertCircle, X } from 'lucide-react'

const initialState: ContactFormState = { success: false, code: 'idle' }

export default function ContactForm() {
  const { t, locale } = useLocale()
  const f = t.contact.form
  const v = t.validation

  const [state, formAction, isPending] = useActionState(submitContact, initialState)
  const [showToast, setShowToast] = useState(false)

  const [fields, setFields] = useState({ companyName: '', email: '', message: '' })
  const [touched, setTouched] = useState({ companyName: false, email: false, message: false })

  const clientErrors = useMemo(() => validateContactForm(fields), [fields])

  useEffect(() => {
    if (state.code !== 'idle') {
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

  const handleBlur = (field: keyof typeof touched) => setTouched((prev) => ({ ...prev, [field]: true }))
  const handleChange = (field: keyof typeof fields, value: string) => setFields((prev) => ({ ...prev, [field]: value }))

  const getError = (field: keyof typeof fields): string | null => {
    const code = (touched[field] && clientErrors[field]) || state.fieldErrors?.[field]
    return code ? v[code] : null
  }

  const fieldClass = (field: keyof typeof fields) => `field ${getError(field) ? 'field-error' : ''}`

  const toastText =
    state.code === 'success' ? f.toastSuccess
      : state.code === 'validation' ? f.toastValidationError
        : state.code === 'config' ? f.toastConfigError
          : state.code === 'error' ? f.toastSendError
            : ''

  const labelStyle = { color: 'var(--color-text)' }
  const reqStyle = { color: 'var(--color-text-muted)' }

  return (
    <div className="relative">
      {showToast && (
        <div
          aria-live="polite"
          role="status"
          className="fixed top-20 right-4 left-4 sm:left-auto z-50 flex items-start gap-3 max-w-sm w-auto sm:w-full p-4 rounded-lg text-sm"
          style={{ backgroundColor: 'var(--color-surface-3)', border: `1px solid ${state.success ? 'var(--color-accent-text)' : 'var(--color-error)'}`, color: 'var(--color-text)' }}
        >
          {state.success ? (
            <CheckCircle size={18} aria-hidden="true" className="shrink-0 mt-0.5" style={{ color: 'var(--color-accent-text)' }} />
          ) : (
            <AlertCircle size={18} aria-hidden="true" className="shrink-0 mt-0.5" style={{ color: 'var(--color-error)' }} />
          )}
          <p className="flex-1 leading-snug">{toastText}</p>
          <button
            onClick={() => setShowToast(false)}
            className="shrink-0 -my-2 -mr-2 min-w-[44px] min-h-[44px] flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity focus-ring"
            aria-label={t.ui.closeToast}
            style={{ touchAction: 'manipulation', color: 'var(--color-text-muted)' }}
          >
            <X size={16} aria-hidden="true" />
          </button>
        </div>
      )}

      <form action={formAction} className="flex flex-col gap-6">
        {/* Company Name */}
        <div>
          <label htmlFor="companyName" className="block text-sm font-medium mb-2" style={labelStyle}>
            {f.companyLabel}<span className="font-normal ml-1" style={reqStyle}>{f.required}</span>
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
            placeholder={f.companyPlaceholder}
            aria-describedby={getError('companyName') ? 'companyName-error' : undefined}
            aria-invalid={!!getError('companyName')}
            className={fieldClass('companyName')}
          />
          {getError('companyName') && (
            <p id="companyName-error" className="mt-1.5 text-xs" role="alert" style={{ color: 'var(--color-error)' }}>{getError('companyName')}</p>
          )}
        </div>

        {/* Inquiry type */}
        <div>
          <label htmlFor="inquiryType" className="block text-sm font-medium mb-2" style={labelStyle}>
            {f.inquiryTypeLabel}<span className="font-normal ml-1" style={reqStyle}>{f.optional}</span>
          </label>
          <select id="inquiryType" name="inquiryType" defaultValue="" className="field">
            <option value="">{f.inquiryTypePlaceholder}</option>
            {f.inquiryTypes.map((opt) => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2" style={labelStyle}>
            {f.emailLabel}<span className="font-normal ml-1" style={reqStyle}>{f.required}</span>
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
            placeholder={f.emailPlaceholder}
            aria-describedby={getError('email') ? 'email-error' : undefined}
            aria-invalid={!!getError('email')}
            className={fieldClass('email')}
          />
          {getError('email') && (
            <p id="email-error" className="mt-1.5 text-xs" role="alert" style={{ color: 'var(--color-error)' }}>{getError('email')}</p>
          )}
        </div>

        {/* Message */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <label htmlFor="message" className="block text-sm font-medium" style={labelStyle}>
              {f.messageLabel}<span className="font-normal ml-1" style={reqStyle}>{f.required}</span>
            </label>
            <span className="mono text-xs" aria-live="polite" style={{ color: fields.message.length > 10000 ? 'var(--color-error)' : 'var(--color-text-dim)' }}>
              {new Intl.NumberFormat(locale).format(fields.message.length)} {f.messageCounterSuffix}
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
            placeholder={f.messagePlaceholder}
            aria-describedby={getError('message') ? 'message-error' : undefined}
            aria-invalid={!!getError('message')}
            className={fieldClass('message')}
          />
          {getError('message') && (
            <p id="message-error" className="mt-1.5 text-xs" role="alert" style={{ color: 'var(--color-error)' }}>{getError('message')}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={isPending}
          style={{ touchAction: 'manipulation' }}
          className="btn btn-accent focus-ring w-full md:w-auto md:px-12 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {isPending ? f.submitting : f.submit}
        </button>
      </form>
    </div>
  )
}
