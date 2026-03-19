// ============================================================
// FILE LOCATION: seekhowithrua-seo/components/CoursePageTemplate.tsx
// STEP 1: "components" folder already exists (Navbar.jsx is there)
// STEP 2: Inside "components" folder, CREATE a file called "CoursePageTemplate.tsx"
// STEP 3: Paste this entire file content inside CoursePageTemplate.tsx
// NOTE: This one file powers ALL 6 course pages — game dev, full stack,
//       python, iot, ai, web dev. Fix here = fix everywhere.
// ============================================================

"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import type { CourseData } from "@/lib/courses";

// ─── THREE.JS BACKGROUND ─────────────────────────────────────────────────────
function ThreeBackground({ color }: { color: string }) {
  const mountRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;
    let animId: number;
    const init = () => {
      const THREE = (window as any).THREE;
      if (!THREE) return;
      const W = mount.clientWidth, H = mount.clientHeight;
      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setSize(W, H);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      mount.appendChild(renderer.domElement);
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(60, W / H, 0.1, 200);
      camera.position.z = 60;
      const N = 1500;
      const pos = new Float32Array(N * 3);
      for (let i = 0; i < N * 3; i++) pos[i] = (Math.random() - 0.5) * 200;
      const geo = new THREE.BufferGeometry();
      geo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
      const hex = parseInt(color.replace("#", ""), 16);
      const mat = new THREE.PointsMaterial({ size: 0.5, color: hex, transparent: true, opacity: 0.5 });
      scene.add(new THREE.Points(geo, mat));
      let t = 0;
      const animate = () => {
        animId = requestAnimationFrame(animate);
        t += 0.003;
        scene.rotation.y = t * 0.04;
        scene.rotation.x = Math.sin(t * 0.03) * 0.05;
        renderer.render(scene, camera);
      };
      animate();
      const onResize = () => {
        const w = mount.clientWidth, h = mount.clientHeight;
        renderer.setSize(w, h);
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
      };
      window.addEventListener("resize", onResize);
      (mount as any)._cleanup = () => {
        cancelAnimationFrame(animId);
        window.removeEventListener("resize", onResize);
        renderer.dispose();
        if (mount.contains(renderer.domElement)) mount.removeChild(renderer.domElement);
      };
    };
    const existing = document.querySelector('script[src*="three.min"]');
    if (existing) { setTimeout(init, 100); }
    else {
      const script = document.createElement("script");
      script.src = "https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js";
      script.onload = init;
      document.head.appendChild(script);
    }
    return () => { (mount as any)._cleanup?.(); };
  }, [color]);
  return <div ref={mountRef} style={{ position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none", opacity: 0.4 }} />;
}

// ─── QUIZ MODAL ───────────────────────────────────────────────────────────────
function QuizModal({ chapter, color, onClose }: { chapter: any; color: string; onClose: () => void }) {
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState(false);
  const questions = chapter.topics.map((t: string, i: number) => ({
    q: `Which of the following best describes "${t}"?`,
    opts: [t, `Advanced ${t}`, `Alternative to ${t}`, `None of the above`],
    ans: 0,
  }));
  const score = submitted ? questions.filter((_: any, i: number) => answers[i] === 0).length : 0;

  return (
    <div className="qm-overlay" onClick={e => e.target === e.currentTarget && onClose()}>
      <div className="qm-box">
        <div className="qm-head">
          <div>
            <div className="qm-title" style={{ color }}>{chapter.title}</div>
            <div className="qm-sub">Chapter Quiz · {questions.length} Questions</div>
          </div>
          <button className="qm-close" onClick={onClose}>✕</button>
        </div>
        <div className="qm-body">
          {submitted ? (
            <div className="qm-result">
              <div style={{ fontSize: 48, marginBottom: 12 }}>{score >= questions.length * 0.8 ? "🏆" : "💪"}</div>
              <div className="qr-score" style={{ color }}>{score}/{questions.length}</div>
              <div className="qr-msg">{score >= questions.length * 0.8 ? "Excellent!" : "Keep practicing!"}</div>
              <div className="qr-btns">
                <button className="qr-btn-r" onClick={() => { setAnswers({}); setSubmitted(false); }}>↺ Retry</button>
                <button className="qr-btn-d" style={{ background: color }} onClick={onClose}>Done ✓</button>
              </div>
            </div>
          ) : (
            <>
              {questions.map((q: any, i: number) => (
                <div key={i} className="qq-block">
                  <div className="qq-num" style={{ color }}>Q{i + 1}</div>
                  <div className="qq-text">{q.q}</div>
                  <div className="qq-opts">
                    {q.opts.map((opt: string, oi: number) => (
                      <button key={oi}
                        className={`qq-opt ${answers[i] === oi ? "sel" : ""}`}
                        style={answers[i] === oi ? { borderColor: color, color } : {}}
                        onClick={() => setAnswers(a => ({ ...a, [i]: oi }))}>
                        <span className="qq-lbl">{String.fromCharCode(65 + oi)}</span>{opt}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
              <button className="qm-submit"
                style={{ background: Object.keys(answers).length < questions.length ? "rgba(255,255,255,0.1)" : `linear-gradient(135deg,${color},#7c3aed)` }}
                onClick={() => setSubmitted(true)}
                disabled={Object.keys(answers).length < questions.length}>
                {Object.keys(answers).length < questions.length
                  ? `Answer all (${Object.keys(answers).length}/${questions.length})`
                  : "✅ Submit Quiz"}
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

// ─── CHAPTER VIEW ─────────────────────────────────────────────────────────────
function ChapterView({ chapter, module: mod, onBack, completed, onComplete }: any) {
  const [showQuiz, setShowQuiz] = useState(false);
  return (
    <div className="cv">
      {showQuiz && <QuizModal chapter={chapter} color={mod.color} onClose={() => setShowQuiz(false)} />}
      <div className="cv-header">
        <button className="cv-back" onClick={onBack}>← Back</button>
        <div className="cv-breadcrumb">
          <span style={{ color: mod.color }}>{mod.icon} {mod.title}</span>
          <span className="cv-sep"> › </span>
          <span className="cv-cur">{chapter.title}</span>
        </div>
        {!completed
          ? <button className="cv-complete" onClick={onComplete}>✓ Mark Complete</button>
          : <span className="cv-done">✅ Done</span>}
      </div>
      <div className="cv-body">
        <h1 className="cv-h1" style={{ color: mod.color }}>{chapter.title}</h1>
        <p className="cv-desc">
          Master <strong>{chapter.title}</strong> — a core part of <strong>{mod.title}</strong>.
          Practice with quizzes and apply to real projects.
        </p>
        <div className="cv-topics">
          {chapter.topics.map((t: string, i: number) => (
            <div key={i} className="cv-topic" style={{ borderLeftColor: mod.color }}>
              <span className="cv-tnum" style={{ color: mod.color }}>{String(i + 1).padStart(2, "0")}</span>
              <span className="cv-ttext">{t}</span>
            </div>
          ))}
        </div>
        <div className="cv-sections">
          <div className="cv-section">
            <h3>📖 What You'll Learn</h3>
            <p>In this chapter you'll implement <strong>{chapter.title}</strong>.
              Key topics: {chapter.topics.join(", ")}.</p>
          </div>
          <div className="cv-section">
            <h3>🎯 Learning Goals</h3>
            <ul>{chapter.topics.map((t: string, i: number) =>
              <li key={i}>✦ Implement <strong>{t}</strong> in a real project</li>
            )}</ul>
          </div>
          <div className="cv-section">
            <h3>🔗 Continue Learning</h3>
            <p>After this chapter, head to{" "}
              <a href="https://app.seekhowithrua.com" style={{ color: mod.color }}>
                app.seekhowithrua.com
              </a>{" "}
              for video lessons, live coding and community support.</p>
          </div>
        </div>
        <div className="cv-cta" style={{ borderColor: mod.color + "40" }}>
          <div className="cv-cta-left">
            <div className="cv-cta-icon" style={{ background: mod.color + "22", color: mod.color }}>📝</div>
            <div>
              <div className="cv-cta-title">Chapter Quiz</div>
              <div className="cv-cta-sub">{chapter.topics.length} questions · Test your knowledge</div>
            </div>
          </div>
          <button className="cv-cta-btn"
            style={{ background: `linear-gradient(135deg,${mod.color},#7c3aed)` }}
            onClick={() => setShowQuiz(true)}>
            Take Quiz →
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── MAIN TEMPLATE ────────────────────────────────────────────────────────────
export default function CoursePageTemplate({ course }: { course: CourseData }) {
  const [activeModule, setActiveModule] = useState<string | null>(null);
  const [activeChapter, setActiveChapter] = useState<string | null>(null);
  const [completed, setCompleted] = useState<Set<string>>(new Set());
  const [expanded, setExpanded] = useState<Record<string, boolean>>({ [course.modules[0].id]: true });
  const [search, setSearch] = useState("");

  const totalCh = course.modules.reduce((a, m) => a + m.chapters.length, 0);
  const pct = Math.round((completed.size / totalCh) * 100);

  const curMod = activeModule ? course.modules.find(m => m.id === activeModule) ?? null : null;
  const curCh = curMod && activeChapter ? curMod.chapters.find(c => c.id === activeChapter) ?? null : null;

  const filtered = search.trim()
    ? course.modules.map(m => ({
        ...m,
        chapters: m.chapters.filter(c =>
          c.title.toLowerCase().includes(search.toLowerCase()) ||
          c.topics.some(t => t.toLowerCase().includes(search.toLowerCase()))
        ),
      })).filter(m => m.chapters.length > 0)
    : course.modules;

  return (
    <>
      {/* SEO Hidden Content */}
      <div aria-hidden="false" style={{ position: "absolute", width: 1, height: 1, overflow: "hidden", clip: "rect(0,0,0,0)" }}>
        <h1>{course.title} Course — SeekhowithRua</h1>
        <p>{course.description} {course.keywords.join(", ")}</p>
        {course.modules.map(m => (
          <div key={m.id}>
            <h2>{m.title}</h2>
            {m.chapters.map(c => <p key={c.id}>{c.title}: {c.topics.join(", ")}</p>)}
          </div>
        ))}
      </div>

      <div className="cp">
        <div className="cp-bg"><ThreeBackground color={course.color} /></div>

        {/* Hero */}
        <header className="cp-hero">
          <div className="cp-hero-tag">{course.icon} {course.title.toUpperCase()} COURSE</div>
          <h1 className="cp-hero-h1">Master <span style={{ color: course.color }}>{course.title}</span></h1>
          <p className="cp-hero-sub">{course.description}</p>
          <div className="cp-hero-stats">
            {[
              [`${course.modules.length}`, "Modules"],
              [`${totalCh}`, "Chapters"],
              [`${totalCh * 10}+`, "Quiz Qs"],
              [`${pct}%`, "Progress"],
            ].map(([v, l]) => (
              <div key={l} className="cp-stat">
                <div className="cp-stat-v" style={{ color: course.color }}>{v}</div>
                <div className="cp-stat-l">{l}</div>
              </div>
            ))}
          </div>
          <div className="cp-progress">
            <div className="cp-prog-bar">
              <div className="cp-prog-fill" style={{ width: `${pct}%`, background: course.color }} />
            </div>
            <span className="cp-prog-txt">{completed.size}/{totalCh} chapters</span>
          </div>
        </header>

        <div className="cp-layout">
          {/* Sidebar */}
          <aside className="cp-sidebar">
            <div className="cp-search-wrap">
              <span style={{ fontSize: 14, opacity: 0.4 }}>🔍</span>
              <input className="cp-search" placeholder="Search chapters..."
                value={search} onChange={e => setSearch(e.target.value)} />
            </div>
            <nav className="cp-nav">
              {filtered.map(mod => {
                const done = mod.chapters.filter(c => completed.has(c.id)).length;
                const exp = expanded[mod.id] ?? false;
                return (
                  <div key={mod.id}>
                    <button
                      className={`cp-mod ${activeModule === mod.id ? "active" : ""}`}
                      style={activeModule === mod.id ? { color: mod.color, borderLeftColor: mod.color } : {}}
                      onClick={() => {
                        setExpanded(p => ({ ...p, [mod.id]: !p[mod.id] }));
                        setActiveModule(mod.id);
                        setActiveChapter(null);
                      }}>
                      <span className="cp-mod-icon">{mod.icon}</span>
                      <span className="cp-mod-title">{mod.title}</span>
                      <span className="cp-mod-count">{done}/{mod.chapters.length}</span>
                      <span className="cp-mod-arrow">{exp ? "▼" : "▶"}</span>
                    </button>
                    {exp && mod.chapters.map((ch, ci) => (
                      <button key={ch.id}
                        className={`cp-ch ${activeChapter === ch.id ? "active" : ""} ${completed.has(ch.id) ? "done" : ""}`}
                        style={activeChapter === ch.id ? { color: mod.color } : {}}
                        onClick={() => { setActiveModule(mod.id); setActiveChapter(ch.id); }}>
                        <span className="cp-ch-num">{ci + 1}</span>
                        <span className="cp-ch-title">{ch.title}</span>
                        {completed.has(ch.id) && <span className="cp-ch-done">✓</span>}
                      </button>
                    ))}
                  </div>
                );
              })}
            </nav>
          </aside>

          {/* Main Content */}
          <main className="cp-main">
            {curCh && curMod ? (
              <ChapterView
                chapter={curCh}
                module={curMod}
                onBack={() => setActiveChapter(null)}
                completed={completed.has(curCh.id)}
                onComplete={() => setCompleted(p => { const s = new Set(p); s.add(curCh.id); return s; })}
              />
            ) : curMod ? (
              <div className="mo">
                <div className="mo-head" style={{ borderLeftColor: curMod.color }}>
                  <span style={{ fontSize: 44 }}>{curMod.icon}</span>
                  <div>
                    <h2 className="mo-title">{curMod.title}</h2>
                    <p className="mo-sub">{curMod.chapters.length} Chapters · Click to begin</p>
                  </div>
                </div>
                <div className="mo-grid">
                  {curMod.chapters.map((ch, ci) => (
                    <button key={ch.id}
                      className={`mo-card ${completed.has(ch.id) ? "done" : ""}`}
                      style={{ "--mc": curMod.color } as any}
                      onClick={() => setActiveChapter(ch.id)}>
                      <div className="mc-num" style={{ color: curMod.color }}>{String(ci + 1).padStart(2, "0")}</div>
                      <div className="mc-info">
                        <div className="mc-title">{ch.title}</div>
                        <div className="mc-sub">{ch.topics.slice(0, 2).join(" · ")}{ch.topics.length > 2 ? " ..." : ""}</div>
                        <div className="mc-tags"><span>📝 Quiz</span>{completed.has(ch.id) && <span style={{ color: "#00ff88" }}>✅ Done</span>}</div>
                      </div>
                      <span style={{ color: curMod.color, fontSize: 20 }}>→</span>
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <div className="cp-welcome">
                <h2 className="cw-title">Welcome to <span style={{ color: course.color }}>{course.title}</span></h2>
                <p className="cw-sub">{course.description} Select a module from the sidebar to begin.</p>
                <div className="cw-grid">
                  {course.modules.map(m => (
                    <button key={m.id} className="cw-card"
                      style={{ "--mc": m.color, borderTopColor: m.color } as any}
                      onClick={() => { setActiveModule(m.id); setExpanded(p => ({ ...p, [m.id]: true })); }}>
                      <span style={{ fontSize: 28 }}>{m.icon}</span>
                      <span className="cw-card-title">{m.title}</span>
                      <span className="cw-card-count">{m.chapters.length} chapters</span>
                    </button>
                  ))}
                </div>
                <div className="cw-cta">
                  <a href="https://app.seekhowithrua.com" className="cw-btn"
                    style={{ background: `linear-gradient(135deg,${course.color},#7c3aed)` }}>
                    🚀 Go to Full Platform
                  </a>
                  <Link href="/blog" className="cw-btn-o">Read Blog →</Link>
                </div>
              </div>
            )}
          </main>
        </div>

        {/* SEO Footer */}
        <footer className="cp-footer">
          <div className="cp-footer-inner">
            <h2>{course.title} Course Curriculum — SeekhowithRua</h2>
            <p>{course.description}</p>
            <div className="cp-footer-links">
              {course.modules.map(m => (
                <div key={m.id}>
                  <strong>{m.title}</strong>
                  {m.chapters.map(c => <span key={c.id}> · {c.title}</span>)}
                </div>
              ))}
            </div>
          </div>
        </footer>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@400;600;700&family=JetBrains+Mono:wght@400;500&family=Exo+2:wght@400;500;600;700&display=swap');
        *,*::before,*::after{box-sizing:border-box}
        .cp{font-family:'Exo 2',sans-serif;background:#04040f;color:#e2e8f0;min-height:100vh;position:relative;overflow-x:hidden}
        .cp-bg{position:fixed;inset:0;z-index:0;pointer-events:none}
        .cp-hero{position:relative;z-index:1;padding:80px 40px 48px;text-align:center;border-bottom:1px solid rgba(255,255,255,0.05)}
        .cp-hero-tag{font-family:'JetBrains Mono',monospace;font-size:10px;letter-spacing:4px;color:rgba(255,255,255,0.4);margin-bottom:16px}
        .cp-hero-h1{font-family:'Rajdhani',sans-serif;font-size:clamp(28px,5vw,52px);font-weight:700;color:#fff;margin-bottom:12px}
        .cp-hero-sub{font-family:'JetBrains Mono',monospace;font-size:12px;color:rgba(255,255,255,0.4);max-width:560px;margin:0 auto 28px;line-height:2}
        .cp-hero-stats{display:flex;align-items:center;justify-content:center;gap:32px;margin-bottom:20px;flex-wrap:wrap}
        .cp-stat-v{font-family:'Rajdhani',sans-serif;font-size:28px;font-weight:700}
        .cp-stat-l{font-family:'JetBrains Mono',monospace;font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px;text-transform:uppercase;margin-top:2px}
        .cp-progress{display:flex;align-items:center;justify-content:center;gap:12px}
        .cp-prog-bar{width:200px;height:4px;background:rgba(255,255,255,0.08);border-radius:2px;overflow:hidden}
        .cp-prog-fill{height:100%;border-radius:2px;transition:width 0.5s}
        .cp-prog-txt{font-family:'JetBrains Mono',monospace;font-size:11px;color:rgba(255,255,255,0.35)}
        .cp-layout{position:relative;z-index:1;display:flex;min-height:calc(100vh - 260px)}
        .cp-sidebar{width:300px;min-width:280px;flex-shrink:0;background:rgba(4,4,15,0.97);border-right:1px solid rgba(255,255,255,0.06);display:flex;flex-direction:column;position:sticky;top:0;max-height:100vh;overflow:hidden}
        .cp-search-wrap{display:flex;align-items:center;gap:8px;padding:12px;border-bottom:1px solid rgba(255,255,255,0.06);flex-shrink:0}
        .cp-search{flex:1;background:none;border:none;outline:none;color:#fff;font-size:13px;font-family:'JetBrains Mono',monospace}
        .cp-search::placeholder{color:rgba(255,255,255,0.25)}
        .cp-nav{flex:1;overflow-y:auto;padding:6px 0}
        .cp-nav::-webkit-scrollbar{width:3px}
        .cp-nav::-webkit-scrollbar-thumb{background:rgba(255,255,255,0.1)}
        .cp-mod{width:100%;display:flex;align-items:center;gap:8px;padding:10px 14px;border:none;border-left:3px solid transparent;background:transparent;color:rgba(255,255,255,0.6);cursor:pointer;text-align:left;font-size:11px;font-weight:700;font-family:inherit;transition:all 0.2s}
        .cp-mod:hover{background:rgba(255,255,255,0.04);color:#fff}
        .cp-mod.active{background:rgba(255,255,255,0.05)}
        .cp-mod-icon{font-size:16px;flex-shrink:0}
        .cp-mod-title{flex:1;font-size:11px;line-height:1.3}
        .cp-mod-count{font-size:10px;color:rgba(255,255,255,0.3);background:rgba(255,255,255,0.06);padding:2px 6px;border-radius:10px;flex-shrink:0}
        .cp-mod-arrow{font-size:9px;color:rgba(255,255,255,0.3);flex-shrink:0}
        .cp-ch{width:100%;display:flex;align-items:center;gap:8px;padding:7px 14px 7px 28px;border:none;background:transparent;color:rgba(255,255,255,0.45);cursor:pointer;text-align:left;font-size:11px;font-family:inherit;transition:all 0.15s}
        .cp-ch:hover{background:rgba(255,255,255,0.03);color:rgba(255,255,255,0.8)}
        .cp-ch.active{background:rgba(255,255,255,0.06)}
        .cp-ch.done{color:rgba(0,255,136,0.5)}
        .cp-ch-num{font-size:10px;color:rgba(255,255,255,0.2);width:18px;flex-shrink:0;font-family:'JetBrains Mono',monospace}
        .cp-ch-title{flex:1}
        .cp-ch-done{color:#00ff88;font-size:10px}
        .cp-main{flex:1;min-width:0;overflow-y:auto}
        .cp-welcome{padding:40px}
        .cw-title{font-family:'Rajdhani',sans-serif;font-size:28px;font-weight:700;color:#fff;margin-bottom:12px}
        .cw-sub{font-size:14px;color:rgba(255,255,255,0.45);line-height:1.8;max-width:560px;margin-bottom:32px;font-family:'JetBrains Mono',monospace}
        .cw-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:12px;margin-bottom:36px}
        .cw-card{display:flex;flex-direction:column;align-items:flex-start;gap:6px;padding:18px;border:1px solid rgba(255,255,255,0.07);border-top:3px solid var(--mc);border-radius:12px;background:rgba(10,10,30,0.6);cursor:pointer;text-align:left;font-family:inherit;transition:all 0.2s}
        .cw-card:hover{background:rgba(255,255,255,0.05);transform:translateY(-2px)}
        .cw-card-title{font-family:'Rajdhani',sans-serif;font-size:13px;font-weight:700;color:#fff}
        .cw-card-count{font-size:10px;color:rgba(255,255,255,0.35);font-family:'JetBrains Mono',monospace}
        .cw-cta{display:flex;gap:12px;flex-wrap:wrap}
        .cw-btn{padding:12px 24px;border-radius:8px;color:#fff;font-family:'Rajdhani',sans-serif;font-size:14px;font-weight:700;text-decoration:none;transition:opacity 0.2s}
        .cw-btn:hover{opacity:0.85}
        .cw-btn-o{padding:12px 24px;border-radius:8px;border:1px solid rgba(255,255,255,0.2);background:rgba(255,255,255,0.04);color:rgba(255,255,255,0.8);font-family:'Rajdhani',sans-serif;font-size:14px;font-weight:600;text-decoration:none;transition:all 0.2s}
        .cw-btn-o:hover{border-color:#7c3aed;color:#7c3aed}
        .mo{padding:32px 40px}
        .mo-head{display:flex;align-items:center;gap:16px;padding:20px;border:1px solid rgba(255,255,255,0.08);border-left:4px solid;border-radius:14px;background:rgba(255,255,255,0.02);margin-bottom:24px}
        .mo-title{font-family:'Rajdhani',sans-serif;font-size:20px;font-weight:700;color:#fff;margin:0 0 4px}
        .mo-sub{font-size:12px;color:rgba(255,255,255,0.4);font-family:'JetBrains Mono',monospace;margin:0}
        .mo-grid{display:flex;flex-direction:column;gap:8px}
        .mo-card{display:flex;align-items:center;gap:16px;padding:14px 18px;border:1px solid rgba(255,255,255,0.07);border-radius:10px;background:rgba(255,255,255,0.02);cursor:pointer;text-align:left;font-family:inherit;transition:all 0.2s}
        .mo-card:hover{background:rgba(255,255,255,0.05);border-color:var(--mc);transform:translateX(4px)}
        .mo-card.done{border-color:rgba(0,255,136,0.2)}
        .mc-num{font-size:20px;font-weight:800;font-family:'JetBrains Mono',monospace;min-width:40px}
        .mc-info{flex:1}
        .mc-title{font-size:14px;font-weight:600;color:#fff;margin-bottom:3px}
        .mc-sub{font-size:11px;color:rgba(255,255,255,0.35);margin-bottom:5px;font-family:'JetBrains Mono',monospace}
        .mc-tags{display:flex;gap:12px;font-size:10px;color:rgba(255,255,255,0.3);font-family:'JetBrains Mono',monospace}
        .cv{display:flex;flex-direction:column;height:100%}
        .cv-header{display:flex;align-items:center;gap:14px;padding:14px 28px;border-bottom:1px solid rgba(255,255,255,0.07);background:rgba(4,4,15,0.97);flex-shrink:0;flex-wrap:wrap}
        .cv-back{padding:7px 16px;border:1px solid rgba(255,255,255,0.15);border-radius:7px;background:rgba(255,255,255,0.04);color:rgba(255,255,255,0.7);cursor:pointer;font-size:13px;font-family:inherit;transition:all 0.2s}
        .cv-back:hover{background:rgba(255,255,255,0.1);color:#fff}
        .cv-breadcrumb{flex:1;font-size:13px;color:rgba(255,255,255,0.5)}
        .cv-sep{margin:0 4px}
        .cv-cur{color:#fff;font-weight:600}
        .cv-complete{padding:7px 16px;border:1px solid rgba(0,255,136,0.3);border-radius:7px;background:rgba(0,255,136,0.07);color:#00ff88;cursor:pointer;font-size:13px;font-weight:600;font-family:inherit}
        .cv-done{font-size:13px;color:#00ff88;padding:6px 14px;border:1px solid rgba(0,255,136,0.3);border-radius:7px;background:rgba(0,255,136,0.07)}
        .cv-body{flex:1;overflow-y:auto;padding:36px 40px}
        .cv-body::-webkit-scrollbar{width:3px}
        .cv-body::-webkit-scrollbar-thumb{background:rgba(255,255,255,0.1)}
        .cv-h1{font-family:'Rajdhani',sans-serif;font-size:28px;font-weight:700;margin-bottom:10px}
        .cv-desc{font-size:14px;color:rgba(255,255,255,0.5);line-height:1.8;margin-bottom:28px;font-family:'JetBrains Mono',monospace}
        .cv-topics{display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:10px;margin-bottom:32px}
        .cv-topic{display:flex;align-items:center;gap:10px;padding:12px 14px;border:1px solid rgba(255,255,255,0.07);border-left:3px solid;border-radius:8px;background:rgba(255,255,255,0.02)}
        .cv-tnum{font-size:11px;font-family:'JetBrains Mono',monospace;font-weight:700;flex-shrink:0}
        .cv-ttext{font-size:13px;color:rgba(255,255,255,0.8)}
        .cv-sections{display:flex;flex-direction:column;gap:16px;margin-bottom:28px}
        .cv-section{padding:20px;border:1px solid rgba(255,255,255,0.07);border-radius:12px;background:rgba(255,255,255,0.02)}
        .cv-section h3{font-family:'Rajdhani',sans-serif;font-size:15px;font-weight:700;color:#fff;margin:0 0 10px}
        .cv-section p{color:rgba(255,255,255,0.55);line-height:1.8;font-size:14px;margin:0}
        .cv-section a{text-decoration:none;font-weight:600}
        .cv-section ul{list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:6px}
        .cv-section li{font-size:13px;color:rgba(255,255,255,0.6)}
        .cv-section li strong{color:#fff}
        .cv-cta{display:flex;align-items:center;justify-content:space-between;gap:16px;padding:20px;border:2px solid;border-radius:14px;background:rgba(255,255,255,0.02);flex-wrap:wrap}
        .cv-cta-left{display:flex;align-items:center;gap:12px}
        .cv-cta-icon{width:44px;height:44px;border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:20px;flex-shrink:0}
        .cv-cta-title{font-family:'Rajdhani',sans-serif;font-size:15px;font-weight:700;color:#fff}
        .cv-cta-sub{font-size:11px;color:rgba(255,255,255,0.4);font-family:'JetBrains Mono',monospace;margin-top:2px}
        .cv-cta-btn{padding:10px 24px;border:none;border-radius:8px;color:#fff;font-family:'Rajdhani',sans-serif;font-size:14px;font-weight:700;cursor:pointer;transition:all 0.2s;flex-shrink:0}
        .cv-cta-btn:hover{transform:translateY(-2px);opacity:0.9}
        .qm-overlay{position:fixed;inset:0;background:rgba(0,0,0,0.88);display:flex;align-items:center;justify-content:center;z-index:10000;padding:20px;backdrop-filter:blur(8px)}
        .qm-box{background:#08081a;border:1px solid rgba(255,255,255,0.1);border-radius:16px;width:100%;max-width:680px;max-height:88vh;display:flex;flex-direction:column;overflow:hidden}
        .qm-head{display:flex;align-items:center;justify-content:space-between;padding:16px 20px;border-bottom:1px solid rgba(255,255,255,0.08);background:rgba(0,0,0,0.3);flex-shrink:0}
        .qm-title{font-family:'Rajdhani',sans-serif;font-size:16px;font-weight:700}
        .qm-sub{font-family:'JetBrains Mono',monospace;font-size:11px;color:rgba(255,255,255,0.4);margin-top:3px}
        .qm-close{background:none;border:none;color:rgba(255,255,255,0.4);cursor:pointer;font-size:18px}
        .qm-body{flex:1;overflow-y:auto;padding:20px;display:flex;flex-direction:column;gap:16px}
        .qm-body::-webkit-scrollbar{width:3px}
        .qm-body::-webkit-scrollbar-thumb{background:rgba(255,255,255,0.1)}
        .qq-block{padding:14px;border:1px solid rgba(255,255,255,0.08);border-radius:10px;background:rgba(255,255,255,0.02)}
        .qq-num{font-size:10px;font-weight:700;font-family:'JetBrains Mono',monospace;margin-bottom:6px}
        .qq-text{font-size:14px;color:#fff;font-weight:500;margin-bottom:12px;line-height:1.5}
        .qq-opts{display:grid;grid-template-columns:1fr 1fr;gap:7px}
        .qq-opt{display:flex;align-items:center;gap:8px;padding:8px 12px;border:1px solid rgba(255,255,255,0.1);border-radius:7px;background:rgba(255,255,255,0.03);color:rgba(255,255,255,0.65);cursor:pointer;font-size:12px;font-family:inherit;text-align:left;transition:all 0.15s}
        .qq-opt:hover{background:rgba(255,255,255,0.07);color:#fff}
        .qq-opt.sel{background:rgba(124,58,237,0.12)}
        .qq-lbl{font-size:10px;font-weight:700;opacity:0.5;flex-shrink:0}
        .qm-submit{padding:13px;border:none;border-radius:10px;color:#fff;font-size:14px;font-weight:700;font-family:inherit;cursor:pointer;transition:all 0.2s}
        .qm-submit:disabled{cursor:not-allowed;opacity:0.5}
        .qm-result{text-align:center;padding:40px 20px}
        .qr-score{font-family:'Rajdhani',sans-serif;font-size:36px;font-weight:700;margin-bottom:8px}
        .qr-msg{font-size:14px;color:rgba(255,255,255,0.5);margin-bottom:24px}
        .qr-btns{display:flex;gap:12px;justify-content:center}
        .qr-btn-r{padding:10px 20px;border:1px solid rgba(255,255,255,0.2);border-radius:8px;background:rgba(255,255,255,0.07);color:#fff;cursor:pointer;font-family:inherit}
        .qr-btn-d{padding:10px 20px;border:none;border-radius:8px;color:#fff;cursor:pointer;font-weight:700;font-family:inherit}
        .cp-footer{position:relative;z-index:1;padding:40px;border-top:1px solid rgba(255,255,255,0.05);background:rgba(0,0,0,0.3)}
        .cp-footer-inner{max-width:960px;margin:0 auto}
        .cp-footer h2{font-family:'Rajdhani',sans-serif;font-size:18px;color:#fff;margin-bottom:8px}
        .cp-footer p{font-size:13px;color:rgba(255,255,255,0.4);margin-bottom:16px;line-height:1.7}
        .cp-footer-links{font-size:11px;color:rgba(255,255,255,0.3);line-height:2}
        .cp-footer-links strong{color:rgba(255,255,255,0.5)}
        @media(max-width:768px){.cp-layout{flex-direction:column}.cp-sidebar{width:100%;min-width:unset;position:relative;max-height:280px}.cp-hero{padding:80px 20px 32px}.mo,.cp-welcome,.cv-body{padding:20px}.qq-opts{grid-template-columns:1fr}.cp-footer{padding:28px 20px}}
      `}</style>
    </>
  );
}