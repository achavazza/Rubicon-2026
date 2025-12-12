import type React from "react"
import type { Metadata } from "next"
import { DM_Sans } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { BookingProvider } from "@/app/booking-context"
import { BookingModal } from "@/components/booking-modal"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
})

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
    <html lang="en" suppressHydrationWarning>
      <body className={`${dmSans.variable} font-sans antialiased`} suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          storageKey="rubicon-theme"
        >
          <BookingProvider>
            {children}
            <BookingModal />
          </BookingProvider>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
