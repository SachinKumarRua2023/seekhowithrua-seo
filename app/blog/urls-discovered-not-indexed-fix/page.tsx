import { Metadata } from "next";
import Link from "next/link";

// Inline SVG icons (no lucide-react dependency)
const CalendarIcon = ({ className }: { className?: string }) => <svg className={className} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>;
const ClockIcon = ({ className }: { className?: string }) => <svg className={className} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>;
const ArrowLeftIcon = ({ className }: { className?: string }) => <svg className={className} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>;
const UserIcon = ({ className }: { className?: string }) => <svg className={className} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>;
const AlertTriangleIcon = ({ className }: { className?: string }) => <svg className={className} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><line x1="12" x2="12" y1="9" y2="13"/><line x1="12" x2="12.01" y1="17" y2="17"/></svg>;
const CheckCircleIcon = ({ className }: { className?: string }) => <svg className={className} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>;
const XCircleIcon = ({ className }: { className?: string }) => <svg className={className} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="15" x2="9" y1="9" y2="15"/><line x1="9" x2="15" y1="9" y2="15"/></svg>;
const SearchIcon = ({ className }: { className?: string }) => <svg className={className} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>;

const Button = ({ children, className, ...props }: any) => (
  <button className={`px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 ${className || ''}`} {...props}>{children}</button>
);

const Badge = ({ children, className }: any) => (
  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${className || ''}`}>{children}</span>
);

export const metadata: Metadata = {
  title: "⚠️ 210 URLs Not Indexed by Google? Fix This in 7 Days (SEO Guide 2026)",
  description: "URGENT: Google found your URLs but won't index them? Here's the exact 7-day fix that got us 50K monthly visitors. Step-by-step technical SEO guide for 2026.",
  keywords: "discovered but not indexed, google search console, urls not indexed, seo indexing issues, technical seo, crawl errors, indexing problem, google indexing, seo 2026, website not indexed",
  openGraph: {
    title: "210 URLs Discovered But Not Indexed - Complete SEO Fix Guide 2026",
    description: "Google SearchIcon Console showing discovered but not indexed? Learn the exact reasons and step-by-step solutions to get your pages indexed fast.",
    type: "article",
    publishedTime: "2026-04-03T10:00:00Z",
    authors: ["Master Rua"],
    tags: ["SEO", "Google SearchIcon Console", "Indexing", "Technical SEO"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "210 URLs Discovered But Not Indexed - Complete SEO Fix Guide 2026",
  "description": "Why your URLs are discovered but not indexed by Google? Complete technical SEO guide to fix indexing issues and get 10K+ organic visitors.",
  "image": "https://seekhowithrua.com/blog/seo-indexing-fix.jpg",
  "datePublished": "2026-04-03T10:00:00Z",
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
    "@id": "https://seekhowithrua.com/blog/urls-discovered-not-indexed-fix"
  }
};

export default function SEOIndexingFixBlog() {
  return (
    <article className="min-h-screen bg-gradient-to-b from-[#0a0a0f] via-[#12121a] to-[#0a0a0f]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* Header */}
      <div className="bg-gradient-to-r from-yellow-900/20 to-orange-900/20 border-b border-yellow-500/20">
        <div className="container mx-auto px-4 py-8 md:py-12">
          <Link href="/blog" className="inline-flex items-center text-gray-400 hover:text-white mb-6 transition-colors">
            <ArrowLeftIcon className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>
          
          <div className="flex flex-wrap gap-2 mb-4">
            <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30">🔥 TRENDING SEO TOPIC</Badge>
            <Badge className="bg-green-500/20 text-green-400 border-green-500/30">TECHNICAL SEO</Badge>
            <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30">GOOGLE SEARCH CONSOLE</Badge>
          </div>
          
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Google SearchIcon Console: <span className="text-yellow-400">210 URLs Discovered But Not Indexed</span> — 
            Complete Fix Guide 2026
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 text-gray-400 text-sm">
            <div className="flex items-center gap-2">
              <UserIcon className="w-4 h-4" />
              <span className="text-white">Master Rua</span>
            </div>
            <div className="flex items-center gap-2">
              <CalendarIcon className="w-4 h-4" />
              <span>April 3, 2026</span>
            </div>
            <div className="flex items-center gap-2">
              <ClockIcon className="w-4 h-4" />
              <span>12 min read</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Alert Box */}
            <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-xl p-6">
              <div className="flex items-start gap-3">
                <AlertTriangleIcon className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Are You Seeing This in Google SearchIcon Console?</h3>
                  <p className="text-gray-300">
                    "<strong className="text-yellow-400">Discovered - currently not indexed</strong>" — This status means Google found your URL but hasn't added it to the search index yet. <strong>It's killing your organic traffic.</strong>
                  </p>
                </div>
              </div>
            </div>

            {/* Introduction */}
            <div className="prose prose-invert max-w-none">
              <p className="text-xl text-gray-300 leading-relaxed">
                If Google SearchIcon Console shows <strong className="text-yellow-400">210 URLs (or any number) as "Discovered but not indexed"</strong>, you're losing thousands of potential visitors every day. This is one of the most common SEO problems in 2026 — and most website owners don't know how to fix it.
              </p>
              
              <p className="text-gray-300 leading-relaxed">
                In this comprehensive guide, I'll show you <strong className="text-green-400">exactly why your pages aren't being indexed</strong> and give you a step-by-step action plan to get all your URLs indexed fast. This is the same process I used to get SeekhoWithRua from 0 to <strong>50,000+ monthly organic visitors</strong>.
              </p>
            </div>

            {/* Table of Contents */}
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Table of Contents</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#what-means" className="hover:text-yellow-400 transition-colors">1. What "Discovered But Not Indexed" Actually Means</a></li>
                <li><a href="#reasons" className="hover:text-yellow-400 transition-colors">2. 7 Main Reasons Why URLs Don't Get Indexed</a></li>
                <li><a href="#how-to-fix" className="hover:text-yellow-400 transition-colors">3. Step-by-Step Fix (Action Plan)</a></li>
                <li><a href="#tools" className="hover:text-yellow-400 transition-colors">4. Tools to Check Indexing Issues</a></li>
                <li><a href="#prevention" className="hover:text-yellow-400 transition-colors">5. How to Prevent This in the Future</a></li>
                <li><a href="#case-study" className="hover:text-yellow-400 transition-colors">6. Case Study: How We Fixed 210 URLs</a></li>
                <li><a href="#solution" className="hover:text-yellow-400 transition-colors">7. Solution: SeekhoWithRua SEO-Optimized Website Builder</a></li>
              </ul>
            </div>

            <hr className="my-4 border-gray-800" />

            {/* Section 1 */}
            <section id="what-means">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                What "Discovered But Not Indexed" Actually Means
              </h2>
              <div className="prose prose-invert max-w-none text-gray-300">
                <p>
                  When Google SearchIcon Console shows "Discovered - currently not indexed," it means:
                </p>
                <ol className="list-decimal pl-6 space-y-2">
                  <li><strong className="text-white">Google FOUND your URL</strong> — through sitemap, internal links, or external links</li>
                  <li><strong className="text-white">Google HASN'T crawled it yet</strong> — it's in the crawl queue but not processed</li>
                  <li><strong className="text-white">OR Google crawled but REJECTED it</strong> — quality issues, duplicates, or technical problems</li>
                </ol>
                
                <div className="bg-gray-800/50 border-l-4 border-yellow-500 p-4 my-6 not-prose">
                  <p className="text-white font-semibold mb-2">⚠️ Important Distinction</p>
                  <ul className="text-sm space-y-1">
                    <li>"<strong>Crawled - currently not indexed</strong>" = Google saw the page but chose NOT to index it (quality issue)</li>
                    <li>"<strong>Discovered - currently not indexed</strong>" = Google knows it exists but hasn't crawled it yet (crawl budget issue)</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 2 */}
            <section id="reasons">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                7 Main Reasons Why Your URLs Don't Get Indexed
              </h2>
              
              <div className="space-y-6 not-prose">
                <div className="rounded-lg border border-gray-800 bg-gray-900/30">
                  <div className="p-6">
                    <div className="flex items-start gap-4">
                      <XCircleIcon className="w-6 h-6 text-red-400 flex-shrink-0" />
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-2">1. Low Quality or Thin Content</h3>
                        <p className="text-gray-400 text-sm">
                          Pages with less than 300 words, duplicate content, or auto-generated text. 
                          Google's Helpful Content Update (2026) is very strict about this.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg border border-gray-800 bg-gray-900/30">
                  <div className="p-6">
                    <div className="flex items-start gap-4">
                      <XCircleIcon className="w-6 h-6 text-red-400 flex-shrink-0" />
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-2">2. Duplicate Content Issues</h3>
                        <p className="text-gray-400 text-sm">
                          Multiple URLs serving same content (www vs non-www, HTTP vs HTTPS, 
                          URL parameters creating duplicates). No canonical tags set properly.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg border border-gray-800 bg-gray-900/30">
                  <div className="p-6">
                    <div className="flex items-start gap-4">
                      <XCircleIcon className="w-6 h-6 text-red-400 flex-shrink-0" />
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-2">3. Poor Internal Linking Structure</h3>
                        <p className="text-gray-400 text-sm">
                          Orphan pages with no internal links pointing to them. Google can't find 
                          or prioritize these pages. Internal links = votes of importance.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg border border-gray-800 bg-gray-900/30">
                  <div className="p-6">
                    <div className="flex items-start gap-4">
                      <XCircleIcon className="w-6 h-6 text-red-400 flex-shrink-0" />
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-2">4. Slow Page Speed & Core Web Vitals</h3>
                        <p className="text-gray-400 text-sm">
                          Pages loading slower than 3 seconds, poor LCP (Largest Contentful Paint), 
                          high CLS (Cumulative Layout Shift). Google deprioritizes slow pages.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg border border-gray-800 bg-gray-900/30">
                  <div className="p-6">
                    <div className="flex items-start gap-4">
                      <XCircleIcon className="w-6 h-6 text-red-400 flex-shrink-0" />
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-2">5. Mobile Usability Issues</h3>
                        <p className="text-gray-400 text-sm">
                          Not mobile-friendly, viewport problems, touch elements too close, 
                          text too small. Google uses mobile-first indexing since 2023.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg border border-gray-800 bg-gray-900/30">
                  <div className="p-6">
                    <div className="flex items-start gap-4">
                      <XCircleIcon className="w-6 h-6 text-red-400 flex-shrink-0" />
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-2">6. Robots.txt or Meta Robots Blocking</h3>
                        <p className="text-gray-400 text-sm">
                          Accidentally blocking pages in robots.txt, noindex tags in meta, 
                          or X-Robots-Tag HTTP headers preventing indexing.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg border border-gray-800 bg-gray-900/30">
                  <div className="p-6">
                    <div className="flex items-start gap-4">
                      <XCircleIcon className="w-6 h-6 text-red-400 flex-shrink-0" />
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-2">7. Missing or Incorrect Sitemap</h3>
                        <p className="text-gray-400 text-sm">
                          Sitemap not submitted to GSC, outdated sitemap, or sitemap with errors 
                          (404 URLs, wrong priorities, missing lastmod dates).
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <hr className="my-4 border-gray-800" />

            {/* Section 3 */}
            <section id="how-to-fix">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Step-by-Step Fix: Get Your URLs Indexed Fast
              </h2>
              
              <div className="space-y-8">
                <div className="prose prose-invert max-w-none text-gray-300">
                  <h3 className="text-xl font-semibold text-white">Phase 1: Immediate Actions (Day 1)</h3>
                  
                  <div className="space-y-4 not-prose mt-4">
                    <div className="flex items-start gap-3">
                      <CheckCircleIcon className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-white font-medium">1. Manually Request Indexing in GSC</p>
                        <p className="text-sm text-gray-400">Go to URL Inspection tool → Enter your URL → Click "Request Indexing"</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <CheckCircleIcon className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-white font-medium">2. Check for Manual Actions</p>
                        <p className="text-sm text-gray-400">GSC → Security & Manual Actions → Manual Actions. Fix any penalties first.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <CheckCircleIcon className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-white font-medium">3. Resubmit Sitemap</p>
                        <p className="text-sm text-gray-400">GSC → Sitemaps → Delete old sitemap → Submit updated sitemap.xml</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="prose prose-invert max-w-none text-gray-300">
                  <h3 className="text-xl font-semibold text-white">Phase 2: Technical Fixes (Days 2-3)</h3>
                  
                  <div className="space-y-4 not-prose mt-4">
                    <div className="bg-gray-900/50 rounded-lg p-4 border border-gray-800">
                      <p className="text-white font-medium mb-2">Fix Content Quality</p>
                      <ul className="text-sm text-gray-400 space-y-1 list-disc pl-4">
                        <li>Expand thin pages to 800+ words minimum</li>
                        <li>Add unique meta titles (50-60 chars) and descriptions (150-160 chars)</li>
                        <li>Include target keywords naturally in first 100 words</li>
                        <li>Add internal links to and from the page</li>
                        <li>Include at least 1 image with optimized alt text</li>
                      </ul>
                    </div>
                    
                    <div className="bg-gray-900/50 rounded-lg p-4 border border-gray-800">
                      <p className="text-white font-medium mb-2">Fix Technical Issues</p>
                      <ul className="text-sm text-gray-400 space-y-1 list-disc pl-4">
                        <li>Ensure mobile-friendliness (use Google's Mobile-Friendly Test)</li>
                        <li>Improve page speed to under 2.5s (use PageSpeed Insights)</li>
                        <li>Fix Core Web Vitals: LCP &lt; 2.5s, FID &lt; 100ms, CLS &lt; 0.1</li>
                        <li>Set canonical tags properly</li>
                        <li>Check robots.txt isn't blocking important pages</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="prose prose-invert max-w-none text-gray-300">
                  <h3 className="text-xl font-semibold text-white">Phase 3: Link Building (Days 4-7)</h3>
                  
                  <div className="space-y-4 not-prose mt-4">
                    <div className="flex items-start gap-3">
                      <CheckCircleIcon className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-white font-medium">1. Build Internal Links</p>
                        <p className="text-sm text-gray-400">Add 3-5 internal links pointing TO the non-indexed page from existing indexed pages</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <CheckCircleIcon className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-white font-medium">2. Get External Backlinks</p>
                        <p className="text-sm text-gray-400">Share on social media, submit to relevant directories, guest post on related blogs</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <CheckCircleIcon className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-white font-medium">3. Create XML Sitemap Priority</p>
                        <p className="text-sm text-gray-400">Set high-priority pages to 1.0, update lastmod dates to recent</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <hr className="my-4 border-gray-800" />

            {/* CTA Section */}
            <section id="solution" className="bg-gradient-to-r from-purple-900/30 via-blue-900/30 to-green-900/30 border border-purple-500/20 rounded-2xl p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                🎯 SeekhoWithRua Website Builder: SEO-Optimized by Default
              </h2>
              <p className="text-gray-300 mb-6">
                Tired of fixing SEO issues manually? Our Website Builder automatically handles all the technical SEO for you—so your pages get indexed fast and rank higher.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-900/50 rounded-lg p-4 border border-green-500/30">
                  <CheckCircleIcon className="w-5 h-5 text-green-400 mb-2" />
                  <h4 className="text-green-400 font-semibold mb-1">Auto-Generated Sitemaps</h4>
                  <p className="text-sm text-gray-400">XML sitemaps update automatically with proper priorities</p>
                </div>
                <div className="bg-gray-900/50 rounded-lg p-4 border border-blue-500/30">
                  <CheckCircleIcon className="w-5 h-5 text-blue-400 mb-2" />
                  <h4 className="text-blue-400 font-semibold mb-1">Perfect Core Web Vitals</h4>
                  <p className="text-sm text-gray-400">90+ Lighthouse score out of the box</p>
                </div>
                <div className="bg-gray-900/50 rounded-lg p-4 border border-purple-500/30">
                  <CheckCircleIcon className="w-5 h-5 text-purple-400 mb-2" />
                  <h4 className="text-purple-400 font-semibold mb-1">Schema Markup Built-in</h4>
                  <p className="text-sm text-gray-400">JSON-LD structured data for every page</p>
                </div>
                <div className="bg-gray-900/50 rounded-lg p-4 border border-orange-500/30">
                  <CheckCircleIcon className="w-5 h-5 text-orange-400 mb-2" />
                  <h4 className="text-orange-400 font-semibold mb-1">Mobile-First Design</h4>
                  <p className="text-sm text-gray-400">100% mobile responsive, passes all mobile tests</p>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <Link href="/website-builder">
                  <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-6 text-lg">
                    Build SEO-Optimized Website
                  </Button>
                </Link>
                <Link href="/pricing">
                  <Button variant="outline" className="border-green-500/50 text-green-400 hover:bg-green-500/10 px-8 py-6 text-lg">
                    View Bundle Pack
                  </Button>
                </Link>
              </div>
            </section>

            {/* Conclusion */}
            <section id="conclusion">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Summary: Your 7-Day Action Plan
              </h2>
              <div className="prose prose-invert max-w-none text-gray-300">
                <p>Here's what you need to do RIGHT NOW:</p>
                <ol className="list-decimal pl-6 space-y-2">
                  <li>Check Google SearchIcon Console for manual actions</li>
                  <li>Request indexing for top 10 most important URLs</li>
                  <li>Audit your content quality — expand thin pages</li>
                  <li>Fix technical issues (speed, mobile, Core Web Vitals)</li>
                  <li>Build internal links between your pages</li>
                  <li>Resubmit your sitemap</li>
                  <li>Monitor progress in GSC Coverage report</li>
                </ol>
                
                <div className="bg-green-900/20 border-l-4 border-green-500 p-4 my-6 not-prose">
                  <p className="text-white font-semibold mb-2">✅ Expected Results</p>
                  <p className="text-sm">
                    Following this guide, you should see 60-80% of your "discovered" URLs indexed within 7-14 days. 
                    The remaining 20% may need additional content improvements.
                  </p>
                </div>
              </div>
            </section>

            {/* Author Bio */}
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-yellow-600 to-orange-600 flex items-center justify-center text-2xl">
                  👨‍💻
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white">Master Rua (Sachin Kumar)</h4>
                  <p className="text-gray-400 text-sm mb-2">SEO Expert & Founder at SeekhoWithRua</p>
                  <p className="text-gray-500 text-sm">
                    Helped 50+ websites recover from indexing issues. Built SeekhoWithRua to 50K+ monthly organic visitors. 
                    Teaching developers how to build SEO-optimized web applications.
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Checklist */}
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Quick SEO Checklist</h3>
              <div className="space-y-3">
                {[
                  "✓ Content is 800+ words",
                  "✓ Unique meta title & description",
                  "✓ Mobile-friendly design",
                  "✓ Page speed under 2.5s",
                  "✓ Internal links added",
                  "✓ Sitemap submitted",
                  "✓ No robots.txt blocking",
                  "✓ Canonical tag set",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm">
                    <CheckCircleIcon className="w-4 h-4 text-green-400" />
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Related Articles */}
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Related Articles</h3>
              <div className="space-y-4">
                <Link href="/blog/oracle-layoffs-2026" className="block group">
                  <h4 className="text-gray-300 group-hover:text-yellow-400 transition-colors text-sm font-medium mb-1">
                    Oracle Layoffs 2026: 10,000+ Jobs Cut | Tech Industry Crisis
                  </h4>
                  <p className="text-gray-500 text-xs">April 3, 2026</p>
                </Link>
                <hr className="my-4 border-gray-800" />
                <Link href="/blog/claude-code-leak-2026" className="block group">
                  <h4 className="text-gray-300 group-hover:text-yellow-400 transition-colors text-sm font-medium mb-1">
                    Claude Code Leak 2026: What Happened & How to Protect Your Workflow
                  </h4>
                  <p className="text-gray-500 text-xs">April 3, 2026</p>
                </Link>
              </div>
            </div>

            {/* Tools */}
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Free SEO Tools</h3>
              <div className="space-y-3 text-sm">
                <a href="https://search.google.com/search-console" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-400 hover:text-green-400 transition-colors">
                  <SearchIcon className="w-4 h-4" />
                  Google SearchIcon Console
                </a>
                <a href="https://pagespeed.web.dev" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-400 hover:text-green-400 transition-colors">
                  <SearchIcon className="w-4 h-4" />
                  PageSpeed Insights
                </a>
                <a href="https://search.google.com/test/mobile-friendly" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-400 hover:text-green-400 transition-colors">
                  <SearchIcon className="w-4 h-4" />
                  Mobile-Friendly Test
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
