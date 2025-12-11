import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, UsersRound, Rocket } from "lucide-react"

const engagementModels = [
  {
    icon: Users,
    title: "Staff Augmentation",
    description: "Expand your team with our engineers while you keep control of delivery.",
    bestFor: "Teams needing specific expertise on existing projects",
  },
  {
    icon: UsersRound,
    title: "Dedicated Team",
    description: "A LATAM-based squad fully integrated with your workflow.",
    bestFor: "Long-term projects requiring ongoing development",
  },
  {
    icon: Rocket,
    title: "Full Delivery",
    description: "We own end-to-end delivery from discovery to production.",
    bestFor: "New products or complete feature development",
  },
]

export function EngagementSection() {
  return (
    <section className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">How we engage</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Flexible engagement models tailored to your needs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {engagementModels.map((model, index) => (
            <Card key={index} className="bg-card border-border">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-secondary flex items-center justify-center mb-4">
                  <model.icon className="h-6 w-6 text-foreground" />
                </div>
                <CardTitle className="text-xl text-foreground">{model.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">{model.description}</p>
                <div className="pt-4 border-t border-border">
                  <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">Best for</p>
                  <p className="text-sm text-foreground">{model.bestFor}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
