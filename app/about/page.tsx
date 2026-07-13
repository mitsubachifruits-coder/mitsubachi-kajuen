function ColorLogo({ className = "" }: { className?: string }) {
  const letters = [
    { text: "み", color: "#ff3131" },
    { text: "つ", color: "#006dff" },
    { text: "ば", color: "#00bf63" },
    { text: "ち", color: "#ffde59" },
    { text: "果", color: "#8c52ff" },
    { text: "樹", color: "#00a1ff" },
    { text: "園", color: "#ff66c4" },
  ];

  return (
    <span className={`color-logo ${className}`}>
      {letters.map((letter) => (
        <span key={letter.text} style={{ color: letter.color }}>
          {letter.text}
        </span>
      ))}
    </span>
  );
}

export default function About() {
  const shopGoogleMapsUrl =
    "https://www.google.com/maps/place/みつばちフルーツ/@38.4585069,140.3824658,808m/data=!3m2!1e3!4b1!4m6!3m5!1s0x5f8bddb815aa36a5:0xa3af7357704955ec!8m2!3d38.4585069!4d140.3824658!16s%2Fg%2F11pdn5drk_?entry=ttu&g_ep=EgoyMDI2MDcwOC4wIKXMDSoASAFQAw%3D%3D";

  return (
    <>
      <main className="about-page">
        <section className="about-container">
          <p className="about-label">ABOUT</p>

          <h1 className="about-title">
            <ColorLogo />
          </h1>

          <div className="about-body">
            <div className="about-introduction">
              <p>
                みつばち果樹園は、
                <strong>GI「東根さくらんぼ」</strong>
                生産者です。
              </p>

              <p>
                日本一のさくらんぼ生産量を誇るまち、
                <br />
                山形県東根市より、
                <br />
                もぎたてのおいしさを全国へお届けしています。
              </p>

              <p>
                四季の移ろいを感じながら、自然と向き合い、
                一粒一粒を大切に育てています。
              </p>
            </div>

            <section className="visitor-notice">
              <p className="visitor-notice-label">ご来店のお客様へ</p>

              <h2 className="visitor-notice-title">
                お店は、
                <br />
                みつばちフルーツです。
              </h2>

              <p className="visitor-notice-text">
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
                className="dark-button"
              >
                Google Mapsでお店を開く →
              </a>
            </section>

            <div className="location-grid">
              <section className="location-card">
                <p className="location-label">SHOP</p>

                <h2 className="location-title">みつばちフルーツ</h2>

                <p>
                  <strong>直営店・ご来店はこちら</strong>
                </p>

                <p>
                  〒999-3701
                  <br />
                  山形県東根市東根甲4694-1
                </p>

                <div className="map-wrapper">
                  <iframe
                    src="https://www.google.com/maps?q=山形県東根市東根甲4694-1&output=embed"
                    title="みつばちフルーツ Googleマップ"
                    width="100%"
                    height="300"
                    className="map-frame"
                    loading="lazy"
                  />
                </div>

                <a
                  href={shopGoogleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="map-link"
                >
                  Google Mapsで開く →
                </a>
              </section>

              <section className="location-card">
                <p className="location-label">FARM</p>

                <h2 className="location-title">みつばち果樹園</h2>

                <p>
                  <strong>農園・作業場</strong>
                </p>

                <p>
                  〒999-3751
                  <br />
                  山形県東根市若木通り1-13
                </p>

                <p className="farm-note">
                  ※こちらは収穫・発送作業を行う農園です。
                  <br />
                  直売でお買い求めのお客様は、
                  みつばちフルーツへお越しください。
                </p>

                <div className="map-wrapper">
                  <iframe
                    src="https://www.google.com/maps?q=山形県東根市若木通り1-13&output=embed"
                    title="みつばち果樹園 Googleマップ"
                    width="100%"
                    height="300"
                    className="map-frame"
                    loading="lazy"
                  />
                </div>

                <a
                  href="https://www.google.com/maps/search/?api=1&query=山形県東根市若木通り1-13"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="map-link"
                >
                  Google Mapsで開く →
                </a>
              </section>
            </div>

            <hr className="about-divider" />

            <section className="farm-information">
              <h2 className="farm-information-title">みつばち果樹園</h2>

              <div className="information-grid">
                <div className="information-item">
                  <p className="information-label">園主</p>
                  <p className="information-value">中川 敏浩</p>
                </div>

                <div className="information-item">
                  <p className="information-label">TEL</p>

                  <a
                    href="tel:09082515523"
                    className="information-value information-link"
                  >
                    090-8251-5523
                  </a>
                </div>

                <div className="information-item">
                  <p className="information-label">FAX</p>
                  <p className="information-value">0237-51-4041</p>
                </div>
              </div>
            </section>

            <section className="about-closing">
              <p className="closing-label">FROM OUR FARM</p>

              <h2 className="closing-title">
                旬のおいしさを、
                <br />
                果樹園からまっすぐに。
              </h2>

              <p className="closing-description">
                天候や生育状況により、収穫時期や販売数量が変わる場合があります。
                <br className="desktop-break" />
                最新の販売情報は、ホームページやInstagramでお知らせします。
              </p>
            </section>
          </div>
        </section>
      </main>

      <style>{`
        * {
          box-sizing: border-box;
        }

        .about-page {
          min-height: 100vh;
          padding: 120px 24px 80px;
          background: #fafaf9;
          overflow: hidden;
        }

        .about-container {
          width: 100%;
          max-width: 980px;
          margin: 0 auto;
        }

        .about-label {
          margin: 0 0 24px;
          color: #888;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.25em;
        }

        .about-title {
          margin: 0 0 56px;
          line-height: 1.1;
        }

        .color-logo {
          display: inline-flex;
          align-items: center;
          max-width: 100%;
          font-size: clamp(42px, 9vw, 88.8px);
          line-height: 1;
          letter-spacing: 0;
          white-space: nowrap;
        }

        .about-body {
          color: #4f4f4f;
          font-size: 18px;
          line-height: 2.1;
        }

        .about-body p {
          overflow-wrap: break-word;
        }

        .about-introduction {
          max-width: 760px;
        }

        .about-introduction p {
          margin: 0 0 28px;
        }

        .visitor-notice {
          margin: 56px 0 72px;
          padding: 32px;
          border-radius: 28px;
          background: #fff8d6;
          color: #8a5a00;
          box-shadow: 0 18px 50px rgba(0, 0, 0, 0.06);
        }

        .visitor-notice-label {
          margin: 0 0 16px;
          font-size: 15px;
          font-weight: 700;
          letter-spacing: 0.12em;
        }

        .visitor-notice-title {
          margin: 0 0 20px;
          color: #5f3d00;
          font-size: clamp(28px, 5vw, 46px);
          line-height: 1.25;
        }

        .visitor-notice-text {
          margin: 0 0 24px;
        }

        .dark-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 52px;
          padding: 14px 24px;
          border-radius: 999px;
          background: #2f2f2f;
          color: #fff;
          font-size: 15px;
          font-weight: 700;
          line-height: 1.5;
          text-align: center;
          text-decoration: none;
          transition:
            transform 0.2s ease,
            opacity 0.2s ease;
        }

        .dark-button:hover {
          opacity: 0.86;
          transform: translateY(-2px);
        }

        .location-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 28px;
          margin-bottom: 72px;
          align-items: stretch;
        }

        .location-card {
          display: flex;
          flex-direction: column;
          min-width: 0;
          padding: 32px;
          border-radius: 28px;
          background: #fff;
          box-shadow: 0 18px 50px rgba(0, 0, 0, 0.06);
        }

        .location-card > p {
          margin-top: 0;
        }

        .location-label {
          margin: 0 0 12px;
          color: #888;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.18em;
        }

        .location-title {
          margin: 0 0 20px;
          color: #2f2f2f;
          font-size: clamp(25px, 3.2vw, 30px);
          line-height: 1.4;
        }

        .farm-note {
          padding: 14px 18px;
          border-radius: 18px;
          background: #fafaf9;
          color: #666;
          font-size: 15px;
          line-height: 1.8;
        }

        .map-wrapper {
          width: 100%;
          margin-top: auto;
          padding-top: 24px;
          border-radius: 22px;
          overflow: hidden;
        }

        .map-frame {
          display: block;
          width: 100%;
          height: 300px;
          border: 0;
        }

        .map-link {
          display: inline-block;
          margin-top: 20px;
          color: #2f2f2f;
          font-size: 15px;
          font-weight: 700;
          line-height: 1.6;
          text-decoration: none;
        }

        .map-link:hover {
          text-decoration: underline;
        }

        .about-divider {
          margin: 64px 0;
          border: 0;
          border-top: 1px solid #ddd;
        }

        .farm-information-title {
          margin: 0 0 32px;
          color: #2f2f2f;
          font-size: 28px;
          line-height: 1.4;
        }

        .information-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 20px;
        }

        .information-item {
          padding: 24px;
          border-radius: 22px;
          background: #fff;
        }

        .information-label {
          margin: 0 0 8px;
          color: #888;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.16em;
          line-height: 1.5;
        }

        .information-value {
          display: block;
          margin: 0;
          color: #2f2f2f;
          font-size: 17px;
          font-weight: 700;
          line-height: 1.7;
        }

        .information-link {
          text-decoration: none;
        }

        .information-link:hover {
          text-decoration: underline;
        }

        .about-closing {
          margin-top: 96px;
          padding: 72px 24px 8px;
          border-top: 1px solid #ddd;
          text-align: center;
        }

        .closing-label {
          margin: 0 0 20px;
          color: #888;
          font-size: 12px;
          font-weight: 700;
          line-height: 1.5;
          letter-spacing: 0.22em;
        }

        .closing-title {
          margin: 0 0 20px;
          color: #2f2f2f;
          font-size: clamp(28px, 5vw, 46px);
          font-weight: 700;
          line-height: 1.4;
        }

        .closing-description {
          max-width: 620px;
          margin: 0 auto;
          color: #666;
          font-size: 15px;
          line-height: 2;
        }

        .desktop-break {
          display: block;
        }

        @media (max-width: 800px) {
          .about-page {
            padding: 96px 20px 64px;
          }

          .about-title {
            margin-bottom: 44px;
          }

          .about-body {
            font-size: 17px;
            line-height: 2;
          }

          .visitor-notice {
            margin: 48px 0 56px;
            padding: 28px;
            border-radius: 24px;
          }

          .location-grid {
            grid-template-columns: 1fr;
            gap: 24px;
            margin-bottom: 56px;
          }

          .information-grid {
            grid-template-columns: 1fr;
            gap: 14px;
          }

          .about-divider {
            margin: 56px 0;
          }

          .about-closing {
            margin-top: 72px;
            padding-top: 64px;
          }
        }

        @media (max-width: 520px) {
          .about-page {
            padding: 72px 16px 56px;
          }

          .about-label {
            margin-bottom: 18px;
            font-size: 11px;
          }

          .about-title {
            margin-bottom: 36px;
          }

          .color-logo {
            font-size: clamp(35px, 11.7vw, 58px);
          }

          .about-body {
            font-size: 16px;
            line-height: 1.95;
          }

          .about-introduction p {
            margin-bottom: 24px;
          }

          .visitor-notice {
            margin: 40px 0 48px;
            padding: 24px 20px;
            border-radius: 22px;
          }

          .visitor-notice-label {
            font-size: 13px;
          }

          .visitor-notice-title {
            font-size: clamp(27px, 8vw, 38px);
          }

          .visitor-notice-text br {
            display: none;
          }

          .dark-button {
            width: 100%;
            padding: 14px 16px;
          }

          .location-grid {
            gap: 20px;
            margin-bottom: 48px;
          }

          .location-card {
            padding: 24px 20px;
            border-radius: 22px;
          }

          .location-title {
            font-size: 25px;
          }

          .map-wrapper {
            padding-top: 18px;
            border-radius: 18px;
          }

          .map-frame {
            height: 240px;
          }

          .map-link {
            margin-top: 16px;
          }

          .farm-note {
            padding: 14px;
            font-size: 14px;
          }

          .about-divider {
            margin: 48px 0;
          }

          .farm-information-title {
            margin-bottom: 24px;
            font-size: 25px;
          }

          .information-item {
            padding: 20px;
            border-radius: 18px;
          }

          .about-closing {
            margin-top: 64px;
            padding: 56px 4px 0;
          }

          .closing-label {
            margin-bottom: 16px;
            font-size: 11px;
          }

          .closing-title {
            margin-bottom: 18px;
            font-size: clamp(27px, 8vw, 36px);
          }

          .closing-description {
            font-size: 14px;
            line-height: 1.9;
          }

          .desktop-break {
            display: none;
          }
        }

        @media (max-width: 360px) {
          .about-page {
            padding-right: 14px;
            padding-left: 14px;
          }

          .color-logo {
            font-size: 10.8vw;
          }

          .location-card,
          .visitor-notice {
            padding-right: 18px;
            padding-left: 18px;
          }

          .map-frame {
            height: 220px;
          }
        }
      `}</style>
    </>
  );
}