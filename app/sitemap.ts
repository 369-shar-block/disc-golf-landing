import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";
import { getAllPosts } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const page = (path: string, priority: number, changeFrequency: "weekly" | "monthly" | "yearly" = "monthly") => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
    changeFrequency,
    priority,
  });
  return [
    page("", 1, "weekly"),
    page("/features/pose-estimation", 0.9),
    page("/features/3d-throw", 0.9),
    page("/features/ai-analysis", 0.8),
    page("/features/caddie", 0.7),
    page("/compare", 0.8),
    page("/blog", 0.8, "weekly"),
    ...getAllPosts().map((p) => ({
      url: `${SITE_URL}/blog/${p.slug}`,
      lastModified: new Date((p.updated ?? p.date) + "T12:00:00Z"),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    page("/privacy", 0.2, "yearly"),
    page("/terms", 0.2, "yearly"),
  ];
}
