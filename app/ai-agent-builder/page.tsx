import CoursePageTemplate from "@/components/CoursePageTemplate";

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
    "automation tool India 2026"
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
  const content = {
    hero: {
      title: "🤖 AI Agent Builder",
      subtitle: "Better than n8n. 100% FREE Forever.",
      description: "Build AI automation workflows visually. Create chatbots, automations, and AI agents with Groq LLM integration. No coding required. No subscriptions. Export your workflows anytime.",
      cta: "Start Building Free →",
      ctaLink: "https://app.seekhowithrua.com/builder-tools",
      image: "/ai-agent-builder-hero.jpg"
    },
    features: [
      {
        icon: "🎨",
        title: "Visual Workflow Editor",
        description: "Drag-and-drop interface like n8n but better. Connect nodes visually to create complex automations."
      },
      {
        icon: "⚡",
        title: "Groq LLM Integration",
        description: "Fastest LLM inference with Groq API. Supports Llama, Mixtral, and more. 1000 tokens/sec."
      },
      {
        icon: "🔌",
        title: "25+ Node Types",
        description: "Triggers, AI nodes, data transformations, actions. Everything you need for powerful automations."
      },
      {
        icon: "🌐",
        title: "Webhook Triggers",
        description: "Start workflows from HTTP requests. Integrate with any external service or API."
      },
      {
        icon: "⏰",
        title: "Schedule Automation",
        description: "Cron-like scheduling for recurring tasks. Run workflows every minute, hour, or day."
      },
      {
        icon: "💾",
        title: "Export & Self-Host",
        description: "Export your workflows as JSON. Self-host on Render, Vercel, or anywhere. No vendor lock-in."
      }
    ],
    comparison: {
      title: "Why Choose Our AI Agent Builder Over n8n?",
      competitors: [
        { name: "n8n", price: "$20-50/month", features: "Limited free tier" },
        { name: "Zapier", price: "$19-69/month", features: "Expensive tasks" },
        { name: "Make (Integromat)", price: "$9-16/month", features: "Limited operations" },
        { name: "Our Builder", price: "FREE", features: "Unlimited everything" }
      ]
    },
    useCases: [
      {
        title: "AI Customer Support Bot",
        description: "Build chatbots that answer customer queries 24/7 using Groq LLM."
      },
      {
        title: "Social Media Automation",
        description: "Auto-post to Instagram, Twitter, LinkedIn with AI-generated content."
      },
      {
        title: "Email Automation",
        description: "Send personalized emails based on triggers with AI-written content."
      },
      {
        title: "Data Processing Pipeline",
        description: "Transform, filter, and process data from multiple sources automatically."
      }
    ],
    testimonials: [
      {
        name: "Rahul Sharma",
        role: "Startup Founder, Bangalore",
        content: "Built my customer support bot in 30 minutes. Saved ₹50,000/month on support staff.",
        rating: 5
      },
      {
        name: "Priya Patel",
        role: "Marketing Manager, Mumbai",
        content: "Replaced Zapier with this. 100% free and more powerful. Master Rua is a genius!",
        rating: 5
      }
    ],
    faqs: [
      {
        question: "Is AI Agent Builder really free?",
        answer: "Yes! 100% free forever. No hidden fees, no paid tiers, no credit card required. Built by Master Rua to democratize AI automation for India."
      },
      {
        question: "How is this better than n8n?",
        answer: "We have native Groq LLM integration (1000 tokens/sec), 25+ pre-built node types, better UI/UX, and it's completely free. Plus, it's made for Indian users with local support."
      },
      {
        question: "Can I export my workflows?",
        answer: "Absolutely! Export as JSON and self-host anywhere. No vendor lock-in. Your data, your control."
      },
      {
        question: "Do I need coding skills?",
        answer: "No! Visual drag-and-drop interface. If you can use PowerPoint, you can build AI workflows."
      },
      {
        question: "What LLM models are supported?",
        answer: "Groq (Llama 3, Mixtral), Ollama (local models), HuggingFace Inference API. All free tiers available."
      }
    ],
    cta: {
      title: "Start Building AI Workflows Today",
      description: "Join 1000+ creators building with our AI Agent Builder. Completely free, forever.",
      button: "Launch AI Agent Builder →",
      link: "https://app.seekhowithrua.com/builder-tools"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <CoursePageTemplate {...content} />
    </>
  );
}
