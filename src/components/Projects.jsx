import { projects } from "../data";
import { useScroll, useTransform, motion, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const Projects = () => {
  const containerRef = useRef(null);
  const sectionRef = useRef(null);
  const headerHoldRef = useRef(null);
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
      if (latest > 0.1 && latest < 0.9) {
        setShowNumber(true);
      } else {
        setShowNumber(false);
      }
    });

    return () => unsubscribe();
  }, [projectsProgress]);

  return (
    <div ref={containerRef} className="relative">
      {/* HEADER SECTION WITH STOPPING */}
      <div ref={headerHoldRef} className="relative h-[200vh]">
        <motion.section
          ref={sectionRef}
          style={{ opacity, scale, y }}
          id="projects-section"
          className="sticky top-0 bg-black rounded-t-[35px] h-screen relative overflow-hidden"
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
      </div>

      {/* PROJECTS STACK */}
      <div 
        ref={projectsStackRef}
        className="bg-black relative w-full"
      >
        {/* Fixed Left Number - 3D STYLE */}
        <AnimatePresence>
          {showNumber && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="fixed left-4 sm:left-6 md:left-8 lg:left-12 xl:left-16 top-20 sm:top-24 md:top-28 lg:top-32 z-[100] pointer-events-none"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ 
                    duration: 0.3, 
                    ease: [0.22, 1, 0.36, 1]
                  }}
                  className="relative select-none"
                >
                  {/* 3D Number - Improved Layers */}
                  <div className="relative">
                    {/* Deep shadow layers */}
                    <span 
                      className="absolute text-[4rem] sm:text-[6rem] md:text-[8rem] lg:text-[10rem] xl:text-[12rem] font-black tracking-tighter leading-none block"
                      style={{
                        color: '#000000',
                        transform: 'translate(12px, 12px)',
                      }}
                    >
                      {String(projects[activeIndex].id).padStart(2, "0")}
                    </span>
                    
                    <span 
                      className="absolute text-[4rem] sm:text-[6rem] md:text-[8rem] lg:text-[10rem] xl:text-[12rem] font-black tracking-tighter leading-none block"
                      style={{
                        color: '#111111',
                        transform: 'translate(10px, 10px)',
                      }}
                    >
                      {String(projects[activeIndex].id).padStart(2, "0")}
                    </span>
                    
                    <span 
                      className="absolute text-[4rem] sm:text-[6rem] md:text-[8rem] lg:text-[10rem] xl:text-[12rem] font-black tracking-tighter leading-none block"
                      style={{
                        color: '#1a1a1a',
                        transform: 'translate(8px, 8px)',
                      }}
                    >
                      {String(projects[activeIndex].id).padStart(2, "0")}
                    </span>
                    
                    <span 
                      className="absolute text-[4rem] sm:text-[6rem] md:text-[8rem] lg:text-[10rem] xl:text-[12rem] font-black tracking-tighter leading-none block"
                      style={{
                        color: '#2a2a2a',
                        transform: 'translate(6px, 6px)',
                      }}
                    >
                      {String(projects[activeIndex].id).padStart(2, "0")}
                    </span>
                    
                    <span 
                      className="absolute text-[4rem] sm:text-[6rem] md:text-[8rem] lg:text-[10rem] xl:text-[12rem] font-black tracking-tighter leading-none block"
                      style={{
                        color: '#3a3a3a',
                        transform: 'translate(4px, 4px)',
                      }}
                    >
                      {String(projects[activeIndex].id).padStart(2, "0")}
                    </span>
                    
                    <span 
                      className="absolute text-[4rem] sm:text-[6rem] md:text-[8rem] lg:text-[10rem] xl:text-[12rem] font-black tracking-tighter leading-none block"
                      style={{
                        color: '#4a4a4a',
                        transform: 'translate(2px, 2px)',
                      }}
                    >
                      {String(projects[activeIndex].id).padStart(2, "0")}
                    </span>

                    {/* Main number with gradient */}
                    <span 
                      className="relative text-[4rem] sm:text-[6rem] md:text-[8rem] lg:text-[10rem] xl:text-[12rem] font-black tracking-tighter leading-none block"
                      style={{
                        background: 'linear-gradient(180deg, #ffffff 0%, #cccccc 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                      }}
                    >
                      {String(projects[activeIndex].id).padStart(2, "0")}
                    </span>

                    {/* Top highlight */}
                    <span 
                      className="absolute text-[4rem] sm:text-[6rem] md:text-[8rem] lg:text-[10rem] xl:text-[12rem] font-black tracking-tighter leading-none block"
                      style={{
                        color: '#ffffff',
                        transform: 'translate(-1px, -1px)',
                        WebkitMaskImage: 'linear-gradient(to bottom, white 0%, transparent 40%)',
                        maskImage: 'linear-gradient(to bottom, white 0%, transparent 40%)',
                        opacity: 0.6,
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

        {/* STOPPING EFFECT AT END - Same as header */}
        <div className="h-screen bg-black"></div>
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

  // Update active index immediately when project comes into view
  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      // Trigger earlier for smoother response
      if (latest > 0.15 && latest < 0.85) {
        setActiveIndex(index);
      }
    });

    return () => unsubscribe();
  }, [scrollYProgress, index, setActiveIndex]);

  return (
    <div
      ref={container}
      className="h-[150vh] sticky top-0"
      style={{ zIndex: index }}
    >
      <div className="h-screen bg-black flex items-center justify-center">
        {/* Adjusted padding - more left space for number, less right */}
        <div className="relative w-full h-full flex items-center justify-center pl-[10rem] sm:pl-[12rem] md:pl-[14rem] lg:pl-[16rem] xl:pl-[20rem] pr-4 sm:pr-6 md:pr-8 lg:pr-10 py-4 sm:py-6 md:py-8">
          {/* Card - SAME SIZE FOR ALL */}
          <div className="w-full h-[92vh] sm:h-[94vh] md:h-[95vh] max-w-[1600px] bg-black rounded-xl md:rounded-2xl overflow-hidden relative shadow-2xl flex flex-col">
            {/* Full Screen Image/Video Container */}
            <div className="w-full flex-1 bg-black overflow-hidden relative rounded-xl md:rounded-2xl">
              {project.type === "video" ? (
                <video
                  src={project.media}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />
              ) : (
                <img
                  src={project.media}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              )}
              
              {/* Gradient overlay for text readability */}
              <div className="absolute bottom-0 left-0 right-0 h-48 sm:h-56 md:h-64 lg:h-72 bg-gradient-to-t from-black via-black/95 to-transparent"></div>
            </div>

            {/* Details Section - Positioned at bottom */}
            <div className="absolute bottom-0 left-0 right-0 bg-transparent p-6 sm:p-8 md:p-10 lg:p-12 xl:p-14">
              <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-6 items-end max-w-[1400px] mx-auto">
                {/* Left Column - Title and Description */}
                <div className="space-y-3 md:space-y-4">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium text-white leading-tight">
                    {project.title}
                  </h2>
                  
                  <p className="text-neutral-300 text-sm md:text-base lg:text-lg xl:text-xl leading-relaxed max-w-3xl">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1.5 md:px-4 md:py-2 bg-neutral-900/80 border border-neutral-700/50 rounded-full text-neutral-300 text-xs md:text-sm lg:text-base whitespace-nowrap backdrop-blur-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right Column - CTA */}
                <a
                  href="#"
                  className="flex items-center gap-3 text-white hover:text-neutral-300 transition-colors group text-sm md:text-base lg:text-lg xl:text-xl font-light whitespace-nowrap"
                >
                  Visit Website
                  <span className="group-hover:translate-x-1 transition-transform inline-block text-xl md:text-2xl">
                    →
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;