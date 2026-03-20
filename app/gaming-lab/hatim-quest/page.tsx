// ═══════════════════════════════════════════════════════════════
// REPO FILE:  seekhowithrua-seo/app/gaming-lab/hatim-quest/page.tsx
// LIVE URL:   https://seekhowithrua.com/gaming-lab/hatim-quest
// ACTION:     Create this file (new folder + new file — never existed before)
// ═══════════════════════════════════════════════════════════════

import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "HatimAI 3D Quest — Educational RPG Game for Coding & ML | SeekhoWithRua",
  description: "3D browser game where coding, ML, and science problems block your path. Solve to progress. Built with Three.js and Cannon.js. Free educational RPG for IT students India.",
  keywords: "3D story game for learning, educational RPG game India, HatimAI 3D game, Three.js game for students, coding adventure game online, AI ML 3D learning game, solve coding problems game, Cannon.js WebGL game India, free fire browser game education, 3D educational game online, WebGL game for students, browser RPG game India, interactive learning game 3D, problem solving game students",
  openGraph: {
    title: "HatimAI 3D Quest — Browser RPG for Learning | SeekhoWithRua",
    description: "3D dungeon where real coding problems block your path. Solve to progress. Free online.",
    url: "https://seekhowithrua.com/gaming-lab/hatim-quest",
    siteName: "SeekhoWithRua",
    type: "website",
  },
  alternates: { canonical: "https://seekhowithrua.com/gaming-lab/hatim-quest" },
};

const FEATURES = [
  { icon: "◈", title: "3D dungeon world", body: "Built with Three.js r160 and Cannon.js physics. Navigate a fully rendered 3D environment in your browser — no download needed." },
  { icon: "◎", title: "Real problems as obstacles", body: "Every locked door, every blocked path is a real coding, ML, or science problem. Solve it correctly to proceed. Get it wrong and face a consequence." },
  { icon: "⊞", title: "AI-powered problem selection", body: "The game learns what you struggle with and sends more of those problems. Personal difficulty scaling without any setup." },
  { icon: "△", title: "The Hatim model", body: "Inspired by Hatim's 7 questions — each answered through struggle, not shortcut. The game puts you in stuck states deliberately because that's when encoding peaks." },
];

const TECH = [
  { name: "Three.js r160", role: "3D rendering & scene management" },
  { name: "Cannon.js", role: "Physics engine — collision, gravity" },
  { name: "WebGL", role: "GPU-accelerated browser graphics" },
  { name: "React + Django", role: "Game state, progress, leaderboards" },
];

export default function HatimQuestPage() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap');
        :root{--c:#a855f7;--fg:#1a1a2e;--fg2:#5a5a72;--bg:#fafaf8;--card:#fff;--border:rgba(0,0,0,.08);--font:'Syne',sans-serif;--mono:'JetBrains Mono',monospace}
        @media(prefers-color-scheme:dark){:root{--fg:#e8e8f0;--fg2:#9090a8;--bg:#0f0f1a;--card:#181828;--border:rgba(255,255,255,.08)}}
        .p *{box-sizing:border-box;margin:0;padding:0}
        .p{font-family:var(--font);background:var(--bg);color:var(--fg);line-height:1.6}
        .hero{padding:72px 24px 56px;text-align:center;position:relative;overflow:hidden}
        .hero::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse 60% 40% at 50% 0%,rgba(168,85,247,.1) 0%,transparent 70%);pointer-events:none}
        .breadcrumb{font-family:var(--mono);font-size:11px;color:var(--fg2);margin-bottom:20px;display:flex;gap:6px;justify-content:center;align-items:center}
        .breadcrumb a{color:var(--fg2);text-decoration:none}.breadcrumb a:hover{color:var(--fg)}
        .h1{font-size:clamp(1.9rem,4.5vw,3.4rem);font-weight:800;line-height:1.1;letter-spacing:-.03em;margin:0 auto 16px;max-width:740px}
        .h1 span{color:#7c3aed}
        @media(prefers-color-scheme:dark){.h1 span{color:#a855f7}}
        .sub{font-size:clamp(.95rem,2vw,1.1rem);color:var(--fg2);max-width:540px;margin:0 auto 30px;line-height:1.7}
        .cta-row{display:flex;gap:12px;justify-content:center;flex-wrap:wrap}
        .btn-p{display:inline-flex;align-items:center;gap:8px;background:#7c3aed;color:#fff;font-family:var(--font);font-weight:700;font-size:15px;padding:13px 28px;border-radius:10px;text-decoration:none;transition:opacity .15s,transform .15s}
        .btn-p:hover{opacity:.88;transform:translateY(-1px)}
        @media(prefers-color-scheme:dark){.btn-p{background:#a855f7}}
        .btn-o{display:inline-flex;align-items:center;gap:8px;background:var(--card);color:var(--fg);font-family:var(--font);font-weight:600;font-size:15px;padding:13px 28px;border-radius:10px;text-decoration:none;border:1px solid var(--border);transition:opacity .15s,transform .15s}
        .btn-o:hover{opacity:.8;transform:translateY(-1px)}
        .sec{max-width:1080px;margin:0 auto;padding:52px 24px}
        .sec-label{font-family:var(--mono);font-size:11px;letter-spacing:.1em;color:#7c3aed;text-transform:uppercase;margin-bottom:8px}
        @media(prefers-color-scheme:dark){.sec-label{color:#a855f7}}
        .sec-title{font-size:clamp(1.4rem,3vw,2rem);font-weight:800;letter-spacing:-.03em;margin-bottom:6px}
        .sec-sub{font-size:.95rem;color:var(--fg2);max-width:520px;margin-bottom:32px;line-height:1.7}
        .divider{height:1px;background:var(--border);max-width:1080px;margin:0 auto}
        .feat-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:14px}
        .feat-card{background:var(--card);border:1px solid var(--border);border-radius:12px;padding:22px;display:flex;gap:14px}
        .feat-icon{font-family:var(--mono);font-size:20px;color:#7c3aed;flex-shrink:0;width:28px;text-align:center;margin-top:2px}
        @media(prefers-color-scheme:dark){.feat-icon{color:#a855f7}}
        .feat-title{font-size:.95rem;font-weight:700;margin-bottom:4px}
        .feat-body{font-size:.85rem;color:var(--fg2);line-height:1.6}
        .tech-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:12px}
        .tech-card{background:var(--card);border:1px solid var(--border);border-radius:12px;padding:16px 18px}
        .tech-name{font-family:var(--mono);font-size:13px;font-weight:500;color:var(--fg);margin-bottom:4px}
        .tech-role{font-size:.85rem;color:var(--fg2)}
        .bottom{text-align:center;padding:64px 24px;background:var(--card);border-top:1px solid var(--border)}
        .bottom h2{font-size:clamp(1.4rem,3vw,2rem);font-weight:800;letter-spacing:-.03em;margin-bottom:12px}
        .bottom p{font-size:.95rem;color:var(--fg2);max-width:440px;margin:0 auto 28px;line-height:1.7}
        .back{font-family:var(--mono);font-size:11px;color:var(--fg2);padding:20px 24px;display:block;max-width:1080px;margin:0 auto}
        .back a{color:var(--fg2);text-decoration:none}.back a:hover{color:var(--fg)}
      `}</style>
      <main className="p">
        <div className="back"><Link href="/gaming-lab">← Back to Gaming Lab</Link></div>
        <section className="hero">
          <div className="breadcrumb"><Link href="/gaming-lab">Gaming Lab</Link> / HatimAI 3D Quest</div>
          <h1 className="h1">A <span>3D dungeon</span> where real problems block your path</h1>
          <p className="sub">Navigate a Three.js powered 3D world where every obstacle is a real coding or ML problem. Solve to move forward. Get stuck — your brain activates maximum learning mode.</p>
          <div className="cta-row">
            <a href="https://gaming.seekhowithrua.com/hatim" className="btn-p" target="_blank" rel="noopener noreferrer">Start 3D Quest →</a>
            <Link href="/gaming-lab/quiz-battle" className="btn-o">Try Quiz Battle</Link>
          </div>
        </section>
        <div className="divider" />
        <section className="sec">
          <p className="sec-label">Game features</p>
          <h2 className="sec-title">Why this game teaches better than videos</h2>
          <p className="sec-sub">The neuroscience is simple: struggle before instruction. HatimAI puts you in the stuck state first, then the solution arrives with full emotional weight.</p>
          <div className="feat-grid">
            {FEATURES.map(f => (
              <div key={f.title} className="feat-card">
                <span className="feat-icon">{f.icon}</span>
                <div><div className="feat-title">{f.title}</div><div className="feat-body">{f.body}</div></div>
              </div>
            ))}
          </div>
        </section>
        <div className="divider" />
        <section className="sec">
          <p className="sec-label">Tech stack</p>
          <h2 className="sec-title">Built with real game development tools</h2>
          <p className="sec-sub">The same stack taught in the Game Development course — so playing the game also teaches you how it's built.</p>
          <div className="tech-grid">
            {TECH.map(t => (
              <div key={t.name} className="tech-card">
                <div className="tech-name">{t.name}</div>
                <div className="tech-role">{t.role}</div>
              </div>
            ))}
          </div>
        </section>
        <div className="bottom">
          <h2>Enter the 3D quest — free, browser-based</h2>
          <p>No download, no install. Opens in your browser. Works on desktop and tablet.</p>
          <div className="cta-row">
            <a href="https://gaming.seekhowithrua.com/hatim" className="btn-p" target="_blank" rel="noopener noreferrer">Launch HatimAI Quest →</a>
            <Link href="/animation-lab" className="btn-o">See Animation Lab →</Link>
          </div>
        </div>
      </main>
    </>
  );
}