import { LegalPage, Section } from "@/components/LegalPage";

export const metadata = {
  title: "特定商取引法に基づく表記",
};

export default function TokushohoPage() {
  return (
    <LegalPage title="特定商取引法に基づく表記">
      <Section title="販売業者">
        <p>SalaStudio</p>
      </Section>

      <Section title="運営統括責任者">
        <p>白石 菜月</p>
      </Section>

      <Section title="所在地">
        <p>ご請求をいただいた場合、遅滞なく開示いたします。</p>
      </Section>

      <Section title="電話番号">
        <p>
          ご請求をいただいた場合、遅滞なく開示いたします。お問い合わせはメールにて承っております。
        </p>
      </Section>

      <Section title="メールアドレス">
        <p>support@salastudio.jp</p>
      </Section>

      <Section title="販売価格">
        <p>
          各商品・サービスのご購入・お申し込みページに表示する価格によります。
        </p>
      </Section>

      <Section title="商品代金以外の必要料金">
        <p>
          なし（決済手数料等が発生する場合は、各サービスページに別途表示します）
        </p>
      </Section>

      <Section title="支払方法">
        <p>
          各サービスページに別途表示します（クレジットカード決済等を予定）。
        </p>
      </Section>

      <Section title="支払時期">
        <p>各サービスページに定めるところによります。</p>
      </Section>

      <Section title="商品の引渡・サービス提供時期">
        <ul className="list-disc space-y-2 pl-5">
          <li>アプリ内課金：決済完了後、直ちにご利用いただけます。</li>
          <li>その他サービス：各サービスページに別途表示します。</li>
        </ul>
      </Section>

      <Section title="返品・キャンセルについて">
        <p>
          デジタルコンテンツおよび役務提供の性質上、提供開始後の返品・返金には原則応じかねます。やむを得ない事情がある場合は、サポート窓口までご相談ください。
        </p>
      </Section>

      <Section title="動作環境">
        <p>
          各アプリケーションの動作環境については、それぞれのアプリストア掲載ページをご確認ください。
        </p>
      </Section>

      <p className="border-t border-line pt-6 text-sm text-muted">
        ※本ページは、現時点でサイト上での直接販売を行っていない項目についても、将来のサービス開始に備えて記載しています。各サービスの提供開始時に、価格・支払方法等の詳細を別途更新します。
      </p>
    </LegalPage>
  );
}
