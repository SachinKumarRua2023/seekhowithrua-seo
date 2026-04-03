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
  title: "Supabase Connection Error: 'Tenant or User Not Found' - AWS AP-Southeast-2 Fix | SeekhoWithRua",
  description: "Fix Supabase 'FATAL: Tenant or user not found' error on AWS ap-southeast-2. Server connection failed on port 6543? Here's the complete troubleshooting guide for 2025.",
  keywords: "supabase connection error, tenant or user not found, aws ap-southeast-2, supabase fatal error, connection to server failed, supabase 6543 port error, supabase troubleshooting, aws server error",
  authors: [{ name: "Sachin Kumar - Master Rua" }],
  openGraph: {
    title: "Supabase Connection Error: 'Tenant or User Not Found' - Complete Fix Guide",
    description: "Fix the dreaded Supabase connection error on AWS. Server connection failed? Here's your troubleshooting roadmap.",
    type: "article",
    publishedTime: "2025-04-03",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Supabase Connection Error: 'Tenant or User Not Found' - AWS AP-Southeast-2 Complete Fix",
  "description": "Fix Supabase 'FATAL: Tenant or user not found' error. Complete troubleshooting guide for AWS connection failures.",
  "datePublished": "2025-04-03",
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

export default function SupabaseErrorBlog() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0a0f] via-[#12121a] to-[#0a0a0f]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-600/20 to-red-600/20 border-b border-orange-500/20">
        <div className="container mx-auto px-4 py-8 md:py-12">
          <Link href="/blog" className="inline-flex items-center text-gray-400 hover:text-white mb-6 transition-colors">
            <ArrowLeftIcon className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>
          
          <div className="flex flex-wrap gap-2 mb-4">
            <Badge className="bg-orange-500/20 text-orange-400 border-orange-500/30">TROUBLESHOOTING</Badge>
            <Badge className="bg-red-500/20 text-red-400 border-red-500/30">SUPABASE</Badge>
            <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30">AWS</Badge>
          </div>
          
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Supabase Connection Error: <span className="text-orange-400">&quot;Tenant or User Not Found&quot;</span> - AWS Fix
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 text-gray-400 text-sm">
            <div className="flex items-center gap-2">
              <UserIcon className="w-4 h-4" />
              <span className="text-white">Master Rua</span>
            </div>
            <div className="flex items-center gap-2">
              <CalendarIcon className="w-4 h-4" />
              <span>April 3, 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <ClockIcon className="w-4 h-4" />
              <span>8 min read</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          
          {/* Error Message Box */}
          <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-6 mb-8">
            <h3 className="text-red-400 font-semibold mb-2">🔴 Error Message</h3>
            <code className="text-sm text-red-300 block bg-black/30 p-3 rounded">
              Server error: connection to server at &quot;aws-0-ap-southeast-2.pooler.supabase.com&quot; (13.237.241.81), port 6543 failed: FATAL: Tenant or user not found
            </code>
          </div>

          {/* Main Content */}
          <div className="prose prose-invert prose-lg max-w-none text-gray-300 space-y-6">
            
            <p className="text-xl leading-relaxed">
              You&apos;re trying to log in to your app. Everything was working fine yesterday. But suddenly, this red error message appears. Sound familiar? This is one of the most frustrating errors developers face when working with Supabase in 2025.
            </p>

            <h2 className="text-2xl font-bold text-white mt-8">What Does &quot;Tenant or User Not Found&quot; Actually Mean?</h2>
            
            <p>
              This error is Supabase&apos;s way of saying: <strong className="text-white">&quot;I can&apos;t find your project in my database.&quot;</strong> It&apos;s a connection authentication failure that typically happens at the connection pooler level.
            </p>

            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 not-prose">
              <h4 className="text-white font-semibold mb-3">Error Components Explained:</h4>
              <ul className="space-y-2 text-sm">
                <li><span className="text-orange-400">aws-0-ap-southeast-2.pooler.supabase.com</span> - The AWS region (Sydney) where your database connection is being routed</li>
                <li><span className="text-orange-400">Port 6543</span> - Supabase&apos;s connection pooler port (not the default 5432)</li>
                <li><span className="text-orange-400">FATAL: Tenant or user not found</span> - The pooler can&apos;t authenticate your project ID</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-white mt-8">Common Causes of This Supabase Connection Error</h2>

            <h3 className="text-xl font-semibold text-white mt-6">1. Project Was Paused or Deleted</h3>
            <p>
              Supabase pauses free-tier projects after 7 days of inactivity. If your project was paused, the connection pooler loses track of your &quot;tenant&quot; (project).
            </p>

            <h3 className="text-xl font-semibold text-white mt-6">2. Region-Specific AWS Outages</h3>
            <p>
              The AP-Southeast-2 region (Sydney) has seen increased instability due to infrastructure strain. AWS server errors in this region can cause Supabase connection failures.
            </p>

            <h3 className="text-xl font-semibold text-white mt-6">3. Connection Pooler Misconfiguration</h3>
            <p>
              Your connection string might be pointing to the wrong pooler or using an outdated project reference.
            </p>

            <h2 className="text-2xl font-bold text-white mt-8">How to Fix the &quot;Tenant or User Not Found&quot; Error</h2>

            <h3 className="text-xl font-semibold text-white mt-6">Solution 1: Check Your Supabase Project Status</h3>
            <ol className="list-decimal pl-6 space-y-2">
              <li><strong>Log into Supabase Dashboard</strong>: https://app.supabase.com</li>
              <li><strong>Navigate to your project</strong></li>
              <li><strong>Check if it&apos;s paused</strong>: Look for a &quot;Resume Project&quot; button</li>
              <li><strong>Resume if needed</strong>: Click to restart - this usually takes 2-3 minutes</li>
            </ol>

            <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-lg p-4 not-prose">
              <p className="text-yellow-400 font-semibold mb-1">⚠️ Important</p>
              <p className="text-sm">Resuming a project gives you a <strong>new database password</strong>. Update your app&apos;s environment variables!</p>
            </div>

            <h3 className="text-xl font-semibold text-white mt-6">Solution 2: Verify Your Connection String</h3>
            
            <p>Your connection string should look like this:</p>
            
            <pre className="bg-black/50 p-4 rounded-lg overflow-x-auto">
              <code>postgresql://postgres:[password]@db.[project-ref].supabase.co:5432/postgres</code>
            </pre>

            <p>Or for the connection pooler (port 6543):</p>
            
            <pre className="bg-black/50 p-4 rounded-lg overflow-x-auto">
              <code>postgresql://postgres:[password]@aws-0-[region].pooler.supabase.com:6543/postgres</code>
            </pre>

            <h3 className="text-xl font-semibold text-white mt-6">Solution 3: Switch to Direct Connection</h3>
            <p>If the pooler is giving issues, connect directly using port 5432 instead of 6543.</p>

            <h2 className="text-2xl font-bold text-white mt-8">Quick Diagnostic Checklist</h2>
            
            <div className="overflow-x-auto not-prose">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-700">
                    <th className="text-left py-2 px-3">Check</th>
                    <th className="text-left py-2 px-3">Action</th>
                    <th className="text-left py-2 px-3">Expected</th>
                  </tr>
                </thead>
                <tbody className="text-gray-400">
                  <tr className="border-b border-gray-800">
                    <td className="py-2 px-3">Project Status</td>
                    <td className="py-2 px-3">Check Supabase Dashboard</td>
                    <td className="py-2 px-3">Shows &quot;Active&quot;</td>
                  </tr>
                  <tr className="border-b border-gray-800">
                    <td className="py-2 px-3">Connection String</td>
                    <td className="py-2 px-3">Verify env variables</td>
                    <td className="py-2 px-3">Matches Dashboard</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3">Direct Connection</td>
                    <td className="py-2 px-3">Try port 5432</td>
                    <td className="py-2 px-3">Should connect</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-white mt-8">Is This Related to AWS Infrastructure Issues?</h2>
            
            <p>
              The error mentions <strong>aws-0-ap-southeast-2.pooler.supabase.com</strong>, which is hosted on AWS Sydney region. While Supabase manages the infrastructure, underlying AWS issues can cause increased latency, intermittent failures, and pooler degradation.
            </p>

            <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-4 not-prose">
              <h4 className="text-white font-semibold mb-2">Recent AWS AP-Southeast-2 Issues (2025)</h4>
              <ul className="text-sm space-y-1 text-gray-400">
                <li>Network connectivity issues due to undersea cable maintenance</li>
                <li>Power infrastructure upgrades causing intermittent outages</li>
                <li>Increased demand leading to resource contention</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-white mt-8">Conclusion</h2>

            <p>
              The &quot;Tenant or user not found&quot; error is typically a <strong className="text-white">configuration or project state issue</strong>, not a permanent database failure. The most common fixes are:
            </p>

            <ol className="list-decimal pl-6 space-y-2">
              <li>✅ Check if project is paused → Resume it</li>
              <li>✅ Get new connection string from Dashboard</li>
              <li>✅ Update password in your app</li>
              <li>✅ Test direct connection (port 5432) vs pooler (port 6543)</li>
            </ol>

            <div className="bg-orange-900/20 border border-orange-500/30 rounded-lg p-4 mt-6 not-prose">
              <p className="text-orange-400 font-semibold mb-1">💡 Key Takeaway</p>
              <p className="text-sm">After any project pause/resume cycle, <strong>your database password changes</strong>. Always update your environment variables immediately.</p>
            </div>

            <p className="mt-8">
              <strong>Need help with your Supabase setup?</strong> Join the SeekhoWithRua community for real-time troubleshooting support.
            </p>

            <div className="border-t border-gray-800 pt-8 mt-8 not-prose">
              <h3 className="text-lg font-semibold text-white mb-4">Related Articles</h3>
              <ul className="space-y-2">
                <li><Link href="/blog/oracle-layoffs-2026" className="text-purple-400 hover:text-purple-300">Oracle Layoffs 2026: Why Tech Giants Are Cutting Jobs</Link></li>
                <li><Link href="/blog/ai-agent-builder-guide" className="text-purple-400 hover:text-purple-300">Complete Guide to Building AI Agents Without Code</Link></li>
                <li><Link href="/blog/urls-discovered-not-indexed-fix" className="text-purple-400 hover:text-purple-300">URLs Discovered but Not Indexed: Google&apos;s Hidden Ranking Factors</Link></li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
