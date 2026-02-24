import Link from "next/link"
import { BrainCircuit, Github, Linkedin, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-12 bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex items-center gap-2">
          <BrainCircuit className="w-6 h-6 text-primary" />
          <span className="font-headline font-bold text-lg">IntelliFolio AI</span>
        </div>
        
        <div className="text-sm text-foreground/50">
          © {new Date().getFullYear()} Abhishek Pandey. Built with Next.js & AI.
        </div>

        <div className="flex items-center gap-6">
          <Link href="https://linkedin.com" className="text-foreground/40 hover:text-primary transition-colors">
            <Linkedin className="w-5 h-5" />
          </Link>
          <Link href="https://github.com/abhi526691" className="text-foreground/40 hover:text-primary transition-colors">
            <Github className="w-5 h-5" />
          </Link>
          <Link href="mailto:abhi526691shek@gmail.com" className="text-foreground/40 hover:text-primary transition-colors">
            <Mail className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </footer>
  )
}