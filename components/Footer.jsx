"use client";
import Link from "next/link";

const COURSE_LINKS = [
  { label: "Data Science Course",    href: "/data-science-course",       emoji: "📊" },
  { label: "AI & Machine Learning",  href: "/ai-course",                 emoji: "🤖" },
  { label: "Full Stack Development", href: "/full-stack-development",    emoji: "💻" },
  { label: "Mobile App Development", href: "/mobile-app-development",    emoji: "📱" },
  { label: "Game Development",       href: "/game-development",          emoji: "🎮" },
  { label: "IoT & Robotics",         href: "/iot-robotics",              emoji: "⚙️" },
  { label: "Python Programming",     href: "/python-programming-course", emoji: "🐍" },
  { label: "Web Development",        href: "/web-development-course",    emoji: "🌐" },
];

const QUICK_LINKS = [
  { label: "👑 Master Rua",         href: "/master-rua",                          external: false },
  { label: "✍️ Blog & Tutorials",   href: "/blog",                                external: false },
  { label: "🚀 Learning Platform",  href: "https://app.seekhowithrua.com",        external: true  },
  { label: "🎮 Gaming Lab",         href: "https://gaming.seekhowithrua.com",     external: true  },
  { label: "✨ Animation Lab",      href: "https://animationlab.seekhowithrua.com", external: true },
  { label: "🛠️ Services",           href: "https://services.seekhowithrua.com",   external: true  },
];

const CONTACT_INFO = [
  { icon: "📧", text: "seekhowithrua@gmail.com",  href: "mailto:seekhowithrua@gmail.com",                    external: false },
  { icon: "📞", text: "8826776018",               href: "tel:+918826776018",                                 external: false },
  { icon: "▶",  text: "YouTube @seekhowithrua",   href: "https://www.youtube.com/@seekhowithrua_",            external: true  },
  { icon: "in", text: "LinkedIn — Sachin Kumar",  href: "https://www.linkedin.com/in/sachin-kumar-2b92a8347", external: true },
  { icon: "⌥",  text: "GitHub — SachinKumarRua2023", href: "https://github.com/SachinKumarRua2023",          external: true  },
];

export default function Footer() {
  return (
    <>
      {/* ── SEO SCHEMA ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EducationalOrganization",
            name: "SeekhowithRua",
            alternateName: [
              "Seekho With Rua", "SekhoWithRua", "SikhoWithRua",
              "Master Rua", "Sachin Kumar", "Seekhow Rua", "Rua Learning",
            ],
            description:
              "India's unique learning platform by Master Rua (Sachin Kumar). Learn AI, Data Science, Game Dev, Mobile Apps, Full Stack, Robotics through visual cortex, mnemonics, gaming and animation. Not just EdTech — a revolution in how humans learn.",
            url: "https://seekhowithrua.com",
            email: "seekhowithrua@gmail.com",
            telephone: "+918826776018",
            founder: {
              "@type": "Person",
              name: "Sachin Kumar",
              jobTitle: "Master Rua — AI/ML Trainer & Full Stack Developer",
              sameAs: [
                "https://www.linkedin.com/in/sachin-kumar-2b92a8347",
                "https://github.com/SachinKumarRua2023",
                "https://www.youtube.com/@seekhowithrua",
              ],
            },
            sameAs: [
              "https://app.seekhowithrua.com",
              "https://gaming.seekhowithrua.com",
              "https://animationlab.seekhowithrua.com",
              "https://services.seekhowithrua.com",
              "https://github.com/SachinKumarRua2023",
              "https://www.youtube.com/@seekhowithrua",
              "https://www.linkedin.com/in/sachin-kumar-2b92a8347",
            ],
            offers: COURSE_LINKS.map((c) => ({
              "@type": "Course",
              name: c.label,
              url: `https://seekhowithrua.com${c.href}`,
              provider: { "@type": "Organization", name: "SeekhowithRua" },
            })),
          }),
        }}
      />

      <footer
        role="contentinfo"
        aria-label="SeekhowithRua — Master Rua EdTech platform India"
        style={{
          background: "linear-gradient(180deg,#060414 0%,#0a0520 100%)",
          borderTop: "1px solid rgba(124,58,237,0.2)",
          color: "rgba(255,255,255,0.75)",
          fontFamily: "'Rajdhani','Exo 2',sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* decorative glow */}
        <div aria-hidden="true" style={{
          position:"absolute",top:"-80px",left:"50%",
          transform:"translateX(-50%)",width:"600px",height:"200px",
          background:"radial-gradient(ellipse,rgba(124,58,237,0.15) 0%,transparent 70%)",
          pointerEvents:"none",
        }}/>

        <div style={{ maxWidth:"1280px",margin:"0 auto",padding:"60px 24px 40px",position:"relative" }}>

          {/* ── MAIN GRID ── */}
          <div className="ft-grid">

            {/* ── BRAND ── */}
            <div>
              <Link href="/" style={{ textDecoration:"none" }}>
                <div style={{ display:"flex",alignItems:"center",gap:"12px",marginBottom:"16px" }}>
                  <div style={{
                    width:"44px",height:"44px",borderRadius:"12px",flexShrink:0,
                    background:"linear-gradient(135deg,#7c3aed,#00d4ff)",
                    display:"flex",alignItems:"center",justifyContent:"center",
                    fontSize:"22px",fontWeight:900,color:"#fff",
                    boxShadow:"0 0 24px rgba(124,58,237,0.5)",
                  }}>S</div>
                  <div>
                    <h2 style={{
                      margin:0,fontSize:"22px",fontWeight:700,
                      background:"linear-gradient(90deg,#fff,#00d4ff)",
                      WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",
                      letterSpacing:"-0.3px",
                    }}>SeekhowithRua</h2>
                    <p style={{ margin:0,fontSize:"10px",color:"rgba(0,212,255,0.6)",letterSpacing:"0.5px",fontFamily:"monospace" }}>
                      BY MASTER RUA · SACHIN KUMAR
                    </p>
                  </div>
                </div>
              </Link>

              {/* Description */}
              <p style={{ fontSize:"14px",lineHeight:1.7,color:"rgba(255,255,255,0.55)",marginBottom:"10px",maxWidth:"320px" }}>
                <strong style={{ color:"rgba(255,255,255,0.85)" }}>SeekhowithRua</strong> by{" "}
                <strong style={{ color:"#fbbf24" }}>Master Rua (Sachin Kumar)</strong> — India's unique
                learning revolution. We teach through{" "}
                <strong style={{ color:"#00d4ff" }}>visual cortex, mnemonics, gaming & animation</strong>{" "}
                — not boring slides. The UEEP Model changes how you learn forever.
              </p>

              {/* SEO alternate names */}
              <p style={{ fontSize:"11px",lineHeight:1.8,color:"rgba(255,255,255,0.28)",marginBottom:"16px",maxWidth:"320px" }}>
                Also known as: seekho with rua · seekhowithrua · master rua ·
                sachin rua · sikhowithrua · seekhow rua · rua learning · mr rua
              </p>

              {/* Master Rua badge */}
              <Link href="/master-rua" style={{
                display:"inline-flex",alignItems:"center",gap:"8px",
                padding:"7px 14px",borderRadius:"20px",marginBottom:"20px",
                background:"rgba(251,191,36,0.08)",
                border:"1px solid rgba(251,191,36,0.3)",
                color:"#fbbf24",fontSize:"11px",fontWeight:700,
                textDecoration:"none",fontFamily:"monospace",letterSpacing:"1px",
              }}>
                👑 EARN THE MASTER RUA TITLE →
              </Link>

              {/* Contact info */}
              <div style={{ display:"flex",flexDirection:"column",gap:"6px",marginBottom:"20px" }}>
                {CONTACT_INFO.map((c) => (
                  <a
                    key={c.text}
                    href={c.href}
                    target={c.external ? "_blank" : undefined}
                    rel={c.external ? "noopener noreferrer" : undefined}
                    className="ft-contact"
                    style={{
                      display:"flex",alignItems:"center",gap:"8px",
                      color:"rgba(255,255,255,0.4)",textDecoration:"none",
                      fontSize:"12px",fontFamily:"monospace",transition:"color 0.2s",
                    }}
                  >
                    <span style={{ color:"#00d4ff",width:"16px",textAlign:"center",flexShrink:0 }}>{c.icon}</span>
                    {c.text}
                  </a>
                ))}
              </div>

              {/* Stats */}
              <div style={{
                display:"flex",gap:"16px",flexWrap:"wrap",
                padding:"12px 16px",borderRadius:"10px",
                background:"rgba(124,58,237,0.07)",
                border:"1px solid rgba(124,58,237,0.2)",
              }}>
                {[
                  { n:"1000+", l:"Students" },
                  { n:"45+",   l:"Deployments" },
                  { n:"8",     l:"Courses" },
                  { n:"USA",   l:"Clients" },
                ].map(s => (
                  <div key={s.l} style={{ textAlign:"center" }}>
                    <div style={{ fontSize:"16px",fontWeight:700,color:"#7c3aed",fontFamily:"'Rajdhani',sans-serif" }}>{s.n}</div>
                    <div style={{ fontSize:"9px",color:"rgba(255,255,255,0.3)",letterSpacing:"1px",fontFamily:"monospace" }}>{s.l}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* ── COURSES ── */}
            <div>
              <h3 style={{
                fontSize:"11px",letterSpacing:"2px",textTransform:"uppercase",
                color:"#00d4ff",marginBottom:"20px",fontWeight:600,margin:"0 0 20px",
              }}>
                All Courses — 2026
              </h3>
              <nav aria-label="All courses at SeekhowithRua by Master Rua">
                <ul role="list" style={{ listStyle:"none",margin:0,padding:0,display:"flex",flexDirection:"column",gap:"2px" }}>
                  {COURSE_LINKS.map((course) => (
                    <li key={course.href}>
                      <Link
                        href={course.href}
                        title={`${course.label} — SeekhowithRua by Master Rua (Sachin Kumar) India 2026`}
                        className="ft-course"
                        style={{
                          display:"flex",alignItems:"center",gap:"8px",
                          padding:"7px 10px",borderRadius:"6px",
                          textDecoration:"none",color:"rgba(255,255,255,0.65)",
                          fontSize:"13.5px",transition:"all 0.2s",
                          border:"1px solid transparent",
                        }}
                      >
                        <span aria-hidden="true" style={{ fontSize:"14px",flexShrink:0 }}>{course.emoji}</span>
                        <span>{course.label}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>

              {/* Vision box */}
              <div style={{
                marginTop:"24px",padding:"16px",borderRadius:"10px",
                background:"rgba(29,158,117,0.07)",
                border:"1px solid rgba(29,158,117,0.2)",
              }}>
                <p style={{ margin:"0 0 6px",fontSize:"11px",color:"#1D9E75",fontWeight:700,letterSpacing:"1px",fontFamily:"monospace" }}>
                  THE UEEP MODEL
                </p>
                <p style={{ margin:0,fontSize:"12px",color:"rgba(255,255,255,0.45)",lineHeight:1.7 }}>
                  <strong style={{ color:"rgba(255,255,255,0.7)" }}>U</strong>nderstand ·{" "}
                  <strong style={{ color:"rgba(255,255,255,0.7)" }}>E</strong>xecute ·{" "}
                  <strong style={{ color:"rgba(255,255,255,0.7)" }}>E</strong>xplain ·{" "}
                  <strong style={{ color:"rgba(255,255,255,0.7)" }}>P</strong>ractice<br />
                  The fastest way to master any skill permanently.
                </p>
              </div>
            </div>

            {/* ── SCIENCE & AI COURSES ── */}
            <div>
              <h3 style={{
                fontSize:"11px",letterSpacing:"2px",textTransform:"uppercase",
                color:"#ff6b6b",marginBottom:"20px",fontWeight:600,margin:"0 0 20px",
              }}>
                🎯 Science & AI — 2026
              </h3>
              <nav aria-label="Science and AI courses at SeekhowithRua">
                <ul role="list" style={{ listStyle:"none",margin:0,padding:0,display:"flex",flexDirection:"column",gap:"2px" }}>
                  <li>
                    <Link
                      href="/ai-fundamentals"
                      title="AI Fundamentals — SeekhowithRua by Master Rua"
                      className="ft-course"
                      style={{
                        display:"flex",alignItems:"center",gap:"8px",
                        padding:"7px 10px",borderRadius:"6px",
                        textDecoration:"none",color:"rgba(255,255,255,0.65)",
                        fontSize:"13.5px",transition:"all 0.2s",
                        border:"1px solid transparent",
                      }}
                    >
                      <span aria-hidden="true" style={{ fontSize:"14px",flexShrink:0 }}>🤖</span>
                      <span>AI Fundamentals</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/data-science-python"
                      title="Data Science with Python — SeekhowithRua by Master Rua"
                      className="ft-course"
                      style={{
                        display:"flex",alignItems:"center",gap:"8px",
                        padding:"7px 10px",borderRadius:"6px",
                        textDecoration:"none",color:"rgba(255,255,255,0.65)",
                        fontSize:"13.5px",transition:"all 0.2s",
                        border:"1px solid transparent",
                      }}
                    >
                      <span aria-hidden="true" style={{ fontSize:"14px",flexShrink:0 }}>🔬</span>
                      <span>Data Science with Python</span>
                    </Link>
                  </li>
                  <li>
                    <a
                      href="/ml-algorithms-visualizer.html"
                      title="Complete ML Visualizer — All algorithms with animations"
                      className="ft-course"
                      style={{
                        display:"flex",alignItems:"center",gap:"8px",
                        padding:"7px 10px",borderRadius:"6px",
                        textDecoration:"none",color:"rgba(255,255,255,0.65)",
                        fontSize:"13.5px",transition:"all 0.2s",
                        border:"1px solid transparent",
                      }}
                    >
                      <span aria-hidden="true" style={{ fontSize:"14px",flexShrink:0 }}>🧬</span>
                      <span>Complete ML Visualizer</span>
                    </a>
                  </li>
                </ul>
              </nav>

              {/* Science tagline */}
              <div style={{
                marginTop:"24px",padding:"16px",borderRadius:"10px",
                background:"rgba(255,107,107,0.07)",
                border:"1px solid rgba(255,107,107,0.2)",
              }}>
                <p style={{ margin:"0 0 6px",fontSize:"11px",color:"#ff6b6b",fontWeight:700,letterSpacing:"1px",fontFamily:"monospace" }}>
                  RESEARCH & INNOVATION
                </p>
                <p style={{ margin:0,fontSize:"12px",color:"rgba(255,255,255,0.45)",lineHeight:1.7 }}>
                  Advanced courses for scientific research, genomics, and cutting-edge AI applications.
                </p>
              </div>
            </div>

            {/* ── QUICK LINKS ── */}
            <div>
              <h3 style={{
                fontSize:"11px",letterSpacing:"2px",textTransform:"uppercase",
                color:"#7c3aed",marginBottom:"20px",fontWeight:600,margin:"0 0 20px",
              }}>
                Explore
              </h3>
              <nav aria-label="SeekhowithRua quick links">
                <ul role="list" style={{ listStyle:"none",margin:0,padding:0,display:"flex",flexDirection:"column",gap:"4px" }}>
                  {QUICK_LINKS.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        target={link.external ? "_blank" : undefined}
                        rel={link.external ? "noopener noreferrer" : undefined}
                        title={`${link.label} — SeekhowithRua Master Rua`}
                        className="ft-quick"
                        style={{
                          display:"block",padding:"6px 0",
                          textDecoration:"none",color:"rgba(255,255,255,0.5)",
                          fontSize:"13.5px",transition:"color 0.2s",
                        }}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>

              {/* Mr Rua challenge card */}
              <div style={{
                marginTop:"28px",padding:"18px",borderRadius:"12px",
                background:"rgba(251,191,36,0.06)",
                border:"1px solid rgba(251,191,36,0.2)",
              }}>
                <p style={{ margin:"0 0 8px",fontSize:"12px",color:"#fbbf24",fontWeight:700,fontFamily:"monospace",letterSpacing:"1px" }}>
                  👑 BECOME MR. RUA
                </p>
                <p style={{ margin:"0 0 12px",fontSize:"11px",color:"rgba(255,255,255,0.45)",lineHeight:1.6 }}>
                  Take the 30-Day Challenge. Master 2+ skills. Earn the Mr. Rua title.
                </p>
                <Link href="/master-rua" style={{
                  display:"block",padding:"8px",textAlign:"center",
                  borderRadius:"8px",background:"rgba(251,191,36,0.12)",
                  border:"1px solid rgba(251,191,36,0.3)",
                  color:"#fbbf24",fontSize:"11px",fontWeight:700,
                  textDecoration:"none",fontFamily:"monospace",transition:"all 0.2s",
                }}
                  className="ft-challenge-btn"
                >
                  START THE CHALLENGE →
                </Link>
              </div>

              {/* Made in India badge */}
              <div style={{
                marginTop:"16px",padding:"12px 16px",borderRadius:"10px",
                background:"rgba(255,255,255,0.03)",
                border:"1px solid rgba(255,255,255,0.06)",
                textAlign:"center",
              }}>
                <p style={{ margin:0,fontSize:"11px",color:"rgba(255,255,255,0.35)",lineHeight:1.7 }}>
                  🇮🇳 Made in India · Noida, UP<br />
                  🌍 Serving students globally<br />
                  📧 seekhowithrua@gmail.com
                </p>
              </div>
            </div>
          </div>

          {/* ── SEO KEYWORDS ── */}
          <div style={{
            marginTop:"48px",paddingTop:"24px",
            borderTop:"1px solid rgba(255,255,255,0.06)",
          }}>
            <p style={{
              fontSize:"10px",color:"rgba(255,255,255,0.15)",
              lineHeight:1.9,textAlign:"center",
              maxWidth:"1100px",margin:"0 auto 28px",
            }}>
              SeekhowithRua · Seekho With Rua · Master Rua · Sachin Kumar · Mr Rua ·
              Who is Master Rua · How to become Master Rua · Sachin Rua · Rua Title ·
              How to become Mr Rua · SekhoWithRua · SikhoWithRua · Seekhow Rua ·
              Rua Learning Platform · Master Rua India · Master Rua Coding ·
              Data Science Course India 2026 · AI Course India 2026 ·
              Machine Learning Course India · Full Stack Development India ·
              Mobile App Development React Native India · Game Development India 2026 ·
              Unity Three.js Course India · IoT Robotics Course India ·
              Python Programming Course India · Best EdTech India 2026 ·
              Learn Coding Online India · UEEP Model Learning · Visual Cortex Learning ·
              Mnemonic Learning Platform India · Learn Through Gaming India ·
              How to learn Game Development 2026 · How to learn AI ML 2026 ·
              Learn Python 5 days · Full Stack Game Dev Robotics India ·
              Sachin Kumar AI Trainer · Sachin Kumar Full Stack Developer ·
              Seekhowithrua.com · app.seekhowithrua.com
            </p>

            {/* ── BOTTOM BAR ── */}
            <div style={{
              display:"flex",alignItems:"center",
              justifyContent:"space-between",flexWrap:"wrap",gap:"12px",
            }}>
              <p style={{ margin:0,fontSize:"13px",color:"rgba(255,255,255,0.3)" }}>
                © 2026{" "}
                <Link href="/" style={{ color:"rgba(0,212,255,0.6)",textDecoration:"none" }}>
                  SeekhowithRua
                </Link>
                {" "}· Built with ❤️ by{" "}
                <Link href="/master-rua" style={{ color:"rgba(251,191,36,0.7)",textDecoration:"none" }}>
                  Master Rua
                </Link>
                {" "}· Noida, India
              </p>
              <div style={{ display:"flex",gap:"16px",alignItems:"center" }}>
                {[
                  { label:"Master Rua", href:"/master-rua" },
                  { label:"Blog",       href:"/blog" },
                  { label:"Sitemap",    href:"/sitemap.xml" },
                  { label:"Platform",   href:"https://app.seekhowithrua.com" },
                ].map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    style={{ fontSize:"12px",color:"rgba(255,255,255,0.3)",textDecoration:"none" }}
                    className="ft-bottom-link"
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@400;500;600;700&family=Exo+2:wght@400;600;700&display=swap');

          .ft-grid {
            display: grid;
            grid-template-columns: 2fr 2fr 1.2fr;
            gap: 48px;
          }
          .ft-contact:hover { color: #00d4ff !important; }
          .ft-course:hover {
            color: #00d4ff !important;
            background: rgba(0,212,255,0.06) !important;
            border-color: rgba(0,212,255,0.15) !important;
          }
          .ft-quick:hover { color: rgba(124,58,237,0.9) !important; }
          .ft-challenge-btn:hover {
            background: rgba(251,191,36,0.2) !important;
            box-shadow: 0 0 16px rgba(251,191,36,0.2);
          }
          .ft-bottom-link:hover { color: rgba(255,255,255,0.7) !important; }

          @media (max-width:1024px) {
            .ft-grid { grid-template-columns: 1fr 1fr !important; }
          }
          @media (max-width:640px) {
            .ft-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
          }
        `}</style>
      </footer>
    </>
  );
}