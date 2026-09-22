export default function About() {
  const stats = [
    { value: "7.33", label: "CGPA", detail: "B.Tech (CSBS)" },
    { value: "300+", label: "LeetCode", detail: "Problems Solved" },
    { value: "4★", label: "HackerRank", detail: "C Language" },
    { value: "Bronze", label: "CodeChef", detail: "Global Badge" },
  ];

  return (
    <section id="about" className="section about-section">
      <div className="section-container">
        <div className="section-header">
          <span className="section-tag">// 01. ABOUT ME</span>
          <h2 className="section-title">
            I build things for the <span className="highlight-red">web & AI</span>.
          </h2>
        </div>

        <div className="about-grid">
          <div className="about-text-column">
            <p className="about-lead">
              I am a <strong>Full Stack Developer</strong> and <strong>B.Tech</strong> student
              in <strong>Computer Science and Business Systems</strong> at{" "}
              <span className="text-white">Netaji Subhash Engineering College, Kolkata</span> (2023–2027).
            </p>
            <p className="about-body">
              My engineering focus centers on creating modern, high-performance web
              applications with <strong>React</strong> and <strong>Node.js</strong>, coupled with
              practical integrations of <strong>Generative AI</strong>, <strong>LangChain</strong>,
              and <strong>RAG pipelines</strong>.
            </p>
            <p className="about-body">
              Grounding practical engineering in strong theoretical fundamentals, I consistently
              refine my problem-solving skills across <strong>Object-Oriented Programming</strong>,{" "}
              <strong>Data Structures & Algorithms</strong>, and scalable backend architecture.
            </p>

            <div className="about-highlights">
              <div className="highlight-item">
                <span className="highlight-bullet">▹</span>
                <span>B.Tech in Computer Science & Business Systems</span>
              </div>
              <div className="highlight-item">
                <span className="highlight-bullet">▹</span>
                <span>Netaji Subhash Engineering College, Kolkata</span>
              </div>
              <div className="highlight-item">
                <span className="highlight-bullet">▹</span>
                <span>Academic Track: 2023 – 2027</span>
              </div>
            </div>
          </div>

          <div className="about-stats-column">
            <div className="stats-grid">
              {stats.map((item, idx) => (
                <div key={idx} className="stat-card">
                  <div className="stat-top">
                    <span className="stat-value">{item.value}</span>
                    <span className="stat-accent">✦</span>
                  </div>
                  <div className="stat-label">{item.label}</div>
                  <div className="stat-detail">{item.detail}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
