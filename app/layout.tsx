import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: {
    default: 'Ethan Zhao',
    template: '%s | Ethan Zhao',
  },
  description:
    "Hey there, I'm Ethan! I love designing and building things. Welcome to my homepage!",
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
  authors: [{ name: 'Ethan Zhao', url: 'https://ethanxyzhao.com' }],
  creator: 'Ethan Zhao',
  publisher: 'Ethan Zhao',
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
    siteName: 'Ethan Zhao',
    title: 'Ethan Zhao',
    description:
      "Hey there, I'm Ethan! I love designing and building things. Welcome to my homepage!",
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
    title: 'Ethan Zhao',
    description:
      "Hey there, I'm Ethan! I love designing and building things. Welcome to my homepage!",
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
