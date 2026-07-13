import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "お問い合わせ | みつばち果樹園",
  description:
    "みつばち果樹園へのお問い合わせはこちら。商品、ご注文、配送、ご来店についてお気軽にお問い合わせください。",
};

const instagramUrl =
  "https://www.instagram.com/mitsubachi_kajuen/";

export default function ContactPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#fafaf9",
        padding: "120px 24px 100px",
        boxSizing: "border-box",
        color: "#2f2f2f",
      }}
    >
      <section
        style={{
          width: "100%",
          maxWidth: "980px",
          margin: "0 auto",
        }}
      >
        {/* ページタイトル */}
        <div
          style={{
            marginBottom: "64px",
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
            CONTACT
          </p>

          <h1
            style={{
              margin: "0 0 28px",
              fontSize: "clamp(42px, 7vw, 78px)",
              lineHeight: 1.15,
              letterSpacing: "0.02em",
            }}
          >
            お問い合わせ
          </h1>

          <p
            style={{
              maxWidth: "720px",
              margin: 0,
              color: "#666",
              fontSize: "17px",
              lineHeight: 2,
            }}
          >
            商品やご注文、配送、ご来店について、
            <br />
            ご不明なことがございましたらお気軽にお問い合わせください。
          </p>
        </div>

        {/* ご案内 */}
        <div
          style={{
            marginBottom: "56px",
            padding: "32px",
            borderRadius: "28px",
            background: "#fff8d6",
            color: "#735000",
            boxShadow: "0 18px 50px rgba(0,0,0,0.05)",
          }}
        >
          <p
            style={{
              margin: "0 0 12px",
              fontSize: "13px",
              fontWeight: 700,
              letterSpacing: "0.12em",
            }}
          >
            お問い合わせの前に
          </p>

          <h2
            style={{
              margin: "0 0 18px",
              color: "#5f3d00",
              fontSize: "clamp(27px, 4vw, 40px)",
              lineHeight: 1.35,
            }}
          >
            ご注文内容が分かるものを
            <br />
            お手元にご用意ください。
          </h2>

          <p
            style={{
              margin: 0,
              fontSize: "15px",
              lineHeight: 1.9,
            }}
          >
            ご注文後のお問い合わせは、お名前・電話番号・商品名・発送先などを
            お知らせいただくと、確認がスムーズです。
          </p>
        </div>

        {/* お問い合わせ方法 */}
        <div
          className="contactGrid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
            gap: "28px",
          }}
        >
          {/* 電話 */}
          <section style={cardStyle}>
            <p style={englishLabelStyle}>TELEPHONE</p>

            <h2 style={cardTitleStyle}>お電話</h2>

            <p style={cardTextStyle}>
              商品、ご注文、発送状況などについて、
              お気軽にお問い合わせください。
            </p>

            <a
              href="tel:09082515523"
              style={{
                display: "inline-block",
                marginTop: "auto",
                color: "#2f2f2f",
                fontSize: "clamp(25px, 4vw, 34px)",
                fontWeight: 700,
                lineHeight: 1.4,
                textDecoration: "none",
              }}
            >
              090-8251-5523
            </a>

            <p
              style={{
                margin: "14px 0 0",
                color: "#888",
                fontSize: "13px",
                lineHeight: 1.8,
              }}
            >
              園主：中川 敏浩
              <br />
              作業中は電話に出られない場合があります。
            </p>
          </section>

          {/* メール */}
          <section style={cardStyle}>
            <p style={englishLabelStyle}>EMAIL</p>

            <h2 style={cardTitleStyle}>メール</h2>

            <p style={cardTextStyle}>
              営業時間外のお問い合わせや、写真を添付したい場合はこちらをご利用ください。
            </p>

            <a
              href="mailto:mitsubachi-kajuen@ae.auone-net.jp"
              style={{
                display: "inline-block",
                marginTop: "auto",
                color: "#2f2f2f",
                fontSize: "15px",
                fontWeight: 700,
                lineHeight: 1.7,
                overflowWrap: "anywhere",
                textDecoration: "none",
              }}
            >
              mitsubachi-kajuen@
              <br />
              ae.auone-net.jp
            </a>

            <p
              style={{
                margin: "14px 0 0",
                color: "#888",
                fontSize: "13px",
                lineHeight: 1.8,
              }}
            >
              内容を確認後、順次返信いたします。
            </p>
          </section>

          {/* FAX */}
          <section style={cardStyle}>
            <p style={englishLabelStyle}>FAX</p>

            <h2 style={cardTitleStyle}>ファックス</h2>

            <p style={cardTextStyle}>
              贈答品や複数のお届け先へのご注文など、紙でのご連絡にも対応しています。
            </p>

            <p
              style={{
                margin: "auto 0 0",
                color: "#2f2f2f",
                fontSize: "clamp(25px, 4vw, 34px)",
                fontWeight: 700,
                lineHeight: 1.4,
              }}
            >
              0237-51-4041
            </p>

            <p
              style={{
                margin: "14px 0 0",
                color: "#888",
                fontSize: "13px",
                lineHeight: 1.8,
              }}
            >
              お名前とご連絡先を必ずご記入ください。
            </p>
          </section>

          {/* Instagram */}
          <section style={cardStyle}>
            <p style={englishLabelStyle}>INSTAGRAM</p>

            <h2 style={cardTitleStyle}>Instagram</h2>

            <p style={cardTextStyle}>
              果樹園の日々や、季節の果物、販売情報などを発信しています。
            </p>

            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="みつばち果樹園のInstagramを見る"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "12px",
                marginTop: "auto",
                color: "#2f2f2f",
                fontSize: "15px",
                fontWeight: 700,
                textDecoration: "none",
              }}
            >
              <span
                aria-hidden="true"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "42px",
                  height: "42px",
                  borderRadius: "12px",
                  background:
                    "linear-gradient(135deg, #833ab4 0%, #fd1d1d 55%, #fcb045 100%)",
                  color: "#fff",
                  flexShrink: 0,
                }}
              >
                <svg
                  width="23"
                  height="23"
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

            <p
              style={{
                margin: "14px 0 0",
                color: "#888",
                fontSize: "13px",
                lineHeight: 1.8,
              }}
            >
              DMの確認にはお時間をいただく場合があります。
            </p>
          </section>
        </div>

        {/* お問い合わせ時の必要事項 */}
        <section
          style={{
            marginTop: "72px",
            padding: "40px",
            border: "1px solid #ecece8",
            borderRadius: "28px",
            background: "#fff",
            boxShadow: "0 18px 50px rgba(0,0,0,0.05)",
          }}
        >
          <p style={englishLabelStyle}>INFORMATION</p>

          <h2
            style={{
              margin: "0 0 24px",
              color: "#2f2f2f",
              fontSize: "clamp(27px, 4vw, 40px)",
              lineHeight: 1.4,
            }}
          >
            お問い合わせの際に
            <br />
            お知らせください
          </h2>

          <div
            className="informationGrid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
              gap: "14px 28px",
              color: "#555",
              fontSize: "15px",
              lineHeight: 1.8,
            }}
          >
            {[
              "お名前",
              "電話番号",
              "ご注文の商品",
              "お届け先のお名前",
              "ご注文日",
              "お問い合わせ内容",
            ].map((item) => (
              <div
                key={item}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  padding: "14px 0",
                  borderBottom: "1px solid #eee",
                }}
              >
                <span
                  aria-hidden="true"
                  style={{
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    background: "#ffde59",
                    flexShrink: 0,
                  }}
                />

                <span>{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* 注文ページへの導線 */}
        <section
          style={{
            marginTop: "72px",
            padding: "56px 28px",
            borderRadius: "32px",
            background: "#2f2f2f",
            color: "#fff",
            textAlign: "center",
          }}
        >
          <p
            style={{
              margin: "0 0 14px",
              color: "#cfcfca",
              fontSize: "12px",
              fontWeight: 700,
              letterSpacing: "0.18em",
            }}
          >
            ORDER
          </p>

          <h2
            style={{
              margin: "0 0 20px",
              fontSize: "clamp(28px, 5vw, 46px)",
              lineHeight: 1.4,
            }}
          >
            商品のご注文について
          </h2>

          <p
            style={{
              maxWidth: "620px",
              margin: "0 auto 28px",
              color: "#d7d7d2",
              fontSize: "15px",
              lineHeight: 2,
            }}
          >
            オンライン注文の受付状況や、現在販売している商品については、
            注文ページをご確認ください。
          </p>

          <Link
            href="/order"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              minHeight: "52px",
              padding: "0 28px",
              borderRadius: "999px",
              background: "#fff",
              color: "#2f2f2f",
              fontSize: "15px",
              fontWeight: 700,
              textDecoration: "none",
            }}
          >
            注文ページを見る →
          </Link>
        </section>
      </section>

      <style>{`
        @media (max-width: 720px) {
          .contactGrid,
          .informationGrid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </main>
  );
}

const cardStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  minHeight: "320px",
  padding: "32px",
  border: "1px solid #ecece8",
  borderRadius: "28px",
  background: "#fff",
  boxShadow: "0 18px 50px rgba(0,0,0,0.055)",
};

const englishLabelStyle: React.CSSProperties = {
  margin: "0 0 12px",
  color: "#888",
  fontSize: "12px",
  fontWeight: 700,
  letterSpacing: "0.18em",
};

const cardTitleStyle: React.CSSProperties = {
  margin: "0 0 18px",
  color: "#2f2f2f",
  fontSize: "30px",
  lineHeight: 1.4,
};

const cardTextStyle: React.CSSProperties = {
  margin: "0 0 28px",
  color: "#666",
  fontSize: "15px",
  lineHeight: 1.9,
};