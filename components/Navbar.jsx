// ============================================================
// FILE LOCATION: seekhowithrua-seo/components/Navbar.jsx
// ACTION: REPLACE existing Navbar.jsx with this entire file
// ============================================================

"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const COURSES = [
  { label: "Data Science", href: "/data-science-course", emoji: "📊", desc: "Python, ML, Deep Learning" },
  { label: "AI & ML", href: "/ai-course", emoji: "🤖", desc: "LLMs, Neural Networks, MLOps" },
  { label: "Full Stack", href: "/full-stack-development", emoji: "💻", desc: "React, Django, Next.js" },
  { label: "Mobile Apps", href: "/mobile-app-development", emoji: "📱", desc: "React Native & Expo" },
  { label: "Game Dev", href: "/game-development", emoji: "🎮", desc: "Unity, Three.js, WebGL" },
  { label: "Python", href: "/python-programming-course", emoji: "🐍", desc: "Beginner to Advanced" },
  { label: "IoT & Robotics", href: "/iot-robotics", emoji: "⚙️", desc: "Arduino, Raspberry Pi" },
  { label: "Web Dev", href: "/web-development-course", emoji: "🌐", desc: "HTML, CSS, JavaScript" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [coursesOpen, setCoursesOpen] = useState(false);
  const [user, setUser] = useState(null);
  const dropRef = useRef(null);

  useEffect(() => {
    const check = () => {
      try { const r = localStorage.getItem("cosmos_user"); setUser(r ? JSON.parse(r) : null); }
      catch { setUser(null); }
    };
    check();
    window.addEventListener("storage", check);
    return () => window.removeEventListener("storage", check);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handler = (e) => { if (dropRef.current && !dropRef.current.contains(e.target)) setCoursesOpen(false); };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const isMaster = user?.email === "master@gmail.com";
  const userName = isMaster ? "Master" : (user?.profile?.name || user?.name || user?.email?.split("@")[0] || "");

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "EducationalOrganization", name: "Seekho With Rua", alternateName: ["SekhoWithRua", "SikhoWithRua"], description: "India's top EdTech platform.", url: "https://seekhowithrua.com" }) }} />

      <header className={`nav-header ${scrolled ? "scrolled" : ""}`}>
        <div className="nav-inner">

          {/* ── LOGO ── */}
          <Link href="/" className="nav-logo">
            <div className="logo-mark">S</div>
            <div className="logo-text">
              <span className="logo-name">SeekhowithRua</span>
              <span className="logo-tag">Learn · Build · Master</span>
            </div>
          </Link>

          {/* ── DESKTOP NAV ── */}
          <nav className="nav-center" aria-label="Main navigation">
            {/* Courses dropdown */}
            <div className="nav-drop-wrap" ref={dropRef}>
              <button className="nav-item nav-drop-btn" onClick={() => setCoursesOpen(p => !p)} aria-expanded={coursesOpen}>
                Courses <span className={`drop-arrow ${coursesOpen ? "open" : ""}`}>▾</span>
              </button>
              {coursesOpen && (
                <div className="drop-menu">
                  <div className="drop-grid">
                    {COURSES.map(c => (
                      <Link key={c.href} href={c.href} className="drop-item" onClick={() => setCoursesOpen(false)}>
                        <span className="drop-emoji">{c.emoji}</span>
                        <div>
                          <div className="drop-label">{c.label}</div>
                          <div className="drop-desc">{c.desc}</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                  <div className="drop-footer">
                    <Link href="https://app.seekhowithrua.com" className="drop-launch" onClick={() => setCoursesOpen(false)}>
                      🚀 Launch Full Platform
                    </Link>
                  </div>
                </div>
              )}
            </div>
            <Link href="/blog" className="nav-item">Blog</Link>
            <a href="https://app.seekhowithrua.com" className="nav-item" target="_blank" rel="noopener">Platform</a>
          </nav>

          {/* ── AUTH ── */}
          <div className="nav-right">
            {user ? (
              <>
                <div className={`nav-user ${isMaster ? "master" : ""}`}>
                  <span>{isMaster ? "⚙️" : "👤"}</span>
                  <span className="nav-username">{userName}</span>
                </div>
                <button className="nav-logout" onClick={() => { localStorage.removeItem("cosmos_user"); setUser(null); window.dispatchEvent(new Event("storage")); }}>
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link href="/login" className="nav-login">Login</Link>
                <Link href="/signup" className="nav-signup">Sign Up</Link>
              </>
            )}
            {/* Hamburger */}
            <button className="nav-hamburger" onClick={() => setMenuOpen(p => !p)} aria-label="Toggle menu">
              <span className={`bar ${menuOpen ? "b1" : ""}`} />
              <span className={`bar ${menuOpen ? "b2" : ""}`} />
              <span className={`bar ${menuOpen ? "b3" : ""}`} />
            </button>
          </div>
        </div>

        {/* ── MOBILE MENU ── */}
        <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
          <div className="mob-section">
            <div className="mob-label">COURSES</div>
            {COURSES.map(c => (
              <Link key={c.href} href={c.href} className="mob-item" onClick={() => setMenuOpen(false)}>
                <span>{c.emoji}</span><span>{c.label}</span>
              </Link>
            ))}
          </div>
          <div className="mob-section">
            <Link href="/blog" className="mob-item" onClick={() => setMenuOpen(false)}>✍️ Blog</Link>
            <a href="https://app.seekhowithrua.com" className="mob-item" onClick={() => setMenuOpen(false)}>🚀 Platform</a>
          </div>
          <div className="mob-auth">
            {user ? (
              <button className="mob-logout" onClick={() => { localStorage.removeItem("cosmos_user"); setUser(null); window.dispatchEvent(new Event("storage")); setMenuOpen(false); }}>Logout</button>
            ) : (
              <>
                <Link href="/login" className="mob-login" onClick={() => setMenuOpen(false)}>Login</Link>
                <Link href="/signup" className="mob-signup" onClick={() => setMenuOpen(false)}>Sign Up Free →</Link>
              </>
            )}
          </div>
        </div>
      </header>

      <div style={{ height: "68px" }} />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap');

        .nav-header {
          position: fixed; top: 0; left: 0; right: 0; z-index: 1000;
          background: rgba(3,3,12,0.7);
          backdrop-filter: blur(20px) saturate(180%);
          -webkit-backdrop-filter: blur(20px) saturate(180%);
          border-bottom: 1px solid rgba(255,255,255,0.06);
          transition: all 0.3s ease;
          font-family: 'Syne', sans-serif;
        }
        .nav-header.scrolled {
          background: rgba(3,3,12,0.95);
          border-bottom: 1px solid rgba(124,58,237,0.2);
          box-shadow: 0 1px 40px rgba(0,0,0,0.4);
        }

        .nav-inner {
          max-width: 1280px; margin: 0 auto;
          padding: 0 28px;
          height: 68px;
          display: flex; align-items: center; justify-content: space-between; gap: 24px;
        }

        /* LOGO */
        .nav-logo { display: flex; align-items: center; gap: 10px; text-decoration: none; flex-shrink: 0; }
        .logo-mark {
          width: 36px; height: 36px; border-radius: 10px;
          background: linear-gradient(135deg, #6d28d9, #0ea5e9);
          display: flex; align-items: center; justify-content: center;
          font-weight: 800; font-size: 17px; color: #fff;
          box-shadow: 0 0 20px rgba(109,40,217,0.4);
          flex-shrink: 0;
        }
        .logo-text { display: flex; flex-direction: column; line-height: 1; }
        .logo-name {
          font-size: 16px; font-weight: 800; letter-spacing: -0.3px;
          background: linear-gradient(90deg, #fff 0%, #a78bfa 100%);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
        }
        .logo-tag { font-size: 9px; color: rgba(167,139,250,0.6); font-family: 'JetBrains Mono',monospace; margin-top: 2px; letter-spacing: 0.5px; }

        /* NAV CENTER */
        .nav-center { display: flex; align-items: center; gap: 4px; flex: 1; justify-content: center; }
        .nav-item {
          padding: 8px 14px; border-radius: 8px;
          font-size: 14px; font-weight: 600; color: rgba(255,255,255,0.75);
          text-decoration: none; background: none; border: none; cursor: pointer;
          transition: all 0.2s; white-space: nowrap; font-family: 'Syne',sans-serif;
          letter-spacing: -0.2px;
        }
        .nav-item:hover { color: #fff; background: rgba(255,255,255,0.06); }

        /* DROPDOWN TRIGGER */
        .nav-drop-wrap { position: relative; }
        .nav-drop-btn { display: flex; align-items: center; gap: 5px; }
        .drop-arrow { font-size: 11px; transition: transform 0.2s; display: inline-block; }
        .drop-arrow.open { transform: rotate(180deg); }

        /* DROPDOWN MENU */
        .drop-menu {
          position: absolute; top: calc(100% + 10px); left: 50%; transform: translateX(-50%);
          background: rgba(8,8,24,0.98);
          border: 1px solid rgba(124,58,237,0.25);
          border-radius: 16px;
          width: 520px;
          box-shadow: 0 20px 60px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.04);
          overflow: hidden;
          animation: dropIn 0.15s ease;
        }
        @keyframes dropIn { from { opacity:0; transform:translateX(-50%) translateY(-8px); } to { opacity:1; transform:translateX(-50%) translateY(0); } }
        .drop-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 2px; padding: 12px; }
        .drop-item {
          display: flex; align-items: center; gap: 10px;
          padding: 10px 12px; border-radius: 10px;
          text-decoration: none; color: rgba(255,255,255,0.75);
          transition: all 0.15s; font-family: 'Syne',sans-serif;
        }
        .drop-item:hover { background: rgba(124,58,237,0.12); color: #fff; }
        .drop-emoji { font-size: 18px; flex-shrink: 0; width: 28px; text-align: center; }
        .drop-label { font-size: 13px; font-weight: 600; margin-bottom: 1px; }
        .drop-desc { font-size: 10px; color: rgba(255,255,255,0.35); font-family: 'JetBrains Mono',monospace; }
        .drop-footer { padding: 10px 12px; border-top: 1px solid rgba(255,255,255,0.06); }
        .drop-launch {
          display: block; text-align: center; padding: 10px;
          background: linear-gradient(135deg, rgba(109,40,217,0.3), rgba(14,165,233,0.3));
          border: 1px solid rgba(124,58,237,0.3);
          border-radius: 10px; color: #a78bfa;
          text-decoration: none; font-size: 13px; font-weight: 700;
          font-family: 'Syne',sans-serif; transition: all 0.2s;
        }
        .drop-launch:hover { background: linear-gradient(135deg,rgba(109,40,217,0.5),rgba(14,165,233,0.5)); color: #fff; }

        /* NAV RIGHT */
        .nav-right { display: flex; align-items: center; gap: 8px; flex-shrink: 0; }
        .nav-user {
          display: flex; align-items: center; gap: 6px;
          padding: 6px 12px; border-radius: 8px;
          background: rgba(14,165,233,0.08); border: 1px solid rgba(14,165,233,0.2);
          font-size: 13px; font-weight: 600; color: #38bdf8;
        }
        .nav-user.master { background: rgba(251,146,60,0.08); border-color: rgba(251,146,60,0.2); color: #fb923c; }
        .nav-username { max-width: 80px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
        .nav-logout {
          padding: 6px 14px; border-radius: 8px;
          border: 1px solid rgba(248,113,113,0.25);
          background: rgba(248,113,113,0.06); color: #f87171;
          font-size: 13px; font-weight: 600; cursor: pointer;
          font-family: 'Syne',sans-serif; transition: all 0.2s;
        }
        .nav-logout:hover { background: rgba(248,113,113,0.12); }
        .nav-login {
          padding: 7px 16px; border-radius: 8px;
          background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.12);
          color: rgba(255,255,255,0.8); font-size: 13px; font-weight: 600;
          text-decoration: none; font-family: 'Syne',sans-serif; transition: all 0.2s;
        }
        .nav-login:hover { background: rgba(255,255,255,0.1); color: #fff; }
        .nav-signup {
          padding: 7px 18px; border-radius: 8px;
          background: linear-gradient(135deg, #6d28d9, #0ea5e9);
          color: #fff; font-size: 13px; font-weight: 700;
          text-decoration: none; font-family: 'Syne',sans-serif;
          box-shadow: 0 0 20px rgba(109,40,217,0.35); transition: all 0.2s;
          white-space: nowrap;
        }
        .nav-signup:hover { opacity: 0.88; transform: translateY(-1px); box-shadow: 0 4px 24px rgba(109,40,217,0.5); }

        /* HAMBURGER */
        .nav-hamburger { display: none; flex-direction: column; gap: 5px; background: none; border: none; cursor: pointer; padding: 6px; }
        .bar { display: block; width: 22px; height: 2px; background: rgba(255,255,255,0.8); border-radius: 2px; transition: all 0.3s ease; }
        .b1 { transform: rotate(45deg) translate(5px, 5px); }
        .b2 { opacity: 0; transform: scaleX(0); }
        .b3 { transform: rotate(-45deg) translate(5px, -5px); }

        /* MOBILE MENU */
        .mobile-menu {
          display: none; flex-direction: column; gap: 0;
          background: rgba(3,3,12,0.98);
          border-top: 1px solid rgba(124,58,237,0.15);
          max-height: 0; overflow: hidden;
          transition: max-height 0.35s ease;
        }
        .mobile-menu.open { max-height: 700px; }
        .mob-section { padding: 12px 20px; border-bottom: 1px solid rgba(255,255,255,0.05); }
        .mob-label { font-size: 9px; letter-spacing: 3px; color: rgba(255,255,255,0.3); margin-bottom: 8px; font-family: 'JetBrains Mono',monospace; }
        .mob-item {
          display: flex; align-items: center; gap: 10px;
          padding: 10px 12px; border-radius: 8px;
          color: rgba(255,255,255,0.75); text-decoration: none;
          font-size: 15px; font-weight: 600; font-family: 'Syne',sans-serif;
          transition: all 0.2s; margin-bottom: 2px;
        }
        .mob-item:hover { background: rgba(255,255,255,0.05); color: #fff; }
        .mob-auth { padding: 16px 20px; display: flex; flex-direction: column; gap: 8px; }
        .mob-login { display: block; padding: 12px; text-align: center; border-radius: 8px; border: 1px solid rgba(255,255,255,0.12); color: rgba(255,255,255,0.8); text-decoration: none; font-family: 'Syne',sans-serif; font-weight: 600; font-size: 14px; }
        .mob-signup { display: block; padding: 13px; text-align: center; border-radius: 8px; background: linear-gradient(135deg,#6d28d9,#0ea5e9); color: #fff; text-decoration: none; font-family: 'Syne',sans-serif; font-weight: 700; font-size: 14px; }
        .mob-logout { width: 100%; padding: 12px; border-radius: 8px; background: rgba(248,113,113,0.08); border: 1px solid rgba(248,113,113,0.2); color: #f87171; font-family: 'Syne',sans-serif; font-weight: 600; font-size: 14px; cursor: pointer; }

        @media (max-width: 900px) {
          .nav-center { display: none; }
          .nav-login, .nav-signup { display: none; }
          .nav-hamburger { display: flex; }
          .mobile-menu { display: flex; }
        }
        @media (max-width: 500px) {
          .nav-inner { padding: 0 16px; }
          .logo-tag { display: none; }
        }
      `}</style>
    </>
  );
}