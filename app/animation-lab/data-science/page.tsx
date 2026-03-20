// ═══════════════════════════════════════════════════════════════
// REPO FILE:  seekhowithrua-seo/app/animation-lab/data-science/page.tsx
// LIVE URL:   https://seekhowithrua.com/animation-lab/data-science
// ACTION:     Create this file (new folder + new file — never existed before)
// ═══════════════════════════════════════════════════════════════

import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Data Science Animations — 3D Visual Learning | SeekhoWithRua",
  description: "Learn Data Science through 3D animations and visual explainers. See neural network forward pass animated in your browser. Free visual learning for school, college & IT students India.",
  keywords: "animated data science course India, visual machine learning tutorial, 3D neural network animation, animated ML course online, data science animation India, visual data science learning, 3D statistics animation, animated Python data course, visual pandas tutorial India, machine learning 3D explainer",
  openGraph: {
    title: "Data Science — 3D Animated Course | SeekhoWithRua",
    description: "See Data Science concepts animated in 3D. Visual learning that makes complex ideas click instantly.",
    url: "https://seekhowithrua.com/animation-lab/data-science",
    siteName: "SeekhoWithRua",
    type: "website",
  },
  alternates: { canonical: "https://seekhowithrua.com/animation-lab/data-science" },
};

const ANIMATIONS = [
  {
    "name": "Neural network forward pass",
    "desc": "Watch weights activate layer by layer as data flows through a deep network in real time."
  },
  {
    "name": "Gradient descent visualised",
    "desc": "A 3D loss surface with a ball rolling to the minimum. Change the learning rate and watch the path change."
  },
  {
    "name": "Decision tree splits",
    "desc": "See how each split divides the feature space into regions. Visualise overfitting and pruning."
  },
  {
    "name": "Confusion matrix live",
    "desc": "A 2D animated heatmap that updates as the model trains. Precision, recall, F1 all shown spatially."
  },
  {
    "name": "PCA dimensionality reduction",
    "desc": "3D data cloud rotated and projected into 2D. Watch variance explained change in real time."
  },
  {
    "name": "K-means clustering",
    "desc": "Data points animated into clusters. Watch centroids move until convergence."
  }
];

export default function AnimationPage() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap');
        :root{--c:#7c3aed;--fg:#1a1a2e;--fg2:#5a5a72;--bg:#fafaf8;--card:#fff;--border:rgba(0,0,0,.08);--font:'Syne',sans-serif;--mono:'JetBrains Mono',monospace}
        @media(prefers-color-scheme:dark){:root{--fg:#e8e8f0;--fg2:#9090a8;--bg:#0f0f1a;--card:#181828;--border:rgba(255,255,255,.08)}}
        .p *{box-sizing:border-box;margin:0;padding:0}
        .p{font-family:var(--font);background:var(--bg);color:var(--fg);line-height:1.6}
        .hero{padding:72px 24px 56px;text-align:center;position:relative;overflow:hidden}
        .hero::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse 60% 40% at 50% 0%,color-mix(in srgb,#7c3aed 15%,transparent) 0%,transparent 70%);pointer-events:none}
        .breadcrumb{font-family:var(--mono);font-size:11px;color:var(--fg2);margin-bottom:20px;display:flex;gap:6px;justify-content:center;align-items:center}
        .breadcrumb a{color:var(--fg2);text-decoration:none}.breadcrumb a:hover{color:var(--fg)}
        .h1{font-size:clamp(1.9rem,4.5vw,3.4rem);font-weight:800;line-height:1.1;letter-spacing:-.03em;margin:0 auto 16px;max-width:740px}
        .accent{color:var(--c)}
        .sub{font-size:clamp(.95rem,2vw,1.1rem);color:var(--fg2);max-width:560px;margin:0 auto 30px;line-height:1.7}
        .cta-row{display:flex;gap:12px;justify-content:center;flex-wrap:wrap}
        .btn-p{display:inline-flex;align-items:center;gap:8px;background:var(--c);color:#fff;font-family:var(--font);font-weight:700;font-size:15px;padding:13px 28px;border-radius:10px;text-decoration:none;transition:opacity .15s,transform .15s}
        .btn-p:hover{opacity:.88;transform:translateY(-1px)}
        .btn-o{display:inline-flex;align-items:center;gap:8px;background:var(--card);color:var(--fg);font-family:var(--font);font-weight:600;font-size:15px;padding:13px 28px;border-radius:10px;text-decoration:none;border:1px solid var(--border);transition:opacity .15s,transform .15s}
        .btn-o:hover{opacity:.8;transform:translateY(-1px)}
        .sec{max-width:1080px;margin:0 auto;padding:52px 24px}
        .sec-label{font-family:var(--mono);font-size:11px;letter-spacing:.1em;color:var(--c);text-transform:uppercase;margin-bottom:8px}
        .sec-title{font-size:clamp(1.4rem,3vw,2rem);font-weight:800;letter-spacing:-.03em;margin-bottom:6px}
        .sec-sub{font-size:.95rem;color:var(--fg2);max-width:520px;margin-bottom:32px;line-height:1.7}
        .divider{height:1px;background:var(--border);max-width:1080px;margin:0 auto}
        .anim-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:14px}
        .anim-card{background:var(--card);border:1px solid var(--border);border-radius:12px;padding:22px;border-left:3px solid var(--c)}
        .anim-title{font-size:.95rem;font-weight:700;margin-bottom:6px}
        .anim-desc{font-size:.85rem;color:var(--fg2);line-height:1.6}
        .bottom{text-align:center;padding:64px 24px;background:var(--card);border-top:1px solid var(--border)}
        .bottom h2{font-size:clamp(1.4rem,3vw,2rem);font-weight:800;letter-spacing:-.03em;margin-bottom:12px}
        .bottom p{font-size:.95rem;color:var(--fg2);max-width:440px;margin:0 auto 28px;line-height:1.7}
        .back{font-family:var(--mono);font-size:11px;color:var(--fg2);padding:20px 24px;display:block;max-width:1080px;margin:0 auto}
        .back a{color:var(--fg2);text-decoration:none}.back a:hover{color:var(--fg)}
      `}</style>
      <main className="p">
        <div className="back"><Link href="/animation-lab">← Back to Animation Lab</Link></div>
        <section className="hero">
          <div className="breadcrumb"><Link href="/animation-lab">Animation Lab</Link> / Data Science</div>
          <h1 className="h1">See <span className="accent">data science</span> before you code it</h1>
          <p className="sub">Neural networks, gradient descent, loss curves, decision trees — all animated in 3D before you write a single line of Python.</p>
          <div className="cta-row">
            <a href="https://animationlab.seekhowithrua.com/data-science" className="btn-p" target="_blank" rel="noopener noreferrer">Watch Animations →</a>
            <Link href="/data-science-course" className="btn-o">Go to Data Science Course</Link>
          </div>
        </section>
        <div className="divider" />
        <section className="sec">
          <p className="sec-label">Animations included</p>
          <h2 className="sec-title">6 concepts you&apos;ll see in 3D</h2>
          <p className="sec-sub">Each animation runs in your browser. No video player — live WebGL rendered in real time.</p>
          <div className="anim-grid">
            {ANIMATIONS.map(a => (
              <div key={a.name} className="anim-card">
                <h3 className="anim-title">{a.name}</h3>
                <p className="anim-desc">{a.desc}</p>
              </div>
            ))}
          </div>
        </section>
        <div className="divider" />
        <section className="sec">
          <p className="sec-label">UEEP model — step 1</p>
          <h2 className="sec-title">Understand before you build</h2>
          <p className="sec-sub">The UEEP model starts with visual understanding. These animations are the Understand step — before any code, before any exercise, the concept must click visually.</p>
          <div style={{display:"flex",gap:12,flexWrap:"wrap",marginTop:8}}>
            {["Understand (visual first)", "Execute (write the code)", "Explain (teach someone)", "Practice (spaced repetition)"].map((step, i) => (
              <div key={step} style={{padding:"10px 18px",borderRadius:999,border:"1px solid var(--border)",background:i===0?"var(--c)":"var(--card)",color:i===0?"#fff":"var(--fg2)",fontSize:13,fontWeight:i===0?700:400}}>
                {step}
              </div>
            ))}
          </div>
        </section>
        <div className="bottom">
          <h2>Watch the Data Science animations</h2>
          <p>Open Animation Lab and select Data Science to start watching. Free, no sign-up needed.</p>
          <div className="cta-row">
            <a href="https://animationlab.seekhowithrua.com/data-science" className="btn-p" target="_blank" rel="noopener noreferrer">Open Animations →</a>
            <Link href="/data-science-course" className="btn-o">Start Data Science Course →</Link>
          </div>
        </div>
      </main>
    </>
  );
}