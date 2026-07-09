import Link from "next/link";

export default function Footer() {
  return (
    <footer
      style={{
        background: "#fafaf9",
        borderTop: "1px solid #ecece8",
        padding: "48px 24px",
        marginTop: "80px",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: "24px",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        {/* ロゴ */}
        <Link
          href="/"
          style={{
            display: "inline-flex",
            alignItems: "center",
            fontSize: "28px",
            fontWeight: 900,
            letterSpacing: "0em",
            textDecoration: "none",
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

        {/* ナビゲーション */}
        <nav
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "18px",
            fontSize: "14px",
          }}
        >
          <Link href="/" style={linkStyle}>
            Home
          </Link>
          <Link href="/story" style={linkStyle}>
            Story
          </Link>
          <Link href="/fruits" style={linkStyle}>
            Fruits
          </Link>
          <Link href="/order" style={linkStyle}>
            Order
          </Link>
          <Link href="/contact" style={linkStyle}>
            Contact
          </Link>
          <Link href="/legal" style={linkStyle}>
            特定商取引法に基づく表示
          </Link>
        </nav>

        <p
          style={{
            margin: 0,
            color: "#777",
            fontSize: "13px",
            lineHeight: 1.8,
          }}
        >
          山形県東根市から、季節の果物をお届けします。
          <br />
          © {new Date().getFullYear()} みつばち果樹園
        </p>
      </div>
    </footer>
  );
}

const linkStyle: React.CSSProperties = {
  color: "#555",
  textDecoration: "none",
  fontWeight: 700,
};