import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Learn more about Lara Jae and her creative approach.",
  openGraph: {
    title: "About | Lara Jae",
    description: "Learn more about Lara Jae and her creative approach.",
  },
};

export default function AboutPage() {
  return (
    <div className="space-y-10">
      <section className="space-y-4">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-ink/60">
          About Lara
        </p>
        <h1 className="font-display text-4xl">Artist, designer, archivist.</h1>
        <p className="max-w-2xl text-base text-ink/70">
          Lara Jae is a multidisciplinary artist and designer focused on editorial storytelling.
          Her practice blends mixed-media collage, typography, and motion to build work that feels
          intimate, collected, and future-facing.
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <div className="rounded-[28px] border border-ink/10 bg-white/70 p-6 shadow-paper">
          <h2 className="font-display text-2xl">Values</h2>
          <ul className="mt-4 space-y-3 text-sm text-ink/70">
            <li>Craft that honors history while pushing visual culture forward.</li>
            <li>Collaborations built on clarity, respect, and shared authorship.</li>
            <li>Accessible storytelling that invites the audience inside the process.</li>
          </ul>
        </div>
        <div className="rounded-[28px] border border-ink/10 bg-white/70 p-6 shadow-paper">
          <h2 className="font-display text-2xl">Community & volunteering</h2>
          <p className="mt-4 text-sm text-ink/70">
            Lara partners with local arts organizations to host free collage nights, zine swaps,
            and portfolio feedback circles. These gatherings focus on skill-sharing and mutual
            support, keeping creativity accessible without exploiting personal stories.
          </p>
        </div>
      </section>
    </div>
  );
}
