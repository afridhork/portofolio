import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import ClientLayout from '@/components/ClientLayout/page'
import { userAgent } from "next/server";
import { headers } from "next/headers";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AfridhoRK Portofolio',
  description: 'Portofolio website',
}

const { device } = userAgent({ headers: headers() });
const deviceType = device?.type === "mobile" ? "mobile" : "desktop"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClientLayout device={deviceType}>{children}</ClientLayout>
      </body>
    </html>
  )
}
