import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRenderer } from "@/components/MDXRenderer";
import { getAllPosts, getPostBySlug } from "@/lib/posts";

type Props = {
  params: { slug: string };
};

export const generateMetadata = ({ params }: Props): Metadata => {
  const posts = getAllPosts();
  const post = posts.find((item) => item.slug === params.slug);

  if (!post) {
    return { title: "Note" };
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: `${post.title} | Lara Jae`,
      description: post.excerpt,
      images: [{ url: post.cover }],
    },
  };
};

export default function NoteDetailPage({ params }: Props) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="space-y-10">
      <Link
        href="/notes"
        className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em]"
      >
        <span className="pixel-dot inline-flex h-2 w-2 items-center justify-center rounded-sm bg-ink" />
        Back to notes
      </Link>

      <header className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-ink/60">
            {post.category}
          </p>
          <h1 className="font-display text-4xl">{post.title}</h1>
          <p className="text-base text-ink/70">{post.excerpt}</p>
        </div>
        <div className="relative h-56 overflow-hidden rounded-3xl border border-ink/10 bg-sand">
          <Image src={post.cover} alt="" fill className="object-cover" />
        </div>
      </header>

      <div className="texture-divider" />

      <div className="space-y-6">
        <MDXRenderer source={post.content} />
      </div>
    </article>
  );
}
