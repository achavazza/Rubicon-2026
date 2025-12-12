"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Quote, ArrowRight, ExternalLink } from "lucide-react"
import { useBooking } from "@/app/booking-context"
import { CTAFinalSection } from "@/components/home/cta-final-section"
import { TrustBar } from "@/components/home/trust-bar"
import { PageHero } from "@/components/page-hero"
import { EngagementSection } from "@/components/home/engagement-section"

const clients = [
  { name: "Microsoft", logo: "MICROSOFT" },
  { name: "OpenZeppelin", logo: "OPENZEPPELIN" },
  { name: "Superare", logo: "SUPERARE" },
  { name: "Sitickets", logo: "SITICKETS" },
]

const testimonials = [
  {
    quote:
      "Rubicon's blockchain expertise helped us launch our DeFi protocol 3 months ahead of schedule. Their technical depth in Solidity and security best practices is unmatched. They became an extension of our core team.",
    name: "Sarah Chen",
    role: "CTO",
    company: "OpenZeppelin",
    projectType: "Smart Contract Development",
  },
  {
    quote:
      "The AI automation system they built reduced our operational costs by 40%. Their team integrated seamlessly with our engineering org and delivered beyond expectations. Highly recommended for any technical initiative.",
    name: "Marcus Rodriguez",
    role: "VP Engineering",
    company: "Microsoft",
    projectType: "AI Systems & Automation",
  },
  {
    quote:
      "Working with Rubicon felt like having a senior engineering team in-house. They understand both Web2 and Web3 deeply, which was crucial for our hybrid architecture. The dedicated team model worked perfectly for us.",
    name: "Elena Vasquez",
    role: "Founder & CEO",
    company: "Superare",
    projectType: "Full-stack Development",
  },
  {
    quote:
      "We needed a team that could handle both our ticketing platform and blockchain integration for NFT tickets. Rubicon delivered a production-ready solution in just 4 months. Outstanding technical execution.",
    name: "Carlos Mendez",
    role: "Head of Product",
    company: "Sitickets",
    projectType: "Blockchain + Full-stack",
  },
]

const caseStudies = [
  {
    title: "DeFi Lending Protocol",
    client: "Confidential",
    problem:
      "Client needed a secure, audited lending protocol with unique collateralization mechanics and cross-chain support.",
    solution:
      "Built modular smart contract architecture with comprehensive test coverage. Implemented custom oracle integration and governance mechanisms.",
    results: [
      "$50M+ TVL within 6 months of launch",
      "Zero security incidents post-audit",
      "3 successful chain deployments",
    ],
    tech: ["Solidity", "Foundry", "The Graph", "React"],
  },
  {
    title: "AI-Powered Document Processing",
    client: "Enterprise Client",
    problem: "Manual document processing was causing significant delays and errors in their operations workflow.",
    solution:
      "Developed an LLM-based system with custom RAG pipeline for document understanding, extraction, and automated routing.",
    results: [
      "85% reduction in processing time",
      "40% cost savings in operations",
      "99.2% accuracy on key data extraction",
    ],
    tech: ["Python", "LangChain", "OpenAI", "PostgreSQL"],
  },
]

function ClientsCTA() {
  const { openBooking } = useBooking()
  return (
    <Button size="lg" onClick={openBooking} className="bg-[#C91CD9] hover:bg-[#A01AB0] text-white">
      Talk to our technical team
      <ArrowRight className="ml-2 h-4 w-4" />
    </Button>
  )
}

export default function ClientsPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <PageHero
          title="Our Clients & Success Stories"
          description="We've partnered with startups and enterprises across blockchain, fintech, and technology to deliver production-grade solutions that drive real business outcomes."
        />

        {/* Client Logos 
        <section className="py-12 border-y border-border bg-card/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-center text-sm text-muted-foreground mb-8">Trusted by leading companies worldwide</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 items-center justify-items-center">
              {clients.map((client) => (
                <div
                  key={client.name}
                  className="text-muted-foreground/60 font-semibold tracking-widest text-sm hover:text-muted-foreground transition-colors"
                >
                  {client.logo}
                </div>
              ))}
            </div>
          </div>
        </section>
        */}
        <TrustBar />

        {/* Testimonials */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-foreground">What our clients say</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="bg-card border-border  hover:border-accent/50 transition-colors">
                  <CardContent className="p-6">
                    <Quote className="h-8 w-8 text-accent mb-4" />
                    <p className="text-foreground leading-relaxed mb-6">"{testimonial.quote}"</p>
                    <div className="border-t border-border pt-4">
                      <div className="flex items-start justify-between">
                        <div>
                          <p className="font-semibold text-foreground">{testimonial.name}</p>
                          <p className="text-sm text-muted-foreground">
                            {testimonial.role}, {testimonial.company}
                          </p>
                        </div>
                        <span className="text-xs px-2 py-1 bg-accent/10 text-accent rounded">
                          {testimonial.projectType}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section className="py-16 md:py-24 bg-card/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-foreground">Featured Projects</h2>
              <p className="mt-4 text-muted-foreground">A closer look at some of our recent work</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {caseStudies.map((caseStudy, index) => (
                <Card key={index} className="bg-card border-border overflow-hidden   hover:border-accent/50 transition-colors">
                  <CardContent className="p-0">
                    <div className="p-6 border-b border-border">
                      <div className="flex items-start justify-between mb-4">
                        <h3 className="text-xl font-semibold text-foreground">{caseStudy.title}</h3>
                        <ExternalLink className="h-4 w-4 text-muted-foreground" />
                      </div>
                      <p className="text-sm text-muted-foreground">{caseStudy.client}</p>
                    </div>

                    <div className="p-6 space-y-6">
                      <div>
                        <h4 className="text-sm font-semibold text-foreground mb-2">Challenge</h4>
                        <p className="text-sm text-muted-foreground">{caseStudy.problem}</p>
                      </div>

                      <div>
                        <h4 className="text-sm font-semibold text-foreground mb-2">Solution</h4>
                        <p className="text-sm text-muted-foreground">{caseStudy.solution}</p>
                      </div>

                      <div>
                        <h4 className="text-sm font-semibold text-foreground mb-2">Results</h4>
                        <ul className="space-y-1">
                          {caseStudy.results.map((result, resultIndex) => (
                            <li key={resultIndex} className="text-sm text-accent flex items-center gap-2">
                              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                              {result}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="pt-4 border-t border-border">
                        <div className="flex flex-wrap gap-2">
                          {caseStudy.tech.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="text-xs px-2 py-1 bg-secondary text-muted-foreground rounded"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* How We Engage 
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-foreground">How We Engage</h2>
              <p className="mt-4 text-muted-foreground">Flexible partnership models tailored to your needs</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Staff Augmentation",
                  description: "Expand your team with our engineers while you keep control of delivery.",
                  best: "Best for: Teams needing specialized expertise on-demand",
                },
                {
                  title: "Dedicated Team",
                  description: "A LATAM-based squad fully integrated with your workflow.",
                  best: "Best for: Medium to long-term projects requiring continuity",
                },
                {
                  title: "Full Delivery",
                  description: "We own end-to-end delivery from discovery to production.",
                  best: "Best for: Complex projects where you need a true partner",
                },
              ].map((model, index) => (
                <Card key={index} className="bg-card border-border  hover:border-accent/50 transition-colors">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-foreground mb-3">{model.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{model.description}</p>
                    <p className="text-xs text-accent font-medium">{model.best}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>*/}
        <EngagementSection />

        {/* CTA 
        <section className="py-16 md:py-24 bg-card/30">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">Ready to start your next project?</h2>
            <p className="text-muted-foreground mb-8">
              Let's discuss how we can help you achieve your technical goals.
            </p>
            <ClientsCTA />
          </div>
        </section>
        */}
        <CTAFinalSection />
      </main>
      <Footer />
    </>
  )
}
