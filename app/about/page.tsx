import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "みつばち果樹園について | みつばち果樹園",
  description:
    "山形県東根市のみつばち果樹園と、直営店みつばちフルーツについてご紹介します。",
};

const logoColors = [
  "#FF3131",
  "#006DFF",
  "#00BF63",
  "#FFDE59",
  "#8C52FF",
  "#00A1FF",
  "#FF66C4",
];

function ColorLogo({ className = "" }: { className?: string }) {
  const letters = ["み", "つ", "ば", "ち", "果", "樹", "園"];

  return (
    <span
      className={`colorLogo ${className}`}
      aria-label="みつばち果樹園"
    >
      {letters.map((letter, index) => (
        <span
          key={`${letter}-${index}`}
          style={{ color: logoColors[index] }}
          aria-hidden="true"
        >
          {letter}
        </span>
      ))}
    </span>
  );
}

function ColorBeeMyFriends() {
  const letters = Array.from("Bee my friends!");

  return (
    <span
      className="colorBeeMyFriends"
      aria-label="Bee my friends!"
    >
      {letters.map((letter, index) => (
        <span
          key={`${letter}-${index}`}
          style={{
            color: logoColors[index % logoColors.length],
          }}
          aria-hidden="true"
        >
          {letter === " " ? "\u00A0" : letter}
        </span>
      ))}
    </span>
  );
}

export default function AboutPage() {
  const shopGoogleMapsUrl =
    "https://www.google.com/maps/place/みつばちフルーツ/@38.4585069,140.3824658,808m/data=!3m2!1e3!4b1!4m6!3m5!1s0x5f8bddb815aa36a5:0xa3af7357704955ec!8m2!3d38.4585069!4d140.3824658!16s%2Fg%2F11pdn5drk_?entry=ttu&g_ep=EgoyMDI2MDcwOC4wIKXMDSoASAFQAw%3D%3D";

  const farmGoogleMapsUrl =
    "https://www.google.com/maps/search/?api=1&query=山形県東根市若木通り1-13";

  return (
    <>
      <main className="aboutPage">
        <section className="aboutHero">
          <div className="pageContainer">
            <p className="aboutEyebrow">ABOUT US</p>

            <h1 className="aboutTitle">
              <ColorLogo />
            </h1>

            <div className="aboutIntroduction">
              <p>
                みつばち果樹園は、
                <strong>GI「東根さくらんぼ」</strong>
                生産者です。
              </p>

              <p>
                日本一のさくらんぼ生産量を誇るまち、
                <br />
                山形県東根市より、もぎたてのおいしさを全国へお届けしています。
              </p>

              <p>
                四季の移ろいを感じながら、自然と向き合い、
                <br />
                一粒一粒を大切に育てています。
              </p>
            </div>

            <div className="aboutMeta">
              <span>YAMAGATA</span>
              <span className="metaDivider" />
              <span>HIGASHINE</span>
            </div>
          </div>
        </section>

        <div className="aboutContent">
          <div className="pageContainer">
            <section className="visitorNotice">
              <div className="visitorNoticeContent">
                <p className="visitorNoticeLabel">
                  VISITOR INFORMATION
                </p>

                <h2 className="visitorNoticeTitle">
                  お店は、
                  <br />
                  みつばちフルーツです。
                </h2>

                <p className="visitorNoticeText">
                  ナビで「みつばち果樹園」と検索すると、
                  農園・作業場へ案内される場合があります。
                  <br />
                  ご来店・お買い物のお客様は、
                  <strong>「みつばちフルーツ」</strong>
                  へお越しください。
                </p>

                <a
                  href={shopGoogleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="darkButton"
                >
                  <span>Google Mapsでお店を開く</span>
                  <span
                    className="buttonArrow"
                    aria-hidden="true"
                  >
                    →
                  </span>
                </a>
              </div>

              <div
                className="visitorNoticeDecoration"
                aria-hidden="true"
              >
                <span className="decorationBee">🐝</span>
              </div>
            </section>

            <section className="locationsSection">
              <div className="sectionHeader">
                <div>
                  <p className="sectionEnglish">
                    SHOP &amp; FARM
                  </p>

                  <h2 className="sectionTitle">
                    お店と果樹園
                  </h2>
                </div>

                <p className="sectionDescription">
                  ご来店の際は直営店「みつばちフルーツ」へ。
                  <br />
                  果樹園では、栽培・収穫・発送作業を行っています。
                </p>
              </div>

              <div className="locationGrid">
                <article className="locationCard">
                  <div className="locationCardHeader">
                    <p className="locationLabel">SHOP</p>

                    <span className="locationNumber">
                      01
                    </span>
                  </div>

                  <h3 className="locationTitle">
                    みつばちフルーツ
                  </h3>

                  <p className="locationType">
                    直営店・ご来店はこちら
                  </p>

                  <address className="locationAddress">
                    〒999-3701
                    <br />
                    山形県東根市東根甲4694-1
                  </address>

                  <div className="mapWrapper">
                    <iframe
                      src="https://www.google.com/maps?q=山形県東根市東根甲4694-1&output=embed"
                      title="みつばちフルーツ Googleマップ"
                      width="100%"
                      height="300"
                      className="mapFrame"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>

                  <a
                    href={shopGoogleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mapLink"
                  >
                    <span>Google Mapsで開く</span>
                    <span aria-hidden="true">→</span>
                  </a>
                </article>

                <article className="locationCard">
                  <div className="locationCardHeader">
                    <p className="locationLabel">FARM</p>

                    <span className="locationNumber">
                      02
                    </span>
                  </div>

                  <h3 className="locationTitle">
                    みつばち果樹園
                  </h3>

                  <p className="locationType">
                    果樹園・作業場
                  </p>

                  <address className="locationAddress">
                    〒999-3751
                    <br />
                    山形県東根市若木通り1-13
                  </address>

                  <p className="farmNote">
                    こちらは収穫・発送作業を行う農園です。
                    <br />
                    直売でお買い求めのお客様は、
                    みつばちフルーツへお越しください。
                  </p>

                  <div className="mapWrapper">
                    <iframe
                      src="https://www.google.com/maps?q=山形県東根市若木通り1-13&output=embed"
                      title="みつばち果樹園 Googleマップ"
                      width="100%"
                      height="300"
                      className="mapFrame"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>

                  <a
                    href={farmGoogleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mapLink"
                  >
                    <span>Google Mapsで開く</span>
                    <span aria-hidden="true">→</span>
                  </a>
                </article>
              </div>
            </section>

            <section className="farmInformation">
              <div className="sectionHeader informationHeader">
                <div>
                  <p className="sectionEnglish">
                    INFORMATION
                  </p>

                  <h2 className="sectionTitle">
                    インフォメーション
                  </h2>
                </div>

                <p className="sectionDescription">
                  商品やご注文についてのお問い合わせは、
                  <br />
                  お電話でも承っております。
                </p>
              </div>

              <div className="informationGrid">
                <div className="informationItem">
                  <p className="informationLabel">
                    OWNER
                  </p>

                  <p className="informationTitle">
                    園主
                  </p>

                  <p className="informationValue">
                    中川 敏浩
                  </p>
                </div>

                <div className="informationItem">
                  <p className="informationLabel">
                    TELEPHONE
                  </p>

                  <p className="informationTitle">
                    TEL
                  </p>

                  <a
                    href="tel:09082515523"
                    className="informationValue informationLink"
                  >
                    090-8251-5523
                  </a>
                </div>

                <div className="informationItem">
                  <p className="informationLabel">
                    FACSIMILE
                  </p>

                  <p className="informationTitle">
                    FAX
                  </p>

                  <p className="informationValue">
                    0237-51-4041
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>

        <section className="aboutClosing">
          <div className="pageContainer closingInner">
            <p className="closingEnglish">
              THANK YOU
            </p>

            <h2 className="closingTitle">
              <ColorBeeMyFriends />
            </h2>

            <p className="closingDescription">
              また会いたくなる、果樹園で。
            </p>

            <ColorLogo className="closingLogo" />
          </div>
        </section>
      </main>

      <style>{`
        .aboutPage,
        .aboutPage * {
          box-sizing: border-box;
        }

        .aboutPage {
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

        /* =========================================
           HERO
        ========================================= */

        .aboutHero {
          padding: 112px 0 90px;
          background:
            radial-gradient(
              circle at 85% 15%,
              rgba(255, 222, 89, 0.18),
              transparent 25%
            ),
            radial-gradient(
              circle at 15% 85%,
              rgba(0, 161, 255, 0.07),
              transparent 30%
            ),
            #fafaf9;
        }

        .aboutEyebrow {
          margin: 0 0 23px;
          color: #8a8a84;
          font-size: 9px;
          font-weight: 600;
          line-height: 1.5;
          letter-spacing: 0.24em;
        }

        .aboutTitle {
          max-width: 760px;
          margin: 0;
          color: #282825;
          font-size: clamp(43px, 6vw, 78px);
          font-weight: 400;
          line-height: 1.08;
          letter-spacing: -0.055em;
        }

        .colorLogo {
          display: inline-flex;
          max-width: 100%;
          align-items: center;
          font-size: inherit;
          font-weight: 400;
          line-height: inherit;
          letter-spacing: 0;
          white-space: nowrap;
        }

        .aboutIntroduction {
          max-width: 660px;
          margin-top: 36px;
          color: #696963;
          font-size: clamp(14px, 1.5vw, 17px);
          line-height: 2;
        }

        .aboutIntroduction p {
          margin: 0 0 19px;
          overflow-wrap: break-word;
        }

        .aboutIntroduction p:last-child {
          margin-bottom: 0;
        }

        .aboutIntroduction strong {
          color: #3f3f3a;
          font-weight: 600;
        }

        .aboutMeta {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-top: 39px;
          color: #8b8b84;
          font-size: 10px;
          line-height: 1.5;
          letter-spacing: 0.08em;
        }

        .metaDivider {
          width: 27px;
          height: 1px;
          background: #cfcec8;
        }

        /* =========================================
           CONTENT
        ========================================= */

        .aboutContent {
          padding: 112px 0 120px;
        }

        /* =========================================
           VISITOR NOTICE
        ========================================= */

        .visitorNotice {
          position: relative;
          display: grid;
          grid-template-columns: minmax(0, 1fr) 210px;
          gap: 42px;
          align-items: center;
          overflow: hidden;
          padding: 48px;
          border: 1px solid rgba(255, 222, 89, 0.48);
          border-radius: 22px;
          background:
            radial-gradient(
              circle at 88% 16%,
              rgba(255, 222, 89, 0.54),
              transparent 36%
            ),
            #fff9dc;
          color: #76500d;
          box-shadow: 0 12px 38px rgba(69, 56, 25, 0.055);
        }

        .visitorNoticeContent {
          position: relative;
          z-index: 2;
          min-width: 0;
        }

        .visitorNoticeLabel {
          margin: 0 0 17px;
          color: #9c792b;
          font-size: 8px;
          font-weight: 600;
          line-height: 1.5;
          letter-spacing: 0.22em;
        }

        .visitorNoticeTitle {
          margin: 0;
          color: #563900;
          font-size: clamp(30px, 4.5vw, 51px);
          font-weight: 400;
          line-height: 1.3;
          letter-spacing: -0.045em;
        }

        .visitorNoticeText {
          max-width: 610px;
          margin: 24px 0 28px;
          color: #765a22;
          font-size: 12px;
          line-height: 2;
        }

        .visitorNoticeText strong {
          color: #543700;
          font-weight: 600;
        }

        .darkButton {
          display: inline-flex;
          min-height: 46px;
          align-items: center;
          justify-content: center;
          gap: 11px;
          padding: 8px 9px 8px 18px;
          border-radius: 999px;
          background: #32322f;
          color: #ffffff;
          font-size: 10px;
          font-weight: 500;
          line-height: 1;
          letter-spacing: 0.05em;
          text-decoration: none;
          box-shadow: 0 8px 22px rgba(31, 31, 28, 0.14);
          transition:
            transform 200ms ease,
            background 200ms ease,
            box-shadow 200ms ease;
        }

        .darkButton:hover {
          transform: translateY(-2px);
          background: #1f1f1d;
          box-shadow: 0 12px 28px rgba(31, 31, 28, 0.2);
        }

        .darkButton:active {
          transform: scale(0.98);
        }

        .darkButton:focus-visible {
          outline: 3px solid rgba(47, 47, 47, 0.2);
          outline-offset: 3px;
        }

        .buttonArrow {
          display: inline-flex;
          width: 30px;
          height: 30px;
          flex: 0 0 auto;
          align-items: center;
          justify-content: center;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.14);
          color: #ffffff;
          font-size: 13px;
          line-height: 1;
          transition: transform 200ms ease;
        }

        .darkButton:hover .buttonArrow {
          transform: translateX(2px);
        }

        .visitorNoticeDecoration {
          position: relative;
          z-index: 1;
          display: flex;
          min-height: 190px;
          align-items: center;
          justify-content: center;
        }

        .visitorNoticeDecoration::before {
          position: absolute;
          width: 180px;
          height: 180px;
          border: 1px solid rgba(156, 121, 43, 0.13);
          border-radius: 50%;
          content: "";
        }

        .visitorNoticeDecoration::after {
          position: absolute;
          width: 130px;
          height: 130px;
          border: 1px solid rgba(156, 121, 43, 0.13);
          border-radius: 50%;
          content: "";
        }

        .decorationBee {
          position: relative;
          z-index: 2;
          font-size: 72px;
          line-height: 1;
          transform: rotate(-8deg);
          filter: drop-shadow(
            0 12px 18px rgba(84, 55, 0, 0.12)
          );
        }

        /* =========================================
           COMMON SECTION HEADER
        ========================================= */

        .locationsSection,
        .farmInformation {
          padding-top: 110px;
        }

        .sectionHeader {
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

        .sectionEnglish {
          margin: 0 0 12px;
          color: #999992;
          font-size: 8px;
          font-weight: 600;
          line-height: 1.5;
          letter-spacing: 0.2em;
        }

        .sectionTitle {
          margin: 0;
          color: #2d2d29;
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
           LOCATION
        ========================================= */

        .locationGrid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 23px;
          align-items: stretch;
        }

        .locationCard {
          display: flex;
          min-width: 0;
          flex-direction: column;
          padding: 29px;
          border: 1px solid #e5e4de;
          border-radius: 18px;
          background: #ffffff;
          box-shadow: 0 9px 30px rgba(52, 52, 45, 0.035);
          transition:
            transform 220ms ease,
            box-shadow 220ms ease;
        }

        .locationCard:hover {
          transform: translateY(-4px);
          box-shadow: 0 17px 42px rgba(52, 52, 45, 0.08);
        }

        .locationCardHeader {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          margin-bottom: 24px;
        }

        .locationLabel,
        .locationNumber {
          margin: 0;
          color: #999992;
          font-size: 8px;
          font-weight: 600;
          line-height: 1.5;
          letter-spacing: 0.2em;
        }

        .locationTitle {
          margin: 0;
          color: #31312e;
          font-size: clamp(22px, 2.7vw, 29px);
          font-weight: 400;
          line-height: 1.4;
          letter-spacing: -0.03em;
        }

        .locationType {
          margin: 17px 0 0;
          color: #51514c;
          font-size: 12px;
          font-weight: 600;
          line-height: 1.7;
        }

        .locationAddress {
          margin: 13px 0 0;
          color: #777770;
          font-size: 12px;
          font-style: normal;
          line-height: 1.9;
        }

        .farmNote {
          margin: 21px 0 0;
          padding: 14px 16px;
          border-radius: 13px;
          background: #f7f7f4;
          color: #777770;
          font-size: 10px;
          line-height: 1.9;
        }

        .mapWrapper {
          width: 100%;
          margin-top: auto;
          padding-top: 27px;
        }

        .mapFrame {
          display: block;
          width: 100%;
          height: 260px;
          overflow: hidden;
          border: 0;
          border-radius: 15px;
          background: #f0f0ed;
          clip-path: inset(0 round 15px);
        }

        .mapLink {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          margin-top: 19px;
          padding-top: 17px;
          border-top: 1px solid #eeeeea;
          color: #464641;
          font-size: 10px;
          font-weight: 500;
          line-height: 1.6;
          letter-spacing: 0.04em;
          text-decoration: none;
          transition: color 180ms ease;
        }

        .mapLink:hover {
          color: #006dff;
        }

        /* =========================================
           INFORMATION
        ========================================= */

        .informationGrid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 18px;
        }

        .informationItem {
          min-width: 0;
          padding: 25px;
          border: 1px solid #e5e4de;
          border-radius: 17px;
          background: #ffffff;
        }

        .informationLabel {
          margin: 0 0 24px;
          color: #999992;
          font-size: 8px;
          font-weight: 600;
          line-height: 1.5;
          letter-spacing: 0.16em;
        }

        .informationTitle {
          margin: 0 0 7px;
          color: #777770;
          font-size: 10px;
          line-height: 1.6;
        }

        .informationValue {
          display: block;
          margin: 0;
          overflow-wrap: anywhere;
          color: #31312e;
          font-size: 16px;
          font-weight: 500;
          line-height: 1.7;
          text-decoration: none;
        }

        .informationLink {
          transition: color 180ms ease;
        }

        .informationLink:hover {
          color: #006dff;
        }

        /* =========================================
           CLOSING
        ========================================= */

        .aboutClosing {
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

        .colorBeeMyFriends {
          display: inline-flex;
          max-width: 100%;
          align-items: center;
          justify-content: center;
          font-size: inherit;
          font-weight: inherit;
          line-height: inherit;
          letter-spacing: 0;
          white-space: nowrap;
        }

        .closingDescription {
          max-width: 540px;
          margin: 27px auto 36px;
          color: #777770;
          font-size: 12px;
          line-height: 2.1;
        }

        .closingLogo {
          font-size: clamp(24px, 3.8vw, 39px);
        }

        /* =========================================
           TABLET
           Fruitsページと同じサイズ感
        ========================================= */

        @media (max-width: 900px) {
          .pageContainer {
            width: min(1180px, calc(100% - 48px));
          }

          .aboutHero {
            padding: 150px 0 120px;
          }

          .aboutEyebrow {
            margin-bottom: 30px;
            font-size: 12px;
          }

          .aboutTitle {
            max-width: 1000px;
            font-size: clamp(54px, 8vw, 104px);
          }

          .aboutIntroduction {
            max-width: 760px;
            margin-top: 48px;
            font-size: clamp(17px, 2vw, 22px);
          }

          .aboutIntroduction p {
            margin-bottom: 25px;
          }

          .aboutMeta {
            gap: 18px;
            margin-top: 52px;
            font-size: 13px;
          }

          .metaDivider {
            width: 36px;
          }

          .aboutContent {
            padding: 140px 0 160px;
          }

          .visitorNotice {
            grid-template-columns: minmax(0, 1fr) 250px;
            gap: 50px;
            padding: 58px;
            border-radius: 28px;
          }

          .visitorNoticeLabel {
            margin-bottom: 22px;
            font-size: 11px;
          }

          .visitorNoticeTitle {
            font-size: clamp(42px, 6vw, 72px);
          }

          .visitorNoticeText {
            max-width: 720px;
            margin: 31px 0 36px;
            font-size: 15px;
          }

          .darkButton {
            min-height: 54px;
            gap: 13px;
            padding: 9px 10px 9px 21px;
            font-size: 13px;
          }

          .buttonArrow {
            width: 35px;
            height: 35px;
            font-size: 15px;
          }

          .visitorNoticeDecoration {
            min-height: 230px;
          }

          .visitorNoticeDecoration::before {
            width: 220px;
            height: 220px;
          }

          .visitorNoticeDecoration::after {
            width: 160px;
            height: 160px;
          }

          .decorationBee {
            font-size: 88px;
          }

          .locationsSection,
          .farmInformation {
            padding-top: 145px;
          }

          .sectionHeader {
            grid-template-columns: 1fr;
            gap: 24px;
            margin-bottom: 48px;
            padding-bottom: 32px;
          }

          .sectionEnglish {
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

          .locationGrid {
            gap: 20px;
          }

          .locationCard {
            padding: 35px;
            border-radius: 24px;
          }

          .locationCardHeader {
            margin-bottom: 30px;
          }

          .locationLabel,
          .locationNumber {
            font-size: 11px;
          }

          .locationTitle {
            font-size: clamp(27px, 3.5vw, 36px);
          }

          .locationType {
            margin-top: 21px;
            font-size: 15px;
          }

          .locationAddress {
            margin-top: 16px;
            font-size: 15px;
          }

          .farmNote {
            margin-top: 26px;
            padding: 18px 20px;
            border-radius: 17px;
            font-size: 13px;
          }

          .mapWrapper {
            padding-top: 34px;
          }

          .mapFrame {
            height: 330px;
            border-radius: 20px;
            clip-path: inset(0 round 20px);
          }

          .mapLink {
            margin-top: 24px;
            padding-top: 22px;
            font-size: 13px;
          }

          .informationGrid {
            gap: 20px;
          }

          .informationItem {
            padding: 31px;
            border-radius: 22px;
          }

          .informationLabel {
            margin-bottom: 30px;
            font-size: 11px;
          }

          .informationTitle {
            margin-bottom: 9px;
            font-size: 13px;
          }

          .informationValue {
            font-size: 20px;
          }

          .aboutClosing {
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

          .closingLogo {
            font-size: clamp(30px, 5vw, 52px);
          }
        }

        /* =========================================
           MOBILE BASE
        ========================================= */

        @media (max-width: 768px) {
          .aboutPage {
            padding: 0 !important;
          }

          .aboutHero,
          .aboutContent,
          .aboutClosing {
            padding-right: 0 !important;
            padding-left: 0 !important;
          }

          .aboutTitle {
            font-size: clamp(48px, 15vw, 72px) !important;
            line-height: 1.13 !important;
          }

          .sectionTitle {
            font-size: 48px !important;
            line-height: 1.2 !important;
          }

          .visitorNoticeTitle {
            font-size: clamp(40px, 10vw, 58px) !important;
          }

          .closingTitle {
            font-size: clamp(36px, 10vw, 54px) !important;
            line-height: 1.35 !important;
          }

          .visitorNotice {
            grid-template-columns: 1fr;
          }

          .visitorNoticeDecoration {
            display: none;
          }

          .locationGrid {
            grid-template-columns: 1fr;
          }

          .informationGrid {
            grid-template-columns: 1fr;
          }
        }

        /* =========================================
           SMARTPHONE
           Fruitsページと同じ左右16px
        ========================================= */

        @media (max-width: 680px) {
          .pageContainer {
            width: min(100% - 32px, 1180px);
          }

          .aboutHero {
            padding-top: 105px !important;
            padding-bottom: 85px !important;
          }

          .aboutIntroduction {
            margin-top: 34px;
            font-size: 16px;
            line-height: 1.9;
          }

          .aboutIntroduction br {
            display: none;
          }

          .aboutMeta {
            margin-top: 38px;
          }

          .aboutContent {
            padding-top: 90px;
            padding-bottom: 110px;
          }

          .visitorNotice {
            padding: 31px 25px;
            border-radius: 22px;
          }

          .visitorNoticeLabel {
            margin-bottom: 17px;
          }

          .visitorNoticeTitle {
            font-size: 38px !important;
          }

          .visitorNoticeText {
            margin: 24px 0 28px;
            font-size: 14px;
          }

          .visitorNoticeText br {
            display: none;
          }

          .darkButton {
            width: 100%;
            justify-content: space-between;
          }

          .locationsSection,
          .farmInformation {
            padding-top: 90px;
          }

          .sectionHeader {
            margin-bottom: 28px;
          }

          .sectionDescription br {
            display: none;
          }

          .locationGrid {
            gap: 20px;
          }

          .locationCard {
            padding: 25px 23px 23px;
            border-radius: 20px;
          }

          .locationCardHeader {
            margin-bottom: 24px;
          }

          .locationTitle {
            font-size: 28px;
          }

          .locationType,
          .locationAddress {
            font-size: 14px;
          }

          .farmNote {
            font-size: 12px;
          }

          .mapWrapper {
            padding-top: 27px;
          }

          .mapFrame {
            height: 280px;
            border-radius: 18px;
            clip-path: inset(0 round 18px);
          }

          .mapLink {
            font-size: 12px;
          }

          .informationGrid {
            gap: 14px;
          }

          .informationItem {
            padding: 24px 22px;
            border-radius: 18px;
          }

          .informationLabel {
            margin-bottom: 20px;
            font-size: 10px;
          }

          .informationTitle {
            font-size: 12px;
          }

          .informationValue {
            font-size: 18px;
          }

          .aboutClosing {
            padding-top: 95px !important;
            padding-bottom: 110px !important;
          }

          .closingDescription br {
            display: none;
          }
        }

        @media (max-width: 480px) {
          .aboutPage {
            padding-top: 0 !important;
            padding-bottom: 0 !important;
          }

          .aboutEyebrow {
            font-size: 10px;
          }

          .aboutIntroduction {
            font-size: 15px;
          }

          .aboutIntroduction p {
            margin-bottom: 22px;
          }

          .visitorNotice {
            padding-right: 22px;
            padding-left: 22px;
          }

          .mapFrame {
            height: 250px;
          }

          .colorBeeMyFriends {
            font-size: clamp(29px, 9vw, 42px);
          }
        }

        @media (max-width: 420px) {
          .aboutTitle {
            font-size: 46px !important;
          }

          .sectionTitle {
            font-size: 42px !important;
          }

          .visitorNoticeTitle {
            font-size: 35px !important;
          }

          .visitorNotice {
            padding: 27px 20px;
          }

          .darkButton {
            padding-left: 16px;
            font-size: 12px;
          }

          .buttonArrow {
            width: 32px;
            height: 32px;
            font-size: 14px;
          }

          .locationCard {
            padding-right: 20px;
            padding-left: 20px;
          }

          .locationTitle {
            font-size: 26px;
          }

          .mapFrame {
            height: 230px;
          }

          .closingTitle {
            font-size: 34px !important;
          }
        }

        @media (max-width: 360px) {
          .aboutTitle {
            font-size: 42px !important;
          }

          .visitorNoticeTitle {
            font-size: 32px !important;
          }

          .sectionTitle {
            font-size: 39px !important;
          }

          .mapFrame {
            height: 215px;
          }

          .colorBeeMyFriends {
            font-size: 8vw;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .darkButton,
          .buttonArrow,
          .locationCard,
          .mapLink,
          .informationLink {
            transition: none;
          }
        }
      `}</style>
    </>
  );
}