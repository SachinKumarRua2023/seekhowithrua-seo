import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

// Inline SVG icons
const CalendarIcon = ({ className }: { className?: string }) => <svg className={className} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>;
const ClockIcon = ({ className }: { className?: string }) => <svg className={className} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>;
const ArrowLeftIcon = ({ className }: { className?: string }) => <svg className={className} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>;
const UserIcon = ({ className }: { className?: string }) => <svg className={className} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>;
const PhoneIcon = ({ className }: { className?: string }) => <svg className={className} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>;

const Button = ({ children, className, ...props }: any) => (
  <button className={`px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 ${className || ''}`} {...props}>{children}</button>
);

const Badge = ({ children, className }: any) => (
  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${className || ''}`}>{children}</span>
);

export const metadata: Metadata = {
  title: "Gemma 4 Hackathon Mentor Rua 2026 | Live Project Training by Sachin Kumar | $999",
  description: "Need mentor for Google hackathon Gemma 4? Get live mentorship by Rua (Sachin Kumar) - 4+ years experience. Full stack training backend to frontend, 45 days, $999. WhatsApp: +91 8826776018",
  keywords: "gemma 4 hackathon mentor, hackathon mentorship, by rua, by Sachin rua, seekhowithrua, swr, sikhowithrua, seekowithrua, sikowithrua, live mentor google hackathon, project trainer, college project mentor, tech trainer hackathon, full stack hackathon trainer, master trainer tech, 999 dollar hackathon course",
  openGraph: {
    title: "Gemma 4 Hackathon Mentor Rua 2026 | Live Project Training by Sachin Kumar",
    description: "Get live mentorship by Rua for Google hackathon Gemma 4. Full stack training, 45 days, $999. WhatsApp: +91 8826776018",
    type: "article",
    publishedTime: "2026-04-10T14:00:00Z",
    authors: ["Master Rua"],
    tags: ["Gemma 4", "Hackathon", "Mentorship", "Rua", "Full Stack", "Project Training"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Gemma 4 Hackathon Mentor Rua 2026 | Live Project Training by Sachin Kumar | $999",
  "description": "Need mentor for Google hackathon Gemma 4? Get live mentorship by Rua (Sachin Kumar). Full stack training backend to frontend, 45 days.",
  "image": "https://seekhowithrua.com/blog/gemma-4-hackathon-mentor.jpg",
  "datePublished": "2026-04-10T14:00:00Z",
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
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://seekhowithrua.com/blog/gemma-4-hackathon-mentor-rua-2026"
  }
};

export default function Gemma4HackathonMentorBlog() {
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
            <Badge className="bg-purple-500/20 text-purple-400 border-purple-500/30">HACKATHON</Badge>
            <Badge className="bg-green-500/20 text-green-400 border-green-500/30">GEMMA 4</Badge>
            <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30">LIVE MENTORSHIP</Badge>
            <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30">BY RUA</Badge>
          </div>
          
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Gemma 4 Hackathon <span className="text-purple-400">Mentor Rua</span> 2026 | Live Project Training by Sachin Kumar
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 text-gray-400 text-sm">
            <div className="flex items-center gap-2">
              <UserIcon className="w-4 h-4" />
              <span className="text-white">Master Rua (Sachin Kumar)</span>
            </div>
            <div className="flex items-center gap-2">
              <CalendarIcon className="w-4 h-4" />
              <span>April 10, 2026</span>
            </div>
            <div className="flex items-center gap-2">
              <ClockIcon className="w-4 h-4" />
              <span>15 min read</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Hero Image */}
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-purple-900/30 to-blue-900/30 border border-purple-500/20">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-6xl mb-4">🏆👨‍🏫</div>
                  <p className="text-gray-400 text-lg">Gemma 4 Hackathon Mentorship by Rua</p>
                </div>
              </div>
            </div>

            {/* Introduction */}
            <div className="prose prose-invert max-w-none">
              <p className="text-xl text-gray-300 leading-relaxed">
                <strong className="text-white">Searching for a mentor for Google hackathon Gemma 4?</strong> Looking for live project mentorship? Need guidance from a tech trainer who has actually built products? Your search ends here. Meet <strong className="text-purple-400">Rua (Sachin Kumar)</strong>—India's premier hackathon mentor with 4+ years of industry-level training experience.
              </p>
              
              <p className="text-gray-300 leading-relaxed">
                Whether you found us by searching <em>"by rua"</em>, <em>"by Sachin rua"</em>, <em>"seekhowithrua"</em>, <em>"swr"</em>, <em>"sikhowithrua"</em>, <em>"seekowithrua"</em>, <em>"sikowithrua"</em>, or <em>"master trainer tech"</em>—you're in the right place. This comprehensive guide explains everything about the Gemma 4 Hackathon Ready Program, a 45-day intensive training designed to take you from idea to winning project.
              </p>
            </div>

            {/* Who is Rua */}
            <section id="who-is-rua">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Who is Rua? Meet Your Hackathon Mentor
              </h2>
              <div className="prose prose-invert max-w-none text-gray-300">
                <p>
                  <strong>Rua is not just a name—it's a title earned through mastery.</strong> Sachin Kumar, known professionally as Rua, is a full-stack architect, AI specialist, and educator who has trained 500+ students over 4+ years. He is the founder of SeekhoWithRua.com, a gamified learning platform that's revolutionizing tech education in India.
                </p>

                <h3 className="text-xl font-semibold text-white mt-6 mb-3">Rua's Credentials:</h3>
                <ul className="list-disc pl-6 space-y-3">
                  <li><strong className="text-purple-400">4+ Years Industry Experience:</strong> Built production-grade e-commerce platforms, advanced LMS systems, and AI-powered applications used by thousands.</li>
                  <li><strong className="text-purple-400">500+ Students Mentored:</strong> From beginners to hackathon winners, Rua has guided students at every level to achieve their tech goals.</li>
                  <li><strong className="text-purple-400">Full Stack Expert:</strong> Master of backend (Node.js, Python/Django), frontend (React, Next.js), mobile (React Native), and AI integration (Gemma, GPT, Claude).</li>
                  <li><strong className="text-purple-400">Product Builder:</strong> Created SeekhoWithRua.com, a comprehensive learning platform with gamification, live voice rooms, and AI tutoring.</li>
                </ul>

                <p className="mt-4">
                  When students search for <strong>"by rua"</strong>, <strong>"by Sachin rua"</strong>, or <strong>"master trainer tech"</strong>—they're looking for exactly this level of expertise combined with teaching ability.
                </p>
              </div>
            </section>

            {/* Gemma 4 Program */}
            <section id="gemma-4-program">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Gemma 4 Hackathon Ready Program: Complete Overview
              </h2>
              <div className="prose prose-invert max-w-none text-gray-300">
                <p>
                  The <strong>Gemma 4 Hackathon Ready Program</strong> is a 45-day intensive training designed for students preparing for Google hackathons, college projects, or any technical competition. Priced at just <strong className="text-green-400">$999</strong>, this program offers mentorship that would cost 10x at corporate training centers.
                </p>

                <h3 className="text-xl font-semibold text-white mt-6 mb-3">What Makes This Program Unique:</h3>
                <ul className="list-disc pl-6 space-y-3">
                  <li><strong className="text-purple-400">Live 1-on-1 Mentorship:</strong> Direct access to Rua via WhatsApp (+91 8826776018), live video calls, and code reviews. Not pre-recorded videos—real interaction.</li>
                  <li><strong className="text-purple-400">Idea to Deployment:</strong> Whether you have a project idea or need one, we take you through research, architecture, coding, testing, and deployment.</li>
                  <li><strong className="text-purple-400">Gemma 4 API Mastery:</strong> Learn to integrate Google's Gemma 4 AI model for chatbots, content generation, code assistance, and innovative features.</li>
                  <li><strong className="text-purple-400">Full Stack Coverage:</strong> Backend (Node.js/Python), Frontend (React/Next.js), Mobile (React Native), Database (PostgreSQL), and Cloud Deployment.</li>
                  <li><strong className="text-purple-400">Hackathon Presentation Training:</strong> Learn to pitch, create demo videos, design slides, and handle Q&A like a pro.</li>
                </ul>
              </div>
            </section>

            {/* Why Choose Rua */}
            <section id="why-choose-rua" className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 border border-purple-500/20 rounded-2xl p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                🎯 Why Choose Rua as Your Hackathon Mentor?
              </h2>
              <p className="text-gray-300 mb-6">
                When students search <strong>"need mentor for google hackathon"</strong>, <strong>"live mentor google hackathon"</strong>, or <strong>"project trainer for college"</strong>—they're seeking someone who delivers results. Here's why Rua stands out:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-900/50 rounded-lg p-4">
                  <h4 className="text-purple-400 font-semibold mb-2">🏆 Proven Track Record</h4>
                  <p className="text-sm text-gray-400">50+ projects launched, multiple hackathon wins guided, 500+ students successfully trained.</p>
                </div>
                <div className="bg-gray-900/50 rounded-lg p-4">
                  <h4 className="text-purple-400 font-semibold mb-2">💻 Real Product Experience</h4>
                  <p className="text-sm text-gray-400">Not just theory—Rua has built e-commerce, LMS, and AI platforms used in production.</p>
                </div>
                <div className="bg-gray-900/50 rounded-lg p-4">
                  <h4 className="text-purple-400 font-semibold mb-2">📱 Full Stack Mastery</h4>
                  <p className="text-sm text-gray-400">Backend to frontend to mobile apps—learn everything needed for a complete hackathon project.</p>
                </div>
                <div className="bg-gray-900/50 rounded-lg p-4">
                  <h4 className="text-purple-400 font-semibold mb-2">🤖 AI Integration Expert</h4>
                  <p className="text-sm text-gray-400">Gemma 4, GPT, Claude—master the AI APIs that make hackathon projects stand out.</p>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <Link href="https://lms.seekhowithrua.com/gemma-4-hackathon-ready.html" target="_blank">
                  <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-6 text-lg">
                    View Full Course Details
                  </Button>
                </Link>
                <a href="https://wa.me/918826776018?text=Hi%20Rua%2C%20I%20want%20to%20join%20Gemma%204%20Hackathon%20Program" target="_blank">
                  <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 text-lg flex items-center gap-2">
                    <PhoneIcon className="w-5 h-5" /> WhatsApp Rua
                  </Button>
                </a>
              </div>
            </section>

            {/* 45 Day Curriculum */}
            <section id="curriculum">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                45-Day Curriculum: From Zero to Hackathon Hero
              </h2>
              <div className="prose prose-invert max-w-none text-gray-300">
                <p>
                  The program is structured in 6 weeks with 4 live classes per week. Each session is recorded for lifetime access. Here's the complete roadmap:
                </p>

                <h3 className="text-xl font-semibold text-white mt-6 mb-3">Week 1-2: Foundation & Backend</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Gemma 4 capabilities and use case exploration</li>
                  <li>Project idea generation and validation</li>
                  <li>Node.js/Python Django backend setup</li>
                  <li>Database design with PostgreSQL</li>
                  <li>API development (REST & GraphQL)</li>
                  <li>Authentication and security implementation</li>
                </ul>

                <h3 className="text-xl font-semibold text-white mt-6 mb-3">Week 3-4: Frontend & AI Integration</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>React & Next.js with TypeScript</li>
                  <li>Modern UI/UX with Tailwind CSS</li>
                  <li>Gemma 4 API integration</li>
                  <li>Real-time features with WebSockets</li>
                  <li>State management and performance</li>
                </ul>

                <h3 className="text-xl font-semibold text-white mt-6 mb-3">Week 5-6: Mobile, Polish & Presentation</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>React Native mobile app development</li>
                  <li>Advanced Gemma 4 prompting techniques</li>
                  <li>Testing, debugging, and optimization</li>
                  <li>Cloud deployment (AWS/GCP)</li>
                  <li>Demo video creation and pitch training</li>
                  <li>Mock Q&A sessions</li>
                </ul>
              </div>
            </section>

            {/* Investment & ROI */}
            <section id="investment-roi">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Investment: $999 for a Potential $200,000 Return
              </h2>
              <div className="prose prose-invert max-w-none text-gray-300">
                <p>
                  Let's talk numbers. The Gemma 4 Hackathon Ready Program costs <strong className="text-green-400">$999</strong>—less than the price of a mid-range smartphone. But the potential return? Massive.
                </p>

                <h3 className="text-xl font-semibold text-white mt-6 mb-3">If You Win:</h3>
                <p>
                  Google hackathons and tech competitions offer prize pools up to <strong className="text-green-400">$200,000</strong> in prizes possible! Even smaller wins can bring $10,000-$50,000 in prizes, internships at top tech companies, and global recognition.
                </p>

                <h3 className="text-xl font-semibold text-white mt-6 mb-3">If You Don't Win:</h3>
                <p>
                  You still gain skills worth 10x the investment. Full stack development, AI integration, mobile app development—these are the highest-paying skills in 2026. The learning alone guarantees career returns.
                </p>

                <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-lg p-6 my-6">
                  <p className="text-yellow-400 font-semibold text-lg">💡 Why $999 is Nothing Compared to What You Get</p>
                  <p className="mt-2">
                    Corporate bootcamps charge $5,000-$30,000 for similar training. Online courses give you videos but no mentorship. Rua's program gives you <strong>live mentorship, 1-on-1 guidance, and real project experience</strong>—all for less than $1,000. That's the best investment you'll make in your tech career.
                  </p>
                </div>
              </div>
            </section>

            {/* How to Enroll */}
            <section id="enroll-now">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                How to Enroll: Talk to Rua Directly
              </h2>
              <div className="prose prose-invert max-w-none text-gray-300">
                <p>
                  Ready to build your winning hackathon project? Getting started is simple:
                </p>

                <h3 className="text-xl font-semibold text-white mt-6 mb-3">Step 1: WhatsApp Rua</h3>
                <p>
                  Message <strong className="text-green-400">+91 8826776018</strong> with "Hi Rua, I want to join Gemma 4 Hackathon Program." Rua will respond within hours to discuss your goals.
                </p>

                <h3 className="text-xl font-semibold text-white mt-6 mb-3">Step 2: Schedule a Call (Optional)</h3>
                <p>
                  Want to be 100% sure? Schedule a live video call with Rua. <strong>Students can bring parents on the call</strong> to discuss the program, curriculum, and career outcomes. We want you confident before investing.
                </p>

                <h3 className="text-xl font-semibold text-white mt-6 mb-3">Step 3: Start Your Journey</h3>
                <p>
                  Once enrolled, you'll get immediate access to course materials, be added to the live class schedule, and receive your first 1-on-1 mentorship session with Rua.
                </p>
              </div>
            </section>

            {/* Conclusion */}
            <section id="conclusion">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Conclusion: Your Hackathon Victory Starts with Rua
              </h2>
              <div className="prose prose-invert max-w-none text-gray-300">
                <p>
                  Whether you found this article searching <strong>"gemma 4 hackathon mentor"</strong>, <strong>"by rua"</strong>, <strong>"by Sachin rua"</strong>, <strong>"seekhowithrua"</strong>, <strong>"swr"</strong>, <strong>"tech trainer hackathon"</strong>, or <strong>"live mentor google hackathon"</strong>—you've discovered the right mentor for your journey.
                </p>
                <p>
                  Rua (Sachin Kumar) isn't just another online instructor. He's a <strong>master trainer</strong> with 4+ years of experience, real product-building credentials, and a proven track record of helping students succeed. The Gemma 4 Hackathon Program at $999 is an investment that pays dividends whether you win the hackathon or not.
                </p>
                <p>
                  <strong>The choice is simple:</strong> Continue struggling alone with tutorials and documentation, or get guided mentorship from someone who has been there, built that, and helped 500+ others do the same.
                </p>
                <p>
                  WhatsApp Rua now at <strong className="text-green-400 text-xl">+91 8826776018</strong> and take the first step toward your hackathon victory. Remember: Whether you search by rua, by Sachin rua, seekhowithrua, swr, sikhowithrua, seekowithrua, or sikowithrua—it's all the same destination: success.
                </p>
              </div>
            </section>

            {/* Contact CTA */}
            <section className="bg-gradient-to-r from-green-900/30 to-emerald-900/30 border border-green-500/20 rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">📱 Ready to Start?</h3>
              <p className="text-gray-300 mb-6">
                Message Rua on WhatsApp and begin your hackathon journey today.
              </p>
              <a href="https://wa.me/918826776018?text=Hi%20Rua%2C%20I%20want%20to%20join%20Gemma%204%20Hackathon%20Program" target="_blank" className="inline-flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white px-10 py-5 rounded-full text-xl font-bold transition-all">
                <PhoneIcon className="w-6 h-6" />
                WhatsApp: +91 8826776018
              </a>
            </section>

            {/* Author Bio */}
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center text-2xl">
                  👨‍🏫
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white">Master Rua (Sachin Kumar)</h4>
                  <p className="text-gray-400 text-sm mb-2">Hackathon Mentor & Full Stack Architect at SeekhoWithRua</p>
                  <p className="text-gray-500 text-sm">
                    4+ years of industry experience, 500+ students mentored, 50+ projects launched. 
                    Founder of SeekhoWithRua.com. WhatsApp: +91 8826776018
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Course Card */}
            <div className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 border border-purple-500/20 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-white mb-2">🚀 Gemma 4 Hackathon Program</h3>
              <p className="text-gray-400 text-sm mb-4">
                45 days live mentorship by Rua. Backend to frontend + app dev.
              </p>
              <div className="text-3xl font-bold text-green-400 mb-4">$999</div>
              <Link href="https://lms.seekhowithrua.com/gemma-4-hackathon-ready.html" target="_blank">
                <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white mb-3">
                  View Course Details
                </Button>
              </Link>
              <a href="https://wa.me/918826776018" target="_blank">
                <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                  <PhoneIcon className="w-4 h-4 mr-2" /> WhatsApp Rua
                </Button>
              </a>
            </div>

            {/* Quick Contact */}
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-white mb-4">📞 Contact Rua</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-gray-300">
                  <PhoneIcon className="w-5 h-5 text-green-400" />
                  <span>+91 8826776018</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <span>🌐</span>
                  <span>seekhowithrua.com</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <span>👨‍🏫</span>
                  <span>Sachin Kumar (Rua)</span>
                </div>
              </div>
            </div>

            {/* Related */}
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Related Articles</h3>
              <div className="space-y-4">
                <Link href="/blog/anthropic-claude-mythos-ai-revolution-2026" className="block group">
                  <h4 className="text-gray-300 group-hover:text-purple-400 transition-colors text-sm font-medium mb-1">
                    Anthropic Claude Mythos: AI Revolution
                  </h4>
                  <p className="text-gray-500 text-xs">April 10, 2026</p>
                </Link>
                <Link href="/blog/future-full-stack-development-2026" className="block group">
                  <h4 className="text-gray-300 group-hover:text-purple-400 transition-colors text-sm font-medium mb-1">
                    Future of Full Stack Development 2026
                  </h4>
                  <p className="text-gray-500 text-xs">April 10, 2026</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
