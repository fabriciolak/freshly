import type { Metadata } from 'next'
import { inter } from '@/fonts'
import './globals.css'

export const metadata: Metadata = {
  title: {
    template: '%s | Freshly',
    default: 'Freshly' 
  },
  description: 'Simple recipe website for the modern web',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
