"use client";

import Script from "next/script";

type InstagramWindow = Window & {
  instgrm?: {
    Embeds: {
      process: () => void;
    };
  };
};

const instagramUrl =
  "https://www.instagram.com/mitsubachi_kajuen/";

export default function InstagramFeed() {
  const processInstagramEmbed = () => {
    const instagramWindow = window as InstagramWindow;
    instagramWindow.instgrm?.Embeds.process();
  };

  return (
    <section
      style={{
        margin: "80px 0 72px",
      }}
    >
      <p
        style={{
          margin: "0 0 12px",
          color: "#888",
          fontSize: "12px",
          fontWeight: 700,
          letterSpacing: "0.18em",
        }}
      >
        INSTAGRAM
      </p>

      <h2
        style={{
          margin: "0 0 16px",
          color: "#2f2f2f",
          fontSize: "clamp(30px, 5vw, 46px)",
          lineHeight: 1.3,
        }}
      >
        果樹園の日々
      </h2>

      <p
        style={{
          margin: "0 0 32px",
          color: "#666",
          fontSize: "16px",
          lineHeight: 2,
        }}
      >
        季節の果物や、みつばち果樹園の日々をお届けしています。
      </p>

      <div
        style={{
          maxWidth: "540px",
          margin: "0 auto",
          padding: "12px",
          overflow: "hidden",
          background: "#fff",
          border: "1px solid #ecece8",
          borderRadius: "28px",
          boxShadow: "0 18px 50px rgba(0,0,0,0.06)",
        }}
      >
        <blockquote
          className="instagram-media"
          data-instgrm-permalink={instagramUrl}
          data-instgrm-version="14"
          style={{
            width: "100%",
            minWidth: 0,
            margin: 0,
            background: "#fff",
          }}
        >
          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "#555",
              textDecoration: "none",
            }}
          >
            @mitsubachi_kajuen
          </a>
        </blockquote>
      </div>

      <div
        style={{
          marginTop: "28px",
          textAlign: "center",
        }}
      >
        <a
          href={instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "14px 24px",
            borderRadius: "999px",
            background: "#2f2f2f",
            color: "#fff",
            fontSize: "15px",
            fontWeight: 700,
            textDecoration: "none",
          }}
        >
          Instagramを見る →
        </a>
      </div>

      <Script
        src="https://www.instagram.com/embed.js"
        strategy="lazyOnload"
        onLoad={processInstagramEmbed}
      />
    </section>
  );
}