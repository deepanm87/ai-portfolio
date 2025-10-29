import { AboutSection }  from "@/components/sections/AboutSection"
import HeroSection from "@/components/sections/HeroSection"
import { TestimonialsSection } from "./sections/TestimonialsSection"
import { SkillsSection } from "./sections/SkillsSection"
import { ExperienceSection } from "./sections/ExperienceSection"
import { EducationSection } from "./sections/EducationSection"
import { ProjectsSection } from "./sections/ProjectsSection"

export default async function PortfolioContent() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <TestimonialsSection />
      <SkillsSection />
      <ExperienceSection />
      <EducationSection />
      <ProjectsSection />
    </>
  )
}
