"use client"

/* New "Who We Are" section for home - brings visibility to company story */
import { Card, CardContent } from "@/components/ui/card"
import { useTheme } from "next-themes"
import { useState, useEffect } from "react"
import { useInView } from "@/hooks/use-in-view"
import { useCounter } from "@/hooks/use-counter"

export function AboutSection() {
  const { theme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const { ref, isInView } = useInView({ threshold: 0.3 })

  const yearsCount = useCounter(10, 2000, isInView)
  const projectsCount = useCounter(250, 2000, isInView)
  const clientsCount = useCounter(100, 2000, isInView)
  const engineersCount = useCounter(50, 2000, isInView)

  useEffect(() => {
    setMounted(true)
  }, [])

  const isDark = mounted && (theme === 'dark' || resolvedTheme === 'dark')
  const bgImage = isDark ? "/assets/images/rubi-bgalt-w.jpg" : "/assets/images/rubi-bgalt-b.jpg"

  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src={bgImage}
          alt="Background"
          className="w-full h-full object-cover object-bottom"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-6">Who We Are</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Rubicon is a LATAM-based, remote-first engineering company specializing in Blockchain, AI, and Full Stack product development. We've built our team around senior engineers who are passionate about cutting-edge technology.
              </p>
              <p>
                Our distributed model allows us to work with global clients across different time zones while maintaining the agility and culture of a tight-knit team.<br /><em className="font-bold">We believe in transparency, quality, and long-term partnerships.</em>
              </p>
              <p>
                From early-stage startups to Fortune 500 companies, we've helped teams ship products that matter—on time and to the highest standards.
              </p>
            </div>
          </div>

          <div ref={ref} className="grid grid-cols-2 gap-4">
            <Card className={`bg-card border-border hover:border-accent/50 transition-colors ${isInView ? 'animate-fade-up' : ''}`} style={{ animationDelay: '0ms' }}>
              <CardContent className="p-6 text-center">
                <p className="text-4xl font-bold text-accent mb-2">{yearsCount}+</p>
                <p className="text-sm text-muted-foreground">Years in Business</p>
              </CardContent>
            </Card>
            <Card className={`bg-card border-border hover:border-accent/50 transition-colors ${isInView ? 'animate-fade-up' : ''}`} style={{ animationDelay: '150ms' }}>
              <CardContent className="p-6 text-center">
                <p className="text-4xl font-bold text-accent mb-2">{projectsCount}+</p>
                <p className="text-sm text-muted-foreground">Projects Delivered</p>
              </CardContent>
            </Card>
            <Card className={`bg-card border-border hover:border-accent/50 transition-colors ${isInView ? 'animate-fade-up' : ''}`} style={{ animationDelay: '300ms' }}>
              <CardContent className="p-6 text-center">
                <p className="text-4xl font-bold text-accent mb-2">{clientsCount}+</p>
                <p className="text-sm text-muted-foreground">Clients</p>
              </CardContent>
            </Card>
            <Card className={`bg-card border-border hover:border-accent/50 transition-colors ${isInView ? 'animate-fade-up' : ''}`} style={{ animationDelay: '450ms' }}>
              <CardContent className="p-6 text-center">
                <p className="text-4xl font-bold text-accent mb-2">{engineersCount}+</p>
                <p className="text-sm text-muted-foreground">Senior Engineers</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
