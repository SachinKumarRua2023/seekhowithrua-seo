// ═══════════════════════════════════════════════════════════════
// REPO FILE:  seekhowithrua-seo/app/services/mobile-app-development/page.tsx
// LIVE URL:   https://seekhowithrua.com/services/mobile-app-development
// ACTION:     Create this file (new folder + new file — never existed before)
// ═══════════════════════════════════════════════════════════════

import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mobile App Development Services India — Hire Master Rua | SeekhoWithRua",
  description: "Professional Mobile App Development services by Master Rua (Sachin Kumar). Cross-platform iOS and Android apps built with React Native and Expo. India & global clients. WhatsApp for fast response.",
  keywords: "React Native developer India, Expo mobile app developer, iOS Android app development India, mobile app developer hire India, React Native app development services, hire mobile developer India, cross platform app development India, Expo app deployment India, mobile app startup India, React Native freelancer India",
  openGraph: {
    title: "Mobile App Development Services India | SeekhoWithRua",
    description: "Cross-platform iOS and Android apps built with React Native and Expo. WhatsApp 8826776018 for a quote.",
    url: "https://seekhowithrua.com/services/mobile-app-development",
    siteName: "SeekhoWithRua",
    type: "website",
  },
  alternates: { canonical: "https://seekhowithrua.com/services/mobile-app-development" },
};

const DELIVERABLES = [
  {
    "name": "Cross-platform mobile app",
    "desc": "Single React Native codebase runs on iOS and Android. Expo-managed for fast builds and OTA updates."
  },
  {
    "name": "Learning & EdTech app",
    "desc": "Course viewer, quiz engine, progress tracking, leaderboards, push notifications, and offline mode."
  },
  {
    "name": "Social / community app",
    "desc": "Profiles, feeds, real-time messaging, voice rooms, follower system \u2014 full social architecture."
  },
  {
    "name": "Play Store & App Store deployment",
    "desc": "Full submission, store listing, screenshots, ASO, and version management for both platforms."
  },
  {
    "name": "React Native + Django backend",
    "desc": "Mobile app backed by a Django REST API. Auth, user data, media uploads, and admin panel included."
  }
];
const TECH = ["React Native", "Expo", "TypeScript", "React Navigation", "Zustand", "Django", "PostgreSQL", "Firebase"];

export default function ServicePage() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap');
        :root{--c:#a855f7;--fg:#1a1a2e;--fg2:#5a5a72;--bg:#fafaf8;--card:#fff;--border:rgba(0,0,0,.08);--font:'Syne',sans-serif;--mono:'JetBrains Mono',monospace}
        @media(prefers-color-scheme:dark){:root{--fg:#e8e8f0;--fg2:#9090a8;--bg:#0f0f1a;--card:#181828;--border:rgba(255,255,255,.08)}}
        .p *{box-sizing:border-box;margin:0;padding:0}
        .p{font-family:var(--font);background:var(--bg);color:var(--fg);line-height:1.6}
        .hero{padding:72px 24px 56px;text-align:center;position:relative;overflow:hidden}
        .hero::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse 60% 40% at 50% 0%,color-mix(in srgb,#a855f7 12%,transparent) 0%,transparent 70%);pointer-events:none}
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
          <div className="breadcrumb"><Link href="/services">Services</Link> / Mobile App Development</div>
          <h1 className="h1">Mobile app development — <span className="accent">iOS & Android with React Native</span></h1>
          <p className="sub">Cross-platform iOS and Android apps built with React Native and Expo. From wireframe to Play Store and App Store deployment.</p>
          <div className="cta-row">
            <a href="https://wa.me/918826776018?text=Hi%20Master%20Rua%2C%20I%20need%20mobile%20app%20development%20services" className="btn-wa" target="_blank" rel="noopener noreferrer">WhatsApp for Quote →</a>
            <a href="https://services.seekhowithrua.com" className="btn-o" target="_blank" rel="noopener noreferrer">Full Services Site</a>
          </div>
        </section>
        <div className="divider" />
        <section className="sec">
          <p className="sec-label">What you get</p>
          <h2 className="sec-title">Deliverables</h2>
          <p className="sec-sub">Every project is scoped clearly before work starts. Here are the typical deliverables for Mobile App Development.</p>
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
            <h2 className="contact-title">Ready to start your Mobile App Development project?</h2>
            <p className="contact-sub">WhatsApp Master Rua directly. Describe what you need and get a timeline and quote within 24 hours.</p>
            <div className="cta-row">
              <a href="https://wa.me/918826776018?text=Hi%20Master%20Rua%2C%20I%20need%20mobile%20app%20development%20services" className="btn-wa" target="_blank" rel="noopener noreferrer">WhatsApp 8826776018 →</a>
              <Link href="/services" className="btn-o">See All Services</Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}