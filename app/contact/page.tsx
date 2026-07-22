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
    <main className="contactPage">
      {/* ファーストビュー */}
      <section className="contactHero">
        <div className="pageContainer">
          <p className="contactLabel">CONTACT</p>

          <h1 className="contactTitle">お問い合わせ</h1>

          <div className="contactHeroBottom">
            <p className="contactDescription">
              商品やご注文、配送、ご来店について、
              <br />
              ご不明なことがございましたら
              お気軽にお問い合わせください。
            </p>

            <p className="contactLocation">
              FROM OUR FARM
              <br />
              YAMAGATA
            </p>
          </div>
        </div>
      </section>

      <div className="contactContent">
        <div className="pageContainer">
          {/* お問い合わせ前の案内 */}
          <section className="contactNotice">
            <div className="noticeHeading">
              <p className="noticeLabel">BEFORE CONTACT</p>

              <h2 className="noticeTitle">
                ご注文内容が
                <br />
                分かるものを、
                <br />
                お手元に。
              </h2>
            </div>

            <div className="noticeContent">
              <p className="noticeText">
                ご注文後のお問い合わせは、
                お名前・電話番号・商品名・発送先などを
                お知らせいただくと、確認がスムーズです。
              </p>

              <div className="noticePoints">
                <span>お名前</span>
                <span>電話番号</span>
                <span>商品名</span>
                <span>発送先</span>
              </div>
            </div>
          </section>

          {/* お問い合わせ方法 */}
          <section className="methodsSection">
            <div className="sectionHeading">
              <div>
                <p className="sectionLabel">CONTACT METHODS</p>

                <h2 className="sectionTitle">
                  お問い合わせ
                  <br />
                  方法
                </h2>
              </div>

              <p className="sectionDescription">
                ご都合のよい方法から、
                <br />
                お問い合わせください。
              </p>
            </div>

            <div className="contactGrid">
              {/* 電話 */}
              <article className="contactCard">
                <div className="cardHeader">
                  <p className="cardNumber">01</p>
                  <p className="cardEnglish">TELEPHONE</p>
                </div>

                <div className="cardContent">
                  <h3 className="cardTitle">お電話</h3>

                  <p className="cardText">
                    商品、ご注文、発送状況などについて、
                    お気軽にお問い合わせください。
                  </p>
                </div>

                <div className="cardFooter">
                  <a
                    href="tel:09082515523"
                    className="telephoneLink"
                  >
                    090-8251-5523
                  </a>

                  <p className="cardNote">
                    園主：中川 敏浩
                    <br />
                    作業中は電話に出られない場合があります。
                  </p>

                  <a
                    href="tel:09082515523"
                    className="roundLink"
                    aria-label="みつばち果樹園へ電話をかける"
                  >
                    <span>電話をかける</span>

                    <span
                      className="roundArrow"
                      aria-hidden="true"
                    >
                      →
                    </span>
                  </a>
                </div>
              </article>

              {/* メール */}
              <article className="contactCard">
                <div className="cardHeader">
                  <p className="cardNumber">02</p>
                  <p className="cardEnglish">EMAIL</p>
                </div>

                <div className="cardContent">
                  <h3 className="cardTitle">メール</h3>

                  <p className="cardText">
                    営業時間外のお問い合わせや、
                    写真を添付したい場合はこちらをご利用ください。
                  </p>
                </div>

                <div className="cardFooter">
                  <a
                    href="mailto:mitsubachi-kajuen@ae.auone-net.jp"
                    className="emailLink"
                  >
                    mitsubachi-kajuen@
                    <br />
                    ae.auone-net.jp
                  </a>

                  <p className="cardNote">
                    内容を確認後、順次返信いたします。
                    <br />
                    返信までお時間をいただく場合があります。
                  </p>

                  <a
                    href="mailto:mitsubachi-kajuen@ae.auone-net.jp"
                    className="roundLink"
                    aria-label="みつばち果樹園へメールを送る"
                  >
                    <span>メールを送る</span>

                    <span
                      className="roundArrow"
                      aria-hidden="true"
                    >
                      →
                    </span>
                  </a>
                </div>
              </article>

              {/* FAX */}
              <article className="contactCard">
                <div className="cardHeader">
                  <p className="cardNumber">03</p>
                  <p className="cardEnglish">FAX</p>
                </div>

                <div className="cardContent">
                  <h3 className="cardTitle">ファックス</h3>

                  <p className="cardText">
                    贈答品や複数のお届け先へのご注文など、
                    紙でのご連絡にも対応しています。
                  </p>
                </div>

                <div className="cardFooter">
                  <p className="faxNumber">0237-51-4041</p>

                  <p className="cardNote">
                    お名前と電話番号を必ずご記入ください。
                    <br />
                    ご注文内容も分かる範囲でお知らせください。
                  </p>

                  <div className="statusLine">
                    <span
                      className="statusDot"
                      aria-hidden="true"
                    />
                    <span>FAX受付中</span>
                  </div>
                </div>
              </article>

              {/* Instagram */}
              <article className="contactCard instagramCard">
                <div className="cardHeader">
                  <p className="cardNumber">04</p>
                  <p className="cardEnglish">INSTAGRAM</p>
                </div>

                <div className="cardContent">
                  <h3 className="cardTitle">Instagram</h3>

                  <p className="cardText">
                    果樹園の日々や、季節の果物、
                    販売情報などを発信しています。
                  </p>
                </div>

                <div className="cardFooter">
                  <a
                    href={instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="instagramAccount"
                    aria-label="みつばち果樹園のInstagramを見る"
                  >
                    <span
                      className="instagramIcon"
                      aria-hidden="true"
                    >
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

                  <p className="cardNote">
                    DMの確認には、
                    お時間をいただく場合があります。
                  </p>

                  <a
                    href={instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="roundLink"
                    aria-label="みつばち果樹園のInstagramを開く"
                  >
                    <span>Instagramを見る</span>

                    <span
                      className="roundArrow"
                      aria-hidden="true"
                    >
                      ↗
                    </span>
                  </a>
                </div>
              </article>
            </div>
          </section>

          {/* 必要事項 */}
          <section className="informationSection">
            <div className="informationHeading">
              <div>
                <p className="sectionLabel">INFORMATION</p>

                <h2 className="informationTitle">
                  お問い合わせの際に
                  <br />
                  お知らせください。
                </h2>
              </div>

              <p className="informationDescription">
                分かる範囲で構いません。
                <br />
                ご注文確認に必要な情報です。
              </p>
            </div>

            <div className="informationGrid">
              {informationItems.map((item, index) => (
                <div
                  className="informationItem"
                  key={item}
                >
                  <p className="informationNumber">
                    {String(index + 1).padStart(2, "0")}
                  </p>

                  <p className="informationValue">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* 注文ページへの導線 */}
          <section className="orderSection">
            <div className="orderContent">
              <p className="orderLabel">ORDER</p>

              <h2 className="orderTitle">
                商品のご注文について
              </h2>

              <p className="orderDescription">
                オンライン注文の受付状況や、
                現在販売している商品については、
                注文ページをご確認ください。
              </p>
            </div>

            <Link href="/order" className="orderLink">
              <span>注文ページを見る</span>

              <span
                className="orderArrow"
                aria-hidden="true"
              >
                →
              </span>
            </Link>
          </section>
        </div>
      </div>

      <style>{`
        .contactPage,
        .contactPage * {
          box-sizing: border-box;
        }

        .contactPage {
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

        .contactHero {
          padding: 112px 0 90px;
          background:
            radial-gradient(
              circle at 88% 8%,
              rgba(255, 222, 89, 0.16),
              transparent 25%
            ),
            radial-gradient(
              circle at 6% 88%,
              rgba(0, 191, 99, 0.07),
              transparent 28%
            ),
            #fafaf9;
        }

        .contactLabel,
        .sectionLabel {
          margin: 0;
          color: #92928b;
          font-size: 9px;
          font-weight: 700;
          line-height: 1.5;
          letter-spacing: 0.24em;
        }

        .contactLabel {
          margin-bottom: 23px;
        }

        .contactTitle {
          max-width: 760px;
          margin: 0;
          color: #2f2f2b;
          font-size: clamp(43px, 6vw, 78px);
          font-weight: 400;
          line-height: 1.08;
          letter-spacing: -0.055em;
        }

        .contactHeroBottom {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 45px;
          margin-top: 36px;
        }

        .contactDescription {
          max-width: 570px;
          margin: 0;
          color: #696963;
          font-size: clamp(14px, 1.5vw, 17px);
          line-height: 2;
        }

        .contactLocation {
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

        .contactContent {
          padding: 82px 0 120px;
        }

        /* =========================================
           NOTICE
        ========================================= */

        .contactNotice {
          display: grid;
          grid-template-columns:
            minmax(250px, 0.9fr)
            minmax(0, 1.1fr);
          gap: clamp(38px, 6vw, 82px);
          align-items: end;
          margin-bottom: 110px;
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

        .noticeLabel {
          margin: 0 0 15px;
          color: #997520;
          font-size: 8px;
          font-weight: 700;
          line-height: 1.5;
          letter-spacing: 0.2em;
        }

        .noticeTitle {
          margin: 0;
          color: #5f420a;
          font-size: clamp(30px, 3.5vw, 47px);
          font-weight: 400;
          line-height: 1.25;
          letter-spacing: -0.045em;
        }

        .noticeContent {
          min-width: 0;
        }

        .noticeText {
          margin: 0;
          color: #765b20;
          font-size: 12px;
          line-height: 2;
        }

        .noticePoints {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: 23px;
        }

        .noticePoints span {
          display: inline-flex;
          min-height: 26px;
          align-items: center;
          padding: 4px 11px;
          border: 1px solid rgba(143, 102, 19, 0.2);
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.45);
          color: #76520a;
          font-size: 9px;
          font-weight: 700;
        }

        /* =========================================
           SECTION HEADING
        ========================================= */

        .methodsSection {
          margin-bottom: 110px;
        }

        .sectionHeading,
        .informationHeading {
          display: grid;
          grid-template-columns:
            minmax(0, 1fr)
            minmax(240px, 375px);
          gap: 46px;
          align-items: end;
        }

        .sectionHeading {
          margin-bottom: 36px;
          padding-bottom: 24px;
          border-bottom: 1px solid #deddd7;
        }

        .sectionLabel {
          margin-bottom: 12px;
        }

        .sectionTitle,
        .informationTitle {
          margin: 0;
          color: #30302c;
          font-size: clamp(34px, 4.5vw, 54px);
          font-weight: 400;
          line-height: 1.2;
          letter-spacing: -0.04em;
        }

        .sectionDescription,
        .informationDescription {
          margin: 0;
          color: #777770;
          font-size: 12px;
          line-height: 2;
        }

        /* =========================================
           CONTACT CARDS
        ========================================= */

        .contactGrid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 23px;
        }

        .contactCard {
          display: flex;
          min-width: 0;
          min-height: 345px;
          flex-direction: column;
          padding: 27px;
          border: 1px solid #e5e4de;
          border-radius: 23px;
          background: rgba(255, 255, 255, 0.95);
          box-shadow: 0 14px 41px rgba(52, 52, 45, 0.055);
          transition:
            transform 400ms cubic-bezier(0.22, 1, 0.36, 1),
            box-shadow 400ms cubic-bezier(0.22, 1, 0.36, 1);
        }

        .contactCard:hover {
          box-shadow: 0 20px 52px rgba(52, 52, 45, 0.09);
          transform: translateY(-4px);
        }

        .cardHeader {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 15px;
          margin-bottom: 42px;
        }

        .cardNumber,
        .cardEnglish {
          margin: 0;
          color: #999992;
          font-size: 8px;
          font-weight: 700;
          line-height: 1.5;
          letter-spacing: 0.18em;
        }

        .cardContent {
          max-width: 330px;
        }

        .cardTitle {
          margin: 0 0 17px;
          color: #30302c;
          font-size: clamp(27px, 3vw, 39px);
          font-weight: 400;
          line-height: 1.3;
          letter-spacing: -0.045em;
        }

        .cardText {
          margin: 0;
          color: #777770;
          font-size: 12px;
          line-height: 1.95;
        }

        .cardFooter {
          margin-top: auto;
          padding-top: 35px;
        }

        .telephoneLink,
        .faxNumber {
          display: block;
          margin: 0;
          overflow-wrap: anywhere;
          color: #30302c;
          font-size: clamp(20px, 2.6vw, 30px);
          font-weight: 700;
          line-height: 1.4;
          letter-spacing: -0.035em;
          text-decoration: none;
        }

        .emailLink {
          display: inline-block;
          overflow-wrap: anywhere;
          color: #30302c;
          font-size: clamp(15px, 1.9vw, 21px);
          font-weight: 700;
          line-height: 1.5;
          letter-spacing: -0.025em;
          text-decoration: none;
        }

        .telephoneLink:hover,
        .emailLink:hover {
          opacity: 0.68;
        }

        .cardNote {
          margin: 14px 0 0;
          color: #8b8b84;
          font-size: 10px;
          line-height: 1.85;
        }

        .roundLink {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 15px;
          margin-top: 21px;
          padding-top: 17px;
          border-top: 1px solid #ecece7;
          color: #3f3f3a;
          font-size: 11px;
          font-weight: 700;
          text-decoration: none;
        }

        .roundArrow {
          display: inline-flex;
          width: 30px;
          height: 30px;
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

        .roundLink:hover .roundArrow {
          background: #343431;
          color: #ffffff;
          transform: translateX(3px);
        }

        .statusLine {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-top: 23px;
          padding-top: 18px;
          border-top: 1px solid #ecece7;
          color: #777770;
          font-size: 10px;
          font-weight: 700;
        }

        .statusDot {
          width: 7px;
          height: 7px;
          flex-shrink: 0;
          border-radius: 50%;
          background: #00bf63;
          box-shadow: 0 0 0 4px rgba(0, 191, 99, 0.1);
        }

        .instagramAccount {
          display: inline-flex;
          align-items: center;
          gap: 11px;
          color: #30302c;
          font-size: clamp(13px, 1.6vw, 17px);
          font-weight: 700;
          text-decoration: none;
        }

        .instagramIcon {
          display: inline-flex;
          width: 38px;
          height: 38px;
          flex-shrink: 0;
          align-items: center;
          justify-content: center;
          border-radius: 11px;
          background: linear-gradient(
            135deg,
            #833ab4 0%,
            #fd1d1d 55%,
            #fcb045 100%
          );
          color: #ffffff;
          box-shadow: 0 7px 18px rgba(176, 55, 104, 0.2);
        }

        .instagramIcon svg {
          width: 19px;
          height: 19px;
        }

        /* =========================================
           INFORMATION
        ========================================= */

        .informationSection {
          padding: 110px 0;
          border-top: 1px solid #deddd7;
        }

        .informationHeading {
          margin-bottom: 36px;
        }

        .informationGrid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 15px;
        }

        .informationItem {
          min-width: 0;
          min-height: 135px;
          padding: 21px;
          border: 1px solid #e5e4de;
          border-radius: 18px;
          background: rgba(255, 255, 255, 0.95);
          box-shadow: 0 11px 30px rgba(52, 52, 45, 0.04);
        }

        .informationNumber {
          margin: 0 0 36px;
          color: #b0afa9;
          font-size: 8px;
          font-weight: 700;
          letter-spacing: 0.16em;
        }

        .informationValue {
          margin: 0;
          color: #30302c;
          font-size: clamp(15px, 1.7vw, 20px);
          font-weight: 700;
          line-height: 1.55;
        }

        /* =========================================
           ORDER LINK
        ========================================= */

        .orderSection {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 53px;
          padding: 51px;
          border-radius: 26px;
          background:
            radial-gradient(
              circle at 90% 10%,
              rgba(255, 222, 89, 0.1),
              transparent 30%
            ),
            #30302c;
          color: #ffffff;
          box-shadow: 0 18px 52px rgba(52, 52, 45, 0.16);
        }

        .orderContent {
          max-width: 525px;
        }

        .orderLabel {
          margin: 0 0 14px;
          color: #bdbdb6;
          font-size: 8px;
          font-weight: 700;
          letter-spacing: 0.22em;
        }

        .orderTitle {
          margin: 0;
          font-size: clamp(27px, 3.4vw, 44px);
          font-weight: 400;
          line-height: 1.3;
          letter-spacing: -0.045em;
        }

        .orderDescription {
          max-width: 465px;
          margin: 21px 0 0;
          color: #d1d1cc;
          font-size: 12px;
          line-height: 2;
        }

        .orderLink {
          display: inline-flex;
          min-width: 173px;
          min-height: 48px;
          flex-shrink: 0;
          align-items: center;
          justify-content: space-between;
          gap: 21px;
          padding: 0 14px 0 20px;
          border-radius: 999px;
          background: #ffffff;
          color: #30302c;
          font-size: 11px;
          font-weight: 700;
          text-decoration: none;
          transition:
            transform 180ms ease,
            opacity 180ms ease;
        }

        .orderLink:hover {
          opacity: 0.9;
          transform: translateY(-3px);
        }

        .orderArrow {
          display: inline-flex;
          width: 32px;
          height: 32px;
          flex-shrink: 0;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: #30302c;
          color: #ffffff;
        }

        /* =========================================
           TABLET
           Fruits・About・Storyと同じサイズ感
        ========================================= */

        @media (max-width: 900px) {
          .pageContainer {
            width: min(1180px, calc(100% - 48px));
          }

          .contactHero {
            padding: 150px 0 120px;
          }

          .contactLabel {
            margin-bottom: 30px;
            font-size: 12px;
          }

          .contactTitle {
            max-width: 980px;
            font-size: clamp(54px, 8vw, 104px);
          }

          .contactHeroBottom {
            gap: 60px;
            margin-top: 48px;
          }

          .contactDescription {
            max-width: 720px;
            font-size: clamp(17px, 2vw, 22px);
          }

          .contactLocation {
            font-size: 11px;
          }

          .contactContent {
            padding: 110px 0 160px;
          }

          .contactNotice {
            grid-template-columns: 1fr;
            gap: 38px;
            margin-bottom: 145px;
            padding: 48px;
            border-radius: 34px;
          }

          .noticeLabel {
            margin-bottom: 20px;
            font-size: 11px;
          }

          .noticeTitle {
            font-size: clamp(42px, 6vw, 72px);
          }

          .noticeText {
            max-width: 760px;
            font-size: 16px;
          }

          .noticePoints {
            gap: 10px;
            margin-top: 30px;
          }

          .noticePoints span {
            min-height: 34px;
            padding: 5px 14px;
            font-size: 12px;
          }

          .methodsSection {
            margin-bottom: 145px;
          }

          .sectionHeading,
          .informationHeading {
            grid-template-columns: 1fr;
            gap: 24px;
            margin-bottom: 48px;
          }

          .sectionHeading {
            padding-bottom: 32px;
          }

          .sectionLabel {
            margin-bottom: 16px;
            font-size: 11px;
          }

          .sectionTitle,
          .informationTitle {
            font-size: clamp(42px, 6vw, 72px);
          }

          .sectionDescription,
          .informationDescription {
            max-width: 700px;
            font-size: 15px;
          }

          .contactGrid {
            grid-template-columns: 1fr;
            gap: 24px;
          }

          .contactCard {
            min-height: 420px;
            padding: 36px;
            border-radius: 30px;
          }

          .cardHeader {
            gap: 20px;
            margin-bottom: 56px;
          }

          .cardNumber,
          .cardEnglish {
            font-size: 10px;
          }

          .cardContent {
            max-width: 540px;
          }

          .cardTitle {
            margin-bottom: 22px;
            font-size: clamp(34px, 4.5vw, 56px);
          }

          .cardText {
            font-size: 15px;
          }

          .cardFooter {
            padding-top: 46px;
          }

          .telephoneLink,
          .faxNumber {
            font-size: clamp(25px, 3.4vw, 40px);
          }

          .emailLink {
            font-size: clamp(18px, 2.5vw, 28px);
          }

          .cardNote {
            margin-top: 18px;
            font-size: 13px;
          }

          .roundLink {
            gap: 20px;
            margin-top: 28px;
            padding-top: 22px;
            font-size: 14px;
          }

          .roundArrow {
            width: 40px;
            height: 40px;
          }

          .statusLine {
            gap: 10px;
            margin-top: 30px;
            padding-top: 24px;
            font-size: 13px;
          }

          .statusDot {
            width: 9px;
            height: 9px;
            box-shadow: 0 0 0 5px rgba(0, 191, 99, 0.1);
          }

          .instagramAccount {
            gap: 15px;
            font-size: clamp(16px, 2.1vw, 22px);
          }

          .instagramIcon {
            width: 50px;
            height: 50px;
            border-radius: 15px;
          }

          .instagramIcon svg {
            width: 25px;
            height: 25px;
          }

          .informationSection {
            padding: 145px 0;
          }

          .informationGrid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 20px;
          }

          .informationItem {
            min-height: 180px;
            padding: 28px;
            border-radius: 24px;
          }

          .informationNumber {
            margin-bottom: 48px;
            font-size: 10px;
          }

          .informationValue {
            font-size: clamp(18px, 2.2vw, 26px);
          }

          .orderSection {
            align-items: flex-start;
            flex-direction: column;
            gap: 44px;
            padding: 52px;
            border-radius: 34px;
          }

          .orderContent {
            max-width: 700px;
          }

          .orderLabel {
            margin-bottom: 18px;
            font-size: 11px;
          }

          .orderTitle {
            font-size: clamp(34px, 4.5vw, 58px);
          }

          .orderDescription {
            max-width: 620px;
            margin-top: 28px;
            font-size: 15px;
          }

          .orderLink {
            min-width: 230px;
            min-height: 64px;
            gap: 28px;
            padding: 0 18px 0 26px;
            font-size: 14px;
          }

          .orderArrow {
            width: 42px;
            height: 42px;
          }
        }

        /* =========================================
           MOBILE BASE
        ========================================= */

        @media (max-width: 768px) {
          .contactPage {
            padding: 0 !important;
          }

          .contactHero,
          .contactContent {
            padding-right: 0 !important;
            padding-left: 0 !important;
          }

          .contactTitle {
            font-size: clamp(48px, 15vw, 72px) !important;
            line-height: 1.13 !important;
          }

          .sectionTitle,
          .informationTitle {
            font-size: 48px !important;
            line-height: 1.2 !important;
          }
        }

        /* =========================================
           SMARTPHONE
           Fruits・About・Storyと同じ左右16px
        ========================================= */

        @media (max-width: 680px) {
          .pageContainer {
            width: min(100% - 32px, 1180px);
          }

          .contactHero {
            padding-top: 105px !important;
            padding-bottom: 85px !important;
          }

          .contactLabel {
            margin-bottom: 23px;
            font-size: 10px;
          }

          .contactHeroBottom {
            align-items: flex-start;
            flex-direction: column;
            gap: 26px;
            margin-top: 34px;
          }

          .contactDescription {
            font-size: 16px;
            line-height: 1.9;
          }

          .contactDescription br {
            display: none;
          }

          .contactLocation {
            font-size: 9px;
            text-align: left;
          }

          .contactContent {
            padding-top: 85px !important;
            padding-bottom: 110px !important;
          }

          .contactNotice {
            gap: 30px;
            margin-bottom: 100px;
            padding: 30px 24px;
            border-radius: 25px;
          }

          .noticeLabel {
            font-size: 9px;
          }

          .noticeTitle {
            font-size: clamp(34px, 10vw, 46px);
          }

          .noticeText {
            font-size: 15px;
            line-height: 1.9;
          }

          .noticePoints {
            margin-top: 25px;
          }

          .methodsSection {
            margin-bottom: 100px;
          }

          .sectionHeading,
          .informationHeading {
            margin-bottom: 30px;
          }

          .sectionDescription br,
          .informationDescription br {
            display: none;
          }

          .contactGrid {
            gap: 20px;
          }

          .contactCard {
            min-height: 410px;
            padding: 25px 21px;
            border-radius: 23px;
          }

          .cardHeader {
            margin-bottom: 44px;
          }

          .cardTitle {
            font-size: clamp(32px, 10vw, 43px);
          }

          .cardText {
            font-size: 14px;
          }

          .cardFooter {
            padding-top: 38px;
          }

          .telephoneLink,
          .faxNumber {
            font-size: clamp(24px, 8vw, 34px);
          }

          .emailLink {
            font-size: clamp(17px, 5.4vw, 23px);
          }

          .cardNote {
            font-size: 12px;
          }

          .instagramAccount {
            align-items: flex-start;
            flex-direction: column;
          }

          .informationSection {
            padding: 100px 0;
          }

          .informationGrid {
            grid-template-columns: 1fr;
            gap: 14px;
          }

          .informationItem {
            min-height: 150px;
            padding: 23px;
            border-radius: 20px;
          }

          .informationNumber {
            margin-bottom: 35px;
          }

          .informationValue {
            font-size: 20px;
          }

          .orderSection {
            gap: 36px;
            padding: 40px 24px;
            border-radius: 25px;
          }

          .orderTitle {
            font-size: clamp(32px, 10vw, 44px);
          }

          .orderDescription {
            font-size: 14px;
          }

          .orderLink {
            width: 100%;
            min-width: 0;
          }
        }

        @media (max-width: 480px) {
          .contactDescription {
            font-size: 15px;
          }

          .contactCard {
            min-height: 390px;
          }

          .cardText {
            font-size: 13px;
          }

          .orderDescription {
            font-size: 13px;
          }
        }

        @media (max-width: 420px) {
          .contactTitle {
            font-size: 46px !important;
          }

          .sectionTitle,
          .informationTitle {
            font-size: 42px !important;
          }

          .contactNotice,
          .contactCard,
          .orderSection {
            padding-right: 20px;
            padding-left: 20px;
          }

          .telephoneLink,
          .faxNumber {
            font-size: 24px;
          }

          .emailLink {
            font-size: 17px;
          }

          .orderTitle {
            font-size: 34px;
          }
        }

        @media (max-width: 360px) {
          .pageContainer {
            width: calc(100% - 28px);
          }

          .contactTitle {
            font-size: 42px !important;
          }

          .sectionTitle,
          .informationTitle {
            font-size: 39px !important;
          }

          .contactNotice,
          .contactCard,
          .orderSection {
            padding-right: 18px;
            padding-left: 18px;
          }

          .telephoneLink,
          .faxNumber {
            font-size: 22px;
          }

          .emailLink {
            font-size: 15px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .contactCard,
          .roundArrow,
          .orderLink {
            transition: none;
          }
        }
      `}</style>
    </main>
  );
}