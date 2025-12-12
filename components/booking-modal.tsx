"use client"

import { X } from "lucide-react"
import { useBooking } from "@/app/booking-context"

export function BookingModal() {
  const { isOpen, closeBooking } = useBooking()

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-background rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden border border-border shadow-2xl">
        {/* Modal header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <h2 className="text-xl font-bold text-foreground">Schedule a technical introduction</h2>
          <button
            onClick={closeBooking}
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Close modal"
          >
            <X size={24} />
          </button>
        </div>

        {/* Modal body with Calendly Iframe */}
        <div className="overflow-y-auto max-h-[calc(90vh-80px)]">
          <iframe
            src="https://calendly.com/dhsierra/introduction-to-rubicon?primary_color=c91cd9"
            width="100%"
            height="650"
            frameBorder="0"
            title="Select a Date & Time - Calendly"
          ></iframe>
        </div>
      </div>
    </div>
  )
}
