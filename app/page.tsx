/* Added PartnersSection and AboutSection to home page flow */
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/home/hero-section"
import { PartnersSection } from "@/components/home/partners-section"
import { TrustedSection } from "@/components/home/trusted-section"
import { ServicesSection } from "@/components/home/services-section"
import { EngagementSection } from "@/components/home/engagement-section"
import { WhyRubiconSection } from "@/components/home/why-rubicon-section"
import { AboutSection } from "@/components/home/about-section"
import { CTAFinalSection } from "@/components/home/cta-final-section"

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        {/*<PartnersSection />*/}
        <TrustedSection />
        <AboutSection />
        <div className="md:py-20 bg-[var(--alt-background)]" >
          <ServicesSection />
          <EngagementSection />
          <WhyRubiconSection />
        </div>
        <CTAFinalSection />
      </main>
      <Footer />
    </>
  )
}
