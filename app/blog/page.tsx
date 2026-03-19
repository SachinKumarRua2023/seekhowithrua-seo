// ============================================================
// FILE LOCATION: seekhowithrua-seo/app/blog/page.tsx
// STEP 1: Inside "app/blog" folder, REPLACE page.tsx with this file
// FIX: Removed @/lib/blog import — posts data is now inline
// ============================================================

import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog | SeekhowithRua — Tech Tutorials & Career Tips",
  description: "Daily tutorials on AI, Machine Learning, Game Dev, Mobile Apps, Web Dev, Python and career tips by Master Rua. Best EdTech blog India 2025.",
  keywords: ["tech blog india", "machine learning tutorial hindi", "game dev blog", "coding tips india"],
  alternates: { canonical: "https://seekhowithrua.com/blog" },
  openGraph: { title: "SeekhowithRua Blog", description: "Daily tech tutorials by Master Rua", url: "https://seekhowithrua.com/blog", type: "website" },
};

const POSTS = [
  { slug: "how-to-learn-machine-learning-india-2025", title: "How to Learn Machine Learning in India 2025 — Complete Roadmap", excerpt: "A practical, step-by-step roadmap to learn ML in India. From Python basics to getting your first ML job.", date: "2025-03-19", category: "AI/ML", color: "#00d4ff", readTime: "8 min read" },
  { slug: "unity-vs-threejs-which-to-learn-first", title: "Unity vs Three.js: Which Game Engine Should You Learn First in 2025?", excerpt: "Confused between Unity and Three.js? Here's Master Rua's honest take based on your goals.", date: "2025-03-18", category: "Game Dev", color: "#f59e0b", readTime: "6 min read" },
  { slug: "how-to-get-20-lakh-tech-job-tier-2-city", title: "How to Get a ₹20L Tech Job from a Tier-2 City in India", excerpt: "You don't need to be in Bangalore. Here's the exact playbook Master Rua's students use.", date: "2025-03-17", category: "Career", color: "#1D9E75", readTime: "7 min read" },
  { slug: "python-roadmap-beginners-india-2025", title: "Python Learning Roadmap for Absolute Beginners in India 2025", excerpt: "Zero to job-ready Python developer in 6 months. The exact roadmap Master Rua uses.", date: "2025-03-16", category: "Python", color: "#ec4899", readTime: "6 min read" },
  { slug: "react-native-expo-guide-2025", title: "Expo Managed vs Bare Workflow: Which Should You Use in 2025?", excerpt: "The eternal question for React Native developers. A clear, practical answer.", date: "2025-03-15", category: "Mobile", color: "#a855f7", readTime: "5 min read" },
];

export default function BlogPage() {
  return (
    <>
      <div className="blog-page">
        <div className="blog-hero">
          <div className="blog-eyebrow">✦ DAILY INSIGHTS</div>
          <h1 className="blog-h1">The <span>SeekhowithRua</span> Blog</h1>
          <p className="blog-sub">Daily tutorials, career tips, and deep-dives on AI, Game Dev, Mobile, Web and more by Master Rua.</p>
        </div>

        <div className="blog-inner">
          <div className="section-label">FEATURED POST</div>
          <Link href={`/blog/${POSTS[0].slug}`} className="featured-card">
            <div className="fc-tag" style={{ color: POSTS[0].color }}>{POSTS[0].category}</div>
            <h2 className="fc-title">{POSTS[0].title}</h2>
            <p className="fc-excerpt">{POSTS[0].excerpt}</p>
            <div className="fc-meta">
              <span>{POSTS[0].date}</span><span>·</span><span>{POSTS[0].readTime}</span>
              <span className="fc-cta">Read Article →</span>
            </div>
          </Link>

          <div className="section-label" style={{ marginTop: 48 }}>ALL POSTS</div>
          <div className="posts-grid">
            {POSTS.slice(1).map(post => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="post-card">
                <div className="pc-tag" style={{ color: post.color }}>{post.category}</div>
                <h3 className="pc-title">{post.title}</h3>
                <p className="pc-excerpt">{post.excerpt}</p>
                <div className="pc-meta"><span>{post.date}</span><span>·</span><span>{post.readTime}</span></div>
              </Link>
            ))}
          </div>

          <div className="newsletter">
            <div className="nl-icon">📬</div>
            <h3 className="nl-title">Get Daily Posts</h3>
            <p className="nl-desc">New tutorial every day. Join 1000+ learners.</p>
            <a href="https://app.seekhowithrua.com" className="nl-btn">Join the Platform →</a>
          </div>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@600;700&family=JetBrains+Mono:wght@400;500&family=Exo+2:wght@400;500;600&display=swap');
        .blog-page{min-height:100vh;background:#04040f;color:#e2e8f0;font-family:'Exo 2',sans-serif}
        .blog-hero{padding:80px 40px 48px;text-align:center;background:radial-gradient(ellipse at 50% 0%,rgba(124,58,237,0.1) 0%,transparent 60%);border-bottom:1px solid rgba(255,255,255,0.05)}
        .blog-eyebrow{font-family:'JetBrains Mono',monospace;font-size:10px;letter-spacing:4px;color:#1D9E75;margin-bottom:16px}
        .blog-h1{font-family:'Rajdhani',sans-serif;font-size:clamp(32px,5vw,56px);font-weight:700;color:#fff;margin-bottom:14px}
        .blog-h1 span{color:#7c3aed}
        .blog-sub{font-family:'JetBrains Mono',monospace;font-size:12px;color:rgba(255,255,255,0.4);max-width:520px;margin:0 auto;line-height:2}
        .blog-inner{max-width:1100px;margin:0 auto;padding:48px 40px 80px}
        .section-label{font-family:'JetBrains Mono',monospace;font-size:9px;letter-spacing:4px;color:rgba(255,255,255,0.3);margin-bottom:20px}
        .featured-card{display:block;padding:36px;border:1px solid rgba(124,58,237,0.3);border-radius:16px;background:rgba(10,10,30,0.8);text-decoration:none;color:inherit;transition:all 0.2s}
        .featured-card:hover{border-color:#7c3aed;transform:translateY(-2px)}
        .fc-tag{font-family:'JetBrains Mono',monospace;font-size:10px;letter-spacing:2px;text-transform:uppercase;margin-bottom:14px}
        .fc-title{font-family:'Rajdhani',sans-serif;font-size:clamp(22px,3vw,32px);font-weight:700;color:#fff;margin-bottom:12px;line-height:1.3}
        .fc-excerpt{font-size:14px;color:rgba(255,255,255,0.55);line-height:1.8;margin-bottom:20px;max-width:680px}
        .fc-meta{display:flex;align-items:center;gap:8px;font-family:'JetBrains Mono',monospace;font-size:11px;color:rgba(255,255,255,0.35)}
        .fc-cta{margin-left:auto;color:#7c3aed;font-weight:600}
        .posts-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:16px}
        .post-card{display:flex;flex-direction:column;gap:10px;padding:24px;border:1px solid rgba(255,255,255,0.07);border-radius:12px;background:rgba(10,10,30,0.6);text-decoration:none;color:inherit;transition:all 0.2s}
        .post-card:hover{border-color:#7c3aed;transform:translateY(-3px)}
        .pc-tag{font-family:'JetBrains Mono',monospace;font-size:9px;letter-spacing:2px;text-transform:uppercase}
        .pc-title{font-family:'Rajdhani',sans-serif;font-size:17px;font-weight:700;color:#fff;line-height:1.4;flex:1}
        .pc-excerpt{font-size:12px;color:rgba(255,255,255,0.45);line-height:1.7}
        .pc-meta{font-family:'JetBrains Mono',monospace;font-size:10px;color:rgba(255,255,255,0.3);display:flex;gap:6px}
        .newsletter{margin-top:60px;text-align:center;padding:48px;border:1px solid rgba(29,158,117,0.3);border-radius:16px;background:rgba(29,158,117,0.05)}
        .nl-icon{font-size:36px;margin-bottom:14px}
        .nl-title{font-family:'Rajdhani',sans-serif;font-size:24px;font-weight:700;color:#fff;margin-bottom:8px}
        .nl-desc{font-size:13px;color:rgba(255,255,255,0.45);font-family:'JetBrains Mono',monospace;margin-bottom:24px}
        .nl-btn{display:inline-block;padding:12px 28px;border-radius:8px;background:linear-gradient(135deg,#7c3aed,#00d4ff);color:#fff;font-family:'Rajdhani',sans-serif;font-size:14px;font-weight:700;text-decoration:none;transition:opacity 0.2s}
        .nl-btn:hover{opacity:0.85}
        @media(max-width:600px){.blog-hero,.blog-inner{padding-left:20px;padding-right:20px}.posts-grid{grid-template-columns:1fr}}
      `}</style>
    </>
  );
}