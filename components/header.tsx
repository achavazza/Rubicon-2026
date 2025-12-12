"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { Menu, X, Sun, Moon } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { useBooking } from "@/app/booking-context"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { openBooking } = useBooking()
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  // Prevent hydration mismatch
  if (!mounted) {
    return (
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Skeleton or static content to match initial server render if needed, 
                     but simpler to just render the basic structure without interactive theme bits 
                     or just return null if acceptable, though that causes layout shift.
                     For header, it's better to render structurally same but without default theme assumption 
                     or just wait. 
                     Actually, standard pattern ensures we just don't render the ICON until mounted. 
                     The header itself should render.
                  */}
            {/* Re-rendering the full return bellow but with mounted checks inline is better practice 
                     to avoid layout shift, but to keep this clean in one replace block:
                 */}
            <div className="flex items-center justify-between h-16 w-full">
              {/* Placeholder for logo to avoid shift */}
              <div className="w-[150px] h-16" />
            </div>
          </div>
        </nav>
      </header>
    )
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center">
            <Image
              src="/assets/svgs/Rubicon-b.svg"
              alt="Rubicon"
              width={150}
              height={64}
              className="w-auto dark:hidden"
              priority
            />
            <Image
              src="/assets/svgs/Rubicon-w.svg"
              alt="Rubicon"
              width={150}
              height={64}
              className="w-auto hidden dark:block"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors uppercase">
              Home
            </Link>
            <Link
              href="/our-services"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors uppercase"
            >
              Services
            </Link>
            <Link href="/clients" className="text-sm text-muted-foreground hover:text-foreground transition-colors uppercase">
              Clients
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="rounded-full"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            <Button onClick={openBooking}>Book a meeting</Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-4 md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="rounded-full mr-2"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            <button
              className="p-2 text-foreground"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <Link
                href="/"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/our-services"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/clients"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Clients
              </Link>
              <Button
                onClick={() => {
                  openBooking()
                  setMobileMenuOpen(false)
                }}
                className="w-full mt-2"
              >
                Book a meeting
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
