
"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"
import { Mail, MessageSquare, Send, User, CheckCircle2, MapPin, Globe, Copy, Terminal } from "lucide-react"
import { cn } from "@/lib/utils"

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
        title: "Protocol Success",
        description: "Message transmitted to Abhishek's neural link.",
      })
    }, 1500)
  }

  const copyEmail = () => {
    navigator.clipboard.writeText("abhi526691shek@gmail.com")
    toast({
      description: "Email copied to clipboard",
    })
  }

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-20" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          
          {/* Left Side: Context & Info */}
          <div className="lg:w-1/3 space-y-12">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-[10px] font-bold tracking-widest uppercase">
                <Terminal className="w-3 h-3" /> System Connection
              </div>
              <h2 className="text-4xl md:text-6xl font-headline font-bold leading-tight">
                Initialize <br />
                <span className="text-primary italic">Connection</span>
              </h2>
              <p className="text-foreground/60 text-lg leading-relaxed">
                Ready to architect the next generation of AI? Send a protocol request to start a collaboration.
              </p>
            </div>

            <div className="space-y-4">
              <div className="group relative p-6 rounded-2xl glass-card border-none hover:bg-primary/5 transition-all duration-500 overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full" onClick={copyEmail}>
                    <Copy className="w-4 h-4" />
                  </Button>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] text-primary font-bold uppercase tracking-tighter mb-1">Email Endpoint</p>
                    <p className="font-mono text-sm break-all">abhi526691shek@gmail.com</p>
                  </div>
                </div>
              </div>

              <div className="group p-6 rounded-2xl glass-card border-none hover:bg-accent/5 transition-all duration-500">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] text-accent font-bold uppercase tracking-tighter mb-1">Location Node</p>
                    <p className="font-bold text-sm">Toronto, ON (Open to Relocate)</p>
                  </div>
                </div>
              </div>

              <div className="group p-6 rounded-2xl glass-card border-none hover:bg-primary/5 transition-all duration-500">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <Globe className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] text-primary font-bold uppercase tracking-tighter mb-1">Response Time</p>
                    <p className="font-bold text-sm">&lt; 24 Hours (Sub-100ms Inference)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Modern Form */}
          <div className="lg:w-2/3">
            <Card className="glass-card p-1 rounded-3xl shadow-2xl border-primary/10 overflow-hidden">
              <div className="bg-background/40 p-8 md:p-12">
                {isSuccess ? (
                  <div className="h-[450px] flex flex-col items-center justify-center text-center space-y-8 animate-in zoom-in duration-500">
                    <div className="relative">
                      <div className="absolute inset-0 bg-accent/20 blur-2xl rounded-full scale-150 animate-pulse" />
                      <div className="relative w-24 h-24 rounded-full bg-accent/20 flex items-center justify-center text-accent">
                        <CheckCircle2 className="w-12 h-12" />
                      </div>
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-3xl font-headline font-bold uppercase tracking-tighter">Transmission Complete</h3>
                      <p className="text-foreground/60 max-w-sm mx-auto">
                        Your message has been processed. I'll get back to you shortly.
                      </p>
                    </div>
                    <Button variant="outline" onClick={() => setIsSuccess(false)} className="rounded-full px-8 h-12 border-primary/20 hover:bg-primary/5">
                      Reset Interface
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSendMessage} className="space-y-8">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="space-y-3">
                        <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-foreground/40 flex items-center gap-2">
                          <User className="w-3 h-3 text-primary" /> Sender Identification
                        </label>
                        <Input 
                          placeholder="What is your name?" 
                          required 
                          className="bg-muted/30 border-none border-b border-border/50 rounded-none h-14 px-0 focus-visible:ring-0 focus-visible:border-primary transition-all text-lg placeholder:text-foreground/20" 
                        />
                      </div>
                      <div className="space-y-3">
                        <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-foreground/40 flex items-center gap-2">
                          <Mail className="w-3 h-3 text-primary" /> Return Frequency
                        </label>
                        <Input 
                          type="email" 
                          placeholder="Your email address" 
                          required 
                          className="bg-muted/30 border-none border-b border-border/50 rounded-none h-14 px-0 focus-visible:ring-0 focus-visible:border-primary transition-all text-lg placeholder:text-foreground/20" 
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-foreground/40 flex items-center gap-2">
                        <MessageSquare className="w-3 h-3 text-primary" /> Payload Data
                      </label>
                      <Textarea 
                        placeholder="Detail your project requirements or inquiry..." 
                        required 
                        className="bg-muted/30 border-none border-b border-border/50 rounded-none min-h-[180px] resize-none px-0 focus-visible:ring-0 focus-visible:border-primary transition-all text-lg placeholder:text-foreground/20" 
                      />
                    </div>

                    <div className="pt-4 flex items-center justify-between gap-6">
                      <p className="text-[10px] text-foreground/30 font-mono hidden sm:block">
                        // SECURE_CONNECTION_ESTABLISHED <br />
                        // ENCRYPTING_PAYLOAD_v2.0
                      </p>
                      <Button 
                        type="submit" 
                        size="lg" 
                        className="rounded-full h-16 px-10 shadow-xl shadow-primary/20 text-md font-bold transition-all hover:scale-105 active:scale-95 group"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <div className="flex items-center gap-2">
                            <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                            Transmitting...
                          </div>
                        ) : (
                          <>
                            Send Protocol
                            <Send className="ml-3 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                          </>
                        )}
                      </Button>
                    </div>
                  </form>
                )}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
