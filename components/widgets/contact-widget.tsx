import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Github, Linkedin, Send } from "lucide-react"

export function ContactWidget() {
  return (
    <Card className='glass-widget transition-all duration-300 h-full'>
      <CardHeader>
        <CardTitle className='flex items-center gap-2'>
          <Mail className='h-5 w-5' />
          Get In Touch
        </CardTitle>
      </CardHeader>
      <CardContent className='space-y-4'>
        {/* Social Links */}
        <div className='flex gap-3 mb-4'>
          <Button
            variant='outline'
            size='icon'
            className='glass-widget'
            asChild
          >
            <a href='mailto:contact@austinjohnson.me' aria-label='Email'>
              <Mail className='h-4 w-4' />
            </a>
          </Button>
          <Button
            variant='outline'
            size='icon'
            className='glass-widget'
            asChild
          >
            <a
              href='https://github.com'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='GitHub'
            >
              <Github className='h-4 w-4' />
            </a>
          </Button>
          <Button
            variant='outline'
            size='icon'
            className='glass-widget'
            asChild
          >
            <a
              href='https://linkedin.com'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='LinkedIn'
            >
              <Linkedin className='h-4 w-4' />
            </a>
          </Button>
        </div>

        {/* Contact Form */}
        <form className='space-y-3'>
          <Input
            placeholder='Your Name'
            className='glass-widget border-white/20 dark:border-white/10'
          />
          <Input
            type='email'
            placeholder='Your Email'
            className='glass-widget border-white/20 dark:border-white/10'
          />
          <Textarea
            placeholder='Your Message'
            rows={4}
            className='glass-widget border-white/20 dark:border-white/10 resize-none'
          />
          <Button className='w-full glass-widget' type='submit'>
            <Send className='h-4 w-4 mr-2' />
            Send Message
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
