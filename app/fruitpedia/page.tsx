"use client";

import { useEffect, useMemo, useState } from "react";
import { type Kind, type Fruit, fruits, fruitDetails, FruitVector } from "./fruitpedia-shared";
import { createPortal } from "react-dom";

type Tree = {
  id: string;
  kind: Kind;
  parents: [string, string] | null;
  note: string;
  source: string;
};


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
  { id:"sato",kind:"さくらんぼ",parents:["黄玉","ナポレオン"],note:"佐藤錦は黄玉とナポレオンの交配種。",source:SOURCES.cherry },
  { id:"benishuho",kind:"さくらんぼ",parents:["佐藤錦","天香錦"],note:"紅秀峰は佐藤錦と天香錦の交配種。",source:SOURCES.cherry },
  { id:"benio",kind:"さくらんぼ",parents:["紅秀峰","C-47-70"],note:"やまがた紅王は紅秀峰とC-47-70の交配種。C-47-70はレーニアと紅さやかの交配系統。",source:SOURCES.cherry },
  { id:"benisayaka",kind:"さくらんぼ",parents:["佐藤錦","セネカ"],note:"紅さやかは佐藤錦とセネカの交配種。",source:SOURCES.cherry },
  { id:"benitemari",kind:"さくらんぼ",parents:["ビック","佐藤錦"],note:"紅てまりはビックと佐藤錦の交配種。",source:SOURCES.cherry },
  { id:"benikirari",kind:"さくらんぼ",parents:["レーニア","コンパクトステラ"],note:"紅きらりはレーニアとコンパクトステラの交配種。",source:SOURCES.cherry },
  { id:"suiran",kind:"さくらんぼ",parents:["ビック","C21-7"],note:"紅ゆたかはビックとC21-7の交配種。",source:SOURCES.cherry },
  { id:"koka-nishiki",kind:"さくらんぼ",parents:["佐藤錦","高砂"],note:"香夏錦は佐藤錦と高砂の交配種。",source:"https://ymgt-f150.com/cherry-kinds/" },
  { id:"junohart",kind:"さくらんぼ",parents:["紅秀峰","サミット"],note:"ジュノハートは紅秀峰とサミットの交配種。青森県で育成。",source:"https://www.aomori-itc.or.jp/marche/d01_mar_junoheart.html" },
  { id:"gassan-nishiki",kind:"さくらんぼ",parents:null,note:"月山錦は中国で育成された黄実品種。交配親は未確認。",source:"https://www.yamagata.nmai.org/ymgt-f/cherry-kinds/index.html" },
  { id:"taisho-nishiki",kind:"さくらんぼ",parents:null,note:"大将錦は偶発実生として発見された品種。交配親は未確認。",source:"https://www.yamagata.nmai.org/ymgt-f/cherry-kinds/index.html" },
  { id:"yamagata-bijin",kind:"さくらんぼ",parents:null,note:"山形美人は佐藤錦の枝変わり。",source:"https://ymgt-f150.com/cherry-kinds/" },
  { id:"tenko-nishiki",kind:"さくらんぼ",parents:null,note:"天香錦は紅秀峰の花粉親。自身の交配親は未確認。",source:"https://ymgt-f150.com/cherry-kinds/" },
  { id:"seiko-nishiki",kind:"さくらんぼ",parents:null,note:"正光錦は香夏錦の自然交雑実生。花粉親は未確認。",source:"https://ymgt-f150.com/cherry-kinds/" },

  { id:"akatsuki",kind:"桃",parents:["白桃","白鳳"],note:"あかつきは白桃と白鳳の交配種。",source:"" },
  { id:"hakuhou",kind:"桃",parents:["橘早生","白桃"],note:"白鳳は橘早生と白桃の交配種。",source:"" },

  { id:"shine",kind:"ぶどう",parents:["安芸津21号","白南"],note:"シャインマスカットは安芸津21号と白南の交配種。",source:SOURCES.grape },
  { id:"fuji-no-kagayaki",kind:"ぶどう",parents:["シャインマスカット","ウインク"],note:"富士の輝き（富士の輝）は、山梨県の志村葡萄研究所でシャインマスカットとウインクから育成された黒紫色の大粒ぶどう。",source:"https://inobudou.com/%E5%AF%8C%E5%A3%AB%E3%81%AE%E8%BC%9D/" },
  { id:"pione",kind:"ぶどう",parents:["巨峰","カノンホール・マスカット"],note:"ピオーネは巨峰とカノンホール・マスカットの交配種。",source:SOURCES.pione },
  { id:"nagano-purple",kind:"ぶどう",parents:["巨峰","リザマート"],note:"ナガノパープルは巨峰とリザマートの交配種。花粉親はDNA鑑定で確認。",source:SOURCES.naganoPurple },

  { id:"fuji",kind:"りんご",parents:["国光","デリシャス"],note:"サンふじは「ふじ」の無袋栽培品。ふじは国光とデリシャスの交配種。",source:SOURCES.appleClassic },
  { id:"shinano-sweet",kind:"りんご",parents:["ふじ","つがる"],note:"シナノスイートはふじとつがるの交配種。",source:SOURCES.apple },
  { id:"akibae",kind:"りんご",parents:["千秋","つがる"],note:"秋映は千秋とつがるの交配種。",source:SOURCES.apple },
  { id:"shinano-gold",kind:"りんご",parents:["ゴールデンデリシャス","千秋"],note:"シナノゴールドはゴールデンデリシャスと千秋の交配種。",source:SOURCES.apple },
  { id:"morinokagayaki",kind:"りんご",parents:["つがる","ガラ"],note:"もりのかがやきはつがるとガラの交配種。",source:"https://www.ringodaigaku.com/main/hinshu/mo/forestshine.html" },
  { id:"orin",kind:"りんご",parents:["ゴールデンデリシャス","印度"],note:"王林はゴールデンデリシャスと印度の交配種。",source:SOURCES.appleClassic },

  { id:"lafrance",kind:"西洋梨",parents:null,note:"ラ・フランスは交配親が未確認の品種。",source:SOURCES.westernPear },
  { id:"ballade",kind:"西洋梨",parents:["バートレット","ラ・フランス"],note:"バラードはバートレットとラ・フランスの交配種。山形県で育成。",source:SOURCES.ballade },
  { id:"melowrich",kind:"西洋梨",parents:["ミクルマス・ネリス","ラ・フランス"],note:"メロウリッチはミクルマス・ネリスとラ・フランスの交配種。山形県で育成。",source:SOURCES.westernPear },
  { id:"aurora",kind:"西洋梨",parents:["マルゲリット・マリーラ","バートレット"],note:"オーロラはマルゲリット・マリーラとバートレットの交配種。米国で育成。",source:SOURCES.westernPear },
  { id:"lelectier",kind:"西洋梨",parents:null,note:"ル・レクチェは交配親が未確認の品種。",source:SOURCES.westernPear },
  { id:"general-leclerc",kind:"西洋梨",parents:null,note:"ゼネラル・レクラークは交配親が未確認の品種。",source:SOURCES.westernPear },
  { id:"margherite",kind:"西洋梨",parents:null,note:"マルゲリット・マリーラは交配親が未確認の品種。",source:SOURCES.westernPear },

  { id:"kosui",kind:"和梨",parents:["菊水","早生幸蔵"],note:"幸水は菊水と早生幸蔵の交配種。",source:SOURCES.kosui },
  { id:"hosui",kind:"和梨",parents:["幸水","イ-33"],note:"豊水は幸水とイ-33を両親とする可能性がDNA解析で示された品種。",source:SOURCES.japanesePear },
  { id:"akizuki",kind:"和梨",parents:["162-29","幸水"],note:"あきづきは162-29と幸水の交配種。162-29は新高と豊水の交配系統。",source:SOURCES.akizuki },
  { id:"kaori",kind:"和梨",parents:["新興","幸水"],note:"かおりは新興と幸水の交配種。",source:SOURCES.kaori },

  { id:"tochiotome",kind:"いちご",parents:["久留米49号","栃の峰"],note:"とちおとめは久留米49号と栃の峰の交配種。",source:"" },
  { id:"amaou",kind:"いちご",parents:["久留米53号","92-46"],note:"あまおうは久留米53号と92-46の交配種。",source:"" },
  { id:"benihoppe",kind:"いちご",parents:["章姫","さちのか"],note:"紅ほっぺは章姫とさちのかの交配種。",source:"" },
  { id:"sagahonoka",kind:"いちご",parents:["大錦","とよのか"],note:"さがほのかは大錦ととよのかの交配種。",source:"" },
  { id:"yayoihime",kind:"いちご",parents:["とねほっぺ","とちおとめ"],note:"やよいひめはとねほっぺととちおとめの交配種。",source:"" },
  { id:"akihime",kind:"いちご",parents:["久能早生","女峰"],note:"章姫は久能早生と女峰の交配種。",source:"" },
  { id:"otomegokoro",kind:"いちご",parents:["9505-05","さちのか"],note:"おいCベリーは9505-05とさちのかの交配種。",source:"https://www.naro.go.jp/collab/breed/0300/0301/001491.html" },

  { id:"kiyomi",kind:"柑橘",parents:["宮川早生","トロビタオレンジ"],note:"清見は宮川早生とトロビタオレンジの交配種。",source:"" },
  { id:"shiranui",kind:"柑橘",parents:["清見","中野3号ポンカン"],note:"不知火は清見と中野3号ポンカンの交配種。",source:"https://www.naro.go.jp/laboratory/nifts/kih/citrus_cat/post_70.html" },
  { id:"harumi",kind:"柑橘",parents:["清見","ポンカンF-2432"],note:"はるみは清見とポンカンF-2432の交配種。",source:"https://www.naro.go.jp/collab/breed/0400/0405/001301.html" },
  { id:"setoka",kind:"柑橘",parents:["清見×アンコールNo.2","マーコット"],note:"せとかは清見×アンコールNo.2とマーコットの交配種。",source:"https://www.naro.go.jp/collab/breed/0400/0405/001283.html" },
  { id:"benimadonna",kind:"柑橘",parents:["南香","天草"],note:"紅まどんなは南香と天草の交配種。「愛媛果試第28号」のブランド名。",source:"" },

  { id:"taishu",kind:"柿",parents:["富有","IIiG-16"],note:"太秋は富有とIIiG-16の交配種。",source:"https://www.naro.go.jp/collab/breed/0400/0404/001321.html" },
  { id:"soshu",kind:"柿",parents:["伊豆","109-27"],note:"早秋は伊豆と109-27の交配種。109-27は興津2号と興津17号の交配系統。",source:"https://www.naro.go.jp/collab/breed/0400/0404/001275.html" },
  // 育成機関の一次資料で直接の交配組み合わせを確認できた品種。
  { id:"grohskrone",kind:"ぶどう",parents:["藤稔","安芸クイーン"],note:"グロースクローネは藤稔と安芸クイーンの交配種。",source:"https://www.naro.go.jp/collab/breed/0400/0411/077926.html" },
  { id:"sunverde",kind:"ぶどう",parents:["ダークリッジ","センテニアル"],note:"サンヴェルデはダークリッジとセンテニアルの交配種。",source:"https://www.naro.go.jp/collab/breed/0400/0411/001355.html" },
  { id:"kanshu",kind:"柿",parents:["新秋","18-4"],note:"甘秋は新秋と18-4の交配種。18-4は富有と興津16号の交配系統。",source:"https://www.naro.go.jp/collab/breed/0400/0404/001269.html" },
  { id:"nicocot",kind:"あんず",parents:["ライバル","アンズ筑波5号"],note:"ニコニコットはライバルとアンズ筑波5号の交配種。",source:"https://www.naro.go.jp/collab/breed/0400/0401/001346.html" },
  { id:"ohisamacot",kind:"あんず",parents:["アンズ農林5号","ハーコット"],note:"おひさまコットはアンズ農林5号とハーコットの交配種。",source:"https://www.naro.go.jp/collab/breed/0400/0401/001347.html" },
  { id:"reiwa",kind:"うめ",parents:["加賀地蔵","月知梅"],note:"麗和は加賀地蔵と月知梅の交配種。",source:"https://www.naro.go.jp/collab/breed/0400/0402/136317.html" },
  { id:"wago",kind:"うめ",parents:["剣先","MM-43-22"],note:"和郷は剣先とMM-43-22の交配種。",source:"https://www.naro.go.jp/collab/breed/0400/0402/index.html" },
  { id:"rinoka-lemon",kind:"レモン",parents:["リスボン","ヒュウガナツ"],note:"璃の香はリスボンとヒュウガナツの交配種。",source:"https://www.naro.go.jp/laboratory/nifts/rinoka/index.html" },
];

// 図鑑未掲載の「親品種」も、図鑑の件数を増やさずに家系図内で閲覧できるようにする。
// 親が分からない場合は架空の交配関係を作らず、既知の子品種のみ表示する。
const ancestorDetails: Record<string, { parents: [string, string] | null; note: string; source: string }> = {
  "天香錦": { parents: null, note: "天香錦は偶発品種で、紅秀峰の花粉親。交配親は未確認。", source: "https://www.yamagata.nmai.org/ymgt-f/cherry-kinds/index.html" },
  "C-47-70": { parents: ["レーニア", "紅さやか"], note: "C-47-70はレーニアと紅さやかの交配系統。やまがた紅王の親系統。", source: SOURCES.cherry },
  "安芸津21号": { parents: ["スチューベン", "マスカット・オブ・アレキサンドリア"], note: "安芸津21号はスチューベンとマスカット・オブ・アレキサンドリアの交配系統。", source: SOURCES.grape },
  "162-29": { parents: ["新高", "豊水"], note: "162-29は新高と豊水の交配系統。あきづきの親系統。", source: SOURCES.akizuki },
  "18-4": { parents: ["富有", "興津16号"], note: "18-4は富有と興津16号の交配系統。甘秋の親系統。", source: "https://www.naro.go.jp/collab/breed/0400/0404/001269.html" },
  "109-27": { parents: ["興津2号", "興津17号"], note: "109-27は興津2号と興津17号の交配系統。早秋の親系統。", source: "https://www.naro.go.jp/collab/breed/0400/0404/001275.html" },
  "アンズ農林5号": { parents: ["New Castle Early", "甲州大実"], note: "アンズ農林5号はNew Castle Earlyと甲州大実の交配系統。", source: "https://www.naro.go.jp/collab/breed/0400/0401/001347.html" },
  "アンズ筑波5号": { parents: ["New Castle Early", "甲州大実"], note: "アンズ筑波5号はNew Castle Earlyと甲州大実の交配系統。", source: "https://www.naro.go.jp/collab/breed/0400/0401/001346.html" },
  "清見×アンコールNo.2": { parents: ["清見", "アンコール"], note: "清見×アンコールNo.2は清見とアンコールの交配系統。せとかの親系統。", source: "https://www.naro.go.jp/collab/breed/0400/0405/001283.html" },
  "黄玉": { parents: null, note: "黄玉は佐藤錦の親品種。自身の交配親は未確認。", source: SOURCES.cherry },
  "ナポレオン": { parents: null, note: "ナポレオンは佐藤錦の親品種。", source: SOURCES.cherry },
};

const normalizeFamilyName = (name: string) => name === "ふじ" ? "サンふじ" : name;
const documentedTreeIds = new Set(documentedTrees.map((tree) => tree.id));
const catalogueTrees: Tree[] = [
  ...documentedTrees,
  ...fruits.filter((fruit) => !documentedTreeIds.has(fruit.id)).map((fruit) => ({
    id: fruit.id,
    kind: fruit.kind,
    parents: null,
    note: `${fruit.name}は交配親が未確認の品種。`,
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

// 親品種にも固有の旬が確認できる場合のみ月を設定する。
// 旬は国内での収穫時期の一例で、地域・年によって前後します。
// 未確認の交配系統には推測の収穫月を与えず、旬カレンダーには掲載しない。
const ancestorHarvestMonths: Record<string, number[]> = {
  "ゴールデンデリシャス": [10], // https://de.aichi-kyosai.or.jp/service/culture/internet/cook/vegetable/vegetable_1/post_510.html
  "国光": [11], // 同上
  "レーニア": [7, 8], // https://www.oh-cherry.com/brand/lenia/ （北海道での例）
  "ウインク": [9, 10], // https://www.city.koshu.yamanashi.jp/iju/54things/articles/no-113.html
  "バートレット": [8, 9], // https://www.foodslink.jp/syokuzaihyakka/syun/fruit/younashi2.htm
};

const ancestorOffspring = new Map<string, string[]>();
for (const child of documentedTrees) {
  const fruitName = fruits.find((fruit) => fruit.id === child.id)?.name;
  if (!fruitName) continue;
  for (const parent of child.parents ?? []) {
    const existing = ancestorOffspring.get(parent) ?? [];
    if (!existing.includes(fruitName)) existing.push(fruitName);
    ancestorOffspring.set(parent, existing);
  }
}
for (const [name, entry] of Object.entries(ancestorDetails)) {
  for (const parent of entry.parents ?? []) {
    const existing = ancestorOffspring.get(parent) ?? [];
    if (!existing.includes(name)) existing.push(name);
    ancestorOffspring.set(parent, existing);
  }
}

const ancestorFruits: Fruit[] = [...ancestorNames].map(([name, kind]) => {
  const period = ancestorHarvestMonths[name] ?? [];
  const offspring = ancestorOffspring.get(name) ?? [];
  const isBreedingLine = /[0-9０-９]/.test(name) || /[×Xx]/.test(name);
  const relationship = isBreedingLine ? "親系統" : "親品種";
  const family = offspring.length > 0 ? `${offspring.slice(0, 2).join("・")}${offspring.length > 2 ? "など" : ""}の${relationship}。` : `家系図に登場する${relationship}。`;
  return {
    id: `ancestor-${name}`,
    name,
    kind,
    period,
    summary: `${family}${period.length ? "国内の旬は産地によって前後します。" : "品種固有の旬は確認中です。"}`,
    origin: "産地の情報は未確認",
    color: ancestryColor[kind],
  };
});
const allFamilyFruits = [...fruits, ...ancestorFruits];
const ancestorTrees: Tree[] = ancestorFruits.map((fruit) => {
  const detail = ancestorDetails[fruit.name];
  return {
    id: fruit.id,
    kind: fruit.kind,
    parents: detail?.parents ?? null,
    note: detail?.note ?? `${fruit.name}は親品種として系譜に登場。自身の交配親は未確認。`,
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

// カード表面の summary は一文のまま。詳細を開いたときだけ補足を表示。
// 品種固有の情報を確認できるものは個別に記載し、それ以外は品目の一般的な楽しみ方を案内。
// カード表面は品種ごとの一文。詳細では、確認できる固有の特徴のみを補足する。
// 共通の紹介文を一律追加しない。固有の追加情報がない場合は説明を重複させない。

export default function FruitPediaPage() {
  const [view, setView] = useState<"dictionary" | "tree" | "calendar">("dictionary");
  const [kind, setKind] = useState<Kind | "すべて">("すべて");
  const [isFruitCategoryMenuOpen, setIsFruitCategoryMenuOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [treeKind, setTreeKind] = useState<Kind>("さくらんぼ");
  const [isTreeCategoryMenuOpen, setIsTreeCategoryMenuOpen] = useState(false);
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
    return allFamilyFruits.filter((fruit) => {
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
    // 旬を確認できている品種のみ月別に掲載。旬未確認の親品種は一覧と家系図には残す。
    return allFamilyFruits.filter((fruit) => fruit.period.includes(month));
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

  // A new tab opened from the 3D orchard selects the corresponding family tree.
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("view") !== "tree") return;
    const fruitId = params.get("fruit") || "sato";
    const target = trees.find((entry) => entry.id === fruitId);
    setView("tree");
    setTreeKind(target?.kind ?? "さくらんぼ");
    setTreeId(target?.id ?? "sato");
    const timeout = window.setTimeout(() => scrollToTreeStage(), 180);
    return () => window.clearTimeout(timeout);
  }, []);

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
              <h1 className="heroTitle">くだもの事典</h1>
              <p className="heroDescription">
                くだものを、知る。
                <br />
                品種、産地、家系図、旬をまとめた事典です。
              </p>
              <div className="heroMeta">
                <span>掲載 {allFamilyFruits.length} 件</span>
                <span className="metaDivider" />
                <span>日本各地で栽培される果物</span>
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
                  <p className="categoryDescription">項目を選んで詳細を見ることができます。</p>
                </div>

                <div className="toolRow">
                  <label className="searchField">
                    <span>検索</span>
                    <input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="品種・果物名で探す" />
                  </label>
                  <div className="fruitCategoryFilter">
                    <button
                      type="button"
                      className="fruitCategoryMenuToggle"
                      aria-expanded={isFruitCategoryMenuOpen}
                      aria-controls="fruitpedia-mobile-category-options"
                      onClick={() => setIsFruitCategoryMenuOpen((open) => !open)}
                    >
                      <span className="fruitCategoryToggleCaption">果物の種類</span>
                      <strong>{kind === "すべて" ? "すべての果物" : kind}</strong>
                      <span className={`fruitCategoryToggleChevron ${isFruitCategoryMenuOpen ? "isOpen" : ""}`} aria-hidden="true">⌄</span>
                    </button>
                    <div id="fruitpedia-mobile-category-options" className={`filterPills ${isFruitCategoryMenuOpen ? "mobileExpanded" : ""}`} aria-label="種類で絞り込む">
                      {kinds.map((item) => (
                        <button key={item} type="button" className={kind === item ? "filterPill chosen" : "filterPill"} aria-pressed={kind === item} onClick={() => { setKind(item); setIsFruitCategoryMenuOpen(false); }}>
                          {item}
                        </button>
                      ))}
                    </div>
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
                  <p className="categoryDescription">交配親と子品種を表示しています。</p>
                </div>

                <div className="treeCategoryFilter">
                  <button
                    type="button"
                    className="fruitCategoryMenuToggle"
                    aria-expanded={isTreeCategoryMenuOpen}
                    aria-controls="fruitpedia-mobile-tree-category-options"
                    onClick={() => setIsTreeCategoryMenuOpen((open) => !open)}
                  >
                    <span className="fruitCategoryToggleCaption">果物の種類</span>
                    <strong>{treeKind}</strong>
                    <span className={`fruitCategoryToggleChevron ${isTreeCategoryMenuOpen ? "isOpen" : ""}`} aria-hidden="true">⌄</span>
                  </button>
                  <div id="fruitpedia-mobile-tree-category-options" className={`treeKinds ${isTreeCategoryMenuOpen ? "mobileExpanded" : ""}`} aria-label="家系図の果物の種類">
                    {treeGroups.map((group) => (
                      <button
                        key={group}
                        type="button"
                        className={treeKind === group ? "treeKind active" : "treeKind"} aria-pressed={treeKind === group}
                        onClick={() => {
                          setTreeKind(group);
                          setIsTreeCategoryMenuOpen(false);
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
                  <p className="categoryDescription">月ごとの旬と、家系図に登場する親品種もまとめています。</p>
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
                <p className="calendarNote">旬は産地・栽培方法により異なる目安です。収穫時期が確認できている品種のみ掲載しています。</p>
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
              {fruitDetails[selected.id] && (
                <div className="modalDetailMore">
                  <p>{fruitDetails[selected.id]}</p>
                </div>
              )}
              <p className="illustrationNote">イラストは品種の特徴を簡略化したものです。サイズは実寸比ではありません。</p>
              <div className="modalFact">
                <span>主な産地・栽培例</span>
                <strong>{selected.origin || "国産"}</strong>
              </div>
              <div className="modalFact">
                <span>旬の目安</span>
                <strong>{selected.period.length ? `${selected.period.join("・")}月` : "未確認"}</strong>
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


        /* スマホ用のカテゴリー選択ボタン。PCのフィルター表示は従来どおり。 */
        .fruitCategoryFilter, .treeCategoryFilter { display: contents; }
        .fruitCategoryMenuToggle { display: none; }

        /* ===== FruitPedia smartphone refinement (story/page.tsx inspired) =====
           Desktop styling above 900px is intentionally unchanged. */
        @media (min-width: 681px) and (max-width: 900px) {
          .pediaPage .heroLayout { align-items: center; }
          .pediaPage .dailyFruitArea { flex: 0 0 250px; width: 250px; min-width: 0; }
          .pediaPage .heroTitle { font-size: clamp(43px, 6vw, 65px); overflow-wrap: anywhere; }
          .pediaPage .heroDescription { font-size: 16px; }
          .pediaPage .categoryNavigation { top: 94px; }
        }
        @media (max-width: 680px) {
          /* storyと同じ左右16pxと、余白を生かした縦組み */
          .pediaPage { width: 100%; max-width: 100%; overflow-x: clip; }
          .pediaPage .pageContainer,
          .pediaPage .categoryNavigationInner { width: calc(100% - 32px); max-width: none; margin-inline: auto; }
          .pediaPage .heroSection { padding: 42px 0 56px !important; }
          .pediaPage .heroLayout { display: flex; flex-direction: column; align-items: stretch; gap: 40px; }
          .pediaPage .heroCopy { flex: none; width: 100%; }
          .pediaPage .eyebrow { margin-bottom: 23px; font-size: 10px; }
          /* fruit/page.tsx と同じスマホ用見出しサイズ・左揃え */
          .pediaPage .heroTitle { max-width: 100%; font-size: clamp(48px, 15vw, 72px) !important; line-height: 1.13 !important; letter-spacing: -0.055em; text-align: left; overflow-wrap: anywhere; }
          .pediaPage .heroDescription { max-width: 100%; margin-top: 30px; font-size: 15px; line-height: 1.9; }
          .pediaPage .heroMeta { flex-wrap: wrap; column-gap: 12px; row-gap: 8px; margin-top: 30px; font-size: 10px; line-height: 1.6; }
          .pediaPage .metaDivider { width: 22px; }
          .pediaPage .dailyFruitArea { flex: none; align-self: stretch; width: 100%; min-width: 0; max-width: none; margin-inline: 0; }
          .pediaPage .dailyFruitHeading { margin-bottom: 13px; font-size: 13px; }
          .pediaPage .dailyFruitCard { min-height: 0; border-radius: 19px; }
          .pediaPage .dailyFruitVisual { aspect-ratio: 1.5 / 1; }
          .pediaPage .dailyFruitInfo { padding: 16px 18px; }
          .pediaPage .dailyFruitInfo strong { font-size: 20px; }
          /* スマホヘッダー高さ82pxに揃えてナビを固定 */
          .pediaPage .categoryNavigation { top: 82px; }
          /* ヒーロー、ナビ、3セクションを同じ左右16pxのガイドに揃える。 */
          .pediaPage .productsArea > .pageContainer,
          .pediaPage .categoryNavigationInner { width: calc(100% - 32px); max-width: none; margin-inline: auto; }
          .pediaPage .categoryNavigationInner { justify-content: space-between; gap: 4px; }
          .pediaPage .categoryNavigationLink { flex: 0 1 auto; min-width: 0; padding: 16px 5px; font-size: clamp(10px, 2.8vw, 12px); letter-spacing: 0; }
          .pediaPage .categoryNavigationLink:first-child { padding-left: 0; }
          .pediaPage .categoryNavigationLink:last-child { padding-right: 0; }
          .pediaPage .productsArea { padding: 30px 0 110px; scroll-margin-top: 140px; }
          .pediaPage .categorySection { padding-top: 80px !important; scroll-margin-top: 140px; }
          .pediaPage .categoryHeader { grid-template-columns: minmax(0, 1fr); gap: 16px; margin-bottom: 27px; padding-bottom: 24px; }
          .pediaPage .categoryEnglishName { margin-bottom: 13px; font-size: 10px; }
          .pediaPage .categoryTitle { font-size: clamp(38px, 10vw, 48px) !important; line-height: 1.2 !important; overflow-wrap: anywhere; }
          .pediaPage .categoryDescription { font-size: 13px; line-height: 1.85; }
          .pediaPage .searchField { max-width: none; width: 100%; font-size: 12px; }
          .pediaPage .searchField input { width: 100%; min-height: 46px; font-size: 14px; }
          .pediaPage .filterPills, .pediaPage .treeKinds { gap: 7px; }
          .pediaPage .filterPill, .pediaPage .treeKind { min-height: 38px; padding: 8px 11px; font-size: 11px; }
          /* 果物一覧と家系図で共通の開閉式カテゴリー選択。 */
          .pediaPage .fruitCategoryFilter { display: block; width: 100%; min-width: 0; }
          .pediaPage .fruitCategoryMenuToggle {
            display: flex; width: 100%; min-height: 58px; align-items: center; gap: 12px;
            padding: 11px 17px; border: 1px solid #deddd7; border-radius: 17px;
            background: #fff; color: #343431; font: inherit; cursor: pointer; text-align: left;
          }
          .pediaPage .fruitCategoryToggleCaption { color: #85857e; font-size: 11px; flex-shrink: 0; }
          .pediaPage .fruitCategoryMenuToggle strong { margin-left: auto; font-size: 15px; font-weight: 700; }
          .pediaPage .fruitCategoryToggleChevron { display: inline-flex; font-size: 23px; line-height: 1; margin-left: 4px; transform: translateY(-3px); transition: transform .2s ease; }
          .pediaPage .fruitCategoryToggleChevron.isOpen { transform: rotate(180deg) translateY(3px); }
          .pediaPage .fruitCategoryFilter .filterPills { display: none; }
          .pediaPage .fruitCategoryFilter .filterPills.mobileExpanded { display: flex; margin-top: 13px; padding: 14px; border: 1px solid #e5e4de; border-radius: 17px; background: #fff; }
          .pediaPage .fruitCategoryFilter .filterPill { font-size: 12px; min-height: 39px; padding: 8px 12px; }
          .pediaPage .treeCategoryFilter { display: block; width: 100%; min-width: 0; }
          .pediaPage .treeCategoryFilter .treeKinds { display: none; }
          .pediaPage .treeCategoryFilter .treeKinds.mobileExpanded { display: flex; margin-top: 13px; padding: 14px; border: 1px solid #e5e4de; border-radius: 17px; background: #fff; }
          .pediaPage .treeCategoryFilter .treeKind { font-size: 12px; min-height: 39px; padding: 8px 12px; }
          /* スマホでは果物一覧を2列に戻す。 */
          .pediaPage .specimenGrid { grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 12px; }
          .pediaPage .calendarGrid { grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 12px; }
          .pediaPage .specimenCard { border-radius: 20px; min-width: 0; }
          .pediaPage .specimenBody { padding: 15px 13px 16px; }
          .pediaPage .specimenBody .productBadge { min-height: 22px; padding: 3px 8px; font-size: 9px; }
          .pediaPage .specimenBody .productName { font-size: clamp(15px, 4.4vw, 19px); line-height: 1.4; overflow-wrap: anywhere; }
          .pediaPage .specimenBody .productSpecification { font-size: 11px; line-height: 1.7; overflow-wrap: anywhere; }
          .pediaPage .specimenIndex { top: 17px; left: 18px; font-size: 10px; }
          .pediaPage .treePickerGrid { grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 12px; }
          .pediaPage .treeStage { padding: 24px 12px 26px; border-radius: 20px; }
          .pediaPage .treeRow { gap: 10px; }
          .pediaPage .treeNode.small, .pediaPage .treeNode.clickable { width: calc(50% - 5px); min-width: 0; }
          .pediaPage .treeNode.current { width: min(210px, 85%); }
          .pediaPage .treeNode { min-width: 0; padding: 10px 8px 13px; border-radius: 14px; }
          .pediaPage .treeNode strong { font-size: 15px; overflow-wrap: anywhere; }
          .pediaPage .treeConnector.top span:first-child, .pediaPage .treeConnector.bottom span:last-child { left: 23%; right: 23%; }
          .pediaPage .smallNote, .pediaPage .treeUnknown { font-size: 11px; line-height: 1.85; }
          .pediaPage .monthGrid { grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 7px; }
          .pediaPage .monthButton { min-height: 44px; font-size: 12px; }
          .pediaPage .calendarHead { gap: 10px; }
          .pediaPage .calendarHead span { font-size: 36px; }
          .pediaPage .calendarHead p { font-size: 11px; }
        }
        @media (max-width: 420px) {
          .pediaPage .heroTitle { font-size: clamp(38px, 11.5vw, 46px) !important; }
          .pediaPage .categoryTitle { font-size: 42px !important; }
          .pediaPage .categoryNavigationLink { font-size: 10px; padding-inline: 3px; }
          .pediaPage .specimenBody { padding: 14px 12px 15px; }
          .pediaPage .specimenBody .productName { font-size: clamp(14px, 4.2vw, 18px); }
          .pediaPage .specimenBody .productSpecification { font-size: 11px; }
          .pediaPage .treeNode strong { font-size: 14px; }
        }
        /* スマホの下部3セクションは親に16pxだけ余白を設ける。
           子コンテナは100%にして、二重の左右余白を防ぐ。 */
        @media (max-width: 680px) {
          .pediaPage .productsArea {
            box-sizing: border-box;
            width: 100%;
            padding-left: 16px !important;
            padding-right: 16px !important;
          }
          .pediaPage .productsArea > .pageContainer {
            box-sizing: border-box;
            width: 100% !important;
            max-width: none !important;
            margin-left: 0 !important;
            margin-right: 0 !important;
            padding-left: 0 !important;
            padding-right: 0 !important;
          }
          .pediaPage .productsArea .categorySection {
            box-sizing: border-box;
            width: 100%;
            min-width: 0;
            padding-left: 0 !important;
            padding-right: 0 !important;
          }
          .pediaPage .productsArea .categoryHeader,
          .pediaPage .productsArea .toolRow,
          .pediaPage .productsArea .specimenGrid,
          .pediaPage .productsArea .treePickerGrid,
          .pediaPage .productsArea .treeStage,
          .pediaPage .productsArea .calendarGrid,
          .pediaPage .productsArea .monthGrid {
            box-sizing: border-box;
            width: 100%;
            min-width: 0;
            max-width: none;
          }
        }

        @media (max-width: 680px) {
          /* Portalはbody直下なので、ページスコープに依存せずスマホだけ調整 */
          /* 詳細カード自身はスクロールさせず、全文をそのまま展開する。
             画面より長い場合は、背景のオーバーレイ全体だけをスクロール。 */
          .modalBackdrop { padding: max(12px, env(safe-area-inset-top)) 12px max(24px, env(safe-area-inset-bottom)); overflow-y: auto; overflow-x: hidden; display: block; -webkit-overflow-scrolling: touch; }
          .modalCard { width: min(100%, 580px); max-height: none; height: auto; overflow: visible; border-radius: 18px; margin: 0 auto; }
          .modalVisual { height: clamp(185px, 58vw, 255px); }
          .modalContent { padding: 23px 20px 27px; }
          .modalTitle { font-size: 29px; line-height: 1.35; overflow-wrap: anywhere; }
          .modalText, .modalDetailMore { font-size: 13px; line-height: 1.9; }
          .modalDetailMore { padding: 14px 15px; }
          .modalFact { gap: 14px; font-size: 12px; }
          .modalFact strong { text-align: right; overflow-wrap: anywhere; }
          .modalClose { z-index: 2; }
        }

      `}</style>
    </>
  );
}
