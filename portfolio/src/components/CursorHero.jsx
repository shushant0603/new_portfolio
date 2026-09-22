import { useEffect, useRef, useState } from "react";

const FRAME_COUNT = 64;

export default function CursorHero() {
  const canvasRef = useRef(null);
  const framesRef = useRef([]);
  const centerFrameRef = useRef(null);

  const mouseRef = useRef({
    x: typeof window !== "undefined" ? window.innerWidth / 2 : 500,
    y: typeof window !== "undefined" ? window.innerHeight / 2 : 500,
  });

  const currentFrameRef = useRef(0);
  const [loaded, setLoaded] = useState(false);

  // -----------------------------
  // Load all 64 frames
  // -----------------------------
  useEffect(() => {
    let cancelled = false;

    async function loadFrames() {
      const frames = [];

      for (let i = 0; i < FRAME_COUNT; i++) {
        const img = new Image();
        img.src = `/frames/frame_${String(i).padStart(3, "0")}.webp`;

        try {
          await img.decode();
        } catch {
          // Keep reference even if decode completes on load
        }

        frames.push(img);
      }

      let center = null;
      try {
        const centerImg = new Image();
        centerImg.src = "/frames/center.webp";
        await centerImg.decode();
        center = centerImg;
      } catch {
        center = frames[0];
      }

      if (!cancelled) {
        framesRef.current = frames;
        centerFrameRef.current = center;
        setLoaded(true);
      }
    }

    loadFrames();

    return () => {
      cancelled = true;
    };
  }, []);

  // -----------------------------
  // Mouse tracking
  // -----------------------------
  useEffect(() => {
    function handleMouseMove(event) {
      mouseRef.current.x = event.clientX;
      mouseRef.current.y = event.clientY;
    }

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // -----------------------------
  // Canvas renderer
  // -----------------------------
  useEffect(() => {
    if (!loaded) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    let animationFrame;

    function resizeCanvas() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;

      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    function render() {
      const mouse = mouseRef.current;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      const dx = mouse.x - centerX;
      const dy = mouse.y - centerY;
      const distance = Math.sqrt(dx * dx + dy * dy);

      // Middle / Center handling & Smooth Frame Damping
      const centerRadius = Math.min(window.innerWidth, window.innerHeight) * 0.15;

      let targetFrame = 0;

      if (distance < 15) {
        targetFrame = 0;
      } else {
        const angle = Math.atan2(dy, dx);
        let normAngle = (angle + Math.PI + Math.PI * 2) % (Math.PI * 2);
        const directionalFrame = (normAngle / (Math.PI * 2)) * FRAME_COUNT;

        if (distance < centerRadius) {
          const factor = (distance - 15) / (centerRadius - 15);
          targetFrame = directionalFrame * factor;
        } else {
          targetFrame = directionalFrame;
        }
      }

      // Smooth continuous frame damping (spring/lerp 60 FPS)
      let diff = targetFrame - currentFrameRef.current;

      while (diff > FRAME_COUNT / 2) diff -= FRAME_COUNT;
      while (diff < -FRAME_COUNT / 2) diff += FRAME_COUNT;

      currentFrameRef.current += diff * 0.12;
      currentFrameRef.current =
        ((currentFrameRef.current % FRAME_COUNT) + FRAME_COUNT) % FRAME_COUNT;

      const frameIndex = Math.floor(currentFrameRef.current) % FRAME_COUNT;
      const frame = framesRef.current[frameIndex];

      if (frame && ctx) {
        ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

        const imageAspect = frame.width / frame.height;
        const screenAspect = window.innerWidth / window.innerHeight;

        let drawWidth;
        let drawHeight;

        if (imageAspect > screenAspect) {
          drawHeight = window.innerHeight;
          drawWidth = drawHeight * imageAspect;
        } else {
          drawWidth = window.innerWidth;
          drawHeight = drawWidth / imageAspect;
        }

        const x = (window.innerWidth - drawWidth) / 2;
        const y = (window.innerHeight - drawHeight) / 2;

        ctx.drawImage(frame, x, y, drawWidth, drawHeight);
      }

      animationFrame = requestAnimationFrame(render);
    }

    render();

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [loaded]);

  const scrollToContact = (e) => {
    e.preventDefault();
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToAbout = (e) => {
    if (e) e.preventDefault();
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="hero-section">
      <canvas ref={canvasRef} className="character-canvas" />

      <div className="hero-content">
        <p className="hero-salutation">Hi, I'm</p>
        <h1 className="hero-title">Shushant</h1>
        <p className="hero-role">Full Stack Developer</p>
        <p className="hero-description">
          Building modern web experiences with React, Node.js and AI.
        </p>

        <div className="hero-buttons">
          <a
            href="#contact"
            onClick={scrollToContact}
            className="btn btn-primary"
            title="Resume available upon request"
          >
            Resume ↗
          </a>
          <a
            href="#contact"
            onClick={scrollToContact}
            className="btn btn-secondary"
          >
            Let's Talk
          </a>
        </div>
      </div>

      {/* Futuristic Orbital HUD Graphic Overlay (Layering: Canvas -> Orbital HUD -> Content) */}
      <div className="hero-orbital-container">
        <img
          src="/hero-orbital-ui.png"
          alt="Orbital HUD scroll indicator"
          className="hero-orbital-img"
          draggable={false}
        />
        {/* Clickable hit area aligned with "SCROLL DOWN ↓" in the PNG */}
        <button
          type="button"
          onClick={scrollToAbout}
          className="hero-orbital-scroll-btn"
          aria-label="Scroll down to About section"
          title="Scroll down to About"
        />
      </div>

      {!loaded && (
        <div className="hero-loading">
          <div className="spinner"></div>
          <span>Loading Interactive Experience...</span>
        </div>
      )}
    </section>
  );
}
