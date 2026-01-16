import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Shippori_Mincho } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const shippori = Shippori_Mincho({
  variable: "--font-shippori",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "L'ESTHÈTE | Private Tailoring for the Noble Whim",
  description:
    "わがままに、歴史と戯れて。正統な美学をスパイスに、世界で一番「わがまま」な一着を。オーダースーツ L'ESTHÈTE（レステート）",
  keywords: ["オーダースーツ", "テーラー", "ビスポーク", "高級スーツ", "紳士服"],
  authors: [{ name: "L'ESTHÈTE" }],
  openGraph: {
    title: "L'ESTHÈTE | Private Tailoring for the Noble Whim",
    description: "わがままに、歴史と戯れて。",
    type: "website",
    locale: "ja_JP",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#f9f8f4",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${cormorant.variable} ${shippori.variable} antialiased`}
      >
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
