import HeroSection from '@/components/home/HeroSection'
import FeaturesOverview from '@/components/home/FeaturesOverview'
import FreeToolsSection from '@/components/home/FreeToolsSection'
import StatsSection from '@/components/home/StatsSection'
import TestimonialsSection from '@/components/home/TestimonialsSection'
import CTASection from '@/components/home/CTASection'

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <FeaturesOverview />
      <FreeToolsSection />
      <StatsSection />
      <TestimonialsSection />
      <CTASection />
    </div>
  )
}