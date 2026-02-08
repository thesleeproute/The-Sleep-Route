import React from "react"
import type { Metadata, Viewport } from 'next'
import { Lora, DM_Sans } from 'next/font/google'

import './globals.css'

const lora = Lora({
  subsets: ['latin'],
  variable: '--font-lora',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'The Sleep Route | Gentle, Nurse-Led Sleep Support',
  description:
    'Personalised sleep plans for babies and toddlers, rooted in safety, development, and evidence-based care. Nurse-led holistic sleep consultancy.',
}

export const viewport: Viewport = {
  themeColor: '#F5EFE9',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${lora.variable} ${dmSans.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
