// ═══════════════════════════════════════════════════════════════
// REPO FILE:  seekhowithrua-seo/app/gaming-lab/memory-game/page.tsx
// LIVE URL:   https://seekhowithrua.com/gaming-lab/memory-game
// ACTION:     Create this file (new folder + new file — never existed before)
// ═══════════════════════════════════════════════════════════════

import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Memory Enhancement Game — Brain Training, Number & Word Memory | SeekhoWithRua",
  description: "Free online memory game using WMSC techniques. Memorise 400 numbers and word lists in 21 days. Memory champion arena with leaderboards for school, college & IT students India.",
  keywords: "memory enhancement game online, memory game for students India, improve memory game free, WMSC memory technique game, brain training game India, number memory game online, word memory challenge game, memory champion arena, memory palace game online, memorize 400 numbers game, memory game school students, online brain training free, spaced repetition game India, memory competition online, free memory training app",
  openGraph: {
    title: "Memory Enhancement Game — Free Brain Training | SeekhoWithRua",
    description: "WMSC memory techniques gamified. Memorise 400 numbers in 21 days. Free for all students.",
    url: "https://seekhowithrua.com/gaming-lab/memory-game",
    siteName: "SeekhoWithRua",
    type: "website",
  },
  alternates: { canonical: "https://seekhowithrua.com/gaming-lab/memory-game" },
};

const TECHNIQUES = [
  { name: "Major system", desc: "Convert numbers to sounds, then to vivid images. Never forget a phone number or date again.", icon: "01" },
  { name: "Memory palace", desc: "Place information spatially in a familiar location. Walk through it mentally to recall perfectly.", icon: "◻" },
  { name: "PAO system", desc: "Person–Action–Object encoding. Compress 6 digits into one vivid mental scene.", icon: "◈" },
  { name: "Chunking", desc: "Break long sequences into meaningful groups. Doubles effective working memory capacity.", icon: "⊞" },
  { name: "Spaced repetition", desc: "AI schedules reviews at Ebbinghaus-optimal intervals. Knowledge stays permanent.", icon: "↻" },
  { name: "Visual story", desc: "Chain images into a story. Recall the story, recall the sequence. Works for word lists.", icon: "◎" },
];

const CHALLENGES = [
  { title: "Number sprint", desc: "Memorise a 20-digit sequence in 60 seconds. Climb the leaderboard.", level: "Beginner" },
  { title: "Word avalanche", desc: "100 random words. 5 minutes to memorise. How many can you recall?", level: "Intermediate" },
  { title: "400 number challenge", desc: "The master challenge. 400 numbers, 21 days of training. This is what Master Rua teaches in schools.", level: "Advanced" },
  { title: "Binary sequence", desc: "Pure 0s and 1s. Advanced competitors use this for mental speed training.", level: "Expert" },
];

export default function MemoryGamePage() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap');
        :root{--c:#00d4ff;--fg:#1a1a2e;--fg2:#5a5a72;--bg:#fafaf8;--card:#ffffff;--border:rgba(0,0,0,0.08);--font:'Syne',sans-serif;--mono:'JetBrains Mono',monospace}
        @media(prefers-color-scheme:dark){:root{--fg:#e8e8f0;--fg2:#9090a8;--bg:#0f0f1a;--card:#181828;--border:rgba(255,255,255,0.08)}}
        .p *{box-sizing:border-box;margin:0;padding:0}
        .p{font-family:var(--font);background:var(--bg);color:var(--fg);line-height:1.6}
        .hero{padding:72px 24px 56px;text-align:center;position:relative;overflow:hidden}
        .hero::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse 60% 40% at 50% 0%,rgba(0,212,255,0.1) 0%,transparent 70%);pointer-events:none}
        .breadcrumb{font-family:var(--mono);font-size:11px;color:var(--fg2);margin-bottom:20px;display:flex;gap:6px;justify-content:center;align-items:center}
        .breadcrumb a{color:var(--fg2);text-decoration:none}
        .breadcrumb a:hover{color:var(--fg)}
        .h1{font-size:clamp(1.9rem,4.5vw,3.4rem);font-weight:800;line-height:1.1;letter-spacing:-.03em;margin:0 auto 16px;max-width:720px}
        .h1 span{color:#0891b2}
        @media(prefers-color-scheme:dark){.h1 span{color:#00d4ff}}
        .sub{font-size:clamp(.95rem,2vw,1.1rem);color:var(--fg2);max-width:540px;margin:0 auto 30px;line-height:1.7}
        .proof{display:inline-block;background:rgba(0,212,255,0.08);border:1px solid rgba(0,212,255,0.2);border-radius:10px;padding:10px 18px;font-family:var(--mono);font-size:12px;color:#0e7490;margin-bottom:28px}
        @media(prefers-color-scheme:dark){.proof{color:#67e8f9}}
        .cta-row{display:flex;gap:12px;justify-content:center;flex-wrap:wrap}
        .btn-p{display:inline-flex;align-items:center;gap:8px;background:#0891b2;color:#fff;font-family:var(--font);font-weight:700;font-size:15px;padding:13px 28px;border-radius:10px;text-decoration:none;transition:opacity .15s,transform .15s}
        .btn-p:hover{opacity:.88;transform:translateY(-1px)}
        @media(prefers-color-scheme:dark){.btn-p{background:#00d4ff;color:#001a1f}}
        .btn-o{display:inline-flex;align-items:center;gap:8px;background:var(--card);color:var(--fg);font-family:var(--font);font-weight:600;font-size:15px;padding:13px 28px;border-radius:10px;text-decoration:none;border:1px solid var(--border);transition:opacity .15s,transform .15s}
        .btn-o:hover{opacity:.8;transform:translateY(-1px)}
        .sec{max-width:1080px;margin:0 auto;padding:52px 24px}
        .sec-label{font-family:var(--mono);font-size:11px;letter-spacing:.1em;color:#0891b2;text-transform:uppercase;margin-bottom:8px}
        @media(prefers-color-scheme:dark){.sec-label{color:#00d4ff}}
        .sec-title{font-size:clamp(1.4rem,3vw,2rem);font-weight:800;letter-spacing:-.03em;margin-bottom:6px}
        .sec-sub{font-size:.95rem;color:var(--fg2);max-width:520px;margin-bottom:32px;line-height:1.7}
        .divider{height:1px;background:var(--border);max-width:1080px;margin:0 auto}
        .tech-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:14px}
        .tech-card{background:var(--card);border:1px solid var(--border);border-radius:12px;padding:20px;display:flex;gap:14px}
        .tech-icon{font-family:var(--mono);font-size:18px;font-weight:500;color:#0891b2;flex-shrink:0;width:32px;text-align:center;margin-top:2px}
        @media(prefers-color-scheme:dark){.tech-icon{color:#00d4ff}}
        .tech-name{font-size:.95rem;font-weight:700;margin-bottom:4px}
        .tech-desc{font-size:.85rem;color:var(--fg2);line-height:1.6}
        .chal-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(240px,1fr));gap:14px}
        .chal-card{background:var(--card);border:1px solid var(--border);border-radius:12px;padding:20px}
        .chal-level{font-family:var(--mono);font-size:10px;letter-spacing:.06em;color:#0891b2;margin-bottom:8px;display:block}
        @media(prefers-color-scheme:dark){.chal-level{color:#67e8f9}}
        .chal-title{font-size:.95rem;font-weight:700;margin-bottom:5px}
        .chal-desc{font-size:.85rem;color:var(--fg2);line-height:1.6}
        .bottom{text-align:center;padding:64px 24px;background:var(--card);border-top:1px solid var(--border)}
        .bottom h2{font-size:clamp(1.4rem,3vw,2rem);font-weight:800;letter-spacing:-.03em;margin-bottom:12px}
        .bottom p{font-size:.95rem;color:var(--fg2);max-width:440px;margin:0 auto 28px;line-height:1.7}
        .back{font-family:var(--mono);font-size:11px;color:var(--fg2);padding:20px 24px;display:block;max-width:1080px;margin:0 auto}
        .back a{color:var(--fg2);text-decoration:none}
        .back a:hover{color:var(--fg)}
      `}</style>
      <main className="p">
        <div className="back"><Link href="/gaming-lab">← Back to Gaming Lab</Link></div>
        <section className="hero">
          <div className="breadcrumb"><Link href="/gaming-lab">Gaming Lab</Link> / Memory Champion Arena</div>
          <h1 className="h1">The <span>memory game</span> that actually works</h1>
          <p className="sub">WMSC techniques used by world memory champions — gamified and free. Students who couldn't recall 20 words were memorising 400 numbers after 21 days of training.</p>
          <div className="proof">Ground proof — tested in 10–15 schools across India by Master Rua</div>
          <div className="cta-row">
            <a href="https://gaming.seekhowithrua.com/memory" className="btn-p" target="_blank" rel="noopener noreferrer">Play Memory Game Free →</a>
            <Link href="/gaming-lab" className="btn-o">All Games</Link>
          </div>
        </section>
        <div className="divider" />
        <section className="sec">
          <p className="sec-label">Memory techniques</p>
          <h2 className="sec-title">6 techniques built into the game</h2>
          <p className="sec-sub">Each game mode teaches and drills a specific memory technique. You're not just playing — you're building a permanent cognitive skill.</p>
          <div className="tech-grid">
            {TECHNIQUES.map(t => (
              <div key={t.name} className="tech-card">
                <span className="tech-icon">{t.icon}</span>
                <div><div className="tech-name">{t.name}</div><div className="tech-desc">{t.desc}</div></div>
              </div>
            ))}
          </div>
        </section>
        <div className="divider" />
        <section className="sec">
          <p className="sec-label">Challenges</p>
          <h2 className="sec-title">Four levels of memory challenge</h2>
          <p className="sec-sub">Start with number sprint. Climb to the 400 number master challenge that Master Rua uses in school training sessions.</p>
          <div className="chal-grid">
            {CHALLENGES.map(c => (
              <div key={c.title} className="chal-card">
                <span className="chal-level">{c.level}</span>
                <h3 className="chal-title">{c.title}</h3>
                <p className="chal-desc">{c.desc}</p>
              </div>
            ))}
          </div>
        </section>
        <div className="bottom">
          <h2>Start your memory training today</h2>
          <p>Free, no sign-up needed. Open the game and start your first challenge in under 30 seconds.</p>
          <div className="cta-row">
            <a href="https://gaming.seekhowithrua.com/memory" className="btn-p" target="_blank" rel="noopener noreferrer">Open Memory Arena →</a>
            <Link href="/gaming-lab/quiz-battle" className="btn-o">Try Quiz Battle →</Link>
          </div>
        </div>
      </main>
    </>
  );
}