import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import ClientLayout from '../components/ClientLayout/page'
import { userAgent } from "next/server";
import { headers } from "next/headers";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://afridhork.com'),
  title: 'AfridhoRK Portofolio | Software Engineer & Front End Developer',
  description: 'Portofolio website of Afridho R Kartawiria, a Software Engineer and Front End Developer specializing in React, Next.js, and modern web technologies.',
  keywords: ['Afridho R Kartawiria', 'Portofolio', 'Software Engineer', 'Front End Developer', 'React', 'Next.js', 'Web Development'],
  authors: [{ name: 'Afridho R Kartawiria' }],
  openGraph: {
    title: 'AfridhoRK Portofolio',
    description: 'Software Engineer & Front End Developer Portofolio',
    url: 'https://afridhork.com',
    siteName: 'AfridhoRK Portofolio',
    images: [
      {
        url: '/vercel.svg',
        width: 800,
        height: 600,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AfridhoRK Portofolio',
    description: 'Software Engineer & Front End Developer Portofolio',
    images: ['/vercel.svg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { device } = userAgent({ headers: headers() });
  const deviceType = device?.type === "mobile" ? "mobile" : "desktop"
  
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClientLayout device={deviceType}>{children}</ClientLayout>
      </body>
    </html>
  )
}
