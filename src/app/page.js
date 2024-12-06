import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import HeroSection from '@/components/sections/HeroSection'
import AboutSection from '@/components/sections/AboutSection'
import MethodologySection from '@/components/sections/MethodologySection'
import VisionSection from '@/components/sections/VisionSection'
import CTASection from '@/components/sections/CTASection'

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F5F1E8]">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <MethodologySection />
      <VisionSection />
      <CTASection />
      <Footer />
    </div>
  )
}