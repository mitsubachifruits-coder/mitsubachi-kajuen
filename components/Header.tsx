"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const navigationItems = [
  {
    label: "About",
    href: "/about",
    number: "01",
  },
  {
    label: "Fruits",
    href: "/fruits",
    number: "02",
  },
  {
    label: "Story",
    href: "/story",
    number: "03",
  },
  {
    label: "Contact",
    href: "/contact",
    number: "04",
  },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!isMenuOpen) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <>
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

          {/* PCナビゲーション */}
          <nav
            className="mitsubachi-desktop-nav"
            aria-label="メインナビゲーション"
          >
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`mitsubachi-desktop-nav-link ${
                  pathname === item.href ? "is-active" : ""
                }`}
              >
                {item.label}
              </Link>
            ))}

            <Link
              href="/order"
              className={`mitsubachi-desktop-order-link ${
                pathname === "/order" ? "is-active" : ""
              }`}
            >
              <span>Order</span>
              <span
                className="mitsubachi-desktop-order-arrow"
                aria-hidden="true"
              >
                →
              </span>
            </Link>
          </nav>

          {/* スマホメニューボタン */}
          <button
            type="button"
            className={`mitsubachi-menu-button ${
              isMenuOpen ? "is-open" : ""
            }`}
            onClick={() => setIsMenuOpen((current) => !current)}
            aria-label={isMenuOpen ? "メニューを閉じる" : "メニューを開く"}
            aria-expanded={isMenuOpen}
            aria-controls="mitsubachi-mobile-menu"
          >
            <span className="mitsubachi-menu-button-text">
              {isMenuOpen ? "Close" : "Menu"}
            </span>

            <span
              className="mitsubachi-menu-button-icon"
              aria-hidden="true"
            >
              <span />
              <span />
            </span>
          </button>
        </div>
      </header>

      {/* スマホメニュー */}
      <div
        id="mitsubachi-mobile-menu"
        className={`mitsubachi-mobile-menu ${
          isMenuOpen ? "is-open" : ""
        }`}
        aria-hidden={!isMenuOpen}
      >
        <div className="mitsubachi-mobile-menu-inner">
          <div className="mitsubachi-mobile-menu-label">
            MENU
          </div>

          <nav
            className="mitsubachi-mobile-nav"
            aria-label="スマートフォン用ナビゲーション"
          >
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`mitsubachi-mobile-nav-link ${
                  pathname === item.href ? "is-active" : ""
                }`}
                tabIndex={isMenuOpen ? 0 : -1}
              >
                <span className="mitsubachi-mobile-nav-number">
                  {item.number}
                </span>

                <span className="mitsubachi-mobile-nav-text">
                  {item.label}
                </span>

                <span
                  className="mitsubachi-mobile-nav-arrow"
                  aria-hidden="true"
                >
                  ↗
                </span>
              </Link>
            ))}
          </nav>

          <Link
            href="/order"
            className={`mitsubachi-mobile-order-link ${
              pathname === "/order" ? "is-active" : ""
            }`}
            tabIndex={isMenuOpen ? 0 : -1}
          >
            <span>Order</span>

            <span
              className="mitsubachi-mobile-order-arrow"
              aria-hidden="true"
            >
              →
            </span>
          </Link>

          <div className="mitsubachi-mobile-menu-footer">
            <p>Fruit from Yamagata, Higashine.</p>
            <p>みつばちが育んだ、自然の恵み。</p>
          </div>
        </div>
      </div>

      <style>{`
        .mitsubachi-site-header {
          position: sticky;
          top: 0;
          z-index: 1000;
          width: 100%;
          box-sizing: border-box;
          border-bottom: 1px solid rgba(220, 219, 213, 0.82);
          background: rgba(250, 250, 249, 0.93);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
        }

        .mitsubachi-header-inner {
          display: flex;
          width: min(1180px, calc(100% - 48px));
          min-height: 116px;
          margin: 0 auto;
          align-items: center;
          justify-content: space-between;
          gap: 48px;
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

        .mitsubachi-desktop-nav {
          display: flex;
          min-width: 0;
          flex: 0 1 auto;
          align-items: center;
          justify-content: flex-end;
          gap: clamp(22px, 2.7vw, 38px);
        }

        .mitsubachi-desktop-nav-link {
          position: relative;
          display: inline-flex;
          flex: 0 0 auto;
          align-items: center;
          padding: 12px 0;
          color: #6a6a64;
          font-size: 15px;
          font-weight: 600;
          line-height: 1.4;
          letter-spacing: 0.035em;
          text-decoration: none;
          white-space: nowrap;
          transition:
            color 180ms ease,
            opacity 180ms ease;
        }

        .mitsubachi-desktop-nav-link::after {
          position: absolute;
          right: 0;
          bottom: 5px;
          left: 0;
          height: 1px;
          background: #353532;
          content: "";
          transform: scaleX(0);
          transform-origin: right center;
          transition: transform 220ms ease;
        }

        .mitsubachi-desktop-nav-link:hover,
        .mitsubachi-desktop-nav-link.is-active {
          color: #282825;
        }

        .mitsubachi-desktop-nav-link:hover::after,
        .mitsubachi-desktop-nav-link.is-active::after {
          transform: scaleX(1);
          transform-origin: left center;
        }

        .mitsubachi-desktop-order-link {
          display: inline-flex;
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

        .mitsubachi-desktop-order-link:hover,
        .mitsubachi-desktop-order-link.is-active {
          border-color: #343431;
          background: #343431;
          color: #ffffff;
          transform: translateY(-2px);
          box-shadow: 0 12px 28px rgba(52, 52, 45, 0.1);
        }

        .mitsubachi-desktop-order-arrow {
          display: inline-block;
          flex: 0 0 auto;
          font-size: 17px;
          font-weight: 400;
          line-height: 1;
          transition: transform 180ms ease;
        }

        .mitsubachi-desktop-order-link:hover
          .mitsubachi-desktop-order-arrow {
          transform: translateX(3px);
        }

        .mitsubachi-menu-button {
          display: none;
        }

        .mitsubachi-mobile-menu {
          display: none;
        }

        @media (max-width: 900px) {
          .mitsubachi-site-header {
            position: sticky;
          }

          .mitsubachi-header-inner {
            width: calc(100% - 32px);
            min-height: 94px;
            gap: 20px;
          }

          .mitsubachi-header-logo {
            min-width: 0;
            font-size: clamp(36px, 9.2vw, 50px);
          }

          .mitsubachi-desktop-nav {
            display: none;
          }

          .mitsubachi-menu-button {
            position: relative;
            display: inline-flex;
            min-width: 82px;
            height: 44px;
            flex: 0 0 auto;
            align-items: center;
            justify-content: center;
            gap: 10px;
            padding: 0 15px;
            border: 1px solid #d9d8d2;
            border-radius: 999px;
            background: rgba(255, 255, 255, 0.82);
            color: #3f3f3a;
            font-family: inherit;
            font-size: 12px;
            font-weight: 700;
            line-height: 1;
            letter-spacing: 0.08em;
            text-transform: uppercase;
            cursor: pointer;
            box-shadow: 0 8px 24px rgba(52, 52, 45, 0.045);
            transition:
              background 180ms ease,
              color 180ms ease,
              border-color 180ms ease;
          }

          .mitsubachi-menu-button.is-open {
            border-color: #343431;
            background: #343431;
            color: #ffffff;
          }

          .mitsubachi-menu-button-text {
            min-width: 32px;
            text-align: center;
          }

          .mitsubachi-menu-button-icon {
            position: relative;
            display: block;
            width: 14px;
            height: 10px;
          }

          .mitsubachi-menu-button-icon span {
            position: absolute;
            left: 0;
            display: block;
            width: 14px;
            height: 1px;
            background: currentColor;
            transition:
              top 220ms ease,
              transform 220ms ease;
          }

          .mitsubachi-menu-button-icon span:first-child {
            top: 2px;
          }

          .mitsubachi-menu-button-icon span:last-child {
            top: 8px;
          }

          .mitsubachi-menu-button.is-open
            .mitsubachi-menu-button-icon
            span:first-child {
            top: 5px;
            transform: rotate(45deg);
          }

          .mitsubachi-menu-button.is-open
            .mitsubachi-menu-button-icon
            span:last-child {
            top: 5px;
            transform: rotate(-45deg);
          }

          .mitsubachi-mobile-menu {
            position: fixed;
            inset: 94px 0 0;
            z-index: 999;
            display: block;
            visibility: hidden;
            overflow-y: auto;
            background: rgba(250, 250, 249, 0.98);
            opacity: 0;
            transform: translateY(-12px);
            pointer-events: none;
            backdrop-filter: blur(22px);
            -webkit-backdrop-filter: blur(22px);
            transition:
              opacity 240ms ease,
              transform 240ms ease,
              visibility 240ms ease;
          }

          .mitsubachi-mobile-menu.is-open {
            visibility: visible;
            opacity: 1;
            transform: translateY(0);
            pointer-events: auto;
          }

          .mitsubachi-mobile-menu-inner {
            width: calc(100% - 40px);
            max-width: 680px;
            min-height: calc(100% - 1px);
            margin: 0 auto;
            padding: 44px 0 40px;
            box-sizing: border-box;
          }

          .mitsubachi-mobile-menu-label {
            margin-bottom: 22px;
            color: #9a9a92;
            font-size: 11px;
            font-weight: 700;
            line-height: 1.4;
            letter-spacing: 0.28em;
          }

          .mitsubachi-mobile-nav {
            border-top: 1px solid #deddd7;
          }

          .mitsubachi-mobile-nav-link {
            display: grid;
            grid-template-columns: 34px minmax(0, 1fr) 24px;
            min-height: 76px;
            align-items: center;
            gap: 12px;
            border-bottom: 1px solid #deddd7;
            color: #30302d;
            text-decoration: none;
            transition:
              opacity 180ms ease,
              padding 180ms ease;
          }

          .mitsubachi-mobile-nav-link:hover {
            padding-left: 5px;
          }

          .mitsubachi-mobile-nav-link.is-active {
            opacity: 0.52;
          }

          .mitsubachi-mobile-nav-number {
            color: #aaa9a2;
            font-size: 10px;
            font-weight: 700;
            letter-spacing: 0.1em;
          }

          .mitsubachi-mobile-nav-text {
            font-size: clamp(30px, 8vw, 42px);
            font-weight: 600;
            line-height: 1;
            letter-spacing: -0.035em;
          }

          .mitsubachi-mobile-nav-arrow {
            font-size: 17px;
            font-weight: 400;
            text-align: right;
          }

          .mitsubachi-mobile-order-link {
            display: flex;
            width: 100%;
            min-height: 64px;
            margin-top: 28px;
            align-items: center;
            justify-content: space-between;
            gap: 20px;
            padding: 0 24px;
            box-sizing: border-box;
            border-radius: 999px;
            background: #343431;
            color: #ffffff;
            font-size: 17px;
            font-weight: 700;
            line-height: 1;
            letter-spacing: 0.03em;
            text-decoration: none;
            box-shadow: 0 14px 34px rgba(52, 52, 45, 0.12);
            transition:
              transform 180ms ease,
              opacity 180ms ease;
          }

          .mitsubachi-mobile-order-link:hover {
            transform: translateY(-2px);
            opacity: 0.9;
          }

          .mitsubachi-mobile-order-link.is-active {
            opacity: 0.62;
          }

          .mitsubachi-mobile-order-arrow {
            font-size: 21px;
            font-weight: 400;
          }

          .mitsubachi-mobile-menu-footer {
            display: flex;
            margin-top: 38px;
            justify-content: space-between;
            gap: 24px;
            color: #989890;
            font-size: 10px;
            font-weight: 600;
            line-height: 1.7;
            letter-spacing: 0.08em;
          }

          .mitsubachi-mobile-menu-footer p {
            margin: 0;
          }

          .mitsubachi-mobile-menu-footer p:last-child {
            text-align: right;
          }
        }

        @media (max-width: 560px) {
          .mitsubachi-header-inner {
            width: calc(100% - 28px);
            min-height: 88px;
          }

          .mitsubachi-header-logo {
            font-size: clamp(34px, 9.3vw, 44px);
          }

          .mitsubachi-menu-button {
            min-width: 74px;
            height: 42px;
            gap: 8px;
            padding: 0 13px;
            font-size: 11px;
          }

          .mitsubachi-mobile-menu {
            inset: 88px 0 0;
          }

          .mitsubachi-mobile-menu-inner {
            width: calc(100% - 32px);
            padding: 34px 0 32px;
          }

          .mitsubachi-mobile-nav-link {
            min-height: 70px;
          }

          .mitsubachi-mobile-nav-text {
            font-size: clamp(29px, 9vw, 38px);
          }

          .mitsubachi-mobile-order-link {
            min-height: 60px;
            padding: 0 22px;
          }

          .mitsubachi-mobile-menu-footer {
            flex-direction: column;
            gap: 8px;
          }

          .mitsubachi-mobile-menu-footer p:last-child {
            text-align: left;
          }
        }

        @media (max-width: 390px) {
          .mitsubachi-header-inner {
            width: calc(100% - 24px);
          }

          .mitsubachi-header-logo {
            font-size: clamp(31px, 9.1vw, 37px);
          }

          .mitsubachi-menu-button {
            min-width: 68px;
            padding: 0 11px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .mitsubachi-header-logo,
          .mitsubachi-desktop-nav-link,
          .mitsubachi-desktop-order-link,
          .mitsubachi-desktop-order-arrow,
          .mitsubachi-menu-button,
          .mitsubachi-menu-button-icon span,
          .mitsubachi-mobile-menu,
          .mitsubachi-mobile-nav-link,
          .mitsubachi-mobile-order-link {
            transition: none;
          }
        }
      `}</style>
    </>
  );
}