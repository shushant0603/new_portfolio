import Navbar from "./components/Navbar";
import CursorHero from "./components/CursorHero";
import About from "./components/About";
import Skills from "./components/Skills";
import CodingJourney from "./components/CodingJourney";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";

export default function App() {
  return (
    <div className="portfolio-app bg-[#080808] text-white min-h-screen selection:bg-[#FF1E35] selection:text-white">
      <Navbar />
      <main>
        <CursorHero />
        <About />
        <Skills />
        <CodingJourney />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}