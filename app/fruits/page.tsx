import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "季節の果物 | みつばち果樹園",
  description:
    "みつばち果樹園で育てている、さくらんぼ、すいか、桃、ぶどう、りんご、ラ・フランスなど、山形の季節の果物をご紹介します。",
};

const SHOPIFY_STORE_URL = "https://q2cxkf-4m.myshopify.com";

type Product = {
  id: string;
  name: string;
  grade: string;
  specification: string;
  price: number;
};

type Category = {
  id: string;
  name: string;
  englishName: string;
  description: string;
  products: Product[];
};

const categories: Category[] = [
  {
    id: "watermelon",
    name: "すいか",
    englishName: "WATERMELON",
    description:
      "山形の夏を代表する、みずみずしく甘い尾花沢すいかをお届けします。",
    products: [
      {
        id: "yamagata-watermelon-wakeari-medium-1",
        name: "尾花沢すいか",
        grade: "訳あり",
        specification: "中玉・1玉",
        price: 3000,
      },
      {
        id: "yamagata-watermelon-wakeari-medium-2",
        name: "尾花沢すいか",
        grade: "訳あり",
        specification: "中玉・2玉",
        price: 4200,
      },
      {
        id: "yamagata-watermelon-wakeari-large-1",
        name: "尾花沢すいか",
        grade: "訳あり",
        specification: "大玉・1玉",
        price: 3300,
      },
      {
        id: "yamagata-watermelon-wakeari-large-2",
        name: "尾花沢すいか",
        grade: "訳あり",
        specification: "大玉・2玉",
        price: 4800,
      },
      {
        id: "obanazawa-watermelon-medium-1",
        name: "尾花沢すいか",
        grade: "秀品",
        specification: "中玉・1玉",
        price: 3600,
      },
      {
        id: "obanazawa-watermelon-medium-2",
        name: "尾花沢すいか",
        grade: "秀品",
        specification: "中玉・2玉",
        price: 5400,
      },
      {
        id: "obanazawa-watermelon-large-1",
        name: "尾花沢すいか",
        grade: "秀品",
        specification: "大玉・1玉",
        price: 4200,
      },
      {
        id: "obanazawa-watermelon-large-2",
        name: "尾花沢すいか",
        grade: "秀品",
        specification: "大玉・2玉",
        price: 6600,
      },
    ],
  },
  {
    id: "peach",
    name: "桃",
    englishName: "PEACH",
    description:
      "芳醇な香りと、口いっぱいに広がるやさしい甘さをお楽しみください。",
    products: [
      {
        id: "kawanakajima-hakuto-5kg",
        name: "川中島白桃",
        grade: "秀品",
        specification: "5kg",
        price: 5100,
      },
      {
        id: "omakase-hakuto-5kg",
        name: "白桃",
        grade: "秀品",
        specification: "5kg",
        price: 4500,
      },
    ],
  },
  {
    id: "grape",
    name: "ぶどう",
    englishName: "GRAPE",
    description:
      "粒の大きさ、豊かな香り、上品な甘さを大切に選別しています。",
    products: [
      {
        id: "pione-700g",
        name: "ピオーネ",
        grade: "秀品",
        specification: "1房・約700g",
        price: 3000,
      },
      {
        id: "pione-2kg",
        name: "ピオーネ",
        grade: "秀品",
        specification: "2〜6房・約2kg",
        price: 4200,
      },
      {
        id: "shine-muscat-700g",
        name: "シャインマスカット",
        grade: "秀品",
        specification: "1房・約700g",
        price: 2700,
      },
      {
        id: "shine-muscat-2kg",
        name: "シャインマスカット",
        grade: "秀品",
        specification: "2〜6房・約2kg",
        price: 3900,
      },
    ],
  },
  {
    id: "apple",
    name: "りんご",
    englishName: "APPLE",
    description:
      "山形の寒暖差が育てた、香り豊かで歯ごたえのよいりんごです。",
    products: [
      {
        id: "fuji-apple-10-18",
        name: "ふじりんご",
        grade: "秀品",
        specification: "10〜18玉",
        price: 3600,
      },
      {
        id: "fuji-apple-20-36",
        name: "ふじりんご",
        grade: "秀品",
        specification: "20〜36玉",
        price: 4800,
      },
      {
        id: "fuji-apple-wakeari-10kg",
        name: "ふじりんご",
        grade: "訳あり",
        specification: "10kg",
        price: 3000,
      },
    ],
  },
  {
    id: "la-france",
    name: "ラ・フランス",
    englishName: "LA FRANCE",
    description:
      "とろけるような果肉と芳醇な香りを持つ、山形を代表する西洋梨です。",
    products: [
      {
        id: "la-france-5kg",
        name: "ラ・フランス",
        grade: "秀品",
        specification: "5kg",
        price: 4500,
      },
    ],
  },
  {
    id: "cherry",
    name: "さくらんぼ",
    englishName: "CHERRY",
    description:
      "山形県東根市から、一粒一粒大切に選別したさくらんぼをお届けします。",
    products: [
      {
        id: "satonishiki-l-1kg",
        name: "佐藤錦",
        grade: "秀品",
        specification: "Lサイズ・1kg・バラ詰め",
        price: 6000,
      },
      {
        id: "benishuho-2l-1kg",
        name: "紅秀峰",
        grade: "秀品",
        specification: "2Lサイズ・1kg・バラ詰め",
        price: 7500,
      },
    ],
  },
];

function ColorLogo() {
  return (
    <span className="colorLogo" aria-label="みつばち果樹園">
      <span style={{ color: "#FF3131" }}>み</span>
      <span style={{ color: "#006DFF" }}>つ</span>
      <span style={{ color: "#00BF63" }}>ば</span>
      <span style={{ color: "#FFDE59" }}>ち</span>
      <span style={{ color: "#8C52FF" }}>果</span>
      <span style={{ color: "#00A1FF" }}>樹</span>
      <span style={{ color: "#FF66C4" }}>園</span>
    </span>
  );
}

function formatPrice(price: number) {
  return new Intl.NumberFormat("ja-JP").format(price);
}

export default function FruitsPage() {
  const productCount = categories.reduce(
    (total, category) => total + category.products.length,
    0
  );

  return (
    <>
      <main className="fruitsPage">
        <section className="heroSection">
          <div className="pageContainer">
            <p className="eyebrow">FRUITS FROM YAMAGATA</p>

            <h1 className="heroTitle">
              山形のおいしさを、
              <br />
              まっすぐに。
            </h1>

            <p className="heroDescription">
              旬の果物を、一番おいしい時期に。
              <br />
              山形県東根市の
              <ColorLogo />
              からお届けします。
            </p>

            <div className="heroMeta">
              <span>全{productCount}商品</span>
              <span className="metaDivider" />
              <span>季節限定販売</span>
            </div>
          </div>
        </section>

        <nav className="categoryNavigation" aria-label="商品カテゴリー">
          <div className="categoryNavigationInner">
            {categories.map((category) => (
              <a
                key={category.id}
                href={`#${category.id}`}
                className="categoryNavigationLink"
              >
                {category.name}
              </a>
            ))}
          </div>
        </nav>

        <div className="productsArea">
          <div className="pageContainer">
            {categories.map((category, categoryIndex) => (
              <section
                key={category.id}
                id={category.id}
                className="categorySection"
              >
                <div className="categoryHeader">
                  <div>
                    <p className="categoryEnglishName">
                      {String(categoryIndex + 1).padStart(2, "0")} /{" "}
                      {category.englishName}
                    </p>

                    <h2 className="categoryTitle">{category.name}</h2>
                  </div>

                  <p className="categoryDescription">
                    {category.description}
                  </p>
                </div>

                <div className="productGrid">
                  {category.products.map((product, productIndex) => (
                    <article className="productCard" key={product.id}>
                      <div className="productVisual">
                        <Image
                          src={`/images/fruits/${product.id}.jpg`}
                          alt={`${product.name} ${product.grade} ${product.specification}`}
                          fill
                          sizes="(max-width: 680px) calc(100vw - 32px), (max-width: 900px) 50vw, 480px"
                          className="productImage"
                        />

                        <div className="productImageOverlay" />

                        <span className="visualNumber">
                          {String(productIndex + 1).padStart(2, "0")}
                        </span>

                        <span className="visualEnglishName">
                          {category.englishName}
                        </span>
                      </div>

                      <div className="productInformation">
                        <div className="productBadges">
                          <span
                            className={
                              product.grade === "訳あり"
                                ? "productBadge productBadgeWakeari"
                                : "productBadge"
                            }
                          >
                            {product.grade}
                          </span>
                        </div>

                        <h3 className="productName">{product.name}</h3>

                        <p className="productSpecification">
                          {product.specification}
                        </p>

                        <div className="productFooter">
                          <p className="productPrice">
                            <span className="productPriceNumber">
                              {formatPrice(product.price)}円
                            </span>

                            <span className="productPriceTax">（税込）</span>
                          </p>

                          <a
                            href={`${SHOPIFY_STORE_URL}/products/${product.id}`}
                            className="purchaseButton"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${product.name} ${product.specification}を購入する`}
                          >
                            <span className="purchaseButtonText">購入する</span>
                            <span
                              className="purchaseButtonArrow"
                              aria-hidden="true"
                            >
                              →
                            </span>
                          </a>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>

        <section className="closingSection">
          <div className="pageContainer closingInner">
            <p className="closingEnglish">FROM OUR FARM</p>

            <h2 className="closingTitle">
              季節がめぐるたび、
              <br />
              また食べたくなる果物を。
            </h2>

            <p className="closingDescription">
              天候や収穫状況により、販売期間や内容が変更となる場合があります。
              <br />
              商品の販売開始まで、どうぞ楽しみにお待ちください。
            </p>

            <ColorLogo />
          </div>
        </section>
      </main>

      <style>{`
        .fruitsPage {
          width: 100%;
          margin: 0;
          padding: 0;
          overflow: hidden;
          background: #fafaf9;
          color: #3f3f46;
        }

        .pageContainer {
          width: min(960px, calc(100% - 64px));
          margin: 0 auto;
        }

        .heroSection {
          padding: 112px 0 90px;
          background:
            radial-gradient(
              circle at 85% 15%,
              rgba(255, 222, 89, 0.18),
              transparent 25%
            ),
            radial-gradient(
              circle at 15% 85%,
              rgba(0, 191, 99, 0.08),
              transparent 30%
            ),
            #fafaf9;
        }

        .eyebrow {
          margin: 0 0 23px;
          color: #8a8a84;
          font-size: 9px;
          font-weight: 600;
          line-height: 1.5;
          letter-spacing: 0.24em;
        }

        .heroTitle {
          max-width: 700px;
          margin: 0;
          color: #282825;
          font-size: clamp(43px, 6vw, 78px);
          font-weight: 400;
          line-height: 1.08;
          letter-spacing: -0.055em;
        }

        .heroDescription {
          max-width: 540px;
          margin: 36px 0 0;
          color: #696963;
          font-size: clamp(14px, 1.5vw, 17px);
          line-height: 2;
        }

        .heroDescription .colorLogo {
          margin: 0 5px;
          white-space: nowrap;
        }

        .heroMeta {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-top: 39px;
          color: #8b8b84;
          font-size: 10px;
          letter-spacing: 0.08em;
        }

        .metaDivider {
          width: 27px;
          height: 1px;
          background: #cfcec8;
        }

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

        .categoryNavigationInner {
          display: flex;
          width: min(960px, calc(100% - 64px));
          margin: 0 auto;
          overflow-x: auto;
          scrollbar-width: none;
        }

        .categoryNavigationInner::-webkit-scrollbar {
          display: none;
        }

        .categoryNavigationLink {
          flex: 0 0 auto;
          padding: 17px 19px;
          color: #74746e;
          font-size: 10px;
          line-height: 1.5;
          letter-spacing: 0.08em;
          text-decoration: none;
          white-space: nowrap;
          transition: color 180ms ease;
        }

        .categoryNavigationLink:first-child {
          padding-left: 0;
        }

        .categoryNavigationLink:hover {
          color: #242421;
        }

        .productsArea {
          padding: 30px 0 120px;
        }

        .categorySection {
          padding: 82px 0 0;
          scroll-margin-top: 125px;
        }

        .categoryHeader {
          display: grid;
          grid-template-columns:
            minmax(0, 1fr)
            minmax(240px, 375px);
          gap: 46px;
          align-items: end;
          margin-bottom: 36px;
          padding-bottom: 24px;
          border-bottom: 1px solid #deddd7;
        }

        .categoryEnglishName {
          margin: 0 0 12px;
          color: #999992;
          font-size: 8px;
          font-weight: 600;
          line-height: 1.5;
          letter-spacing: 0.2em;
        }

        .categoryTitle {
          margin: 0;
          color: #2d2d29;
          font-size: clamp(34px, 4.5vw, 54px);
          font-weight: 400;
          line-height: 1.2;
          letter-spacing: -0.04em;
        }

        .categoryDescription {
          margin: 0;
          color: #777770;
          font-size: 12px;
          line-height: 2;
        }

        .productGrid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 23px;
        }

        .productCard {
          overflow: hidden;
          border: 1px solid #e5e4de;
          border-radius: 18px;
          background: #ffffff;
          box-shadow: 0 9px 30px rgba(52, 52, 45, 0.035);
          transition:
            transform 220ms ease,
            box-shadow 220ms ease;
        }

        .productCard:hover {
          transform: translateY(-4px);
          box-shadow: 0 17px 42px rgba(52, 52, 45, 0.08);
        }

        .productVisual {
          position: relative;
          width: 100%;
          aspect-ratio: 3 / 2;
          overflow: hidden;
          background: #eeeeea;
        }

        .productImage {
          object-fit: cover;
          object-position: center;
          transition: transform 600ms cubic-bezier(0.22, 1, 0.36, 1);
        }

        .productCard:hover .productImage {
          transform: scale(1.045);
        }

        .productImageOverlay {
          position: absolute;
          inset: 0;
          z-index: 1;
          pointer-events: none;
          background:
            linear-gradient(
              180deg,
              rgba(20, 20, 16, 0.15) 0%,
              rgba(20, 20, 16, 0) 34%,
              rgba(20, 20, 16, 0) 62%,
              rgba(20, 20, 16, 0.3) 100%
            );
        }

        .visualNumber {
          position: absolute;
          top: 18px;
          left: 20px;
          z-index: 2;
          color: rgba(255, 255, 255, 0.95);
          font-size: 9px;
          font-weight: 600;
          line-height: 1.5;
          letter-spacing: 0.16em;
          text-shadow: 0 2px 12px rgba(0, 0, 0, 0.28);
        }

        .visualEnglishName {
          position: absolute;
          right: 19px;
          bottom: 17px;
          z-index: 2;
          color: rgba(255, 255, 255, 0.95);
          font-size: 8px;
          font-weight: 600;
          line-height: 1.5;
          letter-spacing: 0.22em;
          text-shadow: 0 2px 12px rgba(0, 0, 0, 0.35);
        }

        .productInformation {
          padding: 23px 23px 21px;
        }

        .productBadges {
          display: flex;
          align-items: center;
          min-height: 22px;
          margin-bottom: 18px;
        }

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

        .productBadgeWakeari {
          border-color: #ead9bf;
          background: #fff8ed;
          color: #8a6a42;
        }

        .productName {
          margin: 0;
          color: #31312e;
          font-size: clamp(18px, 2.2vw, 22px);
          font-weight: 400;
          line-height: 1.4;
          letter-spacing: -0.025em;
        }

        .productSpecification {
          margin: 9px 0 0;
          color: #777770;
          font-size: 12px;
          line-height: 1.7;
        }

        .productFooter {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 15px;
          margin-top: 23px;
          padding-top: 17px;
          border-top: 1px solid #eeeeea;
        }

        .productPrice {
          display: flex;
          min-width: 0;
          flex: 1 1 auto;
          align-items: baseline;
          gap: 4px;
          margin: 0;
          color: #31312e;
          line-height: 1.5;
        }

        .productPriceNumber {
          font-size: 17px;
          font-weight: 500;
          letter-spacing: 0.01em;
          white-space: nowrap;
        }

        .productPriceTax {
          color: #999993;
          font-size: 8px;
          letter-spacing: 0.04em;
          white-space: nowrap;
        }

        .purchaseButton {
          display: inline-flex;
          min-width: 112px;
          min-height: 42px;
          flex: 0 0 auto;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 8px 10px 8px 15px;
          border: 1px solid #deddd8;
          border-radius: 999px;
          background: #ffffff;
          color: #3f3f3a;
          font-size: 10px;
          font-weight: 500;
          line-height: 1;
          letter-spacing: 0.06em;
          text-decoration: none;
          box-shadow: 0 4px 14px rgba(52, 52, 45, 0.025);
          transition:
            transform 200ms ease,
            background 200ms ease,
            border-color 200ms ease,
            color 200ms ease,
            box-shadow 200ms ease;
        }

        .purchaseButton:hover {
          transform: translateY(-2px);
          border-color: #ff3131;
          background: #ff3131;
          color: #ffffff;
          box-shadow: 0 9px 22px rgba(255, 49, 49, 0.18);
        }

        .purchaseButton:active {
          transform: scale(0.97);
          border-color: #ff3131;
          background: #ff3131;
          color: #ffffff;
          box-shadow: 0 4px 12px rgba(255, 49, 49, 0.16);
        }

        .purchaseButtonText {
          white-space: nowrap;
        }

        .purchaseButtonArrow {
          display: inline-flex;
          width: 27px;
          height: 27px;
          flex: 0 0 auto;
          align-items: center;
          justify-content: center;
          border-radius: 999px;
          background: #f3f3ef;
          color: #777770;
          font-size: 13px;
          line-height: 1;
          transition:
            transform 200ms ease,
            background 200ms ease,
            color 200ms ease;
        }

        .purchaseButton:hover .purchaseButtonArrow,
        .purchaseButton:active .purchaseButtonArrow {
          transform: translateX(2px);
          background: rgba(255, 255, 255, 0.2);
          color: #ffffff;
        }

        .purchaseButton:focus-visible {
          outline: 3px solid rgba(255, 49, 49, 0.24);
          outline-offset: 3px;
        }

        .closingSection {
          padding: 98px 0 112px;
          border-top: 1px solid #e4e3dd;
          background: #f4f3ef;
        }

        .closingInner {
          text-align: center;
        }

        .closingEnglish {
          margin: 0 0 21px;
          color: #92928b;
          font-size: 8px;
          font-weight: 600;
          line-height: 1.5;
          letter-spacing: 0.24em;
        }

        .closingTitle {
          margin: 0;
          color: #343431;
          font-size: clamp(30px, 4.5vw, 53px);
          font-weight: 400;
          line-height: 1.35;
          letter-spacing: -0.045em;
        }

        .closingDescription {
          max-width: 540px;
          margin: 27px auto 36px;
          color: #777770;
          font-size: 12px;
          line-height: 2.1;
        }

        .colorLogo {
          display: inline-flex;
          font-size: inherit;
          font-weight: 400;
          line-height: inherit;
          letter-spacing: 0;
        }

        .closingInner > .colorLogo {
          font-size: clamp(24px, 3.8vw, 39px);
        }

        @media (max-width: 900px) {
          .pageContainer {
            width: min(1180px, calc(100% - 48px));
          }

          .heroSection {
            padding: 150px 0 120px;
          }

          .eyebrow {
            margin-bottom: 30px;
            font-size: 12px;
          }

          .heroTitle {
            max-width: 900px;
            font-size: clamp(54px, 8vw, 104px);
          }

          .heroDescription {
            max-width: 700px;
            margin-top: 48px;
            font-size: clamp(17px, 2vw, 22px);
          }

          .heroDescription .colorLogo {
            margin-right: 6px;
            margin-left: 6px;
          }

          .heroMeta {
            gap: 18px;
            margin-top: 52px;
            font-size: 13px;
          }

          .metaDivider {
            width: 36px;
          }

          .categoryNavigation {
            top: 94px;
          }

          .categoryNavigationInner {
            width: min(1180px, calc(100% - 48px));
          }

          .categoryNavigationLink {
            padding: 22px 25px;
            font-size: 13px;
          }

          .categoryNavigationLink:first-child {
            padding-left: 0;
          }

          .productsArea {
            padding: 40px 0 160px;
          }

          .categorySection {
            padding-top: 110px;
            scroll-margin-top: 160px;
          }

          .categoryHeader {
            grid-template-columns: 1fr;
            gap: 24px;
            margin-bottom: 48px;
            padding-bottom: 32px;
          }

          .categoryEnglishName {
            margin-bottom: 16px;
            font-size: 11px;
          }

          .categoryTitle {
            font-size: clamp(42px, 6vw, 72px);
          }

          .categoryDescription {
            max-width: 620px;
            font-size: 15px;
          }

          .productGrid {
            gap: 20px;
          }

          .productCard {
            border-radius: 24px;
          }

          .visualNumber {
            top: 24px;
            left: 26px;
            font-size: 12px;
          }

          .visualEnglishName {
            right: 25px;
            bottom: 22px;
            font-size: 10px;
          }

          .productInformation {
            padding: 30px 30px 28px;
          }

          .productBadges {
            min-height: 28px;
            margin-bottom: 24px;
          }

          .productBadge {
            min-height: 28px;
            padding: 4px 11px;
            font-size: 11px;
          }

          .productName {
            font-size: clamp(22px, 3vw, 29px);
          }

          .productSpecification {
            margin-top: 12px;
            font-size: 15px;
          }

          .productFooter {
            gap: 18px;
            margin-top: 30px;
            padding-top: 22px;
          }

          .productPriceNumber {
            font-size: 22px;
          }

          .productPriceTax {
            font-size: 10px;
          }

          .purchaseButton {
            min-width: 134px;
            min-height: 50px;
            gap: 12px;
            padding: 9px 11px 9px 18px;
            font-size: 13px;
          }

          .purchaseButtonArrow {
            width: 32px;
            height: 32px;
            font-size: 15px;
          }

          .closingSection {
            padding: 130px 0 150px;
          }

          .closingEnglish {
            margin-bottom: 28px;
            font-size: 11px;
          }

          .closingTitle {
            font-size: clamp(38px, 6vw, 70px);
          }

          .closingDescription {
            max-width: 700px;
            margin: 36px auto 48px;
            font-size: 15px;
          }

          .closingInner > .colorLogo {
            font-size: clamp(30px, 5vw, 52px);
          }
        }

        @media (max-width: 768px) {
          .fruitsPage {
            padding: 0 !important;
          }

          .heroSection,
          .categorySection,
          .closingSection {
            padding-right: 0 !important;
            padding-left: 0 !important;
          }

          .heroTitle {
            font-size: clamp(48px, 15vw, 72px) !important;
            line-height: 1.13 !important;
          }

          .categoryTitle {
            font-size: 48px !important;
            line-height: 1.2 !important;
          }

          .closingTitle {
            font-size: clamp(36px, 10vw, 54px) !important;
            line-height: 1.35 !important;
          }
        }

        @media (max-width: 680px) {
          .pageContainer {
            width: min(100% - 32px, 1180px);
          }

          .heroSection {
            padding-top: 105px !important;
            padding-bottom: 85px !important;
          }

          .heroDescription {
            margin-top: 34px;
            font-size: 16px;
            line-height: 1.9;
          }

          .heroDescription br {
            display: none;
          }

          .heroMeta {
            margin-top: 38px;
          }

          .categoryNavigation {
            top: 88px;
          }

          .categoryNavigationInner {
            width: calc(100% - 32px);
          }

          .categoryNavigationLink {
            padding: 18px;
          }

          .categoryNavigationLink:first-child {
            padding-left: 0;
          }

          .productsArea {
            padding-bottom: 110px;
          }

          .categorySection {
            padding-top: 80px !important;
            scroll-margin-top: 135px;
          }

          .categoryHeader {
            margin-bottom: 28px;
          }

          .productGrid {
            grid-template-columns: 1fr;
          }

          .productCard {
            border-radius: 20px;
          }

          .productInformation {
            padding: 25px 23px 23px;
          }

          .productFooter {
            gap: 12px;
          }

          .purchaseButton {
            min-width: 124px;
            min-height: 46px;
            gap: 9px;
            padding: 8px 9px 8px 15px;
            font-size: 12px;
          }

          .purchaseButtonArrow {
            width: 30px;
            height: 30px;
            font-size: 14px;
          }

          .closingSection {
            padding-top: 95px !important;
            padding-bottom: 110px !important;
          }

          .closingDescription br {
            display: none;
          }
        }

        @media (max-width: 480px) {
          .fruitsPage {
            padding-top: 0 !important;
            padding-bottom: 0 !important;
          }

          .productPriceNumber {
            font-size: 18px;
          }

          .purchaseButton {
            min-width: 116px;
          }
        }

        @media (max-width: 420px) {
          .heroTitle {
            font-size: 46px !important;
          }

          .categoryTitle {
            font-size: 42px !important;
          }

          .visualNumber {
            top: 17px;
            left: 18px;
            font-size: 10px;
          }

          .visualEnglishName {
            right: 18px;
            bottom: 15px;
            font-size: 9px;
          }

          .productFooter {
            gap: 9px;
          }

          .purchaseButton {
            min-width: 108px;
            padding-left: 13px;
            font-size: 11px;
          }

          .purchaseButtonArrow {
            width: 28px;
            height: 28px;
            font-size: 13px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .categoryNavigationLink,
          .productCard,
          .productImage,
          .purchaseButton,
          .purchaseButtonArrow {
            transition: none;
          }
        }
      `}</style>
    </>
  );
}