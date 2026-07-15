import Link from "next/link";

export default function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">
        {/* ロゴ */}
        <Link href="/" className="header-logo" aria-label="みつばち果樹園 ホーム">
          <span style={{ color: "#FF3131" }}>み</span>
          <span style={{ color: "#006DFF" }}>つ</span>
          <span style={{ color: "#00BF63" }}>ば</span>
          <span style={{ color: "#FFDE59" }}>ち</span>
          <span style={{ color: "#8C52FF" }}>果</span>
          <span style={{ color: "#00A1FF" }}>樹</span>
          <span style={{ color: "#FF66C4" }}>園</span>
        </Link>

        {/* ナビゲーション */}
        <nav className="header-nav" aria-label="メインナビゲーション">
          <Link href="/about">About</Link>
          <Link href="/fruits">Fruits</Link>
          <Link href="/story">Story</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/order" className="order-link">
            Order
            <span aria-hidden="true">→</span>
          </Link>
        </nav>
      </div>

      <style>{`
        .site-header {
          position: sticky;
          top: 0;
          z-index: 100;
          width: 100%;
          border-bottom: 1px solid rgba(220, 219, 213, 0.85);
          background: rgba(250, 250, 249, 0.94);
          backdrop-filter: blur(18px);
          -webkit-backdrop-filter: blur(18px);
        }

        .header-inner {
          display: flex;
          width: min(1180px, calc(100% - 48px));
          min-height: 116px;
          margin: 0 auto;
          align-items: center;
          justify-content: space-between;
          gap: 56px;
          box-sizing: border-box;
        }

        .header-logo {
          display: inline-flex;
          flex-shrink: 0;
          align-items: center;
          color: inherit;
          font-size: clamp(48px, 4.5vw, 62px);
          font-weight: 400;
          line-height: 1;
          letter-spacing: 0;
          text-decoration: none;
          transition:
            transform 180ms ease,
            opacity 180ms ease;
        }

        .header-logo:hover {
          transform: translateY(-1px);
          opacity: 0.88;
        }

        .header-nav {
          display: flex;
          min-width: 0;
          align-items: center;
          justify-content: flex-end;
          gap: clamp(22px, 2.7vw, 38px);
        }

        .header-nav a {
          position: relative;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 12px 0;
          color: #666660;
          font-size: 15px;
          font-weight: 600;
          line-height: 1.4;
          letter-spacing: 0.035em;
          text-decoration: none;
          white-space: nowrap;
          transition: color 180ms ease;
        }

        .header-nav a::after {
          position: absolute;
          right: 0;
          bottom: 5px;
          left: 0;
          height: 1px;
          background: #363632;
          content: "";
          transform: scaleX(0);
          transform-origin: right center;
          transition: transform 220ms ease;
        }

        .header-nav a:hover {
          color: #282825;
        }

        .header-nav a:hover::after {
          transform: scaleX(1);
          transform-origin: left center;
        }

        .header-nav .order-link {
          min-height: 48px;
          padding: 0 20px;
          border: 1px solid #d9d8d2;
          border-radius: 999px;
          background: #ffffff;
          color: #3f3f3a;
          box-shadow: 0 8px 24px rgba(52, 52, 45, 0.045);
          transition:
            color 180ms ease,
            border-color 180ms ease,
            background 180ms ease,
            transform 180ms ease;
        }

        .header-nav .order-link::after {
          display: none;
        }

        .header-nav .order-link:hover {
          border-color: #343431;
          background: #343431;
          color: #ffffff;
          transform: translateY(-2px);
        }

        .order-link span {
          font-size: 17px;
          font-weight: 400;
          transition: transform 180ms ease;
        }

        .order-link:hover span {
          transform: translateX(3px);
        }

        @media (max-width: 900px) {
          .header-inner {
            width: min(100% - 40px, 1180px);
            min-height: auto;
            padding: 24px 0 20px;
            flex-direction: column;
            align-items: flex-start;
            gap: 22px;
          }

          .header-logo {
            font-size: clamp(46px, 9vw, 58px);
          }

          .header-nav {
            width: 100%;
            justify-content: flex-start;
            gap: 28px;
            overflow-x: auto;
            overscroll-behavior-inline: contain;
            scrollbar-width: none;
            -webkit-overflow-scrolling: touch;
          }

          .header-nav::-webkit-scrollbar {
            display: none;
          }

          .header-nav a {
            flex: 0 0 auto;
            padding: 7px 0 11px;
            font-size: 15px;
          }

          .header-nav .order-link {
            min-height: 42px;
            padding: 0 17px;
          }
        }

        @media (max-width: 560px) {
          .header-inner {
            width: calc(100% - 32px);
            padding: 22px 0 18px;
            gap: 20px;
          }

          .header-logo {
            font-size: clamp(42px, 12vw, 52px);
          }

          .header-nav {
            gap: 24px;
          }

          .header-nav a {
            font-size: 14px;
          }

          .header-nav .order-link {
            min-height: 40px;
            padding: 0 15px;
          }
        }
      `}</style>
    </header>
  );
}