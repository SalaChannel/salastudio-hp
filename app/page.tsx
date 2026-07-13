import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      <header className="flex items-center justify-center px-8 py-16 md:py-20">
        <h1 className="text-4xl font-semibold tracking-tight text-neutral-900 md:text-5xl">
          SalaStudio
        </h1>
      </header>

      <div className="flex flex-1 flex-col border-t border-neutral-200 md:flex-row">
        {/* Left: Apps */}
        <section className="flex flex-1 flex-col justify-center gap-4 border-b border-neutral-200 px-8 py-16 md:border-b-0 md:border-r md:px-12">
          <p className="text-sm tracking-wide text-neutral-500">Apps</p>
          <h2 className="text-3xl font-semibold tracking-tight text-neutral-900">
            アプリ開発
          </h2>
          <p className="max-w-sm text-neutral-600">
            Cueをはじめとする、SalaStudioのプロダクト一覧へ。
          </p>
          <Link
            href="/apps"
            className="mt-2 w-fit text-sm font-medium text-neutral-900 underline underline-offset-4"
          >
            Appsを見る
          </Link>
        </section>

        {/* Right: Mix */}
        <section className="flex flex-1 flex-col justify-center gap-4 px-8 py-16 md:px-12">
          <p className="text-sm tracking-wide text-neutral-500">Mix</p>
          <h2 className="text-3xl font-semibold tracking-tight text-neutral-900">
            ミックス受注
          </h2>
          <p className="max-w-sm text-neutral-600">
            楽曲ミックスのご依頼・ご相談はこちらから。
          </p>
          <Link
            href="/mix"
            className="mt-2 w-fit text-sm font-medium text-neutral-900 underline underline-offset-4"
          >
            Mixを見る
          </Link>
        </section>
      </div>
    </main>
  );
}
