import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "./theme-toggle"
import Image from "next/image"
import { Github, Linkedin, Instagram } from "lucide-react"

export function HeroSection() {
  const socialLinks = [
    {
      name: "X (Twitter)",
      url: "https://x.com/AustinAI",
      icon: (
        <svg
          viewBox='0 0 24 24'
          className='h-5 w-5'
          fill='currentColor'
          aria-hidden='true'
        >
          <path d='M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z' />
        </svg>
      ),
    },
    {
      name: "GitHub",
      url: "https://github.com/AustonianAI",
      icon: <Github className='h-5 w-5' />,
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/austinai/",
      icon: <Linkedin className='h-5 w-5' />,
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/aj_builds_ai/",
      icon: <Instagram className='h-5 w-5' />,
    },
  ]

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
              <Image
                src='/photos/austin_johnson_profile.jpg'
                alt='Austin Johnson'
                width={160}
                height={160}
                className='w-full h-full object-cover'
                priority
              />
            </div>
          </div>

          {/* Name and Titles */}
          <div className='flex-1 text-center md:text-left'>
            <h1 className='text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent'>
              Austin Johnson
            </h1>
            <div className='flex flex-wrap gap-2 justify-center md:justify-start mb-4'>
              <Badge
                variant='secondary'
                className='text-xs md:text-sm px-3 py-1 glass-widget'
              >
                AI Software Engineer
              </Badge>
              <Badge
                variant='secondary'
                className='text-xs md:text-sm px-3 py-1 glass-widget'
              >
                IRS Enrolled Agent
              </Badge>
              <Badge
                variant='secondary'
                className='text-xs md:text-sm px-3 py-1 glass-widget'
              >
                Wedding Officiant
              </Badge>
              <Badge
                variant='secondary'
                className='text-xs md:text-sm px-3 py-1 glass-widget'
              >
                AgTech Entrepreneur
              </Badge>
            </div>
            <p className='mt-4 text-muted-foreground text-lg md:text-xl max-w-2xl mb-6 font-medium'>
              Entrepreneur, Technologist, and Relentless Simplifier
            </p>

            {/* Social Links */}
            <div className='flex gap-3 justify-center md:justify-start'>
              {socialLinks.map((social) => (
                <Button
                  key={social.name}
                  variant='outline'
                  size='icon'
                  className='glass-widget hover:scale-110 transition-transform'
                  asChild
                >
                  <a
                    href={social.url}
                    target='_blank'
                    rel='noopener noreferrer'
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}
