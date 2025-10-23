import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code2 } from "lucide-react"

export function SkillsWidget() {
  const favoriteTechnologies = [
    "Next.js",
    "TypeScript",
    "Shadcn",
    "Tailwind",
    "Python",
    "Flask",
    "Cursor",
    "Claude",
    "Pandas",
    "Postgres",
    "Supabase",
    "Vercel",
    "ShipStation",
  ]

  const financialServices = [
    "Personal Returns",
    "Business Returns",
    "Capital Gains Analysis",
    "Tax Planning",
    "Portfolio Construction",
    "Health Savings Accounts (HSAs)",
    "Insurance Planning",
    "Individual Retirement Accounts (IRAs)",
    "Roth Conversions",
    "Investment Analysis",
    "Accounting Design",
    "Bookkeeping Automation",
    "1031 Exchanges",
    "Retirement Planning",
  ]

  const hobbies = [
    "Reading",
    "Weightlifting",
    "Walking",
    "Travel",
    "Speaking Spanish",
    "Biblical Studies",
    "Trivia",
    "History",
    "Investing",
    "Anthropology",
    "Economics",
    "Fantasy Football",
    "Fantasy Basketball",
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
            Favored Technologies and Tools
          </h3>
          <div className='flex flex-wrap gap-2'>
            {favoriteTechnologies.map((skill) => (
              <Badge key={skill} variant='secondary' className='glass-widget'>
                {skill}
              </Badge>
            ))}
          </div>
        </div>
        <div>
          <h3 className='text-sm font-semibold mb-3 text-muted-foreground'>
            Financial and Tax Services
          </h3>
          <div className='flex flex-wrap gap-2'>
            {financialServices.map((skill) => (
              <Badge key={skill} variant='secondary' className='glass-widget'>
                {skill}
              </Badge>
            ))}
          </div>
        </div>
        <div>
          <h3 className='text-sm font-semibold mb-3 text-muted-foreground'>
            Hobbies and Interests
          </h3>
          <div className='flex flex-wrap gap-2'>
            {hobbies.map((skill) => (
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
