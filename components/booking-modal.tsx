"use client"

import { useEffect } from "react"
import { X } from "lucide-react"
import { useBooking } from "@/app/booking-context"

declare global {
  interface Window {
    Calendly?: {
      initInlineWidgets: () => void
    }
  }
}

export function BookingModal() {
  const { isOpen, closeBooking } = useBooking()

  useEffect(() => {
    if (isOpen && typeof window !== "undefined") {
      if (!document.querySelector('script[src*="calendly"]')) {
        const script = document.createElement("script")
        script.src = "https://assets.calendly.com/assets/external/widget.js"
        script.async = true
        document.body.appendChild(script)
      }

      const timer = setTimeout(() => {
        if (window.Calendly?.initInlineWidgets) {
          window.Calendly.initInlineWidgets()
        }
      }, 100)

      return () => clearTimeout(timer)
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-[#0a0e18] rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden border border-[#E5E7EB]/10 shadow-2xl">
        {/* Modal header */}
        <div className="flex items-center justify-between p-6 border-b border-[#E5E7EB]/10">
          <h2 className="text-xl font-bold text-white">Schedule a technical introduction</h2>
          <button
            onClick={closeBooking}
            className="text-[#6B7280] hover:text-white transition-colors"
            aria-label="Close modal"
          >
            <X size={24} />
          </button>
        </div>

        {/* Modal body with Calendly */}
        <div className="overflow-y-auto max-h-[calc(90vh-80px)]">
          <div
            className="calendly-inline-widget"
            data-url="https://calendly.com/dhsierra/introduction-to-rubicon?primary_color=c91cd9"
            style={{
              minWidth: "100%",
              height: "650px",
            }}
          />
        </div>
      </div>
    </div>
  )
}
