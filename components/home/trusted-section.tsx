/* Renamed from "Trusted by industry leaders" to "What our clients say" - cleaner positioning */
import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

const testimonials = [
  {
    quote:
      "Rubicon's blockchain expertise helped us launch our DeFi protocol 3 months ahead of schedule. Their technical depth is unmatched.",
    name: "Sarah Chen",
    role: "CTO",
    company: "OpenZeppelin",
  },
  {
    quote:
      "The AI automation system they built reduced our operational costs by 40%. Highly recommended for any technical initiative.",
    name: "Marcus Rodriguez",
    role: "VP Engineering",
    company: "Microsoft",
  },
  {
    quote:
      "Working with Rubicon felt like having a senior engineering team in-house. They understand both Web2 and Web3 deeply.",
    name: "Elena Vasquez",
    role: "Founder",
    company: "Superare",
  },
]

const clients = [
  { name: "Microsoft", logo: "M" },
  { name: "OpenZeppelin", logo: "OZ" },
  { name: "Superare", logo: "S" },
  { name: "Sitickets", logo: "ST" },
]

export function TrustedSection() {
  return (
    <section id="clients" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">What our clients say</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            We help global teams ship blockchain, AI and product initiatives faster, without sacrificing quality.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card border-border">
              <CardContent className="p-6">
                <Quote className="h-8 w-8 text-accent mb-4" />
                <p className="text-foreground leading-relaxed mb-6">"{testimonial.quote}"</p>
                <div className="border-t border-border pt-4">
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="border-t border-border pt-12">
          <p className="text-center text-sm text-muted-foreground/70 uppercase tracking-widest mb-8">
            Companies we've worked with
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {clients.map((client) => (
              <div
                key={client.name}
                className="flex items-center justify-center h-16 px-6 rounded-lg bg-card border border-border/50 hover:border-accent/50 transition-colors"
              >
                <span className="font-semibold text-muted-foreground text-sm">{client.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
