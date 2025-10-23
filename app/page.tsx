import { HeroSection } from "@/components/hero-section"
import { AboutWidget } from "@/components/widgets/about-widget"
import { SkillsWidget } from "@/components/widgets/skills-widget"
import { ExperienceWidget } from "@/components/widgets/experience-widget"
import { ProjectsWidget } from "@/components/widgets/projects-widget"
import { ContactWidget } from "@/components/widgets/contact-widget"
import { BackgroundVideo } from "@/components/background-video"

export default function Home() {
  return (
    <main className='min-h-screen p-4 md:p-8 lg:p-12 relative'>
      {/* Background Video */}
      <BackgroundVideo />

      <div className='max-w-7xl mx-auto relative z-10'>
        {/* Hero Section */}
        <HeroSection />

        {/* Widget Dashboard Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr'>
          {/* About Widget - spans 2 columns on large screens */}
          <div className='lg:col-span-2'>
            <AboutWidget />
          </div>

          {/* Skills Widget */}
          <div>
            <SkillsWidget />
          </div>

          {/* Experience Widget - spans 2 columns */}
          <div className='md:col-span-2'>
            <ExperienceWidget />
          </div>

          {/* Contact Widget */}
          <div>
            <ContactWidget />
          </div>

          {/* Projects Widget - spans full width */}
          <div className='md:col-span-2 lg:col-span-3'>
            <ProjectsWidget />
          </div>
        </div>

        {/* Footer */}
        <footer className='mt-12 text-center text-sm text-muted-foreground'>
          <p className='glass-widget inline-block px-6 py-3 rounded-full'>
            © {new Date().getFullYear()} Austin Johnson. Built with Next.js &
            TypeScript.
          </p>
        </footer>
      </div>
    </main>
  )
}
