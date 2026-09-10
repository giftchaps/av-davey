import { ClientsSection } from '@/components/site/clients-section'
import { CtaBand } from '@/components/site/cta-band'
import { Hero } from '@/components/site/hero'
import { ProjectsSection } from '@/components/site/projects-section'
import { ServicesSection } from '@/components/site/services-section'
import { StatsBar } from '@/components/site/stats-bar'
import { Testimonials } from '@/components/site/testimonials'

export default function HomePage() {
  return (
    <main>
      <Hero />
      <StatsBar />

      <div className="mx-auto grid max-w-7xl gap-10 px-4 pt-12 sm:px-6 xl:grid-cols-12 xl:gap-6">
        <div className="xl:col-span-6 xl:border-r xl:pr-6">
          <ServicesSection />
        </div>
        <div className="xl:col-span-2 xl:border-r xl:pr-6">
          <ClientsSection />
        </div>
        <div className="xl:col-span-4">
          <ProjectsSection />
        </div>
      </div>

      <Testimonials />
      <CtaBand />
    </main>
  )
}
