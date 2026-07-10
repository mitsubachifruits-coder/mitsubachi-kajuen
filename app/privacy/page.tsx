import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "プライバシーポリシー | みつばち果樹園",
  description:
    "みつばち果樹園における個人情報の取り扱いについてご案内します。",
};

const sections = [
  {
    title: "1. 基本方針",
    content: (
      <>
        みつばち果樹園（以下「当園」といいます）は、お客様からお預かりする
        個人情報の重要性を認識し、個人情報の保護に関する法律その他の関係法令を
        遵守するとともに、以下の方針に基づき、個人情報を適切に取り扱います。
      </>
    ),
  },
  {
    title: "2. 取得する個人情報",
    content: (
      <>
        当園では、商品のご注文、お問い合わせ、各種サービスのご利用に際して、
        以下の情報を取得する場合があります。
        <ul>
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
        <p>
          なお、クレジットカード情報などの決済情報は、決済サービス提供事業者が
          管理し、当園がカード番号を直接保有しない場合があります。
        </p>
      </>
    ),
  },
  {
    title: "3. 個人情報の利用目的",
    content: (
      <>
        当園は、取得した個人情報を以下の目的で利用します。
        <ul>
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
    title: "4. 個人情報の第三者提供",
    content: (
      <>
        当園は、次の場合を除き、お客様の同意なく個人情報を第三者に提供しません。
        <ul>
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
    title: "5. 個人情報の取り扱いの委託",
    content: (
      <>
        当園は、商品の配送、代金決済、ウェブサイトの運営、注文管理、
        お問い合わせ対応などに必要な範囲で、個人情報の取り扱いを外部事業者へ
        委託する場合があります。
        <p>
          この場合、委託先を適切に選定し、必要な契約や監督を行うなど、
          個人情報が安全に管理されるよう努めます。
        </p>
      </>
    ),
  },
  {
    title: "6. 配送事業者および決済サービスとの情報共有",
    content: (
      <>
        当園は、商品の発送および代金決済に必要な範囲で、配送事業者や
        決済サービス提供事業者に、お客様の氏名、住所、電話番号、
        注文内容などを提供する場合があります。
        <p>
          Shopifyなどの外部サービスを利用する場合、お客様の情報は、
          各サービス提供事業者のプライバシーポリシーに基づいて取り扱われます。
        </p>
      </>
    ),
  },
  {
    title: "7. 個人情報の安全管理",
    content: (
      <>
        当園は、個人情報への不正アクセス、紛失、漏えい、改ざん、
        滅失または毀損などを防止するため、必要かつ適切な安全管理措置を
        講じます。
        <p>
          また、個人情報を取り扱う従業者および委託先に対して、
          必要かつ適切な監督を行います。
        </p>
      </>
    ),
  },
  {
    title: "8. Cookie等の使用について",
    content: (
      <>
        当園のウェブサイトでは、利便性の向上、利用状況の把握、
        サイト改善などを目的として、Cookieおよびこれに類する技術を
        使用する場合があります。
        <p>
          Cookieは、お客様のブラウザ設定により無効にできます。
          ただし、無効にした場合、ウェブサイトの一部の機能を
          ご利用いただけないことがあります。
        </p>
      </>
    ),
  },
  {
    title: "9. アクセス解析について",
    content: (
      <>
        当園のウェブサイトでは、ウェブサイトの利用状況を把握し、
        サービスを改善するため、アクセス解析サービスを利用する場合があります。
        <p>
          アクセス解析サービスにより収集される情報には、IPアドレス、
          閲覧したページ、利用端末、ブラウザなどの情報が含まれる場合があります。
        </p>
      </>
    ),
  },
  {
    title: "10. 個人情報の開示・訂正・削除等",
    content: (
      <>
        お客様ご本人から、当園が保有する個人情報について、利用目的の通知、
        開示、訂正、追加、削除、利用停止または第三者提供の停止などの請求が
        あった場合は、ご本人であることを確認したうえで、法令に従って
        適切に対応します。
        <p>
          ご請求の内容によっては、法令に基づき対応できない場合があります。
        </p>
      </>
    ),
  },
  {
    title: "11. 個人情報の保存期間",
    content: (
      <>
        当園は、個人情報を利用目的の達成に必要な期間および法令で定められた
        期間に限り保存します。
        <p>
          保存する必要がなくなった個人情報は、適切な方法で削除または
          廃棄するよう努めます。
        </p>
      </>
    ),
  },
  {
    title: "12. 未成年者の個人情報",
    content: (
      <>
        未成年のお客様が当園のサービスを利用し、個人情報を提供する場合は、
        必要に応じて保護者の同意を得たうえでご利用ください。
      </>
    ),
  },
  {
    title: "13. プライバシーポリシーの変更",
    content: (
      <>
        当園は、法令の変更、サービス内容の変更その他必要に応じて、
        本プライバシーポリシーを変更する場合があります。
        <p>
          変更後の内容は、当ウェブサイトに掲載した時点から効力を生じるものと
          します。
        </p>
      </>
    ),
  },
  {
    title: "14. お問い合わせ窓口",
    content: (
      <>
        本プライバシーポリシーおよび個人情報の取り扱いに関するお問い合わせは、
        以下の窓口までお願いいたします。
        <div className="contactBox">
          <p>
            <strong>事業者名</strong>
            <br />
            みつばち果樹園
          </p>

          <p>
            <strong>所在地</strong>
            <br />
            〒999-3751 山形県東根市若木通り1-13
          </p>

          <p>
            <strong>メールアドレス</strong>
            <br />
            mitsubachi-kajuen@ae.auone-net.jp
          </p>
        </div>
      </>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <main>
      <section className="hero">
        <div className="container">
          <p className="englishTitle">PRIVACY POLICY</p>

          <h1>プライバシーポリシー</h1>

          <p className="lead">
            みつばち果樹園は、お客様からお預かりする情報を大切に取り扱います。
          </p>
        </div>
      </section>

      <section className="policySection">
        <div className="container narrow">
          <p className="intro">
            みつばち果樹園は、お客様に安心して商品やサービスをご利用いただけるよう、
            個人情報の適切な管理と保護に努めます。
          </p>

          <div className="policyList">
            {sections.map((section) => (
              <section className="policyItem" key={section.title}>
                <h2>{section.title}</h2>
                <div className="policyContent">{section.content}</div>
              </section>
            ))}
          </div>

          <div className="date">
            <p>制定日：2026年7月11日</p>
            <p>みつばち果樹園</p>
          </div>

          <div className="backLink">
            <Link href="/">トップページへ戻る</Link>
          </div>
        </div>
      </section>

      <style>{`
        main {
          background: #fafaf9;
          color: #262626;
        }

        .container {
          width: min(100% - 40px, 1180px);
          margin: 0 auto;
          box-sizing: border-box;
        }

        .narrow {
          max-width: 820px;
        }

        .hero {
          padding: 120px 0 80px;
          border-bottom: 1px solid #e9e9e4;
        }

        .englishTitle {
          margin: 0 0 20px;
          color: #8a8a84;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.24em;
        }

        h1 {
          margin: 0;
          font-size: clamp(38px, 7vw, 76px);
          line-height: 1.15;
          letter-spacing: 0.03em;
        }

        .lead {
          max-width: 660px;
          margin: 32px 0 0;
          color: #686863;
          font-size: clamp(16px, 2vw, 19px);
          line-height: 2;
        }

        .policySection {
          padding: 88px 0 120px;
        }

        .intro {
          margin: 0 0 72px;
          font-size: 17px;
          line-height: 2.1;
          color: #555550;
        }

        .policyList {
          display: flex;
          flex-direction: column;
          gap: 64px;
        }

        .policyItem {
          padding-bottom: 64px;
          border-bottom: 1px solid #e4e4df;
        }

        .policyItem:last-child {
          border-bottom: none;
        }

        .policyItem h2 {
          margin: 0 0 24px;
          font-size: clamp(21px, 3vw, 27px);
          line-height: 1.5;
          letter-spacing: 0.03em;
        }

        .policyContent {
          color: #555550;
          font-size: 15px;
          line-height: 2;
        }

        .policyContent p {
          margin: 18px 0 0;
        }

        .policyContent ul {
          margin: 22px 0 0;
          padding-left: 1.5em;
        }

        .policyContent li {
          margin-bottom: 10px;
        }

        .contactBox {
          margin-top: 30px;
          padding: 28px 30px;
          background: #ffffff;
          border: 1px solid #e5e5df;
          border-radius: 18px;
        }

        .contactBox p {
          margin: 0 0 20px;
        }

        .contactBox p:last-child {
          margin-bottom: 0;
        }

        .contactBox strong {
          color: #272722;
        }

        .date {
          margin-top: 72px;
          padding-top: 32px;
          border-top: 1px solid #deded8;
          color: #777771;
          font-size: 14px;
          line-height: 1.8;
          text-align: right;
        }

        .date p {
          margin: 0;
        }

        .backLink {
          margin-top: 64px;
          text-align: center;
        }

        .backLink a {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 52px;
          padding: 0 30px;
          border: 1px solid #292925;
          border-radius: 999px;
          color: #292925;
          font-size: 14px;
          font-weight: 700;
          text-decoration: none;
          transition:
            background 0.2s ease,
            color 0.2s ease;
        }

        .backLink a:hover {
          background: #292925;
          color: #ffffff;
        }

        @media (max-width: 700px) {
          .container {
            width: min(100% - 32px, 1180px);
          }

          .hero {
            padding: 80px 0 56px;
          }

          .policySection {
            padding: 64px 0 88px;
          }

          .intro {
            margin-bottom: 52px;
          }

          .policyList {
            gap: 48px;
          }

          .policyItem {
            padding-bottom: 48px;
          }

          .contactBox {
            padding: 24px 22px;
            border-radius: 14px;
          }
        }
      `}</style>
    </main>
  );
}