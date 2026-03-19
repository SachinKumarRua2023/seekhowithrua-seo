// ============================================================
// FILE LOCATION: seekhowithrua-seo/app/blog/[slug]/page.tsx
// ============================================================

import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

// ✅ ADD THESE — forces Next.js to pre-render all slugs
export const dynamic = "force-static";
export const dynamicParams = false;

const POSTS = [
  {
    slug: "how-to-learn-machine-learning-india-2025",
    title: "How to Learn Machine Learning in India 2026 — Complete Roadmap",
    excerpt: "A practical, step-by-step roadmap to learn ML in India. From Python basics to getting your first ML job.",
    date: "2026-03-19", category: "AI/ML", color: "#00d4ff", readTime: "8 min read",
    content: `
## What is Machine Learning in 2026?

Machine Learning is the most in-demand skill in India right now. In 2026, every company — from startups to giants like Google, Microsoft, Flipkart and Zomato — is hiring ML engineers aggressively.

Average ML Engineer salary in India: ₹12L–₹40L per year. Remote roles paying in USD are common from Tier-2 cities.

## Why Learn ML in India in 2026?

India is becoming a global AI hub. The government's AI mission, the rise of Indian AI startups, and the explosion of remote work means you no longer need to be in Bangalore to get a high-paying ML job.

At SeekhowithRua, Master Rua (Sachin Kumar) has helped 1000+ students learn ML using the UEEP Model — Understand, Execute, Explain, Practice — the fastest way to go from zero to job-ready.

## The Complete ML Roadmap for 2026

### Step 1: Python Fundamentals (4–6 weeks)
Python is the language of ML. Learn variables, loops, functions, OOP, NumPy and Pandas. Do not skip this — a weak Python foundation will slow everything else down.

**Projects to build:** Calculator, To-Do app, CSV data analyser.

### Step 2: Math Foundations (3–4 weeks)
You need intuition, not heavy theory. Focus on Linear Algebra (vectors, matrices), Statistics (mean, variance, distributions) and basic Calculus (gradients). Khan Academy + 3Blue1Brown covers this perfectly.

### Step 3: Classical Machine Learning (6–8 weeks)
Learn Scikit-learn. Master these algorithms: Linear Regression, Logistic Regression, Decision Trees, Random Forests, SVM, K-Means Clustering, PCA.

**Build:** A house price predictor, a spam classifier, a customer segmentation model.

### Step 4: Deep Learning (8–10 weeks)
Pick PyTorch (preferred in 2026) or TensorFlow. Learn neural networks, CNNs for images, RNNs for sequences, and Transformers for NLP.

**Build:** An image classifier, a sentiment analyser, a simple LLM fine-tune.

### Step 5: MLOps & Deployment (4 weeks)
A model that isn't deployed is worthless. Learn FastAPI to serve models, Docker for containerisation, and MLflow for experiment tracking. Deploy to Render or AWS.

### Step 6: Portfolio + Job Hunt (ongoing)
Build 3–5 real projects. Deploy them live. Put them on GitHub with great READMEs. That beats 100 tutorial certificates every single time.

## Tools Every ML Engineer Uses in 2026

Python, PyTorch, Scikit-learn, Pandas, NumPy, FastAPI, Docker, MLflow, HuggingFace, LangChain, Jupyter, VS Code, Git.

## How SeekhowithRua Teaches ML Differently

Master Rua uses the visual cortex learning approach — animations, interactive demos, 3D visualisations of neural networks — so concepts stick permanently. No boring slides. No passive watching.

The UEEP Model means every concept is: Understood through visuals, Executed by coding, Explained by teaching others, and Practised daily.

## Final Advice from Master Rua

Do not just watch tutorials. Build something broken every single day. The fastest ML learners are the ones who ship ugly code early and fix it fast. Start today.
    `
  },
  {
    slug: "unity-vs-threejs-which-to-learn-first",
    title: "Unity vs Three.js: Which Game Engine Should You Learn First in 2026?",
    excerpt: "Confused between Unity and Three.js? Here's Master Rua's honest take based on your goals.",
    date: "2026-03-18", category: "Game Dev", color: "#f59e0b", readTime: "6 min read",
    content: `
## Unity vs Three.js in 2026 — The Real Difference

Both are powerful tools. But they solve different problems and suit different types of developers.

**Unity** is a complete game engine for desktop, mobile, console and VR/AR games. It uses C# and gives you physics, animations, lighting, asset pipelines and a visual editor out of the box.

**Three.js** is a JavaScript 3D library that runs in the browser. It is perfect for interactive web experiences, 3D product showcases, browser-based games and educational simulations.

## Choose Unity If...

You want to build downloadable mobile games for Android and iOS. You are interested in AR and VR development. You want to publish games on Steam or gaming consoles. You want a full visual editor with drag-and-drop scene building. You are willing to learn C# alongside game dev concepts.

Unity is the industry standard for professional game development in 2026. Most game studios use Unity or Unreal Engine.

## Choose Three.js If...

You are already a JavaScript or React developer and want to add 3D to your skill set. You want browser-based 3D that works instantly — no downloads, no app store. You are building 3D product visualisers, interactive portfolios or educational tools. You want to combine 3D with React using React Three Fiber, which is the best approach in 2026.

## The 2026 Landscape

Game development in India is growing fast. Indian gaming startups raised over $500M in 2025. Browser games and mobile games are the two biggest markets. Knowing either Unity or Three.js makes you hireable in this space.

## Master Rua's Recommendation

Start with Three.js if you are a web developer. You will ship a 3D project on day one and see results immediately. The learning curve is much lower if you already know JavaScript.

Start with Unity if your goal is professional game development — mobile games, desktop games or VR. The investment is higher but the career opportunities are bigger.

At SeekhowithRua, we teach both — starting with Three.js in the browser, then graduating to full Unity game development with C#. The Gaming Lab at gaming.seekhowithrua.com shows exactly what is possible with Three.js.

## Bottom Line

Both skills are valuable in 2026. Pick based on where you want to work — web or native games. You cannot go wrong with either.
    `
  },
  {
    slug: "how-to-get-20-lakh-tech-job-tier-2-city",
    title: "How to Get a ₹20L Tech Job from a Tier-2 City in India",
    excerpt: "You don't need to be in Bangalore. Here's the exact playbook Master Rua's students use.",
    date: "2026-03-17", category: "Career", color: "#1D9E75", readTime: "7 min read",
    content: `
## The Myth: You Need to Be in Bangalore to Get a High-Paying Tech Job

This is completely false in 2026. Remote work has permanently changed Indian tech hiring. Companies based in Bangalore, Mumbai, Hyderabad and even the USA are hiring engineers from Lucknow, Jaipur, Meerut, Patna and every Tier-2 city in India.

Master Rua's students from SeekhowithRua are proof. Here is the exact playbook they use.

## Step 1: Choose a High-Value Skill and Go Deep

Generalists get average salaries. Specialists get ₹20L+. In 2026, the highest-paying specialisations are: AI and ML Engineering, Full Stack Development with React and Django, Mobile Development with React Native, Data Science and Analytics, and DevOps and Cloud Engineering.

Pick one. Go deep. Build real things. Do not jump between skills every month.

## Step 2: Build a Portfolio That Proves Your Skill

Three deployed projects beats 100 tutorial completions every single time. Every project you build must be live on the internet with a real URL that anyone can visit.

Your GitHub profile is your resume. Every repo needs a good README with screenshots, tech stack, and a live demo link.

## Step 3: Optimise Your LinkedIn Profile

LinkedIn is the most powerful job-hunting tool for Indian developers in 2026. Your profile needs: a professional photo with good lighting, a headline that mentions your specific skills and that you are open to remote work, and at least three posts per week about what you are learning and building.

Recruiters search LinkedIn every day for candidates. If your profile is not optimised, you are invisible.

## Step 4: Apply Strategically and Consistently

Apply to 30–50 jobs per week. Use LinkedIn Easy Apply, AngelList and Wellfound for startups, and direct outreach to CTOs of small companies on LinkedIn.

For US client freelancing, use Upwork and Fiverr. Even one US client paying $25 per hour is ₹25,000 per day — more than most entry-level Indian salaries per month.

## Real Results from SeekhowithRua Students in 2026

Rahul from Lucknow got a ₹18L remote role at a Mumbai startup after 4 months of learning Full Stack at SeekhowithRua. Priya from Jaipur is freelancing for a US client at $25 per hour after completing the AI course. Arjun from Meerut got ₹22L at a Bangalore company — fully remote — after 6 months.

None of them moved cities. All of them built real projects and applied consistently.

## The SeekhowithRua Advantage

Master Rua teaches using the UEEP Model — every skill you learn is immediately deployed into a real project. By the time you finish any course on SeekhowithRua, you already have portfolio projects live on the internet.

That is the difference between getting hired and getting ignored.
    `
  },
  {
    slug: "python-roadmap-beginners-india-2025",
    title: "Python Learning Roadmap for Absolute Beginners in India 2026",
    excerpt: "Zero to job-ready Python developer in 6 months. The exact roadmap Master Rua uses.",
    date: "2026-03-16", category: "Python", color: "#ec4899", readTime: "6 min read",
    content: `
## Why Python is the Best First Language in 2026

Python is the number one programming language in the world in 2026. It powers AI and Machine Learning, Data Science, Web Development, Automation, Robotics and more. Learn one language well — make it Python.

SeekhowithRua's Python course by Master Rua (Sachin Kumar) has helped over 1000 students in India go from zero programming knowledge to job-ready developers.

## Month 1: Python Basics

Learn variables, data types, operators, if-else conditions, loops, functions, lists, dictionaries and tuples. Then learn file input-output and error handling.

**Projects to build this month:** A to-do list app, a simple calculator, a number guessing game, a basic text file reader.

**Goal:** You should be able to write a 100-line Python program without Googling basic syntax.

## Month 2: Intermediate Python

Learn object-oriented programming — classes, inheritance and polymorphism. Learn modules, packages, virtual environments. Learn the requests library to call APIs. Learn regular expressions for text processing.

**Project:** Build a weather app that calls a real API and displays current weather for any city.

## Month 3: Choose Your Path

At this point you have the fundamentals. Now specialise.

**Path A — AI and Data Science:** Learn NumPy, Pandas, Matplotlib, then Scikit-learn for machine learning. This path leads to ML Engineer and Data Scientist roles.

**Path B — Web Development:** Learn Django or FastAPI, PostgreSQL and REST API design. This path leads to Backend Developer roles.

**Path C — Automation:** Learn Selenium for browser automation, BeautifulSoup for web scraping, and schedule for task automation. This path leads to QA Automation and DevOps roles.

## Month 4 to 6: Build and Deploy

Build three real projects in your chosen path. Deploy all of them live. Put them on GitHub with good READMEs. Start applying to jobs or freelancing platforms.

## The Number One Mistake Python Beginners Make

Watching tutorials without typing a single line of code. You cannot learn programming by watching. Close the video. Open VS Code. Write every line yourself. Make mistakes. Fix them. That is how Python actually enters your brain.

Master Rua's UEEP Model is built on this principle — Understand through visuals, Execute by coding yourself, Explain to someone else, Practice every day.
    `
  },
  {
    slug: "react-native-expo-guide-2025",
    title: "Expo Managed vs Bare Workflow: Which Should You Use in 2026?",
    excerpt: "The eternal question for React Native developers. A clear, practical answer.",
    date: "2026-03-15", category: "Mobile", color: "#a855f7", readTime: "5 min read",
    content: `
## The Question Every React Native Developer Asks in 2026

When you start a new React Native project with Expo, you choose between Managed Workflow and Bare Workflow. This single decision affects your entire development experience. Here is the definitive answer for 2026.

## Expo Managed Workflow

In Managed Workflow, Expo handles all native iOS and Android code for you. You never open Xcode. You never touch Android Studio. You write JavaScript and React. Expo handles the rest.

**Advantages:** Extremely fast setup — you are coding in under 5 minutes. Over-the-air updates with EAS Update — push bug fixes without App Store approval. EAS Build handles cloud builds for both platforms. Massive SDK with camera, maps, notifications, biometrics and more built in.

**Limitations:** You are limited to what the Expo SDK provides. Some very specific native libraries may not work without customisation.

**Best for:** 90 percent of apps — social apps, e-commerce, educational apps, tools and dashboards.

## Expo Bare Workflow

In Bare Workflow, you have full access to the native iOS and Android code. You can install any native library, write custom native modules in Swift, Kotlin or C++, and have complete control over the build process.

**Advantages:** Total flexibility. Any native library works. Full control over app behaviour.

**Limitations:** You manage native builds yourself. Setup takes much longer. You need to understand iOS and Android development to debug native issues.

**Best for:** Apps that need Bluetooth Low Energy, custom hardware integrations, highly specific native features, or performance-critical native modules.

## What Changed in 2026: EAS Makes Managed Workflow Even Better

EAS (Expo Application Services) has completely changed the game. Even Managed Workflow projects can now use custom native modules through Config Plugins, build production-ready apps for App Store and Play Store without touching native code, and manage signing certificates automatically.

In 2026, the gap between Managed and Bare has narrowed significantly.

## Master Rua's Rule for React Native in 2026

Start with Managed Workflow. Ship your app. If you hit a wall with a native feature you cannot access, migrate to Bare at that point. The vast majority of apps — including complex production apps — never need to leave Managed Workflow.

SeekhowithRua's Mobile App Development course teaches Expo Managed Workflow first, then covers Bare Workflow for advanced use cases. By the end, you can build and publish a real app to both the App Store and Play Store.
    `
  },
];

function getPost(slug: string) {
  return POSTS.find(p => p.slug === slug) || null;
}

export async function generateStaticParams() {
  return POSTS.map(p => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = getPost(params.slug);
  if (!post) return { title: "Post Not Found" };
  return {
    title: `${post.title} | SeekhowithRua Blog`,
    description: post.excerpt,
    keywords: [
      post.category.toLowerCase(),
      "master rua",
      "seekhowithrua",
      "sachin kumar",
      "learn coding india 2026",
      post.title.toLowerCase(),
    ],
    alternates: {
      canonical: `https://seekhowithrua.com/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://seekhowithrua.com/blog/${post.slug}`,
      type: "article",
      publishedTime: post.date,
    },
  };
}

function renderContent(content: string) {
  const lines = content.trim().split("\n");
  const out: React.ReactNode[] = [];
  let i = 0;
  while (i < lines.length) {
    const line = lines[i].trim();
    if (!line) { i++; continue; }
    if (line.startsWith("## ")) {
      out.push(<h2 key={i} className="ph2">{line.slice(3)}</h2>);
    } else if (line.startsWith("### ")) {
      out.push(<h3 key={i} className="ph3">{line.slice(4)}</h3>);
    } else if (line.startsWith("- ")) {
      const items: string[] = [];
      while (i < lines.length && lines[i].trim().startsWith("- ")) {
        items.push(lines[i].trim().slice(2));
        i++;
      }
      out.push(
        <ul key={`ul${i}`} className="pul">
          {items.map((t, j) => <li key={j}>{t}</li>)}
        </ul>
      );
      continue;
    } else {
      const parts = line.split(/\*\*(.*?)\*\*/g);
      out.push(
        <p key={i} className="pp">
          {parts.map((p, j) => j % 2 === 0 ? p : <strong key={j}>{p}</strong>)}
        </p>
      );
    }
    i++;
  }
  return out;
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug);
  if (!post) notFound();

  const related = POSTS.filter(p => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: post.title,
            description: post.excerpt,
            datePublished: post.date,
            author: { "@type": "Person", name: "Sachin Kumar (Master Rua)" },
            publisher: { "@type": "Organization", name: "SeekhowithRua" },
            url: `https://seekhowithrua.com/blog/${post.slug}`,
          }),
        }}
      />

      <div className="pp-page">
        <div className="pp-back-row">
          <Link href="/blog" className="pp-back">← All Posts</Link>
        </div>

        <article className="pp-art">
          <header className="pp-hd">
            <div className="pp-cat" style={{ color: post.color }}>{post.category}</div>
            <h1 className="pp-h1">{post.title}</h1>
            <p className="pp-ex">{post.excerpt}</p>
            <div className="pp-meta">
              <div className="pp-author">
                <div className="pp-av">MR</div>
                <div>
                  <div className="pp-aname">Sachin Kumar (Master Rua)</div>
                  <div className="pp-arole">AI/ML Trainer · Full Stack Dev · SeekhowithRua</div>
                </div>
              </div>
              <div className="pp-dates">{post.date} · {post.readTime}</div>
            </div>
          </header>

          <div className="pp-div" style={{ borderColor: post.color + "40" }} />
          <div className="pp-body">{renderContent(post.content)}</div>

          <div className="pp-cta" style={{ borderColor: post.color + "40" }}>
            <div>
              <div className="pp-cta-t">Learn this in depth with Master Rua 🚀</div>
              <div className="pp-cta-s">Join 1000+ students on SeekhowithRua — India's unique learning platform</div>
            </div>
            <a
              href="https://app.seekhowithrua.com"
              className="pp-cta-btn"
              style={{ background: `linear-gradient(135deg,${post.color},#7c3aed)` }}
            >
              Start Learning Free →
            </a>
          </div>
        </article>

        {related.length > 0 && (
          <div className="pp-rel">
            <div className="pp-rel-lbl">MORE FROM MASTER RUA</div>
            <div className="pp-rel-grid">
              {related.map(p => (
                <Link key={p.slug} href={`/blog/${p.slug}`} className="pp-rc">
                  <div className="pp-rc-cat" style={{ color: p.color }}>{p.category}</div>
                  <div className="pp-rc-title">{p.title}</div>
                  <div className="pp-rc-meta">{p.date} · {p.readTime}</div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@600;700&family=JetBrains+Mono:wght@400;500&family=Exo+2:wght@400;500;600&display=swap');
        .pp-page{min-height:100vh;background:#04040f;color:#e2e8f0;font-family:'Exo 2',sans-serif;padding-bottom:80px}
        .pp-back-row{max-width:820px;margin:0 auto;padding:24px 40px 0}
        .pp-back{font-family:'JetBrains Mono',monospace;font-size:12px;color:rgba(255,255,255,.4);text-decoration:none;transition:color .2s}
        .pp-back:hover{color:#7c3aed}
        .pp-art{max-width:820px;margin:0 auto;padding:32px 40px}
        .pp-cat{font-family:'JetBrains Mono',monospace;font-size:10px;letter-spacing:3px;text-transform:uppercase;margin-bottom:16px}
        .pp-h1{font-family:'Syne',sans-serif;font-size:clamp(26px,4vw,42px);font-weight:700;color:#fff;line-height:1.2;margin-bottom:16px}
        .pp-ex{font-size:16px;color:rgba(255,255,255,.55);line-height:1.8;margin-bottom:24px}
        .pp-meta{display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:16px}
        .pp-author{display:flex;align-items:center;gap:12px}
        .pp-av{width:40px;height:40px;border-radius:50%;background:linear-gradient(135deg,#7c3aed,#00d4ff);display:flex;align-items:center;justify-content:center;font-family:'Syne',sans-serif;font-size:13px;font-weight:700;color:#fff;flex-shrink:0}
        .pp-aname{font-family:'Syne',sans-serif;font-size:14px;font-weight:700;color:#fff}
        .pp-arole{font-family:'JetBrains Mono',monospace;font-size:10px;color:rgba(255,255,255,.35)}
        .pp-dates{font-family:'JetBrains Mono',monospace;font-size:11px;color:rgba(255,255,255,.35)}
        .pp-div{border:none;border-top:1px solid;margin:32px 0}
        .pp-body{line-height:1.8}
        .ph2{font-family:'Syne',sans-serif;font-size:24px;font-weight:700;color:#fff;margin:36px 0 14px;padding-bottom:8px;border-bottom:1px solid rgba(255,255,255,.08)}
        .ph3{font-family:'Syne',sans-serif;font-size:19px;font-weight:700;color:rgba(255,255,255,.9);margin:24px 0 10px}
        .pp{font-size:15px;color:rgba(255,255,255,.7);line-height:1.9;margin-bottom:16px}
        .pp strong{color:#fff}
        .pul{padding-left:22px;margin-bottom:20px;display:flex;flex-direction:column;gap:8px}
        .pul li{font-size:15px;color:rgba(255,255,255,.65);line-height:1.7}
        .pp-cta{display:flex;align-items:center;justify-content:space-between;gap:20px;margin-top:48px;padding:28px;border:1px solid;border-radius:14px;background:rgba(124,58,237,.05);flex-wrap:wrap}
        .pp-cta-t{font-family:'Syne',sans-serif;font-size:17px;font-weight:700;color:#fff;margin-bottom:4px}
        .pp-cta-s{font-size:12px;color:rgba(255,255,255,.4);font-family:'JetBrains Mono',monospace}
        .pp-cta-btn{padding:12px 24px;border-radius:8px;color:#fff;font-family:'Syne',sans-serif;font-size:14px;font-weight:700;text-decoration:none;white-space:nowrap;transition:opacity .2s}
        .pp-cta-btn:hover{opacity:.85}
        .pp-rel{max-width:820px;margin:48px auto 0;padding:0 40px}
        .pp-rel-lbl{font-family:'JetBrains Mono',monospace;font-size:9px;letter-spacing:4px;color:rgba(255,255,255,.3);margin-bottom:20px}
        .pp-rel-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:14px}
        .pp-rc{display:flex;flex-direction:column;gap:8px;padding:20px;border:1px solid rgba(255,255,255,.07);border-radius:10px;background:rgba(10,10,30,.6);text-decoration:none;color:inherit;transition:all .2s}
        .pp-rc:hover{border-color:#7c3aed;transform:translateY(-2px)}
        .pp-rc-cat{font-family:'JetBrains Mono',monospace;font-size:9px;letter-spacing:2px;text-transform:uppercase}
        .pp-rc-title{font-family:'Syne',sans-serif;font-size:14px;font-weight:700;color:#fff;line-height:1.4;flex:1}
        .pp-rc-meta{font-family:'JetBrains Mono',monospace;font-size:10px;color:rgba(255,255,255,.3)}
        @media(max-width:600px){.pp-art,.pp-back-row,.pp-rel{padding-left:20px;padding-right:20px}.pp-cta{flex-direction:column}}
      `}</style>
    </>
  );
}