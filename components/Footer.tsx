import Link from "next/link";

export default function Footer() {
  return (
    <footer
      style={{
        padding: "96px 24px 56px",
        background: "#fafaf9",
        borderTop: "1px solid #eee",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          gap: "48px",
          flexWrap: "wrap",
        }}
      >
        <div>
          {/* ロゴ */}
          <Link
            href="/"
            style={{
              display: "inline-flex",
              alignItems: "center",
              fontSize: "48px",
              fontWeight: 900,
              letterSpacing: "0em",
              textDecoration: "none",
              marginBottom: "24px",
            }}
          >
            <span style={{ color: "#FF3131" }}>み</span>
            <span style={{ color: "#006DFF" }}>つ</span>
            <span style={{ color: "#00BF63" }}>ば</span>
            <span style={{ color: "#FFDE59" }}>ち</span>
            <span style={{ color: "#8C52FF" }}>果</span>
            <span style={{ color: "#00A1FF" }}>樹</span>
            <span style={{ color: "#FF66C4" }}>園</span>
          </Link>

          <p
            style={{
              margin: 0,
              color: "#777",
              fontSize: "14px",
              lineHeight: 1.9,
            }}
          >
            みつばち果樹園
            〒999-3701 山形県東根市神町若木通り13-1
            山形県東根市から、季節の果物をお届けします。
          </p>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            gap: "18px",
          }}
        >
          <nav
            style={{
              display: "flex",
              gap: "22px",
              flexWrap: "wrap",
              justifyContent: "flex-end",
              fontSize: "14px",
              fontWeight: 700,
            }}
          >
            <Link href="/about" style={linkStyle}>
              About
            </Link>
            <Link href="/fruits" style={linkStyle}>
              Fruits
            </Link>
            <Link href="/story" style={linkStyle}>
              Story
            </Link>
            <Link href="/contact" style={linkStyle}>
              Contact
            </Link>
            <Link href="/order" style={linkStyle}>
              Order
            </Link>
          </nav>

          <Link
            href="/legal"
            style={{
              color: "#777",
              textDecoration: "none",
              fontSize: "13px",
              fontWeight: 600,
            }}
          >
            特定商取引法に基づく表示
          </Link>

          <p
            style={{
              margin: 0,
              color: "#999",
              fontSize: "12px",
            }}
          >
            © {new Date().getFullYear()} みつばち果樹園
          </p>
        </div>
      </div>
    </footer>
  );
}

const linkStyle: React.CSSProperties = {
  color: "#555",
  textDecoration: "none",
};