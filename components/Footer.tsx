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
              〒999-3701
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
                  width="22"
                  height="22"
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
          padding: 96px 0 54px;
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

        .footer-inner {
          width: min(1180px, calc(100% - 48px));
          margin: 0 auto;
        }

        .footer-main {
          display: grid;
          grid-template-columns: minmax(320px, 1fr) minmax(420px, 1fr);
          gap: 100px;
          align-items: end;
        }

        .footer-brand {
          min-width: 0;
        }

        .footer-logo {
          display: inline-flex;
          align-items: center;
          margin-bottom: 30px;
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

        .footer-logo:hover {
          transform: translateY(-2px);
          opacity: 0.86;
        }

        .footer-catchphrase {
          margin: 0 0 22px;
          color: #343430;
          font-size: 17px;
          font-weight: 700;
          line-height: 1.6;
        }

        .footer-address {
          margin: 0;
          color: #72726c;
          font-size: 14px;
          font-style: normal;
          line-height: 1.9;
        }

        .footer-farm-message {
          margin: 18px 0 0;
          color: #92928b;
          font-size: 13px;
          line-height: 1.8;
          letter-spacing: 0.04em;
        }

        .footer-navigation-area {
          display: flex;
          min-width: 0;
          flex-direction: column;
          align-items: flex-end;
          gap: 38px;
        }

        .instagram-link {
          display: flex;
          width: min(100%, 430px);
          min-height: 82px;
          align-items: center;
          gap: 17px;
          padding: 14px 18px;
          border: 1px solid #deddd7;
          border-radius: 22px;
          background: rgba(255, 255, 255, 0.72);
          color: #3f3f3a;
          text-decoration: none;
          box-shadow: 0 12px 38px rgba(52, 52, 45, 0.045);
          transition:
            transform 200ms ease,
            border-color 200ms ease,
            box-shadow 200ms ease;
        }

        .instagram-link:hover {
          border-color: #c7c6bf;
          box-shadow: 0 20px 48px rgba(52, 52, 45, 0.09);
          transform: translateY(-3px);
        }

        .instagram-icon {
          display: inline-flex;
          width: 48px;
          height: 48px;
          flex-shrink: 0;
          align-items: center;
          justify-content: center;
          border-radius: 14px;
          background: linear-gradient(
            135deg,
            #833ab4 0%,
            #fd1d1d 55%,
            #fcb045 100%
          );
          color: #ffffff;
          box-shadow: 0 8px 22px rgba(176, 55, 104, 0.2);
        }

        .instagram-text {
          display: flex;
          min-width: 0;
          flex: 1;
          flex-direction: column;
          gap: 3px;
        }

        .instagram-label {
          color: #999992;
          font-size: 10px;
          font-weight: 700;
          line-height: 1.4;
          letter-spacing: 0.18em;
        }

        .instagram-account {
          overflow: hidden;
          color: #41413d;
          font-size: 15px;
          font-weight: 700;
          line-height: 1.5;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .instagram-arrow {
          display: inline-flex;
          width: 40px;
          height: 40px;
          flex-shrink: 0;
          align-items: center;
          justify-content: center;
          border: 1px solid #deddd7;
          border-radius: 999px;
          color: #676761;
          font-size: 17px;
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
          gap: clamp(22px, 2.7vw, 38px);
          flex-wrap: wrap;
        }

        .footer-nav a {
          position: relative;
          padding: 8px 0;
          color: #5f5f59;
          font-size: 15px;
          font-weight: 600;
          line-height: 1.4;
          letter-spacing: 0.035em;
          text-decoration: none;
          white-space: nowrap;
          transition: color 180ms ease;
        }

        .footer-nav a::after {
          position: absolute;
          right: 0;
          bottom: 2px;
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
          gap: 24px;
          flex-wrap: wrap;
        }

        .footer-legal-nav a {
          color: #85857e;
          font-size: 12px;
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
          gap: 30px;
          margin-top: 76px;
          padding-top: 28px;
          border-top: 1px solid #deddd7;
        }

        .footer-bottom p {
          margin: 0;
          color: #999992;
          font-size: 11px;
          line-height: 1.5;
          letter-spacing: 0.09em;
        }

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

          .footer-navigation-area {
            align-items: flex-start;
          }

          .instagram-link {
            width: min(100%, 500px);
          }

          .footer-nav,
          .footer-legal-nav {
            justify-content: flex-start;
          }
        }

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
      `}</style>
    </footer>
  );
}