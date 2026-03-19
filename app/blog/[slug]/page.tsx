// ============================================================
// FILE LOCATION: seekhowithrua-seo/app/blog/[slug]/page.tsx
// STEP 1: Inside "app/blog" folder, CREATE a new folder called "[slug]"
//         NOTE: The folder name must have square brackets: [slug]
// STEP 2: Inside "[slug]" folder, CREATE a file called "page.tsx"
// STEP 3: Paste this entire file content inside page.tsx
// ============================================================

import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPostBySlug, getPostSlugs, getAllPosts } from "@/lib/blog";

export async function generateStaticParams() {
  return getPostSlugs().map(slug => ({ slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = getPostBySlug(params.slug);
  if (!post) return { title: "Post Not Found" };
  return {
    title: `${post.title} | SeekhowithRua Blog`,
    description: post.excerpt,
    keywords: post.keywords,
    alternates: { canonical: `https://seekhowithrua.com/blog/${post.slug}` },
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
  const elements: React.ReactNode[] = [];
  let i = 0;
  while (i < lines.length) {
    const line = lines[i].trim();
    if (!line) { i++; continue; }
    if (line.startsWith("## ")) {
      elements.push(<h2 key={i} className="post-h2">{line.slice(3)}</h2>);
    } else if (line.startsWith("### ")) {
      elements.push(<h3 key={i} className="post-h3">{line.slice(4)}</h3>);
    } else if (line.startsWith("- ")) {
      const items: string[] = [];
      while (i < lines.length && lines[i].trim().startsWith("- ")) {
        items.push(lines[i].trim().slice(2));
        i++;
      }
      elements.push(<ul key={`ul-${i}`} className="post-ul">{items.map((item, j) => <li key={j}>{item}</li>)}</ul>);
      continue;
    } else if (/^\d+\./.test(line)) {
      const items: string[] = [];
      while (i < lines.length && /^\d+\./.test(lines[i].trim())) {
        items.push(lines[i].trim().replace(/^\d+\.\s*/, ""));
        i++;
      }
      elements.push(<ol key={`ol-${i}`} className="post-ol">{items.map((item, j) => <li key={j}>{item}</li>)}</ol>);
      continue;
    } else {
      const parts = line.split(/\*\*(.*?)\*\*/g);
      elements.push(
        <p key={i} className="post-p">
          {parts.map((part, j) => j % 2 === 0 ? part : <strong key={j}>{part}</strong>)}
        </p>
      );
    }
    i++;
  }
  return elements;
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  const allPosts = getAllPosts();
  const related = allPosts.filter(p => p.slug !== post.slug && p.category === post.category).slice(0, 3);
  const others = allPosts.filter(p => p.slug !== post.slug && p.category !== post.category).slice(0, 3 - related.length);
  const suggestions = [...related, ...others];

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

      <div className="post-page">
        <div className="post-back-wrap">
          <Link href="/blog" className="post-back">← All Posts</Link>
        </div>

        <article className="post-article">
          <header className="post-header">
            <div className="post-cat" style={{ color: post.color }}>{post.category}</div>
            <h1 className="post-h1">{post.title}</h1>
            <p className="post-excerpt">{post.excerpt}</p>
            <div className="post-meta">
              <div className="post-author">
                <div className="author-avatar">MR</div>
                <div>
                  <div className="author-name">Sachin Kumar (Master Rua)</div>
                  <div className="author-role">AI/ML Trainer · Full Stack Dev</div>
                </div>
              </div>
              <div className="post-dates">
                <span>{post.date}</span><span>·</span><span>{post.readTime}</span>
              </div>
            </div>
          </header>

          <div className="post-divider" style={{ borderColor: post.color + "40" }} />
          <div className="post-body">{renderContent(post.content)}</div>

          <div className="post-cta" style={{ borderColor: post.color + "40" }}>
            <div>
              <div className="cta-title">Learn this topic in depth 🚀</div>
              <div className="cta-sub">Join 1000+ students on the SeekhowithRua platform</div>
            </div>
            <a href="https://app.seekhowithrua.com" className="cta-btn"
              style={{ background: `linear-gradient(135deg, ${post.color}, #7c3aed)` }}>
              Start Learning Free →
            </a>
          </div>
        </article>

        {suggestions.length > 0 && (
          <div className="related-section">
            <div className="related-label">MORE FROM THE BLOG</div>
            <div className="related-grid">
              {suggestions.map(p => (
                <Link key={p.slug} href={`/blog/${p.slug}`} className="related-card">
                  <div className="rc-cat" style={{ color: p.color }}>{p.category}</div>
                  <div className="rc-title">{p.title}</div>
                  <div className="rc-meta">{p.date} · {p.readTime}</div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@600;700&family=JetBrains+Mono:wght@400;500&family=Exo+2:wght@400;500;600&display=swap');
        .post-page{min-height:100vh;background:#04040f;color:#e2e8f0;font-family:'Exo 2',sans-serif;padding-bottom:80px}
        .post-back-wrap{max-width:820px;margin:0 auto;padding:24px 40px 0}
        .post-back{font-family:'JetBrains Mono',monospace;font-size:12px;color:rgba(255,255,255,0.4);text-decoration:none;transition:color 0.2s}
        .post-back:hover{color:#7c3aed}
        .post-article{max-width:820px;margin:0 auto;padding:32px 40px}
        .post-cat{font-family:'JetBrains Mono',monospace;font-size:10px;letter-spacing:3px;text-transform:uppercase;margin-bottom:16px}
        .post-h1{font-family:'Rajdhani',sans-serif;font-size:clamp(28px,4vw,44px);font-weight:700;color:#fff;line-height:1.2;margin-bottom:16px}
        .post-excerpt{font-size:16px;color:rgba(255,255,255,0.55);line-height:1.8;margin-bottom:24px}
        .post-meta{display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:16px}
        .post-author{display:flex;align-items:center;gap:12px}
        .author-avatar{width:40px;height:40px;border-radius:50%;background:linear-gradient(135deg,#7c3aed,#00d4ff);display:flex;align-items:center;justify-content:center;font-family:'Rajdhani',sans-serif;font-size:13px;font-weight:700;color:#fff;flex-shrink:0}
        .author-name{font-family:'Rajdhani',sans-serif;font-size:14px;font-weight:700;color:#fff}
        .author-role{font-family:'JetBrains Mono',monospace;font-size:10px;color:rgba(255,255,255,0.35)}
        .post-dates{font-family:'JetBrains Mono',monospace;font-size:11px;color:rgba(255,255,255,0.35);display:flex;gap:6px}
        .post-divider{border:none;border-top:1px solid;margin:32px 0}
        .post-body{line-height:1.8}
        .post-h2{font-family:'Rajdhani',sans-serif;font-size:26px;font-weight:700;color:#fff;margin:36px 0 14px;padding-bottom:8px;border-bottom:1px solid rgba(255,255,255,0.08)}
        .post-h3{font-family:'Rajdhani',sans-serif;font-size:20px;font-weight:700;color:rgba(255,255,255,0.9);margin:24px 0 10px}
        .post-p{font-size:15px;color:rgba(255,255,255,0.7);line-height:1.9;margin-bottom:16px}
        .post-p strong{color:#fff}
        .post-ul,.post-ol{padding-left:24px;margin-bottom:20px;display:flex;flex-direction:column;gap:8px}
        .post-ul li,.post-ol li{font-size:15px;color:rgba(255,255,255,0.65);line-height:1.7}
        .post-cta{display:flex;align-items:center;justify-content:space-between;gap:20px;margin-top:48px;padding:28px;border:1px solid;border-radius:14px;background:rgba(124,58,237,0.05);flex-wrap:wrap}
        .cta-title{font-family:'Rajdhani',sans-serif;font-size:18px;font-weight:700;color:#fff;margin-bottom:4px}
        .cta-sub{font-size:12px;color:rgba(255,255,255,0.4);font-family:'JetBrains Mono',monospace}
        .cta-btn{padding:12px 24px;border-radius:8px;color:#fff;font-family:'Rajdhani',sans-serif;font-size:14px;font-weight:700;text-decoration:none;white-space:nowrap;transition:opacity 0.2s}
        .cta-btn:hover{opacity:0.85}
        .related-section{max-width:820px;margin:48px auto 0;padding:0 40px}
        .related-label{font-family:'JetBrains Mono',monospace;font-size:9px;letter-spacing:4px;color:rgba(255,255,255,0.3);margin-bottom:20px}
        .related-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:14px}
        .related-card{display:flex;flex-direction:column;gap:8px;padding:20px;border:1px solid rgba(255,255,255,0.07);border-radius:10px;background:rgba(10,10,30,0.6);text-decoration:none;color:inherit;transition:all 0.2s}
        .related-card:hover{border-color:#7c3aed;transform:translateY(-2px)}
        .rc-cat{font-family:'JetBrains Mono',monospace;font-size:9px;letter-spacing:2px;text-transform:uppercase}
        .rc-title{font-family:'Rajdhani',sans-serif;font-size:14px;font-weight:700;color:#fff;line-height:1.4;flex:1}
        .rc-meta{font-family:'JetBrains Mono',monospace;font-size:10px;color:rgba(255,255,255,0.3)}
        @media(max-width:600px){.post-article,.post-back-wrap,.related-section{padding-left:20px;padding-right:20px}.post-cta{flex-direction:column}}
      `}</style>
    </>
  );
}