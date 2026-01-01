import type { Metadata } from 'next'
import './globals.css'
import { colors } from '@/constants/colors'

export const metadata: Metadata = {
  title: 'Hero Section',
  description: 'Hero section page',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body style={{ backgroundColor: colors.layout.body }}>{children}</body>
    </html>
  )
}

