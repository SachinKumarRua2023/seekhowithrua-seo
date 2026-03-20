// ═══════════════════════════════════════════════════════════════
// REPO FILE:  seekhowithrua-seo/app/sitemap.ts
// ACTION:     REPLACE existing sitemap.ts with this file
// ═══════════════════════════════════════════════════════════════

// ============================================================
// FILE LOCATION: seekhowithrua-seo/app/sitemap.ts
// ACTION: REPLACE existing sitemap.ts
// ============================================================

import type { MetadataRoute } from "next";
import { ALL_COURSES } from "@/lib/courses";
import { getPostSlugs } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://seekhowithrua.com";
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: base, lastModified: now, priority: 1, changeFrequency: "daily" },
    { url: `${base}/blog`, lastModified: now, priority: 0.9, changeFrequency: "daily" },
    { url: `${base}/login`, lastModified: now, priority: 0.5, changeFrequency: "monthly" },
    { url: `${base}/signup`, lastModified: now, priority: 0.6, changeFrequency: "monthly" },

    // ── Master Rua ───────────────────────────────────────────────────────────
    { url: `${base}/master-rua`, lastModified: now, priority: 0.85, changeFrequency: "weekly" },

    // ── Voice Rooms ──────────────────────────────────────────────────────────
    { url: `${base}/voice-rooms`, lastModified: now, priority: 0.9, changeFrequency: "weekly" },

    // ── Gaming Lab ───────────────────────────────────────────────────────────
    { url: `${base}/gaming-lab`, lastModified: now, priority: 0.9, changeFrequency: "weekly" },
    { url: `${base}/gaming-lab/memory-game`, lastModified: now, priority: 0.8, changeFrequency: "weekly" },
    { url: `${base}/gaming-lab/quiz-battle`, lastModified: now, priority: 0.8, changeFrequency: "weekly" },
    { url: `${base}/gaming-lab/hatim-quest`, lastModified: now, priority: 0.8, changeFrequency: "weekly" },

    // ── Animation Lab ────────────────────────────────────────────────────────
    { url: `${base}/animation-lab`, lastModified: now, priority: 0.9, changeFrequency: "weekly" },
    { url: `${base}/animation-lab/data-science`, lastModified: now, priority: 0.75, changeFrequency: "monthly" },
    { url: `${base}/animation-lab/ai-course`, lastModified: now, priority: 0.75, changeFrequency: "monthly" },
    { url: `${base}/animation-lab/full-stack-development`, lastModified: now, priority: 0.75, changeFrequency: "monthly" },
    { url: `${base}/animation-lab/game-development`, lastModified: now, priority: 0.75, changeFrequency: "monthly" },
    { url: `${base}/animation-lab/python-programming-course`, lastModified: now, priority: 0.75, changeFrequency: "monthly" },
    { url: `${base}/animation-lab/iot-robotics`, lastModified: now, priority: 0.75, changeFrequency: "monthly" },
    { url: `${base}/animation-lab/mobile-app-development`, lastModified: now, priority: 0.75, changeFrequency: "monthly" },
    { url: `${base}/animation-lab/web-development-course`, lastModified: now, priority: 0.75, changeFrequency: "monthly" },

    // ── Services ─────────────────────────────────────────────────────────────
    { url: `${base}/services`, lastModified: now, priority: 0.9, changeFrequency: "weekly" },
    { url: `${base}/services/game-development`, lastModified: now, priority: 0.8, changeFrequency: "monthly" },
    { url: `${base}/services/web-app-development`, lastModified: now, priority: 0.8, changeFrequency: "monthly" },
    { url: `${base}/services/mobile-app-development`, lastModified: now, priority: 0.8, changeFrequency: "monthly" },
  ];

  const courseRoutes: MetadataRoute.Sitemap = Object.entries(ALL_COURSES).flatMap(([slug, course]) => [
    { url: `${base}/${slug}`, lastModified: now, priority: 0.9, changeFrequency: "weekly" as const },
    { url: `${base}/courses/${slug}`, lastModified: now, priority: 0.8, changeFrequency: "weekly" as const },
    ...course.modules.flatMap(m => m.chapters.map(ch => ({
      url: `${base}/courses/${slug}/${ch.id}`,
      lastModified: now,
      priority: 0.7,
      changeFrequency: "monthly" as const,
    }))),
  ]);

  const dsExtra: MetadataRoute.Sitemap = [
    { url: `${base}/data-science-course`, lastModified: now, priority: 0.9, changeFrequency: "weekly" },
    { url: `${base}/mobile-app-development`, lastModified: now, priority: 0.9, changeFrequency: "weekly" },
  ];

  // ── 5 new blog posts — added manually since getPostSlugs() may not pick them up immediately ──
  const newBlogRoutes: MetadataRoute.Sitemap = [
    { url: `${base}/blog/memory-enhancement-game-online-india-2026`, lastModified: now, priority: 0.8, changeFrequency: "weekly" as const },
    { url: `${base}/blog/free-fire-style-study-game-india-2026`, lastModified: now, priority: 0.8, changeFrequency: "weekly" as const },
    { url: `${base}/blog/3d-animation-data-science-course-india-2026`, lastModified: now, priority: 0.8, changeFrequency: "weekly" as const },
    { url: `${base}/blog/hire-game-developer-india-2026`, lastModified: now, priority: 0.8, changeFrequency: "weekly" as const },
    { url: `${base}/blog/live-voice-chat-room-it-students-india-2026`, lastModified: now, priority: 0.8, changeFrequency: "weekly" as const },
  ];

  const blogRoutes: MetadataRoute.Sitemap = getPostSlugs().map(slug => ({
    url: `${base}/blog/${slug}`,
    lastModified: now,
    priority: 0.75,
    changeFrequency: "monthly" as const,
  }));

  return [...staticRoutes, ...courseRoutes, ...dsExtra, ...newBlogRoutes, ...blogRoutes];
}