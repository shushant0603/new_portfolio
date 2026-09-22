import { skillsData } from "../data/skills";

export default function Skills() {
  return (
    <section id="skills" className="section skills-section">
      <div className="section-container">
        <div className="section-header">
          <span className="section-tag">// 02. TECHNICAL CAPABILITIES</span>
          <h2 className="section-title">
            Skills & <span className="highlight-red">Technologies</span>
          </h2>
          <p className="section-subtitle">
            A comprehensive overview of programming languages, frameworks, AI architectures,
            and computer science foundations from my academic and practical coursework.
          </p>
        </div>

        <div className="skills-grid">
          {skillsData.map((category, idx) => (
            <div key={idx} className="skill-card">
              <div className="skill-card-header">
                <span className="skill-category-badge">{category.category}</span>
                <span className="skill-index">0{idx + 1}</span>
              </div>
              <p className="skill-card-desc">{category.description}</p>
              <div className="skill-tags">
                {category.skills.map((skill, sIdx) => (
                  <span key={sIdx} className="skill-pill">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
