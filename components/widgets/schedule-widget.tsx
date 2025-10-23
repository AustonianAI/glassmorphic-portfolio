"use client"

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, Video } from "lucide-react"

export function ScheduleWidget() {
  return (
    <Card className='glass-widget transition-all duration-300 h-full'>
      <CardHeader>
        <CardTitle className='flex items-center gap-2'>
          <Calendar className='h-5 w-5' />
          Schedule a Call
        </CardTitle>
      </CardHeader>
      <CardContent className='space-y-4'>
        <p className='text-sm text-muted-foreground'>
          Let&apos;s discuss your project, business needs, or explore how we can
          work together.
        </p>

        {/* Call Types */}
        <div className='space-y-3'>
          <div className='flex items-start gap-3 text-sm'>
            <Video className='h-4 w-4 mt-0.5 text-primary' />
            <div>
              <p className='font-medium'>Virtual Meeting</p>
              <p className='text-xs text-muted-foreground'>
                30-60 minute video call
              </p>
            </div>
          </div>

          <div className='flex items-start gap-3 text-sm'>
            <Clock className='h-4 w-4 mt-0.5 text-primary' />
            <div>
              <p className='font-medium'>Flexible Scheduling</p>
              <p className='text-xs text-muted-foreground'>
                Book a time that works for you
              </p>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <Button
          className='w-full glass-widget mt-4 text-foreground font-medium'
          asChild
        >
          <a
            href='https://cal.com/austinjohnson'
            target='_blank'
            rel='noopener noreferrer'
          >
            <Calendar className='h-4 w-4 mr-2' />
            View Available Times
          </a>
        </Button>

        <p className='text-xs text-center text-muted-foreground mt-2'>
          Powered by Cal.com
        </p>
      </CardContent>
    </Card>
  )
}
