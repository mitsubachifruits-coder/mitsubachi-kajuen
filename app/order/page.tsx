import type { Metadata } from "next";
import Link from "next/link";
import type { CSSProperties } from "react";

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
    <main className="orderPage">
      {/* ページ上部 */}
      <section className="heroSection">
        <div className="pageContainer">
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
        </div>
      </section>

      <div className="orderContent">
        <div className="pageContainer">
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

                <h3 className="guideTitle">
                  販売開始のお知らせ
                </h3>

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

                <h3 className="guideTitle">
                  果樹園から発送
                </h3>

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
                <p className="englishLabel">
                  SEASONAL FRUITS
                </p>

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
                    } as CSSProperties
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

            <Link
              href="/contact"
              className="contactButton"
            >
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
      </div>

      <style>{`
        .orderPage,
        .orderPage * {
          box-sizing: border-box;
        }

        .orderPage {
          width: 100%;
          min-height: 100vh;
          margin: 0;
          padding: 0;
          overflow: hidden;
          background: #fafaf9;
          color: #2f2f2f;
        }

        .pageContainer {
          width: min(960px, calc(100% - 64px));
          margin: 0 auto;
        }

        /* =========================================
           HERO
        ========================================= */

        .heroSection {
          padding: 112px 0 90px;
          background:
            radial-gradient(
              circle at 90% 8%,
              rgba(255, 222, 89, 0.15),
              transparent 25%
            ),
            radial-gradient(
              circle at 4% 90%,
              rgba(0, 191, 99, 0.055),
              transparent 25%
            ),
            #fafaf9;
        }

        .englishLabel {
          margin: 0 0 21px;
          color: #92928b;
          font-size: 9px;
          font-weight: 700;
          line-height: 1.5;
          letter-spacing: 0.24em;
        }

        .heroTitle {
          max-width: 760px;
          margin: 0;
          color: #2f2f2b;
          font-size: clamp(43px, 6vw, 78px);
          font-weight: 700;
          line-height: 1.14;
          letter-spacing: -0.035em;
        }

        .heroText {
          max-width: 570px;
          margin: 37px 0 0;
          color: #696963;
          font-size: clamp(14px, 1.5vw, 17px);
          line-height: 2;
        }

        /* =========================================
           CONTENT
        ========================================= */

        .orderContent {
          padding: 82px 0 120px;
        }

        /* =========================================
           NOTICE
        ========================================= */

        .orderNotice {
          position: relative;
          margin-bottom: 110px;
          padding: 48px;
          overflow: hidden;
          border: 1px solid #ecece8;
          border-radius: 27px;
          background:
            radial-gradient(
              circle at 100% 0%,
              rgba(255, 222, 89, 0.24),
              transparent 34%
            ),
            #ffffff;
          box-shadow: 0 18px 52px rgba(0, 0, 0, 0.055);
        }

        .orderNotice::after {
          position: absolute;
          right: -38px;
          bottom: -60px;
          width: 180px;
          height: 180px;
          border-radius: 50%;
          background: rgba(255, 222, 89, 0.12);
          content: "";
          pointer-events: none;
        }

        .noticeStatus {
          position: relative;
          z-index: 1;
          display: inline-flex;
          min-height: 27px;
          align-items: center;
          gap: 8px;
          margin-bottom: 21px;
          padding: 0 12px;
          border-radius: 999px;
          background: #fff8d6;
          color: #735000;
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 0.08em;
        }

        .noticeStatusDot {
          width: 6px;
          height: 6px;
          flex-shrink: 0;
          border-radius: 50%;
          background: #ffde59;
          box-shadow: 0 0 0 4px rgba(255, 222, 89, 0.22);
        }

        .noticeTitle {
          position: relative;
          z-index: 1;
          max-width: 650px;
          margin: 0 0 18px;
          color: #2f2f2f;
          font-size: clamp(27px, 4vw, 43px);
          line-height: 1.45;
          letter-spacing: -0.025em;
        }

        .noticeText {
          position: relative;
          z-index: 1;
          max-width: 570px;
          margin: 0;
          color: #606060;
          font-size: 12px;
          line-height: 2;
        }

        .noticeSupplement {
          position: relative;
          z-index: 1;
          max-width: 570px;
          margin-top: 27px;
          padding-top: 23px;
          border-top: 1px solid #ecece8;
          color: #888;
          font-size: 11px;
          line-height: 1.9;
        }

        .noticeSupplement p {
          margin: 0;
        }

        .noticeSupplement p + p {
          margin-top: 5px;
        }

        /* =========================================
           SECTION HEADING
        ========================================= */

        .guideSection,
        .seasonSection {
          margin-bottom: 110px;
        }

        .sectionHeading {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 30px;
          margin-bottom: 34px;
          padding-bottom: 23px;
          border-bottom: 1px solid #deddd7;
        }

        .sectionHeading .englishLabel {
          margin-bottom: 11px;
        }

        .sectionTitle {
          margin: 0;
          color: #2f2f2f;
          font-size: clamp(32px, 4vw, 50px);
          line-height: 1.3;
          letter-spacing: -0.035em;
        }

        .sectionSideText {
          margin: 0 0 5px;
          color: #999;
          font-size: 10px;
          line-height: 1.8;
          text-align: right;
        }

        /* =========================================
           GUIDE
        ========================================= */

        .guideGrid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 17px;
        }

        .guideCard {
          min-width: 0;
          min-height: 225px;
          padding: 26px;
          border: 1px solid #ecece8;
          border-radius: 21px;
          background: #ffffff;
          box-shadow: 0 14px 38px rgba(0, 0, 0, 0.04);
        }

        .guideNumber {
          margin: 0 0 32px;
          color: #c7c7c1;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.18em;
        }

        .guideTitle {
          margin: 0 0 12px;
          color: #2f2f2f;
          font-size: 17px;
          line-height: 1.5;
        }

        .guideText {
          margin: 0;
          color: #6d6d6d;
          font-size: 11px;
          line-height: 1.95;
        }

        /* =========================================
           SEASONAL PRODUCTS
        ========================================= */

        .seasonGrid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 17px;
        }

        .seasonCard {
          position: relative;
          display: flex;
          min-width: 0;
          min-height: 245px;
          flex-direction: column;
          padding: 26px;
          overflow: hidden;
          border: 1px solid #ecece8;
          border-radius: 21px;
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
          box-shadow: 0 14px 38px rgba(0, 0, 0, 0.04);
        }

        .seasonCard::before {
          position: absolute;
          top: -48px;
          right: -48px;
          width: 135px;
          height: 135px;
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
          gap: 15px;
          margin-bottom: 20px;
        }

        .productEnglishName {
          margin: 0 0 6px;
          color: var(--product-accent);
          font-size: 8px;
          font-weight: 700;
          line-height: 1.5;
          letter-spacing: 0.17em;
        }

        .productName {
          margin: 0;
          color: #2f2f2f;
          font-size: clamp(20px, 2.4vw, 27px);
          line-height: 1.4;
        }

        .statusBadge {
          display: inline-flex;
          min-height: 24px;
          flex-shrink: 0;
          align-items: center;
          gap: 5px;
          padding: 0 10px;
          border-radius: 999px;
          font-size: 8px;
          font-weight: 700;
          white-space: nowrap;
        }

        .statusDot {
          width: 5px;
          height: 5px;
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
          color: #ffffff;
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
          gap: 9px;
          margin: 0 0 14px;
          color: #999;
          font-size: 9px;
          line-height: 1.7;
        }

        .productSeason span {
          color: #555;
          font-size: 11px;
          font-weight: 700;
        }

        .productDescription {
          position: relative;
          z-index: 1;
          margin: 0 0 23px;
          color: #666;
          font-size: 11px;
          line-height: 1.95;
        }

        .seasonLine {
          position: relative;
          z-index: 1;
          width: 100%;
          height: 2px;
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

        /* =========================================
           INFORMATION
        ========================================= */

        .informationSection {
          display: grid;
          grid-template-columns:
            minmax(0, 0.85fr)
            minmax(0, 1.15fr);
          gap: 53px;
          margin-bottom: 110px;
          padding: 48px;
          border-radius: 27px;
          background: #f1f1ed;
        }

        .informationHeading .englishLabel {
          margin-bottom: 14px;
        }

        .informationTitle {
          margin: 0;
          color: #2f2f2f;
          font-size: clamp(30px, 4vw, 47px);
          line-height: 1.4;
          letter-spacing: -0.035em;
        }

        .informationList {
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .informationItem {
          display: grid;
          grid-template-columns: 8px minmax(0, 1fr);
          gap: 12px;
          padding: 17px 0;
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
          font-size: 11px;
          line-height: 1.95;
        }

        .informationDot {
          width: 6px;
          height: 6px;
          margin-top: 8px;
          border-radius: 50%;
          background: #ffde59;
        }

        /* =========================================
           CONTACT CTA
        ========================================= */

        .contactCta {
          margin-bottom: 110px;
          padding: 58px 24px;
          border-radius: 27px;
          background:
            radial-gradient(
              circle at 90% 10%,
              rgba(255, 222, 89, 0.1),
              transparent 30%
            ),
            #2f2f2f;
          color: #ffffff;
          text-align: center;
          box-shadow: 0 18px 52px rgba(52, 52, 45, 0.14);
        }

        .contactCtaLabel {
          margin: 0 0 14px;
          color: #bdbdb8;
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 0.22em;
        }

        .contactCtaTitle {
          margin: 0 0 18px;
          color: #ffffff;
          font-size: clamp(28px, 4vw, 44px);
          line-height: 1.45;
          letter-spacing: -0.035em;
        }

        .contactCtaText {
          max-width: 540px;
          margin: 0 auto 28px;
          color: #d1d1cd;
          font-size: 12px;
          line-height: 2;
        }

        .contactButton {
          display: inline-flex;
          min-height: 46px;
          align-items: center;
          justify-content: center;
          gap: 14px;
          padding: 0 22px;
          border-radius: 999px;
          background: #ffffff;
          color: #2f2f2f;
          font-size: 11px;
          font-weight: 700;
          text-decoration: none;
          transition:
            transform 180ms ease,
            opacity 180ms ease;
        }

        .contactButton:hover {
          opacity: 0.92;
          transform: translateY(-3px);
        }

        /* =========================================
           CLOSING
        ========================================= */

        .closingSection {
          padding: 12px 15px 30px;
          text-align: center;
        }

        .closingLabel {
          margin: 0 0 22px;
          color: #aaa;
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 0.24em;
        }

        .closingLogo {
          margin: 0 0 29px;
          font-size: clamp(34px, 6vw, 62px);
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
          margin: 0;
          color: #3f3f46;
          font-size: clamp(18px, 2.6vw, 26px);
          font-weight: 700;
          line-height: 1.75;
        }

        .colorBeeMyFriends {
          display: inline-flex;
          align-items: center;
          font-size: clamp(18px, 3vw, 26px);
          font-weight: 700;
          line-height: 1.4;
          letter-spacing: 0;
        }

        /* =========================================
           TABLET
           Fruits・About・Story・Contactと同じ基準
        ========================================= */

        @media (max-width: 900px) {
          .pageContainer {
            width: min(1180px, calc(100% - 48px));
          }

          .heroSection {
            padding: 150px 0 120px;
          }

          .englishLabel {
            margin-bottom: 28px;
            font-size: 12px;
          }

          .heroTitle {
            max-width: 940px;
            font-size: clamp(54px, 8vw, 104px);
          }

          .heroText {
            max-width: 720px;
            margin-top: 48px;
            font-size: clamp(17px, 2vw, 22px);
          }

          .orderContent {
            padding: 110px 0 160px;
          }

          .orderNotice {
            margin-bottom: 145px;
            padding: 64px;
            border-radius: 36px;
          }

          .orderNotice::after {
            right: -50px;
            bottom: -80px;
            width: 240px;
            height: 240px;
          }

          .noticeStatus {
            min-height: 36px;
            gap: 10px;
            margin-bottom: 28px;
            padding: 0 16px;
            font-size: 12px;
          }

          .noticeStatusDot {
            width: 8px;
            height: 8px;
            box-shadow: 0 0 0 5px rgba(255, 222, 89, 0.22);
          }

          .noticeTitle {
            max-width: 780px;
            margin-bottom: 24px;
            font-size: clamp(36px, 5.5vw, 62px);
          }

          .noticeText {
            max-width: 720px;
            font-size: 16px;
          }

          .noticeSupplement {
            max-width: 720px;
            margin-top: 36px;
            padding-top: 30px;
            font-size: 14px;
          }

          .noticeSupplement p + p {
            margin-top: 7px;
          }

          .guideSection,
          .seasonSection {
            margin-bottom: 145px;
          }

          .sectionHeading {
            gap: 30px;
            margin-bottom: 46px;
            padding-bottom: 30px;
          }

          .sectionHeading .englishLabel {
            margin-bottom: 14px;
          }

          .sectionTitle {
            font-size: clamp(42px, 6vw, 72px);
          }

          .sectionSideText {
            margin-bottom: 5px;
            font-size: 13px;
          }

          .guideGrid {
            grid-template-columns: 1fr;
            gap: 22px;
          }

          .guideCard {
            min-height: auto;
            padding: 36px;
            border-radius: 30px;
          }

          .guideNumber {
            margin-bottom: 42px;
            font-size: 13px;
          }

          .guideTitle {
            margin-bottom: 16px;
            font-size: 25px;
          }

          .guideText {
            max-width: 650px;
            font-size: 14px;
          }

          .seasonGrid {
            gap: 22px;
          }

          .seasonCard {
            min-height: 330px;
            padding: 34px;
            border-radius: 28px;
          }

          .seasonCard::before {
            top: -64px;
            right: -64px;
            width: 180px;
            height: 180px;
          }

          .seasonCardTop {
            gap: 20px;
            margin-bottom: 26px;
          }

          .productEnglishName {
            margin-bottom: 8px;
            font-size: 11px;
          }

          .productName {
            font-size: clamp(25px, 3.2vw, 34px);
          }

          .statusBadge {
            min-height: 32px;
            gap: 7px;
            padding: 0 13px;
            font-size: 11px;
          }

          .statusDot {
            width: 6px;
            height: 6px;
          }

          .productSeason {
            gap: 12px;
            margin-bottom: 18px;
            font-size: 12px;
          }

          .productSeason span {
            font-size: 14px;
          }

          .productDescription {
            margin-bottom: 30px;
            font-size: 14px;
          }

          .seasonLine {
            height: 3px;
          }

          .informationSection {
            grid-template-columns: 1fr;
            gap: 48px;
            margin-bottom: 145px;
            padding: 64px;
            border-radius: 36px;
          }

          .informationHeading .englishLabel {
            margin-bottom: 18px;
          }

          .informationTitle {
            font-size: clamp(40px, 5.5vw, 66px);
          }

          .informationItem {
            grid-template-columns: 10px minmax(0, 1fr);
            gap: 16px;
            padding: 22px 0;
          }

          .informationItem p {
            font-size: 14px;
          }

          .informationDot {
            width: 8px;
            height: 8px;
            margin-top: 10px;
          }

          .contactCta {
            margin-bottom: 145px;
            padding: 72px 32px;
            border-radius: 36px;
          }

          .contactCtaLabel {
            margin-bottom: 18px;
            font-size: 12px;
          }

          .contactCtaTitle {
            margin-bottom: 24px;
            font-size: clamp(38px, 5.5vw, 62px);
          }

          .contactCtaText {
            max-width: 680px;
            margin-bottom: 34px;
            font-size: 15px;
          }

          .contactButton {
            min-height: 56px;
            gap: 18px;
            padding: 0 28px;
            font-size: 14px;
          }

          .closingSection {
            padding: 20px 20px 42px;
          }

          .closingLabel {
            margin-bottom: 28px;
            font-size: 12px;
          }

          .closingLogo {
            margin-bottom: 38px;
            font-size: clamp(43px, 8vw, 82px);
          }

          .closingMessage {
            font-size: clamp(22px, 3.5vw, 34px);
          }

          .colorBeeMyFriends {
            font-size: clamp(23px, 4vw, 34px);
          }
        }

        /* =========================================
           MOBILE BASE
        ========================================= */

        @media (max-width: 768px) {
          .orderPage {
            padding: 0 !important;
          }

          .heroSection,
          .orderContent {
            padding-right: 0 !important;
            padding-left: 0 !important;
          }

          .heroTitle {
            font-size: clamp(48px, 15vw, 72px) !important;
            line-height: 1.16 !important;
          }

          .sectionTitle {
            font-size: 48px !important;
            line-height: 1.2 !important;
          }
        }

        /* =========================================
           SMARTPHONE
           左右16px・Hero 105px / 85px
        ========================================= */

        @media (max-width: 680px) {
          .pageContainer {
            width: min(100% - 32px, 1180px);
          }

          .heroSection {
            padding-top: 105px !important;
            padding-bottom: 85px !important;
          }

          .englishLabel {
            margin-bottom: 23px;
            font-size: 10px;
          }

          .heroText {
            margin-top: 34px;
            font-size: 16px;
            line-height: 1.9;
          }

          .desktopBreak {
            display: none;
          }

          .orderContent {
            padding-top: 85px !important;
            padding-bottom: 110px !important;
          }

          .orderNotice {
            margin-bottom: 100px;
            padding: 38px 24px;
            border-radius: 28px;
          }

          .noticeStatus {
            margin-bottom: 24px;
          }

          .noticeTitle {
            font-size: clamp(28px, 8.5vw, 40px);
            line-height: 1.5;
          }

          .noticeText {
            font-size: 14px;
          }

          .noticeText br {
            display: none;
          }

          .noticeSupplement {
            margin-top: 28px;
            padding-top: 24px;
            font-size: 13px;
          }

          .guideSection,
          .seasonSection {
            margin-bottom: 100px;
          }

          .sectionHeading {
            display: block;
            margin-bottom: 30px;
            padding-bottom: 25px;
          }

          .sectionHeading .englishLabel {
            margin-bottom: 12px;
          }

          .sectionSideText {
            margin-top: 16px;
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
            margin-bottom: 30px;
          }

          .guideTitle {
            font-size: 21px;
          }

          .guideText {
            font-size: 13px;
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

          .productDescription {
            font-size: 13px;
          }

          .informationSection {
            gap: 38px;
            margin-bottom: 100px;
            padding: 38px 24px;
            border-radius: 28px;
          }

          .informationTitle {
            font-size: 40px;
          }

          .informationItem p {
            font-size: 13px;
          }

          .contactCta {
            margin-bottom: 100px;
            padding: 52px 24px;
            border-radius: 28px;
          }

          .contactCtaTitle {
            font-size: clamp(31px, 9vw, 42px);
          }

          .contactCtaText {
            font-size: 14px;
          }

          .contactButton {
            width: 100%;
            max-width: 330px;
            min-height: 54px;
            padding: 0 22px;
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
            font-size: 23px;
          }

          .colorBeeMyFriends {
            font-size: 25px;
          }
        }

        @media (max-width: 480px) {
          .heroText {
            font-size: 15px;
          }

          .noticeTitle br {
            display: none;
          }

          .sectionTitle {
            font-size: 44px !important;
          }

          .informationTitle {
            font-size: 37px;
          }

          .contactCtaText {
            font-size: 13px;
          }
        }

        @media (max-width: 420px) {
          .heroTitle {
            font-size: 46px !important;
          }

          .sectionTitle {
            font-size: 41px !important;
          }

          .orderNotice,
          .guideCard,
          .seasonCard,
          .informationSection,
          .contactCta {
            padding-right: 20px;
            padding-left: 20px;
            border-radius: 22px;
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

          .informationTitle {
            font-size: 34px;
          }

          .contactCtaTitle {
            font-size: 31px;
          }

          .closingLogo {
            font-size: 36px;
          }

          .colorBeeMyFriends {
            font-size: 22px;
          }
        }

        @media (max-width: 360px) {
          .pageContainer {
            width: calc(100% - 28px);
          }

          .heroTitle {
            font-size: 42px !important;
          }

          .sectionTitle {
            font-size: 38px !important;
          }

          .orderNotice,
          .guideCard,
          .seasonCard,
          .informationSection,
          .contactCta {
            padding-right: 18px;
            padding-left: 18px;
          }

          .noticeTitle {
            font-size: 26px;
          }

          .informationTitle {
            font-size: 31px;
          }

          .contactCtaTitle {
            font-size: 28px;
          }

          .closingLogo {
            font-size: 33px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .contactButton {
            transition: none;
          }
        }
      `}</style>
    </main>
  );
}