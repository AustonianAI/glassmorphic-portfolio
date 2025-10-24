import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { StructuredData } from "@/components/structured-data"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  metadataBase: new URL("https://austinjohnson.me"),
  title: {
    default: "Austin Johnson - AI Software Engineer & Enrolled Agent",
    template: "%s | Austin Johnson",
  },
  description:
    "Portfolio of Austin Johnson - AI Software Engineer, Enrolled Agent licensed to practice before the IRS, Wedding Officiant, and AgTech Entrepreneur specializing in innovative technology solutions.",
  keywords: [
    "Austin Johnson",
    "AI Software Engineer",
    "Enrolled Agent",
    "Tax Professional",
    "AgTech Entrepreneur",
    "Software Developer",
    "Next.js Developer",
    "TypeScript",
    "Full Stack Developer",
    "CFO Services",
    "Tax Advisory",
    "HatcheryBrain",
    "Dallas TX",
  ],
  authors: [{ name: "Austin Johnson", url: "https://austinjohnson.me" }],
  creator: "Austin Johnson",
  publisher: "Austin Johnson",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://austinjohnson.me",
    siteName: "Austin Johnson Portfolio",
    title: "Austin Johnson - AI Software Engineer & Enrolled Agent",
    description:
      "Portfolio of Austin Johnson - AI Software Engineer, Enrolled Agent licensed to practice before the IRS, Wedding Officiant, and AgTech Entrepreneur specializing in innovative technology solutions.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Austin Johnson - AI Software Engineer & Enrolled Agent",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Austin Johnson - AI Software Engineer & Enrolled Agent",
    description:
      "Portfolio of Austin Johnson - AI Software Engineer, Enrolled Agent licensed to practice before the IRS, Wedding Officiant, and AgTech Entrepreneur specializing in innovative technology solutions.",
    creator: "@AustinAI",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon/favicon.ico", sizes: "any" },
    ],
    apple: [
      {
        url: "/favicon/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
    other: [
      {
        rel: "android-chrome",
        url: "/favicon/android-chrome-192x192.png",
        sizes: "192x192",
      },
      {
        rel: "android-chrome",
        url: "/favicon/android-chrome-512x512.png",
        sizes: "512x512",
      },
    ],
  },
  manifest: "/favicon/site.webmanifest",
  verification: {
    google: "your-google-site-verification-code",
    // Add other verification codes as needed (Bing, Yandex, etc.)
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <head>
        <StructuredData />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute='class'
          defaultTheme='dark'
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
