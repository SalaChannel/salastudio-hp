import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="border-b border-line bg-paper">
      <div className="mx-auto flex h-14 w-full max-w-5xl items-center px-6">
        <Link
          href="/"
          className="font-mono text-base font-semibold tracking-wide text-ink"
        >
          SalaStudio
        </Link>
      </div>
    </header>
  );
}
