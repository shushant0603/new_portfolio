export default function Education() {
  const educationTimeline = [
    {
      period: "2023 – 2027",
      degree: "B.Tech — Computer Science and Business Systems",
      institution: "Netaji Subhash Engineering College, Kolkata",
      scoreLabel: "Current CGPA",
      scoreValue: "7.33",
      highlight: true,
      description:
        "Comprehensive undergraduate degree integrating core computing theory, database systems, software engineering, and modern business technology systems.",
    },
    {
      period: "2020 – 2022",
      degree: "Senior Secondary (Class XII)",
      institution: "Guru Gobind Singh College, Patna, Bihar",
      scoreLabel: "Score",
      scoreValue: "77.2%",
      highlight: false,
      description:
        "Higher secondary education focused on Science and Mathematics foundation.",
    },
    {
      period: "2020",
      degree: "Secondary School Certificate (Class X)",
      institution: "St. Paul's Academy, Patna, Bihar",
      scoreLabel: "Score",
      scoreValue: "79.2%",
      highlight: false,
      description:
        "Secondary school education with high academic achievement across sciences and fundamentals.",
    },
  ];

  return (
    <section id="education" className="section education-section">
      <div className="section-container">
        <div className="section-header">
          <span className="section-tag">// 05. ACADEMIC BACKGROUND</span>
          <h2 className="section-title">
            Education <span className="highlight-red">& Milestones</span>
          </h2>
          <p className="section-subtitle">
            Formal academic training in computer science, business systems, and analytical sciences.
          </p>
        </div>

        <div className="timeline-wrapper">
          <div className="timeline-track"></div>

          {educationTimeline.map((item, idx) => (
            <div
              key={idx}
              className={`timeline-item ${item.highlight ? "timeline-highlight" : ""}`}
            >
              <div className="timeline-node">
                <span className="node-dot"></span>
              </div>

              <div className="timeline-card">
                <div className="timeline-header-row">
                  <span className="timeline-period">{item.period}</span>
                  <div className="timeline-badge">
                    <span className="badge-label">{item.scoreLabel}:</span>
                    <span className="badge-value">{item.scoreValue}</span>
                  </div>
                </div>

                <h3 className="timeline-degree">{item.degree}</h3>
                <h4 className="timeline-institution">{item.institution}</h4>

                <p className="timeline-desc">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
