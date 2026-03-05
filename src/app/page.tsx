import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import StatsSection from '@/components/StatsSection'
import ServicesSection from '@/components/ServicesSection'
import HowItWorksSection from '@/components/HowItWorksSection'
import IntegrationsSection from '@/components/IntegrationsSection'
import ResultsSection from '@/components/ResultsSection'
import CTASection from '@/components/CTASection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <HowItWorksSection />
      <IntegrationsSection />
      <ResultsSection />
      <CTASection />
      <Footer />
    </main>
  )
}
