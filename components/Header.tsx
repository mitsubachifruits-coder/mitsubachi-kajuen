import Link from "next/link";

export default function Header() {
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        background: "#fafaf9",
        borderBottom: "1px solid #ecece8",
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: "88px",
        }}
      >
        {/* ロゴ */}
        <Link
        
          href="/"
          style={{
            display: "inLine-flex",
            alignItems: "center",
            fontSize: "48px",
            letterSpacing: "0em",
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
            gap: "40px",
            fontSize: "17px",
            letterSpacing: "0em",
            fontWeight: 400,
          }}
        >
          <Link href="/about">About</Link>
          <Link href="/fruits">Fruits</Link>
          <Link href="/story">Story</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/order">Order</Link>
        </nav>
      </div>

    </header>
  );
}