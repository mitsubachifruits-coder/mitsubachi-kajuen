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
  number: string;
  englishTitle: string;
  title: string;
  description: string;
};

const historyItems: HistoryItem[] = [
  {
    number: "01",
    year: "1930s",
    englishTitle: "THE ORIGIN",
    title: "集められた開拓者たち。",
    paragraphs: [
      "昭和12年（1937年）4月20日、55人の開拓者たちは新たな暮らしと未来を築くため、若木の地へ入植しました。目の前に広がっていたのは、果樹園でも整えられた農地でもなく、どこまでも続く原野と松林。道も水も十分ではない土地で彼らは大地を耕し、若木を「人が暮らし、作物を育つ土地」へと変えていく歩みを始めました。",
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
  title: "若木原入植地からはじまった、「果樹王国ひがしね」。",
  paragraphs: [
    "「果樹王国ひがしね」は若木入植地から生まれました。戦争や数々の試練を乗り越えた先人たちの「後世に伝えたい」という想いは東根市全域に伝わり、取り戻した土地には、りんご、ぶどう、ラ・フランス、そしてさくらんぼが植えられていきました。そして現在の果樹王国ひがしねが築き上げられたのです。",
  ],
  images: [
    {
      src: "/images/story/thefruitkingdomhigashine.jpg",
      alt: "果樹王国ひがしね",
      caption: "若木原入植地からはじまった果樹王国ひがしね",
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
    "私たちの先祖は、若木を開拓した55人の一人です。「何もないところから未来をつくる。困難なときほど支え合う。」土地を失っても何度も立ち上がった先人たちの開拓と団結の精神を受け継ぎ、 今の時代の果樹園づくりに挑戦しています。",
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
    number: "01",
    englishTitle: "GIFT",
    title: "全国への発送",
    description:
      "この土地で育った旬の果物を、全国へお届けしています。",
  },
  {
    number: "02",
    englishTitle: "SHOP",
    title: "みつばちフルーツ",
    description:
      "地域のお客様と直接つながる場所として、直営店を運営しています。",
  },
  {
    number: "03",
    englishTitle: "GLOBAL",
    title: "海外への挑戦",
    description:
      "果物のおいしさと、この土地の物語を世界へ届けていきます。",
  },
];

export default function StoryPage() {
  return (
    <main className="story-page">
      <div className="story-container">
        {/* ファーストビュー */}
        <section className="story-hero">
          <p className="story-label">STORY</p>

          <h1 className="story-title">
            ゼロから
            <br />
            つくられた。
          </h1>

          <div className="story-hero-bottom">
            <p className="story-hero-description">
              果樹園になる前、
              <br />
              若木の地には開拓と団結の物語がありました。
            </p>

            <p className="story-hero-location">
              OSANAGI
              <br />
              HIGASHINE
            </p>
          </div>
        </section>

        {/* 歴史 */}
        <section className="history-section">
          <div className="section-heading">
            <div>
              <p className="section-label">OUR HISTORY</p>

              <h2 className="section-title">
                土地をつくった
                <br />
                先人たちの開拓史。
              </h2>
            </div>

            <p className="section-description">
              若木の歴史と、
              <br />
              みつばち果樹園へ続く歩み。
            </p>
          </div>

          <div className="history-list">
            {historyItems.map((item) => (
              <article
                className={`history-item ${
                  item.images ? "history-item-with-images" : ""
                }`}
                key={item.number}
              >
                <div className="history-meta">
                  <div className="history-meta-inner">
                    <div className="history-number-group">
                      <p className="history-number">{item.number}</p>

                      {item.year && (
                        <p className="history-year">{item.year}</p>
                      )}
                    </div>

                    {item.images && (
                      <div className="history-images">
                        {item.images.map((image) => (
                          <figure className="history-figure" key={image.src}>
                            <div className="history-image-frame">
                              <Image
                                src={image.src}
                                alt={image.alt}
                                fill
                                priority={
                                  image.src ===
                                  "/images/story/osanagi-entrance-ceremony.jpg"
                                }
                                sizes="(max-width: 560px) calc(100vw - 32px), (max-width: 900px) 240px, 240px"
                                className="history-image"
                                style={{
                                  objectPosition:
                                    image.objectPosition ?? "center center",
                                }}
                              />
                            </div>

                            <figcaption>{image.caption}</figcaption>
                          </figure>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                <div className="history-content">
                  <p className="history-english-title">
                    {item.englishTitle}
                  </p>

                  <h3 className="history-title">{item.title}</h3>

                  <div className="history-text">
                    {item.paragraphs.map((paragraph, index) => (
                      <p key={`${item.number}-${index}`}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* 現在の取り組み */}
        <section className="activities-section">
          <div className="section-heading">
            <div>
              <p className="section-label">OUR CHALLENGE</p>

              <h2 className="section-title">
                受け継ぎ、
                <br />
                その先へ。
              </h2>
            </div>

            <p className="section-description">
              土地の歴史を大切にしながら、
              <br />
              新しい果樹園の形をつくっています。
            </p>
          </div>

          <div className="activities-grid">
            {currentActivities.map((activity) => (
              <article className="activity-card" key={activity.number}>
                <div className="activity-card-header">
                  <p className="activity-number">{activity.number}</p>

                  <p className="activity-english-title">
                    {activity.englishTitle}
                  </p>
                </div>

                <h3 className="activity-title">{activity.title}</h3>

                <p className="activity-description">
                  {activity.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* 結び */}
        <section className="story-closing">
          <p className="closing-label">TO THE FUTURE</p>

          <h2 className="closing-title">
            切り拓いた歴史を、
            <br />
            これからも一粒一粒に。
          </h2>
        </section>
      </div>

      <style>{`
        * {
          box-sizing: border-box;
        }

        .story-page {
          min-height: 100vh;
          padding: 96px 0 90px;
          overflow: hidden;
          background:
            radial-gradient(
              circle at 88% 4%,
              rgba(255, 222, 89, 0.14),
              transparent 23%
            ),
            radial-gradient(
              circle at 5% 24%,
              rgba(0, 191, 99, 0.06),
              transparent 22%
            ),
            #fafaf9;
          color: #3f3f3a;
        }

        .story-container {
          width: min(960px, calc(100% - 64px));
          margin: 0 auto;
        }

        .story-hero {
          padding-bottom: 84px;
        }

        .story-label,
        .section-label {
          margin: 0 0 21px;
          color: #92928b;
          font-size: 8px;
          font-weight: 700;
          line-height: 1.5;
          letter-spacing: 0.25em;
        }

        .story-title {
          max-width: 760px;
          margin: 0;
          color: #2f2f2b;
          font-size: clamp(45px, 5.4vw, 74px);
          font-weight: 400;
          line-height: 1.06;
          letter-spacing: -0.055em;
        }

        .story-hero-bottom {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 45px;
          margin-top: 39px;
        }

        .story-hero-description {
          margin: 0;
          color: #6c6c66;
          font-size: clamp(13px, 1.2vw, 16px);
          line-height: 1.9;
        }

        .story-hero-location {
          margin: 0;
          color: #a1a19a;
          font-size: 8px;
          font-weight: 700;
          line-height: 1.7;
          letter-spacing: 0.22em;
          text-align: right;
        }

        .story-introduction {
          display: grid;
          grid-template-columns:
            minmax(270px, 0.9fr)
            minmax(0, 1.1fr);
          gap: clamp(48px, 7vw, 98px);
          align-items: start;
          padding: 66px 0 92px;
          border-top: 1px solid #deddd7;
        }

        .introduction-heading {
          position: sticky;
          top: 120px;
        }

        .introduction-title {
          margin: 0;
          color: #30302c;
          font-size: clamp(30px, 3.6vw, 48px);
          font-weight: 400;
          line-height: 1.28;
          letter-spacing: -0.05em;
        }

        .introduction-copy {
          color: #62625c;
          font-size: clamp(14px, 1.3vw, 16px);
          line-height: 2.1;
        }

        .introduction-copy p {
          margin: 0;
        }

        .introduction-copy p + p {
          margin-top: 24px;
        }

        .introduction-copy .introduction-emphasis {
          margin-top: 39px;
          color: #30302c;
          font-size: clamp(22px, 2.6vw, 33px);
          line-height: 1.55;
          letter-spacing: -0.035em;
        }

        .history-section {
          padding: 84px 0 99px;
          border-top: 1px solid #deddd7;
        }

        .section-heading {
          display: grid;
          grid-template-columns:
            minmax(0, 1fr)
            minmax(240px, 340px);
          gap: 45px;
          align-items: end;
          margin-bottom: 47px;
          padding-bottom: 24px;
          border-bottom: 1px solid #deddd7;
        }

        .section-label {
          margin-bottom: 9px;
        }

        .section-title {
          margin: 0;
          color: #30302c;
          font-size: clamp(32px, 3.8vw, 50px);
          font-weight: 400;
          line-height: 1.23;
          letter-spacing: -0.05em;
        }

        .section-description {
          margin: 0;
          color: #777770;
          font-size: 11px;
          line-height: 2;
        }

        .history-list {
          border-top: 1px solid #deddd7;
        }

        .history-item {
          display: grid;
          grid-template-columns:
            minmax(128px, 0.3fr)
            minmax(0, 1fr);
          gap: clamp(35px, 6vw, 82px);
          padding: 57px 0;
          border-bottom: 1px solid #deddd7;
        }

        .history-item-with-images {
          grid-template-columns:
            minmax(220px, 0.43fr)
            minmax(0, 1fr);
          padding-top: 68px;
          padding-bottom: 68px;
        }

        .history-meta {
          display: flex;
          align-items: flex-start;
        }

        .history-meta-inner {
          width: 100%;
        }

        .history-number-group {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 16px;
          padding-bottom: 13px;
          border-bottom: 1px solid #deddd7;
        }

        .history-number {
          margin: 0;
          color: #aaa9a2;
          font-size: 8px;
          font-weight: 700;
          line-height: 1;
          letter-spacing: 0.18em;
        }

        .history-year {
          margin: 0;
          color: #30302c;
          font-size: clamp(25px, 2.8vw, 37px);
          font-weight: 400;
          line-height: 0.9;
          letter-spacing: -0.05em;
        }

        .history-images {
          display: grid;
          gap: 25px;
          margin-top: 27px;
        }

        .history-figure {
          margin: 0;
        }

        .history-image-frame {
          position: relative;
          width: 100%;
          aspect-ratio: 4 / 3;
          overflow: hidden;
          border: 1px solid rgba(72, 68, 59, 0.08);
          border-radius: 4px;
          background: #e9e6de;
          box-shadow: 0 13px 32px rgba(45, 42, 34, 0.08);
        }

        .history-image {
          object-fit: cover;
          filter: saturate(0.78) contrast(1.03);
          transition:
            transform 700ms cubic-bezier(0.22, 1, 0.36, 1),
            filter 700ms cubic-bezier(0.22, 1, 0.36, 1);
        }

        .history-figure:hover .history-image {
          transform: scale(1.025);
          filter: saturate(0.9) contrast(1.04);
        }

        .history-figure figcaption {
          margin-top: 10px;
          color: #85857e;
          font-size: 8px;
          line-height: 1.7;
          letter-spacing: 0.05em;
        }

        .history-content {
          max-width: 570px;
        }

        .history-item-with-images .history-content {
          padding-top: 2px;
        }

        .history-english-title {
          margin: 0 0 12px;
          color: #999992;
          font-size: 8px;
          font-weight: 700;
          line-height: 1.5;
          letter-spacing: 0.22em;
        }

        .history-title {
          margin: 0 0 26px;
          color: #30302c;
          font-size: clamp(26px, 3.2vw, 41px);
          font-weight: 400;
          line-height: 1.3;
          letter-spacing: -0.045em;
        }

        .history-text {
          color: #696963;
          font-size: 12px;
          line-height: 2.05;
        }

        .history-text p {
          margin: 0;
        }

        .history-text p + p {
          margin-top: 19px;
        }

        .story-quote {
          margin: 0 0 99px;
          padding: 63px 51px;
          border: 1px solid #e5e4de;
          border-radius: 26px;
          background:
            radial-gradient(
              circle at 90% 10%,
              rgba(255, 222, 89, 0.2),
              transparent 37%
            ),
            radial-gradient(
              circle at 8% 90%,
              rgba(0, 191, 99, 0.08),
              transparent 34%
            ),
            #f4f3ef;
          box-shadow: 0 18px 52px rgba(52, 52, 45, 0.05);
        }

        .story-quote-label {
          margin: 0 0 29px;
          color: #92928b;
          font-size: 8px;
          font-weight: 700;
          line-height: 1.5;
          letter-spacing: 0.24em;
        }

        .story-quote blockquote {
          margin: 0;
          color: #30302c;
          font-size: clamp(32px, 4.4vw, 56px);
          font-weight: 400;
          line-height: 1.3;
          letter-spacing: -0.055em;
        }

        .story-quote-description {
          max-width: 560px;
          margin: 33px 0 0;
          color: #777770;
          font-size: 12px;
          line-height: 2;
        }

        .inheritance-section {
          display: grid;
          grid-template-columns:
            minmax(270px, 0.9fr)
            minmax(0, 1.1fr);
          gap: clamp(48px, 7vw, 98px);
          align-items: start;
          padding: 84px 0 99px;
          border-top: 1px solid #deddd7;
        }

        .inheritance-heading {
          position: sticky;
          top: 120px;
        }

        .inheritance-title {
          margin: 0;
          color: #30302c;
          font-size: clamp(32px, 3.8vw, 50px);
          font-weight: 400;
          line-height: 1.28;
          letter-spacing: -0.05em;
        }

        .inheritance-copy {
          color: #62625c;
          font-size: clamp(14px, 1.3vw, 16px);
          line-height: 2.1;
        }

        .inheritance-copy p {
          margin: 0;
        }

        .inheritance-copy p + p {
          margin-top: 24px;
        }

        .inheritance-copy .inheritance-emphasis {
          margin-top: 36px;
          margin-bottom: 36px;
          padding: 25px 0 25px 24px;
          border-left: 1px solid #c9c8c0;
          color: #30302c;
          font-size: clamp(18px, 2vw, 25px);
          line-height: 1.7;
          letter-spacing: -0.025em;
        }

        .activities-section {
          padding: 84px 0 99px;
          border-top: 1px solid #deddd7;
        }

        .activities-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 15px;
        }

        .activity-card {
          display: flex;
          min-height: 248px;
          flex-direction: column;
          padding: 23px;
          border: 1px solid #e5e4de;
          border-radius: 19px;
          background: rgba(255, 255, 255, 0.95);
          box-shadow: 0 11px 32px rgba(52, 52, 45, 0.04);
        }

        .activity-card-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 15px;
        }

        .activity-number,
        .activity-english-title {
          margin: 0;
          color: #999992;
          font-size: 8px;
          font-weight: 700;
          line-height: 1.5;
          letter-spacing: 0.18em;
        }

        .activity-title {
          margin: auto 0 18px;
          color: #30302c;
          font-size: clamp(22px, 2.3vw, 29px);
          font-weight: 400;
          line-height: 1.35;
          letter-spacing: -0.04em;
        }

        .activity-description {
          margin: 0;
          padding-top: 17px;
          border-top: 1px solid #ecece7;
          color: #777770;
          font-size: 11px;
          line-height: 1.9;
        }

        .story-closing {
          padding: 92px 18px 30px;
          border-top: 1px solid #deddd7;
          text-align: center;
        }

        .closing-label {
          margin: 0 0 27px;
          color: #92928b;
          font-size: 8px;
          font-weight: 700;
          line-height: 1.5;
          letter-spacing: 0.24em;
        }

        .closing-copy {
          margin-bottom: 39px;
          color: #777770;
          font-size: 12px;
          line-height: 2;
        }

        .closing-copy p {
          margin: 0;
        }

        .closing-copy p + p {
          margin-top: 6px;
        }

        .closing-title {
          margin: 0;
          color: #30302c;
          font-size: clamp(32px, 4.2vw, 54px);
          font-weight: 400;
          line-height: 1.36;
          letter-spacing: -0.055em;
        }

        .closing-description {
          margin: 33px auto 0;
          color: #777770;
          font-size: 12px;
          line-height: 2;
        }

        .closing-signature {
          margin: 56px 0 0;
          color: #aaa9a2;
          font-size: 8px;
          font-weight: 700;
          line-height: 1.7;
          letter-spacing: 0.24em;
        }

        @media (max-width: 900px) {
          .story-page {
            padding: 104px 0 90px;
          }

          .story-container {
            width: min(100% - 40px, 1180px);
          }

          .story-hero {
            padding-bottom: 90px;
          }

          .story-label,
          .section-label {
            margin-bottom: 28px;
            font-size: 11px;
          }

          .story-title {
            max-width: 980px;
            font-size: clamp(50px, 9.6vw, 78px);
          }

          .story-hero-bottom {
            gap: 60px;
            margin-top: 52px;
          }

          .story-hero-description {
            font-size: clamp(16px, 1.6vw, 21px);
          }

          .story-hero-location {
            font-size: 10px;
          }

          .story-introduction,
          .inheritance-section {
            grid-template-columns: 1fr;
            gap: 42px;
            padding: 78px 0 100px;
          }

          .introduction-heading,
          .inheritance-heading {
            position: static;
          }

          .introduction-title {
            font-size: clamp(38px, 4.8vw, 64px);
          }

          .introduction-copy,
          .inheritance-copy {
            font-size: clamp(17px, 1.7vw, 21px);
          }

          .introduction-copy p + p,
          .inheritance-copy p + p {
            margin-top: 32px;
          }

          .introduction-copy .introduction-emphasis {
            margin-top: 52px;
            font-size: clamp(28px, 3.4vw, 44px);
          }

          .inheritance-copy .inheritance-emphasis {
            margin-top: 44px;
            margin-bottom: 44px;
            padding: 30px 0 30px 28px;
            font-size: clamp(24px, 3.4vw, 36px);
          }

          .history-section,
          .activities-section {
            padding: 112px 0 132px;
          }

          .section-heading {
            grid-template-columns: 1fr;
            gap: 22px;
            margin-bottom: 62px;
            padding-bottom: 32px;
          }

          .section-label {
            margin-bottom: 12px;
          }

          .section-title,
          .inheritance-title {
            font-size: clamp(40px, 5vw, 66px);
          }

          .section-description {
            font-size: 14px;
          }

          .history-item {
            grid-template-columns: 130px minmax(0, 1fr);
            gap: 44px;
            padding: 76px 0;
          }

          .history-item-with-images {
            grid-template-columns: 240px minmax(0, 1fr);
          }

          .history-number {
            font-size: 11px;
          }

          .history-year {
            font-size: 34px;
          }

          .history-images {
            gap: 28px;
            margin-top: 30px;
          }

          .history-figure figcaption {
            font-size: 10px;
          }

          .history-content {
            max-width: 760px;
          }

          .history-english-title {
            margin-bottom: 16px;
            font-size: 10px;
          }

          .history-title {
            margin-bottom: 34px;
            font-size: clamp(32px, 4.2vw, 54px);
          }

          .history-text {
            font-size: 16px;
          }

          .history-text p + p {
            margin-top: 25px;
          }

          .story-quote {
            margin-bottom: 132px;
            padding: 66px 48px;
            border-radius: 34px;
          }

          .story-quote-label {
            margin-bottom: 38px;
            font-size: 11px;
          }

          .story-quote blockquote {
            font-size: clamp(40px, 5.8vw, 74px);
          }

          .story-quote-description {
            max-width: 650px;
            margin-top: 44px;
            font-size: 15px;
          }

          .activities-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .activity-card {
            min-height: 260px;
            padding: 30px;
            border-radius: 25px;
          }

          .activity-card-header {
            gap: 20px;
          }

          .activity-number,
          .activity-english-title {
            font-size: 10px;
          }

          .activity-title {
            margin-bottom: 24px;
            font-size: clamp(28px, 3vw, 39px);
          }

          .activity-description {
            padding-top: 22px;
            font-size: 14px;
          }

          .story-closing {
            padding: 122px 24px 40px;
          }

          .closing-label {
            margin-bottom: 36px;
            font-size: 11px;
          }

          .closing-copy {
            margin-bottom: 52px;
            font-size: 16px;
          }

          .closing-copy p + p {
            margin-top: 8px;
          }

          .closing-title {
            font-size: clamp(40px, 5.6vw, 72px);
          }

          .closing-description {
            margin-top: 44px;
            font-size: 15px;
          }

          .closing-signature {
            margin-top: 70px;
            font-size: 10px;
          }
        }

        @media (max-width: 560px) {
          .story-page {
            padding: 76px 0 68px;
          }

          .story-container {
            width: calc(100% - 32px);
          }

          .story-hero {
            padding-bottom: 68px;
          }

          .story-label {
            margin-bottom: 22px;
            font-size: 10px;
          }

          .story-title {
            font-size: clamp(42px, 12.8vw, 60px);
            line-height: 1.1;
          }

          .story-hero-bottom {
            align-items: flex-start;
            flex-direction: column;
            gap: 26px;
            margin-top: 38px;
          }

          .story-hero-description {
            font-size: 15px;
          }

          .story-hero-location {
            font-size: 9px;
            text-align: left;
          }

          .story-introduction,
          .inheritance-section {
            gap: 32px;
            padding: 60px 0 78px;
          }

          .introduction-title,
          .inheritance-title,
          .section-title {
            font-size: clamp(35px, 11vw, 48px);
          }

          .introduction-copy,
          .inheritance-copy {
            font-size: 16px;
            line-height: 1.95;
          }

          .introduction-copy .introduction-emphasis {
            margin-top: 42px;
            font-size: clamp(27px, 8.5vw, 38px);
          }

          .inheritance-copy .inheritance-emphasis {
            margin-top: 38px;
            margin-bottom: 38px;
            padding: 22px 0 22px 20px;
            font-size: clamp(21px, 6.8vw, 29px);
            line-height: 1.65;
          }

          .history-section,
          .activities-section {
            padding: 78px 0 92px;
          }

          .section-heading {
            margin-bottom: 38px;
          }

          .section-description br {
            display: none;
          }

          .history-item,
          .history-item-with-images {
            grid-template-columns: 1fr;
            gap: 24px;
            padding: 52px 0;
          }

          .history-number-group {
            align-items: flex-end;
            padding-bottom: 16px;
          }

          .history-year {
            font-size: 42px;
          }

          .history-images {
            grid-template-columns: 1fr;
            gap: 30px;
            margin-top: 28px;
          }

          .history-image-frame {
            aspect-ratio: 4 / 3;
            border-radius: 3px;
          }

          .history-figure figcaption {
            margin-top: 11px;
            font-size: 10px;
            line-height: 1.8;
          }

          .history-title {
            margin-bottom: 26px;
            font-size: clamp(30px, 9vw, 40px);
          }

          .history-text {
            font-size: 15px;
            line-height: 1.95;
          }

          .story-quote {
            margin-bottom: 94px;
            padding: 48px 24px;
            border-radius: 25px;
          }

          .story-quote-label {
            margin-bottom: 28px;
            font-size: 9px;
          }

          .story-quote blockquote {
            font-size: clamp(31px, 9.8vw, 44px);
            line-height: 1.4;
          }

          .story-quote-description {
            margin-top: 32px;
            font-size: 14px;
          }

          .activity-card {
            min-height: 260px;
            padding: 25px;
            border-radius: 21px;
          }

          .activity-title {
            font-size: 30px;
          }

          .story-closing {
            padding: 88px 0 20px;
          }

          .closing-label {
            margin-bottom: 28px;
            font-size: 9px;
          }

          .closing-copy {
            margin-bottom: 42px;
            font-size: 14px;
          }

          .closing-title {
            font-size: clamp(33px, 10.2vw, 46px);
            line-height: 1.42;
          }

          .closing-description {
            margin-top: 34px;
            font-size: 14px;
          }

          .closing-signature {
            margin-top: 54px;
            font-size: 8px;
            line-height: 1.8;
          }
        }

        @media (max-width: 380px) {
          .story-container {
            width: calc(100% - 28px);
          }

          .story-title {
            font-size: 40px;
          }

          .story-quote {
            padding-right: 20px;
            padding-left: 20px;
          }
        }
      `}</style>
    </main>
  );
}