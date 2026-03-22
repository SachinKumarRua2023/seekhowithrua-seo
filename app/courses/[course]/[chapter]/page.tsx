// ============================================================
// FILE LOCATION: seekhowithrua-seo/app/courses/[course]/[chapter]/page.tsx
// STEP 1: Inside "app/courses/[course]" folder, CREATE a folder called "[chapter]"
//         NOTE: folder name must have square brackets exactly: [chapter]
// STEP 2: Inside "[chapter]" folder, CREATE a file called "page.tsx"
// STEP 3: Paste this entire file content inside page.tsx
// ============================================================

import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ALL_COURSES } from "@/lib/courses";

export async function generateStaticParams() {
  const params: { course: string; chapter: string }[] = [];
  Object.entries(ALL_COURSES).forEach(([courseSlug, course]) => {
    course.modules.forEach(mod => {
      mod.chapters.forEach(ch => {
        params.push({ course: courseSlug, chapter: ch.id });
      });
    });
  });
  return params;
}

export async function generateMetadata({ params }: { params: Promise<{ course: string; chapter: string }> }): Promise<Metadata> {
  const { course: courseSlug, chapter: chapterId } = await params;
  const course = ALL_COURSES[courseSlug];
  if (!course) return { title: "Not Found" };
  const chapter = course.modules.flatMap(m => m.chapters).find(c => c.id === chapterId);
  if (!chapter) return { title: "Not Found" };
  return {
    title: `${chapter.title} | ${course.title} | SeekhowithRua`,
    description: `Learn ${chapter.title} in our ${course.title} course. Topics: ${chapter.topics.join(", ")}.`,
    keywords: [chapter.title, course.title, ...chapter.topics, ...course.keywords],
    alternates: { canonical: `https://seekhowithrua.com/courses/${courseSlug}/${chapterId}` },
    openGraph: {
      title: `${chapter.title} | SeekhowithRua`,
      description: `Learn ${chapter.title}. Topics: ${chapter.topics.join(", ")}.`,
      url: `https://seekhowithrua.com/courses/${courseSlug}/${chapterId}`,
      type: "article",
    },
  };
}

export default async function ChapterSEOPage({ params }: { params: Promise<{ course: string; chapter: string }> }) {
  const { course: courseSlug, chapter: chapterId } = await params;
  const course = ALL_COURSES[courseSlug];
  if (!course) notFound();

  const mod = course.modules.find(m => m.chapters.some(c => c.id === chapterId));
  const chapter = course.modules.flatMap(m => m.chapters).find(c => c.id === chapterId);
  if (!chapter || !mod) notFound();

  const allChapters = course.modules.flatMap(m => m.chapters);
  const idx = allChapters.findIndex(c => c.id === chapterId);
  const prev = idx > 0 ? allChapters[idx - 1] : null;
  const next = idx < allChapters.length - 1 ? allChapters[idx + 1] : null;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: chapter.title,
          description: `Learn ${chapter.title}. Topics: ${chapter.topics.join(", ")}.`,
          author: { "@type": "Person", name: "Sachin Kumar (Master Rua)" },
          publisher: { "@type": "Organization", name: "SeekhowithRua" },
          url: `https://seekhowithrua.com/courses/${courseSlug}/${chapterId}`,
          isPartOf: { "@type": "Course", name: course.title, url: `https://seekhowithrua.com/${course.slug}` },
        }),
      }} />

      <div style={{ minHeight: "100vh", background: "#04040f", color: "#e2e8f0", fontFamily: "'Exo 2', sans-serif" }}>
        {/* Breadcrumb */}
        <div style={{ padding: "24px 40px", borderBottom: "1px solid rgba(255,255,255,0.06)", display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap", background: "rgba(4,4,15,0.97)", fontSize: 12, fontFamily: "monospace" }}>
          <Link href={`/${course.slug}`} style={{ color: "rgba(255,255,255,0.4)", textDecoration: "none" }}>{course.icon} {course.title}</Link>
          <span style={{ color: "rgba(255,255,255,0.2)" }}>›</span>
          <Link href={`/courses/${courseSlug}`} style={{ color: "rgba(255,255,255,0.4)", textDecoration: "none" }}>{mod.title}</Link>
          <span style={{ color: "rgba(255,255,255,0.2)" }}>›</span>
          <span style={{ color: "#fff" }}>{chapter.title}</span>
        </div>

        <div style={{ maxWidth: 860, margin: "0 auto", padding: "48px 40px 80px" }}>
          {/* Header */}
          <div style={{ fontFamily: "monospace", fontSize: 10, letterSpacing: 3, color: mod.color, textTransform: "uppercase", marginBottom: 8 }}>
            {mod.icon} {mod.title}
          </div>
          <h1 style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: "clamp(26px,4vw,40px)", fontWeight: 700, color: "#fff", marginBottom: 16, lineHeight: 1.2 }}>
            {chapter.title}
          </h1>
          <p style={{ fontSize: 14, color: "rgba(255,255,255,0.5)", lineHeight: 1.9, marginBottom: 36, fontFamily: "monospace" }}>
            Master <strong style={{ color: "#fff" }}>{chapter.title}</strong> — part of the {course.title} curriculum at SeekhowithRua.
            Topics: {chapter.topics.join(", ")}.
          </p>

          {/* Topics Grid */}
          <h2 style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: 20, color: "#fff", marginBottom: 16 }}>What You'll Learn</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px,1fr))", gap: 10, marginBottom: 40 }}>
            {chapter.topics.map((t, i) => (
              <div key={i} style={{ padding: "12px 14px", border: "1px solid rgba(255,255,255,0.07)", borderLeft: `3px solid ${mod.color}`, borderRadius: 8, background: "rgba(255,255,255,0.02)" }}>
                <div style={{ color: mod.color, fontSize: 10, fontFamily: "monospace", marginBottom: 4 }}>{String(i + 1).padStart(2, "0")}</div>
                <div style={{ fontSize: 13, color: "rgba(255,255,255,0.8)" }}>{t}</div>
              </div>
            ))}
          </div>

          {/* Content Sections */}
          {[
            { title: "📖 Overview", body: `${chapter.title} is a fundamental concept in ${course.title}. You'll learn through theory, examples and quizzes.` },
            { title: "🎯 Learning Goals", body: `After this chapter you will be able to: ${chapter.topics.map(t => `implement ${t}`).join(", ")}.` },
            { title: "🔗 Continue on Platform", body: `For full video lessons and community support, visit app.seekhowithrua.com. Master Rua teaches every concept step by step using the UEEP model.` },
          ].map((s, i) => (
            <div key={i} style={{ padding: "20px", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 12, background: "rgba(255,255,255,0.02)", marginBottom: 16 }}>
              <h3 style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: 16, color: "#fff", marginBottom: 10 }}>{s.title}</h3>
              <p style={{ fontSize: 14, color: "rgba(255,255,255,0.55)", lineHeight: 1.8, margin: 0 }}>{s.body}</p>
            </div>
          ))}

          {/* CTA */}
          <div style={{ padding: "28px", border: `2px solid ${mod.color}40`, borderRadius: 14, background: `${mod.color}08`, display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16, flexWrap: "wrap", marginBottom: 40 }}>
            <div>
              <div style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: 17, fontWeight: 700, color: "#fff", marginBottom: 4 }}>
                Practice {chapter.title} on the Platform
              </div>
              <div style={{ fontSize: 12, color: "rgba(255,255,255,0.4)", fontFamily: "monospace" }}>
                Video lessons · Live coding · Quizzes · Community
              </div>
            </div>
            <a href="https://app.seekhowithrua.com"
              style={{ padding: "12px 24px", borderRadius: 8, background: `linear-gradient(135deg,${mod.color},#7c3aed)`, color: "#fff", fontFamily: "'Rajdhani', sans-serif", fontSize: 14, fontWeight: 700, textDecoration: "none", whiteSpace: "nowrap" }}>
              Start Learning →
            </a>
          </div>

          {/* Prev / Next Navigation */}
          <div style={{ display: "flex", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}>
            {prev ? (
              <Link href={`/courses/${courseSlug}/${prev.id}`}
                style={{ padding: "12px 18px", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 8, background: "rgba(255,255,255,0.03)", textDecoration: "none", color: "rgba(255,255,255,0.7)", fontSize: 13 }}>
                ← {prev.title}
              </Link>
            ) : <div />}
            {next && (
              <Link href={`/courses/${courseSlug}/${next.id}`}
                style={{ padding: "12px 18px", border: `1px solid ${mod.color}40`, borderRadius: 8, background: `${mod.color}10`, textDecoration: "none", color: mod.color, fontSize: 13, fontWeight: 600 }}>
                {next.title} →
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
}