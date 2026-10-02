import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { formatDate, getAllPosts, getPost } from "@/lib/blog";
import { APP_ID, JsonLd, ORGANIZATION_ID, SITE_URL, breadcrumbSchema, faqSchema } from "@/lib/seo";
import { mdxComponents } from "@/components/site/mdx";
import { FaqList } from "@/components/site/FaqList";
import { PostCard } from "@/components/site/LatestGuides";
import { Breadcrumbs, FinalCta } from "@/components/site/blocks";

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      url: `/blog/${post.slug}`,
      publishedTime: post.date,
      modifiedTime: post.updated ?? post.date,
    },
  };
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Guides", path: "/blog" },
    { name: post.title, path: `/blog/${post.slug}` },
  ];
  const related = getAllPosts()
    .filter((p) => p.slug !== post.slug)
    .slice(0, 3);
  const article = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.updated ?? post.date,
    mainEntityOfPage: `${SITE_URL}/blog/${post.slug}`,
    author: { "@type": "Organization", name: post.author, url: SITE_URL },
    publisher: { "@id": ORGANIZATION_ID },
    about: { "@id": APP_ID },
    image: `${SITE_URL}/blog/${post.slug}/opengraph-image`,
  };

  return (
    <>
      <JsonLd data={[article, breadcrumbSchema(crumbs), ...(post.faqs?.length ? [faqSchema(post.faqs)] : [])]} />
      <article>
        <header className="relative overflow-hidden border-b border-line">
          <div className="lab-grid pointer-events-none absolute inset-0" />
          <div className="relative mx-auto max-w-3xl px-5 pb-14 pt-12 sm:px-8 sm:pt-16">
            <Breadcrumbs items={crumbs.slice(0, 2)} />
            <p className="label mt-8 text-cyan-400">{post.category}</p>
            <h1 className="mt-4 text-[38px] font-bold leading-[1.08] tracking-tight text-white sm:text-[52px]">{post.title}</h1>
            <p className="mt-5 text-[18px] leading-relaxed text-fog-200">{post.description}</p>
            <p className="mt-7 flex flex-wrap gap-x-5 gap-y-1 font-mono text-[11px] uppercase tracking-label text-fog-400">
              <span>{post.author}</span>
              <span>
                {post.updated ? "Updated " : "Published "}
                <time dateTime={post.updated ?? post.date}>{formatDate(post.updated ?? post.date)}</time>
              </span>
              <span>{post.readingMinutes} min read</span>
            </p>
          </div>
        </header>
        <div className="prose-lab mx-auto max-w-3xl px-5 py-12 sm:px-8">
          <MDXRemote source={post.body} components={mdxComponents} options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }} />
        </div>
        {post.faqs?.length ? (
          <section className="mx-auto max-w-3xl px-5 pb-16 sm:px-8">
            <h2 className="mb-6 font-display text-[30px] font-bold uppercase tracking-tight text-white">Questions</h2>
            <FaqList faqs={post.faqs} />
          </section>
        ) : null}
      </article>
      {related.length > 0 && (
        <section className="border-t border-line">
          <div className="wrap py-20">
            <p className="label">Keep reading</p>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {related.map((p) => (
                <PostCard key={p.slug} {...p} />
              ))}
            </div>
          </div>
        </section>
      )}
      <FinalCta where={`blog-${post.slug}`} />
    </>
  );
}
