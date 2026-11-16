import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "果樹園シミュレーター | みつばち果樹園",
  description: "さくらんぼ、桃、すいか、ぶどう、ラ・フランス、りんご。6つの畑を歩いて、品種と出会う果樹園。",
};

export default function VirtualOrchardLayout({ children }: { children: ReactNode }) {
  return children;
}
