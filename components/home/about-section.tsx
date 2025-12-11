/* New "Who We Are" section for home - brings visibility to company story */
import { Card, CardContent } from "@/components/ui/card"

export function AboutSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-6">Who We Are</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Rubicon is a LATAM-based, remote-first engineering company specializing in blockchain, AI, and
                full stack product development. We've built our team around senior engineers who are passionate about
                cutting-edge technology.
              </p>
              <p>
                Our distributed model allows us to work with global clients across time zones while maintaining the
                agility and culture of a tight-knit team. We believe in transparency, quality, and long-term
                partnerships.
              </p>
              <p>
                From early-stage startups to Fortune 500 companies, we've helped teams ship products that matter—on time
                and to the highest standards.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Card className="bg-card border-border">
              <CardContent className="p-6 text-center">
                <p className="text-4xl font-bold text-accent mb-2">10+</p>
                <p className="text-sm text-muted-foreground">Years in Business</p>
              </CardContent>
            </Card>
            <Card className="bg-card border-border">
              <CardContent className="p-6 text-center">
                <p className="text-4xl font-bold text-accent mb-2">250+</p>
                <p className="text-sm text-muted-foreground">Projects Delivered</p>
              </CardContent>
            </Card>
            <Card className="bg-card border-border">
              <CardContent className="p-6 text-center">
                <p className="text-4xl font-bold text-accent mb-2">100+</p>
                <p className="text-sm text-muted-foreground">Clients</p>
              </CardContent>
            </Card>
            <Card className="bg-card border-border">
              <CardContent className="p-6 text-center">
                <p className="text-4xl font-bold text-accent mb-2">50+</p>
                <p className="text-sm text-muted-foreground">Senior Engineers</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
