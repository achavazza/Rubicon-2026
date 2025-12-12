import { Check } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const differentiators = [
  "Years of experience shipping Web2, Web3 & AI products",
  "LATAM-based remote-first teams aligned with US & EU",
  "+2000 Engineers in our database ready to join your project",
  "Senior blockchain & AI experts leading development",
]

export function WhyRubiconSection() {
  return (
    <section className="py-20 md:py-32 bg-[var(--alt-background)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Why teams choose Rubicon</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {differentiators.map((item, index) => (
            <Card
              key={index}
              className="bg-card border-border  hover:border-accent/50 transition-colors"
            >
              <CardContent className="pt-8 pb-8">
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-lg bg-accent/20 flex items-center justify-center shrink-0">
                    <Check className="h-5 w-5 text-accent" />
                  </div>
                  <p className="text-base text-foreground leading-relaxed font-medium">{item}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
