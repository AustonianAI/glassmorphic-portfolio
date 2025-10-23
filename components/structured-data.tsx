export function StructuredData() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Austin Johnson",
    url: "https://austinjohnson.me",
    image: "https://austinjohnson.me/photos/austin_johnson_profile.jpg",
    jobTitle: [
      "AI Software Engineer",
      "IRS Enrolled Agent",
      "AgTech Entrepreneur",
    ],
    description:
      "AI Software Engineer, IRS Enrolled Agent, Wedding Officiant, and AgTech Entrepreneur specializing in innovative technology solutions.",
    email: "contact@austinjohnson.me",
    sameAs: [
      "https://github.com/AustonianAI",
      "https://x.com/AustinAI",
      "https://www.linkedin.com/in/austinai/",
      "https://www.instagram.com/aj_builds_ai/",
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Dallas",
      addressRegion: "TX",
      addressCountry: "US",
    },
    alumniOf: {
      "@type": "Organization",
      name: "Entrepreneur & Self-Taught Developer",
    },
    knowsAbout: [
      "Artificial Intelligence",
      "Software Engineering",
      "Tax Planning",
      "Financial Advisory",
      "Next.js",
      "TypeScript",
      "Python",
      "AgTech",
      "E-commerce",
      "Business Automation",
    ],
    worksFor: [
      {
        "@type": "Organization",
        name: "HatcheryBrain",
        url: "https://hatcherybrain.com",
        description:
          "AgTech platform for sustainable agriculture inventory management",
      },
    ],
  }

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Austin Johnson Portfolio",
    url: "https://austinjohnson.me",
    description:
      "Professional portfolio showcasing AI software engineering, tax advisory services, and AgTech innovations.",
    author: {
      "@type": "Person",
      name: "Austin Johnson",
    },
  }

  const professionalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Austin Johnson - Tax & CFO Services",
    image: "https://austinjohnson.me/photos/austin_johnson_profile.jpg",
    description:
      "AI-first fractional CFO and tax advisory services helping driven teams achieve clarity and control over their financial performance.",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Dallas",
      addressRegion: "TX",
      addressCountry: "US",
    },
    areaServed: {
      "@type": "Country",
      name: "United States",
    },
    serviceType: [
      "Tax Planning",
      "Tax Preparation",
      "CFO Services",
      "Financial Advisory",
      "Business Returns",
      "Capital Gains Analysis",
    ],
  }

  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(professionalServiceSchema),
        }}
      />
    </>
  )
}
