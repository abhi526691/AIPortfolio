import { Navbar } from "@/components/portfolio/Navbar"
import { Hero } from "@/components/portfolio/Hero"
import { Skills } from "@/components/portfolio/Skills"
import { Experience } from "@/components/portfolio/Experience"
import { Projects } from "@/components/portfolio/Projects"
import { Chatbot } from "@/components/portfolio/Chatbot"
import { ContactForm } from "@/components/portfolio/ContactForm"
import { Footer } from "@/components/portfolio/Footer"
import { Toaster } from "@/components/ui/toaster"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <Chatbot />
      <ContactForm />
      <Footer />
      <Toaster />
    </main>
  )
}