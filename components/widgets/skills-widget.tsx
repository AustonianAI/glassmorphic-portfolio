import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code2 } from "lucide-react"

export function SkillsWidget() {
  const technicalSkills = [
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Python",
    "TailwindCSS",
    "PostgreSQL",
    "AWS",
  ]

  const professionalSkills = [
    "Tax Preparation",
    "Tax Planning",
    "IRS Representation",
    "Financial Analysis",
    "Compliance",
    "Client Advisory",
  ]

  return (
    <Card className='glass-widget transition-all duration-300 h-full'>
      <CardHeader>
        <CardTitle className='flex items-center gap-2'>
          <Code2 className='h-5 w-5' />
          Skills & Expertise
        </CardTitle>
      </CardHeader>
      <CardContent className='space-y-6'>
        <div>
          <h3 className='text-sm font-semibold mb-3 text-muted-foreground'>
            Technical
          </h3>
          <div className='flex flex-wrap gap-2'>
            {technicalSkills.map((skill) => (
              <Badge key={skill} variant='secondary' className='glass-widget'>
                {skill}
              </Badge>
            ))}
          </div>
        </div>
        <div>
          <h3 className='text-sm font-semibold mb-3 text-muted-foreground'>
            Professional
          </h3>
          <div className='flex flex-wrap gap-2'>
            {professionalSkills.map((skill) => (
              <Badge key={skill} variant='secondary' className='glass-widget'>
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
