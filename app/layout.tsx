import type { Metadata } from "next";
import { IBM_Plex_Mono, Shippori_Mincho, Zen_Kaku_Gothic_New } from "next/font/google";
import { Footer } from "@/components/Footer";
import { GrainOverlay } from "@/components/GrainOverlay";
import { SiteHeader } from "@/components/SiteHeader";
import "./globals.css";

const shipporiMincho = Shippori_Mincho({
  weight: ["600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-shippori",
});

const zenKaku = Zen_Kaku_Gothic_New({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-zen-kaku",
});

const ibmPlexMono = IBM_Plex_Mono({
  weight: ["500", "600"],
  subsets: ["latin"],
  variable: "--font-ibm-plex-mono",
});

export const metadata: Metadata = {
  title: {
    default: "SalaStudio",
    template: "%s | SalaStudio",
  },
  description:
    "SalaStudio — アプリ開発とミックス受注の個人開発ブランド公式サイト",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${shipporiMincho.variable} ${zenKaku.variable} ${ibmPlexMono.variable} h-full antialiased`}
    >
      <body className="relative flex min-h-full flex-col bg-bg font-sans text-ink">
        <GrainOverlay />
        <SiteHeader />
        <div className="relative z-10 flex flex-1 flex-col">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
