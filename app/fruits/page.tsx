import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "果物 | みつばち果樹園",
  description:
    "みつばち果樹園で育てている、さくらんぼやりんごなどの果物をご紹介します。",
};

type Product = {
  id: number;
  name: string;
  englishName: string;
  season: string;
  price: string;
  description: string;
  image: string;
  href: string;
  status: "販売中" | "準備中" | "販売終了";
  accent: string;
};

const products: Product[] = [
  {
    id: 1,
    name: "佐藤錦",
    englishName: "SATO NISHIKI",
    season: "6月中旬〜下旬",
    price: "価格準備中",
    description:
      "上品な甘みとほどよい酸味。山形を代表する、みずみずしいさくらんぼです。",
    image: "",
    href: "",
    status: "準備中",
    accent: "#ff6b6b",
  },
  {
    id: 2,
    name: "紅秀峰",
    englishName: "BENI SHUHO",
    season: "6月下旬〜7月上旬",
    price: "価格準備中",
    description:
      "大粒でしっかりとした果肉。濃厚な甘みを楽しめる人気のさくらんぼです。",
    image: "",
    href: "",
    status: "準備中",
    accent: "#d94a64",
  },
  {
    id: 3,
    name: "やまがた紅王",
    englishName: "YAMAGATA BENIOU",
    season: "6月下旬〜7月上旬",
    price: "価格準備中",
    description:
      "存在感のある大きな実と鮮やかな紅色。山形生まれの新しいさくらんぼです。",
    image: "",
    href: "",
    status: "準備中",
    accent: "#c72c48",
  },
  {
    id: 4,
    name: "サンふじ",
    englishName: "SUN FUJI",
    season: "11月〜12月",
    price: "価格準備中",
    description:
      "蜜が入りやすく、甘みと酸味のバランスに優れた香り豊かなりんごです。",
    image: "",
    href: "",
    status: "準備中",
    accent: "#e9553f",
  },
];

export default function FruitsPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#fafaf9",
        color: "#2f2f2f",
        padding: "120px 24px 100px",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        {/* ページタイトル */}
        <section
          style={{
            marginBottom: "72px",
          }}
        >
          <p
            style={{
              margin: "0 0 18px",
              color: "#888",
              fontSize: "13px",
              letterSpacing: "0.25em",
            }}
          >
            FRUITS
          </p>

          <h1
            style={{
              margin: "0 0 28px",
              fontSize: "clamp(42px, 7vw, 78px)",
              lineHeight: 1.15,
              letterSpacing: "0.02em",
            }}
          >
            みつばちが育んだ
            <br />
            季節の果物
          </h1>

          <p
            style={{
              maxWidth: "700px",
              margin: 0,
              color: "#666",
              fontSize: "17px",
              lineHeight: 2,
            }}
          >
            山形県東根市の自然の中で、
            <br />
            一つひとつの実と向き合いながら大切に育てています。
            <br />
            旬を迎えた果物を、もぎたてのおいしさでお届けします。
          </p>
        </section>

        {/* お知らせ */}
        <section
          style={{
            marginBottom: "56px",
            padding: "26px 28px",
            borderRadius: "24px",
            background: "#fff8d6",
            color: "#735000",
            lineHeight: 1.9,
          }}
        >
          <p
            style={{
              margin: "0 0 6px",
              fontSize: "13px",
              fontWeight: 700,
              letterSpacing: "0.12em",
            }}
          >
            ONLINE SHOP
          </p>

          <p
            style={{
              margin: 0,
              fontSize: "15px",
            }}
          >
            現在、オンライン販売の準備を進めています。
            販売開始まで、もうしばらくお待ちください。
          </p>
        </section>

        {/* 商品一覧 */}
        <section>
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
              gap: "24px",
              marginBottom: "30px",
              flexWrap: "wrap",
            }}
          >
            <div>
              <p
                style={{
                  margin: "0 0 10px",
                  color: "#888",
                  fontSize: "12px",
                  fontWeight: 700,
                  letterSpacing: "0.18em",
                }}
              >
                OUR PRODUCTS
              </p>

              <h2
                style={{
                  margin: 0,
                  fontSize: "clamp(28px, 4vw, 42px)",
                  lineHeight: 1.3,
                }}
              >
                商品一覧
              </h2>
            </div>

            <p
              style={{
                margin: 0,
                color: "#888",
                fontSize: "13px",
              }}
            >
              商品は季節ごとに順次追加します
            </p>
          </div>

          <div className="productGrid">
            {products.map((product) => (
              <article
                key={product.id}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  minWidth: 0,
                  overflow: "hidden",
                  background: "#fff",
                  border: "1px solid #ecece8",
                  borderRadius: "28px",
                  boxShadow: "0 18px 50px rgba(0,0,0,0.055)",
                }}
              >
                {/* 商品画像 */}
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    aspectRatio: "4 / 3",
                    overflow: "hidden",
                    background: `linear-gradient(145deg, ${product.accent}18, #fafaf9)`,
                  }}
                >
                  {product.image ? (
                    <img
                      src={product.image}
                      alt={product.name}
                      style={{
                        display: "block",
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  ) : (
                    <div
                      style={{
                        display: "flex",
                        width: "100%",
                        height: "100%",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#aaa",
                        fontSize: "13px",
                        letterSpacing: "0.12em",
                      }}
                    >
                      PRODUCT IMAGE
                    </div>
                  )}

                  <span
                    style={{
                      position: "absolute",
                      top: "18px",
                      right: "18px",
                      display: "inline-flex",
                      alignItems: "center",
                      minHeight: "32px",
                      padding: "0 14px",
                      borderRadius: "999px",
                      background:
                        product.status === "販売中"
                          ? "#2f2f2f"
                          : "rgba(255,255,255,0.92)",
                      color:
                        product.status === "販売中" ? "#fff" : "#666",
                      fontSize: "12px",
                      fontWeight: 700,
                      boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
                    }}
                  >
                    {product.status}
                  </span>
                </div>

                {/* 商品情報 */}
                <div
                  style={{
                    display: "flex",
                    flex: 1,
                    flexDirection: "column",
                    padding: "28px",
                  }}
                >
                  <p
                    style={{
                      margin: "0 0 8px",
                      color: product.accent,
                      fontSize: "11px",
                      fontWeight: 700,
                      letterSpacing: "0.18em",
                    }}
                  >
                    {product.englishName}
                  </p>

                  <h3
                    style={{
                      margin: "0 0 12px",
                      fontSize: "28px",
                      lineHeight: 1.35,
                      color: "#2f2f2f",
                    }}
                  >
                    {product.name}
                  </h3>

                  <p
                    style={{
                      margin: "0 0 18px",
                      color: "#888",
                      fontSize: "13px",
                    }}
                  >
                    収穫時期：{product.season}
                  </p>

                  <p
                    style={{
                      margin: "0 0 24px",
                      color: "#666",
                      fontSize: "15px",
                      lineHeight: 1.9,
                    }}
                  >
                    {product.description}
                  </p>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: "16px",
                      marginTop: "auto",
                      paddingTop: "22px",
                      borderTop: "1px solid #eee",
                    }}
                  >
                    <p
                      style={{
                        margin: 0,
                        color: "#444",
                        fontSize: "15px",
                        fontWeight: 700,
                      }}
                    >
                      {product.price}
                    </p>

                    {product.href ? (
                      <Link
                        href={product.href}
                        style={{
                          color: "#2f2f2f",
                          fontSize: "14px",
                          fontWeight: 700,
                          textDecoration: "none",
                        }}
                      >
                        商品を見る →
                      </Link>
                    ) : (
                      <span
                        style={{
                          color: "#aaa",
                          fontSize: "13px",
                          fontWeight: 700,
                        }}
                      >
                        COMING SOON
                      </span>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* 下部メッセージ */}
        <section
          style={{
            marginTop: "88px",
            padding: "56px 28px",
            borderRadius: "32px",
            background: "#fff",
            border: "1px solid #ecece8",
            textAlign: "center",
            boxShadow: "0 18px 50px rgba(0,0,0,0.04)",
          }}
        >
          <p
            style={{
              margin: "0 0 14px",
              color: "#888",
              fontSize: "12px",
              fontWeight: 700,
              letterSpacing: "0.18em",
            }}
          >
            FROM OUR FARM
          </p>

          <h2
            style={{
              margin: "0 0 20px",
              fontSize: "clamp(28px, 5vw, 46px)",
              lineHeight: 1.4,
            }}
          >
            旬のおいしさを、
            <br />
            果樹園からまっすぐに。
          </h2>

          <p
            style={{
              maxWidth: "620px",
              margin: "0 auto",
              color: "#666",
              fontSize: "15px",
              lineHeight: 2,
            }}
          >
            天候や生育状況により、収穫時期や販売数量が変わる場合があります。
            最新の販売情報は、ホームページやInstagramでお知らせします。
          </p>
        </section>
      </div>

      <style>{`
        .productGrid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 28px;
        }

        @media (max-width: 720px) {
          .productGrid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </main>
  );
}