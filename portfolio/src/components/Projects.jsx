import { projectsData } from "../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="section projects-section">
      <div className="section-container">
        <div className="section-header">
          <span className="section-tag">// 04. PORTFOLIO WORK</span>
          <h2 className="section-title">
            Featured <span className="highlight-red">Projects</span>
          </h2>
          <p className="section-subtitle">
            Engineered systems combining modern frontend interfaces, high-concurrency backend
            services, and applied Generative AI workflows.
          </p>
        </div>

        <div className="projects-list">
          {projectsData.map((project) => (
            <article key={project.id} className="project-card">
              <div className="project-visual-wrapper">
                <div
                  className="project-visual-bg"
                  style={{ background: project.gradient }}
                >
                  <div className="project-watermark-number">{project.id}</div>
                  <div className="project-visual-overlay">
                    <span className="project-category-badge">{project.category}</span>
                    <h3 className="project-visual-title">{project.title}</h3>
                  </div>
                </div>
              </div>

              <div className="project-details">
                <div className="project-meta-row">
                  <span className="project-serial">PROJECT {project.id}</span>
                  <span className="project-status">COMPLETED</span>
                </div>

                <h3 className="project-title">{project.title}</h3>
                <h4 className="project-subtitle">{project.subtitle}</h4>

                <p className="project-description">{project.description}</p>

                <div className="project-tech-stack">
                  {project.technologies.map((tech, tIdx) => (
                    <span key={tIdx} className="tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="project-actions">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-card"
                    >
                      <span>View on GitHub</span>
                      <span className="btn-arrow">↗</span>
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
