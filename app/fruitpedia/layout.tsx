import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "くだもの事典 | みつばち果樹園",
  },
  description:
    "日本各地で栽培される果物の品種や産地、家系図、旬を紹介する、みつばち果樹園のくだもの事典。",
};

export default function FruitpediaLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
