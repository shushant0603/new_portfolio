export default function CodingJourney() {
  const codingMetrics = [
    {
      platform: "LeetCode",
      metric: "300+",
      label: "Problems Solved",
      subtext: "Consistent algorithmic problem solving across DSA topics",
      rating: "Rating: 1491",
      link: "https://leetcode.com/u/shushantKumar625/",
      linkLabel: "View LeetCode Profile ↗",
      tag: "Competitive Programming",
    },
    {
      platform: "HackerRank",
      metric: "4★",
      label: "Gold Star in C",
      subtext: "Mastery of pointers, memory management, and C fundamentals",
      rating: "Language Proficiency: C",
      link: "https://www.hackerrank.com",
      linkLabel: "HackerRank C Badge ↗",
      tag: "Core Programming",
    },
    {
      platform: "CodeChef",
      metric: "Bronze",
      label: "Badge Achiever",
      subtext: "Participating in timed coding contests and rating divisions",
      rating: "Division Challenges",
      link: "https://www.codechef.com",
      linkLabel: "CodeChef Profile ↗",
      tag: "Algorithmic Contests",
    },
  ];

  return (
    <section id="coding" className="section coding-section">
      <div className="section-container">
        <div className="section-header">
          <span className="section-tag">// 03. PROBLEM SOLVING</span>
          <h2 className="section-title">
            Coding <span className="highlight-red">Journey</span>
          </h2>
          <p className="section-subtitle">
            Demonstrating structured problem-solving, clean algorithmic thinking, and rigorous
            practice across competitive programming platforms.
          </p>
        </div>

        <div className="coding-grid">
          {codingMetrics.map((item, index) => (
            <div key={index} className="coding-card">
              <div className="coding-card-top">
                <span className="coding-platform">{item.platform}</span>
                <span className="coding-tag">{item.tag}</span>
              </div>

              <div className="coding-metric-box">
                <span className="coding-metric">{item.metric}</span>
                <span className="coding-label">{item.label}</span>
              </div>

              <p className="coding-subtext">{item.subtext}</p>

              <div className="coding-card-footer">
                <span className="coding-rating-badge">{item.rating}</span>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="coding-link"
                >
                  {item.linkLabel}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* LeetCode Spotlight Banner */}
        <div className="leetcode-spotlight">
          <div className="spotlight-content">
            <div className="spotlight-title-group">
              <span className="spotlight-icon">⚡</span>
              <div>
                <h3 className="spotlight-title">Algorithmic Discipline & DSA Practice</h3>
                <p className="spotlight-desc">
                  Actively solving problems covering Binary Search, Dynamic Programming, Trees,
                  Graphs, Two Pointers, and Greedy algorithms.
                </p>
              </div>
            </div>
            <div className="spotlight-action">
              <a
                href="https://leetcode.com/u/shushantKumar625/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Explore LeetCode Activity ↗
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
