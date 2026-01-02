import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="bg-[#e8e3da] text-gray-900 font-sans antialiased">
      {/* HERO SECTION */}
      <div className="relative z-50">
        <Navbar />
        <Hero />
      </div>

      {/* EXPERIENCE SECTION */}
      <div id="experience-section" className="relative z-40">
        <Experience />
      </div>

      {/* PROJECTS SECTION */}
      <div id="projects-section" className="relative z-30">
        <Projects />
      </div>

      {/* SKILLS SECTION */}
      <div className="relative z-20">
        <Skills />
      </div>
    </div>
  );
}

export default App;