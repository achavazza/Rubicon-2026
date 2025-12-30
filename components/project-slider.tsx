"use client"

import { Card, CardContent } from "@/components/ui/card"
import { ExternalLink } from "lucide-react"
import Image from "next/image"
import { type Project } from "@/lib/data/projects"
import { Carousel } from "@/components/ui/carousel-custom"

interface ProjectSliderProps {
    projects: Project[]
    autoSlide?: boolean
    autoSlideInterval?: number
}

export function ProjectSlider({
    projects,
    autoSlide = true,
    autoSlideInterval = 6000,
}: ProjectSliderProps) {
    return (
        <Carousel
            items={projects}
            autoSlide={autoSlide}
            autoSlideInterval={autoSlideInterval}
            visibleSlidesDesktop={2}
            gap="2rem"
            renderItem={(project) => (
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
            )}
        />
    )
}
