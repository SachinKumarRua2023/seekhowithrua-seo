import { Metadata } from "next";
import Link from "next/link";

// Inline SVG icons
const CalendarIcon = ({ className }: { className?: string }) => <svg className={className} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>;
const ClockIcon = ({ className }: { className?: string }) => <svg className={className} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>;
const ArrowLeftIcon = ({ className }: { className?: string }) => <svg className={className} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>;
const UserIcon = ({ className }: { className?: string }) => <svg className={className} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>;

const Badge = ({ children, className }: any) => (
  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${className || ''}`}>{children}</span>
);

export const metadata: Metadata = {
  title: "Complete Guide to Building AI Agents Without Code (2025) | SeekhoWithRua",
  description: "Learn how to build powerful AI agents without writing code. Step-by-step guide using no-code tools, AI automation platforms, and visual builders.",
  keywords: "build ai agents without code, no code ai agent, ai agent builder, create ai agents no programming, ai automation without coding",
  authors: [{ name: "Sachin Kumar - Master Rua" }],
  openGraph: {
    title: "Complete Guide to Building AI Agents Without Code (2025)",
    description: "Build AI agents without coding. Step-by-step no-code guide for beginners.",
    type: "article",
    publishedTime: "2025-03-28",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Complete Guide to Building AI Agents Without Code (2025)",
  "description": "Learn how to build powerful AI agents without writing code.",
  "datePublished": "2025-03-28",
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

export default function AIAgentBuilderGuide() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0a0f] via-[#12121a] to-[#0a0a0f]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 border-b border-purple-500/20">
        <div className="container mx-auto px-4 py-8 md:py-12">
          <Link href="/blog" className="inline-flex items-center text-gray-400 hover:text-white mb-6 transition-colors">
            <ArrowLeftIcon className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>
          
          <div className="flex flex-wrap gap-2 mb-4">
            <Badge className="bg-purple-500/20 text-purple-400 border-purple-500/30">AI AGENTS</Badge>
            <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30">NO-CODE</Badge>
            <Badge className="bg-green-500/20 text-green-400 border-green-500/30">AUTOMATION</Badge>
          </div>
          
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Complete Guide to Building <span className="text-purple-400">AI Agents</span> Without Code (2025)
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 text-gray-400 text-sm">
            <div className="flex items-center gap-2">
              <UserIcon className="w-4 h-4" />
              <span className="text-white">Master Rua</span>
            </div>
            <div className="flex items-center gap-2">
              <CalendarIcon className="w-4 h-4" />
              <span>March 28, 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <ClockIcon className="w-4 h-4" />
              <span>10 min read</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-invert prose-lg max-w-none text-gray-300 space-y-6">
            
            <p className="text-xl leading-relaxed">
              You don&apos;t need to be a programmer to harness the power of AI agents. In 2025, no-code AI agent builders have made it possible for anyone to create intelligent, autonomous systems that can handle complex tasks.
            </p>

            <h2 className="text-2xl font-bold text-white mt-8">What Are AI Agents (And Why You Need Them)?</h2>
            
            <p><strong className="text-white">AI agents</strong> are autonomous systems that can:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Understand natural language instructions</li>
              <li>Make decisions based on context</li>
              <li>Perform actions across multiple platforms</li>
              <li>Learn and improve from interactions</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mt-6">Real-World Use Cases:</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>🤖 <strong className="text-white">Customer Support Agent</strong>: Handles tickets, answers FAQs, escalates issues</li>
              <li>📧 <strong className="text-white">Email Management Agent</strong>: Sorts, prioritizes, and drafts responses</li>
              <li>📊 <strong className="text-white">Data Analysis Agent</strong>: Collects data, generates reports, sends alerts</li>
              <li>📝 <strong className="text-white">Content Creation Agent</strong>: Writes blog posts, social media, summaries</li>
              <li>🛒 <strong className="text-white">E-commerce Agent</strong>: Manages inventory, pricing, customer queries</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mt-8">Best No-Code AI Agent Builders (2025)</h2>

            <h3 className="text-xl font-semibold text-white mt-6">1. SeekhoWithRua AI Agent Builder ⭐ Recommended</h3>
            <p>Our own platform designed specifically for Indian users:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong className="text-white">Visual workflow builder</strong> with drag-and-drop interface</li>
              <li><strong className="text-white">Pre-trained models</strong> for common business tasks</li>
              <li><strong className="text-white">Multi-language support</strong> (Hindi, English, Hinglish)</li>
              <li><strong className="text-white">Integration with Indian platforms</strong>: WhatsApp Business, Razorpay, Zoho</li>
              <li><strong className="text-white">Free tier</strong>: 1,000 agent interactions/month</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mt-6">2. Relevance AI</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Enterprise-grade agent builder</li>
              <li>Advanced workflow automation</li>
              <li>Integration with 100+ tools</li>
              <li>Price: Starts at $19/month</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mt-6">3. Make (formerly Integromat)</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Visual automation platform</li>
              <li>Connect apps and build workflows</li>
              <li>AI capabilities through OpenAI integration</li>
              <li>Price: Free tier available</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mt-8">Step-by-Step: Building Your First AI Agent</h2>

            <h3 className="text-xl font-semibold text-white mt-6">Step 1: Define Your Agent&apos;s Purpose</h3>
            <p>Before building, answer these questions:</p>
            <div className="overflow-x-auto not-prose">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-700">
                    <th className="text-left py-2 px-3">Question</th>
                    <th className="text-left py-2 px-3">Example Answer</th>
                  </tr>
                </thead>
                <tbody className="text-gray-400">
                  <tr className="border-b border-gray-800">
                    <td className="py-2 px-3">What problem does it solve?</td>
                    <td className="py-2 px-3">Handle customer support inquiries</td>
                  </tr>
                  <tr className="border-b border-gray-800">
                    <td className="py-2 px-3">What inputs does it receive?</td>
                    <td className="py-2 px-3">Customer messages via WhatsApp</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3">What actions does it take?</td>
                    <td className="py-2 px-3">Answer questions, create tickets</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-xl font-semibold text-white mt-6">Step 2: Choose Your Platform</h3>
            <p>For this tutorial, we&apos;ll use <strong className="text-white">SeekhoWithRua AI Agent Builder</strong> (free tier):</p>
            <ol className="list-decimal pl-6 space-y-2">
              <li>Visit <a href="https://app.seekhowithrua.com" className="text-purple-400 hover:text-purple-300">app.seekhowithrua.com</a></li>
              <li>Create a free account</li>
              <li>Click &quot;New Agent&quot; from the dashboard</li>
            </ol>

            <h3 className="text-xl font-semibold text-white mt-6">Step 3: Design the Conversation Flow</h3>
            <p>Using the visual builder:</p>
            <pre className="bg-black/50 p-4 rounded-lg overflow-x-auto text-sm">
{`[Start]
   ↓
[Greeting: "Hi! I'm your AI assistant. How can I help?"]
   ↓
[User Input]
   ↓
[Intent Recognition]
   ├──→ "Order Status" → [Check Order API]
   ├──→ "Refund Request" → [Create Ticket]
   └──→ "Human Agent" → [Transfer to Human]`}
            </pre>

            <h3 className="text-xl font-semibold text-white mt-6">Step 4: Add AI Capabilities</h3>
            <p><strong className="text-white">Intent Recognition (Without Coding)</strong></p>
            <p>Instead of writing code, use the Intent Classifier node:</p>
            <ol className="list-decimal pl-6 space-y-2">
              <li>Drag &quot;Intent Classifier&quot; to your canvas</li>
              <li>Define intents with example phrases</li>
              <li>The AI learns and automatically classifies messages</li>
            </ol>

            <h2 className="text-2xl font-bold text-white mt-8">Pricing Comparison</h2>
            <div className="overflow-x-auto not-prose">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-700">
                    <th className="text-left py-2 px-3">Platform</th>
                    <th className="text-left py-2 px-3">Free Tier</th>
                    <th className="text-left py-2 px-3">Starter</th>
                    <th className="text-left py-2 px-3">Best For</th>
                  </tr>
                </thead>
                <tbody className="text-gray-400">
                  <tr className="border-b border-gray-800">
                    <td className="py-2 px-3 text-white">SeekhoWithRua</td>
                    <td className="py-2 px-3">1,000 interactions</td>
                    <td className="py-2 px-3">₹999/month</td>
                    <td className="py-2 px-3">Indian businesses</td>
                  </tr>
                  <tr className="border-b border-gray-800">
                    <td className="py-2 px-3 text-white">Relevance AI</td>
                    <td className="py-2 px-3">100 runs</td>
                    <td className="py-2 px-3">$19/month</td>
                    <td className="py-2 px-3">Enterprise</td>
                  </tr>
                  <tr className="border-b border-gray-800">
                    <td className="py-2 px-3 text-white">Make</td>
                    <td className="py-2 px-3">100 ops/month</td>
                    <td className="py-2 px-3">$9/month</td>
                    <td className="py-2 px-3">Workflow automation</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3 text-white">Zapier</td>
                    <td className="py-2 px-3">100 tasks/month</td>
                    <td className="py-2 px-3">$19.99/month</td>
                    <td className="py-2 px-3">Simple integrations</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-white mt-8">Conclusion</h2>
            <p>
              Building AI agents without code is not just possible—it&apos;s becoming the standard. With the right no-code platform, you can create sophisticated AI systems in days, not months.
            </p>

            <div className="bg-purple-900/20 border border-purple-500/30 rounded-lg p-4 mt-6 not-prose">
              <p className="text-purple-400 font-semibold mb-2">🚀 Ready to build your first AI agent?</p>
              <p className="text-sm">
                Get started free at <a href="https://app.seekhowithrua.com" className="text-purple-400 hover:text-purple-300 underline">app.seekhowithrua.com</a>
              </p>
            </div>

            <div className="border-t border-gray-800 pt-8 mt-8 not-prose">
              <h3 className="text-lg font-semibold text-white mb-4">Related Articles</h3>
              <ul className="space-y-2">
                <li><Link href="/blog/claude-code-leak-2026" className="text-purple-400 hover:text-purple-300">Claude Code Leak 2026: What Developers Must Know About AI Security</Link></li>
                <li><Link href="/blog/oracle-layoffs-2026" className="text-purple-400 hover:text-purple-300">Oracle Layoffs 2026: Why Tech Giants Are Cutting Jobs</Link></li>
                <li><Link href="/blog/urls-discovered-not-indexed-fix" className="text-purple-400 hover:text-purple-300">URLs Discovered but Not Indexed: Google&apos;s Hidden Ranking Factors</Link></li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
