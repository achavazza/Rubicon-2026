import Image from "next/image"
import { cn } from "@/lib/utils"

export function HeroPartners({ className }: { className?: string }) {
    const partners = [
        { name: "Algorand", light: "/assets/svgs/Algorand.svg", dark: "/assets/svgs/Algorand-w.svg", width: 150, height: 60 },
        { name: "Stellar", light: "/assets/svgs/Stellar.svg", dark: "/assets/svgs/Stellar-w.svg", width: 150, height: 60 },
        { name: "ETH Latam", light: "/assets/svgs/Eth-latam.svg", dark: "/assets/svgs/Eth-latam-w.svg", width: 150, height: 60 },
        { name: "Consensys", light: "/assets/svgs/Concensus.svg", dark: "/assets/svgs/Concensus-w.svg", width: 150, height: 60 },
        { name: "Halborn", light: "/assets/svgs/Halborn-b.svg", dark: "/assets/svgs/Halborn-w.svg", width: 150, height: 60 },
        //{ name: "AFF", light: "/assets/svgs/AFF.svg", dark: "/assets/svgs/AFF-w.svg", width: 150, height: 60 },
    ]

    return (
        <div className={cn("w-full border-t border-border/50 bg-background/50 backdrop-blur-sm z-1", className)}>
            {/* Mobile View: Marquee without title */}
            <div className="w-full py-6 overflow-hidden md:hidden">
                <div className="flex w-max animate-marquee gap-16 items-center ">
                    {/* First set of logos */}
                    {partners.map((partner, index) => (
                        <div
                            key={`first-${partner.name}-${index}`}
                            className="relative w-auto flex items-center justify-center shrink-0"
                        >
                            <Image
                                src={partner.light}
                                alt={partner.name}
                                width={partner.width}
                                height={partner.height}
                                className="h-12 w-auto object-contain dark:hidden"
                            />
                            <Image
                                src={partner.dark}
                                alt={partner.name}
                                width={partner.width}
                                height={partner.height}
                                className="h-12 w-auto object-contain hidden dark:block"
                            />
                        </div>
                    ))}
                    {/* Second set of logos for seamless loop */}
                    {partners.map((partner, index) => (
                        <div
                            key={`second-${partner.name}-${index}`}
                            className="relative w-auto flex items-center justify-center shrink-0"
                        >
                            <Image
                                src={partner.light}
                                alt={partner.name}
                                width={partner.width}
                                height={partner.height}
                                className="h-12 w-auto object-contain dark:hidden"
                            />
                            <Image
                                src={partner.dark}
                                alt={partner.name}
                                width={partner.width}
                                height={partner.height}
                                className="h-12 w-auto object-contain hidden dark:block"
                            />
                        </div>
                    ))}
                    {/* Third set of logos for wider screens */}
                    {partners.map((partner, index) => (
                        <div
                            key={`third-${partner.name}-${index}`}
                            className="relative w-auto flex items-center justify-center shrink-0"
                        >
                            <Image
                                src={partner.light}
                                alt={partner.name}
                                width={partner.width}
                                height={partner.height}
                                className="h-12 w-auto object-contain dark:hidden"
                            />
                            <Image
                                src={partner.dark}
                                alt={partner.name}
                                width={partner.width}
                                height={partner.height}
                                className="h-12 w-auto object-contain hidden dark:block"
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Desktop View: Static Grid with title */}
            <div className="hidden md:block max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <p className="text-xs text-muted-foreground mb-6 uppercase tracking-wider text-left">Official partners</p>
                <div className="flex flex-wrap justify-between gap-x-12 gap-y-8 items-center">
                    {partners.map((partner) => (
                        <div
                            key={partner.name}
                            className="relative w-auto flex items-center justify-center shrink-0"
                        >
                            <Image
                                src={partner.light}
                                alt={partner.name}
                                width={partner.width}
                                height={partner.height}
                                className="h-12 w-auto object-contain dark:hidden"
                            />
                            <Image
                                src={partner.dark}
                                alt={partner.name}
                                width={partner.width}
                                height={partner.height}
                                className="h-12 w-auto object-contain hidden dark:block"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
