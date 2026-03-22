  // ============================================================
  // FILE LOCATION: seekhowithrua-seo/app/courses/[course]/page.tsx
  // STEP 1: Inside "app" folder, CREATE a new folder called "courses"
  // STEP 2: Inside "courses" folder, CREATE a folder called "[course]"
  //         NOTE: folder name must have square brackets exactly: [course]
  // STEP 3: Inside "[course]" folder, CREATE a file called "page.tsx"
  // STEP 4: Paste this entire file content inside page.tsx
  // ============================================================

  import type { Metadata } from "next";
  import Link from "next/link";
  import { notFound } from "next/navigation";
  import { ALL_COURSES } from "@/lib/courses";

  export async function generateStaticParams() {
    return Object.keys(ALL_COURSES).map(course => ({ course }));
  }

  export async function generateMetadata({ params }: { params: Promise<{ course: string }> }): Promise<Metadata> {
    const { course } = await params;
    const courseData = ALL_COURSES[course];
    if (!courseData) return { title: "Course Not Found" };
    return {
      title: `${courseData.title} Course Curriculum | SeekhowithRua`,
      description: courseData.description,
      keywords: courseData.keywords,
      alternates: { canonical: `https://seekhowithrua.com/courses/${course}` },
      openGraph: {
        title: `${courseData.title} | SeekhowithRua`,
        description: courseData.description,
        url: `https://seekhowithrua.com/courses/${course}`,
        type: "website",
      },
    };
  }

  export default async function CourseOverviewPage({ params }: { params: Promise<{ course: string }> }) {
    const { course } = await params;
    const courseData = ALL_COURSES[course];
    if (!courseData) notFound();

    return (
      <>
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Course",
            name: `${courseData.title} Course`,
            description: courseData.description,
            provider: { "@type": "Organization", name: "SeekhowithRua" },
            url: `https://seekhowithrua.com/courses/${course}`,
          }),
        }} />

        <div style={{ minHeight: "100vh", background: "#04040f", color: "#e2e8f0", padding: "80px 40px 60px", fontFamily: "'Exo 2', sans-serif" }}>
          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            <Link href={`/${courseData.slug}`} style={{ color: courseData.color, textDecoration: "none", fontSize: 13, fontFamily: "monospace" }}>
              ← Back to {courseData.title} Course
            </Link>

            <h1 style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: "clamp(28px,4vw,44px)", fontWeight: 700, color: "#fff", margin: "20px 0 12px" }}>
              {courseData.icon} {courseData.title} — Full Curriculum
            </h1>
            <p style={{ fontSize: 14, color: "rgba(255,255,255,0.5)", lineHeight: 1.8, marginBottom: 40, fontFamily: "monospace" }}>
              {courseData.description}
            </p>

            {courseData.modules.map(mod => (
              <div key={mod.id} style={{ marginBottom: 32, padding: "24px", border: "1px solid rgba(255,255,255,0.07)", borderLeft: `4px solid ${mod.color}`, borderRadius: 14, background: "rgba(10,10,30,0.6)" }}>
                <h2 style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: 20, fontWeight: 700, color: mod.color, marginBottom: 16 }}>
                  {mod.icon} {mod.title}
                </h2>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px,1fr))", gap: 10 }}>
                  {mod.chapters.map(ch => (
                    <Link key={ch.id} href={`/courses/${course}/${ch.id}`}
                      style={{ display: "block", padding: "12px 14px", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 8, background: "rgba(255,255,255,0.02)", textDecoration: "none", color: "#e2e8f0", fontSize: 13, transition: "all 0.2s" }}>
                      <div style={{ color: mod.color, fontSize: 10, fontFamily: "monospace", marginBottom: 4 }}>{ch.topics.length} topics</div>
                      <div style={{ fontWeight: 600 }}>{ch.title}</div>
                      <div style={{ fontSize: 11, color: "rgba(255,255,255,0.35)", marginTop: 4, fontFamily: "monospace" }}>
                        {ch.topics.slice(0, 2).join(" · ")}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}

            <div style={{ marginTop: 40, padding: "28px", border: `1px solid ${courseData.color}40`, borderRadius: 14, background: `${courseData.color}08`, textAlign: "center" }}>
              <h3 style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: 20, color: "#fff", marginBottom: 8 }}>
                Ready to start learning?
              </h3>
              <p style={{ fontSize: 13, color: "rgba(255,255,255,0.45)", marginBottom: 20, fontFamily: "monospace" }}>
                Join 1000+ students on the SeekhowithRua platform
              </p>
              <a href="https://app.seekhowithrua.com"
                style={{ display: "inline-block", padding: "12px 28px", borderRadius: 8, background: `linear-gradient(135deg,${courseData.color},#7c3aed)`, color: "#fff", fontFamily: "'Rajdhani', sans-serif", fontSize: 14, fontWeight: 700, textDecoration: "none" }}>
                Start Learning Free →
              </a>
            </div>
          </div>
        </div>
      </>
    );
  }