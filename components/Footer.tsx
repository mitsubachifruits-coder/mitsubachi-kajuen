import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-main">
          {/* 左側 */}
          <div className="footer-brand">
            <Link
              href="/"
              className="footer-logo"
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

            <p className="footer-catchphrase">Bee my friends! 🐝</p>

            <address className="footer-address">
              〒999-3751
              <br />
              山形県東根市若木通り13-1
            </address>

            <p className="footer-farm-message">
              みつばちが育んだ自然の恵み
            </p>
          </div>

          {/* 右側 */}
          <div className="footer-navigation-area">
            <a
              href="https://www.instagram.com/mitsubachi_kajuen/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="みつばち果樹園のInstagramを見る"
              className="instagram-link"
            >
              <span className="instagram-icon" aria-hidden="true">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="3"
                    y="3"
                    width="18"
                    height="18"
                    rx="5"
                    stroke="currentColor"
                    strokeWidth="2"
                  />

                  <circle
                    cx="12"
                    cy="12"
                    r="4"
                    stroke="currentColor"
                    strokeWidth="2"
                  />

                  <circle
                    cx="17.5"
                    cy="6.5"
                    r="1.2"
                    fill="currentColor"
                  />
                </svg>
              </span>

              <span className="instagram-text">
                <span className="instagram-label">INSTAGRAM</span>

                <span className="instagram-account">
                  @mitsubachi_kajuen
                </span>
              </span>

              <span className="instagram-arrow" aria-hidden="true">
                ↗
              </span>
            </a>

            <nav
              className="footer-nav"
              aria-label="フッターナビゲーション"
            >
              <Link href="/about">About</Link>
              <Link href="/fruits">Fruits</Link>
              <Link href="/story">Story</Link>
              <Link href="/contact">Contact</Link>
              <Link href="/order">Order</Link>
            </nav>

            <nav className="footer-legal-nav" aria-label="法務情報">
              <Link href="/privacy">プライバシーポリシー</Link>
              <Link href="/legal">特定商取引法に基づく表示</Link>
            </nav>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {currentYear} みつばち果樹園</p>
          <p>YAMAGATA · HIGASHINE</p>
        </div>
      </div>

      <style>{`
        .site-footer {
          width: 100%;
          padding: 72px 0 40px;
          overflow: hidden;
          border-top: 1px solid #e2e1dc;
          background:
            radial-gradient(
              circle at 92% 8%,
              rgba(255, 222, 89, 0.14),
              transparent 25%
            ),
            radial-gradient(
              circle at 8% 90%,
              rgba(0, 191, 99, 0.07),
              transparent 28%
            ),
            #f4f3ef;
          color: #3f3f3a;
          box-sizing: border-box;
        }

        /*
         * デスクトップ
         * 元のデザインから約75%程度にコンパクト化
         */
        .footer-inner {
          width: min(960px, calc(100% - 64px));
          margin: 0 auto;
        }

        .footer-main {
          display: grid;
          grid-template-columns:
            minmax(260px, 1fr)
            minmax(340px, 1fr);
          gap: 76px;
          align-items: end;
        }

        .footer-brand {
          min-width: 0;
        }

        .footer-logo {
          display: inline-flex;
          align-items: center;
          margin-bottom: 23px;
          color: inherit;
          font-size: clamp(38px, 3.5vw, 47px);
          font-weight: 400;
          line-height: 1;
          letter-spacing: 0;
          text-decoration: none;
          white-space: nowrap;
          transition:
            transform 180ms ease,
            opacity 180ms ease;
        }

        .footer-logo:hover {
          transform: translateY(-2px);
          opacity: 0.86;
        }

        .footer-catchphrase {
          margin: 0 0 16px;
          color: #343430;
          font-size: 13px;
          font-weight: 700;
          line-height: 1.6;
        }

        .footer-address {
          margin: 0;
          color: #72726c;
          font-size: 11px;
          font-style: normal;
          line-height: 1.9;
        }

        .footer-farm-message {
          margin: 14px 0 0;
          color: #92928b;
          font-size: 10px;
          line-height: 1.8;
          letter-spacing: 0.05em;
        }

        .footer-navigation-area {
          display: flex;
          min-width: 0;
          flex-direction: column;
          align-items: flex-end;
          gap: 29px;
        }

        .instagram-link {
          display: flex;
          width: min(100%, 340px);
          min-height: 64px;
          align-items: center;
          gap: 13px;
          padding: 10px 14px;
          box-sizing: border-box;
          border: 1px solid #deddd7;
          border-radius: 17px;
          background: rgba(255, 255, 255, 0.72);
          color: #3f3f3a;
          text-decoration: none;
          box-shadow: 0 9px 28px rgba(52, 52, 45, 0.04);
          transition:
            transform 200ms ease,
            border-color 200ms ease,
            box-shadow 200ms ease;
        }

        .instagram-link:hover {
          border-color: #c7c6bf;
          box-shadow: 0 15px 36px rgba(52, 52, 45, 0.08);
          transform: translateY(-3px);
        }

        .instagram-icon {
          display: inline-flex;
          width: 38px;
          height: 38px;
          flex: 0 0 auto;
          align-items: center;
          justify-content: center;
          border-radius: 11px;
          background: linear-gradient(
            135deg,
            #833ab4 0%,
            #fd1d1d 55%,
            #fcb045 100%
          );
          color: #ffffff;
          box-shadow: 0 6px 17px rgba(176, 55, 104, 0.18);
        }

        .instagram-text {
          display: flex;
          min-width: 0;
          flex: 1;
          flex-direction: column;
          gap: 2px;
        }

        .instagram-label {
          color: #999992;
          font-size: 8px;
          font-weight: 700;
          line-height: 1.4;
          letter-spacing: 0.18em;
        }

        .instagram-account {
          overflow: hidden;
          color: #41413d;
          font-size: 12px;
          font-weight: 700;
          line-height: 1.5;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .instagram-arrow {
          display: inline-flex;
          width: 32px;
          height: 32px;
          flex: 0 0 auto;
          align-items: center;
          justify-content: center;
          border: 1px solid #deddd7;
          border-radius: 999px;
          color: #676761;
          font-size: 14px;
          transition:
            background 180ms ease,
            color 180ms ease,
            transform 180ms ease;
        }

        .instagram-link:hover .instagram-arrow {
          background: #343431;
          color: #ffffff;
          transform: rotate(5deg);
        }

        .footer-nav {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          gap: clamp(18px, 2.1vw, 29px);
          flex-wrap: wrap;
        }

        .footer-nav a {
          position: relative;
          padding: 6px 0;
          color: #5f5f59;
          font-size: 12px;
          font-weight: 600;
          line-height: 1.4;
          letter-spacing: 0.045em;
          text-decoration: none;
          white-space: nowrap;
          transition: color 180ms ease;
        }

        .footer-nav a::after {
          position: absolute;
          right: 0;
          bottom: 1px;
          left: 0;
          height: 1px;
          background: #343431;
          content: "";
          transform: scaleX(0);
          transform-origin: right center;
          transition: transform 220ms ease;
        }

        .footer-nav a:hover {
          color: #282825;
        }

        .footer-nav a:hover::after {
          transform: scaleX(1);
          transform-origin: left center;
        }

        .footer-legal-nav {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          gap: 18px;
          flex-wrap: wrap;
        }

        .footer-legal-nav a {
          color: #85857e;
          font-size: 9px;
          font-weight: 600;
          line-height: 1.6;
          text-decoration: none;
          transition: color 180ms ease;
        }

        .footer-legal-nav a:hover {
          color: #3f3f3a;
        }

        .footer-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          margin-top: 57px;
          padding-top: 21px;
          border-top: 1px solid #deddd7;
        }

        .footer-bottom p {
          margin: 0;
          color: #999992;
          font-size: 9px;
          line-height: 1.5;
          letter-spacing: 0.09em;
        }

        /*
         * タブレット
         * 現在のデザイン・サイズ感を維持
         */
        @media (max-width: 900px) {
          .site-footer {
            padding: 78px 0 46px;
          }

          .footer-inner {
            width: min(100% - 40px, 1180px);
          }

          .footer-main {
            grid-template-columns: 1fr;
            gap: 62px;
          }

          .footer-logo {
            margin-bottom: 30px;
            font-size: clamp(48px, 4.5vw, 62px);
          }

          .footer-catchphrase {
            margin-bottom: 22px;
            font-size: 17px;
          }

          .footer-address {
            font-size: 14px;
          }

          .footer-farm-message {
            margin-top: 18px;
            font-size: 13px;
          }

          .footer-navigation-area {
            align-items: flex-start;
            gap: 38px;
          }

          .instagram-link {
            width: min(100%, 500px);
            min-height: 82px;
            gap: 17px;
            padding: 14px 18px;
            border-radius: 22px;
          }

          .instagram-icon {
            width: 48px;
            height: 48px;
            border-radius: 14px;
          }

          .instagram-icon svg {
            width: 22px;
            height: 22px;
          }

          .instagram-label {
            font-size: 10px;
          }

          .instagram-account {
            font-size: 15px;
          }

          .instagram-arrow {
            width: 40px;
            height: 40px;
            font-size: 17px;
          }

          .footer-nav,
          .footer-legal-nav {
            justify-content: flex-start;
          }

          .footer-nav {
            gap: clamp(22px, 2.7vw, 38px);
          }

          .footer-nav a {
            padding: 8px 0;
            font-size: 15px;
            letter-spacing: 0.035em;
          }

          .footer-legal-nav {
            gap: 24px;
          }

          .footer-legal-nav a {
            font-size: 12px;
          }

          .footer-bottom {
            margin-top: 76px;
            padding-top: 28px;
          }

          .footer-bottom p {
            font-size: 11px;
          }
        }

        /*
         * スマートフォン
         * 現在のデザインを維持
         */
        @media (max-width: 560px) {
          .site-footer {
            padding: 68px 0 38px;
          }

          .footer-inner {
            width: calc(100% - 32px);
          }

          .footer-main {
            gap: 52px;
          }

          .footer-logo {
            font-size: clamp(42px, 12vw, 52px);
          }

          .instagram-link {
            min-height: 76px;
            padding: 12px 14px;
            border-radius: 19px;
          }

          .instagram-icon {
            width: 46px;
            height: 46px;
          }

          .instagram-account {
            font-size: 14px;
          }

          .instagram-arrow {
            width: 36px;
            height: 36px;
          }

          .footer-nav {
            gap: 18px 26px;
          }

          .footer-nav a {
            font-size: 14px;
          }

          .footer-legal-nav {
            align-items: flex-start;
            flex-direction: column;
            gap: 12px;
          }

          .footer-bottom {
            align-items: flex-start;
            flex-direction: column;
            gap: 10px;
            margin-top: 58px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .footer-logo,
          .instagram-link,
          .instagram-arrow,
          .footer-nav a,
          .footer-nav a::after,
          .footer-legal-nav a {
            transition: none;
          }
        }
      `}</style>
    </footer>
  );
}