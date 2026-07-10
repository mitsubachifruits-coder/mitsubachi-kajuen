function ColorLogo() {
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
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        fontSize: "clamp(48px, 9vw, 88.8px)",
        letterSpacing: "0em",
        lineHeight: 1,
      }}
    >
      {letters.map((letter) => (
        <span key={letter.text} style={{ color: letter.color }}>
          {letter.text}
        </span>
      ))}
    </span>
  );
}

export default function OrderPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#fafaf9",
        padding: "120px 24px 80px",
        boxSizing: "border-box",
      }}
    >
      <section style={{ maxWidth: "980px", margin: "0 auto" }}>
        <p
          style={{
            color: "#888",
            letterSpacing: "0.25em",
            fontSize: "13px",
            marginBottom: "24px",
          }}
        >
          ORDER
        </p>

        <h1
          style={{
            fontSize: "clamp(42px, 7vw, 78px)",
            lineHeight: 1.1,
            margin: "0 0 56px",
          }}
        >
          ご注文について
        </h1>

        <div style={{ fontSize: "18px", lineHeight: 2.1, color: "#4f4f4f" }}>
          <div
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
                fontSize: "15px",
                letterSpacing: "0.12em",
                fontWeight: 700,
                marginBottom: "16px",
              }}
            >
              ただいま準備中です
            </p>

            <h2
              style={{
                fontSize: "clamp(30px, 6vw, 52px)",
                lineHeight: 1.25,
                margin: "0 0 24px",
                color: "#5f3d00",
              }}
            >
              現在、Web注文は
              <br />
              受付準備中です。
            </h2>

            <p style={{ marginBottom: "24px" }}>
              みつばち果樹園の注文ページをご覧いただき、
              ありがとうございます。
              <br />
              現在、オンライン注文フォームは調整中のため、
              このページからのご注文はまだ受け付けておりません。
            </p>

            <p style={{ margin: 0 }}>
              正式に準備が整い次第、こちらのページから
              さくらんぼ・りんごなどの季節の果物をご注文いただけるようにいたします。
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "28px",
              marginBottom: "72px",
            }}
          >
            <section
              style={{
                background: "#fff",
                borderRadius: "28px",
                padding: "32px",
                boxShadow: "0 18px 50px rgba(0,0,0,0.06)",
              }}
            >
              <p
                style={{
                  color: "#888",
                  letterSpacing: "0.18em",
                  fontSize: "12px",
                  fontWeight: 700,
                  marginBottom: "12px",
                }}
              >
                CONTACT
              </p>

              <h2
                style={{
                  fontSize: "30px",
                  margin: "0 0 20px",
                  color: "#2f2f2f",
                }}
              >
                お急ぎのお客様へ
              </h2>

              <p>
                現在のご注文・お問い合わせは、
                お電話またはFAXにてお願いいたします。
              </p>

              <p>
                <strong>TEL</strong>
                <br />
                090-8251-5523
              </p>

              <p>
                <strong>FAX</strong>
                <br />
                0237-51-4041
              </p>

              <a
                href="tel:09082515523"
                style={{
                  display: "inline-block",
                  marginTop: "12px",
                  padding: "14px 24px",
                  borderRadius: "999px",
                  background: "#2f2f2f",
                  color: "#fff",
                  textDecoration: "none",
                  fontSize: "15px",
                  fontWeight: 700,
                }}
              >
                電話をかける →
              </a>
            </section>

            <section
              style={{
                background: "#fff",
                borderRadius: "28px",
                padding: "32px",
                boxShadow: "0 18px 50px rgba(0,0,0,0.06)",
              }}
            >
              <p
                style={{
                  color: "#888",
                  letterSpacing: "0.18em",
                  fontSize: "12px",
                  fontWeight: 700,
                  marginBottom: "12px",
                }}
              >
                SHOP
              </p>

              <h2
                style={{
                  fontSize: "30px",
                  margin: "0 0 20px",
                  color: "#2f2f2f",
                }}
              >
                お店でのお買い物
              </h2>

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
                style={{
                  display: "inline-block",
                  marginTop: "12px",
                  padding: "14px 24px",
                  borderRadius: "999px",
                  background: "#2f2f2f",
                  color: "#fff",
                  textDecoration: "none",
                  fontSize: "15px",
                  fontWeight: 700,
                }}
              >
                Google Mapsで開く →
              </a>
            </section>
          </div>

          <hr
            style={{
              margin: "64px 0",
              border: "none",
              borderTop: "1px solid #ddd",
            }}
          />

          <div
            style={{
              marginTop: "72px",
              textAlign: "center",
            }}
          >
            <p
              style={{
                fontSize: "clamp(36px, 6vw, 60px)",
                lineHeight: 1.2,
                marginBottom: "20px",
              }}
            >
              <ColorLogo />
            </p>

            <p
              style={{
                fontSize: "24px",
                lineHeight: 1.7,
                color: "#2f2f2f",
                fontWeight: 700,
                marginBottom: "12px",
              }}
            >
              BeeMYFriends!
            </p>

            <p
              style={{
                fontSize: "20px",
                lineHeight: 2,
                color: "#2f2f2f",
                fontWeight: 600,
              }}
            >
              Web注文の準備が整うまで、もう少々お待ちください。
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}