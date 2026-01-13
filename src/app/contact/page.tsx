import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Lara Jae for collaborations, commissions, and talks.",
  openGraph: {
    title: "Contact | Lara Jae",
    description: "Get in touch with Lara Jae for collaborations, commissions, and talks.",
  },
};

const socials = [
  { label: "Instagram", href: "https://instagram.com" },
  { label: "Behance", href: "https://behance.net" },
  { label: "LinkedIn", href: "https://linkedin.com" },
];

export default function ContactPage() {
  return (
    <div className="space-y-10">
      <section className="space-y-4">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-ink/60">
          Contact
        </p>
        <h1 className="font-display text-4xl">Let’s build something.</h1>
        <p className="max-w-2xl text-base text-ink/70">
          Share a brief about your project, commission, or speaking request. Lara will respond
          within a few business days.
        </p>
      </section>

      <section className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <form className="space-y-6 rounded-[28px] border border-ink/10 bg-white/70 p-6 shadow-paper">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-semibold">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              className="w-full rounded-2xl border border-ink/20 bg-white px-4 py-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-paper"
              placeholder="Your name"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-semibold">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className="w-full rounded-2xl border border-ink/20 bg-white px-4 py-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-paper"
              placeholder="you@email.com"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="project" className="text-sm font-semibold">
              Project details
            </label>
            <textarea
              id="project"
              name="project"
              rows={5}
              className="w-full rounded-2xl border border-ink/20 bg-white px-4 py-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-paper"
              placeholder="Tell me about your timeline, goals, and creative direction."
            />
          </div>
          <button
            type="submit"
            className="rounded-full bg-ink px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-paper transition hover:bg-accent"
          >
            Send message
          </button>
        </form>

        <div className="space-y-6">
          <div className="rounded-[28px] border border-ink/10 bg-white/70 p-6 shadow-paper">
            <h2 className="font-display text-2xl">Studio inbox</h2>
            <p className="mt-3 text-sm text-ink/70">
              Available for art direction, visual identity, and speaking engagements.
            </p>
          </div>
          <div className="rounded-[28px] border border-ink/10 bg-white/70 p-6 shadow-paper">
            <h2 className="font-display text-2xl">Socials</h2>
            <div className="mt-4 flex flex-col gap-3 text-sm font-semibold uppercase tracking-[0.2em]">
              {socials.map((social) => (
                <a key={social.label} href={social.href} className="hover:text-accent">
                  {social.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
