import Link from "next/link";
import { TagFrame } from "@/components/TagFrame";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col bg-paper">
      <div className="flex flex-1 flex-col md:flex-row">
        <section className="flex flex-1 flex-col justify-center gap-4 border-b border-line px-8 py-16 md:border-b-0 md:border-r md:px-12">
          <TagFrame variant="apps">Apps</TagFrame>
          <h2 className="font-mono text-3xl font-semibold tracking-tight text-ink">
            アプリ開発
          </h2>
          <p className="max-w-sm text-ink/70">
            Cueをはじめとする、SalaStudioのプロダクト一覧へ。
          </p>
          <Link
            href="/apps"
            className="mt-2 w-fit font-mono text-sm font-medium text-teal-deep underline underline-offset-4"
          >
            Appsを見る
          </Link>
        </section>

        <section className="flex flex-1 flex-col justify-center gap-4 px-8 py-16 md:px-12">
          <TagFrame variant="mix">Mix</TagFrame>
          <h2 className="font-mono text-3xl font-semibold tracking-tight text-ink">
            ミックス受注
          </h2>
          <p className="max-w-sm text-ink/70">
            楽曲ミックスのご依頼・ご相談はこちらから。
          </p>
          <Link
            href="/mix"
            className="mt-2 w-fit font-mono text-sm font-medium text-red-deep underline underline-offset-4"
          >
            Mixを見る
          </Link>
        </section>
      </div>
    </main>
  );
}
