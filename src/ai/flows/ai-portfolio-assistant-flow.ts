'use server';
/**
 * @fileOverview An AI assistant flow that answers questions about Abhishek Pandey's professional experience, skills, and projects
 * based on his resume.
 *
 * - aiPortfolioAssistant - A function that handles the AI portfolio assistant process.
 * - AiPortfolioAssistantInput - The input type for the aiPortfolioAssistant function.
 * - AiPortfolioAssistantOutput - The return type for the aiPortfolioAssistant function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AiPortfolioAssistantInputSchema = z
  .string()
  .describe("The user's question about the portfolio owner.");
export type AiPortfolioAssistantInput = z.infer<
  typeof AiPortfolioAssistantInputSchema
>;

const AiPortfolioAssistantOutputSchema = z
  .string()
  .describe("The AI assistant's answer based on the portfolio owner's resume.");
export type AiPortfolioAssistantOutput = z.infer<
  typeof AiPortfolioAssistantOutputSchema
>;

// The resume content is embedded directly into the prompt for RAG-like behavior.
const RESUME_CONTENT = `
Abhishek Pandey
* Open To Relocate  +1 (437)-484-4461 # abhi526691shek@gmail.com ï LinkedIn § GitHub  Website
Professional Summary
• AI Engineer with 3+ years specializing in production-grade LLM applications, RAG systems, and MLOps
pipelines that deliver measurable impact: 95% efficiency gains, 5-10% revenue increases, and platforms
processing 50K+ monthly API requests
• Architected and deployed end-to-end GenAI solutions across construction and pharmaceutical industries,
from LLM integration and vector database optimization to scalable cloud infrastructure on Azure/AWS
• Expert in LLMs, MLOps, and production AI systems—delivered sub-100ms inference, automated
workflows replacing weeks of manual work, and production APIs supporting thousands of concurrent users
Core Skills
• Machine Learning & AI: PyTorch, TensorFlow, scikit-learn, Hugging Face Transformers, LangChain, RAG
architectures, model fine-tuning, computer vision (OCR, facial recognition), NLP, ML pipelines, deep learning,
Pydantic, Agentic AI, ReACT
• Generative AI & LLMs: OpenAI APIs, prompt engineering, LLM fine-tuning, chatbot development, semantic
search, vector databases (Pinecone, ChromaDB, FAISS), retrieval systems, document processing
• MLOps & Deployment: Docker, Kubernetes (AKS), CI/CD (Jenkins), MLflow, model serving, A/B testing,
monitoring, performance optimization, experiment tracking, model versioning
• Cloud Platforms: Azure (Cognitive Services, AKS, App Service, Storage), AWS (SageMaker, Lambda, EC2,
S3), serverless architectures, auto-scaling, cloud-native design
• Backend Development & Data: Python, FastAPI, Flask, Django, REST APIs, microservices, SQL
(PostgreSQL), NoSQL (MongoDB), Redis (Cache), real-time streaming, RabbitMQ
• Tools & Frontend: React.js, Next.js, Streamlit, PowerBI, Git, Linux/Unix, shell scripting, JavaScript, R
•
Professional Experience
Creatiz Feb 2026 – Present
Founding AI Engineer Toronto, ON
• Building AI-powered LinkedIn content platform helping creators and founders generate, analyze, and schedule posts to
grow their personal brand
MHA Solution Jan 2025 – Apr 2025
AI & ML Engineer Co-op Toronto, ON
• Developed a RAG-based chatbot using LangChain, ChromaDB, and OpenAI APIs with FastAPI backend to
automate the company’s error-code handling process
• Collaborated in an agile environment, streamlining internal support workflows and reducing manual error resolution
time by over 30%
Dimensionless Technologies Jan 2022 – Dec 2023
Full Stack AI Engineer & Team Lead Remote
• Led development of PropelPro, a GenAI-powered construction bidding platform, architecting 4 core modules
(PropelRead, PropelFlow, PropelWrite, PropelMath) that increased win rates by 5-10% and reduced proposal writing
time by 95% for EPC/AEC companies
• Built PropelRead’s automated tender analysis engine using LLMs and NLP, extracting critical information from
100+ page RFP documents in minutes vs. days, with integrated AI chatbot for instant query resolution
• Engineered PropelWrite’s AI-assisted proposal generation system leveraging RAG architecture and industry-specific
templates (React), boosting team productivity by 20% through intelligent content personalization
• Developed AushadhAI’s automated reconciliation and database verification modules for pharma returns processing,
enabling C&F agents to validate stockist claims, detect discrepancies, and auto-generate credit notes with seamless
ERP integration
• Architected multi-level analytics dashboard for AushadhAI providing real-time visibility across SKU, batch, stockist,
region, and operator levels, transforming manual reconciliation into AI-powered automated workflows
• Deployed enterprise-grade REST APIs(Django) on Azure supporting both platforms with 50k+ monthly
requests, implementing MLOps pipelines using CI/CD, MLflow, Docker & AKS that reduced deployment cycles
from weeks to days
Ameex Technologies PVT LTD Jan 2021 – Dec 2021
Associate Software Engineer Hybrid
• Rotated through UI/UX, QA, and Development teams during initial 3 months to gain comprehensive
understanding of full software development lifecycle, from design and testing to production deployment
• Developed and deployed RESTful APIs for healthcare monitoring platform enabling remote tracking of medication
adherence and health vitals for elderly and vulnerable patients living independently
• Engineered automated alert system integrated with APIs to notify family members and caregivers in real-time when
patients missed medications or exhibited concerning health patterns, improving patient safety outcomes
Key Technical Projects
ResearchIQ - AI Research Assistant | FastAPI, Next.js, MongoDB, LangChain, TensorFlow, Mistral, OCR 
• Built comprehensive AI platform for intuitive research paper exploration with document upload, OCR processing,
and intelligent analysis using advanced NLP techniques, enabling seamless academic and professional research workflows
SuperLLM - AI Document Assistant | FastAPI, Next.js, Groq, PyTorch, ChromaDB 
• Developed end-to-end AI platform with document processing, SQL generation, and conversational AI
capabilities, featuring PDF ingestion and natural language to SQL conversion with high accuracy
Missing Child Detection System | Computer Vision, TensorFlow, Flask, IBM Cloud
• Created facial recognition system using deep learning for real-time missing person identification with 90%+
accuracy and scalable cloud infrastructure for emergency response applications
Restaurant Analytics Platform | Python, TensorFlow, SHAP, LIME, Streamlit
• Built ML solution for restaurant performance prediction with explainable AI using SHAP/LIME, featuring interactive
dashboard for real-time business insights and decision support
Education & Certifications
Loyalist College 2023 – 2025
Ontario Graduate Certificate in AI and Data Science Toronto, ON
Vel Tech Institute of Technology 2017 – 2021
Bachelor of Technology, Computer Science Chennai, IN
Professional Certifications: Deep Learning Specialization (Coursera - Andrew Ng), Advanced Data Analysis
with Python (IBM Cognitive Class), Deep Learning (NPTEL), Power BI Fundamentals (Coursera), Introduction to
Data Science with Python (University of Michigan), Deep Agent by LangGraph, Azure AI Engineer Associate
(In Progress)
Achievements & Recognition
Winner - First Place, Prakalpa Z-20 AI Competition: Led development of ”DESTROY COVID-19” AI solution,
recognized by Computer Society of India for innovative approach to pandemic response using machine learning
Fintech Innovation Award - TBC Fintech Event: Developed blockchain-secured QR payment system with AI-driven
fraud detection capabilities, demonstrating cross-domain technical expertise
Technical Leadership Recognition: Successfully mentored junior developers and established ML engineering best
practices at Dimensionless Technologies, contributing to team productivity improvements
Continuous Learning Commitment: Completed multiple professional development programs (Samarthya, EMGE
internships) demonstrating consistent growth mindset and technical skill expansion
`;

const aiPortfolioAssistantPrompt = ai.definePrompt({
  name: 'aiPortfolioAssistantPrompt',
  input: {schema: z.object({question: AiPortfolioAssistantInputSchema, resumeContent: z.string()})},
  output: {schema: AiPortfolioAssistantOutputSchema},
  prompt: `You are an AI assistant representing Abhishek Pandey. Your goal is to answer questions about Abhishek's professional experience, skills, and projects based *only* on the provided resume content. Do not make up information. If the answer is not explicitly stated or inferable from the resume, state that you cannot find the information.

Resume Content:
---
{{{resumeContent}}}
---

User Question: {{{question}}}

AI Assistant's Answer:`,
});

const aiPortfolioAssistantFlow = ai.defineFlow(
  {
    name: 'aiPortfolioAssistantFlow',
    inputSchema: AiPortfolioAssistantInputSchema,
    outputSchema: AiPortfolioAssistantOutputSchema,
  },
  async question => {
    const {output} = await aiPortfolioAssistantPrompt({
      question: question,
      resumeContent: RESUME_CONTENT,
    });
    return output!;
  }
);

export async function aiPortfolioAssistant(input: AiPortfolioAssistantInput): Promise<AiPortfolioAssistantOutput> {
  return aiPortfolioAssistantFlow(input);
}
