import type { Metadata } from 'next'
import './globals.css'

const siteName = 'Ethan Zhao'
const description =
  "Hey there, I'm Ethan! I love designing and building things. Welcome to my homepage!"

export const metadata: Metadata = {
  metadataBase: new URL('https://ethanxyzhao.com'),
  title: {
    default: siteName,
    template: `%s | ${siteName}`,
  },
  description,
  keywords: [
    'Ethan Zhao',
    'software engineer',
    'product manager',
    'Wharton School',
    'University of Pennsylvania',
    'Pika',
    'Splunk',
    'WatchCharts',
    'computer science',
    'operations information decisions',
  ],
  authors: [{ name: siteName, url: 'https://ethanxyzhao.com' }],
  creator: siteName,
  publisher: siteName,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ethanxyzhao.com',
    siteName,
    title: siteName,
    description,
    images: [
      {
        url: '/sun.svg',
        width: 80,
        height: 80,
        alt: 'Ethan Zhao - Sun Icon',
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: siteName,
    description,
    images: ['/sun.svg'],
    creator: '@ethanxyzhao',
  },
  icons: {
    icon: '/sun.svg',
    shortcut: '/sun.svg',
    apple: '/sun.png',
  },
  manifest: '/manifest.json',
  other: {
    'theme-color': '#8794e2',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  )
}
