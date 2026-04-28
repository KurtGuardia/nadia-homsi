import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import HeroSection from '@/components/sections/HeroSection'
import AboutSection from '@/components/sections/AboutSection'
import MethodologySection from '@/components/sections/MethodologySection'
import VisionSection from '@/components/sections/VisionSection'
import CoursesSection from '@/components/sections/CoursesSection'
import CTASection from '@/components/sections/CTASection'
import InstagramSection from '@/components/sections/InstagramSection'
import SessionsSection from '@/components/sections/SessionsSection'
import TestimonySection from '@/components/sections/TestimonySection'
import PartnersSection from '@/components/sections/PartnersSection'
import TestimonySectionImprove from '@/components/sections/TestimonySectionImprove'
import CoursesSectionCloudinary from '@/components/sections/CoursesSectionCloudinary'

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <MethodologySection />
      <SessionsSection />
      <VisionSection />
      <CoursesSectionCloudinary />
      {/* <CoursesSection /> */}
      <PartnersSection />
      <InstagramSection />
      <TestimonySectionImprove />
      {/* <TestimonySection /> */}
      <CTASection />
      <Footer />
    </main>
  )
}
