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
    <main
      style={{
        minHeight: "100vh",
        background: "#fafaf9",
        padding: "96px 20px",
      }}
    >
      <div
        style={{
          maxWidth: "920px",
          margin: "0 auto",
        }}
      >
        <p
          style={{
            color: "#777",
            letterSpacing: "0.18em",
            fontSize: "13px",
            marginBottom: "16px",
          }}
        >
          LEGAL NOTICE
        </p>

        <h1
          style={{
            fontSize: "clamp(32px, 5vw, 52px)",
            lineHeight: 1.2,
            marginBottom: "24px",
            color: "#333",
          }}
        >
          特定商取引法に基づく表示
        </h1>

        <p
          style={{
            fontSize: "16px",
            lineHeight: 2,
            color: "#666",
            marginBottom: "48px",
          }}
        >
          みつばち果樹園の通信販売に関する表示事項です。
          <br />
          ご注文前に内容をご確認ください。
        </p>

        <div
          style={{
            background: "#fff",
            border: "1px solid #ecece8",
            borderRadius: "28px",
            overflow: "hidden",
            boxShadow: "0 20px 60px rgba(0,0,0,0.05)",
          }}
        >
          {rows.map((row, index) => (
            <div
              key={row.label}
              style={{
                display: "grid",
                gridTemplateColumns: "minmax(160px, 240px) 1fr",
                gap: "0",
                borderTop: index === 0 ? "none" : "1px solid #eee",
              }}
            >
              <div
                style={{
                  background: "#fafaf9",
                  padding: "22px 24px",
                  fontWeight: 700,
                  color: "#444",
                  borderRight: "1px solid #eee",
                }}
              >
                {row.label}
              </div>

              <div
                style={{
                  padding: "22px 24px",
                  color: "#555",
                  lineHeight: 1.9,
                }}
              >
                {row.value}
              </div>
            </div>
          ))}
        </div>

        <div
          style={{
            marginTop: "40px",
            padding: "24px",
            borderRadius: "20px",
            background: "#fff8d8",
            color: "#5f4b00",
            lineHeight: 1.8,
          }}
        >
          ※ 現在、サイトは準備・テスト公開中です。正式な販売開始時には、内容を最新情報に更新いたします。
        </div>
      </div>
    </main>
  );
}