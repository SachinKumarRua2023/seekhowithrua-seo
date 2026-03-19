// ============================================================
// FILE LOCATION: seekhowithrua-seo/components/Navbar.jsx
// ACTION: REPLACE existing Navbar.jsx with this file
// ============================================================
"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const COURSES = [
  { label: "Data Science",   href: "/data-science-course",       emoji: "📊", desc: "Python, ML, Deep Learning",  color: "#3b82f6" },
  { label: "AI & ML",        href: "/ai-course",                 emoji: "🤖", desc: "LLMs, Neural Networks",       color: "#00d4ff" },
  { label: "Full Stack",     href: "/full-stack-development",    emoji: "💻", desc: "React, Django, Next.js",      color: "#1D9E75" },
  { label: "Mobile Apps",    href: "/mobile-app-development",    emoji: "📱", desc: "React Native & Expo",         color: "#a855f7" },
  { label: "Game Dev",       href: "/game-development",          emoji: "🎮", desc: "Unity, Three.js, WebGL",      color: "#f59e0b" },
  { label: "Python",         href: "/python-programming-course", emoji: "🐍", desc: "Beginner to Advanced",        color: "#ec4899" },
  { label: "IoT & Robotics", href: "/iot-robotics",              emoji: "⚙️", desc: "Arduino, Raspberry Pi",       color: "#06b6d4" },
  { label: "Web Dev",        href: "/web-development-course",    emoji: "🌐", desc: "HTML, CSS, JavaScript",       color: "#84cc16" },
];

export default function Navbar() {
  const canvasRef = useRef(null);
  const [menuOpen, setMenuOpen]     = useState(false);
  const [scrolled, setScrolled]     = useState(false);
  const [coursesOpen, setCoursesOpen] = useState(false);
  const [user, setUser]             = useState(null);
  const dropRef = useRef(null);

  /* auth */
  useEffect(() => {
    const check = () => { try { const r = localStorage.getItem("cosmos_user"); setUser(r ? JSON.parse(r) : null); } catch { setUser(null); } };
    check(); window.addEventListener("storage", check);
    return () => window.removeEventListener("storage", check);
  }, []);

  /* scroll */
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  /* close dropdown on outside click */
  useEffect(() => {
    const fn = (e) => { if (dropRef.current && !dropRef.current.contains(e.target)) setCoursesOpen(false); };
    document.addEventListener("mousedown", fn);
    return () => document.removeEventListener("mousedown", fn);
  }, []);

  /* Three.js particles */
  useEffect(() => {
    let id;
    (async () => {
      const THREE = (await import("three")).default || (await import("three"));
      const cv = canvasRef.current; if (!cv) return;
      const W = cv.offsetWidth, H = cv.offsetHeight;
      const renderer = new THREE.WebGLRenderer({ canvas: cv, alpha: true, antialias: true });
      renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
      renderer.setSize(W, H);
      const scene = new THREE.Scene();
      const cam = new THREE.PerspectiveCamera(70, W / H, 0.1, 100);
      cam.position.z = 4;

      const N = 140;
      const pos = new Float32Array(N * 3);
      const vel = Array.from({ length: N }, () => ({ x: (Math.random() - .5) * .003, y: (Math.random() - .5) * .001 }));
      for (let i = 0; i < N; i++) { pos[i*3]=(Math.random()-.5)*22; pos[i*3+1]=(Math.random()-.5)*4; pos[i*3+2]=(Math.random()-.5)*3; }
      const geo = new THREE.BufferGeometry(); geo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
      const mat = new THREE.PointsMaterial({ size: .03, color: 0x8b5cf6, transparent: true, opacity: .65 });
      scene.add(new THREE.Points(geo, mat));

      let t = 0;
      const tick = () => {
        id = requestAnimationFrame(tick); t += .004;
        for (let i = 0; i < N; i++) {
          pos[i*3] += vel[i].x; pos[i*3+1] += vel[i].y + Math.sin(t+i)*.0003;
          if (pos[i*3] > 11) pos[i*3] = -11; if (pos[i*3] < -11) pos[i*3] = 11;
        }
        geo.attributes.position.needsUpdate = true;
        mat.opacity = .45 + Math.sin(t*.4)*.2;
        renderer.render(scene, cam);
      };
      tick();

      const resize = () => { const w = cv.offsetWidth, h = cv.offsetHeight; renderer.setSize(w, h); cam.aspect = w/h; cam.updateProjectionMatrix(); };
      window.addEventListener("resize", resize);
    })().catch(() => {});
    return () => cancelAnimationFrame(id);
  }, []);

  const isMaster = user?.email === "master@gmail.com";
  const uname = isMaster ? "Master" : (user?.profile?.name || user?.name || user?.email?.split("@")[0] || "");

  return (
    <>
      <header className={`nv${scrolled ? " sc" : ""}`}>
        <canvas ref={canvasRef} className="nv-cv" aria-hidden="true" />
        <div className="nv-glow-line" />

        <div className="nv-wrap">
          {/* LOGO */}
          <Link href="/" className="nv-logo">
            <div className="nv-orb">
              <div className="nv-orb-ring" />
              <span className="nv-orb-s">S</span>
            </div>
            <div className="nv-brand">
              <span className="nv-brand-name">Seekho<span className="nv-brand-rua">withRua</span></span>
              <span className="nv-brand-tag">Learn · Build · Master</span>
            </div>
          </Link>

          {/* CENTER */}
          <nav className="nv-center">
            <div className="nv-ddwrap" ref={dropRef}>
              <button className={`nv-link${coursesOpen ? " on" : ""}`} onClick={() => setCoursesOpen(p => !p)}>
                Courses
                <svg className={`nv-chev${coursesOpen ? " open" : ""}`} viewBox="0 0 10 6" fill="none">
                  <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>

              {coursesOpen && (
                <div className="nv-dd">
                  <div className="nv-dd-top">
                    <span className="nv-dd-ttl">ALL COURSES</span>
                    <span className="nv-dd-sub">8 tracks · 1000+ students</span>
                  </div>
                  <div className="nv-dd-grid">
                    {COURSES.map(c => (
                      <Link key={c.href} href={c.href} className="nv-di" onClick={() => setCoursesOpen(false)}>
                        <span className="nv-di-ico" style={{ background: c.color + "1a", boxShadow: `0 0 10px ${c.color}18` }}>{c.emoji}</span>
                        <div className="nv-di-txt">
                          <div className="nv-di-name">{c.label}</div>
                          <div className="nv-di-desc">{c.desc}</div>
                        </div>
                        <span className="nv-di-arr">→</span>
                      </Link>
                    ))}
                  </div>
                  <a href="https://app.seekhowithrua.com" className="nv-dd-launch" onClick={() => setCoursesOpen(false)}>
                    🚀 Launch Full Platform &nbsp;↗
                  </a>
                </div>
              )}
            </div>
            <Link href="/blog" className="nv-link">Blog</Link>
            <a  href="https://app.seekhowithrua.com" className="nv-link" target="_blank" rel="noopener">Platform</a>
          </nav>

          {/* RIGHT */}
          <div className="nv-right">
            {user ? (
              <>
                <div className={`nv-usr${isMaster ? " mstr" : ""}`}>
                  <span className="nv-usr-dot" />{uname}
                </div>
                <button className="nv-out" onClick={() => { localStorage.removeItem("cosmos_user"); setUser(null); window.dispatchEvent(new Event("storage")); }}>Logout</button>
              </>
            ) : (
              <>
                <Link href="/login" className="nv-in">Login</Link>
                <Link href="/signup" className="nv-up">Get Started <span className="nv-arr">→</span></Link>
              </>
            )}
            <button className="nv-ham" onClick={() => setMenuOpen(p => !p)} aria-label="Menu">
              <span className={menuOpen ? "h1o" : "h1"} /><span className={menuOpen ? "h2o" : "h2"} /><span className={menuOpen ? "h3o" : "h3"} />
            </button>
          </div>
        </div>

        {/* MOBILE */}
        <div className={`nv-mob${menuOpen ? " open" : ""}`}>
          <div className="mob-sec">
            <p className="mob-lbl">COURSES</p>
            <div className="mob-grid">
              {COURSES.map(c => (
                <Link key={c.href} href={c.href} className="mob-card" style={{ borderColor: c.color + "35" }} onClick={() => setMenuOpen(false)}>
                  <span style={{ fontSize: 18 }}>{c.emoji}</span>
                  <div><div className="mob-cn">{c.label}</div><div className="mob-cd">{c.desc}</div></div>
                </Link>
              ))}
            </div>
          </div>
          <div className="mob-row">
            <Link href="/blog" className="mob-lnk" onClick={() => setMenuOpen(false)}>✍️ Blog</Link>
            <a href="https://app.seekhowithrua.com" className="mob-lnk" onClick={() => setMenuOpen(false)}>🚀 Platform</a>
          </div>
          <div className="mob-auth">
            {user
              ? <button className="mob-out" onClick={() => { localStorage.removeItem("cosmos_user"); setUser(null); window.dispatchEvent(new Event("storage")); setMenuOpen(false); }}>Logout</button>
              : <><Link href="/login" className="mob-li" onClick={() => setMenuOpen(false)}>Login</Link>
                  <Link href="/signup" className="mob-su" onClick={() => setMenuOpen(false)}>Get Started Free →</Link></>
            }
          </div>
        </div>
      </header>

      <div style={{ height: 68 }} />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap');

        /* BASE */
        .nv { position:fixed;top:0;left:0;right:0;z-index:9999;font-family:'Syne',sans-serif;
              background:rgba(3,3,14,.5);backdrop-filter:blur(28px) saturate(180%);
              -webkit-backdrop-filter:blur(28px) saturate(180%);transition:all .35s ease; }
        .nv.sc { background:rgba(3,3,14,.94);box-shadow:0 2px 48px rgba(0,0,0,.55),0 1px 0 rgba(124,58,237,.12); }

        /* particles canvas */
        .nv-cv { position:absolute;inset:0;width:100%;height:100%;pointer-events:none;opacity:.55; }

        /* animated bottom glow line */
        .nv-glow-line { position:absolute;bottom:0;left:0;right:0;height:1px;
          background:linear-gradient(90deg,transparent,rgba(124,58,237,.7) 35%,rgba(0,212,255,.7) 65%,transparent);
          background-size:250% 100%;animation:glowSlide 5s linear infinite; }
        @keyframes glowSlide { from{background-position:200% 0} to{background-position:-200% 0} }

        /* WRAP */
        .nv-wrap { position:relative;z-index:2;max-width:1300px;margin:0 auto;
                   padding:0 32px;height:68px;display:flex;align-items:center;
                   justify-content:space-between;gap:16px; }

        /* LOGO */
        .nv-logo { display:flex;align-items:center;gap:11px;text-decoration:none;flex-shrink:0; }
        .nv-orb  { position:relative;width:40px;height:40px;display:flex;align-items:center;justify-content:center;flex-shrink:0; }
        .nv-orb-ring {
          position:absolute;inset:-2px;border-radius:13px;
          background:linear-gradient(135deg,#7c3aed,#06b6d4,#7c3aed);
          background-size:300% 300%;animation:orbSpin 4s linear infinite;
        }
        @keyframes orbSpin { 0%{background-position:0% 50%}50%{background-position:100% 50%}100%{background-position:0% 50%} }
        .nv-orb-s { position:relative;z-index:1;width:36px;height:36px;border-radius:11px;
                    background:#060616;display:flex;align-items:center;justify-content:center;
                    font-size:18px;font-weight:800;color:#fff;letter-spacing:-1px; }

        .nv-brand { display:flex;flex-direction:column;line-height:1;min-width:0; }
        .nv-brand-name { font-size:17px;font-weight:800;letter-spacing:-.5px;white-space:nowrap;
                         background:linear-gradient(90deg,#fff 0%,#e2d9f3 40%,#a78bfa 75%,#7c3aed 100%);
                         -webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text; }
        .nv-brand-rua  { opacity:.85; }
        .nv-brand-tag  { font-size:9px;color:rgba(167,139,250,.5);font-family:'JetBrains Mono',monospace;
                         letter-spacing:1.2px;margin-top:3px; }

        /* NAV LINKS */
        .nv-center { display:flex;align-items:center;gap:2px;flex:1;justify-content:center; }
        .nv-link {
          display:flex;align-items:center;gap:5px;padding:8px 15px;border-radius:10px;
          font-size:14px;font-weight:600;color:rgba(255,255,255,.72);
          text-decoration:none;background:none;border:1px solid transparent;cursor:pointer;
          font-family:'Syne',sans-serif;letter-spacing:-.15px;transition:all .2s;
        }
        .nv-link:hover,.nv-link.on {
          color:#fff;background:rgba(124,58,237,.1);border-color:rgba(124,58,237,.22);
          box-shadow:0 0 14px rgba(124,58,237,.1);
        }
        .nv-chev { width:10px;height:10px;transition:transform .2s;flex-shrink:0; }
        .nv-chev.open { transform:rotate(180deg); }

        /* DROPDOWN */
        .nv-ddwrap { position:relative; }
        .nv-dd {
          position:absolute;top:calc(100% + 14px);left:50%;transform:translateX(-50%);
          width:580px;
          background:rgba(5,5,18,.97);
          border:1px solid rgba(124,58,237,.22);
          border-radius:20px;overflow:hidden;
          box-shadow:0 28px 80px rgba(0,0,0,.75),inset 0 1px 0 rgba(255,255,255,.05);
          backdrop-filter:blur(24px);
          animation:ddIn .16s cubic-bezier(.4,0,.2,1);
        }
        @keyframes ddIn { from{opacity:0;transform:translateX(-50%) translateY(-10px) scale(.97)} to{opacity:1;transform:translateX(-50%) translateY(0) scale(1)} }

        .nv-dd-top { display:flex;align-items:center;justify-content:space-between;
                     padding:14px 18px 10px;border-bottom:1px solid rgba(255,255,255,.05); }
        .nv-dd-ttl { font-size:9px;font-weight:700;letter-spacing:3px;color:rgba(167,139,250,.7);
                     font-family:'JetBrains Mono',monospace; }
        .nv-dd-sub { font-size:10px;color:rgba(255,255,255,.22);font-family:'JetBrains Mono',monospace; }

        .nv-dd-grid { display:grid;grid-template-columns:1fr 1fr;gap:3px;padding:10px; }
        .nv-di { display:flex;align-items:center;gap:10px;padding:10px 12px;border-radius:12px;
                 text-decoration:none;color:rgba(255,255,255,.75);border:1px solid transparent;
                 transition:all .15s; }
        .nv-di:hover { background:rgba(124,58,237,.1);border-color:rgba(124,58,237,.2);color:#fff;transform:translateX(2px); }
        .nv-di-ico { width:34px;height:34px;border-radius:9px;display:flex;align-items:center;
                     justify-content:center;font-size:16px;flex-shrink:0;transition:transform .2s; }
        .nv-di:hover .nv-di-ico { transform:scale(1.12); }
        .nv-di-txt { flex:1;min-width:0; }
        .nv-di-name { font-size:12px;font-weight:700;margin-bottom:1px;white-space:nowrap; }
        .nv-di-desc { font-size:10px;color:rgba(255,255,255,.32);font-family:'JetBrains Mono',monospace; }
        .nv-di-arr { font-size:13px;color:rgba(255,255,255,.18);transition:all .2s;flex-shrink:0; }
        .nv-di:hover .nv-di-arr { color:#7c3aed;transform:translateX(3px); }

        .nv-dd-launch {
          display:flex;align-items:center;justify-content:center;
          margin:10px;padding:11px;border-radius:12px;
          background:linear-gradient(135deg,rgba(124,58,237,.18),rgba(0,212,255,.12));
          border:1px solid rgba(124,58,237,.22);
          color:rgba(167,139,250,.9);font-size:13px;font-weight:700;
          text-decoration:none;font-family:'Syne',sans-serif;transition:all .2s;
        }
        .nv-dd-launch:hover { background:linear-gradient(135deg,rgba(124,58,237,.32),rgba(0,212,255,.22));color:#fff;box-shadow:0 0 22px rgba(124,58,237,.2); }

        /* RIGHT */
        .nv-right { display:flex;align-items:center;gap:8px;flex-shrink:0; }
        .nv-usr { display:flex;align-items:center;gap:7px;padding:6px 13px;border-radius:9px;
                  background:rgba(0,212,255,.07);border:1px solid rgba(0,212,255,.15);
                  font-size:13px;font-weight:600;color:#38bdf8; }
        .nv-usr.mstr { background:rgba(251,146,60,.07);border-color:rgba(251,146,60,.15);color:#fb923c; }
        .nv-usr-dot { width:6px;height:6px;border-radius:50%;background:#22c55e;box-shadow:0 0 6px #22c55e;flex-shrink:0; }

        .nv-out { padding:6px 13px;border-radius:9px;border:1px solid rgba(248,113,113,.2);
                  background:rgba(248,113,113,.05);color:rgba(248,113,113,.85);font-size:13px;
                  font-weight:600;cursor:pointer;font-family:'Syne',sans-serif;transition:all .2s; }
        .nv-out:hover { background:rgba(248,113,113,.12);color:#f87171; }

        .nv-in { padding:7px 16px;border-radius:9px;background:rgba(255,255,255,.04);
                 border:1px solid rgba(255,255,255,.1);color:rgba(255,255,255,.78);
                 font-size:13px;font-weight:600;text-decoration:none;font-family:'Syne',sans-serif;transition:all .2s; }
        .nv-in:hover { background:rgba(255,255,255,.08);color:#fff;border-color:rgba(255,255,255,.2); }

        .nv-up {
          display:flex;align-items:center;gap:6px;padding:8px 18px;border-radius:9px;
          background:linear-gradient(135deg,#6d28d9,#4f46e5 50%,#0284c7);
          background-size:200% 100%;
          color:#fff;font-size:13px;font-weight:700;text-decoration:none;
          font-family:'Syne',sans-serif;white-space:nowrap;
          box-shadow:0 0 22px rgba(109,40,217,.4),inset 0 1px 0 rgba(255,255,255,.15);
          animation:upShimmer 3.5s ease infinite;transition:transform .2s,box-shadow .2s;
        }
        @keyframes upShimmer { 0%,100%{background-position:0% 50%;box-shadow:0 0 22px rgba(109,40,217,.4)} 50%{background-position:100% 50%;box-shadow:0 0 30px rgba(79,70,229,.6)} }
        .nv-up:hover { transform:translateY(-2px);box-shadow:0 8px 28px rgba(109,40,217,.6); }
        .nv-arr { transition:transform .2s; }
        .nv-up:hover .nv-arr { transform:translateX(3px); }

        /* HAMBURGER */
        .nv-ham { display:none;flex-direction:column;gap:5px;background:none;border:none;cursor:pointer;
                  padding:8px;border-radius:8px;transition:background .2s; }
        .nv-ham:hover { background:rgba(255,255,255,.06); }
        .nv-ham span { display:block;height:2px;width:22px;background:rgba(255,255,255,.8);
                       border-radius:2px;transition:all .3s ease; }
        .h1o { transform:rotate(45deg) translate(5px,5px)!important; }
        .h2o { opacity:0!important;transform:scaleX(0)!important; }
        .h3o { transform:rotate(-45deg) translate(5px,-5px)!important; }

        /* MOBILE MENU */
        .nv-mob { position:relative;z-index:2;display:none;flex-direction:column;
                  background:rgba(3,3,14,.98);border-top:1px solid rgba(124,58,237,.1);
                  max-height:0;overflow:hidden;transition:max-height .4s cubic-bezier(.4,0,.2,1); }
        .nv-mob.open { max-height:820px; }

        .mob-sec { padding:16px 20px 12px; }
        .mob-lbl { font-size:9px;letter-spacing:3px;color:rgba(255,255,255,.25);
                   font-family:'JetBrains Mono',monospace;margin-bottom:10px; }
        .mob-grid { display:grid;grid-template-columns:1fr 1fr;gap:6px; }
        .mob-card { display:flex;align-items:center;gap:8px;padding:9px 11px;border-radius:10px;
                    background:rgba(255,255,255,.03);border:1px solid;
                    text-decoration:none;color:rgba(255,255,255,.75);transition:all .2s; }
        .mob-card:hover { background:rgba(124,58,237,.1);color:#fff; }
        .mob-cn { font-size:12px;font-weight:700; }
        .mob-cd { font-size:10px;color:rgba(255,255,255,.32);font-family:'JetBrains Mono',monospace;margin-top:1px; }

        .mob-row { display:flex;gap:8px;padding:4px 20px 14px;border-bottom:1px solid rgba(255,255,255,.05); }
        .mob-lnk { flex:1;display:flex;align-items:center;justify-content:center;gap:6px;
                   padding:10px;border-radius:10px;background:rgba(255,255,255,.04);
                   border:1px solid rgba(255,255,255,.08);color:rgba(255,255,255,.75);
                   text-decoration:none;font-size:13px;font-weight:600;font-family:'Syne',sans-serif;transition:all .2s; }
        .mob-lnk:hover { background:rgba(255,255,255,.08);color:#fff; }

        .mob-auth { padding:12px 20px 20px;display:flex;flex-direction:column;gap:8px; }
        .mob-li { display:block;padding:12px;text-align:center;border-radius:10px;
                  border:1px solid rgba(255,255,255,.1);background:rgba(255,255,255,.03);
                  color:rgba(255,255,255,.75);text-decoration:none;font-family:'Syne',sans-serif;
                  font-weight:600;font-size:14px;transition:all .2s; }
        .mob-li:hover { background:rgba(255,255,255,.07);color:#fff; }
        .mob-su { display:block;padding:13px;text-align:center;border-radius:10px;
                  background:linear-gradient(135deg,#6d28d9,#0ea5e9);color:#fff;
                  text-decoration:none;font-family:'Syne',sans-serif;font-weight:700;
                  font-size:14px;box-shadow:0 4px 18px rgba(109,40,217,.4);transition:opacity .2s; }
        .mob-su:hover { opacity:.9; }
        .mob-out { width:100%;padding:12px;border-radius:10px;background:rgba(248,113,113,.06);
                   border:1px solid rgba(248,113,113,.15);color:#f87171;
                   font-family:'Syne',sans-serif;font-weight:600;font-size:14px;cursor:pointer; }

        /* RESPONSIVE */
        @media(max-width:960px) {
          .nv-center,.nv-in,.nv-up { display:none!important; }
          .nv-ham { display:flex; }
          .nv-mob { display:flex; }
        }
        @media(max-width:500px) {
          .nv-wrap { padding:0 16px; }
          .nv-brand-tag { display:none; }
          .mob-grid { grid-template-columns:1fr; }
        }
      `}</style>
    </>
  );
}