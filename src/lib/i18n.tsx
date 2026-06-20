'use client'

import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'
import { dict, type Dict, type Locale } from '@/lib/dict'

interface Ctx {
  locale: Locale
  t: Dict
  setLocale: (l: Locale) => void
  toggle: () => void
}

const LocaleContext = createContext<Ctx | null>(null)

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('ja')

  useEffect(() => {
    document.documentElement.classList.add('js')
    try {
      const stored = localStorage.getItem('locale')
      if (stored === 'en' || stored === 'ja') {
        setLocaleState(stored)
        document.documentElement.lang = stored
      }
    } catch {
      /* ignore */
    }
  }, [])

  const setLocale = (l: Locale) => {
    setLocaleState(l)
    try {
      localStorage.setItem('locale', l)
    } catch {
      /* ignore */
    }
    document.documentElement.lang = l
  }

  const toggle = () => setLocale(locale === 'ja' ? 'en' : 'ja')

  return (
    <LocaleContext.Provider value={{ locale, t: dict[locale], setLocale, toggle }}>
      {children}
    </LocaleContext.Provider>
  )
}

export function useLocale(): Ctx {
  const ctx = useContext(LocaleContext)
  if (!ctx) throw new Error('useLocale must be used within LocaleProvider')
  return ctx
}
