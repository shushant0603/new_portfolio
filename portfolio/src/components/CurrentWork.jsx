import { Activity, ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { currentWorkData } from "../data/currentWork";

export default function CurrentWork() {
  return (
    <section id="current-work" className="section current-work-section">
      <div className="section-container">
        <div className="section-header">
          <span className="section-tag">// 04. CURRENT FOCUS</span>
          <h2 className="section-title">
            What I&apos;m <span className="highlight-red">Working On</span>
          </h2>
          <p className="section-subtitle">
            Right now, I&apos;m actively building, improving, and experimenting across these projects.
          </p>
        </div>

        <div className="current-work-panel">
          <div className="current-work-heading">
            <span className="current-work-icon" aria-hidden="true">
              <Activity size={20} />
            </span>
            <div>
              <strong>Active development</strong>
              <span>Learning, shipping, and refining every day.</span>
            </div>
          </div>

          <div className="current-work-list">
            {currentWorkData.map((work) => (
              <a
                key={work.id}
                href={work.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${work.title} GitHub repository`}
                className="current-work-item"
              >
                <span className="current-work-number">{work.id}</span>
                <span className="current-work-details">
                  <strong>{work.title}</strong>
                  <span>{work.description}</span>
                </span>
                <span className="current-work-github" aria-hidden="true">
                  <FaGithub className="current-work-code-icon" aria-hidden="true" />
                </span>
                <ArrowUpRight className="current-work-arrow" size={17} aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
