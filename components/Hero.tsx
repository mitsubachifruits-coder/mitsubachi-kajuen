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
          min-height: calc(100svh - 116px);
          align-items: center;
          overflow: hidden;
          padding: 110px 0 120px;
          background:
            radial-gradient(
              circle at 87% 16%,
              rgba(255, 222, 89, 0.18),
              transparent 26%
            ),
            radial-gradient(
              circle at 12% 88%,
              rgba(0, 191, 99, 0.08),
              transparent 30%
            ),
            #fafaf9;
          box-sizing: border-box;
        }

        .hero-inner {
          position: relative;
          z-index: 2;
          width: min(1180px, calc(100% - 48px));
          margin: 0 auto;
        }

        .hero-eyebrow {
          margin: 0 0 28px;
          color: #92928b;
          font-size: 11px;
          font-weight: 700;
          line-height: 1.5;
          letter-spacing: 0.25em;
        }

        .hero-title {
          max-width: 980px;
          margin: 0;
          color: #2f2f2b;
          font-size: clamp(56px, 7.2vw, 98px);
          font-weight: 400;
          line-height: 1.06;
          letter-spacing: -0.055em;
        }

        .hero-bottom {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 60px;
          margin-top: 52px;
        }

        .hero-description {
          max-width: 620px;
          margin: 0;
          color: #6c6c66;
          font-size: clamp(16px, 1.6vw, 21px);
          font-weight: 400;
          line-height: 1.9;
          letter-spacing: 0.01em;
        }

        .hero-location {
          margin: 0;
          color: #a1a19a;
          font-size: 10px;
          font-weight: 700;
          line-height: 1.7;
          letter-spacing: 0.22em;
          text-align: right;
        }

        .scroll-guide {
          position: absolute;
          right: max(24px, calc((100vw - 1180px) / 2));
          bottom: 34px;
          display: flex;
          align-items: center;
          gap: 14px;
          color: #aaa9a2;
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 0.2em;
          transform: rotate(90deg);
          transform-origin: right bottom;
        }

        .scroll-line {
          display: block;
          width: 58px;
          height: 1px;
          overflow: hidden;
          background: #d3d2cc;
        }

        .scroll-line::after {
          display: block;
          width: 50%;
          height: 100%;
          background: #777770;
          content: "";
          animation: scrollMove 2.2s ease-in-out infinite;
        }

        @keyframes scrollMove {
          0% {
            transform: translateX(-110%);
          }

          50% {
            transform: translateX(100%);
          }

          100% {
            transform: translateX(220%);
          }
        }

        @media (max-width: 900px) {
          .hero {
            min-height: calc(100svh - 146px);
            padding: 90px 0 100px;
          }

          .hero-inner {
            width: min(100% - 40px, 1180px);
          }

          .hero-title {
            max-width: 780px;
            font-size: clamp(50px, 9.6vw, 78px);
            line-height: 1.08;
            letter-spacing: -0.055em;
          }

          .hero-bottom {
            margin-top: 44px;
          }

          .hero-description {
            font-size: clamp(16px, 2.4vw, 19px);
          }

          .scroll-guide {
            display: none;
          }
        }

        @media (max-width: 560px) {
          .hero {
            min-height: calc(100svh - 140px);
            padding: 72px 0 82px;
          }

          .hero-inner {
            width: calc(100% - 32px);
          }

          .hero-eyebrow {
            margin-bottom: 22px;
            font-size: 9px;
          }

          .hero-title {
            max-width: 100%;
            font-size: clamp(42px, 12.8vw, 60px);
            line-height: 1.1;
            letter-spacing: -0.055em;
          }

          .hero-bottom {
            align-items: flex-start;
            flex-direction: column;
            gap: 28px;
            margin-top: 36px;
          }

          .hero-description {
            font-size: 15px;
            line-height: 1.9;
          }

          .hero-location {
            font-size: 9px;
            text-align: left;
          }
        }

        @media (max-width: 380px) {
          .hero-title {
            font-size: 40px;
          }
        }
      `}</style>
    </section>
  );
}