"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Prevent hydration mismatch
  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 0)
    return () => clearTimeout(timer)
  }, [])

  if (!mounted) {
    return (
      <Button variant='outline' size='icon' className='glass-widget'>
        <Sun className='h-[1.2rem] w-[1.2rem]' />
      </Button>
    )
  }

  return (
    <Button
      variant='outline'
      size='icon'
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className='glass-widget transition-all duration-300'
    >
      {theme === "dark" ? (
        <Sun className='h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all' />
      ) : (
        <Moon className='h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all' />
      )}
      <span className='sr-only'>Toggle theme</span>
    </Button>
  )
}
