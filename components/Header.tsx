import Link from "next/link";

export default function Header() {
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        background: "#fafaf9",
        borderBottom: "1px solid #eee",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "40px 24px 32px",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: "28px",
          boxSizing: "border-box",
        }}
      >
        {/* ロゴ */}
        <Link
          href="/"
          style={{
            display: "inline-flex",
            alignItems: "center",
            fontSize: "clamp(48px, 13vw, 72px)",
            fontWeight: 400,
            letterSpacing: "0em",
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
            gap: "clamp(22px, 6vw, 40px)",
            flexWrap: "wrap",
            justifyContent: "flex-start",
            alignItems: "center",
            fontSize: "clamp(17px, 4.4vw, 22px)",
            fontWeight: 700,
            lineHeight: 1.4,
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
  color: "#555",
  textDecoration: "none",
  whiteSpace: "nowrap",
};