"use client"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Blocks, Brain, Code2, ArrowRight, Check } from "lucide-react"
import Link from "next/link"
import { useBooking } from "@/app/booking-context"
import { PageHero } from "@/components/page-hero"
import { StaffAugmentationIcon, DedicatedTeamIcon, FullDeliveryIcon } from "@/components/home/engagement-icons"
import { CTAFinalSection } from "@/components/home/cta-final-section"
import { useInView } from "@/hooks/use-in-view"

const blockchainServices = [
  "Smart Contract Development (Solidity, Rust, Move)",
  "EVM-compatible chains (Ethereum, Polygon, Arbitrum, Optimism)",
  "Non-EVM chains (Solana, Near, Cosmos)",
  "DeFi protocols (AMMs, Lending, Staking, Yield Aggregators)",
  "NFT marketplaces and token standards",
  "Cross-chain bridges and interoperability",
  "Smart contract audits and security reviews",
  "Gas optimization and upgrade patterns",
]

const aiServices = [
  "LLM-powered applications and copilots",
  "Multi-agent systems and orchestration",
  "RAG pipelines and knowledge bases",
  "Workflow automation with AI",
  "API integrations and middleware",
  "Computer vision and NLP solutions",
  "AI-enhanced analytics and insights",
  "Custom model fine-tuning",
]

const fullstackServices = [
  "React, Next.js, and modern frontend frameworks",
  "Node.js, Python, and Go backends",
  "REST and GraphQL API development",
  "PostgreSQL, MongoDB, and Redis databases",
  "Cloud infrastructure (AWS, GCP, Vercel)",
  "Mobile apps with React Native",
  "Web3 wallet integrations",
  "DevOps and CI/CD pipelines",
]

const engagementModels = [
  {
    icon: StaffAugmentationIcon,
    title: "Staff Augmentation",
    description: "Expand your team with our engineers while you keep control of delivery.",
    process: [
      "Define role requirements and tech stack",
      "We match you with senior engineers",
      "Quick onboarding to your workflow",
      "Ongoing support and replacement guarantee",
    ],
    benefits: [
      "Maintain full project control",
      "Flexible scaling up or down",
      "Access to specialized expertise",
      "Cost-effective compared to hiring",
    ],
  },
  {
    icon: DedicatedTeamIcon,
    title: "Dedicated Team",
    description: "A LATAM-based squad fully integrated with your workflow.",
    process: [
      "Discovery call to understand your needs",
      "Team composition proposal",
      "Integration with your processes",
      "Regular syncs and reporting",
    ],
    benefits: [
      "Full team committed to your project",
      "Deep product knowledge over time",
      "Aligned working hours with US/EU",
      "Predictable monthly costs",
    ],
  },
  {
    icon: FullDeliveryIcon,
    title: "Full Delivery",
    description: "We own end-to-end delivery from discovery to production.",
    process: [
      "Requirements gathering and discovery",
      "Technical architecture and planning",
      "Iterative development with demos",
      "Launch, handover, and support",
    ],
    benefits: [
      "Complete project ownership",
      "Fixed timeline and milestones",
      "Production-ready deliverables",
      "Documentation and training included",
    ],
  },
]

const faqs = [
  {
    question: "How quickly can you start a new project?",
    answer:
      "Most projects can kick off within 1-2 weeks. For staff augmentation, we can often have engineers onboarded within a week. Full delivery projects typically require a discovery phase of 1-2 weeks before development begins.",
  },
  {
    question: "What are your typical project timelines?",
    answer:
      "Timelines vary based on scope. Smart contract development can range from 4-12 weeks. Full-stack products typically take 2-6 months. We provide detailed estimates after the discovery phase.",
  },
  {
    question: "How do you handle communication across time zones?",
    answer:
      "Our LATAM-based teams work hours aligned with US and EU time zones. We use async communication tools like Slack and Notion, with regular video syncs scheduled at convenient times for your team.",
  },
  {
    question: "What's your pricing model?",
    answer:
      "We offer flexible pricing: hourly rates for staff augmentation, monthly retainers for dedicated teams, and fixed-price contracts for full delivery projects. We provide transparent quotes after understanding your requirements.",
  },
  {
    question: "Do you provide ongoing support after project completion?",
    answer:
      "Yes, we offer maintenance and support packages for all delivered projects. This includes bug fixes, security updates, and feature enhancements. We also provide documentation and knowledge transfer to your internal team.",
  },
]

export default function ServicesPage() {
  const { openBooking } = useBooking()
  const { ref: engagementRef, isInView: engagementInView } = useInView({ threshold: 0.2 })
  const { ref: aiRef, isInView: aiInView } = useInView({ threshold: 0.2 })
  const { ref: techRef, isInView: techInView } = useInView({ threshold: 0.2 })

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <PageHero
          title="Our Services"
          description="We combine deep expertise in blockchain, AI, and full-stack development to deliver production-grade solutions. From smart contracts to intelligent systems, we build technology that scales."
        />

        {/* Blockchain Engineering */}
        <section className="py-16 md:py-24 bg-card/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <div className="h-14 w-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                  <Blocks className="h-7 w-7 text-accent" />
                </div>
                <h2 className="text-3xl font-bold text-foreground mb-4">Blockchain Engineering</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  We build secure, audited smart contracts and decentralized applications across multiple chains. Our
                  team has deployed contracts handling millions in TVL.
                </p>
                <Button onClick={openBooking}>
                  Discuss your blockchain project
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              <div ref={techRef}>
                <Card className={`bg-card border-border ${techInView ? 'animate-fade-up' : ''}`}>
                  <CardHeader>
                    <CardTitle className="text-foreground">Technologies & Capabilities</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="grid gap-3">
                      {blockchainServices.map((service, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <Check className="h-4 w-4 text-accent mt-1 shrink-0" />
                          <span className="text-muted-foreground text-sm">{service}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* AI Systems */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div className="order-2 lg:order-1" ref={aiRef}>
                <Card className={`bg-card border-border ${aiInView ? 'animate-fade-up' : ''}`}>
                  <CardHeader>
                    <CardTitle className="text-foreground">AI Capabilities</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="grid gap-3">
                      {aiServices.map((service, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <Check className="h-4 w-4 text-accent mt-1 shrink-0" />
                          <span className="text-muted-foreground text-sm">{service}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
              <div className="order-1 lg:order-2">
                <div className="h-14 w-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                  <Brain className="h-7 w-7 text-accent" />
                </div>
                <h2 className="text-3xl font-bold text-foreground mb-4">AI Systems & Automation</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  We design and implement intelligent systems that automate workflows, enhance products, and unlock new
                  capabilities. From LLM copilots to multi-agent orchestration.
                </p>
                <Button onClick={openBooking}>
                  Explore AI solutions
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Full-stack Development */}
        <section className="py-16 md:py-24 bg-card/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <div className="h-14 w-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                  <Code2 className="h-7 w-7 text-accent" />
                </div>
                <h2 className="text-3xl font-bold text-foreground mb-4">Full-stack Product Development</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  End-to-end product engineering from frontend to infrastructure. We build scalable web and mobile
                  applications with seamless blockchain and AI integrations.
                </p>
                <Button onClick={openBooking}>
                  Start your product
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              <div ref={techRef}>
                <Card className={`bg-card border-border ${techInView ? 'animate-fade-up' : ''}`} style={{ animationDelay: '150ms' }}>
                  <CardHeader>
                    <CardTitle className="text-foreground">Tech Stack</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="grid gap-3">
                      {fullstackServices.map((service, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <Check className="h-4 w-4 text-accent mt-1 shrink-0" />
                          <span className="text-muted-foreground text-sm">{service}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Engagement Models */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">Engagement Models</h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                Choose the collaboration style that fits your needs and team structure.
              </p>
            </div>

            <div ref={engagementRef} className="grid lg:grid-cols-3 gap-6">
              {engagementModels.map((model, index) => (
                <Card key={index} className={`bg-card border-border ${engagementInView ? 'animate-fade-up' : ''}`} style={{ animationDelay: `${index * 150}ms` }}>
                  <CardHeader>
                    <div className="h-16 w-16 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                      <model.icon className="h-10 w-10" />
                    </div>
                    <CardTitle className="text-xl text-foreground">{model.title}</CardTitle>
                    <p className="text-muted-foreground">{model.description}</p>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h4 className="text-sm font-semibold text-foreground mb-3">Process</h4>
                      <ol className="space-y-2">
                        {model.process.map((step, stepIndex) => (
                          <li key={stepIndex} className="flex items-start gap-3">
                            <span className="h-5 w-5 rounded-full bg-accent/20 text-accent text-xs flex items-center justify-center shrink-0 mt-0.5">
                              {stepIndex + 1}
                            </span>
                            <span className="text-muted-foreground text-sm">{step}</span>
                          </li>
                        ))}
                      </ol>
                    </div>
                    <div className="pt-4 border-t border-border">
                      <h4 className="text-sm font-semibold text-foreground mb-3">Benefits</h4>
                      <ul className="space-y-2">
                        {model.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-start gap-3">
                            <Check className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                            <span className="text-muted-foreground text-sm">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 md:py-24  bg-[var(--alt-background)]">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground">Frequently Asked Questions</h2>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-card border border-border rounded-lg px-6"
                >
                  <AccordionTrigger className="text-foreground hover:no-underline">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* CTA
        <section className="py-16 md:py-24">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">Ready to discuss your project?</h2>
            <p className="text-muted-foreground mb-8">
              Let's talk about how we can help you build your next blockchain, AI, or product initiative.
            </p>
            <Button size="lg" onClick={openBooking} className="bg-[#C91CD9] hover:bg-[#A01AB0] text-white">
              Talk to our technical team
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </section>*/}
        <CTAFinalSection />
      </main>
      <Footer />
    </>
  )
}

function ServicesCTA() {
  const { openBooking } = useBooking()
  return (
    <Button onClick={openBooking} size="lg" className="bg-[#C91CD9] hover:bg-[#A01AB0] text-white">
      Book a meeting
      <ArrowRight className="ml-2 h-4 w-4" />
    </Button>
  )
}
