import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "みつばち果樹園について | みつばち果樹園",
  description:
    "山形県東根市のみつばち果樹園について、直営店・農園の所在地や連絡先をご案内します。",
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

function ColorLogo() {
  const letters = ["み", "つ", "ば", "ち", "果", "樹", "園"];

  return (
    <span className="color-logo" aria-label="みつばち果樹園">
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
    <span className="color-bee-my-friends" aria-label="Bee my friends!">
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
    "https://www.google.com/maps/place/みつばちフルーツ/@38.4585069,140.3824658,808m/data=!3m2!1e3!4b1!4m6!3m5!1s0x5f8bddb815aa36a5:0xa3af7357704955ec!8m2!3d38.4585069!4d140.3824658!16s%2Fg%2F11pdn5drk_?entry=ttu";

  const farmGoogleMapsUrl =
    "https://www.google.com/maps/search/?api=1&query=山形県東根市若木通り1-13";

  return (
    <>
      <main className="about-page">
        <div className="about-container">
          {/* ページタイトル */}
          <section className="about-hero">
            <p className="about-label">ABOUT</p>

            <h1 className="about-title">
              <ColorLogo />
            </h1>
          </section>

          {/* 紹介 */}
          <section className="about-introduction">
            <p className="introduction-lead">
              みつばち果樹園は、
              <br />
              <strong>GI「東根さくらんぼ」</strong>
              <br />
              生産者です。
            </p>

            <div className="introduction-copy">
              <p>
                日本一のさくらんぼ生産量を誇るまち、
                山形県東根市から、もぎたてのおいしさを全国へお届けしています。
              </p>

              <p>
                四季の移ろいを感じながら自然と向き合い、
                一粒一粒の果実を大切に育てています。
              </p>
            </div>
          </section>

          {/* 来店案内 */}
          <section className="visitor-notice">
            <div className="visitor-notice-heading">
              <p className="visitor-notice-label">VISITOR INFORMATION</p>

              <h2 className="visitor-notice-title">
                お店は、
                <br />
                みつばちフルーツです。
              </h2>
            </div>

            <div className="visitor-notice-content">
              <p className="visitor-notice-text">
                ナビで「みつばち果樹園」と検索すると、
                農園・作業場へ案内される場合があります。
                <br />
                <br />
                ご来店・お買い物のお客様は、
                <strong>「みつばちフルーツ」</strong>
                へお越しください。
              </p>

              <a
                href={shopGoogleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="dark-button"
              >
                <span>Google Mapsでお店を開く</span>
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </section>

          {/* 場所 */}
          <section className="location-section">
            <div className="section-heading">
              <div>
                <p className="section-label">LOCATION</p>
                <h2 className="section-title">場所のご案内</h2>
              </div>

              <p className="section-description">
                ご来店のお客様は直営店へ。
                <br />
                農園は収穫・発送作業を行う場所です。
              </p>
            </div>

            <div className="location-grid">
              {/* 直営店 */}
              <article className="location-card">
                <div className="location-card-header">
                  <p className="location-label">SHOP</p>
                  <span className="location-number">01</span>
                </div>

                <h3 className="location-title">
                  みつばち
                  <br />
                  フルーツ
                </h3>

                <p className="location-role">直営店・ご来店はこちら</p>

                <address className="location-address">
                  〒999-3701
                  <br />
                  山形県東根市東根甲4694-1
                </address>

                <div className="map-wrapper">
                  <iframe
                    src="https://www.google.com/maps?q=山形県東根市東根甲4694-1&output=embed"
                    title="みつばちフルーツ Googleマップ"
                    className="map-frame"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>

                <a
                  href={shopGoogleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="map-link"
                >
                  <span>Google Mapsで開く</span>
                  <span aria-hidden="true">↗</span>
                </a>
              </article>

              {/* 農園 */}
              <article className="location-card">
                <div className="location-card-header">
                  <p className="location-label">FARM</p>
                  <span className="location-number">02</span>
                </div>

                <h3 className="location-title">
                  みつばち
                  <br />
                  果樹園
                </h3>

                <p className="location-role">農園・作業場</p>

                <address className="location-address">
                  〒999-3751
                  <br />
                  山形県東根市若木通り1-13
                </address>

                <p className="farm-note">
                  こちらは収穫・発送作業を行う農園です。
                  直売でお買い求めのお客様は、
                  みつばちフルーツへお越しください。
                </p>

                <div className="map-wrapper">
                  <iframe
                    src="https://www.google.com/maps?q=山形県東根市若木通り1-13&output=embed"
                    title="みつばち果樹園 Googleマップ"
                    className="map-frame"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>

                <a
                  href={farmGoogleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="map-link"
                >
                  <span>Google Mapsで開く</span>
                  <span aria-hidden="true">↗</span>
                </a>
              </article>
            </div>
          </section>

          {/* 基本情報 */}
          <section className="farm-information">
            <div className="section-heading information-heading">
              <div>
                <p className="section-label">INFORMATION</p>
                <h2 className="section-title">果樹園情報</h2>
              </div>

              <p className="section-description">
                お問い合わせの際は、
                <br />
                下記の連絡先をご利用ください。
              </p>
            </div>

            <div className="information-grid">
              <div className="information-item">
                <p className="information-number">01</p>
                <p className="information-label">園主</p>
                <p className="information-value">中川 敏浩</p>
              </div>

              <div className="information-item">
                <p className="information-number">02</p>
                <p className="information-label">TEL</p>

                <a
                  href="tel:09082515523"
                  className="information-value information-link"
                >
                  090-8251-5523
                </a>
              </div>

              <div className="information-item">
                <p className="information-number">03</p>
                <p className="information-label">FAX</p>
                <p className="information-value">0237-51-4041</p>
              </div>
            </div>
          </section>

          {/* クロージング */}
          <section className="about-closing">
            <p className="closing-label">THANK YOU</p>

            <h2 className="closing-title">
              <ColorBeeMyFriends />
            </h2>

            <p className="closing-description">
              また会いたくなる、果樹園でありますように。
            </p>
          </section>
        </div>
      </main>

      <style>{`
        * {
          box-sizing: border-box;
        }

        /*
         * デスクトップ
         * 元デザインの約75%を基準にコンパクト化
         */
        .about-page {
          min-height: 100vh;
          padding: 96px 0 90px;
          overflow: hidden;
          background:
            radial-gradient(
              circle at 88% 5%,
              rgba(255, 222, 89, 0.14),
              transparent 22%
            ),
            radial-gradient(
              circle at 4% 32%,
              rgba(0, 191, 99, 0.06),
              transparent 22%
            ),
            #fafaf9;
          color: #3f3f3a;
        }

        .about-container {
          width: min(960px, calc(100% - 64px));
          margin: 0 auto;
        }

        .about-hero {
          margin-bottom: 78px;
        }

        .about-label,
        .section-label {
          margin: 0 0 21px;
          color: #92928b;
          font-size: 9px;
          font-weight: 700;
          line-height: 1.5;
          letter-spacing: 0.25em;
        }

        .about-title {
          margin: 0;
          line-height: 1;
        }

        .color-logo {
          display: inline-flex;
          max-width: 100%;
          align-items: center;
          font-size: clamp(46px, 5.4vw, 74px);
          font-weight: 400;
          line-height: 1;
          letter-spacing: 0;
          white-space: nowrap;
        }

        .about-introduction {
          display: grid;
          grid-template-columns:
            minmax(270px, 0.85fr)
            minmax(0, 1.15fr);
          gap: clamp(48px, 7vw, 98px);
          align-items: start;
          padding: 57px 0 78px;
          border-top: 1px solid #deddd7;
        }

        .introduction-lead {
          margin: 0;
          color: #31312d;
          font-size: clamp(24px, 2.5vw, 33px);
          font-weight: 400;
          line-height: 1.55;
          letter-spacing: -0.035em;
        }

        .introduction-lead strong {
          font-weight: 700;
        }

        .introduction-copy {
          color: #696963;
          font-size: clamp(14px, 1.3vw, 16px);
          line-height: 2.05;
        }

        .introduction-copy p {
          margin: 0;
        }

        .introduction-copy p + p {
          margin-top: 23px;
        }

        .visitor-notice {
          display: grid;
          grid-template-columns:
            minmax(255px, 0.9fr)
            minmax(0, 1.1fr);
          gap: clamp(38px, 6vw, 82px);
          align-items: end;
          margin-bottom: 96px;
          padding: 42px;
          border: 1px solid #f1e4ad;
          border-radius: 26px;
          background:
            radial-gradient(
              circle at 90% 10%,
              rgba(255, 222, 89, 0.34),
              transparent 38%
            ),
            #fff8d6;
          color: #76520a;
          box-shadow: 0 18px 52px rgba(83, 68, 22, 0.07);
        }

        .visitor-notice-label {
          margin: 0 0 15px;
          color: #997520;
          font-size: 8px;
          font-weight: 700;
          line-height: 1.5;
          letter-spacing: 0.2em;
        }

        .visitor-notice-title {
          margin: 0;
          color: #5f420a;
          font-size: clamp(30px, 3.5vw, 47px);
          font-weight: 400;
          line-height: 1.25;
          letter-spacing: -0.045em;
        }

        .visitor-notice-content {
          min-width: 0;
        }

        .visitor-notice-text {
          margin: 0 0 23px;
          color: #765b20;
          font-size: 12px;
          line-height: 2;
        }

        .dark-button {
          display: inline-flex;
          min-height: 42px;
          align-items: center;
          justify-content: center;
          gap: 18px;
          padding: 0 20px;
          border-radius: 999px;
          background: #343431;
          color: #ffffff;
          font-size: 11px;
          font-weight: 700;
          line-height: 1.5;
          text-align: center;
          text-decoration: none;
          box-shadow: 0 9px 23px rgba(52, 52, 49, 0.14);
          transition:
            transform 180ms ease,
            opacity 180ms ease;
        }

        .dark-button:hover {
          opacity: 0.88;
          transform: translateY(-2px);
        }

        .location-section {
          margin-bottom: 96px;
        }

        .section-heading {
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(240px, 345px);
          gap: 46px;
          align-items: end;
          margin-bottom: 35px;
          padding-bottom: 23px;
          border-bottom: 1px solid #deddd7;
        }

        .section-label {
          margin-bottom: 9px;
          font-size: 8px;
        }

        .section-title {
          margin: 0;
          color: #31312d;
          font-size: clamp(32px, 3.8vw, 50px);
          font-weight: 400;
          line-height: 1.2;
          letter-spacing: -0.045em;
        }

        .section-description {
          margin: 0;
          color: #777770;
          font-size: 11px;
          line-height: 2;
        }

        .location-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 23px;
          align-items: stretch;
        }

        .location-card {
          display: flex;
          min-width: 0;
          flex-direction: column;
          padding: 27px;
          overflow: hidden;
          border: 1px solid #e5e4de;
          border-radius: 23px;
          background: rgba(255, 255, 255, 0.94);
          box-shadow: 0 14px 40px rgba(52, 52, 45, 0.05);
        }

        .location-card-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 15px;
          margin-bottom: 23px;
        }

        .location-label {
          margin: 0;
          color: #8d8d86;
          font-size: 8px;
          font-weight: 700;
          line-height: 1.5;
          letter-spacing: 0.22em;
        }

        .location-number {
          color: #b1b0aa;
          font-size: 8px;
          font-weight: 700;
          letter-spacing: 0.14em;
        }

        .location-title {
          margin: 0 0 18px;
          color: #30302c;
          font-size: clamp(29px, 3.2vw, 42px);
          font-weight: 400;
          line-height: 1.18;
          letter-spacing: -0.05em;
        }

        .location-role {
          margin: 0 0 12px;
          color: #454540;
          font-size: 12px;
          font-weight: 700;
          line-height: 1.7;
        }

        .location-address {
          margin: 0;
          color: #777770;
          font-size: 11px;
          font-style: normal;
          line-height: 1.9;
        }

        .farm-note {
          margin: 18px 0 0;
          padding: 13px 15px;
          border-radius: 13px;
          background: #f5f5f1;
          color: #777770;
          font-size: 10px;
          line-height: 1.8;
        }

        .map-wrapper {
          width: 100%;
          margin-top: auto;
          padding-top: 23px;
          overflow: hidden;
          border-radius: 16px;
        }

        .map-frame {
          display: block;
          width: 100%;
          height: 255px;
          overflow: hidden;
          border: 0;
          border-radius: 16px;
          filter: saturate(0.75);
        }

        .map-link {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 15px;
          margin-top: 17px;
          padding-top: 15px;
          border-top: 1px solid #ecece7;
          color: #3f3f3a;
          font-size: 11px;
          font-weight: 700;
          line-height: 1.6;
          text-decoration: none;
        }

        .map-link span:last-child {
          display: inline-flex;
          width: 30px;
          height: 30px;
          flex-shrink: 0;
          align-items: center;
          justify-content: center;
          border: 1px solid #deddd7;
          border-radius: 999px;
          font-size: 12px;
          transition:
            background 180ms ease,
            color 180ms ease;
        }

        .map-link:hover span:last-child {
          background: #343431;
          color: #ffffff;
        }

        .farm-information {
          padding-top: 84px;
          border-top: 1px solid #deddd7;
        }

        .information-heading {
          border-bottom: 0;
        }

        .information-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 15px;
        }

        .information-item {
          min-width: 0;
          min-height: 158px;
          padding: 21px;
          border: 1px solid #e5e4de;
          border-radius: 18px;
          background: #ffffff;
          box-shadow: 0 11px 30px rgba(52, 52, 45, 0.04);
        }

        .information-number {
          margin: 0 0 35px;
          color: #b0afa9;
          font-size: 8px;
          font-weight: 700;
          line-height: 1.5;
          letter-spacing: 0.16em;
        }

        .information-label {
          margin: 0 0 8px;
          color: #8b8b84;
          font-size: 8px;
          font-weight: 700;
          line-height: 1.5;
          letter-spacing: 0.18em;
        }

        .information-value {
          display: block;
          margin: 0;
          overflow-wrap: anywhere;
          color: #30302c;
          font-size: clamp(15px, 1.5vw, 18px);
          font-weight: 700;
          line-height: 1.55;
        }

        .information-link {
          text-decoration: none;
        }

        .information-link:hover {
          text-decoration: underline;
        }

        .about-closing {
          margin-top: 96px;
          padding: 78px 18px 23px;
          border-top: 1px solid #deddd7;
          text-align: center;
        }

        .closing-label {
          margin: 0 0 18px;
          color: #92928b;
          font-size: 8px;
          font-weight: 700;
          line-height: 1.5;
          letter-spacing: 0.24em;
        }

        .closing-title {
          margin: 0 0 18px;
          font-size: clamp(30px, 4.1vw, 51px);
          font-weight: 700;
          line-height: 1.2;
        }

        .color-bee-my-friends {
          display: inline-flex;
          max-width: 100%;
          align-items: center;
          justify-content: center;
          line-height: 1.15;
          letter-spacing: 0;
          white-space: nowrap;
        }

        .closing-description {
          max-width: 465px;
          margin: 0 auto;
          color: #777770;
          font-size: 12px;
          line-height: 2;
        }

        /*
         * タブレット
         * 900px以下は元のデザインを維持
         */
        @media (max-width: 900px) {
          .about-page {
            padding: 104px 0 90px;
          }

          .about-container {
            width: min(100% - 40px, 1180px);
          }

          .about-hero {
            margin-bottom: 78px;
          }

          .about-label,
          .section-label {
            margin-bottom: 28px;
            font-size: 12px;
          }

          .color-logo {
            font-size: clamp(58px, 7.2vw, 98px);
          }

          .about-introduction {
            grid-template-columns: 1fr;
            gap: 40px;
            padding: 62px 0 84px;
          }

          .introduction-lead {
            max-width: 680px;
            font-size: clamp(30px, 3.3vw, 44px);
          }

          .introduction-copy {
            max-width: 680px;
            font-size: clamp(17px, 1.7vw, 21px);
          }

          .introduction-copy p + p {
            margin-top: 30px;
          }

          .visitor-notice {
            grid-template-columns: 1fr;
            gap: 38px;
            margin-bottom: 100px;
            padding: 44px;
            border-radius: 34px;
          }

          .visitor-notice-label {
            margin-bottom: 20px;
            font-size: 11px;
          }

          .visitor-notice-title {
            font-size: clamp(38px, 4.7vw, 62px);
          }

          .visitor-notice-text {
            margin-bottom: 30px;
            font-size: 16px;
          }

          .dark-button {
            min-height: 54px;
            gap: 24px;
            padding: 0 25px;
            font-size: 14px;
          }

          .location-section {
            margin-bottom: 128px;
          }

          .section-heading {
            grid-template-columns: 1fr;
            gap: 22px;
            margin-bottom: 46px;
            padding-bottom: 30px;
          }

          .section-label {
            margin-bottom: 12px;
            font-size: 11px;
          }

          .section-title {
            font-size: clamp(40px, 5vw, 66px);
          }

          .section-description {
            font-size: 14px;
          }

          .location-grid {
            grid-template-columns: 1fr;
            gap: 24px;
          }

          .location-card {
            padding: 32px;
            border-radius: 30px;
          }

          .location-card-header {
            margin-bottom: 30px;
          }

          .location-label,
          .location-number {
            font-size: 11px;
          }

          .location-title {
            margin-bottom: 24px;
            font-size: clamp(36px, 4.3vw, 56px);
          }

          .location-title br {
            display: none;
          }

          .location-role {
            margin-bottom: 16px;
            font-size: 16px;
          }

          .location-address {
            font-size: 14px;
          }

          .farm-note {
            margin-top: 24px;
            padding: 17px 19px;
            border-radius: 17px;
            font-size: 13px;
          }

          .map-wrapper {
            padding-top: 30px;
            border-radius: 21px;
          }

          .map-frame {
            height: 360px;
            border-radius: 21px;
          }

          .map-link {
            gap: 20px;
            margin-top: 22px;
            padding-top: 20px;
            font-size: 14px;
          }

          .map-link span:last-child {
            width: 38px;
            height: 38px;
            font-size: inherit;
          }

          .farm-information {
            padding-top: 112px;
          }

          .information-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .information-item {
            min-height: auto;
            padding: 28px;
            border-radius: 24px;
          }

          .information-number {
            margin-bottom: 30px;
            font-size: 10px;
          }

          .information-label {
            margin-bottom: 10px;
            font-size: 11px;
          }

          .information-value {
            font-size: clamp(18px, 2vw, 24px);
          }

          .about-closing {
            margin-top: 128px;
            padding: 104px 24px 30px;
          }

          .closing-label {
            margin-bottom: 24px;
            font-size: 11px;
          }

          .closing-title {
            margin-bottom: 24px;
            font-size: clamp(38px, 5.5vw, 68px);
          }

          .closing-description {
            max-width: 620px;
            font-size: 15px;
          }
        }

        /*
         * スマートフォン
         * 現在のデザインを維持
         */
        @media (max-width: 560px) {
          .about-page {
            padding: 76px 0 68px;
          }

          .about-container {
            width: calc(100% - 32px);
          }

          .about-hero {
            margin-bottom: 60px;
          }

          .about-label {
            margin-bottom: 20px;
            font-size: 10px;
          }

          .color-logo {
            font-size: clamp(40px, 12.8vw, 57px);
          }

          .about-introduction {
            gap: 32px;
            padding: 48px 0 66px;
          }

          .introduction-lead {
            font-size: clamp(27px, 8vw, 36px);
            line-height: 1.55;
          }

          .introduction-copy {
            font-size: 16px;
            line-height: 1.95;
          }

          .visitor-notice {
            gap: 30px;
            margin-bottom: 80px;
            padding: 30px 24px;
            border-radius: 25px;
          }

          .visitor-notice-title {
            font-size: clamp(34px, 10vw, 46px);
          }

          .visitor-notice-text {
            font-size: 15px;
            line-height: 1.9;
          }

          .visitor-notice-text br {
            display: none;
          }

          .dark-button {
            width: 100%;
            gap: 16px;
            padding: 0 18px;
          }

          .location-section {
            margin-bottom: 86px;
          }

          .section-heading {
            margin-bottom: 28px;
          }

          .section-title {
            font-size: clamp(35px, 11vw, 48px);
          }

          .section-description br {
            display: none;
          }

          .location-card {
            padding: 25px 21px;
            border-radius: 23px;
          }

          .location-card-header {
            margin-bottom: 24px;
          }

          .location-title {
            font-size: clamp(34px, 11vw, 46px);
          }

          .location-title br {
            display: block;
          }

          .farm-note {
            padding: 15px;
          }

          .map-wrapper {
            padding-top: 24px;
            border-radius: 17px;
          }

          .map-frame {
            height: 250px;
            border-radius: 17px;
          }

          .farm-information {
            padding-top: 78px;
          }

          .information-item {
            padding: 23px;
            border-radius: 20px;
          }

          .information-number {
            margin-bottom: 26px;
          }

          .about-closing {
            margin-top: 88px;
            padding: 76px 0 10px;
          }

          .closing-title {
            font-size: clamp(31px, 9.5vw, 44px);
          }

          .closing-description {
            font-size: 14px;
          }
        }

        @media (max-width: 380px) {
          .about-container {
            width: calc(100% - 28px);
          }

          .color-logo {
            font-size: 11.7vw;
          }

          .location-card,
          .visitor-notice {
            padding-right: 18px;
            padding-left: 18px;
          }

          .map-frame {
            height: 220px;
          }

          .closing-title {
            font-size: 29px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .dark-button,
          .map-link span:last-child,
          .information-link {
            transition: none;
          }
        }
      `}</style>
    </>
  );
}