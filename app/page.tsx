import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-full flex-1 flex-col md:flex-row">
      {/* Left: Apps */}
      <section className="flex flex-1 flex-col justify-center gap-4 border-b border-neutral-200 px-8 py-16 md:border-b-0 md:border-r md:px-12">
        <p className="text-sm tracking-wide text-neutral-500">Apps</p>
        <h1 className="text-3xl font-semibold tracking-tight text-neutral-900">
          アプリ開発
        </h1>
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
        <h1 className="text-3xl font-semibold tracking-tight text-neutral-900">
          ミックス受注
        </h1>
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
    </main>
  );
}
