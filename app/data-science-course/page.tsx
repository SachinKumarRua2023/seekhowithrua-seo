import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'SeekhowithRua — Learn Game Dev, AI/ML, Web Dev in India',
  description: 'India\'s most innovative EdTech platform by Sachin Kumar (Master Rua). Master Game Development, AI/ML, Mobile Apps, Web Dev, Python and more using the UEEP learning model.',
  keywords: [
    'seekhowithrua', 'master rua', 'learn coding india',
    'game development course india', 'machine learning hindi',
    'edtech india', 'full stack development course',
    'mobile app development india', 'python course hindi'
  ],
  openGraph: {
    title: 'SeekhowithRua — Learn. Build. Master.',
    description: 'India\'s most innovative EdTech platform. Courses in Game Dev, AI/ML, Mobile, Web & more.',
    url: 'https://seekhowithrua.com',
    siteName: 'SeekhowithRua',
    type: 'website',
  },
  alternates: { canonical: 'https://seekhowithrua.com' },
}

const courses = [
  { slug: 'game-development',       icon: '🎮', title: 'Game Development',       desc: 'Unity, Unreal, Three.js — build real games from scratch.', color: '#7f77ff' },
  { slug: 'machine-learning-course', icon: '🤖', title: 'AI & Machine Learning',  desc: 'Python, TensorFlow, real ML projects for beginners.', color: '#1D9E75' },
  { slug: 'mobile-app-development',  icon: '📱', title: 'Mobile App Dev',         desc: 'React Native & Expo — build iOS & Android apps.', color: '#f59e0b' },
  { slug: 'web-development-course',  icon: '🌐', title: 'Web Development',        desc: 'HTML, CSS, React, Next.js — full stack mastery.', color: '#06b6d4' },
  { slug: 'data-science-course',     icon: '📊', title: 'Data Science',           desc: 'Pandas, NumPy, visualization & real datasets.', color: '#a78bfa' },
  { slug: 'python-programming-course',icon: '🐍', title: 'Python Programming',    desc: 'From zero to advanced Python — the #1 language for AI.', color: '#ef4444' },
  { slug: 'full-stack-development',  icon: '⚡', title: 'Full Stack Dev',         desc: 'Django + React — build & deploy complete web apps.', color: '#1D9E75' },
  { slug: 'iot-robotics',            icon: '🤖', title: 'IoT & Robotics',         desc: 'Arduino, Raspberry Pi, sensors — build smart devices.', color: '#f59e0b' },
]

const ecosystem = [
  { href: 'https://app.seekhowithrua.com',          icon: '🚀', label: 'Learning App',    desc: 'Full platform with courses, quizzes & live sessions' },
  { href: 'https://gaming.seekhowithrua.com',        icon: '🎮', label: 'Gaming Lab',      desc: '3D character controller & educational game demos' },
  { href: 'https://animationlab.seekhowithrua.com',  icon: '✨', label: 'Animation Lab',   desc: 'Visual learning — networking, algorithms, AI/ML' },
  { href: 'https://services.seekhowithrua.com',      icon: '💼', label: 'Services',        desc: 'We build your web, mobile & AI products' },
]

const testimonials = [
  { name: 'Rahul S.', role: 'Now at TCS', text: 'Master Rua\'s UEEP model changed how I learn. Got placed in 3 months.' },
  { name: 'Priya M.', role: 'Flutter Developer', text: 'The mobile dev course is the best in India. Practical, no fluff.' },
  { name: 'Arjun K.', role: 'Game Dev Intern', text: 'Built my first 3D game after just 4 weeks. Incredible teaching style.' },
]

export default function HomePage() {
  return (
    <main style={{ background: '#03030a', color: '#fff', fontFamily: "'Syne', sans-serif", minHeight: '100vh' }}>

      {/* ── HERO ── */}
      <section style={{
        minHeight: '100vh', display: 'flex', alignItems: 'center',
        padding: '100px 24px 60px', position: 'relative', overflow: 'hidden',
        background: 'radial-gradient(ellipse at 70% 40%, rgba(127,119,255,0.1) 0%, transparent 60%)',
      }}>
        {/* Grid bg */}
        <div style={{
          position: 'absolute', inset: 0, opacity: 0.4,
          backgroundImage: 'linear-gradient(rgba(127,119,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(127,119,255,0.05) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
          maskImage: 'radial-gradient(ellipse at 60% 50%, black 20%, transparent 70%)',
        }} />

        <div style={{ maxWidth: 1100, margin: '0 auto', width: '100%', position: 'relative', zIndex: 1, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'center' }}>
          <div>
            <div style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: 10, letterSpacing: 4, color: '#1D9E75', marginBottom: 20, display: 'flex', alignItems: 'center', gap: 8 }}>
              <span style={{ width: 30, height: 1, background: '#1D9E75', display: 'inline-block' }} />
              INDIA'S FUTURE-READY EDTECH
            </div>

            <h1 style={{ fontFamily: "'Orbitron', sans-serif", fontSize: 'clamp(28px, 4vw, 52px)', fontWeight: 900, lineHeight: 1.1, marginBottom: 20 }}>
              LEARN.<br />
              <span style={{ color: '#7f77ff' }}>BUILD.</span><br />
              <span style={{ color: '#1D9E75' }}>MASTER.</span>
            </h1>

            <p style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: 12, color: '#3a3a5c', lineHeight: 2, marginBottom: 36, maxWidth: 420 }}>
              Join 1000+ students learning Game Dev, AI/ML, Mobile & Web Development with Sachin Kumar (Master Rua) — using the revolutionary UEEP learning model.
            </p>

            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 48 }}>
              <a href="https://app.seekhowithrua.com" style={{
                background: '#7f77ff', color: '#000', padding: '14px 28px',
                borderRadius: 8, fontFamily: "'Share Tech Mono', monospace",
                fontSize: 12, fontWeight: 700, textDecoration: 'none', letterSpacing: 1,
              }}>
                🚀 Launch Platform
              </a>
              <a href="#courses" style={{
                background: 'transparent', color: '#fff', padding: '14px 28px',
                borderRadius: 8, fontFamily: "'Share Tech Mono', monospace",
                fontSize: 12, border: '1px solid #1a1a40', textDecoration: 'none',
              }}>
                View Courses →
              </a>
            </div>

            <div style={{ display: 'flex', gap: 36 }}>
              {[['1000+','STUDENTS'],['USA','GLOBAL CLIENTS'],['UEEP','FRAMEWORK']].map(([num, label]) => (
                <div key={label}>
                  <div style={{ fontFamily: "'Orbitron', sans-serif", fontSize: 22, fontWeight: 900, color: '#7f77ff' }}>{num}</div>
                  <div style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: 9, color: '#3a3a5c', marginTop: 2, letterSpacing: 2 }}>{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Master Rua card */}
          <div style={{
            background: 'rgba(7,7,26,0.8)', border: '1px solid #12122e',
            borderRadius: 20, padding: 36, textAlign: 'center',
            backdropFilter: 'blur(10px)',
          }}>
            <div style={{ fontSize: 64, marginBottom: 16 }}>🧙‍♂️</div>
            <div style={{ fontFamily: "'Orbitron', sans-serif", fontSize: 18, fontWeight: 700, marginBottom: 6 }}>Sachin Kumar</div>
            <div style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: 11, color: '#7f77ff', marginBottom: 16 }}>Master Rua</div>
            <div style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: 10, color: '#3a3a5c', lineHeight: 1.9, marginBottom: 20 }}>
              AI/ML Trainer · Memory Science Expert<br />
              Full Stack Developer<br />
              Currently teaching USA professionals at Xziant
            </div>
            <div style={{
              background: 'rgba(29,158,117,0.1)', border: '1px solid rgba(29,158,117,0.3)',
              borderRadius: 8, padding: '10px 16px',
              fontFamily: "'Share Tech Mono', monospace", fontSize: 10, color: '#1D9E75',
            }}>
              Vision: Change education through the UEEP Model
            </div>
          </div>
        </div>
      </section>

      {/* ── COURSES ── */}
      <section id="courses" style={{ padding: '80px 24px', maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: 10, letterSpacing: 4, color: '#1D9E75', marginBottom: 10 }}>WHAT YOU'LL LEARN</div>
        <h2 style={{ fontFamily: "'Orbitron', sans-serif", fontSize: 'clamp(20px, 3vw, 32px)', fontWeight: 700, marginBottom: 48 }}>
          Our <span style={{ color: '#7f77ff' }}>Courses</span>
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 16 }}>
          {courses.map(c => (
            <Link key={c.slug} href={`/courses/${c.slug}`} style={{ textDecoration: 'none' }}>
              <div style={{
                background: 'rgba(7,7,26,0.8)', border: `1px solid #12122e`,
                borderRadius: 14, padding: '24px 20px',
                transition: 'border-color 0.3s, transform 0.2s',
                cursor: 'pointer', height: '100%',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.borderColor = c.color
                ;(e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)'
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.borderColor = '#12122e'
                ;(e.currentTarget as HTMLElement).style.transform = 'translateY(0)'
              }}>
                <div style={{ fontSize: 32, marginBottom: 12 }}>{c.icon}</div>
                <div style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: 9, letterSpacing: 2, color: c.color, marginBottom: 6 }}>COURSE</div>
                <div style={{ fontFamily: "'Orbitron', sans-serif", fontSize: 13, fontWeight: 600, marginBottom: 10, color: '#fff' }}>{c.title}</div>
                <div style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: 10, color: '#3a3a5c', lineHeight: 1.8 }}>{c.desc}</div>
                <div style={{ marginTop: 16, fontFamily: "'Share Tech Mono', monospace", fontSize: 10, color: c.color }}>Explore →</div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── ECOSYSTEM ── */}
      <section style={{ padding: '80px 24px', background: 'rgba(7,7,26,0.5)', borderTop: '1px solid #0d0d22', borderBottom: '1px solid #0d0d22' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: 10, letterSpacing: 4, color: '#1D9E75', marginBottom: 10 }}>OUR UNIVERSE</div>
          <h2 style={{ fontFamily: "'Orbitron', sans-serif", fontSize: 'clamp(20px, 3vw, 32px)', fontWeight: 700, marginBottom: 48 }}>
            The <span style={{ color: '#7f77ff' }}>Ecosystem</span>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 16 }}>
            {ecosystem.map(e => (
              <a key={e.href} href={e.href} style={{ textDecoration: 'none' }}>
                <div style={{
                  background: 'rgba(7,7,26,0.9)', border: '1px solid #12122e',
                  borderRadius: 14, padding: '24px 20px',
                  transition: 'border-color 0.3s',
                }}
                onMouseEnter={ev => (ev.currentTarget as HTMLElement).style.borderColor = '#7f77ff'}
                onMouseLeave={ev => (ev.currentTarget as HTMLElement).style.borderColor = '#12122e'}>
                  <div style={{ fontSize: 28, marginBottom: 12 }}>{e.icon}</div>
                  <div style={{ fontFamily: "'Orbitron', sans-serif", fontSize: 12, fontWeight: 600, marginBottom: 8, color: '#fff' }}>{e.label}</div>
                  <div style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: 10, color: '#3a3a5c', lineHeight: 1.8 }}>{e.desc}</div>
                  <div style={{ marginTop: 14, fontFamily: "'Share Tech Mono', monospace", fontSize: 10, color: '#7f77ff' }}>Visit →</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section style={{ padding: '80px 24px', maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: 10, letterSpacing: 4, color: '#1D9E75', marginBottom: 10 }}>SOCIAL PROOF</div>
        <h2 style={{ fontFamily: "'Orbitron', sans-serif", fontSize: 'clamp(20px, 3vw, 32px)', fontWeight: 700, marginBottom: 48 }}>
          Student <span style={{ color: '#7f77ff' }}>Stories</span>
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16 }}>
          {testimonials.map(t => (
            <div key={t.name} style={{
              background: 'rgba(7,7,26,0.8)', border: '1px solid #12122e',
              borderRadius: 14, padding: '28px 24px',
            }}>
              <div style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: 11, color: '#3a3a5c', lineHeight: 1.9, marginBottom: 20, fontStyle: 'italic' }}>
                "{t.text}"
              </div>
              <div style={{ fontFamily: "'Orbitron', sans-serif", fontSize: 11, color: '#fff' }}>{t.name}</div>
              <div style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: 9, color: '#1D9E75', marginTop: 4, letterSpacing: 1 }}>{t.role}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── BLOG PREVIEW ── */}
      <section style={{ padding: '80px 24px', background: 'rgba(7,7,26,0.5)', borderTop: '1px solid #0d0d22', borderBottom: '1px solid #0d0d22' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: 10, letterSpacing: 4, color: '#1D9E75', marginBottom: 10 }}>KNOWLEDGE BASE</div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 48, flexWrap: 'wrap', gap: 16 }}>
            <h2 style={{ fontFamily: "'Orbitron', sans-serif", fontSize: 'clamp(20px, 3vw, 32px)', fontWeight: 700 }}>
              Latest <span style={{ color: '#7f77ff' }}>Blog</span>
            </h2>
            <Link href="/blog" style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: 11, color: '#7f77ff', textDecoration: 'none' }}>
              View All Posts →
            </Link>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16 }}>
            {[
              { tag: 'AI & ML', title: 'What is Machine Learning? Complete Beginner Guide 2025', date: 'Mar 2025', slug: 'intro-to-machine-learning' },
              { tag: 'GAME DEV', title: 'How to Start Game Development in India — Roadmap 2025', date: 'Mar 2025', slug: 'game-dev-roadmap-india' },
              { tag: 'WEB DEV', title: 'Next.js vs React — Which Should You Learn First?', date: 'Mar 2025', slug: 'nextjs-vs-react-india' },
            ].map(post => (
              <Link key={post.slug} href={`/blog/${post.slug}`} style={{ textDecoration: 'none' }}>
                <div style={{
                  background: 'rgba(7,7,26,0.9)', border: '1px solid #12122e',
                  borderRadius: 14, padding: '24px 20px',
                  transition: 'border-color 0.3s',
                }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.borderColor = '#7f77ff'}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.borderColor = '#12122e'}>
                  <div style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: 9, letterSpacing: 2, color: '#1D9E75', marginBottom: 10 }}>{post.tag}</div>
                  <div style={{ fontFamily: "'Orbitron', sans-serif", fontSize: 13, fontWeight: 600, color: '#fff', lineHeight: 1.5, marginBottom: 16 }}>{post.title}</div>
                  <div style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: 9, color: '#3a3a5c' }}>{post.date}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES CTA ── */}
      <section style={{ padding: '80px 24px', textAlign: 'center', background: 'radial-gradient(ellipse at 50% 100%, rgba(127,119,255,0.08) 0%, transparent 60%)' }}>
        <div style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: 10, letterSpacing: 4, color: '#1D9E75', marginBottom: 16 }}>WE ALSO BUILD FOR YOU</div>
        <h2 style={{ fontFamily: "'Orbitron', sans-serif", fontSize: 'clamp(20px, 3vw, 32px)', fontWeight: 700, marginBottom: 16 }}>
          Need a <span style={{ color: '#7f77ff' }}>Product Built?</span>
        </h2>
        <p style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: 12, color: '#3a3a5c', marginBottom: 36, maxWidth: 500, margin: '0 auto 36px' }}>
          Web apps, mobile apps, AI systems, games — we design, build and deploy production-ready products for startups and businesses.
        </p>
        <a href="https://services.seekhowithrua.com" style={{
          background: '#7f77ff', color: '#000', padding: '14px 32px',
          borderRadius: 8, fontFamily: "'Share Tech Mono', monospace",
          fontSize: 12, fontWeight: 700, textDecoration: 'none', letterSpacing: 1,
        }}>
          Explore Services →
        </a>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{
        padding: '32px 24px', borderTop: '1px solid #0d0d22',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        flexWrap: 'wrap', gap: 16,
        fontFamily: "'Share Tech Mono', monospace", fontSize: 10, color: '#1a1a40',
      }}>
        <span style={{ color: '#3a3a5c' }}>© 2025 SeekhowithRua · Master Rua · UEEP Model</span>
        <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
          {[
            ['App', 'https://app.seekhowithrua.com'],
            ['Gaming', 'https://gaming.seekhowithrua.com'],
            ['Animation Lab', 'https://animationlab.seekhowithrua.com'],
            ['Services', 'https://services.seekhowithrua.com'],
            ['Blog', '/blog'],
          ].map(([label, href]) => (
            <a key={label} href={href} style={{ color: '#3a3a5c', textDecoration: 'none' }}
              onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = '#7f77ff'}
              onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = '#3a3a5c'}>
              {label}
            </a>
          ))}
        </div>
      </footer>

    </main>
  )
}