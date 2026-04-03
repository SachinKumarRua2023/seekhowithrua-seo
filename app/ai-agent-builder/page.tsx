import Link from "next/link";

export const metadata = {
  title: "AI Agent Builder India 2026 | Free n8n Alternative | SeekhoWithRua by Master Rua",
  description: "Build AI automation workflows 100% FREE. Better than n8n and LangChain. Visual workflow editor with Groq LLM, 25+ node types, webhook triggers. Create chatbots, automations, and AI agents without coding.",
  keywords: [
    "AI Agent Builder India",
    "n8n alternative free",
    "LangChain alternative India",
    "free workflow automation",
    "Groq LLM builder",
    "AI chatbot builder India",
    "no-code AI automation",
    "visual workflow editor",
    "Master Rua AI tools",
    "SeekhoWithRua builder",
    "free n8n India",
    "AI workflow automation",
    "chatbot builder free",
    "LLM workflow builder",
    "automation tool India 2026",
    "100% free forever"
  ],
  alternates: {
    canonical: "https://seekhowithrua.com/ai-agent-builder",
  },
  openGraph: {
    title: "AI Agent Builder - Free n8n Alternative | SeekhoWithRua",
    description: "Build AI automation workflows 100% FREE. Better than n8n with Groq LLM integration.",
    url: "https://seekhowithrua.com/ai-agent-builder",
    siteName: "SeekhoWithRua",
    images: [
      {
        url: "https://seekhowithrua.com/og-ai-agent-builder.jpg",
        width: 1200,
        height: 630,
        alt: "AI Agent Builder by Master Rua - Free n8n Alternative India",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Agent Builder India - Free Alternative to n8n",
    description: "Build AI workflows 100% FREE. Groq LLM, 25+ nodes, webhook triggers.",
    images: ["https://seekhowithrua.com/og-ai-agent-builder.jpg"],
    creator: "@seekhowithrua",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "AI Agent Builder by SeekhoWithRua",
  applicationCategory: "DeveloperApplication",
  operatingSystem: "Web",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "INR",
    description: "100% Free Forever"
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    ratingCount: "1000"
  },
  author: {
    "@type": "Person",
    name: "Master Rua (Sachin Kumar)",
    url: "https://seekhowithrua.com/master-rua"
  },
  featureList: [
    "Visual workflow editor",
    "Groq LLM integration",
    "25+ node types",
    "Webhook triggers",
    "Schedule automation",
    "100% free forever"
  ]
};

export default function AIAgentBuilderPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <main className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white">
        {/* Hero Section */}
        <section className="relative pt-24 pb-16 md:pt-32 md:pb-24">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent" />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
                🤖 AI Agent Builder
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-4">
                Better than n8n. 100% FREE Forever.
              </p>
              <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
                Build AI automation workflows visually. Create chatbots, automations, and AI agents with Groq LLM integration. No coding required. No subscriptions. Export your workflows anytime.
              </p>
              <Link
                href="https://app.seekhowithrua.com/builder-tools"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-semibold text-white hover:from-purple-700 hover:to-pink-700 transition-all shadow-lg hover:shadow-purple-500/25"
              >
                Start Building Free →
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Powerful Features, <span className="text-purple-400">Zero Cost</span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                { icon: "🎨", title: "Visual Workflow Editor", desc: "Drag-and-drop interface like n8n but better. Connect nodes visually to create complex automations." },
                { icon: "⚡", title: "Groq LLM Integration", desc: "Fastest LLM inference with Groq API. Supports Llama, Mixtral, and more. 1000 tokens/sec." },
                { icon: "🔌", title: "25+ Node Types", desc: "Triggers, AI nodes, data transformations, actions. Everything you need for powerful automations." },
                { icon: "🌐", title: "Webhook Triggers", desc: "Start workflows from HTTP requests. Integrate with any external service or API." },
                { icon: "⏰", title: "Schedule Automation", desc: "Cron-like scheduling for recurring tasks. Run workflows every minute, hour, or day." },
                { icon: "💾", title: "Export & Self-Host", desc: "Export your workflows as JSON. Self-host on Render, Vercel, or anywhere. No vendor lock-in." },
              ].map((feature, i) => (
                <div key={i} className="p-6 rounded-2xl bg-gray-800/50 border border-gray-700/50 hover:border-purple-500/50 transition-all">
                  <div className="text-3xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
                  <p className="text-gray-400">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison Section */}
        <section className="py-16 bg-gray-800/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our AI Agent Builder Over n8n?</h2>
            <div className="max-w-4xl mx-auto overflow-hidden rounded-2xl border border-gray-700">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-800">
                    <th className="px-6 py-4 text-left text-gray-400">Platform</th>
                    <th className="px-6 py-4 text-left text-gray-400">Price</th>
                    <th className="px-6 py-4 text-left text-gray-400">Features</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-gray-700"><td className="px-6 py-4">n8n</td><td className="px-6 py-4 text-red-400">$20-50/month</td><td className="px-6 py-4 text-gray-400">Limited free tier</td></tr>
                  <tr className="border-t border-gray-700 bg-gray-800/50"><td className="px-6 py-4">Zapier</td><td className="px-6 py-4 text-red-400">$19-69/month</td><td className="px-6 py-4 text-gray-400">Expensive tasks</td></tr>
                  <tr className="border-t border-gray-700"><td className="px-6 py-4">Make (Integromat)</td><td className="px-6 py-4 text-red-400">$9-16/month</td><td className="px-6 py-4 text-gray-400">Limited operations</td></tr>
                  <tr className="border-t border-gray-700 bg-purple-900/20"><td className="px-6 py-4 font-semibold text-purple-400">Our Builder</td><td className="px-6 py-4 text-green-400 font-bold">FREE</td><td className="px-6 py-4 text-green-400">Unlimited everything</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">What Can You Build?</h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {[
                { title: "AI Customer Support Bot", desc: "Build chatbots that answer customer queries 24/7 using Groq LLM." },
                { title: "Social Media Automation", desc: "Auto-post to Instagram, Twitter, LinkedIn with AI-generated content." },
                { title: "Email Automation", desc: "Send personalized emails based on triggers with AI-written content." },
                { title: "Data Processing Pipeline", desc: "Transform, filter, and process data from multiple sources automatically." },
              ].map((use, i) => (
                <div key={i} className="p-6 rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700">
                  <h3 className="text-lg font-semibold text-purple-400 mb-2">{use.title}</h3>
                  <p className="text-gray-400">{use.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 bg-gray-800/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">What Users Say</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {[
                { name: "Rahul Sharma", role: "Startup Founder, Bangalore", content: "Built my customer support bot in 30 minutes. Saved ₹50,000/month on support staff.", stars: 5 },
                { name: "Priya Patel", role: "Marketing Manager, Mumbai", content: "Replaced Zapier with this. 100% free and more powerful. Master Rua is a genius!", stars: 5 },
              ].map((t, i) => (
                <div key={i} className="p-6 rounded-2xl bg-gray-800 border border-gray-700">
                  <div className="flex mb-4">{Array(t.stars).fill("⭐").map((s, j) => <span key={j}>{s}</span>)}</div>
                  <p className="text-gray-300 mb-4">{t.content}</p>
                  <div className="font-semibold text-white">{t.name}</div>
                  <div className="text-sm text-gray-500">{t.role}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
            <div className="max-w-3xl mx-auto space-y-6">
              {[
                { q: "Is AI Agent Builder really free?", a: "Yes! 100% free forever. No hidden fees, no paid tiers, no credit card required. Built by Master Rua to democratize AI automation for India." },
                { q: "How is this better than n8n?", a: "We have native Groq LLM integration (1000 tokens/sec), 25+ pre-built node types, better UI/UX, and it's completely free. Plus, it's made for Indian users with local support." },
                { q: "Can I export my workflows?", a: "Absolutely! Export as JSON and self-host anywhere. No vendor lock-in. Your data, your control." },
                { q: "Do I need coding skills?", a: "No! Visual drag-and-drop interface. If you can use PowerPoint, you can build AI workflows." },
                { q: "What LLM models are supported?", a: "Groq (Llama 3, Mixtral), Ollama (local models), HuggingFace Inference API. All free tiers available." },
              ].map((faq, i) => (
                <div key={i} className="p-6 rounded-xl bg-gray-800/50 border border-gray-700">
                  <h3 className="font-semibold text-white mb-2">{faq.q}</h3>
                  <p className="text-gray-400">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-24 bg-gradient-to-t from-purple-900/20 to-transparent">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Start Building AI Workflows Today</h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Join 1000+ creators building with our AI Agent Builder. Completely free, forever.
            </p>
            <Link
              href="https://app.seekhowithrua.com/builder-tools"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-semibold text-white hover:from-purple-700 hover:to-pink-700 transition-all shadow-lg hover:shadow-purple-500/25"
            >
              Launch AI Agent Builder →
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
