export default function OrderPage() {
  return (
    <main
      className="orderPage"
      style={{
        minHeight: "100vh",
        background: "#fafaf9",
        padding: "120px 24px 80px",
        boxSizing: "border-box",
      }}
    >
      <section
        style={{
          width: "100%",
          maxWidth: "980px",
          margin: "0 auto",
        }}
      >
        <p
          style={{
            margin: "0 0 24px",
            color: "#888",
            fontSize: "13px",
            letterSpacing: "0.25em",
          }}
        >
          ORDER
        </p>

        <h1
          style={{
            margin: "0 0 56px",
            fontSize: "clamp(42px, 7vw, 78px)",
            lineHeight: 1.1,
          }}
        >
          ご注文について
        </h1>

        <div
          style={{
            color: "#4f4f4f",
            fontSize: "18px",
            lineHeight: 2.1,
          }}
        >
          {/* Web注文準備中のお知らせ */}
          <section
            className="orderNotice"
            style={{
              margin: "56px 0 72px",
              padding: "clamp(28px, 6vw, 48px)",
              borderRadius: "28px",
              background: "#fff8d6",
              color: "#8a5a00",
              boxShadow: "0 18px 50px rgba(0,0,0,0.06)",
            }}
          >
            <p
              style={{
                margin: "0 0 16px",
                fontSize: "15px",
                fontWeight: 700,
                letterSpacing: "0.12em",
              }}
            >
              ただいま準備中です
            </p>

            <h2
              style={{
                margin: "0 0 24px",
                color: "#5f3d00",
                fontSize: "clamp(30px, 6vw, 52px)",
                lineHeight: 1.25,
              }}
            >
              現在、Web注文は
              <br />
              受付準備中です。
            </h2>

            <p style={{ margin: "0 0 24px" }}>
              みつばち果樹園の注文ページをご覧いただき、
              ありがとうございます。
              <br className="desktopBreak" />
              現在、オンライン注文フォームは調整中のため、
              このページからのご注文はまだ受け付けておりません。
            </p>

            <p style={{ margin: 0 }}>
              正式に準備が整い次第、こちらのページから
              さくらんぼ・りんごなどの季節の果物を
              ご注文いただけるようにいたします。
            </p>
          </section>

          {/* お問い合わせ・店舗情報 */}
          <div className="orderCardGrid">
            <section className="orderCard">
              <p className="orderCardLabel">CONTACT</p>

              <h2 className="orderCardTitle">お急ぎのお客様へ</h2>

              <p>
                現在のご注文・お問い合わせは、
                お電話またはFAXにてお願いいたします。
              </p>

              <p>
                <strong>TEL</strong>
                <br />
                <a href="tel:09082515523" className="contactLink">
                  090-8251-5523
                </a>
              </p>

              <p>
                <strong>FAX</strong>
                <br />
                0237-51-4041
              </p>

              <a href="tel:09082515523" className="orderButton">
                電話をかける →
              </a>
            </section>

            <section className="orderCard">
              <p className="orderCardLabel">SHOP</p>

              <h2 className="orderCardTitle">お店でのお買い物</h2>

              <p>
                ご来店・お買い物のお客様は、
                <strong>みつばちフルーツ</strong>へお越しください。
              </p>

              <p>
                〒999-3701
                <br />
                山形県東根市東根甲4694-1
              </p>

              <a
                href="https://www.google.com/maps/search/?api=1&query=山形県東根市東根甲4694-1"
                target="_blank"
                rel="noopener noreferrer"
                className="orderButton"
              >
                Google Mapsで開く →
              </a>
            </section>
          </div>

          {/* Aboutページと同じ雰囲気の下部メッセージ */}
          <section className="aboutStyleClosing">
            <p className="closingLabel">FROM OUR FARM</p>

            <h2 className="closingTitle">
              旬のおいしさを、
              <br />
              果樹園からまっすぐに。
            </h2>

            <p className="closingDescription">
              天候や生育状況により、収穫時期や販売数量が
              変わる場合があります。
              <br className="desktopBreak" />
              最新の販売情報は、ホームページやInstagramで
              お知らせします。
            </p>
          </section>
        </div>
      </section>

      <style>{`
        * {
          box-sizing: border-box;
        }

        .orderCardGrid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 28px;
          margin-bottom: 72px;
        }

        .orderCard {
          display: flex;
          flex-direction: column;
          min-width: 0;
          padding: 32px;
          border-radius: 28px;
          background: #fff;
          box-shadow: 0 18px 50px rgba(0, 0, 0, 0.06);
        }

        .orderCardLabel {
          margin: 0 0 12px;
          color: #888;
          font-size: 12px;
          font-weight: 700;
          line-height: 1.5;
          letter-spacing: 0.18em;
        }

        .orderCardTitle {
          margin: 0 0 20px;
          color: #2f2f2f;
          font-size: 30px;
          line-height: 1.4;
        }

        .contactLink {
          color: #2f2f2f;
          font-weight: 700;
          text-decoration: none;
        }

        .contactLink:hover {
          text-decoration: underline;
        }

        .orderButton {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          align-self: flex-start;
          min-height: 52px;
          margin-top: auto;
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
            opacity 0.2s ease,
            transform 0.2s ease;
        }

        .orderButton:hover {
          opacity: 0.86;
          transform: translateY(-2px);
        }

        .aboutStyleClosing {
          margin-top: 96px;
          padding: 72px 24px 8px;
          border-top: 1px solid #ddd;
          text-align: center;
        }

        .closingLabel {
          margin: 0 0 20px;
          color: #888;
          font-size: 12px;
          font-weight: 700;
          line-height: 1.5;
          letter-spacing: 0.22em;
        }

        .closingTitle {
          margin: 0 0 20px;
          color: #2f2f2f;
          font-size: clamp(28px, 5vw, 46px);
          font-weight: 700;
          line-height: 1.4;
        }

        .closingDescription {
          max-width: 620px;
          margin: 0 auto;
          color: #666;
          font-size: 15px;
          line-height: 2;
        }

        .desktopBreak {
          display: block;
        }

        @media (max-width: 720px) {
          .orderPage {
            padding: 96px 20px 64px !important;
          }

          .orderCardGrid {
            grid-template-columns: 1fr;
            gap: 24px;
            margin-bottom: 56px;
          }

          .orderCard {
            padding: 28px;
          }

          .aboutStyleClosing {
            margin-top: 72px;
            padding-top: 64px;
          }
        }

        @media (max-width: 520px) {
          .orderPage {
            padding: 72px 16px 56px !important;
          }

          .orderNotice {
            margin: 40px 0 48px !important;
            padding: 24px 20px !important;
            border-radius: 22px !important;
          }

          .orderCardGrid {
            gap: 20px;
            margin-bottom: 48px;
          }

          .orderCard {
            padding: 24px 20px;
            border-radius: 22px;
          }

          .orderCardTitle {
            font-size: 25px;
          }

          .orderButton {
            width: 100%;
            align-self: stretch;
            margin-top: 12px;
            padding: 14px 16px;
          }

          .aboutStyleClosing {
            margin-top: 64px;
            padding: 56px 4px 0;
          }

          .closingLabel {
            margin-bottom: 16px;
            font-size: 11px;
          }

          .closingTitle {
            margin-bottom: 18px;
            font-size: clamp(27px, 8vw, 36px);
          }

          .closingDescription {
            font-size: 14px;
            line-height: 1.9;
          }

          .desktopBreak {
            display: none;
          }
        }

        @media (max-width: 360px) {
          .orderPage {
            padding-right: 14px !important;
            padding-left: 14px !important;
          }

          .orderCard,
          .orderNotice {
            padding-right: 18px !important;
            padding-left: 18px !important;
          }
        }
      `}</style>
    </main>
  );
}