// ============================================================
// FILE LOCATION: seekhowithrua-seo/app/blog/page.tsx
// CLEAN VERSION — 32 posts, zero duplicates, correct order
// Newest post first (featured), all slugs match [slug]/page.tsx
// ============================================================

import type { Metadata } from "next";
import BlogContent from "./BlogContent";

export const metadata: Metadata = {
  title: "Blog | SeekhowithRua — Master Rua Tech Tutorials & Career Tips 2026",
  description: "Daily tutorials on AI, ML, Game Dev, Mobile Apps, Web Dev, Python and career tips by Master Rua (Sachin Kumar). Best EdTech blog India 2026. Seekho with Rua.",
  alternates: { canonical: "https://seekhowithrua.com/blog" },
  openGraph: {
    title: "SeekhowithRua Blog — Master Rua Daily Tutorials",
    description: "Daily tech tutorials by Master Rua. AI, Game Dev, Mobile, Python, Full Stack India 2026.",
    url: "https://seekhowithrua.com/blog",
    type: "website"
  },
};

// ─────────────────────────────────────────────────────────────
// POSTS — 39 unique entries, no duplicates
// RULE: Every slug here MUST have a matching entry in [slug]/page.tsx
// RULE: Newest date first (index 0 = featured post)
// ─────────────────────────────────────────────────────────────
const POSTS = [
  // ── April 10 — Claude Mythos AI Revolution ─────────────────────────────
  {
    slug: "anthropic-claude-mythos-ai-revolution-2026",
    title: "🔥 Claude Mythos is HERE: 5 Features That Will Replace Junior Devs in 2026",
    excerpt: "BREAKING: Anthropic Claude Mythos just launched! See the 5 game-changing features that are replacing junior developers. Learn how to stay ahead of AI in your tech career.",
    date: "2026-04-10", category: "AI", color: "#9333ea", readTime: "12 min read", trending: true,
  },
  // ── April 10 — Google Stitch Visual AI ─────────────────────────────
  {
    slug: "google-stitch-sundar-pichai-visual-ai-2026",
    title: "🎨 Google Stitch 2026: Sketch to Website in 30 Seconds (Sundar Pichai's AI)",
    excerpt: "NEW: Sundar Pichai just launched Google Stitch! Draw a sketch, get a full website in 30 seconds. See how this visual AI tool is replacing web designers in 2026.",
    date: "2026-04-10", category: "AI", color: "#3b82f6", readTime: "11 min read", trending: true,
  },
  // ── April 10 — Future Full Stack Development ─────────────────────────────
  {
    slug: "future-full-stack-development-2026",
    title: "💻 Full Stack 2026: 7 Dead Technologies + The New Stack You MUST Learn",
    excerpt: "WARNING: 7 full stack technologies are dying in 2026. See what's replacing them and the exact new stack you need to learn to get hired. Complete 2026 guide with salary data.",
    date: "2026-04-10", category: "Development", color: "#f97316", readTime: "15 min read", trending: true,
  },
  // ── April 10 — AI Learning Revolution ─────────────────────────────
  {
    slug: "ai-learning-revolution-education-2026",
    title: "🤖 AI Learning Revolution 2026: Learn 10x Faster with AI Tutors (Free Guide)",
    excerpt: "NEW: AI tutors are helping students learn 10x faster in 2026. See how personalized AI education works and how to use it to master tech skills in weeks, not years.",
    date: "2026-04-10", category: "Education", color: "#22c55e", readTime: "13 min read", trending: true,
  },
  // ── April 10 — Gamified Learning Tech Careers ─────────────────────────────
  {
    slug: "gamified-learning-tech-career-2026",
    title: "🎮 Gamified Learning 2026: Play Games, Learn Code, Get Hired ($100K+ Jobs)",
    excerpt: "STOP boring courses! Gamified learning is getting tech students hired at Google, Amazon in 2026. See how badges, quests & AI tutors help you learn 5x faster.",
    date: "2026-04-10", category: "Career", color: "#ec4899", readTime: "10 min read", trending: true,
  },
  // ── April 10 — Gemma 4 Hackathon Mentor ─────────────────────────────
  {
    slug: "gemma-4-hackathon-mentor-rua-2026",
    title: "🏆 Gemma 4 Hackathon Ready: Win $50K Prize (Live Mentor Rua | 45 Days | $999)",
    excerpt: "Want to WIN Google Gemma 4 Hackathon 2026? Get live mentorship by Rua (Sachin Kumar). Full project training backend to frontend. WhatsApp: +91 8826776018 | 45-day program.",
    date: "2026-04-10", category: "Hackathon", color: "#f59e0b", readTime: "15 min read", trending: true,
  },
  // ── April 3 — SEO Indexing Fix ─────────────────────────────
  {
    slug: "urls-discovered-not-indexed-fix",
    title: "⚠️ 210 URLs Not Indexed by Google? Fix This in 7 Days (SEO Guide 2026)",
    excerpt: "URGENT: Google found your URLs but won't index them? Here's the exact 7-day fix that got us 50K monthly visitors. Step-by-step technical SEO guide for 2026.",
    date: "2026-04-03", category: "SEO", color: "#f59e0b", readTime: "12 min read", trending: true,
  },
  // ── April 3 — Oracle Layoffs 2026 ─────────────────────────────
  {
    slug: "oracle-layoffs-2026",
    title: "⚠️ Oracle Layoffs 2026: 10,000 Jobs GONE (Are YOU Next? + Save Your Career)",
    excerpt: "URGENT: Oracle fired 10,000+ engineers. 42,500 total tech layoffs in 2026. See if your job is at risk and the 3 skills that guarantee employment.",
    date: "2026-04-03", category: "Career", color: "#E24B4A", readTime: "10 min read", trending: true,
  },
  // ── April 3 — Claude Code Leak ─────────────────────────────
  {
    slug: "claude-code-leak-2026",
    title: "🚨 Claude Code Leak 2026: 72 Hours of Data Exposure (What Was Leaked + Fix Now)",
    excerpt: "BREAKING: Claude Code leaked for 72+ hours. Source code, API keys & passwords exposed. See what data was compromised and how to protect your code in 5 minutes.",
    date: "2026-04-03", category: "Security", color: "#dc2626", readTime: "8 min read", trending: true,
  },
  // ── March 29 — Memory Game Post ──────────────────────────────
  {
    slug: "memory-training-game-free-online-2026",
    title: "Free Memory Training Game Online 2026 — Boost Your Brain Power",
    excerpt: "Play the best free memory training game online in 2026. Improve short-term memory, cognitive skills, and mental focus with daily brain exercises. Scientifically designed memory challenges.",
    date: "2026-03-29", category: "Gaming", color: "#7c3aed", readTime: "6 min read",
  },
  // ── March 24 ──────────────────────────────────────────────
  {
    slug: "why-seekhowithrua-bundle-course-is-best-india-global-2026",
    title: "Why SeekhoWithRua Bundle Course is the Best Investment of 2026 — India and Global Students",
    excerpt: "Udemy charges Rs 5,000 per course. UpGrad charges Rs 3 lakh for a bootcamp. SeekhoWithRua gives you 8 complete courses — Full Stack, AI, ML, Data Science, Mobile, Game Dev, IoT, Web Dev — in one bundle, free to start. Here is why this is the smartest learning decision of 2026.",
    date: "2026-03-24", category: "Courses", color: "#00d4ff", readTime: "11 min read",
  },
  // ── March 23 ──────────────────────────────────────────────
  {
    slug: "it-layoff-2026-india-ai-rider-not-runner",
    title: "IT Layoff 2026 India — 55,000 Jobs Gone. Are You a Rider or a Runner? Master Rua's Warning",
    excerpt: "TCS cut 30,000 jobs. Amazon cut 16,000. Atlassian cut 1,600 including India. 55,911 tech jobs gone in 90 days. Master Rua explains why — and what YOU must do right now to never be laid off again.",
    date: "2026-03-23", category: "Career", color: "#E24B4A", readTime: "10 min read",
  },
  {
    slug: "chanakya-niti-ai-job-survival-india-2026",
    title: "Chanakya Niti for Indian IT Professionals 2026 — Know the Threat, Master the Solution, Win the Market",
    excerpt: "Chanakya said: Know your enemy before the battle. The enemy of every Indian IT professional in 2026 is not their manager — it is AI ignorance. Master Rua applies Chanakya's strategy to survive and dominate.",
    date: "2026-03-23", category: "Career", color: "#fbbf24", readTime: "9 min read",
  },
  {
    slug: "bruce-lee-wrong-2026-be-versatile-developer",
    title: "Bruce Lee Was Wrong About Tech in 2026 — Don't Master One Skill. Master Everything.",
    excerpt: "Bruce Lee said 'I fear the man who practiced one kick 10,000 times.' In 2026, AI does that kick in 0.3 seconds. Master Rua explains why versatility — not specialization — is the real superpower now.",
    date: "2026-03-23", category: "Master Rua", color: "#7c3aed", readTime: "8 min read",
  },
  {
    slug: "seekhowithrua-bundle-course-fullstack-ai-ml-iot-2026",
    title: "SeekhoWithRua Bundle Course 2026 — Full Stack + AI + ML + Mobile + IoT + Robotics. One Platform. Free.",
    excerpt: "India's only bundle course covering Full Stack Development, AI, Machine Learning, Web Dev, Mobile Apps, Game Dev and IoT Robotics — all in one. Built by Master Rua. Free to start. Visual learning. Real projects.",
    date: "2026-03-23", category: "Courses", color: "#00d4ff", readTime: "8 min read",
  },
  {
    slug: "be-a-rider-not-a-runner-master-rua-manifesto-2026",
    title: "Be a Rider, Not a Runner — Master Rua's Manifesto for India's AI Generation 2026",
    excerpt: "Sachin Kumar (Master Rua) shares his defining philosophy for 2026: The person who doesn't know AI will lose their job. The person who rides AI will own the market. Which one are you choosing to be?",
    date: "2026-03-23", category: "Master Rua", color: "#fbbf24", readTime: "9 min read",
  },
  // ── March 22 ──────────────────────────────────────────────
  {
    slug: "voice-chat-room-tech-india-2026",
    title: "Live Voice Chat Room for Tech Students India 2026 — Talk, Debate & Get Hired",
    excerpt: "Best live voice chat app for IT students, developers and tech enthusiasts in India. Open talk, baat karne wala app, spiritual philosophy tech debate — all in one free platform. SeekhoWithRua VCR.",
    date: "2026-03-22", category: "Voice Rooms", color: "#E24B4A", readTime: "7 min read",
  },
  {
    slug: "jee-mains-result-2026-python-data-science",
    title: "JEE Mains 2026 Result — Now What? Learn Python, Data Science & AI to Get ₹20L+ Job",
    excerpt: "JEE Mains 2026 result is out. Whether you cracked it or not — the real opportunity is in Python, Data Science and AI. Master Rua's complete guide for JEE students in India 2026.",
    date: "2026-03-22", category: "Career", color: "#1D9E75", readTime: "8 min read",
  },
  {
    slug: "10th-result-2026-coding-career-india",
    title: "10वीं Result 2026 के बाद Coding सीखो — Python, AI और Data Science से ₹15L+ Job पाओ",
    excerpt: "RBSE, CBSE 10th result 2026 आ गया। अब आगे क्या? Master Rua बताते हैं — 10th के बाद Coding, Python और AI सीखकर कैसे बड़ी job पाएं India में 2026 में।",
    date: "2026-03-22", category: "Career", color: "#f59e0b", readTime: "6 min read",
  },
  {
    slug: "bihar-board-12th-result-2026-tech-career",
    title: "Bihar Board 12th Result 2026 — Tech Career Mein Kaise Jaayen? Python, AI, Web Dev Guide",
    excerpt: "Bihar Board 12th result 2026 declared. Science stream students — here is your complete roadmap to a high-paying tech career using Python, AI, web development and data science. No IIT needed.",
    date: "2026-03-22", category: "Career", color: "#a855f7", readTime: "6 min read",
  },
  {
    slug: "gta-6-game-development-career-india-2026",
    title: "GTA 6 Release Hype 2026 — Game Developer Kaise Bane India Mein? Three.js, Unity Guide",
    excerpt: "Grand Theft Auto VI ka craze India mein peak par hai. Kya aap bhi game developer banana chahte hain? Master Rua ka complete guide — Three.js, Unity aur game development career India 2026.",
    date: "2026-03-22", category: "Game Dev", color: "#f59e0b", readTime: "7 min read",
  },
  {
    slug: "gold-price-silver-price-fintech-python-2026",
    title: "Gold Price & Silver Price Tracker — Build a Live Finance App with Python in 2026",
    excerpt: "Gold rate today is trending at 200k+ searches in India. Learn to build a live gold and silver price tracker using Python, APIs and data visualization. Real project, real skill, real career.",
    date: "2026-03-22", category: "Python", color: "#ec4899", readTime: "6 min read",
  },
  {
    slug: "samsung-galaxy-s25-ultra-android-dev-2026",
    title: "Samsung Galaxy S25 Ultra 2026 — Build Android Apps for India's Top Smartphone",
    excerpt: "Samsung Galaxy S25 Ultra is trending at 50k+ searches in India. Learn React Native and Android development to build apps for India's most popular flagship smartphone in 2026.",
    date: "2026-03-22", category: "Mobile", color: "#00d4ff", readTime: "5 min read",
  },
  {
    slug: "comet-space-science-python-simulation-2026",
    title: "Comet 2026 India — Simulate Space Events with Python and Data Science",
    excerpt: "A comet is currently visible from India and trending at 10k+ searches. Learn how to simulate orbital mechanics, visualize space data and build astronomy projects with Python in 2026.",
    date: "2026-03-22", category: "Python", color: "#1D9E75", readTime: "5 min read",
  },
  {
    slug: "world-water-day-2026-iot-tech-india",
    title: "World Water Day 2026 — Build IoT Water Monitoring Systems with Arduino & Raspberry Pi",
    excerpt: "World Water Day 2026 is trending at 2k+ in India. Learn to build real IoT solutions — water level sensors, quality monitors and smart irrigation systems using Arduino and Raspberry Pi.",
    date: "2026-03-22", category: "IoT", color: "#00d4ff", readTime: "6 min read",
  },
  {
    slug: "navami-march-2026-india-tech-startup",
    title: "Navami March 2026 — Indian Festivals, EdTech Trends and Why This Is the Best Time to Learn",
    excerpt: "Navami 2026 is being celebrated across India. Master Rua reflects on the wisdom of Indian festivals and why this sacred time is the perfect moment to begin your tech learning journey.",
    date: "2026-03-22", category: "Master Rua", color: "#fbbf24", readTime: "5 min read",
  },
  {
    slug: "best-python-course-india-2026-free",
    title: "Best Python Course India 2026 — Free, Beginner to Advanced, Job Ready in 6 Months",
    excerpt: "Looking for the best Python course in India 2026? Master Rua's Python course at SeekhoWithRua is free, visual, gamified and gets you job-ready in 6 months. Complete guide inside.",
    date: "2026-03-22", category: "Python", color: "#ec4899", readTime: "7 min read",
  },
  {
    slug: "best-data-science-course-india-2026",
    title: "Best Data Science Course India 2026 — Free AI-Powered Learning with 3D Visualizations",
    excerpt: "Searching for the best data science course in India? SeekhoWithRua teaches Data Science through 3D animations, gamified quizzes and real projects. Free. Beginner-friendly. Job-focused.",
    date: "2026-03-22", category: "AI/ML", color: "#00d4ff", readTime: "7 min read",
  },
  {
    slug: "best-machine-learning-course-india-2026",
    title: "Best Machine Learning Course India 2026 — UEEP Model, Visual Learning, Real Projects",
    excerpt: "The best machine learning course in India 2026 is not the most expensive one. It is the one that makes concepts visual, forces you to build, and gets you hired. SeekhoWithRua does all three.",
    date: "2026-03-22", category: "AI/ML", color: "#7c3aed", readTime: "8 min read",
  },
  {
    slug: "best-ai-course-india-free-2026",
    title: "Best Free AI Course India 2026 — Learn Artificial Intelligence with Master Rua",
    excerpt: "The best free AI course in India 2026 covers LLMs, AI agents, neural networks and real deployment. SeekhoWithRua's AI course is visual, gamified and completely free to start.",
    date: "2026-03-22", category: "AI/ML", color: "#1D9E75", readTime: "7 min read",
  },
  // ── March 21 ──────────────────────────────────────────────
  {
    slug: "memory-enhancement-game-online-india-2026",
    title: "Best Memory Enhancement Game Online India 2026 — Train Your Brain Free",
    excerpt: "The best free memory enhancement games for students in India. WMSC techniques gamified — memorise 400 numbers in 21 days. Master Rua's Memory Champion Arena explained.",
    date: "2026-03-21", category: "Memory Game", color: "#00d4ff", readTime: "5 min read",
  },
  {
    slug: "free-fire-style-study-game-india-2026",
    title: "Free Fire Style Study Game India 2026 — Learn While Playing, Rank While Studying",
    excerpt: "What if Free Fire taught you Data Science, Python and AI instead of just shooting? SeekhoWithRua's Quiz Battle does exactly that. Multiplayer MCQ battles where your quiz score is your armor.",
    date: "2026-03-21", category: "Gaming Lab", color: "#f59e0b", readTime: "5 min read",
  },
  {
    slug: "3d-animation-data-science-course-india-2026",
    title: "How 3D Animations Make Data Science 6x Easier to Learn — SeekhoWithRua Animation Lab",
    excerpt: "Neural networks, gradient descent, PCA — all visualised in 3D in your browser. Why visual learning beats video lectures for data science and AI courses in India 2026.",
    date: "2026-03-21", category: "Animation Lab", color: "#1D9E75", readTime: "6 min read",
  },
  {
    slug: "hire-game-developer-india-2026",
    title: "Hire Game Developer India 2026 — Three.js, Unity, WebGL Browser Games & Mobile",
    excerpt: "Looking to hire a game developer in India? Master Rua builds browser games with Three.js and Babylon.js, Unity mobile games, and educational game platforms. Fast delivery, live demos.",
    date: "2026-03-21", category: "Services", color: "#a855f7", readTime: "5 min read",
  },
  {
    slug: "live-voice-chat-room-it-students-india-2026",
    title: "Live Voice Chat Rooms for IT Students India 2026 — Debate, Learn & Get Hired",
    excerpt: "Free live voice rooms for IT professionals, students and developers in India. Spiritual talk, tech debates, hiring rooms, virtual friends. SeekhoWithRua VCR — no app needed.",
    date: "2026-03-21", category: "Voice Rooms", color: "#E24B4A", readTime: "5 min read",
  },
  // ── March 20 ──────────────────────────────────────────────
  {
    slug: "who-is-master-rua-seekhowithrua-story-2026",
    title: "Who is Master Rua? The Story Behind SeekhowithRua — India's Learning Revolution 2026",
    excerpt: "Master Rua is not just a person — it is a title earned by all-rounders who master tech, physical and creative skills. Meet Sachin Kumar, the founder of SeekhowithRua.",
    date: "2026-03-20", category: "Master Rua", color: "#fbbf24", readTime: "7 min read",
  },
  {
    slug: "seekhowithrua-mission-vision-evidence-2026",
    title: "SeekhoWithRua Mission & Vision 2026 — The Scientific Evidence That Will Change How India Learns",
    excerpt: "Why the current education system is broken — backed by 10+ peer-reviewed studies. And how SeekhoWithRua's UEEP Model, 3D learning, gamification and memory science are the scientifically-proven answer.",
    date: "2026-03-20", category: "Mission", color: "#00d4ff", readTime: "12 min read",
  },
  // ── March 19 and earlier ──────────────────────────────────────────────
  {
    slug: "how-to-learn-machine-learning-india-2025",
    title: "How to Learn Machine Learning in India 2026 — Complete Roadmap",
    excerpt: "A practical, step-by-step roadmap to learn ML in India. From Python basics to getting your first ML job.",
    date: "2026-03-19", category: "AI/ML", color: "#00d4ff", readTime: "8 min read",
  },
  {
    slug: "unity-vs-threejs-which-to-learn-first",
    title: "Unity vs Three.js: Which Game Engine Should You Learn First in 2026?",
    excerpt: "Confused between Unity and Three.js? Here's Master Rua's honest take based on your goals.",
    date: "2026-03-18", category: "Game Dev", color: "#f59e0b", readTime: "6 min read",
  },
  {
    slug: "how-to-get-20-lakh-tech-job-tier-2-city",
    title: "How to Get a ₹20L Tech Job from a Tier-2 City in India",
    excerpt: "You don't need to be in Bangalore. Here's the exact playbook Master Rua's students use.",
    date: "2026-03-17", category: "Career", color: "#1D9E75", readTime: "7 min read",
  },
  {
    slug: "python-roadmap-beginners-india-2025",
    title: "Python Learning Roadmap for Absolute Beginners in India 2026",
    excerpt: "Zero to job-ready Python developer in 6 months. The exact roadmap Master Rua uses.",
    date: "2026-03-16", category: "Python", color: "#ec4899", readTime: "6 min read",
  },
  {
    slug: "react-native-expo-guide-2025",
    title: "Expo Managed vs Bare Workflow: Which Should You Use in 2026?",
    excerpt: "The eternal question for React Native developers. A clear, practical answer.",
    date: "2026-03-15", category: "Mobile", color: "#a855f7", readTime: "5 min read",
  },
];

export default function BlogPage() {
  return (
    <>
      <div className="bl">
        <div className="bl-hero">
          <div className="bl-ey">✦ DAILY INSIGHTS BY MASTER RUA</div>
          <h1 className="bl-h1">The <span>SeekhowithRua</span> Blog</h1>
          <p className="bl-sub">
            Daily tutorials, career tips, and deep-dives on AI, Game Dev, Mobile, Web and more
            by Master Rua (Sachin Kumar). Seekho with Rua — learn differently.
          </p>
          <div className="bl-contact">
            <a href="https://wa.me/918826776018" target="_blank" rel="noopener noreferrer" className="bl-contact-btn bl-wa">
              💬 WhatsApp Master Rua
            </a>
            <a href="https://www.youtube.com/@seekhowithrua_" target="_blank" rel="noopener noreferrer" className="bl-contact-btn bl-yt">
              ▶ YouTube @seekhowithrua
            </a>
          </div>
        </div>

        <BlogContent posts={POSTS} />
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@600;700;800&family=JetBrains+Mono:wght@400;500&family=Exo+2:wght@400;500;600&display=swap');
        .bl{min-height:100vh;background:#04040f;color:#e2e8f0;font-family:'Exo 2',sans-serif}
        .bl-hero{padding:80px 40px 48px;text-align:center;background:radial-gradient(ellipse at 50% 0%,rgba(124,58,237,.1) 0%,transparent 60%);border-bottom:1px solid rgba(255,255,255,.05)}
        .bl-ey{font-family:'JetBrains Mono',monospace;font-size:10px;letter-spacing:4px;color:#1D9E75;margin-bottom:16px}
        .bl-h1{font-family:'Syne',sans-serif;font-size:clamp(32px,5vw,56px);font-weight:800;color:#fff;margin-bottom:14px}
        .bl-h1 span{color:#7c3aed}
        .bl-sub{font-family:'JetBrains Mono',monospace;font-size:12px;color:rgba(255,255,255,.4);max-width:560px;margin:0 auto 24px;line-height:2}
        .bl-contact{display:flex;gap:12px;justify-content:center;flex-wrap:wrap;margin-top:8px}
        .bl-contact-btn{padding:8px 18px;border-radius:20px;font-size:12px;font-weight:700;text-decoration:none;font-family:'JetBrains Mono',monospace;transition:all .2s}
        .bl-wa{background:rgba(37,211,102,.1);border:1px solid rgba(37,211,102,.3);color:#25d366}
        .bl-wa:hover{background:rgba(37,211,102,.2)}
        .bl-yt{background:rgba(255,0,0,.08);border:1px solid rgba(255,0,0,.25);color:#ff4444}
        .bl-yt:hover{background:rgba(255,0,0,.15)}
        .bl-body{max-width:1100px;margin:0 auto;padding:48px 40px 80px}
        .bl-lbl{font-family:'JetBrains Mono',monospace;font-size:9px;letter-spacing:4px;color:rgba(255,255,255,.3);margin-bottom:20px}
        .bl-feat{display:block;padding:36px;border:1px solid rgba(124,58,237,.3);border-radius:16px;background:rgba(10,10,30,.8);text-decoration:none;color:inherit;transition:all .2s}
        .bl-feat:hover{border-color:#7c3aed;transform:translateY(-2px)}
        .bf-cat{font-family:'JetBrains Mono',monospace;font-size:10px;letter-spacing:2px;text-transform:uppercase;margin-bottom:14px}
        .bf-title{font-family:'Syne',sans-serif;font-size:clamp(20px,3vw,30px);font-weight:700;color:#fff;margin-bottom:12px;line-height:1.3}
        .bf-ex{font-size:14px;color:rgba(255,255,255,.55);line-height:1.8;margin-bottom:20px;max-width:680px}
        .bf-meta{display:flex;align-items:center;gap:8px;font-family:'JetBrains Mono',monospace;font-size:11px;color:rgba(255,255,255,.35)}
        .bf-cta{margin-left:auto;color:#7c3aed;font-weight:600}
        .bl-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:16px}
        .bl-card{display:flex;flex-direction:column;gap:10px;padding:24px;border:1px solid rgba(255,255,255,.07);border-radius:12px;background:rgba(10,10,30,.6);text-decoration:none;color:inherit;transition:all .2s}
        .bl-card:hover{border-color:#7c3aed;transform:translateY(-3px)}
        .bc-cat{font-family:'JetBrains Mono',monospace;font-size:9px;letter-spacing:2px;text-transform:uppercase}
        .bc-title{font-family:'Syne',sans-serif;font-size:16px;font-weight:700;color:#fff;line-height:1.4;flex:1}
        .bc-ex{font-size:12px;color:rgba(255,255,255,.45);line-height:1.7}
        .bc-meta{font-family:'JetBrains Mono',monospace;font-size:10px;color:rgba(255,255,255,.3);display:flex;gap:6px}
        .bl-cta{margin-top:60px;text-align:center;padding:48px;border:1px solid rgba(29,158,117,.3);border-radius:16px;background:rgba(29,158,117,.05)}
        .bl-cta-t{font-family:'Syne',sans-serif;font-size:24px;font-weight:700;color:#fff;margin-bottom:8px}
        .bl-cta-s{font-size:13px;color:rgba(255,255,255,.45);font-family:'JetBrains Mono',monospace;margin-bottom:24px}
        .bl-cta-btn{display:inline-block;padding:12px 28px;border-radius:8px;background:linear-gradient(135deg,#7c3aed,#00d4ff);color:#fff;font-family:'Syne',sans-serif;font-size:14px;font-weight:700;text-decoration:none;transition:opacity .2s}
        .bl-cta-btn:hover{opacity:.85}
        .bl-cta-wa{background:linear-gradient(135deg,#25d366,#128c7e) !important}
        @media(max-width:600px){.bl-hero,.bl-body{padding-left:20px;padding-right:20px}.bl-grid{grid-template-columns:1fr}}
        .bl-search-container{margin-bottom:32px}
        .bl-search-box{position:relative;display:flex;align-items:center;max-width:600px;margin:0 auto}
        .bl-search-icon{position:absolute;left:16px;width:20px;height:20px;color:rgba(255,255,255,.4);pointer-events:none}
        .bl-search-input{width:100%;padding:14px 44px;background:rgba(124,58,237,.1);border:1px solid rgba(124,58,237,.3);border-radius:12px;color:#fff;font-size:14px;font-family:'Exo 2',sans-serif;outline:none;transition:all .2s}
        .bl-search-input::placeholder{color:rgba(255,255,255,.4)}
        .bl-search-input:focus{border-color:#7c3aed;background:rgba(124,58,237,.15)}
        .bl-search-clear{position:absolute;right:16px;width:24px;height:24px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,.1);border:none;border-radius:50%;color:rgba(255,255,255,.6);font-size:18px;cursor:pointer;transition:all .2s}
        .bl-search-clear:hover{background:rgba(255,255,255,.2);color:#fff}
        .bl-search-results{text-align:center;margin-top:12px;font-family:'JetBrains Mono',monospace;font-size:12px;color:rgba(255,255,255,.5)}
        .bl-no-results{text-align:center;padding:60px 20px;color:rgba(255,255,255,.6)}
        .bl-no-results h3{font-family:'Syne',sans-serif;font-size:24px;color:#fff;margin-bottom:8px}
      `}</style>
    </>
  );
}