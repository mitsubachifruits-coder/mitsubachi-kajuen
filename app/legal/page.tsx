import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "特定商取引法に基づく表示 | みつばち果樹園",
  description:
    "みつばち果樹園の通信販売および予約販売に関する特定商取引法に基づく表示です。",
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
        "各商品ページに税込価格で表示しています。販売価格は、販売時期、収穫状況、商品内容等により変更となる場合があります。ご注文確定後に販売価格が変更された場合でも、確定済みのご注文には、ご注文時に表示された価格が適用されます。",
    },
    {
      label: "商品代金以外の必要料金",
      value:
        "送料、銀行振込を利用する場合の振込手数料、その他各決済方法において定められた手数料が発生する場合があります。送料および手数料は、商品ページまたは購入手続き画面に表示します。",
    },
    {
      label: "お支払い方法",
      value:
        "クレジットカード決済、Shopifyの購入手続き画面に表示される各種オンライン決済、銀行振込、その他当園が指定する方法をご利用いただけます。利用できるお支払い方法は、購入手続き画面に表示される内容をご確認ください。",
    },
    {
      label: "お支払い時期",
      value:
        "クレジットカード決済および各種オンライン決済は、ご注文完了時に決済が確定します。予約商品についても、ご注文完了時に商品代金の全額が即時決済され、商品の発送前にお支払いが完了します。クレジットカードの実際の引き落とし日は、ご利用のカード会社の締め日および支払日により異なります。銀行振込の場合は、当園が指定する期日までにお支払いください。",
    },
    {
      label: "通常商品の引渡時期",
      value:
        "在庫のある通常商品は、ご注文および決済の確認後、各商品ページに記載する期間内に発送します。ただし、青果物の収穫状況、天候、注文集中、交通事情、配送業者の状況等により、発送またはお届けが遅れる場合があります。",
    },
    {
      label: "予約商品の引渡時期",
      value:
        "予約商品は、各商品ページに表示する発送予定期間内に、収穫後、順次発送します。発送予定期間は「○月上旬から○月下旬まで」等の期間で商品ごとに表示します。青果物のため、天候、生育状況、収穫状況等により、発送予定期間が前後する場合があります。発送時期に変更が生じた場合は、メールその他の方法によりご案内します。",
    },
    {
      label: "予約販売について",
      value:
        "予約商品は、収穫前または出荷開始前にご注文を受け付ける商品です。予約注文の完了をもって商品の確保をお約束するものではなく、天候、生育状況、自然災害、病害、著しい不作、その他やむを得ない事情により、商品の発送が困難となる場合があります。その場合は、代替品のご提案、発送時期の変更、またはご注文のキャンセルについてご連絡します。",
    },
    {
      label: "不作等により発送できない場合",
      value:
        "天候、自然災害、著しい不作、収穫量不足、品質基準を満たす商品の不足等により、ご注文の商品をご用意できない場合は、ご注文の全部または一部をキャンセルすることがあります。当園の都合によりキャンセルとなった商品については、お支払いいただいた該当商品代金を全額返金します。返金の反映時期は、ご利用の決済会社または金融機関により異なります。",
    },
    {
      label: "お届け日の指定",
      value:
        "通常商品については、商品および配送状況により、お届け日または時間帯の指定を承れる場合があります。予約商品は収穫時期を事前に確定できないため、原則としてお届け日の指定を承っておりません。時間帯指定が可能な場合は、購入手続き画面に表示します。",
    },
    {
      label: "配送方法",
      value:
        "ヤマト運輸等の配送業者にて発送します。商品および季節に応じて、常温便またはクール便でお届けします。配送業者および配送方法は、商品の状態や配送地域等により当園が指定します。",
    },
    {
      label: "複数商品の発送",
      value:
        "収穫時期または発送時期が異なる商品を同時にご注文いただいた場合は、商品ごとに分けて発送することがあります。予約商品と通常商品は、原則としてすべての商品がそろうまで保管せず、発送可能となった商品から順次発送します。分割発送に伴う送料の取扱いは、商品ページまたは購入手続き画面に表示します。",
    },
    {
      label: "返品・交換について",
      value:
        "青果物という商品の性質上、お客様のご都合による返品・交換はお受けできません。万が一、商品到着時に著しい傷み、腐敗、破損、商品違い、数量不足等があった場合は、商品到着後2日以内に、商品の状態が確認できる写真を添えてご連絡ください。状況を確認のうえ、代替品の発送、商品代金の全部または一部の返金等により対応します。",
    },
    {
      label: "返品・交換の対象外",
      value:
        "商品到着後3日以上経過した場合、商品を廃棄または消費した後にご連絡いただいた場合、保存方法または取扱方法に起因して品質が低下した場合、長期不在、受取辞退、住所不備等のお客様のご都合により商品を受け取れなかった場合は、返品、交換または返金を承れないことがあります。",
    },
    {
      label: "訳あり商品について",
      value:
        "訳あり商品には、形の不揃い、色むら、表面の傷、変形、サイズのばらつき、空洞等が含まれる場合があります。各商品ページに記載した訳あり商品の特性に該当する外観、形状等を理由とする返品・交換はお受けできません。ただし、著しい腐敗、輸送中の破損、誤配送等があった場合は、返品・交換についての定めに従って対応します。",
    },
    {
      label: "お客様都合によるキャンセル",
      value:
        "ご注文完了後のお客様都合によるキャンセル、商品内容の変更、数量の変更、お届け先の変更は、原則としてお受けできません。ただし、発送準備前で対応可能な場合がありますので、変更等をご希望の場合は、速やかに当園までご連絡ください。収穫、選果、梱包その他の発送準備開始後、または発送後のキャンセルおよび変更はお受けできません。",
    },
    {
      label: "予約注文のキャンセル",
      value:
        "予約商品についても、ご注文完了時に決済が確定するため、ご注文完了後のお客様都合によるキャンセルは原則としてお受けできません。商品ページにキャンセル受付期限を個別に表示している場合は、その期限までにご連絡ください。期限を過ぎた場合、または収穫、選果、梱包等の準備開始後は、キャンセルをお受けできません。",
    },
    {
      label: "長期不在・受取辞退・住所不備",
      value:
        "お届け先の住所不備、長期不在、受取辞退等のお客様のご都合により商品をお届けできなかった場合、青果物の性質上、再発送または返金を承れないことがあります。再発送が可能な場合に発生する送料その他の費用は、お客様にご負担いただく場合があります。ご注文時に、お届け先の氏名、郵便番号、住所、電話番号を十分にご確認ください。",
    },
    {
      label: "販売数量",
      value:
        "商品ごとに在庫数および収穫量に限りがあります。予定数量に達した場合は、予約受付期間中であっても販売を終了することがあります。",
    },
    {
      label: "申込有効期限",
      value:
        "各商品ページに申込期限または予約受付期間を表示している場合は、その期限までとします。ただし、予定販売数量に達した場合は、表示した期限より前に受付を終了することがあります。銀行振込を利用する場合、指定期日までに入金を確認できないときは、ご注文をキャンセルすることがあります。",
    },
    {
      label: "返金方法",
      value:
        "クレジットカード決済および各種オンライン決済の返金は、原則としてご注文時に利用された決済方法を通じて行います。銀行振込による返金が必要な場合は、お客様に返金先口座を確認したうえで対応します。返金処理後、実際に返金が反映されるまでの期間は、決済会社または金融機関により異なります。",
    },
    {
      label: "表現および商品に関する注意書き",
      value:
        "掲載写真はイメージです。青果物は自然の農産物であるため、色味、形、大きさ、重さ、入り数、香り、食味等に個体差があります。商品ページに記載された重量および入り数は、収穫状況や個体差により一定の範囲で異なる場合があります。",
    },
  ];

  return (
    <main className="legalPage">
      <div className="legalContainer">
        <p className="legalEnglishTitle">LEGAL NOTICE</p>

        <h1 className="legalTitle">特定商取引法に基づく表示</h1>

        <p className="legalIntroduction">
          みつばち果樹園の通信販売および予約販売に関する表示事項です。
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
          予約商品の発送予定期間、予約受付期限、送料、販売数量その他の商品ごとの条件は、各商品ページおよび購入手続き画面に表示します。予約商品は、ご注文完了時に代金の全額が即時決済されます。
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