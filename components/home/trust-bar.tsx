import { Quote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

import Image from "next/image"

const clients = [
  { name: "Microsoft", light: "/assets/svgs/Microsoft.svg", dark: "/assets/svgs/Microsoft-w.svg", width: 150, height: 60 },
  { name: "OpenZeppelin", light: "/assets/svgs/OpenZeppelin.svg", dark: "/assets/svgs/OpenZeppelin-w.svg", width: 150, height: 60 },
  { name: "SuperRare", light: "/assets/svgs/SuperRare.svg", dark: "/assets/svgs/SuperRare-w.svg", width: 150, height: 60 },
  { name: "Sitickets", light: "/assets/svgs/Sitix.svg", dark: "/assets/svgs/Sitix-w.svg", width: 150, height: 60 },
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
    <section id="clients" className="py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-xs text-muted-foreground/60 uppercase tracking-widest mb-8">
            Trusted by leading companies
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {clients.map((client) => (
              <div
                key={client.name}
                className="relative w-auto flex items-center justify-center shrink-0"
              >
                {/* Light Mode Logo */}
                <Image
                  src={client.light}
                  alt={client.name}
                  width={client.width}
                  height={client.height}
                  className="h-full w-auto object-contain dark:hidden"
                />
                {/* Dark Mode Logo */}
                <Image
                  src={client.dark}
                  alt={client.name}
                  width={client.width}
                  height={client.height}
                  className="h-full w-auto object-contain hidden dark:block"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
