import type { Metadata } from "next";
import { Card } from "@/components/Card";
import { getAllPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Notes",
  description: "Essays and speeches from Lara Jae's notebook.",
  openGraph: {
    title: "Notes | Lara Jae",
    description: "Essays and speeches from Lara Jae's notebook.",
  },
};

export default function NotesPage() {
  const posts = getAllPosts();

  return (
    <div className="space-y-10">
      <section className="space-y-4">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-ink/60">
          Notes & speeches
        </p>
        <h1 className="font-display text-4xl">Notes</h1>
        <p className="max-w-2xl text-base text-ink/70">
          Short essays, talk drafts, and observations—the editorial backbone behind the work.
          No date-first blog energy, just a living notebook.
        </p>
      </section>
      <div className="grid gap-6 md:grid-cols-2">
        {posts.map((post) => (
          <Card
            key={post.slug}
            title={post.title}
            description={post.excerpt}
            href={`/notes/${post.slug}`}
            image={post.cover}
            eyebrow={post.category}
            actionLabel="Read more"
          />
        ))}
      </div>
    </div>
  );
}
