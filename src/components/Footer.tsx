const socials = [
  { label: "Instagram", href: "https://instagram.com" },
  { label: "Behance", href: "https://behance.net" },
  { label: "LinkedIn", href: "https://linkedin.com" },
];

export const Footer = () => {
  return (
    <footer className="border-t border-ink/10 bg-paper">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-10 text-sm md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-display text-lg">Lara Jae</p>
          <p className="text-ink/60">Digital scrapbook & editorial portfolio.</p>
        </div>
        <div className="flex flex-wrap gap-4">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              className="transition hover:text-accent"
              target="_blank"
              rel="noreferrer"
            >
              {social.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};
