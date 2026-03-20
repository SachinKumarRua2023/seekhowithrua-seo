// ═══════════════════════════════════════════════════════════════
// REPO FILE:  seekhowithrua-seo/app/animation-lab/page.tsx
// LIVE URL:   https://seekhowithrua.com/animation-lab
// ACTION:     Create this file (new folder + new file — never existed before)
// ═══════════════════════════════════════════════════════════════

import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Animation Lab — 3D Visual Learning for Coding, AI & IT Courses | SeekhoWithRua",
  description: "Learn coding, AI, and data science through 3D animations and visual explainers. Animated course content for school, college, and IT students India. WebGL Three.js visual learning platform.",
  keywords: "3D animation learning platform, visual learning website India, animated course content online, WebGL education animation, 3D explainer for students, visual coding tutorial India, Three.js animation learning, AI ML animation course, animated data science course, school college 3D learning, IT course animation India, animation for understanding code, 3D visual programming tutorial, animated machine learning India, visual full stack course",
  openGraph: {
    title: "Animation Lab — 3D Visual Learning Platform | SeekhoWithRua",
    description: "Every concept visualised in 3D. Animated courses for AI, coding, data science & more.",
    url: "https://seekhowithrua.com/animation-lab",
    siteName: "SeekhoWithRua",
    type: "website",
  },
  alternates: { canonical: "https://seekhowithrua.com/animation-lab" },
};

const COURSES = [
  { slug: "data-science", title: "Data Science", color: "#7c3aed", icon: "📊", desc: "Neural networks, loss curves, gradient descent — all animated in 3D." },
  { slug: "ai-course", title: "AI & Machine Learning", color: "#00d4ff", icon: "🤖", desc: "Transformers, attention weights, backpropagation — see it happen." },
  { slug: "full-stack-development", title: "Full Stack Dev", color: "#1D9E75", icon: "💻", desc: "HTTP request flow, database queries, component trees — animated." },
  { slug: "game-development", title: "Game Development", color: "#f59e0b", icon: "🎮", desc: "Rendering pipelines, physics engines, shaders — 3D visualised." },
  { slug: "python-programming-course", title: "Python Programming", color: "#ec4899", icon: "🐍", desc: "Memory model, function calls, data structures — all visual." },
  { slug: "iot-robotics", title: "IoT & Robotics", color: "#06b6d4", icon: "⚙️", desc: "Circuit diagrams, signal flow, robot kinematics — animated." },
  { slug: "mobile-app-development", title: "Mobile App Development", color: "#a855f7", icon: "📱", desc: "Component lifecycle, navigation, state — visualised." },
  { slug: "web-development-course", title: "Web Development", color: "#84cc16", icon: "🌐", desc: "DOM tree, CSS box model, event bubbling — animated." },
];

const WHY = [
  { title: "Concepts that click instantly", body: "A 30-second 3D animation of backpropagation teaches what 3 hours of reading cannot. Visual memory is 6× more durable than text memory." },
  { title: "Built for Indian students", body: "Complex CS concepts explained visually — no dependency on fluent English comprehension. The animation tells the story." },
  { title: "UEEP model — Understand first", body: "Every lesson starts with a 3D visual before any code is written. You understand the mechanism before you implement it." },
  { title: "Same tech you'll build with", body: "The animations themselves are built in Three.js and WebGL — the same tools in the courses. Learning and seeing the tech simultaneously." },
];

export default function AnimationLabPage() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap');
        :root{--c:#1D9E75;--fg:#1a1a2e;--fg2:#5a5a72;--bg:#fafaf8;--card:#fff;--border:rgba(0,0,0,.08);--font:'Syne',sans-serif;--mono:'JetBrains Mono',monospace}
        @media(prefers-color-scheme:dark){:root{--fg:#e8e8f0;--fg2:#9090a8;--bg:#0f0f1a;--card:#181828;--border:rgba(255,255,255,.08)}}
        .p *{box-sizing:border-box;margin:0;padding:0}
        .p{font-family:var(--font);background:var(--bg);color:var(--fg);line-height:1.6}
        .hero{padding:72px 24px 56px;text-align:center;position:relative;overflow:hidden}
        .hero::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse 60% 40% at 50% 0%,rgba(29,158,117,.1) 0%,transparent 70%);pointer-events:none}
        .badge{display:inline-flex;align-items:center;gap:7px;background:rgba(29,158,117,.1);color:#0f6e56;font-family:var(--mono);font-size:11px;padding:5px 14px;border-radius:999px;border:1px solid rgba(29,158,117,.3);margin-bottom:22px}
        @media(prefers-color-scheme:dark){.badge{color:#5DCAA5}}
        .h1{font-size:clamp(2rem,5vw,3.6rem);font-weight:800;line-height:1.1;letter-spacing:-.03em;margin:0 auto 18px;max-width:760px}
        .h1 span{color:#0f6e56}
        @media(prefers-color-scheme:dark){.h1 span{color:#1D9E75}}
        .sub{font-size:clamp(.95rem,2vw,1.1rem);color:var(--fg2);max-width:560px;margin:0 auto 32px;line-height:1.7}
        .cta-row{display:flex;gap:12px;justify-content:center;flex-wrap:wrap}
        .btn-p{display:inline-flex;align-items:center;gap:8px;background:#0f6e56;color:#fff;font-family:var(--font);font-weight:700;font-size:15px;padding:13px 28px;border-radius:10px;text-decoration:none;transition:opacity .15s,transform .15s}
        .btn-p:hover{opacity:.88;transform:translateY(-1px)}
        @media(prefers-color-scheme:dark){.btn-p{background:#1D9E75}}
        .btn-o{display:inline-flex;align-items:center;gap:8px;background:var(--card);color:var(--fg);font-family:var(--font);font-weight:600;font-size:15px;padding:13px 28px;border-radius:10px;text-decoration:none;border:1px solid var(--border);transition:opacity .15s,transform .15s}
        .btn-o:hover{opacity:.8;transform:translateY(-1px)}
        .sec{max-width:1080px;margin:0 auto;padding:52px 24px}
        .sec-label{font-family:var(--mono);font-size:11px;letter-spacing:.1em;color:#0f6e56;text-transform:uppercase;margin-bottom:8px}
        @media(prefers-color-scheme:dark){.sec-label{color:#1D9E75}}
        .sec-title{font-size:clamp(1.4rem,3vw,2rem);font-weight:800;letter-spacing:-.03em;margin-bottom:6px}
        .sec-sub{font-size:.95rem;color:var(--fg2);max-width:520px;margin-bottom:32px;line-height:1.7}
        .divider{height:1px;background:var(--border);max-width:1080px;margin:0 auto}
        .courses-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(240px,1fr));gap:14px}
        .course-card{background:var(--card);border:1px solid var(--border);border-top:2px solid var(--cc);border-radius:12px;padding:20px;text-decoration:none;color:inherit;display:flex;flex-direction:column;gap:8px;transition:transform .18s,box-shadow .18s}
        .course-card:hover{transform:translateY(-3px);box-shadow:0 8px 28px rgba(0,0,0,.08)}
        .course-icon{font-size:24px}
        .course-title{font-size:.95rem;font-weight:700}
        .course-desc{font-size:.85rem;color:var(--fg2);line-height:1.6;flex:1}
        .course-link{font-size:12px;font-weight:600}
        .why-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(240px,1fr));gap:14px}
        .why-card{background:var(--card);border:1px solid var(--border);border-radius:12px;padding:20px}
        .why-title{font-size:.95rem;font-weight:700;margin-bottom:5px}
        .why-body{font-size:.85rem;color:var(--fg2);line-height:1.6}
        .bottom{text-align:center;padding:64px 24px;background:var(--card);border-top:1px solid var(--border)}
        .bottom h2{font-size:clamp(1.4rem,3vw,2rem);font-weight:800;letter-spacing:-.03em;margin-bottom:12px}
        .bottom p{font-size:.95rem;color:var(--fg2);max-width:440px;margin:0 auto 28px;line-height:1.7}
      `}</style>
      <main className="p">
        <section className="hero">
          <div className="badge">8 courses · 3D animated</div>
          <h1 className="h1">See the code. <span>Understand</span> the concept.</h1>
          <p className="sub">Every lesson on SeekhoWithRua starts with a 3D animation before any code is written. Neural networks, data pipelines, game engines — all visualised in your browser.</p>
          <div className="cta-row">
            <a href="https://animationlab.seekhowithrua.com" className="btn-p" target="_blank" rel="noopener noreferrer">Open Animation Lab →</a>
            <Link href="/courses" className="btn-o">Browse Courses</Link>
          </div>
        </section>
        <div className="divider" />
        <section className="sec">
          <p className="sec-label">Animated courses</p>
          <h2 className="sec-title">Pick a course to see its animations</h2>
          <p className="sec-sub">Each course has its own animated content library. Click to explore what 3D visualisation looks like for that subject.</p>
          <div className="courses-grid">
            {COURSES.map(c => (
              <Link key={c.slug} href={`/animation-lab/${c.slug}`} className="course-card" style={{ "--cc": c.color } as any}>
                <span className="course-icon">{c.icon}</span>
                <h3 className="course-title">{c.title}</h3>
                <p className="course-desc">{c.desc}</p>
                <span className="course-link" style={{ color: c.color }}>See animations →</span>
              </Link>
            ))}
          </div>
        </section>
        <div className="divider" />
        <section className="sec">
          <p className="sec-label">Why visual learning</p>
          <h2 className="sec-title">Why 3D animations teach faster</h2>
          <p className="sec-sub">The UEEP model starts with understanding — and nothing builds understanding faster than a well-made 3D animation.</p>
          <div className="why-grid">
            {WHY.map(w => (
              <div key={w.title} className="why-card">
                <h3 className="why-title">{w.title}</h3>
                <p className="why-body">{w.body}</p>
              </div>
            ))}
          </div>
        </section>
        <div className="bottom">
          <h2>Open the Animation Lab</h2>
          <p>Free, browser-based, no install. Choose a course and start watching 3D visual explanations.</p>
          <div className="cta-row">
            <a href="https://animationlab.seekhowithrua.com" className="btn-p" target="_blank" rel="noopener noreferrer">Launch Animation Lab →</a>
            <Link href="/gaming-lab" className="btn-o">Try Gaming Lab</Link>
          </div>
        </div>
      </main>
    </>
  );
}