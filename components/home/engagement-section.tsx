import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { StaffAugmentationIcon, DedicatedTeamIcon, FullDeliveryIcon } from "./engagement-icons"

const engagementModels = [
  {
    icon: StaffAugmentationIcon,
    title: "Staff Augmentation",
    description: "Expand your team with our engineers while you keep control of delivery.",
    bestFor: "Teams needing specific expertise on existing projects",
  },
  {
    icon: DedicatedTeamIcon,
    title: "Dedicated Team",
    description: "A LATAM-based squad fully integrated with your workflow.",
    bestFor: "Long-term projects requiring ongoing development",
  },
  {
    icon: FullDeliveryIcon,
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
            <Card key={index} className="bg-card border-border hover:border-accent/50 transition-colors">
              <CardHeader>
                <div className="h-16 w-16 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <model.icon className="h-10 w-10" />
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
