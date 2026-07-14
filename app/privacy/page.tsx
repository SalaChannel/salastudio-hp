import Link from "next/link";
import {
  BulletList,
  LegalPage,
  NumberedList,
  Section,
  SubSection,
} from "@/components/LegalPage";

export const metadata = {
  title: "プライバシーポリシー",
};

export default function PrivacyPage() {
  return (
    <LegalPage title="プライバシーポリシー">
      <p>
        SalaStudio（以下「当方」といいます。）は、当方が提供するアプリケーション（Cueを含む、以下「本アプリ」）およびウェブサイト（salastudio.jp、以下「本サイト」）、ならびに本サイトを通じて提供する各種サービス（音楽ミックス受注サービスを含む、以下「本サービス」）における、お客様の個人情報の取り扱いについて、以下のとおりプライバシーポリシー（以下「本ポリシー」）を定めます。
      </p>

      <Section title="1. 事業者情報">
        <BulletList
          items={[
            "運営者：SalaStudio（個人事業主）",
            "お問い合わせ：support@salastudio.jp",
            <>
              事業者の詳細情報（氏名・住所等）は、
              <Link
                href="/tokushoho"
                className="text-amber underline underline-offset-4 hover:text-amber-deep"
              >
                特定商取引法に基づく表記
              </Link>
              をご参照ください。
            </>,
          ]}
        />
      </Section>

      <Section title="2. 取得する情報">
        <BulletList
          items={[
            <>
              <strong>認証情報</strong>
              ：Apple
              ID・Googleアカウントによる認証時に提供される識別情報（氏名、メールアドレス等、各認証サービスの設定によりお客様が開示を選択した範囲）
            </>,
            <>
              <strong>お問い合わせ情報</strong>
              ：サポート窓口等にご連絡いただいた際の氏名、メールアドレス、お問い合わせ内容
            </>,
            <>
              <strong>ミックス受注に関する情報</strong>
              ：依頼内容、音源データ、納品物、料金支払いに関する情報
            </>,
            <>
              <strong>アクセス情報</strong>
              ：本サイトの閲覧に伴うアクセスログ、Cookie等の技術情報（取得する場合は別途明示します）
            </>,
          ]}
        />
      </Section>

      <Section title="3. 利用目的">
        <NumberedList
          items={[
            "本アプリ・本サービスの提供、維持、改善のため",
            "お問い合わせ・依頼への対応のため",
            "料金の請求・決済処理のため",
            "重要なお知らせ（規約改定等）をお伝えするため",
            "不正利用の防止、利用規約違反への対応のため",
          ]}
        />
      </Section>

      <Section title="4. 第三者への提供">
        <p>
          当方は、以下の場合を除き、取得した個人情報を本人の同意なく第三者に提供しません。
        </p>
        <BulletList
          items={[
            "法令に基づく場合",
            "人の生命、身体または財産の保護のために必要がある場合であって、本人の同意を得ることが困難であるとき",
          ]}
        />
        <SubSection title="外部AIサービスとの連携について">
          <p>
            本アプリは、ChatGPT・Claude等の外部AIサービスと連携する機能（MCP連携等）を提供する場合があります。連携機能をお客様が有効にした場合、当該機能の利用に必要な範囲でタスクデータ等が外部AIサービス事業者に送信されることがあります。連携の詳細な仕様は、機能の提供開始時にアプリ内または本サイトにて別途明示します。
          </p>
        </SubSection>
      </Section>

      <Section title="5. 業務委託先">
        <BulletList
          items={[
            "Apple Inc.（App Store、Apple ID認証等）",
            "Google LLC（Google認証等）",
            "決済代行サービス事業者（導入時に別途明示します）",
          ]}
        />
      </Section>

      <Section title="6. Cookie等の利用">
        <p>
          本サイトでは、サービス改善やアクセス解析のためにCookie等の技術を利用する場合があります。利用する場合は、その目的と無効化の方法を別途明示します。
        </p>
      </Section>

      <Section title="7. 個人情報の開示・訂正・削除等の請求">
        <p>
          お客様は、当方が保有する自己の個人情報について、開示、訂正、利用停止、削除等を請求することができます。ご希望の場合は、下記お問い合わせ窓口までご連絡ください。本人確認のうえ、法令に従い対応いたします。
        </p>
      </Section>

      <Section title="8. お問い合わせ窓口">
        <BulletList items={["メールアドレス：support@salastudio.jp"]} />
      </Section>

      <Section title="9. 本ポリシーの改定">
        <p>
          当方は、必要に応じて本ポリシーを改定することがあります。改定後のポリシーは、本サイトに掲載した時点から効力を生じるものとします。重要な変更がある場合は、本サイト上またはアプリ内で通知します。
        </p>
      </Section>

      <Section title="10. 制定日">
        <p>制定日：2026年7月12日</p>
      </Section>
    </LegalPage>
  );
}
