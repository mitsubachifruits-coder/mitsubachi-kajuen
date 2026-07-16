import Link from "next/link";

export default function Header() {
  return (
    <header className="mitsubachi-site-header">
      <div className="mitsubachi-header-inner">
        {/* ロゴ */}
        <Link
          href="/"
          className="mitsubachi-header-logo"
          aria-label="みつばち果樹園 ホーム"
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
          className="mitsubachi-header-nav"
          aria-label="メインナビゲーション"
        >
          <Link href="/about" className="mitsubachi-header-nav-link">
            About
          </Link>

          <Link href="/fruits" className="mitsubachi-header-nav-link">
            Fruits
          </Link>

          <Link href="/story" className="mitsubachi-header-nav-link">
            Story
          </Link>

          <Link href="/contact" className="mitsubachi-header-nav-link">
            Contact
          </Link>

          <Link href="/order" className="mitsubachi-header-order-link">
            <span className="mitsubachi-header-order-text">Order</span>

            <span
              className="mitsubachi-header-order-arrow"
              aria-hidden="true"
            >
              →
            </span>
          </Link>
        </nav>
      </div>

      <style>{`
        .mitsubachi-site-header {
          position: sticky;
          top: 0;
          z-index: 1000;
          width: 100%;
          box-sizing: border-box;
          border-bottom: 1px solid rgba(220, 219, 213, 0.85);
          background: rgba(250, 250, 249, 0.94);
          backdrop-filter: blur(18px);
          -webkit-backdrop-filter: blur(18px);
        }

        .mitsubachi-header-inner {
          display: flex;
          width: min(1180px, calc(100% - 48px));
          min-height: 116px;
          margin: 0 auto;
          align-items: center;
          justify-content: space-between;
          gap: 56px;
          box-sizing: border-box;
        }

        .mitsubachi-header-logo {
          display: inline-flex;
          flex: 0 0 auto;
          align-items: center;
          color: inherit;
          font-size: clamp(48px, 4.5vw, 62px);
          font-weight: 400;
          line-height: 1;
          letter-spacing: 0;
          text-decoration: none;
          white-space: nowrap;
          transition:
            transform 180ms ease,
            opacity 180ms ease;
        }

        .mitsubachi-header-logo:hover {
          transform: translateY(-1px);
          opacity: 0.88;
        }

        .mitsubachi-header-nav {
          display: flex;
          min-width: 0;
          flex: 0 1 auto;
          align-items: center;
          justify-content: flex-end;
          gap: clamp(22px, 2.7vw, 38px);
          box-sizing: border-box;
        }

        .mitsubachi-header-nav-link {
          position: relative;
          display: inline-flex;
          flex: 0 0 auto;
          align-items: center;
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

        .mitsubachi-header-nav-link::after {
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

        .mitsubachi-header-nav-link:hover {
          color: #282825;
        }

        .mitsubachi-header-nav-link:hover::after {
          transform: scaleX(1);
          transform-origin: left center;
        }

        .mitsubachi-header-order-link {
          position: relative;
          display: inline-flex;
          width: auto;
          min-width: max-content;
          min-height: 48px;
          flex: 0 0 auto;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 0 22px;
          box-sizing: border-box;
          border: 1px solid #d9d8d2;
          border-radius: 999px;
          background: #ffffff;
          color: #3f3f3a;
          font-size: 15px;
          font-weight: 600;
          line-height: 1.4;
          letter-spacing: 0.035em;
          text-decoration: none;
          white-space: nowrap;
          box-shadow: 0 8px 24px rgba(52, 52, 45, 0.045);
          transition:
            color 180ms ease,
            border-color 180ms ease,
            background 180ms ease,
            transform 180ms ease,
            box-shadow 180ms ease;
        }

        .mitsubachi-header-order-link::before,
        .mitsubachi-header-order-link::after {
          display: none;
          content: none;
        }

        .mitsubachi-header-order-link:hover {
          border-color: #343431;
          background: #343431;
          color: #ffffff;
          transform: translateY(-2px);
          box-shadow: 0 12px 28px rgba(52, 52, 45, 0.1);
        }

        .mitsubachi-header-order-text {
          display: inline-block;
          flex: 0 0 auto;
        }

        .mitsubachi-header-order-arrow {
          display: inline-block;
          flex: 0 0 auto;
          font-size: 17px;
          font-weight: 400;
          line-height: 1;
          transition: transform 180ms ease;
        }

        .mitsubachi-header-order-link:hover
          .mitsubachi-header-order-arrow {
          transform: translateX(3px);
        }

        @media (max-width: 900px) {
          .mitsubachi-header-inner {
            width: calc(100% - 40px);
            min-height: auto;
            padding: 24px 0 20px;
            flex-direction: column;
            align-items: flex-start;
            gap: 22px;
          }

          .mitsubachi-header-logo {
            font-size: clamp(46px, 9vw, 58px);
          }

          .mitsubachi-header-nav {
            width: calc(100% + 20px);
            max-width: none;
            justify-content: flex-start;
            gap: 28px;
            padding-right: 20px;
            box-sizing: border-box;
            overflow-x: auto;
            overflow-y: visible;
            overscroll-behavior-inline: contain;
            scroll-padding-right: 20px;
            scrollbar-width: none;
            -webkit-overflow-scrolling: touch;
          }

          .mitsubachi-header-nav::-webkit-scrollbar {
            display: none;
          }

          .mitsubachi-header-nav-link {
            flex: 0 0 auto;
            padding: 7px 0 11px;
            font-size: 15px;
          }

          .mitsubachi-header-order-link {
            width: auto;
            min-width: max-content;
            min-height: 42px;
            flex: 0 0 auto;
            justify-content: center;
            gap: 9px;
            padding: 0 17px;
            font-size: 15px;
          }
        }

        @media (max-width: 560px) {
          .mitsubachi-header-inner {
            width: calc(100% - 32px);
            padding: 22px 0 18px;
            gap: 20px;
          }

          .mitsubachi-header-logo {
            font-size: clamp(42px, 12vw, 52px);
          }

          .mitsubachi-header-nav {
            width: calc(100% + 16px);
            gap: 24px;
            padding-right: 16px;
            scroll-padding-right: 16px;
          }

          .mitsubachi-header-nav-link {
            font-size: 14px;
          }

          .mitsubachi-header-order-link {
            width: auto;
            min-width: max-content;
            min-height: 40px;
            flex: 0 0 auto;
            gap: 8px;
            padding: 0 15px;
            font-size: 14px;
          }

          .mitsubachi-header-order-arrow {
            font-size: 16px;
          }
        }
      `}</style>
    </header>
  );
}