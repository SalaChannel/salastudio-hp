import Link from "next/link";
import { ComingSoonBadge } from "@/components/ComingSoonBadge";

export const metadata = {
  title: "Apps",
};

export default function AppsPage() {
  return (
    <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col px-6 py-16">
      <h1 className="font-serif text-3xl font-bold tracking-wide text-ink">
        Apps
      </h1>
      <p className="mt-4 text-muted">
        SalaStudioが開発するプロダクト一覧です。
      </p>

      <Link
        href="/cue"
        className="mt-10 block border border-line bg-bg-soft px-6 py-6 transition-colors hover:border-amber/40"
      >
        <div className="flex flex-wrap items-center gap-3">
          <h2 className="font-serif text-xl font-bold tracking-wide text-ink">
            Cue
          </h2>
          <ComingSoonBadge />
        </div>
        <p className="mt-3 text-muted">
          静かでスマートな、チームのためのタスク管理アプリ。
        </p>
        <p className="mt-4 font-mono text-sm font-medium text-amber underline underline-offset-4">
          Cueの詳細を見る
        </p>
      </Link>

      <p className="mt-8 text-sm text-muted">
        今後、新しいプロダクトを順次公開予定です。
      </p>
    </main>
  );
}
