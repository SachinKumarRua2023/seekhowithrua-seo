"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

// ─── TYPES ────────────────────────────────────────────────────────────────────
interface User {
  email?: string;
  name?: string;
  profile?: { name?: string };
}

// ─── THREE.JS BACKGROUND ─────────────────────────────────────────────────────
function ThreeBackground() {
  const mountRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;
    let animId: number;
    const script = document.createElement("script");
    script.src = "https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js";
    script.onload = () => {
      const THREE = (window as any).THREE;
      const W = mount.clientWidth, H = mount.clientHeight;
      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setSize(W, H);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      mount.appendChild(renderer.domElement);
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(60, W / H, 0.1, 300);
      camera.position.z = 80;

      // Stars
      const geo = new THREE.BufferGeometry();
      const N = 2000;
      const pos = new Float32Array(N * 3);
      for (let i = 0; i < N * 3; i++) pos[i] = (Math.random() - 0.5) * 300;
      geo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
      const starMat = new THREE.PointsMaterial({ size: 0.5, color: 0x7c3aed, transparent: true, opacity: 0.6 });
      scene.add(new THREE.Points(geo, starMat));

      // Floating orbs
      const orbColors = [0x00d4ff, 0x7c3aed, 0x1D9E75, 0xa855f7];
      const orbs: any[] = [];
      for (let i = 0; i < 12; i++) {
        const g = new THREE.SphereGeometry(Math.random() * 1.5 + 0.5, 16, 16);
        const m = new THREE.MeshBasicMaterial({
          color: orbColors[i % orbColors.length],
          transparent: true,
          opacity: Math.random() * 0.15 + 0.05,
        });
        const mesh = new THREE.Mesh(g, m);
        mesh.position.set(
          (Math.random() - 0.5) * 160,
          (Math.random() - 0.5) * 100,
          (Math.random() - 0.5) * 60
        );
        mesh.userData = { speed: Math.random() * 0.004 + 0.001, offset: Math.random() * Math.PI * 2 };
        scene.add(mesh);
        orbs.push(mesh);
      }

      // Grid lines
      const gridGeo = new THREE.BufferGeometry();
      const gridPts: number[] = [];
      for (let x = -100; x <= 100; x += 20) {
        gridPts.push(x, -40, 0, x, 40, 0);
      }
      for (let y = -40; y <= 40; y += 20) {
        gridPts.push(-100, y, 0, 100, y, 0);
      }
      gridGeo.setAttribute("position", new THREE.BufferAttribute(new Float32Array(gridPts), 3));
      scene.add(new THREE.LineSegments(gridGeo, new THREE.LineBasicMaterial({ color: 0x7c3aed, transparent: true, opacity: 0.04 })));

      let t = 0;
      const animate = () => {
        animId = requestAnimationFrame(animate);
        t += 0.005;
        orbs.forEach((orb) => {
          orb.position.y += Math.sin(t + orb.userData.offset) * orb.userData.speed;
          orb.position.x += Math.cos(t * 0.3 + orb.userData.offset) * 0.002;
        });
        scene.rotation.y = t * 0.02;
        starMat.opacity = 0.4 + Math.sin(t * 0.5) * 0.15;
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
    document.head.appendChild(script);
    return () => { (mount as any)._cleanup?.(); };
  }, []);
  return <div ref={mountRef} style={{ position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none" }} />;
}

// ─── COURSES DATA ─────────────────────────────────────────────────────────────
const COURSES = [
  { emoji: "🤖", title: "AI & Machine Learning", slug: "ai-course", color: "#00d4ff", desc: "Neural networks, LLMs, computer vision, NLP and production AI systems.", tags: ["PyTorch", "TensorFlow", "LLMs", "RAG"] },
  { emoji: "📊", title: "Data Science", slug: "data-science-course", color: "#7c3aed", desc: "Python, Pandas, statistics, ML, deep learning and MLOps end-to-end.", tags: ["Python", "Pandas", "Scikit-learn", "MLflow"] },
  { emoji: "💻", title: "Full Stack Dev", slug: "full-stack-development", color: "#1D9E75", desc: "React, Next.js, Django, PostgreSQL — build and deploy full products.", tags: ["React", "Next.js", "Django", "PostgreSQL"] },
  { emoji: "📱", title: "Mobile Apps", slug: "mobile-app-development", color: "#a855f7", desc: "React Native & Expo. Build iOS and Android apps from scratch.", tags: ["React Native", "Expo", "iOS", "Android"] },
  { emoji: "🎮", title: "Game Development", slug: "game-development", color: "#f59e0b", desc: "Unity, Three.js, WebGL, Phaser. From 2D games to 3D worlds.", tags: ["Unity", "Three.js", "WebGL", "Phaser"] },
  { emoji: "🐍", title: "Python Programming", slug: "python-programming-course", color: "#ec4899", desc: "Master Python from basics to advanced — automation, APIs and more.", tags: ["Python", "FastAPI", "Automation", "OOP"] },
  { emoji: "⚙️", title: "IoT & Robotics", slug: "iot-robotics", color: "#06b6d4", desc: "Arduino, Raspberry Pi, sensors, embedded systems and robotics.", tags: ["Arduino", "Raspberry Pi", "MQTT", "Sensors"] },
  { emoji: "🌐", title: "Web Development", slug: "web-development-course", color: "#84cc16", desc: "HTML, CSS, JavaScript, React and modern web fundamentals.", tags: ["HTML", "CSS", "JavaScript", "React"] },
  { emoji: "🧠", title: "Mind Training & NLP", slug: "mind-training-course", color: "#FF6B9D", desc: "Hypnotherapy, Quantum Physics, Law of Attraction, Memory Science. Master your mind.", tags: ["Hypnotherapy", "Quantum Physics", "NLP", "Memory Training"] },
];

const STATS = [
  { num: "1000+", label: "Students Mentored" },
  { num: "10+", label: "Courses" },
  { num: "USA", label: "Global Clients" },
  { num: "45+", label: "Deployments" },
];

// ── UPDATED: correct URLs + added Gaming, Animation Lab, Services ──────────────
const ECOSYSTEM = [
  { label: "Learning App",    url: "https://app.seekhowithrua.com",           icon: "🚀", desc: "Full LMS platform" },
  { label: "Gaming Lab",      url: "https://gaming.seekhowithrua.com",        icon: "🎮", desc: "3D battle & game engine" },
  { label: "Animation Lab",   url: "https://animationlab.seekhowithrua.com",  icon: "✨", desc: "Visual learning tools" },
  // ── ADDED: Voice Rooms ecosystem card ──
  { label: "Voice Rooms",     url: "/voice-rooms",                            icon: "🔴", desc: "Live talk · debate · hire" },
  { label: "Services",        url: "https://services.seekhowithrua.com",      icon: "🛠️", desc: "Hire our team" },
];

const TESTIMONIALS = [
  {
    name: "Kimberly Whatley",
    role: "Python & Data Science Student · USA",
    text: "How Sachin explains each part about Python and what to expect in the upcoming sessions — and how everything ties into each other. The do's and don'ts of the language. Above and beyond.",
    avatar: "KW",
    rating: 5,
    date: "Mar 8, 2026"
  },
  {
    name: "Didier Melata Fomekong",
    role: "Data Science Student · USA",
    text: "His teaching style made the lesson easy to follow and very engaging. The session was excellent overall. I liked the professor's clarity and the way he stayed patient and helpful throughout.",
    avatar: "DM",
    rating: 5,
    date: "Mar 6 & 19, 2026"
  },
  {
    name: "Michael Okoli",
    role: "Python Student · USA",
    text: "Trainer is above average expectation. He was able to explain better giving me time to do exercises on my own — helping me out. It was a more practical session allowing me to do it myself.",
    avatar: "MO",
    rating: 5,
    date: "Mar 14–22, 2026"
  },
  {
    name: "Mina Karmacharya",
    role: "Data Science Student · USA (6 sessions)",
    text: "He makes sure we are getting everything — even if he has to repeat, he does that. He covers all the queries and makes sure everyone understands. He is good with everything.",
    avatar: "MK",
    rating: 5,
    date: "Feb–Mar 2026"
  },
  {
    name: "Gene Pelts",
    role: "Python & Libraries Student · USA (4 sessions)",
    text: "Very Effective every session. Covered new Python libraries — Matplotlib, Seaborn. Consistently excellent across multiple classes.",
    avatar: "GP",
    rating: 5,
    date: "Mar 7–15, 2026"
  },
  {
    name: "Damola Alabi",
    role: "Data Science Student · USA",
    text: "The instructor explained what needs to be done clearly. No improvements needed. Very satisfied with the session.",
    avatar: "DA",
    rating: 5,
    date: "Mar 2, 2026"
  },
  {
    name: "Alex Lyssenko",
    role: "One-on-One Student · USA",
    text: "Another one on one class — so very interactive. Very Effective. No improvements needed at all.",
    avatar: "AL",
    rating: 5,
    date: "Feb 12, 2026"
  },
  {
    name: "John Paul Ngoran",
    role: "Data Science Student · USA (3 sessions)",
    text: "Great teacher. Explanation and asking if we have questions. Uses Excalidraw for demonstration. Always willing to go back and re-explain until everyone understands.",
    avatar: "JP",
    rating: 5,
    date: "Feb–Mar 2026"
  },
];
// ── NEW: RUA vision pillars ───────────────────────────────────────────────────
const VISION_PILLARS = [
  {
    icon: "🧠",
    color: "#00d4ff",
    title: "Memory Science",
    sub: "Not just learning — permanent encoding",
    body: "WMSC-level memory techniques. Students who couldn't recall 20 words were memorising 400 numbers in 21 days. The same tools memory trainers charge ₹1 lakh to teach — free here.",
  },
  {
    icon: "🎮",
    color: "#f59e0b",
    title: "Learn by Playing",
    sub: "HatimAI Game Mode · Battle Zone",
    body: "3D dungeon where real problems block your path. Multiplayer quiz battles where your score is your armor. When you're stuck in a game, your brain encodes the solution permanently.",
  },
  {
    icon: "🥋",
    color: "#a855f7",
    title: "Right Unique Allrounder",
    sub: "RUA = the human AI can't replace",
    body: "AI masters one skill. You master many. Kung Fu + Coding + Memory + Philosophy = irreplaceable. The Mr. Rua and Master Rua titles are earned — not given. No other platform rewards this.",
  },
  {
    icon: "🔴",
    color: "#1D9E75",
    title: "Live Voice Rooms",
    sub: "Learn · Debate · Get Hired",
    body: "WebRTC-powered free voice rooms. Learn from experts. Join philosophy debates. Companies post hiring rooms. 1,000 followers = monetisation unlocks. This is YouTube for knowledge.",
  },
];

// ── STUDENT FEEDBACK VIDEOS (real links from in-house training) ───────────────
const FEEDBACK_VIDEOS = [
  { title: "MIT College Student Feedback",  url: "https://www.youtube.com/embed/BZFBb3DBhLY", tag: "🎓 MIT, USA" },
  { title: "Student Experience Review",     url: "https://www.youtube.com/embed/51-wVCd7dfI", tag: "⭐ In-House Training" },
  { title: "Learning Journey Testimonial",  url: "https://www.youtube.com/embed/W43530w_3Mk", tag: "🚀 Ground Level Proof" },
  { title: "Course Impact Feedback",        url: "https://www.youtube.com/embed/9gb9qf5ouWA", tag: "💡 Real Result" },
];

// ── RUABOT — 8 instant presets + optional Groq API fallback ──────────────────
// Add NEXT_PUBLIC_GROQ_API_KEY to .env.local for live AI. Works without it too.
const GROQ_KEY = typeof process !== "undefined"
  ? (process.env?.NEXT_PUBLIC_GROQ_API_KEY ?? "")
  : "";

const PRESETS = [
  { q: "What is SeekhoWithRua?",         a: "SeekhoWithRua is India's first AI + Gamified + Memory-Science learning ecosystem — built by Master Rua (Sachin Kumar). It combines 3D visual courses, HatimAI battle-zone games, live voice rooms and memory science to produce Right Unique Allrounders — humans AI can never replace." },
  { q: "What courses are available?",    a: "8 free courses: AI & Machine Learning, Data Science, Full Stack Dev (React + Django), Mobile Apps (React Native + Expo), Game Development (Unity + Three.js), Python, IoT & Robotics, and Web Development. Start at seekhowithrua.com — no sign-up needed." },
  { q: "What is the UEEP Model?",        a: "UEEP = Understand → Execute → Explain → Practice. Every lesson builds visual understanding via 3D animations, then you build something, explain to others (Protégé Effect), and review with AI-spaced repetition. Backed by 13 peer-reviewed research papers." },
  { q: "What is the Master Rua title?",  a: "It's earned — not given. Learner Rua → Mr. Rua (tech + a physical or creative skill, 30-day challenge) → 👑 Master Rua (multi-domain mastery + community impact). Currently held by Sachin Kumar. You can start your journey at app.seekhowithrua.com." },
  { q: "Is it really free?",             a: "Yes — all 8 courses, the Memory Champion Arena and Gaming Lab are completely free. The full learning app at app.seekhowithrua.com is free to join. No credit card required. Premium features are coming soon." },
  { q: "Who is Master Rua?",             a: "Master Rua is Sachin Kumar — Full Stack Developer, AI/ML Trainer (USA clients at Xziant), Kung Fu practitioner, memory science expert and NLP practitioner. He trained 10–15 schools; students memorised 400 numbers in 21 days. He built this entire platform solo, while working full-time." },
  { q: "How do I reach Master Rua?",     a: "WhatsApp: 8826776018 · Email: seekhowithrua@gmail.com · YouTube: @seekhowithrua_ · Instagram: @seekhowithrua_. The fastest response is WhatsApp. Direct mentorship available." },
  { q: "What is the Gaming Lab?",        a: "gaming.seekhowithrua.com — a Three.js 3D character engine and the HatimAI Game Mode where real coding/ML problems block your path. Your quiz score = your armor in battle. Solve to progress. Multiplayer Free Fire-style battles and the Memory Champion Arena are coming next." },
];

// ── RUABOT COMPONENT ──────────────────────────────────────────────────────────
function RuaBot() {
  const [open, setOpen] = useState(false);
  const [msgs, setMsgs] = useState<{ role: "bot" | "user"; text: string }[]>([
    { role: "bot", text: "Namaste! 👋 I'm RuaBot — your guide to SeekhoWithRua. Pick a quick question below or type your own." },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPresets, setShowPresets] = useState(true);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => { endRef.current?.scrollIntoView({ behavior: "smooth" }); }, [msgs]);

  const send = async (text: string) => {
    if (!text.trim() || loading) return;
    setShowPresets(false);
    setMsgs(prev => [...prev, { role: "user", text }]);
    setInput("");
    setLoading(true);

    // Fuzzy preset match first — instant, no API needed
    const lower = text.toLowerCase();
    const hit = PRESETS.find(p =>
      lower.includes(p.q.toLowerCase().split(" ").slice(1, 3).join(" ")) ||
      p.q.toLowerCase().split(" ").some((w: string) => w.length > 4 && lower.includes(w))
    );
    if (hit) {
      setTimeout(() => {
        setMsgs(prev => [...prev, { role: "bot", text: hit.a }]);
        setLoading(false);
      }, 380);
      return;
    }

    // Groq API fallback — only if env var is set
    if (GROQ_KEY) {
      try {
        const res = await fetch("https://api.groq.com/openai/v1/chat/completions", {
          method: "POST",
          headers: { "Content-Type": "application/json", "Authorization": `Bearer ${GROQ_KEY}` },
          body: JSON.stringify({
            model: "llama-3.3-70b-versatile",
            max_tokens: 280,
            temperature: 0.7,
            messages: [
              { role: "system", content: "You are RuaBot, the friendly assistant for SeekhoWithRua — India's AI + gamified + memory-science EdTech platform by Sachin Kumar (Master Rua). Answer in 2-3 concise sentences. Be warm and helpful. If unrelated, politely redirect to seekhowithrua.com." },
              { role: "user", content: text },
            ],
          }),
        });
        const data = await res.json();
        const reply = data.choices?.[0]?.message?.content
          ?? "Try WhatsApp for a direct answer from Master Rua: 8826776018 🙏";
        setMsgs(prev => [...prev, { role: "bot", text: reply }]);
      } catch {
        setMsgs(prev => [...prev, { role: "bot", text: "Oops — something went wrong. Reach Master Rua on WhatsApp: 8826776018 🙏" }]);
      }
    } else {
      // No API key → graceful preset-style fallback
      setMsgs(prev => [...prev, { role: "bot", text: "Great question! Explore seekhowithrua.com for the full answer — or WhatsApp Master Rua directly: 8826776018. The fastest answers come from him directly 🙏" }]);
    }
    setLoading(false);
  };

  const onKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") send(input);
  };

  return (
    <>
      {/* ── Floating trigger ── */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          aria-label="Open RuaBot chat"
          style={{ position: "fixed", bottom: 24, right: 24, zIndex: 999, width: 58, height: 58, borderRadius: "50%", background: "linear-gradient(135deg,#7c3aed,#00d4ff)", border: "none", cursor: "pointer", fontSize: 26, display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 4px 24px rgba(124,58,237,0.55)", animation: "rbPulse 2.8s ease-in-out infinite" }}
        >🤖</button>
      )}

      {/* ── Chat window ── */}
      {open && (
        <div style={{ position: "fixed", bottom: 24, right: 24, zIndex: 1000, width: "min(360px,calc(100vw - 32px))", height: "min(530px,calc(100vh - 48px))", background: "#04040f", border: "1px solid rgba(124,58,237,0.3)", borderRadius: 20, display: "flex", flexDirection: "column", overflow: "hidden", boxShadow: "0 24px 64px rgba(0,0,0,0.75),0 0 32px rgba(124,58,237,0.12)", animation: "rbOpen 0.3s cubic-bezier(0.34,1.56,0.64,1)" }}>

          {/* Header */}
          <div style={{ padding: "13px 16px", background: "linear-gradient(135deg,rgba(124,58,237,0.22),rgba(0,212,255,0.08))", borderBottom: "1px solid rgba(124,58,237,0.18)", display: "flex", alignItems: "center", justifyContent: "space-between", flexShrink: 0 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div style={{ width: 38, height: 38, borderRadius: "50%", background: "linear-gradient(135deg,#7c3aed,#00d4ff)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20 }}>🤖</div>
              <div>
                <div style={{ fontSize: 13, fontWeight: 700, color: "#fff", letterSpacing: 0.3 }}>RuaBot</div>
                <div style={{ display: "flex", alignItems: "center", gap: 5, marginTop: 2 }}>
                  <div style={{ width: 6, height: 6, borderRadius: "50%", background: loading ? "#f59e0b" : "#22c55e" }} />
                  <span style={{ fontSize: 9, color: loading ? "#f59e0b" : "#22c55e", letterSpacing: 0.5 }}>
                    {loading ? "Thinking…" : "Online · SeekhoWithRua Guide"}
                  </span>
                </div>
              </div>
            </div>
            <button onClick={() => setOpen(false)} style={{ width: 28, height: 28, borderRadius: "50%", border: "1px solid rgba(255,255,255,0.12)", background: "rgba(255,255,255,0.04)", cursor: "pointer", color: "#6b7280", fontSize: 14, display: "flex", alignItems: "center", justifyContent: "center" }}>✕</button>
          </div>

          {/* Messages */}
          <div style={{ flex: 1, overflowY: "auto", padding: "14px 12px", display: "flex", flexDirection: "column", gap: 10, scrollbarWidth: "thin", scrollbarColor: "#1a1a2e transparent" }}>
            {msgs.map((m, i) => (
              <div key={i} style={{ display: "flex", justifyContent: m.role === "user" ? "flex-end" : "flex-start", animation: "rbFade 0.25s ease" }}>
                <div style={{ maxWidth: "84%", padding: "10px 14px", borderRadius: m.role === "user" ? "16px 16px 4px 16px" : "16px 16px 16px 4px", background: m.role === "user" ? "linear-gradient(135deg,#4c1d95,#0c4a6e)" : "rgba(15,15,35,0.95)", border: `1px solid ${m.role === "user" ? "rgba(124,58,237,0.28)" : "rgba(255,255,255,0.06)"}`, color: m.role === "user" ? "#e0e7ff" : "#e2e8f0", fontSize: 13, lineHeight: 1.75 }}>
                  {m.text}
                </div>
              </div>
            ))}
            {loading && (
              <div style={{ display: "flex" }}>
                <div style={{ padding: "10px 16px", borderRadius: "16px 16px 16px 4px", background: "rgba(15,15,35,0.95)", border: "1px solid rgba(255,255,255,0.06)", display: "flex", gap: 5, alignItems: "center" }}>
                  {[0,1,2].map(i => <div key={i} style={{ width: 6, height: 6, borderRadius: "50%", background: "#7c3aed", animation: `rbDot 1.2s ${i*0.2}s infinite` }} />)}
                </div>
              </div>
            )}
            {showPresets && (
              <div style={{ display: "flex", flexDirection: "column", gap: 6, marginTop: 6 }}>
                <div style={{ fontSize: 9, color: "rgba(255,255,255,0.22)", letterSpacing: 2, paddingLeft: 2 }}>QUICK QUESTIONS</div>
                {PRESETS.map((p, i) => (
                  <button key={i} onClick={() => send(p.q)}
                    style={{ padding: "8px 13px", background: "rgba(124,58,237,0.07)", border: "1px solid rgba(124,58,237,0.18)", borderRadius: 10, color: "rgba(255,255,255,0.6)", fontSize: 12, cursor: "pointer", textAlign: "left", fontFamily: "inherit", transition: "all 0.15s" }}
                    onMouseEnter={e => { const el = e.currentTarget; el.style.background = "rgba(124,58,237,0.18)"; el.style.color = "#fff"; }}
                    onMouseLeave={e => { const el = e.currentTarget; el.style.background = "rgba(124,58,237,0.07)"; el.style.color = "rgba(255,255,255,0.6)"; }}
                  >{p.q}</button>
                ))}
              </div>
            )}
            <div ref={endRef} />
          </div>

          {/* Input bar */}
          <div style={{ padding: "10px 12px 14px", borderTop: "1px solid rgba(124,58,237,0.12)", flexShrink: 0, display: "flex", gap: 8, background: "rgba(4,4,15,0.9)" }}>
            <input
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={onKey}
              placeholder="Type your question…"
              style={{ flex: 1, padding: "10px 14px", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(124,58,237,0.22)", borderRadius: 10, color: "#e2e8f0", fontSize: 13, fontFamily: "inherit", outline: "none" }}
            />
            <button
              onClick={() => send(input)}
              disabled={loading || !input.trim()}
              style={{ width: 40, height: 40, borderRadius: "50%", border: "none", background: input.trim() ? "linear-gradient(135deg,#7c3aed,#00d4ff)" : "rgba(255,255,255,0.05)", cursor: input.trim() ? "pointer" : "not-allowed", color: "#fff", fontSize: 17, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, transition: "all 0.2s" }}
            >→</button>
          </div>
        </div>
      )}

      <style>{`
        @keyframes rbPulse { 0%,100%{box-shadow:0 4px 24px rgba(124,58,237,0.55)} 50%{box-shadow:0 4px 40px rgba(124,58,237,0.85),0 0 60px rgba(0,212,255,0.2)} }
        @keyframes rbOpen  { from{opacity:0;transform:scale(0.88) translateY(18px)} to{opacity:1;transform:scale(1) translateY(0)} }
        @keyframes rbDot   { 0%,80%,100%{transform:scale(0.6);opacity:0.3} 40%{transform:scale(1);opacity:1} }
        @keyframes rbFade  { from{opacity:0;transform:translateY(6px)} to{opacity:1;transform:translateY(0)} }
      `}</style>
    </>
  );
}

// ─── MAIN PAGE ────────────────────────────────────────────────────────────────
export default function HomePage() {
  const [user, setUser] = useState<User | null>(null);
  const [hoveredCourse, setHoveredCourse] = useState<string | null>(null);

  useEffect(() => {
    try {
      const raw = localStorage.getItem("cosmos_user");
      if (raw) setUser(JSON.parse(raw));
    } catch { }
  }, []);

  // Countdown timer for internship section
  useEffect(() => {
    const storageKey = 'home_timer_end';
    let endTime = localStorage.getItem(storageKey);
    if (!endTime) {
      endTime = String(Date.now() + 24 * 60 * 60 * 1000);
      localStorage.setItem(storageKey, endTime);
    }
    const end = parseInt(endTime);

    const pad = (n: number) => String(n).padStart(2, '0');
    
    const updateTimer = () => {
      const now = Date.now();
      const diff = Math.max(0, end - now);
      const h = Math.floor(diff / 3600000);
      const m = Math.floor((diff % 3600000) / 60000);
      const s = Math.floor((diff % 60000) / 1000);
      
      const hoursEl = document.getElementById('home-timer-hours');
      const minsEl = document.getElementById('home-timer-mins');
      const secsEl = document.getElementById('home-timer-secs');
      
      if (hoursEl) hoursEl.textContent = pad(h);
      if (minsEl) minsEl.textContent = pad(m);
      if (secsEl) secsEl.textContent = pad(s);
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  const userName = user?.profile?.name || user?.name || user?.email?.split("@")[0] || "";

  return (
    <>
      {/* ── SEO SCHEMA ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EducationalOrganization",
            name: "Seekho With Rua",
            alternateName: ["SeekhowithRua", "Seekhow Rua", "Master Rua"],
            description: "India's most innovative EdTech platform. Master Game Dev, AI/ML, Mobile, Web, Python and more with Sachin Kumar (Master Rua).",
            url: "https://seekhowithrua.com",
            founder: { "@type": "Person", name: "Sachin Kumar", jobTitle: "AI/ML Trainer & Full Stack Developer" },
            offers: COURSES.map(c => ({ "@type": "Course", name: c.title, url: `https://seekhowithrua.com/${c.slug}` })),
          }),
        }}
      />

      <div className="hp">
        <ThreeBackground />

        {/* ── HERO ── */}
        <section className="hero" aria-label="Hero section">
          <div className="hero-inner">
            <div className="hero-left">
              {user && (
                <div className="hero-welcome">
                  👋 Welcome back, <strong>{userName}</strong>
                </div>
              )}
              <div className="hero-eyebrow">
                <span className="eyebrow-line" />
                INDIA'S FUTURE-READY EDTECH
              </div>
              <h1 className="hero-h1">
                Learn.<br />
                <span className="hero-accent">Build.</span><br />
                <span className="hero-accent2">Master.</span>
              </h1>
              <p className="hero-desc">
                Sachin Kumar (Master Rua) teaches AI, Data Science, Game Dev, Mobile Apps, Full Stack and more using the <strong>UEEP Learning Model</strong> — trusted by 1000+ students across India and USA.
              </p>
              <div className="hero-btns">
                <Link href="https://app.seekhowithrua.com" className="btn-primary">
                  🚀 Launch Learning App
                </Link>
                {/* ── ADDED: Voice Rooms hero CTA ── */}
                <Link href="/voice-rooms" className="btn-vcr">
                  🔴 Join a Live Room
                </Link>
                {!user ? (
                  <Link href="/signup" className="btn-outline">
                    Sign Up Free →
                  </Link>
                ) : (
                  <Link href="/data-science-course" className="btn-outline">
                    Continue Learning →
                  </Link>
                )}
              </div>
              
              {/* Stats */}
              <div className="hero-stats">
                {STATS.map((s) => (
                  <div key={s.label} className="hstat">
                    <div className="hstat-num">{s.num}</div>
                    <div className="hstat-label">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — Master Rua card */}
            <div className="hero-right">
              <div className="master-card">
                <div className="master-avatar">
                  {/* Aura layers — 3 rings + spinning border */}
                  <div className="aura-ring aura-r3" />
                  <div className="aura-ring aura-r2" />
                  <div className="avatar-ring" />
                  {/* Real photo — place master-rua.jpg in /public/ */}
                  <div className="avatar-inner">
                    <img
                      src="/master-rua.jpeg"
                      alt="Sachin Kumar — Master Rua"
                      className="avatar-photo"
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).style.display = "none";
                        const fb = e.currentTarget.nextElementSibling as HTMLElement;
                        if (fb) fb.style.display = "flex";
                      }}
                    />
                    <span className="avatar-fallback">MR</span>
                  </div>
                  <div className="avatar-badge">🟢 LIVE</div>
                </div>
                <h2 className="master-name">Sachin Kumar</h2>
                <p className="master-title">Master Rua</p>
                <p className="master-vision">
                  "To change the education system by applying the UEEP Model"
                </p>
                <div className="master-tags">
                  {["AI/ML Trainer", "Memory Expert", "Full Stack Dev", "USA Clients"].map(t => (
                    <span key={t} className="master-tag">{t}</span>
                  ))}
                </div>
                <Link href="https://app.seekhowithrua.com" className="master-cta">
                  Start Learning →
                </Link>
                {/* Floating badges */}
                <div className="float-badge fb1">🏆 UEEP Model</div>
                <div className="float-badge fb2">🎓 1000+ Students</div>
              </div>
            </div>
          </div>
        </section>

        {/* ── NEW: VISION SECTION ─────────────────────────────────────────── */}
        <section className="section vision-section" aria-label="Vision">
          <div className="section-inner">
            <div className="section-tag">WHY SEEKHOWITHRUA IS DIFFERENT</div>
            <h2 className="section-title">
              Not just EdTech. A <span className="accent-purple">Movement.</span>
            </h2>
            <p className="section-desc">
              AI can master one skill. We build humans who can't be replaced — Right Unique Allrounders who combine tech, memory science, physical discipline and creative thinking.
              <br /><br />
              <em style={{ color: "rgba(0,212,255,0.7)", fontStyle: "italic" }}>
                "Be a Rider, Not a Runner." — Master Rua
              </em>
            </p>
            <div className="vision-grid">
              {VISION_PILLARS.map((p) => (
                <div key={p.title} className="vision-card" style={{ "--vc": p.color } as any}>
                  <div className="vc-icon-wrap" style={{ background: p.color + "14", border: `1px solid ${p.color}30` }}>
                    <span className="vc-icon">{p.icon}</span>
                  </div>
                  <div className="vc-content">
                    <div className="vc-title">{p.title}</div>
                    <div className="vc-sub" style={{ color: p.color }}>{p.sub}</div>
                    {/* ── ADDED: Voice Rooms pillar links to /voice-rooms ── */}
                    {p.title === "Live Voice Rooms"
                      ? <Link href="/voice-rooms" className="vc-body vc-body-link">{p.body} &nbsp;→ Explore rooms</Link>
                      : <p className="vc-body">{p.body}</p>
                    }
                  </div>
                </div>
              ))}
            </div>
            {/* UEEP bar */}
            <div className="ueep-bar">
              {["Understand", "Execute", "Explain", "Practice"].map((step, i) => (
                <div key={step} className="ueep-step">
                  <div className="ueep-num">{String(i + 1).padStart(2, "0")}</div>
                  <div className="ueep-label">{step}</div>
                  {i < 3 && <div className="ueep-connector" />}
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* ── END VISION SECTION ──────────────────────────────────────────── */}

        {/* ── INTERNSHIP & PLACEMENT PROGRAM ──────────────────────────────── */}
        <section className="section internship-section" aria-label="Internship Program" style={{ background: "linear-gradient(135deg, rgba(255,87,34,0.08) 0%, rgba(0,200,83,0.05) 100%)", borderTop: "2px solid rgba(255,87,34,0.3)", borderBottom: "2px solid rgba(255,87,34,0.3)" }}>
          <div className="section-inner" style={{ textAlign: "center" }}>
            <div className="section-tag" style={{ color: "#FF5722" }}>🔥 LIMITED TIME OFFER</div>
            <h2 className="section-title" style={{ fontSize: "clamp(28px, 4vw, 48px)", marginBottom: "8px" }}>
              6-Month <span style={{ color: "#FF5722" }}>Internship Program</span>
            </h2>
            <p className="section-desc" style={{ maxWidth: "700px", margin: "0 auto 32px", fontSize: "15px" }}>
              100% Job Ready • Resume Building • Placement Support • USA Client Referrals<br />
              AI + Full Stack + Data Science + Mobile + IoT + Game Dev — <strong>All 6 Tracks</strong>
            </p>

            {/* Countdown Timer */}
            <div style={{ 
              display: "inline-flex", 
              gap: "16px", 
              marginBottom: "32px",
              padding: "24px 40px",
              background: "rgba(0,0,0,0.3)",
              borderRadius: "16px",
              border: "1px solid rgba(255,87,34,0.3)"
            }}>
              {['hours', 'mins', 'secs'].map((unit, i) => (
                <div key={unit} style={{ textAlign: "center" }}>
                  <div id={`home-timer-${unit}`} style={{ 
                    fontFamily: "'Rajdhani', sans-serif",
                    fontSize: "clamp(36px, 5vw, 56px)",
                    fontWeight: 800,
                    color: "#fff",
                    background: "#2A2A2A",
                    borderRadius: "10px",
                    padding: "10px 20px",
                    minWidth: "80px",
                    border: "1px solid #333"
                  }}>{unit === 'hours' ? '23' : unit === 'mins' ? '59' : '47'}</div>
                  <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.5)", textTransform: "uppercase", letterSpacing: "2px", marginTop: "8px" }}>{unit}</div>
                </div>
              )).reduce((acc, el, i) => i < 2 ? [...acc, el, <div key={`sep-${i}`} style={{ fontSize: "40px", color: "#FF5722", fontWeight: 800, alignSelf: "center" }}>:</div>] : [...acc, el], [] as any)}
            </div>

            {/* Price */}
            <div style={{ marginBottom: "28px" }}>
              <div style={{ fontSize: "16px", color: "rgba(255,255,255,0.5)", textDecoration: "line-through", marginBottom: "4px" }}>₹24,999</div>
              <div style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: "clamp(48px, 6vw, 72px)", fontWeight: 800, color: "#00C853", lineHeight: 1 }}>₹8,999</div>
              <div style={{ fontSize: "13px", color: "rgba(255,255,255,0.6)", marginTop: "8px" }}>First 20 Students Only • Regular Price ₹14,999</div>
            </div>

            {/* Features */}
            <div style={{ 
              display: "flex", 
              flexWrap: "wrap", 
              gap: "12px", 
              justifyContent: "center", 
              marginBottom: "32px" 
            }}>
              {[
                "✓ 6-Month Guided Internship",
                "✓ Official Certificate",
                "✓ LinkedIn Endorsement",
                "✓ Resume Building Support",
                "✓ India + USA Job Referrals",
                "✓ 100% Job Ready Guarantee"
              ].map((feature) => (
                <div key={feature} style={{ 
                  padding: "8px 16px", 
                  background: "rgba(0,200,83,0.1)", 
                  border: "1px solid rgba(0,200,83,0.3)",
                  borderRadius: "20px",
                  fontSize: "12px",
                  color: "#00C853",
                  fontFamily: "'JetBrains Mono', monospace"
                }}>{feature}</div>
              ))}
            </div>

            {/* CTA Button */}
            <a 
              href="https://seekhowithrua.com/funnel.html" 
              className="btn-primary" 
              style={{ 
                fontSize: "18px", 
                padding: "18px 48px",
                background: "linear-gradient(135deg, #FF5722, #FF8A65)",
                boxShadow: "0 8px 32px rgba(255,87,34,0.4)"
              }}
            >
              🔥 Enroll Now — ₹8,999
            </a>
            <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.4)", marginTop: "16px" }}>
              Secure payment via Razorpay • UPI/Card/NetBanking • Instant enrollment
            </p>
          </div>
        </section>

        {/* ── MIND TRAINING HACKATHON ── */}
        <section className="section" aria-label="Mind Training Program" style={{ background: "linear-gradient(135deg, rgba(255,107,157,0.08) 0%, rgba(139,92,246,0.05) 100%)", borderTop: "2px solid rgba(255,107,157,0.3)", borderBottom: "2px solid rgba(139,92,246,0.3)" }}>
          <div className="section-inner" style={{ textAlign: "center" }}>
            <div className="section-tag" style={{ color: "#FF6B9D" }}>🧠 MEMORY SCIENCE HACKATHON</div>
            <h2 className="section-title" style={{ fontSize: "clamp(28px, 4vw, 48px)", marginBottom: "8px" }}>
              21-Day <span style={{ color: "#FF6B9D" }}>Mind Mastery</span> Challenge
            </h2>
            <p className="section-desc" style={{ maxWidth: "700px", margin: "0 auto 32px", fontSize: "15px" }}>
              Join 100+ participants for a revolutionary memory transformation program.<br />
              From struggling to remember 20 words → memorizing 200 numbers, 200 words & images in sequence.
            </p>

            {/* Hackathon Features */}
            <div style={{ 
              display: "flex", 
              flexWrap: "wrap", 
              gap: "12px", 
              justifyContent: "center", 
              marginBottom: "32px" 
            }}>
              {[
                "✓ Hypnotherapy for Deep Healing",
                "✓ Law of Attraction Mastery", 
                "✓ Quantum Physics & Placebo Effect",
                "✓ WMSC Memory Championship Techniques",
                "✓ NLP & Subconscious Programming",
                "✓ Baseline Test Day 1 vs Day 21"
              ].map((feature) => (
                <div key={feature} style={{ 
                  padding: "8px 16px", 
                  background: "rgba(255,107,157,0.1)", 
                  border: "1px solid rgba(255,107,157,0.3)",
                  borderRadius: "20px",
                  fontSize: "12px",
                  color: "#FF6B9D",
                  fontFamily: "'JetBrains Mono', monospace"
                }}>{feature}</div>
              ))}
            </div>

            {/* Price */}
            <div style={{ marginBottom: "28px" }}>
              <div style={{ fontSize: "16px", color: "rgba(255,255,255,0.5)", textDecoration: "line-through", marginBottom: "4px" }}>₹4,999</div>
              <div style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: "clamp(48px, 6vw, 72px)", fontWeight: 800, color: "#FF6B9D", lineHeight: 1 }}>₹49</div>
              <div style={{ fontSize: "13px", color: "rgba(255,255,255,0.6)", marginTop: "8px" }}>21-Day Program • 100+ Participants Needed • Survey-Based Entry</div>
            </div>

            {/* What You'll Achieve */}
            <div style={{ 
              background: "rgba(10,10,30,0.6)", 
              borderRadius: "16px", 
              padding: "24px", 
              maxWidth: "800px", 
              margin: "0 auto 32px",
              border: "1px solid rgba(255,107,157,0.2)"
            }}>
              <h3 style={{ color: "#fff", fontSize: "18px", marginBottom: "16px", fontFamily: "'Rajdhani', sans-serif" }}>
                🎯 Day 1 vs Day 21 Transformation
              </h3>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", textAlign: "left" }}>
                <div style={{ padding: "16px", background: "rgba(255,255,255,0.03)", borderRadius: "12px" }}>
                  <div style={{ color: "#FF6B9D", fontSize: "14px", fontWeight: 700, marginBottom: "8px" }}>📊 Day 1: Baseline Test</div>
                  <ul style={{ color: "rgba(255,255,255,0.5)", fontSize: "12px", lineHeight: "1.8", paddingLeft: "16px", margin: 0 }}>
                    <li>Record current memory capacity</li>
                    <li>How many numbers can you remember?</li>
                    <li>How many words in sequence?</li>
                    <li>Memory test officially recorded</li>
                  </ul>
                </div>
                <div style={{ padding: "16px", background: "rgba(255,107,157,0.08)", borderRadius: "12px", border: "1px solid rgba(255,107,157,0.2)" }}>
                  <div style={{ color: "#FF6B9D", fontSize: "14px", fontWeight: 700, marginBottom: "8px" }}>🏆 Day 21: Mastery</div>
                  <ul style={{ color: "rgba(255,255,255,0.7)", fontSize: "12px", lineHeight: "1.8", paddingLeft: "16px", margin: 0 }}>
                    <li>Memorize 200 numbers in sequence</li>
                    <li>Memorize 200 words with ease</li>
                    <li>Recall images in perfect order</li>
                    <li>Memory champion techniques mastered</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <a 
              href="https://seekhowithrua.com/funnel.html" 
              className="btn-primary" 
              style={{ 
                fontSize: "18px", 
                padding: "18px 48px",
                background: "linear-gradient(135deg, #FF6B9D, #8B5CF6)",
                boxShadow: "0 8px 32px rgba(255,107,157,0.4)"
              }}
            >
              🧠 Join Hackathon — ₹49 Only
            </a>
            <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.4)", marginTop: "16px" }}>
              Includes: Hypnotherapy Sessions • Quantum Physics Training • Law of Attraction • Full Scripture Discourse • Memory Science
            </p>
          </div>
        </section>

        {/* ── COURSES ── */}
        <section className="section" aria-label="Courses">
          <div className="section-inner">
            <div className="section-tag">WHAT YOU'LL MASTER</div>
            <h2 className="section-title">
              Courses Built for the <span className="accent-purple">Real World</span>
            </h2>
            <p className="section-desc">
              Every course is practical, project-based and taught with the UEEP model — Understand, Execute, Explain, Practice.
            </p>
            <div className="courses-grid">
              {COURSES.map((c) => (
                <Link
                  key={c.slug}
                  href={`/${c.slug}`}
                  className="course-card"
                  style={{ "--cc": c.color } as any}
                  onMouseEnter={() => setHoveredCourse(c.slug)}
                  onMouseLeave={() => setHoveredCourse(null)}
                  aria-label={`${c.title} course`}
                >
                  <div className="cc-top">
                    <span className="cc-emoji">{c.emoji}</span>
                    <div className="cc-color-dot" style={{ background: c.color }} />
                  </div>
                  <h3 className="cc-title">{c.title}</h3>
                  <p className="cc-desc">{c.desc}</p>
                  <div className="cc-tags">
                    {c.tags.map(t => (
                      <span key={t} className="cc-tag" style={{ borderColor: c.color + "40", color: c.color }}>{t}</span>
                    ))}
                  </div>
                  <div className="cc-arrow" style={{ color: c.color }}>Explore Course →</div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── ECOSYSTEM ── */}
        <section className="section eco-section" aria-label="Ecosystem">
          <div className="section-inner">
            <div className="section-tag">THE ECOSYSTEM</div>
            <h2 className="section-title">
              More than just <span className="accent-green">Courses</span>
            </h2>
            <div className="eco-grid">
              {ECOSYSTEM.map((e) => (
                e.url.startsWith("/") ? (
                  <Link key={e.label} href={e.url} className="eco-card">
                    <span className="eco-icon">{e.icon}</span>
                    <div className="eco-label">{e.label}</div>
                    <div className="eco-desc">{e.desc}</div>
                    <div className="eco-arrow">→</div>
                  </Link>
                ) : (
                  <a key={e.label} href={e.url} target="_blank" rel="noopener noreferrer" className="eco-card">
                    <span className="eco-icon">{e.icon}</span>
                    <div className="eco-label">{e.label}</div>
                    <div className="eco-desc">{e.desc}</div>
                    <div className="eco-arrow">↗</div>
                  </a>
                )
              ))}
            </div>
          </div>
        </section>

        {/* ── TESTIMONIALS ── */}
        <section className="section" aria-label="Testimonials">
          <div className="section-inner">
            <div className="section-tag">VERIFIED US CLIENT FEEDBACK · XZIANT COMMUNICATION</div>
            <h2 className="section-title">
              Real Feedback from <span className="accent-purple">Real US Students</span>
            </h2>
            <p className="section-desc">
              45+ verified responses from US-based professionals trained at Xziant Communication. Raw Google Form data — timestamps, names, dates. No fake quotes.
            </p>

            {/* Proof bar */}
            <div style={{ display:"flex", gap:12, flexWrap:"wrap", marginBottom:36 }}>
              <div style={{ padding:"8px 16px", borderRadius:20, background:"rgba(29,158,117,0.1)", border:"1px solid rgba(29,158,117,0.3)", color:"#1D9E75", fontFamily:"'JetBrains Mono',monospace", fontSize:11 }}>
                ✅ 45+ US Professionals
              </div>
              <div style={{ padding:"8px 16px", borderRadius:20, background:"rgba(29,158,117,0.1)", border:"1px solid rgba(29,158,117,0.3)", color:"#1D9E75", fontFamily:"'JetBrains Mono',monospace", fontSize:11 }}>
                ✅ Feb–Mar 2026 · Verified Timestamps
              </div>
              <div style={{ padding:"8px 16px", borderRadius:20, background:"rgba(29,158,117,0.1)", border:"1px solid rgba(29,158,117,0.3)", color:"#1D9E75", fontFamily:"'JetBrains Mono',monospace", fontSize:11 }}>
                ✅ Xziant Communication · Live Sessions
              </div>
              <a
                href="/Sachin_Feedback_USA_Clients.pdf"
                download
                style={{ padding:"8px 16px", borderRadius:20, background:"rgba(124,58,237,0.1)", border:"1px solid rgba(124,58,237,0.35)", color:"#a78bfa", fontFamily:"'JetBrains Mono',monospace", fontSize:11, textDecoration:"none", display:"inline-flex", alignItems:"center", gap:6 }}
              >
                ⬇ Download Full Feedback Report (PDF)
              </a>
            </div>

            <div className="testi-grid">
              {TESTIMONIALS.map((t) => (
                <div key={t.name} className="testi-card">
                  <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:12 }}>
                    <div style={{ color:"#f59e0b", fontSize:13, letterSpacing:1 }}>
                      {"★".repeat(t.rating)}{"☆".repeat(5 - t.rating)}
                    </div>
                    <div style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:9, background:"rgba(29,158,117,0.08)", border:"1px solid rgba(29,158,117,0.2)", borderRadius:10, padding:"2px 8px", color:"#1D9E75" }}>
                      ✓ VERIFIED
                    </div>
                  </div>
                  <p className="testi-text">"{t.text}"</p>
                  <div className="testi-author">
                    <div className="testi-avatar">{t.avatar}</div>
                    <div>
                      <div className="testi-name">{t.name}</div>
                      <div className="testi-role">{t.role}</div>
                      <div style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:9, color:"rgba(255,255,255,0.25)", marginTop:2 }}>{t.date}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── STUDENT FEEDBACK VIDEOS ── */}
        <section className="section" aria-label="Student Feedback">
          <div className="section-inner">
            <div className="section-tag">IN-HOUSE TRAINING · GROUND PROOF</div>
            <h2 className="section-title">
              Real Feedback from <span className="accent-purple">Real Sessions</span>
            </h2>
            <p className="section-desc" style={{ marginBottom: 32 }}>
              Not testimonial screenshots — actual video feedback from students who were trained on the ground, including an MIT student from the USA.
            </p>
            <div className="feedback-grid">
              {FEEDBACK_VIDEOS.map((v) => (
                <div key={v.url} className="feedback-card">
                  <div className="feedback-tag">{v.tag}</div>
                  <div className="feedback-iframe-wrap">
                    <iframe
                      src={v.url}
                      title={v.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      loading="lazy"
                      style={{ width: "100%", height: "100%", borderRadius: 8 }}
                    />
                  </div>
                  <div className="feedback-title">{v.title}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* ── RESUME + PROFILE LINKS SECTION ── */}
        <section className="section resume-section" aria-label="Resume and Profiles">
                <div className="section-inner">
                  <div className="section-tag">VERIFY CREDENTIALS</div>
                  <h2 className="section-title">
                    Work with <span className="accent-purple">Master Rua</span> — Sachin Kumar
                  </h2>
                  <p className="section-desc">
                    Full-Stack AI/ML Engineer · Data Scientist · Trainer for US professionals at Xziant Communication. 4+ years experience. 45+ client testimonials.
                  </p>

                  {/* Profile links */}
                  <div className="profile-links">
                    <a href="https://linkedin.com/in/sachin-kumar-2b92a8347" target="_blank" rel="noopener noreferrer" className="profile-btn linkedin">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                      LinkedIn Profile →
                    </a>
                    <a href="https://github.com/SachinKumarRua2023" target="_blank" rel="noopener noreferrer" className="profile-btn github">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
                      GitHub Projects →
                    </a>
                    <a href="https://wa.me/918826776018" target="_blank" rel="noopener noreferrer" className="profile-btn whatsapp">
                      💬 WhatsApp — Hire Me
                    </a>
                  </div>

                  {/* Resume download cards */}
                  <div className="resume-grid">
                    <div className="resume-card">
                      <div className="resume-icon">📄</div>
                      <div className="resume-info">
                        <div className="resume-title">Resume 2026 — Full Version</div>
                        <div className="resume-sub">Full-Stack AI/ML · Data Scientist · GenAI</div>
                        <div className="resume-meta">Sachin Kumar · Noida, India · seekhowithrua.com</div>
                      </div>
                      <a href="/Sachin_Kumar_2026.docx" download className="resume-dl">⬇ Download</a>
                    </div>
                    <div className="resume-card">
                      <div className="resume-icon">📋</div>
                      <div className="resume-info">
                        <div className="resume-title">One-Page Resume — FAANG Ready</div>
                        <div className="resume-sub">Condensed · ATS Optimized · 2026</div>
                        <div className="resume-meta">Python · React · Django · LLMs · PySpark</div>
                      </div>
                      <a href="/Sachin_Kumar_OnePage_Resume.docx" download className="resume-dl">⬇ Download</a>
                    </div>
                  </div>
                </div>
        </section>

        {/* ── BLOG PREVIEW ── */}
        <section className="section" aria-label="Blog">
          <div className="section-inner">
            <div className="section-tag">LATEST INSIGHTS</div>
            <h2 className="section-title">
              From the <span className="accent-green">Blog</span>
            </h2>
            <div className="blog-grid">
              {[
                { tag: "AI/ML", title: "How to Learn Machine Learning in India 2025", date: "Mar 2025" },
                { tag: "Game Dev", title: "Unity vs Three.js: Which to Learn First?", date: "Feb 2025" },
                { tag: "Career", title: "How to Get a ₹20L Tech Job from Tier-2 Cities", date: "Jan 2025" },
              ].map((b) => (
                <Link key={b.title} href="/blog" className="blog-card">
                  <div className="blog-tag">{b.tag}</div>
                  <h3 className="blog-title">{b.title}</h3>
                  <div className="blog-date">{b.date}</div>
                  <div className="blog-arrow">Read More →</div>
                </Link>
              ))}
            </div>
            <div style={{ textAlign: "center", marginTop: "32px" }}>
              <Link href="/blog" className="btn-outline">View All Posts →</Link>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="cta-section" aria-label="Call to action">
          <div className="cta-inner">
            <h2 className="cta-title">
              Ready to <span className="accent-purple">Transform</span> Your Career?
            </h2>
            <p className="cta-desc">
              Join 1000+ students learning AI, Game Dev, Mobile and Full Stack with Master Rua.
            </p>
            <div className="hero-btns" style={{ justifyContent: "center" }}>
              <Link href="https://app.seekhowithrua.com" className="btn-primary">
                🚀 Start Learning Free
              </Link>
              {/* ── ADDED: Voice Rooms CTA in bottom section ── */}
              <Link href="/voice-rooms" className="btn-vcr">
                🔴 Join a Live Room
              </Link>
              <Link href="/signup" className="btn-outline">Create Account →</Link>
            </div>
          </div>
        </section>

        {/* ── RUABOT ── */}
        <RuaBot />

        {/* ── SEO HIDDEN CONTENT ── */}
        <div aria-hidden="true" style={{ position: "absolute", left: "-9999px", fontSize: "1px" }}>
          <h1>SeekhowithRua — Best EdTech Platform India 2025</h1>
          <p>Learn Data Science, AI, Machine Learning, Full Stack Web Development, Mobile App Development with React Native, Game Development with Unity and Three.js, Python Programming, IoT and Robotics in India. Taught by Sachin Kumar (Master Rua) using the UEEP learning model.</p>
          {COURSES.map(c => <p key={c.slug}>{c.title}: {c.tags.join(", ")}</p>)}
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@400;500;600;700&family=Exo+2:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .hp {
          font-family: 'Exo 2', system-ui, sans-serif;
          background: #04040f;
          color: #e2e8f0;
          min-height: 100vh;
          position: relative;
          overflow-x: hidden;
        }

        /* ── HERO ── */
        .hero {
          position: relative; z-index: 1;
          min-height: 100vh;
          display: flex; align-items: center;
          padding: 100px 40px 60px;
          background: radial-gradient(ellipse at 70% 50%, rgba(124,58,237,0.08) 0%, transparent 60%);
        }
        .hero-inner {
          max-width: 1200px; margin: 0 auto; width: 100%;
          display: grid; grid-template-columns: 1fr 1fr;
          gap: 60px; align-items: center;
        }
        .hero-welcome {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 8px 16px; border-radius: 20px;
          background: rgba(0,212,255,0.08);
          border: 1px solid rgba(0,212,255,0.25);
          color: #00d4ff; font-size: 13px; margin-bottom: 20px;
        }
        .hero-eyebrow {
          display: flex; align-items: center; gap: 10px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 10px; letter-spacing: 4px; color: #1D9E75;
          margin-bottom: 20px;
        }
        .eyebrow-line { display: block; width: 30px; height: 1px; background: #1D9E75; }
        .hero-h1 {
          font-family: 'Rajdhani', sans-serif;
          font-size: clamp(48px, 6vw, 80px);
          font-weight: 700; line-height: 1.0;
          color: #fff; margin-bottom: 20px;
        }
        .hero-accent { color: #7c3aed; }
        .hero-accent2 { color: #00d4ff; }
        .hero-desc {
          font-family: 'JetBrains Mono', monospace;
          font-size: 12px; color: rgba(255,255,255,0.5);
          line-height: 2; margin-bottom: 32px; max-width: 460px;
        }
        .hero-desc strong { color: #00d4ff; }

        /* ── BUTTONS ── */
        .hero-btns { display: flex; gap: 12px; flex-wrap: wrap; margin-bottom: 48px; }
        .btn-primary {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 14px 28px; border-radius: 8px;
          background: linear-gradient(135deg, #7c3aed, #00d4ff);
          color: #fff; font-family: 'Rajdhani', sans-serif;
          font-size: 14px; font-weight: 700; letter-spacing: 0.5px;
          text-decoration: none; transition: all 0.2s;
          box-shadow: 0 0 24px rgba(124,58,237,0.3);
        }
        .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 8px 32px rgba(124,58,237,0.5); opacity: 0.9; }
        /* ── ADDED: Voice Rooms button ── */
        .btn-vcr {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 14px 28px; border-radius: 8px;
          background: rgba(226,75,74,0.12);
          border: 1px solid rgba(226,75,74,0.35);
          color: #fca5a5; font-family: 'Rajdhani', sans-serif;
          font-size: 14px; font-weight: 700; letter-spacing: 0.5px;
          text-decoration: none; transition: all 0.2s;
        }
        .btn-vcr:hover { background: rgba(226,75,74,0.22); border-color: rgba(226,75,74,0.6); color: #fff; transform: translateY(-2px); box-shadow: 0 8px 24px rgba(226,75,74,0.2); }
        .btn-outline {
          display: inline-flex; align-items: center;
          padding: 14px 28px; border-radius: 8px;
          border: 1px solid rgba(255,255,255,0.2);
          background: rgba(255,255,255,0.04);
          color: rgba(255,255,255,0.8);
          font-family: 'Rajdhani', sans-serif;
          font-size: 14px; font-weight: 600;
          text-decoration: none; transition: all 0.2s;
        }
        .btn-outline:hover { border-color: #7c3aed; color: #7c3aed; background: rgba(124,58,237,0.06); }

        /* ── STATS ── */
        .hero-stats { display: flex; gap: 28px; flex-wrap: wrap; }
        .hstat { }
        .hstat-num {
          font-family: 'Rajdhani', sans-serif;
          font-size: 28px; font-weight: 700; color: #7c3aed;
        }
        .hstat-label {
          font-family: 'JetBrains Mono', monospace;
          font-size: 9px; color: rgba(255,255,255,0.3);
          letter-spacing: 2px; text-transform: uppercase; margin-top: 2px;
        }

        /* ── MASTER CARD ── */
        .hero-right { display: flex; justify-content: center; }
        .master-card {
          position: relative;
          background: rgba(10,10,30,0.9);
          border: 1px solid rgba(124,58,237,0.3);
          border-radius: 20px; padding: 40px 32px;
          text-align: center; width: 100%; max-width: 340px;
          backdrop-filter: blur(20px);
          box-shadow: 0 0 60px rgba(124,58,237,0.1);
        }
        .master-avatar { position: relative; display: inline-block; margin-bottom: 20px; }

        /* ── Aura pulse rings ── */
        .aura-ring {
          position: absolute; border-radius: 50%;
          pointer-events: none;
        }
        .aura-r3 {
          inset: -22px;
          background: radial-gradient(ellipse at center,
            rgba(124,58,237,0.18) 0%, rgba(0,212,255,0.10) 45%, transparent 70%);
          animation: auraPulse 3s ease-in-out infinite;
        }
        .aura-r2 {
          inset: -13px;
          background: radial-gradient(ellipse at center,
            rgba(0,212,255,0.22) 0%, rgba(124,58,237,0.14) 50%, transparent 70%);
          animation: auraPulse 3s ease-in-out infinite 0.6s;
        }
        @keyframes auraPulse {
          0%,100% { opacity: 0.6; transform: scale(1); }
          50%      { opacity: 1;   transform: scale(1.06); }
        }

        /* ── Spinning gradient border ── */
        .avatar-ring {
          position: absolute; inset: -8px;
          border-radius: 50%;
          border: 2px solid transparent;
          background: linear-gradient(135deg, #7c3aed, #00d4ff, #a855f7, #7c3aed) border-box;
          -webkit-mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: destination-out;
          mask-composite: exclude;
          animation: spin 5s linear infinite;
          box-shadow: 0 0 18px rgba(124,58,237,0.5), 0 0 36px rgba(0,212,255,0.2);
        }
        @keyframes spin { to { transform: rotate(360deg); } }

        /* ── Photo container ── */
        .avatar-inner {
          width: 96px; height: 96px; border-radius: 50%;
          background: linear-gradient(135deg, #7c3aed, #00d4ff);
          display: flex; align-items: center; justify-content: center;
          overflow: hidden; position: relative;
          box-shadow: 0 0 24px rgba(124,58,237,0.4), inset 0 0 12px rgba(0,212,255,0.1);
        }
        .avatar-photo {
          width: 100%; height: 100%;
          object-fit: cover; object-position: top center;
          border-radius: 50%; display: block;
        }
        /* Fallback initials — shown only when image fails */
        .avatar-fallback {
          display: none;
          position: absolute; inset: 0;
          align-items: center; justify-content: center;
          font-family: 'Rajdhani', sans-serif;
          font-size: 28px; font-weight: 700; color: #fff;
        }
        .avatar-badge {
          position: absolute; bottom: -4px; right: -4px;
          background: #04040f; border: 1px solid #1D9E75;
          border-radius: 10px; padding: 2px 8px;
          font-size: 9px; color: #1D9E75; font-family: 'JetBrains Mono', monospace;
        }
        .master-name {
          font-family: 'Rajdhani', sans-serif;
          font-size: 22px; font-weight: 700; color: #fff; margin-bottom: 4px;
        }
        .master-title {
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px; color: #7c3aed; letter-spacing: 3px;
          text-transform: uppercase; margin-bottom: 16px;
        }
        .master-vision {
          font-size: 12px; color: rgba(255,255,255,0.5);
          line-height: 1.7; font-style: italic; margin-bottom: 20px;
        }
        .master-tags { display: flex; flex-wrap: wrap; gap: 6px; justify-content: center; margin-bottom: 24px; }
        .master-tag {
          font-size: 10px; color: rgba(255,255,255,0.6);
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 20px; padding: 3px 10px;
          font-family: 'JetBrains Mono', monospace;
        }
        .master-cta {
          display: block; padding: 12px 24px;
          background: linear-gradient(135deg, #7c3aed, #00d4ff);
          color: #fff; border-radius: 8px;
          font-family: 'Rajdhani', sans-serif;
          font-size: 14px; font-weight: 700;
          text-decoration: none; transition: all 0.2s;
        }
        .master-cta:hover { opacity: 0.85; transform: translateY(-2px); }
        .float-badge {
          position: absolute;
          background: rgba(10,10,30,0.95);
          border: 1px solid rgba(124,58,237,0.4);
          border-radius: 20px; padding: 6px 12px;
          font-size: 10px; color: #00d4ff;
          font-family: 'JetBrains Mono', monospace;
          white-space: nowrap;
          animation: float 3s ease-in-out infinite;
        }
        .fb1 { top: -16px; left: -20px; animation-delay: 0s; }
        .fb2 { bottom: 60px; right: -24px; animation-delay: 1.5s; }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }

        /* ── SECTIONS ── */
        .section {
          position: relative; z-index: 1;
          padding: 80px 40px;
          border-top: 1px solid rgba(255,255,255,0.04);
        }
        .eco-section { background: rgba(10,10,30,0.4); }
        .section-inner { max-width: 1200px; margin: 0 auto; }
        .section-tag {
          font-family: 'JetBrains Mono', monospace;
          font-size: 10px; letter-spacing: 4px; color: #1D9E75;
          margin-bottom: 12px;
        }
        .section-title {
          font-family: 'Rajdhani', sans-serif;
          font-size: clamp(24px, 3vw, 38px);
          font-weight: 700; color: #fff; margin-bottom: 12px;
        }
        .accent-purple { color: #7c3aed; }
        .accent-green { color: #1D9E75; }
        .section-desc {
          font-size: 14px; color: rgba(255,255,255,0.45);
          max-width: 560px; line-height: 1.8; margin-bottom: 44px;
          font-family: 'JetBrains Mono', monospace;
        }

        /* ── VISION SECTION ── */
        .vision-section {
          background: radial-gradient(ellipse at 50% 0%, rgba(124,58,237,0.07) 0%, transparent 60%);
        }
        .vision-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
          gap: 16px;
          margin-bottom: 40px;
        }
        .vision-card {
          display: flex; gap: 16px; align-items: flex-start;
          padding: 24px; border-radius: 14px;
          background: rgba(10,10,30,0.8);
          border: 1px solid rgba(255,255,255,0.06);
          border-left: 2px solid var(--vc);
          transition: all 0.2s;
        }
        .vision-card:hover {
          transform: translateY(-3px);
          border-color: var(--vc);
          box-shadow: 0 8px 32px rgba(0,0,0,0.3);
        }
        .vc-icon-wrap {
          width: 44px; height: 44px; border-radius: 12px;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
        }
        .vc-icon { font-size: 22px; }
        .vc-content { flex: 1; min-width: 0; }
        .vc-title {
          font-family: 'Rajdhani', sans-serif;
          font-size: 16px; font-weight: 700; color: #fff;
          margin-bottom: 3px;
        }
        .vc-sub {
          font-family: 'JetBrains Mono', monospace;
          font-size: 9px; letter-spacing: 1px;
          text-transform: uppercase; margin-bottom: 10px;
        }
        .vc-body {
          font-size: 12px; color: rgba(255,255,255,0.45);
          line-height: 1.75; font-family: 'JetBrains Mono', monospace;
        }
        /* ── ADDED: clickable vc-body for Voice Rooms pillar ── */
        .vc-body-link {
          display: block; text-decoration: none;
          color: rgba(255,255,255,0.45);
          font-size: 12px; line-height: 1.75;
          font-family: 'JetBrains Mono', monospace;
          transition: color 0.2s;
        }
        .vc-body-link:hover { color: #fca5a5; }

        /* ── UEEP BAR ── */
        .ueep-bar {
          display: flex; align-items: center; justify-content: center;
          gap: 0; flex-wrap: wrap;
          padding: 24px 32px;
          background: rgba(10,10,30,0.6);
          border: 1px solid rgba(124,58,237,0.15);
          border-radius: 14px;
          position: relative;
        }
        .ueep-step {
          display: flex; align-items: center; gap: 0;
        }
        .ueep-num {
          font-family: 'JetBrains Mono', monospace;
          font-size: 9px; color: rgba(124,58,237,0.6);
          margin-right: 6px;
        }
        .ueep-label {
          font-family: 'Rajdhani', sans-serif;
          font-size: 15px; font-weight: 700; color: rgba(255,255,255,0.8);
          letter-spacing: 1px; padding: 6px 16px;
          border: 1px solid rgba(124,58,237,0.2);
          border-radius: 20px; background: rgba(124,58,237,0.07);
        }
        .ueep-connector {
          width: 40px; height: 1px;
          background: linear-gradient(90deg, rgba(124,58,237,0.4), rgba(0,212,255,0.4));
          margin: 0 4px;
        }

        /* ── COURSES GRID ── */
        .courses-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
          gap: 16px;
        }
        .course-card {
          display: flex; flex-direction: column;
          padding: 24px; border-radius: 14px;
          background: rgba(10,10,30,0.8);
          border: 1px solid rgba(255,255,255,0.06);
          border-top: 2px solid var(--cc);
          text-decoration: none; color: inherit;
          transition: all 0.25s;
          position: relative; overflow: hidden;
        }
        .course-card::before {
          content: '';
          position: absolute; inset: 0;
          background: radial-gradient(ellipse at top, var(--cc) 0%, transparent 60%);
          opacity: 0; transition: opacity 0.3s;
        }
        .course-card:hover { transform: translateY(-4px); border-color: var(--cc); box-shadow: 0 12px 40px rgba(0,0,0,0.4); }
        .course-card:hover::before { opacity: 0.05; }
        .cc-top { display: flex; justify-content: space-between; align-items: center; margin-bottom: 14px; }
        .cc-emoji { font-size: 28px; }
        .cc-color-dot { width: 8px; height: 8px; border-radius: 50%; }
        .cc-title {
          font-family: 'Rajdhani', sans-serif;
          font-size: 17px; font-weight: 700; color: #fff;
          margin-bottom: 8px; position: relative;
        }
        .cc-desc {
          font-size: 12px; color: rgba(255,255,255,0.45);
          line-height: 1.7; margin-bottom: 16px; flex: 1;
          font-family: 'JetBrains Mono', monospace; position: relative;
        }
        .cc-tags { display: flex; flex-wrap: wrap; gap: 5px; margin-bottom: 16px; position: relative; }
        .cc-tag {
          font-size: 9px; padding: 2px 8px;
          border: 1px solid; border-radius: 20px;
          font-family: 'JetBrains Mono', monospace;
        }
        .cc-arrow {
          font-family: 'Rajdhani', sans-serif;
          font-size: 13px; font-weight: 600;
          position: relative;
        }

        /* ── ECOSYSTEM ── */
        .eco-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
          gap: 16px;
        }
        .eco-card {
          display: flex; flex-direction: column; gap: 8px;
          padding: 24px; border-radius: 14px;
          background: rgba(10,10,30,0.8);
          border: 1px solid rgba(255,255,255,0.07);
          text-decoration: none; color: inherit;
          transition: all 0.2s; position: relative;
        }
        .eco-card:hover { border-color: #7c3aed; transform: translateY(-3px); }
        .eco-icon { font-size: 28px; }
        .eco-label { font-family: 'Rajdhani', sans-serif; font-size: 16px; font-weight: 700; color: #fff; }
        .eco-desc { font-size: 11px; color: rgba(255,255,255,0.4); font-family: 'JetBrains Mono', monospace; }
        .eco-arrow { position: absolute; top: 20px; right: 20px; color: rgba(255,255,255,0.2); font-size: 18px; transition: color 0.2s; }
        .eco-card:hover .eco-arrow { color: #7c3aed; }

        /* ── TESTIMONIALS ── */
        .testi-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 16px;
        }
        .testi-card {
          padding: 28px; border-radius: 14px;
          background: rgba(10,10,30,0.8);
          border: 1px solid rgba(255,255,255,0.07);
        }
        .testi-stars { color: #f59e0b; font-size: 14px; margin-bottom: 14px; }
        .testi-text {
          font-size: 13px; color: rgba(255,255,255,0.7);
          line-height: 1.8; font-style: italic; margin-bottom: 20px;
          font-family: 'JetBrains Mono', monospace;
        }
        .testi-author { display: flex; align-items: center; gap: 12px; }
        .testi-avatar {
          width: 40px; height: 40px; border-radius: 50%;
          background: linear-gradient(135deg, #7c3aed, #00d4ff);
          display: flex; align-items: center; justify-content: center;
          font-family: 'Rajdhani', sans-serif; font-size: 13px; font-weight: 700; color: #fff;
          flex-shrink: 0;
        }
        .testi-name { font-family: 'Rajdhani', sans-serif; font-size: 14px; font-weight: 700; color: #fff; }
        .testi-role { font-size: 11px; color: rgba(255,255,255,0.4); font-family: 'JetBrains Mono', monospace; }

        /* ── BLOG ── */
        .blog-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 16px;
        }
        .blog-card {
          display: flex; flex-direction: column; gap: 10px;
          padding: 24px; border-radius: 14px;
          background: rgba(10,10,30,0.8);
          border: 1px solid rgba(255,255,255,0.07);
          text-decoration: none; color: inherit;
          transition: all 0.2s;
        }
        .blog-card:hover { border-color: #1D9E75; transform: translateY(-3px); }
        .blog-tag {
          font-size: 9px; letter-spacing: 2px; color: #1D9E75;
          font-family: 'JetBrains Mono', monospace; text-transform: uppercase;
        }
        .blog-title { font-family: 'Rajdhani', sans-serif; font-size: 16px; font-weight: 700; color: #fff; line-height: 1.4; flex: 1; }
        .blog-date { font-size: 10px; color: rgba(255,255,255,0.3); font-family: 'JetBrains Mono', monospace; }
        .blog-arrow { font-family: 'Rajdhani', sans-serif; font-size: 13px; font-weight: 600; color: #1D9E75; }

        /* ── CTA ── */
        .cta-section {
          position: relative; z-index: 1;
          padding: 100px 40px;
          background: radial-gradient(ellipse at 50% 50%, rgba(124,58,237,0.1) 0%, transparent 65%);
          border-top: 1px solid rgba(255,255,255,0.04);
          text-align: center;
        }
        .cta-inner { max-width: 700px; margin: 0 auto; }
        .cta-title {
          font-family: 'Rajdhani', sans-serif;
          font-size: clamp(28px, 4vw, 48px);
          font-weight: 700; color: #fff; margin-bottom: 16px;
        }
        .cta-desc {
          font-size: 13px; color: rgba(255,255,255,0.45);
          line-height: 1.8; margin-bottom: 36px;
          font-family: 'JetBrains Mono', monospace;
        }

        /* ── FEEDBACK VIDEOS ── */
        .feedback-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
          gap: 20px;
        }
        .feedback-card {
          display: flex; flex-direction: column; gap: 10px;
          padding: 16px; border-radius: 14px;
          background: rgba(10,10,30,0.8);
          border: 1px solid rgba(255,255,255,0.07);
          transition: transform 0.2s, border-color 0.2s;
        }
        .feedback-card:hover { transform: translateY(-3px); border-color: rgba(124,58,237,0.3); }
        .feedback-tag {
          font-family: 'JetBrains Mono', monospace;
          font-size: 9px; letter-spacing: 2px;
          color: #7c3aed; text-transform: uppercase;
        }
        .feedback-iframe-wrap {
          position: relative; width: 100%; padding-top: 56.25%;
          border-radius: 8px; overflow: hidden;
          background: rgba(0,0,0,0.4);
        }
        .feedback-iframe-wrap iframe {
          position: absolute; top: 0; left: 0;
          width: 100%; height: 100%; border-radius: 8px;
        }
        .feedback-title {
          font-family: 'Rajdhani', sans-serif;
          font-size: 13px; font-weight: 600;
          color: rgba(255,255,255,0.65); line-height: 1.4;
        }

        /* ── RESPONSIVE ── */
        @media (max-width: 900px) {
          .hero { padding: 100px 20px 60px; }
          .hero-inner { grid-template-columns: 1fr; gap: 40px; }
          .hero-right { display: none; }
          .hero-h1 { font-size: 48px; }
          .section { padding: 60px 20px; }
          .cta-section { padding: 60px 20px; }
        }
        @media (max-width: 600px) {
          .hero-h1 { font-size: 36px; }
          .courses-grid { grid-template-columns: 1fr; }
          .eco-grid { grid-template-columns: 1fr 1fr; }
          .testi-grid { grid-template-columns: 1fr; }
          .blog-grid { grid-template-columns: 1fr; }
          .feedback-grid { grid-template-columns: 1fr; }
          .hero-stats { gap: 16px; }
          .hero-btns { flex-direction: column; }
          .vision-grid { grid-template-columns: 1fr; }
          .ueep-bar { gap: 8px; padding: 16px; }
          .ueep-connector { width: 16px; }
        }
          /* ── RESUME SECTION ── */
        .resume-section { background: rgba(10,10,30,0.5); }
        .profile-links { display:flex; gap:12px; flex-wrap:wrap; margin-bottom:32px; }
        .profile-btn {
          display:inline-flex; align-items:center; gap:8px;
          padding:12px 20px; border-radius:8px;
          font-family:'Rajdhani',sans-serif; font-size:14px; font-weight:700;
          text-decoration:none; transition:all 0.2s;
        }
        .linkedin { background:rgba(10,102,194,0.12); border:1px solid rgba(10,102,194,0.35); color:#60a5fa; }
        .linkedin:hover { background:rgba(10,102,194,0.25); transform:translateY(-2px); }
        .github { background:rgba(255,255,255,0.06); border:1px solid rgba(255,255,255,0.2); color:rgba(255,255,255,0.8); }
        .github:hover { border-color:#7c3aed; color:#fff; transform:translateY(-2px); }
        .whatsapp { background:rgba(37,211,102,0.1); border:1px solid rgba(37,211,102,0.3); color:#25d366; }
        .whatsapp:hover { background:rgba(37,211,102,0.2); transform:translateY(-2px); }
        .resume-grid { display:grid; grid-template-columns:repeat(auto-fill,minmax(300px,1fr)); gap:16px; }
        .resume-card {
          display:flex; align-items:center; gap:16px;
          padding:20px; border-radius:14px;
          background:rgba(10,10,30,0.8); border:1px solid rgba(255,255,255,0.08);
          transition:all 0.2s;
        }
        .resume-card:hover { border-color:#7c3aed; transform:translateY(-2px); }
        .resume-icon { font-size:28px; flex-shrink:0; }
        .resume-info { flex:1; min-width:0; }
        .resume-title { font-family:'Rajdhani',sans-serif; font-size:15px; font-weight:700; color:#fff; }
        .resume-sub { font-size:11px; color:rgba(255,255,255,0.5); font-family:'JetBrains Mono',monospace; margin-top:3px; }
        .resume-meta { font-size:10px; color:rgba(255,255,255,0.3); font-family:'JetBrains Mono',monospace; margin-top:2px; }
        .resume-dl {
          padding:8px 16px; border-radius:8px; flex-shrink:0;
          background:linear-gradient(135deg,#7c3aed,#00d4ff);
          color:#fff; font-family:'Rajdhani',sans-serif;
          font-size:13px; font-weight:700; text-decoration:none;
          transition:opacity 0.2s; white-space:nowrap;
        }
        .resume-dl:hover { opacity:0.85; }
      `}</style>
    </>
  );
}