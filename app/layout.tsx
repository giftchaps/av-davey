import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Barlow, Barlow_Condensed } from 'next/font/google'
import './globals.css'

const barlow = Barlow({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-barlow',
})

const barlowCondensed = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['600', '700', '800'],
  variable: '--font-barlow-condensed',
})

export const metadata: Metadata = {
  title: 'A/V DAVEY | Audio Visual Solutions That Just Work | Bridgeport, CT',
  description:
    "Connecticut's trusted AV partner since 1989. Professional AV installation, live event production and technical support serving Bridgeport, Connecticut and the greater Tri-State region.",
  generator: 'v0.app',
  keywords: [
    'audio visual',
    'AV installation',
    'live event production',
    'Bridgeport CT',
    'Connecticut AV company',
  ],
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#0b1f5c',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${barlow.variable} ${barlowCondensed.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
