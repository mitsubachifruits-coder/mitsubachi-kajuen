import type { Metadata } from "next";
import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "みつばち果樹園",
  description: "山形県東根市のみつばち果樹園",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        style={{
          margin: 0,
          background: "#fafaf9",
        }}
      >
        <Header />

        {children}

        <Footer />
      </body>
    </html>
  );
}