import Image from "next/image";
import Link from "next/link";

type CardProps = {
  title: string;
  description: string;
  href: string;
  image: string;
  eyebrow?: string;
  actionLabel?: string;
};

export const Card = ({
  title,
  description,
  href,
  image,
  eyebrow,
  actionLabel = "Read more",
}: CardProps) => {
  return (
    <Link
      href={href}
      className="group flex h-full flex-col overflow-hidden rounded-3xl border border-ink/10 bg-white/70 shadow-paper transition hover:-translate-y-1 hover:border-ink/30"
    >
      <div className="relative h-48 w-full overflow-hidden bg-sand">
        <Image
          src={image}
          alt=""
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col gap-3 px-6 py-5">
        {eyebrow ? (
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-ink/60">
            {eyebrow}
          </span>
        ) : null}
        <h3 className="font-display text-xl text-ink">{title}</h3>
        <p className="text-sm text-ink/70">{description}</p>
        <div className="mt-auto flex items-center gap-2 text-sm font-semibold text-ink">
          <span className="inline-flex h-2 w-2 items-center justify-center rounded-sm bg-ink pixel-dot" />
          <span className="tracking-wide group-hover:text-accent">{actionLabel}</span>
        </div>
      </div>
    </Link>
  );
};
