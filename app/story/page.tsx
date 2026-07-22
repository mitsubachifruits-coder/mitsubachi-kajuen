import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "物語 | みつばち果樹園",
  description:
    "山形県東根市若木地区の開拓の歴史と、その精神を受け継ぐみつばち果樹園の物語をご紹介します。",
};

type HistoryImage = {
  src: string;
  alt: string;
  caption: string;
  objectPosition?: string;
};

type HistoryItem = {
  number: string;
  year?: string;
  englishTitle: string;
  title: string;
  paragraphs: string[];
  images?: HistoryImage[];
};

type CurrentActivity = {
  englishTitle: "GIFT" | "SHOP" | "GLOBAL";
  title: string;
  description: string;
  theme: "gift" | "shop" | "global";
};

const historyItems: HistoryItem[] = [
  {
    number: "01",
    year: "1930s",
    englishTitle: "THE ORIGIN",
    title: "集められた開拓者たち。",
    paragraphs: [
      "昭和12年（1937年）4月20日、55人の開拓者たちは新たな暮らしと未来を築くため、若木の地へ入植しました。目の前に広がっていたのは、果樹園でも整えられた農地でもなく、どこまでも続く原野と松林。道も水も十分ではない土地で彼らは大地を耕し、若木を「人が暮らし、作物を育てる土地」へと変えていく歩みを始めました。",
    ],
    images: [
      {
        src: "/images/story/osanagi-entrance-ceremony.jpg",
        alt: "昭和12年4月20日に行われた若木地区の入植式",
        caption: "昭和12年4月20日　若木地区入植式",
        objectPosition: "center center",
      },
    ],
  },
  {
    number: "02",
    year: "1940s",
    englishTitle: "WAR & UNION",
    title: "戦争が団結を固くする。",
    paragraphs: [
      "開拓者たちの入植は、第二次世界大戦によって試されます。苦労して切り拓いた土地は接収され、努力が一瞬で水の泡に。",
      "先の見えない苦しさの中で、祈りを支えに互いを励まし、力を合わせながら、この土地で生きるという決意をつないでいきました。",
      "そして開拓者たちは固く結束し、長い年月をかけて農地を取り戻します。若木の歩みを支えたのは、一人ではなく、みんなで未来を切り拓くという団結の精神でした。",
    ],
    images: [
      {
        src: "/images/story/osanagi-prayer.jpg",
        alt: "原野に立ち祈りを捧げる若木地区の入植者たち",
        caption: "入植者の団結の祈り",
        objectPosition: "center 42%",
      },
    ],
  },
  {
    number: "03",
    year: "2000s",
    englishTitle: "FRUIT KINGDOM HIGASHINE",
    title: "若木からはじまった「果樹王国ひがしね」。",
    paragraphs: [
      "「果樹王国ひがしね」は若木入植地から生まれました。戦争や数々の試練を乗り越えた先人たちの「後世に伝えたい」という想いは東根市全域に伝わり、取り戻した土地には、りんご、ぶどう、ラ・フランス、そしてさくらんぼが植えられていきました。そして現在の果樹王国ひがしねが築き上げられたのです。",
    ],
    images: [
      {
        src: "/images/story/thefruitkingdomhigashine.jpg",
        alt: "果樹王国ひがしね",
        caption: "若木からはじまった「果樹王国ひがしね」",
        objectPosition: "center 42%",
      },
    ],
  },
  {
    number: "04",
    year: "2011",
    englishTitle: "MITSUBACHI KAJUEN",
    title: "みつばち果樹園、はじまる。",
    paragraphs: [
      "私たちの先祖は、若木を開拓した55人の一人です。「何もないところから未来をつくる。困難なときほど支え合う。」土地を失っても何度も立ち上がった先人たちの開拓と団結の精神を受け継ぎ、今の時代の果樹園づくりに挑戦しています。",
    ],
    images: [
      {
        src: "/images/story/mitsubachikajuenlogo.jpg",
        alt: "みつばち果樹園ロゴ",
        caption: "みつばち果樹園",
        objectPosition: "center 42%",
      },
    ],
  },
];

const currentActivities: CurrentActivity[] = [
  {
    englishTitle: "GIFT",
    title: "全国への発送",
    description:
      "この土地で育った旬の果物を、全国へお届けしています。",
    theme: "gift",
  },
  {
    englishTitle: "SHOP",
    title: "みつばちフルーツ",
    description:
      "地域のお客様と直接つながる場所として、直営店を運営しています。",
    theme: "shop",
  },
  {
    englishTitle: "GLOBAL",
    title: "海外への挑戦",
    description:
      "果物のおいしさと、この土地の物語を世界へ届けていきます。",
    theme: "global",
  },
];

function MitsubachiFruitsLogo() {
  return (
    <span
      className="mitsubachiFruitsLogo"
      aria-label="みつばちフルーツ"
    >
      <span style={{ color: "#FF3131" }}>み</span>
      <span style={{ color: "#006DFF" }}>つ</span>
      <span style={{ color: "#00BF63" }}>ば</span>
      <span style={{ color: "#FFDE59" }}>ち</span>
      <span style={{ color: "#8C52FF" }}>フ</span>
      <span style={{ color: "#00A1FF" }}>ル</span>
      <span style={{ color: "#FF66C4" }}>ー</span>
      <span style={{ color: "#FF3131" }}>ツ</span>
    </span>
  );
}

export default function StoryPage() {
  return (
    <>
      <main className="storyPage">
        <section className="storyHero">
          <div className="pageContainer">
            <p className="storyLabel">STORY</p>

            <h1 className="storyTitle">
              ゼロから
              <br />
              つくられた。
            </h1>

            <div className="storyHeroBottom">
              <p className="storyHeroDescription">
                果樹園になる前、
                <br />
                若木の地には開拓と団結の物語がありました。
              </p>

              <p className="storyHeroLocation">
                OSANAGI
                <br />
                HIGASHINE
              </p>
            </div>
          </div>
        </section>

        <div className="storyContent">
          <div className="pageContainer">
            <section className="historySection">
              <div className="sectionHeading">
                <div>
                  <p className="sectionLabel">OUR HISTORY</p>

                  <h2 className="sectionTitle">
                    土地をつくった
                    <br />
                    先人たちの開拓史。
                  </h2>
                </div>

                <p className="sectionDescription">
                  若木の歴史と、
                  <br />
                  みつばち果樹園へ続く歩み。
                </p>
              </div>

              <div className="historyList">
                {historyItems.map((item) => (
                  <article
                    className={`historyItem ${
                      item.images ? "historyItemWithImages" : ""
                    }`}
                    key={item.number}
                  >
                    <div className="historyMeta">
                      <div className="historyMetaInner">
                        <div className="historyNumberGroup">
                          <p className="historyNumber">
                            {item.number}
                          </p>

                          {item.year && (
                            <p className="historyYear">
                              {item.year}
                            </p>
                          )}
                        </div>

                        {item.images && (
                          <div className="historyImages">
                            {item.images.map((image) => (
                              <figure
                                className="historyFigure"
                                key={image.src}
                              >
                                <div className="historyImageFrame">
                                  <Image
                                    src={image.src}
                                    alt={image.alt}
                                    fill
                                    priority={
                                      image.src ===
                                      "/images/story/osanagi-entrance-ceremony.jpg"
                                    }
                                    sizes="(max-width: 680px) calc(100vw - 32px), (max-width: 900px) 290px, 240px"
                                    className="historyImage"
                                    style={{
                                      objectPosition:
                                        image.objectPosition ??
                                        "center center",
                                    }}
                                  />
                                </div>

                                <figcaption>
                                  {image.caption}
                                </figcaption>
                              </figure>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="historyContent">
                      <p className="historyEnglishTitle">
                        {item.englishTitle}
                      </p>

                      <h3 className="historyTitle">
                        {item.title}
                      </h3>

                      <div className="historyText">
                        {item.paragraphs.map(
                          (paragraph, index) => (
                            <p key={`${item.number}-${index}`}>
                              {paragraph}
                            </p>
                          )
                        )}
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            <section className="activitiesSection">
              <div className="sectionHeading">
                <div>
                  <p className="sectionLabel">
                    OUR CHALLENGE
                  </p>

                  <h2 className="sectionTitle">
                    受け継ぎ、
                    <br />
                    その先へ。
                  </h2>
                </div>

                <p className="sectionDescription">
                  土地の歴史を大切にしながら、
                  <br />
                  新しい果樹園の形をつくっています。
                </p>
              </div>

              <div className="activitiesGrid">
                {currentActivities.map((activity) => (
                  <article
                    className={`activityCard activityCard-${activity.theme}`}
                    key={activity.englishTitle}
                  >
                    <p className="activityEnglishTitle">
                      {activity.englishTitle}
                    </p>

                    {activity.theme === "shop" ? (
                      <h3 className="activityTitle activityTitleLogo">
                        <MitsubachiFruitsLogo />
                      </h3>
                    ) : (
                      <h3 className="activityTitle">
                        {activity.title}
                      </h3>
                    )}

                    <p className="activityDescription">
                      {activity.description}
                    </p>
                  </article>
                ))}
              </div>
            </section>
          </div>
        </div>

        <section className="storyClosing">
          <div className="pageContainer closingInner">
            <p className="closingLabel">
              TO THE FUTURE
            </p>

            <h2 className="closingTitle">
              切り拓いた歴史を、
              <br />
              これからも一粒一粒に。
            </h2>
          </div>
        </section>
      </main>

      <style>{`
        .storyPage,
        .storyPage * {
          box-sizing: border-box;
        }

        .storyPage {
          width: 100%;
          min-height: 100vh;
          margin: 0;
          padding: 0;
          overflow: hidden;
          background: #fafaf9;
          color: #3f3f3a;
        }

        .pageContainer {
          width: min(960px, calc(100% - 64px));
          margin: 0 auto;
        }

        /* =========================================
           HERO
        ========================================= */

        .storyHero {
          padding: 112px 0 90px;
          background:
            radial-gradient(
              circle at 88% 8%,
              rgba(255, 222, 89, 0.18),
              transparent 25%
            ),
            radial-gradient(
              circle at 8% 88%,
              rgba(0, 191, 99, 0.08),
              transparent 30%
            ),
            #fafaf9;
        }

        .storyLabel,
        .sectionLabel {
          margin: 0;
          color: #92928b;
          font-size: 9px;
          font-weight: 700;
          line-height: 1.5;
          letter-spacing: 0.24em;
        }

        .storyLabel {
          margin-bottom: 23px;
        }

        .storyTitle {
          max-width: 760px;
          margin: 0;
          color: #2f2f2b;
          font-size: clamp(43px, 6vw, 78px);
          font-weight: 400;
          line-height: 1.08;
          letter-spacing: -0.055em;
        }

        .storyHeroBottom {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 45px;
          margin-top: 36px;
        }

        .storyHeroDescription {
          margin: 0;
          color: #696963;
          font-size: clamp(14px, 1.5vw, 17px);
          line-height: 2;
        }

        .storyHeroLocation {
          margin: 0;
          color: #a1a19a;
          font-size: 8px;
          font-weight: 700;
          line-height: 1.7;
          letter-spacing: 0.22em;
          text-align: right;
        }

        /* =========================================
           CONTENT
        ========================================= */

        .storyContent {
          padding: 30px 0 120px;
        }

        /* =========================================
           SECTION HEADER
        ========================================= */

        .historySection {
          padding: 82px 0 0;
        }

        .sectionHeading {
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

        .sectionLabel {
          margin-bottom: 12px;
        }

        .sectionTitle {
          margin: 0;
          color: #30302c;
          font-size: clamp(34px, 4.5vw, 54px);
          font-weight: 400;
          line-height: 1.2;
          letter-spacing: -0.04em;
        }

        .sectionDescription {
          margin: 0;
          color: #777770;
          font-size: 12px;
          line-height: 2;
        }

        /* =========================================
           HISTORY
        ========================================= */

        .historyList {
          border-top: 1px solid #deddd7;
        }

        .historyItem {
          display: grid;
          grid-template-columns:
            minmax(128px, 0.3fr)
            minmax(0, 1fr);
          gap: clamp(35px, 6vw, 82px);
          padding: 57px 0;
          border-bottom: 1px solid #deddd7;
        }

        .historyItemWithImages {
          grid-template-columns:
            minmax(220px, 0.43fr)
            minmax(0, 1fr);
          padding-top: 68px;
          padding-bottom: 68px;
        }

        .historyMeta {
          display: flex;
          align-items: flex-start;
        }

        .historyMetaInner {
          width: 100%;
        }

        .historyNumberGroup {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 16px;
          padding-bottom: 13px;
          border-bottom: 1px solid #deddd7;
        }

        .historyNumber {
          margin: 0;
          color: #aaa9a2;
          font-size: 8px;
          font-weight: 700;
          line-height: 1;
          letter-spacing: 0.18em;
        }

        .historyYear {
          margin: 0;
          color: #30302c;
          font-size: clamp(25px, 2.8vw, 37px);
          font-weight: 400;
          line-height: 0.9;
          letter-spacing: -0.05em;
        }

        .historyImages {
          display: grid;
          gap: 25px;
          margin-top: 27px;
        }

        .historyFigure {
          margin: 0;
        }

        .historyImageFrame {
          position: relative;
          width: 100%;
          aspect-ratio: 4 / 3;
          overflow: hidden;
          border: 1px solid rgba(72, 68, 59, 0.08);
          border-radius: 4px;
          background: #e9e6de;
          box-shadow: 0 13px 32px rgba(45, 42, 34, 0.08);
        }

        .historyImage {
          object-fit: cover;
          filter: saturate(0.78) contrast(1.03);
          transition:
            transform 700ms cubic-bezier(0.22, 1, 0.36, 1),
            filter 700ms cubic-bezier(0.22, 1, 0.36, 1);
        }

        .historyFigure:hover .historyImage {
          transform: scale(1.025);
          filter: saturate(0.9) contrast(1.04);
        }

        .historyFigure figcaption {
          margin-top: 10px;
          color: #85857e;
          font-size: 8px;
          line-height: 1.7;
          letter-spacing: 0.05em;
        }

        .historyContent {
          max-width: 570px;
        }

        .historyItemWithImages .historyContent {
          padding-top: 2px;
        }

        .historyEnglishTitle {
          margin: 0 0 12px;
          color: #999992;
          font-size: 8px;
          font-weight: 700;
          line-height: 1.5;
          letter-spacing: 0.22em;
        }

        .historyTitle {
          margin: 0 0 26px;
          color: #30302c;
          font-size: clamp(26px, 3.2vw, 41px);
          font-weight: 400;
          line-height: 1.3;
          letter-spacing: -0.045em;
        }

        .historyText {
          color: #696963;
          font-size: 12px;
          line-height: 2.05;
        }

        .historyText p {
          margin: 0;
        }

        .historyText p + p {
          margin-top: 19px;
        }

        /* =========================================
           ACTIVITIES
        ========================================= */

        .activitiesSection {
          padding: 110px 0 0;
        }

        .activitiesGrid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 15px;
        }

        .activityCard {
          position: relative;
          display: flex;
          min-height: 248px;
          flex-direction: column;
          padding: 23px;
          overflow: hidden;
          border: 1px solid #e5e4de;
          border-radius: 19px;
          background: rgba(255, 255, 255, 0.95);
          box-shadow: 0 11px 32px rgba(52, 52, 45, 0.04);
          transition:
            transform 400ms cubic-bezier(0.22, 1, 0.36, 1),
            box-shadow 400ms cubic-bezier(0.22, 1, 0.36, 1),
            border-color 400ms ease;
        }

        .activityCard:hover {
          transform: translateY(-4px);
          box-shadow: 0 18px 42px rgba(52, 52, 45, 0.08);
        }

        .activityCard-gift {
          background:
            radial-gradient(
              circle at 96% 3%,
              rgba(255, 49, 49, 0.09),
              transparent 42%
            ),
            rgba(255, 255, 255, 0.96);
        }

        .activityCard-shop {
          background:
            radial-gradient(
              circle at 94% 4%,
              rgba(255, 222, 89, 0.16),
              transparent 40%
            ),
            radial-gradient(
              circle at 5% 100%,
              rgba(0, 191, 99, 0.06),
              transparent 34%
            ),
            rgba(255, 255, 255, 0.96);
        }

        .activityCard-global {
          background:
            radial-gradient(
              circle at 96% 3%,
              rgba(0, 109, 255, 0.09),
              transparent 42%
            ),
            rgba(255, 255, 255, 0.96);
        }

        .activityCard-gift:hover {
          border-color: rgba(255, 49, 49, 0.22);
        }

        .activityCard-shop:hover {
          border-color: rgba(0, 191, 99, 0.2);
        }

        .activityCard-global:hover {
          border-color: rgba(0, 109, 255, 0.22);
        }

        .activityEnglishTitle {
          position: relative;
          z-index: 1;
          margin: 0;
          color: #3f3f3a;
          font-size: 13px;
          font-weight: 800;
          line-height: 1;
          letter-spacing: 0.25em;
        }

        .activityTitle {
          position: relative;
          z-index: 1;
          margin: auto 0 18px;
          color: #30302c;
          font-size: clamp(22px, 2.3vw, 29px);
          font-weight: 500;
          line-height: 1.35;
          letter-spacing: -0.04em;
        }

        .activityCard-gift .activityTitle {
          color: #ff3131;
        }

        .activityCard-global .activityTitle {
          color: #006dff;
        }

        .activityTitleLogo {
          letter-spacing: -0.07em;
        }

        .mitsubachiFruitsLogo {
          display: flex;
          align-items: baseline;
          flex-wrap: nowrap;
          white-space: nowrap;
        }

        .mitsubachiFruitsLogo span {
          display: inline-block;
        }

        .activityDescription {
          position: relative;
          z-index: 1;
          margin: 0;
          padding-top: 17px;
          border-top: 1px solid #ecece7;
          color: #777770;
          font-size: 11px;
          line-height: 1.9;
        }

        /* =========================================
           CLOSING
        ========================================= */

        .storyClosing {
          padding: 98px 0 112px;
          border-top: 1px solid #e4e3dd;
          background: #f4f3ef;
        }

        .closingInner {
          text-align: center;
        }

        .closingLabel {
          margin: 0 0 21px;
          color: #92928b;
          font-size: 8px;
          font-weight: 700;
          line-height: 1.5;
          letter-spacing: 0.24em;
        }

        .closingTitle {
          margin: 0;
          color: #30302c;
          font-size: clamp(30px, 4.5vw, 53px);
          font-weight: 400;
          line-height: 1.35;
          letter-spacing: -0.045em;
        }

        /* =========================================
           TABLET
           Fruits・Aboutと同じサイズ感
        ========================================= */

        @media (max-width: 900px) {
          .pageContainer {
            width: min(1180px, calc(100% - 48px));
          }

          .storyHero {
            padding: 150px 0 120px;
          }

          .storyLabel {
            margin-bottom: 30px;
            font-size: 12px;
          }

          .storyTitle {
            max-width: 900px;
            font-size: clamp(54px, 8vw, 104px);
          }

          .storyHeroBottom {
            gap: 60px;
            margin-top: 48px;
          }

          .storyHeroDescription {
            max-width: 700px;
            font-size: clamp(17px, 2vw, 22px);
          }

          .storyHeroLocation {
            font-size: 11px;
          }

          .storyContent {
            padding: 40px 0 160px;
          }

          .historySection {
            padding-top: 110px;
          }

          .sectionHeading {
            grid-template-columns: 1fr;
            gap: 24px;
            margin-bottom: 48px;
            padding-bottom: 32px;
          }

          .sectionLabel {
            margin-bottom: 16px;
            font-size: 11px;
          }

          .sectionTitle {
            font-size: clamp(42px, 6vw, 72px);
          }

          .sectionDescription {
            max-width: 700px;
            font-size: 15px;
          }

          .historyItem {
            grid-template-columns:
              minmax(150px, 0.3fr)
              minmax(0, 1fr);
            gap: 52px;
            padding: 76px 0;
          }

          .historyItemWithImages {
            grid-template-columns:
              minmax(270px, 0.43fr)
              minmax(0, 1fr);
            padding-top: 84px;
            padding-bottom: 84px;
          }

          .historyNumberGroup {
            padding-bottom: 18px;
          }

          .historyNumber {
            font-size: 11px;
          }

          .historyYear {
            font-size: clamp(34px, 4vw, 48px);
          }

          .historyImages {
            gap: 30px;
            margin-top: 34px;
          }

          .historyFigure figcaption {
            margin-top: 13px;
            font-size: 10px;
          }

          .historyContent {
            max-width: 760px;
          }

          .historyEnglishTitle {
            margin-bottom: 16px;
            font-size: 11px;
          }

          .historyTitle {
            margin-bottom: 34px;
            font-size: clamp(32px, 4.2vw, 54px);
          }

          .historyText {
            font-size: 16px;
          }

          .historyText p + p {
            margin-top: 25px;
          }

          .activitiesSection {
            padding-top: 145px;
          }

          .activitiesGrid {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .activityCard {
            min-height: 280px;
            padding: 32px;
            border-radius: 25px;
          }

          .activityEnglishTitle {
            font-size: 13px;
          }

          .activityTitle {
            margin-bottom: 24px;
            font-size: clamp(29px, 4vw, 42px);
          }

          .activityDescription {
            padding-top: 22px;
            font-size: 15px;
          }

          .storyClosing {
            padding: 130px 0 150px;
          }

          .closingLabel {
            margin-bottom: 28px;
            font-size: 11px;
          }

          .closingTitle {
            font-size: clamp(38px, 6vw, 70px);
          }
        }

        /* =========================================
           MOBILE BASE
        ========================================= */

        @media (max-width: 768px) {
          .storyPage {
            padding: 0 !important;
          }

          .storyHero,
          .storyContent,
          .storyClosing {
            padding-right: 0 !important;
            padding-left: 0 !important;
          }

          .storyTitle {
            font-size: clamp(48px, 15vw, 72px) !important;
            line-height: 1.13 !important;
          }

          .sectionTitle {
            font-size: 48px !important;
            line-height: 1.2 !important;
          }

          .closingTitle {
            font-size: clamp(36px, 10vw, 54px) !important;
            line-height: 1.35 !important;
          }

          .historyItem,
          .historyItemWithImages {
            grid-template-columns: 1fr;
          }
        }

        /* =========================================
           SMARTPHONE
           Fruits・Aboutと同じ左右16px
        ========================================= */

        @media (max-width: 680px) {
          .pageContainer {
            width: min(100% - 32px, 1180px);
          }

          .storyHero {
            padding-top: 105px !important;
            padding-bottom: 85px !important;
          }

          .storyLabel {
            margin-bottom: 23px;
            font-size: 10px;
          }

          .storyHeroBottom {
            align-items: flex-start;
            flex-direction: column;
            gap: 26px;
            margin-top: 34px;
          }

          .storyHeroDescription {
            font-size: 16px;
            line-height: 1.9;
          }

          .storyHeroDescription br {
            display: none;
          }

          .storyHeroLocation {
            font-size: 9px;
            text-align: left;
          }

          .storyContent {
            padding-top: 30px;
            padding-bottom: 110px;
          }

          .historySection {
            padding-top: 80px;
          }

          .sectionHeading {
            margin-bottom: 28px;
          }

          .sectionDescription br {
            display: none;
          }

          .historyItem,
          .historyItemWithImages {
            gap: 27px;
            padding: 58px 0;
          }

          .historyNumberGroup {
            padding-bottom: 16px;
          }

          .historyNumber {
            font-size: 10px;
          }

          .historyYear {
            font-size: 42px;
          }

          .historyImages {
            grid-template-columns: 1fr;
            gap: 30px;
            margin-top: 28px;
          }

          .historyImageFrame {
            aspect-ratio: 4 / 3;
            border-radius: 4px;
          }

          .historyFigure figcaption {
            margin-top: 11px;
            font-size: 10px;
            line-height: 1.8;
          }

          .historyEnglishTitle {
            margin-bottom: 14px;
            font-size: 10px;
          }

          .historyTitle {
            margin-bottom: 26px;
            font-size: clamp(30px, 9vw, 40px);
          }

          .historyText {
            font-size: 15px;
            line-height: 1.95;
          }

          .historyText p + p {
            margin-top: 22px;
          }

          .activitiesSection {
            padding-top: 100px;
          }

          .activitiesGrid {
            gap: 20px;
          }

          .activityCard {
            min-height: 260px;
            padding: 25px;
            border-radius: 21px;
          }

          .activityEnglishTitle {
            font-size: 12px;
          }

          .activityTitle {
            font-size: 30px;
          }

          .activityTitleLogo {
            font-size: 29px;
            letter-spacing: -0.075em;
          }

          .activityDescription {
            font-size: 14px;
          }

          .storyClosing {
            padding-top: 95px !important;
            padding-bottom: 110px !important;
          }

          .closingLabel {
            margin-bottom: 24px;
            font-size: 9px;
          }
        }

        @media (max-width: 480px) {
          .storyPage {
            padding-top: 0 !important;
            padding-bottom: 0 !important;
          }

          .storyHeroDescription {
            font-size: 15px;
          }

          .historyText {
            font-size: 14px;
          }

          .activityDescription {
            font-size: 13px;
          }
        }

        @media (max-width: 420px) {
          .storyTitle {
            font-size: 46px !important;
          }

          .sectionTitle {
            font-size: 42px !important;
          }

          .historyYear {
            font-size: 38px;
          }

          .historyTitle {
            font-size: 30px;
          }

          .activityCard {
            padding: 23px 21px;
          }

          .activityTitle {
            font-size: 28px;
          }

          .activityTitleLogo {
            font-size: 27px;
          }

          .closingTitle {
            font-size: 34px !important;
          }
        }

        @media (max-width: 360px) {
          .storyTitle {
            font-size: 42px !important;
          }

          .sectionTitle {
            font-size: 39px !important;
          }

          .historyTitle {
            font-size: 28px;
          }

          .activityTitle {
            font-size: 26px;
          }

          .activityTitleLogo {
            font-size: 25px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .historyImage,
          .activityCard {
            transition: none;
          }
        }
      `}</style>
    </>
  );
}