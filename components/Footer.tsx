export default function Footer() {
  return (
    <footer
      id="contact"
      style={{
        background: "#f2f2ef",
        padding: "100px 0",
        marginTop: "120px",
      }}
    >
      <div className="container">
        <h2
          style={{
            display: "flex",
            fontSize: "48px",
            marginBottom: "40px",
          }}
        >
          <span style={{ color: "#FF3131" }}>み</span>
          <span style={{ color: "#006DFF" }}>つ</span>
          <span style={{ color: "#00BF63" }}>ば</span>
          <span style={{ color: "#FFDE59" }}>ち</span>
          <span style={{ color: "#8C52FF" }}>果</span>
          <span style={{ color: "#00A1FF" }}>樹</span>
          <span style={{ color: "#FF66C4" }}>園</span>
        </h2>

        <p style={{ marginBottom: "20px" }}>
          〒999-3751 山形県東根市若木通り1-13
          <br />
          ℡:090-8251-5523
          <br />
          E-mail:mitsubachi-kajuen@ae.auone-net.jp
          <br />

        </p>

        <p style={{ color: "#888" }}>
          © 2026 みつばち果樹園 All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}