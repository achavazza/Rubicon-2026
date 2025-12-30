"use client"

import { useState, useEffect, useCallback } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Quote, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import { type Testimonial } from "@/lib/data/testimonials"

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
    const GAP_REM = 1.5 // matches gap-6

    const [currentIndex, setCurrentIndex] = useState(0)
    const [isPaused, setIsPaused] = useState(false)
    const [isTransitioning, setIsTransitioning] = useState(true)

    // Create infinite loop by duplicating testimonials
    const extendedTestimonials = [...testimonials, ...testimonials, ...testimonials]
    const startIndex = testimonials.length

    const nextSlide = useCallback(() => {
        setCurrentIndex((prev) => prev + 1)
    }, [])

    const prevSlide = useCallback(() => {
        setCurrentIndex((prev) => prev - 1)
    }, [])

    const handleTransitionEnd = useCallback(() => {
        if (currentIndex >= testimonials.length * 2) {
            setIsTransitioning(false)
            setCurrentIndex((prev) => prev - testimonials.length)
            requestAnimationFrame(() => setIsTransitioning(true))
        } else if (currentIndex < 0) {
            setIsTransitioning(false)
            setCurrentIndex((prev) => prev + testimonials.length)
            requestAnimationFrame(() => setIsTransitioning(true))
        }
    }, [currentIndex, testimonials.length])

    const [isVisible, setIsVisible] = useState(true)

    // Handle visibility change to pause auto-slide when tab is inactive
    useEffect(() => {
        const handleVisibilityChange = () => {
            setIsVisible(!document.hidden)
        }

        document.addEventListener("visibilitychange", handleVisibilityChange)
        return () => document.removeEventListener("visibilitychange", handleVisibilityChange)
    }, [])

    // Auto-slide functionality
    useEffect(() => {
        if (!autoSlide || isPaused || !isVisible) return

        const interval = setInterval(nextSlide, autoSlideInterval)
        return () => clearInterval(interval)
    }, [autoSlide, autoSlideInterval, isPaused, isVisible, nextSlide])

    // Initialize to middle set
    useEffect(() => {
        setCurrentIndex(startIndex)
    }, [startIndex])

    const normalizedIndex = ((currentIndex - startIndex) % testimonials.length + testimonials.length) % testimonials.length
    // Drag support state
    const [dragOffset, setDragOffset] = useState(0)
    const [isDragging, setIsDragging] = useState(false)
    const [startX, setStartX] = useState(0)

    const handleDragStart = (clientX: number) => {
        setIsDragging(true)
        setStartX(clientX)
        setIsPaused(true)
    }

    const handleDragMove = (clientX: number) => {
        if (!isDragging) return
        const current = clientX
        const diff = current - startX
        setDragOffset(diff)
    }

    const handleDragEnd = () => {
        if (!isDragging) return
        setIsDragging(false)

        // Threshold to change slide (e.g., 50px)
        if (dragOffset > 50) {
            prevSlide()
        } else if (dragOffset < -50) {
            nextSlide()
        }

        setDragOffset(0)
        setIsPaused(false)
    }

    // Touch events
    const onTouchStart = (e: React.TouchEvent) => handleDragStart(e.targetTouches[0].clientX)
    const onTouchMove = (e: React.TouchEvent) => handleDragMove(e.targetTouches[0].clientX)
    const onTouchEnd = () => handleDragEnd()

    // Mouse events
    const onMouseDown = (e: React.MouseEvent) => handleDragStart(e.clientX)
    const onMouseMove = (e: React.MouseEvent) => handleDragMove(e.clientX)
    const onMouseUp = () => handleDragEnd()
    const onMouseLeave = () => {
        if (isDragging) handleDragEnd()
        setIsPaused(false)
    }

    const sliderVars = {
        "--slide-gap": `${GAP_REM}rem`,
        "--slide-width": "calc((100% - (var(--slide-gap) * (var(--visible-slides) - 1))) / var(--visible-slides))",
        transform: `translateX(calc(calc(-${currentIndex} * (var(--slide-width) + var(--slide-gap))) + ${dragOffset}px))`,
        cursor: isDragging ? 'grabbing' : 'grab'
    } as React.CSSProperties

    return (
        <div
            className="relative mb-10"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={onMouseLeave}
        >
            {/* Desktop & Mobile: Horizontal Carousel */}
            <div className="relative overflow-hidden">
                {/* Navigation Arrows */}
                <button
                    onClick={prevSlide}
                    className="absolute left-0 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-background/80 backdrop-blur-sm border border-border hover:bg-accent/20 transition-colors shadow-lg"
                    aria-label="Previous testimonial"
                >
                    <ChevronLeft className="h-6 w-6" />
                </button>

                <button
                    onClick={nextSlide}
                    className="absolute right-0 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-background/80 backdrop-blur-sm border border-border hover:bg-accent/20 transition-colors shadow-lg"
                    aria-label="Next testimonial"
                >
                    <ChevronRight className="h-6 w-6" />
                </button>

                {/* Slider Container */}
                <div
                    className="px-12 max-w-7xl mx-auto"
                    onTouchStart={onTouchStart}
                    onTouchMove={onTouchMove}
                    onTouchEnd={onTouchEnd}
                    onMouseDown={onMouseDown}
                    onMouseMove={onMouseMove}
                    onMouseUp={onMouseUp}
                >
                    <div
                        className={`flex gap-6 [--visible-slides:1] md:[--visible-slides:3] ${isTransitioning && !isDragging ? "transition-transform duration-700 ease-in-out" : ""}`}
                        style={{
                            ...sliderVars,
                        }}
                        onTransitionEnd={handleTransitionEnd}
                    >
                        {extendedTestimonials.map((testimonial, index) => (
                            <div
                                key={index}
                                className="flex-none"
                                style={{ width: "var(--slide-width)" }}
                            >
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
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center gap-2 mt-8">
                {testimonials.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => {
                            setIsTransitioning(true)
                            setCurrentIndex(startIndex + index)
                        }}
                        className={`h-2 rounded-full transition-all ${normalizedIndex === index
                            ? 'w-8 bg-accent'
                            : 'w-2 bg-muted-foreground/30'
                            }`}
                        aria-label={`Go to testimonial ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    )
}
