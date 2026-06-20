import HeroSection from '@/components/home/HeroSection'
import ServicesSection from '@/components/services/ServicesSection'
import TechStackStrip from '@/components/home/TechStackStrip'
import WorksSection from '@/components/home/WorksSection'
import AboutSection from '@/components/home/AboutSection'
import ContactSection from '@/components/home/ContactSection'
import { getFeaturedRepos, getContributions } from '@/lib/github'

export default async function HomePage() {
  const [repos, contributions] = await Promise.all([getFeaturedRepos(), getContributions()])
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <TechStackStrip />
      <WorksSection repos={repos} contributions={contributions} />
      <AboutSection />
      <ContactSection />
    </>
  )
}
