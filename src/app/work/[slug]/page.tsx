import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { projects } from "@/lib/projects";

type Props = {
  params: { slug: string };
};

export const generateMetadata = ({ params }: Props): Metadata => {
  const project = projects.find((item) => item.slug === params.slug);

  if (!project) {
    return { title: "Project" };
  }

  return {
    title: project.title,
    description: project.summary,
    openGraph: {
      title: `${project.title} | Lara Jae`,
      description: project.summary,
      images: [{ url: project.cover }],
    },
  };
};

export default function ProjectDetailPage({ params }: Props) {
  const project = projects.find((item) => item.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="space-y-10">
      <Link
        href="/work"
        className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em]"
      >
        <span className="pixel-dot inline-flex h-2 w-2 items-center justify-center rounded-sm bg-ink" />
        Back to work
      </Link>

      <section className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-ink/60">
            {project.category}
          </p>
          <h1 className="font-display text-4xl">{project.title}</h1>
          <p className="text-base text-ink/70">{project.summary}</p>
        </div>
        <div className="rounded-[28px] border border-ink/10 bg-white/70 p-6 shadow-paper">
          <dl className="space-y-4 text-sm">
            <div>
              <dt className="text-xs font-semibold uppercase tracking-[0.3em] text-ink/60">
                Year
              </dt>
              <dd className="mt-1 text-ink">{project.year}</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-[0.3em] text-ink/60">
                Role
              </dt>
              <dd className="mt-1 text-ink">{project.role}</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-[0.3em] text-ink/60">
                Tools
              </dt>
              <dd className="mt-1 flex flex-wrap gap-2">
                {project.tools.map((tool) => (
                  <span key={tool} className="rounded-full border border-ink/20 px-3 py-1">
                    {tool}
                  </span>
                ))}
              </dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        {project.gallery.map((image, index) => (
          <div
            key={`${project.slug}-${index}`}
            className="relative h-72 overflow-hidden rounded-3xl border border-ink/10 bg-sand"
          >
            <Image src={image} alt="" fill className="object-cover" />
          </div>
        ))}
      </section>

      <section className="rounded-[32px] border border-ink/10 bg-white/70 p-8 shadow-paper">
        <h2 className="font-display text-2xl">Project notes</h2>
        <div className="texture-divider" />
        <div className="grid gap-4 text-sm text-ink/70 md:grid-cols-3">
          {project.tags.map((tag) => (
            <div key={tag} className="rounded-2xl bg-sand px-4 py-3">
              {tag}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
