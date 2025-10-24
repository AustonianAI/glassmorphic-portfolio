"use client"

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { FolderGit2, ExternalLink, Github } from "lucide-react"
import Image from "next/image"

export function ProjectsWidget() {
  const projects = [
    {
      name: "HatcheryBrain",
      shortDescription: "Inventory management platform",
      description:
        "An API-first platform built for an industry leading partner in the sustainable agriculture sector. This app plans a hatchery's production schedule, literally counting chickens before they hatch. Inventory is communicated in real-time to a variety of wholesale and retail sales channels, and bookings are managed on a comprehensive platform.",
      url: "https://apiv2.hatcherybrain.com/documentation",
      image: "/images/hatcherybrain-cli.gif",
      tags: [
        "Nest.js",
        "Heroku",
        "PostgreSQL",
        "AWS",
        "ShipStation API",
        "RESTful API",
      ],
      github: null,
    },

    {
      name: "ShipStation Order Splitter",
      shortDescription: "YouTube Demo of a Custom ShipStation App",
      description:
        "A demonstration of automatically splitting orders in ShipStation using a custom Node.js application and the ShipStation API. This app shows how to use a custom app to solve a common feature request on a widely used order management platform.",
      url: "https://www.youtube.com/watch?v=I-rpgSMXKuw",
      image: "/images/shipstation-split.webp",
      tags: ["Node.js", "Express", "ShipStation API", "Webhooks", "YouTube"],
      github: "https://github.com/AustonianAI/shipstation-order-splitting",
    },
    {
      name: "Jsonify",
      shortDescription: "Early PDF to Structured Data Converter",
      description:
        "One of the earliest AI-powered tools for converting PDF documents into structured JSON data. This was a proof of concept submitted in the Foundation Capital AI Hackathon in 2022 - showcasing an early example of prompt engineering and AI-powered data extraction.",
      url: "https://jsonify.org",
      image: "/images/jsonify.webp",
      tags: ["OpenAI", "Next.js", "TypeScript", "Tailwind", "LLMs"],
      github: "https://github.com/AustonianAI/pdf-to-json",
    },
    {
      name: "USPS API Tools",
      shortDescription: "Python CLI Tool for the USPS API",
      description:
        "Python Flask application providing CLI tools for interacting with USPS APIs. Features include package tracking, shipping zone calculations, and Network Distribution Center (NDC) lookups. This is a public app to demonstrate many of the features I've used with the USPS API to automate various logistics and reporting needs.",
      url: "https://github.com/AustonianAI/usps-api-tools",
      image: "/images/usps-cli.gif",
      tags: ["Python", "Flask", "CLI", "USPS API"],
      github: "https://github.com/AustonianAI/usps-api-tools",
    },
    {
      name: "ChickensForBackyards.com",
      shortDescription: "Next.js Headless Shopify App",
      description:
        "A modern headless Shopify app that utilizes Next.js to deliver a fully custom shopping experience. By controlling all aspects of the UI/UX, driven by Shopify's powerful GraphQL API and content management system, this app demonstrates a highly niched and nuanced e-commerce experience.",
      url: "https://chickensforbackyards.com",
      image: "/images/cfb_shopify.webp",
      tags: [
        "Next.js",
        "TypeScript",
        "Tailwind",
        "GraphQL",
        "Shopify",
        "Shadcn",
      ],
      github: null,
    },
    {
      name: "LoL Keepers",
      shortDescription: "Fantasy Football League Keeper Analytics",
      description:
        "Analytics platform to evaluate keeper decisions for my fantasy football league (League of Legends). Compares projected player values against keeper costs to help make data-driven roster decisions. It features a sum of years' digits algorithm to weight draft picks and determine a keeper's asset value.",
      url: "https://lol-keepers.vercel.app",
      image: "/images/lol-keepers.webp",
      tags: ["Python", "Django", "Algorithms", "Fantasy Football"],
      github: "https://github.com/AustonianAI/lol-keepers",
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
      <CardContent className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.url}
            target='_blank'
            rel='noopener noreferrer'
            className='block rounded-lg glass-widget transition-all duration-300 group hover:scale-[1.02] overflow-hidden'
          >
            {/* Project Image */}
            <div className='relative w-full h-64 overflow-hidden bg-muted'>
              <Image
                src={project.image}
                alt={project.name}
                fill
                className='object-cover object-top group-hover:scale-105 transition-transform duration-300'
              />
            </div>

            {/* Project Content */}
            <div className='p-4 relative'>
              <div className='flex items-start justify-between mb-2'>
                <h3 className='font-semibold text-lg group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors'>
                  {project.name}
                </h3>
                <ExternalLink className='h-5 w-5 text-muted-foreground group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors shrink-0 mt-1' />
              </div>

              <p className='text-sm text-muted-foreground mb-3 leading-relaxed'>
                {project.description}
              </p>

              {/* Technology Tags */}
              <div className='flex flex-wrap gap-2 mb-2'>
                {project.tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant='secondary'
                    className='text-xs glass-widget'
                  >
                    {tag}
                  </Badge>
                ))}
              </div>

              <div className='flex items-center justify-between mt-2'>
                <p className='text-xs text-muted-foreground font-mono'>
                  {project.url.replace("https://", "").replace("www.", "")}
                </p>
                {project.github && (
                  <Button
                    variant='ghost'
                    size='icon'
                    className='h-8 w-8 glass-widget cursor-pointer hover:text-blue-500 dark:hover:text-blue-400 transition-colors'
                    onClick={(e) => {
                      e.preventDefault()
                      window.open(project.github!, "_blank")
                    }}
                    aria-label='View on GitHub'
                  >
                    <Github className='h-4 w-4' />
                  </Button>
                )}
              </div>
            </div>
          </a>
        ))}
      </CardContent>
    </Card>
  )
}
