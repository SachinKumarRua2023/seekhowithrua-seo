// ═══════════════════════════════════════════════════════════════
// REPO FILE:  seekhowithrua-seo/app/services/page.tsx
// LIVE URL:   https://seekhowithrua.com/services
// ACTION:     Create this file (new folder + new file — never existed before)
// ═══════════════════════════════════════════════════════════════

import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services — Hire Full Stack, Game Dev, AI/ML & Mobile App Developer India | SeekhoWithRua",
  description: "Hire Master Rua (Sachin Kumar) for full stack development, game development, AI/ML training, mobile apps, and EdTech platform development. React, Django, Unity, Three.js. India & USA clients.",
  keywords: "hire full stack developer India, AI ML trainer India, game development company India, web app development India, mobile app developer India, EdTech platform development, React Django developer hire, corporate AI training India, data science training company, Three.js WebGL developer India, Unity game developer hire, startup tech team India, hire React developer India, hire Django developer, ML model development India",
  openGraph: {
    title: "Services — Full Stack, Game Dev, AI/ML | SeekhoWithRua",
    description: "Hire Master Rua for web, mobile, game dev, AI/ML training. India & USA clients welcome.",
    url: "https://seekhowithrua.com/services",
    siteName: "SeekhoWithRua",
    type: "website",
  },
  alternates: { canonical: "https://seekhowithrua.com/services" },
};

const SERVICES = [
  {
    slug: "game-development",
    icon: "🎮",
    color: "#f59e0b",
    title: "Game Development",
    desc: "Browser games, mobile games, 3D educational games. Three.js, Babylon.js, Unity, Phaser. Built to run anywhere.",
    tags: ["Three.js", "Unity", "Babylon.js", "Phaser", "WebGL"],
  },
  {
    slug: "web-app-development",
    icon: "💻",
    color: "#1D9E75",
    title: "Web & App Development",
    desc: "Full stack products — React/Next.js frontend, Django REST backend, PostgreSQL. SEO-optimised and production-ready.",
    tags: ["React", "Next.js", "Django", "PostgreSQL", "SEO"],
  },
  {
    slug: "mobile-app-development",
    icon: "📱",
    color: "#a855f7",
    title: "Mobile App Development",
    desc: "iOS and Android apps built with React Native and Expo. From MVP to Play Store and App Store deployment.",
    tags: ["React Native", "Expo", "iOS", "Android"],
  },
  {
    slug: null,
    icon: "🤖",
    color: "#00d4ff",
    title: "AI & ML Training",
    desc: "Corporate and institutional AI/ML training. Hands-on sessions covering Python, scikit-learn, PyTorch, LLMs, and MLOps.",
    tags: ["Python", "PyTorch", "LLMs", "MLOps", "Corporate"],
  },
  {
    slug: null,
    icon: "📊",
    color: "#7c3aed",
    title: "Data Science Consulting",
    desc: "End-to-end ML pipelines, model deployment, and data strategy. From raw data to production-ready predictions.",
    tags: ["Pandas", "Scikit-learn", "MLflow", "Deployment"],
  },
  {
    slug: null,
    icon: "🎓",
    color: "#ec4899",
    title: "EdTech Platform Development",
    desc: "LMS platforms, gamified learning apps, 3D animation labs, and voice room communities — built from scratch.",
    tags: ["LMS", "Gamification", "WebRTC", "3D", "Memory Science"],
  },
];

const PROOF = [
  { num: "45+", label: "Projects deployed" },
  { num: "1000+", label: "Students trained" },
  { num: "USA", label: "International clients" },
  { num: "10+", label: "Courses built" },
];

const STACK = [
  "React", "Next.js", "TypeScript", "Three.js", "Django", "PostgreSQL",
  "React Native", "Expo", "Unity", "Phaser.js", "Babylon.js", "PyTorch",
  "TensorFlow", "Scikit-learn", "WebGL", "WebRTC", "Cannon.js",
];

export default function ServicesPage() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap');
        :root{--c:#7c3aed;--fg:#1a1a2e;--fg2:#5a5a72;--bg:#fafaf8;--card:#fff;--border:rgba(0,0,0,.08);--font:'Syne',sans-serif;--mono:'JetBrains Mono',monospace}
        @media(prefers-color-scheme:dark){:root{--fg:#e8e8f0;--fg2:#9090a8;--bg:#0f0f1a;--card:#181828;--border:rgba(255,255,255,.08)}}
        .p *{box-sizing:border-box;margin:0;padding:0}
        .p{font-family:var(--font);background:var(--bg);color:var(--fg);line-height:1.6}
        .hero{padding:72px 24px 56px;text-align:center;position:relative;overflow:hidden}
        .hero::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse 60% 40% at 50% 0%,rgba(124,58,237,.1) 0%,transparent 70%);pointer-events:none}
        .badge{display:inline-flex;align-items:center;gap:7px;background:rgba(124,58,237,.1);color:#6d28d9;font-family:var(--mono);font-size:11px;padding:5px 14px;border-radius:999px;border:1px solid rgba(124,58,237,.25);margin-bottom:22px}
        @media(prefers-color-scheme:dark){.badge{color:#a78bfa}}
        .h1{font-size:clamp(2rem,5vw,3.5rem);font-weight:800;line-height:1.1;letter-spacing:-.03em;margin:0 auto 18px;max-width:760px}
        .h1 span{color:#6d28d9}
        @media(prefers-color-scheme:dark){.h1 span{color:#a78bfa}}
        .sub{font-size:clamp(.95rem,2vw,1.1rem);color:var(--fg2);max-width:560px;margin:0 auto 28px;line-height:1.7}
        .proof{display:flex;flex-wrap:wrap;gap:24px;justify-content:center;margin-bottom:32px}
        .proof-item{text-align:center}
        .proof-num{font-size:1.6rem;font-weight:800;letter-spacing:-.03em;color:var(--fg)}
        .proof-label{font-family:var(--mono);font-size:10px;color:var(--fg2);letter-spacing:.06em;margin-top:2px}
        .cta-row{display:flex;gap:12px;justify-content:center;flex-wrap:wrap}
        .btn-p{display:inline-flex;align-items:center;gap:8px;background:#6d28d9;color:#fff;font-family:var(--font);font-weight:700;font-size:15px;padding:13px 28px;border-radius:10px;text-decoration:none;transition:opacity .15s,transform .15s}
        .btn-p:hover{opacity:.88;transform:translateY(-1px)}
        @media(prefers-color-scheme:dark){.btn-p{background:#7c3aed}}
        .btn-wa{display:inline-flex;align-items:center;gap:8px;background:#22c55e;color:#fff;font-family:var(--font);font-weight:700;font-size:15px;padding:13px 28px;border-radius:10px;text-decoration:none;transition:opacity .15s,transform .15s}
        .btn-wa:hover{opacity:.88;transform:translateY(-1px)}
        .btn-o{display:inline-flex;align-items:center;gap:8px;background:var(--card);color:var(--fg);font-family:var(--font);font-weight:600;font-size:15px;padding:13px 28px;border-radius:10px;text-decoration:none;border:1px solid var(--border);transition:opacity .15s,transform .15s}
        .btn-o:hover{opacity:.8;transform:translateY(-1px)}
        .sec{max-width:1080px;margin:0 auto;padding:52px 24px}
        .sec-label{font-family:var(--mono);font-size:11px;letter-spacing:.1em;color:#6d28d9;text-transform:uppercase;margin-bottom:8px}
        @media(prefers-color-scheme:dark){.sec-label{color:#a78bfa}}
        .sec-title{font-size:clamp(1.4rem,3vw,2rem);font-weight:800;letter-spacing:-.03em;margin-bottom:6px}
        .sec-sub{font-size:.95rem;color:var(--fg2);max-width:520px;margin-bottom:32px;line-height:1.7}
        .divider{height:1px;background:var(--border);max-width:1080px;margin:0 auto}
        .svc-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:16px}
        .svc-card{background:var(--card);border:1px solid var(--border);border-top:2px solid var(--cc);border-radius:14px;padding:24px;text-decoration:none;color:inherit;display:flex;flex-direction:column;gap:10px;transition:transform .18s,box-shadow .18s}
        .svc-card:hover{transform:translateY(-3px);box-shadow:0 8px 28px rgba(0,0,0,.08)}
        .svc-icon{font-size:26px}
        .svc-title{font-size:1rem;font-weight:700}
        .svc-desc{font-size:.88rem;color:var(--fg2);line-height:1.6;flex:1}
        .svc-tags{display:flex;flex-wrap:wrap;gap:5px}
        .svc-tag{font-family:var(--mono);font-size:10px;padding:2px 7px;border-radius:5px;border:1px solid var(--border);color:var(--fg2)}
        .svc-link{font-size:12px;font-weight:700}
        .stack-wrap{display:flex;flex-wrap:wrap;gap:8px}
        .stack-pill{font-family:var(--mono);font-size:11px;padding:4px 10px;border-radius:6px;border:1px solid var(--border);color:var(--fg2);background:var(--card)}
        .contact-box{background:var(--card);border:1px solid var(--border);border-radius:14px;padding:32px;text-align:center}
        .contact-title{font-size:1.2rem;font-weight:700;margin-bottom:8px}
        .contact-sub{font-size:.9rem;color:var(--fg2);margin-bottom:20px;line-height:1.6}
        .bottom{text-align:center;padding:64px 24px;background:var(--card);border-top:1px solid var(--border)}
        .bottom h2{font-size:clamp(1.4rem,3vw,2rem);font-weight:800;letter-spacing:-.03em;margin-bottom:12px}
        .bottom p{font-size:.95rem;color:var(--fg2);max-width:440px;margin:0 auto 28px;line-height:1.7}
      `}</style>
      <main className="p">
        <section className="hero">
          <div className="badge">Available for projects — India & globally</div>
          <h1 className="h1">Build your product with <span>Master Rua</span></h1>
          <p className="sub">Full stack web, mobile apps, game development, AI/ML training, and EdTech platforms. Built by Sachin Kumar — solo developer with USA clients and 45+ deployments.</p>
          <div className="proof">
            {PROOF.map(p => (
              <div key={p.label} className="proof-item">
                <div className="proof-num">{p.num}</div>
                <div className="proof-label">{p.label}</div>
              </div>
            ))}
          </div>
          <div className="cta-row">
            <a href="https://wa.me/918826776018?text=Hi%20Master%20Rua%2C%20I%20need%20help%20with%20a%20project" className="btn-wa" target="_blank" rel="noopener noreferrer">WhatsApp Now →</a>
            <a href="https://services.seekhowithrua.com" className="btn-p" target="_blank" rel="noopener noreferrer">See Full Services</a>
          </div>
        </section>

        <div className="divider" />

        <section className="sec">
          <p className="sec-label">What we build</p>
          <h2 className="sec-title">Six service areas</h2>
          <p className="sec-sub">From solo freelance projects to full EdTech platform builds. Game dev, web, mobile, AI — all under one roof.</p>
          <div className="svc-grid">
            {SERVICES.map(s => (
              s.slug ? (
                <Link key={s.title} href={`/services/${s.slug}`} className="svc-card" style={{ "--cc": s.color } as any}>
                  <span className="svc-icon">{s.icon}</span>
                  <h3 className="svc-title">{s.title}</h3>
                  <p className="svc-desc">{s.desc}</p>
                  <div className="svc-tags">{s.tags.map(t => <span key={t} className="svc-tag">{t}</span>)}</div>
                  <span className="svc-link" style={{ color: s.color }}>See details →</span>
                </Link>
              ) : (
                <div key={s.title} className="svc-card" style={{ "--cc": s.color } as any}>
                  <span className="svc-icon">{s.icon}</span>
                  <h3 className="svc-title">{s.title}</h3>
                  <p className="svc-desc">{s.desc}</p>
                  <div className="svc-tags">{s.tags.map(t => <span key={t} className="svc-tag">{t}</span>)}</div>
                </div>
              )
            ))}
          </div>
        </section>

        <div className="divider" />

        <section className="sec">
          <p className="sec-label">Tech stack</p>
          <h2 className="sec-title">Technologies used</h2>
          <p className="sec-sub">Production-tested stack. The same tools used to build SeekhoWithRua itself — 45+ deployments and counting.</p>
          <div className="stack-wrap">
            {STACK.map(s => <span key={s} className="stack-pill">{s}</span>)}
          </div>
        </section>

        <div className="divider" />

        <section className="sec">
          <div className="contact-box">
            <h2 className="contact-title">Ready to start your project?</h2>
            <p className="contact-sub">WhatsApp is the fastest way to get a response. Describe your project and get a timeline and quote within 24 hours.</p>
            <div className="cta-row">
              <a href="https://wa.me/918826776018?text=Hi%20Master%20Rua%2C%20I%20need%20help%20with%20a%20project" className="btn-wa" target="_blank" rel="noopener noreferrer">WhatsApp 8826776018 →</a>
              <a href="https://services.seekhowithrua.com" className="btn-o" target="_blank" rel="noopener noreferrer">Full Services Site</a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}