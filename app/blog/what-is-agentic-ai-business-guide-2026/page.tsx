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
  title: "What is Agentic AI? The Complete Guide for Business Leaders (2026) | SeekhoWithRua",
  description: "Learn what Agentic AI is and how it can automate your business processes. Complete guide for CEOs and decision-makers looking to implement autonomous AI systems.",
  keywords: "agentic ai, autonomous ai, ai agents business, agentic ai explained, agentic workflow, ai automation business",
  authors: [{ name: "Sachin Kumar - Master Rua" }],
  openGraph: {
    title: "What is Agentic AI? The Complete Guide for Business Leaders (2026)",
    description: "Learn what Agentic AI is and how it can automate your business processes.",
    type: "article",
    publishedTime: "2026-05-11",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "What is Agentic AI? The Complete Guide for Business Leaders (2026)",
  "description": "Learn what Agentic AI is and how it can automate your business processes.",
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

export default function AgenticAIGuide() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0a0f] via-[#12121a] to-[#0a0a0f]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 border-b border-purple-500/20">
        <div className="container mx-auto px-4 py-8 md:py-12">
          <Link href="/blog" className="inline-flex items-center text-gray-400 hover:text-white mb-6 transition-colors">
            <ArrowLeftIcon className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>
          
          <div className="flex flex-wrap gap-2 mb-4">
            <Badge className="bg-purple-500/20 text-purple-400 border-purple-500/30">AGENTIC AI</Badge>
            <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30">BUSINESS</Badge>
            <Badge className="bg-green-500/20 text-green-400 border-green-500/30">AUTOMATION</Badge>
          </div>
          
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
            What is <span className="text-purple-400">Agentic AI</span>? The Complete Guide for Business Leaders (2026)
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
              <span>12 min read</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-invert prose-lg max-w-none text-gray-300 space-y-6">
            
            <p className="text-xl leading-relaxed">
              Imagine hiring an employee who never sleeps, never takes breaks, and can handle complex multi-step tasks without constant supervision. That is what Agentic AI brings to your business — autonomous AI systems that don&apos;t just respond to prompts, but actively work toward goals.
            </p>

            <h2 className="text-2xl font-bold text-white mt-8">What is Agentic AI?</h2>
            
            <p>
              <strong className="text-white">Agentic AI refers to AI systems that can act autonomously to achieve specific goals.</strong> Unlike traditional AI that waits for human input, agentic systems can:
            </p>

            <ul className="list-disc pl-6 space-y-2">
              <li>Make decisions independently based on context</li>
              <li>Execute multi-step workflows without human intervention</li>
              <li>Use tools and APIs to gather information</li>
              <li>Adapt their approach based on feedback</li>
              <li>Collaborate with other AI agents</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mt-8">Agentic AI vs Traditional AI</h2>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-gray-700">
                    <th className="text-left py-3 px-4 text-white">Traditional AI</th>
                    <th className="text-left py-3 px-4 text-white">Agentic AI</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  <tr className="border-b border-gray-800">
                    <td className="py-3 px-4">Responds to single prompts</td>
                    <td className="py-3 px-4 text-green-400">Pursues long-term goals</td>
                  </tr>
                  <tr className="border-b border-gray-800">
                    <td className="py-3 px-4">Needs constant guidance</td>
                    <td className="py-3 px-4 text-green-400">Operates autonomously</td>
                  </tr>
                  <tr className="border-b border-gray-800">
                    <td className="py-3 px-4">One task at a time</td>
                    <td className="py-3 px-4 text-green-400">Multi-step reasoning</td>
                  </tr>
                  <tr className="border-b border-gray-800">
                    <td className="py-3 px-4">No memory of context</td>
                    <td className="py-3 px-4 text-green-400">Maintains state across sessions</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-white mt-8">Real Business Applications</h2>

            <h3 className="text-xl font-semibold text-purple-400 mt-6">1. Autonomous Customer Support</h3>
            <p>
              Agentic AI can handle entire support tickets from start to finish — checking order status, processing refunds, updating CRM records, and following up with customers, all without human intervention.
            </p>

            <h3 className="text-xl font-semibold text-purple-400 mt-6">2. Research and Analysis Agents</h3>
            <p>
              Build agents that continuously monitor market trends, competitor activities, and industry news, then compile executive summaries every morning.
            </p>

            <h3 className="text-xl font-semibold text-purple-400 mt-6">3. Automated Content Workflows</h3>
            <p>
              From researching topics to writing drafts, finding images, scheduling posts, and analyzing performance — all handled by coordinated AI agents.
            </p>

            <h2 className="text-2xl font-bold text-white mt-8">Key Technologies Behind Agentic AI</h2>

            <div className="grid md:grid-cols-2 gap-4 my-6">
              <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                <h4 className="font-semibold text-white mb-2">🦜 LangChain</h4>
                <p className="text-sm">Framework for building context-aware reasoning chains</p>
              </div>
              <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                <h4 className="font-semibold text-white mb-2">⚡ n8n</h4>
                <p className="text-sm">Workflow automation connecting AI agents to business tools</p>
              </div>
              <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                <h4 className="font-semibold text-white mb-2">🔍 RAG Systems</h4>
                <p className="text-sm">Retrieval-Augmented Generation for knowledge access</p>
              </div>
              <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                <h4 className="font-semibold text-white mb-2">🤖 LLM Orchestration</h4>
                <p className="text-sm">Coordinating multiple AI models for complex tasks</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-white mt-8">ROI: What Businesses Are Seeing</h2>

            <p>
              Companies implementing Agentic AI are reporting significant returns:
            </p>

            <ul className="list-disc pl-6 space-y-2">
              <li><strong className="text-white">40-60 hours saved</strong> per employee per week on routine tasks</li>
              <li><strong className="text-white">85% reduction</strong> in response times for customer inquiries</li>
              <li><strong className="text-white">3x increase</strong> in content output without additional staff</li>
              <li><strong className="text-white">$50K-200K annual savings</strong> on operational costs</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mt-8">Getting Started with Agentic AI</h2>

            <p>
              Implementing Agentic AI doesn&apos;t require a complete technology overhaul. Start with these steps:
            </p>

            <ol className="list-decimal pl-6 space-y-3">
              <li><strong className="text-white">Identify repetitive workflows</strong> that consume team time</li>
              <li><strong className="text-white">Map decision points</strong> where AI could make choices</li>
              <li><strong className="text-white">Start with one agent</strong> — don&apos;t try to automate everything at once</li>
              <li><strong className="text-white">Measure and iterate</strong> based on real performance</li>
            </ol>

            <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-500/30 p-6 rounded-xl my-8">
              <h3 className="text-xl font-bold text-white mb-3">Ready to Implement Agentic AI?</h3>
              <p className="mb-4">
                We build production-ready Agentic AI systems for businesses. From RAG pipelines to autonomous workflows, we&apos;ve automated operations for 5+ companies.
              </p>
              <Link href="https://wa.me/19292961896" className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-400 to-cyan-400 text-gray-900 font-semibold rounded-lg hover:opacity-90 transition-opacity">
                📞 Book Your Free Strategy Call
              </Link>
            </div>

            <h2 className="text-2xl font-bold text-white mt-8">The Future is Agentic</h2>

            <p>
              Agentic AI represents the next evolution in business automation. While traditional AI tools require human operators, agentic systems become true digital employees — handling complex workflows, making decisions, and continuously improving.
            </p>

            <p>
              The businesses that adopt Agentic AI in 2026 will have a significant competitive advantage. Those that wait risk being outpaced by more agile competitors.
            </p>

            <p className="text-gray-400 italic">
              Want to learn more? Explore our <Link href="/blog" className="text-purple-400 hover:underline">other articles on AI automation</Link> or <Link href="/services" className="text-purple-400 hover:underline">view our services</Link>.
            </p>

          </div>
        </div>
      </div>
    </div>
  );
}
