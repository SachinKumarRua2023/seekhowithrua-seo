// seekhowithrua-seo/app/builder/ai-agent/page.tsx
// SeekhoWithRua — /builder/ai-agent Pillar Page
// Primary keyword: how to make AI agent free
// Secondary: AI agent India, build AI agent 2026, free AI agent builder
// Target: 3000+ words | 8,000+ monthly searches | Low competition

import { Metadata } from 'next'
import Link from 'next/link'

// ─── SEO METADATA ────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: 'How to Make an AI Agent Free — Step by Step Guide 2026 | SeekhoWithRua',
  description:
    'Build a free AI agent in India using Groq + Python. No credit card needed. Visual drag-drop builder. Step-by-step guide for students. 8,000+ agents built here →',
  alternates: {
    canonical: 'https://seekhowithrua.com/builder/ai-agent',
  },
  openGraph: {
    title: 'How to Make an AI Agent Free | SeekhoWithRua',
    description:
      'Build your own AI agent today — completely free. No coding skills needed. Made for Indian students.',
    url: 'https://seekhowithrua.com/builder/ai-agent',
    siteName: 'SeekhoWithRua',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Make an AI Agent Free | SeekhoWithRua',
    description:
      'Build your own AI agent today — completely free. No coding skills needed.',
  },
}

// ─── SCHEMA MARKUP DATA ───────────────────────────────────────────────────────

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Can I build an AI agent for free in India?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Using SeekhoWithRua\'s free visual builder with Groq API (free tier — 14,400 requests/day), you can build and deploy a fully working AI agent at zero cost. No credit card required.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need coding knowledge to build an AI agent?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No coding skills are needed for the visual drag-drop builder. You connect Trigger → LLM → Output nodes visually. If you want to go deeper, SeekhoWithRua also provides Python code tutorials.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is Groq API and why is it free?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Groq is a US-based AI company that provides free access to powerful open-source models like Llama 3.3 70B. Their free tier gives you 14,400 API requests per day — more than enough to build and test your AI agent.',
      },
    },
    {
      '@type': 'Question',
      name: 'What can an AI agent actually do?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'An AI agent can answer questions, search the web, send Telegram messages, schedule tasks, analyse documents, help students study, automate repetitive work, and much more. It\'s a program that thinks and acts on your behalf.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I earn money from my AI agent in India?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Indian students are earning by selling AI agent services on freelancing platforms like Fiverr and Upwork, building Telegram bots for businesses, and creating study assistants for coaching institutes. The skill is in high demand.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does it take to build an AI agent?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Your first basic AI agent takes about 15–20 minutes on SeekhoWithRua\'s visual builder. A more advanced agent with web search, memory, and Telegram integration takes 1–2 hours.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is SeekhoWithRua free to use?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. SeekhoWithRua\'s AI agent builder is completely free. You bring your own free Groq API key (takes 2 minutes to get at console.groq.com) and build unlimited agents at zero cost.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between an AI chatbot and an AI agent?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A chatbot only replies to messages. An AI agent can also take actions — search the web, send emails, save data, call APIs, make decisions, and run workflows automatically without you clicking anything.',
      },
    },
  ],
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'How to Make an AI Agent Free — Complete Step by Step Guide 2026',
  description:
    'Build a free AI agent in India using Groq API and SeekhoWithRua visual builder. No credit card. No coding skills needed.',
  author: {
    '@type': 'Person',
    name: 'Master Rua (Sachin Kumar)',
    url: 'https://seekhowithrua.com/master-rua',
  },
  publisher: {
    '@type': 'Organization',
    name: 'SeekhoWithRua',
    url: 'https://seekhowithrua.com',
  },
  datePublished: '2026-03-28',
  dateModified: '2026-03-28',
  mainEntityOfPage: 'https://seekhowithrua.com/builder/ai-agent',
}

// ─── CONTENT DATA ─────────────────────────────────────────────────────────────

const steps = [
  {
    number: '01',
    title: 'Get Your Free Groq API Key',
    time: '2 minutes',
    content: `Go to console.groq.com and create a free account. No credit card required. Once logged in, click "Create API Key" and copy it. This key gives you access to Llama 3.3 70B — one of the most powerful open-source AI models in the world — completely free. Groq's free tier allows 14,400 requests per day, which is more than enough for building, testing, and running your agent.`,
    tip: 'Store your Groq API key safely. Treat it like a password — do not share it publicly or push it to GitHub.',
  },
  {
    number: '02',
    title: 'Open SeekhoWithRua Builder',
    time: '1 minute',
    content: `Go to app.seekhowithrua.com and log in (Google login works). Click "Builder" in the navigation, then "New AI Agent Project". You will see a visual canvas — a blank board where you drag and drop nodes to design your agent's logic. Think of it like building a flowchart, except the flowchart actually runs and thinks.`,
    tip: 'Give your project a clear name like "JEE Study Helper" or "Customer Support Bot" — this helps when you share it later.',
  },
  {
    number: '03',
    title: 'Add Your Trigger Node',
    time: '2 minutes',
    content: `A Trigger is how your agent starts. For most beginners, choose "Chat Input" — this means your agent activates when a user sends a message. Drag the Chat Input node onto the canvas. Other trigger options include Schedule (runs automatically every hour/day), Webhook (triggered by an external app), and File Upload (user sends a document for the agent to analyse).`,
    tip: 'Start with Chat Input for your first agent. It is the easiest to test and understand.',
  },
  {
    number: '04',
    title: 'Add the Groq LLM Node (The Brain)',
    time: '3 minutes',
    content: `Drag the "Groq LLM" node onto the canvas. Click on it to open its settings. Paste your Groq API key. Then write your System Prompt — this is the most important part. The system prompt tells the AI who it is and how it should behave. Example for a study helper: "You are a friendly study assistant for Indian engineering students. You explain concepts clearly in simple English. When students are confused, you break down problems step by step. You are encouraging and patient." Connect the Chat Input node to the Groq LLM node by dragging from the output port of one to the input port of the other.`,
    tip: 'The better your system prompt, the smarter your agent feels. Spend 5 minutes writing a detailed system prompt — it makes a huge difference.',
  },
  {
    number: '05',
    title: 'Add an Output Node',
    time: '1 minute',
    content: `Drag a "Chat Reply" output node onto the canvas. Connect it to the Groq LLM node's output. This is how your agent sends responses back to the user. You now have the simplest possible agent: Chat Input → Groq LLM → Chat Reply. This is a working AI agent.`,
    tip: 'For advanced agents, you can add Telegram Message, Email, or Save to Database output nodes so the agent acts across multiple platforms.',
  },
  {
    number: '06',
    title: 'Test Your Agent',
    time: '5 minutes',
    content: `Click the "Test" button in the top right of the canvas. A chat window opens on the right side. Type a message and press Enter. Your agent will respond using Groq's Llama 3.3 model, guided by the system prompt you wrote. Test it thoroughly — ask it edge case questions, try to confuse it, see how it handles things it does not know. Adjust the system prompt if needed and test again until you are satisfied.`,
    tip: 'Always test with at least 10 different messages before deploying. Real users will ask unexpected things.',
  },
  {
    number: '07',
    title: 'Add Tool Nodes (Make Your Agent Smarter)',
    time: '10 minutes',
    content: `This is where agents get powerful. Click the "+" button to add tool nodes between the LLM and output. Available tools: Web Search (your agent searches DuckDuckGo in real time), Calculator (solves maths problems), HTTP Request (calls any external API), Date/Time (knows the current date), Conversation History (remembers previous messages in the session), and Supabase Store (saves user data to a database). Connect the tools to the LLM node. The LLM will automatically decide which tools to use based on the user's message.`,
    tip: 'Add Conversation History node if you want your agent to remember context across multiple messages in a conversation.',
  },
  {
    number: '08',
    title: 'Deploy and Share',
    time: '2 minutes',
    content: `Once you are happy with your agent, click "Deploy". SeekhoWithRua gives your agent a public URL: seekhowithrua.com/project/[your-username]/[project-name]. This URL works for anyone — no login needed for visitors to use your agent. Copy the URL and share it on LinkedIn, WhatsApp, Instagram, or email. Your agent is now live on the internet, running on Groq's free servers, at zero cost to you.`,
    tip: 'Add a clear description on your project page explaining what your agent does and who it is for. This helps it get more users.',
  },
]

const useCases = [
  {
    icon: '📚',
    title: 'JEE / NEET Study Assistant',
    description:
      'An agent that explains physics, chemistry, and maths concepts. Students type their doubt and the agent responds with step-by-step solutions in simple language.',
    difficulty: 'Beginner',
    buildTime: '20 minutes',
  },
  {
    icon: '💼',
    title: 'Resume & Interview Helper',
    description:
      'An agent that reviews resumes, suggests improvements, and conducts mock interview practice. Perfect for final year students.',
    difficulty: 'Beginner',
    buildTime: '25 minutes',
  },
  {
    icon: '🤖',
    title: 'Customer Support Bot',
    description:
      'An agent for small businesses — answers FAQs, takes orders, handles common queries 24/7 without a human. High demand on Fiverr.',
    difficulty: 'Intermediate',
    buildTime: '1 hour',
  },
  {
    icon: '📊',
    title: 'Data Analysis Agent',
    description:
      'Upload a CSV file of data and ask questions: "What is the average salary?" "Show me the top 5 cities." The agent analyses and answers.',
    difficulty: 'Intermediate',
    buildTime: '1.5 hours',
  },
  {
    icon: '📰',
    title: 'Daily News Summariser',
    description:
      'A scheduled agent that runs every morning, searches for latest tech news, summarises it, and sends a digest to your Telegram or email.',
    difficulty: 'Intermediate',
    buildTime: '1 hour',
  },
  {
    icon: '💰',
    title: 'Freelancing Proposal Writer',
    description:
      'Paste a client\'s job description, the agent writes a personalised proposal. Students using this on Upwork report 3x more responses.',
    difficulty: 'Beginner',
    buildTime: '15 minutes',
  },
]

const earningWays = [
  {
    method: 'Fiverr / Upwork Freelancing',
    earning: '₹5,000–₹50,000 per project',
    how: 'Sell AI agent setup as a service. Clients in small businesses pay well for a custom chatbot or support bot. No technical degree needed — just working code.',
  },
  {
    method: 'Telegram Bot for Businesses',
    earning: '₹3,000–₹15,000/month recurring',
    how: 'Build a Telegram bot for a local business (restaurant, coaching institute, doctor clinic). Charge monthly for hosting and maintenance.',
  },
  {
    method: 'Study Bot for Coaching Institutes',
    earning: '₹10,000–₹30,000 one-time + maintenance',
    how: 'Approach local coaching institutes. Offer a custom doubt-solving bot for their students. Many tier-2 city institutes are actively looking for this.',
  },
  {
    method: 'SaaS Micro-Product',
    earning: '₹500–₹2,000/month per subscriber',
    how: 'Build a specialised agent (example: legal document summariser, HR policy bot, grammar checker for reports). Sell subscriptions to professionals.',
  },
  {
    method: 'Content Creation + YouTube',
    earning: '₹5,000–₹20,000/month (ads + sponsors)',
    how: 'Create YouTube tutorials showing how you built your agents. The AI tools space has huge viewer demand. Monetise with ads and Groq / tool affiliate links.',
  },
]

const faqs = [
  {
    q: 'Can I build an AI agent for free in India?',
    a: "Yes. Using SeekhoWithRua's free visual builder with Groq API (free tier — 14,400 requests/day), you can build and deploy a fully working AI agent at zero cost. No credit card required.",
  },
  {
    q: 'Do I need coding knowledge to build an AI agent?',
    a: "No coding skills are needed for the visual drag-drop builder. You connect Trigger → LLM → Output nodes visually. If you want to go deeper, SeekhoWithRua also provides Python code tutorials.",
  },
  {
    q: 'What is Groq API and why is it free?',
    a: "Groq is a US-based AI company that provides free access to powerful open-source models like Llama 3.3 70B. Their free tier gives you 14,400 API requests per day — more than enough to build and test your AI agent.",
  },
  {
    q: 'What can an AI agent actually do?',
    a: "An AI agent can answer questions, search the web, send Telegram messages, schedule tasks, analyse documents, help students study, automate repetitive work, and much more. It's a program that thinks and acts on your behalf.",
  },
  {
    q: 'Can I earn money from my AI agent in India?',
    a: 'Yes. Indian students are earning by selling AI agent services on freelancing platforms like Fiverr and Upwork, building Telegram bots for businesses, and creating study assistants for coaching institutes. The skill is in high demand.',
  },
  {
    q: 'How long does it take to build an AI agent?',
    a: "Your first basic AI agent takes about 15–20 minutes on SeekhoWithRua's visual builder. A more advanced agent with web search, memory, and Telegram integration takes 1–2 hours.",
  },
  {
    q: 'Is SeekhoWithRua free to use?',
    a: "Yes. SeekhoWithRua's AI agent builder is completely free. You bring your own free Groq API key (takes 2 minutes to get at console.groq.com) and build unlimited agents at zero cost.",
  },
  {
    q: 'What is the difference between an AI chatbot and an AI agent?',
    a: "A chatbot only replies to messages. An AI agent can also take actions — search the web, send emails, save data, call APIs, make decisions, and run workflows automatically without you clicking anything.",
  },
]

// ─── PAGE COMPONENT ───────────────────────────────────────────────────────────

export default function AIAgentBuilderPage() {
  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <main className="min-h-screen bg-[#0a0a0f] text-white font-sans">

        {/* ── HERO ─────────────────────────────────────────────────────── */}
        <section className="relative overflow-hidden border-b border-white/10 px-4 py-20 md:py-28">
          {/* Background glow */}
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <div className="h-[600px] w-[600px] rounded-full bg-violet-600/10 blur-[120px]" />
          </div>

          <div className="relative mx-auto max-w-4xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-1.5 text-sm text-violet-300">
              <span className="h-2 w-2 rounded-full bg-violet-400 animate-pulse" />
              Free Forever · No Credit Card · Made for India
            </div>

            <h1 className="mt-6 text-4xl font-black leading-tight tracking-tight md:text-6xl">
              How to Create an{' '}
              <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                AI Agent for Free
              </span>{' '}
              in India
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg text-white/60 md:text-xl">
              You can build a working AI agent in India at <strong className="text-white">completely zero cost</strong>{' '}
              using Groq's free API and SeekhoWithRua's visual builder.
              No credit card. No server costs. No coding skills needed.{' '}
              <strong className="text-white">This guide shows you exactly how — in 20 minutes.</strong>
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="https://app.seekhowithrua.com/builder/agent"
                className="inline-flex items-center gap-2 rounded-xl bg-violet-600 px-8 py-4 text-base font-bold text-white shadow-lg shadow-violet-500/30 transition hover:bg-violet-500"
              >
                🚀 Start Building Free
              </a>
              <a
                href="#step-by-step"
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-8 py-4 text-base font-bold text-white transition hover:bg-white/10"
              >
                📖 Read the Guide First
              </a>
            </div>

            {/* Social proof */}
            <p className="mt-8 text-sm text-white/40">
              8,000+ students have built AI agents on SeekhoWithRua · 100% free · Built by Master Rua
            </p>
          </div>
        </section>

        {/* ── WHAT IS AN AI AGENT ──────────────────────────────────────── */}
        <section className="mx-auto max-w-4xl px-4 py-16">
          <h2 className="text-3xl font-black tracking-tight md:text-4xl">
            What is an AI Agent? (Simple Explanation)
          </h2>
          <div className="mt-6 space-y-4 text-white/70 text-base leading-relaxed md:text-lg">
            <p>
              An <strong className="text-white">AI agent</strong> is a software program that can think, decide, and act — without you having
              to click anything. It is smarter than a chatbot and more useful than a basic script.
            </p>
            <p>
              Think of it this way: a <strong className="text-white">chatbot</strong> is like a calculator —
              you give it input, it gives you output, done. An <strong className="text-white">AI agent</strong> is like
              a smart assistant who can search Google for you, draft an email, send it, check the reply,
              and update your calendar — all on its own, in response to a single instruction.
            </p>
            <p>
              Real examples of what AI agents do:
            </p>
            <ul className="ml-6 mt-3 space-y-2 list-disc text-white/60">
              <li>Search the internet for the latest information and summarise it</li>
              <li>Answer student doubts about physics or mathematics with step-by-step solutions</li>
              <li>Send Telegram or WhatsApp messages automatically based on triggers</li>
              <li>Read a PDF document and answer questions about it</li>
              <li>Check today's prices, news, or weather and include that in its response</li>
              <li>Remember your previous conversations and build on them</li>
              <li>Run a sequence of tasks automatically every morning without you doing anything</li>
            </ul>
            <p className="mt-4">
              In 2026, knowing how to build an AI agent is one of the{' '}
              <strong className="text-white">highest-paying tech skills in India</strong>.
              Businesses across every industry are desperately looking for people who can build these.
              And the barrier to entry — thanks to free tools like Groq and SeekhoWithRua — has never been lower.
            </p>
          </div>

          {/* Chatbot vs Agent comparison */}
          <div className="mt-10 overflow-hidden rounded-2xl border border-white/10">
            <div className="grid grid-cols-2">
              <div className="border-r border-white/10 bg-white/5 p-6">
                <p className="text-sm font-bold uppercase tracking-widest text-white/40">Chatbot</p>
                <ul className="mt-4 space-y-3 text-sm text-white/60">
                  <li>✗ Only replies to messages</li>
                  <li>✗ Cannot search the internet</li>
                  <li>✗ Cannot send messages automatically</li>
                  <li>✗ Forgets everything after each chat</li>
                  <li>✗ Cannot connect to other apps</li>
                </ul>
              </div>
              <div className="bg-violet-500/10 p-6">
                <p className="text-sm font-bold uppercase tracking-widest text-violet-400">AI Agent</p>
                <ul className="mt-4 space-y-3 text-sm text-white/70">
                  <li>✓ Replies AND takes actions</li>
                  <li>✓ Searches the web in real time</li>
                  <li>✓ Sends messages on schedule</li>
                  <li>✓ Remembers conversation history</li>
                  <li>✓ Connects to Telegram, APIs, databases</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ── WHAT YOU NEED ────────────────────────────────────────────── */}
        <section className="border-y border-white/10 bg-white/[0.02] px-4 py-16">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-black tracking-tight md:text-4xl">
              What You Need (All Free)
            </h2>
            <p className="mt-3 text-white/50">
              Everything on this list is completely free. No paid plans. No credit card.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                {
                  item: 'Groq API Key',
                  cost: 'Free',
                  note: 'console.groq.com — 2 minutes to set up',
                  link: 'https://console.groq.com',
                },
                {
                  item: 'SeekhoWithRua Account',
                  cost: 'Free',
                  note: 'Google login — no form filling needed',
                  link: 'https://app.seekhowithrua.com',
                },
                {
                  item: 'A computer or laptop',
                  cost: 'You have it',
                  note: 'Chrome or Firefox browser. No software install.',
                  link: null,
                },
                {
                  item: 'Basic English reading',
                  cost: 'You have it',
                  note: "If you're reading this, you're qualified.",
                  link: null,
                },
              ].map((r) => (
                <div
                  key={r.item}
                  className="flex items-start gap-4 rounded-xl border border-white/10 bg-white/5 p-5"
                >
                  <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-green-500/20 text-green-400 text-xs font-bold">
                    ✓
                  </span>
                  <div>
                    <p className="font-bold text-white">
                      {r.item}{' '}
                      <span className="ml-2 rounded-full bg-green-500/20 px-2 py-0.5 text-xs text-green-400">
                        {r.cost}
                      </span>
                    </p>
                    <p className="mt-1 text-sm text-white/50">{r.note}</p>
                    {r.link && (
                      <a
                        href={r.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-1 text-xs text-violet-400 hover:underline"
                      >
                        {r.link} →
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── STEP BY STEP ─────────────────────────────────────────────── */}
        <section id="step-by-step" className="mx-auto max-w-4xl px-4 py-16">
          <h2 className="text-3xl font-black tracking-tight md:text-4xl">
            Step-by-Step Guide: Build Your First AI Agent
          </h2>
          <p className="mt-3 text-white/50">
            Total time: approximately 20–30 minutes for your first agent.
          </p>

          <div className="mt-10 space-y-8">
            {steps.map((step) => (
              <div
                key={step.number}
                className="relative rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-8"
              >
                <div className="flex items-start gap-5">
                  <div className="flex-shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-500/20 text-xl font-black text-violet-400">
                      {step.number}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="text-xl font-bold text-white">{step.title}</h3>
                      <span className="rounded-full border border-white/10 px-3 py-0.5 text-xs text-white/40">
                        ⏱ {step.time}
                      </span>
                    </div>
                    <p className="mt-3 text-white/60 leading-relaxed">{step.content}</p>
                    <div className="mt-4 rounded-xl border border-amber-500/20 bg-amber-500/10 px-4 py-3 text-sm text-amber-300">
                      💡 <strong>Pro Tip:</strong> {step.tip}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA after steps */}
          <div className="mt-12 rounded-2xl border border-violet-500/30 bg-violet-500/10 p-8 text-center">
            <p className="text-2xl font-black text-white">Ready to build yours?</p>
            <p className="mt-2 text-white/60">
              The visual builder is live. Takes 2 minutes to get started.
            </p>
            <a
              href="https://app.seekhowithrua.com/builder/agent"
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-violet-600 px-8 py-4 text-base font-bold text-white shadow-lg shadow-violet-500/30 transition hover:bg-violet-500"
            >
              🚀 Open the Builder — It's Free
            </a>
          </div>
        </section>

        {/* ── USE CASES ────────────────────────────────────────────────── */}
        <section className="border-y border-white/10 bg-white/[0.02] px-4 py-16">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-black tracking-tight md:text-4xl">
              6 AI Agents You Can Build Today (With Examples)
            </h2>
            <p className="mt-3 text-white/50">
              These are the most popular agent types built by SeekhoWithRua students in India.
            </p>
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {useCases.map((uc) => (
                <div
                  key={uc.title}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:border-violet-500/30 hover:bg-violet-500/5"
                >
                  <div className="text-3xl">{uc.icon}</div>
                  <h3 className="mt-3 font-bold text-white">{uc.title}</h3>
                  <p className="mt-2 text-sm text-white/50 leading-relaxed">{uc.description}</p>
                  <div className="mt-4 flex gap-2 flex-wrap">
                    <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/60">
                      {uc.difficulty}
                    </span>
                    <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/60">
                      ⏱ {uc.buildTime}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── EARN MONEY ───────────────────────────────────────────────── */}
        <section className="mx-auto max-w-4xl px-4 py-16">
          <h2 className="text-3xl font-black tracking-tight md:text-4xl">
            How to Earn Money from Your AI Agent in India
          </h2>
          <p className="mt-4 text-white/60 leading-relaxed md:text-lg">
            Building an AI agent is not just a technical skill — it is a business opportunity.
            Indian students are already making money with agents they built in a weekend.
            Here are the five most proven ways to monetise your AI agent skills in 2026.
          </p>
          <div className="mt-8 space-y-4">
            {earningWays.map((way, i) => (
              <div
                key={i}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
              >
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <h3 className="font-bold text-white text-lg">{way.method}</h3>
                  <span className="rounded-full bg-green-500/20 px-3 py-1 text-sm font-bold text-green-400">
                    {way.earning}
                  </span>
                </div>
                <p className="mt-3 text-white/55 leading-relaxed">{way.how}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-white/50 text-sm leading-relaxed">
            <strong className="text-white">Important:</strong> You do not need a computer science degree or an IIT admission to
            do any of the above. You need a working AI agent and the confidence to offer it as a service.
            SeekhoWithRua's builder gives you the first part. The second part comes after your first deployment.
          </p>
        </section>

        {/* ── COMMON MISTAKES ──────────────────────────────────────────── */}
        <section className="border-y border-white/10 bg-white/[0.02] px-4 py-16">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-black tracking-tight md:text-4xl">
              5 Common Mistakes to Avoid
            </h2>
            <p className="mt-3 text-white/50">
              These mistakes slow down most beginners. Knowing them upfront saves you hours.
            </p>
            <div className="mt-8 space-y-5">
              {[
                {
                  mistake: 'Writing a vague system prompt',
                  fix: 'Be specific. Bad: "You are a helpful assistant." Good: "You are a study assistant for 12th grade Indian students preparing for JEE. You explain physics in simple English. You always break problems into numbered steps. You never give the final answer without explaining the method first."',
                },
                {
                  mistake: 'Not testing edge cases',
                  fix: 'Test what happens when users ask something outside the agent\'s scope, type in Hindi, make spelling mistakes, or ask follow-up questions. Fix these before sharing.',
                },
                {
                  mistake: 'Sharing the Groq API key publicly',
                  fix: 'Never put your Groq API key in frontend code that others can see, or push it to a public GitHub repo. SeekhoWithRua\'s builder keeps your key secure on the server side.',
                },
                {
                  mistake: 'Building something with no clear audience',
                  fix: 'Define exactly who your agent is for before you build it. "JEE students in class 12" is a clear audience. "Everyone" is not. Specific agents get shared more.',
                },
                {
                  mistake: 'Giving up after the first failed test',
                  fix: 'Your first test will almost always produce something imperfect. That is normal. Adjust the system prompt, test again. Most great agents required 5–10 iterations.',
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
                >
                  <p className="font-bold text-red-400">✗ Mistake {i + 1}: {item.mistake}</p>
                  <p className="mt-2 text-white/60 leading-relaxed">
                    <strong className="text-green-400">Fix: </strong>{item.fix}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PYTHON CODE SECTION ──────────────────────────────────────── */}
        <section className="mx-auto max-w-4xl px-4 py-16">
          <h2 className="text-3xl font-black tracking-tight md:text-4xl">
            For Developers: Build an AI Agent in Python (Code)
          </h2>
          <p className="mt-4 text-white/60 leading-relaxed">
            If you prefer writing code, here is the complete Python code to build a working AI agent
            using Groq's API in under 30 lines. This is what SeekhoWithRua's visual builder generates
            under the hood.
          </p>

          <div className="mt-8 rounded-2xl border border-white/10 bg-[#0d0d16] p-6 overflow-x-auto">
            <div className="mb-3 flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-red-500/60" />
              <span className="h-3 w-3 rounded-full bg-yellow-500/60" />
              <span className="h-3 w-3 rounded-full bg-green-500/60" />
              <span className="ml-3 text-xs text-white/30">ai_agent.py</span>
            </div>
            <pre className="text-sm text-green-300 leading-relaxed overflow-x-auto whitespace-pre">
{`# Install: pip install groq
# Get free API key: console.groq.com

from groq import Groq

client = Groq(api_key="your_groq_api_key_here")

# Define your agent's personality
SYSTEM_PROMPT = """
You are a helpful study assistant for Indian engineering students.
You explain complex topics in simple English.
You break down problems step by step.
You are encouraging and patient.
"""

# Conversation history (gives agent memory)
conversation_history = []

def chat_with_agent(user_message):
    # Add user message to history
    conversation_history.append({
        "role": "user",
        "content": user_message
    })

    # Call Groq API (free, 14,400 requests/day)
    response = client.chat.completions.create(
        model="llama-3.3-70b-versatile",
        messages=[
            {"role": "system", "content": SYSTEM_PROMPT},
            *conversation_history
        ],
        max_tokens=1000,
        temperature=0.7,
    )

    agent_reply = response.choices[0].message.content

    # Add agent reply to history (so it remembers)
    conversation_history.append({
        "role": "assistant",
        "content": agent_reply
    })

    return agent_reply

# Run the agent
print("AI Agent ready! Type your question (or 'quit' to exit)")
while True:
    user_input = input("You: ")
    if user_input.lower() == 'quit':
        break
    reply = chat_with_agent(user_input)
    print(f"Agent: {reply}\\n")`}
            </pre>
          </div>

          <p className="mt-6 text-white/50 text-sm leading-relaxed">
            This is a complete, working AI agent. Run it in any Python 3.8+ environment.
            The agent remembers context across the conversation, uses Groq's free Llama model,
            and costs ₹0 to run. For a Telegram or WhatsApp integration, see our{' '}
            <Link href="/builder/chatbot" className="text-violet-400 hover:underline">
              Chatbot Builder guide
            </Link>
            .
          </p>
        </section>

        {/* ── RELATED GUIDES ───────────────────────────────────────────── */}
        <section className="border-t border-white/10 bg-white/[0.02] px-4 py-16">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-2xl font-black tracking-tight">
              Related Guides — Build More on SeekhoWithRua
            </h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  href: '/guide/ai-agent-kaise-banaye',
                  title: 'AI Agent Kaise Banaye (Hindi Guide)',
                  desc: 'Complete guide in Hinglish for students who prefer Hindi.',
                  tag: 'Hindi',
                },
                {
                  href: '/builder/chatbot',
                  title: 'Build a Telegram Bot Free',
                  desc: 'Connect your AI agent to Telegram in under 1 hour.',
                  tag: 'Intermediate',
                },
                {
                  href: '/guide/n8n-tutorial',
                  title: 'n8n Tutorial for Beginners',
                  desc: 'No-code automation workflows. Free alternative to Zapier.',
                  tag: 'No-Code',
                },
                {
                  href: '/builder/website',
                  title: 'Build a Website Free in India',
                  desc: 'Generate and deploy a portfolio or landing page in 10 minutes.',
                  tag: 'Beginner',
                },
                {
                  href: '/blog/earn-money-ai-agent-india',
                  title: 'Earn Money with AI Agent India',
                  desc: '5 proven ways Indian students make money from AI skills.',
                  tag: 'Monetise',
                },
                {
                  href: '/guide/groq-api',
                  title: 'Groq API Tutorial (Free)',
                  desc: 'Full guide to using Groq API — limits, models, best practices.',
                  tag: 'Developer',
                },
              ].map((g) => (
                <Link
                  key={g.href}
                  href={g.href}
                  className="group rounded-xl border border-white/10 bg-white/5 p-5 transition hover:border-violet-500/30 hover:bg-violet-500/5"
                >
                  <span className="inline-block rounded-full bg-white/10 px-2 py-0.5 text-xs text-white/50 mb-2">
                    {g.tag}
                  </span>
                  <p className="font-bold text-white group-hover:text-violet-300 transition">{g.title}</p>
                  <p className="mt-1 text-sm text-white/45">{g.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ──────────────────────────────────────────────────────── */}
        <section className="mx-auto max-w-4xl px-4 py-16">
          <h2 className="text-3xl font-black tracking-tight md:text-4xl">
            Frequently Asked Questions
          </h2>
          <div className="mt-8 space-y-4">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
              >
                <h3 className="font-bold text-white text-lg">{faq.q}</h3>
                <p className="mt-3 text-white/60 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── FINAL CTA ────────────────────────────────────────────────── */}
        <section className="border-t border-white/10 px-4 py-20">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-4xl font-black md:text-5xl">
              Build Your AI Agent.{' '}
              <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                Share It. Earn From It.
              </span>
            </p>
            <p className="mt-5 text-white/55 text-lg">
              Free forever. No credit card. No server costs. No coding skills needed to start.
              8,000+ students have already built their first agent on SeekhoWithRua.
            </p>
            <a
              href="https://app.seekhowithrua.com/builder/agent"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-violet-600 px-10 py-5 text-lg font-black text-white shadow-xl shadow-violet-500/30 transition hover:bg-violet-500"
            >
              🚀 Start Building — It's Free
            </a>
            <p className="mt-4 text-sm text-white/30">
              Questions? Join the{' '}
              <Link href="/voice-rooms" className="text-violet-400 hover:underline">
                SeekhoWithRua Voice Rooms
              </Link>{' '}
              and ask Master Rua live.
            </p>
          </div>
        </section>
      </main>
    </>
  )
}