/* Renamed from "Trusted by industry leaders" to "What our clients say" - cleaner positioning */
"use client"

import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { TestimonialSlider } from "@/components/testimonial-slider"
import { testimonials } from "@/lib/data/testimonials"
import { useInView } from "@/hooks/use-in-view"

const clients = [
  { name: "Microsoft", light: "/assets/svgs/Microsoft.svg", dark: "/assets/svgs/Microsoft-w.svg", width: 150, height: 60 },
  { name: "OpenZeppelin", light: "/assets/svgs/OpenZeppelin.svg", dark: "/assets/svgs/OpenZeppelin-w.svg", width: 150, height: 60 },
  { name: "SuperRare", light: "/assets/svgs/SuperRare.svg", dark: "/assets/svgs/SuperRare-w.svg", width: 150, height: 60 },
  //{ name: "Rise", light: "/assets/svgs/Rise.svg", dark: "/assets/svgs/Rise-w.svg", width: 150, height: 60 },
  { name: "Galaxy", light: "/assets/svgs/Galaxy.svg", dark: "/assets/svgs/Galaxy-w.svg", width: 150, height: 60 },
  // { name: "Quadrant", light: "/assets/svgs/Quadrant.svg", dark: "/assets/svgs/Quadrant-w.svg", width: 150, height: 60 },
  { name: "Membrane", light: "/assets/svgs/Membrane.svg", dark: "/assets/svgs/Membrane-w.svg", width: 150, height: 60 },
  { name: "Sitickets", light: "/assets/svgs/Sitix.svg", dark: "/assets/svgs/Sitix-w.svg", width: 150, height: 60 },
]

export function TrustedSection() {
  const { ref, isInView } = useInView({ threshold: 0.2 })

  return (
    <section id="clients" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Our Clients</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            We help global teams ship blockchain, AI and product initiatives faster, without sacrificing quality.
          </p>
        </div>

        <TestimonialSlider testimonials={testimonials} />

        <div className="border-t border-border mt-10 pt-10">
          <p className="text-center text-sm text-muted-foreground/70 uppercase tracking-widest mb-8">
            Companies we work with
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {clients.map((client) => (
              <div
                key={client.name}
                className="relative w-auto flex items-center justify-center shrink-0"
              >
                {/* Light Mode Logo (Original) */}
                <Image
                  src={client.light}
                  alt={client.name}
                  width={client.width}
                  height={client.height}
                  className="h-full w-auto object-contain dark:hidden"
                />
                {/* Dark Mode Logo (White) */}
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
