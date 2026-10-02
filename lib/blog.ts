// Blog posts live in content/blog/<slug>.mdx with frontmatter. Read at build time (the blog is
// fully static). Frontmatter:
//   title, description (meta, ~150 chars), date (YYYY-MM-DD), updated? (YYYY-MM-DD),
//   author (display name), category, readingMinutes?, faqs? [{question, answer}], draft?
import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const DIR = path.join(process.cwd(), "content", "blog");
// Drafts (frontmatter `draft: true`) render with `npm run dev` only, never in production builds.
const SHOW_DRAFTS = process.env.NODE_ENV === "development";

export type PostMeta = {
  slug: string;
  title: string;
  description: string;
  date: string;
  updated?: string;
  author: string;
  category: string;
  readingMinutes: number;
  faqs?: { question: string; answer: string }[];
  draft?: boolean;
};

export type Post = PostMeta & { body: string };

function readPost(file: string): Post {
  const raw = fs.readFileSync(path.join(DIR, file), "utf8");
  const { data, content } = matter(raw);
  const words = content.split(/\s+/).filter(Boolean).length;
  return {
    slug: file.replace(/\.mdx?$/, ""),
    title: String(data.title),
    description: String(data.description),
    date: String(data.date),
    updated: data.updated ? String(data.updated) : undefined,
    author: data.author ? String(data.author) : "Tushar Saini",
    category: data.category ? String(data.category) : "Technique",
    readingMinutes: Number(data.readingMinutes) || Math.max(3, Math.round(words / 230)),
    faqs: Array.isArray(data.faqs) ? data.faqs : undefined,
    draft: Boolean(data.draft),
    body: content,
  };
}

export function getAllPosts(): PostMeta[] {
  if (!fs.existsSync(DIR)) return [];
  return fs
    .readdirSync(DIR)
    .filter((f) => /\.mdx?$/.test(f))
    .map(readPost)
    .filter((p) => !p.draft || SHOW_DRAFTS)
    .sort((a, b) => (a.date < b.date ? 1 : -1))
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    .map(({ body, ...meta }) => meta);
}

export function getPost(slug: string): Post | null {
  for (const ext of [".mdx", ".md"]) {
    const f = slug + ext;
    if (fs.existsSync(path.join(DIR, f))) {
      const p = readPost(f);
      return p.draft && !SHOW_DRAFTS ? null : p;
    }
  }
  return null;
}

export function formatDate(iso: string) {
  return new Date(iso + "T12:00:00Z").toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}
