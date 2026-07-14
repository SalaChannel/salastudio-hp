import type { ReactNode } from "react";

export function LegalPage({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <main className="mx-auto w-full max-w-3xl flex-1 px-6 py-16">
      <h1 className="font-serif text-3xl font-bold tracking-wide text-ink">
        {title}
      </h1>
      <div className="legal-content mt-10 space-y-8 text-base leading-7 text-muted">
        {children}
      </div>
    </main>
  );
}

export function Section({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="space-y-3">
      <h2 className="font-serif text-xl font-bold tracking-wide text-ink">
        {title}
      </h2>
      {children}
    </section>
  );
}

export function SubSection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="space-y-2 pt-2">
      <h3 className="font-serif text-lg font-bold tracking-wide text-ink">
        {title}
      </h3>
      {children}
    </div>
  );
}

export function BulletList({ items }: { items: ReactNode[] }) {
  return (
    <ul className="list-disc space-y-2 pl-5">
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

export function NumberedList({ items }: { items: ReactNode[] }) {
  return (
    <ol className="list-decimal space-y-2 pl-5">
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ol>
  );
}
