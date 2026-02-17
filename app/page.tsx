import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { LegalSection } from "@/components/legal-section"
import { TeamSection } from "@/components/team-section"
import { CtaSection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <LegalSection />
      <TeamSection />
      <CtaSection />
      <Footer />
    </main>
  )
}
