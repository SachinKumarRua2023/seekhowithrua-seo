import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Who is Master Rua? The Title, The Vision & How to Earn It | SeekhowithRua",
  description:
    "Master Rua is not just a person — it's a title earned by those who master multiple skills: tech, physical, arts & entertainment. Learn about Sachin Kumar (Master Rua), the Mr. Rua challenge, and how YOU can earn the title. SeekhowithRua.",
  keywords: [
    "who is master rua",
    "master rua",
    "master rua title",
    "how to become master rua",
    "mr rua",
    "how to become mr rua",
    "sachin rua",
    "sachin kumar master rua",
    "seekho with rua",
    "seekhowithrua",
    "rua title meaning",
    "rua philosophy",
    "all rounder india",
    "master multiple skills",
    "physical technical entertainment master india",
    "kung fu coding dance india",
    "multi skill master india",
    "ueep model",
    "master rua challenge",
    "mr rua 30 day challenge",
    "earn master rua title",
    "rua game title",
  ],
  alternates: { canonical: "https://seekhowithrua.com/master-rua" },
  openGraph: {
    title: "Who is Master Rua? The Title, The Vision & How to Earn It",
    description:
      "Master Rua is a title for those who master tech, physical skills, arts and entertainment. Learn about Sachin Kumar and how to earn the title yourself.",
    url: "https://seekhowithrua.com/master-rua",
    siteName: "SeekhowithRua",
    type: "article",
  },
};

export default function MasterRuaPage() {
  return (
    <>
      <div className="mr-page">

        {/* ── HERO ── */}
        <section className="mr-hero">
          <div className="mr-eyebrow">✦ THE TITLE · THE PHILOSOPHY · THE CHALLENGE</div>
          <h1 className="mr-h1">
            Who is <span className="mr-accent">Master Rua</span>?
          </h1>
          <p className="mr-hero-sub">
            Master Rua is not just a person. It is a <strong>title</strong> — earned by those who refuse to be average in just one thing.
            It belongs to the all-rounders. The ones who master <strong>tech, physical skills, arts and entertainment</strong> simultaneously.
          </p>
          <div className="mr-hero-tags">
            {["Kung Fu", "Coding", "Dance", "Mimicry", "AI & ML", "Game Dev", "Robotics", "Mobile Dev", "Networking", "Memory Science"].map(t => (
              <span key={t} className="mr-tag">{t}</span>
            ))}
          </div>
        </section>

        {/* ── ORIGIN ── */}
        <section className="mr-section">
          <div className="mr-inner">
            <div className="mr-sec-tag">THE ORIGIN</div>
            <h2 className="mr-sec-title">
              Sachin Kumar — The First <span className="mr-accent">Master Rua</span>
            </h2>
            <div className="mr-story">
              <p>
                <strong>Sachin Kumar</strong> holds the title of Master Rua — the first person to earn it by mastering an extraordinary range of skills spanning technology, physical arts and entertainment.
              </p>
              <p>
                As an <strong>AI/ML Trainer, Full Stack Developer, Memory Science Expert</strong> with clients in the USA, Sachin built SeekhowithRua not as a typical EdTech platform but as a <strong>revolution in how humans learn</strong>.
              </p>
              <p>
                The name "Rua" represents a philosophy: <em>learning is not about cramming — it is about rewiring your mind through the visual cortex, mnemonics, gaming and animation</em> so that knowledge becomes permanent, natural and joyful.
              </p>
              <p>
                Master Rua's vision: <strong>"To change the education system by applying the UEEP Model"</strong> — Understand, Execute, Explain, Practice. Not just in tech, but in every dimension of life.
              </p>
            </div>
          </div>
        </section>

        {/* ── TITLE SYSTEM ── */}
        <section className="mr-section mr-dark">
          <div className="mr-inner">
            <div className="mr-sec-tag">THE TITLE SYSTEM</div>
            <h2 className="mr-sec-title">
              Two Titles. One <span className="mr-accent">Philosophy.</span>
            </h2>
            <div className="mr-titles-grid">
              <div className="mr-title-card mr-card-gold">
                <div className="mr-title-icon">👑</div>
                <h3 className="mr-title-name">Master Rua</h3>
                <p className="mr-title-desc">
                  The highest title. Earned by those who have achieved mastery across <strong>multiple domains</strong> — technical, physical, creative and intellectual. Currently held by Sachin Kumar.
                </p>
                <div className="mr-title-req">
                  <div className="mr-req-label">REQUIREMENTS</div>
                  {[
                    "Mastery in 2+ technical skills (AI, Dev, Networking etc.)",
                    "Mastery in 1+ physical skill (Kung Fu, Dance, Sport etc.)",
                    "Mastery in 1+ creative skill (Mimicry, Art, Music etc.)",
                    "Ability to teach and transform others",
                    "Proven real-world impact",
                  ].map(r => (
                    <div key={r} className="mr-req-item">✦ {r}</div>
                  ))}
                </div>
              </div>

              <div className="mr-title-card mr-card-silver">
                <div className="mr-title-icon">🥈</div>
                <h3 className="mr-title-name">Mr. Rua</h3>
                <p className="mr-title-desc">
                  The best student title. Earned by those actively on the path — proving themselves through the <strong>30-Day Rua Challenge</strong> or by excelling in the SeekhowithRua platform.
                </p>
                <div className="mr-title-req">
                  <div className="mr-req-label">HOW TO EARN</div>
                  {[
                    "Complete the 30-Day Mr. Rua Challenge",
                    "Master at least 2 skills simultaneously",
                    "Build and deploy a real project",
                    "Teach what you learned to someone else",
                    "Prove yourself in the Rua Arena (coming soon)",
                  ].map(r => (
                    <div key={r} className="mr-req-item">✦ {r}</div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 30 DAY CHALLENGE ── */}
        <section className="mr-section">
          <div className="mr-inner">
            <div className="mr-sec-tag">THE CHALLENGE</div>
            <h2 className="mr-sec-title">
              The 30-Day <span className="mr-accent">Mr. Rua Challenge</span>
            </h2>
            <p className="mr-challenge-desc">
              Think you have what it takes? The Mr. Rua Challenge is a 30-day intensive where you pick <strong>2 skills from different domains</strong> and prove mastery in both. Complete it and you earn the Mr. Rua title.
            </p>
            <div className="mr-challenge-grid">
              {[
                { week: "Week 1", title: "Choose Your Domains", desc: "Pick one technical skill (AI, coding, networking) and one physical or creative skill (dance, sport, art). Define your 30-day goals.", icon: "🎯" },
                { week: "Week 2", title: "Learn with UEEP", desc: "Use the UEEP model — Understand through visuals, Execute with projects, Explain to others, Practice daily. Master Rua guides you.", icon: "📚" },
                { week: "Week 3", title: "Build & Perform", desc: "Build a real project in your technical domain. Perform or demonstrate your physical/creative skill. Document everything.", icon: "🔨" },
                { week: "Week 4", title: "Prove & Earn", desc: "Present your work to the SeekhowithRua community. Teach what you learned. Earn your Mr. Rua title if you qualify.", icon: "🏆" },
              ].map(w => (
                <div key={w.week} className="mr-week-card">
                  <div className="mr-week-icon">{w.icon}</div>
                  <div className="mr-week-label">{w.week}</div>
                  <h3 className="mr-week-title">{w.title}</h3>
                  <p className="mr-week-desc">{w.desc}</p>
                </div>
              ))}
            </div>
            <div className="mr-challenge-cta">
              <a href="https://app.seekhowithrua.com" className="mr-btn-primary">
                🚀 Start the 30-Day Challenge
              </a>
              <p className="mr-challenge-note">
                Challenge starts when YOU decide. No fixed dates. Pure commitment.
              </p>
            </div>
          </div>
        </section>

        {/* ── SKILLS MAP ── */}
        <section className="mr-section mr-dark">
          <div className="mr-inner">
            <div className="mr-sec-tag">THE RUA SKILL MAP</div>
            <h2 className="mr-sec-title">
              What a <span className="mr-accent">Master Rua</span> Knows
            </h2>
            <div className="mr-skills-grid">
              {[
                { domain: "Technical", color: "#00d4ff", skills: ["AI & Machine Learning", "Full Stack Development", "Game Development", "Mobile Apps", "IoT & Robotics", "Networking & Systems", "Data Science", "Python & Automation"] },
                { domain: "Physical", color: "#1D9E75", skills: ["Kung Fu / Martial Arts", "Dance", "Fitness & Athletics", "Yoga & Flexibility", "Sports", "Body Language Mastery"] },
                { domain: "Creative", color: "#f59e0b", skills: ["Mimicry & Acting", "Music", "Drawing & Design", "Storytelling", "Public Speaking", "Animation"] },
                { domain: "Mental", color: "#a855f7", skills: ["Memory Science", "Speed Reading", "UEEP Learning Model", "Meditation & Focus", "Problem Solving", "Critical Thinking"] },
              ].map(d => (
                <div key={d.domain} className="mr-domain-card" style={{ borderColor: d.color + "40" }}>
                  <div className="mr-domain-title" style={{ color: d.color }}>{d.domain}</div>
                  <div className="mr-domain-skills">
                    {d.skills.map(s => (
                      <span key={s} className="mr-skill-item" style={{ borderColor: d.color + "30" }}>{s}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── VISION ── */}
        <section className="mr-section">
          <div className="mr-inner">
            <div className="mr-sec-tag">THE VISION</div>
            <h2 className="mr-sec-title">
              Not EdTech. A <span className="mr-accent">Learning Revolution.</span>
            </h2>
            <div className="mr-vision-grid">
              {[
                { icon: "🧠", title: "Visual Cortex Learning", desc: "We feed knowledge directly through your visual cortex using animation, 3D gaming and interactive demos. Not boring slides. Real neural wiring." },
                { icon: "🎮", title: "Learn Through Gaming", desc: "Educational games where you earn the Mr. Rua title, unlock skills and compete. Learning disguised as play — the most powerful way." },
                { icon: "🔮", title: "Mnemonic Systems", desc: "We use proven memory science and mnemonic techniques so what you learn stays forever. No cramming. No forgetting." },
                { icon: "⚡", title: "UEEP Model", desc: "Understand → Execute → Explain → Practice. Every skill taught through this 4-step model that rewires your subconscious mind." },
                { icon: "🌐", title: "All Domains United", desc: "Tech, physical and creative skills taught under one roof because true mastery is never limited to one domain." },
                { icon: "🏆", title: "Title-Based Motivation", desc: "You don't just get a certificate. You earn a title — Mr. Rua or Master Rua — that represents real mastery, not just course completion." },
              ].map(v => (
                <div key={v.title} className="mr-vision-card">
                  <div className="mr-vision-icon">{v.icon}</div>
                  <h3 className="mr-vision-title">{v.title}</h3>
                  <p className="mr-vision-desc">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="mr-cta-section">
          <div className="mr-inner" style={{ textAlign: "center" }}>
            <div className="mr-cta-badge">ARE YOU READY?</div>
            <h2 className="mr-cta-title">
              Your Journey to <span className="mr-accent">Mr. Rua</span> Starts Today
            </h2>
            <p className="mr-cta-desc">
              Join SeekhowithRua. Pick your skills. Take the challenge. Earn your title.
              The next Master Rua could be you — but first, become Mr. Rua.
            </p>
            <div className="mr-cta-btns">
              <a href="https://app.seekhowithrua.com" className="mr-btn-primary">
                🚀 Join SeekhowithRua
              </a>
              <Link href="/master-rua#challenge" className="mr-btn-outline">
                Take the 30-Day Challenge →
              </Link>
            </div>
            <p className="mr-cta-note">
              "The title is not given. It is earned. And it starts with a single decision."
              <br /><strong>— Master Rua (Sachin Kumar)</strong>
            </p>
          </div>
        </section>

        {/* ── SEO HIDDEN ── */}
        <div aria-hidden="true" style={{ position: "absolute", left: "-9999px", fontSize: "1px" }}>
          <p>Master Rua is Sachin Kumar, founder of SeekhowithRua. Who is Master Rua? Master Rua is a title for all-rounders who master tech, physical and creative skills. Seekho with Rua. Mr Rua challenge. How to become Master Rua. How to become Mr Rua. Sachin Rua. Rua title. SeekhowithRua platform India.</p>
        </div>

      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@600;700;800&family=JetBrains+Mono:wght@400;500&family=Exo+2:wght@400;500;600;700&display=swap');

        .mr-page { background:#04040f; color:#e2e8f0; min-height:100vh; font-family:'Exo 2',sans-serif; }
        .mr-accent { color:#7c3aed; }

        /* HERO */
        .mr-hero { padding:100px 40px 80px; text-align:center; background:radial-gradient(ellipse at 50% 0%,rgba(124,58,237,.15) 0%,transparent 65%); border-bottom:1px solid rgba(255,255,255,.05); }
        .mr-eyebrow { font-family:'JetBrains Mono',monospace; font-size:10px; letter-spacing:4px; color:#1D9E75; margin-bottom:20px; }
        .mr-h1 { font-family:'Syne',sans-serif; font-size:clamp(40px,7vw,80px); font-weight:800; color:#fff; margin-bottom:24px; line-height:1.1; }
        .mr-hero-sub { font-size:16px; color:rgba(255,255,255,.6); max-width:700px; margin:0 auto 36px; line-height:1.9; }
        .mr-hero-sub strong { color:#00d4ff; }
        .mr-hero-tags { display:flex; flex-wrap:wrap; gap:10px; justify-content:center; }
        .mr-tag { padding:6px 14px; border-radius:20px; border:1px solid rgba(124,58,237,.3); background:rgba(124,58,237,.08); font-size:12px; color:rgba(255,255,255,.7); font-family:'JetBrains Mono',monospace; }

        /* SECTIONS */
        .mr-section { padding:80px 40px; border-top:1px solid rgba(255,255,255,.04); }
        .mr-dark { background:rgba(10,10,30,.5); }
        .mr-inner { max-width:1100px; margin:0 auto; }
        .mr-sec-tag { font-family:'JetBrains Mono',monospace; font-size:10px; letter-spacing:4px; color:#1D9E75; margin-bottom:12px; }
        .mr-sec-title { font-family:'Syne',sans-serif; font-size:clamp(24px,4vw,42px); font-weight:800; color:#fff; margin-bottom:28px; line-height:1.2; }

        /* STORY */
        .mr-story { display:flex; flex-direction:column; gap:18px; max-width:780px; }
        .mr-story p { font-size:15px; color:rgba(255,255,255,.65); line-height:1.9; }
        .mr-story strong { color:#fff; }
        .mr-story em { color:#7c3aed; font-style:normal; }

        /* TITLE CARDS */
        .mr-titles-grid { display:grid; grid-template-columns:1fr 1fr; gap:24px; }
        .mr-title-card { padding:36px; border-radius:20px; border:1px solid; }
        .mr-card-gold { border-color:rgba(245,158,11,.3); background:rgba(245,158,11,.04); }
        .mr-card-silver { border-color:rgba(148,163,184,.3); background:rgba(148,163,184,.04); }
        .mr-title-icon { font-size:40px; margin-bottom:16px; }
        .mr-title-name { font-family:'Syne',sans-serif; font-size:26px; font-weight:800; color:#fff; margin-bottom:12px; }
        .mr-title-desc { font-size:14px; color:rgba(255,255,255,.6); line-height:1.8; margin-bottom:24px; }
        .mr-title-desc strong { color:#fff; }
        .mr-title-req { display:flex; flex-direction:column; gap:8px; }
        .mr-req-label { font-family:'JetBrains Mono',monospace; font-size:9px; letter-spacing:3px; color:rgba(255,255,255,.3); margin-bottom:4px; }
        .mr-req-item { font-size:13px; color:rgba(255,255,255,.6); line-height:1.6; padding-left:4px; }

        /* CHALLENGE */
        .mr-challenge-desc { font-size:15px; color:rgba(255,255,255,.6); max-width:680px; line-height:1.9; margin-bottom:40px; }
        .mr-challenge-desc strong { color:#fff; }
        .mr-challenge-grid { display:grid; grid-template-columns:repeat(4,1fr); gap:16px; margin-bottom:40px; }
        .mr-week-card { padding:24px; border-radius:14px; background:rgba(10,10,30,.8); border:1px solid rgba(124,58,237,.2); }
        .mr-week-icon { font-size:28px; margin-bottom:10px; }
        .mr-week-label { font-family:'JetBrains Mono',monospace; font-size:9px; letter-spacing:3px; color:#7c3aed; margin-bottom:8px; }
        .mr-week-title { font-family:'Syne',sans-serif; font-size:16px; font-weight:700; color:#fff; margin-bottom:8px; }
        .mr-week-desc { font-size:12px; color:rgba(255,255,255,.5); line-height:1.7; }
        .mr-challenge-cta { text-align:center; }
        .mr-challenge-note { font-size:12px; color:rgba(255,255,255,.3); font-family:'JetBrains Mono',monospace; margin-top:14px; }

        /* SKILLS */
        .mr-skills-grid { display:grid; grid-template-columns:repeat(2,1fr); gap:20px; }
        .mr-domain-card { padding:28px; border-radius:16px; background:rgba(10,10,30,.8); border:1px solid; }
        .mr-domain-title { font-family:'Syne',sans-serif; font-size:18px; font-weight:700; margin-bottom:16px; letter-spacing:1px; }
        .mr-domain-skills { display:flex; flex-wrap:wrap; gap:8px; }
        .mr-skill-item { font-size:11px; padding:4px 12px; border-radius:20px; border:1px solid; color:rgba(255,255,255,.65); font-family:'JetBrains Mono',monospace; }

        /* VISION */
        .mr-vision-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:20px; }
        .mr-vision-card { padding:28px; border-radius:14px; background:rgba(10,10,30,.8); border:1px solid rgba(255,255,255,.06); transition:all .2s; }
        .mr-vision-card:hover { border-color:#7c3aed; transform:translateY(-3px); }
        .mr-vision-icon { font-size:32px; margin-bottom:14px; }
        .mr-vision-title { font-family:'Syne',sans-serif; font-size:17px; font-weight:700; color:#fff; margin-bottom:10px; }
        .mr-vision-desc { font-size:13px; color:rgba(255,255,255,.5); line-height:1.8; }

        /* CTA */
        .mr-cta-section { padding:100px 40px; background:radial-gradient(ellipse at 50% 50%,rgba(124,58,237,.12) 0%,transparent 65%); border-top:1px solid rgba(255,255,255,.05); }
        .mr-cta-badge { font-family:'JetBrains Mono',monospace; font-size:10px; letter-spacing:4px; color:#f59e0b; margin-bottom:20px; }
        .mr-cta-title { font-family:'Syne',sans-serif; font-size:clamp(28px,4vw,52px); font-weight:800; color:#fff; margin-bottom:16px; }
        .mr-cta-desc { font-size:15px; color:rgba(255,255,255,.5); max-width:580px; margin:0 auto 36px; line-height:1.9; }
        .mr-cta-btns { display:flex; gap:14px; justify-content:center; flex-wrap:wrap; margin-bottom:32px; }
        .mr-cta-note { font-size:13px; color:rgba(255,255,255,.35); line-height:1.9; font-style:italic; }
        .mr-cta-note strong { color:rgba(255,255,255,.6); }

        /* BUTTONS */
        .mr-btn-primary { display:inline-flex; align-items:center; gap:8px; padding:14px 28px; border-radius:10px; background:linear-gradient(135deg,#7c3aed,#00d4ff); color:#fff; font-family:'Syne',sans-serif; font-size:15px; font-weight:700; text-decoration:none; transition:all .2s; box-shadow:0 0 24px rgba(124,58,237,.3); }
        .mr-btn-primary:hover { opacity:.85; transform:translateY(-2px); }
        .mr-btn-outline { display:inline-flex; align-items:center; padding:14px 28px; border-radius:10px; border:1px solid rgba(255,255,255,.2); color:rgba(255,255,255,.8); font-family:'Syne',sans-serif; font-size:15px; font-weight:600; text-decoration:none; transition:all .2s; }
        .mr-btn-outline:hover { border-color:#7c3aed; color:#7c3aed; }

        /* RESPONSIVE */
        @media(max-width:900px) {
          .mr-hero,.mr-section,.mr-cta-section { padding-left:20px; padding-right:20px; }
          .mr-titles-grid,.mr-skills-grid { grid-template-columns:1fr; }
          .mr-challenge-grid { grid-template-columns:1fr 1fr; }
          .mr-vision-grid { grid-template-columns:1fr 1fr; }
        }
        @media(max-width:600px) {
          .mr-challenge-grid,.mr-vision-grid { grid-template-columns:1fr; }
          .mr-h1 { font-size:36px; }
        }
      `}</style>
    </>
  );
}