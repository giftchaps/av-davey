import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Barlow, Barlow_Condensed } from 'next/font/google'
import { SiteFooter } from '@/components/site/site-footer'
import { SiteHeader } from '@/components/site/site-header'
import { TopBar } from '@/components/site/top-bar'
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
  metadataBase: new URL('https://avdavey.com'),
  title: {
    default: 'A/V DAVEY | Audio Visual Solutions That Just Work | Bridgeport, CT',
    template: '%s | A/V DAVEY',
  },
  description:
    "Connecticut's trusted AV partner since 1989. AV installation and systems integration, event production and staging, video production and streaming, service and equipment sales — based in Bridgeport, serving the Tri-State.",
  generator: 'v0.app',
  keywords: [
    'audio visual installation Connecticut',
    'AV integration Bridgeport CT',
    'event production Connecticut',
    'video conferencing installation',
    'live streaming Connecticut',
    'AV rental Fairfield County',
    'A/V DAVEY',
  ],
  openGraph: {
    type: 'website',
    siteName: 'A/V DAVEY',
    title: 'A/V DAVEY | Audio Visual Solutions That Just Work',
    description:
      'Professional AV installation, live event production and technical support. Quality equipment. Personal service. Guaranteed results.',
    locale: 'en_US',
  },
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
      <body className="min-h-dvh font-sans antialiased">
        <TopBar />
        <SiteHeader />
        {children}
        <SiteFooter />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
