import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "ご注文 | みつばち果樹園",
  description:
    "みつばち果樹園のご注文ページです。季節の果物の販売時期や、現在の受付状況をご案内しています。",
};

type SeasonalProduct = {
  id: number;
  name: string;
  englishName: string;
  season: string;
  description: string;
  status: "受付前" | "受付中" | "受付終了";
  accent: string;
};

const seasonalProducts: SeasonalProduct[] = [
  {
    id: 1,
    name: "佐藤錦",
    englishName: "SATO NISHIKI",
    season: "6月中旬〜6月下旬",
    description:
      "上品な甘みとほどよい酸味を楽しめる、山形を代表するさくらんぼです。",
    status: "受付終了",
    accent: "#ff6b6b",
  },
  {
    id: 2,
    name: "紅秀峰",
    englishName: "BENI SHUHO",
    season: "6月下旬〜7月上旬",
    description:
      "大粒でしっかりとした果肉と、濃厚な甘みが特徴のさくらんぼです。",
    status: "受付終了",
    accent: "#d94a64",
  },
  {
    id: 3,
    name: "やまがた紅王",
    englishName: "YAMAGATA BENIOU",
    season: "6月下旬〜7月上旬",
    description:
      "存在感のある大きな実と鮮やかな紅色が美しい、山形生まれのさくらんぼです。",
    status: "受付終了",
    accent: "#c72c48",
  },
  {
    id: 4,
    name: "尾花沢すいか",
    englishName: "OBANAZAWA WATERMELON",
    season: "7月下旬〜8月中旬",
    description:
      "夏の昼夜の寒暖差によって育まれた、甘くみずみずしい山形のすいかです。",
    status: "受付前",
    accent: "#00a86b",
  },
  {
    id: 5,
    name: "川中島白桃",
    englishName: "KAWANAKAJIMA WHITE PEACH",
    season: "8月中旬〜8月下旬",
    description:
      "しっかりとした果肉と豊かな甘みを楽しめる、夏を代表する白桃です。",
    status: "受付前",
    accent: "#ff8fa3",
  },
  {
    id: 6,
    name: "サンふじ",
    englishName: "SUN FUJI",
    season: "11月〜12月",
    description:
      "甘みと酸味のバランスがよく、豊かな香りとみずみずしさを楽しめるりんごです。",
    status: "受付前",
    accent: "#e9553f",
  },
];

const logoColors = [
  "#ff3131",
  "#006dff",
  "#00bf63",
  "#ffde59",
  "#8c52ff",
  "#00a1ff",
  "#ff66c4",
];

function ColorLogo({
  className = "",
}: {
  className?: string;
}) {
  const letters = ["み", "つ", "ば", "ち", "果", "樹", "園"];

  return (
    <span className={`colorLogo ${className}`}>
      {letters.map((letter, index) => (
        <span
          key={`${letter}-${index}`}
          style={{
            color: logoColors[index],
          }}
        >
          {letter}
        </span>
      ))}
    </span>
  );
}

function ColorBeeMyFriends() {
  const letters = Array.from("BeeMYfriends!");

  return (
    <span
      className="colorBeeMyFriends"
      aria-label="BeeMYfriends!"
    >
      {letters.map((letter, index) => (
        <span
          key={`${letter}-${index}`}
          aria-hidden="true"
          style={{
            color: logoColors[index % logoColors.length],
          }}
        >
          {letter === " " ? "\u00A0" : letter}
        </span>
      ))}
    </span>
  );
}

function StatusBadge({
  status,
}: {
  status: SeasonalProduct["status"];
}) {
  return (
    <span className={`statusBadge status-${status}`}>
      <span className="statusDot" />
      {status}
    </span>
  );
}

export default function OrderPage() {
  return (
    <>
      <main className="orderPage">
        <div className="orderContainer">
          {/* ページ上部 */}
          <section className="heroSection">
            <p className="englishLabel">ORDER</p>

            <h1 className="heroTitle">
              果樹園から、
              <br />
              旬のおいしさを。
            </h1>

            <p className="heroText">
              みつばち果樹園で育てた季節の果物を、
              <br className="desktopBreak" />
              山形県東根市からお届けします。
            </p>
          </section>

          {/* 受付停止のお知らせ */}
          <section className="orderNotice">
            <div className="noticeStatus">
              <span className="noticeStatusDot" />

              <span>現在の受付状況</span>
            </div>

            <h2 className="noticeTitle">
              オンラインでのご注文は、
              <br />
              現在受付を停止しています。
            </h2>

            <p className="noticeText">
              次回の販売に向けて、準備を進めています。
              <br />
              受付を再開しましたら、こちらのページでご案内いたします。
            </p>

            <div className="noticeSupplement">
              <p>
                果物は自然の中で育つため、収穫時期や販売数量が
                前後する場合があります。
              </p>

              <p>
                一番おいしい時期を見極めながら、順次受付を開始します。
              </p>
            </div>
          </section>

          {/* ご注文の流れ */}
          <section className="guideSection">
            <div className="sectionHeading">
              <div>
                <p className="englishLabel">HOW TO ORDER</p>

                <h2 className="sectionTitle">ご注文について</h2>
              </div>

              <p className="sectionSideText">
                販売開始後、商品ごとにご案内します
              </p>
            </div>

            <div className="guideGrid">
              <article className="guideCard">
                <p className="guideNumber">01</p>

                <h3 className="guideTitle">販売開始のお知らせ</h3>

                <p className="guideText">
                  果物が旬を迎え、発送の準備が整いましたら、
                  注文受付を開始します。
                </p>
              </article>

              <article className="guideCard">
                <p className="guideNumber">02</p>

                <h3 className="guideTitle">商品を選ぶ</h3>

                <p className="guideText">
                  商品の内容、規格、発送時期をご確認いただき、
                  ご希望の商品をお選びください。
                </p>
              </article>

              <article className="guideCard">
                <p className="guideNumber">03</p>

                <h3 className="guideTitle">果樹園から発送</h3>

                <p className="guideText">
                  収穫後、一つひとつ状態を確認し、
                  山形県東根市から丁寧に発送します。
                </p>
              </article>
            </div>
          </section>

          {/* 季節の商品 */}
          <section className="seasonSection">
            <div className="sectionHeading">
              <div>
                <p className="englishLabel">SEASONAL FRUITS</p>

                <h2 className="sectionTitle">
                  季節の商品
                </h2>
              </div>

              <p className="sectionSideText">
                生育状況により時期が前後します
              </p>
            </div>

            <div className="seasonGrid">
              {seasonalProducts.map((product) => (
                <article
                  className="seasonCard"
                  key={product.id}
                  style={
                    {
                      "--product-accent": product.accent,
                    } as React.CSSProperties
                  }
                >
                  <div className="seasonCardTop">
                    <div>
                      <p className="productEnglishName">
                        {product.englishName}
                      </p>

                      <h3 className="productName">
                        {product.name}
                      </h3>
                    </div>

                    <StatusBadge status={product.status} />
                  </div>

                  <p className="productSeason">
                    収穫時期
                    <span>{product.season}</span>
                  </p>

                  <p className="productDescription">
                    {product.description}
                  </p>

                  <div className="seasonLine" />
                </article>
              ))}
            </div>
          </section>

          {/* ご注文前の案内 */}
          <section className="informationSection">
            <div className="informationHeading">
              <p className="englishLabel">INFORMATION</p>

              <h2 className="informationTitle">
                ご注文前に
                <br />
                ご確認ください
              </h2>
            </div>

            <div className="informationList">
              <div className="informationItem">
                <span className="informationDot" />

                <p>
                  天候や生育状況により、販売開始日や発送時期が
                  変更となる場合があります。
                </p>
              </div>

              <div className="informationItem">
                <span className="informationDot" />

                <p>
                  商品は収穫できる数量に限りがあるため、
                  予定数に達し次第受付を終了します。
                </p>
              </div>

              <div className="informationItem">
                <span className="informationDot" />

                <p>
                  発送日の指定が難しい商品については、
                  お届け時期の目安をご案内します。
                </p>
              </div>

              <div className="informationItem">
                <span className="informationDot" />

                <p>
                  複数のお届け先への発送については、
                  販売開始後の注文画面でご案内します。
                </p>
              </div>
            </div>
          </section>

          {/* お問い合わせCTA */}
          <section className="contactCta">
            <p className="contactCtaLabel">CONTACT</p>

            <h2 className="contactCtaTitle">
              ご注文についての
              <br />
              お問い合わせ
            </h2>

            <p className="contactCtaText">
              商品や発送についてご不明な点がございましたら、
              <br className="desktopBreak" />
              お問い合わせページよりご連絡ください。
            </p>

            <Link href="/contact" className="contactButton">
              お問い合わせはこちら
              <span aria-hidden="true">→</span>
            </Link>
          </section>

          {/* クロージング */}
          <section className="closingSection">
            <p className="closingLabel">THANK YOU</p>

            <h2 className="closingLogo">
              <ColorLogo />
            </h2>

            <p className="closingMessage">
              ご注文ページの完成まで、
              <br />
              もう少々お待ちください。
            </p>
          </section>
        </div>
      </main>

      <style>{`
        .orderPage {
          min-height: 100vh;
          padding: 120px 24px 100px;
          box-sizing: border-box;
          overflow: hidden;
          background: #fafaf9;
          color: #2f2f2f;
        }

        .orderContainer {
          width: 100%;
          max-width: 1100px;
          margin: 0 auto;
        }

        .englishLabel {
          margin: 0 0 18px;
          color: #888;
          font-size: 12px;
          font-weight: 700;
          line-height: 1.5;
          letter-spacing: 0.22em;
        }

        .heroSection {
          margin-bottom: 72px;
        }

        .heroTitle {
          max-width: 900px;
          margin: 0 0 30px;
          color: #2f2f2f;
          font-size: clamp(44px, 7.5vw, 82px);
          font-weight: 700;
          line-height: 1.18;
          letter-spacing: 0.01em;
        }

        .heroText {
          max-width: 720px;
          margin: 0;
          color: #666;
          font-size: 17px;
          line-height: 2;
        }

        .orderNotice {
          position: relative;
          margin-bottom: 112px;
          padding: 64px;
          overflow: hidden;
          border: 1px solid #ecece8;
          border-radius: 36px;
          background:
            radial-gradient(
              circle at 100% 0%,
              rgba(255, 222, 89, 0.24),
              transparent 34%
            ),
            #ffffff;
          box-shadow: 0 24px 70px rgba(0, 0, 0, 0.055);
        }

        .orderNotice::after {
          position: absolute;
          right: -50px;
          bottom: -80px;
          width: 240px;
          height: 240px;
          border-radius: 50%;
          background: rgba(255, 222, 89, 0.12);
          content: "";
          pointer-events: none;
        }

        .noticeStatus {
          position: relative;
          z-index: 1;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          min-height: 36px;
          margin-bottom: 28px;
          padding: 0 16px;
          border-radius: 999px;
          background: #fff8d6;
          color: #735000;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.08em;
        }

        .noticeStatusDot {
          width: 8px;
          height: 8px;
          flex-shrink: 0;
          border-radius: 50%;
          background: #ffde59;
          box-shadow: 0 0 0 5px rgba(255, 222, 89, 0.22);
        }

        .noticeTitle {
          position: relative;
          z-index: 1;
          max-width: 780px;
          margin: 0 0 24px;
          color: #2f2f2f;
          font-size: clamp(31px, 5vw, 52px);
          line-height: 1.45;
          letter-spacing: 0.01em;
        }

        .noticeText {
          position: relative;
          z-index: 1;
          max-width: 720px;
          margin: 0;
          color: #606060;
          font-size: 16px;
          line-height: 2;
        }

        .noticeSupplement {
          position: relative;
          z-index: 1;
          max-width: 720px;
          margin-top: 36px;
          padding-top: 30px;
          border-top: 1px solid #ecece8;
          color: #888;
          font-size: 14px;
          line-height: 1.9;
        }

        .noticeSupplement p {
          margin: 0;
        }

        .noticeSupplement p + p {
          margin-top: 7px;
        }

        .guideSection,
        .seasonSection {
          margin-bottom: 112px;
        }

        .sectionHeading {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 30px;
          margin-bottom: 36px;
        }

        .sectionTitle {
          margin: 0;
          color: #2f2f2f;
          font-size: clamp(30px, 4.5vw, 48px);
          line-height: 1.3;
        }

        .sectionSideText {
          margin: 0 0 5px;
          color: #999;
          font-size: 13px;
          line-height: 1.8;
          text-align: right;
        }

        .guideGrid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 22px;
        }

        .guideCard {
          min-width: 0;
          padding: 34px;
          border: 1px solid #ecece8;
          border-radius: 28px;
          background: #fff;
          box-shadow: 0 18px 50px rgba(0, 0, 0, 0.04);
        }

        .guideNumber {
          margin: 0 0 30px;
          color: #c7c7c1;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.18em;
        }

        .guideTitle {
          margin: 0 0 16px;
          color: #2f2f2f;
          font-size: 23px;
          line-height: 1.5;
        }

        .guideText {
          margin: 0;
          color: #6d6d6d;
          font-size: 14px;
          line-height: 1.95;
        }

        .seasonGrid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 22px;
        }

        .seasonCard {
          position: relative;
          display: flex;
          min-width: 0;
          min-height: 310px;
          flex-direction: column;
          padding: 34px;
          overflow: hidden;
          border: 1px solid #ecece8;
          border-radius: 28px;
          background:
            linear-gradient(
              145deg,
              color-mix(
                in srgb,
                var(--product-accent) 8%,
                #ffffff
              ),
              #ffffff 48%
            );
          box-shadow: 0 18px 50px rgba(0, 0, 0, 0.04);
        }

        .seasonCard::before {
          position: absolute;
          top: -64px;
          right: -64px;
          width: 180px;
          height: 180px;
          border-radius: 50%;
          background: color-mix(
            in srgb,
            var(--product-accent) 10%,
            transparent
          );
          content: "";
          pointer-events: none;
        }

        .seasonCardTop {
          position: relative;
          z-index: 1;
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 20px;
          margin-bottom: 26px;
        }

        .productEnglishName {
          margin: 0 0 8px;
          color: var(--product-accent);
          font-size: 11px;
          font-weight: 700;
          line-height: 1.5;
          letter-spacing: 0.17em;
        }

        .productName {
          margin: 0;
          color: #2f2f2f;
          font-size: clamp(25px, 3.2vw, 34px);
          line-height: 1.4;
        }

        .statusBadge {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          min-height: 32px;
          flex-shrink: 0;
          padding: 0 13px;
          border-radius: 999px;
          font-size: 11px;
          font-weight: 700;
          white-space: nowrap;
        }

        .statusDot {
          width: 6px;
          height: 6px;
          flex-shrink: 0;
          border-radius: 50%;
          background: currentColor;
        }

        .status-受付前 {
          background: #f3f3f0;
          color: #777;
        }

        .status-受付中 {
          background: #2f2f2f;
          color: #fff;
        }

        .status-受付終了 {
          background: #f6eeee;
          color: #9d6666;
        }

        .productSeason {
          position: relative;
          z-index: 1;
          display: flex;
          align-items: center;
          gap: 12px;
          margin: 0 0 18px;
          color: #999;
          font-size: 12px;
          line-height: 1.7;
        }

        .productSeason span {
          color: #555;
          font-size: 14px;
          font-weight: 700;
        }

        .productDescription {
          position: relative;
          z-index: 1;
          margin: 0 0 30px;
          color: #666;
          font-size: 14px;
          line-height: 1.95;
        }

        .seasonLine {
          position: relative;
          z-index: 1;
          width: 100%;
          height: 3px;
          margin-top: auto;
          overflow: hidden;
          border-radius: 999px;
          background: #eeeeea;
        }

        .seasonLine::after {
          display: block;
          width: 34%;
          height: 100%;
          border-radius: inherit;
          background: var(--product-accent);
          content: "";
          opacity: 0.75;
        }

        .informationSection {
          display: grid;
          grid-template-columns: minmax(0, 0.85fr) minmax(0, 1.15fr);
          gap: 70px;
          margin-bottom: 112px;
          padding: 64px;
          border-radius: 36px;
          background: #f1f1ed;
        }

        .informationTitle {
          margin: 0;
          color: #2f2f2f;
          font-size: clamp(30px, 4.5vw, 48px);
          line-height: 1.45;
        }

        .informationList {
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 0;
        }

        .informationItem {
          display: grid;
          grid-template-columns: 10px minmax(0, 1fr);
          gap: 16px;
          padding: 22px 0;
          border-bottom: 1px solid #dbdbd5;
        }

        .informationItem:first-child {
          padding-top: 0;
        }

        .informationItem:last-child {
          padding-bottom: 0;
          border-bottom: 0;
        }

        .informationItem p {
          margin: 0;
          color: #626262;
          font-size: 14px;
          line-height: 1.95;
        }

        .informationDot {
          width: 8px;
          height: 8px;
          margin-top: 10px;
          border-radius: 50%;
          background: #ffde59;
        }

        .contactCta {
          margin-bottom: 120px;
          padding: 72px 32px;
          border-radius: 36px;
          background: #2f2f2f;
          color: #fff;
          text-align: center;
        }

        .contactCtaLabel {
          margin: 0 0 16px;
          color: #bdbdb8;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.22em;
        }

        .contactCtaTitle {
          margin: 0 0 24px;
          color: #fff;
          font-size: clamp(31px, 5vw, 50px);
          line-height: 1.45;
        }

        .contactCtaText {
          max-width: 680px;
          margin: 0 auto 34px;
          color: #d1d1cd;
          font-size: 15px;
          line-height: 2;
        }

        .contactButton {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 18px;
          min-height: 56px;
          padding: 0 28px;
          border-radius: 999px;
          background: #fff;
          color: #2f2f2f;
          font-size: 14px;
          font-weight: 700;
          text-decoration: none;
          transition:
            transform 180ms ease,
            opacity 180ms ease;
        }

        .contactButton:hover {
          transform: translateY(-2px);
          opacity: 0.92;
        }

        .closingSection {
          padding: 24px 20px 42px;
          text-align: center;
        }

        .closingLabel {
          margin: 0 0 28px;
          color: #aaa;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.24em;
        }

        .closingLogo {
          margin: 0 0 38px;
          font-size: clamp(43px, 8vw, 82px);
          font-weight: 400;
          line-height: 1.2;
        }

        .colorLogo {
          display: inline-flex;
          align-items: center;
          letter-spacing: 0;
          white-space: nowrap;
        }

        .closingMessage {
          margin: 0 0 42px;
          color: #3f3f46;
          font-size: clamp(22px, 3.5vw, 34px);
          font-weight: 700;
          line-height: 1.75;
        }

        .closingBee {
          margin-bottom: 20px;
        }

        .colorBeeMyFriends {
          display: inline-flex;
          align-items: center;
          font-size: clamp(23px, 4vw, 34px);
          font-weight: 700;
          line-height: 1.4;
          letter-spacing: 0;
        }

        .closingText {
          margin: 0;
          color: #888;
          font-size: 14px;
          line-height: 1.9;
        }

        @media (max-width: 900px) {
          .guideGrid {
            grid-template-columns: 1fr;
          }

          .guideCard {
            min-height: auto;
          }

          .informationSection {
            grid-template-columns: 1fr;
            gap: 48px;
          }
        }

        @media (max-width: 720px) {
          .orderPage {
            padding: 88px 18px 72px;
          }

          .heroSection {
            margin-bottom: 50px;
          }

          .heroTitle {
            margin-bottom: 24px;
            font-size: clamp(40px, 12vw, 58px);
            line-height: 1.24;
          }

          .heroText {
            font-size: 15px;
            line-height: 1.95;
          }

          .desktopBreak {
            display: none;
          }

          .orderNotice {
            margin-bottom: 84px;
            padding: 38px 24px;
            border-radius: 28px;
          }

          .noticeStatus {
            margin-bottom: 24px;
          }

          .noticeTitle {
            font-size: clamp(27px, 8vw, 38px);
            line-height: 1.5;
          }

          .noticeText {
            font-size: 14px;
          }

          .noticeSupplement {
            margin-top: 28px;
            padding-top: 24px;
            font-size: 13px;
          }

          .guideSection,
          .seasonSection {
            margin-bottom: 84px;
          }

          .sectionHeading {
            display: block;
            margin-bottom: 28px;
          }

          .sectionSideText {
            margin-top: 14px;
            text-align: left;
          }

          .guideGrid {
            gap: 16px;
          }

          .guideCard {
            padding: 28px 24px;
            border-radius: 24px;
          }

          .guideNumber {
            margin-bottom: 22px;
          }

          .guideTitle {
            font-size: 21px;
          }

          .seasonGrid {
            grid-template-columns: 1fr;
            gap: 16px;
          }

          .seasonCard {
            min-height: 290px;
            padding: 28px 24px;
            border-radius: 24px;
          }

          .seasonCardTop {
            gap: 14px;
          }

          .productName {
            font-size: 25px;
          }

          .statusBadge {
            min-height: 29px;
            padding: 0 11px;
            font-size: 10px;
          }

          .informationSection {
            gap: 38px;
            margin-bottom: 84px;
            padding: 38px 24px;
            border-radius: 28px;
          }

          .informationTitle {
            font-size: 31px;
          }

          .contactCta {
            margin-bottom: 88px;
            padding: 52px 24px;
            border-radius: 28px;
          }

          .contactCtaTitle {
            font-size: 30px;
          }

          .contactCtaText {
            font-size: 14px;
          }

          .contactButton {
            width: 100%;
            max-width: 330px;
            min-height: 54px;
            padding: 0 22px;
            box-sizing: border-box;
          }

          .closingSection {
            padding-right: 0;
            padding-left: 0;
          }

          .closingLogo {
            margin-bottom: 30px;
            font-size: clamp(38px, 12vw, 58px);
          }

          .closingMessage {
            margin-bottom: 34px;
            font-size: 23px;
          }

          .colorBeeMyFriends {
            font-size: 25px;
          }
        }

        @media (max-width: 430px) {
          .orderPage {
            padding-right: 14px;
            padding-left: 14px;
          }

          .heroTitle {
            font-size: 39px;
          }

          .orderNotice,
          .guideCard,
          .seasonCard,
          .informationSection,
          .contactCta {
            border-radius: 22px;
          }

          .orderNotice {
            padding: 32px 20px;
          }

          .noticeTitle {
            font-size: 27px;
          }

          .seasonCardTop {
            display: block;
          }

          .statusBadge {
            margin-top: 16px;
          }

          .productSeason {
            display: block;
          }

          .productSeason span {
            display: block;
            margin-top: 4px;
          }

          .closingLogo {
            font-size: 36px;
          }

          .colorBeeMyFriends {
            font-size: 22px;
          }
        }
      `}</style>
    </>
  );
}