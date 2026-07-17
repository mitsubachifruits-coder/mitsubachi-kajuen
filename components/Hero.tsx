export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-inner">
        <p className="hero-eyebrow">YAMAGATA・HIGASHINE</p>

        <h1 className="hero-title">
          みつばちが育んだ
          <br />
          自然の恵み
        </h1>

        <div className="hero-bottom">
          <p className="hero-description">
            四季を通して、
            <br />
            本物のおいしさをお届けします。
          </p>

          <p className="hero-location">
            FROM
            <br />
            YAMAGATA
          </p>
        </div>
      </div>

      <div className="scroll-guide" aria-hidden="true">
        <span>SCROLL</span>
        <span className="scroll-line" />
      </div>

      <style>{`
        .hero {
          position: relative;
          display: flex;
          width: 100%;
          min-height: calc(100svh - 88px);
          padding: 72px 64px 56px;
          overflow: hidden;
          box-sizing: border-box;
          background: #fafaf9;
          color: #27272a;
        }

        .hero-inner {
          position: relative;
          z-index: 1;
          display: flex;
          flex-direction: column;
          width: 100%;
          max-width: 1180px;
          min-height: 100%;
          margin: 0 auto;
        }

        .hero-eyebrow {
          margin: 0;
          font-size: 12px;
          font-weight: 500;
          line-height: 1.4;
          letter-spacing: 0.22em;
          color: #71717a;
        }

        .hero-title {
          margin: auto 0;
          font-size: clamp(64px, 6.8vw, 104px);
          font-weight: 500;
          line-height: 1.12;
          letter-spacing: -0.045em;
          color: #27272a;
        }

        .hero-bottom {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          width: 100%;
          margin-top: auto;
          padding-top: 48px;
        }

        .hero-description {
          margin: 0;
          font-size: 17px;
          font-weight: 400;
          line-height: 1.9;
          letter-spacing: 0.06em;
          color: #52525b;
        }

        .hero-location {
          margin: 0;
          font-size: 12px;
          font-weight: 500;
          line-height: 1.55;
          letter-spacing: 0.18em;
          text-align: right;
          color: #71717a;
        }

        .scroll-guide {
          position: absolute;
          right: 24px;
          bottom: 0;
          z-index: 2;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
          color: #71717a;
          pointer-events: none;
        }

        .scroll-guide > span:first-child {
          font-size: 9px;
          font-weight: 500;
          line-height: 1;
          letter-spacing: 0.18em;
          writing-mode: vertical-rl;
        }

        .scroll-line {
          display: block;
          width: 1px;
          height: 48px;
          background: #a1a1aa;
        }

        /*
         * デスクトップのみ75%程度にコンパクト化
         * 文字を小さくするだけではなく、
         * 左右・上下の余白も整えて高級感を残しています。
         */
        @media (min-width: 1101px) {
          .hero {
            min-height: calc(100svh - 88px);
            padding: 82px 72px 64px;
          }

          .hero-inner {
            max-width: 960px;
          }

          .hero-eyebrow {
            font-size: 10px;
            letter-spacing: 0.24em;
          }

          .hero-title {
            font-size: clamp(52px, 5.1vw, 78px);
            line-height: 1.14;
            letter-spacing: -0.04em;
          }

          .hero-bottom {
            padding-top: 38px;
          }

          .hero-description {
            font-size: 14px;
            line-height: 1.95;
            letter-spacing: 0.07em;
          }

          .hero-location {
            font-size: 10px;
            line-height: 1.6;
            letter-spacing: 0.2em;
          }

          .scroll-guide {
            right: 28px;
            gap: 10px;
          }

          .scroll-guide > span:first-child {
            font-size: 8px;
          }

          .scroll-line {
            height: 40px;
          }
        }

        /*
         * タブレット
         * 現在のデザイン・サイズ感を維持
         */
        @media (max-width: 1100px) {
          .hero {
            min-height: calc(100svh - 80px);
            padding: 64px 40px 48px;
          }

          .hero-inner {
            max-width: 100%;
          }

          .hero-title {
            font-size: clamp(58px, 8vw, 84px);
          }

          .hero-description {
            font-size: 16px;
          }

          .scroll-guide {
            right: 18px;
          }
        }

        /*
         * スマートフォン
         * 現在の縦構成と大きさを維持
         */
        @media (max-width: 767px) {
          .hero {
            min-height: calc(100svh - 72px);
            padding:
              max(42px, env(safe-area-inset-top))
              24px
              36px;
          }

          .hero-eyebrow {
            font-size: 9px;
            letter-spacing: 0.18em;
          }

          .hero-title {
            margin: auto 0;
            font-size: clamp(44px, 13.5vw, 62px);
            line-height: 1.15;
            letter-spacing: -0.045em;
          }

          .hero-bottom {
            align-items: flex-end;
            gap: 24px;
            padding-top: 36px;
          }

          .hero-description {
            font-size: 14px;
            line-height: 1.9;
            letter-spacing: 0.04em;
          }

          .hero-location {
            flex-shrink: 0;
            font-size: 9px;
            line-height: 1.55;
            letter-spacing: 0.16em;
          }

          .scroll-guide {
            right: 8px;
            gap: 8px;
          }

          .scroll-guide > span:first-child {
            font-size: 7px;
          }

          .scroll-line {
            height: 32px;
          }
        }

        @media (max-width: 390px) {
          .hero {
            padding-right: 20px;
            padding-left: 20px;
          }

          .hero-title {
            font-size: clamp(40px, 13vw, 52px);
          }

          .hero-description {
            font-size: 13px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .hero,
          .hero-inner,
          .scroll-guide {
            scroll-behavior: auto;
          }
        }
      `}</style>
    </section>
  );
}