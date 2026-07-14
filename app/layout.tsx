import type { Metadata } from "next";
import { IBM_Plex_Mono, IBM_Plex_Sans_JP } from "next/font/google";
import { Footer } from "@/components/Footer";
import { SiteHeader } from "@/components/SiteHeader";
import "./globals.css";

const ibmPlexMono = IBM_Plex_Mono({
  weight: ["500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-ibm-plex-mono",
});

const ibmPlexSansJP = IBM_Plex_Sans_JP({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-ibm-plex-sans-jp",
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
      className={`${ibmPlexSansJP.variable} ${ibmPlexMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-paper font-sans text-ink">
        <SiteHeader />
        <div className="flex flex-1 flex-col">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
