import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { 
  HeroSection, 
  FeaturesSection, 
  PersonalizationSection, 
  AboutSection, 
  GrowthSection,
  CTASection 
} from "@/components/home-sections"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <PersonalizationSection />
      <GrowthSection />
      <AboutSection />
      <CTASection />
      <Footer />
    </main>
  )
}
