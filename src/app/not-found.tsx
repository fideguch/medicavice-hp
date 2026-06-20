import type { Metadata } from 'next'
import NotFoundView from '@/components/ui/NotFoundView'

export const metadata: Metadata = {
  title: 'ページが見つかりません / Page not found',
}

export default function NotFound() {
  return <NotFoundView />
}
