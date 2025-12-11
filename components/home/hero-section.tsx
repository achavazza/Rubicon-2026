"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useBooking } from "@/app/booking-context"

export function HeroSection() {
  const { openBooking } = useBooking()

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground text-balance">
              Blockchain, AI & Full Stack Product Teams from LATAM
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
              Remote-first engineers building modern web & mobile apps, AI systems, and blockchain solutions for
              companies like Microsoft, OpenZeppelin, Superare, and Sitickets.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button size="lg" onClick={openBooking}>
                Talk to our team
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg" asChild>
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

                  <div className="space-y-2 font-mono text-xs md:text-sm">
                    <div className="flex items-center gap-2">
                      <span className="text-accent">$</span>
                      <span className="text-muted-foreground">deploying smart-contract...</span>
                      <span className="text-green-500">✓</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-accent">$</span>
                      <span className="text-muted-foreground">training ai-model...</span>
                      <span className="text-green-500">✓</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-accent">$</span>
                      <span className="text-muted-foreground">building web-app...</span>
                      <span className="text-green-500">✓</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-accent">$</span>
                      <span className="text-foreground">shipping to production</span>
                      <span className="animate-pulse">▊</span>
                    </div>
                  </div>

                  <div className="pt-3 mt-3 border-t border-border">
                    <div className="flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                        <span className="text-muted-foreground">All systems operational</span>
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
    </section>
  )
}
