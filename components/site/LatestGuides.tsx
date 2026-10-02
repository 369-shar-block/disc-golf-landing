import Link from "next/link";
import { getAllPosts, formatDate } from "@/lib/blog";
import { Arrow, SectionHead } from "./blocks";

export function PostCard({ slug, title, description, date, category, readingMinutes }: ReturnType<typeof getAllPosts>[number]) {
  return (
    <Link href={`/blog/${slug}`} className="panel group flex h-full flex-col p-7 transition-colors hover:border-white/15 hover:bg-white/[0.04]">
      <p className="label flex items-center gap-3">
        <span className="text-cyan-400">{category}</span>
        <span className="text-fog-600">{readingMinutes} min</span>
      </p>
      <h3 className="mt-5 text-[21px] font-semibold leading-snug text-white">{title}</h3>
      <p className="mt-3 flex-1 text-[15px] leading-relaxed text-fog-400">{description}</p>
      <p className="mt-6 flex items-center justify-between text-[13px] text-fog-600">
        <time dateTime={date}>{formatDate(date)}</time>
        <span className="inline-flex items-center gap-1.5 text-cyan-400">
          Read <Arrow />
        </span>
      </p>
    </Link>
  );
}

// Home-page teaser. Renders nothing until there are posts.
export function LatestGuides() {
  const posts = getAllPosts().slice(0, 3);
  if (!posts.length) return null;
  return (
    <section data-section="guides" className="border-t border-line">
      <div className="wrap py-24 sm:py-32">
        <SectionHead label="Guides" title={<>Fix your form, <span className="text-gradient">one fault at a time.</span></>} />
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {posts.map((p) => (
            <PostCard key={p.slug} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
}
