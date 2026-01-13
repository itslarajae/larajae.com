"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import type { Project, ProjectCategory } from "../../content/projects";
import { FilterTag } from "./FilterTag";

const categories: ("All" | ProjectCategory)[] = [
  "All",
  "Art",
  "Graphic Design",
  "Motion & Video",
];

type ProjectGalleryProps = {
  projects: Project[];
};

export const ProjectGallery = ({ projects }: ProjectGalleryProps) => {
  const [active, setActive] = useState<(typeof categories)[number]>("All");

  const filtered = useMemo(() => {
    if (active === "All") return projects;
    return projects.filter((project) => project.category === active);
  }, [active, projects]);

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap gap-3">
        {categories.map((category) => (
          <FilterTag
            key={category}
            label={category}
            active={category === active}
            onClick={() => setActive(category)}
          />
        ))}
      </div>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {filtered.map((project) => (
          <Link
            key={project.slug}
            href={`/work/${project.slug}`}
            className="group flex h-full flex-col overflow-hidden rounded-3xl border border-ink/10 bg-white/70 shadow-paper transition hover:-translate-y-1 hover:border-ink/30"
          >
            <div className="relative h-56 w-full overflow-hidden bg-sand">
              <Image
                src={project.cover}
                alt={project.title}
                fill
                className="object-cover transition duration-500 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-1 flex-col gap-3 px-6 py-5">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-ink/60">
                {project.category}
              </span>
              <h3 className="font-display text-xl text-ink">{project.title}</h3>
              <p className="text-sm text-ink/70">{project.summary}</p>
              <div className="mt-auto flex items-center gap-2 text-sm font-semibold text-ink">
                <span className="inline-flex h-2 w-2 items-center justify-center rounded-sm bg-ink pixel-dot" />
                <span className="tracking-wide group-hover:text-accent">View project</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
