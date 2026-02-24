import Image from "next/image";
import Link from "next/link";
import {
  Github,
  Linkedin,
  Mail,
  ArrowRight,
  Download,
  BrainCircuit,
} from "lucide-react";
import { Button } from "@/components/ui/button";
// Import profile pic directly from lib to ensure correct bundling
import profilePic from "@/lib/AbhishekPandeyPhoto.jpg";

export function Hero() {
  return (
    <section
      id="about"
      className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden gradient-bg"
    >
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 order-2 md:order-1 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold tracking-wider uppercase">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Available for Opportunities
          </div>

          <div className="space-y-4">
            <h1 className="font-headline text-5xl md:text-7xl font-bold leading-tight">
              Abhishek <br />
              <span className="text-primary italic">Pandey</span>
            </h1>
            <p className="text-xl md:text-2xl text-foreground/70 font-medium">
              AI Engineer & GenAI Architect
            </p>
          </div>

          <p className="text-lg text-foreground/60 leading-relaxed max-w-xl">
            Specializing in production-grade LLM applications, RAG systems, and
            MLOps pipelines that deliver measurable impact. Architecting the
            future of AI through scalable, sub-100ms inference solutions.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <Button
              asChild
              size="lg"
              className="rounded-full shadow-lg shadow-primary/20"
            >
              <Link href="#projects">
                View Portfolio <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="rounded-full border-primary/50 text-primary hover:bg-primary/10"
            >
              <Download className="mr-2 w-4 h-4" />{" "}
              <Link
                href="https://drive.google.com/file/d/15Y0rP4RV14QGB5qlfmGIqYKd_0abeAUp/view?usp=sharing"
                target="_blank"
              >
                Download Resume
              </Link>
            </Button>
          </div>

          <div className="flex items-center gap-6 pt-6">
            <Link
              href="https://www.linkedin.com/in/abhishekpandey--/"
              target="_blank"
              className="text-foreground/40 hover:text-primary transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </Link>
            <Link
              href="https://github.com/abhi526691"
              target="_blank"
              className="text-foreground/40 hover:text-primary transition-colors"
            >
              <Github className="w-6 h-6" />
            </Link>
            <Link
              href="mailto:abhi526691shek@gmail.com"
              className="text-foreground/40 hover:text-primary transition-colors"
            >
              <Mail className="w-6 h-6" />
            </Link>
          </div>
        </div>

        <div className="relative order-1 md:order-2 flex justify-center items-center">
          <div className="relative w-64 h-64 md:w-96 md:h-96 group">
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl group-hover:bg-primary/30 transition-all duration-500"></div>
            <div className="relative w-full h-full rounded-2xl overflow-hidden border-2 border-primary/20 shadow-2xl rotate-3 group-hover:rotate-0 transition-transform duration-500 bg-muted flex items-center justify-center">
              {profilePic ? (
                <Image
                  src={profilePic}
                  alt="Abhishek Pandey"
                  fill
                  className="object-cover"
                  priority
                />
              ) : (
                <BrainCircuit className="w-24 h-24 text-primary/20" />
              )}
            </div>
            {/* Decorative Elements */}
            <div className="absolute -bottom-6 -left-6 bg-card border border-border p-4 rounded-xl shadow-xl hidden lg:block animate-bounce duration-[3000ms]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-accent">
                  <BrainCircuit className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-bold">50K+ Monthly Requests</p>
                  <p className="text-[10px] text-foreground/50">
                    Processing Production Scale
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
