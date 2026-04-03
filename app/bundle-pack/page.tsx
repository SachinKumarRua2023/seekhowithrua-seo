import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Inline SVG icons (no external dependency)
const CheckIcon = ({ className }: { className?: string }) => <svg className={className} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>;
const SparklesIcon = ({ className }: { className?: string }) => <svg className={className} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/><path d="M5 3v4"/><path d="M19 17v4"/><path d="M3 5h4"/><path d="M17 19h4"/></svg>;
const ZapIcon = ({ className }: { className?: string }) => <svg className={className} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>;
const BrainIcon = ({ className }: { className?: string }) => <svg className={className} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24l.93-.34a2.5 2.5 0 0 1 2.38-1.68Z"/><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24l-.93-.34a2.5 2.5 0 0 0-2.38-1.68Z"/></svg>;
const CodeIcon = ({ className }: { className?: string }) => <svg className={className} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>;
const SmartphoneIcon = ({ className }: { className?: string }) => <svg className={className} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/></svg>;
const GamepadIcon = ({ className }: { className?: string }) => <svg className={className} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="6" x2="10" y1="12" y2="12"/><line x1="8" x2="8" y1="10" y2="14"/><line x1="15" x2="15.01" y1="13" y2="13"/><line x1="18" x2="18.01" y1="11" y2="11"/><rect width="20" height="12" x="2" y="6" rx="2"/></svg>;
const DatabaseIcon = ({ className }: { className?: string }) => <svg className={className} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5V19A9 3 0 0 0 21 19V5"/><path d="M3 12A9 3 0 0 0 21 12"/></svg>;
const BotIcon = ({ className }: { className?: string }) => <svg className={className} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/></svg>;
const MessageIcon = ({ className }: { className?: string }) => <svg className={className} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>;
const GiftIcon = ({ className }: { className?: string }) => <svg className={className} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 12 20 22 4 22 4 12"/><rect width="20" height="5" x="2" y="7" rx="2"/><line x1="12" x2="12" y1="22" y2="7"/><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"/><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"/></svg>;
const TagIcon = ({ className }: { className?: string }) => <svg className={className} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z"/><path d="M7 7h.01"/></svg>;
const LockIcon = ({ className }: { className?: string }) => <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>;
const MindIcon = ({ className }: { className?: string }) => <svg className={className} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a8 8 0 0 1 8 8c0 3.866-3.582 7-8 7a8 8 0 0 1-8-8 8 8 0 0 1 8-8z"/><path d="M12 8v4"/><path d="M12 16h.01"/><path d="M9 10l2 2 2-2"/></svg>;

export const metadata: Metadata = {
  title: "Complete Bundle Pack - All Courses ₹4,999 (50% OFF) | SeekhoWithRua",
  description: "Get all 8 courses: Full Stack, AI/ML, Data Science, Mobile App, Game Development, IoT, Prompt Engineering. Use coupon seekhowithruatop5 for ₹4,999 (was ₹8,999). Lifetime access.",
  keywords: "bundle pack, all courses, full stack course, AI course, data science course, mobile app course, game development, prompt engineering, SeekhoWithRua discount",
};

const courses = [
  {
    icon: CodeIcon,
    title: "Full Stack Development",
    desc: "Next.js, Django, PostgreSQL, REST APIs, WebSockets",
    hours: "120+ hours",
    projects: "15 projects",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: BrainIcon,
    title: "AI & Machine Learning",
    desc: "Neural Networks, Deep Learning, TensorFlow, PyTorch, LLMs",
    hours: "100+ hours",
    projects: "12 projects",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: DatabaseIcon,
    title: "Data Science & Analytics",
    desc: "Python, Pandas, NumPy, Matplotlib, Statistical Analysis, Visualization",
    hours: "80+ hours",
    projects: "10 projects",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: SmartphoneIcon,
    title: "Mobile App Development",
    desc: "React Native, Flutter, Android, iOS, App Store Deployment",
    hours: "90+ hours",
    projects: "8 projects",
    color: "from-orange-500 to-red-500"
  },
  {
    icon: GamepadIcon,
    title: "Game Development",
    desc: "Three.js, Unity, WebGL, Physics Engines, Multiplayer Games",
    hours: "85+ hours",
    projects: "6 games",
    color: "from-violet-500 to-purple-500"
  },
  {
    icon: BotIcon,
    title: "AI Agent & Prompt Engineering",
    desc: "LLM Pipelines, RAG Systems, n8n Workflows, Groq Integration, AutoGPT",
    hours: "60+ hours",
    projects: "8 AI agents",
    color: "from-rose-500 to-pink-500"
  },
  {
    icon: ZapIcon,
    title: "IoT & Robotics",
    desc: "ESP32, Raspberry Pi, MQTT, Sensors, Arduino, Automation",
    hours: "70+ hours",
    projects: "10 IoT projects",
    color: "from-yellow-500 to-amber-500"
  },
  {
    icon: MindIcon,
    title: "Mind Training & NLP",
    desc: "Hypnotherapy, Quantum Physics, Law of Attraction, Memory Science, WMSC Techniques",
    hours: "50+ hours",
    projects: "21-day Hackathon",
    color: "from-pink-500 to-rose-500"
  }
];

const dataScienceModules = [
  "Python for Data Science (NumPy, Pandas, Matplotlib)",
  "Statistical Analysis & Probability",
  "Data Cleaning & Preprocessing",
  "Exploratory Data Analysis (EDA)",
  "Data Visualization (Seaborn, Plotly, Tableau)",
  "Machine Learning for Data Science",
  "Deep Learning & Neural Networks",
  "Natural Language Processing (NLP)",
  "Computer Vision & Image Processing",
  "Big Data & Apache Spark",
  "SQL & Database Management",
  "Time Series Analysis & Forecasting",
  "Feature Engineering & Selection",
  "Model Deployment & MLOps",
  "Real-world Projects: 10+ datasets"
];

const promptEngineeringModules = [
  "Prompt Engineering Fundamentals",
  "Zero-Shot & Few-Shot Prompting",
  "Chain-of-Thought (CoT) Prompting",
  "ReAct Pattern (Reasoning + Acting)",
  "RAG (Retrieval-Augmented Generation)",
  "Building LLM Pipelines",
  "n8n Workflow Automation",
  "Groq API Integration",
  "OpenAI GPT-4 & GPT-3.5",
  "Claude & Anthropic APIs",
  "Vector Databases (Pinecone, Chroma)",
  "Embeddings & Semantic Search",
  "AI Agent Architecture",
  "AutoGPT & BabyAGI",
  "Multi-Agent Systems",
  "Production Deployment"
];

export default function BundlePackPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0a0f] via-[#12121a] to-[#0a0a0f]">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-blue-900/20 to-pink-900/20" />
        
        <div className="container mx-auto px-4 py-20 relative">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 text-yellow-400 border-yellow-500/30 mb-6">
              <SparklesIcon />
              LIMITED TIME OFFER
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Complete <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Bundle Pack</span>
            </h1>
            
            <p className="text-xl text-gray-400 mb-8">
              All 8 Premium Courses + AI Prompt Engineering Mastery
            </p>
            
            {/* Price Section */}
            <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8 mb-8">
              <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-4">
                <span className="text-gray-500 line-through text-2xl">₹8,999</span>
                <span className="text-5xl font-bold text-white">₹4,999</span>
                <Badge className="bg-green-500/20 text-green-400 border-green-500/30 text-lg">
                  44% OFF
                </Badge>
              </div>
              
              {/* Coupon Code */}
              <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 border border-purple-500/30 rounded-xl p-4 mb-4">
                <p className="text-gray-400 mb-2">Use Coupon Code:</p>
                <div className="flex items-center justify-center gap-3">
                  <code className="bg-gray-800 px-4 py-2 rounded-lg text-purple-400 font-mono text-lg">
                    seekhowithruatop5
                  </code>
                  <Badge className="bg-green-500/20 text-green-400">
                    <GiftIcon />
                    SAVE ₹4,000
                  </Badge>
                </div>
              </div>
              
              <p className="text-gray-500 text-sm">
                Lifetime Access • Certificate Included • 30-Day Money Back Guarantee
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-6 text-lg">
                Buy Bundle Pack - ₹4,999
              </Button>
              <Button variant="outline" className="border-gray-700 text-gray-300 hover:bg-gray-800 px-8 py-6 text-lg">
                View Course Details
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* What's Included */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-white text-center mb-12">
          What's Included in the Bundle
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course, i) => (
            <Card key={i} className="bg-gray-900/30 border-gray-800 hover:border-gray-700 transition-all group">
              <CardContent className="p-6">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${course.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <course.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{course.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{course.desc}</p>
                <div className="flex items-center gap-4 text-xs text-gray-500">
                  <span>{course.hours}</span>
                  <span>•</span>
                  <span>{course.projects}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Data Science & AI Deep Dive */}
      <div className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-green-900/20 to-emerald-900/20 border border-green-500/20 rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <Badge className="bg-green-500/20 text-green-400 border-green-500/30 mb-4">
                <DatabaseIcon className="w-4 h-4 mr-2" />
                COMPREHENSIVE COURSE
              </Badge>
              <h2 className="text-3xl font-bold text-white mb-4">
                Data Science & AI <span className="text-green-400">Deep Dive</span>
              </h2>
              <p className="text-gray-400 mb-6">
                Master the complete data science pipeline from data collection to deployment. 
                Learn industry-standard tools and techniques used by top tech companies.
              </p>
              
              <div className="space-y-3">
                {dataScienceModules.map((module, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckIcon className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300 text-sm">{module}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="bg-gray-900/50 rounded-xl p-6">
                <h3 className="text-white font-semibold mb-4">Course Stats</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-400">80+</div>
                    <div className="text-gray-500 text-sm">Hours Content</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-400">15+</div>
                    <div className="text-gray-500 text-sm">Modules</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-400">10+</div>
                    <div className="text-gray-500 text-sm">Real Projects</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-400">50+</div>
                    <div className="text-gray-500 text-sm">Datasets</div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-900/50 rounded-xl p-6">
                <h3 className="text-white font-semibold mb-4">Tools You'll Master</h3>
                <div className="flex flex-wrap gap-2">
                  {["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Scikit-learn", "TensorFlow", "PyTorch", "Tableau", "SQL", "Jupyter", "Anaconda"].map((tool) => (
                    <Badge key={tool} variant="outline" className="border-green-500/30 text-green-400">
                      {tool}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* AI Prompt Engineering */}
      <div className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-rose-900/20 to-pink-900/20 border border-rose-500/20 rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="order-2 lg:order-1 space-y-4">
              <div className="bg-gray-900/50 rounded-xl p-6">
                <h3 className="text-white font-semibold mb-4">What You'll Build</h3>
                <div className="space-y-3">
                  {[
                    "AI Research Assistant with RAG",
                    "Automated Content Generator",
                    "Customer Support Chatbot",
                    "Code Review AI Agent",
                    "Multi-Agent Workflow System",
                    "Document Analysis Pipeline",
                    "Voice-Activated AI Assistant"
                  ].map((project, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-rose-500/20 flex items-center justify-center">
                        <BotIcon className="w-4 h-4 text-rose-400" />
                      </div>
                      <span className="text-gray-300 text-sm">{project}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-gray-900/50 rounded-xl p-6">
                <h3 className="text-white font-semibold mb-4">APIs & Integrations</h3>
                <div className="flex flex-wrap gap-2">
                  {["OpenAI GPT-4", "Claude API", "Groq", "n8n", "Pinecone", "ChromaDB", "LangChain", "Hugging Face"].map((api) => (
                    <Badge key={api} variant="outline" className="border-rose-500/30 text-rose-400">
                      {api}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <Badge className="bg-rose-500/20 text-rose-400 border-rose-500/30 mb-4">
                <BotIcon className="w-4 h-4 mr-2" />
                MOST POPULAR
              </Badge>
              <h2 className="text-3xl font-bold text-white mb-4">
                AI Prompt Engineering <span className="text-rose-400">Mastery</span>
              </h2>
              <p className="text-gray-400 mb-6">
                Learn to build powerful AI systems with prompt engineering. Master LLM pipelines, 
                RAG architectures, and autonomous AI agents. The most in-demand skill of 2026.
              </p>
              
              <div className="space-y-3">
                {promptEngineeringModules.map((module, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckIcon className="w-5 h-5 text-rose-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300 text-sm">{module}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bundle Benefits */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-white text-center mb-12">
          Why Choose the Bundle?
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-900/30 border border-gray-800 rounded-xl p-6 text-center">
            <div className="text-4xl font-bold text-purple-400 mb-2">₹50,000+</div>
            <p className="text-gray-400">Value of individual courses</p>
          </div>
          <div className="bg-gray-900/30 border border-gray-800 rounded-xl p-6 text-center">
            <div className="text-4xl font-bold text-green-400 mb-2">600+</div>
            <p className="text-gray-400">Hours of premium content</p>
          </div>
          <div className="bg-gray-900/30 border border-gray-800 rounded-xl p-6 text-center">
            <div className="text-4xl font-bold text-blue-400 mb-2">60+</div>
            <p className="text-gray-400">Real-world projects</p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-purple-900/30 via-pink-900/30 to-rose-900/30 border border-purple-500/20 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Master Everything?
          </h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Get lifetime access to all courses, future updates, community access, 
            and 1-on-1 mentorship sessions.
          </p>
          
          <div className="bg-gray-900/50 rounded-xl p-6 mb-8 max-w-md mx-auto">
            <div className="flex items-center justify-center gap-4 mb-4">
              <span className="text-gray-500 line-through text-xl">₹8,999</span>
              <span className="text-4xl font-bold text-white">₹4,999</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-purple-400 mb-2">
              <TagIcon className="w-4 h-4" />
              <code className="bg-purple-500/20 px-2 py-1 rounded">seekhowithruatop5</code>
            </div>
            <p className="text-gray-500 text-sm">Limited time offer</p>
          </div>
          
          <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-12 py-6 text-lg">
            Get Bundle Pack Now
          </Button>
          
          <p className="text-gray-500 text-sm mt-4">
            30-Day Money Back Guarantee • Instant Access • Lifetime Updates
          </p>
        </div>
      </div>
    </div>
  );
}
