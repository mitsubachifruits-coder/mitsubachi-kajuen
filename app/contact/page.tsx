import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "お問い合わせ | みつばち果樹園",
  description:
    "みつばち果樹園へのお問い合わせはこちら。商品、ご注文、配送、ご来店についてお気軽にお問い合わせください。",
};

const instagramUrl =
  "https://www.instagram.com/mitsubachi_kajuen/";

const informationItems = [
  "お名前",
  "電話番号",
  "ご注文の商品",
  "お届け先のお名前",
  "ご注文日",
  "お問い合わせ内容",
];

export default function ContactPage() {
  return (
    <main className="contact-page">
      <div className="contact-container">
        {/* ファーストビュー */}
        <section className="contact-hero">
          <p className="contact-label">CONTACT</p>

          <h1 className="contact-title">お問い合わせ</h1>

          <div className="contact-hero-bottom">
            <p className="contact-description">
              商品やご注文、配送、ご来店について、
              <br />
              ご不明なことがございましたら
              お気軽にお問い合わせください。
            </p>

            <p className="contact-location">
              FROM OUR FARM
              <br />
              YAMAGATA
            </p>
          </div>
        </section>

        {/* お問い合わせ前の案内 */}
        <section className="contact-notice">
          <div className="notice-heading">
            <p className="notice-label">BEFORE CONTACT</p>

            <h2 className="notice-title">
              ご注文内容が
              <br />
              分かるものを、
              <br />
              お手元に。
            </h2>
          </div>

          <div className="notice-content">
            <p className="notice-text">
              ご注文後のお問い合わせは、
              お名前・電話番号・商品名・発送先などを
              お知らせいただくと、確認がスムーズです。
            </p>

            <div className="notice-points">
              <span>お名前</span>
              <span>電話番号</span>
              <span>商品名</span>
              <span>発送先</span>
            </div>
          </div>
        </section>

        {/* お問い合わせ方法 */}
        <section className="methods-section">
          <div className="section-heading">
            <div>
              <p className="section-label">CONTACT METHODS</p>

              <h2 className="section-title">
                お問い合わせ
                <br />
                方法
              </h2>
            </div>

            <p className="section-description">
              ご都合のよい方法から、
              <br />
              お問い合わせください。
            </p>
          </div>

          <div className="contact-grid">
            {/* 電話 */}
            <article className="contact-card">
              <div className="card-header">
                <p className="card-number">01</p>
                <p className="card-english">TELEPHONE</p>
              </div>

              <div className="card-content">
                <h3 className="card-title">お電話</h3>

                <p className="card-text">
                  商品、ご注文、発送状況などについて、
                  お気軽にお問い合わせください。
                </p>
              </div>

              <div className="card-footer">
                <a href="tel:09082515523" className="telephone-link">
                  090-8251-5523
                </a>

                <p className="card-note">
                  園主：中川 敏浩
                  <br />
                  作業中は電話に出られない場合があります。
                </p>

                <a
                  href="tel:09082515523"
                  className="round-link"
                  aria-label="みつばち果樹園へ電話をかける"
                >
                  <span>電話をかける</span>
                  <span className="round-arrow" aria-hidden="true">
                    →
                  </span>
                </a>
              </div>
            </article>

            {/* メール */}
            <article className="contact-card">
              <div className="card-header">
                <p className="card-number">02</p>
                <p className="card-english">EMAIL</p>
              </div>

              <div className="card-content">
                <h3 className="card-title">メール</h3>

                <p className="card-text">
                  営業時間外のお問い合わせや、
                  写真を添付したい場合はこちらをご利用ください。
                </p>
              </div>

              <div className="card-footer">
                <a
                  href="mailto:mitsubachi-kajuen@ae.auone-net.jp"
                  className="email-link"
                >
                  mitsubachi-kajuen@
                  <br />
                  ae.auone-net.jp
                </a>

                <p className="card-note">
                  内容を確認後、順次返信いたします。
                  <br />
                  返信までお時間をいただく場合があります。
                </p>

                <a
                  href="mailto:mitsubachi-kajuen@ae.auone-net.jp"
                  className="round-link"
                  aria-label="みつばち果樹園へメールを送る"
                >
                  <span>メールを送る</span>
                  <span className="round-arrow" aria-hidden="true">
                    →
                  </span>
                </a>
              </div>
            </article>

            {/* FAX */}
            <article className="contact-card">
              <div className="card-header">
                <p className="card-number">03</p>
                <p className="card-english">FAX</p>
              </div>

              <div className="card-content">
                <h3 className="card-title">ファックス</h3>

                <p className="card-text">
                  贈答品や複数のお届け先へのご注文など、
                  紙でのご連絡にも対応しています。
                </p>
              </div>

              <div className="card-footer">
                <p className="fax-number">0237-51-4041</p>

                <p className="card-note">
                  お名前と電話番号を必ずご記入ください。
                  <br />
                  ご注文内容も分かる範囲でお知らせください。
                </p>

                <div className="status-line">
                  <span className="status-dot" aria-hidden="true" />
                  <span>FAX受付中</span>
                </div>
              </div>
            </article>

            {/* Instagram */}
            <article className="contact-card instagram-card">
              <div className="card-header">
                <p className="card-number">04</p>
                <p className="card-english">INSTAGRAM</p>
              </div>

              <div className="card-content">
                <h3 className="card-title">Instagram</h3>

                <p className="card-text">
                  果樹園の日々や、季節の果物、
                  販売情報などを発信しています。
                </p>
              </div>

              <div className="card-footer">
                <a
                  href={instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="instagram-account"
                  aria-label="みつばち果樹園のInstagramを見る"
                >
                  <span className="instagram-icon" aria-hidden="true">
                    <svg
                      width="25"
                      height="25"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="3"
                        y="3"
                        width="18"
                        height="18"
                        rx="5"
                        stroke="currentColor"
                        strokeWidth="2"
                      />

                      <circle
                        cx="12"
                        cy="12"
                        r="4"
                        stroke="currentColor"
                        strokeWidth="2"
                      />

                      <circle
                        cx="17.5"
                        cy="6.5"
                        r="1.2"
                        fill="currentColor"
                      />
                    </svg>
                  </span>

                  <span>@mitsubachi_kajuen</span>
                </a>

                <p className="card-note">
                  DMの確認には、
                  お時間をいただく場合があります。
                </p>

                <a
                  href={instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="round-link"
                  aria-label="みつばち果樹園のInstagramを開く"
                >
                  <span>Instagramを見る</span>
                  <span className="round-arrow" aria-hidden="true">
                    ↗
                  </span>
                </a>
              </div>
            </article>
          </div>
        </section>

        {/* 必要事項 */}
        <section className="information-section">
          <div className="information-heading">
            <div>
              <p className="section-label">INFORMATION</p>

              <h2 className="information-title">
                お問い合わせの際に
                <br />
                お知らせください。
              </h2>
            </div>

            <p className="information-description">
              分かる範囲で構いません。
              <br />
              ご注文確認に必要な情報です。
            </p>
          </div>

          <div className="information-grid">
            {informationItems.map((item, index) => (
              <div className="information-item" key={item}>
                <p className="information-number">
                  {String(index + 1).padStart(2, "0")}
                </p>

                <p className="information-value">{item}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 注文ページへの導線 */}
        <section className="order-section">
          <div className="order-content">
            <p className="order-label">ORDER</p>

            <h2 className="order-title">
              商品のご注文について
            </h2>

            <p className="order-description">
              オンライン注文の受付状況や、
              現在販売している商品については、
              注文ページをご確認ください。
            </p>
          </div>

          <Link href="/order" className="order-link">
            <span>注文ページを見る</span>

            <span className="order-arrow" aria-hidden="true">
              →
            </span>
          </Link>
        </section>
      </div>

      <style>{`
        * {
          box-sizing: border-box;
        }

        .contact-page {
          min-height: 100vh;
          padding: 128px 0 120px;
          overflow: hidden;
          background:
            radial-gradient(
              circle at 88% 4%,
              rgba(255, 222, 89, 0.14),
              transparent 23%
            ),
            radial-gradient(
              circle at 4% 30%,
              rgba(0, 191, 99, 0.06),
              transparent 23%
            ),
            #fafaf9;
          color: #3f3f3a;
        }

        .contact-container {
          width: min(1180px, calc(100% - 48px));
          margin: 0 auto;
        }

        .contact-hero {
          padding-bottom: 112px;
        }

        .contact-label,
        .section-label {
          margin: 0 0 28px;
          color: #92928b;
          font-size: 11px;
          font-weight: 700;
          line-height: 1.5;
          letter-spacing: 0.25em;
        }

        .contact-title {
          max-width: 980px;
          margin: 0;
          color: #2f2f2b;
          font-size: clamp(56px, 7.2vw, 98px);
          font-weight: 400;
          line-height: 1.06;
          letter-spacing: -0.055em;
        }

        .contact-hero-bottom {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 60px;
          margin-top: 52px;
        }

        .contact-description {
          max-width: 720px;
          margin: 0;
          color: #6c6c66;
          font-size: clamp(16px, 1.6vw, 21px);
          line-height: 1.9;
        }

        .contact-location {
          margin: 0;
          color: #a1a19a;
          font-size: 10px;
          font-weight: 700;
          line-height: 1.7;
          letter-spacing: 0.22em;
          text-align: right;
        }

        .contact-notice {
          display: grid;
          grid-template-columns: minmax(320px, 0.9fr) minmax(0, 1.1fr);
          gap: clamp(48px, 8vw, 110px);
          align-items: end;
          margin-bottom: 128px;
          padding: 56px;
          border: 1px solid #f1e4ad;
          border-radius: 34px;
          background:
            radial-gradient(
              circle at 90% 10%,
              rgba(255, 222, 89, 0.34),
              transparent 38%
            ),
            #fff8d6;
          color: #76520a;
          box-shadow: 0 24px 70px rgba(83, 68, 22, 0.07);
        }

        .notice-label {
          margin: 0 0 20px;
          color: #997520;
          font-size: 11px;
          font-weight: 700;
          line-height: 1.5;
          letter-spacing: 0.2em;
        }

        .notice-title {
          margin: 0;
          color: #5f420a;
          font-size: clamp(38px, 4.7vw, 62px);
          font-weight: 400;
          line-height: 1.25;
          letter-spacing: -0.045em;
        }

        .notice-content {
          min-width: 0;
        }

        .notice-text {
          margin: 0;
          color: #765b20;
          font-size: 16px;
          line-height: 2;
        }

        .notice-points {
          display: flex;
          gap: 10px;
          margin-top: 30px;
          flex-wrap: wrap;
        }

        .notice-points span {
          display: inline-flex;
          min-height: 34px;
          align-items: center;
          padding: 5px 14px;
          border: 1px solid rgba(143, 102, 19, 0.2);
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.45);
          color: #76520a;
          font-size: 12px;
          font-weight: 700;
        }

        .methods-section {
          margin-bottom: 128px;
        }

        .section-heading {
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(300px, 450px);
          gap: 60px;
          align-items: end;
          margin-bottom: 46px;
          padding-bottom: 30px;
          border-bottom: 1px solid #deddd7;
        }

        .section-label {
          margin-bottom: 12px;
        }

        .section-title {
          margin: 0;
          color: #30302c;
          font-size: clamp(40px, 5vw, 66px);
          font-weight: 400;
          line-height: 1.23;
          letter-spacing: -0.05em;
        }

        .section-description {
          margin: 0;
          color: #777770;
          font-size: 14px;
          line-height: 2;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 30px;
        }

        .contact-card {
          display: flex;
          min-width: 0;
          min-height: 460px;
          flex-direction: column;
          padding: 36px;
          border: 1px solid #e5e4de;
          border-radius: 30px;
          background: rgba(255, 255, 255, 0.95);
          box-shadow: 0 18px 54px rgba(52, 52, 45, 0.055);
          transition:
            transform 200ms ease,
            box-shadow 200ms ease;
        }

        .contact-card:hover {
          box-shadow: 0 26px 70px rgba(52, 52, 45, 0.09);
          transform: translateY(-4px);
        }

        .card-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          margin-bottom: 56px;
        }

        .card-number,
        .card-english {
          margin: 0;
          color: #999992;
          font-size: 10px;
          font-weight: 700;
          line-height: 1.5;
          letter-spacing: 0.18em;
        }

        .card-content {
          max-width: 440px;
        }

        .card-title {
          margin: 0 0 22px;
          color: #30302c;
          font-size: clamp(34px, 4vw, 52px);
          font-weight: 400;
          line-height: 1.3;
          letter-spacing: -0.045em;
        }

        .card-text {
          margin: 0;
          color: #777770;
          font-size: 15px;
          line-height: 1.95;
        }

        .card-footer {
          margin-top: auto;
          padding-top: 46px;
        }

        .telephone-link,
        .fax-number {
          display: block;
          margin: 0;
          overflow-wrap: anywhere;
          color: #30302c;
          font-size: clamp(25px, 3.4vw, 40px);
          font-weight: 700;
          line-height: 1.4;
          letter-spacing: -0.035em;
          text-decoration: none;
        }

        .email-link {
          display: inline-block;
          overflow-wrap: anywhere;
          color: #30302c;
          font-size: clamp(18px, 2.5vw, 28px);
          font-weight: 700;
          line-height: 1.5;
          letter-spacing: -0.025em;
          text-decoration: none;
        }

        .telephone-link:hover,
        .email-link:hover {
          opacity: 0.68;
        }

        .card-note {
          margin: 18px 0 0;
          color: #8b8b84;
          font-size: 13px;
          line-height: 1.85;
        }

        .round-link {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          margin-top: 28px;
          padding-top: 22px;
          border-top: 1px solid #ecece7;
          color: #3f3f3a;
          font-size: 14px;
          font-weight: 700;
          text-decoration: none;
        }

        .round-arrow {
          display: inline-flex;
          width: 40px;
          height: 40px;
          flex-shrink: 0;
          align-items: center;
          justify-content: center;
          border: 1px solid #deddd7;
          border-radius: 999px;
          transition:
            background 180ms ease,
            color 180ms ease,
            transform 180ms ease;
        }

        .round-link:hover .round-arrow {
          background: #343431;
          color: #ffffff;
          transform: translateX(3px);
        }

        .status-line {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-top: 30px;
          padding-top: 24px;
          border-top: 1px solid #ecece7;
          color: #777770;
          font-size: 13px;
          font-weight: 700;
        }

        .status-dot {
          width: 9px;
          height: 9px;
          flex-shrink: 0;
          border-radius: 50%;
          background: #00bf63;
          box-shadow: 0 0 0 5px rgba(0, 191, 99, 0.1);
        }

        .instagram-account {
          display: inline-flex;
          align-items: center;
          gap: 15px;
          color: #30302c;
          font-size: clamp(16px, 2.1vw, 22px);
          font-weight: 700;
          text-decoration: none;
        }

        .instagram-icon {
          display: inline-flex;
          width: 50px;
          height: 50px;
          flex-shrink: 0;
          align-items: center;
          justify-content: center;
          border-radius: 15px;
          background: linear-gradient(
            135deg,
            #833ab4 0%,
            #fd1d1d 55%,
            #fcb045 100%
          );
          color: #ffffff;
          box-shadow: 0 9px 24px rgba(176, 55, 104, 0.2);
        }

        .information-section {
          padding: 112px 0 132px;
          border-top: 1px solid #deddd7;
        }

        .information-heading {
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(300px, 450px);
          gap: 60px;
          align-items: end;
          margin-bottom: 46px;
        }

        .information-title {
          margin: 0;
          color: #30302c;
          font-size: clamp(40px, 5vw, 66px);
          font-weight: 400;
          line-height: 1.28;
          letter-spacing: -0.05em;
        }

        .information-description {
          margin: 0;
          color: #777770;
          font-size: 14px;
          line-height: 2;
        }

        .information-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 20px;
        }

        .information-item {
          min-width: 0;
          min-height: 180px;
          padding: 28px;
          border: 1px solid #e5e4de;
          border-radius: 24px;
          background: rgba(255, 255, 255, 0.95);
          box-shadow: 0 14px 40px rgba(52, 52, 45, 0.04);
        }

        .information-number {
          margin: 0 0 48px;
          color: #b0afa9;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.16em;
        }

        .information-value {
          margin: 0;
          color: #30302c;
          font-size: clamp(18px, 2.2vw, 26px);
          font-weight: 700;
          line-height: 1.55;
        }

        .order-section {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 70px;
          padding: 68px;
          border-radius: 34px;
          background:
            radial-gradient(
              circle at 90% 10%,
              rgba(255, 222, 89, 0.1),
              transparent 30%
            ),
            #30302c;
          color: #ffffff;
          box-shadow: 0 24px 70px rgba(52, 52, 45, 0.16);
        }

        .order-content {
          max-width: 700px;
        }

        .order-label {
          margin: 0 0 18px;
          color: #bdbdb6;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.22em;
        }

        .order-title {
          margin: 0;
          font-size: clamp(34px, 4.5vw, 58px);
          font-weight: 400;
          line-height: 1.3;
          letter-spacing: -0.045em;
        }

        .order-description {
          max-width: 620px;
          margin: 28px 0 0;
          color: #d1d1cc;
          font-size: 15px;
          line-height: 2;
        }

        .order-link {
          display: inline-flex;
          min-width: 230px;
          min-height: 64px;
          flex-shrink: 0;
          align-items: center;
          justify-content: space-between;
          gap: 28px;
          padding: 0 18px 0 26px;
          border-radius: 999px;
          background: #ffffff;
          color: #30302c;
          font-size: 14px;
          font-weight: 700;
          text-decoration: none;
          transition:
            transform 180ms ease,
            opacity 180ms ease;
        }

        .order-link:hover {
          opacity: 0.9;
          transform: translateY(-3px);
        }

        .order-arrow {
          display: inline-flex;
          width: 42px;
          height: 42px;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: #30302c;
          color: #ffffff;
        }

        @media (max-width: 900px) {
          .contact-page {
            padding: 104px 0 90px;
          }

          .contact-container {
            width: min(100% - 40px, 1180px);
          }

          .contact-hero {
            padding-bottom: 90px;
          }

          .contact-title {
            font-size: clamp(50px, 9.6vw, 78px);
          }

          .contact-notice {
            grid-template-columns: 1fr;
            gap: 38px;
            margin-bottom: 100px;
            padding: 44px;
          }

          .section-heading,
          .information-heading {
            grid-template-columns: 1fr;
            gap: 22px;
          }

          .contact-grid {
            grid-template-columns: 1fr;
          }

          .contact-card {
            min-height: 420px;
          }

          .information-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .order-section {
            align-items: flex-start;
            flex-direction: column;
            gap: 44px;
            padding: 52px;
          }
        }

        @media (max-width: 560px) {
          .contact-page {
            padding: 76px 0 68px;
          }

          .contact-container {
            width: calc(100% - 32px);
          }

          .contact-hero {
            padding-bottom: 68px;
          }

          .contact-label {
            margin-bottom: 22px;
            font-size: 10px;
          }

          .contact-title {
            font-size: clamp(42px, 12.8vw, 60px);
          }

          .contact-hero-bottom {
            align-items: flex-start;
            flex-direction: column;
            gap: 26px;
            margin-top: 38px;
          }

          .contact-description {
            font-size: 15px;
          }

          .contact-description br {
            display: none;
          }

          .contact-location {
            font-size: 9px;
            text-align: left;
          }

          .contact-notice {
            gap: 30px;
            margin-bottom: 80px;
            padding: 30px 24px;
            border-radius: 25px;
          }

          .notice-title {
            font-size: clamp(34px, 10vw, 46px);
          }

          .notice-text {
            font-size: 15px;
            line-height: 1.9;
          }

          .methods-section {
            margin-bottom: 86px;
          }

          .section-heading {
            margin-bottom: 28px;
          }

          .section-title,
          .information-title {
            font-size: clamp(35px, 11vw, 48px);
          }

          .section-description br,
          .information-description br {
            display: none;
          }

          .contact-grid {
            gap: 20px;
          }

          .contact-card {
            min-height: 410px;
            padding: 25px 21px;
            border-radius: 23px;
          }

          .card-header {
            margin-bottom: 44px;
          }

          .card-title {
            font-size: clamp(32px, 10vw, 43px);
          }

          .card-footer {
            padding-top: 38px;
          }

          .telephone-link,
          .fax-number {
            font-size: clamp(24px, 8vw, 34px);
          }

          .email-link {
            font-size: clamp(17px, 5.4vw, 23px);
          }

          .instagram-account {
            align-items: flex-start;
            flex-direction: column;
          }

          .information-section {
            padding: 78px 0 92px;
          }

          .information-grid {
            grid-template-columns: 1fr;
            gap: 14px;
          }

          .information-item {
            min-height: 150px;
            padding: 23px;
            border-radius: 20px;
          }

          .information-number {
            margin-bottom: 35px;
          }

          .order-section {
            gap: 36px;
            padding: 40px 24px;
            border-radius: 25px;
          }

          .order-title {
            font-size: clamp(32px, 10vw, 44px);
          }

          .order-description {
            font-size: 14px;
          }

          .order-link {
            width: 100%;
            min-width: 0;
          }
        }

        @media (max-width: 380px) {
          .contact-container {
            width: calc(100% - 28px);
          }

          .contact-title {
            font-size: 40px;
          }

          .contact-notice,
          .contact-card,
          .order-section {
            padding-right: 18px;
            padding-left: 18px;
          }

          .telephone-link,
          .fax-number {
            font-size: 23px;
          }

          .email-link {
            font-size: 16px;
          }
        }
      `}</style>
    </main>
  );
}