export const metadata = {
  title: "サポート",
};

export default function SupportPage() {
  return (
    <main className="mx-auto w-full max-w-3xl flex-1 px-6 py-16">
      <h1 className="font-serif text-3xl font-bold tracking-wide text-ink">
        サポート
      </h1>
      <p className="mt-8 text-base leading-7 text-muted">
        お問い合わせは以下のメールアドレスまでご連絡ください。
      </p>
      <p className="mt-4">
        <a
          href="mailto:support@salastudio.jp"
          className="font-mono text-base text-amber underline underline-offset-4"
        >
          support@salastudio.jp
        </a>
      </p>
    </main>
  );
}
