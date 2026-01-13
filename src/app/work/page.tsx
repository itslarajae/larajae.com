import type { Metadata } from "next";
import { ProjectGallery } from "@/components/ProjectGallery";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Work",
  description: "Selected art, graphic design, and motion projects by Lara Jae.",
  openGraph: {
    title: "Work | Lara Jae",
    description: "Selected art, graphic design, and motion projects by Lara Jae.",
  },
};

export default function WorkPage() {
  return (
    <div className="space-y-10">
      <section className="space-y-4">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-ink/60">
          Selected projects
        </p>
        <h1 className="font-display text-4xl">Work archive</h1>
        <p className="max-w-2xl text-base text-ink/70">
          A filterable gallery of Lara’s recent art, design systems, and motion studies.
          Each project blends archival textures with clear, modern storytelling.
        </p>
      </section>
      <ProjectGallery projects={projects} />
    </div>
  );
}
