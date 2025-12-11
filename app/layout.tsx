import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { BookingProvider } from "@/app/booking-context"
import { BookingModal } from "@/components/booking-modal"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Rubicon | Blockchain, AI & Product Engineering from LATAM",
  description:
    "Remote-first engineers building smart contracts, DeFi protocols, AI systems, and modern web apps for global companies. Trusted by Microsoft, OpenZeppelin, and more.",
  keywords: [
    "blockchain development",
    "AI engineering",
    "full-stack development",
    "LATAM tech",
    "smart contracts",
    "DeFi",
    "remote engineering teams",
  ],
    generator: 'v0.app'
}

export const viewport = {
  themeColor: "#1a1a2e",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <BookingProvider>
          {children}
          <BookingModal />
        </BookingProvider>
        <Analytics />
      </body>
    </html>
  )
}
