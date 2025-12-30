"use client"

import { useState, useEffect, useCallback, useId, type ReactNode } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface CarouselProps<T> {
    items: T[]
    renderItem: (item: T, index: number) => ReactNode
    autoSlide?: boolean
    autoSlideInterval?: number
    visibleSlidesMobile?: number
    visibleSlidesDesktop?: number
    gap?: string // e.g. "1.5rem"
    className?: string
}

export function Carousel<T>({
    items,
    renderItem,
    autoSlide = true,
    autoSlideInterval = 5000,
    visibleSlidesMobile = 1,
    visibleSlidesDesktop = 3,
    gap = "1.5rem",
    className = "",
}: CarouselProps<T>) {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isPaused, setIsPaused] = useState(false)
    const [isTransitioning, setIsTransitioning] = useState(true)

    // Create infinite loop by duplicating items
    const extendedItems = [...items, ...items, ...items]
    const startIndex = items.length

    const nextSlide = useCallback(() => {
        setCurrentIndex((prev) => prev + 1)
    }, [])

    const prevSlide = useCallback(() => {
        setCurrentIndex((prev) => prev - 1)
    }, [])

    const handleTransitionEnd = useCallback(() => {
        if (currentIndex >= items.length * 2) {
            setIsTransitioning(false)
            setCurrentIndex((prev) => prev - items.length)
            requestAnimationFrame(() => setIsTransitioning(true))
        } else if (currentIndex < 0) {
            setIsTransitioning(false)
            setCurrentIndex((prev) => prev + items.length)
            requestAnimationFrame(() => setIsTransitioning(true))
        }
    }, [currentIndex, items.length])

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

    const normalizedIndex = ((currentIndex - startIndex) % items.length + items.length) % items.length

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
        "--slide-gap": gap,
        "--slide-width": "calc((100% - (var(--slide-gap) * (var(--visible-slides) - 1))) / var(--visible-slides))",
        transform: `translateX(calc(calc(-${currentIndex} * (var(--slide-width) + var(--slide-gap))) + ${dragOffset}px))`,
        cursor: isDragging ? 'grabbing' : 'grab'
    } as React.CSSProperties

    const containerStyle = {
        "--visible-slides": visibleSlidesMobile,
    } as React.CSSProperties

    const id = useId()
    const safeId = `carousel-${id.replace(/:/g, "")}`

    // ... logic ...

    return (
        <div
            className={`relative ${className}`}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={onMouseLeave}
        >
            <style>{`
                @media (min-width: 768px) {
                    #${safeId} {
                        --visible-slides: ${visibleSlidesDesktop} !important;
                    }
                }
            `}</style>

            <div className="relative overflow-hidden">
                {/* Navigation Arrows */}
                <button
                    onClick={prevSlide}
                    className="absolute left-0 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-background/80 backdrop-blur-sm border border-border hover:bg-accent/20 transition-colors shadow-lg hidden md:block"
                    aria-label="Previous slide"
                >
                    <ChevronLeft className="h-6 w-6" />
                </button>

                <button
                    onClick={nextSlide}
                    className="absolute right-0 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-background/80 backdrop-blur-sm border border-border hover:bg-accent/20 transition-colors shadow-lg hidden md:block"
                    aria-label="Next slide"
                >
                    <ChevronRight className="h-6 w-6" />
                </button>

                {/* Slider Container */}
                <div
                    className="px-4 md:px-12 max-w-7xl mx-auto"
                    onTouchStart={onTouchStart}
                    onTouchMove={onTouchMove}
                    onTouchEnd={onTouchEnd}
                    onMouseDown={onMouseDown}
                    onMouseMove={onMouseMove}
                    onMouseUp={onMouseUp}
                >
                    <div
                        id={safeId}
                        className={`flex gap-[var(--slide-gap)] ${isTransitioning && !isDragging ? "transition-transform duration-700 ease-in-out" : ""}`}
                        style={{
                            ...sliderVars,
                            ...containerStyle,
                        } as React.CSSProperties}
                        onTransitionEnd={handleTransitionEnd}
                    >
                        {extendedItems.map((item, index) => (
                            <div
                                key={index}
                                className="flex-none"
                                style={{ width: "var(--slide-width)" }}
                            >
                                {renderItem(item, index)}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center gap-2 mt-8">
                {items.map((_, index) => (
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
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    )
}
