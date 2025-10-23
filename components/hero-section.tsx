import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ThemeToggle } from "./theme-toggle"

export function HeroSection() {
  return (
    <div className='relative w-full mb-8'>
      {/* Theme Toggle in top-right */}
      <div className='absolute top-4 right-4 z-10'>
        <ThemeToggle />
      </div>

      <Card className='glass-widget transition-all duration-300 p-8 md:p-12'>
        <div className='flex flex-col md:flex-row items-center gap-8'>
          {/* Profile Photo */}
          <div className='relative'>
            <div className='w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden ring-4 ring-white/20 dark:ring-white/10 shadow-xl'>
              <div className='w-full h-full bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center text-white text-5xl md:text-6xl font-bold'>
                AJ
              </div>
            </div>
          </div>

          {/* Name and Titles */}
          <div className='flex-1 text-center md:text-left'>
            <h1 className='text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent'>
              Austin Johnson
            </h1>
            <div className='flex flex-wrap gap-3 justify-center md:justify-start'>
              <Badge
                variant='secondary'
                className='text-sm md:text-base px-4 py-2 glass-widget'
              >
                💻 Software Engineer
              </Badge>
              <Badge
                variant='secondary'
                className='text-sm md:text-base px-4 py-2 glass-widget'
              >
                📊 IRS Enrolled Agent
              </Badge>
            </div>
            <p className='mt-4 text-muted-foreground text-lg max-w-2xl'>
              Building innovative solutions at the intersection of technology
              and finance
            </p>
          </div>
        </div>
      </Card>
    </div>
  )
}
