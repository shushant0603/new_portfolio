
export const projectsData = [
  {
    id: "01",
    title: "Krishna_AI",
    subtitle: "AI-Powered Bhagavad Gita Chatbot",
    description:
      "Built an AI-powered conversational application that answers philosophical and life-related questions using Bhagavad Gita-based knowledge. Implemented a FastAPI backend with LangChain, document processing, embeddings and retrieval to provide context-aware responses generated through an LLM.",
    technologies: [
      "Python",
      "FastAPI",
      "LangChain",
      "LLM",
      "RAG",
      "FAISS",
      "React",
    ],
    category: "AI & LLM Applications",
    githubUrl: "https://github.com/shushant0603",
      image: "/krishnaAI.png",
  },

  // {
  //   id: "02",
  //   title: "Real-Time Chat & Video",
  //   subtitle: "Real-Time Messaging & Peer-to-Peer Communication",
  //   description:
  //     "Built a real-time communication platform supporting instant messaging and peer-to-peer video calling. Used Socket.IO for real-time signaling and messaging, WebRTC for direct media communication, and a Node.js backend to manage rooms, users and communication events.",
  //   technologies: [
  //     "React",
  //     "Node.js",
  //     "Express",
  //     "Socket.IO",
  //     "WebRTC",
  //     "MongoDB",
  //   ],
  //   category: "Full Stack & Real-Time RTC",
  //   githubUrl: "https://github.com/shushant0603/ChatAPP_Backend",
  //   image: "/chatApp.png",
  // },

  {
    id: "02",
    title: "Smart Restock",
    subtitle: "Inventory Management & Demand Forecasting System",
    description:
      "Developed a smart inventory platform for monitoring stock levels, managing product transactions and generating low-stock alerts. Designed an event-driven workflow that updates inventory, evaluates reorder thresholds and triggers notifications, with demand forecasting using LightGBM for data-driven restocking decisions.",
    technologies: [
      "React",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Prisma",
      "Supabase",
      "LightGBM",
    ],
    category: "AI & Supply Chain",
    githubUrl:
      "https://github.com/shushant0603/Smart_Restock_Inventory_Alert_System_Backend",
      image: "/inventory.png",
  },

  {
    id: "03",
    title: "DSA Tracker",
    subtitle: "Personal DSA Progress & Notes Platform",
    description:
      "Built a full-stack platform for organizing Data Structures and Algorithms practice. The application allows users to manage notes, track solved problems and structure their preparation through a responsive React interface backed by REST APIs and persistent database storage.",
    technologies: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "MongoDB",
      "REST APIs",
    ],
    category: "Full Stack Web Development",
    githubUrl: "https://github.com/shushant0603/DSA_Tracker_Frontend",
      image: "/DSA_Tracker.png",
  },

  { id: "04",
     title: "Speech Pact", 
     subtitle: "AI-Powered English Speaking Practice Platform",
      description: "Built an AI-powered English speaking practice platform where users upload their resume and receive personalized speaking topics based on their experience, skills and projects. Implemented resume text extraction with PDF parsing and OCR, followed by LLM-powered topic generation to create relevant and practical speaking exercises.", 
      technologies: [ "React", "FastAPI", "Python", "LLM", "PDF Processing", "OCR", "REST APIs" ], 
      category: "AI & Language Learning", githubUrl: "https://github.com/shushant0603", 
        image: "/resume.png", },
];

