import { Card } from "@/components/ui/card"
import { Briefcase, Calendar, MapPin } from "lucide-react"

export function Experience() {
  const experiences = [
    {
      company: "Creatiz",
      role: "Founding AI Engineer",
      period: "Feb 2026 – Present",
      location: "Toronto, ON",
      achievements: [
        "Building AI-powered LinkedIn content platform helping creators and founders generate, analyze, and schedule posts",
        "Architecting multi-modal LLM pipelines for brand voice consistent content generation"
      ]
    },
    {
      company: "MHA Solution",
      role: "AI & ML Engineer Co-op",
      period: "Jan 2025 – Apr 2025",
      location: "Toronto, ON",
      achievements: [
        "Developed a RAG-based chatbot using LangChain, ChromaDB, and OpenAI APIs to automate error-code handling",
        "Streamlined internal support workflows, reducing manual error resolution time by over 30%"
      ]
    },
    {
      company: "Dimensionless Technologies",
      role: "Full Stack AI Engineer & Team Lead",
      period: "Jan 2022 – Dec 2023",
      location: "Remote",
      achievements: [
        "Led development of PropelPro, a GenAI-powered construction bidding platform, increasing win rates by 5-10%",
        "Reduced proposal writing time by 95% for EPC/AEC companies using LLMs and NLP",
        "Built tender analysis engine extracting critical info from 100+ page documents in minutes vs. days",
        "Developed AushadhAI's automated reconciliation for pharma returns, processing 50k+ monthly requests"
      ]
    },
    {
      company: "Ameex Technologies PVT LTD",
      role: "Associate Software Engineer",
      period: "Jan 2021 – Dec 2021",
      location: "Hybrid",
      achievements: [
        "Developed RESTful APIs for healthcare monitoring platform enabling medication adherence tracking",
        "Engineered automated alert systems for patient safety, improving outcomes for vulnerable patients"
      ]
    }
  ]

  return (
    <section id="experience" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-5xl font-headline font-bold">Career <span className="text-primary">Journey</span></h2>
            <p className="text-foreground/60 max-w-2xl">
              Professional history leading AI teams and delivering high-impact industrial solutions.
            </p>
          </div>
          <div className="flex items-center gap-2 text-primary font-semibold">
            <Briefcase className="w-5 h-5" />
            <span>3+ Years in Production AI</span>
          </div>
        </div>

        <div className="relative border-l-2 border-primary/20 ml-4 md:ml-6 space-y-12 pb-8">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-8 md:pl-12">
              <div className="absolute top-0 -left-[11px] w-5 h-5 rounded-full bg-background border-4 border-primary shadow-[0_0_0_4px_rgba(82,130,224,0.1)]"></div>
              
              <div className="space-y-4">
                <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
                  <h3 className="text-2xl font-headline font-bold">{exp.role}</h3>
                  <span className="text-primary font-semibold text-lg">@ {exp.company}</span>
                </div>

                <div className="flex flex-wrap gap-4 text-sm text-foreground/50 font-medium">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4" />
                    {exp.period}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-4 h-4" />
                    {exp.location}
                  </div>
                </div>

                <Card className="glass-card p-6 border-none shadow-xl">
                  <ul className="space-y-3">
                    {exp.achievements.map((item, i) => (
                      <li key={i} className="flex gap-3 text-foreground/70 leading-relaxed">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}