import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { User } from "lucide-react"

export function AboutWidget() {
  return (
    <Card className='glass-widget transition-all duration-300 h-full'>
      <CardHeader>
        <CardTitle className='flex items-center gap-2'>
          <User className='h-5 w-5' />
          About Me
        </CardTitle>
      </CardHeader>
      <CardContent className='space-y-4'>
        <p className='text-muted-foreground leading-relaxed'>
          I&apos;m a passionate software engineer with expertise in full-stack
          development, specializing in modern web technologies and cloud
          infrastructure.
        </p>
        <p className='text-muted-foreground leading-relaxed'>
          As an IRS Enrolled Agent, I bring a unique perspective to financial
          technology, combining technical skills with deep tax knowledge to
          create compliant and efficient solutions.
        </p>
        <p className='text-muted-foreground leading-relaxed'>
          I love solving complex problems and building tools that make a real
          difference for businesses and individuals.
        </p>
      </CardContent>
    </Card>
  )
}
