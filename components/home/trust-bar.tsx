import { Quote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const clients = [
  { name: "Microsoft", logo: "MICROSOFT" },
  { name: "OpenZeppelin", logo: "OPENZEPPELIN" },
  { name: "Superare", logo: "SUPERARE" },
  { name: "Sitickets", logo: "SITICKETS" },
]

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

export function TrustBar() {
  return (
    <section id="clients" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-xs text-muted-foreground/60 uppercase tracking-widest mb-8">
            Trusted by leading companies
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {clients.map((client) => (
              <div
                key={client.name}
                className="text-muted-foreground/70 font-semibold tracking-widest text-sm hover:text-accent transition-colors"
              >
                {client.logo}
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Global teams ship faster with Rubicon</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            We help companies launch blockchain, AI and product initiatives without sacrificing quality or timeline.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
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
      </div>
    </section>
  )
}
