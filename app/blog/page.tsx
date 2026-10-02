import type { Metadata } from "next";
import { getAllPosts } from "@/lib/blog";
import { JsonLd, SITE_URL, breadcrumbSchema } from "@/lib/seo";
import { PostCard } from "@/components/site/LatestGuides";
import { FinalCta, SectionHead } from "@/components/site/blocks";

const HAS_POSTS = getAllPosts().length > 0;

export const metadata: Metadata = {
  robots: HAS_POSTS ? undefined : { index: false, follow: true },
  title: "Disc Golf Form Guides: Technique, Distance & Drills",
  description:
    "Practical disc golf guides on form, distance, backhand and forehand technique, filming your throw and drills, from the team behind Disc Golf Form Analyzer.",
  alternates: { canonical: "/blog", types: { "application/rss+xml": "/blog/rss.xml" } },
  openGraph: { title: "Disc golf form guides", url: "/blog" },
};

export default function BlogIndex() {
  const posts = getAllPosts();
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Guides", path: "/blog" },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "Blog",
            name: "Disc Golf Form Analyzer Guides",
            url: `${SITE_URL}/blog`,
            blogPost: posts.map((p) => ({ "@type": "BlogPosting", headline: p.title, url: `${SITE_URL}/blog/${p.slug}`, datePublished: p.date })),
          },
        ]}
      />
      <section className="relative overflow-hidden">
        <div className="lab-grid pointer-events-none absolute inset-0" />
        <div className="wrap relative pb-16 pt-14 sm:pt-20">
          <SectionHead
            as="h1"
            label="Guides"
            title={<>Fix your form, <span className="text-gradient">one fault at a time.</span></>}
            intro="Straight answers on disc golf technique: what each fault looks like, why it costs you distance, and how to fix it."
          />
        </div>
      </section>
      <section className="wrap pb-28">
        {posts.length ? (
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((p) => (
              <PostCard key={p.slug} {...p} />
            ))}
          </div>
        ) : (
          <div className="panel p-10 text-center text-fog-400">The first guides are on their way.</div>
        )}
      </section>
      <FinalCta where="blog-index" />
    </>
  );
}
