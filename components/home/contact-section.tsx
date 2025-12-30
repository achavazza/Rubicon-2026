"use client"

import { useState } from "react"

import type React from "react"
import { useEffect } from "react"

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    // Load Calendly script
    const script = document.createElement("script")
    script.src = "https://assets.calendly.com/assets/external/widget.js"
    script.async = true
    document.body.appendChild(script)
  }, [])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsSubmitting(false)
    setSubmitted(true)
  }

  return (
    <section id="contact" className="py-20 md:py-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Ready to Ship Your Next Blockchain, AI or Product Initiative?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Schedule a technical introduction with our team. No commitment required.
          </p>
        </div>

        {/* Calendly Inline Widget */}
        <div className="rounded-2xl overflow-hidden border border-border bg-card">
          <div
            className="calendly-inline-widget"
            data-url="https://calendly.com/dhsierra/introduction-to-rubicon?primary_color=c91cd9"
            style={{
              minWidth: "320px",
              height: "700px",
            }}
          />
        </div>
      </div>
    </section>
  )
}
