import type { Metadata } from "next";
import type { CSSProperties } from "react";

export const metadata: Metadata = {
  title: "プライバシーポリシー | みつばち果樹園",
  description:
    "みつばち果樹園における個人情報の取り扱いについてご案内します。",
};

export default function PrivacyPage() {
  const rows = [
    {
      label: "1. 基本方針",
      value: (
        <>
          みつばち果樹園（以下「当園」といいます）は、お客様からお預かりする
          個人情報の重要性を認識し、個人情報の保護に関する法律その他の関係法令を
          遵守するとともに、以下の方針に基づき、個人情報を適切に取り扱います。
        </>
      ),
    },
    {
      label: "2. 取得する個人情報",
      value: (
        <>
          当園では、商品のご注文、お問い合わせ、各種サービスのご利用に際して、
          以下の情報を取得する場合があります。

          <ul style={listStyle}>
            <li>氏名</li>
            <li>住所</li>
            <li>電話番号</li>
            <li>メールアドレス</li>
            <li>商品の注文内容および購入履歴</li>
            <li>配送先に関する情報</li>
            <li>お問い合わせ内容</li>
            <li>決済に必要な情報</li>
            <li>
              IPアドレス、Cookie、閲覧履歴、端末情報などのウェブサイト利用情報
            </li>
          </ul>

          <p style={paragraphStyle}>
            なお、クレジットカード情報などの決済情報は、決済サービス提供事業者が
            管理し、当園がカード番号を直接保有しない場合があります。
          </p>
        </>
      ),
    },
    {
      label: "3. 個人情報の利用目的",
      value: (
        <>
          当園は、取得した個人情報を以下の目的で利用します。

          <ul style={listStyle}>
            <li>商品の注文受付、代金決済、発送および配送管理のため</li>
            <li>注文内容や配送状況に関するご連絡のため</li>
            <li>お問い合わせ、ご相談およびご要望への対応のため</li>
            <li>返品、交換、返金その他のアフターサービスのため</li>
            <li>商品やサービスに関する重要なお知らせのため</li>
            <li>当園の商品、サービスおよびウェブサイトの改善のため</li>
            <li>不正利用、なりすましその他の不正行為を防止するため</li>
            <li>法令に基づく対応および記録保存のため</li>
            <li>
              お客様から事前に同意をいただいた場合に、商品やキャンペーンなどを
              ご案内するため
            </li>
          </ul>
        </>
      ),
    },
    {
      label: "4. 個人情報の第三者提供",
      value: (
        <>
          当園は、次の場合を除き、お客様の同意なく個人情報を第三者に提供しません。

          <ul style={listStyle}>
            <li>法令に基づく場合</li>
            <li>
              人の生命、身体または財産の保護のために必要であり、お客様の同意を
              得ることが困難な場合
            </li>
            <li>
              公衆衛生の向上または児童の健全な育成のために特に必要であり、
              お客様の同意を得ることが困難な場合
            </li>
            <li>
              国または地方公共団体などが法令の定める事務を行うことに協力する
              必要がある場合
            </li>
            <li>
              あらかじめ利用目的および提供先などを明示し、お客様の同意を
              得ている場合
            </li>
          </ul>
        </>
      ),
    },
    {
      label: "5. 個人情報の取り扱いの委託",
      value: (
        <>
          当園は、商品の配送、代金決済、ウェブサイトの運営、注文管理、
          お問い合わせ対応などに必要な範囲で、個人情報の取り扱いを外部事業者へ
          委託する場合があります。

          <p style={paragraphStyle}>
            この場合、委託先を適切に選定し、必要な契約や監督を行うなど、
            個人情報が安全に管理されるよう努めます。
          </p>
        </>
      ),
    },
    {
      label: "6. 配送事業者および決済サービスとの情報共有",
      value: (
        <>
          当園は、商品の発送および代金決済に必要な範囲で、配送事業者や
          決済サービス提供事業者に、お客様の氏名、住所、電話番号、
          注文内容などを提供する場合があります。

          <p style={paragraphStyle}>
            Shopifyなどの外部サービスを利用する場合、お客様の情報は、
            各サービス提供事業者のプライバシーポリシーに基づいて取り扱われます。
          </p>
        </>
      ),
    },
    {
      label: "7. 個人情報の安全管理",
      value: (
        <>
          当園は、個人情報への不正アクセス、紛失、漏えい、改ざん、
          滅失または毀損などを防止するため、必要かつ適切な安全管理措置を
          講じます。

          <p style={paragraphStyle}>
            また、個人情報を取り扱う従業者および委託先に対して、
            必要かつ適切な監督を行います。
          </p>
        </>
      ),
    },
    {
      label: "8. Cookie等の使用について",
      value: (
        <>
          当園のウェブサイトでは、利便性の向上、利用状況の把握、
          サイト改善などを目的として、Cookieおよびこれに類する技術を
          使用する場合があります。

          <p style={paragraphStyle}>
            Cookieは、お客様のブラウザ設定により無効にできます。
            ただし、無効にした場合、ウェブサイトの一部の機能を
            ご利用いただけないことがあります。
          </p>
        </>
      ),
    },
    {
      label: "9. アクセス解析について",
      value: (
        <>
          当園のウェブサイトでは、ウェブサイトの利用状況を把握し、
          サービスを改善するため、アクセス解析サービスを利用する場合があります。

          <p style={paragraphStyle}>
            アクセス解析サービスにより収集される情報には、IPアドレス、
            閲覧したページ、利用端末、ブラウザなどの情報が含まれる場合があります。
          </p>
        </>
      ),
    },
    {
      label: "10. 個人情報の開示・訂正・削除等",
      value: (
        <>
          お客様ご本人から、当園が保有する個人情報について、利用目的の通知、
          開示、訂正、追加、削除、利用停止または第三者提供の停止などの請求が
          あった場合は、ご本人であることを確認したうえで、法令に従って
          適切に対応します。

          <p style={paragraphStyle}>
            ご請求の内容によっては、法令に基づき対応できない場合があります。
          </p>
        </>
      ),
    },
    {
      label: "11. 個人情報の保存期間",
      value: (
        <>
          当園は、個人情報を利用目的の達成に必要な期間および法令で定められた
          期間に限り保存します。

          <p style={paragraphStyle}>
            保存する必要がなくなった個人情報は、適切な方法で削除または
            廃棄するよう努めます。
          </p>
        </>
      ),
    },
    {
      label: "12. 未成年者の個人情報",
      value: (
        <>
          未成年のお客様が当園のサービスを利用し、個人情報を提供する場合は、
          必要に応じて保護者の同意を得たうえでご利用ください。
        </>
      ),
    },
    {
      label: "13. プライバシーポリシーの変更",
      value: (
        <>
          当園は、法令の変更、サービス内容の変更その他必要に応じて、
          本プライバシーポリシーを変更する場合があります。

          <p style={paragraphStyle}>
            変更後の内容は、当ウェブサイトに掲載した時点から効力を生じるものと
            します。
          </p>
        </>
      ),
    },
    {
      label: "14. お問い合わせ窓口",
      value: (
        <>
          本プライバシーポリシーおよび個人情報の取り扱いに関するお問い合わせは、
          以下の窓口までお願いいたします。

          <div className="contactBox">
            <p style={{ margin: "0 0 16px" }}>
              <strong style={{ color: "#444" }}>事業者名</strong>
              <br />
              みつばち果樹園
            </p>

            <p style={{ margin: "0 0 16px" }}>
              <strong style={{ color: "#444" }}>所在地</strong>
              <br />
              〒999-3751 山形県東根市若木通り1-13
            </p>

            <p style={{ margin: 0 }}>
              <strong style={{ color: "#444" }}>メールアドレス</strong>
              <br />
              <span className="emailAddress">
                mitsubachi-kajuen@ae.auone-net.jp
              </span>
            </p>
          </div>
        </>
      ),
    },
  ];

  return (
    <main className="privacyPage">
      <div className="privacyContainer">
        <p className="privacyEnglishTitle">PRIVACY POLICY</p>

        <h1 className="privacyTitle">プライバシーポリシー</h1>

        <p className="privacyIntroduction">
          みつばち果樹園は、お客様からお預かりする情報を大切に取り扱います。
          <br className="desktopBreak" />
          当園における個人情報の取り扱いについて、以下のとおり定めます。
        </p>

        <div className="privacyTable">
          {rows.map((row, index) => (
            <section
              key={row.label}
              className="privacyRow"
              style={{
                borderTop: index === 0 ? "none" : "1px solid #eee",
              }}
            >
              <div className="privacyLabel">{row.label}</div>

              <div className="privacyContent">{row.value}</div>
            </section>
          ))}
        </div>

        <div className="establishedDate">
          制定日：2026年7月11日
          <br />
          みつばち果樹園
        </div>
      </div>

      <style>{`
        * {
          box-sizing: border-box;
        }

        .privacyPage {
          min-height: 100vh;
          padding: 120px 24px 100px;
          background: #fafaf9;
          overflow: hidden;
        }

        .privacyContainer {
          width: 100%;
          max-width: 920px;
          margin: 0 auto;
        }

        .privacyEnglishTitle {
          margin: 0 0 16px;
          color: #777;
          font-size: 13px;
          line-height: 1.5;
          letter-spacing: 0.18em;
        }

        .privacyTitle {
          margin: 0 0 24px;
          color: #333;
          font-size: clamp(32px, 5vw, 52px);
          line-height: 1.2;
          overflow-wrap: anywhere;
        }

        .privacyIntroduction {
          margin: 0 0 48px;
          color: #666;
          font-size: 16px;
          line-height: 2;
        }

        .privacyTable {
          overflow: hidden;
          border: 1px solid #ecece8;
          border-radius: 28px;
          background: #fff;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.05);
        }

        .privacyRow {
          display: grid;
          grid-template-columns: minmax(200px, 280px) minmax(0, 1fr);
        }

        .privacyLabel {
          padding: 22px 24px;
          border-right: 1px solid #eee;
          background: #fafaf9;
          color: #444;
          font-weight: 700;
          line-height: 1.7;
          overflow-wrap: anywhere;
        }

        .privacyContent {
          min-width: 0;
          padding: 22px 24px;
          color: #555;
          font-size: 16px;
          line-height: 1.9;
          overflow-wrap: anywhere;
          word-break: normal;
        }

        .privacyContent ul {
          margin-bottom: 0;
        }

        .privacyContent li + li {
          margin-top: 6px;
        }

        .contactBox {
          margin-top: 24px;
          padding: 22px 24px;
          border: 1px solid #ecece8;
          border-radius: 16px;
          background: #fafaf9;
        }

        .emailAddress {
          overflow-wrap: anywhere;
          word-break: break-word;
        }

        .establishedDate {
          margin-top: 40px;
          padding: 24px;
          border-radius: 20px;
          background: #fff8d8;
          color: #5f4b00;
          line-height: 1.8;
        }

        .desktopBreak {
          display: block;
        }

        @media (max-width: 800px) {
          .privacyPage {
            padding: 96px 20px 80px;
          }

          .privacyIntroduction {
            margin-bottom: 40px;
          }

          .privacyRow {
            grid-template-columns: minmax(180px, 220px) minmax(0, 1fr);
          }

          .privacyLabel,
          .privacyContent {
            padding: 20px;
          }
        }

        @media (max-width: 700px) {
          .privacyRow {
            grid-template-columns: 1fr;
          }

          .privacyLabel {
            padding: 18px 20px;
            border-right: none;
            border-bottom: 1px solid #eee;
          }

          .privacyContent {
            padding: 22px 20px 26px;
          }
        }

        @media (max-width: 520px) {
          .privacyPage {
            padding: 72px 16px 64px;
          }

          .privacyEnglishTitle {
            margin-bottom: 14px;
            font-size: 11px;
            letter-spacing: 0.2em;
          }

          .privacyTitle {
            margin-bottom: 20px;
            font-size: clamp(30px, 9vw, 42px);
            line-height: 1.25;
          }

          .privacyIntroduction {
            margin-bottom: 32px;
            font-size: 15px;
            line-height: 1.9;
          }

          .desktopBreak {
            display: none;
          }

          .privacyTable {
            border-radius: 22px;
          }

          .privacyLabel {
            padding: 17px 18px;
            font-size: 15px;
            line-height: 1.6;
          }

          .privacyContent {
            padding: 20px 18px 24px;
            font-size: 15px;
            line-height: 1.85;
          }

          .privacyContent ul {
            padding-left: 1.25em !important;
          }

          .contactBox {
            margin-top: 20px;
            padding: 18px;
            border-radius: 14px;
          }

          .establishedDate {
            margin-top: 32px;
            padding: 20px;
            border-radius: 16px;
            font-size: 14px;
          }
        }

        @media (max-width: 360px) {
          .privacyPage {
            padding-right: 14px;
            padding-left: 14px;
          }

          .privacyLabel {
            padding-right: 16px;
            padding-left: 16px;
          }

          .privacyContent {
            padding-right: 16px;
            padding-left: 16px;
          }

          .contactBox {
            padding-right: 16px;
            padding-left: 16px;
          }
        }
      `}</style>
    </main>
  );
}

const listStyle: CSSProperties = {
  margin: "18px 0 0",
  paddingLeft: "1.4em",
};

const paragraphStyle: CSSProperties = {
  margin: "18px 0 0",
};