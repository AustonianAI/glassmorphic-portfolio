import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Send } from "lucide-react"

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
        {/* Email Link */}
        <div className='mb-4'>
          <Button
            variant='outline'
            className='glass-widget w-full justify-start'
            asChild
          >
            <a href='mailto:contact@austinjohnson.me'>
              <Mail className='h-4 w-4 mr-2' />
              contact@austinjohnson.me
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
