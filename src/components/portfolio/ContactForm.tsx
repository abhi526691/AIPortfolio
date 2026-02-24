"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"
import { Mail, MessageSquare, Send, User, CheckCircle2 } from "lucide-react"

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const { toast } = useToast()

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSuccess(true)
      toast({
        title: "Message Sent!",
        description: "I'll get back to you as soon as possible.",
      })
    }, 1500)
  }

  return (
    <section id="contact" className="py-24 bg-card/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-5xl font-headline font-bold">Let's <span className="text-primary">Connect</span></h2>
              <p className="text-foreground/60 text-lg">
                Interested in collaborating on an AI project or have an opportunity? Drop me a message and let's discuss how we can build something impactful together.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4 p-4 rounded-2xl glass-card border-none">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-foreground/50 font-medium">Email Me At</p>
                  <p className="font-bold">abhi526691shek@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 rounded-2xl glass-card border-none">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-foreground/50 font-medium">Location</p>
                  <p className="font-bold">Toronto, ON (Open to Relocate)</p>
                </div>
              </div>
            </div>
          </div>

          <Card className="glass-card p-8 rounded-3xl shadow-2xl border-none">
            {isSuccess ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-6 py-12">
                <div className="w-20 h-20 rounded-full bg-accent/20 flex items-center justify-center text-accent animate-bounce">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-headline font-bold">Transmission Successful!</h3>
                  <p className="text-foreground/60">Thank you for reaching out. I'll review your message and reply shortly.</p>
                </div>
                <Button variant="outline" onClick={() => setIsSuccess(false)} className="rounded-full">
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSendMessage} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold flex items-center gap-2">
                      <User className="w-4 h-4 text-primary" /> Full Name
                    </label>
                    <Input placeholder="John Doe" required className="bg-muted border-none h-12" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold flex items-center gap-2">
                      <Mail className="w-4 h-4 text-primary" /> Email Address
                    </label>
                    <Input type="email" placeholder="john@example.com" required className="bg-muted border-none h-12" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold flex items-center gap-2">
                    <MessageSquare className="w-4 h-4 text-primary" /> Your Message
                  </label>
                  <Textarea placeholder="Tell me about your project or inquiry..." required className="bg-muted border-none min-h-[150px] resize-none" />
                </div>
                <Button type="submit" size="lg" className="w-full rounded-full h-12 shadow-lg shadow-primary/20" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : (
                    <>Send Message <Send className="ml-2 w-4 h-4" /></>
                  )}
                </Button>
              </form>
            )}
          </Card>
        </div>
      </div>
    </section>
  )
}