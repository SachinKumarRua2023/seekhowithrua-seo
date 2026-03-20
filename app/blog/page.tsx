// ============================================================
// FILE LOCATION: seekhowithrua-seo/app/blog/page.tsx
// ============================================================

import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog | SeekhowithRua — Master Rua Tech Tutorials & Career Tips 2026",
  description: "Daily tutorials on AI, ML, Game Dev, Mobile Apps, Web Dev, Python and career tips by Master Rua (Sachin Kumar). Best EdTech blog India 2026. Seekho with Rua.",
  alternates: { canonical: "https://seekhowithrua.com/blog" },
  openGraph: {
    title: "SeekhowithRua Blog — Master Rua Daily Tutorials",
    description: "Daily tech tutorials by Master Rua. AI, Game Dev, Mobile, Python, Full Stack India 2026.",
    url: "https://seekhowithrua.com/blog",
    type: "website"
  },
};

const POSTS = [
  // ✅ NEW POST — added at TOP so it shows as featured
  {
    slug: "who-is-master-rua-seekhowithrua-story-2026",
    title: "Who is Master Rua? The Story Behind SeekhowithRua — India's Learning Revolution 2026",
    excerpt: "Master Rua is not just a person — it is a title earned by all-rounders who master tech, physical and creative skills. Meet Sachin Kumar, the founder of SeekhowithRua.",
    date: "2026-03-20",
    category: "Master Rua",
    color: "#fbbf24",
    readTime: "7 min read"
  },
  // ✅ NEW POST — Mission & Vision with full research evidence
  {
    slug: "seekhowithrua-mission-vision-evidence-2026",
    title: "SeekhoWithRua Mission & Vision 2026 — The Scientific Evidence That Will Change How India Learns",
    excerpt: "Why the current education system is broken — backed by 10+ peer-reviewed studies. And how SeekhoWithRua's UEEP Model, 3D learning, gamification and memory science are the scientifically-proven answer.",
    date: "2026-03-20",
    category: "Mission",
    color: "#00d4ff",
    readTime: "12 min read"
  },
  {
    slug: "how-to-learn-machine-learning-india-2025",
    title: "How to Learn Machine Learning in India 2026 — Complete Roadmap",
    excerpt: "A practical, step-by-step roadmap to learn ML in India. From Python basics to getting your first ML job.",
    date: "2026-03-19",
    category: "AI/ML",
    color: "#00d4ff",
    readTime: "8 min read"
  },
  {
    slug: "unity-vs-threejs-which-to-learn-first",
    title: "Unity vs Three.js: Which Game Engine Should You Learn First in 2026?",
    excerpt: "Confused between Unity and Three.js? Here's Master Rua's honest take based on your goals.",
    date: "2026-03-18",
    category: "Game Dev",
    color: "#f59e0b",
    readTime: "6 min read"
  },
  {
    slug: "how-to-get-20-lakh-tech-job-tier-2-city",
    title: "How to Get a ₹20L Tech Job from a Tier-2 City in India",
    excerpt: "You don't need to be in Bangalore. Here's the exact playbook Master Rua's students use.",
    date: "2026-03-17",
    category: "Career",
    color: "#1D9E75",
    readTime: "7 min read"
  },
  {
    slug: "python-roadmap-beginners-india-2025",
    title: "Python Learning Roadmap for Absolute Beginners in India 2026",
    excerpt: "Zero to job-ready Python developer in 6 months. The exact roadmap Master Rua uses.",
    date: "2026-03-16",
    category: "Python",
    color: "#ec4899",
    readTime: "6 min read"
  },
  {
    slug: "react-native-expo-guide-2025",
    title: "Expo Managed vs Bare Workflow: Which Should You Use in 2026?",
    excerpt: "The eternal question for React Native developers. A clear, practical answer.",
    date: "2026-03-15",
    category: "Mobile",
    color: "#a855f7",
    readTime: "5 min read"
  },
];

export default function BlogPage() {
  return (
    <>
      <div className="bl">
        <div className="bl-hero">
          <div className="bl-ey">✦ DAILY INSIGHTS BY MASTER RUA</div>
          <h1 className="bl-h1">The <span>SeekhowithRua</span> Blog</h1>
          <p className="bl-sub">
            Daily tutorials, career tips, and deep-dives on AI, Game Dev, Mobile, Web and more
            by Master Rua (Sachin Kumar). Seekho with Rua — learn differently.
          </p>
          <div className="bl-contact">
            <a href="https://wa.me/918826776018" target="_blank" rel="noopener noreferrer" className="bl-contact-btn bl-wa">
              💬 WhatsApp Master Rua
            </a>
            <a href="https://www.youtube.com/@seekhowithrua_" target="_blank" rel="noopener noreferrer" className="bl-contact-btn bl-yt">
              ▶ YouTube @seekhowithrua
            </a>
          </div>
        </div>

        <div className="bl-body">
          <div className="bl-lbl">✦ LATEST POST</div>
          <Link href={`/blog/${POSTS[0].slug}`} className="bl-feat">
            <div className="bf-cat" style={{ color: POSTS[0].color }}>{POSTS[0].category}</div>
            <h2 className="bf-title">{POSTS[0].title}</h2>
            <p className="bf-ex">{POSTS[0].excerpt}</p>
            <div className="bf-meta">
              <span>{POSTS[0].date}</span>
              <span>·</span>
              <span>{POSTS[0].readTime}</span>
              <span className="bf-cta">Read Article →</span>
            </div>
          </Link>

          <div className="bl-lbl" style={{ marginTop: 48 }}>ALL POSTS</div>
          <div className="bl-grid">
            {POSTS.slice(1).map(p => (
              <Link key={p.slug} href={`/blog/${p.slug}`} className="bl-card">
                <div className="bc-cat" style={{ color: p.color }}>{p.category}</div>
                <h3 className="bc-title">{p.title}</h3>
                <p className="bc-ex">{p.excerpt}</p>
                <div className="bc-meta">
                  <span>{p.date}</span>
                  <span>·</span>
                  <span>{p.readTime}</span>
                </div>
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="bl-cta">
            <div style={{ fontSize: 36, marginBottom: 14 }}>🚀</div>
            <h3 className="bl-cta-t">Learn with Master Rua</h3>
            <p className="bl-cta-s">
              New tutorial every day. Join 1000+ learners at SeekhowithRua.
            </p>
            <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
              <a href="https://app.seekhowithrua.com" className="bl-cta-btn">
                Join Platform Free →
              </a>
              <a href="https://wa.me/918826776018" target="_blank" rel="noopener noreferrer" className="bl-cta-btn bl-cta-wa">
                💬 WhatsApp: 8826776018
              </a>
            </div>
            <p style={{ marginTop: 16, fontSize: 11, color: "rgba(255,255,255,0.3)", fontFamily: "monospace" }}>
              📧 seekhowithrua@gmail.com · 📺 youtube.com/@seekhowithrua_ · 📸 instagram.com/seekhowithrua_
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@600;700;800&family=JetBrains+Mono:wght@400;500&family=Exo+2:wght@400;500;600&display=swap');
        .bl{min-height:100vh;background:#04040f;color:#e2e8f0;font-family:'Exo 2',sans-serif}
        .bl-hero{padding:80px 40px 48px;text-align:center;background:radial-gradient(ellipse at 50% 0%,rgba(124,58,237,.1) 0%,transparent 60%);border-bottom:1px solid rgba(255,255,255,.05)}
        .bl-ey{font-family:'JetBrains Mono',monospace;font-size:10px;letter-spacing:4px;color:#1D9E75;margin-bottom:16px}
        .bl-h1{font-family:'Syne',sans-serif;font-size:clamp(32px,5vw,56px);font-weight:800;color:#fff;margin-bottom:14px}
        .bl-h1 span{color:#7c3aed}
        .bl-sub{font-family:'JetBrains Mono',monospace;font-size:12px;color:rgba(255,255,255,.4);max-width:560px;margin:0 auto 24px;line-height:2}
        .bl-contact{display:flex;gap:12px;justify-content:center;flex-wrap:wrap;margin-top:8px}
        .bl-contact-btn{padding:8px 18px;border-radius:20px;font-size:12px;font-weight:700;text-decoration:none;font-family:'JetBrains Mono',monospace;transition:all .2s}
        .bl-wa{background:rgba(37,211,102,.1);border:1px solid rgba(37,211,102,.3);color:#25d366}
        .bl-wa:hover{background:rgba(37,211,102,.2)}
        .bl-yt{background:rgba(255,0,0,.08);border:1px solid rgba(255,0,0,.25);color:#ff4444}
        .bl-yt:hover{background:rgba(255,0,0,.15)}
        .bl-body{max-width:1100px;margin:0 auto;padding:48px 40px 80px}
        .bl-lbl{font-family:'JetBrains Mono',monospace;font-size:9px;letter-spacing:4px;color:rgba(255,255,255,.3);margin-bottom:20px}
        .bl-feat{display:block;padding:36px;border:1px solid rgba(124,58,237,.3);border-radius:16px;background:rgba(10,10,30,.8);text-decoration:none;color:inherit;transition:all .2s}
        .bl-feat:hover{border-color:#7c3aed;transform:translateY(-2px)}
        .bf-cat{font-family:'JetBrains Mono',monospace;font-size:10px;letter-spacing:2px;text-transform:uppercase;margin-bottom:14px}
        .bf-title{font-family:'Syne',sans-serif;font-size:clamp(20px,3vw,30px);font-weight:700;color:#fff;margin-bottom:12px;line-height:1.3}
        .bf-ex{font-size:14px;color:rgba(255,255,255,.55);line-height:1.8;margin-bottom:20px;max-width:680px}
        .bf-meta{display:flex;align-items:center;gap:8px;font-family:'JetBrains Mono',monospace;font-size:11px;color:rgba(255,255,255,.35)}
        .bf-cta{margin-left:auto;color:#7c3aed;font-weight:600}
        .bl-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:16px}
        .bl-card{display:flex;flex-direction:column;gap:10px;padding:24px;border:1px solid rgba(255,255,255,.07);border-radius:12px;background:rgba(10,10,30,.6);text-decoration:none;color:inherit;transition:all .2s}
        .bl-card:hover{border-color:#7c3aed;transform:translateY(-3px)}
        .bc-cat{font-family:'JetBrains Mono',monospace;font-size:9px;letter-spacing:2px;text-transform:uppercase}
        .bc-title{font-family:'Syne',sans-serif;font-size:16px;font-weight:700;color:#fff;line-height:1.4;flex:1}
        .bc-ex{font-size:12px;color:rgba(255,255,255,.45);line-height:1.7}
        .bc-meta{font-family:'JetBrains Mono',monospace;font-size:10px;color:rgba(255,255,255,.3);display:flex;gap:6px}
        .bl-cta{margin-top:60px;text-align:center;padding:48px;border:1px solid rgba(29,158,117,.3);border-radius:16px;background:rgba(29,158,117,.05)}
        .bl-cta-t{font-family:'Syne',sans-serif;font-size:24px;font-weight:700;color:#fff;margin-bottom:8px}
        .bl-cta-s{font-size:13px;color:rgba(255,255,255,.45);font-family:'JetBrains Mono',monospace;margin-bottom:24px}
        .bl-cta-btn{display:inline-block;padding:12px 28px;border-radius:8px;background:linear-gradient(135deg,#7c3aed,#00d4ff);color:#fff;font-family:'Syne',sans-serif;font-size:14px;font-weight:700;text-decoration:none;transition:opacity .2s}
        .bl-cta-btn:hover{opacity:.85}
        .bl-cta-wa{background:linear-gradient(135deg,#25d366,#128c7e) !important}
        @media(max-width:600px){.bl-hero,.bl-body{padding-left:20px;padding-right:20px}.bl-grid{grid-template-columns:1fr}}
      `}</style>
    </>
  );
}