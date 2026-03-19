// ============================================================
// FILE LOCATION: seekhowithrua-seo/app/blog/[slug]/page.tsx
// FOLDER: app/blog/[slug]/   ← folder name has square brackets
// ACTION: REPLACE existing page.tsx with this file
// FIX: No @/lib imports — all post data is inline. 2026 dates.
// ============================================================

import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

// ── ALL POSTS INLINE ─────────────────────────────────────────
const POSTS = [
  {
    slug: "how-to-learn-machine-learning-india-2025",
    title: "How to Learn Machine Learning in India 2026 — Complete Roadmap",
    excerpt: "A practical, step-by-step roadmap to learn ML in India. From Python basics to getting your first ML job.",
    date: "2026-03-19", category: "AI/ML", color: "#00d4ff", readTime: "8 min read",
    content: `
## What is Machine Learning?

Machine Learning is a branch of AI where computers learn patterns from data without being explicitly programmed. In 2026, ML is the most in-demand skill in India's tech industry.

## Why Learn ML in India Right Now?

- Average ML Engineer salary: ₹12L–₹40L per year
- Companies like Google, Microsoft, Flipkart, Zomato are actively hiring
- India is becoming a global AI hub — Tier 2 city engineers are getting hired remotely

## The Complete Roadmap

### Step 1: Python Fundamentals (4–6 weeks)
Start with Python. Learn variables, loops, functions, and OOP. Use NumPy and Pandas daily.

### Step 2: Math Foundations (3–4 weeks)
Linear Algebra, Statistics, and basic Calculus — not heavy theory, just intuition.

### Step 3: Classical ML (6–8 weeks)
Learn Scikit-learn. Practice Linear Regression, Decision Trees, Random Forests, SVM.

### Step 4: Deep Learning (8–10 weeks)
Pick TensorFlow or PyTorch. Learn neural networks, CNNs, RNNs, and Transformers.

### Step 5: Projects + Portfolio (ongoing)
Build 3–5 real projects. Deploy them. Put them on GitHub. That's what gets you hired.

## Final Tip from Master Rua

"Don't just watch tutorials. Build something broken every day. That's how you actually learn."
    `
  },
  {
    slug: "unity-vs-threejs-which-to-learn-first",
    title: "Unity vs Three.js: Which Game Engine Should You Learn First in 2026?",
    excerpt: "Confused between Unity and Three.js? Here's Master Rua's honest take based on your goals.",
    date: "2026-03-18", category: "Game Dev", color: "#f59e0b", readTime: "6 min read",
    content: `
## Unity vs Three.js — The Real Difference

Both are powerful. But they're built for different things.

**Unity** is a full game engine for desktop, mobile, console games. Uses C#. Best for 3D games with complex physics.

**Three.js** is a JavaScript 3D library for the browser. Great for web-based 3D experiences and browser games.

## Choose Unity If...
- You want to build mobile games (Android/iOS)
- You want to publish to Steam or consoles
- You're interested in AR/VR development

## Choose Three.js If...
- You're already a web developer
- You want browser-based 3D experiences
- You want games that run instantly — no download needed

## Master Rua's Recommendation

**Start with Three.js if you're a web developer.** You'll ship faster and see results on day 1.

**Start with Unity if you want actual downloadable games** that people play on their phones.

At SeekhowithRua, we teach both — starting with Three.js basics, then moving to full Unity game development.
    `
  },
  {
    slug: "how-to-get-20-lakh-tech-job-tier-2-city",
    title: "How to Get a ₹20L Tech Job from a Tier-2 City in India",
    excerpt: "You don't need to be in Bangalore. Here's the exact playbook Master Rua's students use.",
    date: "2026-03-17", category: "Career", color: "#1D9E75", readTime: "7 min read",
    content: `
## The Myth: You Need to Be in Bangalore

Wrong. In 2026, companies are hiring remotely. US startups are paying Indian engineers in USD.

## The Playbook

### 1. Pick a High-Value Skill
- AI/ML Engineering
- Full Stack (React + Django)
- Mobile Development (React Native)
- Data Science

### 2. Build a Portfolio That Talks
3 deployed projects beats 100 tutorial completions every time. Deploy everything. Show real work.

### 3. LinkedIn Optimization
- Professional photo
- Headline: "AI/ML Engineer | React Native | Open to Remote"
- Post 3x per week about what you're learning

### 4. Apply Strategically
- AngelList / Wellfound for startups
- LinkedIn Easy Apply (50+ per week)
- Toptal, Upwork for freelancing
- Direct outreach to CTOs of small companies

## Real Student Results

- Rahul from Lucknow: ₹18L at a Mumbai startup (remote)
- Priya from Jaipur: Freelancing for a US client at $25/hr
- Arjun from Meerut: ₹22L at a Bangalore company (fully remote)

All students of SeekhowithRua. All started from zero.
    `
  },
  {
    slug: "python-roadmap-beginners-india-2025",
    title: "Python Learning Roadmap for Absolute Beginners in India 2026",
    excerpt: "Zero to job-ready Python developer in 6 months. The exact roadmap Master Rua uses to teach 1000+ students.",
    date: "2026-03-16", category: "Python", color: "#ec4899", readTime: "6 min read",
    content: `
## Why Python in 2026?

Python is the #1 language for AI, Data Science, Automation, and Web Development. Learn one language — make it Python.

## Month 1: Python Basics
- Variables, data types, operators
- if/else, loops, functions
- Lists, dictionaries, tuples
- File I/O and error handling

**Goal:** Build a To-Do app, a calculator, a simple text game.

## Month 2: Intermediate Python
- OOP (classes, inheritance, polymorphism)
- Modules and packages
- Regular expressions
- APIs with requests library

**Goal:** Build a weather app that hits a real API.

## Month 3: Choose Your Path

**Path A: Data Science/ML** → NumPy, Pandas, Matplotlib, Scikit-learn

**Path B: Web Dev** → Django or FastAPI, PostgreSQL, REST APIs

**Path C: Automation** → Selenium, BeautifulSoup, automation scripts

## Month 4–6: Build and Deploy
- Build 3 real projects, deploy to Render / Vercel, start applying

## The #1 Mistake Beginners Make

Watching tutorials without coding along. Close the video. Open VS Code. Type every line.
    `
  },
  {
    slug: "react-native-expo-guide-2025",
    title: "Expo Managed vs Bare Workflow: Which Should You Use in 2026?",
    excerpt: "The eternal question for React Native developers. A clear, practical answer.",
    date: "2026-03-15", category: "Mobile", color: "#a855f7", readTime: "5 min read",
    content: `
## The Short Answer

**Use Managed Workflow** unless you have a specific reason not to.

## Managed Workflow

Expo handles all native code for you. You never touch Xcode or Android Studio.

**Pros:** Fast setup, OTA updates, EAS Build, huge SDK.
**Cons:** Limited to Expo SDK.

**Best for:** Most apps — social apps, e-commerce, tools, education apps.

## Bare Workflow

Full access to native iOS and Android code directly.

**Pros:** Full native access, any library works.
**Cons:** You manage native builds yourself.

**Best for:** Apps needing Bluetooth, custom native modules, or very specific native features.

## Master Rua's Rule

Start with Managed. Migrate to Bare only when you hit a wall. 90% of apps never need Bare.

## 2026 Update: EAS Changes Everything

With EAS, even Managed apps can build for App Store and Play Store, use custom native modules, and handle complex signing automatically.
    `
  },
];

function getPost(slug: string) { return POSTS.find(p => p.slug === slug) || null; }

export async function generateStaticParams() {
  return POSTS.map(p => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = getPost(params.slug);
  if (!post) return { title: "Post Not Found" };
  return {
    title: `${post.title} | SeekhowithRua Blog`,
    description: post.excerpt,
    alternates: { canonical: `https://seekhowithrua.com/blog/${post.slug}` },
    openGraph: { title: post.title, description: post.excerpt, url: `https://seekhowithrua.com/blog/${post.slug}`, type: "article", publishedTime: post.date },
  };
}

function renderContent(content: string) {
  const lines = content.trim().split("\n");
  const out: React.ReactNode[] = [];
  let i = 0;
  while (i < lines.length) {
    const line = lines[i].trim();
    if (!line) { i++; continue; }
    if (line.startsWith("## ")) { out.push(<h2 key={i} className="ph2">{line.slice(3)}</h2>); }
    else if (line.startsWith("### ")) { out.push(<h3 key={i} className="ph3">{line.slice(4)}</h3>); }
    else if (line.startsWith("- ")) {
      const items: string[] = [];
      while (i < lines.length && lines[i].trim().startsWith("- ")) { items.push(lines[i].trim().slice(2)); i++; }
      out.push(<ul key={`ul${i}`} className="pul">{items.map((t,j) => <li key={j}>{t}</li>)}</ul>);
      continue;
    } else {
      const parts = line.split(/\*\*(.*?)\*\*/g);
      out.push(<p key={i} className="pp">{parts.map((p,j) => j%2===0 ? p : <strong key={j}>{p}</strong>)}</p>);
    }
    i++;
  }
  return out;
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug);
  if (!post) notFound();

  const related = POSTS.filter(p => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context":"https://schema.org","@type":"Article",
        headline: post.title, description: post.excerpt, datePublished: post.date,
        author:{"@type":"Person",name:"Sachin Kumar (Master Rua)"},
        publisher:{"@type":"Organization",name:"SeekhowithRua"},
        url:`https://seekhowithrua.com/blog/${post.slug}`,
      })}} />

      <div className="pp-page">
        <div className="pp-back-row"><Link href="/blog" className="pp-back">← All Posts</Link></div>

        <article className="pp-art">
          <header className="pp-hd">
            <div className="pp-cat" style={{ color: post.color }}>{post.category}</div>
            <h1 className="pp-h1">{post.title}</h1>
            <p className="pp-ex">{post.excerpt}</p>
            <div className="pp-meta">
              <div className="pp-author">
                <div className="pp-av">MR</div>
                <div>
                  <div className="pp-aname">Sachin Kumar (Master Rua)</div>
                  <div className="pp-arole">AI/ML Trainer · Full Stack Dev</div>
                </div>
              </div>
              <div className="pp-dates">{post.date} · {post.readTime}</div>
            </div>
          </header>

          <div className="pp-div" style={{ borderColor: post.color + "40" }} />
          <div className="pp-body">{renderContent(post.content)}</div>

          <div className="pp-cta" style={{ borderColor: post.color + "40" }}>
            <div>
              <div className="pp-cta-t">Learn this in depth 🚀</div>
              <div className="pp-cta-s">Join 1000+ students on SeekhowithRua</div>
            </div>
            <a href="https://app.seekhowithrua.com" className="pp-cta-btn"
              style={{ background: `linear-gradient(135deg,${post.color},#7c3aed)` }}>
              Start Learning Free →
            </a>
          </div>
        </article>

        {related.length > 0 && (
          <div className="pp-rel">
            <div className="pp-rel-lbl">MORE FROM THE BLOG</div>
            <div className="pp-rel-grid">
              {related.map(p => (
                <Link key={p.slug} href={`/blog/${p.slug}`} className="pp-rc">
                  <div className="pp-rc-cat" style={{ color: p.color }}>{p.category}</div>
                  <div className="pp-rc-title">{p.title}</div>
                  <div className="pp-rc-meta">{p.date} · {p.readTime}</div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@600;700&family=JetBrains+Mono:wght@400;500&family=Exo+2:wght@400;500;600&display=swap');
        .pp-page{min-height:100vh;background:#04040f;color:#e2e8f0;font-family:'Exo 2',sans-serif;padding-bottom:80px}
        .pp-back-row{max-width:820px;margin:0 auto;padding:24px 40px 0}
        .pp-back{font-family:'JetBrains Mono',monospace;font-size:12px;color:rgba(255,255,255,.4);text-decoration:none;transition:color .2s}
        .pp-back:hover{color:#7c3aed}
        .pp-art{max-width:820px;margin:0 auto;padding:32px 40px}
        .pp-cat{font-family:'JetBrains Mono',monospace;font-size:10px;letter-spacing:3px;text-transform:uppercase;margin-bottom:16px}
        .pp-h1{font-family:'Syne',sans-serif;font-size:clamp(26px,4vw,42px);font-weight:700;color:#fff;line-height:1.2;margin-bottom:16px}
        .pp-ex{font-size:16px;color:rgba(255,255,255,.55);line-height:1.8;margin-bottom:24px}
        .pp-meta{display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:16px}
        .pp-author{display:flex;align-items:center;gap:12px}
        .pp-av{width:40px;height:40px;border-radius:50%;background:linear-gradient(135deg,#7c3aed,#00d4ff);display:flex;align-items:center;justify-content:center;font-family:'Syne',sans-serif;font-size:13px;font-weight:700;color:#fff;flex-shrink:0}
        .pp-aname{font-family:'Syne',sans-serif;font-size:14px;font-weight:700;color:#fff}
        .pp-arole{font-family:'JetBrains Mono',monospace;font-size:10px;color:rgba(255,255,255,.35)}
        .pp-dates{font-family:'JetBrains Mono',monospace;font-size:11px;color:rgba(255,255,255,.35)}
        .pp-div{border:none;border-top:1px solid;margin:32px 0}
        .pp-body{line-height:1.8}
        .ph2{font-family:'Syne',sans-serif;font-size:24px;font-weight:700;color:#fff;margin:36px 0 14px;padding-bottom:8px;border-bottom:1px solid rgba(255,255,255,.08)}
        .ph3{font-family:'Syne',sans-serif;font-size:19px;font-weight:700;color:rgba(255,255,255,.9);margin:24px 0 10px}
        .pp{font-size:15px;color:rgba(255,255,255,.7);line-height:1.9;margin-bottom:16px}
        .pp strong{color:#fff}
        .pul{padding-left:22px;margin-bottom:20px;display:flex;flex-direction:column;gap:8px}
        .pul li{font-size:15px;color:rgba(255,255,255,.65);line-height:1.7}
        .pp-cta{display:flex;align-items:center;justify-content:space-between;gap:20px;margin-top:48px;padding:28px;border:1px solid;border-radius:14px;background:rgba(124,58,237,.05);flex-wrap:wrap}
        .pp-cta-t{font-family:'Syne',sans-serif;font-size:17px;font-weight:700;color:#fff;margin-bottom:4px}
        .pp-cta-s{font-size:12px;color:rgba(255,255,255,.4);font-family:'JetBrains Mono',monospace}
        .pp-cta-btn{padding:12px 24px;border-radius:8px;color:#fff;font-family:'Syne',sans-serif;font-size:14px;font-weight:700;text-decoration:none;white-space:nowrap;transition:opacity .2s}
        .pp-cta-btn:hover{opacity:.85}
        .pp-rel{max-width:820px;margin:48px auto 0;padding:0 40px}
        .pp-rel-lbl{font-family:'JetBrains Mono',monospace;font-size:9px;letter-spacing:4px;color:rgba(255,255,255,.3);margin-bottom:20px}
        .pp-rel-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:14px}
        .pp-rc{display:flex;flex-direction:column;gap:8px;padding:20px;border:1px solid rgba(255,255,255,.07);border-radius:10px;background:rgba(10,10,30,.6);text-decoration:none;color:inherit;transition:all .2s}
        .pp-rc:hover{border-color:#7c3aed;transform:translateY(-2px)}
        .pp-rc-cat{font-family:'JetBrains Mono',monospace;font-size:9px;letter-spacing:2px;text-transform:uppercase}
        .pp-rc-title{font-family:'Syne',sans-serif;font-size:14px;font-weight:700;color:#fff;line-height:1.4;flex:1}
        .pp-rc-meta{font-family:'JetBrains Mono',monospace;font-size:10px;color:rgba(255,255,255,.3)}
        @media(max-width:600px){.pp-art,.pp-back-row,.pp-rel{padding-left:20px;padding-right:20px}.pp-cta{flex-direction:column}}
      `}</style>
    </>
  );
}