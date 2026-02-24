import Image from "next/image"
import Link from "next/link"
import { ExternalLink, Github, Code2, Sparkles } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { PlaceHolderImages } from "@/lib/placeholder-images"

export function Projects() {
  const projects = [
    {
      id: "research-iq",
      title: "ResearchIQ",
      description: "AI Research Assistant for intuitive paper exploration with OCR processing and intelligent NLP analysis.",
      image: PlaceHolderImages.find(img => img.id === 'research-iq'),
      tags: ["FastAPI", "Next.js", "MongoDB", "Mistral", "OCR"],
      impact: "Streamlined academic workflows using advanced NLP techniques."
    },
    {
      id: "super-llm",
      title: "SuperLLM",
      description: "End-to-end AI platform with document processing, SQL generation, and conversational capabilities.",
      image: PlaceHolderImages.find(img => img.id === 'super-llm'),
      tags: ["PyTorch", "ChromaDB", "Groq", "FastAPI"],
      impact: "High accuracy natural language to SQL conversion."
    },
    {
      id: "child-detection",
      title: "Missing Child Detection",
      description: "Facial recognition system using deep learning for real-time identification with 90%+ accuracy.",
      image: PlaceHolderImages.find(img => img.id === 'child-detection'),
      tags: ["Computer Vision", "TensorFlow", "Flask", "IBM Cloud"],
      impact: "Scalable cloud infrastructure for emergency response applications."
    },
    {
      id: "restaurant-analytics",
      title: "Restaurant Analytics",
      description: "ML solution for performance prediction with explainable AI using SHAP/LIME and interactive dashboards.",
      image: PlaceHolderImages.find(img => img.id === 'restaurant-analytics'),
      tags: ["Python", "TensorFlow", "SHAP", "Streamlit"],
      impact: "Real-time business insights for data-driven decision support."
    }
  ]

  return (
    <section id="projects" className="py-24 bg-card/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-16 gap-6">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-5xl font-headline font-bold">Selected <span className="text-primary">Inventions</span></h2>
            <p className="text-foreground/60 max-w-2xl">
              Demonstrating full-stack AI capabilities from computer vision to conversational agents.
            </p>
          </div>
          <Button variant="link" className="text-primary font-bold group">
            View all on GitHub <Github className="ml-2 w-5 h-5 group-hover:rotate-12 transition-transform" />
          </Button>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="glass-card overflow-hidden group hover:border-primary/50 transition-all flex flex-col">
              <div className="relative aspect-video overflow-hidden">
                <Image 
                  src={project.image?.imageUrl || ""} 
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  data-ai-hint={project.image?.imageHint}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="flex gap-4">
                    <Button size="sm" className="rounded-full">
                      <ExternalLink className="w-4 h-4 mr-2" /> Live Demo
                    </Button>
                    <Button size="sm" variant="secondary" className="rounded-full">
                      <Code2 className="w-4 h-4 mr-2" /> Source
                    </Button>
                  </div>
                </div>
              </div>
              
              <CardHeader className="p-6 pb-2">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-2xl font-headline font-bold">{project.title}</h3>
                  <Sparkles className="w-5 h-5 text-accent" />
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <Badge key={tag} variant="outline" className="text-[10px] uppercase tracking-wider text-primary border-primary/20">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardHeader>
              
              <CardContent className="p-6 pt-2 flex-grow">
                <p className="text-foreground/70 leading-relaxed">
                  {project.description}
                </p>
                <div className="mt-4 p-3 rounded-lg bg-primary/5 border border-primary/10">
                  <p className="text-sm font-semibold text-primary">Impact:</p>
                  <p className="text-sm text-foreground/60 italic">{project.impact}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}