import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FolderGit2, ExternalLink } from "lucide-react"

export function ProjectsWidget() {
  const projects = [
    {
      name: "Tax Automation Platform",
      description:
        "Full-stack application for automating tax workflows and client management.",
      tags: ["React", "Node.js", "PostgreSQL"],
      link: "#",
    },
    {
      name: "Financial Dashboard",
      description:
        "Real-time analytics dashboard for financial data visualization.",
      tags: ["Next.js", "TypeScript", "D3.js"],
      link: "#",
    },
    {
      name: "IRS Form Generator",
      description:
        "Tool for programmatically generating and validating IRS tax forms.",
      tags: ["Python", "PDF Generation", "API"],
      link: "#",
    },
  ]

  return (
    <Card className='glass-widget transition-all duration-300 h-full'>
      <CardHeader>
        <CardTitle className='flex items-center gap-2'>
          <FolderGit2 className='h-5 w-5' />
          Featured Projects
        </CardTitle>
      </CardHeader>
      <CardContent className='space-y-4'>
        {projects.map((project, index) => (
          <div
            key={index}
            className='p-4 rounded-lg glass-widget transition-all duration-300 group cursor-pointer'
          >
            <div className='flex items-start justify-between mb-2'>
              <h3 className='font-semibold group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors'>
                {project.name}
              </h3>
              <ExternalLink className='h-4 w-4 text-muted-foreground group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors' />
            </div>
            <p className='text-sm text-muted-foreground mb-3'>
              {project.description}
            </p>
            <div className='flex flex-wrap gap-2'>
              {project.tags.map((tag) => (
                <Badge key={tag} variant='outline' className='text-xs'>
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
