// ============================================================
// FILE LOCATION: seekhowithrua-seo/lib/blog.ts
// CREATE the "lib" folder at the ROOT of seekhowithrua-seo
// (same level as "app" and "components" folders)
// ============================================================

export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  color: string;
  readTime: string;
  content: string;
  keywords?: string[];
}

const POSTS: Post[] = [
  {
    slug: "how-to-learn-machine-learning-india-2025",
    title: "How to Learn Machine Learning in India 2025 — Complete Roadmap",
    excerpt: "A practical, step-by-step roadmap to learn Machine Learning in India in 2025. From Python basics to getting your first ML job.",
    date: "2025-03-19",
    category: "AI/ML",
    color: "#00d4ff",
    readTime: "8 min read",
    keywords: ["machine learning india 2025", "ml roadmap india", "learn ai india"],
    content: `
## What is Machine Learning?

Machine Learning is a branch of AI where computers learn patterns from data without being explicitly programmed for every task. In 2025, ML is the most in-demand skill in India's tech industry.

## Why Learn ML in India Right Now?

- Average ML Engineer salary: ₹12L–₹40L per year
- Companies like Google, Microsoft, Flipkart, Zomato are hiring
- India is becoming a global AI hub

## The Complete Roadmap

### Step 1: Python Fundamentals (4–6 weeks)
Start with Python. Learn variables, loops, functions, and OOP. Use NumPy and Pandas daily.

### Step 2: Math Foundations (3–4 weeks)
Linear Algebra, Statistics, and basic Calculus concepts — not heavy theory, just intuition.

### Step 3: Classical ML (6–8 weeks)
Learn Scikit-learn. Practice Linear Regression, Decision Trees, Random Forests, SVM.

### Step 4: Deep Learning (8–10 weeks)
Pick TensorFlow or PyTorch. Learn neural networks, CNNs, RNNs, and Transformers.

### Step 5: Projects + Portfolio (ongoing)
Build 3–5 real projects. Deploy them. Put them on GitHub. This is what gets you hired.

## Final Tip from Master Rua

"Don't just watch tutorials. Build something broken every day. That's how you actually learn."
    `,
  },
  {
    slug: "unity-vs-threejs-which-to-learn-first",
    title: "Unity vs Three.js: Which Game Engine Should You Learn First in 2025?",
    excerpt: "Confused between Unity and Three.js for game development? Here's Master Rua's honest take on which to pick based on your goals.",
    date: "2025-03-18",
    category: "Game Dev",
    color: "#f59e0b",
    readTime: "6 min read",
    keywords: ["unity vs threejs", "game development course india", "learn unity india"],
    content: `
## Unity vs Three.js — The Real Difference

Both are powerful. But they're built for different things.

**Unity** is a full game engine for desktop, mobile, console games. C# language. Best for 3D games with complex physics.

**Three.js** is a JavaScript 3D library for the browser. Great for web-based 3D experiences and browser games.

## Choose Unity If...
- You want to build mobile games (Android/iOS)
- You want to publish to Steam or consoles
- You're interested in AR/VR development

## Choose Three.js If...
- You're already a web developer
- You want browser-based 3D experiences
- You want to build games that run instantly without download

## Master Rua's Recommendation

**Start with Three.js if you're a web developer.** You'll ship faster and see results on day 1.

**Start with Unity if you want to build actual games** that people download on their phones.

At SeekhowithRua, we teach both — starting with Three.js basics, then moving to full Unity game development.
    `,
  },
  {
    slug: "how-to-get-20-lakh-tech-job-tier-2-city",
    title: "How to Get a ₹20L Tech Job from a Tier-2 City in India",
    excerpt: "You don't need to be in Bangalore. Here's the exact playbook Master Rua's students use to land high-paying tech jobs from anywhere in India.",
    date: "2025-03-17",
    category: "Career",
    color: "#1D9E75",
    readTime: "7 min read",
    keywords: ["tech job india tier 2 city", "remote tech job india", "high paying tech job india"],
    content: `
## The Myth: You Need to Be in Bangalore

Wrong. In 2025, companies are hiring remotely. US startups are paying Indian engineers in USD.

## The Playbook

### 1. Pick a High-Value Skill
- AI/ML Engineering
- Full Stack (React + Django)
- Mobile Development (React Native)
- Data Science

### 2. Build a Portfolio That Talks
3 deployed projects beats 100 tutorial completions. Deploy everything. Show real work.

### 3. LinkedIn Optimization
- Professional photo
- Headline: "AI/ML Engineer | React Native | Open to Remote"
- Post 3x per week about what you're learning

### 4. Apply Strategically
- AngelList / Wellfound for startups
- LinkedIn Easy Apply (50+ per week)
- Toptal, Upwork for freelancing

## Real Student Results

- Rahul from Lucknow: ₹18L at a Mumbai startup (remote)
- Priya from Jaipur: Freelancing for a US client at $25/hr
- Arjun from Meerut: ₹22L at a Bangalore company (fully remote)

All students of SeekhowithRua. All started from zero.
    `,
  },
  {
    slug: "python-roadmap-beginners-india-2025",
    title: "Python Learning Roadmap for Absolute Beginners in India 2025",
    excerpt: "Zero to job-ready Python developer in 6 months. This is the exact roadmap Master Rua uses to teach 1000+ students.",
    date: "2025-03-16",
    category: "Python",
    color: "#ec4899",
    readTime: "6 min read",
    keywords: ["python roadmap india 2025", "learn python india", "python course beginners india"],
    content: `
## Why Python in 2025?

Python is the #1 language for AI, Data Science, Automation, and Web Development. If you learn only one language — make it Python.

## Month 1: Python Basics
- Variables, data types, operators
- if/else, loops, functions
- Lists, dictionaries, tuples
- File I/O and error handling

**Goal:** Build a To-Do app, a calculator, a simple text game.

## Month 2: Intermediate Python
- OOP (classes, inheritance, polymorphism)
- Modules and packages
- Regular expressions
- APIs with requests library

**Goal:** Build a weather app that hits a real API.

## Month 3: Choose Your Path

**Path A: Data Science/ML** → NumPy, Pandas, Matplotlib, Scikit-learn

**Path B: Web Dev** → Django or FastAPI, PostgreSQL, REST APIs

**Path C: Automation** → Selenium, BeautifulSoup, automation scripts

## Month 4–6: Build and Deploy
- Build 3 real projects
- Deploy to Render / Vercel
- Start applying for jobs

## The #1 Mistake Beginners Make

Watching tutorials without coding along. Close the video. Open VS Code. Type every line.
    `,
  },
  {
    slug: "react-native-expo-guide-2025",
    title: "Expo Managed vs Bare Workflow: Which Should You Use in 2025?",
    excerpt: "The eternal question for React Native developers. Here's a clear, practical answer based on real app development experience.",
    date: "2025-03-15",
    category: "Mobile",
    color: "#a855f7",
    readTime: "5 min read",
    keywords: ["expo managed vs bare workflow", "react native expo 2025", "expo eas build"],
    content: `
## The Short Answer

**Use Managed Workflow** unless you have a specific reason not to.

## Managed Workflow

Expo handles all native code for you. You never touch Xcode or Android Studio.

**Pros:** Fast setup, OTA updates, EAS Build, huge SDK.
**Cons:** Limited to Expo SDK.

**Best for:** Most apps — social apps, e-commerce, tools, education apps.

## Bare Workflow

You have full access to native iOS and Android code directly.

**Pros:** Full native access, any library works.
**Cons:** You manage native builds yourself.

**Best for:** Apps needing Bluetooth, custom native modules, or very specific native features.

## Master Rua's Rule

Start with Managed. Migrate to Bare only when you hit a wall. 90% of apps never need Bare workflow.

## 2025 Update: EAS Changes Everything

With Expo Application Services (EAS), even Managed workflow apps can build for App Store and Play Store, use custom native modules via Config Plugins, and handle complex app signing automatically.
    `,
  },
];

export function getAllPosts(): Post[] {
  return POSTS.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostBySlug(slug: string): Post | null {
  return POSTS.find(p => p.slug === slug) || null;
}

export function getPostSlugs(): string[] {
  return POSTS.map(p => p.slug);
}

// ============================================================
// HOW TO ADD A NEW BLOG POST:
// 1. Add a new object to the POSTS array above
// 2. Fill in: slug, title, excerpt, date, category, color, readTime, content
// 3. git add . && git commit -m "blog: your post title" && git push
// 4. Vercel auto-deploys in ~30 seconds ✅
// ============================================================