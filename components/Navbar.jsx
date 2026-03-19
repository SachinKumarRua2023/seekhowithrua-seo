// ============================================================
// FILE LOCATION: seekhowithrua-seo/components/Navbar.jsx
// ACTION: REPLACE existing Navbar.jsx with this file
// CHANGES: Added Blog link, added web-development-course link
// ============================================================

"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const NAV_LINKS = [
  { label: "Data Science", href: "/data-science-course", emoji: "📊" },
  { label: "AI & ML", href: "/ai-course", emoji: "🤖" },
  { label: "Full Stack", href: "/full-stack-development", emoji: "💻" },
  { label: "Mobile Apps", href: "/mobile-app-development", emoji: "📱" },
  { label: "Game Dev", href: "/game-development", emoji: "🎮" },
  { label: "Python", href: "/python-programming-course", emoji: "🐍" },
  { label: "Blog", href: "/blog", emoji: "✍️" },
];

export default function Navbar() {
  const canvasRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const check = () => {
      try {
        const raw = localStorage.getItem("cosmos_user");
        setUser(raw ? JSON.parse(raw) : null);
      } catch { setUser(null); }
    };
    check();
    window.addEventListener("storage", check);
    return () => window.removeEventListener("storage", check);
  }, []);

  const isMaster = user?.email === "master@gmail.com";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    let animId;
    let renderer, scene, camera, orbs = [], lines = [];
    async function init() {
      const THREE = (await import("three")).default || (await import("three"));
      const canvas = canvasRef.current;
      if (!canvas) return;
      renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setSize(canvas.offsetWidth, canvas.offsetHeight);
      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(60, canvas.offsetWidth / canvas.offsetHeight, 0.1, 100);
      camera.position.z = 5;
      const orbColors = [0x00d4ff, 0x7c3aed, 0x06b6d4, 0xa855f7, 0x22d3ee];
      for (let i = 0; i < 18; i++) {
        const geo = new THREE.SphereGeometry(Math.random() * 0.08 + 0.03, 16, 16);
        const mat = new THREE.MeshBasicMaterial({ color: orbColors[i % orbColors.length], transparent: true, opacity: Math.random() * 0.6 + 0.3 });
        const mesh = new THREE.Mesh(geo, mat);
        mesh.position.set((Math.random() - 0.5) * 14, (Math.random() - 0.5) * 2.5, (Math.random() - 0.5) * 2);
        mesh.userData = { speed: Math.random() * 0.008 + 0.003, offset: Math.random() * Math.PI * 2 };
        scene.add(mesh); orbs.push(mesh);
      }
      for (let i = 0; i < 8; i++) {
        const a = orbs[i], b = orbs[(i + 3) % orbs.length];
        const geo = new THREE.BufferGeometry().setFromPoints([a.position.clone(), b.position.clone()]);
        const mat = new THREE.LineBasicMaterial({ color: 0x7c3aed, transparent: true, opacity: 0.15 });
        const line = new THREE.Line(geo, mat);
        scene.add(line); lines.push({ line, a, b });
      }
      let t = 0;
      function animate() {
        animId = requestAnimationFrame(animate); t += 0.01;
        orbs.forEach(orb => { orb.position.y += Math.sin(t + orb.userData.offset) * orb.userData.speed; orb.position.x += Math.cos(t * 0.5 + orb.userData.offset) * 0.002; });
        lines.forEach(({ line, a, b }) => { line.geometry.setFromPoints([a.position.clone(), b.position.clone()]); });
        renderer.render(scene, camera);
      }
      animate();
      const resize = () => { if (!canvas) return; renderer.setSize(canvas.offsetWidth, canvas.offsetHeight); camera.aspect = canvas.offsetWidth / canvas.offsetHeight; camera.updateProjectionMatrix(); };
      window.addEventListener("resize", resize);
    }
    init().catch(() => {});
    return () => { cancelAnimationFrame(animId); renderer?.dispose(); };
  }, []);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "EducationalOrganization", name: "Seekho With Rua", alternateName: ["SekhoWithRua", "SikhoWithRua", "Seekhow Rua"], description: "India's top EdTech platform for Data Science, AI, ML, Full Stack, Mobile Apps, Game Dev and IoT.", url: "https://seekhowithrua.com" }) }} />

      <header role="banner" style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000, transition: "all 0.4s ease", background: scrolled ? "rgba(6,4,20,0.92)" : "rgba(6,4,20,0.75)", backdropFilter: "blur(18px)", borderBottom: scrolled ? "1px solid rgba(124,58,237,0.35)" : "1px solid transparent", boxShadow: scrolled ? "0 4px 32px rgba(0,212,255,0.08)" : "none" }}>
        <canvas ref={canvasRef} aria-hidden="true" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none" }} />

        <nav style={{ position: "relative", maxWidth: "1280px", margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between", height: "70px" }}>
          {/* Logo */}
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none", flexShrink: 0 }}>
            <div style={{ width: "38px", height: "38px", borderRadius: "10px", background: "linear-gradient(135deg,#7c3aed,#00d4ff)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "18px", fontWeight: 900, color: "#fff", boxShadow: "0 0 18px rgba(124,58,237,0.5)", animation: "logoPulse 3s ease-in-out infinite" }}>S</div>
            <div style={{ lineHeight: 1 }}>
              <span style={{ fontFamily: "'Rajdhani','Exo 2',sans-serif", fontWeight: 700, fontSize: "18px", background: "linear-gradient(90deg,#fff 0%,#00d4ff 60%,#7c3aed 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", display: "block" }}>Seekho With Rua</span>
              <span style={{ fontSize: "9px", color: "rgba(0,212,255,0.65)", fontFamily: "monospace", display: "block", marginTop: "1px" }}>Learn · Build · Grow</span>
            </div>
          </Link>

          {/* Desktop nav */}
          <ul className="nav-links-desktop" style={{ display: "flex", gap: "2px", listStyle: "none", margin: 0, padding: 0 }}>
            {NAV_LINKS.map(link => (
              <li key={link.href}>
                <Link href={link.href} onMouseEnter={() => setActiveLink(link.href)} onMouseLeave={() => setActiveLink(null)}
                  style={{ display: "flex", alignItems: "center", gap: "5px", padding: "7px 10px", borderRadius: "8px", textDecoration: "none", fontSize: "13px", fontWeight: 500, fontFamily: "'Rajdhani',sans-serif", color: activeLink === link.href ? "#00d4ff" : "rgba(255,255,255,0.8)", background: activeLink === link.href ? "rgba(0,212,255,0.1)" : "transparent", border: activeLink === link.href ? "1px solid rgba(0,212,255,0.25)" : "1px solid transparent", transition: "all 0.25s ease", transform: activeLink === link.href ? "translateY(-1px)" : "none" }}>
                  <span style={{ fontSize: "14px" }}>{link.emoji}</span>{link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Auth buttons */}
          {user ? (
            <div style={{ display: "flex", alignItems: "center", gap: "8px", flexShrink: 0 }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", padding: "7px 14px", borderRadius: "8px", background: isMaster ? "rgba(255,165,0,0.12)" : "rgba(0,212,255,0.08)", border: `1px solid ${isMaster ? "rgba(255,165,0,0.35)" : "rgba(0,212,255,0.25)"}` }}>
                <span style={{ fontSize: "14px" }}>{isMaster ? "⚙️" : "👤"}</span>
                <span style={{ fontFamily: "'Rajdhani',sans-serif", fontWeight: 700, fontSize: "13px", color: isMaster ? "#ffa500" : "#00d4ff" }}>
                  {isMaster ? "Master" : (user?.profile?.name || user?.name || user?.email?.split("@")[0] || "Learner")}
                </span>
              </div>
              <button onClick={() => { localStorage.removeItem("cosmos_user"); setUser(null); window.dispatchEvent(new Event("storage")); }}
                style={{ padding: "7px 14px", borderRadius: "8px", border: "1px solid rgba(255,107,107,0.3)", background: "rgba(255,107,107,0.08)", color: "#ff6b6b", fontFamily: "'Rajdhani',sans-serif", fontWeight: 600, fontSize: "13px", cursor: "pointer" }}>
                Logout
              </button>
            </div>
          ) : (
            <div style={{ display: "flex", gap: "8px", flexShrink: 0 }}>
              <Link href="/login" style={{ padding: "9px 18px", borderRadius: "8px", background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.8)", fontFamily: "'Rajdhani',sans-serif", fontWeight: 600, fontSize: "13px", textDecoration: "none", whiteSpace: "nowrap" }}>Login</Link>
              <Link href="/signup" style={{ padding: "9px 18px", borderRadius: "8px", background: "linear-gradient(135deg,#7c3aed,#00d4ff)", color: "#fff", fontFamily: "'Rajdhani',sans-serif", fontWeight: 700, fontSize: "13px", textDecoration: "none", whiteSpace: "nowrap", boxShadow: "0 0 16px rgba(124,58,237,0.3)" }}>Sign Up</Link>
            </div>
          )}

          {/* Hamburger */}
          <button aria-label={menuOpen ? "Close menu" : "Open menu"} onClick={() => setMenuOpen(!menuOpen)} className="hamburger"
            style={{ display: "none", background: "none", border: "none", cursor: "pointer", padding: "8px", color: "#fff" }}>
            <div style={{ width: "24px", display: "flex", flexDirection: "column", gap: "5px" }}>
              {[0, 1, 2].map(i => (
                <span key={i} style={{ display: "block", height: "2px", background: "#00d4ff", borderRadius: "2px", transition: "all 0.3s ease", transform: menuOpen ? (i === 0 ? "rotate(45deg) translateY(7px)" : i === 2 ? "rotate(-45deg) translateY(-7px)" : "scaleX(0)") : "none", opacity: menuOpen && i === 1 ? 0 : 1 }} />
              ))}
            </div>
          </button>
        </nav>

        {/* Mobile menu */}
        <div style={{ maxHeight: menuOpen ? "600px" : "0", overflow: "hidden", transition: "max-height 0.4s ease", background: "rgba(6,4,20,0.97)", borderTop: menuOpen ? "1px solid rgba(124,58,237,0.25)" : "none" }}>
          <ul style={{ listStyle: "none", margin: 0, padding: "12px 24px 20px", display: "flex", flexDirection: "column", gap: "4px" }}>
            {NAV_LINKS.map(link => (
              <li key={link.href}>
                <Link href={link.href} onClick={() => setMenuOpen(false)}
                  style={{ display: "flex", alignItems: "center", gap: "10px", padding: "12px 16px", borderRadius: "8px", textDecoration: "none", color: "rgba(255,255,255,0.85)", fontFamily: "'Rajdhani',sans-serif", fontSize: "15px", fontWeight: 500, border: "1px solid rgba(255,255,255,0.05)" }}>
                  <span>{link.emoji}</span>{link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="https://app.seekhowithrua.com" onClick={() => setMenuOpen(false)}
                style={{ display: "block", marginTop: "8px", padding: "13px", borderRadius: "8px", background: "linear-gradient(135deg,#7c3aed,#00d4ff)", color: "#fff", fontFamily: "'Rajdhani',sans-serif", fontWeight: 700, fontSize: "15px", textAlign: "center", textDecoration: "none" }}>
                Launch App →
              </Link>
            </li>
            {!user ? (
              <>
                <li><Link href="/login" onClick={() => setMenuOpen(false)} style={{ display: "block", padding: "12px 16px", borderRadius: "8px", textDecoration: "none", color: "rgba(255,255,255,0.8)", fontFamily: "'Rajdhani',sans-serif", fontSize: "15px", textAlign: "center", border: "1px solid rgba(255,255,255,0.12)", marginTop: "4px" }}>Login</Link></li>
                <li><Link href="/signup" onClick={() => setMenuOpen(false)} style={{ display: "block", marginTop: "6px", padding: "13px", borderRadius: "8px", background: "linear-gradient(135deg,#7c3aed,#00d4ff)", color: "#fff", fontFamily: "'Rajdhani',sans-serif", fontWeight: 700, fontSize: "15px", textAlign: "center", textDecoration: "none" }}>Sign Up Free →</Link></li>
              </>
            ) : (
              <li><button onClick={() => { localStorage.removeItem("cosmos_user"); setUser(null); window.dispatchEvent(new Event("storage")); setMenuOpen(false); }} style={{ display: "block", width: "100%", marginTop: "8px", padding: "13px", borderRadius: "8px", background: "rgba(255,107,107,0.1)", border: "1px solid rgba(255,107,107,0.25)", color: "#ff6b6b", fontFamily: "'Rajdhani',sans-serif", fontWeight: 700, fontSize: "15px", cursor: "pointer" }}>Logout</button></li>
            )}
          </ul>
        </div>

        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@400;500;600;700&family=Exo+2:wght@400;600;700&display=swap');
          @keyframes logoPulse { 0%,100%{box-shadow:0 0 18px rgba(124,58,237,0.5)} 50%{box-shadow:0 0 30px rgba(0,212,255,0.7)} }
          @media(max-width:900px){.nav-links-desktop{display:none!important}.hamburger{display:flex!important}}
        `}</style>
      </header>

      <div style={{ height: "70px" }} aria-hidden="true" />
    </>
  );
}