import { projects } from "../data";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

const Projects = () => {
  const container = useRef(null);

  return (
    <section
      ref={container}
      id="projects-section"
      className="bg-black relative"
      style={{ minHeight: `${projects.length * 100}vh` }}
    >
      {/* HEADER */}
      <div className="px-6 md:px-16 lg:px-24 pt-20 pb-20">
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

      {/* PROJECTS STACK */}
      <div className="w-full pb-20">
        {projects.map((project, index) => {
          const targetScale = 1 - (projects.length - index) * 0.05;

          return (
            <ProjectItem
              key={index}
              project={project}
              index={index}
              targetScale={targetScale}
              isLast={index === projects.length - 1}
            />
          );
        })}
      </div>
    </section>
  );
};

const ProjectItem = ({ project, index, targetScale, isLast }) => {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(
    scrollYProgress,
    [0, 0.35],
    isLast ? [1, 1] : [1, targetScale],
    { clamp: true }
  );

  return (
    <div
      ref={container}
      className="h-screen flex items-center justify-center sticky"
      style={{ top: "0px" }}
    >
      <motion.div
        style={{
          scale,
          zIndex: index,
        }}
        className="relative w-full h-full max-h-screen origin-top bg-black flex items-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-10"
      >
        {/* Left Number */}
        <div className="absolute left-4 sm:left-6 md:left-8 lg:left-12 xl:left-16 top-1/2 -translate-y-1/2 z-0 pointer-events-none">
          <span className="text-[6rem] sm:text-[8rem] md:text-[12rem] lg:text-[16rem] xl:text-[20rem] font-light text-neutral-800 tracking-tighter leading-none block select-none">
            {String(project.id).padStart(2, "0")}
          </span>
        </div>

        {/* Right Card */}
        <div className="ml-auto w-full md:w-[75%] lg:w-[70%] xl:w-[65%] h-[80vh] max-h-[80vh] bg-neutral-900 rounded-xl md:rounded-2xl flex flex-col overflow-hidden relative z-10 shadow-2xl">
          {/* Image/Video Container */}
          <div className="w-full h-[45%] bg-black overflow-hidden relative flex-shrink-0">
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
          </div>

          {/* Content Container */}
          <div className="p-4 sm:p-5 md:p-6 lg:p-8 bg-neutral-900 overflow-y-auto flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6 lg:gap-8">
              {/* Left Column */}
              <div>
                <h2 className="text-xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-4xl font-normal text-white mb-3 md:mb-4 leading-tight">
                  {project.title}
                </h2>

                <div className="flex flex-wrap gap-2 mb-3 md:mb-4">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 border border-neutral-700 rounded-full text-neutral-400 text-xs md:text-sm whitespace-nowrap"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right Column */}
              <div className="flex flex-col justify-between gap-4">
                <p className="text-neutral-400 text-sm md:text-base leading-relaxed">
                  {project.description}
                </p>
                <a
                  href="#"
                  className="flex items-center gap-2 text-white hover:underline underline-offset-4 group w-fit text-sm md:text-base transition-all"
                >
                  Visit Website
                  <span className="group-hover:translate-x-1 transition-transform inline-block">
                    →
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Projects;
