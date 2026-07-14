export const metadata = {
  title: "ミックス受注",
  description:
    "歌ってみたの仕上げ、ボーカル編集・ハモリ生成・マスタリングまでワンストップで承ります。",
};

const works = [
  {
    embed: "https://www.youtube-nocookie.com/embed/TCfUQKpCS5c",
    watch: "https://youtu.be/TCfUQKpCS5c",
  },
  {
    embed: "https://www.youtube-nocookie.com/embed/bIVJnWYBCc0",
    watch: "https://youtu.be/bIVJnWYBCc0",
  },
  {
    embed: "https://www.youtube-nocookie.com/embed/wU7H3cvMM1A",
    watch: "https://youtu.be/wU7H3cvMM1A",
  },
  {
    embed: "https://www.youtube-nocookie.com/embed/qg_yAPrxnZ4",
    watch: "https://youtu.be/qg_yAPrxnZ4",
  },
] as const;

const plans = [
  {
    name: "ベーシックMIX",
    detail: "通常フルコーラス",
    price: "¥7,000〜",
  },
  {
    name: "ハーフMIX",
    detail: "ワンフルコーラス（2分程）",
    price: "¥3,500〜",
  },
  {
    name: "ショートMIX",
    detail: "Shorts・TikTok向け（1分程）",
    price: "¥2,000〜",
  },
] as const;

const steps = [
  "音源をご用意のうえ、見積もりのご連絡をください（DMもしくはリプライ）",
  "お見積もり後、ご依頼の場合は代金をお振込みください",
  "入金確認後、ミックスに着手します",
  "共有フォルダから仮ミックスをご確認いただき、適宜修正をご指示ください",
  "何度か擦り合わせを行い、完成となります",
] as const;

export default function MixPage() {
  return (
    <main className="mx-auto w-full max-w-3xl flex-1 px-6 py-16">
      <h1 className="font-mono text-3xl font-semibold tracking-tight text-ink md:text-4xl">
        ミックス受注
      </h1>
      <p className="mt-4 leading-7 text-ink/80">
        歌ってみたの仕上げ、ボーカル編集・ハモリ生成・マスタリングまでワンストップで承ります。
      </p>

      <section className="mt-14 space-y-6">
        <h2 className="font-mono text-xl font-semibold tracking-tight text-ink">
          実績
        </h2>
        <div className="grid gap-8 sm:grid-cols-2">
          {works.map((work, index) => (
            <div key={work.embed} className="space-y-3">
              <div className="relative aspect-video overflow-hidden border border-line bg-line/30">
                <iframe
                  src={work.embed}
                  title={`実績動画 ${index + 1}`}
                  className="absolute inset-0 h-full w-full"
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
              <a
                href={work.watch}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-sm font-medium text-red-deep underline underline-offset-4"
              >
                YouTubeで見る
              </a>
            </div>
          ))}
        </div>
        <p>
          <a
            href="https://www.youtube.com/@SalaChannel/videos"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-sm font-medium text-red-deep underline underline-offset-4"
          >
            もっと見る
          </a>
        </p>
      </section>

      <section className="mt-14 space-y-4">
        <h2 className="font-mono text-xl font-semibold tracking-tight text-ink">
          対応範囲
        </h2>
        <ul className="list-disc space-y-2 pl-5 text-ink/80">
          <li>ピッチ・タイミング補正、ノイズ最適化</li>
          <li>ハモリ生成／コーラス編集、空間処理</li>
          <li>2MIXバランス調整、最終マスタリング</li>
          <li>合唱・コラボMIX（人数に応じて加算）</li>
        </ul>
      </section>

      <section className="mt-14 space-y-6">
        <h2 className="font-mono text-xl font-semibold tracking-tight text-ink">
          料金表
        </h2>
        <div className="grid gap-4 sm:grid-cols-3">
          {plans.map((plan) => (
            <div key={plan.name} className="border border-line px-5 py-5">
              <p className="font-mono font-semibold tracking-tight text-ink">
                {plan.name}
              </p>
              <p className="mt-2 text-sm leading-6 text-ink/70">{plan.detail}</p>
              <p className="mt-3 font-mono text-sm font-medium text-red">
                {plan.price}
              </p>
            </div>
          ))}
        </div>
        <p className="text-sm leading-6 text-ink/70">
          上記に含まれる内容：ボーカルエディット・ハモリ生成・マスタリング
        </p>

        <div className="space-y-3">
          <h3 className="font-mono text-lg font-semibold tracking-tight text-ink">
            追加オプション
          </h3>
          <ul className="list-disc space-y-2 pl-5 text-ink/80">
            <li>
              コラボ（1人あたりプラス）：2人まで +¥2,000 ／ 3人まで +¥3,000
            </li>
            <li>お直し：回数制限なし</li>
            <li>
              納期：5〜21日予定（お急ぎ・4日以内の場合は合計金額×1.5〜）
            </li>
          </ul>
        </div>

        <div className="space-y-3">
          <h3 className="font-mono text-lg font-semibold tracking-tight text-ink">
            割引特典（ベーシックMIXのみ）
          </h3>
          <ul className="list-disc space-y-2 pl-5 text-ink/80">
            <li>フォロワー割：-¥500</li>
            <li>リピート割：-¥500</li>
            <li>誕生月割：-¥1,000</li>
          </ul>
        </div>

        <div className="space-y-3">
          <h3 className="font-mono text-lg font-semibold tracking-tight text-ink">
            支払方法
          </h3>
          <p className="leading-7 text-ink/80">
            銀行振込にて承っております。イラストや動画制作などの技術交換によるお支払いもご相談可能です。
          </p>
        </div>

        <p className="text-sm leading-6 text-ink/50">
          まずは音源をお送りいただき、お見積もりをお願いしております。お見積もりは無料です。ココナラ経由でのご依頼は、料金が一部異なります。
        </p>
      </section>

      <section className="mt-14 space-y-4">
        <h2 className="font-mono text-xl font-semibold tracking-tight text-ink">
          依頼の流れ
        </h2>
        <ol className="list-decimal space-y-3 pl-5 text-ink/80">
          {steps.map((step) => (
            <li key={step} className="pl-1 leading-7">
              {step}
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-14 space-y-4">
        <h2 className="font-mono text-xl font-semibold tracking-tight text-ink">
          依頼窓口
        </h2>
        <div className="flex flex-col gap-3 sm:flex-row">
          <a
            href="https://x.com/SalaStudio_"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex flex-1 items-center justify-center border border-red bg-red px-5 py-3 font-mono text-sm font-medium text-paper transition-colors hover:border-red-deep hover:bg-red-deep"
          >
            XでDMする
          </a>
          <a
            href="https://coconala.com/services/4184964"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex flex-1 items-center justify-center border border-red px-5 py-3 font-mono text-sm font-medium text-red transition-colors hover:bg-red/[0.04]"
          >
            ココナラで依頼する
          </a>
        </div>
      </section>
    </main>
  );
}
