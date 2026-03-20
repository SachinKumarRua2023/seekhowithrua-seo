// ============================================================
// FILE LOCATION: seekhowithrua-seo/app/sitemap.ts
// ACTION: REPLACE the existing sitemap.ts inside app/
// NOTE: This auto-generates 200+ URLs for Google Search Console
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

    // ── Voice Rooms (VCR) — high priority for all keyword clusters ──
    { url: `${base}/voice-rooms`, lastModified: now, priority: 0.9, changeFrequency: "weekly" },
    // Alternate slugs — catch searchers using different terms
    // These can be simple redirects in next.config.js pointing to /voice-rooms
    // OR individual pages if you want unique content per cluster
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

  const blogRoutes: MetadataRoute.Sitemap = getPostSlugs().map(slug => ({
    url: `${base}/blog/${slug}`,
    lastModified: now,
    priority: 0.75,
    changeFrequency: "monthly" as const,
  }));

  return [...staticRoutes, ...courseRoutes, ...dsExtra, ...blogRoutes];
}