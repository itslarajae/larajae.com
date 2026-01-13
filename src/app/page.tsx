import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components/Card";
import { featuredProjects } from "@/lib/projects";
import { getAllPosts } from "@/lib/posts";

export default function HomePage() {
  const posts = getAllPosts().slice(0, 2);

  return (
    <div className="space-y-16">
      <section className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <div className="space-y-6">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-ink/60">
            Digital scrapbook & editorial portfolio
          </p>
          <h1 className="font-display text-4xl leading-tight md:text-5xl">
            Lara Jae builds mixed-media narratives with a streetwise edge and a love for
            pixel nostalgia.
          </h1>
          <p className="max-w-xl text-base text-ink/70">
            I design and direct art that feels like a curated archive—collaged textures, bold
            typography, and a clear editorial backbone that keeps every story readable and
            alive.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/work"
              className="rounded-full bg-ink px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-paper transition hover:bg-accent"
            >
              Explore work
            </Link>
            <Link
              href="/contact"
              className="rounded-full border border-ink/30 px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-ink transition hover:border-ink"
            >
              Start a project
            </Link>
          </div>
        </div>
        <div className="relative overflow-hidden rounded-[32px] border border-ink/10 bg-white/70 p-6 shadow-paper">
          <div className="absolute -left-6 top-6 rotate-[-8deg] rounded-full bg-mint px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-ink">
            Featured
          </div>
          <div className="space-y-4">
            <h2 className="font-display text-2xl">Current moodboard</h2>
            <div className="grid grid-cols-2 gap-3">
              {featuredProjects.map((project) => (
                <div
                  key={project.slug}
                  className="relative h-28 overflow-hidden rounded-2xl border border-ink/10 bg-sand"
                >
                  <Image
                    src={project.cover}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
            <p className="text-sm text-ink/70">
              A rotating selection of textures, motion frames, and print ephemera from the
              latest projects.
            </p>
          </div>
        </div>
      </section>

      <div className="texture-divider" />

      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="font-display text-3xl">Featured work</h2>
          <Link href="/work" className="text-sm font-semibold uppercase tracking-[0.2em]">
            View all →
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {featuredProjects.map((project) => (
            <Card
              key={project.slug}
              title={project.title}
              description={project.summary}
              href={`/work/${project.slug}`}
              image={project.cover}
              eyebrow={project.category}
              actionLabel="View project"
            />
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="font-display text-3xl">Featured writing</h2>
          <Link href="/notes" className="text-sm font-semibold uppercase tracking-[0.2em]">
            Visit notes →
          </Link>
        </div>
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
      </section>

      <section className="grid gap-6 rounded-[32px] border border-ink/10 bg-white/70 p-8 shadow-paper md:grid-cols-3">
        <div className="space-y-3">
          <h3 className="font-display text-xl">Quick links</h3>
          <p className="text-sm text-ink/70">
            A few fast jumps into the archive and the ways we can collaborate.
          </p>
        </div>
        <div className="flex flex-col gap-3 text-sm font-semibold uppercase tracking-[0.2em]">
          <Link href="/work" className="hover:text-accent">
            Browse projects
          </Link>
          <Link href="/notes" className="hover:text-accent">
            Read notes
          </Link>
          <Link href="/about" className="hover:text-accent">
            About Lara
          </Link>
        </div>
        <div className="flex flex-col gap-3 text-sm font-semibold uppercase tracking-[0.2em]">
          <Link href="/contact" className="hover:text-accent">
            Start a project
          </Link>
          <Link href="/contact" className="hover:text-accent">
            Request a talk
          </Link>
          <Link href="/contact" className="hover:text-accent">
            Say hello
          </Link>
        </div>
      </section>
    </div>
  );
}
