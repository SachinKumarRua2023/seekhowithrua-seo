// ═══════════════════════════════════════════════════════════════
// REPO FILE:  seekhowithrua-seo/app/services/game-development/page.tsx
// LIVE URL:   https://seekhowithrua.com/services/game-development
// ACTION:     Create this file (new folder + new file — never existed before)
// ═══════════════════════════════════════════════════════════════

import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Game Development Services India — Hire Master Rua | SeekhoWithRua",
  description: "Professional Game Development services by Master Rua (Sachin Kumar). Three. India & global clients. WhatsApp for fast response.",
  keywords: "game development company India, hire Unity game developer India, browser game development India, Three.js Babylon.js developer, educational game development, WebGL game development India, 2D 3D game developer hire, Phaser.js game developer India, mobile game developer India, game development services India",
  openGraph: {
    title: "Game Development Services India | SeekhoWithRua",
    description: "Three. WhatsApp 8826776018 for a quote.",
    url: "https://seekhowithrua.com/services/game-development",
    siteName: "SeekhoWithRua",
    type: "website",
  },
  alternates: { canonical: "https://seekhowithrua.com/services/game-development" },
};

const DELIVERABLES = [
  {
    "name": "Browser 3D game",
    "desc": "Three.js + Cannon.js physics. Runs in any modern browser, no install. Ideal for educational platforms and product demos."
  },
  {
    "name": "Free Fire style battle game",
    "desc": "Babylon.js multiplayer game with real-time state sync. WebSocket-backed, leaderboards, user auth."
  },
  {
    "name": "2D quiz and puzzle game",
    "desc": "Phaser.js. Fast, mobile-friendly. Ideal for learning apps, MCQ battles, and engagement features."
  },
  {
    "name": "Unity WebGL game",
    "desc": "Exported as WebGL build. Embed in any website. Full 3D game experience in browser."
  },
  {
    "name": "Mobile game (iOS & Android)",
    "desc": "React Native game screens or Unity build deployed to Play Store and App Store."
  }
];
const TECH = ["Three.js", "Cannon.js", "Babylon.js", "Phaser.js", "Unity", "WebGL", "WebSocket", "Django"];

export default function ServicePage() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap');
        :root{--c:#f59e0b;--fg:#1a1a2e;--fg2:#5a5a72;--bg:#fafaf8;--card:#fff;--border:rgba(0,0,0,.08);--font:'Syne',sans-serif;--mono:'JetBrains Mono',monospace}
        @media(prefers-color-scheme:dark){:root{--fg:#e8e8f0;--fg2:#9090a8;--bg:#0f0f1a;--card:#181828;--border:rgba(255,255,255,.08)}}
        .p *{box-sizing:border-box;margin:0;padding:0}
        .p{font-family:var(--font);background:var(--bg);color:var(--fg);line-height:1.6}
        .hero{padding:72px 24px 56px;text-align:center;position:relative;overflow:hidden}
        .hero::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse 60% 40% at 50% 0%,color-mix(in srgb,#f59e0b 12%,transparent) 0%,transparent 70%);pointer-events:none}
        .breadcrumb{font-family:var(--mono);font-size:11px;color:var(--fg2);margin-bottom:20px;display:flex;gap:6px;justify-content:center;align-items:center}
        .breadcrumb a{color:var(--fg2);text-decoration:none}.breadcrumb a:hover{color:var(--fg)}
        .h1{font-size:clamp(1.9rem,4.5vw,3.4rem);font-weight:800;line-height:1.1;letter-spacing:-.03em;margin:0 auto 16px;max-width:740px}
        .accent{color:var(--c)}
        .sub{font-size:clamp(.95rem,2vw,1.1rem);color:var(--fg2);max-width:560px;margin:0 auto 30px;line-height:1.7}
        .cta-row{display:flex;gap:12px;justify-content:center;flex-wrap:wrap}
        .btn-wa{display:inline-flex;align-items:center;gap:8px;background:#22c55e;color:#fff;font-family:var(--font);font-weight:700;font-size:15px;padding:13px 28px;border-radius:10px;text-decoration:none;transition:opacity .15s,transform .15s}
        .btn-wa:hover{opacity:.88;transform:translateY(-1px)}
        .btn-o{display:inline-flex;align-items:center;gap:8px;background:var(--card);color:var(--fg);font-family:var(--font);font-weight:600;font-size:15px;padding:13px 28px;border-radius:10px;text-decoration:none;border:1px solid var(--border);transition:opacity .15s,transform .15s}
        .btn-o:hover{opacity:.8;transform:translateY(-1px)}
        .sec{max-width:1080px;margin:0 auto;padding:52px 24px}
        .sec-label{font-family:var(--mono);font-size:11px;letter-spacing:.1em;color:var(--c);text-transform:uppercase;margin-bottom:8px}
        .sec-title{font-size:clamp(1.4rem,3vw,2rem);font-weight:800;letter-spacing:-.03em;margin-bottom:6px}
        .sec-sub{font-size:.95rem;color:var(--fg2);max-width:520px;margin-bottom:32px;line-height:1.7}
        .divider{height:1px;background:var(--border);max-width:1080px;margin:0 auto}
        .del-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:14px}
        .del-card{background:var(--card);border:1px solid var(--border);border-radius:12px;padding:22px;border-left:3px solid var(--c)}
        .del-title{font-size:.95rem;font-weight:700;margin-bottom:6px}
        .del-desc{font-size:.85rem;color:var(--fg2);line-height:1.6}
        .tech-wrap{display:flex;flex-wrap:wrap;gap:8px}
        .tech-pill{font-family:var(--mono);font-size:11px;padding:4px 10px;border-radius:6px;border:1px solid var(--border);color:var(--fg2);background:var(--card)}
        .contact-box{background:var(--card);border:1px solid var(--border);border-radius:14px;padding:32px;text-align:center}
        .contact-title{font-size:1.1rem;font-weight:700;margin-bottom:8px}
        .contact-sub{font-size:.9rem;color:var(--fg2);margin-bottom:20px;line-height:1.6}
        .back{font-family:var(--mono);font-size:11px;color:var(--fg2);padding:20px 24px;display:block;max-width:1080px;margin:0 auto}
        .back a{color:var(--fg2);text-decoration:none}.back a:hover{color:var(--fg)}
      `}</style>
      <main className="p">
        <div className="back"><Link href="/services">← Back to Services</Link></div>
        <section className="hero">
          <div className="breadcrumb"><Link href="/services">Services</Link> / Game Development</div>
          <h1 className="h1">Game development — <span className="accent">browser, mobile & 3D games</span></h1>
          <p className="sub">Three.js, Babylon.js, Unity, Phaser.js, and WebGL. Browser-based or native mobile. Educational games, product demos, or entertainment.</p>
          <div className="cta-row">
            <a href="https://wa.me/918826776018?text=Hi%20Master%20Rua%2C%20I%20need%20game%20development%20services" className="btn-wa" target="_blank" rel="noopener noreferrer">WhatsApp for Quote →</a>
            <a href="https://services.seekhowithrua.com" className="btn-o" target="_blank" rel="noopener noreferrer">Full Services Site</a>
          </div>
        </section>
        <div className="divider" />
        <section className="sec">
          <p className="sec-label">What you get</p>
          <h2 className="sec-title">Deliverables</h2>
          <p className="sec-sub">Every project is scoped clearly before work starts. Here are the typical deliverables for Game Development.</p>
          <div className="del-grid">
            {DELIVERABLES.map(d => (
              <div key={d.name} className="del-card">
                <h3 className="del-title">{d.name}</h3>
                <p className="del-desc">{d.desc}</p>
              </div>
            ))}
          </div>
        </section>
        <div className="divider" />
        <section className="sec">
          <p className="sec-label">Tech stack</p>
          <h2 className="sec-title">Technologies used</h2>
          <p className="sec-sub">Production-tested. The same stack used to build SeekhoWithRua — deployed for real users.</p>
          <div className="tech-wrap">
            {TECH.map(t => <span key={t} className="tech-pill">{t}</span>)}
          </div>
        </section>
        <div className="divider" />
        <section className="sec">
          <div className="contact-box">
            <h2 className="contact-title">Ready to start your Game Development project?</h2>
            <p className="contact-sub">WhatsApp Master Rua directly. Describe what you need and get a timeline and quote within 24 hours.</p>
            <div className="cta-row">
              <a href="https://wa.me/918826776018?text=Hi%20Master%20Rua%2C%20I%20need%20game%20development%20services" className="btn-wa" target="_blank" rel="noopener noreferrer">WhatsApp 8826776018 →</a>
              <Link href="/services" className="btn-o">See All Services</Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}