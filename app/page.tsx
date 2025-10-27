import { HeroSection } from "@/components/hero-section"
import { AboutWidget } from "@/components/widgets/about-widget"
import { SkillsWidget } from "@/components/widgets/skills-widget"
import { ProjectsWidget } from "@/components/widgets/projects-widget"
import { ContactWidget } from "@/components/widgets/contact-widget"
import { ScheduleWidget } from "@/components/widgets/schedule-widget"
import Image from "next/image"

export default function Home() {
  return (
    <main className='min-h-screen p-4 md:p-8 lg:p-12 relative'>
      {/* Background Image */}
      <div className='fixed inset-0 -z-10'>
        <Image
          src='/bg-mobile.jpg'
          alt='Background'
          fill
          className='object-cover'
          priority
          quality={90}
        />
      </div>

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
        </div>

        {/* Featured Projects - Full Width */}
        <div className='mt-6'>
          <ProjectsWidget />
        </div>

        {/* Contact & Schedule Grid */}
        <div className='mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6'>
          {/* Contact Widget - 2/3 width on large screens */}
          <div className='lg:col-span-2'>
            <ContactWidget />
          </div>

          {/* Schedule Widget - 1/3 width on large screens */}
          <div>
            <ScheduleWidget />
          </div>
        </div>

        {/* Footer */}
        <footer className='mt-12 text-center text-sm text-muted-foreground'>
          <p className='glass-widget inline-block px-6 py-3 rounded-full'>
            © {new Date().getFullYear()} Austin Johnson. Built with Cursor.{" "}
            <a
              href='https://github.com/AustonianAI/glassmorphic-portfolio'
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex items-center gap-1 hover:text-blue-500 dark:hover:text-blue-400 transition-colors'
              aria-label='View source on GitHub'
            >
              <svg
                viewBox='0 0 24 24'
                className='h-4 w-4'
                fill='currentColor'
                aria-hidden='true'
              >
                <path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' />
              </svg>
              Source
            </a>
          </p>
        </footer>
      </div>
    </main>
  )
}
