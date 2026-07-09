import Link from "next/link";

export default function Header() {
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        background: "rgba(250, 250, 249, 0.96)",
        borderBottom: "1px solid #ecece8",
        backdropFilter: "blur(12px)",
      }}
    >
      <div
        style={{
          maxWidth: "1180px",
          margin: "0 auto",
          padding: "0 20px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "24px",
          minHeight: "88px",
          flexWrap: "wrap",
          boxSizing: "border-box",
        }}
      >
        {/* ロゴ */}
        <Link
          href="/"
          style={{
            display: "inline-flex",
            alignItems: "center",
            flexShrink: 0,
            fontSize: "clamp(32px, 7vw, 48px)",
            letterSpacing: "0em",
            fontWeight: 400,
            textDecoration: "none",
            lineHeight: 1,
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

        {/* ナビ */}
        <nav
          style={{
            display: "flex",
            gap: "clamp(14px, 3vw, 40px)",
            fontSize: "clamp(13px, 3.4vw, 17px)",
            letterSpacing: "0em",
            fontWeight: 400,
            flexWrap: "wrap",
            justifyContent: "flex-end",
            alignItems: "center",
            lineHeight: 1.2,
          }}
        >
          <Link href="/about" style={navLinkStyle}>
            About
          </Link>
          <Link href="/fruits" style={navLinkStyle}>
            Fruits
          </Link>
          <Link href="/story" style={navLinkStyle}>
            Story
          </Link>
          <Link href="/contact" style={navLinkStyle}>
            Contact
          </Link>
          <Link href="/order" style={navLinkStyle}>
            Order
          </Link>
        </nav>
      </div>
    </header>
  );
}

const navLinkStyle: React.CSSProperties = {
  color: "#444",
  textDecoration: "none",
  whiteSpace: "nowrap",
};