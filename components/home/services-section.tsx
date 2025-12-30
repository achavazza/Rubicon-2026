"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Blocks, Brain, Code2 } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"

const services = [
  {
    icon: Blocks,
    title: "Blockchain Engineering",
    items: [
      "Smart contract development (EVM & beyond)",
      "DeFi protocols, NFTs, infrastructure",
      "Web dApps with great frontends",
    ],
  },
  {
    icon: Brain,
    title: "AI Systems & Automation",
    items: [
      "LLM copilots, multi-agent systems",
      "Workflow automation & API integrations",
      "AI-enhanced digital products",
    ],
  },
  {
    icon: Code2,
    title: "Full-stack Product Development",
    items: [
      "Web & mobile apps, APIs, backends",
      "Integration with blockchain & AI layers",
      "End-to-end product delivery",
    ],
  },
]

export function ServicesSection() {
  const { ref, isInView } = useInView({ threshold: 0.2 })

  return (
    <section className="py-10 md:py-10 bg-[var(--alt-background)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">What We Build</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            From on-chain protocols to AI systems and full-stack products.
          </p>
        </div>

        <div ref={ref} className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className={`bg-card border-border hover:border-accent/50 transition-colors ${isInView ? 'animate-fade-up' : ''}`} style={{ animationDelay: `${index * 150}ms` }}>
              <CardHeader>
                <div className="h-16 w-16 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <service.icon className="h-10 w-10 text-accent" strokeWidth={1.5} />
                </div>
                <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {service.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-3">
                      <div className="h-1.5 w-1.5 rounded-full bg-accent mt-2 shrink-0" />
                      <span className="text-muted-foreground text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
