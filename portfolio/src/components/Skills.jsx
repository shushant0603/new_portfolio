import { skillsData } from "../data/skills";
import {
  Atom,
  BrainCircuit,
  Braces,
  Brackets,
  Code2,
  Database,
  FileCode2,
  GitBranch,
  Monitor,
  Network,
  Radio,
  Server,
  Send,
  Terminal,
  Wrench,
} from "lucide-react";

const categoryIcons = {
  LANGUAGES: Braces,
  FRONTEND: Monitor,
  BACKEND: Server,
  "AI / ML": BrainCircuit,
  DATABASES: Database,
  TOOLS: Wrench,
  "CS FUNDAMENTALS": Network,
};

const skillIcons = {
  C: Code2,
  "C++": Code2,
  HTML: FileCode2,
  CSS: Brackets,
  JavaScript: Braces,
  React: Atom,
  "Node.js": Server,
  "Express.js": Server,
  "REST APIs": Send,
  RTC: Radio,
  Git: GitBranch,
  "VS Code": Monitor,
  Postman: Send,
  OOP: Braces,
  DBMS: Database,
  "Computer Networks": Network,
  "Software Engineering": Wrench,
  "System Design (LLD)": Terminal,
};

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
                <span className="skill-category-badge">
                  {(() => {
                    const CategoryIcon = categoryIcons[category.category] || Code2;
                    return <CategoryIcon size={15} strokeWidth={2.2} aria-hidden="true" />;
                  })()}
                  {category.category}
                </span>
                <span className="skill-index">0{idx + 1}</span>
              </div>
              <p className="skill-card-desc">{category.description}</p>
              <div className="skill-tags">
                {category.skills.map((skill, sIdx) => (
                  <span key={sIdx} className="skill-pill">
                    {(() => {
                      const SkillIcon = skillIcons[skill] || Code2;
                      return <SkillIcon size={14} strokeWidth={2} aria-hidden="true" />;
                    })()}
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
