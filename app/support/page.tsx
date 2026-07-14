export const metadata = {
  title: "サポート",
};

export default function SupportPage() {
  return (
    <main className="mx-auto w-full max-w-3xl flex-1 px-6 py-16">
      <h1 className="font-mono text-3xl font-semibold tracking-tight text-ink">
        サポート
      </h1>
      <p className="mt-8 text-base leading-7 text-ink/80">
        お問い合わせは以下のメールアドレスまでご連絡ください。
      </p>
      <p className="mt-4">
        <a
          href="mailto:support@salastudio.jp"
          className="font-mono text-base text-ink underline underline-offset-4"
        >
          support@salastudio.jp
        </a>
      </p>
    </main>
  );
}
