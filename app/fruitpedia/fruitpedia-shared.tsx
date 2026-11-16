"use client";

import { useId, type ReactNode } from "react";

export type Kind =
  | "さくらんぼ"
  | "すいか"
  | "桃"
  | "ぶどう"
  | "りんご"
  | "西洋梨"
  | "和梨"
  | "いちご"
  | "柑橘"
  | "レモン"
  | "柿"
  | "すもも"
  | "プルーン"
  | "いちじく"
  | "キウイ"
  | "メロン"
  | "ブルーベリー"
  | "びわ"
  | "あんず"
  | "うめ"
  | "その他";

export type Fruit = {
  id: string;
  name: string;
  kind: Kind;
  period: number[];
  summary: string;
  origin: string;
  color: string;
};

export const fruits: Fruit[] = [
  { id: "sato", name: "佐藤錦", kind: "さくらんぼ", period: [6, 7], summary: "甘味と酸味の調和がよい代表品種。", origin: "山形県・北海道など", color: "#f5d9d5" },
  { id: "benishuho", name: "紅秀峰", kind: "さくらんぼ", period: [6, 7], summary: "大粒で果肉がしっかり。", origin: "山形県など", color: "#efd0d0" },
  { id: "benio", name: "やまがた紅王", kind: "さくらんぼ", period: [6, 7], summary: "大玉で存在感のある品種。", origin: "山形県", color: "#e9c7ca" },
  { id: "benisayaka", name: "紅さやか", kind: "さくらんぼ", period: [5, 6], summary: "早生で濃い赤色が特徴。", origin: "山形県など", color: "#ead0d6" },
  { id: "benitemari", name: "紅てまり", kind: "さくらんぼ", period: [6, 7], summary: "大粒で見映えのよい品種。", origin: "山形県など", color: "#f1d7d6" },
  { id: "benikirari", name: "紅きらり", kind: "さくらんぼ", period: [6], summary: "甘味があり、実の色づきもよい。", origin: "山形県など", color: "#f4dade" },
  { id: "napoleon", name: "ナポレオン", kind: "さくらんぼ", period: [6, 7], summary: "古くから知られるさくらんぼ品種。", origin: "北海道・山形県など", color: "#f7e7cc" },
  { id: "gassan-nishiki", name: "月山錦", kind: "さくらんぼ", period: [6,7], summary: "黄色い果皮と大粒の果実が特徴の希少品種。", origin: "山形県など（栽培例）", color: "#f6efcd" },
  { id: "taisho-nishiki", name: "大将錦", kind: "さくらんぼ", period: [7], summary: "大粒で果肉が硬く、収穫が遅めの品種。", origin: "山形県など", color: "#f0d4ca" },
  { id: "koka-nishiki", name: "香夏錦", kind: "さくらんぼ", period: [6], summary: "黄色地に赤い色が差す早生の品種。", origin: "山形県など", color: "#f4dfc6" },
  { id: "seiko-nishiki", name: "正光錦", kind: "さくらんぼ", period: [6], summary: "早生で果肉のしまりがよい品種。", origin: "山形県など", color: "#f3d7cb" },
  { id: "yamagata-bijin", name: "山形美人", kind: "さくらんぼ", period: [6], summary: "佐藤錦の枝変わり。濃い赤色が特徴。", origin: "山形県など", color: "#ebd0cc" },
  { id: "tenko-nishiki", name: "天香錦", kind: "さくらんぼ", period: [7], summary: "硬めの食感と日持ちのよさが特徴。", origin: "山形県など", color: "#f1d8ca" },
  { id: "junohart", name: "ジュノハート", kind: "さくらんぼ", period: [6,7], summary: "青森県育成の大粒でハート型の品種。", origin: "青森県", color: "#eac7ce" },
  { id: "hanakoma", name: "花駒", kind: "さくらんぼ", period: [6], summary: "比較的早い時期に収穫される早生種。", origin: "福島県・山形県など", color: "#f6dcce" },
  { id: "jaboulay", name: "ジャボレー", kind: "さくらんぼ", period: [6], summary: "赤い果肉と酸味を持つ早生の品種。", origin: "山形県など", color: "#e9c9cf" },
  { id: "hokko", name: "北光", kind: "さくらんぼ", period: [6,7], summary: "昔から栽培されてきた品種の一つ。", origin: "北海道・山形県など", color: "#f1d9cf" },
  { id: "hinode", name: "日の出", kind: "さくらんぼ", period: [6], summary: "早生のさくらんぼとして知られる品種。", origin: "山形県など", color: "#f4dfd0" },
  { id: "jumbo-nishiki", name: "ジャンボ錦", kind: "さくらんぼ", period: [6,7], summary: "大きな果実が特徴のさくらんぼ。", origin: "山形県など", color: "#f2d4d0" },
  { id: "seven-night", name: "七夕錦", kind: "さくらんぼ", period: [7], summary: "7月ごろに収穫期を迎える品種。", origin: "山形県など", color: "#efcdd3" },
  { id: "yume-akari", name: "夢あかり", kind: "さくらんぼ", period: [6], summary: "国内の園地で栽培される赤いさくらんぼ。", origin: "山形県など", color: "#f3d7d2" },
  { id: "shizuka-gozen", name: "静御前", kind: "さくらんぼ", period: [6,7], summary: "山形県の生産園地でも扱われる品種。", origin: "山形県など", color: "#f2d8d3" },
  { id: "tama-zakura", name: "珠桜", kind: "さくらんぼ", period: [6,7], summary: "国内の果樹園で栽培される品種。", origin: "山形県など", color: "#efd3d5" },
  { id: "red-glory", name: "レッドグローリー", kind: "さくらんぼ", period: [6,7], summary: "国内で栽培される赤色のさくらんぼ。", origin: "山形県など", color: "#ebccd2" },
  { id: "diana", name: "ダイアナ", kind: "さくらんぼ", period: [6,7], summary: "山形県内でも栽培例のある品種。", origin: "山形県など", color: "#f0d4ce" },
  { id: "giant-king", name: "ジャイアントキング", kind: "さくらんぼ", period: [6,7], summary: "大玉系として栽培されるさくらんぼ。", origin: "山形県など", color: "#f0d5d1" },
  { id: "north-star", name: "ノーススター", kind: "さくらんぼ", period: [6,7], summary: "国内で栽培されるさくらんぼの一種。", origin: "山形県など", color: "#eed2d5" },
  { id: "saori", name: "さおり", kind: "さくらんぼ", period: [6,7], summary: "国内の品種紹介に登場するさくらんぼ。", origin: "山形県など（栽培例）", color: "#f1d9ce" },
  { id: "sakura-hime", name: "さくら姫", kind: "さくらんぼ", period: [6], summary: "国内で栽培されるさくらんぼの一種。", origin: "山形県など", color: "#f5ddda" },
  { id: "konatsu", name: "小夏", kind: "さくらんぼ", period: [6], summary: "6月上旬ごろに収穫される早生の品種。", origin: "山形県など", color: "#f4dfd5" },
  { id: "diana-bright", name: "ダイアナブライト", kind: "さくらんぼ", period: [6], summary: "6月に収穫される国内栽培の品種。", origin: "山形県など（栽培例）", color: "#f4d9d1" },
  { id: "black-sugar", name: "黒砂糖錦", kind: "さくらんぼ", period: [6], summary: "国内で栽培されるさくらんぼの一種。", origin: "山形県など（栽培例）", color: "#eacbd0" },
  { id: "koyo-nishiki", name: "高陽錦", kind: "さくらんぼ", period: [6], summary: "国内で栽培されるさくらんぼの一種。", origin: "山形県など（栽培例）", color: "#f4d8cf" },

  { id: "matsuribayashi", name: "祭ばやし", kind: "すいか", period: [6, 7, 8], summary: "甘味とシャリ感が特徴の大玉すいか。祭ばやしシリーズの品種があります。", origin: "熊本県・千葉県・山形県など", color: "#dbe8d4" },
  { id: "hitorijime", name: "ひとりじめ", kind: "すいか", period: [6, 7], summary: "小玉で食べきりやすい品種。", origin: "熊本県・千葉県・山形県など", color: "#e4eed5" },
  { id: "raoh", name: "羅皇", kind: "すいか", period: [7, 8], summary: "強い甘味と大玉感が魅力。", origin: "熊本県・山形県など（栽培例）", color: "#d0e1ce" },
  // ナント種苗の育成・販売品種（収穫月は国内の夏作を中心とした目安）
  { id: "pino-girl", name: "ピノ・ガール", kind: "すいか", period: [6, 7, 8], summary: "種がとても小さく、気にせず頬張りやすい甘い小玉すいか。", origin: "熊本県・千葉県など（栽培例）", color: "#dcebd1" },
  { id: "pino-girl-552", name: "ピノ・ガール552", kind: "すいか", period: [6, 7, 8], summary: "ピノ・ガールから発展した小玉すいかの改良品種。", origin: "品種別の主要産地未確認", color: "#daebd1" },
  { id: "pino-girl-555", name: "ピノ・ガール555", kind: "すいか", period: [6, 7, 8], summary: "ピノ・ガールの特徴を受け継ぐ改良系統。", origin: "品種別の主要産地未確認", color: "#e0ead2" },
  { id: "konjiki-raoh", name: "金色羅皇", kind: "すいか", period: [6, 7, 8], summary: "鮮やかな黄色い果肉と際立つ甘さが魅力の大玉すいか。", origin: "熊本県・山形県など（栽培例）", color: "#f1edc5" },
  { id: "raoh-the-sweet", name: "羅皇ザ・スウィート", kind: "すいか", period: [6, 7, 8], summary: "赤い果肉がしっかりとして甘く、皮の近くまで楽しめる大玉すいか。", origin: "熊本県・山形県など（栽培例）", color: "#d3e6cc" },
  { id: "raoh-ar", name: "羅皇AR", kind: "すいか", period: [6, 7, 8], summary: "羅皇の系統から生まれた、病気への強さにも配慮された大玉すいか。", origin: "品種別の主要産地未確認", color: "#d3e3cb" },
  { id: "raoh-z", name: "羅皇Z", kind: "すいか", period: [6, 7, 8], summary: "羅皇シリーズの食味と育てやすさを追求した大玉すいか。", origin: "品種別の主要産地未確認", color: "#d3e7d2" },
  { id: "raoh-long", name: "羅皇ロング", kind: "すいか", period: [6, 7, 8], summary: "長細い形と歯ごたえのある果肉が特徴の大玉すいか。", origin: "品種別の主要産地未確認", color: "#d7e8cf" },
  { id: "golden-jack", name: "3Xゴールデンジャック", kind: "すいか", period: [6, 7, 8], summary: "黒っぽい皮と黄色い果肉が特徴の、種なしタイプのすいか。", origin: "品種別の主要産地未確認", color: "#e8e6cf" },

  { id: "natsukko", name: "なつっこ", kind: "桃", period: [8], summary: "甘味があり、果肉は比較的しっかり。", origin: "山形県・長野県など", color: "#f6e1d8" },
  { id: "kawanakajima", name: "川中島白桃", kind: "桃", period: [8, 9], summary: "大玉で食べごたえのある白桃。", origin: "長野県・山形県など", color: "#f6d8ce" },
  { id: "odoroki", name: "おどろき", kind: "桃", period: [8, 9], summary: "硬めの食感が特徴。", origin: "山形県・福島県など", color: "#f4dcd1" },
  { id: "miharuhakuto", name: "美晴白桃", kind: "桃", period: [9], summary: "やわらかく上品な甘味。", origin: "山形県・福島県など", color: "#f8e5dc" },
  { id: "akatsuki", name: "あかつき", kind: "桃", period: [7, 8], summary: "甘味と果汁の多さで人気。", origin: "福島県・山形県など", color: "#f2d6cd" },
  { id: "madoka", name: "まどか", kind: "桃", period: [8], summary: "大玉で香りのよい桃。", origin: "山梨県・福島県・長野県など", color: "#f4dcd4" },
  { id: "shimizu", name: "清水白桃", kind: "桃", period: [7, 8], summary: "なめらかな果肉とやさしい甘味。", origin: "岡山県など", color: "#f8e8de" },

  { id: "shine", name: "シャインマスカット", kind: "ぶどう", period: [9, 10], summary: "皮ごと食べられる香り高いぶどう。", origin: "山形県・長野県・岡山県など", color: "#e5eccf" },
  { id: "fuji-no-kagayaki", name: "富士の輝き", kind: "ぶどう", period: [9, 10], summary: "黒紫色の大きな粒と濃厚な甘さを持つ、ブラックシャインマスカットの愛称でも知られるぶどう。", origin: "山梨県など（育成・栽培例）", color: "#ddd4e8" },
  { id: "pione", name: "ピオーネ", kind: "ぶどう", period: [8, 9], summary: "大粒で濃厚な味わい。", origin: "山形県・岡山県など", color: "#e3daed" },
  { id: "fujiminori", name: "藤稔", kind: "ぶどう", period: [8, 9], summary: "果粒が大きく果汁も多い。", origin: "山形県・山梨県など", color: "#dcd2e8" },
  { id: "steuben", name: "スチューベン", kind: "ぶどう", period: [9, 10], summary: "甘味が強く濃い色合い。", origin: "青森県・山形県など", color: "#ded4e7" },
  { id: "kyoho", name: "巨峰", kind: "ぶどう", period: [8, 9], summary: "日本を代表する黒ぶどう。", origin: "山梨県・長野県・岡山県など", color: "#e0d8e9" },
  { id: "delaware", name: "デラウェア", kind: "ぶどう", period: [7, 8], summary: "小粒で甘味の強い定番品種。", origin: "山形県・大阪府など", color: "#f0dce6" },
  { id: "nagano-purple", name: "ナガノパープル", kind: "ぶどう", period: [9], summary: "皮ごと食べられる黒ぶどう。", origin: "長野県", color: "#d7cce3" },

  { id: "fuji", name: "サンふじ", kind: "りんご", period: [11, 12], summary: "太陽の光をたっぷり浴びて育った、甘くてジューシーなふじりんご。", origin: "青森県・山形県・長野県など", color: "#f1d7d0" },
  { id: "shinano-sweet", name: "シナノスイート", kind: "りんご", period: [10, 11], summary: "甘味が強く、食べやすい。", origin: "長野県・山形県など", color: "#f3dfcf" },
  { id: "akibae", name: "秋映", kind: "りんご", period: [9, 10], summary: "濃い赤色としっかりした酸味。", origin: "長野県・山形県など", color: "#e5cecb" },
  { id: "shinano-gold", name: "シナノゴールド", kind: "りんご", period: [10, 11], summary: "黄色い果皮と爽やかな酸味。", origin: "長野県・山形県など", color: "#f3ebce" },
  { id: "tsugaru", name: "つがる", kind: "りんご", period: [9], summary: "果汁が多く、やさしい甘味。", origin: "青森県・山形県など", color: "#f3ded5" },
  { id: "orin", name: "王林", kind: "りんご", period: [10, 11], summary: "香りのよい青りんご系。", origin: "青森県・山形県など", color: "#e9efcf" },
  { id: "kougyoku", name: "紅玉", kind: "りんご", period: [10, 11], summary: "酸味があり加工にも向く。", origin: "青森県・山形県など", color: "#efcfce" },

  { id: "lafrance", name: "ラ・フランス", kind: "西洋梨", period: [10, 11, 12], summary: "追熟で香りが広がる西洋梨。", origin: "山形県など", color: "#e6e9d4" },
  { id: "ballade", name: "バラード", kind: "西洋梨", period: [9, 10], summary: "秋に収穫される西洋梨。", origin: "山形県など", color: "#e8e7cd" },
  { id: "melowrich", name: "メロウリッチ", kind: "西洋梨", period: [10, 11], summary: "高糖度で果汁の多い西洋梨。", origin: "山形県など", color: "#e8e5ca" },
  { id: "aurora", name: "オーロラ", kind: "西洋梨", period: [9], summary: "やわらかな果肉と甘い香り。", origin: "山形県など", color: "#e8dfc7" },
  { id: "lelectier", name: "ル・レクチェ", kind: "西洋梨", period: [11, 12], summary: "なめらかな果肉と濃い香り。", origin: "新潟県など", color: "#eee4ce" },
  { id: "general-leclerc", name: "ゼネラル・レクラーク", kind: "西洋梨", period: [10, 11], summary: "大玉で芳醇な香り。", origin: "山形県など", color: "#e0e5cd" },
  { id: "margherite", name: "マルゲリット・マリーラ", kind: "西洋梨", period: [9, 10], summary: "大玉でやわらかな果肉。", origin: "山形県・新潟県など", color: "#e9e4ca" },

  { id: "kaori", name: "かおり", kind: "和梨", period: [9, 10], summary: "大玉で香りのある梨。", origin: "千葉県・茨城県など", color: "#ece9cf" },
  { id: "amanta", name: "甘太", kind: "和梨", period: [10, 11], summary: "甘味の強い和梨。", origin: "茨城県・栃木県など（栽培例）", color: "#eee5c7" },
  { id: "hosui", name: "豊水", kind: "和梨", period: [8, 9], summary: "果汁が多く、甘味と酸味のバランスがよい。", origin: "千葉県・茨城県・栃木県など", color: "#e8d9be" },
  { id: "kosui", name: "幸水", kind: "和梨", period: [8, 9], summary: "やわらかめでみずみずしい。", origin: "千葉県・茨城県・栃木県など", color: "#f0e3c6" },
  { id: "akizuki", name: "あきづき", kind: "和梨", period: [9, 10], summary: "大玉で甘味が強い。", origin: "千葉県・茨城県・栃木県など", color: "#eee0c1" },
  { id: "niitaka", name: "新高", kind: "和梨", period: [10, 11], summary: "大玉で日持ちしやすい。", origin: "千葉県・茨城県・栃木県など", color: "#e7d5b8" },

  { id: "takamori", name: "高砂", kind: "さくらんぼ", period: [6], summary: "比較的早い時期に収穫される品種。", origin: "山形県・北海道など", color: "#f5d8c9" },
  { id: "nanyo", name: "南陽", kind: "さくらんぼ", period: [6, 7], summary: "大玉で果汁が多い。", origin: "北海道・山形県など", color: "#f5d6cd" },
  { id: "summit", name: "サミット", kind: "さくらんぼ", period: [6, 7], summary: "ハート形の大玉品種。", origin: "北海道・山形県など（栽培例）", color: "#e9c2cc" },
  { id: "suiran", name: "紅ゆたか", kind: "さくらんぼ", period: [6], summary: "早めの時期に収穫される赤いさくらんぼ。", origin: "山形県など", color: "#ebc9c9" },
  { id: "miyako", name: "都", kind: "すいか", period: [7, 8], summary: "大玉系のすいか。", origin: "熊本県・千葉県・山形県など", color: "#d7e6d2" },
  { id: "matsuribayashi-777", name: "祭ばやし777", kind: "すいか", period: [7, 8], summary: "祭ばやしシリーズの大玉品種。", origin: "熊本県・千葉県・山形県など", color: "#d5e4cd" },
  { id: "hakuhou", name: "白鳳", kind: "桃", period: [7, 8], summary: "やわらかな果肉と豊かな果汁。", origin: "山梨県・和歌山県など", color: "#f8e1d6" },
  { id: "hakuho", name: "日川白鳳", kind: "桃", period: [6, 7], summary: "比較的早く収穫される白桃。", origin: "山梨県・和歌山県など", color: "#f9dfd5" },
  { id: "yuzora", name: "ゆうぞら", kind: "桃", period: [8, 9], summary: "晩生で果肉がしっかりした桃。", origin: "福島県など", color: "#f4d2cb" },
  { id: "golden-peach", name: "黄金桃", kind: "桃", period: [8, 9], summary: "黄色い果肉と濃厚な甘味。", origin: "長野県・山形県など", color: "#f6e4bb" },
  { id: "queen-nina", name: "クイーンニーナ", kind: "ぶどう", period: [9, 10], summary: "大粒で赤みのある果皮が特徴。", origin: "山梨県・長野県など", color: "#efd4db" },
  { id: "sunverde", name: "サンヴェルデ", kind: "ぶどう", period: [8, 9], summary: "黄緑色で大粒のぶどう。", origin: "山梨県など（栽培例）", color: "#e3ebcd" },
  { id: "grohskrone", name: "グロースクローネ", kind: "ぶどう", period: [8, 9], summary: "極大粒の黒ぶどう。", origin: "山梨県など（栽培例）", color: "#d8cde0" },
  { id: "aki-queen", name: "安芸クイーン", kind: "ぶどう", period: [8, 9], summary: "鮮やかな赤色と強い甘味。", origin: "岡山県・広島県など", color: "#efd1d5" },
  { id: "seto-giants", name: "瀬戸ジャイアンツ", kind: "ぶどう", period: [9, 10], summary: "黄緑色で皮ごと食べやすい。", origin: "岡山県など", color: "#e6edcf" },
  { id: "toki", name: "トキ", kind: "りんご", period: [10], summary: "黄色い果皮と芳醇な香り。", origin: "青森県など", color: "#f2e9cf" },
  { id: "gunma-meigetsu", name: "ぐんま名月", kind: "りんご", period: [10, 11], summary: "黄色い果皮と甘味の強さが特徴。", origin: "群馬県・青森県など", color: "#eff0d3" },
  { id: "morinokagayaki", name: "もりのかがやき", kind: "りんご", period: [10], summary: "大玉で甘い黄色りんご。", origin: "岩手県など", color: "#f5edce" },
  { id: "haruka", name: "はるか", kind: "りんご", period: [11, 12], summary: "黄色い果皮で甘味が強い。", origin: "岩手県など", color: "#f2e9c9" },
  { id: "sekaiichi", name: "世界一", kind: "りんご", period: [10, 11], summary: "大きな果実と赤い果皮。", origin: "青森県など", color: "#efd2cd" },
  { id: "jonagold", name: "ジョナゴールド", kind: "りんご", period: [10, 11], summary: "さわやかな酸味と香り。", origin: "青森県など", color: "#f2d6cc" },
  { id: "nansui", name: "南水", kind: "和梨", period: [9, 10], summary: "甘味が強く果汁も多い。", origin: "長野県", color: "#f1e1bf" },
  { id: "nijisseiki", name: "二十世紀", kind: "和梨", period: [8, 9], summary: "黄緑色の果皮とみずみずしい食感。", origin: "鳥取県など", color: "#edf0cb" },
  { id: "shinko", name: "新興", kind: "和梨", period: [10, 11], summary: "大玉で貯蔵性のよい梨。", origin: "新潟県など", color: "#e8dabb" },
  { id: "nikkori", name: "にっこり", kind: "和梨", period: [10, 11], summary: "大玉で甘味の強い晩生梨。", origin: "栃木県", color: "#e9d9b9" },
  { id: "hoshi-no-kinka", name: "星の金貨", kind: "りんご", period: [10, 11], summary: "薄い果皮と香りのよい黄色りんご。", origin: "青森県など", color: "#f3edcb" },
  // 新しいカテゴリーと国内で栽培される果実・品種（時期は目安）
  { id: "tochiotome", name: "とちおとめ", kind: "いちご", period: [1, 2, 3, 4, 5], summary: "甘味と酸味が調和する定番品種。", origin: "栃木県・茨城県など", color: "#f7d5d6" },
  { id: "tochiaika", name: "とちあいか", kind: "いちご", period: [1, 2, 3, 4, 5], summary: "栃木県育成の甘味が強いいちご。", origin: "栃木県", color: "#f7d5d6" },
  { id: "amaou", name: "あまおう", kind: "いちご", period: [1, 2, 3, 4, 5], summary: "大粒で赤い果実が特徴。", origin: "福岡県", color: "#f5d2d7" },
  { id: "benihoppe", name: "紅ほっぺ", kind: "いちご", period: [1, 2, 3, 4, 5], summary: "甘味と酸味の両方を楽しめる。", origin: "静岡県・愛知県など", color: "#f3d0d0" },
  { id: "sagahonoka", name: "さがほのか", kind: "いちご", period: [1, 2, 3, 4, 5], summary: "果皮が明るい赤色で香りもよい。", origin: "佐賀県・長崎県など", color: "#f6dbd6" },
  { id: "yayoihime", name: "やよいひめ", kind: "いちご", period: [1, 2, 3, 4, 5], summary: "春先も品質を保ちやすい品種。", origin: "群馬県など", color: "#f3d7db" },
  { id: "akihime", name: "章姫", kind: "いちご", period: [1, 2, 3, 4, 5], summary: "細長い果形とやわらかな果肉。", origin: "静岡県・愛知県など", color: "#f6d6d3" },
  { id: "otomegokoro", name: "おいCベリー", kind: "いちご", period: [1, 2, 3, 4, 5], summary: "農研機構育成の甘酸っぱい品種。", origin: "長崎県・熊本県など（栽培例）", color: "#f0c9cd" },
  { id: "yukiusagi", name: "雪うさぎ", kind: "いちご", period: [1, 2, 3, 4], summary: "果皮の白い、希少な白いちご。", origin: "佐賀県など（栽培例）", color: "#f4ece7" },
  { id: "natsumizuki", name: "なつみずき", kind: "いちご", period: [6, 7, 8, 9], summary: "夏秋期に収穫されるいちご。", origin: "北海道など", color: "#f1d1d6" },
  { id: "miyagawa", name: "宮川早生", kind: "柑橘", period: [10, 11, 12], summary: "早生の温州みかん。", origin: "和歌山県・静岡県など", color: "#f7e0c3" },
  { id: "aoshima", name: "青島温州", kind: "柑橘", period: [12, 1, 2], summary: "晩生の温州みかん。", origin: "静岡県・神奈川県など", color: "#f5dbc1" },
  { id: "setoka", name: "せとか", kind: "柑橘", period: [2, 3], summary: "果肉がやわらかく濃厚な味わい。", origin: "愛媛県・和歌山県など", color: "#f5d8b9" },
  { id: "shiranui", name: "不知火", kind: "柑橘", period: [2, 3, 4], summary: "頭部の凸形状が特徴的な柑橘。", origin: "熊本県・愛媛県など", color: "#f6ddc2" },
  { id: "harumi", name: "はるみ", kind: "柑橘", period: [2, 3], summary: "甘味があり、じょうのう膜が薄い。", origin: "愛媛県・静岡県など", color: "#f8e4c9" },
  { id: "kiyomi", name: "清見", kind: "柑橘", period: [3, 4], summary: "果汁の多いタンゴール。", origin: "愛媛県・和歌山県など", color: "#f4dec5" },
  { id: "amanatsu", name: "甘夏", kind: "柑橘", period: [4, 5, 6], summary: "さわやかな酸味の夏みかん系。", origin: "熊本県・愛媛県など", color: "#f4e4bd" },
  { id: "hassaku", name: "八朔", kind: "柑橘", period: [1, 2, 3, 4], summary: "ほろ苦さと歯ごたえが特徴。", origin: "和歌山県・広島県など", color: "#f6e8cc" },
  { id: "iyokan", name: "伊予柑", kind: "柑橘", period: [1, 2, 3], summary: "香りが強く果汁が豊富。", origin: "愛媛県など", color: "#f7dcc0" },
  { id: "dekopon", name: "ポンカン", kind: "柑橘", period: [1, 2, 3], summary: "甘い香りが特徴。", origin: "鹿児島県・高知県など", color: "#f5ddc0" },
  { id: "yuzu", name: "ゆず", kind: "柑橘", period: [10, 11, 12], summary: "香りを生かして料理にも使う。", origin: "高知県・徳島県など", color: "#f5edca" },
  { id: "sudachi", name: "すだち", kind: "柑橘", period: [8, 9, 10], summary: "爽やかな香酸柑橘。", origin: "徳島県", color: "#e5ebcd" },
  { id: "kabosu", name: "かぼす", kind: "柑橘", period: [8, 9, 10], summary: "果汁に酸味と香りがある。", origin: "大分県", color: "#e6edce" },
  { id: "lisbon-lemon", name: "リスボン", kind: "レモン", period: [10, 11, 12, 1, 2, 3, 4], summary: "酸味と香りが豊かな、国内でも栽培される代表的なレモン。", origin: "広島県・愛媛県など", color: "#f5efc5" },
  { id: "eureka-lemon", name: "ユーレカ", kind: "レモン", period: [10, 11, 12, 1, 2, 3, 4], summary: "果汁が多く、国内でも栽培されるレモンの品種。", origin: "広島県・愛媛県など（栽培例）", color: "#f4edc7" },
  { id: "rinoka-lemon", name: "璃の香", kind: "レモン", period: [11, 12, 1], summary: "リスボンとヒュウガナツの交配で生まれた、酸味が穏やかなレモン様品種。", origin: "広島県・愛媛県など（栽培例）", color: "#f6edc6" },
  { id: "kinkan", name: "金柑", kind: "柑橘", period: [12, 1, 2, 3], summary: "果皮も食べられる小さな柑橘。", origin: "宮崎県・鹿児島県など", color: "#f5dcb9" },
  { id: "benimadonna", name: "紅まどんな", kind: "柑橘", period: [11, 12, 1], summary: "愛媛県の果実ブランド。", origin: "愛媛県", color: "#f7d1b7" },
  { id: "fuyugaki", name: "富有", kind: "柿", period: [10, 11, 12], summary: "甘柿の代表品種。", origin: "岐阜県・福岡県・奈良県など", color: "#f2d6b9" },
  { id: "jiro", name: "次郎", kind: "柿", period: [10, 11], summary: "扁平な形と歯ごたえが特徴。", origin: "愛知県・静岡県など", color: "#f5dbc2" },
  { id: "taishu", name: "太秋", kind: "柿", period: [9, 10, 11], summary: "果汁が多く、サクサクした食感。", origin: "福岡県・熊本県など", color: "#f1dcb7" },
  { id: "soshu", name: "早秋", kind: "柿", period: [9, 10], summary: "早生の甘柿。", origin: "福岡県・和歌山県など（栽培例）", color: "#f5d5b8" },
  { id: "hiratanenashi", name: "平核無", kind: "柿", period: [10, 11], summary: "渋抜きして食べる四角い柿。", origin: "山形県・和歌山県など", color: "#f0d1b2" },
  { id: "hachiya", name: "蜂屋", kind: "柿", period: [10, 11], summary: "干し柿にも利用される渋柿。", origin: "岐阜県・福島県など", color: "#f1d0b7" },
  { id: "saijo", name: "西条", kind: "柿", period: [10, 11], summary: "干し柿にも使われる伝統品種。", origin: "島根県・鳥取県など", color: "#f0d6bc" },
  { id: "kanshu", name: "甘秋", kind: "柿", period: [9, 10], summary: "早生の甘柿。", origin: "福岡県・岐阜県など（栽培例）", color: "#f3d5b6" },
  { id: "oishi", name: "大石早生", kind: "すもも", period: [6, 7], summary: "早い時期に収穫されるすもも。", origin: "山梨県・長野県・山形県など", color: "#f6d3bd" },
  { id: "soldam", name: "ソルダム", kind: "すもも", period: [7, 8], summary: "果肉が赤く濃厚なすもも。", origin: "山梨県・長野県・山形県など", color: "#e6bfc5" },
  { id: "taiyo", name: "太陽", kind: "すもも", period: [8, 9], summary: "大玉で赤い果皮。", origin: "山梨県・長野県・山形県など", color: "#f1c4bd" },
  { id: "kiyo", name: "貴陽", kind: "すもも", period: [7, 8], summary: "大玉で甘味が強い。", origin: "山梨県・長野県・山形県など", color: "#e7b9bc" },
  { id: "summerangel", name: "サマーエンジェル", kind: "すもも", period: [7, 8], summary: "山梨県育成の甘酸っぱい品種。", origin: "山梨県", color: "#f0c6bc" },
  { id: "summerbeaut", name: "サマービュート", kind: "すもも", period: [7, 8], summary: "酸味と甘味のバランスがよい。", origin: "山梨県", color: "#f1c9c7" },
  { id: "autumnsweet", name: "秋姫", kind: "すもも", period: [9, 10], summary: "晩生の大玉すもも。", origin: "山梨県・長野県・山形県など", color: "#eed2c1" },
  { id: "sugar", name: "シュガー", kind: "プルーン", period: [8, 9], summary: "甘味の強い小〜中玉品種。", origin: "長野県・北海道など", color: "#d8c8df" },
  { id: "sunprune", name: "サンプルーン", kind: "プルーン", period: [9, 10], summary: "国内で広く栽培されるプルーン。", origin: "長野県・北海道など", color: "#d9c8e4" },
  { id: "president", name: "プレジデント", kind: "プルーン", period: [9, 10], summary: "大玉の晩生プルーン。", origin: "長野県・北海道など（栽培例）", color: "#d3c4de" },
  { id: "stanley", name: "スタンレイ", kind: "プルーン", period: [9, 10], summary: "濃紫色の果皮で加工にも向く。", origin: "長野県・北海道など", color: "#d5c4df" },
  { id: "bayler", name: "ベイラー", kind: "プルーン", period: [9, 10], summary: "大玉で果汁の多いプルーン。", origin: "長野県など（栽培例）", color: "#d5c7df" },
  { id: "masui", name: "桝井ドーフィン", kind: "いちじく", period: [8, 9, 10, 11], summary: "日本で広く栽培されるいちじく。", origin: "愛知県・和歌山県・大阪府など", color: "#dfc8d2" },
  { id: "bananafig", name: "バナーネ", kind: "いちじく", period: [8, 9, 10], summary: "細長い果形で甘味が強い。", origin: "愛知県・和歌山県・大阪府など", color: "#e6d7be" },
  { id: "violette", name: "ビオレソリエス", kind: "いちじく", period: [9, 10, 11], summary: "小玉で濃い紫色。", origin: "兵庫県・愛知県など（栽培例）", color: "#d9c5d6" },
  { id: "whitegenoa", name: "ホワイトゼノア", kind: "いちじく", period: [8, 9, 10], summary: "淡い果皮と甘い果肉。", origin: "愛知県・和歌山県・大阪府など", color: "#e4e7c8" },
  { id: "dalmatie", name: "ダルマティ", kind: "いちじく", period: [8, 9, 10], summary: "大玉の緑皮系いちじく。", origin: "兵庫県など（栽培例）", color: "#dae5c9" },
  { id: "hayward", name: "ヘイワード", kind: "キウイ", period: [11, 12, 1, 2, 3], summary: "緑色の果肉を持つ定番品種。", origin: "愛媛県・福岡県・和歌山県など", color: "#d9e5c4" },
  { id: "rainbowred", name: "レインボーレッド", kind: "キウイ", period: [9, 10], summary: "中心部が赤く色づく小〜中玉品種。", origin: "静岡県・愛媛県など", color: "#e5dfca" },
  { id: "tokyogold", name: "東京ゴールド", kind: "キウイ", period: [10, 11], summary: "黄色い果肉の品種。", origin: "品種別の主要産地未確認", color: "#ede5c6" },
  { id: "applekiwi", name: "アップルキウイ", kind: "キウイ", period: [10, 11], summary: "丸みのある果形。", origin: "和歌山県など（栽培例）", color: "#dce6c6" },
  { id: "kouryoku", name: "香緑", kind: "キウイ", period: [10, 11], summary: "香川県育成の緑肉品種。", origin: "香川県", color: "#dde7c6" },
  { id: "andes", name: "アンデスメロン", kind: "メロン", period: [5, 6, 7, 8], summary: "網目のある緑肉メロン。", origin: "茨城県・熊本県など", color: "#e4e8ca" },
  { id: "quincy", name: "クインシーメロン", kind: "メロン", period: [5, 6, 7, 8], summary: "赤肉で甘味の強いメロン。", origin: "茨城県・熊本県など", color: "#f3dcc5" },
  { id: "yuubari", name: "夕張メロン", kind: "メロン", period: [6, 7, 8], summary: "北海道の地域ブランド。", origin: "北海道（夕張市）", color: "#f1d9c6" },
  { id: "crown", name: "クラウンメロン", kind: "メロン", period: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], summary: "静岡県の温室栽培メロンブランド。", origin: "静岡県", color: "#e6ebd0" },
  { id: "prince", name: "プリンスメロン", kind: "メロン", period: [5, 6, 7], summary: "網目のない小ぶりなメロン。", origin: "茨城県・熊本県など", color: "#e4e9c9" },
  { id: "takami", name: "タカミメロン", kind: "メロン", period: [6, 7, 8], summary: "日持ちしやすい網目メロン。", origin: "千葉県・茨城県など", color: "#e3e8c8" },
  { id: "duke", name: "デューク", kind: "ブルーベリー", period: [6, 7], summary: "ハイブッシュ系の早生品種。", origin: "長野県・群馬県・茨城県など", color: "#d4d6ed" },
  { id: "bluecrop", name: "ブルークロップ", kind: "ブルーベリー", period: [6, 7, 8], summary: "ハイブッシュ系の代表品種。", origin: "長野県・群馬県・茨城県など", color: "#d5d6eb" },
  { id: "spartan", name: "スパルタン", kind: "ブルーベリー", period: [6, 7], summary: "大粒で香りのよい品種。", origin: "長野県・群馬県・茨城県など", color: "#d7d4ec" },
  { id: "legacy", name: "レガシー", kind: "ブルーベリー", period: [6, 7, 8], summary: "果実品質のよいハイブッシュ系。", origin: "長野県・群馬県・茨城県など", color: "#d0d1e6" },
  { id: "tifblue", name: "ティフブルー", kind: "ブルーベリー", period: [7, 8, 9], summary: "ラビットアイ系の定番品種。", origin: "長野県・群馬県・茨城県など", color: "#d5d6ed" },
  { id: "brightwell", name: "ブライトウェル", kind: "ブルーベリー", period: [7, 8, 9], summary: "ラビットアイ系の品種。", origin: "長野県・群馬県・茨城県など", color: "#d5d5e8" },
  { id: "mogi", name: "茂木", kind: "びわ", period: [5, 6], summary: "小ぶりで甘味のある代表品種。", origin: "長崎県・千葉県など", color: "#f5dfc6" },
  { id: "tanaka", name: "田中", kind: "びわ", period: [5, 6], summary: "比較的大玉のびわ。", origin: "千葉県・長崎県など", color: "#f4dfc7" },
  { id: "nagaski", name: "長崎早生", kind: "びわ", period: [4, 5], summary: "施設栽培でも使われる早生品種。", origin: "長崎県・香川県など", color: "#f4e0c7" },
  { id: "biwa-kibou", name: "希房", kind: "びわ", period: [5, 6], summary: "種がほとんどないタイプのびわ。", origin: "千葉県など（栽培例）", color: "#f4e3cb" },
  { id: "heiwa", name: "平和", kind: "あんず", period: [6, 7], summary: "国内の代表的なあんず品種。", origin: "長野県・青森県など", color: "#f3ddc4" },
  { id: "shinsyuo", name: "信州大実", kind: "あんず", period: [6, 7], summary: "大玉のあんず。", origin: "長野県", color: "#f5dfc4" },
  { id: "nicocot", name: "ニコニコット", kind: "あんず", period: [6, 7], summary: "酸味が穏やかで甘味が強い。", origin: "長野県など（栽培例）", color: "#f4dcca" },
  { id: "ohisamacot", name: "おひさまコット", kind: "あんず", period: [6, 7], summary: "大果で甘味のある品種。", origin: "長野県など（栽培例）", color: "#f2d9c3" },
  { id: "harcot", name: "ハーコット", kind: "あんず", period: [6, 7], summary: "生食向きの甘い品種。", origin: "長野県・青森県など", color: "#f4d7c1" },
  { id: "nanko", name: "南高", kind: "うめ", period: [6, 7], summary: "梅干しや梅酒にも利用される大玉品種。", origin: "和歌山県", color: "#e5e9c9" },
  { id: "shirakaga", name: "白加賀", kind: "うめ", period: [6, 7], summary: "梅酒にも使われる品種。", origin: "群馬県・埼玉県など", color: "#e6ebcb" },
  { id: "koshuno", name: "甲州小梅", kind: "うめ", period: [5, 6], summary: "小粒で梅漬けにも向く。", origin: "山梨県・群馬県など", color: "#e7e9c8" },
  { id: "wago", name: "和郷", kind: "うめ", period: [6, 7], summary: "自家結実性のある農研機構育成品種。", origin: "和歌山県など（試験・栽培例）", color: "#e5e7c9" },
  { id: "reiwa", name: "麗和", kind: "うめ", period: [6, 7], summary: "自家結実性のある農研機構育成品種。", origin: "和歌山県など（試験・栽培例）", color: "#e6eaca" },
  { id: "pawpaw", name: "ポポー", kind: "その他", period: [9, 10], summary: "香りが強く、クリーミーな果肉を持つ果物。", origin: "全国各地で小規模栽培", color: "#dfe8bc" },
  { id: "feijoa-apollo", name: "フェイジョア・アポロ", kind: "その他", period: [10, 11], summary: "香り豊かな緑色の果実。", origin: "香川県・静岡県など（栽培例）", color: "#dce6c6" },
  { id: "feijoa-coolidge", name: "フェイジョア・クーリッジ", kind: "その他", period: [11, 12], summary: "国内でも栽培されるフェイジョア。", origin: "香川県・静岡県など（栽培例）", color: "#d9e5c8" },
  { id: "feijoa-mammoth", name: "フェイジョア・マモス", kind: "その他", period: [10, 11], summary: "比較的大果のフェイジョア。", origin: "香川県・静岡県など（栽培例）", color: "#d9e3c2" },
  { id: "feijoa-triumph", name: "フェイジョア・トライアンフ", kind: "その他", period: [11, 12], summary: "香りのよい大果系。", origin: "香川県・静岡県など（栽培例）", color: "#d8e5c5" },
  { id: "akebi-shikou", name: "アケビ・紫幸", kind: "その他", period: [9, 10], summary: "濃紫色の大きなミツバアケビ。", origin: "山形県など（栽培例）", color: "#e1d0e6" },
  { id: "akebi-hosomurasaki", name: "アケビ・細紫", kind: "その他", period: [9, 10], summary: "細長い紫色のアケビ。", origin: "山形県など（栽培例）", color: "#e2cfe5" },
  { id: "akebi-murasaki", name: "アケビ・紫水晶", kind: "その他", period: [9, 10], summary: "濃紫色の果皮が目を引く。", origin: "山形県など（栽培例）", color: "#dccae2" },
  { id: "akebi-banana", name: "バナナあけび", kind: "その他", period: [9, 10], summary: "黄色い果皮と細長い形が特徴。", origin: "山形県など（栽培例）", color: "#eee8c7" },
  { id: "mube", name: "ムベ", kind: "その他", period: [10, 11], summary: "アケビ科の常緑つる植物の果実。", origin: "和歌山県・高知県など（栽培例）", color: "#e5d6df" },
  { id: "haskap", name: "ハスカップ", kind: "その他", period: [6, 7], summary: "北海道などで栽培される小さな青紫の実。", origin: "北海道", color: "#d4d6e7" },
  { id: "juneberry", name: "ジューンベリー", kind: "その他", period: [5, 6], summary: "赤紫色に熟す小果実。", origin: "各地で小規模栽培（特定の主要産地なし）", color: "#e5d1dc" },
  { id: "yamamomo", name: "ヤマモモ", kind: "その他", period: [6, 7], summary: "赤く熟す甘酸っぱい果実。", origin: "高知県・徳島県など", color: "#e8cbd2" },
  { id: "guava", name: "グアバ", kind: "その他", period: [8, 9, 10], summary: "南西諸島などで栽培される香りのよい果実。", origin: "沖縄県・鹿児島県など", color: "#e6e8bf" },
  { id: "passion", name: "パッションフルーツ", kind: "その他", period: [6, 7, 8, 9], summary: "酸味と南国の香りが特徴。", origin: "鹿児島県・沖縄県など", color: "#e0cfe4" },
  { id: "dragonfruit", name: "ドラゴンフルーツ", kind: "その他", period: [7, 8, 9, 10], summary: "鮮やかな果皮と種のある果肉。", origin: "沖縄県・鹿児島県など", color: "#efd3da" },
  { id: "starfruit", name: "スターフルーツ", kind: "その他", period: [9, 10, 11], summary: "切ると星形になる果実。", origin: "沖縄県など", color: "#f1eac1" },
  { id: "jabuticaba", name: "ジャボチカバ", kind: "その他", period: [5, 6, 7, 8, 9, 10], summary: "幹に直接実がなる珍しい果樹。", origin: "各地で小規模栽培（特定の主要産地なし）", color: "#dad2e7" },
  { id: "loquat-rare", name: "シークヮーサー", kind: "柑橘", period: [8, 9, 10, 11, 12], summary: "沖縄で親しまれる香酸柑橘。", origin: "沖縄県（大宜味村・名護市・本部町など）", color: "#e4ebca" },
];


const cherryMap: Record<string, { left: string; right: string; sizeL: number; sizeR: number; leaf: string }> = {
  sato: { left: "#ff5a58", right: "#f04747", sizeL: 28, sizeR: 27, leaf: "#67a35e" },
  benishuho: { left: "#d73b49", right: "#c92e3d", sizeL: 31, sizeR: 30, leaf: "#5d9b57" },
  benio: { left: "#bd2637", right: "#ab2031", sizeL: 33, sizeR: 31, leaf: "#5d9555" },
  benisayaka: { left: "#9e2537", right: "#8d2032", sizeL: 28, sizeR: 28, leaf: "#6ca565" },
  benitemari: { left: "#cc3648", right: "#b92c42", sizeL: 30, sizeR: 32, leaf: "#74ad66" },
  benikirari: { left: "#d84459", right: "#c02e47", sizeL: 27, sizeR: 29, leaf: "#6ea767" },
  nanyo: { left: "#f05c64", right: "#d8424e", sizeL: 33, sizeR: 32, leaf: "#67a35e" },
  summit: { left: "#b52c4c", right: "#a22240", sizeL: 33, sizeR: 33, leaf: "#689a5e" },
  takamori: { left: "#e88368", right: "#dc6a60", sizeL: 27, sizeR: 27, leaf: "#6ba360" },
  suiran: { left: "#ce3440", right: "#be2c38", sizeL: 29, sizeR: 29, leaf: "#629e58" },
  napoleon: { left: "#efc46b", right: "#e5b74f", sizeL: 28, sizeR: 27, leaf: "#6ca565" },
  "gassan-nishiki": { left: "#e7d45c", right: "#e0c94c", sizeL: 33, sizeR: 32, leaf: "#67a35e" },
  "taisho-nishiki": { left: "#bb3745", right: "#a92c3e", sizeL: 32, sizeR: 31, leaf: "#67a35e" },
  "koka-nishiki": { left: "#ebad79", right: "#d98b68", sizeL: 27, sizeR: 26, leaf: "#67a35e" },
  "seiko-nishiki": { left: "#e47763", right: "#cd514d", sizeL: 28, sizeR: 27, leaf: "#67a35e" },
  "yamagata-bijin": { left: "#b62b40", right: "#a52237", sizeL: 29, sizeR: 28, leaf: "#67a35e" },
  "tenko-nishiki": { left: "#d76b58", right: "#c4544c", sizeL: 29, sizeR: 28, leaf: "#67a35e" },
  "junohart": { left: "#a82243", right: "#951c38", sizeL: 35, sizeR: 34, leaf: "#67a35e" },
  "hanakoma": { left: "#d96862", right: "#c85152", sizeL: 27, sizeR: 26, leaf: "#67a35e" },
  "jaboulay": { left: "#b52b4c", right: "#9c2644", sizeL: 27, sizeR: 26, leaf: "#67a35e" },
  "hokko": { left: "#d85b55", right: "#bf464d", sizeL: 28, sizeR: 27, leaf: "#67a35e" },
  "hinode": { left: "#e88c73", right: "#d66b63", sizeL: 26, sizeR: 25, leaf: "#67a35e" },
  "jumbo-nishiki": { left: "#d44d58", right: "#b83948", sizeL: 31, sizeR: 30, leaf: "#67a35e" },
  "seven-night": { left: "#cd4656", right: "#ad3149", sizeL: 30, sizeR: 29, leaf: "#67a35e" },
  "yume-akari": { left: "#dd595d", right: "#c64450", sizeL: 29, sizeR: 28, leaf: "#67a35e" },
  "shizuka-gozen": { left: "#d7595f", right: "#bf4652", sizeL: 30, sizeR: 29, leaf: "#67a35e" },
  "tama-zakura": { left: "#c94d55", right: "#b23b49", sizeL: 30, sizeR: 29, leaf: "#67a35e" },
  "red-glory": { left: "#ae2d45", right: "#9c263b", sizeL: 30, sizeR: 29, leaf: "#67a35e" },
  "diana": { left: "#ce5661", right: "#b33b4c", sizeL: 28, sizeR: 27, leaf: "#67a35e" },
  "giant-king": { left: "#bd3e51", right: "#a63048", sizeL: 34, sizeR: 33, leaf: "#67a35e" },
  "north-star": { left: "#c13d53", right: "#a62d46", sizeL: 29, sizeR: 28, leaf: "#67a35e" },
  "saori": { left: "#dd6665", right: "#c64e55", sizeL: 28, sizeR: 27, leaf: "#67a35e" },
  "sakura-hime": { left: "#e17772", right: "#cf5d60", sizeL: 27, sizeR: 26, leaf: "#67a35e" },
  "konatsu": { left: "#e68b74", right: "#d97567", sizeL: 26, sizeR: 25, leaf: "#67a35e" },
  "diana-bright": { left: "#dc726b", right: "#c95a5d", sizeL: 28, sizeR: 27, leaf: "#67a35e" },
  "black-sugar": { left: "#9f3049", right: "#8a263d", sizeL: 29, sizeR: 28, leaf: "#67a35e" },
  "koyo-nishiki": { left: "#e17a67", right: "#ca5a5d", sizeL: 27, sizeR: 26, leaf: "#67a35e" },
};

const grapeMap: Record<string, { berry: string; highlight: string; leaf: string; positions: [number, number, number][] }> = {
  shine: { berry: "#bfd863", highlight: "#eef6c6", leaf: "#66a25e", positions: [[75, 30, 15], [100, 28, 15], [125, 30, 15], [64, 54, 16], [88, 54, 16], [112, 54, 16], [136, 54, 16], [74, 80, 16], [100, 80, 16], [126, 80, 16], [86, 106, 16], [114, 106, 16], [100, 129, 15]] },
  pione: { berry: "#6d4ac5", highlight: "#c7b7ef", leaf: "#6ca565", positions: [[76, 30, 15], [100, 28, 15], [124, 30, 15], [64, 54, 16], [88, 54, 16], [112, 54, 16], [136, 54, 16], [74, 80, 16], [100, 80, 16], [126, 80, 16], [86, 106, 16], [114, 106, 16], [100, 129, 15]] },
  "fuji-no-kagayaki": { berry: "#372744", highlight: "#9486a8", leaf: "#61985c", positions: [[77,29,17],[100,26,18],[123,29,17],[63,54,18],[87,54,18],[112,54,18],[137,54,18],[74,81,18],[100,81,18],[126,81,18],[86,108,17],[114,108,17],[100,135,17]] },
  fujiminori: { berry: "#55318f", highlight: "#cab7ef", leaf: "#5f9655", positions: [[72, 29, 17], [100, 26, 17], [128, 29, 17], [60, 56, 18], [86, 56, 18], [114, 56, 18], [140, 56, 18], [74, 84, 18], [100, 84, 18], [126, 84, 18], [88, 113, 18], [112, 113, 18], [100, 138, 17]] },
  steuben: { berry: "#4b2d74", highlight: "#aa99d8", leaf: "#699c60", positions: [[78, 30, 14], [100, 30, 14], [122, 30, 14], [66, 54, 15], [88, 54, 15], [112, 54, 15], [134, 54, 15], [76, 78, 15], [100, 78, 15], [124, 78, 15], [89, 102, 15], [111, 102, 15], [100, 124, 14]] },
  kyoho: { berry: "#5f378f", highlight: "#c9b2e8", leaf: "#679c60", positions: [[75, 30, 16], [100, 28, 16], [125, 30, 16], [63, 55, 17], [88, 55, 17], [112, 55, 17], [137, 55, 17], [75, 82, 17], [100, 82, 17], [125, 82, 17], [87, 110, 16], [113, 110, 16], [100, 135, 15]] },
  delaware: { berry: "#a2568a", highlight: "#e2bfd8", leaf: "#73a768", positions: [[82, 40, 11], [100, 38, 11], [118, 40, 11], [72, 57, 11], [90, 57, 11], [108, 57, 11], [126, 57, 11], [82, 74, 11], [100, 74, 11], [118, 74, 11], [91, 91, 11], [109, 91, 11], [100, 108, 10]] },
  "queen-nina": { berry: "#c55d70", highlight: "#f0bac8", leaf: "#68a360", positions: [[75,30,16],[100,28,16],[125,30,16],[64,54,17],[88,54,17],[112,54,17],[136,54,17],[74,80,17],[100,80,17],[126,80,17],[86,107,16],[114,107,16],[100,132,15]] },
  sunverde: { berry: "#bdd66d", highlight: "#eff7c6", leaf: "#6ba361", positions: [[75,30,15],[100,28,15],[125,30,15],[64,54,16],[88,54,16],[112,54,16],[136,54,16],[74,80,16],[100,80,16],[126,80,16],[86,106,16],[114,106,16],[100,129,15]] },
  grohskrone: { berry: "#47316f", highlight: "#baa6e0", leaf: "#679b5c", positions: [[75,30,19],[100,28,19],[125,30,19],[64,58,19],[88,58,19],[112,58,19],[136,58,19],[75,86,19],[100,86,19],[125,86,19],[87,114,18],[113,114,18]] },
  "aki-queen": { berry: "#d96b7b", highlight: "#f4c9d4", leaf: "#68a360", positions: [[75,30,15],[100,28,15],[125,30,15],[64,54,16],[88,54,16],[112,54,16],[136,54,16],[74,80,16],[100,80,16],[126,80,16],[86,106,16],[114,106,16],[100,129,15]] },
  "seto-giants": { berry: "#b7d96f", highlight: "#e7f4bc", leaf: "#69a365", positions: [[75,30,15],[100,28,15],[125,30,15],[64,54,16],[88,54,16],[112,54,16],[136,54,16],[74,80,16],[100,80,16],[126,80,16],[86,106,16],[114,106,16],[100,129,15]] },
  "nagano-purple": { berry: "#42235f", highlight: "#b59cd2", leaf: "#6aa05f", positions: [[75, 30, 16], [100, 28, 16], [125, 30, 16], [64, 54, 17], [88, 54, 17], [112, 54, 17], [136, 54, 17], [74, 80, 17], [100, 80, 17], [126, 80, 17], [87, 108, 16], [113, 108, 16], [100, 133, 15]] },
};

const appleMap: Record<string, { base: string; accent?: string; leaf: string }> = {
  fuji: { base: "#e74646", accent: "#f1c766", leaf: "#5d9b56" },
  "ancestor-ゴールデンデリシャス": { base: "#e2c856", accent: "#fff0aa", leaf: "#69a261" },
  "shinano-sweet": { base: "#d85f4f", accent: "#f4c58b", leaf: "#67a35e" },
  akibae: { base: "#8f1f2e", accent: "#ca4a56", leaf: "#5f9b58" },
  "shinano-gold": { base: "#d8bf4a", accent: "#f3e4a4", leaf: "#5a9453" },
  tsugaru: { base: "#dc6a5e", accent: "#f3d08e", leaf: "#69a361" },
  orin: { base: "#c4cf6a", accent: "#edf3b5", leaf: "#679f5f" },
  toki: { base: "#e5ce78", accent: "#f6efc0", leaf: "#639b59" },
  "gunma-meigetsu": { base: "#d8d977", accent: "#f5efbd", leaf: "#639a5a" },
  morinokagayaki: { base: "#e3cd5e", accent: "#f3e79f", leaf: "#63a05a" },
  haruka: { base: "#e7d16a", accent: "#f6e8a7", leaf: "#65a25c" },
  sekaiichi: { base: "#d34240", accent: "#ee8c73", leaf: "#65a25e" },
  jonagold: { base: "#d45442", accent: "#f4ae67", leaf: "#639d58" },
  "hoshi-no-kinka": { base: "#e4d46a", accent: "#f7e9a9", leaf: "#69a360" },
  kougyoku: { base: "#be2f38", accent: "#e17b71", leaf: "#639857" },
};

const peachMap: Record<string, { inner: string; mid: string; outer: string; leaf: string; size?: number }> = {
  natsukko: { inner: "#ffe6c7", mid: "#f6b18a", outer: "#e98a72", leaf: "#67a35e" },
  kawanakajima: { inner: "#fff0db", mid: "#f6c0a1", outer: "#e99a82", leaf: "#5d9b56", size: 60 },
  odoroki: { inner: "#fff1df", mid: "#f3b79d", outer: "#df8b7b", leaf: "#629a59", size: 61 },
  miharuhakuto: { inner: "#fff5e8", mid: "#f6c8b7", outer: "#eba193", leaf: "#6da763" },
  akatsuki: { inner: "#ffe8cf", mid: "#f4b59a", outer: "#e78d7c", leaf: "#6aa462" },
  madoka: { inner: "#ffefdc", mid: "#f5c2a5", outer: "#e79d87", leaf: "#6fa868" },
  hakuhou: { inner: "#ffecd7", mid: "#f7bd9e", outer: "#df816f", leaf: "#6da267" },
  hakuho: { inner: "#fff0db", mid: "#f7c8a7", outer: "#e4947e", leaf: "#74aa64" },
  yuzora: { inner: "#fce5d2", mid: "#f1b299", outer: "#d97b74", leaf: "#649857" },
  "golden-peach": { inner: "#fff3be", mid: "#f6d06e", outer: "#e6a947", leaf: "#71a15e" },
  shimizu: { inner: "#fff4e8", mid: "#f7d1be", outer: "#efaf9d", leaf: "#72ac68" },
};

const pearMap: Record<string, { base: string; glow: string; leaf: string; round?: boolean }> = {
  lafrance: { base: "#aab85e", glow: "#d9dc87", leaf: "#5d9755" },
  ballade: { base: "#bec76e", glow: "#e2e7a9", leaf: "#689f5e" },
  lelectier: { base: "#c7bc61", glow: "#efe09e", leaf: "#6b9e5c" },
  "general-leclerc": { base: "#b2be68", glow: "#dde59e", leaf: "#689c5d" },
  margherite: { base: "#c0c16d", glow: "#efe8ab", leaf: "#72a163" },
  kaori: { base: "#c8c26e", glow: "#ebe6a9", leaf: "#72a266", round: true },
  amanta: { base: "#cbb858", glow: "#f0e0a1", leaf: "#6a9d60", round: true },
  hosui: { base: "#caa25a", glow: "#ead29f", leaf: "#77985d", round: true },
  kosui: { base: "#d5b05d", glow: "#efd9a8", leaf: "#7ba060", round: true },
  akizuki: { base: "#c8aa5f", glow: "#efd8a0", leaf: "#729b5c", round: true },
  nansui: { base: "#d8b55a", glow: "#f1e0ac", leaf: "#72a360", round: true },
  nijisseiki: { base: "#c4d078", glow: "#ecf3bb", leaf: "#68a35b", round: true },
  shinko: { base: "#bca061", glow: "#e8cf9c", leaf: "#71945d", round: true },
  nikkori: { base: "#c5a05c", glow: "#ebcfa0", leaf: "#739b5f", round: true },
  niitaka: { base: "#bd9d54", glow: "#e2c88f", leaf: "#6d9356", round: true },
  "ancestor-162-29": { base: "#c4d078", glow: "#ecf3bb", leaf: "#68a35b", round: true },
  "ancestor-菊水": { base: "#c4d078", glow: "#ecf3bb", leaf: "#68a35b", round: true },
  "ancestor-早生幸蔵": { base: "#d5b05d", glow: "#efd9a8", leaf: "#7ba060", round: true },
  "ancestor-イ-33": { base: "#caa25a", glow: "#ead29f", leaf: "#77985d", round: true },
};

const watermelonMap: Record<string, { body: string; stripe: string }> = {
  matsuribayashi: { body: "#278c56", stripe: "#b4d65d" },
  hitorijime: { body: "#3a965f", stripe: "#c0da70" },
  miyako: { body: "#37895a", stripe: "#b2d677" },
  "matsuribayashi-777": { body: "#1e8155", stripe: "#c2dd6b" },
  raoh: { body: "#217f50", stripe: "#a7cf5f" },
  "pino-girl": { body: "#398f54", stripe: "#b8d967" },
  "pino-girl-552": { body: "#378b58", stripe: "#c2d86a" },
  "pino-girl-555": { body: "#378a50", stripe: "#bad566" },
  "konjiki-raoh": { body: "#27884e", stripe: "#b7d35f" },
  "raoh-the-sweet": { body: "#278b50", stripe: "#a9d06c" },
  "raoh-ar": { body: "#2c8252", stripe: "#a4cd62" },
  "raoh-z": { body: "#25824a", stripe: "#afd064" },
  "raoh-long": { body: "#2c8252", stripe: "#b3d169" },
  "golden-jack": { body: "#273c31", stripe: "#385440" },
};


// 品目ごとの基本形は揃え、品種ごとの相対的な印象を形・大きさ・色で表現。
// 実寸比較ではなく、図鑑のための簡略化したイラストです。
const STRAWBERRY_STYLES: Record<string, { x: number; y: number; fill: string }> = {
  tochiotome: { x: 1.0, y: 1.0, fill: "#df3947" },
  tochiaika: { x: 1.07, y: .94, fill: "#de3947" },
  amaou: { x: 1.14, y: 1.08, fill: "#cc3040" },
  benihoppe: { x: 1.03, y: 1.05, fill: "#dc3344" },
  sagahonoka: { x: 1.01, y: .96, fill: "#ee5760" },
  yayoihime: { x: 1.06, y: 1.0, fill: "#e44956" },
  akihime: { x: .88, y: 1.10, fill: "#ef5b5a" },
  otomegokoro: { x: 1.03, y: .98, fill: "#d53340" },
  yukiusagi: { x: 1.02, y: 1.0, fill: "#f7ece5" },
  natsumizuki: { x: 1.0, y: .97, fill: "#e74d55" },
};

const LEMON_STYLES: Record<string, { scale: number; fill: string }> = {
  "lisbon-lemon": { scale: 1, fill: "#edda52" },
  "eureka-lemon": { scale: 1.01, fill: "#e5d145" },
  "rinoka-lemon": { scale: 1.15, fill: "#f0df74" },
};

export function FruitVector({ fruit, dense = false }: { fruit: Fruit; dense?: boolean }) {
  const svgClass = dense ? "vectorSvg dense" : "vectorSvg";
  const uniqueId = useId().replace(/:/g, "");

  if (fruit.kind === "さくらんぼ") {
    const c = cherryMap[fruit.id] || cherryMap.sato;
    return (
      <div className="fruitVectorWrap">
        <svg viewBox="0 0 200 160" className={svgClass} aria-hidden="true">
          <path d="M100 58 C96 35 84 25 70 17" fill="none" stroke="#557a44" strokeWidth="6" strokeLinecap="round" />
          <path d="M103 58 C109 33 124 24 140 18" fill="none" stroke="#557a44" strokeWidth="6" strokeLinecap="round" />
          <ellipse cx="141" cy="24" rx="20" ry="10" transform="rotate(-24 141 24)" fill={c.leaf} />
          <circle cx="78" cy="92" r={c.sizeL} fill={c.left} />
          <circle cx="123" cy="95" r={c.sizeR} fill={c.right} />
          <ellipse cx="67" cy="80" rx="10" ry="14" transform="rotate(-28 67 80)" fill="rgba(255,255,255,.34)" />
          <ellipse cx="111" cy="83" rx="10" ry="14" transform="rotate(-28 111 83)" fill="rgba(255,255,255,.28)" />
        </svg>
      </div>
    );
  }

  if (fruit.kind === "すいか") {
    const c = watermelonMap[fruit.id] || watermelonMap.matsuribayashi;
    return (
      <div className="fruitVectorWrap">
        <svg viewBox="0 0 200 160" className={svgClass} aria-hidden="true">
          <ellipse cx="100" cy="84" rx={fruit.id.startsWith("pino-girl") || fruit.id === "hitorijime" ? 48 : fruit.id === "raoh-long" ? 65 : 60} ry={fruit.id === "raoh-long" ? 41 : fruit.id.startsWith("pino-girl") ? 43 : 48} fill={c.body} />
          {[58, 78, 100, 122, 142].map((x) => (
            <path key={x} d={`M${x} 42 C ${x + 10} 68, ${x + 10} 100, ${x} 126`} fill="none" stroke={c.stripe} strokeWidth="8" strokeLinecap="round" opacity="0.92" />
          ))}
          <ellipse cx="78" cy="62" rx="12" ry="8" transform="rotate(-28 78 62)" fill="rgba(255,255,255,.32)" />
        </svg>
      </div>
    );
  }

  if (fruit.kind === "桃") {
    const c = peachMap[fruit.id] || peachMap.natsukko;
    const gradId = `${uniqueId}-peach`;
    const size = c.size ?? (fruit.id === "shimizu" ? 54 : fruit.id === "akatsuki" ? 57 : 58);
    return (
      <div className="fruitVectorWrap">
        <svg viewBox="0 0 200 160" className={svgClass} aria-hidden="true">
          <defs>
            <radialGradient id={gradId} cx="40%" cy="34%" r="70%">
              <stop offset="0%" stopColor={c.inner} />
              <stop offset="58%" stopColor={c.mid} />
              <stop offset="100%" stopColor={c.outer} />
            </radialGradient>
          </defs>
          <circle cx="100" cy="88" r={size} fill={`url(#${gradId})`} />
          <path d="M100 58 C108 77 109 98 102 117" fill="none" stroke="rgba(157,82,67,.42)" strokeWidth="3" strokeLinecap="round" />
          <path d="M100 56 L104 36" fill="none" stroke="#557a44" strokeWidth="6" strokeLinecap="round" />
          <ellipse cx="124" cy="36" rx="18" ry="9" transform="rotate(-28 124 36)" fill={c.leaf} />
          <ellipse cx="84" cy="72" rx="10" ry="15" transform="rotate(-35 84 72)" fill="rgba(255,255,255,.28)" />
        </svg>
      </div>
    );
  }

  if (fruit.kind === "ぶどう") {
    const c = grapeMap[fruit.id] || grapeMap.pione;
    return (
      <div className="fruitVectorWrap">
        <svg viewBox="0 0 200 160" className={svgClass} aria-hidden="true">
          <path d="M100 25 L100 42" fill="none" stroke="#557a44" strokeWidth="6" strokeLinecap="round" />
          <ellipse cx="124" cy="28" rx="18" ry="9" transform="rotate(-28 124 28)" fill={c.leaf} />
          {c.positions.map(([cx, cy, r], i) => (
            <g key={i}>
              <circle cx={cx} cy={cy} r={r} fill={c.berry} />
              <circle cx={cx - r * 0.32} cy={cy - r * 0.34} r={r * 0.22} fill={c.highlight} opacity="0.65" />
            </g>
          ))}
        </svg>
      </div>
    );
  }

  if (fruit.kind === "りんご") {
    const c = appleMap[fruit.id] || appleMap.fuji;
    const appleScale = fruit.id === "sekaiichi" ? 1.12 : fruit.id === "kougyoku" ? .90 : fruit.id === "hoshi-no-kinka" ? .94 : 1;
    const leftId = `${uniqueId}-apple-left`;
    const rightId = `${uniqueId}-apple-right`;
    return (
      <div className="fruitVectorWrap">
        <svg viewBox="0 0 200 160" className={svgClass} aria-hidden="true">
          <defs>
            <radialGradient id={leftId} cx="34%" cy="29%" r="76%">
              <stop offset="0%" stopColor={c.accent || c.base} />
              <stop offset="47%" stopColor={c.base} />
              <stop offset="100%" stopColor={c.base} />
            </radialGradient>
            <radialGradient id={rightId} cx="34%" cy="25%" r="78%">
              <stop offset="0%" stopColor={c.accent || c.base} />
              <stop offset="62%" stopColor={c.base} />
              <stop offset="100%" stopColor={c.base} />
            </radialGradient>
          </defs>
          <g transform={`translate(100 89) scale(${appleScale}) translate(-100 -89)`}>
            <path d="M101 56 L105 18" fill="none" stroke="#654a32" strokeWidth="6.5" strokeLinecap="round" />
            <ellipse cx="134" cy="26" rx="22" ry="12" transform="rotate(-33 134 26)" fill={c.leaf} />
            <circle cx="77" cy="95" r="43" fill={`url(#${leftId})`} />
            <circle cx="123" cy="94" r="42" fill={`url(#${rightId})`} />
            <ellipse cx="62" cy="77" rx="13" ry="20" transform="rotate(-28 62 77)" fill="rgba(255,255,255,.43)" />
          </g>
        </svg>
      </div>
    );
  }


  // 新カテゴリーは写真に依存しない独自のシンプルなSVG。
  // ベクター内の細かな形状・色は品種ごとに変える。
  if (fruit.kind !== "西洋梨" && fruit.kind !== "和梨") {
    const seed = Array.from(fruit.id).reduce((n, c) => n + c.charCodeAt(0), 0);
    const tone = ["#e65d60", "#c93f50", "#cc6f50", "#e4a14e", "#a4bb65", "#7970a7"][seed % 6];
    const common = { className: svgClass, viewBox: "0 0 200 160", "aria-hidden": true as const };
    const shine = <ellipse cx="74" cy="70" rx="12" ry="16" fill="rgba(255,255,255,.3)" transform="rotate(-25 74 70)" />;
    let shape: ReactNode;
    switch (fruit.kind) {
      case "いちご": {
        const style = STRAWBERRY_STYLES[fruit.id] ?? { x: 1, y: 1, fill: "#e44956" };
        // 同じイチゴ型を使い、章姫はやや細長く、あまおうはふくよかに。
        shape = <g transform={`translate(100 89) scale(${style.x} ${style.y}) translate(-100 -89)`}>
          <path d="M100 41 C73 41 56 56 58 79 C60 100 74 120 88 133 C95 139 105 139 112 133 C126 120 140 100 142 79 C144 56 127 41 100 41Z"
            fill={style.fill} stroke={fruit.id === "yukiusagi" ? "#c7bab2" : "none"} strokeWidth={fruit.id === "yukiusagi" ? 3.2 : 0} strokeLinejoin="round" />
          <path d="M100 46 L100 28 M100 48 Q77 18 64 37 Q82 58 100 49 Q118 18 136 37 Q123 58 100 49Z" fill="#679c5e" stroke="#679c5e" strokeWidth="3" />
          {[[82,71],[109,69],[94,85],[121,88],[77,101],[104,104],[92,118],[116,117]].map(([x,y],i)=><ellipse key={i} cx={x} cy={y} rx="2.2" ry="3.3" fill={fruit.id === "yukiusagi" ? "#e7bd88" : "#f8dc9e"} />)}
          {shine}
        </g>;
        break;
      }
      case "レモン": {
        const style = LEMON_STYLES[fruit.id] ?? LEMON_STYLES["lisbon-lemon"];
        // 基本SVGは全品種共通。璃の香だけ大きさ、品種ごとに黄味を微調整。
        shape = <g transform={`translate(100 88) scale(${style.scale}) translate(-100 -88)`}>
          <path d="M99 44 C68 43 49 60 44 84 L37 92 L45 99 C49 120 69 135 101 135 C130 135 150 120 155 98 L163 90 L154 83 C148 60 128 44 99 44 Z" fill={style.fill} />
          <path d="M100 42 L104 25" fill="none" stroke="#806343" strokeWidth="5.5" strokeLinecap="round" />
          <ellipse cx="122" cy="31" rx="19" ry="9" transform="rotate(-25 122 31)" fill="#6b9d62" />
          <ellipse cx="76" cy="68" rx="11" ry="15" transform="rotate(-28 76 68)" fill="rgba(255,255,255,.36)" />
        </g>;
        break;
      }
      case "柑橘":
        shape = <><circle cx="100" cy="87" r={fruit.id === "kinkan" ? 40 : 54} fill={fruit.id === "yuzu" ? "#e7d356" : fruit.id === "sudachi" || fruit.id === "kabosu" || fruit.id === "loquat-rare" ? "#73a25f" : "#e9a344"}/><path d="M100 37 L104 23" stroke="#806343" strokeWidth="6" strokeLinecap="round"/><ellipse cx="124" cy="30" rx="20" ry="9" transform="rotate(-25 124 30)" fill="#6b9d62" />{shine}</>;
        break;
      case "柿":
        shape = <><path d="M55 76 C57 49 79 47 100 49 C121 47 143 49 145 76 C151 113 127 134 100 135 C73 134 49 113 55 76Z" fill="#e6a152"/><path d="M100 54 L100 31 M100 54 Q75 25 63 48 L99 65 Q124 25 139 48 L100 65Z" fill="#67975d" stroke="#67975d" strokeWidth="3"/>{shine}</>;
        break;
      case "すもも":
      case "プルーン":
      case "あんず":
        shape = <><ellipse cx="100" cy="87" rx={fruit.kind === "プルーン" ? 46 : 53} ry="53" fill={fruit.kind === "プルーン" ? "#635187" : fruit.kind === "あんず" ? "#e8a567" : "#cb6474"}/><path d="M100 43 L104 25" stroke="#755438" strokeWidth="5" strokeLinecap="round"/><ellipse cx="122" cy="29" rx="17" ry="8" transform="rotate(-24 122 29)" fill="#709b62" />{shine}</>;
        break;
      case "いちじく":
        shape = <><path d="M100 40 C79 44 76 59 70 69 C56 90 62 113 81 129 Q100 142 119 129 C138 113 144 90 130 69 C124 59 121 44 100 40Z" fill={fruit.id === "whitegenoa" || fruit.id === "dalmatie" ? "#9eaf6e" : "#80608b"}/><path d="M100 43 L103 25" stroke="#76563a" strokeWidth="5" strokeLinecap="round"/>{shine}</>;
        break;
      case "キウイ":
        shape = <><ellipse cx="100" cy="89" rx="56" ry="45" fill={fruit.id === "tokyogold" ? "#b4ad64" : "#8a9c62"}/><ellipse cx="100" cy="89" rx="46" ry="36" fill={fruit.id === "tokyogold" ? "#d6d67f" : "#9cc67d"}/><ellipse cx="100" cy="89" rx="14" ry="12" fill="#f0eac7"/>{Array.from({length:12},(_,i)=>{const a=i*Math.PI/6;return <ellipse key={i} cx={100+26*Math.cos(a)} cy={89+22*Math.sin(a)} rx="2" ry="3" transform={`rotate(${i*30} ${100+26*Math.cos(a)} ${89+22*Math.sin(a)})`} fill="#4c5742"/>})}</>;
        break;
      case "メロン":
        shape = <><circle cx="100" cy="88" r="54" fill={fruit.id === "quincy" || fruit.id === "yuubari" ? "#d5a465" : "#a7bb7d"}/>{[-30,-15,0,15,30].map((x)=><path key={x} d={`M${100+x} 38 Q ${118+x} 88 ${100+x} 137`} fill="none" stroke="#dce3bd" strokeWidth="3" opacity=".7"/>)}{[-25,-10,5,20].map((y)=><path key={y} d={`M49 ${88+y} Q 100 ${111+y} 151 ${88+y}`} fill="none" stroke="#dce3bd" strokeWidth="3" opacity=".7"/>)}<path d="M100 35 L104 19" stroke="#627b46" strokeWidth="6" strokeLinecap="round"/>{shine}</>;
        break;
      case "ブルーベリー":
        shape = <>{[[68,72],[105,67],[131,90],[79,110],[111,120]].map(([x,y],i)=><g key={i}><circle cx={x} cy={y} r="26" fill={i%2?"#5e709b":"#7183b0"}/><path d={`M${x-9} ${y-18} L${x} ${y-25} L${x+9} ${y-18} L${x+5} ${y-11} L${x-5} ${y-11}Z`} fill="#455a86"/><circle cx={x-8} cy={y-8} r="6" fill="rgba(255,255,255,.22)"/></g>)}</>;
        break;
      case "びわ":
        shape = <><ellipse cx="78" cy="98" rx="29" ry="42" transform="rotate(-17 78 98)" fill="#e9ac65"/><ellipse cx="123" cy="94" rx="30" ry="43" transform="rotate(13 123 94)" fill="#e8a45c"/><path d="M100 53 L100 26" stroke="#78603d" strokeWidth="5" strokeLinecap="round"/><ellipse cx="123" cy="29" rx="19" ry="9" transform="rotate(-22 123 29)" fill="#639b5a" />{shine}</>;
        break;
      case "うめ":
        shape = <><circle cx="100" cy="88" r="51" fill={fruit.id === "nanko" ? "#9bab70" : "#bacb7b"}/><path d="M100 40 L104 23" stroke="#795a3a" strokeWidth="5" strokeLinecap="round"/><ellipse cx="120" cy="28" rx="19" ry="8" transform="rotate(-23 120 28)" fill="#6a9d5e"/>{shine}</>;
        break;
      case "その他": {
        const n=fruit.name;
        if(n.includes("ポポー")) shape=<><ellipse cx="94" cy="89" rx="46" ry="58" transform="rotate(20 94 89)" fill="#a1b967"/><ellipse cx="132" cy="65" rx="25" ry="43" transform="rotate(-12 132 65)" fill="#87a65e"/>{shine}</>;
        else if(n.includes("フェイジョア")) shape=<><ellipse cx="100" cy="89" rx="48" ry="56" fill="#719b78"/><ellipse cx="100" cy="33" rx="12" ry="8" fill="#8aae7a"/>{shine}</>;
        else if(n.includes("アケビ")||n.includes("あけび")||n.includes("ムベ")) shape=<><ellipse cx="100" cy="88" rx="65" ry="34" fill={n.includes("バナナ")?"#d5c66d":"#8c6fa9"}/><path d="M67 90 Q101 113 134 90" stroke="#e6d8c1" strokeWidth="6" fill="none" strokeLinecap="round"/>{shine}</>;
        else if(n.includes("ハスカップ")||n.includes("ジューン")||n.includes("ジャボチ")) shape=<>{[[73,90],[114,75],[111,117]].map(([x,y],i)=><circle key={i} cx={x} cy={y} r="28" fill="#635681"/>)}{shine}</>;
        else if(n.includes("ドラゴン")) shape=<><ellipse cx="100" cy="91" rx="56" ry="43" fill="#d85b7d"/><path d="M63 64 L48 51 L65 81 M109 50 L116 28 L126 62 M141 100 L164 94 L135 114" fill="#6ea66e"/>{shine}</>;
        else if(n.includes("スター")) shape=<><path d="M100 22 L118 66 L165 63 L130 97 L147 137 L100 116 L53 137 L70 97 L35 63 L82 66Z" fill="#e8d473"/>{shine}</>;
        else if(n.includes("シークヮーサー") || n.includes("シークワーサー")) shape=<><circle cx="100" cy="89" r="53" fill="#6fa55e"/><path d="M100 42 L103 24" stroke="#755a3c" strokeWidth="5"/><ellipse cx="123" cy="27" rx="18" ry="9" transform="rotate(-23 123 27)" fill="#6a9d61"/>{shine}</>;
        else shape=<><ellipse cx="100" cy="89" rx="53" ry="49" fill={tone}/><path d="M100 42 L103 24" stroke="#755a3c" strokeWidth="5"/><ellipse cx="123" cy="27" rx="18" ry="9" transform="rotate(-23 123 27)" fill="#6a9d61"/>{shine}</>;
        break;
      }
      default:
        shape=<circle cx="100" cy="90" r="52" fill={tone}/>;
    }
    return <div className="fruitVectorWrap"><svg {...common}>{shape}</svg></div>;
  }

  const p = pearMap[fruit.id] || pearMap.lafrance;
  const gradId = `${uniqueId}-pear`;
  return (
    <div className="fruitVectorWrap">
      <svg viewBox="0 0 200 160" className={svgClass} aria-hidden="true">
        <defs>
          <radialGradient id={gradId} cx="40%" cy="34%" r="70%">
            <stop offset="0%" stopColor={p.glow} />
            <stop offset="65%" stopColor={p.base} />
            <stop offset="100%" stopColor={p.base} />
          </radialGradient>
        </defs>
        <path d={p.round ? "M100 56 L104 30" : "M100 42 L104 23"} fill="none" stroke="#604b33" strokeWidth="6" strokeLinecap="round" />
        <ellipse cx="124" cy="26" rx="18" ry="8" transform="rotate(-28 124 26)" fill={p.leaf} />
        <path
          d={
            p.round
              ? "M100 54 C69 50 45 67 45 92 C45 118 68 133 100 133 C132 133 155 118 155 92 C155 67 131 50 100 54 Z"
              : "M100 42 C90 47 91 56 87 66 C71 76 64 89 64 105 C64 125 80 137 100 138 C120 137 136 125 136 105 C136 89 129 76 113 66 C109 56 110 47 100 42 Z"
          }
          fill={`url(#${gradId})`}
        />
        {[
          [-10, 92],
          [8, 110],
          [-3, 121],
          [12, 88],
        ].map(([dx, dy], i) => (
          <circle key={i} cx={100 + dx} cy={dy} r="1.8" fill="rgba(100,78,44,.24)" />
        ))}
        <ellipse cx="88" cy="74" rx="10" ry="14" transform="rotate(-24 88 74)" fill="rgba(255,255,255,.22)" />
      </svg>
    </div>
  );
}



export const fruitDetails: Record<string, string> = {
  "fuji-no-kagayaki": "志村葡萄研究所でシャインマスカットとウインクの交配から生まれた黒紫色の大粒ぶどう。ブラックシャインマスカットとも呼ばれ、濃厚で甘みが強く、皮ごと食べられることで知られています。収穫時期は栽培地・施設の有無によって変わりますが、おおむね9〜10月が目安です。",
  "sato": "山形県で生まれた品種で、黄玉とナポレオンを親に持ちます。甘さとほどよい酸味があり、日本のさくらんぼを代表する存在です。",
  "benishuho": "佐藤錦より遅い時期に楽しめることが多く、肉厚でしっかりした食感が特徴。大粒で贈答用にも親しまれています。",
  "benio": "山形県が育成した大粒のさくらんぼ。紅秀峰とC-47-70という育成系統を親に持ち、粒の大きさが際立ちます。",
  "benisayaka": "濃い赤色に色づきやすい早生品種で、山形県のさくらんぼシーズンの早い時期に登場します。佐藤錦とセネカを親に持ちます。",
  "benitemari": "ビックと佐藤錦から育成された山形県の品種。粒が大きく、果肉に厚みがあるため、見た目にも食べごたえにも存在感があります。",
  "benikirari": "レーニアとコンパクトステラを親に持つ品種。実の色づきと甘さが特徴で、山形県の育成品種のひとつです。",
  "napoleon": "佐藤錦の交配親としても知られる歴史ある品種。赤みの差す黄色い果皮が特徴で、山形県のさくらんぼの品種改良にも関わってきました。",
  "gassan-nishiki": "黄色い果皮が特徴の大粒品種で、中国で育成されました。赤いさくらんぼと見た目が大きく異なり、国内でも少量栽培されています。",
  "taisho-nishiki": "晩生の大粒品種で、佐藤錦の収穫が落ち着くころにも楽しめます。硬めの果肉が持ち味です。",
  "koka-nishiki": "佐藤錦と高砂の交配で生まれた早生品種。黄色を基調とする果皮に赤みが入り、初夏の比較的早い時期に出回ります。",
  "seiko-nishiki": "早い時期から収穫でき、実がしまりやすい品種。柔らかい果肉よりも、しっかりとした食感を好む人に向いています。",
  "yamagata-bijin": "佐藤錦の枝に起きた自然な変化から生まれた枝変わり品種。佐藤錦より濃い赤色に色づく姿が印象的です。",
  "tenko-nishiki": "紅秀峰の交配親となった品種。歯ごたえがしっかりしていて日持ちのよさでも知られ、品種改良の系譜をたどる際にも重要です。",
  "junohart": "青森県で育成された、ハート形に見える大粒のさくらんぼ。紅秀峰とサミットを親に持ち、見た目の個性が際立っています。",
  "hanakoma": "早生品種として知られ、初夏の早い時期に収穫されます。収穫が比較的早い点がこの品種の持ち味です。",
  "jaboulay": "昔からある早生品種で、果皮だけでなく果肉にも赤みがあるのが特徴。酸味を感じやすいタイプです。",
  "hokko": "北海道でも栽培されてきた古い品種のひとつ。近年の大粒品種とは違う系統として、さくらんぼの品種史を知る手がかりになります。",
  "hinode": "早く実るタイプとして知られる品種。収穫時期が早いことが最大の特徴です。",
  "jumbo-nishiki": "品種名にも表れているように、大きな果実を特徴とするさくらんぼ。粒の大きさを重視したいときに注目される品種です。",
  "seven-night": "7月ごろに収穫される晩生寄りの品種。名前の印象どおり、初夏の終わりに楽しむさくらんぼとして紹介されています。",
  "matsuribayashi": "夏に出回る大玉のすいかとして親しまれる「祭ばやし」シリーズ。歯切れのよい果肉と甘さを楽しめるよう育成された系統です。",
  "hitorijime": "大玉より小さく、冷蔵庫にも収めやすい小玉すいか。丸ごと一玉を扱いやすいサイズ感が魅力です。",
  "raoh": "ナント種苗の大玉すいか。甘さだけでなく、果肉のしっかりした歯ざわりも魅力で、夏の食卓にうれしい食べごたえがあります。",
  "pino-girl": "ナント種苗が開発した、種が従来の一般的なすいかより非常に小さい小玉品種。種を一粒ずつ取り除く手間が少なく、シャリッとした食感と甘さを一緒に楽しめます。種が完全にないわけではありません。",
  "pino-girl-552": "種が小さく食べやすいピノ・ガールの改良系統。小玉サイズで扱いやすい点を引き継いでいます。",
  "pino-girl-555": "ピノ・ガールの名を受け継ぐ小玉すいかの改良系統。種が小さく食べやすいというシリーズの方向性を持っています。",
  "konjiki-raoh": "ナント種苗が育成した黄肉の大玉すいか。甘さを追求した品種として紹介されており、鮮やかな黄色の断面が食卓を明るくしてくれます。糖度は栽培環境や個体によって変わります。",
  "raoh-the-sweet": "ナント種苗が育成した赤肉の大玉品種。しっかりした果肉と高い糖度を目指して作られ、皮の近くまで甘さを楽しめることが特徴です。",
  "raoh-ar": "ナント種苗の羅皇シリーズから生まれた品種。食味だけでなく、栽培中にかかる病気への強さを備えることも育種上の大切なポイントです。",
  "raoh-z": "羅皇シリーズのうち、食味と栽培のしやすさを意識して育成されたタイプ。ナント種苗の品種として紹介されています。",
  "raoh-long": "羅皇シリーズのうち、丸い実ではなく楕円形に長く伸びる品種。切ったときにもその独特の果形が分かります。",
  "golden-jack": "ナント種苗の黄色い果肉を持つ種なしタイプのすいか。黒っぽい果皮と明るいレモン色の中身の対比が印象的で、細かな食感にもこだわって育成されています。",
  "natsukko": "しっかりとした歯ごたえを持つ桃。甘さと果汁があり、硬めの桃を好む人にも親しまれる品種です。",
  "kawanakajima": "長野県生まれの晩生の白桃。果実が大きく、果肉もしっかりしているため、やわらかすぎない桃を好む人にも向いています。",
  "odoroki": "名前のとおり、熟しても硬さを保ちやすい桃。カリッとした独特の歯ざわりがあり、柔らかな桃とは違う楽しみ方ができます。",
  "miharuhakuto": "秋口に出回る白桃で、口当たりのやわらかさと穏やかな甘さが魅力。収穫時期が比較的遅い品種です。",
  "akatsuki": "福島県を代表する桃のひとつ。果汁が多く、甘さの中に桃らしい香りが広がります。",
  "madoka": "大きめの果実と豊かな香りが特徴。夏の桃のなかでも食べごたえを感じやすい品種です。",
  "shimizu": "岡山県の白桃として知られ、淡い果皮と柔らかな果肉が特徴。口に含むと上品な甘さが広がるタイプです。",
  "shine": "明るい黄緑色の大粒ぶどう。種なし栽培された果実は皮ごと食べやすく、マスカットらしい華やかな香りを楽しめます。",
  "pione": "黒紫色の大粒ぶどうで、甘さのなかに爽やかな酸味があります。巨峰の系譜につながる品種です。",
  "fujiminori": "一粒が非常に大きく育つことがあり、果汁がたっぷり詰まった食べごたえが魅力。粒の存在感を楽しみたい人に向いています。",
  "steuben": "小さめの粒に甘さが凝縮されやすい黒ぶどう。青森県などで栽培され、秋から冬にかけても流通することがあります。",
  "kyoho": "日本で長く親しまれてきた大粒の黒ぶどう。濃紫色の果皮と、甘さのなかに感じる酸味が特徴です。",
  "delaware": "小粒の房が特徴で、山形県でも親しまれるぶどう。通常は種をなくす処理をして出荷され、粒を房から外して食べやすいのが魅力です。",
  "nagano-purple": "長野県で育成された黒ぶどう。種なし栽培された果実は皮ごと食べられ、濃い色の果皮まで味わえる点が特徴です。",
  "fuji": "『サンふじ』は『ふじ』という品種を、実に袋をかけずに日光に当てて育てたもの。太陽を浴びることで甘さや香りが育ちやすく、かじると果汁があふれる食感が魅力です。品種が別というわけではありません。",
  "shinano-sweet": "「つがる」と「ふじ」を親に持つ長野県育成のりんご。名前のとおり甘さが特徴で、酸味は比較的穏やかです。",
  "akibae": "濃い赤色に色づく長野県生まれのりんご。酸味も感じられ、甘いだけではない引き締まった味わいが魅力です。",
  "shinano-gold": "黄色い果皮の長野県育成品種。歯ごたえのある果肉と爽やかな酸味があり、甘酸っぱいりんごが好きな人に向いています。",
  "tsugaru": "早い時期に収穫される赤いりんご。果汁が豊富で酸味が穏やかなので、さっぱり食べやすい味わいです。",
  "orin": "黄緑色の果皮と独特の甘い香りで知られる品種。酸味が穏やかで、香りを楽しみたい人にも人気です。",
  "kougyoku": "きりっとした酸味のある小ぶりな赤いりんご。加熱しても味がぼやけにくいため、アップルパイやジャムにもよく使われます。",
  "lafrance": "収穫した直後は硬く、室温などで時間をかけて追熟させてから食べる西洋梨。熟すと芳醇な香りが立ち、果肉がとろけるような口当たりになります。",
  "ballade": "秋に出回る西洋梨で、食べごろになると香りと柔らかさが増していきます。購入時に追熟の目安を確認すると、よりおいしい状態で楽しめます。",
  "melowrich": "山形県で育成された西洋梨で、果汁が多く甘い味わいが特徴。追熟すると、なめらかな食感に変化します。",
  "aurora": "比較的早い時期に出回る西洋梨。熟すと果肉がやわらかくなり、香りと甘さを楽しめます。",
  "lelectier": "新潟県の特産として親しまれる西洋梨。追熟すると果皮が黄色みを増し、なめらかな果肉と強い香りが楽しめます。",
  "general-leclerc": "大きな果実が特徴の西洋梨。追熟すると果肉がやわらかくなり、芳醇な香りを感じられます。",
  "margherite": "大玉で長めの果形を持つ西洋梨。熟すと果肉が柔らかくなる、食べごたえのある品種です。",
  "kaori": "名前どおり香りのよさが特徴の和梨で、大きな果実になることもあります。収穫期は秋です。",
  "amanta": "甘味が強い和梨として農研機構が育成した品種。秋に収穫され、甘さを重視して選びたい人に向いています。",
  "hosui": "大ぶりで果汁が豊富な赤梨。甘みとほどよい酸味があり、みずみずしさを感じられます。",
  "kosui": "夏の早い時期から出回る代表的な赤梨。やわらかめの果肉に果汁が多く、甘さを感じやすい品種です。",
  "akizuki": "大玉で果汁の多い和梨。甘みが強く、酸味が穏やかで、秋に楽しむ赤梨のひとつです。",
  "niitaka": "大きな果実が特徴の晩生の和梨。保存がききやすく、秋から冬の贈答用としても見かけます。",
  "takamori": "日本で古くから栽培される品種のひとつ。早生の香夏錦の交配親としても知られています。",
  "nanyo": "果実が大きく、果汁の多い品種。北海道と山形県などで栽培され、比較的遅い時期まで楽しめる場合があります。",
  "summit": "カナダで育成された、大粒でハートに近い形が目を引く品種。ジュノハートの交配親としても知られています。",
  "suiran": "山形県が育成した早生のさくらんぼ。ビックとC21-7の交配から生まれ、紅ゆたかの名で紹介されています。",
  "miyako": "大玉タイプのすいかとして知られる品種。大きな一玉を切り分けて楽しむのに向いたサイズ感です。",
  "matsuribayashi-777": "祭ばやしシリーズの一品種。大玉で、夏のすいかとして流通するタイプです。",
  "hakuhou": "果汁が豊富で、熟すと果肉がやわらかくなる白桃。甘くみずみずしい桃を好む人に親しまれています。",
  "hakuho": "白鳳系の早生品種で、夏の早い時期に出回ります。夏の桃シーズンの始まりを感じられる一品です。",
  "yuzora": "収穫期が遅い桃で、果肉がしっかりしているのが持ち味。秋口の桃として出回ることがあります。",
  "golden-peach": "黄色い果肉を持つ黄桃で、甘さに加えてしっかりとした香りを楽しめます。切ったときの鮮やかな色も魅力です。",
  "queen-nina": "赤色系の大粒ぶどうで、見映えのする房が特徴。果粒の大きさと赤い色づきが目を引きます。",
  "sunverde": "明るい黄緑色の大粒ぶどう。大粒で淡い色合いの房を楽しめる品種として知られています。",
  "grohskrone": "藤稔と安芸クイーンを親に持つ、非常に大きな粒が特徴の黒ぶどう。大きな一粒の存在感が魅力です。",
  "aki-queen": "赤色系のぶどうで、甘さと鮮やかな果皮の色が持ち味。グロースクローネの交配親にもなっています。",
  "seto-giants": "黄緑色の大粒品種で、皮ごと食べやすいのが特徴。粒の表面に独特の溝が入ることがあります。",
  "toki": "黄色を基調とする果皮と華やかな香りが特徴。「王林」と「ふじ」の系譜につながるりんごです。",
  "gunma-meigetsu": "群馬県で育成された黄色系のりんご。甘さを感じやすく、日の当たる面に赤みが差すことがあります。",
  "morinokagayaki": "岩手県で育成された大きめの黄色いりんご。大玉の果実と甘い味わいが特徴です。",
  "haruka": "岩手県で育成された、果皮が黄色いりんご。しっかり甘みがあり、冬の贈答用としても見かける品種です。",
  "sekaiichi": "ひときわ大きな果実が名前の由来にもなったりんご。赤い果皮と大玉ならではの存在感が目を引きます。",
  "jonagold": "赤い果皮と爽やかな酸味が特徴。甘さもあり、焼きりんごやお菓子などにも使いやすい品種です。",
  "nansui": "長野県で育成された、甘味が強い赤梨。果汁が豊富で、秋の梨として親しまれています。",
  "nijisseiki": "黄緑色の果皮が特徴の青梨で、鳥取県の名産として知られます。すっきりした甘酸っぱさとシャリッとした食感が魅力です。",
  "shinko": "秋の遅い時期に収穫される大玉の赤梨。比較的保存がきくため、収穫後も長く楽しめる品種です。",
  "nikkori": "栃木県で育成された大玉の和梨。晩生で、しっかりした果実の大きさと甘い味わいが特徴です。",
  "hoshi-no-kinka": "青森県で育成された、果皮が比較的薄い黄色りんご。皮ごと食べやすい点でも紹介されています。",
  "tochiotome": "栃木県で育成された品種で、甘味と酸味のバランスが特徴。香りと果汁を楽しめるいちごです。",
  "tochiaika": "栃木県生まれのいちごで、甘味が強く酸味が穏やか。縦に切ると断面がハート形に見えることがあります。",
  "amaou": "福岡県で育成された大粒のいちご。赤く色づきやすく、食べごたえのある果実が特徴です。",
  "benihoppe": "静岡県で育成されたいちご。甘さに酸味が加わり、赤い果実の濃い味わいが魅力です。",
  "sagahonoka": "佐賀県で育成された品種。明るい赤色の果皮とやわらかな香りが特徴です。",
  "yayoihime": "群馬県で育成された品種。春になっても品質を保ちやすい特性から、その名が付けられています。",
  "akihime": "細長い果形とやわらかい果肉が特徴。酸味が控えめで、甘さを感じやすいタイプです。",
  "otomegokoro": "農研機構が育成したいちご。甘味と酸味があり、ビタミンC含量にも着目して開発されました。",
  "yukiusagi": "熟しても白っぽい果皮を保つ白いちご。赤いちごと見た目が異なるため、白色だけでは未熟とは判断できません。",
  "natsumizuki": "夏から秋にかけて収穫される、北海道などの冷涼な地域で栽培されるいちご。冬春どりとは異なる時季に楽しめます。",
  "miyagawa": "温州みかんの早生品種で、秋の比較的早い時期に出回ります。甘酸っぱく果汁のあるみかんです。",
  "aoshima": "温州みかんの晩生品種。比較的大きな果実で、冬にかけて楽しめます。",
  "setoka": "果肉の粒が細かく、なめらかな口当たりが特徴。皮が比較的薄く、濃厚な甘さを楽しめます。",
  "shiranui": "頭の部分がこぶのように盛り上がることがある柑橘。清見とポンカンを親に持ち、果汁と甘味が豊かです。",
  "harumi": "清見とポンカンを親に持つ品種。薄い袋ごと食べやすく、プチプチした食感を楽しめます。",
  "kiyomi": "温州みかんとトロビタオレンジから育成された品種。果汁が豊富で、オレンジに近い香りが特徴です。",
  "amanatsu": "すっきりした酸味とほのかな苦味を楽しめる柑橘。春から初夏にかけて出回ります。",
  "hassaku": "厚めの皮をむくと、歯ごたえのある果肉が現れます。甘さのほかにほろ苦さも感じるタイプです。",
  "iyokan": "愛媛県を代表する柑橘のひとつ。皮をむいたときに広がる豊かな香りと果汁が特徴です。",
  "dekopon": "甘い香りと、手でむきやすい果皮が魅力。春先に流通することが多い柑橘です。",
  "yuzu": "果汁の酸味だけでなく、果皮の強い香りが料理に使われます。黄色く熟した実は冬の風物詩です。",
  "sudachi": "徳島県の特産として知られる小さな香酸柑橘。緑色の果実を料理に搾ると、さわやかな香りが広がります。",
  "kabosu": "大分県の特産品として知られる香酸柑橘。果汁が多く、料理や飲み物に香りを添えます。",
  "lisbon-lemon": "果皮の香りとキリッとした酸味が特徴のレモン。瀬戸内地方などで栽培されます。",
  "eureka-lemon": "果汁が多く、料理や飲み物に利用しやすいレモン。リスボンと並ぶ代表的な栽培品種です。",
  "rinoka-lemon": "リスボンとヒュウガナツを親に持つ、日本で育成された大果系のレモン様品種。一般的なレモンより酸味が穏やかな点が特徴です。",
  "kinkan": "小さな実を皮ごと食べることができ、果皮の甘さと果肉の酸味を一緒に楽しめます。",
  "benimadonna": "愛媛県のブランド柑橘で、果肉がゼリーのように柔らかいのが特徴。果汁が多く、なめらかな食感です。",
  "fuyugaki": "古くから親しまれている甘柿の代表格。熟しても比較的果肉がしっかりしており、甘さを楽しめます。",
  "jiro": "上から見ると角ばったような平たい形の甘柿。硬めの食感を好む人に親しまれています。",
  "taishu": "大玉で果汁が多く、梨のようにサクサクとした歯ざわりが特徴の甘柿。秋の早い時期から出回ります。",
  "soshu": "比較的早い時期に収穫される甘柿。秋の柿シーズンの始まりを感じさせる品種です。",
  "hiratanenashi": "四角く平たい形をした種のない渋柿。渋抜きすると甘く食べられ、新潟県などで栽培されています。",
  "hachiya": "細長い釣鐘形の渋柿で、干し柿の材料にも使われます。乾燥させると甘さが凝縮されます。",
  "saijo": "縦に溝が入る独特の果形が特徴の渋柿。渋抜きや干し柿にして楽しむ品種です。",
  "kanshu": "早生の甘柿で、秋の早いうちから収穫できます。果汁が豊富なタイプとして育成されました。",
  "oishi": "収穫が早めのすももで、夏の始まりに出回ります。甘酸っぱさと果汁を楽しめます。",
  "soldam": "果皮は緑がかった色を残すことがありますが、切ると赤い果肉が現れます。酸味と甘さの濃い味わいが特徴です。",
  "taiyo": "果皮が赤く、果実が大きめのすもも。熟すと果汁と甘味を感じやすくなります。",
  "kiyo": "大玉で甘味の強いすもも。大きな果実を切り分けて、果汁の多さを楽しめます。",
  "summerangel": "山梨県で育成されたすもも。甘味と酸味のバランスを楽しめる夏の品種です。",
  "summerbeaut": "山梨県で育成された品種で、酸味と甘味が調和した味わいが特徴です。",
  "autumnsweet": "収穫期が遅く、秋口まで出回る大玉のすもも。一般的な早生品種よりも遅い時季に楽しめます。",
  "sugar": "名前のとおり甘さが特徴のプルーン。小〜中玉で、生のまま食べられる品種です。",
  "sunprune": "日本で生食用として親しまれるプルーン。秋に向けて熟し、甘味のある果肉を楽しめます。",
  "president": "大玉で収穫期の遅いプルーン。大きな果実が特徴で、秋に出回ります。",
  "stanley": "濃い紫色の果皮が特徴で、生食のほか加工にも利用されます。果肉が比較的しっかりした品種です。",
  "bayler": "大きな果実と果汁の多さが特徴のプルーン。食べごたえのある実を楽しめます。",
  "masui": "国内で広く作られているいちじくで、赤紫色に色づく果皮と柔らかな果肉が特徴です。",
  "bananafig": "細長い形と甘味の強さが特徴のいちじく。熟した果実はねっとりとした食感になります。",
  "violette": "小ぶりで濃い紫色に色づくいちじく。熟すと甘味が強まり、濃厚な果肉を楽しめます。",
  "whitegenoa": "果皮が淡い緑色から黄緑色のいちじく。熟しても赤紫色にならないのが特徴で、甘い果肉を楽しめます。",
  "dalmatie": "大きめの緑色の果実が特徴のいちじく。果皮が緑色のまま熟すタイプです。",
  "hayward": "国内でも広く流通する緑肉キウイ。追熟して果肉がやわらかくなると甘酸っぱさを楽しめます。",
  "rainbowred": "果肉の中心が赤くなる、見た目にも個性的なキウイ。比較的小ぶりで、甘さを感じやすい品種です。",
  "tokyogold": "東京都で育成された黄肉系キウイ。緑肉品種とは異なる黄色い果肉が特徴です。",
  "applekiwi": "丸みのある果形が名前の由来になったキウイ。一般的な細長いキウイとは外見が異なります。",
  "kouryoku": "香川県で育成された緑肉キウイ。香りのよさが特徴で、果実は比較的大きく育ちます。",
  "andes": "緑色の果肉と網目のある果皮を持つメロン。家庭でも親しまれる定番のネットメロンです。",
  "quincy": "果肉がオレンジ色の赤肉メロン。鮮やかな断面と強い甘味が特徴です。",
  "yuubari": "北海道夕張市で生産される地域ブランドのメロン。赤肉で、熟すと芳醇な香りとやわらかな果肉を楽しめます。",
  "crown": "静岡県で温室栽培されるブランドメロン。網目の整った果皮と、香りのよい果肉が特徴です。",
  "prince": "網目のない果皮と小ぶりなサイズが特徴。メロンのなかでも昔から親しまれている品種です。",
  "takami": "網目のある果皮で、比較的日持ちしやすいメロン。果肉がしっかりしているのが特徴です。",
  "duke": "収穫期の早いハイブッシュ系ブルーベリー。初夏のブルーベリーシーズンに登場する品種です。",
  "bluecrop": "世界的にも広く栽培されるハイブッシュ系の代表品種。果実の品質と収穫量の安定性で知られています。",
  "spartan": "粒が大きく、香りのよいブルーベリー。早い時期に収穫でき、果実の大きさを楽しめます。",
  "legacy": "果実品質のよさで知られるハイブッシュ系の品種。食味を重視して選びたいブルーベリーです。",
  "tifblue": "夏に熟すラビットアイ系ブルーベリー。青く色づいた実を収穫して楽しむ品種です。",
  "brightwell": "ラビットアイ系の品種で、夏の後半に収穫されることが多いブルーベリーです。",
  "mogi": "長崎県にゆかりのあるびわの代表品種。果実は比較的小ぶりで、やさしい甘味が楽しめます。",
  "tanaka": "大きめの果実をつけるびわの品種。オレンジ色に熟した果肉を楽しめます。",
  "nagaski": "早い時期に収穫できるびわで、施設栽培にも利用されます。旬の先駆けとして出回ることがあります。",
  "biwa-kibou": "種がほとんどできないタイプとして育成されたびわ。果肉を食べられる部分が多いのが特徴です。",
  "heiwa": "国内で長く栽培されてきたあんずの品種。果肉には酸味があり、加工にも使われます。",
  "shinsyuo": "長野県で親しまれる大玉のあんず。生食や加工に利用される品種です。",
  "nicocot": "農研機構が育成した甘味の強いあんず。酸味が穏やかで、生食しやすい品種です。",
  "ohisamacot": "農研機構が育成した大果のあんず。生のまま楽しみやすい甘味が特徴です。",
  "harcot": "生食向きの甘いあんずとして知られる品種。果肉がやわらかく、芳醇な香りを楽しめます。",
  "nanko": "和歌山県の梅干しづくりでも知られる大玉品種。熟すと黄色みが増し、豊かな香りが出ます。青梅は生で食べないでください。",
  "shirakaga": "大粒の青梅として親しまれる品種。梅酒や梅シロップの材料に利用されます。青梅は生で食べないでください。",
  "koshuno": "小さな実をつける梅で、小梅漬けやカリカリ梅に利用されます。青梅は生で食べないでください。",
  "wago": "農研機構が育成した、自分の花粉でも結実しやすい梅。栽培のしやすさに着目した品種です。青梅は生で食べないでください。",
  "reiwa": "農研機構が育成した、自家結実性を持つ梅の品種。青梅は生で食べないでください。",
  "pawpaw": "北米原産の果実で、熟すと果肉がクリーム状になります。バナナやマンゴーを思わせる独特の香りが特徴です。",
  "feijoa-apollo": "アポロは楕円形の緑の果実をつけるフェイジョアの品種。熟した果肉には甘い香りがあります。",
  "feijoa-coolidge": "クーリッジはフェイジョアの栽培品種のひとつ。緑色の果皮を持ち、熟した果実は香りが豊かです。",
  "feijoa-mammoth": "名前のとおり比較的大きな果実をつけるフェイジョア。緑色の果実の中には香りのある果肉が入っています。",
  "feijoa-triumph": "大果系のフェイジョアで、秋の終わりごろに熟します。甘い香りを持つ果肉が特徴です。",
  "akebi-shikou": "濃い紫色の大きな果皮が目を引くミツバアケビ系の品種。熟すと果皮が割れ、中の白い果肉が見えます。",
  "akebi-hosomurasaki": "細長い紫色の果実をつけるアケビ。熟すと果皮が開き、中の果肉を楽しめます。",
  "akebi-murasaki": "濃い紫色の果皮が水晶のように目を引くアケビ。熟した果実の内部には白い果肉があります。",
  "akebi-banana": "黄色い果皮と細長い姿が特徴のアケビ。熟したときの見た目が一般的な紫色のアケビと異なります。",
  "mube": "アケビの仲間ですが、熟しても果皮が大きく割れないのが特徴。秋に紫色の実をつけます。",
  "haskap": "北海道で栽培される青紫色の小さな果実。酸味が強く、ジャムや加工品にも使われます。",
  "juneberry": "初夏に赤紫色に熟す小さな果実。ジューンベリーの名は6月ごろに実ることに由来します。",
  "yamamomo": "赤く熟すと甘酸っぱさが感じられる果実。表面に小さな粒状の凹凸があります。",
  "guava": "温暖な地域で育つ果物で、熟すと強い香りが出ます。国内では沖縄県などで栽培されています。",
  "passion": "果実の中にゼリー状の果肉と黒い種が詰まっています。酸味が強く、香りのある果汁を楽しめます。",
  "dragonfruit": "鮮やかな果皮の中に、小さな黒い種が散らばった果肉があります。切った断面の色と模様が特徴的です。",
  "starfruit": "果実を輪切りにすると星形になるのが名前の由来。細長い実の断面を楽しめます。",
  "jabuticaba": "幹や太い枝に直接実がつくブラジル原産の果樹。黒紫色に熟す丸い実が特徴です。",
  "loquat-rare": "沖縄県で親しまれる小さな香酸柑橘。果汁を飲み物や料理に搾ると、特有の香りが広がります。",
};

