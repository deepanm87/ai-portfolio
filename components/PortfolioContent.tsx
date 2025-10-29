import { AboutSection }  from "@/components/sections/AboutSection"
import HeroSection from "@/components/sections/HeroSection"
import { TestimonialsSection } from "./sections/TestimonialsSection"

export default async function PortfolioContent() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <TestimonialsSection />
    </>
  )
}
