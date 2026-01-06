/* New dedicated partners section - highlights official partnerships with larger logos */
export function PartnersSection() {
  const partners = [
    { name: "Stellar Foundation", logo: "STELLAR" },
    { name: "Algorand Foundation", logo: "ALGORAND" },
    { name: "Consensus", logo: "CONSENSUS" },
    { name: "Halborn", logo: "HALBORN" },
    // { name: "Fintech Forum Argentina", logo: "FINTECH FORUM" },
    { name: "ETH Latam", logo: "ETH Latam" },
  ]

  return (
    <section className="py-16 md:py-24 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">Official Partners</h2>
          <p className="mt-3 text-muted-foreground">Building the future of blockchain and AI with industry leaders</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 items-center justify-items-center">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="text-accent font-semibold tracking-widest text-sm hover:text-accent/80 transition-colors"
            >
              {partner.logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
