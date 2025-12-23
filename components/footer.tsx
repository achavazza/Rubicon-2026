import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <span className="flex items-center">
          <Image
            src="/assets/svgs/Rubicon-b.svg"
            alt="Rubicon"
            width={150}
            height={64}
            className="h-16 w-auto dark:hidden"
            priority
          />
          <Image
            src="/assets/svgs/Rubicon-w.svg"
            alt="Rubicon"
            width={150}
            height={64}
            className="h-16 w-auto hidden dark:block"
            priority
          />
        </span>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <p className="mt-4 text-sm text-muted-foreground max-w-md">
              Production-grade Blockchain, AI & Full Stack Product Teams from LATAM. Remote-first engineers building the future of
              technology.
            </p>
            <p className="mt-6 text-xs text-muted-foreground">
              <span className="block font-semibold text-foreground">NYC Office</span>
              115 E 57th St, New York, NY 10022
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Navigation</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/our-services"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link href="/clients" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Clients
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:hello@rubicon.dev"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  hello@rubicon.dev
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/rubicon-tech-io/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://x.com/Rubicontech_io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  X
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Rubicon. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
