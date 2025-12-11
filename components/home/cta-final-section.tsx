"use client"

import { useBooking } from "@/app/booking-context"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTAFinalSection() {
  const { openBooking } = useBooking()

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-[#0a0e18] to-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
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
