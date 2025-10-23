"use client"

import { useState } from "react"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Send, Check, AlertCircle } from "lucide-react"

export function ContactWidget() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setStatus("idle")
    setErrorMessage("")

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Failed to send message")
      }

      setStatus("success")
      setFormData({ name: "", email: "", message: "" })

      // Reset success message after 5 seconds
      setTimeout(() => setStatus("idle"), 5000)
    } catch (error) {
      setStatus("error")
      setErrorMessage(
        error instanceof Error ? error.message : "Something went wrong"
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <Card className='glass-widget transition-all duration-300 h-full'>
      <CardHeader>
        <CardTitle className='flex items-center gap-2'>
          <Mail className='h-5 w-5' />
          Get In Touch
        </CardTitle>
      </CardHeader>
      <CardContent className='space-y-4'>
        {/* Email Link */}
        <div className='mb-4'>
          <Button
            variant='outline'
            className='glass-widget w-full justify-start'
            asChild
          >
            <a href='mailto:contact@austinjohnson.me'>
              <Mail className='h-4 w-4 mr-2' />
              contact@austinjohnson.me
            </a>
          </Button>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className='space-y-3'>
          <Input
            name='name'
            value={formData.name}
            onChange={handleChange}
            placeholder='Your Name'
            className='glass-widget border-white/20 dark:border-white/10'
            required
            disabled={isSubmitting}
          />
          <Input
            name='email'
            type='email'
            value={formData.email}
            onChange={handleChange}
            placeholder='Your Email'
            className='glass-widget border-white/20 dark:border-white/10'
            required
            disabled={isSubmitting}
          />
          <Textarea
            name='message'
            value={formData.message}
            onChange={handleChange}
            placeholder='Your Message'
            rows={4}
            className='glass-widget border-white/20 dark:border-white/10 resize-none'
            required
            disabled={isSubmitting}
          />

          {/* Status Messages */}
          {status === "success" && (
            <div className='flex items-center gap-2 text-green-600 dark:text-green-400 text-sm'>
              <Check className='h-4 w-4' />
              Message sent successfully! I&apos;ll get back to you soon.
            </div>
          )}

          {status === "error" && (
            <div className='flex items-center gap-2 text-red-600 dark:text-red-400 text-sm'>
              <AlertCircle className='h-4 w-4' />
              {errorMessage}
            </div>
          )}

          <Button
            className='w-full glass-widget text-foreground font-medium'
            type='submit'
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <div className='h-4 w-4 mr-2 border-2 border-t-transparent border-foreground rounded-full animate-spin' />
                Sending...
              </>
            ) : (
              <>
                <Send className='h-4 w-4 mr-2' />
                Send Message
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
