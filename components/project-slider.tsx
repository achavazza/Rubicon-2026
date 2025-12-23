"use client"

import { useState, useEffect, useCallback } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react"
import Image from "next/image"
import { type Project } from "@/lib/data/projects"

interface ProjectSliderProps {
    projects: Project[]
    autoSlide?: boolean
    autoSlideInterval?: number
}

export function ProjectSlider({
    projects,
    autoSlide = true,
    autoSlideInterval = 6000
}: ProjectSliderProps) {
    const [isMobile, setIsMobile] = useState(false)

    // Handle window resize to determine mobile state
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 1024) // lg breakpoint
        }

        checkMobile()
        window.addEventListener('resize', checkMobile)
        return () => window.removeEventListener('resize', checkMobile)
    }, [])

    const VISIBLE_SLIDES = isMobile ? 1 : 2
    const GAP_REM = 2 // gap-8 = 2rem
    const GAP_TOTAL_REM = GAP_REM * (VISIBLE_SLIDES - 1)
    const SLIDE_WIDTH = `calc((100% - ${GAP_TOTAL_REM}rem) / ${VISIBLE_SLIDES})`

    const [currentIndex, setCurrentIndex] = useState(0)
    const [isPaused, setIsPaused] = useState(false)
    const [isTransitioning, setIsTransitioning] = useState(true)

    // Create infinite loop by duplicating projects
    // We need enough copies to cover the window seamlessly. 
    // minimal set: [end_clones, original, start_clones]
    const extendedProjects = [...projects, ...projects, ...projects]
    const startIndex = projects.length

    const nextSlide = useCallback(() => {
        setCurrentIndex((prev) => prev + 1)
    }, [])

    const prevSlide = useCallback(() => {
        setCurrentIndex((prev) => prev - 1)
    }, [])

    const handleTransitionEnd = useCallback(() => {
        if (currentIndex >= projects.length * 2) {
            setIsTransitioning(false)
            setCurrentIndex((prev) => prev - projects.length)
            requestAnimationFrame(() => setIsTransitioning(true))
        } else if (currentIndex < projects.length) {
            setIsTransitioning(false)
            setCurrentIndex((prev) => prev + projects.length)
            requestAnimationFrame(() => setIsTransitioning(true))
        }
    }, [currentIndex, projects.length])

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

    const normalizedIndex = ((currentIndex - startIndex) % projects.length + projects.length) % projects.length

    // Custom CSS variable type validation workaround
    const sliderStyle = {
        "--slide-width": SLIDE_WIDTH,
        "--slide-gap": `${GAP_REM}rem`,
        transform: `translateX(calc(-${currentIndex} * (var(--slide-width) + var(--slide-gap))))`,
    } as React.CSSProperties

    return (
        <div
            className="relative"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            {/* Desktop & Mobile: Horizontal Carousel */}
            <div className="relative overflow-hidden pl-1 py-4 -ml-1 -my-4"> {/* padding/margin trick for focus rings or shadow clipping */}
                {/* Navigation Arrows */}
                <button
                    onClick={prevSlide}
                    className="absolute left-0 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-background/80 backdrop-blur-sm border border-border hover:bg-accent/20 transition-colors shadow-lg hidden md:block"
                    aria-label="Previous project"
                >
                    <ChevronLeft className="h-6 w-6" />
                </button>

                <button
                    onClick={nextSlide}
                    className="absolute right-0 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-background/80 backdrop-blur-sm border border-border hover:bg-accent/20 transition-colors shadow-lg hidden md:block"
                    aria-label="Next project"
                >
                    <ChevronRight className="h-6 w-6" />
                </button>

                {/* Slider Container */}
                <div className="px-12 max-w-7xl mx-auto">
                    <div
                        className={`flex gap-8 ${isTransitioning ? "transition-transform duration-700 ease-in-out" : ""}`}
                        style={sliderStyle}
                        onTransitionEnd={handleTransitionEnd}
                    >
                        {extendedProjects.map((project, index) => (
                            <div
                                key={index}
                                className="flex-none"
                                style={{ width: "var(--slide-width)" }}
                            >
                                <Card className="bg-card border-border hover:border-accent/50 transition-all h-full overflow-hidden flex flex-col">
                                    <CardContent className="p-0 flex flex-col h-full relative group">
                                        {project.url && (
                                            <a
                                                href={project.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="absolute -top-2 right-2 p-2 bg-background/80 hover:bg-accent/10 rounded-full transition-colors z-10 border border-border shadow-sm"
                                            >
                                                <ExternalLink className="h-4 w-4 text-muted-foreground hover:text-accent" />
                                            </a>
                                        )}
                                        <div className="px-6 pb-6 pt-6 border-b border-border flex items-center justify-between gap-4">
                                            <div className="flex flex-col gap-1 min-w-0 flex-1">
                                                <div className="flex items-start justify-between sm:justify-start gap-2">
                                                    {project.url ? (
                                                        <a href={project.url} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                                                            <h3 className="text-xl font-semibold text-foreground leading-tight">{project.title}</h3>
                                                        </a>
                                                    ) : (
                                                        <h3 className="text-xl font-semibold text-foreground leading-tight">{project.title}</h3>
                                                    )}
                                                </div>
                                                {!project.logo && (
                                                    <p className="text-sm text-accent font-medium">{project.client}</p>
                                                )}
                                            </div>

                                            {project.logo && (
                                                <div className="relative flex-shrink-0 flex items-center justify-end w-[160px]">
                                                    <Image
                                                        src={`/assets/svgs/${project.logo}.svg`}
                                                        alt={`${project.client} logo`}
                                                        width={160}
                                                        height={40}
                                                        className="w-full h-auto dark:hidden object-contain object-right"
                                                    />
                                                    <Image
                                                        src={`/assets/svgs/${project.logo}-w.svg`}
                                                        alt={`${project.client} logo`}
                                                        width={160}
                                                        height={40}
                                                        className="w-full h-auto hidden dark:block object-contain object-right"
                                                    />
                                                </div>
                                            )}
                                        </div>

                                        <div className="p-6 space-y-6 flex-grow">
                                            <div>
                                                <h4 className="text-sm font-semibold text-foreground mb-2">Overview</h4>
                                                <p className="text-sm text-muted-foreground line-clamp-3" title={project.overview}>{project.overview}</p>
                                            </div>

                                            <div className="flex-grow">
                                                <h4 className="text-sm font-semibold text-foreground mb-2">Our Work</h4>
                                                <ul className="space-y-2">
                                                    {project.ourWork.map((work, i) => (
                                                        <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                                                            <span className="h-1.5 w-1.5 rounded-full bg-accent mt-1.5 flex-shrink-0" />
                                                            <span className="line-clamp-2">{work}</span>
                                                        </li>
                                                    )).slice(0, 3)}
                                                </ul>
                                            </div>

                                            <div className="pt-4 border-t border-border mt-auto">
                                                <div className="flex flex-wrap gap-2">
                                                    {project.techStack.map((tech, i) => (
                                                        <span
                                                            key={i}
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
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center gap-2 mt-8">
                {projects.map((_, index) => (
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
                        aria-label={`Go to project ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    )
}
