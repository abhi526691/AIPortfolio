import { Badge } from "@/components/ui/badge"
import { 
  Brain, 
  Bot, 
  Workflow, 
  Cloud, 
  Database, 
  Wrench 
} from "lucide-react"

export function Skills() {
  const skillCategories = [
    {
      title: "Machine Learning & AI",
      icon: <Brain className="w-5 h-5" />,
      skills: ["PyTorch", "TensorFlow", "scikit-learn", "Hugging Face", "LangChain", "Computer Vision", "OCR", "NLP", "Agentic AI"]
    },
    {
      title: "Generative AI & LLMs",
      icon: <Bot className="w-5 h-5" />,
      skills: ["OpenAI APIs", "Prompt Engineering", "Fine-tuning", "RAG architectures", "Pinecone", "ChromaDB", "FAISS", "Semantic Search"]
    },
    {
      title: "MLOps & Deployment",
      icon: <Workflow className="w-5 h-5" />,
      skills: ["Docker", "Kubernetes", "AKS", "CI/CD", "Jenkins", "MLflow", "Model Serving", "A/B Testing", "Performance Optimization"]
    },
    {
      title: "Cloud Platforms",
      icon: <Cloud className="w-5 h-5" />,
      skills: ["Azure (Cognitive Services)", "AWS (SageMaker)", "Lambda", "S3", "Serverless", "Cloud-Native Design"]
    },
    {
      title: "Backend & Data",
      icon: <Database className="w-5 h-5" />,
      skills: ["Python", "FastAPI", "Flask", "Django", "PostgreSQL", "MongoDB", "Redis", "RabbitMQ"]
    },
    {
      title: "Tools & Frontend",
      icon: <Wrench className="w-5 h-5" />,
      skills: ["React.js", "Next.js", "Streamlit", "PowerBI", "Git", "Linux", "JavaScript", "R"]
    }
  ]

  return (
    <section id="skills" className="py-24 bg-card/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-headline font-bold">Technical <span className="text-primary">Matrix</span></h2>
          <p className="text-foreground/60 max-w-2xl mx-auto">
            A comprehensive overview of my specialized stack in AI engineering and full-stack deployment.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <div 
              key={category.title} 
              className="glass-card p-8 rounded-2xl hover:border-primary/50 transition-all group"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  {category.icon}
                </div>
                <h3 className="font-headline font-semibold text-lg">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge 
                    key={skill} 
                    variant="secondary" 
                    className="bg-muted hover:bg-primary/20 hover:text-primary transition-colors border-none"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}