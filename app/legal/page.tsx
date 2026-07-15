import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "特定商取引法に基づく表示 | みつばち果樹園",
  description:
    "みつばち果樹園の通信販売に関する特定商取引法に基づく表示です。",
};
export default function LegalPage() {
  const rows = [
    {
      label: "販売事業者",
      value: "みつばち果樹園",
    },
    {
      label: "運営責任者",
      value: "中川 敏浩",
    },
    {
      label: "所在地",
      value: "〒999-3751 山形県東根市若木通り1-13",
    },
    {
      label: "電話番号",
      value: "090-8251-5523",
    },
    {
      label: "メールアドレス",
      value: "mitsubachi-kajuen@ae.auone-net.jp",
    },
    {
      label: "販売価格",
      value:
        "各商品ページに税込価格で表示しています。表示価格は時期・収穫状況により変更となる場合があります。",
    },
    {
      label: "商品代金以外の必要料金",
      value:
        "送料、振込手数料、その他決済手数料が発生する場合があります。送料は配送地域・商品サイズ・数量により異なります。",
    },
    {
      label: "お支払い方法",
      value:
        "銀行振込、その他当園が指定する方法にてお支払いいただきます。現在、オンライン決済は準備中です。",
    },
    {
      label: "お支払い時期",
      value:
        "ご注文内容の確認後、当園よりお支払い方法をご案内いたします。銀行振込の場合は、指定期日までにお支払いください。",
    },
    {
      label: "商品の引渡時期",
      value:
        "ご注文確認後、収穫状況に合わせて順次発送いたします。青果物のため、天候・生育状況・収穫状況により発送時期が前後する場合があります。",
    },
    {
      label: "配送方法",
      value:
        "ヤマト運輸等の配送業者にて発送いたします。商品や季節により、常温便またはクール便でのお届けとなります。",
    },
    {
      label: "返品・交換について",
      value:
        "青果物という商品の性質上、お客様都合による返品・交換はお受けできません。万が一、商品に著しい傷み・破損・誤配送があった場合は、商品到着後2日以内に写真を添えてご連絡ください。状況を確認のうえ、代品発送または返金等にて対応いたします。",
    },
    {
      label: "キャンセルについて",
      value:
        "発送準備前であればキャンセルを承れる場合があります。発送準備後または発送後のキャンセルはお受けできません。",
    },
    {
      label: "販売数量",
      value:
        "商品ごとに在庫数・収穫量に限りがあります。予定数量に達し次第、販売を終了する場合があります。",
    },
    {
      label: "申込有効期限",
      value:
        "ご注文後、当園からの確認連絡またはお支払い案内に記載の期限までとします。期限内にご連絡・お支払いが確認できない場合、ご注文をキャンセルさせていただくことがあります。",
    },
    {
      label: "表現および商品に関する注意書き",
      value:
        "掲載写真はイメージです。青果物のため、色味・形・大きさ・入り数には個体差があります。",
    },
  ];
  return (
    <main className="legalPage">
      <div className="legalContainer">
        <p className="legalEnglishTitle">LEGAL NOTICE</p>
        <h1 className="legalTitle">特定商取引法に基づく表示</h1>
        <p className="legalIntroduction">
          みつばち果樹園の通信販売に関する表示事項です。
          <br className="desktopBreak" />
          ご注文前に内容をご確認ください。
        </p>
        <div className="legalTable">
          {rows.map((row, index) => (
            <section
              key={row.label}
              className="legalRow"
              style={{
                borderTop: index === 0 ? "none" : "1px solid #eee",
              }}
            >
              <div className="legalLabel">{row.label}</div>
              <div
                className={`legalContent ${
                  row.label === "メールアドレス" ? "emailAddress" : ""
                }`}
              >
                {row.value}
              </div>
            </section>
          ))}
        </div>
        <div className="preparationNotice">
          ※
          現在、サイトは準備・テスト公開中です。正式な販売開始時には、内容を最新情報に更新いたします。
        </div>
      </div>
      <style>{`
        * {
          box-sizing: border-box;
        }
        .legalPage {
          min-height: 100vh;
          padding: 120px 24px 100px;
          background: #fafaf9;
          overflow: hidden;
        }
        .legalContainer {
          width: 100%;
          max-width: 920px;
          margin: 0 auto;
        }
        .legalEnglishTitle {
          margin: 0 0 16px;
          color: #777;
          font-size: 13px;
          line-height: 1.5;
          letter-spacing: 0.18em;
        }
        .legalTitle {
          margin: 0 0 24px;
          color: #333;
          font-size: clamp(32px, 5vw, 52px);
          line-height: 1.2;
          overflow-wrap: anywhere;
        }
        .legalIntroduction {
          margin: 0 0 48px;
          color: #666;
          font-size: 16px;
          line-height: 2;
        }
        .legalTable {
          overflow: hidden;
          border: 1px solid #ecece8;
          border-radius: 28px;
          background: #fff;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.05);
        }
        .legalRow {
          display: grid;
          grid-template-columns: minmax(200px, 280px) minmax(0, 1fr);
        }
        .legalLabel {
          padding: 22px 24px;
          border-right: 1px solid #eee;
          background: #fafaf9;
          color: #444;
          font-weight: 700;
          line-height: 1.7;
          overflow-wrap: anywhere;
        }
        .legalContent {
          min-width: 0;
          padding: 22px 24px;
          color: #555;
          font-size: 16px;
          line-height: 1.9;
          overflow-wrap: anywhere;
          word-break: normal;
        }
        .emailAddress {
          overflow-wrap: anywhere;
          word-break: break-word;
        }
        .preparationNotice {
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
          .legalPage {
            padding: 96px 20px 80px;
          }
          .legalIntroduction {
            margin-bottom: 40px;
          }
          .legalRow {
            grid-template-columns: minmax(180px, 220px) minmax(0, 1fr);
          }
          .legalLabel,
          .legalContent {
            padding: 20px;
          }
        }
        @media (max-width: 700px) {
          .legalRow {
            grid-template-columns: 1fr;
          }
          .legalLabel {
            padding: 18px 20px;
            border-right: none;
            border-bottom: 1px solid #eee;
          }
          .legalContent {
            padding: 22px 20px 26px;
          }
        }
        @media (max-width: 520px) {
          .legalPage {
            padding: 72px 16px 64px;
          }
          .legalEnglishTitle {
            margin-bottom: 14px;
            font-size: 11px;
            letter-spacing: 0.2em;
          }
          .legalTitle {
            margin-bottom: 20px;
            font-size: clamp(30px, 9vw, 42px);
            line-height: 1.25;
          }
          .legalIntroduction {
            margin-bottom: 32px;
            font-size: 15px;
            line-height: 1.9;
          }
          .desktopBreak {
            display: none;
          }
          .legalTable {
            border-radius: 22px;
          }
          .legalLabel {
            padding: 17px 18px;
            font-size: 15px;
            line-height: 1.6;
          }
          .legalContent {
            padding: 20px 18px 24px;
            font-size: 15px;
            line-height: 1.85;
          }
          .preparationNotice {
            margin-top: 32px;
            padding: 20px;
            border-radius: 16px;
            font-size: 14px;
          }
        }
        @media (max-width: 360px) {
          .legalPage {
            padding-right: 14px;
            padding-left: 14px;
          }
          .legalLabel {
            padding-right: 16px;
            padding-left: 16px;
          }
          .legalContent {
            padding-right: 16px;
            padding-left: 16px;
          }
          .preparationNotice {
            padding-right: 16px;
            padding-left: 16px;
          }
        }
      `}</style>
    </main>
  );
}