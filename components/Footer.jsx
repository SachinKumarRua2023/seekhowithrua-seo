"use client";
/**
 * Footer.jsx — Seekho With Rua | SekhoWithRua | SikhoWithRua
 *
 * SEO Keywords Targeted:
 *   - seekhowithrua, seekho with rua, sikhowithrua, sikho with rua, seekhow rua
 *   - data science course India, AI course, machine learning course
 *   - best online coding courses India 2026, EdTech India
 *   - full stack development, mobile app development, game development course
 *   - IoT robotics course, python programming course India
 *   - learn AI ML online India, data science with AI
 */

import Link from "next/link";

const COURSE_LINKS = [
  { label: "Data Science Course", href: "/data-science-course", desc: "AI & ML powered Data Science", emoji: "📊" },
  { label: "AI Course", href: "/ai-course", desc: "Artificial Intelligence fundamentals", emoji: "🤖" },
  { label: "Machine Learning", href: "/ai-course", desc: "ML algorithms & models", emoji: "🧠" },
  { label: "Full Stack Development", href: "/full-stack-development", desc: "React, Node, Next.js & more", emoji: "💻" },
  { label: "Mobile App Development", href: "/mobile-app-development", desc: "React Native & Flutter", emoji: "📱" },
  { label: "Game Development", href: "/game-development", desc: "Unity, Unreal & Godot", emoji: "🎮" },
  { label: "IoT & Robotics", href: "/iot-robotics", desc: "Arduino, Raspberry Pi & more", emoji: "⚙️" },
  { label: "Python Programming", href: "/python-programming-course", desc: "Python for beginners to advanced", emoji: "🐍" },
  { label: "Web Development", href: "/web-development-course", desc: "HTML, CSS, JS & frameworks", emoji: "🌐" },
];

const QUICK_LINKS = [
  { label: "About Seekho With Rua", href: "/about" },
  { label: "All Courses", href: "/courses" },
  { label: "Blog & Tutorials", href: "/blog" },
  { label: "Contact Us", href: "/contact" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
];

const SOCIAL_LINKS = [
  { label: "YouTube", href: "https://youtube.com", icon: "▶" },
  { label: "GitHub", href: "https://github.com", icon: "⌥" },
  { label: "LinkedIn", href: "https://linkedin.com", icon: "in" },
  { label: "Instagram", href: "https://instagram.com", icon: "◉" },
];

export default function Footer() {
  return (
    <>
      {/* SEO structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "Seekho With Rua — All Courses",
            description:
              "Complete list of courses at SekhoWithRua | SikhoWithRua — India's best EdTech platform",
            itemListElement: COURSE_LINKS.map((c, i) => ({
              "@type": "ListItem",
              position: i + 1,
              name: c.label,
              url: `https://seekhowithrua.com${c.href}`,
            })),
          }),
        }}
      />

      <footer
        role="contentinfo"
        aria-label="Seekho With Rua footer — EdTech platform India"
        style={{
          background: "linear-gradient(180deg, #060414 0%, #0a0520 100%)",
          borderTop: "1px solid rgba(124,58,237,0.2)",
          color: "rgba(255,255,255,0.75)",
          fontFamily: "'Rajdhani', 'Exo 2', sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Decorative background glow */}
        <div aria-hidden="true" style={{
          position: "absolute",
          top: "-80px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "600px",
          height: "200px",
          background: "radial-gradient(ellipse, rgba(124,58,237,0.15) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />

        {/* Main footer grid */}
        <div style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "60px 24px 40px",
          position: "relative",
        }}>
          <div style={{
            display: "grid",
            gridTemplateColumns: "2fr 2fr 1fr",
            gap: "48px",
          }}
            className="footer-grid"
          >
            {/* Brand column */}
            <div>
              <Link
                href="/"
                title="Seekho With Rua — SekhoWithRua — Best EdTech India"
                aria-label="Go to Seekho With Rua homepage"
                style={{ textDecoration: "none" }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
                  <div style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "12px",
                    background: "linear-gradient(135deg, #7c3aed, #00d4ff)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "22px",
                    fontWeight: 900,
                    color: "#fff",
                    boxShadow: "0 0 24px rgba(124,58,237,0.5)",
                    flexShrink: 0,
                  }}>
                    S
                  </div>
                  <div>
                    <h2 style={{
                      margin: 0,
                      fontSize: "22px",
                      fontWeight: 700,
                      background: "linear-gradient(90deg, #fff, #00d4ff)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      letterSpacing: "-0.3px",
                    }}>
                      Seekho With Rua
                    </h2>
                    <p style={{ margin: 0, fontSize: "10px", color: "rgba(0,212,255,0.6)", letterSpacing: "0.5px", fontFamily: "monospace" }}>
                      SEEKHOWITHRUA • SIKHOWITHRUA
                    </p>
                  </div>
                </div>
              </Link>

              {/* SEO-rich brand description */}
              <p style={{
                fontSize: "14px",
                lineHeight: 1.7,
                color: "rgba(255,255,255,0.55)",
                marginBottom: "20px",
                maxWidth: "320px",
              }}>
                <strong style={{ color: "rgba(255,255,255,0.8)" }}>Seekho With Rua</strong> (also known as{" "}
                <em>SekhoWithRua</em>, <em>SikhoWithRua</em>, <em>Seekhow Rua</em>) is India's leading EdTech
                platform for <strong style={{ color: "#00d4ff" }}>Data Science</strong>,{" "}
                <strong style={{ color: "#00d4ff" }}>Artificial Intelligence</strong>,{" "}
                <strong style={{ color: "#00d4ff" }}>Machine Learning</strong>, Full Stack Development,
                Mobile Apps, Game Dev, and IoT courses.
              </p>

              {/* Social links */}
              <nav aria-label="Seekho With Rua social media links">
                <div style={{ display: "flex", gap: "10px" }}>
                  {SOCIAL_LINKS.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Seekho With Rua on ${s.label}`}
                      title={`Follow Seekho With Rua on ${s.label}`}
                      style={{
                        width: "36px",
                        height: "36px",
                        borderRadius: "8px",
                        border: "1px solid rgba(124,58,237,0.3)",
                        background: "rgba(124,58,237,0.08)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "rgba(255,255,255,0.7)",
                        textDecoration: "none",
                        fontSize: "13px",
                        fontWeight: 700,
                        transition: "all 0.25s",
                      }}
                      className="social-btn"
                    >
                      {s.icon}
                    </a>
                  ))}
                </div>
              </nav>
            </div>

            {/* Courses column */}
            <div>
              <h3 style={{
                fontSize: "11px",
                letterSpacing: "2px",
                textTransform: "uppercase",
                color: "#00d4ff",
                marginBottom: "20px",
                fontWeight: 600,
              }}>
                All Courses
              </h3>
              <nav aria-label="All courses at Seekho With Rua">
                <ul role="list" style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "2px" }}>
                  {COURSE_LINKS.map((course) => (
                    <li key={course.href + course.label}>
                      <Link
                        href={course.href}
                        title={`${course.label} — Seekho With Rua | SekhoWithRua`}
                        aria-label={`${course.label}: ${course.desc}`}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "8px",
                          padding: "7px 10px",
                          borderRadius: "6px",
                          textDecoration: "none",
                          color: "rgba(255,255,255,0.65)",
                          fontSize: "13.5px",
                          transition: "all 0.2s",
                          border: "1px solid transparent",
                        }}
                        className="footer-course-link"
                      >
                        <span aria-hidden="true" style={{ fontSize: "14px", flexShrink: 0 }}>{course.emoji}</span>
                        <span>{course.label}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            {/* Quick links column */}
            <div>
              <h3 style={{
                fontSize: "11px",
                letterSpacing: "2px",
                textTransform: "uppercase",
                color: "#7c3aed",
                marginBottom: "20px",
                fontWeight: 600,
              }}>
                Quick Links
              </h3>
              <nav aria-label="Quick links">
                <ul role="list" style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "4px" }}>
                  {QUICK_LINKS.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        title={`${link.label} — Seekho With Rua`}
                        style={{
                          display: "block",
                          padding: "6px 0",
                          textDecoration: "none",
                          color: "rgba(255,255,255,0.5)",
                          fontSize: "13.5px",
                          transition: "color 0.2s",
                          borderBottom: "1px solid transparent",
                        }}
                        className="footer-quick-link"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>

              {/* Newsletter / trust badge */}
              <div style={{
                marginTop: "28px",
                padding: "16px",
                borderRadius: "10px",
                background: "rgba(124,58,237,0.08)",
                border: "1px solid rgba(124,58,237,0.2)",
              }}>
                <p style={{ margin: 0, fontSize: "11px", color: "rgba(255,255,255,0.5)", lineHeight: 1.5 }}>
                  🇮🇳 Made in India · Trusted by{" "}
                  <strong style={{ color: "#00d4ff" }}>10,000+</strong> learners
                </p>
              </div>
            </div>
          </div>

          {/* SEO hidden but accessible keyword section */}
          <div
            role="complementary"
            aria-label="Related search terms"
            style={{
              marginTop: "48px",
              paddingTop: "24px",
              borderTop: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            <p style={{
              fontSize: "10.5px",
              color: "rgba(255,255,255,0.2)",
              lineHeight: 1.8,
              textAlign: "center",
              maxWidth: "900px",
              margin: "0 auto 28px",
            }}>
              Seekho With Rua · SekhoWithRua · SikhoWithRua · Seekhow Rua ·
              Data Science Course India · AI Course Online · Machine Learning India ·
              Full Stack Development Course · Mobile App Development · Game Development ·
              IoT Robotics Course · Python Programming · Best EdTech India 2026 ·
              Learn Coding Online India · AI ML Course Hindi · Data Science with AI
            </p>

            {/* Bottom bar */}
            <div style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "12px",
            }}>
              <p style={{ margin: 0, fontSize: "13px", color: "rgba(255,255,255,0.3)" }}>
                © 2026{" "}
                <Link
                  href="/"
                  title="Seekho With Rua — EdTech platform"
                  style={{ color: "rgba(0,212,255,0.6)", textDecoration: "none" }}
                >
                  Seekho With Rua
                </Link>
                . All rights reserved.
              </p>
              <div style={{ display: "flex", gap: "16px" }}>
                {[
                  { label: "Privacy", href: "/privacy" },
                  { label: "Terms", href: "/terms" },
                  { label: "Sitemap", href: "/sitemap.xml" },
                ].map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    style={{ fontSize: "12px", color: "rgba(255,255,255,0.3)", textDecoration: "none" }}
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

          .social-btn:hover {
            background: rgba(0,212,255,0.15) !important;
            border-color: rgba(0,212,255,0.5) !important;
            color: #00d4ff !important;
            transform: translateY(-2px);
          }

          .footer-course-link:hover {
            color: #00d4ff !important;
            background: rgba(0,212,255,0.06) !important;
            border-color: rgba(0,212,255,0.15) !important;
          }

          .footer-quick-link:hover {
            color: rgba(124,58,237,0.9) !important;
          }

          @media (max-width: 900px) {
            .footer-grid {
              grid-template-columns: 1fr !important;
              gap: 32px !important;
            }
          }

          @media (max-width: 600px) {
            .footer-grid {
              grid-template-columns: 1fr !important;
            }
          }
        `}</style>
      </footer>
    </>
  );
}