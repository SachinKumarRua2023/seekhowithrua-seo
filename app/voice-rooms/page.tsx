import type { Metadata } from "next";
import Link from "next/link";

// ─────────────────────────────────────────────
// SEO METADATA — targets all 55+ keyword clusters
// ─────────────────────────────────────────────
export const metadata: Metadata = {
  title:
    "Live Voice Chat Rooms — IT, Spiritual, Debate & Study | SeekhoWithRua",
  description:
    "Join free live voice chat rooms for IT discussion, spiritual talk, debate, study groups, and virtual friends. School & college community voice rooms — no app needed. Talk, learn, grow with SeekhoWithRua VCR.",
  keywords: [
    // Core VCR
    "voice chat room",
    "VCR community",
    "live voice room",
    "live audio room",
    "open mic voice chat",
    "live talk room",
    "voice lounge app",
    "group voice chat online",
    "live audio chat community",
    "talk room app",
    "voice room app",
    "live audio lounge",
    // IT / Tech
    "IT discussion voice chat",
    "tech talk room online",
    "developer voice community",
    "live IT discussion app",
    "tech community voice room",
    "virtual IT meetup",
    "coding discussion live chat",
    "software engineer voice room",
    "IT networking voice app",
    "tech innovation talk room",
    "tech voice debate platform",
    // Spiritual
    "live spiritual talk",
    "spiritual voice chat room",
    "online spiritual discussion",
    "live spiritual debate app",
    "spiritual community voice room",
    "meditation voice room",
    "dharma talk live audio",
    "faith discussion live voice",
    "spiritual guidance live talk",
    "live prayer room online",
    "mindfulness talk room",
    // Social / Virtual Friends
    "make virtual friends online",
    "meet people online voice chat",
    "virtual hangout room",
    "strangers voice chat app",
    "online social voice room",
    "talk to people online live",
    "virtual friend community app",
    "social audio platform",
    "live social talk app",
    "meet new people voice app",
    "online community voice hangout",
    // Debate / Discussion
    "live debate room online",
    "open discussion voice room",
    "real time debate app",
    "intellectual discussion voice chat",
    "opinion sharing voice room",
    "live opinion battle app",
    "current affairs voice debate",
    "live podcast style debate",
    "talk show style voice room",
    "panel discussion live audio",
    // School / College
    "voice chat room for students",
    "school community voice room",
    "college study voice room",
    "student live talk platform",
    "campus virtual hangout",
    "college group voice chat",
    "student voice debate room",
    "college ranking community",
    // Job / Career
    "IT job discussion voice room",
    "career talk live audio",
    "job seeker voice community",
    "live hiring discussion room",
    "tech career voice chat",
  ].join(", "),
  openGraph: {
    title: "Live Voice Chat Rooms — IT, Spiritual & Debate | SeekhoWithRua",
    description:
      "Free live voice rooms for IT pros, students, spiritual seekers & debaters. Join school/college ranked communities. No app needed.",
    url: "https://seekhowithrua.com/voice-rooms",
    siteName: "SeekhoWithRua",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Live Voice Chat Rooms | SeekhoWithRua",
    description:
      "IT talk · Spiritual rooms · Debate · Virtual friends · School/College community. Join free on SeekhoWithRua.",
  },
  alternates: {
    canonical: "https://seekhowithrua.com/voice-rooms",
  },
};

// ─────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────

const roomTypes = [
  {
    id: "it",
    icon: "⟨/⟩",
    label: "IT & Tech",
    color: "#0F6E56",
    bg: "#E1F5EE",
    darkBg: "#04342C",
    darkColor: "#9FE1CB",
    title: "IT & Tech Rooms",
    desc: "Live coding discussions, software architecture debates, career talk, and virtual IT meetups. Developers, data scientists, and engineers connect in real time.",
    tags: ["coding discussion", "tech talk", "IT networking", "career talk", "dev community"],
  },
  {
    id: "spiritual",
    icon: "◎",
    label: "Spiritual",
    color: "#854F0B",
    bg: "#FAEEDA",
    darkBg: "#412402",
    darkColor: "#FAC775",
    title: "Spiritual Talk Rooms",
    desc: "Meditation sessions, dharma talks, faith discussions, and philosophy debates. A calm space to explore meaning with like-minded seekers.",
    tags: ["meditation", "dharma talk", "spiritual debate", "mindfulness", "live prayer"],
  },
  {
    id: "debate",
    icon: "⊞",
    label: "Debate",
    color: "#185FA5",
    bg: "#E6F1FB",
    darkBg: "#042C53",
    darkColor: "#B5D4F4",
    title: "Debate & Discussion Rooms",
    desc: "Intellectual arguments, current affairs, innovation ideas, and opinion battles. Talk-show style rooms where every voice gets heard.",
    tags: ["live debate", "opinion battle", "current affairs", "innovation talk", "panel discussion"],
  },
  {
    id: "school",
    icon: "△",
    label: "School / College",
    color: "#534AB7",
    bg: "#EEEDFE",
    darkBg: "#26215C",
    darkColor: "#CECBF6",
    title: "School & College Rooms",
    desc: "Study groups, campus hangouts, and college-ranked communities. Build your academic circle and climb your college leaderboard together.",
    tags: ["study group", "campus hangout", "college community", "student talk", "ranked rooms"],
  },
  {
    id: "social",
    icon: "◈",
    label: "Virtual Friends",
    color: "#993C1D",
    bg: "#FAECE7",
    darkBg: "#4A1B0C",
    darkColor: "#F5C4B3",
    title: "Virtual Friends & Social Rooms",
    desc: "Meet new people, make virtual friends, and build your online community. No awkward profiles — just real voice conversations.",
    tags: ["make friends online", "virtual hangout", "meet people", "social voice", "online community"],
  },
  {
    id: "jobs",
    icon: "◇",
    label: "Jobs & Hiring",
    color: "#3B6D11",
    bg: "#EAF3DE",
    darkBg: "#173404",
    darkColor: "#C0DD97",
    title: "Career & Hiring Rooms",
    desc: "Live hiring discussions, job-seeker meetups, and company discovery rooms. No CV needed — just show your skills live.",
    tags: ["IT jobs", "live hiring", "career talk", "job seeker", "tech career"],
  },
];

const rankParams = [
  {
    num: "01",
    title: "Time spent",
    desc: "Every minute on any feature — voice rooms, quizzes, courses — counts toward your rank score.",
    color: "#534AB7",
    bg: "#EEEDFE",
    darkBg: "#26215C",
    darkColor: "#CECBF6",
  },
  {
    num: "02",
    title: "Upvotes from panel",
    desc: "Verified panel members can upvote you. Each upvote carries 3× the weight of a time point.",
    color: "#0F6E56",
    bg: "#E1F5EE",
    darkBg: "#04342C",
    darkColor: "#9FE1CB",
  },
  {
    num: "03",
    title: "Followers",
    desc: "Your follower count contributes 2× weight. Grow your community and your rank grows with you.",
    color: "#854F0B",
    bg: "#FAEEDA",
    darkBg: "#412402",
    darkColor: "#FAC775",
  },
];

const rules = [
  { icon: "✕", text: "No sharing mobile numbers or email addresses in rooms" },
  { icon: "✕", text: "No sexual, romantic, or dating-type content — ever" },
  { icon: "✕", text: "No spamming — repeated messages or unsolicited promotions" },
];

const eligibility = [
  {
    role: "Host a panel room",
    color: "#185FA5",
    bg: "#E6F1FB",
    darkBg: "#042C53",
    darkColor: "#B5D4F4",
    ways: [
      "Solve 250+ quiz questions at Expert level in any field",
      "Or pay ₹2000 one-time host activation fee",
    ],
  },
  {
    role: "Enter any panel room",
    color: "#0F6E56",
    bg: "#E1F5EE",
    darkBg: "#04342C",
    darkColor: "#9FE1CB",
    ways: [
      "Active ₹149/mo subscription (7-day free trial available)",
      "Or solve 100+ quiz questions on the platform",
    ],
  },
];

// ─────────────────────────────────────────────
// PAGE COMPONENT
// ─────────────────────────────────────────────
export default function VoiceRoomsPage() {
  return (
    <>
      <style>{`
        /* ── Fonts ── */
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap');

        /* ── Tokens ── */
        :root {
          --vcr-accent: #534AB7;
          --vcr-accent-light: #EEEDFE;
          --vcr-fg: #1a1a2e;
          --vcr-fg-muted: #5a5a72;
          --vcr-bg: #fafaf8;
          --vcr-card: #ffffff;
          --vcr-border: rgba(0,0,0,0.08);
          --vcr-radius: 16px;
          --vcr-font: 'Syne', sans-serif;
          --vcr-mono: 'JetBrains Mono', monospace;
        }
        @media (prefers-color-scheme: dark) {
          :root {
            --vcr-fg: #e8e8f0;
            --vcr-fg-muted: #9090a8;
            --vcr-bg: #0f0f1a;
            --vcr-card: #181828;
            --vcr-border: rgba(255,255,255,0.08);
            --vcr-accent-light: #26215C;
          }
        }

        /* ── Reset scoped to page ── */
        .vcr-page * { box-sizing: border-box; margin: 0; padding: 0; }
        .vcr-page {
          font-family: var(--vcr-font);
          background: var(--vcr-bg);
          color: var(--vcr-fg);
          line-height: 1.6;
        }

        /* ── Hero ── */
        .vcr-hero {
          padding: 80px 24px 64px;
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        .vcr-hero::before {
          content: '';
          position: absolute;
          inset: 0;
          background:
            radial-gradient(ellipse 60% 40% at 50% 0%, rgba(83,74,183,0.12) 0%, transparent 70%);
          pointer-events: none;
        }
        .vcr-live-badge {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          background: var(--vcr-accent-light);
          color: var(--vcr-accent);
          font-family: var(--vcr-mono);
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.08em;
          padding: 5px 14px;
          border-radius: 999px;
          border: 1px solid rgba(83,74,183,0.25);
          margin-bottom: 24px;
        }
        .vcr-live-dot {
          width: 7px; height: 7px;
          border-radius: 50%;
          background: #E24B4A;
          animation: vcr-pulse 1.6s ease-in-out infinite;
        }
        @keyframes vcr-pulse {
          0%,100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.7); }
        }
        .vcr-h1 {
          font-size: clamp(2.2rem, 5vw, 3.8rem);
          font-weight: 800;
          line-height: 1.1;
          letter-spacing: -0.03em;
          color: var(--vcr-fg);
          max-width: 780px;
          margin: 0 auto 20px;
        }
        .vcr-h1 span {
          color: var(--vcr-accent);
        }
        .vcr-hero-sub {
          font-size: clamp(1rem, 2vw, 1.15rem);
          color: var(--vcr-fg-muted);
          max-width: 580px;
          margin: 0 auto 36px;
          font-weight: 400;
          line-height: 1.7;
        }
        .vcr-hero-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          justify-content: center;
          margin-bottom: 40px;
        }
        .vcr-tag {
          font-family: var(--vcr-mono);
          font-size: 11px;
          padding: 4px 11px;
          border-radius: 6px;
          border: 1px solid var(--vcr-border);
          color: var(--vcr-fg-muted);
          background: var(--vcr-card);
        }
        .vcr-cta-row {
          display: flex;
          gap: 12px;
          justify-content: center;
          flex-wrap: wrap;
        }
        .vcr-btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: var(--vcr-accent);
          color: #fff;
          font-family: var(--vcr-font);
          font-weight: 700;
          font-size: 15px;
          padding: 14px 28px;
          border-radius: 12px;
          text-decoration: none;
          letter-spacing: -0.01em;
          transition: opacity 0.15s, transform 0.15s;
        }
        .vcr-btn-primary:hover { opacity: 0.88; transform: translateY(-1px); }
        .vcr-btn-secondary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: var(--vcr-card);
          color: var(--vcr-fg);
          font-family: var(--vcr-font);
          font-weight: 600;
          font-size: 15px;
          padding: 14px 28px;
          border-radius: 12px;
          text-decoration: none;
          border: 1px solid var(--vcr-border);
          transition: opacity 0.15s, transform 0.15s;
        }
        .vcr-btn-secondary:hover { opacity: 0.8; transform: translateY(-1px); }

        /* ── Section ── */
        .vcr-section {
          max-width: 1100px;
          margin: 0 auto;
          padding: 60px 24px;
        }
        .vcr-section-label {
          font-family: var(--vcr-mono);
          font-size: 11px;
          letter-spacing: 0.1em;
          color: var(--vcr-accent);
          text-transform: uppercase;
          margin-bottom: 10px;
        }
        .vcr-section-title {
          font-size: clamp(1.5rem, 3vw, 2.2rem);
          font-weight: 800;
          letter-spacing: -0.03em;
          color: var(--vcr-fg);
          margin-bottom: 8px;
          line-height: 1.15;
        }
        .vcr-section-sub {
          font-size: 1rem;
          color: var(--vcr-fg-muted);
          max-width: 560px;
          margin-bottom: 40px;
          line-height: 1.7;
        }

        /* ── Room cards grid ── */
        .vcr-rooms-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 16px;
        }
        .vcr-room-card {
          background: var(--vcr-card);
          border: 1px solid var(--vcr-border);
          border-radius: var(--vcr-radius);
          padding: 24px;
          position: relative;
          transition: transform 0.18s, box-shadow 0.18s;
        }
        .vcr-room-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 32px rgba(0,0,0,0.08);
        }
        .vcr-room-icon {
          font-family: var(--vcr-mono);
          font-size: 22px;
          font-weight: 500;
          margin-bottom: 14px;
          display: block;
        }
        .vcr-room-title {
          font-size: 1.05rem;
          font-weight: 700;
          letter-spacing: -0.02em;
          margin-bottom: 8px;
          color: var(--vcr-fg);
        }
        .vcr-room-desc {
          font-size: 0.9rem;
          color: var(--vcr-fg-muted);
          line-height: 1.65;
          margin-bottom: 16px;
        }
        .vcr-room-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }
        .vcr-room-tag {
          font-family: var(--vcr-mono);
          font-size: 10px;
          padding: 3px 8px;
          border-radius: 5px;
          border: 1px solid;
        }

        /* ── Divider ── */
        .vcr-divider {
          height: 1px;
          background: var(--vcr-border);
          max-width: 1100px;
          margin: 0 auto;
        }

        /* ── Rank section ── */
        .vcr-rank-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 16px;
          margin-bottom: 32px;
        }
        .vcr-rank-card {
          background: var(--vcr-card);
          border: 1px solid var(--vcr-border);
          border-radius: var(--vcr-radius);
          padding: 24px;
        }
        .vcr-rank-num {
          font-family: var(--vcr-mono);
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.06em;
          margin-bottom: 10px;
          display: block;
        }
        .vcr-rank-title {
          font-size: 1.05rem;
          font-weight: 700;
          letter-spacing: -0.02em;
          margin-bottom: 7px;
          color: var(--vcr-fg);
        }
        .vcr-rank-desc {
          font-size: 0.88rem;
          color: var(--vcr-fg-muted);
          line-height: 1.6;
        }
        .vcr-formula-box {
          background: var(--vcr-accent-light);
          border: 1px solid rgba(83,74,183,0.2);
          border-radius: 12px;
          padding: 20px 24px;
          font-family: var(--vcr-mono);
          font-size: 0.9rem;
          color: var(--vcr-accent);
          line-height: 1.8;
        }
        .vcr-formula-box strong {
          font-weight: 700;
          font-size: 1rem;
          display: block;
          margin-bottom: 6px;
          color: var(--vcr-accent);
        }

        /* ── Eligibility ── */
        .vcr-elig-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }
        @media (max-width: 640px) { .vcr-elig-grid { grid-template-columns: 1fr; } }
        .vcr-elig-card {
          background: var(--vcr-card);
          border: 1px solid var(--vcr-border);
          border-radius: var(--vcr-radius);
          padding: 24px;
        }
        .vcr-elig-role {
          font-size: 0.78rem;
          font-family: var(--vcr-mono);
          font-weight: 500;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          margin-bottom: 14px;
          display: block;
        }
        .vcr-elig-ways {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .vcr-elig-way {
          font-size: 0.9rem;
          color: var(--vcr-fg-muted);
          padding-left: 16px;
          position: relative;
          line-height: 1.5;
        }
        .vcr-elig-way::before {
          content: '→';
          position: absolute;
          left: 0;
          color: var(--vcr-accent);
          font-family: var(--vcr-mono);
        }

        /* ── Rules ── */
        .vcr-rules-list {
          display: flex;
          flex-direction: column;
          gap: 10px;
          max-width: 580px;
          margin-bottom: 20px;
        }
        .vcr-rule-row {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          background: #FCEBEB;
          border: 1px solid rgba(226,75,74,0.15);
          border-radius: 10px;
          padding: 12px 16px;
          font-size: 0.9rem;
          color: #791F1F;
        }
        @media (prefers-color-scheme: dark) {
          .vcr-rule-row { background: #501313; color: #F7C1C1; border-color: rgba(226,75,74,0.2); }
        }
        .vcr-rule-x {
          font-family: var(--vcr-mono);
          font-weight: 700;
          font-size: 13px;
          color: #E24B4A;
          flex-shrink: 0;
          margin-top: 1px;
        }
        .vcr-strike-note {
          font-size: 0.85rem;
          color: var(--vcr-fg-muted);
          font-style: italic;
          margin-top: 4px;
        }

        /* ── Bottom CTA ── */
        .vcr-bottom-cta {
          text-align: center;
          padding: 72px 24px;
          background: var(--vcr-card);
          border-top: 1px solid var(--vcr-border);
        }
        .vcr-bottom-cta h2 {
          font-size: clamp(1.6rem, 3.5vw, 2.6rem);
          font-weight: 800;
          letter-spacing: -0.03em;
          margin-bottom: 14px;
          color: var(--vcr-fg);
        }
        .vcr-bottom-cta p {
          font-size: 1rem;
          color: var(--vcr-fg-muted);
          max-width: 480px;
          margin: 0 auto 32px;
          line-height: 1.7;
        }

        /* ── Structured data label ── */
        .vcr-sr-only {
          position: absolute; width: 1px; height: 1px;
          overflow: hidden; clip: rect(0,0,0,0); white-space: nowrap;
        }
      `}</style>

      <main className="vcr-page" itemScope itemType="https://schema.org/WebPage">
        {/* ── HERO ─────────────────────────────── */}
        <section className="vcr-hero" aria-label="Voice rooms hero">
          <div className="vcr-live-badge">
            <span className="vcr-live-dot" aria-hidden="true" />
            Live rooms open now
          </div>

          <h1 className="vcr-h1">
            Voice rooms for{" "}
            <span>every conversation</span>
            {" "}you want to have
          </h1>

          <p className="vcr-hero-sub">
            IT talks, spiritual discussions, live debates, study groups, career
            rooms, and virtual hangouts — all in one place. No app install. No
            CV. Just your voice.
          </p>

          {/* Hidden but indexed keyword-rich text */}
          <p className="vcr-sr-only">
            SeekhoWithRua VCR — voice chat room for students, college community,
            school group, IT professionals, spiritual seekers, job seekers, and
            anyone who wants to meet virtual friends online. Live voice room for
            spiritual talk, live IT discussion, tech debate, and social audio
            platform India.
          </p>

          <div className="vcr-hero-tags" aria-label="Room categories">
            {[
              "IT & Tech",
              "Spiritual",
              "Debate",
              "Study Group",
              "School / College",
              "Virtual Friends",
              "Hiring Rooms",
              "Memory Arena",
            ].map((t) => (
              <span key={t} className="vcr-tag">
                {t}
              </span>
            ))}
          </div>

          <div className="vcr-cta-row">
            <a
              href="https://app.seekhowithrua.com/vcr"
              className="vcr-btn-primary"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open voice rooms on SeekhoWithRua app"
            >
              Enter a room →
            </a>
            <Link href="/courses" className="vcr-btn-secondary">
              Explore courses
            </Link>
          </div>
        </section>

        {/* ── ROOM TYPES ───────────────────────── */}
        <section className="vcr-section" aria-labelledby="rooms-heading">
          <p className="vcr-section-label">Live rooms</p>
          <h2 className="vcr-section-title" id="rooms-heading">
            Find your room
          </h2>
          <p className="vcr-section-sub">
            Every room is free to explore. Special panel rooms require
            eligibility — so conversations stay high quality.
          </p>

          <div className="vcr-rooms-grid">
            {roomTypes.map((room) => (
              <article
                key={room.id}
                className="vcr-room-card"
                itemScope
                itemType="https://schema.org/Event"
                aria-label={room.title}
              >
                <span
                  className="vcr-room-icon"
                  style={{ color: room.color }}
                  aria-hidden="true"
                >
                  {room.icon}
                </span>
                <h3 className="vcr-room-title" itemProp="name">
                  {room.title}
                </h3>
                <p className="vcr-room-desc" itemProp="description">
                  {room.desc}
                </p>
                <div className="vcr-room-tags" aria-label="Related keywords">
                  {room.tags.map((tag) => (
                    <span
                      key={tag}
                      className="vcr-room-tag"
                      style={{
                        color: room.color,
                        backgroundColor: room.bg,
                        borderColor: `${room.color}30`,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <div className="vcr-divider" role="separator" />

        {/* ── RANKING SYSTEM ───────────────────── */}
        <section className="vcr-section" aria-labelledby="rank-heading">
          <p className="vcr-section-label">Community ranking</p>
          <h2 className="vcr-section-title" id="rank-heading">
            Rise in your school & college
          </h2>
          <p className="vcr-section-sub">
            Every student gets two ranks — an overall platform rank and a
            college-level rank. Three things move your score.
          </p>

          <div className="vcr-rank-grid">
            {rankParams.map((p) => (
              <div key={p.num} className="vcr-rank-card">
                <span
                  className="vcr-rank-num"
                  style={{ color: p.color }}
                >
                  PARAM {p.num}
                </span>
                <h3 className="vcr-rank-title">{p.title}</h3>
                <p className="vcr-rank-desc">{p.desc}</p>
              </div>
            ))}
          </div>

          <div className="vcr-formula-box" aria-label="Ranking formula">
            <strong>Rank score formula</strong>
            Score = (Time on platform × 1) + (Panel upvotes × 3) + (Followers
            × 2)
            <br />
            Two leaderboards: <em>Overall rank</em> (all users) ·{" "}
            <em>College rank</em> (your campus only)
          </div>
        </section>

        <div className="vcr-divider" role="separator" />

        {/* ── ELIGIBILITY ──────────────────────── */}
        <section className="vcr-section" aria-labelledby="elig-heading">
          <p className="vcr-section-label">Panel rooms</p>
          <h2 className="vcr-section-title" id="elig-heading">
            Who can host & enter
          </h2>
          <p className="vcr-section-sub">
            General rooms are open to all. Panel rooms — where the real
            conversations happen — require eligibility to keep quality high.
          </p>

          <div className="vcr-elig-grid">
            {eligibility.map((e) => (
              <div key={e.role} className="vcr-elig-card">
                <span
                  className="vcr-elig-role"
                  style={{ color: e.color }}
                >
                  {e.role}
                </span>
                <ul className="vcr-elig-ways" aria-label={`How to ${e.role}`}>
                  {e.ways.map((w) => (
                    <li key={w} className="vcr-elig-way">
                      {w}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <div className="vcr-divider" role="separator" />

        {/* ── RULES ────────────────────────────── */}
        <section className="vcr-section" aria-labelledby="rules-heading">
          <p className="vcr-section-label">Community rules</p>
          <h2 className="vcr-section-title" id="rules-heading">
            Keep it safe & real
          </h2>
          <p className="vcr-section-sub">
            Three warnings and your account is blocked. Panel hosts can report
            directly — host reports skip straight to strike 2.
          </p>

          <div className="vcr-rules-list" role="list" aria-label="Banned actions">
            {rules.map((r) => (
              <div key={r.text} className="vcr-rule-row" role="listitem">
                <span className="vcr-rule-x" aria-hidden="true">
                  {r.icon}
                </span>
                <span>{r.text}</span>
              </div>
            ))}
          </div>

          <p className="vcr-strike-note">
            Strike 1 → warning · Strike 2 → 48h room ban · Strike 3 → account
            blocked. Master Rua admin can review all cases.
          </p>
        </section>

        {/* ── BOTTOM CTA ───────────────────────── */}
        <div className="vcr-bottom-cta">
          <h2>Ready to talk?</h2>
          <p>
            Join thousands of students, developers, and curious minds already
            inside SeekhoWithRua voice rooms. No app needed — just open and
            speak.
          </p>
          <div className="vcr-cta-row">
            <a
              href="https://app.seekhowithrua.com/vcr"
              className="vcr-btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Enter a room →
            </a>
            <Link href="/blog" className="vcr-btn-secondary">
              Read our blog
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}