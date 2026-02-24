import Image from "next/image"
import Link from "next/link"
import { ExternalLink, Github, Code2, Sparkles, Video } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { PlaceHolderImages } from "@/lib/placeholder-images"

export function Projects() {
  const projects = [
    {
      id: "authentiscan",
      title: "Authentiscan",
      description: "Developed a high-accuracy DeepFake image detector identifying real vs fake images using VGG-Face and ResNet-50 models. Leveraged training data scraped from live sources including Pexels, Unsplash, and ThisPersonDoesNotExist.",
      image: PlaceHolderImages.find(img => img.id === 'authentiscan'),
      tags: ["Tensorflow", "Pytorch", "FastAPI", "VGG-Net", "ResNet", "MtCNN", "AWS", "Docker", "Selenium", "OpenCV"],
      impact: "Achieved 98% accuracy by integrating advanced image processing models on AWS for real-time authentication.",
      source: "https://github.com/Step-Presentation-Sem-2"
    },
    {
      id: "research-iq",
      title: "ResearchIQ",
      description: "AI Research Assistant for intuitive paper exploration with OCR processing and intelligent NLP analysis. Streamlined academic workflows using advanced transformer-based models.",
      image: PlaceHolderImages.find(img => img.id === 'research-iq'),
      tags: ["FastAPI", "Next.js", "MongoDB", "Mistral", "OCR", "LangChain"],
      impact: "Reduced research analysis time by 70% through automated document ingestion and insight generation.",
      demo: "https://www.loom.com/share/1b2c76b98aff4cb8bac37735f1212109",
      source: "https://github.com/abhi526691/ResearchIQ"
    },
    {
      id: "super-llm",
      title: "SuperLLM",
      description: "End-to-end AI platform featuring natural language to SQL generation, multi-document processing, and conversational AI capabilities with ultra-low latency.",
      image: PlaceHolderImages.find(img => img.id === 'super-llm'),
      tags: ["PyTorch", "ChromaDB", "Groq", "FastAPI", "Next.js", "SQL"],
      impact: "Achieved high accuracy in SQL schema mapping and natural language query translation.",
      demo: "https://www.loom.com/share/2bf92ff9c0364b3abba1be2cf03bf815?sid=5b293b9e-7e67-4f1d-a16b-d9bf1c3a99bc",
      source: "https://github.com/abhi526691/SuperLLM"
    },
    {
      id: "covid-guard",
      title: "Covid Guard",
      description: "AI model to detect social distancing and face-mask compliance for public safety. Designed for integration with embedded systems in airports, stations, and offices.",
      image: PlaceHolderImages.find(img => img.id === 'covid-guard'),
      tags: ["Tensorflow", "Python", "YOLOv3", "Neural Networks", "Keras", "OpenCV", "Numpy", "Pandas"],
      impact: "Real-time safety monitoring solution capable of running on low-power edge devices.",
      source: "https://github.com/snjydas/Covid-Guard"
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
          <Button asChild variant="link" className="text-primary font-bold group">
            <Link href="https://github.com/abhi526691" target="_blank">
              View all on GitHub <Github className="ml-2 w-5 h-5 group-hover:rotate-12 transition-transform" />
            </Link>
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
                    {project.demo && (
                      <Button asChild size="sm" className="rounded-full">
                        <Link href={project.demo} target="_blank">
                          <Video className="w-4 h-4 mr-2" /> Video Demo
                        </Link>
                      </Button>
                    )}
                    {project.source && (
                      <Button asChild size="sm" variant="secondary" className="rounded-full">
                        <Link href={project.source} target="_blank">
                          <Code2 className="w-4 h-4 mr-2" /> Source
                        </Link>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
              
              <CardHeader className="p-6 pb-2">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-2xl font-headline font-bold">{project.title}</h3>
                  <Sparkles className="w-5 h-5 text-accent" />
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tags.slice(0, 5).map(tag => (
                    <Badge key={tag} variant="outline" className="text-[10px] uppercase tracking-wider text-primary border-primary/20">
                      {tag}
                    </Badge>
                  ))}
                  {project.tags.length > 5 && (
                    <Badge variant="outline" className="text-[10px] uppercase tracking-wider text-primary border-primary/20">
                      +{project.tags.length - 5}
                    </Badge>
                  )}
                </div>
              </CardHeader>
              
              <CardContent className="p-6 pt-2 flex-grow">
                <p className="text-foreground/70 leading-relaxed text-sm">
                  {project.description}
                </p>
                <div className="mt-4 p-3 rounded-lg bg-primary/5 border border-primary/10">
                  <p className="text-xs font-semibold text-primary uppercase tracking-tighter">Demonstrated Impact:</p>
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
