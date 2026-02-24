"use client"

import { useState, useRef, useEffect } from "react"
import { aiPortfolioAssistant } from "@/ai/flows/ai-portfolio-assistant-flow"
import { Send, Bot, User, BrainCircuit, Sparkles, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { cn } from "@/lib/utils"

type Message = {
  role: 'user' | 'assistant'
  content: string
}

export function Chatbot() {
  const [input, setInput] = useState("")
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: "Hi! I'm Abhishek's AI agent. Ask me anything about his experience, projects, or technical skills!" }
  ])
  const [isLoading, setIsLoading] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }, [messages])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim() || isLoading) return

    const userMessage = input.trim()
    setInput("")
    setMessages(prev => [...prev, { role: 'user', content: userMessage }])
    setIsLoading(true)

    try {
      const response = await aiPortfolioAssistant(userMessage)
      setMessages(prev => [...prev, { role: 'assistant', content: response }])
    } catch (error) {
      setMessages(prev => [...prev, { role: 'assistant', content: "Sorry, I encountered an error processing your request. Please try again." }])
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section id="assistant" className="py-24 bg-background">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 text-accent font-bold tracking-widest text-xs uppercase">
            <Sparkles className="w-4 h-4" /> Powered by RAG & GenAI
          </div>
          <h2 className="text-3xl md:text-5xl font-headline font-bold">Ask My <span className="text-primary">Assistant</span></h2>
          <p className="text-foreground/60 max-w-2xl mx-auto">
            Experience my AI expertise firsthand. This chatbot is trained on my professional history and can answer complex questions about my technical background.
          </p>
        </div>

        <div className="glass-card rounded-3xl overflow-hidden shadow-2xl border-primary/20 flex flex-col h-[600px]">
          {/* Chat Header */}
          <div className="bg-primary/10 p-4 border-b border-border flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground shadow-lg shadow-primary/20">
                <BrainCircuit className="w-6 h-6" />
              </div>
              <div>
                <p className="font-bold text-sm">Abhishek's AI Agent</p>
                <p className="text-[10px] text-accent font-medium">ONLINE | GENAI-POWERED</p>
              </div>
            </div>
          </div>

          {/* Messages */}
          <ScrollArea className="flex-grow p-6">
            <div className="space-y-6">
              {messages.map((m, idx) => (
                <div key={idx} className={cn(
                  "flex gap-3 max-w-[85%]",
                  m.role === 'user' ? "ml-auto flex-row-reverse" : ""
                )}>
                  <div className={cn(
                    "w-8 h-8 rounded-full flex items-center justify-center shrink-0",
                    m.role === 'assistant' ? "bg-primary/20 text-primary" : "bg-accent/20 text-accent"
                  )}>
                    {m.role === 'assistant' ? <Bot className="w-5 h-5" /> : <User className="w-5 h-5" />}
                  </div>
                  <div className={cn(
                    "p-4 rounded-2xl text-sm leading-relaxed",
                    m.role === 'assistant' ? "bg-muted rounded-tl-none text-foreground/80" : "bg-primary text-primary-foreground rounded-tr-none shadow-md"
                  )}>
                    {m.content}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex gap-3 max-w-[85%]">
                  <div className="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center animate-pulse">
                    <Bot className="w-5 h-5" />
                  </div>
                  <div className="bg-muted p-4 rounded-2xl rounded-tl-none">
                    <Loader2 className="w-5 h-5 animate-spin text-primary" />
                  </div>
                </div>
              )}
              <div ref={scrollRef} />
            </div>
          </ScrollArea>

          {/* Input */}
          <form onSubmit={handleSubmit} className="p-4 border-t border-border bg-background/50 flex gap-2">
            <Input 
              placeholder="Ask about my Azure co-op or LLM projects..." 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="rounded-full bg-muted border-none focus-visible:ring-primary h-12"
              disabled={isLoading}
            />
            <Button 
              type="submit" 
              size="icon" 
              className="rounded-full h-12 w-12 shrink-0 shadow-lg"
              disabled={isLoading || !input.trim()}
            >
              <Send className="w-5 h-5" />
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}