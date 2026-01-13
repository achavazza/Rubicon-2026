"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useBooking } from "@/app/booking-context"
import { useTheme } from "next-themes"
import { useEffect, useState, useRef } from "react"
import { HeroPartners } from "./hero-partners"

function TerminalLine({
  text,
  delay = 0,
  onComplete,
  showCursor = false,
}: {
  text: string
  delay?: number
  onComplete?: () => void
  showCursor?: boolean
}) {
  const [displayedText, setDisplayedText] = useState("")
  const [started, setStarted] = useState(false)
  const [completed, setCompleted] = useState(false)

  // Use a ref for onComplete to avoid restarting the effect when the parent re-renders
  const onCompleteRef = useRef(onComplete)
  useEffect(() => {
    onCompleteRef.current = onComplete
  }, [onComplete])

  useEffect(() => {
    const startTimeout = setTimeout(() => {
      setStarted(true)
    }, delay)
    return () => clearTimeout(startTimeout)
  }, [delay])

  useEffect(() => {
    if (!started || completed) return

    let currentIndex = 0
    const interval = setInterval(() => {
      if (currentIndex < text.length) {
        setDisplayedText(text.slice(0, currentIndex + 1))
        currentIndex++
      } else {
        clearInterval(interval)
        setCompleted(true)
        onCompleteRef.current?.()
      }
    }, 50 + Math.random() * 30) // Random typing speed

    return () => clearInterval(interval)
  }, [started, text, completed])

  return (
    <div className="flex items-center gap-2 h-6">
      <span className="text-accent flex-shrink-0">$</span>
      <span className={`text-muted-foreground ${completed && !showCursor ? "opacity-100" : ""}`}>
        {displayedText}
      </span>
      {completed && !showCursor && <span className="text-green-500 flex-shrink-0">✓</span>}
      {(!completed || showCursor) && (
        <span className="animate-pulse text-accent">▊</span>
      )}
    </div>
  )
}

export function HeroSection() {
  const { openBooking } = useBooking()
  const [step, setStep] = useState(0)
  const { theme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Light theme uses "rubicon-bg-b", Dark theme uses "rubicon-bg-w"
  const videoName = (mounted && (theme === 'dark' || resolvedTheme === 'dark'))
    ? "rubicon-bg-w"
    : "rubicon-bg-b"

  return (
    <section className="relative pt-48 pb-48 md:pt-60 md:pb-60 overflow-hidden min-h-[90vh] flex flex-col justify-center">
      {/* Helper for video background */}
      <div className="absolute inset-0 -z-10 "></div>
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 -z-20 w-full h-full object-cover"
        key={videoName} // key ensures video reloads when theme changes
      >
        <source src={`/assets/videos/${videoName}.webm`} type="video/webm" />
        <source src={`/assets/videos/${videoName}.mp4`} type="video/mp4" />
      </video>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground text-balance">
              {["Blockchain,", "AI", "&", "Full", "Stack", "Product", "Teams", "from", "LATAM"].map((word, index) => (
                <span
                  key={index}
                  className="inline-block animate-fade-up-word mr-2"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {word}
                </span>
              ))}
            </h1>
            <div className="mt-6 text-lg text-foreground max-w-xl leading-relaxed md:mr-30">
              <p
                className="mb-5 animate-fade-up"
                style={{ animationDelay: "1000ms", animationFillMode: "both" }}
              >
                Remote-first engineers building modern <b>Web & Mobile apps, AI Systems and Blockchain Solutions</b>.
              </p>
              <p
                className="animate-fade-up"
                style={{ animationDelay: "1150ms", animationFillMode: "both" }}
              >
                Access <b>+3,000</b> time-zone aligned software engineers with experience in <b>+100 technologies</b>.
              </p>
            </div>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button size="lg" onClick={openBooking} className="hover:bg-white hover:text-black dark:hover:bg-black dark:hover:text-white transition-colors duration-200">
                Talk to our team
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="ghost" size="lg" asChild className="hover:bg-white hover:text-black dark:hover:bg-black dark:hover:text-white transition-colors duration-200">
                <Link href="#clients">View our work</Link>
              </Button>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="relative">
              <div className="absolute inset-0 bg-accent/10 rounded-2xl blur-3xl" />
              <div className="relative bg-card border border-border rounded-2xl p-6">
                <div className="space-y-3">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="h-3 w-3 rounded-full bg-red-500" />
                    <div className="h-3 w-3 rounded-full bg-yellow-500" />
                    <div className="h-3 w-3 rounded-full bg-green-500" />
                    <span className="ml-2 text-xs text-muted-foreground font-mono">rubicon-terminal</span>
                  </div>

                  <div className="space-y-2 font-mono text-xs md:text-sm min-h-[100px]">
                    <TerminalLine text="deploying smart-contract..." delay={0} onComplete={() => setStep(1)} />
                    {step >= 1 && (
                      <TerminalLine
                        text="training ai-model..."
                        delay={500}
                        onComplete={() => setStep(2)}
                      />
                    )}
                    {step >= 2 && (
                      <TerminalLine
                        text="building web-app..."
                        delay={500}
                        onComplete={() => setStep(3)}
                      />
                    )}
                    {step >= 3 && (
                      <TerminalLine
                        text="shipping to production"
                        delay={500}
                        showCursor={true}
                      />
                    )}
                  </div>

                  <div className="pt-3 mt-3 border-t border-border">
                    <div className="flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2">
                        <div className={`h-2 w-2 rounded-full bg-green-500 ${step >= 3 ? "animate-pulse" : "opacity-50"}`} />
                        <span className="text-muted-foreground">
                          {step >= 3 ? "All systems operational" : "Initializing..."}
                        </span>
                      </div>
                      <span className="text-muted-foreground">LATAM → Global</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <HeroPartners className="absolute bottom-0 left-0 right-0" />
    </section>
  )
}
