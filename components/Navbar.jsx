// ============================================================
// FILE LOCATION: seekhowithrua-seo/components/Navbar.jsx
// ACTION: REPLACE existing Navbar.jsx with this file
// ============================================================

"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const COURSES = [
  { label: "Data Science", href: "/data-science-course", emoji: "📊", desc: "Python, ML, Deep Learning", color: "#3b82f6" },
  { label: "AI & ML", href: "/ai-course", emoji: "🤖", desc: "LLMs, Neural Networks, MLOps", color: "#00d4ff" },
  { label: "Full Stack", href: "/full-stack-development", emoji: "💻", desc: "React, Django, Next.js", color: "#1D9E75" },
  { label: "Mobile Apps", href: "/mobile-app-development", emoji: "📱", desc: "React Native & Expo", color: "#a855f7" },
  { label: "Game Dev", href: "/game-development", emoji: "🎮", desc: "Unity, Three.js, WebGL", color: "#f59e0b" },
  { label: "Python", href: "/python-programming-course", emoji: "🐍", desc: "Beginner to Advanced", color: "#ec4899" },
  { label: "IoT & Robotics", href: "/iot-robotics", emoji: "⚙️", desc: "Arduino, Raspberry Pi", color: "#06b6d4" },
  { label: "Web Dev", href: "/web-development-course", emoji: "🌐", desc: "HTML, CSS, JavaScript", color: "#84cc16" },
];

export default function Navbar() {
  const canvasRef = useRef(null);
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
    const handler = (e) => {
      if (dropRef.current && !dropRef.current.contains(e.target)) setCoursesOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // ── THREE.JS PARTICLE BACKGROUND ──
  useEffect(() => {
    let animId;
    async function init() {
      const THREE = (await import("three")).default || (await import("three"));
      const canvas = canvasRef.current;
      if (!canvas) return;
      const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setSize(canvas.offsetWidth, canvas.offsetHeight);
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(75, canvas.offsetWidth / canvas.offsetHeight, 0.1, 100);
      camera.position.z = 4;

      // Particle field
      const count = 120;
      const positions = new Float32Array(count * 3);
      const velocities = [];
      for (let i = 0; i < count; i++) {
        positions[i * 3] = (Math.random() - 0.5) * 20;
        positions[i * 3 + 1] = (Math.random() - 0.5) * 3;
        positions[i * 3 + 2] = (Math.random() - 0.5) * 4;
        velocities.push({ x: (Math.random() - 0.5) * 0.003, y: (Math.random() - 0.5) * 0.001 });
      }
      const geo = new THREE.BufferGeometry();
      geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
      const mat = new THREE.PointsMaterial({ size: 0.035, color: 0x7c3aed, transparent: true, opacity: 0.7 });
      const particles = new THREE.Points(geo, mat);
      scene.add(particles);

      // Subtle connecting lines
      const lineGeo = new THREE.BufferGeometry();
      const lp = new Float32Array(40 * 6);
      for (let i = 0; i < 40; i++) {
        lp[i * 6] = (Math.random() - 0.5) * 20;
        lp[i * 6 + 1] = (Math.random() - 0.5) * 3;
        lp[i * 6 + 2] = 0;
        lp[i * 6 + 3] = (Math.random() - 0.5) * 20;
        lp[i * 6 + 4] = (Math.random() - 0.5) * 3;
        lp[i * 6 + 5] = 0;
      }
      lineGeo.setAttribute("position", new THREE.BufferAttribute(lp, 3));
      const lineMat = new THREE.LineBasicMaterial({ color: 0x4f46e5, transparent: true, opacity: 0.08 });
      scene.add(new THREE.LineSegments(lineGeo, lineMat));

      let t = 0;
      const animate = () => {
        animId = requestAnimationFrame(animate);
        t += 0.005;
        const pos = geo.attributes.position.array;
        for (let i = 0; i < count; i++) {
          pos[i * 3] += velocities[i].x;
          pos[i * 3 + 1] += velocities[i].y + Math.sin(t + i) * 0.0003;
          if (pos[i * 3] > 10) pos[i * 3] = -10;
          if (pos[i * 3] < -10) pos[i * 3] = 10;
        }
        geo.attributes.position.needsUpdate = true;
        mat.opacity = 0.5 + Math.sin(t * 0.5) * 0.2;
        renderer.render(scene, camera);
      };
      animate();

      const resize = () => {
        if (!canvas) return;
        renderer.setSize(canvas.offsetWidth, canvas.offsetHeight);
        camera.aspect = canvas.offsetWidth / canvas.offsetHeight;
        camera.updateProjectionMatrix();
      };
      window.addEventListener("resize", resize);
    }
    init().catch(() => {});
    return () => cancelAnimationFrame(animId);
  }, []);

  const isMaster = user?.email === "master@gmail.com";
  const userName = isMaster ? "Master" : (user?.profile?.name || user?.name || user?.email?.split("@")[0] || "");

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "EducationalOrganization", name: "Seekho With Rua", alternateName: ["SekhoWithRua", "SikhoWithRua"], description: "India's top EdTech platform.", url: "https://seekhowithrua.com" }) }} />

      <header className={`nv ${scrolled ? "sc" : ""}`}>
        {/* Three.js canvas */}
        <canvas ref={canvasRef} className="nv-canvas" aria-hidden="true" />

        {/* Animated gradient line at bottom */}
        <div className="nv-line" />

        <div className="nv-inner">
          {/* ── LOGO ── */}
          <Link href="/" className="nv-logo">
            <div className="nv-logo-orb">
              <div className="nv-logo-ring" />
              <span className="nv-logo-s">S</span>
            </div>
            <div>
              <div className="nv-logo-name">SeekhowithRua</div>
              <div className="nv-logo-sub">Learn · Build · Master</div>
            </div>
          </Link>

          {/* ── CENTER NAV ── */}
          <nav className="nv-center">
            {/* Courses dropdown */}
            <div className="nv-drop-wrap" ref={dropRef}>
              <button
                className={`nv-btn ${coursesOpen ? "active" : ""}`}
                onClick={() => setCoursesOpen(p => !p)}
              >
                <span>Courses</span>
                <svg className={`nv-chevron ${coursesOpen ? "open" : ""}`} viewBox="0 0 10 6" fill="none">
                  <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </button>

              {coursesOpen && (
                <div className="nv-drop">
                  <div className="nv-drop-header">
                    <span className="nv-drop-title">All Courses</span>
                    <span className="nv-drop-tag">8 tracks · 1000+ students</span>
                  </div>
                  <div className="nv-drop-grid">
                    {COURSES.map(c => (
                      <Link key={c.href} href={c.href} className="nv-drop-item" onClick={() => setCoursesOpen(false)}>
                        <div className="nv-di-icon" style={{ background: c.color + "18", boxShadow: `0 0 12px ${c.color}22` }}>
                          <span>{c.emoji}</span>
                        </div>
                        <div>
                          <div className="nv-di-label">{c.label}</div>
                          <div className="nv-di-desc">{c.desc}</div>
                        </div>
                        <div className="nv-di-arrow">→</div>
                      </Link>
                    ))}
                  </div>
                  <div className="nv-drop-footer">
                    <a href="https://app.seekhowithrua.com" className="nv-drop-launch" onClick={() => setCoursesOpen(false)}>
                      <span>🚀</span>
                      <span>Launch Full Platform</span>
                      <span className="nv-launch-arrow">↗</span>
                    </a>
                  </div>
                </div>
              )}
            </div>

            <Link href="/blog" className="nv-btn">Blog</Link>
            <a href="https://app.seekhowithrua.com" className="nv-btn" target="_blank" rel="noopener">Platform</a>
          </nav>

          {/* ── RIGHT ── */}
          <div className="nv-right">
            {user ? (
              <>
                <div className={`nv-user ${isMaster ? "master" : ""}`}>
                  <div className="nv-user-dot" />
                  <span>{userName}</span>
                </div>
                <button className="nv-logout" onClick={() => { localStorage.removeItem("cosmos_user"); setUser(null); window.dispatchEvent(new Event("storage")); }}>
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link href="/login" className="nv-login">Login</Link>
                <Link href="/signup" className="nv-signup">
                  <span>Get Started</span>
                  <span className="nv-signup-arrow">→</span>
                </Link>
              </>
            )}

            {/* Hamburger */}
            <button className="nv-ham" onClick={() => setMenuOpen(p => !p)} aria-label="Menu">
              <div className={`nv-ham-lines ${menuOpen ? "open" : ""}`}>
                <span /><span /><span />
              </div>
            </button>
          </div>
        </div>

        {/* ── MOBILE MENU ── */}
        <div className={`nv-mob ${menuOpen ? "open" : ""}`}>
          <div className="nv-mob-section">
            <div className="nv-mob-label">COURSES</div>
            <div className="nv-mob-grid">
              {COURSES.map(c => (
                <Link key={c.href} href={c.href} className="nv-mob-course" onClick={() => setMenuOpen(false)}
                  style={{ borderColor: c.color + "30" }}>
                  <span style={{ fontSize: 20 }}>{c.emoji}</span>
                  <div>
                    <div className="nv-mc-name">{c.label}</div>
                    <div className="nv-mc-desc">{c.desc}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
          <div className="nv-mob-links">
            <Link href="/blog" className="nv-mob-link" onClick={() => setMenuOpen(false)}>✍️ Blog</Link>
            <a href="https://app.seekhowithrua.com" className="nv-mob-link" onClick={() => setMenuOpen(false)}>🚀 Platform</a>
          </div>
          <div className="nv-mob-auth">
            {user ? (
              <button className="nv-mob-logout" onClick={() => { localStorage.removeItem("cosmos_user"); setUser(null); window.dispatchEvent(new Event("storage")); setMenuOpen(false); }}>
                Logout
              </button>
            ) : (
              <>
                <Link href="/login" className="nv-mob-login" onClick={() => setMenuOpen(false)}>Login</Link>
                <Link href="/signup" className="nv-mob-signup" onClick={() => setMenuOpen(false)}>Get Started Free →</Link>
              </>
            )}
          </div>
        </div>
      </header>

      <div style={{ height: "68px" }} />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap');

        /* ── BASE ── */
        .nv {
          position: fixed; top: 0; left: 0; right: 0; z-index: 9999;
          font-family: 'Syne', sans-serif;
          transition: all 0.4s cubic-bezier(0.4,0,0.2,1);
          background: rgba(4,4,16,0.55);
          backdrop-filter: blur(24px) saturate(200%);
          -webkit-backdrop-filter: blur(24px) saturate(200%);
        }
        .nv.sc {
          background: rgba(4,4,16,0.92);
          box-shadow: 0 4px 60px rgba(0,0,0,0.5), 0 1px 0 rgba(124,58,237,0.15);
        }

        /* Three.js canvas */
        .nv-canvas {
          position: absolute; inset: 0;
          width: 100%; height: 100%;
          pointer-events: none; opacity: 0.6;
        }

        /* Animated bottom line */
        .nv-line {
          position: absolute; bottom: 0; left: 0; right: 0; height: 1px;
          background: linear-gradient(90deg, transparent 0%, rgba(124,58,237,0.6) 30%, rgba(0,212,255,0.6) 60%, transparent 100%);
          background-size: 200% 100%;
          animation: lineSlide 4s linear infinite;
        }
        @keyframes lineSlide {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }

        /* ── INNER ── */
        .nv-inner {
          position: relative; z-index: 1;
          max-width: 1280px; margin: 0 auto;
          padding: 0 28px; height: 68px;
          display: flex; align-items: center; justify-content: space-between; gap: 20px;
        }

        /* ── LOGO ── */
        .nv-logo {
          display: flex; align-items: center; gap: 12px;
          text-decoration: none; flex-shrink: 0;
        }
        .nv-logo-orb {
          position: relative; width: 38px; height: 38px;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
        }
        .nv-logo-ring {
          position: absolute; inset: -2px; border-radius: 12px;
          background: linear-gradient(135deg, #7c3aed, #00d4ff, #7c3aed);
          background-size: 200% 200%;
          animation: ringRotate 3s linear infinite;
          padding: 2px;
        }
        @keyframes ringRotate { 0%{background-position:0% 50%} 50%{background-position:100% 50%} 100%{background-position:0% 50%} }
        .nv-logo-s {
          position: relative; z-index: 1;
          width: 34px; height: 34px; border-radius: 10px;
          background: #070718;
          display: flex; align-items: center; justify-content: center;
          font-size: 17px; font-weight: 800; color: #fff;
        }
        .nv-logo-name {
          font-size: 16px; font-weight: 800; letter-spacing: -0.4px;
          background: linear-gradient(90deg, #fff 0%, #c4b5fd 50%, #7c3aed 100%);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .nv-logo-sub {
          font-size: 9px; color: rgba(167,139,250,0.55);
          font-family: 'JetBrains Mono', monospace; letter-spacing: 1px; margin-top: 2px;
        }

        /* ── NAV BUTTONS ── */
        .nv-center {
          display: flex; align-items: center; gap: 2px; flex: 1; justify-content: center;
        }
        .nv-btn {
          display: flex; align-items: center; gap: 6px;
          padding: 8px 16px; border-radius: 10px;
          font-size: 14px; font-weight: 600; color: rgba(255,255,255,0.7);
          text-decoration: none; background: none; border: none; cursor: pointer;
          font-family: 'Syne', sans-serif; letter-spacing: -0.2px;
          transition: all 0.2s; position: relative;
        }
        .nv-btn::before {
          content: ''; position: absolute; inset: 0; border-radius: 10px;
          background: rgba(255,255,255,0); transition: background 0.2s;
        }
        .nv-btn:hover, .nv-btn.active {
          color: #fff; background: rgba(124,58,237,0.12);
          border: 1px solid rgba(124,58,237,0.2);
          box-shadow: 0 0 16px rgba(124,58,237,0.1);
        }
        .nv-btn { border: 1px solid transparent; }

        .nv-chevron {
          width: 10px; height: 10px; transition: transform 0.25s;
          flex-shrink: 0;
        }
        .nv-chevron.open { transform: rotate(180deg); }

        /* ── DROPDOWN ── */
        .nv-drop-wrap { position: relative; }
        .nv-drop {
          position: absolute; top: calc(100% + 12px); left: 50%;
          transform: translateX(-50%);
          width: 560px;
          background: rgba(6,6,20,0.97);
          border: 1px solid rgba(124,58,237,0.2);
          border-radius: 20px;
          box-shadow: 0 24px 80px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.04), inset 0 1px 0 rgba(255,255,255,0.06);
          overflow: hidden;
          animation: dropFade 0.18s cubic-bezier(0.4,0,0.2,1);
          backdrop-filter: blur(20px);
        }
        @keyframes dropFade {
          from { opacity: 0; transform: translateX(-50%) translateY(-10px) scale(0.97); }
          to { opacity: 1; transform: translateX(-50%) translateY(0) scale(1); }
        }

        .nv-drop-header {
          display: flex; align-items: center; justify-content: space-between;
          padding: 14px 16px 10px;
          border-bottom: 1px solid rgba(255,255,255,0.05);
        }
        .nv-drop-title {
          font-size: 10px; font-weight: 700; letter-spacing: 3px;
          color: rgba(167,139,250,0.7); text-transform: uppercase;
          font-family: 'JetBrains Mono', monospace;
        }
        .nv-drop-tag {
          font-size: 10px; color: rgba(255,255,255,0.25);
          font-family: 'JetBrains Mono', monospace;
        }

        .nv-drop-grid {
          display: grid; grid-template-columns: 1fr 1fr;
          gap: 3px; padding: 10px;
        }
        .nv-drop-item {
          display: flex; align-items: center; gap: 10px;
          padding: 10px 12px; border-radius: 12px;
          text-decoration: none; color: rgba(255,255,255,0.75);
          transition: all 0.15s; border: 1px solid transparent;
          position: relative;
        }
        .nv-drop-item:hover {
          background: rgba(124,58,237,0.1);
          border-color: rgba(124,58,237,0.2);
          color: #fff;
          transform: translateX(2px);
        }
        .nv-di-icon {
          width: 36px; height: 36px; border-radius: 10px;
          display: flex; align-items: center; justify-content: center;
          font-size: 17px; flex-shrink: 0;
          transition: transform 0.2s;
        }
        .nv-drop-item:hover .nv-di-icon { transform: scale(1.1); }
        .nv-di-label { font-size: 13px; font-weight: 700; margin-bottom: 1px; }
        .nv-di-desc {
          font-size: 10px; color: rgba(255,255,255,0.35);
          font-family: 'JetBrains Mono', monospace;
        }
        .nv-di-arrow {
          margin-left: auto; font-size: 14px; color: rgba(255,255,255,0.2);
          transition: all 0.2s; flex-shrink: 0;
        }
        .nv-drop-item:hover .nv-di-arrow { color: #7c3aed; transform: translateX(3px); }

        .nv-drop-footer {
          padding: 10px;
          border-top: 1px solid rgba(255,255,255,0.05);
        }
        .nv-drop-launch {
          display: flex; align-items: center; justify-content: center; gap: 8px;
          padding: 12px;
          background: linear-gradient(135deg, rgba(124,58,237,0.2), rgba(0,212,255,0.15));
          border: 1px solid rgba(124,58,237,0.25);
          border-radius: 12px;
          color: rgba(167,139,250,0.9); font-size: 13px; font-weight: 700;
          text-decoration: none; font-family: 'Syne', sans-serif;
          transition: all 0.2s;
        }
        .nv-drop-launch:hover {
          background: linear-gradient(135deg, rgba(124,58,237,0.35), rgba(0,212,255,0.25));
          color: #fff; border-color: rgba(124,58,237,0.4);
          box-shadow: 0 0 24px rgba(124,58,237,0.2);
        }
        .nv-launch-arrow { margin-left: 4px; font-size: 14px; }

        /* ── RIGHT ── */
        .nv-right { display: flex; align-items: center; gap: 8px; flex-shrink: 0; }

        .nv-user {
          display: flex; align-items: center; gap: 7px;
          padding: 7px 14px; border-radius: 10px;
          background: rgba(0,212,255,0.07); border: 1px solid rgba(0,212,255,0.15);
          font-size: 13px; font-weight: 600; color: #38bdf8;
        }
        .nv-user.master { background: rgba(251,146,60,0.07); border-color: rgba(251,146,60,0.15); color: #fb923c; }
        .nv-user-dot {
          width: 6px; height: 6px; border-radius: 50%; background: #22c55e;
          box-shadow: 0 0 6px #22c55e; flex-shrink: 0;
        }

        .nv-logout {
          padding: 7px 14px; border-radius: 10px;
          border: 1px solid rgba(248,113,113,0.2);
          background: rgba(248,113,113,0.05); color: rgba(248,113,113,0.8);
          font-size: 13px; font-weight: 600; cursor: pointer;
          font-family: 'Syne', sans-serif; transition: all 0.2s;
        }
        .nv-logout:hover { background: rgba(248,113,113,0.12); color: #f87171; }

        .nv-login {
          padding: 7px 16px; border-radius: 10px;
          background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.1);
          color: rgba(255,255,255,0.75); font-size: 13px; font-weight: 600;
          text-decoration: none; font-family: 'Syne', sans-serif;
          transition: all 0.2s;
        }
        .nv-login:hover { background: rgba(255,255,255,0.08); color: #fff; border-color: rgba(255,255,255,0.2); }

        .nv-signup {
          display: flex; align-items: center; gap: 6px;
          padding: 8px 18px; border-radius: 10px;
          background: linear-gradient(135deg, #7c3aed 0%, #4f46e5 50%, #0ea5e9 100%);
          background-size: 200% 100%;
          color: #fff; font-size: 13px; font-weight: 700;
          text-decoration: none; font-family: 'Syne', sans-serif;
          box-shadow: 0 0 24px rgba(124,58,237,0.4), inset 0 1px 0 rgba(255,255,255,0.15);
          transition: all 0.3s; white-space: nowrap;
          animation: signupShimmer 3s ease infinite;
        }
        @keyframes signupShimmer {
          0%,100% { background-position: 0% 50%; box-shadow: 0 0 24px rgba(124,58,237,0.4); }
          50% { background-position: 100% 50%; box-shadow: 0 0 32px rgba(79,70,229,0.6); }
        }
        .nv-signup:hover { transform: translateY(-2px); box-shadow: 0 8px 32px rgba(124,58,237,0.6); }
        .nv-signup-arrow { font-size: 14px; transition: transform 0.2s; }
        .nv-signup:hover .nv-signup-arrow { transform: translateX(3px); }

        /* ── HAMBURGER ── */
        .nv-ham {
          display: none; background: none; border: none; cursor: pointer; padding: 8px;
          border-radius: 8px; transition: background 0.2s;
        }
        .nv-ham:hover { background: rgba(255,255,255,0.06); }
        .nv-ham-lines { display: flex; flex-direction: column; gap: 5px; width: 22px; }
        .nv-ham-lines span {
          display: block; height: 2px; border-radius: 2px;
          background: rgba(255,255,255,0.8); transition: all 0.3s ease;
        }
        .nv-ham-lines.open span:nth-child(1) { transform: rotate(45deg) translate(5px, 5px); }
        .nv-ham-lines.open span:nth-child(2) { opacity: 0; transform: scaleX(0); }
        .nv-ham-lines.open span:nth-child(3) { transform: rotate(-45deg) translate(5px, -5px); }

        /* ── MOBILE MENU ── */
        .nv-mob {
          position: relative; z-index: 1;
          display: none; flex-direction: column;
          background: rgba(4,4,16,0.98);
          border-top: 1px solid rgba(124,58,237,0.12);
          max-height: 0; overflow: hidden;
          transition: max-height 0.4s cubic-bezier(0.4,0,0.2,1);
        }
        .nv-mob.open { max-height: 800px; }

        .nv-mob-section { padding: 16px 20px; }
        .nv-mob-label {
          font-size: 9px; letter-spacing: 3px; color: rgba(255,255,255,0.25);
          font-family: 'JetBrains Mono', monospace; margin-bottom: 10px;
        }
        .nv-mob-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 6px; }
        .nv-mob-course {
          display: flex; align-items: center; gap: 8px;
          padding: 10px 12px; border-radius: 10px;
          background: rgba(255,255,255,0.03); border: 1px solid;
          text-decoration: none; color: rgba(255,255,255,0.75);
          transition: all 0.2s;
        }
        .nv-mob-course:hover { background: rgba(124,58,237,0.1); color: #fff; }
        .nv-mc-name { font-size: 12px; font-weight: 700; }
        .nv-mc-desc { font-size: 10px; color: rgba(255,255,255,0.35); font-family: 'JetBrains Mono', monospace; margin-top: 1px; }

        .nv-mob-links {
          display: flex; gap: 8px; padding: 0 20px 12px;
          border-bottom: 1px solid rgba(255,255,255,0.05);
        }
        .nv-mob-link {
          flex: 1; display: flex; align-items: center; justify-content: center; gap: 6px;
          padding: 10px; border-radius: 10px;
          background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08);
          color: rgba(255,255,255,0.75); text-decoration: none;
          font-size: 13px; font-weight: 600; font-family: 'Syne', sans-serif;
          transition: all 0.2s;
        }
        .nv-mob-link:hover { background: rgba(255,255,255,0.08); color: #fff; }

        .nv-mob-auth { padding: 12px 20px 20px; display: flex; flex-direction: column; gap: 8px; }
        .nv-mob-login {
          display: block; padding: 12px; text-align: center; border-radius: 10px;
          border: 1px solid rgba(255,255,255,0.1); background: rgba(255,255,255,0.03);
          color: rgba(255,255,255,0.75); text-decoration: none;
          font-family: 'Syne', sans-serif; font-weight: 600; font-size: 14px;
          transition: all 0.2s;
        }
        .nv-mob-login:hover { background: rgba(255,255,255,0.07); color: #fff; }
        .nv-mob-signup {
          display: block; padding: 13px; text-align: center; border-radius: 10px;
          background: linear-gradient(135deg, #7c3aed, #0ea5e9);
          color: #fff; text-decoration: none;
          font-family: 'Syne', sans-serif; font-weight: 700; font-size: 14px;
          box-shadow: 0 4px 20px rgba(124,58,237,0.4);
          transition: opacity 0.2s;
        }
        .nv-mob-signup:hover { opacity: 0.9; }
        .nv-mob-logout {
          width: 100%; padding: 12px; border-radius: 10px;
          background: rgba(248,113,113,0.06); border: 1px solid rgba(248,113,113,0.15);
          color: #f87171; font-family: 'Syne', sans-serif; font-weight: 600; font-size: 14px; cursor: pointer;
        }

        /* ── RESPONSIVE ── */
        @media (max-width: 960px) {
          .nv-center { display: none; }
          .nv-login, .nv-signup { display: none; }
          .nv-ham { display: flex; }
          .nv-mob { display: flex; }
        }
        @media (max-width: 500px) {
          .nv-inner { padding: 0 16px; }
          .nv-logo-sub { display: none; }
          .nv-mob-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </>
  );
}