# 🚀 Shushant Kumar — Personal Portfolio

A modern, high-performance developer portfolio featuring an interactive **360° cursor-tracking character canvas**, futuristic **Orbital HUD overlay**, and responsive editorial sections highlighting full-stack engineering, competitive programming metrics, and AI applications.

<p align="center">
  <img src="./src/assets/Screenshot%202026-09-22%20at%207.52.46%E2%80%AFAM.png" alt="Shushant Kumar Portfolio Preview" width="100%" />
</p>

---

## 🌐 Live & Contact Links

- **Portfolio Website:** [shushant.tech](https://www.shushant.tech/)
- **GitHub:** [@shushant0603](https://github.com/shushant0603)
- **LinkedIn:** [shushantpandey06](https://www.linkedin.com/in/shushantpandey06/)
- **LeetCode:** [shushantKumar625](https://leetcode.com/u/shushantKumar625/)
- **Email:** [shushantkumar0625@gmail.com](mailto:shushantkumar0625@gmail.com)

---

## ✨ Features

- **🎮 Interactive 360° Cursor Tracking Hero:**
  - High-performance HTML5 Canvas rendering at 60 FPS.
  - Trigonometric angle interpolation with spring/lerp damping (`0.12` factor) across a 64-frame sequence.
  - Smooth center deadzone blend ensuring seamless front-facing focus when cursor hovers near center.
- **🛰️ Futuristic Orbital HUD Graphic:**
  - Layered orbital rings with pulsing ambient glow and integrated smooth-scroll action.
  - Built with non-blocking pointer events (`pointer-events: none`) to preserve continuous cursor tracking.
- **🧭 Dynamic ScrollSpy Navigation:**
  - Floating glassmorphism navbar pill with active section tracking sorted by DOM vertical offsets.
  - Mobile responsive slide-out drawer menu.
- **📊 Verified Resume Metrics & Coding Profile:**
  - Real performance statistics: **7.33 CGPA** (B.Tech CSBS at Netaji Subhash Engineering College, Kolkata), **300+ LeetCode problems (1491 rating)**, **4★ HackerRank in C**, and **CodeChef Bronze Badge**.
- **💻 Featured Engineering Projects:**
  - **Krishna_AI:** Philosophical AI Chatbot powered by Google Gemini API, FastAPI, LangChain, and simulated RAG.
  - **Real-Time Chat App:** Low-latency messaging & peer-to-peer WebRTC video calling platform with Socket.IO & MERN.
  - **DSA Tracker:** Full-stack note and algorithmic revision tracker built with React, REST APIs, and MongoDB.
- **🎓 Vertical Academic Timeline:**
  - Clean milestones covering B.Tech (2023–2027), Class XII (77.2%), and Class X (79.2%).
- **📱 Fully Responsive & Accessible:**
  - Tailored breakpoints for desktop, tablet, and mobile with modern typography (`Plus Jakarta Sans` & `Space Grotesk`).

---

## 🛠️ Tech Stack

- **Frontend Core:** React 19, JavaScript (ESNext)
- **Build Tool:** Vite
- **Styling:** Vanilla CSS design tokens + Tailwind CSS compatibility
- **Animation & Canvas:** HTML5 2D Canvas Context, `requestAnimationFrame`, CSS keyframe animations
- **Asset Pipeline:** Python 3 + OpenCV (`cv2`) for video frame extraction and WebP optimization

---

## 📂 Project Structure

```bash
personal_portfolio/
├── portfolio/                 # React frontend application
│   ├── public/
│   │   ├── frames/            # Extracted 64 WebP frames (frame_000 to frame_063)
│   │   ├── hero-orbital-ui.png# Transparent orbital HUD asset
│   │   └── favicon.svg
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   │   ├── Navbar.jsx         # Glassmorphism navigation + mobile drawer
│   │   │   ├── CursorHero.jsx     # 60 FPS canvas animation & hero section
│   │   │   ├── About.jsx          # Editorial bio + 4 verified metric cards
│   │   │   ├── Skills.jsx         # 7 technical skill categories from resume
│   │   │   ├── CodingJourney.jsx  # LeetCode, HackerRank, and CodeChef highlights
│   │   │   ├── Projects.jsx       # Large project showcase cards
│   │   │   ├── Education.jsx      # Clean vertical academic timeline
│   │   │   ├── Contact.jsx        # Symmetrical 6-item contact grid + CTA
│   │   │   └── Footer.jsx         # Minimal footer & social links
│   │   ├── data/
│   │   │   ├── projects.js        # Featured project data
│   │   │   └── skills.js          # Categorized technical skills
│   │   ├── App.jsx                # Main assembled application
│   │   ├── App.css                # Component styling & responsive rules
│   │   └── index.css              # Design tokens & base stylesheet
│   └── package.json
└── python/                    # Python environment & asset generation
    ├── character2.mp4         # Source character video
    ├── extract_frames.py      # OpenCV script extracting 64 optimized WebP frames
    └── .venv/
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [Python 3](https://www.python.org/) with OpenCV (`opencv-python`) if you wish to re-extract video frames

### 1. Clone & Navigate to Project

```bash
git clone https://github.com/shushant0603/personal_portfolio.git
cd personal_portfolio/portfolio
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser to view the live portfolio.

### 4. Build for Production

```bash
npm run build
```

The production-ready bundle will be generated in the `portfolio/dist` directory.

---

## 🐍 Python Frame Extraction (Optional)

If you replace the character video (`character2.mp4`):

```bash
cd ../python
source .venv/bin/activate
pip install opencv-python
python extract_frames.py
```

This extracts 64 evenly distributed WebP frames directly into `../portfolio/public/frames/`.

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).

---

© 2026 **Shushant Kumar**. All rights reserved.
