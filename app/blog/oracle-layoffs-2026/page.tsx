import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock, ArrowLeft, User, Tag, Share2, TrendingUp, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Oracle Layoffs 2026: 10,000+ Jobs Cut | Tech Industry Crisis & Solution | SeekhoWithRua",
  description: "Oracle just laid off 10,000+ employees. Discover why tech giants are cutting jobs, which skills are still in demand, and how SeekhoWithRua's Bundle Pack helps you stay employable in 2026.",
  keywords: "Oracle layoffs 2026, tech layoffs, IT jobs India, tech industry crisis, software engineer jobs, upskilling 2026, AI replacing jobs, tech unemployment, SeekhoWithRua bundle",
  openGraph: {
    title: "Oracle Layoffs 2026: 10,000+ Jobs Cut | Tech Industry Crisis & Solution",
    description: "Oracle laid off 10,000+ employees. Learn why tech giants are cutting jobs and how to protect your career with future-proof skills.",
    type: "article",
    publishedTime: "2026-04-03T09:00:00Z",
    authors: ["Master Rua"],
    tags: ["Oracle", "Layoffs", "Tech Jobs", "Career", "Upskilling"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Oracle Layoffs 2026: 10,000+ Jobs Cut | Tech Industry Crisis & Solution",
  "description": "Oracle just laid off 10,000+ employees. Discover why tech giants are cutting jobs, which skills are still in demand, and how SeekhoWithRua's Bundle Pack helps you stay employable.",
  "image": "https://seekhowithrua.com/blog/oracle-layoffs-2026.jpg",
  "datePublished": "2026-04-03T09:00:00Z",
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
    "@id": "https://seekhowithrua.com/blog/oracle-layoffs-2026"
  }
};

export default function OracleLayoffsBlog() {
  return (
    <article className="min-h-screen bg-gradient-to-b from-[#0a0a0f] via-[#12121a] to-[#0a0a0f]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* Alert Banner */}
      <div className="bg-gradient-to-r from-red-600/20 via-orange-600/20 to-red-600/20 border-b border-red-500/30">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-center gap-2 text-red-400">
            <AlertTriangle className="w-5 h-5" />
            <span className="font-semibold">BREAKING: Major Tech Layoffs Announced</span>
          </div>
        </div>
      </div>

      {/* Header */}
      <div className="bg-gradient-to-r from-red-900/20 to-orange-900/20 border-b border-red-500/20">
        <div className="container mx-auto px-4 py-8 md:py-12">
          <Link href="/blog" className="inline-flex items-center text-gray-400 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>
          
          <div className="flex flex-wrap gap-2 mb-4">
            <Badge className="bg-red-500/20 text-red-400 border-red-500/30">BREAKING NEWS</Badge>
            <Badge className="bg-orange-500/20 text-orange-400 border-orange-500/30">CAREER ALERT</Badge>
            <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30">TECH INDUSTRY</Badge>
          </div>
          
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Oracle Layoffs 2026: <span className="text-red-400">10,000+ Jobs Cut</span> | 
            Tech Industry Crisis & How to Stay Employable
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 text-gray-400 text-sm">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span className="text-white">Master Rua</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>April 3, 2026</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>10 min read</span>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4" />
              <span className="text-red-400">Trending #1</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Hero Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-4 text-center">
                <div className="text-3xl font-bold text-red-400">10K+</div>
                <div className="text-sm text-gray-400">Jobs Cut</div>
              </div>
              <div className="bg-orange-900/20 border border-orange-500/30 rounded-xl p-4 text-center">
                <div className="text-3xl font-bold text-orange-400">15%</div>
                <div className="text-sm text-gray-400">Workforce</div>
              </div>
              <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-xl p-4 text-center">
                <div className="text-3xl font-bold text-yellow-400">50+</div>
                <div className="text-sm text-gray-400">Countries</div>
              </div>
              <div className="bg-gray-800 border border-gray-700 rounded-xl p-4 text-center">
                <div className="text-3xl font-bold text-gray-400">Cloud</div>
                <div className="text-sm text-gray-500">Division Hit</div>
              </div>
            </div>

            {/* Introduction */}
            <div className="prose prose-invert max-w-none">
              <p className="text-xl text-gray-300 leading-relaxed">
                <strong className="text-white">BREAKING:</strong> Oracle has announced its largest layoff in history—<strong className="text-red-400">eliminating over 10,000 positions globally</strong>. This follows similar cuts at Google, Microsoft, Amazon, and Meta. The tech industry is facing its biggest employment crisis since 2008, and Indian IT professionals are among the hardest hit.
              </p>
              
              <p className="text-gray-300 leading-relaxed">
                But here's what Oracle won't tell you: <strong className="text-green-400">these layoffs aren't just about cost-cutting</strong>. They're about replacing traditional software engineers with AI-powered developers. In this article, we reveal the truth behind the layoffs, which skills are still in demand, and how you can protect your career with SeekhoWithRua's future-proof learning bundle.
              </p>
            </div>

            {/* Table of Contents */}
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Table of Contents</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#what-happened" className="hover:text-orange-400 transition-colors">1. What Exactly Happened at Oracle?</a></li>
                <li><a href="#why-layoffs" className="hover:text-orange-400 transition-colors">2. Why Are Tech Giants Really Cutting Jobs?</a></li>
                <li><a href="#impact-india" className="hover:text-orange-400 transition-colors">3. Impact on Indian IT Professionals</a></li>
                <li><a href="#skills-demand" className="hover:text-orange-400 transition-colors">4. Which Skills Are Still in High Demand?</a></li>
                <li><a href="#ai-replacement" className="hover:text-orange-400 transition-colors">5. Is AI Really Replacing Software Engineers?</a></li>
                <li><a href="#solution" className="hover:text-orange-400 transition-colors">6. Solution: How to Stay Employable in 2026</a></li>
                <li><a href="#bundle" className="hover:text-orange-400 transition-colors">7. SeekhoWithRua Bundle Pack: Your Career Insurance</a></li>
              </ul>
            </div>

            <Separator className="bg-gray-800" />

            {/* Section 1 */}
            <section id="what-happened">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                What Exactly Happened at Oracle?
              </h2>
              <div className="prose prose-invert max-w-none text-gray-300">
                <p>
                  On April 1, 2026, Oracle CEO Safra Catz announced a massive restructuring plan that includes:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>10,000+ positions eliminated</strong> across cloud infrastructure, applications, and hardware divisions</li>
                  <li><strong>Cloud unit hit hardest:</strong> 25% of OCI (Oracle Cloud Infrastructure) engineers laid off</li>
                  <li><strong>India impact:</strong> 3,000+ engineers from Bangalore and Hyderabad offices</li>
                  <li><strong>Severance package:</strong> 3-6 months based on tenure (below industry standard)</li>
                  <li><strong>AI investments:</strong> $5B redirected to "AI-powered automation initiatives"</li>
                </ul>
                
                <div className="bg-red-900/20 border-l-4 border-red-500 p-4 my-6 not-prose">
                  <p className="text-white font-semibold mb-2">💬 Oracle's Official Statement</p>
                  <p className="text-sm italic">
                    "We're making difficult but necessary decisions to position Oracle for the AI era. 
                    This restructuring will allow us to invest more aggressively in autonomous cloud services."
                  </p>
                  <p className="text-xs text-gray-500 mt-2">— Safra Catz, Oracle CEO</p>
                </div>
              </div>
            </section>

            {/* Section 2 */}
            <section id="why-layoffs">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Why Are Tech Giants Really Cutting Jobs? (The Truth)
              </h2>
              <div className="prose prose-invert max-w-none text-gray-300">
                <p>Oracle isn't alone. Here's the real layoff count for 2026:</p>
                
                <div className="not-prose my-6 overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-gray-900">
                        <th className="border border-gray-800 px-4 py-3 text-left text-white">Company</th>
                        <th className="border border-gray-800 px-4 py-3 text-center text-white">Layoffs</th>
                        <th className="border border-gray-800 px-4 py-3 text-center text-white">% of Workforce</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-800 px-4 py-3">Oracle</td>
                        <td className="border border-gray-800 px-4 py-3 text-center text-red-400 font-semibold">10,000+</td>
                        <td className="border border-gray-800 px-4 py-3 text-center">15%</td>
                      </tr>
                      <tr className="bg-gray-900/50">
                        <td className="border border-gray-800 px-4 py-3">Google</td>
                        <td className="border border-gray-800 px-4 py-3 text-center text-red-400 font-semibold">8,000</td>
                        <td className="border border-gray-800 px-4 py-3 text-center">6%</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-800 px-4 py-3">Microsoft</td>
                        <td className="border border-gray-800 px-4 py-3 text-center text-red-400 font-semibold">7,500</td>
                        <td className="border border-gray-800 px-4 py-3 text-center">5%</td>
                      </tr>
                      <tr className="bg-gray-900/50">
                        <td className="border border-gray-800 px-4 py-3">Amazon</td>
                        <td className="border border-gray-800 px-4 py-3 text-center text-red-400 font-semibold">12,000</td>
                        <td className="border border-gray-800 px-4 py-3 text-center">4%</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-800 px-4 py-3">Meta</td>
                        <td className="border border-gray-800 px-4 py-3 text-center text-red-400 font-semibold">5,000</td>
                        <td className="border border-gray-800 px-4 py-3 text-center">6%</td>
                      </tr>
                      <tr className="bg-gray-900/50">
                        <td className="border border-gray-800 px-4 py-3 font-semibold">TOTAL 2026</td>
                        <td className="border border-gray-800 px-4 py-3 text-center text-red-500 font-bold text-lg">42,500+</td>
                        <td className="border border-gray-800 px-4 py-3 text-center">—</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3 className="text-xl font-semibold text-white mt-6 mb-3">The 3 Real Reasons for Layoffs:</h3>
                
                <ol className="list-decimal pl-6 space-y-4">
                  <li>
                    <strong className="text-white">AI Automation:</strong> Companies are replacing 3-5 engineers with 1 "AI-augmented" developer. 
                    GitHub Copilot, Claude Code, and Cursor are making junior developers obsolete.
                  </li>
                  <li>
                    <strong className="text-white">Cloud Over-Hiring:</strong> Post-pandemic hiring was excessive. Now companies are "right-sizing" 
                    after overestimating cloud growth.
                  </li>
                  <li>
                    <strong className="text-white">Margin Pressure:</strong> With interest rates high, tech companies need to show profitability. 
                    Cutting headcount is the fastest way to improve margins.
                  </li>
                </ol>
              </div>
            </section>

            {/* Section 3 */}
            <section id="impact-india">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Impact on Indian IT Professionals 🇮🇳
              </h2>
              <div className="prose prose-invert max-w-none text-gray-300">
                <p>Indian IT workers are disproportionately affected:</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 not-prose my-6">
                  <Card className="bg-gray-900/50 border-gray-800">
                    <CardContent className="p-4">
                      <h4 className="text-red-400 font-semibold mb-2">📉 Immediate Impact</h4>
                      <ul className="text-sm space-y-1">
                        <li>3,000+ Oracle India employees laid off</li>
                        <li>H1B visa holders face 60-day deadline</li>
                        <li>Freshers: 0-2 years exp hit hardest</li>
                        <li>Coding bootcamp graduates struggling</li>
                      </ul>
                    </CardContent>
                  </Card>
                  <Card className="bg-gray-900/50 border-gray-800">
                    <CardContent className="p-4">
                      <h4 className="text-orange-400 font-semibold mb-2">📊 Market Changes</h4>
                      <ul className="text-sm space-y-1">
                        <li>70% reduction in fresher hiring</li>
                        <li>Salary stagnation across levels</li>
                        <li>Startups freezing hiring</li>
                        <li>Remote jobs disappearing</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                <div className="bg-yellow-900/20 border-l-4 border-yellow-500 p-4 my-6 not-prose">
                  <p className="text-white font-semibold mb-2">⚠️ Warning for Freshers</p>
                  <p className="text-sm">
                    If you're a 2024/2025 graduate with just a CS degree and no specialized skills, 
                    you're in the <strong className="text-yellow-400">highest risk category</strong>. 
                    Companies are no longer hiring "vanilla" software engineers.
                  </p>
                </div>
              </div>
            </section>

            <Separator className="bg-gray-800" />

            {/* CTA Section */}
            <section id="bundle" className="bg-gradient-to-r from-purple-900/30 via-blue-900/30 to-green-900/30 border border-purple-500/20 rounded-2xl p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                🎯 SeekhoWithRua Bundle Pack: Your Career Insurance
              </h2>
              <p className="text-gray-300 mb-6">
                While others are being laid off, our students are getting <strong className="text-green-400">promoted and hired</strong>. 
                Why? Because we teach the skills that matter in 2026—not outdated college curriculum.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-gray-900/50 rounded-lg p-4 border border-green-500/30">
                  <div className="text-3xl mb-2">🤖</div>
                  <h4 className="text-green-400 font-semibold mb-2">AI Agent Development</h4>
                  <p className="text-sm text-gray-400">Build autonomous AI workflows. The #1 in-demand skill of 2026.</p>
                </div>
                <div className="bg-gray-900/50 rounded-lg p-4 border border-blue-500/30">
                  <div className="text-3xl mb-2">🎮</div>
                  <h4 className="text-blue-400 font-semibold mb-2">3D Game Development</h4>
                  <p className="text-sm text-gray-400">Three.js, WebGL, and multiplayer gaming. Hot hiring area.</p>
                </div>
                <div className="bg-gray-900/50 rounded-lg p-4 border border-purple-500/30">
                  <div className="text-3xl mb-2">🛠️</div>
                  <h4 className="text-purple-400 font-semibold mb-2">Full-Stack + DevOps</h4>
                  <p className="text-sm text-gray-400">Next.js, Django, AWS, Docker. Complete modern stack.</p>
                </div>
              </div>

              <div className="bg-gray-900/50 rounded-lg p-4 mb-6">
                <h4 className="text-white font-semibold mb-3">📦 What's Included in the Bundle:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-gray-400">
                  <div className="flex items-center gap-2">
                    <span className="text-green-400">✓</span> AI Agent Builder Course ($299 value)
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-400">✓</span> 3D Game Development ($199 value)
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-400">✓</span> Full-Stack Masterclass ($249 value)
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-400">✓</span> Replit-Style Code Editor ($149 value)
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-400">✓</span> 50+ Project Templates ($99 value)
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-400">✓</span> Lifetime Access + Updates
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-800">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-gray-500 line-through text-lg">$995</span>
                      <span className="text-3xl font-bold text-white ml-2">$299</span>
                      <span className="text-green-400 ml-2">(70% OFF)</span>
                    </div>
                    <Badge className="bg-red-500/20 text-red-400 border-red-500/30">⚡ Limited Time</Badge>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <Link href="/pricing">
                  <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-6 text-lg">
                    Get Bundle Pack - $299
                  </Button>
                </Link>
                <Link href="/success-stories">
                  <Button variant="outline" className="border-green-500/50 text-green-400 hover:bg-green-500/10 px-8 py-6 text-lg">
                    View Success Stories
                  </Button>
                </Link>
              </div>

              <p className="text-sm text-gray-500 mt-4">
                ✓ 30-Day Money Back Guarantee ✓ Certificate of Completion ✓ Job Placement Support
              </p>
            </section>

            {/* Conclusion */}
            <section id="conclusion">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Conclusion: Adapt or Become Obsolete
              </h2>
              <div className="prose prose-invert max-w-none text-gray-300">
                <p>
                  The Oracle layoffs aren't just bad news—they're a <strong className="text-white">wake-up call</strong>. 
                  The tech industry is evolving faster than ever, and traditional software engineering skills are being commoditized by AI.
                </p>
                <p>
                  But here's the opportunity: <strong className="text-green-400">while 42,000+ engineers are being laid off, 
                  companies are desperately hiring for AI, 3D gaming, and full-stack development roles.</strong>
                </p>
                <p>
                  The difference between those who get laid off and those who get promoted is simple: 
                  <strong className="text-white">future-proof skills</strong>.
                </p>
                
                <div className="bg-gray-800/50 border-l-4 border-green-500 p-4 my-6 not-prose">
                  <p className="text-white font-semibold mb-2">🎯 Your Action Plan:</p>
                  <ol className="text-sm space-y-2">
                    <li>1. <strong>Assess your current skills</strong>—are they "AI-resistant"?</li>
                    <li>2. <strong>Learn AI Agent Development</strong>—the #1 skill of 2026</li>
                    <li>3. <strong>Build a portfolio</strong> of modern projects (3D, AI, full-stack)</li>
                    <li>4. <strong>Join SeekhoWithRua</strong>—get the complete bundle for $299</li>
                  </ol>
                </div>
              </div>
            </section>

            {/* Author Bio */}
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center text-2xl">
                  👨‍💻
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white">Master Rua (Sachin Kumar)</h4>
                  <p className="text-gray-400 text-sm mb-2">Founder & Lead Developer at SeekhoWithRua</p>
                  <p className="text-gray-500 text-sm">
                    Full-stack developer with 5+ years experience. Survived 3 tech recessions by continuously upskilling. 
                    Teaching 50,000+ students how to build the future.
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Related Articles */}
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Related Articles</h3>
              <div className="space-y-4">
                <Link href="/blog/claude-code-leak-2026" className="block group">
                  <h4 className="text-gray-300 group-hover:text-purple-400 transition-colors text-sm font-medium mb-1">
                    Claude Code Leak 2026: What Happened & How to Protect Your AI Workflow
                  </h4>
                  <p className="text-gray-500 text-xs">April 3, 2026 • 8 min read</p>
                </Link>
                <Separator className="bg-gray-800" />
                <Link href="/blog/ai-replacing-developers" className="block group">
                  <h4 className="text-gray-300 group-hover:text-purple-400 transition-colors text-sm font-medium mb-1">
                    Is AI Really Replacing Software Engineers? Data Analysis 2026
                  </h4>
                  <p className="text-gray-500 text-xs">March 30, 2026 • 12 min read</p>
                </Link>
                <Separator className="bg-gray-800" />
                <Link href="/blog/highest-paying-tech-skills-2026" className="block group">
                  <h4 className="text-gray-300 group-hover:text-purple-400 transition-colors text-sm font-medium mb-1">
                    Top 10 Highest-Paying Tech Skills in 2026 (India Focus)
                  </h4>
                  <p className="text-gray-500 text-xs">March 25, 2026 • 10 min read</p>
                </Link>
              </div>
            </div>

            {/* Job Alert CTA */}
            <div className="bg-gradient-to-br from-red-900/30 to-orange-900/30 border border-red-500/20 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-white mb-2">🚨 Job Alert</h3>
              <p className="text-gray-400 text-sm mb-4">
                Get notified when we post new tech jobs and layoff warnings.
              </p>
              <div className="space-y-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-red-500"
                />
                <Button className="w-full bg-red-600 hover:bg-red-700 text-white">
                  Subscribe to Job Alerts
                </Button>
              </div>
            </div>

            {/* Tags */}
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {["Oracle", "Layoffs", "Tech Jobs", "IT Industry", "Career Advice", "AI Jobs", "Upskilling", "Indian IT", "Software Engineer", "Bundle Pack"].map((tag) => (
                  <Badge key={tag} variant="outline" className="border-gray-700 text-gray-400 hover:border-orange-500 hover:text-orange-400 cursor-pointer transition-colors">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
