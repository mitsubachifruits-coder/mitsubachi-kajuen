type Product = {
  id: string;
  name: string;
  grade: string;
  specification: string;
};

type Category = {
  id: string;
  name: string;
  englishName: string;
  description: string;
  visualText: string;
  products: Product[];
};

const categories: Category[] = [
  {
    id: "watermelon",
    name: "スイカ",
    englishName: "WATERMELON",
    description:
      "山形の夏を代表する、みずみずしく甘いスイカをお届けします。",
    visualText: "西瓜",
    products: [
      {
        id: "yamagata-watermelon-wakeari-medium-1",
        name: "山形産スイカ",
        grade: "訳あり",
        specification: "中玉・1玉",
      },
      {
        id: "yamagata-watermelon-wakeari-medium-2",
        name: "山形産スイカ",
        grade: "訳あり",
        specification: "中玉・2玉",
      },
      {
        id: "yamagata-watermelon-wakeari-large-1",
        name: "山形産スイカ",
        grade: "訳あり",
        specification: "大玉・1玉",
      },
      {
        id: "yamagata-watermelon-wakeari-large-2",
        name: "山形産スイカ",
        grade: "訳あり",
        specification: "大玉・2玉",
      },
      {
        id: "obanazawa-watermelon-medium-1",
        name: "尾花沢スイカ",
        grade: "秀品",
        specification: "中玉・1玉",
      },
      {
        id: "obanazawa-watermelon-medium-2",
        name: "尾花沢スイカ",
        grade: "秀品",
        specification: "中玉・2玉",
      },
      {
        id: "obanazawa-watermelon-large-1",
        name: "尾花沢スイカ",
        grade: "秀品",
        specification: "大玉・1玉",
      },
      {
        id: "obanazawa-watermelon-large-2",
        name: "尾花沢スイカ",
        grade: "秀品",
        specification: "大玉・2玉",
      },
    ],
  },
  {
    id: "peach",
    name: "桃",
    englishName: "PEACH",
    description:
      "芳醇な香りと、口いっぱいに広がるやさしい甘さをお楽しみください。",
    visualText: "桃",
    products: [
      {
        id: "kawanakajima-hakuto-5kg",
        name: "川中島白桃",
        grade: "秀品",
        specification: "5kg",
      },
      {
        id: "omakase-hakuto-5kg",
        name: "おまかせ白桃",
        grade: "秀品",
        specification: "5kg",
      },
    ],
  },
  {
    id: "grape",
    name: "ぶどう",
    englishName: "GRAPE",
    description:
      "粒の大きさ、豊かな香り、上品な甘さを大切に選別しています。",
    visualText: "葡萄",
    products: [
      {
        id: "pione-700g",
        name: "ピオーネ",
        grade: "秀品",
        specification: "1房・約700g",
      },
      {
        id: "pione-2kg",
        name: "ピオーネ",
        grade: "秀品",
        specification: "2〜6房・約2kg",
      },
      {
        id: "shine-muscat-700g",
        name: "シャインマスカット",
        grade: "秀品",
        specification: "1房・約700g",
      },
      {
        id: "shine-muscat-2kg",
        name: "シャインマスカット",
        grade: "秀品",
        specification: "2〜6房・約2kg",
      },
    ],
  },
  {
    id: "apple",
    name: "りんご",
    englishName: "APPLE",
    description:
      "山形の寒暖差が育てた、香り豊かで歯ごたえのよいりんごです。",
    visualText: "林檎",
    products: [
      {
        id: "fuji-apple-10-18",
        name: "ふじりんご",
        grade: "秀品",
        specification: "10〜18玉",
      },
      {
        id: "fuji-apple-20-36",
        name: "ふじりんご",
        grade: "秀品",
        specification: "20〜36玉",
      },
      {
        id: "fuji-apple-wakeari-10kg",
        name: "ふじりんご",
        grade: "訳あり",
        specification: "10kg",
      },
    ],
  },
  {
    id: "la-france",
    name: "ラ・フランス",
    englishName: "LA FRANCE",
    description:
      "とろけるような果肉と芳醇な香りを持つ、山形を代表する西洋梨です。",
    visualText: "洋梨",
    products: [
      {
        id: "la-france-5kg",
        name: "ラ・フランス",
        grade: "秀品",
        specification: "5kg",
      },
    ],
  },
  {
    id: "cherry",
    name: "さくらんぼ",
    englishName: "CHERRY",
    description:
      "山形県東根市から、一粒一粒大切に選別したさくらんぼをお届けします。",
    visualText: "桜桃",
    products: [
      {
        id: "satonishiki-l-1kg",
        name: "佐藤錦",
        grade: "秀品",
        specification: "Lサイズ・1kg・バラ詰め",
      },
      {
        id: "benishuho-2l-1kg",
        name: "紅秀峰",
        grade: "秀品",
        specification: "2Lサイズ・1kg・バラ詰め",
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

export default function FruitsPage() {
  const productCount = categories.reduce(
    (total, category) => total + category.products.length,
    0
  );

  return (
    <>
      <main>
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
                      <div
                        className={`productVisual productVisual-${category.id}`}
                      >
                        <span className="visualNumber">
                          {String(productIndex + 1).padStart(2, "0")}
                        </span>

                        <span className="visualFruitName">
                          {category.visualText}
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

                          <span className="productStatus">販売準備中</span>
                        </div>

                        <h3 className="productName">{product.name}</h3>

                        <p className="productSpecification">
                          {product.specification}
                        </p>

                        <div className="productFooter">
                          <p className="productPrice">価格は販売時に表示</p>

                          <span className="productArrow" aria-hidden="true">
                            →
                          </span>
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
          </div>
        </section>
      </main>

      <style>{`
        html {
          scroll-behavior: smooth;
        }

        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          background: #fafaf9;
          color: #3f3f46;
        }

        .pageContainer {
          width: min(1180px, calc(100% - 48px));
          margin: 0 auto;
        }

        .heroSection {
          padding: 150px 0 120px;
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
          margin: 0 0 30px;
          color: #8a8a84;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.24em;
        }

        .heroTitle {
          max-width: 900px;
          margin: 0;
          color: #282825;
          font-size: clamp(54px, 8vw, 104px);
          font-weight: 400;
          line-height: 1.08;
          letter-spacing: -0.055em;
        }

        .heroDescription {
          max-width: 700px;
          margin: 48px 0 0;
          color: #696963;
          font-size: clamp(17px, 2vw, 22px);
          line-height: 2;
        }

        .heroDescription .colorLogo {
          margin: 0 6px;
          white-space: nowrap;
        }

        .heroMeta {
          display: flex;
          align-items: center;
          gap: 18px;
          margin-top: 52px;
          color: #8b8b84;
          font-size: 13px;
          letter-spacing: 0.08em;
        }

        .metaDivider {
          width: 36px;
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
        }

        .categoryNavigationInner {
          display: flex;
          width: min(1180px, calc(100% - 48px));
          margin: 0 auto;
          overflow-x: auto;
          scrollbar-width: none;
        }

        .categoryNavigationInner::-webkit-scrollbar {
          display: none;
        }

        .categoryNavigationLink {
          flex: 0 0 auto;
          padding: 22px 25px;
          color: #74746e;
          font-size: 13px;
          letter-spacing: 0.08em;
          text-decoration: none;
          white-space: nowrap;
          transition:
            color 180ms ease,
            background 180ms ease;
        }

        .categoryNavigationLink:first-child {
          padding-left: 0;
        }

        .categoryNavigationLink:hover {
          color: #242421;
        }

        .productsArea {
          padding: 40px 0 160px;
        }

        .categorySection {
          padding: 110px 0 0;
          scroll-margin-top: 150px;
        }

        .categoryHeader {
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(300px, 500px);
          gap: 60px;
          align-items: end;
          margin-bottom: 48px;
          padding-bottom: 32px;
          border-bottom: 1px solid #deddd7;
        }

        .categoryEnglishName {
          margin: 0 0 16px;
          color: #999992;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.2em;
        }

        .categoryTitle {
          margin: 0;
          color: #2d2d29;
          font-size: clamp(42px, 6vw, 72px);
          font-weight: 400;
          letter-spacing: -0.04em;
        }

        .categoryDescription {
          margin: 0;
          color: #777770;
          font-size: 15px;
          line-height: 2;
        }

        .productGrid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 30px;
        }

        .productCard {
          overflow: hidden;
          border: 1px solid #e5e4de;
          border-radius: 24px;
          background: #ffffff;
          box-shadow: 0 12px 40px rgba(52, 52, 45, 0.035);
          transition:
            transform 220ms ease,
            box-shadow 220ms ease;
        }

        .productCard:hover {
          transform: translateY(-4px);
          box-shadow: 0 22px 55px rgba(52, 52, 45, 0.08);
        }

        .productVisual {
          position: relative;
          display: flex;
          min-height: 320px;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        .productVisual::before,
        .productVisual::after {
          position: absolute;
          content: "";
          border-radius: 999px;
        }

        .productVisual::before {
          width: 240px;
          height: 240px;
          border: 1px solid rgba(255, 255, 255, 0.55);
          background: rgba(255, 255, 255, 0.18);
          backdrop-filter: blur(6px);
        }

        .productVisual::after {
          right: -70px;
          bottom: -90px;
          width: 230px;
          height: 230px;
          background: rgba(255, 255, 255, 0.18);
        }

        .productVisual-watermelon {
          background:
            radial-gradient(circle at 70% 30%, #dff5c6, transparent 32%),
            linear-gradient(135deg, #75b867 0%, #a9cf7d 55%, #edf4ca 100%);
        }

        .productVisual-peach {
          background:
            radial-gradient(circle at 72% 28%, #fff0dc, transparent 30%),
            linear-gradient(135deg, #f2b39e 0%, #ffd0b8 55%, #fff0d7 100%);
        }

        .productVisual-grape {
          background:
            radial-gradient(circle at 70% 28%, #ece1ff, transparent 30%),
            linear-gradient(135deg, #74619d 0%, #a28bc6 55%, #d8cbed 100%);
        }

        .productVisual-apple {
          background:
            radial-gradient(circle at 70% 28%, #ffd7cc, transparent 30%),
            linear-gradient(135deg, #c8544e 0%, #e57d6d 55%, #f6c1a7 100%);
        }

        .productVisual-la-france {
          background:
            radial-gradient(circle at 70% 28%, #f5f4cf, transparent 30%),
            linear-gradient(135deg, #a7a85e 0%, #cccf8c 55%, #eef0c8 100%);
        }

        .productVisual-cherry {
          background:
            radial-gradient(circle at 70% 28%, #ffd7d9, transparent 30%),
            linear-gradient(135deg, #af3039 0%, #dd5660 55%, #f7b2ad 100%);
        }

        .visualNumber {
          position: absolute;
          top: 24px;
          left: 26px;
          color: rgba(255, 255, 255, 0.78);
          font-size: 12px;
          letter-spacing: 0.16em;
        }

        .visualFruitName {
          position: relative;
          z-index: 2;
          color: rgba(255, 255, 255, 0.95);
          font-size: clamp(58px, 8vw, 96px);
          font-weight: 400;
          letter-spacing: -0.08em;
          text-shadow: 0 8px 30px rgba(48, 48, 40, 0.08);
        }

        .visualEnglishName {
          position: absolute;
          right: 25px;
          bottom: 22px;
          z-index: 2;
          color: rgba(255, 255, 255, 0.75);
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.22em;
        }

        .productInformation {
          padding: 30px 30px 28px;
        }

        .productBadges {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          margin-bottom: 24px;
        }

        .productBadge {
          display: inline-flex;
          align-items: center;
          min-height: 28px;
          padding: 4px 11px;
          border: 1px solid #d9e4cb;
          border-radius: 999px;
          background: #f5f9ef;
          color: #667351;
          font-size: 11px;
          letter-spacing: 0.08em;
        }

        .productBadgeWakeari {
          border-color: #ead9bf;
          background: #fff8ed;
          color: #8a6a42;
        }

        .productStatus {
          color: #aaa9a2;
          font-size: 11px;
          letter-spacing: 0.08em;
        }

        .productName {
          margin: 0;
          color: #31312e;
          font-size: clamp(22px, 3vw, 29px);
          font-weight: 400;
          letter-spacing: -0.025em;
        }

        .productSpecification {
          margin: 12px 0 0;
          color: #777770;
          font-size: 15px;
          line-height: 1.7;
        }

        .productFooter {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          margin-top: 30px;
          padding-top: 22px;
          border-top: 1px solid #eeeeea;
        }

        .productPrice {
          margin: 0;
          color: #999993;
          font-size: 12px;
          letter-spacing: 0.04em;
        }

        .productArrow {
          display: inline-flex;
          width: 38px;
          height: 38px;
          align-items: center;
          justify-content: center;
          border: 1px solid #deddd8;
          border-radius: 999px;
          color: #777770;
          font-size: 17px;
        }

        .closingSection {
          padding: 130px 0 150px;
          border-top: 1px solid #e4e3dd;
          background: #f4f3ef;
        }

        .closingInner {
          text-align: center;
        }

        .closingEnglish {
          margin: 0 0 28px;
          color: #92928b;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.24em;
        }

        .closingTitle {
          margin: 0;
          color: #343431;
          font-size: clamp(38px, 6vw, 70px);
          font-weight: 400;
          line-height: 1.35;
          letter-spacing: -0.045em;
        }

        .closingDescription {
          max-width: 700px;
          margin: 36px auto 48px;
          color: #777770;
          font-size: 15px;
          line-height: 2.1;
        }

        .colorLogo {
          display: inline-flex;
          font-size: inherit;
          font-weight: 400;
          letter-spacing: 0;
        }

        .closingInner > .colorLogo {
          font-size: clamp(30px, 5vw, 52px);
        }

        @media (max-width: 900px) {
          .categoryNavigation {
            top: 72px;
          }

          .categoryHeader {
            grid-template-columns: 1fr;
            gap: 24px;
          }

          .categoryDescription {
            max-width: 620px;
          }

          .productGrid {
            gap: 20px;
          }

          .productVisual {
            min-height: 270px;
          }
        }

        @media (max-width: 680px) {
          .pageContainer {
            width: min(100% - 32px, 1180px);
          }

          .heroSection {
            padding: 105px 0 85px;
          }

          .heroTitle {
            font-size: clamp(48px, 15vw, 72px);
            line-height: 1.13;
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

          .categoryNavigationInner {
            width: calc(100% - 32px);
          }

          .categoryNavigationLink {
            padding: 18px 18px;
          }

          .categorySection {
            padding-top: 80px;
            scroll-margin-top: 125px;
          }

          .categoryHeader {
            margin-bottom: 28px;
          }

          .categoryTitle {
            font-size: 48px;
          }

          .productGrid {
            grid-template-columns: 1fr;
          }

          .productCard {
            border-radius: 20px;
          }

          .productVisual {
            min-height: 280px;
          }

          .visualFruitName {
            font-size: 72px;
          }

          .productInformation {
            padding: 25px 23px 23px;
          }

          .closingSection {
            padding: 95px 0 110px;
          }

          .closingDescription br {
            display: none;
          }
        }

        @media (max-width: 420px) {
          .heroTitle {
            font-size: 46px;
          }

          .productVisual {
            min-height: 245px;
          }

          .visualFruitName {
            font-size: 62px;
          }
        }
      `}</style>
    </>
  );
}