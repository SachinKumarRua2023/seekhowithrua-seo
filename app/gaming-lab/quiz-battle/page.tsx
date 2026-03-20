// ═══════════════════════════════════════════════════════════════
// REPO FILE:  seekhowithrua-seo/app/gaming-lab/quiz-battle/page.tsx
// LIVE URL:   https://seekhowithrua.com/gaming-lab/quiz-battle
// ACTION:     Create this file (new folder + new file — never existed before)
// ═══════════════════════════════════════════════════════════════

import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Free Fire Style Quiz Battle Game — Multiplayer MCQ for Students | SeekhoWithRua",
  description: "Multiplayer quiz battle game for school, college & IT students. Free Fire style MCQ battles — your quiz score is your armor. Compete in coding, ML, science & maths. Free online India.",
  keywords: "quiz battle game online India, multiplayer quiz game students, free fire style quiz game, MCQ battle game school, competitive quiz game India, online quiz fight game, exam prep battle game, 2D quiz game for learning, Phaser.js educational game, quiz competition online free, study battle game India, coding quiz battle, science quiz battle online, maths quiz game India, IT exam quiz game",
  openGraph: {
    title: "Free Fire Quiz Battle — Multiplayer MCQ Game | SeekhoWithRua",
    description: "Your quiz score = your armor. Beat opponents with knowledge. Free for all students.",
    url: "https://seekhowithrua.com/gaming-lab/quiz-battle",
    siteName: "SeekhoWithRua",
    type: "website",
  },
  alternates: { canonical: "https://seekhowithrua.com/gaming-lab/quiz-battle" },
};

const SUBJECTS = [
  { name: "AI & Machine Learning", color: "#00d4ff", qs: "500+ questions" },
  { name: "Data Science & Python", color: "#7c3aed", qs: "400+ questions" },
  { name: "Full Stack Dev", color: "#1D9E75", qs: "350+ questions" },
  { name: "Mathematics", color: "#f59e0b", qs: "300+ questions" },
  { name: "Science (Physics/Chem/Bio)", color: "#ec4899", qs: "400+ questions" },
  { name: "IoT & Robotics", color: "#06b6d4", qs: "200+ questions" },
  { name: "Web Development", color: "#84cc16", qs: "250+ questions" },
  { name: "Game Development", color: "#a855f7", qs: "180+ questions" },
];

const HOW_IT_WORKS = [
  { step: "01", title: "Join a battle room", body: "Pick a subject or go random. Open rooms fill up instantly during peak hours." },
  { step: "02", title: "Your score = your armor", body: "Before each battle, your current quiz score determines your starting armor strength." },
  { step: "03", title: "Answer fast, hit hard", body: "Correct answers deal damage. Wrong answers reduce your own armor. Speed and accuracy both matter." },
  { step: "04", title: "Last player standing wins", body: "Rank up on the leaderboard. Challenge players at your level or go for the top." },
];

export default function QuizBattlePage() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap');
        :root{--c:#f59e0b;--fg:#1a1a2e;--fg2:#5a5a72;--bg:#fafaf8;--card:#fff;--border:rgba(0,0,0,.08);--font:'Syne',sans-serif;--mono:'JetBrains Mono',monospace}
        @media(prefers-color-scheme:dark){:root{--fg:#e8e8f0;--fg2:#9090a8;--bg:#0f0f1a;--card:#181828;--border:rgba(255,255,255,.08)}}
        .p *{box-sizing:border-box;margin:0;padding:0}
        .p{font-family:var(--font);background:var(--bg);color:var(--fg);line-height:1.6}
        .hero{padding:72px 24px 56px;text-align:center;position:relative;overflow:hidden}
        .hero::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse 60% 40% at 50% 0%,rgba(245,158,11,.1) 0%,transparent 70%);pointer-events:none}
        .breadcrumb{font-family:var(--mono);font-size:11px;color:var(--fg2);margin-bottom:20px;display:flex;gap:6px;justify-content:center;align-items:center}
        .breadcrumb a{color:var(--fg2);text-decoration:none}.breadcrumb a:hover{color:var(--fg)}
        .h1{font-size:clamp(1.9rem,4.5vw,3.4rem);font-weight:800;line-height:1.1;letter-spacing:-.03em;margin:0 auto 16px;max-width:740px}
        .h1 span{color:#b45309}
        @media(prefers-color-scheme:dark){.h1 span{color:#f59e0b}}
        .sub{font-size:clamp(.95rem,2vw,1.1rem);color:var(--fg2);max-width:540px;margin:0 auto 30px;line-height:1.7}
        .cta-row{display:flex;gap:12px;justify-content:center;flex-wrap:wrap}
        .btn-p{display:inline-flex;align-items:center;gap:8px;background:#b45309;color:#fff;font-family:var(--font);font-weight:700;font-size:15px;padding:13px 28px;border-radius:10px;text-decoration:none;transition:opacity .15s,transform .15s}
        .btn-p:hover{opacity:.88;transform:translateY(-1px)}
        @media(prefers-color-scheme:dark){.btn-p{background:#f59e0b;color:#1a0a00}}
        .btn-o{display:inline-flex;align-items:center;gap:8px;background:var(--card);color:var(--fg);font-family:var(--font);font-weight:600;font-size:15px;padding:13px 28px;border-radius:10px;text-decoration:none;border:1px solid var(--border);transition:opacity .15s,transform .15s}
        .btn-o:hover{opacity:.8;transform:translateY(-1px)}
        .sec{max-width:1080px;margin:0 auto;padding:52px 24px}
        .sec-label{font-family:var(--mono);font-size:11px;letter-spacing:.1em;color:#b45309;text-transform:uppercase;margin-bottom:8px}
        @media(prefers-color-scheme:dark){.sec-label{color:#f59e0b}}
        .sec-title{font-size:clamp(1.4rem,3vw,2rem);font-weight:800;letter-spacing:-.03em;margin-bottom:6px}
        .sec-sub{font-size:.95rem;color:var(--fg2);max-width:520px;margin-bottom:32px;line-height:1.7}
        .divider{height:1px;background:var(--border);max-width:1080px;margin:0 auto}
        .subj-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:12px}
        .subj-card{background:var(--card);border:1px solid var(--border);border-radius:12px;padding:16px 18px;display:flex;justify-content:space-between;align-items:center}
        .subj-name{font-size:.9rem;font-weight:600}
        .subj-qs{font-family:var(--mono);font-size:10px;color:var(--fg2)}
        .steps{display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:14px}
        .step-card{background:var(--card);border:1px solid var(--border);border-radius:12px;padding:20px}
        .step-num{font-family:var(--mono);font-size:11px;letter-spacing:.06em;color:#b45309;margin-bottom:8px;display:block}
        @media(prefers-color-scheme:dark){.step-num{color:#f59e0b}}
        .step-title{font-size:.95rem;font-weight:700;margin-bottom:5px}
        .step-body{font-size:.85rem;color:var(--fg2);line-height:1.6}
        .bottom{text-align:center;padding:64px 24px;background:var(--card);border-top:1px solid var(--border)}
        .bottom h2{font-size:clamp(1.4rem,3vw,2rem);font-weight:800;letter-spacing:-.03em;margin-bottom:12px}
        .bottom p{font-size:.95rem;color:var(--fg2);max-width:440px;margin:0 auto 28px;line-height:1.7}
        .back{font-family:var(--mono);font-size:11px;color:var(--fg2);padding:20px 24px;display:block;max-width:1080px;margin:0 auto}
        .back a{color:var(--fg2);text-decoration:none}.back a:hover{color:var(--fg)}
      `}</style>
      <main className="p">
        <div className="back"><Link href="/gaming-lab">← Back to Gaming Lab</Link></div>
        <section className="hero">
          <div className="breadcrumb"><Link href="/gaming-lab">Gaming Lab</Link> / Free Fire Quiz Battle</div>
          <h1 className="h1">Quiz battle where your <span>knowledge</span> is your weapon</h1>
          <p className="sub">Free Fire style multiplayer MCQ battles. Your quiz score = your armor strength. Answer correctly to attack, answer wrong to take damage. The smartest player wins.</p>
          <div className="cta-row">
            <a href="https://gaming.seekhowithrua.com/quiz-battle" className="btn-p" target="_blank" rel="noopener noreferrer">Enter Battle Zone →</a>
            <Link href="/gaming-lab/memory-game" className="btn-o">Try Memory Game</Link>
          </div>
        </section>
        <div className="divider" />
        <section className="sec">
          <p className="sec-label">How it works</p>
          <h2 className="sec-title">Four steps to academic domination</h2>
          <p className="sec-sub">From joining a room to climbing the leaderboard — this is how the battle works.</p>
          <div className="steps">
            {HOW_IT_WORKS.map(h => (
              <div key={h.step} className="step-card">
                <span className="step-num">STEP {h.step}</span>
                <h3 className="step-title">{h.title}</h3>
                <p className="step-body">{h.body}</p>
              </div>
            ))}
          </div>
        </section>
        <div className="divider" />
        <section className="sec">
          <p className="sec-label">Subject coverage</p>
          <h2 className="sec-title">Battle across every subject</h2>
          <p className="sec-sub">Questions span all 8 courses on the platform. Random mode pulls from everything — just like a real competitive exam.</p>
          <div className="subj-grid">
            {SUBJECTS.map(s => (
              <div key={s.name} className="subj-card" style={{ borderLeftColor: s.color, borderLeftWidth: 3 }}>
                <span className="subj-name">{s.name}</span>
                <span className="subj-qs">{s.qs}</span>
              </div>
            ))}
          </div>
        </section>
        <div className="bottom">
          <h2>Join a battle now — it's free</h2>
          <p>No account needed to spectate. Create a free account to participate and track your ranking.</p>
          <div className="cta-row">
            <a href="https://gaming.seekhowithrua.com/quiz-battle" className="btn-p" target="_blank" rel="noopener noreferrer">Start Battle →</a>
            <Link href="/gaming-lab/hatim-quest" className="btn-o">Try HatimAI Quest →</Link>
          </div>
        </div>
      </main>
    </>
  );
}