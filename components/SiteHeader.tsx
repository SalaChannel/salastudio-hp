import Image from "next/image";
import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="relative z-10 border-b border-line bg-bg">
      <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-5">
        <Link href="/" className="inline-flex items-center">
          <span className="inline-block rotate-[-2deg] bg-paper px-2.5 py-2 shadow-[0_8px_24px_rgba(0,0,0,0.35)]">
            <Image
              src="/brand/salastudio-header.png"
              alt="SalaStudio"
              width={98}
              height={40}
              priority
              className="h-8 w-auto md:h-10"
            />
          </span>
        </Link>
        <nav
          aria-label="主要ナビ"
          className="font-mono text-[11px] font-medium tracking-[0.18em] text-muted"
        >
          <Link href="/apps" className="transition-colors hover:text-ink">
            APPS
          </Link>
          <span className="mx-2 text-muted/60" aria-hidden>
            ·
          </span>
          <Link href="/mix" className="transition-colors hover:text-ink">
            MIX
          </Link>
        </nav>
      </div>
    </header>
  );
}
