import Link from "next/link";
import type { CSSProperties } from "react";

export default function Footer() {
  return (
    <footer
      style={{
        padding: "96px 24px 56px",
        background: "#fafaf9",
        borderTop: "1px solid #eee",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          gap: "48px",
          flexWrap: "wrap",
        }}
      >
        <div>
          <Link
            href="/"
            style={{
              display: "inline-flex",
              alignItems: "center",
              fontSize: "48px",
              fontWeight: 400,
              letterSpacing: "0em",
              textDecoration: "none",
              marginBottom: "24px",
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

          <p
            style={{
              margin: 0,
              color: "#777",
              fontSize: "14px",
              lineHeight: 1.9,
            }}
          >
            BeeMYfriends!
            <br />
            〒999-3701 山形県東根市神町若木通り13-1
            <br />
            みつばちが育んだ自然の恵み
          </p>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            gap: "18px",
          }}
        >
          <a
            href="https://www.instagram.com/mitsubachi_kajuen/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="みつばち果樹園のInstagramを見る"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              color: "#444",
              fontSize: "14px",
              fontWeight: 700,
              textDecoration: "none",
            }}
          >
            <span
              aria-hidden="true"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                width: "36px",
                height: "36px",
                borderRadius: "10px",
                background:
                  "linear-gradient(135deg, #833ab4 0%, #fd1d1d 55%, #fcb045 100%)",
                color: "#fff",
                flexShrink: 0,
              }}
            >
              <svg
                width="20"
                height="20"
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

            <span>@mitsubachi_kajuen</span>
          </a>

          <nav
            style={{
              display: "flex",
              gap: "22px",
              flexWrap: "wrap",
              justifyContent: "flex-end",
              fontSize: "14px",
              fontWeight: 700,
            }}
          >
            <Link href="/about" style={linkStyle}>
              About
            </Link>

            <Link href="/fruits" style={linkStyle}>
              Fruits
            </Link>

            <Link href="/story" style={linkStyle}>
              Story
            </Link>

            <Link href="/contact" style={linkStyle}>
              Contact
            </Link>

            <Link href="/order" style={linkStyle}>
              Order
            </Link>
          </nav>

          <div
            style={{
              display: "flex",
              gap: "18px",
              flexWrap: "wrap",
              justifyContent: "flex-end",
            }}
          >
            <Link href="/privacy" style={legalLinkStyle}>
              プライバシーポリシー
            </Link>

            <Link href="/legal" style={legalLinkStyle}>
              特定商取引法に基づく表示
            </Link>
          </div>

          <p
            style={{
              margin: 0,
              color: "#999",
              fontSize: "12px",
            }}
          >
            © {new Date().getFullYear()} みつばち果樹園
          </p>
        </div>
      </div>
    </footer>
  );
}

const linkStyle: CSSProperties = {
  color: "#555",
  textDecoration: "none",
};

const legalLinkStyle: CSSProperties = {
  color: "#777",
  textDecoration: "none",
  fontSize: "13px",
  fontWeight: 600,
};