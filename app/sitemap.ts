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

  // ── Blog posts added manually since getPostSlugs() may not pick them up immediately ──
  // ONLY ADDITION vs original: 20 new slugs appended after the original 5
  const newBlogRoutes: MetadataRoute.Sitemap = [
    // ── original 5 (unchanged) ───────────────────────────────────────────────
    { url: `${base}/blog/memory-enhancement-game-online-india-2026`,    lastModified: now, priority: 0.8, changeFrequency: "weekly" as const },
    { url: `${base}/blog/free-fire-style-study-game-india-2026`,         lastModified: now, priority: 0.8, changeFrequency: "weekly" as const },
    { url: `${base}/blog/3d-animation-data-science-course-india-2026`,   lastModified: now, priority: 0.8, changeFrequency: "weekly" as const },
    { url: `${base}/blog/hire-game-developer-india-2026`,                lastModified: now, priority: 0.8, changeFrequency: "weekly" as const },
    { url: `${base}/blog/live-voice-chat-room-it-students-india-2026`,   lastModified: now, priority: 0.8, changeFrequency: "weekly" as const },
    // ── 20 new slugs added ───────────────────────────────────────────────────
    { url: `${base}/blog/why-seekhowithrua-bundle-course-is-best-india-global-2026`, lastModified: now, priority: 0.8, changeFrequency: "weekly" as const },
    { url: `${base}/blog/it-layoff-2026-india-ai-rider-not-runner`,                  lastModified: now, priority: 0.8, changeFrequency: "weekly" as const },
    { url: `${base}/blog/chanakya-niti-ai-job-survival-india-2026`,                  lastModified: now, priority: 0.8, changeFrequency: "weekly" as const },
    { url: `${base}/blog/bruce-lee-wrong-2026-be-versatile-developer`,               lastModified: now, priority: 0.8, changeFrequency: "weekly" as const },
    { url: `${base}/blog/seekhowithrua-bundle-course-fullstack-ai-ml-iot-2026`,      lastModified: now, priority: 0.8, changeFrequency: "weekly" as const },
    { url: `${base}/blog/be-a-rider-not-a-runner-master-rua-manifesto-2026`,         lastModified: now, priority: 0.8, changeFrequency: "weekly" as const },
    { url: `${base}/blog/voice-chat-room-tech-india-2026`,                           lastModified: now, priority: 0.8, changeFrequency: "weekly" as const },
    { url: `${base}/blog/jee-mains-result-2026-python-data-science`,                 lastModified: now, priority: 0.8, changeFrequency: "weekly" as const },
    { url: `${base}/blog/10th-result-2026-coding-career-india`,                      lastModified: now, priority: 0.8, changeFrequency: "weekly" as const },
    { url: `${base}/blog/bihar-board-12th-result-2026-tech-career`,                  lastModified: now, priority: 0.8, changeFrequency: "weekly" as const },
    { url: `${base}/blog/gta-6-game-development-career-india-2026`,                  lastModified: now, priority: 0.8, changeFrequency: "weekly" as const },
    { url: `${base}/blog/gold-price-silver-price-fintech-python-2026`,               lastModified: now, priority: 0.8, changeFrequency: "weekly" as const },
    { url: `${base}/blog/samsung-galaxy-s25-ultra-android-dev-2026`,                 lastModified: now, priority: 0.8, changeFrequency: "weekly" as const },
    { url: `${base}/blog/comet-space-science-python-simulation-2026`,                lastModified: now, priority: 0.8, changeFrequency: "weekly" as const },
    { url: `${base}/blog/world-water-day-2026-iot-tech-india`,                       lastModified: now, priority: 0.8, changeFrequency: "weekly" as const },
    { url: `${base}/blog/navami-march-2026-india-tech-startup`,                      lastModified: now, priority: 0.8, changeFrequency: "weekly" as const },
    { url: `${base}/blog/best-python-course-india-2026-free`,                        lastModified: now, priority: 0.8, changeFrequency: "weekly" as const },
    { url: `${base}/blog/best-data-science-course-india-2026`,                       lastModified: now, priority: 0.8, changeFrequency: "weekly" as const },
    { url: `${base}/blog/best-machine-learning-course-india-2026`,                   lastModified: now, priority: 0.8, changeFrequency: "weekly" as const },
    { url: `${base}/blog/best-ai-course-india-free-2026`,                            lastModified: now, priority: 0.8, changeFrequency: "weekly" as const },
    { url: `${base}/blog/hire-ai-trainer-usa-2026`,                                   lastModified: now, priority: 0.8, changeFrequency: "weekly" as const },
  ];

  const blogRoutes: MetadataRoute.Sitemap = getPostSlugs().map(slug => ({
    url: `${base}/blog/${slug}`,
    lastModified: now,
    priority: 0.75,
    changeFrequency: "monthly" as const,
  }));

  return [...staticRoutes, ...courseRoutes, ...dsExtra, ...newBlogRoutes, ...blogRoutes];
}