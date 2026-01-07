import { projects } from "../data";
import { useScroll, useTransform, motion, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const Projects = () => {
  const containerRef = useRef(null);
  const sectionRef = useRef(null);
  const projectsStackRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [showNumber, setShowNumber] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.95, 1, 1, 1]);
  const y = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [100, 0, 0, 0]);

  // Track if projects section is in view
  const { scrollYProgress: projectsProgress } = useScroll({
    target: projectsStackRef,
    offset: ["start end", "end start"],
  });

  useEffect(() => {
    const unsubscribe = projectsProgress.on("change", (latest) => {
      // Show number only when projects are actually in view
      if (latest > 0.1 && latest < 0.9) {
        setShowNumber(true);
      } else {
        setShowNumber(false);
      }
    });

    return () => unsubscribe();
  }, [projectsProgress]);

  return (
    <div ref={containerRef} className="relative min-h-[200vh]">
      <motion.section
        ref={sectionRef}
        style={{ opacity, scale, y }}
        id="projects-section"
        className="sticky top-0 bg-black rounded-t-[35px] min-h-screen relative overflow-hidden"
      >
        {/* Decorative background elements */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute top-20 left-10 w-72 sm:w-80 md:w-96 h-72 sm:h-80 md:h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-72 sm:w-80 md:w-96 h-72 sm:h-80 md:h-96 bg-neutral-400 rounded-full blur-3xl"></div>
        </div>

        {/* HEADER */}
        <div className="px-6 md:px-16 lg:px-24 pt-28 md:pt-20 lg:pt-25 pb-10 relative z-10">
          <div className="max-w-[1600px] mx-auto">
            <h1 className="text-white text-[3.2rem] md:text-[6.5rem] lg:text-[5rem] font-medium leading-[0.95] tracking-tight mb-16">
              SELECTED WORKS
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-10 max-w-[1400px]">
              <span className="text-neutral-600 text-[0.8rem] tracking-wider pt-2" />
              <p className="text-neutral-400 text-[1.15rem] md:text-[1.45rem] lg:text-[1.6rem] leading-[1.55] font-light max-w-[54ch]">
                Thoughtfully crafted digital experiences that balance
                functionality and aesthetics to create work that is refined,
                memorable, and purposeful.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* PROJECTS STACK - Outside motion section to preserve sticky behavior */}
      <div 
        ref={projectsStackRef}
        className="bg-black relative w-full pb-20"
        style={{ minHeight: `${projects.length * 100}vh` }}
      >
        {/* Fixed Left Number - 3D Style with Fast Animation */}
        <AnimatePresence>
          {showNumber && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed left-4 sm:left-6 md:left-8 lg:left-10 top-20 sm:top-24 md:top-28 lg:top-32 z-20 pointer-events-none"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -30, scale: 0.95 }}
                  transition={{ 
                    duration: 0.25, 
                    ease: [0.34, 1.56, 0.64, 1] // Bouncy easing
                  }}
                  className="relative select-none"
                >
                  {/* 3D Number with Multiple Layers */}
                  <div className="relative">
                    {/* Shadow layers for 3D effect */}
                    <span 
                      className="absolute text-[4rem] sm:text-[6rem] md:text-[8rem] lg:text-[10rem] xl:text-[13rem] font-bold tracking-tighter leading-none block"
                      style={{
                        color: '#0a0a0a',
                        transform: 'translate(8px, 8px)',
                        textShadow: '0 0 40px rgba(0,0,0,0.5)',
                      }}
                    >
                      {String(projects[activeIndex].id).padStart(2, "0")}
                    </span>
                    
                    <span 
                      className="absolute text-[4rem] sm:text-[6rem] md:text-[8rem] lg:text-[10rem] xl:text-[13rem] font-bold tracking-tighter leading-none block"
                      style={{
                        color: '#1a1a1a',
                        transform: 'translate(6px, 6px)',
                      }}
                    >
                      {String(projects[activeIndex].id).padStart(2, "0")}
                    </span>
                    
                    <span 
                      className="absolute text-[4rem] sm:text-[6rem] md:text-[8rem] lg:text-[10rem] xl:text-[13rem] font-bold tracking-tighter leading-none block"
                      style={{
                        color: '#2a2a2a',
                        transform: 'translate(4px, 4px)',
                      }}
                    >
                      {String(projects[activeIndex].id).padStart(2, "0")}
                    </span>
                    
                    <span 
                      className="absolute text-[4rem] sm:text-[6rem] md:text-[8rem] lg:text-[10rem] xl:text-[13rem] font-bold tracking-tighter leading-none block"
                      style={{
                        color: '#3a3a3a',
                        transform: 'translate(2px, 2px)',
                      }}
                    >
                      {String(projects[activeIndex].id).padStart(2, "0")}
                    </span>

                    {/* Main number with gradient */}
                    <span 
                      className="relative text-[4rem] sm:text-[6rem] md:text-[8rem] lg:text-[10rem] xl:text-[13rem] font-bold tracking-tighter leading-none block"
                      style={{
                        background: 'linear-gradient(135deg, #ffffff 0%, #a0a0a0 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        filter: 'drop-shadow(0 0 20px rgba(255,255,255,0.1))',
                      }}
                    >
                      {String(projects[activeIndex].id).padStart(2, "0")}
                    </span>

                    {/* Highlight on top edge */}
                    <span 
                      className="absolute text-[4rem] sm:text-[6rem] md:text-[8rem] lg:text-[10rem] xl:text-[13rem] font-bold tracking-tighter leading-none block opacity-30"
                      style={{
                        color: '#ffffff',
                        transform: 'translate(-1px, -1px)',
                        WebkitMaskImage: 'linear-gradient(to bottom, white 0%, transparent 30%)',
                        maskImage: 'linear-gradient(to bottom, white 0%, transparent 30%)',
                      }}
                    >
                      {String(projects[activeIndex].id).padStart(2, "0")}
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </motion.div>
          )}
        </AnimatePresence>

        {projects.map((project, index) => (
          <ProjectItem
            key={index}
            project={project}
            index={index}
            setActiveIndex={setActiveIndex}
          />
        ))}
      </div>
    </div>
  );
};

const ProjectItem = ({ project, index, setActiveIndex }) => {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start center", "end center"],
  });

  // Update active index when this project is in view
  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      if (latest > 0.2 && latest < 0.8) {
        setActiveIndex(index);
      }
    });

    return () => unsubscribe();
  }, [scrollYProgress, index, setActiveIndex]);

  return (
    <div
      ref={container}
      className="h-screen flex items-start justify-center sticky pt-16 sm:pt-20 md:pt-10"
      style={{ top: "0px" }}
    >
      <div className="relative w-full h-full origin-top bg-black flex items-start justify-center pl-[8rem] sm:pl-[10rem] md:pl-[12rem] lg:pl-[14rem] xl:pl-[16rem] pr-4 sm:pr-6 md:pr-8 lg:pr-10 xl:pr-12" style={{ zIndex: index }}>
        {/* Fixed width and height card - NO SCALING */}
        <div className="w-[90%] h-[90vh] bg-black rounded-xl md:rounded-2xl overflow-hidden relative z-10 shadow-2xl flex flex-col border-0">
          {/* Full Screen Image/Video Container */}
          <div className="w-full flex-1 bg-black overflow-hidden relative rounded-xl md:rounded-2xl">
            {project.type === "video" ? (
              <video
                src={project.media}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover rounded-xl md:rounded-2xl"
              />
            ) : (
              <img
                src={project.media}
                alt={project.title}
                className="w-full h-full object-cover rounded-xl md:rounded-2xl"
              />
            )}
            
            {/* Gradient overlay for text readability - smooth blend */}
            <div className="absolute bottom-0 left-0 right-0 h-56 bg-gradient-to-t from-black via-black/95 to-transparent rounded-b-xl md:rounded-b-2xl"></div>
          </div>

          {/* Details Section - Positioned at bottom */}
          <div className="absolute bottom-0 left-0 right-0 bg-transparent p-6 sm:p-7 md:p-8 lg:p-10 xl:p-12 pt-24">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-6 items-end max-w-[1600px] mx-auto">
              {/* Left Column - Title and Description */}
              <div className="space-y-4">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-white leading-tight">
                  {project.title}
                </h2>
                
                <p className="text-neutral-300 text-sm md:text-base lg:text-lg leading-relaxed max-w-3xl">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 bg-neutral-900/80 border border-neutral-700/50 rounded-full text-neutral-300 text-xs md:text-sm whitespace-nowrap backdrop-blur-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right Column - CTA */}
              <a
                href="#"
                className="flex items-center gap-3 text-white hover:text-neutral-300 transition-colors group text-sm md:text-base lg:text-lg font-light whitespace-nowrap"
              >
                Visit Website
                <span className="group-hover:translate-x-1 transition-transform inline-block text-xl">
                  →
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;