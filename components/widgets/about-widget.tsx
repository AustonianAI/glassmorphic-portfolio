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
          I&apos;m a technologist and finance professional based in Dallas, TX.
          With over two decades of entrepreneurial, small business, and
          consulting experience, I&apos;ve helped countless teams unlock their
          potential by understanding, automating - and most importantly -
          simplifying how they create value.
        </p>
        <p className='text-muted-foreground leading-relaxed'>
          After founding my first e-commerce company shortly after college, I
          grew it into an industry leader - reaching over $1.5M in ARR and
          serving more than 50,000 customers while still in my 20s. That journey
          solidified my drive to pursue tech-forward solutions and sparked a
          lifelong curiosity about human behavior - from employees and partners
          to clients and customers.
        </p>
        <p className='text-muted-foreground leading-relaxed'>
          Following that success, I built HatcheryBrain, a leading AgTech
          platform that manages inventory and production for the sustainable
          agriculture sector. The platform has powered $50M+ in lifetime
          transactions for hundreds of thousands of customers.
        </p>
        <p className='text-muted-foreground leading-relaxed'>
          Now, as an Enrolled Agent licensed to practice before the IRS, I
          combine my passion for technology and finance through AI-first
          fractional CFO and tax advisory services — helping driven teams
          achieve clarity and control over their financial performance.
        </p>
        <p className='text-muted-foreground leading-relaxed'>
          A lifelong autodidact and avid traveler, I&apos;ve spent several years
          exploring Latin America as a digital nomad with my wife. I&apos;m
          passionate about reading, fitness, and meaningful conversation - and
          can often be found walking, thinking, or occasionally officiating a
          wedding ceremony.
        </p>
      </CardContent>
    </Card>
  )
}
