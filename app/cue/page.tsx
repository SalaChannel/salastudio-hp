import type { ReactNode } from "react";
import { ComingSoonBadge } from "@/components/ComingSoonBadge";

export const metadata = {
  title: "Cue",
  description:
    "静かでスマートな、チームのためのタスク管理アプリ。Cueの紹介ページです。",
};

export default function CuePage() {
  return (
    <main className="mx-auto w-full max-w-3xl flex-1 px-6 py-16">
      <div className="flex flex-wrap items-center gap-3">
        <h1 className="text-3xl font-semibold tracking-tight text-neutral-900 md:text-4xl">
          Cue
        </h1>
        <ComingSoonBadge />
      </div>

      <section className="mt-12 space-y-3">
        <h2 className="text-2xl font-semibold tracking-tight text-neutral-900">
          気づけば、通知に追われなくなっていた。
        </h2>
        <p className="text-neutral-600">
          静かでスマートな、チームのためのタスク管理。
        </p>
      </section>

      <section className="mt-14 space-y-3">
        <h2 className="text-xl font-semibold tracking-tight text-neutral-900">
          Cueとは
        </h2>
        <p className="leading-7 text-neutral-700">
          家族・友人グループ・仕事のチームなど、複数人で使うタスク管理アプリです。既存のリマインダーアプリはチーム利用や位置情報通知の精度に弱さがあるという課題から生まれました。通知のノイズを排し、生活に静かに寄り添うことを大切にしています。
        </p>
      </section>

      <section className="mt-14 space-y-6">
        <h2 className="text-xl font-semibold tracking-tight text-neutral-900">
          4つの特徴
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <FeatureCard title="チームでタスク管理">
            チームは、BBQやキャンプなど短期イベント向けの「時限式」（開催日+3日で自動的に一覧から消えます）と、常設の「無期限」から選べます。
          </FeatureCard>
          <FeatureCard title="担当者と進捗の可視化">
            タスクに担当者を割り当て、進捗をひと目で把握できます。
          </FeatureCard>
          <FeatureCard title="位置情報通知">
            指定エリアに入ったタイミングで通知。エリアを出る際には「完了し忘れていないか」もそっと確認します（買い忘れ防止に）。
          </FeatureCard>
          <FeatureCard title="ポケット">
            思いついたことを、まず一時メモとして瞬時に保存。後からゆっくりタスクへ振り分けられます。
          </FeatureCard>
        </div>
      </section>

      <section className="mt-14 space-y-4">
        <h2 className="text-xl font-semibold tracking-tight text-neutral-900">
          できること
        </h2>
        <ul className="space-y-0 rounded border border-neutral-200 px-5 py-2">
          {[
            "チーム作成・参加（招待URL・QRコード）",
            "時限式／無期限チームの使い分け",
            "タスク・小タスク（チェックリスト）、証拠写真の添付",
            "担当者アサイン・進捗表示",
            "3段階の権限管理（host / editor / member）",
            "時刻通知・位置情報通知（端末内処理でプライバシーに配慮）",
            "Google／Appleログイン",
            "ダークモード（システム設定に追従）",
            "iOS Shortcuts連携",
          ].map((item) => (
            <li
              key={item}
              className="border-b border-neutral-100 py-3 text-neutral-700 last:border-b-0"
            >
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-14 space-y-3">
        <h2 className="text-xl font-semibold tracking-tight text-neutral-900">
          Apple Watchにも
        </h2>
        <p className="leading-7 text-neutral-700">
          インフォグラフ文字盤のコーナーコンプリケーションで、次の通知時刻をひと目で確認。通知からその場で完了操作もできます。
        </p>
      </section>

      <section className="mt-14 space-y-3">
        <div className="flex flex-wrap items-center gap-3">
          <h2 className="text-xl font-semibold tracking-tight text-neutral-900">
            AIにタスクを頼む
          </h2>
          <ComingSoonBadge />
        </div>
        <p className="leading-7 text-neutral-700">
          Plus
          AI会員向けに、チャットでタスクの作成・編集・完了・通知設定・アサインを行える機能を準備中です。タスクに関係のない依頼はお断りする、用途を限定した設計にしています。
        </p>
      </section>

      <section className="mt-14 space-y-4">
        <h2 className="text-xl font-semibold tracking-tight text-neutral-900">
          料金プラン
        </h2>
        <div className="grid gap-4 sm:grid-cols-3">
          <PricingCard name="無料" price="広告表示あり" />
          <PricingCard
            name="Plus"
            price="月200〜300円、または買い切り3,000円"
            detail="広告非表示・テンプレート機能など"
          />
          <PricingCard
            name="Plus AI"
            price="月700円"
            detail="Plusの内容に加えてAI機能"
          />
        </div>
        <p className="leading-7 text-neutral-700">
          チーム内の誰か1人（ホスト）がPlus以上に加入していれば、チーム全員の広告が非表示になります。
        </p>
        <p className="leading-7 text-neutral-700">
          アプリ内のご購入はApple社のApp内課金となります。Googleアカウントでログインされた方は、当サイトからのご購入も近日提供予定です。
        </p>
      </section>

      <section className="mt-14 space-y-3">
        <h2 className="text-xl font-semibold tracking-tight text-neutral-900">
          対応環境
        </h2>
        <p className="leading-7 text-neutral-700">
          iOS（Apple Watch連携あり）。Android版は今後対応予定です。
        </p>
      </section>
    </main>
  );
}

function FeatureCard({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="rounded border border-neutral-200 px-5 py-5">
      <h3 className="font-semibold tracking-tight text-neutral-900">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-neutral-600">{children}</p>
    </div>
  );
}

function PricingCard({
  name,
  price,
  detail,
}: {
  name: string;
  price: string;
  detail?: string;
}) {
  return (
    <div className="rounded border border-neutral-200 px-5 py-5">
      <p className="font-semibold tracking-tight text-neutral-900">{name}</p>
      {detail ? (
        <p className="mt-2 text-sm leading-6 text-neutral-600">{detail}</p>
      ) : null}
      <p className="mt-3 text-sm font-medium text-accent">{price}</p>
    </div>
  );
}
