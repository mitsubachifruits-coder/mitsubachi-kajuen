export default function Hero() {
  return (
    <section
      style={{
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "0 24px",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "1100px",
        }}
      >
        <p
          style={{
            color: "#888",
            letterSpacing: "0.25em",
            marginBottom: "20px",
          }}
        >
          YAMAGATA・HIGASHINE
        </p>

        <h1
          style={{
            fontSize: "clamp(40px, 7vw, 80px)",
            lineHeight: 1.1,
            marginBottom: "30px",
          }}
        >
          みつばちが育んだ
          <br />
          自然の恵み
        </h1>

        <p
          style={{
            fontSize: "clamp(18px, 2vw, 24px)",
            color: "#666",
            maxWidth: "650px",
            lineHeight: 1.8,
          }}
        >
          四季を通して本物のおいしさをお届けします
        </p>
      </div>
    </section>
  );
}