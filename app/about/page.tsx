import InstagramFeed from "@/components/InstagramFeed";
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
        fontSize: "88.8px",
        letterSpacing: "0em",
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

export default function About() {
  const shopGoogleMapsUrl =
    "https://www.google.com/maps/place/みつばちフルーツ/@38.4585069,140.3824658,808m/data=!3m2!1e3!4b1!4m6!3m5!1s0x5f8bddb815aa36a5:0xa3af7357704955ec!8m2!3d38.4585069!4d140.3824658!16s%2Fg%2F11pdn5drk_?entry=ttu&g_ep=EgoyMDI2MDcwOC4wIKXMDSoASAFQAw%3D%3D";

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
          ABOUT
        </p>

        <h1
          style={{
            fontSize: "clamp(42px, 7vw, 78px)",
            lineHeight: 1.1,
            margin: "0 0 56px",
          }}
        >
          <ColorLogo />
        </h1>

        <div style={{ fontSize: "18px", lineHeight: 2.1, color: "#4f4f4f" }}>
          <p>
            みつばち果樹園は、
            <strong>GI「東根さくらんぼ」</strong>生産者です。
          </p>

          <p>
            日本一のさくらんぼ生産量を誇るまち、
            <br />
            山形県東根市より、
            <br />
            もぎたてのおいしさを全国へお届けしています。
          </p>

          <p>
            四季の移ろいを感じながら、自然と向き合い、
            一粒一粒を大切に育てています。
          </p>

          <div
            style={{
              margin: "56px 0 72px",
              padding: "32px",
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
              ご来店のお客様へ
            </p>

            <h2
              style={{
                fontSize: "clamp(28px, 5vw, 46px)",
                lineHeight: 1.25,
                margin: "0 0 20px",
                color: "#5f3d00",
              }}
            >
              お店は、
              <br />
              みつばちフルーツです。
            </h2>

            <p style={{ marginBottom: "24px" }}>
              ナビで「みつばち果樹園」と検索すると、
              農園・作業場へ案内される場合があります。
              <br />
              ご来店・お買い物のお客様は、
              <strong>「みつばちフルーツ」</strong>
              へお越しください。
            </p>

            <a
              href={shopGoogleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                padding: "14px 24px",
                borderRadius: "999px",
                background: "#2f2f2f",
                color: "#fff",
                textDecoration: "none",
                fontSize: "15px",
                fontWeight: 700,
              }}
            >
              Google Mapsでお店を開く →
            </a>
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
                SHOP
              </p>

              <h2
                style={{
                  fontSize: "30px",
                  margin: "0 0 20px",
                  color: "#2f2f2f",
                }}
              >
                みつばちフルーツ
              </h2>

              <p>
                <strong>直営店・ご来店はこちら</strong>
              </p>

              <p>
                〒999-3701
                <br />
                山形県東根市東根甲4694-1
              </p>

              <div
                style={{
                  marginTop: "24px",
                  borderRadius: "22px",
                  overflow: "hidden",
                }}
              >
                <iframe
                  src="https://www.google.com/maps?q=山形県東根市東根甲4694-1&output=embed"
                  title="みつばちフルーツ Googleマップ"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  loading="lazy"
                />
              </div>

              <a
                href={shopGoogleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-block",
                  marginTop: "20px",
                  color: "#2f2f2f",
                  fontWeight: 700,
                  textDecoration: "none",
                }}
              >
                Google Mapsで開く →
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
                FARM
              </p>

              <h2
                style={{
                  fontSize: "30px",
                  margin: "0 0 20px",
                  color: "#2f2f2f",
                }}
              >
                みつばち果樹園
              </h2>

              <p>
                <strong>農園・作業場</strong>
              </p>

              <p>
                〒999-3751
                <br />
                山形県東根市若木通り1-13
              </p>

              <p
                style={{
                  padding: "14px 18px",
                  borderRadius: "18px",
                  background: "#fafaf9",
                  fontSize: "15px",
                  lineHeight: 1.8,
                  color: "#666",
                }}
              >
                ※こちらは収穫・発送作業を行う農園です。
                <br />
                直売でお買い求めのお客様は、
                みつばちフルーツへお越しください。
              </p>

              <div
                style={{
                  marginTop: "24px",
                  borderRadius: "22px",
                  overflow: "hidden",
                }}
              >
                <iframe
                  src="https://www.google.com/maps?q=山形県東根市若木通り1-13&output=embed"
                  title="みつばち果樹園 Googleマップ"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  loading="lazy"
                />
              </div>

              <a
                href="https://www.google.com/maps/search/?api=1&query=山形県東根市若木通り1-13"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-block",
                  marginTop: "20px",
                  color: "#2f2f2f",
                  fontWeight: 700,
                  textDecoration: "none",
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

          <h2
            style={{
              fontSize: "28px",
              marginBottom: "24px",
              color: "#2f2f2f",
            }}
          >
            みつばち果樹園
          </h2>

          <p>
            <strong>園主</strong>
            <br />
            中川 敏浩
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
              また会いたくなる、果樹園でありますように。
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}