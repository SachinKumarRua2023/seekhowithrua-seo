// ═══════════════════════════════════════════════════════════════
// REPO FILE:  seekhowithrua-seo/app/gaming-lab/page.tsx
// LIVE URL:   https://seekhowithrua.com/gaming-lab
// ACTION:     Create this file (new folder + new file — never existed before)
// ═══════════════════════════════════════════════════════════════

import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Gaming Lab — Free Fire Style Study Game, Memory & Quiz Battle | SeekhoWithRua",
  description: "Play free educational games online — Free Fire style quiz battles, 3D HatimAI quest, and memory enhancement arena. Gamified learning platform for school, college & IT students India.",
  keywords: "gamified learning platform India, educational game for students, free fire style study game, browser game for learning, 3D learning game online, HatimAI game, quiz battle game students, game based learning India, study game school college, IT learning game online, coding game for students, game to study for exam India, online study game free, multiplayer quiz game India, memory game for students, 2D quiz game learning, Phaser.js educational game, Three.js game students, Babylon.js game India, WebGL game education, free game for exam preparation, competitive study game",
  openGraph: {
    title: "Gaming Lab — Free Fire Style Study Games | SeekhoWithRua",
    description: "Gamified learning with 3D quest, quiz battles & memory arena. Free for all students.",
    url: "https://seekhowithrua.com/gaming-lab",
    siteName: "SeekhoWithRua",
    type: "website",
  },
  alternates: { canonical: "https://seekhowithrua.com/gaming-lab" },
};

const GAME_MODES = [
  {
    slug: "memory-game",
    icon: "◎",
    color: "#00d4ff",
    bg: "rgba(0,212,255,0.08)",
    border: "rgba(0,212,255,0.25)",
    title: "Memory Champion Arena",
    sub: "2D · Free · WMSC Techniques",
    desc: "The same memory techniques trainers charge ₹1 lakh to teach — free. Memorise 400 numbers, word lists, and visual sequences. Leaderboards, timed challenges, and spaced repetition built in.",
    tags: ["memory enhancement", "number memory", "word memory", "brain training", "WMSC technique"],
    cta: "Play Memory Game",
  },
  {
    slug: "quiz-battle",
    icon: "⚔",
    color: "#f59e0b",
    bg: "rgba(245,158,11,0.08)",
    border: "rgba(245,158,11,0.25)",
    title: "Free Fire Quiz Battle",
    sub: "2D Multiplayer · MCQ · All Subjects",
    desc: "Full-syllabus MCQ battles. Random questions from any topic — coding, ML, science, maths. Timed, multiplayer. Your armor strength = your quiz score. Kill or be killed — academically.",
    tags: ["quiz battle", "MCQ game", "multiplayer quiz", "exam prep game", "free fire study"],
    cta: "Enter Battle Zone",
  },
  {
    slug: "hatim-quest",
    icon: "◈",
    color: "#a855f7",
    bg: "rgba(168,85,247,0.08)",
    border: "rgba(168,85,247,0.25)",
    title: "HatimAI 3D Quest",
    sub: "3D Story Mode · Three.js · AI Powered",
    desc: "Navigate a 3D dungeon where real coding, ML, and science problems block your path. Solve to progress. When you're stuck your brain works at its peak — that's when permanent encoding happens.",
    tags: ["3D learning game", "educational RPG", "coding adventure", "AI ML game", "Three.js game"],
    cta: "Start Quest",
  },
];

const STATS = [
  { num: "3", label: "Game modes" },
  { num: "Free", label: "Always free" },
  { num: "400+", label: "Memory records" },
  { num: "1000+", label: "Students playing" },
];

export default function GamingLabPage() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap');
        :root{--gl-accent:#f59e0b;--gl-fg:#1a1a2e;--gl-fg2:#5a5a72;--gl-bg:#fafaf8;--gl-card:#ffffff;--gl-border:rgba(0,0,0,0.08);--gl-r:16px;--gl-font:'Syne',sans-serif;--gl-mono:'JetBrains Mono',monospace}
        @media(prefers-color-scheme:dark){:root{--gl-fg:#e8e8f0;--gl-fg2:#9090a8;--gl-bg:#0f0f1a;--gl-card:#181828;--gl-border:rgba(255,255,255,0.08)}}
        .gl-page *{box-sizing:border-box;margin:0;padding:0}
        .gl-page{font-family:var(--gl-font);background:var(--gl-bg);color:var(--gl-fg);line-height:1.6}
        .gl-hero{padding:72px 24px 56px;text-align:center;position:relative;overflow:hidden}
        .gl-hero::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse 60% 40% at 50% 0%,rgba(245,158,11,0.1) 0%,transparent 70%);pointer-events:none}
        .gl-badge{display:inline-flex;align-items:center;gap:7px;background:rgba(245,158,11,0.1);color:#b45309;font-family:var(--gl-mono);font-size:11px;font-weight:500;letter-spacing:.08em;padding:5px 14px;border-radius:999px;border:1px solid rgba(245,158,11,0.3);margin-bottom:22px}
        @media(prefers-color-scheme:dark){.gl-badge{color:#fbbf24}}
        .gl-badge-dot{width:7px;height:7px;border-radius:50%;background:#22c55e;animation:glPulse 1.6s ease-in-out infinite}
        @keyframes glPulse{0%,100%{opacity:1;transform:scale(1)}50%{opacity:.5;transform:scale(.7)}}
        .gl-h1{font-size:clamp(2rem,5vw,3.6rem);font-weight:800;line-height:1.1;letter-spacing:-.03em;margin:0 auto 18px;max-width:760px}
        .gl-h1 span{color:#d97706}
        @media(prefers-color-scheme:dark){.gl-h1 span{color:#f59e0b}}
        .gl-sub{font-size:clamp(.95rem,2vw,1.1rem);color:var(--gl-fg2);max-width:560px;margin:0 auto 32px;line-height:1.7}
        .gl-stats{display:flex;flex-wrap:wrap;gap:24px;justify-content:center;margin-bottom:36px}
        .gl-stat{text-align:center}
        .gl-stat-num{font-size:1.6rem;font-weight:800;letter-spacing:-.03em;color:var(--gl-fg)}
        .gl-stat-label{font-family:var(--gl-mono);font-size:10px;color:var(--gl-fg2);letter-spacing:.06em;margin-top:2px}
        .gl-cta-row{display:flex;gap:12px;justify-content:center;flex-wrap:wrap}
        .gl-btn-primary{display:inline-flex;align-items:center;gap:8px;background:#d97706;color:#fff;font-family:var(--gl-font);font-weight:700;font-size:15px;padding:13px 28px;border-radius:10px;text-decoration:none;transition:opacity .15s,transform .15s}
        .gl-btn-primary:hover{opacity:.88;transform:translateY(-1px)}
        @media(prefers-color-scheme:dark){.gl-btn-primary{background:#f59e0b;color:#1a0a00}}
        .gl-btn-outline{display:inline-flex;align-items:center;gap:8px;background:var(--gl-card);color:var(--gl-fg);font-family:var(--gl-font);font-weight:600;font-size:15px;padding:13px 28px;border-radius:10px;text-decoration:none;border:1px solid var(--gl-border);transition:opacity .15s,transform .15s}
        .gl-btn-outline:hover{opacity:.8;transform:translateY(-1px)}
        .gl-section{max-width:1080px;margin:0 auto;padding:56px 24px}
        .gl-section-label{font-family:var(--gl-mono);font-size:11px;letter-spacing:.1em;color:#d97706;text-transform:uppercase;margin-bottom:8px}
        @media(prefers-color-scheme:dark){.gl-section-label{color:#f59e0b}}
        .gl-section-title{font-size:clamp(1.4rem,3vw,2rem);font-weight:800;letter-spacing:-.03em;margin-bottom:6px}
        .gl-section-sub{font-size:.95rem;color:var(--gl-fg2);max-width:520px;margin-bottom:36px;line-height:1.7}
        .gl-divider{height:1px;background:var(--gl-border);max-width:1080px;margin:0 auto}
        .gl-games-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:18px}
        .gl-game-card{background:var(--gl-card);border:1px solid var(--gl-border);border-radius:var(--gl-r);padding:26px;transition:transform .18s,box-shadow .18s;text-decoration:none;color:inherit;display:flex;flex-direction:column}
        .gl-game-card:hover{transform:translateY(-3px);box-shadow:0 8px 32px rgba(0,0,0,.08)}
        .gl-game-icon{font-size:24px;font-family:var(--gl-mono);font-weight:500;margin-bottom:14px;display:block}
        .gl-game-title{font-size:1.05rem;font-weight:700;letter-spacing:-.02em;margin-bottom:4px}
        .gl-game-sub{font-family:var(--gl-mono);font-size:10px;letter-spacing:.06em;margin-bottom:12px}
        .gl-game-desc{font-size:.9rem;color:var(--gl-fg2);line-height:1.65;margin-bottom:16px;flex:1}
        .gl-tags{display:flex;flex-wrap:wrap;gap:5px;margin-bottom:18px}
        .gl-tag{font-family:var(--gl-mono);font-size:10px;padding:2px 8px;border-radius:5px;border:1px solid var(--gl-border);color:var(--gl-fg2);background:var(--gl-bg)}
        .gl-game-cta{font-family:var(--gl-font);font-size:13px;font-weight:700;text-decoration:none;display:inline-flex;align-items:center;gap:6px;transition:gap .15s}
        .gl-game-card:hover .gl-game-cta{gap:10px}
        .gl-why-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(240px,1fr));gap:14px}
        .gl-why-card{background:var(--gl-card);border:1px solid var(--gl-border);border-radius:12px;padding:20px}
        .gl-why-title{font-size:.95rem;font-weight:700;margin-bottom:5px}
        .gl-why-body{font-size:.85rem;color:var(--gl-fg2);line-height:1.6}
        .gl-bottom{text-align:center;padding:64px 24px;background:var(--gl-card);border-top:1px solid var(--gl-border)}
        .gl-bottom h2{font-size:clamp(1.4rem,3vw,2.2rem);font-weight:800;letter-spacing:-.03em;margin-bottom:12px}
        .gl-bottom p{font-size:.95rem;color:var(--gl-fg2);max-width:460px;margin:0 auto 28px;line-height:1.7}
      `}</style>

      <main className="gl-page" itemScope itemType="https://schema.org/WebPage">
        <section className="gl-hero">
          <div className="gl-badge"><span className="gl-badge-dot" />Live games open</div>
          <h1 className="gl-h1">Learn by <span>playing</span> — not by reading</h1>
          <p className="gl-sub">Free Fire style quiz battles, 3D HatimAI quest, and memory championship arena. Real learning disguised as a game — for school, college, and IT students.</p>
          <div className="gl-stats">
            {STATS.map(s => (
              <div key={s.label} className="gl-stat">
                <div className="gl-stat-num">{s.num}</div>
                <div className="gl-stat-label">{s.label}</div>
              </div>
            ))}
          </div>
          <div className="gl-cta-row">
            <a href="https://gaming.seekhowithrua.com" className="gl-btn-primary" target="_blank" rel="noopener noreferrer">Play Now — Free →</a>
            <Link href="/courses" className="gl-btn-outline">Explore Courses</Link>
          </div>
        </section>

        <div className="gl-divider" />

        <section className="gl-section">
          <p className="gl-section-label">Game modes</p>
          <h2 className="gl-section-title">Three ways to make learning stick</h2>
          <p className="gl-section-sub">Each game mode targets a different learning mechanism — memory encoding, competitive recall, or problem-solving under pressure.</p>
          <div className="gl-games-grid">
            {GAME_MODES.map(g => (
              <Link key={g.slug} href={`/gaming-lab/${g.slug}`} className="gl-game-card" style={{ borderTopColor: g.color, borderTopWidth: 2 }}>
                <span className="gl-game-icon" style={{ color: g.color }}>{g.icon}</span>
                <h3 className="gl-game-title">{g.title}</h3>
                <p className="gl-game-sub" style={{ color: g.color }}>{g.sub}</p>
                <p className="gl-game-desc">{g.desc}</p>
                <div className="gl-tags">{g.tags.map(t => <span key={t} className="gl-tag">{t}</span>)}</div>
                <span className="gl-game-cta" style={{ color: g.color }}>{g.cta} →</span>
              </Link>
            ))}
          </div>
        </section>

        <div className="gl-divider" />

        <section className="gl-section">
          <p className="gl-section-label">Why games work</p>
          <h2 className="gl-section-title">The Hatim model of learning</h2>
          <p className="gl-section-sub">Just as Hatim solved 7 questions through struggle, students who are stuck in a game have their brains working at peak encoding capacity.</p>
          <div className="gl-why-grid">
            {[
              { title: "Stuck = learning", body: "When you're blocked by a problem in a game, your brain activates full problem-solving mode. Solutions encoded this way are remembered for years, not hours." },
              { title: "Score = armor", body: "In quiz battles, your armor strength equals your quiz score. Better scores = more protection = you dominate opponents. Learning has direct consequences." },
              { title: "Memory science", body: "Memory Champion Arena uses WMSC techniques — major system, PAO, memory palace. The same tools used by world memory champions, gamified and free." },
              { title: "Spaced repetition", body: "Questions reappear at scientifically optimal intervals. AI schedules review based on Ebbinghaus forgetting curves to keep knowledge permanent." },
            ].map(w => (
              <div key={w.title} className="gl-why-card">
                <h3 className="gl-why-title">{w.title}</h3>
                <p className="gl-why-body">{w.body}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="gl-bottom">
          <h2>Start playing — it's completely free</h2>
          <p>No sign-up needed for most games. Open the Gaming Lab and start a match in under 30 seconds.</p>
          <div className="gl-cta-row">
            <a href="https://gaming.seekhowithrua.com" className="gl-btn-primary" target="_blank" rel="noopener noreferrer">Open Gaming Lab →</a>
            <Link href="/voice-rooms" className="gl-btn-outline">Join a Live Room</Link>
          </div>
        </div>
      </main>
    </>
  );
}