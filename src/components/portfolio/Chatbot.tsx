"use client"

import { useState, useRef, useEffect } from "react"
import { aiPortfolioAssistant } from "@/ai/flows/ai-portfolio-assistant-flow"
import { Terminal, Send, Sparkles, Loader2, ChevronRight, X, Minus, Square } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { cn } from "@/lib/utils"

type Message = {
  role: 'user' | 'assistant'
  content: string
  timestamp: string
}

export function Chatbot() {
  const [input, setInput] = useState("")
  const [messages, setMessages] = useState<Message[]>([
    { 
      role: 'assistant', 
      content: "System initialized. Abhishek's Neural Link established. How can I assist with your inquiry today?",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
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
    const now = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    
    setInput("")
    setMessages(prev => [...prev, { role: 'user', content: userMessage, timestamp: now }])
    setIsLoading(true)

    try {
      const response = await aiPortfolioAssistant(userMessage)
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: response,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }])
    } catch (error) {
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: "ERROR: Failed to fetch response. Check neural connection.",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }])
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section id="assistant" className="py-24 bg-background relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-accent font-mono text-xs uppercase tracking-[0.3em]">
              <Terminal className="w-4 h-4" /> Interface v2.0.4
            </div>
            <h2 className="text-4xl md:text-6xl font-headline font-bold">Neural <span className="text-primary italic">Terminal</span></h2>
          </div>
          <p className="text-foreground/40 max-w-md text-sm font-mono text-right hidden md:block">
            // Query my professional database through direct neural inference.
          </p>
        </div>

        <div className="relative group">
          {/* Decorative Glow */}
          <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-accent/20 rounded-[2rem] blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
          
          <div className="relative flex flex-col h-[650px] bg-[#0a0c10] border border-white/10 rounded-2xl shadow-2xl overflow-hidden font-mono">
            {/* Terminal Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-[#161b22] border-b border-white/5">
              <div className="flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/40" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/40" />
                  <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/40" />
                </div>
                <div className="h-4 w-px bg-white/10 mx-2" />
                <span className="text-[10px] text-foreground/40 uppercase tracking-widest font-bold">session_bash — 80x24</span>
              </div>
              <div className="flex gap-4">
                <Minus className="w-3 h-3 text-foreground/40" />
                <Square className="w-3 h-3 text-foreground/40" />
                <X className="w-3 h-3 text-foreground/40" />
              </div>
            </div>

            {/* Terminal Content */}
            <ScrollArea className="flex-grow p-6 bg-black/40">
              <div className="space-y-8">
                <div className="text-primary/60 text-xs leading-loose">
                  [SYSTEM] Abhishek AI Portfolio Assistant Loaded...<br />
                  [SYSTEM] RAG Pipelines: ACTIVE<br />
                  [SYSTEM] LLM Context: RESUME_v2024.pdf<br />
                  [SYSTEM] Security: SECURE_LINK_ENCRYPTED
                </div>

                {messages.map((m, idx) => (
                  <div key={idx} className={cn(
                    "flex flex-col gap-2 animate-in fade-in slide-in-from-left-2 duration-300",
                    m.role === 'user' ? "items-end text-right" : "items-start"
                  )}>
                    <div className="flex items-center gap-3 text-[10px] font-bold tracking-tighter uppercase">
                      <span className={m.role === 'assistant' ? "text-primary" : "text-accent"}>
                        {m.role === 'assistant' ? "> ASSISTANT_CORE" : "> USER_ID_01"}
                      </span>
                      <span className="text-foreground/20">{m.timestamp}</span>
                    </div>
                    <div className={cn(
                      "p-4 rounded-xl max-w-[90%] text-sm leading-relaxed border",
                      m.role === 'assistant' 
                        ? "bg-primary/5 border-primary/20 text-foreground/90 rounded-tl-none" 
                        : "bg-accent/5 border-accent/20 text-foreground/90 rounded-tr-none"
                    )}>
                      {m.content}
                    </div>
                  </div>
                ))}
                
                {isLoading && (
                  <div className="flex flex-col items-start gap-2">
                    <div className="flex items-center gap-3 text-[10px] font-bold text-primary uppercase">
                      &gt; PROCESSING_INFERENCE...
                    </div>
                    <div className="flex gap-1.5 p-4 bg-primary/5 border border-primary/20 rounded-xl rounded-tl-none">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce [animation-delay:-0.3s]" />
                      <div className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce [animation-delay:-0.15s]" />
                      <div className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce" />
                    </div>
                  </div>
                )}
                <div ref={scrollRef} />
              </div>
            </ScrollArea>

            {/* Terminal Input */}
            <div className="p-6 bg-[#0d1117] border-t border-white/5">
              <form onSubmit={handleSubmit} className="relative flex items-center gap-3">
                <div className="flex items-center gap-2 text-primary font-bold text-sm whitespace-nowrap shrink-0">
                  <span className="text-accent">abhi@assistant</span>
                  <span className="text-foreground/40">:</span>
                  <span className="text-primary">~</span>
                  <span className="text-foreground/40">$</span>
                </div>
                <Input 
                  placeholder="enter_query_here..." 
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  className="bg-transparent border-none focus-visible:ring-0 h-10 p-0 text-sm placeholder:text-foreground/10 text-foreground caret-primary"
                  disabled={isLoading}
                  autoFocus
                />
                <Button 
                  type="submit" 
                  size="icon" 
                  variant="ghost"
                  className="text-primary/40 hover:text-primary hover:bg-primary/10 rounded-full"
                  disabled={isLoading || !input.trim()}
                >
                  <Send className="w-4 h-4" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
