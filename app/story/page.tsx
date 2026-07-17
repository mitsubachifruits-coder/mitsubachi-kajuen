import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "物語 | みつばち果樹園",
  description:
    "山形県東根市神町若木地区の開拓の歴史と、みつばち果樹園が受け継いできた物語をご紹介します。",
};

const historyItems = [
  {
    number: "01",
    englishTitle: "THE BEGINNING",
    title: "何もない土地から。",
    paragraphs: [
      "この地に開拓者たちが入植し、何もない場所から農地づくりが始まりました。",
      "道路を切り開き、遠くの堰から水を引き、冬には雪を溶かして飲み水にする。重い唐鍬を振るいながら、大地を少しずつ耕していく。その毎日は、想像を超える厳しさでした。",
      "それでも開拓者たちは、お互いに支え合い、一歩ずつ未来を切り拓いていきました。",
    ],
  },
  {
    number: "02",
    englishTitle: "HARDSHIP",
    title: "何度失っても。",
    paragraphs: [
      "しかし、その努力は戦争によって何度も試されます。",
      "開墾した土地は軍に接収され、終戦間近には空襲を経験。戦後もアメリカ軍による接収で、多くの農家が立ち退きを余儀なくされました。",
      "ようやく育てた畑や作物が、ブルドーザーで踏みならされるという、あまりにも過酷な現実もありました。",
    ],
  },
  {
    number: "03",
    englishTitle: "RETURN",
    title: "土地を取り戻す。",
    paragraphs: [
      "それでも、この土地を諦めることはありませんでした。",
      "開拓者たちは力を合わせ、土地の返還を求め続け、長い年月をかけて農地を取り戻します。",
      "取り戻した土地を再び人の手で耕し、次の世代へつなぐための歩みが始まりました。",
    ],
  },
  {
    number: "04",
    englishTitle: "GROWTH",
    title: "果樹の里へ。",
    paragraphs: [
      "その挑戦の先に植えられたのが、りんご、ぶどう、ラ・フランス、そしてさくらんぼでした。",
      "こうして若木地区は、東根を代表する果樹産地へと成長し、「果樹王国ひがしね」の歴史を支える地域の一つとなりました。",
    ],
  },
];

const currentActivities = [
  {
    number: "01",
    englishTitle: "GIFT",
    title: "全国への発送",
    description:
      "山形の旬の果物を、大切な方への贈り物として全国へお届けしています。",
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
      "山形の果物のおいしさと、この土地の物語を世界へ届けることに挑戦しています。",
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
              果樹園になる前から、
              <br />
              この土地には物語がありました。
            </p>

            <p className="story-hero-location">
              OSANAGI
              <br />
              HIGASHINE
            </p>
          </div>
        </section>

        {/* 導入 */}
        <section className="story-introduction">
          <div className="introduction-heading">
            <p className="section-label">THE LAND</p>

            <h2 className="introduction-title">
              原野と松林から、
              <br />
              果樹の里へ。
            </h2>
          </div>

          <div className="introduction-copy">
            <p>
              みつばち果樹園がある、
              山形県東根市神町若木地区。
            </p>

            <p>
              今では「果樹王国ひがしね」の一翼を担うこの土地も、
              かつては果樹園ではありませんでした。
            </p>

            <p className="introduction-emphasis">
              広がっていたのは、
              <br />
              どこまでも続く原野と松林。
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
                人たちの記憶。
              </h2>
            </div>

            <p className="section-description">
              一つの果樹園が生まれるまでには、
              <br />
              何世代にもわたる時間がありました。
            </p>
          </div>

          <div className="history-list">
            {historyItems.map((item) => (
              <article className="history-item" key={item.number}>
                <div className="history-meta">
                  <p className="history-number">{item.number}</p>
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

        {/* 大きな引用 */}
        <section className="story-quote">
          <p className="story-quote-label">THE SPIRIT OF OSANAGI</p>

          <blockquote>
            <span>土地を失っても、</span>
            <br />
            <span>未来まで手放すことはなかった。</span>
          </blockquote>

          <p className="story-quote-description">
            支え合い、何度でも立ち上がった先人たちの精神は、
            今もこの土地で生き続けています。
          </p>
        </section>

        {/* みつばち果樹園 */}
        <section className="inheritance-section">
          <div className="inheritance-heading">
            <p className="section-label">INHERITANCE</p>

            <h2 className="inheritance-title">
              三代目として、
              <br />
              受け継ぐ。
            </h2>
          </div>

          <div className="inheritance-copy">
            <p>
              みつばち果樹園は、その開拓の歴史を受け継ぐ農家の一つです。
            </p>

            <p>
              私たちは三代目として、この土地に刻まれた先人たちの挑戦を受け継ぎながら、新しい時代の農業にも挑戦しています。
            </p>

            <p>
              受け継ぐだけではなく、新しい価値を生み出し、
              この土地の魅力を未来へ届けていくことも、
              私たちの使命だと考えています。
            </p>
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

          <div className="closing-copy">
            <p>一本のさくらんぼの木は、一年では育ちません。</p>

            <p>この果樹園もまた、一世代ではつくられませんでした。</p>
          </div>

          <h2 className="closing-title">
            ゼロから切り拓いた
            <br />
            先人たちの想いを、
            <br />
            これからも一粒一粒に。
          </h2>

          <p className="closing-description">
            この土地から生まれる果物と物語を、
            <br />
            次の世代へ届けていきます。
          </p>
        </section>
      </div>

      <style>{`
        * {
          box-sizing: border-box;
        }

        /*
         * デスクトップ
         * 元デザインの約75%を基準にコンパクト化
         */
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

        .history-meta {
          display: flex;
          align-items: flex-start;
        }

        .history-number {
          margin: 0;
          color: #aaa9a2;
          font-size: 8px;
          font-weight: 700;
          letter-spacing: 0.18em;
        }

        .history-content {
          max-width: 570px;
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
          max-width: 500px;
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

        /*
         * タブレット
         * 900px以下は元のデザイン・サイズ感を維持
         */
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

          .history-number {
            font-size: 11px;
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
        }

        /*
         * スマートフォン
         * 現在のデザインを維持
         */
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

          .history-item {
            grid-template-columns: 1fr;
            gap: 24px;
            padding: 52px 0;
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