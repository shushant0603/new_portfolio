export default function Footer() {
  const links = [
    { label: "GitHub", href: "https://github.com/shushant0603" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/shushantpandey06/" },
    { label: "LeetCode", href: "https://leetcode.com/u/shushantKumar625/" },
  ];

  return (
    <footer className="footer bg-[#050505] text-white border-t border-white/10 py-6 px-4">
      <div className="footer-container max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="footer-brand text-center sm:text-left">
          <h3 className="footer-logo font-black tracking-tighter text-xl text-white">
            SHUSHANT <span className="text-[#FF1E35]">KUMAR</span>
          </h3>
          <p className="footer-tagline text-xs font-mono text-neutral-400 mt-1">
            Full Stack Developer • AI Enthusiast
          </p>
        </div>

        <div className="footer-links flex items-center gap-6">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-neutral-400 hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="footer-copyright text-xs font-mono text-neutral-500 text-center sm:text-right">
          © 2026 Shushant Kumar. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
