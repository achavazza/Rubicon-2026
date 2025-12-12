"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

interface PageHeroProps {
    title: string
    description: string
}

export function PageHero({ title, description }: PageHeroProps) {
    const { theme, resolvedTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    const isDark = mounted && (theme === "dark" || resolvedTheme === "dark")
    const bgImage = isDark ? "/assets/images/rubi-bg-w.png" : "/assets/images/rubi-bg-b.png"

    return (
        <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <img
                    src={bgImage}
                    alt="Background"
                    className="w-full h-full object-cover object-bottom"
                />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl">
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
                        {title}
                    </h1>
                    <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                        {description}
                    </p>
                </div>
            </div>
        </section>
    )
}
