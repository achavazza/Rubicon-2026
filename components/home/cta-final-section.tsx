"use client"

import { useBooking } from "@/app/booking-context"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useTheme } from "next-themes"
import { useState, useEffect } from "react"

export function CTAFinalSection() {
  const { openBooking } = useBooking()
  const { theme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const isDark = mounted && (theme === 'dark' || resolvedTheme === 'dark')
  const bgImage = isDark ? "/assets/images/rubi-bg.jpg" : "/assets/images/rubi-bg.jpg"

  // Gradient logic:
  // Light: #f0f0f0 (100% -> 0%)
  // Dark: #0f1426 (100% -> 0%)
  // We'll use a linear gradient from top (solid) to bottom (transparent) to reveal the image at the bottom.
  // Tailwind 'from' is top, 'to' is bottom by default for bg-gradient-to-b.
  // We need specific colors.

  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={bgImage}
          alt="Background"
          className="w-full h-full object-cover object-bottom"
        />
      </div>

      {/* Gradient Overlay */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background: isDark
            ? 'linear-gradient(to bottom, #12182d 0%, rgba(15, 20, 38, 0) 100%)'
            : 'linear-gradient(to bottom, #f0f0f0 0%, rgba(255, 255, 255, 0) 100%)'
        }}
      />

      <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
          Ready to ship your next project?
        </h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          Let's talk about your blockchain, AI, or full-stack product initiative. Our technical team is ready to discuss
          your vision and propose a partnership.
        </p>
        <Button size="lg" onClick={openBooking} className="bg-[#C91CD9] hover:bg-[#A01AB0] text-white">
          Talk to our team
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </section>
  )
}
