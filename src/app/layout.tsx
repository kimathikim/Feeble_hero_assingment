import type { Metadata } from 'next'
import './globals.css'

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
      <body className="bg-[rgba(190,219,242,0.95)]">{children}</body>
    </html>
  )
}

