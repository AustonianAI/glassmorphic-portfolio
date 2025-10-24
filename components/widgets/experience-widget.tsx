import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Briefcase } from "lucide-react"

export function ExperienceWidget() {
  const experiences = [
    {
      title: "Senior Software Engineer",
      company: "Tech Company",
      period: "2020 - Present",
      description:
        "Leading development of scalable web applications and cloud infrastructure.",
      type: "tech",
    },
    {
      title: "Enrolled Agent",
      company: "Tax Practice",
      period: "2018 - Present",
      description:
        "Providing tax representation and advisory services to individuals and businesses.",
      type: "tax",
    },
    {
      title: "Full Stack Developer",
      company: "Startup Inc",
      period: "2017 - 2020",
      description:
        "Built MVPs and production applications using modern web technologies.",
      type: "tech",
    },
  ]

  return (
    <Card className='glass-widget transition-all duration-300 h-full'>
      <CardHeader>
        <CardTitle className='flex items-center gap-2'>
          <Briefcase className='h-5 w-5' />
          Experience
        </CardTitle>
      </CardHeader>
      <CardContent className='space-y-6'>
        {experiences.map((exp, index) => (
          <div
            key={index}
            className='relative pl-6 border-l-2 border-white/20 dark:border-white/10'
          >
            <div className='absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 ring-4 ring-background' />
            <div className='space-y-1'>
              <h3 className='font-semibold'>{exp.title}</h3>
              <p className='text-sm text-muted-foreground'>{exp.company}</p>
              <p className='text-xs text-muted-foreground'>{exp.period}</p>
              <p className='text-sm text-muted-foreground pt-2'>
                {exp.description}
              </p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
