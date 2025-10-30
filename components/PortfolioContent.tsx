import { AboutSection }  from "@/components/sections/AboutSection"
import HeroSection from "@/components/sections/HeroSection"
import { TestimonialsSection } from "./sections/TestimonialsSection"
import { SkillsSection } from "./sections/SkillsSection"
import { ExperienceSection } from "./sections/ExperienceSection"
import { EducationSection } from "./sections/EducationSection"
import { ProjectsSection } from "./sections/ProjectsSection"
import { CertificationsSection } from "./sections/CertificationsSection"
import { AchievementSection } from "./sections/AchievementsSections"
import { ServicesSection } from "./sections/ServicesSection"
import { BlogSection } from "./sections/BlogSection"

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
      <CertificationsSection />
      <AchievementSection />
      <ServicesSection />
      <BlogSection />
    </>
  )
}
