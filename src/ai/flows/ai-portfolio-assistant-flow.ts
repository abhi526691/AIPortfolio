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

// Using an object for structured output is more reliable in Genkit 1.x
const AiPortfolioAssistantOutputSchema = z.object({
  answer: z.string().describe("The AI assistant's answer based on the portfolio owner's resume.")
});
export type AiPortfolioAssistantOutput = z.infer<
  typeof AiPortfolioAssistantOutputSchema
>;

// Cleaned up resume content for better AI processing
const RESUME_CONTENT = `
Abhishek Pandey
AI Engineer | Toronto, ON | Available to Relocate
Email: abhi526691shek@gmail.com
LinkedIn: linkedin.com/in/abhishekpandey--/
GitHub: github.com/abhi526691

Professional Summary
- AI Engineer with 3+ years specializing in production-grade LLM applications, RAG systems, and MLOps pipelines.
- Expertise in delivering 95% efficiency gains and platforms processing 50K+ monthly API requests.
- Architected and deployed end-to-end GenAI solutions across construction and pharmaceutical industries.

Core Skills
- Machine Learning & AI: PyTorch, TensorFlow, scikit-learn, Hugging Face Transformers, LangChain, RAG architectures, model fine-tuning, computer vision (OCR, facial recognition), NLP.
- Generative AI & LLMs: OpenAI APIs, prompt engineering, chatbot development, vector databases (Pinecone, ChromaDB, FAISS), retrieval systems.
- MLOps & Deployment: Docker, Kubernetes (AKS), CI/CD (Jenkins), MLflow, model serving, A/B testing, performance optimization.
- Cloud Platforms: Azure (Cognitive Services, AKS, App Service, Storage), AWS (SageMaker, Lambda, EC2, S3).
- Backend & Data: Python, FastAPI, Flask, Django, REST APIs, SQL (PostgreSQL), NoSQL (MongoDB), Redis, RabbitMQ.
- Frontend: React.js, Next.js, Streamlit, PowerBI.

Professional Experience
- Creatiz (Feb 2026 – Present): Founding AI Engineer. Building AI-powered LinkedIn content platform for creators.
- MHA Solution (Jan 2025 – Apr 2025): AI & ML Engineer Co-op. Developed RAG-based chatbot using LangChain and ChromaDB.
- Dimensionless Technologies (Jan 2022 – Dec 2023): Full Stack AI Engineer & Team Lead. Led PropelPro (GenAI for construction bidding) and AushadhAI (pharma reconciliation). Deployed Django APIs on Azure with 50k+ monthly requests.
- Ameex Technologies (Jan 2021 – Dec 2021): Associate Software Engineer. Developed healthcare monitoring platform APIs.

Key Projects
- Authentiscan: DeepFake Image Detector (98% accuracy) using VGG-Face/ResNet-50. Scraped data from Unsplash and Pexels.
- ResearchIQ: AI Research Assistant with OCR and NLP analysis.
- SuperLLM: End-to-end AI platform for natural language to SQL conversion.
- Covid Guard: AI model for face-mask and social distancing detection using YOLOv3.

Education
- Loyalist College: Ontario Graduate Certificate in AI and Data Science (2023 – 2025).
- Vel Tech Institute of Technology: B.Tech in Computer Science (2017 – 2021).
`;

const aiPortfolioAssistantPrompt = ai.definePrompt({
  name: 'aiPortfolioAssistantPrompt',
  input: {schema: z.object({question: z.string(), resumeContent: z.string()})},
  output: {schema: AiPortfolioAssistantOutputSchema},
  prompt: `You are an AI assistant representing Abhishek Pandey. Your goal is to answer questions about Abhishek's professional experience, skills, and projects based *only* on the provided resume content. 

Do not make up information. If the answer is not explicitly stated or inferable from the resume, state that you cannot find the information. Be professional and helpful.

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
    outputSchema: z.string(),
  },
  async question => {
    try {
      const {output} = await aiPortfolioAssistantPrompt({
        question: question,
        resumeContent: RESUME_CONTENT,
      });
      return output?.answer || "I'm sorry, I couldn't find a specific answer to that in Abhishek's resume.";
    } catch (error) {
      console.error("Chatbot Flow Error:", error);
      return "I encountered an issue processing your request. Please try again or contact Abhishek directly.";
    }
  }
);

export async function aiPortfolioAssistant(input: string): Promise<string> {
  return aiPortfolioAssistantFlow(input);
}
