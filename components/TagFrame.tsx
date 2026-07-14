type TagFrameVariant = "apps" | "mix";

const colorToVariant: Record<"teal" | "red", TagFrameVariant> = {
  teal: "apps",
  red: "mix",
};

export function TagFrame({
  children,
  color,
  variant,
}: {
  children: string;
  color?: "teal" | "red";
  variant?: TagFrameVariant;
}) {
  const resolved = variant ?? (color ? colorToVariant[color] : "apps");

  return (
    <div className={`tag-frame ${resolved}`}>
      <i className="f2" aria-hidden />
      <i className="f1" aria-hidden />
      <span>{children}</span>
    </div>
  );
}
