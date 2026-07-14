import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      <section className="flex flex-col items-center px-6 py-24 md:py-32">
        <div
          className="hero-wave relative w-full max-w-[640px]"
          style={{
            filter:
              "drop-shadow(0 0 18px rgba(227,163,76,0.45)) drop-shadow(0 0 40px rgba(227,163,76,0.2))",
          }}
        >
          <svg
            viewBox="0 0 640 48"
            className="h-auto w-full"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden
          >
            <path
              d="M0 24 C80 8, 160 40, 240 24 S400 8, 480 24 S600 40, 640 24"
              stroke="#E3A34C"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </div>
        <p className="mt-10 font-mono text-sm font-medium tracking-[0.35em] text-ink md:text-base">
          SalaStudio
        </p>
      </section>

      <section className="border-t border-line bg-bg px-6 py-20 md:py-28">
        <div className="mx-auto max-w-3xl">
          <p className="font-mono text-xs font-medium tracking-[0.22em] text-amber">
            01 Apps
          </p>
          <h2 className="mt-5 font-serif text-3xl font-bold leading-snug tracking-wide text-ink md:text-4xl">
            暮らしの、小さな不便を編集する。
          </h2>
          <p className="mt-6 max-w-xl text-base leading-8 text-muted">
            Cueをはじめとする、日々のタスクや時間を少し扱いやすくするための道具をつくっています。
          </p>
          <Link
            href="/apps"
            className="mt-8 inline-flex font-mono text-sm font-medium tracking-wide text-amber transition-colors hover:text-amber-deep"
          >
            Appsを見る →
          </Link>
        </div>
      </section>

      <section className="border-t border-line bg-bg-soft px-6 py-20 md:py-28">
        <div className="mx-auto max-w-3xl">
          <p className="font-mono text-xs font-medium tracking-[0.22em] text-amber">
            02 Mix
          </p>
          <h2 className="mt-5 font-serif text-3xl font-bold leading-snug tracking-wide text-ink md:text-4xl">
            声を、最高の状態に整える。
          </h2>
          <p className="mt-6 max-w-xl text-base leading-8 text-muted">
            歌ってみたの音源を、編集からマスタリングまで。ひとつひとつの声に合わせて仕上げます。
          </p>
          <Link
            href="/mix"
            className="mt-8 inline-flex font-mono text-sm font-medium tracking-wide text-amber transition-colors hover:text-amber-deep"
          >
            Mixを見る →
          </Link>
        </div>
      </section>
    </main>
  );
}
