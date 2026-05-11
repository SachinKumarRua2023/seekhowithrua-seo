import { Metadata } from "next";
import Link from "next/link";

const CalendarIcon = ({ className }: { className?: string }) => <svg className={className} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>;
const ClockIcon = ({ className }: { className?: string }) => <svg className={className} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>;
const ArrowLeftIcon = ({ className }: { className?: string }) => <svg className={className} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>;
const UserIcon = ({ className }: { className?: string }) => <svg className={className} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>;

const Badge = ({ children, className }: any) => (
  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${className || ''}`}>{children}</span>
);

export const metadata: Metadata = {
  title: "Building Autonomous AI Workflows with n8n and LangChain (2026) | SeekhoWithRua",
  description: "Step-by-step guide to building autonomous AI workflows using n8n and LangChain. Create production-ready agentic systems that save 40+ hours per week.",
  keywords: "n8n langchain tutorial, autonomous workflows, ai workflow automation, n8n ai agents, langchain workflow",
  authors: [{ name: "Sachin Kumar - Master Rua" }],
  openGraph: {
    title: "Building Autonomous AI Workflows with n8n and LangChain (2026)",
    description: "Step-by-step guide to building autonomous AI workflows using n8n and LangChain.",
    type: "article",
    publishedTime: "2026-05-11",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Building Autonomous AI Workflows with n8n and LangChain (2026)",
  "description": "Step-by-step guide to building autonomous AI workflows using n8n and LangChain.",
  "datePublished": "2026-05-11",
  "author": {
    "@type": "Person",
    "name": "Master Rua",
    "url": "https://seekhowithrua.com/about"
  },
  "publisher": {
    "@type": "Organization",
    "name": "SeekhoWithRua",
    "logo": {
      "@type": "ImageObject",
      "url": "https://seekhowithrua.com/logo.png"
    }
  }
};

export default function AutonomousWorkflowsGuide() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0a0f] via-[#12121a] to-[#0a0a0f]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <div className="bg-gradient-to-r from-cyan-600/20 to-blue-600/20 border-b border-cyan-500/20">
        <div className="container mx-auto px-4 py-8 md:py-12">
          <Link href="/blog" className="inline-flex items-center text-gray-400 hover:text-white mb-6 transition-colors">
            <ArrowLeftIcon className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>
          
          <div className="flex flex-wrap gap-2 mb-4">
            <Badge className="bg-cyan-500/20 text-cyan-400 border-cyan-500/30">N8N</Badge>
            <Badge className="bg-purple-500/20 text-purple-400 border-purple-500/30">LANGCHAIN</Badge>
            <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30">WORKFLOWS</Badge>
          </div>
          
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Building <span className="text-cyan-400">Autonomous AI Workflows</span> with n8n and LangChain (2026)
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 text-gray-400 text-sm">
            <div className="flex items-center gap-2">
              <UserIcon className="w-4 h-4" />
              <span className="text-white">Master Rua</span>
            </div>
            <div className="flex items-center gap-2">
              <CalendarIcon className="w-4 h-4" />
              <span>May 11, 2026</span>
            </div>
            <div className="flex items-center gap-2">
              <ClockIcon className="w-4 h-4" />
              <span>15 min read</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-invert prose-lg max-w-none text-gray-300 space-y-6">
            
            <p className="text-xl leading-relaxed">
              Imagine a workflow that doesn&apos;t just execute steps, but thinks, decides, and adapts. That&apos;s what happens when you combine <strong className="text-white">n8n&apos;s powerful automation</strong> with <strong className="text-white">LangChain&apos;s AI reasoning</strong>. In this guide, I&apos;ll show you exactly how to build autonomous workflows that save 40+ hours every week.
            </p>

            <h2 className="text-2xl font-bold text-white mt-8">Why n8n + LangChain?</h2>
            
            <p>
              n8n provides the infrastructure — connecting to 400+ apps, APIs, and services. LangChain provides the brain — reasoning, memory, and decision-making. Together, they create truly autonomous systems.
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-6">
              <div className="bg-cyan-900/20 border border-cyan-500/30 p-5 rounded-lg">
                <h3 className="font-bold text-cyan-400 mb-3">⚡ n8n Handles</h3>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li>API connections</li>
                  <li>Data transformation</li>
                  <li>Conditional logic</li>
                  <li>Error handling</li>
                  <li>Scheduling & triggers</li>
                </ul>
              </div>
              <div className="bg-purple-900/20 border border-purple-500/30 p-5 rounded-lg">
                <h3 className="font-bold text-purple-400 mb-3">🦜 LangChain Handles</h3>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li>LLM orchestration</li>
                  <li>Context management</li>
                  <li>Tool selection</li>
                  <li>Multi-step reasoning</li>
                  <li>Memory & learning</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-white mt-8">Real-World Use Case: Customer Support Agent</h2>

            <p>
              Let&apos;s build an agent that handles customer support tickets from start to finish — reading emails, checking order status, drafting responses, and escalating when needed.
            </p>

            <h3 className="text-xl font-semibold text-cyan-400 mt-6">Step 1: Set Up Your n8n Instance</h3>

            <div className="bg-gray-900 p-4 rounded-lg border border-gray-700 font-mono text-sm">
              <p className="text-green-400"># Docker (recommended for production)</p>
              <p className="text-gray-300">docker run -it --rm \</p>
              <p className="text-gray-300">  --name n8n \</p>
              <p className="text-gray-300">  -p 5678:5678 \</p>
              <p className="text-gray-300">  -v ~/.n8n:/home/node/.n8n \</p>
              <p className="text-gray-300">  n8nio/n8n</p>
            </div>

            <h3 className="text-xl font-semibold text-cyan-400 mt-6">Step 2: Create the Workflow Structure</h3>

            <p>Your autonomous agent needs these components:</p>

            <ol className="list-decimal pl-6 space-y-4">
              <li>
                <strong className="text-white">Trigger:</strong> Gmail webhook for new support emails
              </li>
              <li>
                <strong className="text-white">Classifier Node:</strong> LangChain categorizes the issue (billing, technical, general)
              </li>
              <li>
                <strong className="text-white">Research Agent:</strong> Queries your CRM, order database, knowledge base
              </li>
              <li>
                <strong className="text-white">Response Generator:</strong> Drafts personalized replies
              </li>
              <li>
                <strong className="text-white">Approval Gate:</strong> Routes complex issues to humans
              </li>
            </ol>

            <h3 className="text-xl font-semibold text-cyan-400 mt-6">Step 3: Configure the LangChain Node</h3>

            <div className="bg-gray-900 p-4 rounded-lg border border-gray-700">
              <p className="text-sm text-gray-400 mb-2">// n8n LangChain Code Node</p>
              <pre className="text-sm text-gray-300 overflow-x-auto">
{`const { OpenAI } = require("@langchain/openai");
const { AgentExecutor, createReactAgent } = require("langchain/agents");

// Initialize LLM with reasoning capabilities
const model = new OpenAI({
  modelName: "gpt-4",
  temperature: 0.2,
});

// Define tools the agent can use
const tools = [
  checkOrderStatusTool,
  searchKnowledgeBaseTool,
  escalateToHumanTool
];

// Create autonomous agent
const agent = await createReactAgent({
  llm: model,
  tools,
});

const executor = new AgentExecutor({
  agent,
  tools,
  maxIterations: 5,
});`}
              </pre>
            </div>

            <h3 className="text-xl font-semibold text-cyan-400 mt-6">Step 4: Add Memory and Context</h3>

            <p>
              True autonomy requires memory. Use LangChain&apos;s <code className="bg-gray-800 px-2 py-1 rounded">BufferMemory</code> or connect to a vector database like Pinecone for long-term memory:
            </p>

            <div className="bg-gray-900 p-4 rounded-lg border border-gray-700">
              <pre className="text-sm text-gray-300 overflow-x-auto">
{`import { BufferMemory } from "langchain/memory";
import { PineconeStore } from "@langchain/pinecone";

// Short-term memory for conversation context
const memory = new BufferMemory({
  memoryKey: "chat_history",
  returnMessages: true,
});

// Long-term memory from previous interactions
const vectorStore = await PineconeStore.fromExistingIndex(
  new OpenAIEmbeddings(),
  { pineconeIndex }
);`}
              </pre>
            </div>

            <h2 className="text-2xl font-bold text-white mt-8">Advanced: Multi-Agent Orchestration</h2>

            <p>
              For complex workflows, deploy multiple specialized agents that collaborate:
            </p>

            <div className="bg-gray-800/50 p-5 rounded-lg border border-gray-700 my-6">
              <h4 className="font-semibold text-white mb-3">🎯 Agent Team Structure</h4>
              <ul className="space-y-2 text-sm">
                <li><span className="text-cyan-400">Research Agent</span> → Gathers information from databases</li>
                <li><span className="text-purple-400">Analysis Agent</span> → Processes and synthesizes findings</li>
                <li><span className="text-green-400">Response Agent</span> → Generates customer communications</li>
                <li><span className="text-yellow-400">Quality Agent</span> → Reviews and validates outputs</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-white mt-8">Production Considerations</h2>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-red-400 font-bold">⚠️</span>
                <div>
                  <h4 className="font-semibold text-white">Error Handling</h4>
                  <p className="text-sm">Always implement fallback routes. If the LLM fails, route to human operators.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-yellow-400 font-bold">⚡</span>
                <div>
                  <h4 className="font-semibold text-white">Rate Limiting</h4>
                  <p className="text-sm">Use n8n&apos;s rate limiting nodes to prevent API quota exhaustion.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-green-400 font-bold">🔒</span>
                <div>
                  <h4 className="font-semibold text-white">Security</h4>
                  <p className="text-sm">Store API keys in n8n&apos;s credential vault. Never hardcode sensitive data.</p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-white mt-8">Results: What to Expect</h2>

            <p>
              After implementing autonomous n8n + LangChain workflows, businesses typically see:
            </p>

            <div className="grid md:grid-cols-3 gap-4 my-6">
              <div className="bg-gradient-to-br from-green-900/30 to-cyan-900/30 p-4 rounded-lg text-center border border-green-500/30">
                <div className="text-3xl font-bold text-green-400">85%</div>
                <div className="text-sm text-gray-400">Tickets resolved automatically</div>
              </div>
              <div className="bg-gradient-to-br from-cyan-900/30 to-blue-900/30 p-4 rounded-lg text-center border border-cyan-500/30">
                <div className="text-3xl font-bold text-cyan-400">&lt;2min</div>
                <div className="text-sm text-gray-400">Average response time</div>
              </div>
              <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 p-4 rounded-lg text-center border border-purple-500/30">
                <div className="text-3xl font-bold text-purple-400">40hrs</div>
                <div className="text-sm text-gray-400">Saved per week</div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-cyan-600/20 to-purple-600/20 border border-cyan-500/30 p-6 rounded-xl my-8">
              <h3 className="text-xl font-bold text-white mb-3">Need Help Building Your First Agent?</h3>
              <p className="mb-4">
                We&apos;ve built autonomous workflows for 5+ companies using n8n and LangChain. From design to deployment, we handle everything.
              </p>
              <Link href="https://wa.me/19292961896" className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-400 to-purple-400 text-gray-900 font-semibold rounded-lg hover:opacity-90 transition-opacity">
                🚀 Get Your Custom Workflow Quote
              </Link>
            </div>

            <h2 className="text-2xl font-bold text-white mt-8">Next Steps</h2>

            <p>
              Start small. Pick one repetitive workflow in your business and automate it with n8n + LangChain. Measure the results, then expand to other processes.
            </p>

            <p className="text-gray-400 italic">
              Check out our <Link href="/blog/what-is-agentic-ai-business-guide-2026" className="text-cyan-400 hover:underline">Agentic AI guide</Link> for more context, or explore <Link href="/services" className="text-cyan-400 hover:underline">our services</Link>.
            </p>

          </div>
        </div>
      </div>
    </div>
  );
}
