"use client";

import clsx from "clsx";

type FilterTagProps = {
  label: string;
  active?: boolean;
  onClick: () => void;
};

export const FilterTag = ({ label, active = false, onClick }: FilterTagProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={clsx(
        "rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-paper",
        active
          ? "border-ink bg-ink text-paper"
          : "border-ink/20 bg-white/70 text-ink hover:border-ink"
      )}
      aria-pressed={active}
    >
      {label}
    </button>
  );
};
