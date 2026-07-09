import Link from "next/link";

export default function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">
        {/* ロゴ */}
        <Link href="/" className="header-logo">
          <span style={{ color: "#FF3131" }}>み</span>
          <span style={{ color: "#006DFF" }}>つ</span>
          <span style={{ color: "#00BF63" }}>ば</span>
          <span style={{ color: "#FFDE59" }}>ち</span>
          <span style={{ color: "#8C52FF" }}>果</span>
          <span style={{ color: "#00A1FF" }}>樹</span>
          <span style={{ color: "#FF66C4" }}>園</span>
        </Link>

        {/* ナビ */}
        <nav className="header-nav">
          <Link href="/about">About</Link>
          <Link href="/fruits">Fruits</Link>
          <Link href="/story">Story</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/order">Order</Link>
        </nav>
      </div>

      <style>{`
        .site-header {
          position: sticky;
          top: 0;
          z-index: 100;
          background: #fafaf9;
          border-bottom: 1px solid #eee;
        }

        .header-inner {
          max-width: 1100px;
          margin: 0 auto;
          padding: 28px 24px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 48px;
          box-sizing: border-box;
        }

        .header-logo {
          display: inline-flex;
          align-items: center;
          font-size: 48px;
          font-weight: 400;
          letter-spacing: 0em;
          line-height: 1;
          text-decoration: none;
          flex-shrink: 0;
        }

        .header-nav {
          display: flex;
          gap: 22px;
          flex-wrap: wrap;
          justify-content: flex-end;
          align-items: center;
          font-size: 14px;
          font-weight: 700;
          line-height: 1.4;
        }

        .header-nav a {
          color: #555;
          text-decoration: none;
          white-space: nowrap;
        }

        @media (max-width: 768px) {
          .header-inner {
            padding: 32px 24px 28px;
            flex-direction: column;
            align-items: flex-start;
            gap: 28px;
          }

          .header-logo {
            font-size: clamp(42px, 10.5vw, 48px);
          }

          .header-nav {
            width: 100%;
            gap: clamp(20px, 5.2vw, 40px);
            flex-wrap: nowrap;
            justify-content: flex-start;
            font-size: clamp(16px, 4vw, 22px);
            overflow-x: auto;
            -webkit-overflow-scrolling: touch;
            scrollbar-width: none;
          }

          .header-nav::-webkit-scrollbar {
            display: none;
          }
        }
      `}</style>
    </header>
  );
}