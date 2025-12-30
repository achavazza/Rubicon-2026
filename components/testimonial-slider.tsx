"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"
import Image from "next/image"
import { type Testimonial } from "@/lib/data/testimonials"
import { Carousel } from "@/components/ui/carousel-custom"

interface TestimonialSliderProps {
    testimonials: Testimonial[]
    autoSlide?: boolean
    autoSlideInterval?: number
}

export function TestimonialSlider({
    testimonials,
    autoSlide = true,
    autoSlideInterval = 5000
}: TestimonialSliderProps) {
    return (
        <Carousel
            items={testimonials}
            autoSlide={autoSlide}
            autoSlideInterval={autoSlideInterval}
            visibleSlidesDesktop={3}
            gap="1.5rem"
            renderItem={(testimonial) => (
                <Card className="bg-card border-border hover:border-accent/50 transition-all h-full">
                    <CardContent className="px-6 flex flex-col h-full">
                        <Quote className="h-8 w-8 text-accent mb-4 flex-shrink-0" />
                        <p className="text-foreground leading-relaxed mb-6 flex-grow line-clamp-6">
                            "{testimonial.quote}"
                        </p>
                        <div className="border-t border-border pt-4 mt-auto">
                            <div className="flex items-start justify-between gap-3">
                                <div className="flex items-start gap-3 min-w-0">
                                    <Image
                                        src={testimonial.avatar}
                                        alt={testimonial.name}
                                        width={40}
                                        height={40}
                                        className="rounded-full object-cover flex-shrink-0"
                                    />
                                    <div className="min-w-0">
                                        <p className="font-semibold text-foreground truncate">{testimonial.name}</p>
                                        <p className="text-sm text-muted-foreground truncate">
                                            {[testimonial.role, testimonial.company].filter(Boolean).join(", ")}
                                        </p>
                                        <span className="text-xs px-2 py-1 bg-accent/10 text-accent rounded whitespace-nowrap flex-shrink-0 mt-2 block">
                                            {testimonial.projectType}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            )}
        />
    )
}
