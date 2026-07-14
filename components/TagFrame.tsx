import type { ReactNode } from "react";

type TagFrameColor = "teal" | "red";

const colorClass: Record<TagFrameColor, string> = {
  teal: "text-teal border-teal",
  red: "text-red border-red",
};

export function TagFrame({
  children,
  color,
}: {
  children: ReactNode;
  color: TagFrameColor;
}) {
  const tone = colorClass[color];

  return (
    <span className={`relative inline-block ${tone}`}>
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 border-2 border-current"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute border-2 border-current"
        style={{
          top: "-7px",
          left: "14px",
          right: "-7px",
          bottom: "-7px",
        }}
      />
      <span className="relative z-10 block px-3 py-1.5 font-mono text-xs font-semibold uppercase tracking-[0.22em]">
        {children}
      </span>
    </span>
  );
}
