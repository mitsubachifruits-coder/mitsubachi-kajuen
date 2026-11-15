"use client";

import { useEffect, useId, useMemo, useState, type ReactNode } from "react";
import { createPortal } from "react-dom";

type Kind =
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

type Fruit = {
  id: string;
  name: string;
  kind: Kind;
  period: number[];
  summary: string;
  origin: string;
  color: string;
};

type Tree = {
  id: string;
  kind: Kind;
  parents: [string, string] | null;
  note: string;
  source: string;
};

const fruits: Fruit[] = [
  { id: "sato", name: "佐藤錦", kind: "さくらんぼ", period: [6, 7], summary: "甘味と酸味の調和がよい代表品種。", origin: "山形・北海道など", color: "#f5d9d5" },
  { id: "benishuho", name: "紅秀峰", kind: "さくらんぼ", period: [6, 7], summary: "大粒で果肉がしっかり。", origin: "山形など", color: "#efd0d0" },
  { id: "benio", name: "やまがた紅王", kind: "さくらんぼ", period: [6, 7], summary: "大玉で存在感のある品種。", origin: "山形", color: "#e9c7ca" },
  { id: "benisayaka", name: "紅さやか", kind: "さくらんぼ", period: [5, 6], summary: "早生で濃い赤色が特徴。", origin: "山形など", color: "#ead0d6" },
  { id: "benitemari", name: "紅てまり", kind: "さくらんぼ", period: [6, 7], summary: "大粒で見映えのよい品種。", origin: "山形など", color: "#f1d7d6" },
  { id: "benikirari", name: "紅きらり", kind: "さくらんぼ", period: [6], summary: "甘味があり、実の色づきもよい。", origin: "山形など", color: "#f4dade" },
  { id: "napoleon", name: "ナポレオン", kind: "さくらんぼ", period: [6, 7], summary: "古くから知られるさくらんぼ品種。", origin: "北海道・山形など", color: "#f7e7cc" },
  { id: "gassan-nishiki", name: "月山錦", kind: "さくらんぼ", period: [6,7], summary: "黄色い果皮と大粒の果実が特徴の希少品種。", origin: "山形など", color: "#f6efcd" },
  { id: "taisho-nishiki", name: "大将錦", kind: "さくらんぼ", period: [7], summary: "大粒で果肉が硬く、収穫が遅めの品種。", origin: "山形など", color: "#f0d4ca" },
  { id: "koka-nishiki", name: "香夏錦", kind: "さくらんぼ", period: [6], summary: "黄色地に赤い色が差す早生の品種。", origin: "山形など", color: "#f4dfc6" },
  { id: "seiko-nishiki", name: "正光錦", kind: "さくらんぼ", period: [6], summary: "早生で果肉のしまりがよい品種。", origin: "山形など", color: "#f3d7cb" },
  { id: "yamagata-bijin", name: "山形美人", kind: "さくらんぼ", period: [6], summary: "佐藤錦の枝変わり。濃い赤色が特徴。", origin: "山形など", color: "#ebd0cc" },
  { id: "tenko-nishiki", name: "天香錦", kind: "さくらんぼ", period: [7], summary: "硬めの食感と日持ちのよさが特徴。", origin: "山形など", color: "#f1d8ca" },
  { id: "junohart", name: "ジュノハート", kind: "さくらんぼ", period: [6,7], summary: "青森県育成の大粒でハート型の品種。", origin: "青森など", color: "#eac7ce" },
  { id: "hanakoma", name: "花駒", kind: "さくらんぼ", period: [6], summary: "比較的早い時期に収穫される早生種。", origin: "福島・山形など", color: "#f6dcce" },
  { id: "jaboulay", name: "ジャボレー", kind: "さくらんぼ", period: [6], summary: "赤い果肉と酸味を持つ早生の品種。", origin: "山形など", color: "#e9c9cf" },
  { id: "hokko", name: "北光", kind: "さくらんぼ", period: [6,7], summary: "昔から栽培されてきた品種の一つ。", origin: "北海道・山形など", color: "#f1d9cf" },
  { id: "hinode", name: "日の出", kind: "さくらんぼ", period: [6], summary: "早生のさくらんぼとして知られる品種。", origin: "山形など", color: "#f4dfd0" },
  { id: "jumbo-nishiki", name: "ジャンボ錦", kind: "さくらんぼ", period: [6,7], summary: "大きな果実が特徴のさくらんぼ。", origin: "山形など", color: "#f2d4d0" },
  { id: "seven-night", name: "七夕錦", kind: "さくらんぼ", period: [7], summary: "7月ごろに収穫期を迎える品種。", origin: "山形など", color: "#efcdd3" },
  { id: "yume-akari", name: "夢あかり", kind: "さくらんぼ", period: [6], summary: "国内の園地で栽培される赤いさくらんぼ。", origin: "山形など", color: "#f3d7d2" },
  { id: "shizuka-gozen", name: "静御前", kind: "さくらんぼ", period: [6,7], summary: "山形県の生産園地でも扱われる品種。", origin: "山形など", color: "#f2d8d3" },
  { id: "tama-zakura", name: "珠桜", kind: "さくらんぼ", period: [6,7], summary: "国内の果樹園で栽培される品種。", origin: "山形など", color: "#efd3d5" },
  { id: "red-glory", name: "レッドグローリー", kind: "さくらんぼ", period: [6,7], summary: "国内で栽培される赤色のさくらんぼ。", origin: "山形など", color: "#ebccd2" },
  { id: "diana", name: "ダイアナ", kind: "さくらんぼ", period: [6,7], summary: "山形県内でも栽培例のある品種。", origin: "山形など", color: "#f0d4ce" },
  { id: "giant-king", name: "ジャイアントキング", kind: "さくらんぼ", period: [6,7], summary: "大玉系として栽培されるさくらんぼ。", origin: "山形など", color: "#f0d5d1" },
  { id: "north-star", name: "ノーススター", kind: "さくらんぼ", period: [6,7], summary: "国内で栽培されるさくらんぼの一種。", origin: "山形など", color: "#eed2d5" },
  { id: "saori", name: "さおり", kind: "さくらんぼ", period: [6,7], summary: "国内の品種紹介に登場するさくらんぼ。", origin: "国内各地", color: "#f1d9ce" },
  { id: "sakura-hime", name: "さくら姫", kind: "さくらんぼ", period: [6], summary: "国内で栽培されるさくらんぼの一種。", origin: "山形など", color: "#f5ddda" },
  { id: "konatsu", name: "小夏", kind: "さくらんぼ", period: [6], summary: "6月上旬ごろに収穫される早生の品種。", origin: "山形など", color: "#f4dfd5" },
  { id: "diana-bright", name: "ダイアナブライト", kind: "さくらんぼ", period: [6], summary: "6月に収穫される国内栽培の品種。", origin: "国内各地", color: "#f4d9d1" },
  { id: "black-sugar", name: "黒砂糖錦", kind: "さくらんぼ", period: [6], summary: "国内で栽培されるさくらんぼの一種。", origin: "国内各地", color: "#eacbd0" },
  { id: "koyo-nishiki", name: "高陽錦", kind: "さくらんぼ", period: [6], summary: "国内で栽培されるさくらんぼの一種。", origin: "国内各地", color: "#f4d8cf" },

  { id: "matsuribayashi", name: "祭ばやし", kind: "すいか", period: [6, 7, 8], summary: "甘味とシャリ感が特徴の大玉すいか。祭ばやしシリーズの品種があります。", origin: "国内各地", color: "#dbe8d4" },
  { id: "hitorijime", name: "ひとりじめ", kind: "すいか", period: [6, 7], summary: "小玉で食べきりやすい品種。", origin: "国内各地", color: "#e4eed5" },
  { id: "raoh", name: "羅皇", kind: "すいか", period: [7, 8], summary: "強い甘味と大玉感が魅力。", origin: "国内各地", color: "#d0e1ce" },
  // ナント種苗の育成・販売品種（収穫月は国内の夏作を中心とした目安）
  { id: "pino-girl", name: "ピノ・ガール", kind: "すいか", period: [6, 7, 8], summary: "種がとても小さく、気にせず頬張りやすい甘い小玉すいか。", origin: "国内各地", color: "#dcebd1" },
  { id: "pino-girl-552", name: "ピノ・ガール552", kind: "すいか", period: [6, 7, 8], summary: "ピノ・ガールから発展した小玉すいかの改良品種。", origin: "国内各地", color: "#daebd1" },
  { id: "pino-girl-555", name: "ピノ・ガール555", kind: "すいか", period: [6, 7, 8], summary: "ピノ・ガールの特徴を受け継ぐ改良系統。", origin: "国内各地", color: "#e0ead2" },
  { id: "konjiki-raoh", name: "金色羅皇", kind: "すいか", period: [6, 7, 8], summary: "鮮やかな黄色い果肉と際立つ甘さが魅力の大玉すいか。", origin: "国内各地", color: "#f1edc5" },
  { id: "raoh-the-sweet", name: "羅皇ザ・スウィート", kind: "すいか", period: [6, 7, 8], summary: "赤い果肉がしっかりとして甘く、皮の近くまで楽しめる大玉すいか。", origin: "国内各地", color: "#d3e6cc" },
  { id: "raoh-ar", name: "羅皇AR", kind: "すいか", period: [6, 7, 8], summary: "羅皇の系統から生まれた、病気への強さにも配慮された大玉すいか。", origin: "国内各地", color: "#d3e3cb" },
  { id: "raoh-z", name: "羅皇Z", kind: "すいか", period: [6, 7, 8], summary: "羅皇シリーズの食味と育てやすさを追求した大玉すいか。", origin: "国内各地", color: "#d3e7d2" },
  { id: "raoh-long", name: "羅皇ロング", kind: "すいか", period: [6, 7, 8], summary: "長細い形と歯ごたえのある果肉が特徴の大玉すいか。", origin: "国内各地", color: "#d7e8cf" },
  { id: "golden-jack", name: "3Xゴールデンジャック", kind: "すいか", period: [6, 7, 8], summary: "黒っぽい皮と黄色い果肉が特徴の、種なしタイプのすいか。", origin: "国内各地", color: "#e8e6cf" },

  { id: "natsukko", name: "なつっこ", kind: "桃", period: [8], summary: "甘味があり、果肉は比較的しっかり。", origin: "山形・長野など", color: "#f6e1d8" },
  { id: "kawanakajima", name: "川中島白桃", kind: "桃", period: [8, 9], summary: "大玉で食べごたえのある白桃。", origin: "長野・山形など", color: "#f6d8ce" },
  { id: "odoroki", name: "おどろき", kind: "桃", period: [8, 9], summary: "硬めの食感が特徴。", origin: "山形・福島など", color: "#f4dcd1" },
  { id: "miharuhakuto", name: "美晴白桃", kind: "桃", period: [9], summary: "やわらかく上品な甘味。", origin: "山形・福島など", color: "#f8e5dc" },
  { id: "akatsuki", name: "あかつき", kind: "桃", period: [7, 8], summary: "甘味と果汁の多さで人気。", origin: "福島・山形など", color: "#f2d6cd" },
  { id: "madoka", name: "まどか", kind: "桃", period: [8], summary: "大玉で香りのよい桃。", origin: "国内各地", color: "#f4dcd4" },
  { id: "shimizu", name: "清水白桃", kind: "桃", period: [7, 8], summary: "なめらかな果肉とやさしい甘味。", origin: "岡山など", color: "#f8e8de" },

  { id: "shine", name: "シャインマスカット", kind: "ぶどう", period: [9, 10], summary: "皮ごと食べられる香り高いぶどう。", origin: "山形・長野・岡山など", color: "#e5eccf" },
  { id: "pione", name: "ピオーネ", kind: "ぶどう", period: [8, 9], summary: "大粒で濃厚な味わい。", origin: "山形・岡山など", color: "#e3daed" },
  { id: "fujiminori", name: "藤稔", kind: "ぶどう", period: [8, 9], summary: "果粒が大きく果汁も多い。", origin: "山形・山梨など", color: "#dcd2e8" },
  { id: "steuben", name: "スチューベン", kind: "ぶどう", period: [9, 10], summary: "甘味が強く濃い色合い。", origin: "青森・山形など", color: "#ded4e7" },
  { id: "kyoho", name: "巨峰", kind: "ぶどう", period: [8, 9], summary: "日本を代表する黒ぶどう。", origin: "国内各地", color: "#e0d8e9" },
  { id: "delaware", name: "デラウェア", kind: "ぶどう", period: [7, 8], summary: "小粒で甘味の強い定番品種。", origin: "山形・大阪など", color: "#f0dce6" },
  { id: "nagano-purple", name: "ナガノパープル", kind: "ぶどう", period: [9], summary: "皮ごと食べられる黒ぶどう。", origin: "長野", color: "#d7cce3" },

  { id: "fuji", name: "サンふじ", kind: "りんご", period: [11, 12], summary: "太陽の光をたっぷり浴びて育った、甘くてジューシーなふじりんご。", origin: "青森・山形・長野など", color: "#f1d7d0" },
  { id: "shinano-sweet", name: "シナノスイート", kind: "りんご", period: [10, 11], summary: "甘味が強く、食べやすい。", origin: "長野・山形など", color: "#f3dfcf" },
  { id: "akibae", name: "秋映", kind: "りんご", period: [9, 10], summary: "濃い赤色としっかりした酸味。", origin: "長野・山形など", color: "#e5cecb" },
  { id: "shinano-gold", name: "シナノゴールド", kind: "りんご", period: [10, 11], summary: "黄色い果皮と爽やかな酸味。", origin: "長野・山形など", color: "#f3ebce" },
  { id: "tsugaru", name: "つがる", kind: "りんご", period: [9], summary: "果汁が多く、やさしい甘味。", origin: "青森・山形など", color: "#f3ded5" },
  { id: "orin", name: "王林", kind: "りんご", period: [10, 11], summary: "香りのよい青りんご系。", origin: "青森・山形など", color: "#e9efcf" },
  { id: "kougyoku", name: "紅玉", kind: "りんご", period: [10, 11], summary: "酸味があり加工にも向く。", origin: "青森・山形など", color: "#efcfce" },

  { id: "lafrance", name: "ラ・フランス", kind: "西洋梨", period: [10, 11, 12], summary: "追熟で香りが広がる西洋梨。", origin: "山形など", color: "#e6e9d4" },
  { id: "ballade", name: "バラード", kind: "西洋梨", period: [9, 10], summary: "秋に収穫される西洋梨。", origin: "山形など", color: "#e8e7cd" },
  { id: "melowrich", name: "メロウリッチ", kind: "西洋梨", period: [10, 11], summary: "高糖度で果汁の多い西洋梨。", origin: "山形など", color: "#e8e5ca" },
  { id: "aurora", name: "オーロラ", kind: "西洋梨", period: [9], summary: "やわらかな果肉と甘い香り。", origin: "山形など", color: "#e8dfc7" },
  { id: "lelectier", name: "ル・レクチェ", kind: "西洋梨", period: [11, 12], summary: "なめらかな果肉と濃い香り。", origin: "新潟など", color: "#eee4ce" },
  { id: "general-leclerc", name: "ゼネラル・レクラーク", kind: "西洋梨", period: [10, 11], summary: "大玉で芳醇な香り。", origin: "山形など", color: "#e0e5cd" },
  { id: "margherite", name: "マルゲリット・マリーラ", kind: "西洋梨", period: [9, 10], summary: "大玉でやわらかな果肉。", origin: "国内各地", color: "#e9e4ca" },

  { id: "kaori", name: "かおり", kind: "和梨", period: [9, 10], summary: "大玉で香りのある梨。", origin: "国内各地", color: "#ece9cf" },
  { id: "amanta", name: "甘太", kind: "和梨", period: [10, 11], summary: "甘味の強い和梨。", origin: "国内各地", color: "#eee5c7" },
  { id: "hosui", name: "豊水", kind: "和梨", period: [8, 9], summary: "果汁が多く、甘味と酸味のバランスがよい。", origin: "国内各地", color: "#e8d9be" },
  { id: "kosui", name: "幸水", kind: "和梨", period: [8, 9], summary: "やわらかめでみずみずしい。", origin: "国内各地", color: "#f0e3c6" },
  { id: "akizuki", name: "あきづき", kind: "和梨", period: [9, 10], summary: "大玉で甘味が強い。", origin: "国内各地", color: "#eee0c1" },
  { id: "niitaka", name: "新高", kind: "和梨", period: [10, 11], summary: "大玉で日持ちしやすい。", origin: "国内各地", color: "#e7d5b8" },

  { id: "takamori", name: "高砂", kind: "さくらんぼ", period: [6], summary: "比較的早い時期に収穫される品種。", origin: "国内各地", color: "#f5d8c9" },
  { id: "nanyo", name: "南陽", kind: "さくらんぼ", period: [6, 7], summary: "大玉で果汁が多い。", origin: "北海道・山形など", color: "#f5d6cd" },
  { id: "summit", name: "サミット", kind: "さくらんぼ", period: [6, 7], summary: "ハート形の大玉品種。", origin: "国内各地", color: "#e9c2cc" },
  { id: "suiran", name: "紅ゆたか", kind: "さくらんぼ", period: [6], summary: "早めの時期に収穫される赤いさくらんぼ。", origin: "山形など", color: "#ebc9c9" },
  { id: "miyako", name: "都", kind: "すいか", period: [7, 8], summary: "大玉系のすいか。", origin: "国内各地", color: "#d7e6d2" },
  { id: "matsuribayashi-777", name: "祭ばやし777", kind: "すいか", period: [7, 8], summary: "祭ばやしシリーズの大玉品種。", origin: "国内各地", color: "#d5e4cd" },
  { id: "hakuhou", name: "白鳳", kind: "桃", period: [7, 8], summary: "やわらかな果肉と豊かな果汁。", origin: "山梨・和歌山など", color: "#f8e1d6" },
  { id: "hakuho", name: "日川白鳳", kind: "桃", period: [6, 7], summary: "比較的早く収穫される白桃。", origin: "山梨・和歌山など", color: "#f9dfd5" },
  { id: "yuzora", name: "ゆうぞら", kind: "桃", period: [8, 9], summary: "晩生で果肉がしっかりした桃。", origin: "福島など", color: "#f4d2cb" },
  { id: "golden-peach", name: "黄金桃", kind: "桃", period: [8, 9], summary: "黄色い果肉と濃厚な甘味。", origin: "長野・山形など", color: "#f6e4bb" },
  { id: "queen-nina", name: "クイーンニーナ", kind: "ぶどう", period: [9, 10], summary: "大粒で赤みのある果皮が特徴。", origin: "国内各地", color: "#efd4db" },
  { id: "sunverde", name: "サンヴェルデ", kind: "ぶどう", period: [8, 9], summary: "黄緑色で大粒のぶどう。", origin: "国内各地", color: "#e3ebcd" },
  { id: "grohskrone", name: "グロースクローネ", kind: "ぶどう", period: [8, 9], summary: "極大粒の黒ぶどう。", origin: "国内各地", color: "#d8cde0" },
  { id: "aki-queen", name: "安芸クイーン", kind: "ぶどう", period: [8, 9], summary: "鮮やかな赤色と強い甘味。", origin: "岡山・広島など", color: "#efd1d5" },
  { id: "seto-giants", name: "瀬戸ジャイアンツ", kind: "ぶどう", period: [9, 10], summary: "黄緑色で皮ごと食べやすい。", origin: "岡山など", color: "#e6edcf" },
  { id: "toki", name: "トキ", kind: "りんご", period: [10], summary: "黄色い果皮と芳醇な香り。", origin: "青森など", color: "#f2e9cf" },
  { id: "gunma-meigetsu", name: "ぐんま名月", kind: "りんご", period: [10, 11], summary: "黄色い果皮と甘味の強さが特徴。", origin: "群馬・青森など", color: "#eff0d3" },
  { id: "morinokagayaki", name: "もりのかがやき", kind: "りんご", period: [10], summary: "大玉で甘い黄色りんご。", origin: "岩手など", color: "#f5edce" },
  { id: "haruka", name: "はるか", kind: "りんご", period: [11, 12], summary: "黄色い果皮で甘味が強い。", origin: "岩手など", color: "#f2e9c9" },
  { id: "sekaiichi", name: "世界一", kind: "りんご", period: [10, 11], summary: "大きな果実と赤い果皮。", origin: "青森など", color: "#efd2cd" },
  { id: "jonagold", name: "ジョナゴールド", kind: "りんご", period: [10, 11], summary: "さわやかな酸味と香り。", origin: "青森など", color: "#f2d6cc" },
  { id: "nansui", name: "南水", kind: "和梨", period: [9, 10], summary: "甘味が強く果汁も多い。", origin: "長野など", color: "#f1e1bf" },
  { id: "nijisseiki", name: "二十世紀", kind: "和梨", period: [8, 9], summary: "黄緑色の果皮とみずみずしい食感。", origin: "鳥取など", color: "#edf0cb" },
  { id: "shinko", name: "新興", kind: "和梨", period: [10, 11], summary: "大玉で貯蔵性のよい梨。", origin: "新潟など", color: "#e8dabb" },
  { id: "nikkori", name: "にっこり", kind: "和梨", period: [10, 11], summary: "大玉で甘味の強い晩生梨。", origin: "栃木など", color: "#e9d9b9" },
  { id: "hoshi-no-kinka", name: "星の金貨", kind: "りんご", period: [10, 11], summary: "薄い果皮と香りのよい黄色りんご。", origin: "青森など", color: "#f3edcb" },
  // 新しいカテゴリーと国内で栽培される果実・品種（時期は目安）
  { id: "tochiotome", name: "とちおとめ", kind: "いちご", period: [1, 2, 3, 4, 5], summary: "甘味と酸味が調和する定番品種。", origin: "国内栽培", color: "#f7d5d6" },
  { id: "tochiaika", name: "とちあいか", kind: "いちご", period: [1, 2, 3, 4, 5], summary: "栃木県育成の甘味が強いいちご。", origin: "国内栽培", color: "#f7d5d6" },
  { id: "amaou", name: "あまおう", kind: "いちご", period: [1, 2, 3, 4, 5], summary: "大粒で赤い果実が特徴。", origin: "国内栽培", color: "#f5d2d7" },
  { id: "benihoppe", name: "紅ほっぺ", kind: "いちご", period: [1, 2, 3, 4, 5], summary: "甘味と酸味の両方を楽しめる。", origin: "国内栽培", color: "#f3d0d0" },
  { id: "sagahonoka", name: "さがほのか", kind: "いちご", period: [1, 2, 3, 4, 5], summary: "果皮が明るい赤色で香りもよい。", origin: "国内栽培", color: "#f6dbd6" },
  { id: "yayoihime", name: "やよいひめ", kind: "いちご", period: [1, 2, 3, 4, 5], summary: "春先も品質を保ちやすい品種。", origin: "国内栽培", color: "#f3d7db" },
  { id: "akihime", name: "章姫", kind: "いちご", period: [1, 2, 3, 4, 5], summary: "細長い果形とやわらかな果肉。", origin: "国内栽培", color: "#f6d6d3" },
  { id: "otomegokoro", name: "おいCベリー", kind: "いちご", period: [1, 2, 3, 4, 5], summary: "農研機構育成の甘酸っぱい品種。", origin: "国内栽培", color: "#f0c9cd" },
  { id: "yukiusagi", name: "雪うさぎ", kind: "いちご", period: [1, 2, 3, 4], summary: "果皮の白い、希少な白いちご。", origin: "国内栽培", color: "#f4ece7" },
  { id: "natsumizuki", name: "なつみずき", kind: "いちご", period: [6, 7, 8, 9], summary: "夏秋期に収穫されるいちご。", origin: "国内栽培", color: "#f1d1d6" },
  { id: "miyagawa", name: "宮川早生", kind: "柑橘", period: [10, 11, 12], summary: "早生の温州みかん。", origin: "国内栽培", color: "#f7e0c3" },
  { id: "aoshima", name: "青島温州", kind: "柑橘", period: [12, 1, 2], summary: "晩生の温州みかん。", origin: "国内栽培", color: "#f5dbc1" },
  { id: "setoka", name: "せとか", kind: "柑橘", period: [2, 3], summary: "果肉がやわらかく濃厚な味わい。", origin: "国内栽培", color: "#f5d8b9" },
  { id: "shiranui", name: "不知火", kind: "柑橘", period: [2, 3, 4], summary: "頭部の凸形状が特徴的な柑橘。", origin: "国内栽培", color: "#f6ddc2" },
  { id: "harumi", name: "はるみ", kind: "柑橘", period: [2, 3], summary: "甘味があり、じょうのう膜が薄い。", origin: "国内栽培", color: "#f8e4c9" },
  { id: "kiyomi", name: "清見", kind: "柑橘", period: [3, 4], summary: "果汁の多いタンゴール。", origin: "国内栽培", color: "#f4dec5" },
  { id: "amanatsu", name: "甘夏", kind: "柑橘", period: [4, 5, 6], summary: "さわやかな酸味の夏みかん系。", origin: "国内栽培", color: "#f4e4bd" },
  { id: "hassaku", name: "八朔", kind: "柑橘", period: [1, 2, 3, 4], summary: "ほろ苦さと歯ごたえが特徴。", origin: "国内栽培", color: "#f6e8cc" },
  { id: "iyokan", name: "伊予柑", kind: "柑橘", period: [1, 2, 3], summary: "香りが強く果汁が豊富。", origin: "国内栽培", color: "#f7dcc0" },
  { id: "dekopon", name: "ポンカン", kind: "柑橘", period: [1, 2, 3], summary: "甘い香りが特徴。", origin: "国内栽培", color: "#f5ddc0" },
  { id: "yuzu", name: "ゆず", kind: "柑橘", period: [10, 11, 12], summary: "香りを生かして料理にも使う。", origin: "国内栽培", color: "#f5edca" },
  { id: "sudachi", name: "すだち", kind: "柑橘", period: [8, 9, 10], summary: "爽やかな香酸柑橘。", origin: "国内栽培", color: "#e5ebcd" },
  { id: "kabosu", name: "かぼす", kind: "柑橘", period: [8, 9, 10], summary: "果汁に酸味と香りがある。", origin: "国内栽培", color: "#e6edce" },
  { id: "lisbon-lemon", name: "リスボン", kind: "レモン", period: [10, 11, 12, 1, 2, 3, 4], summary: "酸味と香りが豊かな、国内でも栽培される代表的なレモン。", origin: "広島・瀬戸内など", color: "#f5efc5" },
  { id: "eureka-lemon", name: "ユーレカ", kind: "レモン", period: [10, 11, 12, 1, 2, 3, 4], summary: "果汁が多く、国内でも栽培されるレモンの品種。", origin: "広島・瀬戸内など", color: "#f4edc7" },
  { id: "rinoka-lemon", name: "璃の香", kind: "レモン", period: [11, 12, 1], summary: "リスボンとヒュウガナツの交配で生まれた、酸味が穏やかなレモン様品種。", origin: "国内栽培", color: "#f6edc6" },
  { id: "kinkan", name: "金柑", kind: "柑橘", period: [12, 1, 2, 3], summary: "果皮も食べられる小さな柑橘。", origin: "国内栽培", color: "#f5dcb9" },
  { id: "benimadonna", name: "紅まどんな", kind: "柑橘", period: [11, 12, 1], summary: "愛媛県の果実ブランド。", origin: "国内栽培", color: "#f7d1b7" },
  { id: "fuyugaki", name: "富有", kind: "柿", period: [10, 11, 12], summary: "甘柿の代表品種。", origin: "国内栽培", color: "#f2d6b9" },
  { id: "jiro", name: "次郎", kind: "柿", period: [10, 11], summary: "扁平な形と歯ごたえが特徴。", origin: "国内栽培", color: "#f5dbc2" },
  { id: "taishu", name: "太秋", kind: "柿", period: [9, 10, 11], summary: "果汁が多く、サクサクした食感。", origin: "国内栽培", color: "#f1dcb7" },
  { id: "soshu", name: "早秋", kind: "柿", period: [9, 10], summary: "早生の甘柿。", origin: "国内栽培", color: "#f5d5b8" },
  { id: "hiratanenashi", name: "平核無", kind: "柿", period: [10, 11], summary: "渋抜きして食べる四角い柿。", origin: "国内栽培", color: "#f0d1b2" },
  { id: "hachiya", name: "蜂屋", kind: "柿", period: [10, 11], summary: "干し柿にも利用される渋柿。", origin: "国内栽培", color: "#f1d0b7" },
  { id: "saijo", name: "西条", kind: "柿", period: [10, 11], summary: "干し柿にも使われる伝統品種。", origin: "国内栽培", color: "#f0d6bc" },
  { id: "kanshu", name: "甘秋", kind: "柿", period: [9, 10], summary: "早生の甘柿。", origin: "国内栽培", color: "#f3d5b6" },
  { id: "oishi", name: "大石早生", kind: "すもも", period: [6, 7], summary: "早い時期に収穫されるすもも。", origin: "国内栽培", color: "#f6d3bd" },
  { id: "soldam", name: "ソルダム", kind: "すもも", period: [7, 8], summary: "果肉が赤く濃厚なすもも。", origin: "国内栽培", color: "#e6bfc5" },
  { id: "taiyo", name: "太陽", kind: "すもも", period: [8, 9], summary: "大玉で赤い果皮。", origin: "国内栽培", color: "#f1c4bd" },
  { id: "kiyo", name: "貴陽", kind: "すもも", period: [7, 8], summary: "大玉で甘味が強い。", origin: "国内栽培", color: "#e7b9bc" },
  { id: "summerangel", name: "サマーエンジェル", kind: "すもも", period: [7, 8], summary: "山梨県育成の甘酸っぱい品種。", origin: "国内栽培", color: "#f0c6bc" },
  { id: "summerbeaut", name: "サマービュート", kind: "すもも", period: [7, 8], summary: "酸味と甘味のバランスがよい。", origin: "国内栽培", color: "#f1c9c7" },
  { id: "autumnsweet", name: "秋姫", kind: "すもも", period: [9, 10], summary: "晩生の大玉すもも。", origin: "国内栽培", color: "#eed2c1" },
  { id: "sugar", name: "シュガー", kind: "プルーン", period: [8, 9], summary: "甘味の強い小〜中玉品種。", origin: "国内栽培", color: "#d8c8df" },
  { id: "sunprune", name: "サンプルーン", kind: "プルーン", period: [9, 10], summary: "国内で広く栽培されるプルーン。", origin: "国内栽培", color: "#d9c8e4" },
  { id: "president", name: "プレジデント", kind: "プルーン", period: [9, 10], summary: "大玉の晩生プルーン。", origin: "国内栽培", color: "#d3c4de" },
  { id: "stanley", name: "スタンレイ", kind: "プルーン", period: [9, 10], summary: "濃紫色の果皮で加工にも向く。", origin: "国内栽培", color: "#d5c4df" },
  { id: "bayler", name: "ベイラー", kind: "プルーン", period: [9, 10], summary: "大玉で果汁の多いプルーン。", origin: "国内栽培", color: "#d5c7df" },
  { id: "masui", name: "桝井ドーフィン", kind: "いちじく", period: [8, 9, 10, 11], summary: "日本で広く栽培されるいちじく。", origin: "国内栽培", color: "#dfc8d2" },
  { id: "bananafig", name: "バナーネ", kind: "いちじく", period: [8, 9, 10], summary: "細長い果形で甘味が強い。", origin: "国内栽培", color: "#e6d7be" },
  { id: "violette", name: "ビオレソリエス", kind: "いちじく", period: [9, 10, 11], summary: "小玉で濃い紫色。", origin: "国内栽培", color: "#d9c5d6" },
  { id: "whitegenoa", name: "ホワイトゼノア", kind: "いちじく", period: [8, 9, 10], summary: "淡い果皮と甘い果肉。", origin: "国内栽培", color: "#e4e7c8" },
  { id: "dalmatie", name: "ダルマティ", kind: "いちじく", period: [8, 9, 10], summary: "大玉の緑皮系いちじく。", origin: "国内栽培", color: "#dae5c9" },
  { id: "hayward", name: "ヘイワード", kind: "キウイ", period: [11, 12, 1, 2, 3], summary: "緑色の果肉を持つ定番品種。", origin: "国内栽培", color: "#d9e5c4" },
  { id: "rainbowred", name: "レインボーレッド", kind: "キウイ", period: [9, 10], summary: "中心部が赤く色づく小〜中玉品種。", origin: "国内栽培", color: "#e5dfca" },
  { id: "tokyogold", name: "東京ゴールド", kind: "キウイ", period: [10, 11], summary: "黄色い果肉の品種。", origin: "国内栽培", color: "#ede5c6" },
  { id: "applekiwi", name: "アップルキウイ", kind: "キウイ", period: [10, 11], summary: "丸みのある果形。", origin: "国内栽培", color: "#dce6c6" },
  { id: "kouryoku", name: "香緑", kind: "キウイ", period: [10, 11], summary: "香川県育成の緑肉品種。", origin: "国内栽培", color: "#dde7c6" },
  { id: "andes", name: "アンデスメロン", kind: "メロン", period: [5, 6, 7, 8], summary: "網目のある緑肉メロン。", origin: "国内栽培", color: "#e4e8ca" },
  { id: "quincy", name: "クインシーメロン", kind: "メロン", period: [5, 6, 7, 8], summary: "赤肉で甘味の強いメロン。", origin: "国内栽培", color: "#f3dcc5" },
  { id: "yuubari", name: "夕張メロン", kind: "メロン", period: [6, 7, 8], summary: "北海道の地域ブランド。", origin: "国内栽培", color: "#f1d9c6" },
  { id: "crown", name: "クラウンメロン", kind: "メロン", period: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], summary: "静岡県の温室栽培メロンブランド。", origin: "国内栽培", color: "#e6ebd0" },
  { id: "prince", name: "プリンスメロン", kind: "メロン", period: [5, 6, 7], summary: "網目のない小ぶりなメロン。", origin: "国内栽培", color: "#e4e9c9" },
  { id: "takami", name: "タカミメロン", kind: "メロン", period: [6, 7, 8], summary: "日持ちしやすい網目メロン。", origin: "国内栽培", color: "#e3e8c8" },
  { id: "duke", name: "デューク", kind: "ブルーベリー", period: [6, 7], summary: "ハイブッシュ系の早生品種。", origin: "国内栽培", color: "#d4d6ed" },
  { id: "bluecrop", name: "ブルークロップ", kind: "ブルーベリー", period: [6, 7, 8], summary: "ハイブッシュ系の代表品種。", origin: "国内栽培", color: "#d5d6eb" },
  { id: "spartan", name: "スパルタン", kind: "ブルーベリー", period: [6, 7], summary: "大粒で香りのよい品種。", origin: "国内栽培", color: "#d7d4ec" },
  { id: "legacy", name: "レガシー", kind: "ブルーベリー", period: [6, 7, 8], summary: "果実品質のよいハイブッシュ系。", origin: "国内栽培", color: "#d0d1e6" },
  { id: "tifblue", name: "ティフブルー", kind: "ブルーベリー", period: [7, 8, 9], summary: "ラビットアイ系の定番品種。", origin: "国内栽培", color: "#d5d6ed" },
  { id: "brightwell", name: "ブライトウェル", kind: "ブルーベリー", period: [7, 8, 9], summary: "ラビットアイ系の品種。", origin: "国内栽培", color: "#d5d5e8" },
  { id: "mogi", name: "茂木", kind: "びわ", period: [5, 6], summary: "小ぶりで甘味のある代表品種。", origin: "国内栽培", color: "#f5dfc6" },
  { id: "tanaka", name: "田中", kind: "びわ", period: [5, 6], summary: "比較的大玉のびわ。", origin: "国内栽培", color: "#f4dfc7" },
  { id: "nagaski", name: "長崎早生", kind: "びわ", period: [4, 5], summary: "施設栽培でも使われる早生品種。", origin: "国内栽培", color: "#f4e0c7" },
  { id: "biwa-kibou", name: "希房", kind: "びわ", period: [5, 6], summary: "種がほとんどないタイプのびわ。", origin: "国内栽培", color: "#f4e3cb" },
  { id: "heiwa", name: "平和", kind: "あんず", period: [6, 7], summary: "国内の代表的なあんず品種。", origin: "国内栽培", color: "#f3ddc4" },
  { id: "shinsyuo", name: "信州大実", kind: "あんず", period: [6, 7], summary: "大玉のあんず。", origin: "国内栽培", color: "#f5dfc4" },
  { id: "nicocot", name: "ニコニコット", kind: "あんず", period: [6, 7], summary: "酸味が穏やかで甘味が強い。", origin: "国内栽培", color: "#f4dcca" },
  { id: "ohisamacot", name: "おひさまコット", kind: "あんず", period: [6, 7], summary: "大果で甘味のある品種。", origin: "国内栽培", color: "#f2d9c3" },
  { id: "harcot", name: "ハーコット", kind: "あんず", period: [6, 7], summary: "生食向きの甘い品種。", origin: "国内栽培", color: "#f4d7c1" },
  { id: "nanko", name: "南高", kind: "うめ", period: [6, 7], summary: "梅干しや梅酒にも利用される大玉品種。", origin: "国内栽培", color: "#e5e9c9" },
  { id: "shirakaga", name: "白加賀", kind: "うめ", period: [6, 7], summary: "梅酒にも使われる品種。", origin: "国内栽培", color: "#e6ebcb" },
  { id: "koshuno", name: "甲州小梅", kind: "うめ", period: [5, 6], summary: "小粒で梅漬けにも向く。", origin: "国内栽培", color: "#e7e9c8" },
  { id: "wago", name: "和郷", kind: "うめ", period: [6, 7], summary: "自家結実性のある農研機構育成品種。", origin: "国内栽培", color: "#e5e7c9" },
  { id: "reiwa", name: "麗和", kind: "うめ", period: [6, 7], summary: "自家結実性のある農研機構育成品種。", origin: "国内栽培", color: "#e6eaca" },
  { id: "pawpaw", name: "ポポー", kind: "その他", period: [9, 10], summary: "香りが強く、クリーミーな果肉を持つ果物。", origin: "国内栽培", color: "#dfe8bc" },
  { id: "feijoa-apollo", name: "フェイジョア・アポロ", kind: "その他", period: [10, 11], summary: "香り豊かな緑色の果実。", origin: "国内栽培", color: "#dce6c6" },
  { id: "feijoa-coolidge", name: "フェイジョア・クーリッジ", kind: "その他", period: [11, 12], summary: "国内でも栽培されるフェイジョア。", origin: "国内栽培", color: "#d9e5c8" },
  { id: "feijoa-mammoth", name: "フェイジョア・マモス", kind: "その他", period: [10, 11], summary: "比較的大果のフェイジョア。", origin: "国内栽培", color: "#d9e3c2" },
  { id: "feijoa-triumph", name: "フェイジョア・トライアンフ", kind: "その他", period: [11, 12], summary: "香りのよい大果系。", origin: "国内栽培", color: "#d8e5c5" },
  { id: "akebi-shikou", name: "アケビ・紫幸", kind: "その他", period: [9, 10], summary: "濃紫色の大きなミツバアケビ。", origin: "国内栽培", color: "#e1d0e6" },
  { id: "akebi-hosomurasaki", name: "アケビ・細紫", kind: "その他", period: [9, 10], summary: "細長い紫色のアケビ。", origin: "国内栽培", color: "#e2cfe5" },
  { id: "akebi-murasaki", name: "アケビ・紫水晶", kind: "その他", period: [9, 10], summary: "濃紫色の果皮が目を引く。", origin: "国内栽培", color: "#dccae2" },
  { id: "akebi-banana", name: "バナナあけび", kind: "その他", period: [9, 10], summary: "黄色い果皮と細長い形が特徴。", origin: "国内栽培", color: "#eee8c7" },
  { id: "mube", name: "ムベ", kind: "その他", period: [10, 11], summary: "アケビ科の常緑つる植物の果実。", origin: "国内栽培", color: "#e5d6df" },
  { id: "haskap", name: "ハスカップ", kind: "その他", period: [6, 7], summary: "北海道などで栽培される小さな青紫の実。", origin: "国内栽培", color: "#d4d6e7" },
  { id: "juneberry", name: "ジューンベリー", kind: "その他", period: [5, 6], summary: "赤紫色に熟す小果実。", origin: "国内栽培", color: "#e5d1dc" },
  { id: "yamamomo", name: "ヤマモモ", kind: "その他", period: [6, 7], summary: "赤く熟す甘酸っぱい果実。", origin: "国内栽培", color: "#e8cbd2" },
  { id: "guava", name: "グアバ", kind: "その他", period: [8, 9, 10], summary: "南西諸島などで栽培される香りのよい果実。", origin: "国内栽培", color: "#e6e8bf" },
  { id: "passion", name: "パッションフルーツ", kind: "その他", period: [6, 7, 8, 9], summary: "酸味と南国の香りが特徴。", origin: "国内栽培", color: "#e0cfe4" },
  { id: "dragonfruit", name: "ドラゴンフルーツ", kind: "その他", period: [7, 8, 9, 10], summary: "鮮やかな果皮と種のある果肉。", origin: "国内栽培", color: "#efd3da" },
  { id: "starfruit", name: "スターフルーツ", kind: "その他", period: [9, 10, 11], summary: "切ると星形になる果実。", origin: "国内栽培", color: "#f1eac1" },
  { id: "jabuticaba", name: "ジャボチカバ", kind: "その他", period: [5, 6, 7, 8, 9, 10], summary: "幹に直接実がなる珍しい果樹。", origin: "国内栽培", color: "#dad2e7" },
  { id: "loquat-rare", name: "シークヮーサー", kind: "その他", period: [8, 9, 10, 11, 12], summary: "沖縄で親しまれる香酸柑橘。", origin: "国内栽培", color: "#e4ebca" },
];

// 交配親が確認できる場合のみ、親子関係を描画する。
// 品種名の由来や受粉相性は、親子関係として扱わない。
const SOURCES = {
  cherry: "https://www.pref.yamagata.jp/140032/sangyo/nourinsuisangyou/nogyo/nousambutsu/sakurambo/sakuranbohinsyu.html",
  grape: "https://www.naro.go.jp/collab/breed/0400/0411/001262.html",
  pione: "https://www.nn.zennoh.or.jp/products/fruits/grape/pione",
  naganoPurple: "https://www.pref.nagano.lg.jp/kajushiken/jisseki/joho/budo.html",
  apple: "https://www.nn.zennoh.or.jp/fruits/three_apple_brothers/",
  appleClassic: "https://www.city.hirosaki.aomori.jp/ringopark/hinshu.html",
  westernPear: "https://www.pref.yamagata.jp/140032/sangyo/nourinsuisangyou/nogyo/nousambutsu/lafrance/rafuhinnsyusyoukai.html",
  ballade: "https://www.hinshu2.maff.go.jp/vips/cmm/apCMM112.aspx?LANGUAGE=Japanese&TOUROKU_NO=7389",
  japanesePear: "https://www.naro.go.jp/laboratory/nifts/kih/pear_nut/post_63.html",
  kosui: "https://www.naro.go.jp/laboratory/nifts/kih/pear_nut/post_67.html",
  akizuki: "https://www.naro.go.jp/collab/breed/0400/0415/001288.html",
  kaori: "https://www.pref.chiba.lg.jp/ryuhan/pbmgm/zukan/kajitsu/nashi.html",
};

const documentedTrees: Tree[] = [
  { id:"sato",kind:"さくらんぼ",parents:["黄玉","ナポレオン"],note:"黄玉とナポレオンの交配。",source:SOURCES.cherry },
  { id:"benishuho",kind:"さくらんぼ",parents:["佐藤錦","天香錦"],note:"佐藤錦と天香錦の交配。",source:SOURCES.cherry },
  { id:"benio",kind:"さくらんぼ",parents:["紅秀峰","C-47-70"],note:"C-47-70はレーニアと紅さやかの交配系統。",source:SOURCES.cherry },
  { id:"benisayaka",kind:"さくらんぼ",parents:["佐藤錦","セネカ"],note:"佐藤錦とセネカの交配。",source:SOURCES.cherry },
  { id:"benitemari",kind:"さくらんぼ",parents:["ビック","佐藤錦"],note:"ビックと佐藤錦の交配。",source:SOURCES.cherry },
  { id:"benikirari",kind:"さくらんぼ",parents:["レーニア","コンパクトステラ"],note:"レーニアとコンパクトステラの交配。",source:SOURCES.cherry },
  { id:"suiran",kind:"さくらんぼ",parents:["ビック","C21-7"],note:"紅ゆたか。山形県が公表する交配組み合わせ。",source:SOURCES.cherry },
  { id:"koka-nishiki",kind:"さくらんぼ",parents:["佐藤錦","高砂"],note:"香夏錦。佐藤錦と高砂の交配。",source:"https://ymgt-f150.com/cherry-kinds/" },
  { id:"junohart",kind:"さくらんぼ",parents:["紅秀峰","サミット"],note:"ジュノハート。青森県で育成された大玉品種。",source:"https://www.aomori-itc.or.jp/marche/d01_mar_junoheart.html" },
  { id:"gassan-nishiki",kind:"さくらんぼ",parents:null,note:"月山錦は中国で育成された黄色い品種。交配親は未確認です。",source:"https://www.yamagata.nmai.org/ymgt-f/cherry-kinds/index.html" },
  { id:"taisho-nishiki",kind:"さくらんぼ",parents:null,note:"偶発実生として発見された品種。交配親は未確認です。",source:"https://www.yamagata.nmai.org/ymgt-f/cherry-kinds/index.html" },
  { id:"yamagata-bijin",kind:"さくらんぼ",parents:null,note:"佐藤錦の枝変わりです。交配による親子関係とは異なるため、親を線で結んでいません。",source:"https://ymgt-f150.com/cherry-kinds/" },
  { id:"tenko-nishiki",kind:"さくらんぼ",parents:null,note:"偶発品種。紅秀峰の花粉親であり、交配親は未確認です。",source:"https://ymgt-f150.com/cherry-kinds/" },
  { id:"seiko-nishiki",kind:"さくらんぼ",parents:null,note:"香夏錦の自然交雑実生とされますが、花粉親が不明なため親子線は表示していません。",source:"https://ymgt-f150.com/cherry-kinds/" },

  { id:"akatsuki",kind:"桃",parents:["白桃","白鳳"],note:"白桃と白鳳の交配。",source:"" },
  { id:"hakuhou",kind:"桃",parents:["橘早生","白桃"],note:"橘早生と白桃の交配。",source:"" },

  { id:"shine",kind:"ぶどう",parents:["安芸津21号","白南"],note:"安芸津21号はスチューベンとマスカット・オブ・アレキサンドリアの交配系統。",source:SOURCES.grape },
  { id:"pione",kind:"ぶどう",parents:["巨峰","カノンホール・マスカット"],note:"従来の品種資料に記載された交配組み合わせ。",source:SOURCES.pione },
  { id:"nagano-purple",kind:"ぶどう",parents:["巨峰","リザマート"],note:"DNA鑑定で花粉親がリザマートと確認された。",source:SOURCES.naganoPurple },

  { id:"fuji",kind:"りんご",parents:["国光","デリシャス"],note:"サンふじは『ふじ』を無袋栽培した果実。ふじの系譜を表示。",source:SOURCES.appleClassic },
  { id:"shinano-sweet",kind:"りんご",parents:["ふじ","つがる"],note:"ふじとつがるの交配。",source:SOURCES.apple },
  { id:"akibae",kind:"りんご",parents:["千秋","つがる"],note:"千秋とつがるの交配。",source:SOURCES.apple },
  { id:"shinano-gold",kind:"りんご",parents:["ゴールデンデリシャス","千秋"],note:"ゴールデンデリシャスと千秋の交配。",source:SOURCES.apple },
  { id:"morinokagayaki",kind:"りんご",parents:["つがる","ガラ"],note:"つがるとガラの交配。",source:"https://www.ringodaigaku.com/main/hinshu/mo/forestshine.html" },
  { id:"orin",kind:"りんご",parents:["ゴールデンデリシャス","印度"],note:"ゴールデンデリシャスと印度の交配。",source:SOURCES.appleClassic },

  { id:"lafrance",kind:"西洋梨",parents:null,note:"品種の起源に交配親の確かな記載がないため、親は表示していません。",source:SOURCES.westernPear },
  { id:"ballade",kind:"西洋梨",parents:["バートレット","ラ・フランス"],note:"山形県で育成。バートレットとラ・フランスの交配。",source:SOURCES.ballade },
  { id:"melowrich",kind:"西洋梨",parents:["ミクルマス・ネリス","ラ・フランス"],note:"山形県で育成された西洋梨。",source:SOURCES.westernPear },
  { id:"aurora",kind:"西洋梨",parents:["マルゲリット・マリーラ","バートレット"],note:"米国で育成された品種。",source:SOURCES.westernPear },
  { id:"lelectier",kind:"西洋梨",parents:null,note:"交配親を確実に確認できないため非表示。",source:SOURCES.westernPear },
  { id:"general-leclerc",kind:"西洋梨",parents:null,note:"交配親を確実に確認できないため非表示。",source:SOURCES.westernPear },
  { id:"margherite",kind:"西洋梨",parents:null,note:"交配親を確実に確認できないため非表示。",source:SOURCES.westernPear },

  { id:"kosui",kind:"和梨",parents:["菊水","早生幸蔵"],note:"菊水と早生幸蔵の交配。",source:SOURCES.kosui },
  { id:"hosui",kind:"和梨",parents:["幸水","イ-33"],note:"DNA解析で両親の可能性が非常に高いとされた組み合わせ。",source:SOURCES.japanesePear },
  { id:"akizuki",kind:"和梨",parents:["162-29","幸水"],note:"162-29は新高と豊水の交配系統。",source:SOURCES.akizuki },
  { id:"kaori",kind:"和梨",parents:["新興","幸水"],note:"新興と幸水の交配。",source:SOURCES.kaori },

  { id:"tochiotome",kind:"いちご",parents:["久留米49号","栃の峰"],note:"久留米49号と栃の峰の交配。",source:"" },
  { id:"amaou",kind:"いちご",parents:["久留米53号","92-46"],note:"福岡県で育成された大粒品種。",source:"" },
  { id:"benihoppe",kind:"いちご",parents:["章姫","さちのか"],note:"章姫とさちのかの交配。",source:"" },
  { id:"sagahonoka",kind:"いちご",parents:["大錦","とよのか"],note:"大錦ととよのかの交配。",source:"" },
  { id:"yayoihime",kind:"いちご",parents:["とねほっぺ","とちおとめ"],note:"とねほっぺととちおとめの交配。",source:"" },
  { id:"akihime",kind:"いちご",parents:["久能早生","女峰"],note:"久能早生と女峰の交配。",source:"" },
  { id:"otomegokoro",kind:"いちご",parents:["9505-05","さちのか"],note:"農研機構の交配記録。",source:"https://www.naro.go.jp/collab/breed/0300/0301/001491.html" },

  { id:"kiyomi",kind:"柑橘",parents:["宮川早生","トロビタオレンジ"],note:"タンゴールの代表品種。",source:"" },
  { id:"shiranui",kind:"柑橘",parents:["清見","中野3号ポンカン"],note:"清見と中野3号ポンカンの交配。",source:"https://www.naro.go.jp/laboratory/nifts/kih/citrus_cat/post_70.html" },
  { id:"harumi",kind:"柑橘",parents:["清見","ポンカンF-2432"],note:"農研機構の交配記録。",source:"https://www.naro.go.jp/collab/breed/0400/0405/001301.html" },
  { id:"setoka",kind:"柑橘",parents:["清見×アンコールNo.2","マーコット"],note:"第一親は清見とアンコールの交雑系統。",source:"https://www.naro.go.jp/collab/breed/0400/0405/001283.html" },
  { id:"benimadonna",kind:"柑橘",parents:["南香","天草"],note:"愛媛果試第28号として育成。",source:"" },

  { id:"taishu",kind:"柿",parents:["富有","IIiG-16"],note:"農研機構による富有とIIiG-16の交配。",source:"https://www.naro.go.jp/collab/breed/0400/0404/001321.html" },
  { id:"soshu",kind:"柿",parents:["伊豆","109-27"],note:"109-27は興津2号と興津17号の交雑系統。",source:"https://www.naro.go.jp/collab/breed/0400/0404/001275.html" },
  // 育成機関の一次資料で直接の交配組み合わせを確認できた品種。
  { id:"grohskrone",kind:"ぶどう",parents:["藤稔","安芸クイーン"],note:"藤稔と安芸クイーンの交配。",source:"https://www.naro.go.jp/collab/breed/0400/0411/077926.html" },
  { id:"sunverde",kind:"ぶどう",parents:["ダークリッジ","センテニアル"],note:"ダークリッジとセンテニアルの交配。",source:"https://www.naro.go.jp/collab/breed/0400/0411/001355.html" },
  { id:"kanshu",kind:"柿",parents:["新秋","18-4"],note:"18-4は富有と興津16号の交雑系統。",source:"https://www.naro.go.jp/collab/breed/0400/0404/001269.html" },
  { id:"nicocot",kind:"あんず",parents:["ライバル","アンズ筑波5号"],note:"アンズ筑波5号はNew Castle Earlyと甲州大実の交雑系統。",source:"https://www.naro.go.jp/collab/breed/0400/0401/001346.html" },
  { id:"ohisamacot",kind:"あんず",parents:["アンズ農林5号","ハーコット"],note:"アンズ農林5号はNew Castle Earlyと甲州大実の交雑系統。",source:"https://www.naro.go.jp/collab/breed/0400/0401/001347.html" },
  { id:"reiwa",kind:"うめ",parents:["加賀地蔵","月知梅"],note:"加賀地蔵と月知梅の交配。",source:"https://www.naro.go.jp/collab/breed/0400/0402/136317.html" },
  { id:"wago",kind:"うめ",parents:["剣先","MM-43-22"],note:"MM-43-22は梅郷に由来する交雑系統。",source:"https://www.naro.go.jp/collab/breed/0400/0402/index.html" },
  { id:"rinoka-lemon",kind:"レモン",parents:["リスボン","ヒュウガナツ"],note:"リスボンにヒュウガナツを交配して育成されたレモン様品種。",source:"https://www.naro.go.jp/laboratory/nifts/rinoka/index.html" },
];

// 図鑑未掲載の「親品種」も、図鑑の件数を増やさずに家系図内で閲覧できるようにする。
// 親が分からない場合は架空の交配関係を作らず、既知の子品種のみ表示する。
const ancestorDetails: Record<string, { parents: [string, string] | null; note: string; source: string }> = {
  "天香錦": { parents: null, note: "偶発品種として発見され、1965年に命名。交配親は特定されていません。紅秀峰の花粉親です。", source: "https://www.yamagata.nmai.org/ymgt-f/cherry-kinds/index.html" },
  "C-47-70": { parents: ["レーニア", "紅さやか"], note: "やまがた紅王の交配に用いられた系統。", source: SOURCES.cherry },
  "安芸津21号": { parents: ["スチューベン", "マスカット・オブ・アレキサンドリア"], note: "シャインマスカットの母親にあたる育成系統。", source: SOURCES.grape },
  "162-29": { parents: ["新高", "豊水"], note: "あきづきの育成に用いられた交配系統。", source: SOURCES.akizuki },
  "18-4": { parents: ["富有", "興津16号"], note: "甘秋の交配に用いられた系統。", source: "https://www.naro.go.jp/collab/breed/0400/0404/001269.html" },
  "109-27": { parents: ["興津2号", "興津17号"], note: "早秋の交配に用いられた系統。", source: "https://www.naro.go.jp/collab/breed/0400/0404/001275.html" },
  "アンズ農林5号": { parents: ["New Castle Early", "甲州大実"], note: "おひさまコットの母親にあたる育成系統。", source: "https://www.naro.go.jp/collab/breed/0400/0401/001347.html" },
  "アンズ筑波5号": { parents: ["New Castle Early", "甲州大実"], note: "ニコニコットの交配に使われた系統。", source: "https://www.naro.go.jp/collab/breed/0400/0401/001346.html" },
  "清見×アンコールNo.2": { parents: ["清見", "アンコール"], note: "せとかの交配に用いられた『清見×アンコール』の選抜系統。", source: "https://www.naro.go.jp/collab/breed/0400/0405/001283.html" },
  "黄玉": { parents: null, note: "佐藤錦の親品種。交配親はこの図鑑では未確認です。", source: SOURCES.cherry },
  "ナポレオン": { parents: null, note: "佐藤錦の親品種。古くから栽培される品種です。", source: SOURCES.cherry },
};

const normalizeFamilyName = (name: string) => name === "ふじ" ? "サンふじ" : name;
const documentedTreeIds = new Set(documentedTrees.map((tree) => tree.id));
const catalogueTrees: Tree[] = [
  ...documentedTrees,
  ...fruits.filter((fruit) => !documentedTreeIds.has(fruit.id)).map((fruit) => ({
    id: fruit.id,
    kind: fruit.kind,
    parents: null,
    note: "交配親の公開情報を確認できていないため、親子関係を推定せず表示しています。",
    source: "",
  })),
];

// 親品種のうち図鑑未掲載のものを収集し、元の果物カテゴリーで表示する。
const ancestorNames = new Map<string, Kind>();
for (const child of catalogueTrees) {
  for (const name of child.parents ?? []) {
    const normalized = normalizeFamilyName(name);
    if (!fruits.some((f) => f.name === normalized) && !ancestorNames.has(name)) {
      ancestorNames.set(name, child.kind);
    }
  }
}
for (const [name, detail] of Object.entries(ancestorDetails)) {
  for (const parent of detail.parents ?? []) {
    const kind = ancestorNames.get(name);
    if (!kind) continue;
    if (!fruits.some((f) => f.name === normalizeFamilyName(parent)) && !ancestorNames.has(parent)) {
      ancestorNames.set(parent, kind);
    }
  }
}

const ancestryColor: Record<Kind, string> = {
  "さくらんぼ": "#f1d3d1", "すいか": "#dce6d1", "桃": "#f3ddd5", "ぶどう": "#dfd6e9",
  "りんご": "#f1dacc", "西洋梨": "#e6e4c9", "和梨": "#ece1bf", "いちご": "#f4d4d5",
  "柑橘": "#f3dfc3", "レモン": "#f5edc6", "柿": "#f1d9bd", "すもも": "#efd4da", "プルーン": "#ded3e8",
  "いちじく": "#e7d4df", "キウイ": "#dfe8d1", "メロン": "#e7e9d2", "ブルーベリー": "#d9dded",
  "びわ": "#f2dfc6", "あんず": "#f1dfc8", "うめ": "#e3e9cf", "その他": "#e1e6d8",
};

const ancestorFruits: Fruit[] = [...ancestorNames].map(([name, kind]) => ({
  id: `ancestor-${name}`, name, kind, period: [], summary: "家系図に登場する親品種・育成系統。",
  origin: "系譜参考", color: ancestryColor[kind],
}));
const allFamilyFruits = [...fruits, ...ancestorFruits];
const ancestorTrees: Tree[] = ancestorFruits.map((fruit) => {
  const detail = ancestorDetails[fruit.name];
  return {
    id: fruit.id,
    kind: fruit.kind,
    parents: detail?.parents ?? null,
    note: detail?.note ?? "親としての関係は掲載資料で確認できますが、この品種自身の交配親は未確認です。",
    source: detail?.source ?? "",
  };
});
const trees: Tree[] = [...catalogueTrees, ...ancestorTrees];

const kinds: (Kind | "すべて")[] = [
  "すべて",
  "さくらんぼ",
  "すいか",
  "桃",
  "ぶどう",
  "りんご",
  "西洋梨",
  "和梨",
  "いちご",
  "柑橘",
  "レモン",
  "柿",
  "すもも",
  "プルーン",
  "いちじく",
  "キウイ",
  "メロン",
  "ブルーベリー",
  "びわ",
  "あんず",
  "うめ",
  "その他",
];

const treeGroups = Array.from(new Set(trees.map((tree) => tree.kind)));

const months = ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"];

function getFruitByName(name: string, fallbackKind: Kind): Fruit {
  const normalized = normalizeFamilyName(name);
  const item = allFamilyFruits.find((fruit) => fruit.name === normalized || fruit.name === name);
  return item ?? { id: `ancestor-${name}`, name, kind: fallbackKind, period: [],
    summary: "親品種・育成系統", origin: "", color: ancestryColor[fallbackKind] };
}


// 品種別の色・形・粒配置を共通定義する。
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

function FruitVector({ fruit, dense = false }: { fruit: Fruit; dense?: boolean }) {
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
        shape = <><circle cx="100" cy="87" r={fruit.id === "kinkan" ? 40 : 54} fill={fruit.id === "yuzu" ? "#e7d356" : fruit.id === "sudachi" || fruit.id === "kabosu" ? "#73a25f" : "#e9a344"}/><path d="M100 37 L104 23" stroke="#806343" strokeWidth="6" strokeLinecap="round"/><ellipse cx="124" cy="30" rx="20" ry="9" transform="rotate(-25 124 30)" fill="#6b9d62" />{shine}</>;
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


// カード表面の summary は一文のまま。詳細を開いたときだけ補足を表示。
// 品種固有の情報を確認できるものは個別に記載し、それ以外は品目の一般的な楽しみ方を案内。
const fruitDetails: Record<string, string> = {
  fuji: "『サンふじ』は『ふじ』という品種を、実に袋をかけずに日光に当てて育てたもの。太陽を浴びることで甘さや香りが育ちやすく、かじると果汁があふれる食感が魅力です。品種が別というわけではありません。",
  sato: "山形県で生まれた人気品種で、甘さの中にほどよい酸味があるのが魅力。冷やしすぎず、食べる少し前に冷蔵庫に入れると香りや風味を感じやすくなります。",
  benishuho: "佐藤錦より遅い時期に楽しめることが多く、肉厚でしっかりした食感が特徴。大粒で贈答用にも親しまれています。",
  benio: "山形県が育成した大粒のさくらんぼで、果実の存在感が際立つ品種。実の張りと色づきを眺めながら、旬の贅沢を楽しめます。",
  "gassan-nishiki": "鮮やかな黄色が目を引く珍しいさくらんぼで、赤い品種とは違う華やかな印象があります。希少なので、店頭で見つけたら食べ比べを楽しむのもおすすめです。",
  "pino-girl": "ナント種苗が開発した、種が従来の一般的なすいかより非常に小さい小玉品種。種を一粒ずつ取り除く手間が少なく、シャリッとした食感と甘さを一緒に楽しめます。種が完全にないわけではありません。",
  "pino-girl-552": "ナント種苗が公開したピノ・ガールの改良品種のひとつ。小玉すいかの食べやすさを楽しみながら、元のピノ・ガールと違いを比べてみたい品種です。",
  "pino-girl-555": "ナント種苗が公開したピノ・ガールの改良系統。品種ごとの詳しい栽培特性は、種苗メーカーの最新資料で確認するのがおすすめです。",
  "konjiki-raoh": "ナント種苗が育成した黄肉の大玉すいか。甘さを追求した品種として紹介されており、鮮やかな黄色の断面が食卓を明るくしてくれます。糖度は栽培環境や個体によって変わります。",
  "raoh-the-sweet": "ナント種苗が育成した赤肉の大玉品種。しっかりした果肉と高い糖度を目指して作られ、皮の近くまで甘さを楽しめることが特徴です。",
  "golden-jack": "ナント種苗の黄色い果肉を持つ種なしタイプのすいか。黒っぽい果皮と明るいレモン色の中身の対比が印象的で、細かな食感にもこだわって育成されています。",
  "raoh-long": "楕円形に長く伸びる、羅皇シリーズの大玉すいか。一般的な丸い品種と形を見比べたり、切り分けたときの食感を楽しんだりできます。",
  raoh: "ナント種苗の大玉すいか。甘さだけでなく、果肉のしっかりした歯ざわりも魅力で、夏の食卓にうれしい食べごたえがあります。",
  "raoh-ar": "ナント種苗の羅皇シリーズから生まれた品種。食味だけでなく、栽培中にかかる病気への強さを備えることも育種上の大切なポイントです。",
  "raoh-z": "羅皇の持つ味わいと栽培のしやすさを改良することを目指した品種。すいかは同じ赤肉でも甘さの感じ方や歯ざわりが少しずつ違います。",
  hitorijime: "一玉を扱いやすい小玉すいかで、切り分けたり冷蔵庫にしまったりしやすいのが魅力。大玉とは違う気軽さがあります。",
  shine: "皮ごと食べられることが多く、パリッとした皮と芳醇な香りが特徴。よく洗って冷やし、粒をそのまま頬張る食べ方が人気です。",
  pione: "黒系の大粒ぶどうで、濃い甘味とさわやかな酸味を感じやすい品種。十分に熟した粒は果汁が豊かで、贈り物としても親しまれています。",
  fujiminori: "一粒が非常に大きく育つことがあり、果汁がたっぷり詰まった食べごたえが魅力。粒の存在感を楽しみたい人に向いています。",
  steuben: "小さめの粒に甘さが凝縮されやすい黒ぶどう。青森県などで栽培され、秋から冬にかけても流通することがあります。",
  natsukko: "しっかりとした歯ごたえがあり、噛むほど果汁と甘さが広がる桃。柔らかい桃とはひと味違った食感を好む人に人気です。",
  odoroki: "名前のとおり、熟しても硬さを保ちやすい桃。カリッとした独特の歯ざわりがあり、柔らかな桃とは違う楽しみ方ができます。",
  lafrance: "収穫した直後は硬く、室温などで時間をかけて追熟させてから食べる西洋梨。熟すと芳醇な香りが立ち、果肉がとろけるような口当たりになります。",
  ballade: "秋に出回る西洋梨で、食べごろになると香りと柔らかさが増していきます。購入時に追熟の目安を確認すると、よりおいしい状態で楽しめます。",
  kougyoku: "きりっとした酸味のある小ぶりな赤いりんご。加熱しても味がぼやけにくいため、アップルパイやジャムにもよく使われます。",
  "yukiusagi": "白っぽい果皮が美しいいちご。一般的な赤いいちごとは見た目が大きく異なりますが、赤くないことだけで未熟と判断できるわけではありません。",
  "rinoka-lemon": "日本で育成された、大きめの果実が特徴のレモン。料理や飲み物に使いやすく、さわやかな香りや果汁を楽しめます。",
};

const kindDetails: Record<Kind, string> = {
  "さくらんぼ": "さくらんぼは品種によって赤みの濃さ、粒の大きさ、果肉の硬さ、甘酸っぱさが変わります。旬は短く、収穫時期も少しずつずれるので、食べ比べると違いを感じやすい果物です。",
  "すいか": "すいかは品種によって大玉・小玉、赤肉・黄肉、皮の色や歯ざわりが異なります。よく冷やして切り分け、シャリッとした果肉とみずみずしさを楽しめます。",
  "桃": "桃はやわらかくとろけるタイプから、硬い食感を楽しむタイプまで幅広い果物。香りや甘味の感じ方は熟し具合でも変化します。",
  "ぶどう": "ぶどうは品種ごとに粒の大きさや香り、皮の食べやすさ、甘さと酸味のバランスが異なります。品種に合った食べ方で違いを楽しめます。",
  "りんご": "りんごはシャキッとした歯ざわりや果汁、甘酸っぱさに品種の個性が出ます。生でかじるだけでなく、品種によってはお菓子や料理にもよく合います。",
  "西洋梨": "西洋梨は収穫後に追熟して食べごろになる品種が多い果物。甘い香りが立ち、果肉がやわらかくなったころに味わうのが楽しみです。",
  "和梨": "和梨はシャリッとした歯ざわりと豊富な果汁が魅力。幸水・豊水など品種ごとに甘さや酸味、果実の大きさが違います。",
  "いちご": "いちごは品種によって果形、香り、甘さと酸味のバランスが変わります。赤いものだけでなく白系の品種もあり、見た目の違いも楽しめます。",
  "柑橘": "柑橘は甘味や酸味、香り、皮の厚さなどの違いが豊か。品種ごとの食べ方や食べごろを知ると、季節の味をより楽しめます。",
  "レモン": "レモンはさわやかな香りと酸味が持ち味で、品種によって果実の大きさや果皮の厚さも異なります。果汁だけでなく、よく洗った皮の香りも料理に役立ちます。",
  "柿": "柿には甘柿と渋柿があり、甘さや食感、食べごろが異なります。渋柿は渋抜きや加工をして楽しむ場合があります。",
  "すもも": "すももは甘酸っぱく果汁の多いものが多く、品種によって果皮や果肉の色が異なります。熟し具合で酸味や甘さの印象も変わります。",
  "プルーン": "プルーンは生のまま食べると果汁や香りを楽しめます。乾燥品として知られますが、生果にも品種ごとの違いがあります。",
  "いちじく": "いちじくは熟すと果肉が柔らかくなり、独特の甘い香りが広がります。品種によって果皮や果肉の色、甘味が変わります。",
  "キウイ": "キウイは緑肉・黄肉など果肉の色に違いがあり、甘味と酸味のバランスもさまざま。追熟の具合を見て食べごろを選びます。",
  "メロン": "メロンは果肉の色や香り、食感が品種ごとに異なります。追熟して食べる品種では、香りや柔らかさが食べごろの目安になります。",
  "ブルーベリー": "ブルーベリーは品種によって粒の大きさ、酸味、香りや収穫時期が異なります。生食のほか、ヨーグルトやお菓子にもよく合います。",
  "びわ": "びわはやさしい甘さとみずみずしい果肉が魅力です。傷みやすい果物なので、食べごろを逃さず味わうのがおすすめです。",
  "あんず": "あんずは生食に向く甘い品種から、酸味を生かしてジャムなどに加工する品種まであります。香りと色づきも楽しめる初夏の果物です。",
  "うめ": "うめは生食よりも梅干し・梅酒・梅シロップなどに加工して楽しむことが多い果物。品種や熟度によって香りや使い方が変わります。青梅は生で食べないでください。",
  "その他": "国内には地域の気候を生かして栽培される珍しい果物もあります。見た目や香り、食べ方がさまざまなので、果物ごとの特徴を知ると楽しみが広がります。",
};

export default function FruitPediaPage() {
  const [view, setView] = useState<"dictionary" | "tree" | "calendar">("dictionary");
  const [kind, setKind] = useState<Kind | "すべて">("すべて");
  const [search, setSearch] = useState("");
  const [treeKind, setTreeKind] = useState<Kind>("さくらんぼ");
  const [treeId, setTreeId] = useState("sato");
  const [month, setMonth] = useState(9);
  const [selected, setSelected] = useState<Fruit | null>(null);
  // 同じ暦日なら毎回同じ品種。日付が変われば選び直す（端末の現地日付を使用）。
  // 初回描画は固定してSSRとHydrationの差分を避ける。
  const [todayFruit, setTodayFruit] = useState<Fruit>(fruits[0]);
  useEffect(() => {
    const updateDailyFruit = () => {
      const now = new Date();
      const dateKey = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}`;
      let hash = 2166136261;
      for (const character of dateKey) {
        hash ^= character.charCodeAt(0);
        hash = Math.imul(hash, 16777619);
      }
      setTodayFruit(fruits[(hash >>> 0) % fruits.length]);
    };
    updateDailyFruit();
    const interval = window.setInterval(updateDailyFruit, 60_000);
    window.addEventListener("focus", updateDailyFruit);
    document.addEventListener("visibilitychange", updateDailyFruit);
    return () => {
      window.clearInterval(interval);
      window.removeEventListener("focus", updateDailyFruit);
      document.removeEventListener("visibilitychange", updateDailyFruit);
    };
  }, []);

  useEffect(() => {
    if (!selected) return;
    const onEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelected(null);
    };
    window.addEventListener("keydown", onEscape);
    return () => window.removeEventListener("keydown", onEscape);
  }, [selected]);

  const filtered = useMemo(() => {
    return fruits.filter((fruit) => {
      const hitKind = kind === "すべて" || fruit.kind === kind;
      const hitSearch = search.trim() === "" || `${fruit.name} ${fruit.kind}`.includes(search.trim());
      return hitKind && hitSearch;
    });
  }, [kind, search]);

  const currentTree = trees.find((tree) => tree.id === treeId) || trees[0];
  const currentTreeFruit = allFamilyFruits.find((fruit) => fruit.id === currentTree.id)!;
  const children = useMemo(() => {
    const equivalentNames = currentTree.id === "fuji" ? ["ふじ", "サンふじ"] : [currentTreeFruit.name];
    return trees
      .filter((candidate) => candidate.id !== currentTree.id && candidate.parents?.some((parent) => equivalentNames.includes(parent)))
      .map((candidate) => allFamilyFruits.find((fruit) => fruit.id === candidate.id))
      .filter((fruit): fruit is Fruit => Boolean(fruit));
  }, [currentTree.id, currentTreeFruit.name]);

  const visibleTreeItems = useMemo(() => {
    return trees.filter((tree) => tree.kind === treeKind).sort((a, b) => Number(a.id.startsWith("ancestor-")) - Number(b.id.startsWith("ancestor-")) || Number(Boolean(b.parents)) - Number(Boolean(a.parents)));
  }, [treeKind]);

  const monthFruits = useMemo(() => {
    return fruits.filter((fruit) => fruit.period.includes(month));
  }, [month]);

  // 家系図の四角い枠の中心を、画面の中央に合わせる。
  // 品種切り替え後の高さを使うため、レイアウト確定後に位置を計算する。
  const scrollToTreeStage = () => {
    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        const stage = document.getElementById("fruitpedia-tree-stage");
        if (!stage) return;
        const rect = stage.getBoundingClientRect();
        const stageCenterY = window.scrollY + rect.top + rect.height / 2;
        const targetY = Math.max(0, stageCenterY - window.innerHeight / 2);
        const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        window.scrollTo({
          top: targetY,
          behavior: prefersReducedMotion ? "instant" : "smooth",
        });
      });
    });
  };

  const selectTreeFruit = (fruit: Fruit) => {
    setTreeKind(fruit.kind);
    setTreeId(fruit.id);
    scrollToTreeStage();
  };

  const jump = (next: "dictionary" | "tree" | "calendar") => {
    setView(next);
    setSelected(null);
    document.getElementById("pedia-content")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <main className="pediaPage">
        <section className="heroSection">
          <div className="pageContainer heroLayout">
            <div className="heroCopy">
              <p className="eyebrow">FRUITPEDIA</p>
              <h1 className="heroTitle">くだもの図鑑</h1>
              <p className="heroDescription">
                くだものを、知る。
                <br />
                品種、産地、家系図、旬をまとめた図鑑です。
              </p>
              <div className="heroMeta">
                <span>掲載 {fruits.length} 件</span>
                <span className="metaDivider" />
                <span>国内で栽培される果物</span>
              </div>
            </div>
            <aside className="dailyFruitArea" aria-label="今日の果物">
              <p className="dailyFruitHeading">今日の果物 <span>FRUIT OF THE DAY</span></p>
              <button type="button" className="dailyFruitCard" onClick={() => setSelected(todayFruit)} aria-label={`${todayFruit.name}の詳細を見る`}>
                <div className="dailyFruitVisual" style={{ backgroundColor: todayFruit.color }}>
                  <FruitVector fruit={todayFruit} />
                </div>
                <div className="dailyFruitInfo">
                  <span className="dailyFruitKind">{todayFruit.kind}</span>
                  <strong>{todayFruit.name}</strong>
                  <span className="dailyFruitMore">詳しく見る <span aria-hidden="true">↗</span></span>
                </div>
              </button>
            </aside>
          </div>
        </section>

        <nav className="categoryNavigation" aria-label="図鑑メニュー">
          <div className="categoryNavigationInner">
            <button className={view === "dictionary" ? "categoryNavigationLink active" : "categoryNavigationLink"} aria-current={view === "dictionary" ? "page" : undefined} onClick={() => jump("dictionary")}>
              果物一覧
            </button>
            <button className={view === "tree" ? "categoryNavigationLink active" : "categoryNavigationLink"} onClick={() => jump("tree")}>
              家系図
            </button>
            <button className={view === "calendar" ? "categoryNavigationLink active" : "categoryNavigationLink"} onClick={() => jump("calendar")}>
              旬カレンダー
            </button>
          </div>
        </nav>

        <div className="productsArea" id="pedia-content">
          <div className="pageContainer">
            {view === "dictionary" && (
              <section className="categorySection">
                <div className="categoryHeader">
                  <div>
                    <p className="categoryEnglishName">01 / 果物一覧</p>
                    <h2 className="categoryTitle">果物一覧</h2>
                  </div>
                  <p className="categoryDescription">項目を選んで詳細を見る。</p>
                </div>

                <div className="toolRow">
                  <label className="searchField">
                    <span>検索</span>
                    <input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="品種・果物名で探す" />
                  </label>
                  <div className="filterPills" aria-label="種類で絞り込む">
                    {kinds.map((item) => (
                      <button key={item} className={kind === item ? "filterPill chosen" : "filterPill"} onClick={() => setKind(item)}>
                        {item}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="specimenGrid">
                  {filtered.map((fruit, index) => (
                    <button key={fruit.id} type="button" className="specimenCard" aria-label={`${fruit.name}の詳細を見る`} onClick={() => setSelected(fruit)}>
                      <div className="specimenVisual" style={{ background: fruit.color }}>
                        <span className="specimenIndex">{String(index + 1).padStart(2, "0")}</span>
                        <FruitVector fruit={fruit} />
                      </div>
                      <div className="specimenBody">
                        <span className="productBadge">{fruit.kind}</span>
                        <h3 className="productName">{fruit.name}</h3>
                        <p className="productSpecification">{fruit.summary}</p>
                      </div>
                    </button>
                  ))}
                </div>

                {!filtered.length && <p className="emptyText">該当する項目がありません。</p>}
              </section>
            )}

            {view === "tree" && (
              <section className="categorySection">
                <div className="categoryHeader">
                  <div>
                    <p className="categoryEnglishName">02 / 家系図</p>
                    <h2 className="categoryTitle">家系図</h2>
                  </div>
                  <p className="categoryDescription">交配親と子品種を表示。未確認の関係は結びません。</p>
                </div>

                <div className="treeKinds">
                  {treeGroups.map((group) => (
                    <button
                      key={group}
                      className={treeKind === group ? "treeKind active" : "treeKind"} aria-pressed={treeKind === group}
                      onClick={() => {
                        setTreeKind(group);
                        const first = trees.find((tree) => tree.kind === group);
                        if (first) {
                          setTreeId(first.id);
                        }
                      }}
                    >
                      {group}
                    </button>
                  ))}
                </div>

                <p className="pickerLabel">品種を選ぶ</p>
                <div className="treePickerGrid">
                  {visibleTreeItems.map((tree) => {
                    const fruit = allFamilyFruits.find((item) => item.id === tree.id) || getFruitByName(tree.id, tree.kind);
                    return (
                      <button key={tree.id} className={tree.id === treeId ? "treePickerCard active" : "treePickerCard"} aria-pressed={tree.id === treeId} onClick={() => selectTreeFruit(fruit)}>
                        <div className="treePickerVisual" style={{ background: fruit.color }}>
                          <FruitVector fruit={fruit} dense />
                        </div>
                        <span>{fruit.name}</span>
                      </button>
                    );
                  })}
                </div>

                <div className="treeStage" id="fruitpedia-tree-stage">
                  {currentTree.parents ? <div className="treeRow parents">
                    {currentTree.parents.map((name) => {
                      const item = getFruitByName(name, currentTree.kind);
                      return (
                        <button key={name} type="button" className="treeNode small clickable" onClick={() => { if (trees.some((entry) => entry.id === item.id)) selectTreeFruit(item); }} aria-label={`${name}の家系図を見る`}>
                          <div className="treeNodeVisual" style={{ background: item.color }}>
                            <FruitVector fruit={item} dense />
                          </div>
                          <span>親品種 · タップして遡る</span>
                          <strong>{name}</strong>
                        </button>
                      );
                    })}
                  </div> : <p className="treeUnknown">交配親は未確認（確認できた子品種は下に表示）</p>}

                  {currentTree.parents && <div className="treeConnector top">
                    <span />
                    <span className="vertical" />
                  </div>}

                  <div className="treeNode current">
                    <div className="treeNodeVisual currentVisual" style={{ background: currentTreeFruit.color }}>
                      <FruitVector fruit={currentTreeFruit} dense />
                    </div>
                    <span>選択中</span>
                    <strong>{currentTreeFruit.name}</strong>
                  </div>

                  {children.length > 0 && (
                    <>
                      <div className="treeConnector bottom">
                        <span className="vertical" />
                        <span />
                      </div>
                      <div className="treeRow descendants">
                        {children.map((item) => {
                          const name = item.name;
                          return (
                            <button key={item.id} className="treeNode small clickable" onClick={() => selectTreeFruit(item)}>
                              <div className="treeNodeVisual" style={{ background: item.color }}>
                                <FruitVector fruit={item} dense />
                              </div>
                              <span>子品種</span>
                              <strong>{name}</strong>
                            </button>
                          );
                        })}
                      </div>
                    </>
                  )}

                  <p className="smallNote">{currentTree.note}</p>
                  {currentTree.source ? <p className="sourceLink"><a href={currentTree.source} target="_blank" rel="noopener noreferrer">資料を見る ↗</a></p> : null}
                  <p className="smallNote">表示は確認できた交配関係の一部です。育成地と栽培地は異なります。</p>
                </div>
              </section>
            )}

            {view === "calendar" && (
              <section className="categorySection">
                <div className="categoryHeader">
                  <div>
                    <p className="categoryEnglishName">03 / 旬カレンダー</p>
                    <h2 className="categoryTitle">旬カレンダー</h2>
                  </div>
                  <p className="categoryDescription">月ごとの旬の目安。</p>
                </div>

                <div className="monthGrid">
                  {months.map((label, index) => (
                    <button key={label} className={month === index + 1 ? "monthButton chosen" : "monthButton"} aria-pressed={month === index + 1} onClick={() => setMonth(index + 1)}>
                      {label}
                    </button>
                  ))}
                </div>

                <div className="calendarHead">
                  <span>{month}月</span>
                  <p>{monthFruits.length} 件</p>
                </div>

                <div className="calendarGrid">
                  {monthFruits.map((fruit) => (
                    <button key={fruit.id} type="button" className="calendarItem" aria-label={`${fruit.name}の詳細を見る`} onClick={() => setSelected(fruit)}>
                      <div className="calendarVector" style={{ background: fruit.color }}>
                        <FruitVector fruit={fruit} dense />
                      </div>
                      <span>{fruit.name}</span>
                    </button>
                  ))}
                </div>
                {monthFruits.length === 0 && <p className="emptyText">この月に該当する掲載項目はありません。</p>}
                <p className="calendarNote">旬は産地・栽培方法により異なる目安です。通年品目や地域ブランド・系統も掲載しています。</p>
              </section>
            )}
          </div>
        </div>

      </main>

      {selected && typeof document !== "undefined" && createPortal(
        <div className="modalBackdrop" role="presentation" onClick={() => setSelected(null)}>
          <section className="modalCard" role="dialog" aria-modal="true" aria-label={selected.name} onClick={(event) => event.stopPropagation()}>
            <button className="modalClose" onClick={() => setSelected(null)} aria-label="閉じる">
              ×
            </button>
            <div className="modalVisual" style={{ background: selected.color }}>
              <FruitVector fruit={selected} />
            </div>
            <div className="modalContent">
              <span className="productBadge">{selected.kind}</span>
              <h2 className="modalTitle">{selected.name}</h2>
              <p className="modalText">{selected.summary}</p>
              <div className="modalDetailMore">
                <p>{fruitDetails[selected.id] ?? `${selected.name}は、${selected.summary.replace(/。$/, "")}。${kindDetails[selected.kind]}`}</p>
              </div>
              <p className="illustrationNote">イラストは品種の特徴を簡略化したものです。サイズは実寸比ではありません。</p>
              <div className="modalFact">
                <span>主な産地</span>
                <strong>{selected.origin || "国産"}</strong>
              </div>
              <div className="modalFact">
                <span>旬の目安</span>
                <strong>{selected.period.length ? `${selected.period.join("・")}月` : "-"}</strong>
              </div>
              {trees.some((tree) => tree.id === selected.id) && (
                <button
                  className="detailButton modalAction"
                  onClick={() => {
                    const target = trees.find((tree) => tree.id === selected.id);
                    if (target) {
                      setView("tree");
                      setSelected(null);
                      selectTreeFruit(allFamilyFruits.find((fruit) => fruit.id === target.id) || selected);
                    }
                  }}
                >
                  家系図を見る
                  <span className="detailButtonArrow">→</span>
                </button>
              )}
            </div>
          </section>
        </div>,
        document.body
      )}

      <style>{`
        .pediaPage { width: 100%; margin: 0; padding: 0; overflow: hidden; background: #fafaf9; color: #3f3f46; }
        .pageContainer { width: min(960px, calc(100% - 64px)); margin: 0 auto; }

        .heroSection {
          padding: 112px 0 90px;
          background:
            radial-gradient(circle at 85% 15%, rgba(255, 222, 89, 0.18), transparent 25%),
            radial-gradient(circle at 15% 85%, rgba(0, 191, 99, 0.08), transparent 30%),
            #fafaf9;
        }

        /* ヒーロー右側：既存の果物ベクターを使ったランダムカード */
        .heroLayout { display: flex; flex-wrap: nowrap; align-items: center; justify-content: space-between; gap: clamp(24px, 4vw, 64px); }
        .heroCopy { min-width: 0; flex: 1 1 0; }
        .dailyFruitArea { display: block; flex: 0 0 clamp(230px, 29%, 300px); min-width: 230px; width: clamp(230px, 29%, 300px); max-width: 300px; align-self: center; opacity: 1; visibility: visible; }
        .dailyFruitHeading { display: flex; align-items: baseline; justify-content: space-between; gap: 10px; margin: 0 0 13px; color: #41413b; font-size: 14px; font-weight: 700; letter-spacing: .07em; }
        .dailyFruitHeading span { color: #96968c; font-size: 8px; font-weight: 600; letter-spacing: .14em; white-space: nowrap; }
        .dailyFruitCard { display: block; position: relative; width: 100%; min-height: 270px; padding: 0; border: 1px solid #e5e4de; border-radius: 20px; overflow: hidden; background: #fff; color: #31312e; font: inherit; text-align: left; cursor: pointer; box-shadow: 0 12px 32px rgba(52,52,45,.04); transition: transform 220ms ease, box-shadow 220ms ease; }
        .dailyFruitCard:hover { transform: translateY(-3px); box-shadow: 0 17px 42px rgba(52,52,45,.09); }
        .dailyFruitCard:focus-visible { outline: 3px solid #86a974; outline-offset: 4px; }
        .dailyFruitVisual { display: grid; place-items: center; width: 100%; aspect-ratio: 1.25 / 1; overflow: hidden; }
        .dailyFruitVisual .fruitVectorWrap { display: grid; place-items: center; width: 100%; height: 100%; }
        .dailyFruitVisual .vectorSvg { width: 76%; height: 76%; }
        .dailyFruitInfo { display: flex; flex-direction: column; align-items: flex-start; gap: 6px; padding: 15px 19px 17px; }
        .dailyFruitKind { color: #88887d; font-size: 10px; }
        .dailyFruitInfo strong { font-size: 20px; line-height: 1.4; font-weight: 700; overflow-wrap: anywhere; }
        .dailyFruitMore { align-self: flex-end; color: #8b8b82; font-size: 10px; }
        @media (max-width: 900px) {
          .heroLayout { gap: 28px; }
          .dailyFruitHeading { font-size: 13px; }
          .dailyFruitHeading span { display: none; }
        }
        @media (max-width: 680px) {
          .heroLayout { flex-direction: column; align-items: stretch; gap: 44px; }
          .dailyFruitArea { flex: 0 0 auto; width: min(100%, 350px); min-width: 0; max-width: 350px; align-self: center; }
          .dailyFruitHeading span { display: inline; }
          .dailyFruitVisual { aspect-ratio: 1.5 / 1; }
        }

        .eyebrow { margin: 0 0 23px; color: #8a8a84; font-size: 9px; font-weight: 600; line-height: 1.5; letter-spacing: 0.24em; }
        .heroTitle { max-width: 700px; margin: 0; color: #282825; font-size: clamp(43px, 6vw, 78px); font-weight: 400; line-height: 1.08; letter-spacing: -0.055em; }
        .heroDescription { max-width: 540px; margin: 36px 0 0; color: #696963; font-size: clamp(14px, 1.5vw, 17px); line-height: 2; }
        .heroMeta { display: flex; align-items: center; gap: 14px; margin-top: 39px; color: #8b8b84; font-size: 10px; letter-spacing: 0.08em; }
        .metaDivider { width: 27px; height: 1px; background: #cfcec8; }

        .categoryNavigation {
          position: sticky;
          top: 88px;
          z-index: 20;
          border-top: 1px solid #e9e8e2;
          border-bottom: 1px solid #e9e8e2;
          background: rgba(250, 250, 249, 0.94);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
        }

        .categoryNavigationInner { display: flex; width: min(960px, calc(100% - 64px)); margin: 0 auto; overflow-x: auto; scrollbar-width: none; }
        .categoryNavigationInner::-webkit-scrollbar { display: none; }
        .categoryNavigationLink {
          flex: 0 0 auto;
          padding: 17px 19px;
          border: 0;
          background: transparent;
          color: #74746e;
          font-size: 10px;
          line-height: 1.5;
          letter-spacing: 0.08em;
          white-space: nowrap;
        }
        .categoryNavigationLink:first-child { padding-left: 0; }
        .categoryNavigationLink.active { color: #242421; }

        .productsArea { padding: 30px 0 120px; }
        .categorySection { padding: 82px 0 0; scroll-margin-top: 125px; }
        .categoryHeader {
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(240px, 375px);
          gap: 46px;
          align-items: end;
          margin-bottom: 36px;
          padding-bottom: 24px;
          border-bottom: 1px solid #deddd7;
        }
        .categoryEnglishName { margin: 0 0 12px; color: #999992; font-size: 8px; font-weight: 600; line-height: 1.5; letter-spacing: 0.2em; }
        .categoryTitle { margin: 0; color: #2d2d29; font-size: clamp(34px, 4.5vw, 54px); font-weight: 400; line-height: 1.2; letter-spacing: -0.04em; }
        .categoryDescription { margin: 0; color: #777770; font-size: 12px; line-height: 2; }

        .toolRow { display: grid; gap: 18px; margin-bottom: 26px; }
        .searchField { display: grid; gap: 8px; max-width: 340px; color: #777770; font-size: 11px; }
        .searchField input { min-height: 44px; padding: 0 15px; border: 1px solid #e5e4de; border-radius: 999px; background: #fff; color: #31312e; font-size: 12px; }
        .filterPills, .treeKinds { display: flex; flex-wrap: wrap; gap: 8px; }
        .filterPill, .treeKind {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 36px;
          padding: 8px 14px;
          border: 1px solid #e5e4de;
          border-radius: 999px;
          background: #fff;
          color: #777770;
          font-size: 11px;
        }
        .filterPill.chosen, .treeKind.active { background: #343431; border-color: #343431; color: #fff; }

        .specimenGrid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 18px;
        }
        .specimenCard {
          overflow: hidden;
          border: 1px solid #e5e4de;
          border-radius: 18px;
          background: #ffffff;
          box-shadow: 0 9px 30px rgba(52, 52, 45, 0.035);
          text-align: left;
          transition: transform 220ms ease, box-shadow 220ms ease;
        }
        .specimenCard:hover { transform: translateY(-4px); box-shadow: 0 17px 42px rgba(52, 52, 45, 0.08); }
        .specimenVisual {
          position: relative;
          aspect-ratio: 1 / 1;
          display: grid;
          place-items: center;
          padding: 8px;
        }
        .specimenIndex { position: absolute; top: 14px; left: 16px; color: #9b9b94; font-size: 8px; font-weight: 600; letter-spacing: 0.14em; }
        .specimenBody { padding: 18px 18px 17px; }

        .fruitVectorWrap { width: 100%; height: 100%; display: grid; place-items: center; }
        .vectorSvg { width: 84%; height: 84%; display: block; transition: transform 600ms cubic-bezier(0.22, 1, 0.36, 1); }
        .vectorSvg.dense { width: 88%; height: 88%; }
        .specimenCard:hover .vectorSvg, .calendarItem:hover .vectorSvg, .treePickerCard:hover .vectorSvg, .treeNode.clickable:hover .vectorSvg { transform: scale(1.04); }

        .productBadge {
          display: inline-flex;
          min-height: 22px;
          align-items: center;
          padding: 3px 9px;
          border: 1px solid #d9e4cb;
          border-radius: 999px;
          background: #f5f9ef;
          color: #667351;
          font-size: 8px;
          line-height: 1.4;
          letter-spacing: 0.08em;
        }
        .productName { margin: 12px 0 0; color: #31312e; font-size: clamp(18px, 2.2vw, 22px); font-weight: 400; line-height: 1.4; letter-spacing: -0.025em; }
        .productSpecification { margin: 9px 0 0; color: #777770; font-size: 12px; line-height: 1.7; }

        .pickerLabel { margin: 0 0 14px; color: #777770; font-size: 11px; }
        .treePickerGrid { display: grid; grid-template-columns: repeat(5, minmax(0, 1fr)); gap: 14px; margin-bottom: 28px; }
        .treePickerCard {
          overflow: hidden;
          border: 1px solid #e5e4de;
          border-radius: 18px;
          background: #fff;
          text-align: left;
          padding: 0 0 12px;
        }
        .treePickerCard.active { border-color: #a8b79d; box-shadow: 0 0 0 2px rgba(168, 183, 157, 0.2); }
        .treePickerVisual { aspect-ratio: 1 / 1; padding: 4px; }
        .treePickerCard span { display: block; padding: 0 12px; color: #31312e; font-size: 12px; line-height: 1.6; }

        .treeStage {
          scroll-margin-top: 112px;
          border: 1px solid #e5e4de;
          border-radius: 18px;
          background: #fff;
          box-shadow: 0 9px 30px rgba(52, 52, 45, 0.035);
          padding: 32px 20px 30px;
        }
        .treeRow { display: flex; justify-content: center; gap: 16px; flex-wrap: wrap; }
        .treeNode {
          width: 180px;
          border: 1px solid #e5e4de;
          border-radius: 16px;
          background: #fafaf9;
          padding: 12px 12px 16px;
          text-align: center;
        }
        .treeNode.small { width: 170px; }
        .treeNode.current { width: 220px; margin: 0 auto; background: #f5f9ef; border-color: #d9e4cb; }
        .treeNode.clickable { cursor: pointer; }
        .treeNodeVisual { aspect-ratio: 1 / 1; padding: 2px; border-radius: 14px; margin-bottom: 12px; }
        .treeNode.current .treeNodeVisual { margin-bottom: 14px; }
        .treeNode span { display: block; color: #999992; font-size: 9px; letter-spacing: 0.12em; }
        .treeNode strong { display: block; margin-top: 8px; color: #31312e; font-size: 18px; font-weight: 400; line-height: 1.4; }
        .treeConnector { position: relative; width: 100%; height: 58px; }
        .treeConnector.top span:first-child, .treeConnector.bottom span:last-child {
          position: absolute; left: calc(50% - 120px); right: calc(50% - 120px); top: 24px; border-top: 1px solid #bcc5b6;
        }
        .treeConnector .vertical {
          position: absolute; left: 50%; top: 0; bottom: 0; border-left: 1px solid #bcc5b6;
        }
        .smallNote { margin: 22px 0 0; color: #777770; font-size: 12px; line-height: 1.9; text-align: center; }
        .treeUnknown { margin: 0 0 25px; text-align: center; color: #777770; font-size: 12px; }
        .sourceLink { text-align: center; margin: 12px 0 0; color: #567154; font-size: 11px; }
        .sourceLink a { text-decoration: underline; text-underline-offset: 4px; }
        .calendarNote { margin: 24px 0 0; color: #777770; font-size: 11px; line-height: 1.9; }

        .monthGrid { display: grid; grid-template-columns: repeat(12, minmax(0, 1fr)); gap: 6px; margin-bottom: 28px; }
        .monthButton {
          min-height: 44px;
          border: 1px solid #e5e4de;
          border-radius: 10px;
          background: #fff;
          color: #777770;
          font-size: 11px;
        }
        .monthButton.chosen { background: #343431; border-color: #343431; color: #fff; }
        .calendarHead { display: flex; align-items: end; justify-content: space-between; gap: 15px; margin-bottom: 24px; padding-bottom: 22px; border-bottom: 1px solid #deddd7; }
        .calendarHead span { color: #2d2d29; font-size: clamp(34px, 4.5vw, 54px); font-weight: 400; }
        .calendarHead p { margin: 0; color: #777770; font-size: 12px; }
        .calendarGrid { display: grid; grid-template-columns: repeat(5, minmax(0, 1fr)); gap: 16px; }
        .calendarItem {
          overflow: hidden;
          border: 1px solid #e5e4de;
          border-radius: 18px;
          background: #fff;
          text-align: center;
          padding: 0 0 12px;
        }
        .calendarVector { aspect-ratio: 1 / 1; padding: 4px; }
        .calendarItem span { display: block; padding: 0 10px; color: #31312e; font-size: 12px; line-height: 1.6; }
        .emptyText { padding: 40px 0; color: #777770; font-size: 12px; }


        /* 詳細カードはbody直下のPortalで描画し、固定ヘッダーよりも上に重ねる */
        .modalBackdrop { position: fixed; inset: 0; z-index: 2147483647; background: rgba(25, 25, 20, 0.55); padding: 14px 24px 24px; display: grid; place-items: start center; overflow-y: auto; overscroll-behavior: contain; }
        .modalCard { background: white; border-radius: 18px; width: min(580px, 100%); max-height: calc(100dvh - 38px); overflow: auto; position: relative; }
        .modalClose { position: absolute; right: 15px; top: 15px; border: 0; background: white; border-radius: 50%; width: 34px; height: 34px; font-size: 24px; cursor: pointer; }
        .modalVisual { height: 280px; padding: 10px; display: grid; place-items: center; }
        .modalContent { padding: 30px; }
        .modalTitle { font-size: clamp(24px, 3vw, 34px); font-weight: 400; margin: 18px 0; color: #31312e; }
        .illustrationNote { color: #96958d; font-size: 10px; line-height: 1.75; margin: 0 0 13px; }
        .modalText { margin: 0 0 12px; font-size: 12px; line-height: 2; color: #777770; }
        .modalDetailMore { margin: 0 0 18px; padding: 16px 18px; border-radius: 14px; background: #f8f8f4; color: #62635c; font-size: 12px; line-height: 1.95; }
        .modalDetailMore p { margin: 0; }
        .detailSource { display: inline-block; margin-top: 9px; color: #577b54; text-underline-offset: 3px; }
        .modalFact { display: flex; justify-content: space-between; align-items: center; padding: 17px 0; border-bottom: 1px solid #eeeeea; font-size: 12px; }
        .modalFact span { color: #777770; }
        .modalFact strong { font-weight: 500; color: #31312e; }
        .detailButton {
          display: inline-flex;
          min-width: 112px;
          min-height: 42px;
          flex: 0 0 auto;
          align-items: center;
          justify-content: center;
          gap: 10px;
          margin-top: 22px;
          padding: 8px 10px 8px 15px;
          border: 1px solid #deddd8;
          border-radius: 999px;
          background: #ffffff;
          color: #3f3f3a;
          font-size: 10px;
          font-weight: 500;
          line-height: 1;
          letter-spacing: 0.06em;
        }
        .detailButtonArrow { display: inline-flex; width: 27px; height: 27px; align-items: center; justify-content: center; border-radius: 999px; background: #f3f3ef; color: #777770; font-size: 13px; }

        @media (max-width: 900px) {
          .pageContainer { width: min(1180px, calc(100% - 48px)); }
          .heroSection { padding: 150px 0 120px; }
          .eyebrow { margin-bottom: 30px; font-size: 12px; }
          .heroTitle { max-width: 900px; font-size: clamp(54px, 8vw, 104px); }
          .heroDescription { max-width: 700px; margin-top: 48px; font-size: clamp(17px, 2vw, 22px); }
          .heroMeta { gap: 18px; margin-top: 52px; font-size: 13px; }
          .metaDivider { width: 36px; }
          .categoryNavigation { top: 94px; }
          .categoryNavigationInner { width: min(1180px, calc(100% - 48px)); }
          .categoryNavigationLink { padding: 22px 25px; font-size: 13px; }
          .productsArea { padding: 40px 0 160px; }
          .categorySection { padding-top: 110px; scroll-margin-top: 160px; }
          .categoryHeader { grid-template-columns: 1fr; gap: 24px; margin-bottom: 48px; padding-bottom: 32px; }
          .categoryEnglishName { margin-bottom: 16px; font-size: 11px; }
          .categoryTitle { font-size: clamp(42px, 6vw, 72px); }
          .categoryDescription { max-width: 620px; font-size: 15px; }
          .specimenGrid { grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 20px; }
          .treePickerGrid { grid-template-columns: repeat(4, minmax(0, 1fr)); }
          .calendarGrid { grid-template-columns: repeat(4, minmax(0, 1fr)); }
          .monthGrid { grid-template-columns: repeat(6, minmax(0, 1fr)); }
          .specimenCard, .treeStage { border-radius: 24px; }
          .specimenBody { padding: 24px 24px 22px; }
          .productBadge { min-height: 28px; padding: 4px 11px; font-size: 11px; }
          .productName { font-size: clamp(22px, 3vw, 29px); }
          .productSpecification { margin-top: 12px; font-size: 15px; }




        }

        @media (max-width: 768px) {
          .heroTitle { font-size: clamp(48px, 15vw, 72px) !important; line-height: 1.13 !important; }
          .categoryTitle { font-size: 48px !important; line-height: 1.2 !important; }

        }

        @media (max-width: 680px) {
          .pageContainer { width: min(100% - 32px, 1180px); }
          .heroSection { padding-top: 105px !important; padding-bottom: 85px !important; }
          .heroDescription { margin-top: 34px; font-size: 16px; line-height: 1.9; }
          .heroDescription br { display: none; }
          .heroMeta { margin-top: 38px; }
          .categoryNavigation { top: 88px; }
          .categoryNavigationInner { width: calc(100% - 32px); }
          .categoryNavigationLink { padding: 18px; }
          .productsArea { padding-bottom: 110px; }
          .categorySection { padding-top: 80px !important; scroll-margin-top: 135px; }
          .categoryHeader { margin-bottom: 28px; }
          .specimenGrid, .calendarGrid { grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 12px; }
          .treePickerGrid { grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 12px; }
          .treeNode.small { width: calc(50% - 8px); }
          .treeNode.current { width: 210px; }
          .treeConnector.top span:first-child, .treeConnector.bottom span:last-child { left: calc(50% - 80px); right: calc(50% - 80px); }
          .monthGrid { grid-template-columns: repeat(4, minmax(0, 1fr)); }
          .specimenBody { padding: 18px 16px 16px; }
          .productName { font-size: 20px; }
          .productSpecification { font-size: 13px; }

          .modalVisual { height: 220px; }
        }

        @media (max-width: 420px) {
          .heroTitle { font-size: 46px !important; }
          .categoryTitle { font-size: 42px !important; }
          .monthButton, .filterPill, .treeKind { font-size: 10px; }
          .treeNode strong { font-size: 16px; }
        }

        @media (prefers-reduced-motion: reduce) {
          .specimenCard, .vectorSvg, .calendarItem, .treePickerCard { transition: none; }
        }

        /* ---------- 全カード共通：サイズと余白の統一 ---------- */
        .pediaPage, .pediaPage * { box-sizing: border-box; }
        .pediaPage .specimenCard,
        .pediaPage .treePickerCard,
        .pediaPage .calendarItem,
        .pediaPage .treeNode.clickable {
          -webkit-appearance: none;
          appearance: none;
          display: flex;
          flex-direction: column;
          width: 100%;
          min-width: 0;
          margin: 0;
          padding: 0;
          overflow: hidden;
          border: 1px solid #e5e4de;
          border-radius: 18px;
          background: #fff;
          color: #31312e;
          font: inherit;
          text-align: left;
          vertical-align: top;
          cursor: pointer;
        }
        .pediaPage .specimenGrid,
        .pediaPage .treePickerGrid,
        .pediaPage .calendarGrid { align-items: stretch; }

        /* 品種別の背景色はカードのベクター領域全体に適用。本文は白背景を維持。 */
        /* 図鑑カード：イラスト領域の開始位置、縦横比を全品種で固定 */
        .pediaPage .specimenCard { height: 100%; }
        .pediaPage .specimenVisual {
          flex: 0 0 auto;
          display: grid;
          place-items: center;
          width: 100%;
          aspect-ratio: 1 / 1;
          margin: 0;
          padding: 0;
          border-radius: 0;
          overflow: hidden;
        }
        .pediaPage .specimenBody {
          display: flex;
          flex: 1 1 auto;
          flex-direction: column;
          align-items: flex-start;
          width: 100%;
          min-width: 0;
          padding: 18px;
        }
        .pediaPage .specimenBody .productBadge { flex: 0 0 auto; }
        .pediaPage .specimenBody .productName {
          width: 100%;
          margin: 12px 0 0;
          font-size: clamp(16px, 1.55vw, 21px);
          line-height: 1.45;
          overflow-wrap: anywhere;
        }
        .pediaPage .specimenBody .productSpecification {
          width: 100%;
          margin: 9px 0 0;
          font-size: 12px;
          line-height: 1.7;
          overflow-wrap: anywhere;
        }
        .pediaPage .specimenIndex { z-index: 1; }
        .pediaPage .specimenVisual,
        .pediaPage .treePickerVisual,
        .pediaPage .calendarVector,
        .pediaPage .treeNodeVisual { background-clip: border-box; }

        /* 家系図の選択カードと旬カレンダーも同じ基準で配置 */
        .pediaPage .treePickerCard,
        .pediaPage .calendarItem { height: 100%; border-radius: 18px; }
        .pediaPage .treePickerVisual,
        .pediaPage .calendarVector {
          display: block;
          flex: 0 0 auto;
          width: 100%;
          aspect-ratio: 1 / 1;
          padding: 0;
          margin: 0;
          overflow: hidden;
        }
        .pediaPage .treePickerCard > span,
        .pediaPage .calendarItem > span {
          display: flex;
          flex: 1 1 auto;
          width: 100%;
          min-height: 54px;
          align-items: center;
          justify-content: center;
          padding: 10px 12px;
          color: #31312e;
          font-size: 12px;
          line-height: 1.5;
          font-weight: 400;
          text-align: center;
          overflow-wrap: anywhere;
        }
        .pediaPage .treeNode.clickable {
          width: 170px;
          padding: 12px 12px 16px;
          background: #fafaf9;
          text-align: center;
        }
        .pediaPage .treeNode.clickable .treeNodeVisual { width: 100%; }

        /* SVGはカード内で統一した比率・中心位置に固定 */
        .pediaPage .fruitVectorWrap {
          display: grid;
          place-items: center;
          width: 100%;
          height: 100%;
          min-width: 0;
          min-height: 0;
        }
        .pediaPage .vectorSvg,
        .pediaPage .vectorSvg.dense {
          display: block;
          width: 82%;
          height: 82%;
          max-width: 100%;
          max-height: 100%;
          overflow: visible;
          flex-shrink: 0;
        }
        .modalBackdrop .fruitVectorWrap { display: grid; place-items: center; width: 100%; height: 100%; min-width: 0; min-height: 0; }
        .modalBackdrop .vectorSvg, .modalBackdrop .vectorSvg.dense { display: block; width: 82%; height: 82%; max-width: 100%; max-height: 100%; overflow: visible; flex-shrink: 0; }
        /* 図鑑カードだけ少し余白を増やす。品種別のSVG内部の倍率・形・色は変更しない。 */
        .pediaPage .specimenVisual .vectorSvg,
        .pediaPage .specimenVisual .vectorSvg.dense {
          width: 76%;
          height: 76%;
        }
        @media (max-width: 900px) {
          .pediaPage .specimenBody { padding: 18px; }
          .pediaPage .specimenBody .productName { font-size: 19px; }
          .pediaPage .specimenBody .productSpecification { font-size: 12px; }
        }
        @media (max-width: 680px) {
          .pediaPage .specimenBody { padding: 15px 13px; }
          .pediaPage .specimenBody .productName { font-size: 17px; }
          .pediaPage .specimenBody .productSpecification { font-size: 11px; }
          .pediaPage .treePickerCard > span,
          .pediaPage .calendarItem > span { min-height: 48px; padding: 8px; font-size: 11px; }
          .pediaPage .treeNode.clickable { width: calc(50% - 8px); }
        }

      `}</style>
    </>
  );
}
