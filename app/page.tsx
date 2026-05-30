export default function Home() {
  return (
    <main style={{ padding: "40px", fontFamily: "sans-serif", background: "#0f172a", color: "white", minHeight: "100vh" }}>

      <section style={{ textAlign: "center", marginTop: "60px" }}>
        <h1 style={{ fontSize: "48px", fontWeight: "bold" }}>
          Building ideas into modern web experiences ⚡
        </h1>

        <p style={{ fontSize: "18px", marginTop: "10px", color: "#cbd5e1" }}>
          I design and develop clean, fast & responsive web apps using Next.js & React.
        </p>
      </section>

      <section id="projects" style={{ marginTop: "80px" }}>
        <h2 style={{ textAlign: "center", fontSize: "32px" }}>Projects 🚀</h2>

        <div style={{ display: "grid", gap: "20px", marginTop: "30px", maxWidth: "800px", marginLeft: "auto", marginRight: "auto" }}>

          <div style={{ padding: "20px", border: "1px solid #334155", borderRadius: "12px", background: "#1e293b" }}>
            <h3>Portfolio Website</h3>
            <p>Modern Next.js personal portfolio</p>
          </div>

          <div style={{ padding: "20px", border: "1px solid #334155", borderRadius: "12px", background: "#1e293b" }}>
            <h3>Todo App</h3>
            <p>Task management application</p>
          </div>

        </div>
      </section>

      <section id="contact" style={{ marginTop: "80px", textAlign: "center" }}>
        <h2 style={{ fontSize: "32px" }}>Contact 📩</h2>

        <p>📞 8889056626</p>
        <p>📧 altahiirrr456@gmail.com</p>
        <p>🔗 github.com/altahiirrr456-del</p>
      </section>

      <footer style={{ marginTop: "80px", textAlign: "center", color: "#64748b" }}>
        <p>© 2026 All rights reserved</p>
      </footer>

    </main>
  );
}
