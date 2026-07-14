import Image from "next/image";
import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="border-b border-line bg-paper">
      <div className="mx-auto flex h-14 w-full max-w-5xl items-center px-6">
        <Link href="/" className="inline-flex items-center">
          <Image
            src="/brand/salastudio-header.png"
            alt="SalaStudio"
            width={98}
            height={40}
            priority
            className="h-[40px] w-auto"
          />
        </Link>
      </div>
    </header>
  );
}
