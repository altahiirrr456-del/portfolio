export default function Home() {
  return (
    <main
      style={{
        background: "#000",
        color: "#fff",
        minHeight: "100vh",
        fontFamily: "Arial, sans-serif",
        padding: "40px 20px",
      }}
    >
      <section
        style={{
          textAlign: "center",
          marginTop: "80px",
        }}
      >
        <h1
          style={{
            fontSize: "64px",
            marginBottom: "10px",
          }}
        >
          ALTAHIR 🚀
        </h1>

        <p
          style={{
            color: "#aaa",
            fontSize: "20px",
          }}
        >
          Web Developer • Designer • Creator
        </p>
      </section>

      <section
        style={{
          maxWidth: "900px",
          margin: "80px auto",
          textAlign: "center",
        }}
      >
        <h2 style={{ fontSize: "36px" }}>About Me</h2>

        <p
          style={{
            color: "#bbb",
            lineHeight: "1.8",
            marginTop: "20px",
          }}
        >
          I create modern, fast and responsive websites using
          Next.js, React and modern web technologies.
        </p>
      </section>

      <section
        style={{
          maxWidth: "900px",
          margin: "80px auto",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            fontSize: "36px",
            marginBottom: "30px",
          }}
        >
          Projects
        </h2>

        <div
          style={{
            display: "grid",
            gap: "20px",
          }}
        >
          <div
            style={{
              background: "#111",
              padding: "20px",
              borderRadius: "15px",
            }}
          >
            <h3>Portfolio Website</h3>
            <p style={{ color: "#aaa" }}>
              Personal portfolio built with Next.js.
            </p>
          </div>

          <div
            style={{
              background: "#111",
              padding: "20px",
              borderRadius: "15px",
            }}
          >
            <h3>Landing Page</h3>
            <p style={{ color: "#aaa" }}>
              Responsive business landing page.
            </p>
          </div>
        </div>
      </section>

      <section
        style={{
          textAlign: "center",
          marginTop: "80px",
        }}
      >
        <h2>Contact</h2>

        <p>📞 8889056626</p>
        <p>📧 altahiirrr456@gmail.com</p>
        <p>🔗 github.com/altahiirrr456-del</p>
      </section>

      <footer
        style={{
          textAlign: "center",
          marginTop: "80px",
          color: "#666",
        }}
      >
        © 2026 Altahir. All Rights Reserved.
      </footer>
    </main>
  );
}
