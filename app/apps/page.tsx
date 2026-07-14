import Link from "next/link";
import { ComingSoonBadge } from "@/components/ComingSoonBadge";

export const metadata = {
  title: "Apps",
};

export default function AppsPage() {
  return (
    <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col px-6 py-16">
      <h1 className="font-mono text-3xl font-semibold tracking-tight text-ink">
        Apps
      </h1>
      <p className="mt-4 text-ink/70">
        SalaStudioが開発するプロダクト一覧です。
      </p>

      <Link
        href="/cue"
        className="mt-10 block border border-line px-6 py-6 transition-colors hover:border-teal/50 hover:bg-teal/[0.03]"
      >
        <div className="flex flex-wrap items-center gap-3">
          <h2 className="font-mono text-xl font-semibold tracking-tight text-ink">
            Cue
          </h2>
          <ComingSoonBadge />
        </div>
        <p className="mt-3 text-ink/70">
          静かでスマートな、チームのためのタスク管理アプリ。
        </p>
        <p className="mt-4 font-mono text-sm font-medium text-teal-deep underline underline-offset-4">
          Cueの詳細を見る
        </p>
      </Link>

      <p className="mt-8 text-sm text-ink/50">
        今後、新しいプロダクトを順次公開予定です。
      </p>
    </main>
  );
}
