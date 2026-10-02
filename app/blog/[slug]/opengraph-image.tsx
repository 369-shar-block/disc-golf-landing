import { ogCard, OG_SIZE } from "@/lib/og";
import { getAllPosts, getPost } from "@/lib/blog";

export const size = OG_SIZE;
export const contentType = "image/png";
export const alt = "Disc Golf Form Analyzer guide";

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  return ogCard({ label: post?.category ?? "Guide", title: post?.title ?? "Disc golf form guide", foot: "dgformanalyzer.com/blog" });
}
