import Link from "next/link";
import { ComingSoonBadge } from "@/components/ComingSoonBadge";

export const metadata = {
  title: "Apps",
};

export default function AppsPage() {
  return (
    <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col px-6 py-16">
      <h1 className="text-3xl font-semibold tracking-tight text-neutral-900">
        Apps
      </h1>
      <p className="mt-4 text-neutral-600">
        SalaStudioが開発するプロダクト一覧です。
      </p>

      <Link
        href="/cue"
        className="mt-10 block rounded border border-neutral-200 px-6 py-6 transition-colors hover:border-accent/50 hover:bg-accent/[0.03]"
      >
        <div className="flex flex-wrap items-center gap-3">
          <h2 className="text-xl font-semibold tracking-tight text-neutral-900">
            Cue
          </h2>
          <ComingSoonBadge />
        </div>
        <p className="mt-3 text-neutral-600">
          静かでスマートな、チームのためのタスク管理アプリ。
        </p>
        <p className="mt-4 text-sm font-medium text-neutral-900 underline underline-offset-4">
          Cueの詳細を見る
        </p>
      </Link>

      <p className="mt-8 text-sm text-neutral-500">
        今後、新しいプロダクトを順次公開予定です。
      </p>
    </main>
  );
}
