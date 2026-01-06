import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef } from "react";
import { educationTimeline } from "../data";

const Education = () => {
  const containerRef = useRef(null);
  const sectionRef = useRef(null);
  const contentRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.95, 1, 1, 1]);
  const y = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [100, 0, 0, 0]);

  const isInView = useInView(contentRef, { once: false, amount: 0.2 });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const lineVariants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: {
        duration: 1.5,
        ease: [0.22, 1, 0.36, 1],
        delay: 0.5,
      },
    },
  };

  const connectorVariants = {
    hidden: { scaleY: 0 },
    visible: {
      scaleY: 1,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <div ref={containerRef} className="relative min-h-[150vh]">
      <motion.section
        ref={sectionRef}
        style={{ opacity, scale, y }}
        id="education-section"
        className="sticky top-0 bg-black min-h-screen relative overflow-hidden rounded-t-[35px] flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12 py-6 sm:py-8 md:py-10"
      >
        {/* Decorative background elements */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-white to-neutral-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-tl from-neutral-300 to-neutral-500 rounded-full blur-3xl"></div>
        </div>

        <motion.div
          ref={contentRef}
          className="w-full max-w-[1200px] mx-auto relative z-10"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* HEADER */}
          <motion.div variants={titleVariants} className="mb-6 md:mb-8">
            <h1 className="text-white text-[2.5rem] sm:text-[3.5rem] md:text-[4.5rem] lg:text-[5rem] font-medium leading-[0.95] tracking-tight">
              EDUCATION
            </h1>
          </motion.div>

          {/* HORIZONTAL TIMELINE */}
          <div className="relative">
            <div className="w-full">
              <div className="relative py-12 md:py-16 lg:py-20">
                {/* Horizontal Main Line - Hidden on mobile */}
                <motion.div
                  variants={lineVariants}
                  className="hidden md:block absolute top-1/2 left-0 right-0 h-[2px] bg-gradient-to-r from-neutral-700 via-neutral-600 to-neutral-700 origin-left transform -translate-y-1/2 z-0"
                ></motion.div>

                {/* Timeline Items Grid - Responsive */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 max-w-5xl mx-auto">
                  {educationTimeline.map((item, index) => {
                    const isTop = index % 2 === 0;

                    return (
                      <motion.div
                        key={item.id}
                        variants={itemVariants}
                        className="relative flex flex-col items-center justify-center"
                      >
                        {/* Content Box */}
                        <div className={`w-full relative z-20 ${isTop ? 'md:order-1 md:pb-12' : 'md:order-3 md:pt-12'}`}>
                          <motion.div
                            whileHover={{ scale: 1.03, y: -3 }}
                            transition={{ duration: 0.3 }}
                            className="bg-neutral-800 border-2 border-neutral-600 rounded-lg p-4 md:p-5 shadow-2xl hover:shadow-neutral-700/50 hover:border-neutral-500 transition-all"
                          >
                            <div className="text-neutral-300 text-[0.7rem] sm:text-[0.75rem] tracking-widest font-bold mb-2">
                              {item.year}
                            </div>
                            <h3 className="text-white text-[1.1rem] sm:text-[1.2rem] md:text-[1.35rem] font-bold leading-tight mb-2">
                              {item.title}
                            </h3>
                            <p className="text-neutral-200 text-[0.8rem] sm:text-[0.85rem] font-semibold mb-2">
                              {item.institution}
                            </p>
                            <p className="text-neutral-400 text-[0.75rem] sm:text-[0.8rem] leading-relaxed mb-3">
                              {item.description}
                            </p>
                            
                            {/* Achievement Badge */}
                            {item.achievement && (
                              <div className="mb-3 inline-flex items-center gap-2 bg-neutral-700 px-2.5 py-1.5 rounded-md border border-neutral-600">
                                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                                <span className="text-white text-[0.7rem] sm:text-[0.75rem] font-semibold">
                                  {item.achievement}
                                </span>
                              </div>
                            )}

                            {/* Skills */}
                            {item.skills && item.skills.length > 0 && (
                              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                                {item.skills.map((skill, i) => (
                                  <span
                                    key={i}
                                    className="px-2 sm:px-2.5 py-0.5 sm:py-1 bg-neutral-700 text-neutral-200 rounded text-[0.7rem] sm:text-[0.75rem] border border-neutral-600 font-medium"
                                  >
                                    {skill}
                                  </span>
                                ))}
                              </div>
                            )}
                          </motion.div>
                        </div>

                        {/* Vertical Connector Line - Hidden on mobile, z-index lower */}
                        <motion.div
                          variants={connectorVariants}
                          className={`hidden md:block w-[2px] bg-gradient-to-b from-neutral-500 via-neutral-600 to-neutral-700 z-10 ${
                            isTop ? 'md:order-2 origin-top h-12' : 'md:order-2 origin-bottom h-12'
                          }`}
                        ></motion.div>

                        {/* Lollipop Marker - Hidden on mobile, z-index lower */}
                        <motion.div
                          initial={{ scale: 0, rotate: -90 }}
                          animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -90 }}
                          transition={{
                            duration: 0.6,
                            delay: 0.8 + index * 0.2,
                            type: "spring",
                            stiffness: 180,
                          }}
                          className={`hidden md:block relative z-10 ${isTop ? 'md:order-3' : 'md:order-1'}`}
                        >
                          <div className="relative">
                            {/* Main circle */}
                            <div className="w-7 h-7 rounded-full bg-white border-[3px] border-neutral-800 shadow-xl"></div>
                            
                            {/* Subtle pulse ring */}
                            <motion.div
                              animate={{
                                scale: [1, 1.5, 1],
                                opacity: [0.3, 0, 0.3],
                              }}
                              transition={{
                                duration: 2.5,
                                repeat: Infinity,
                                ease: "easeInOut",
                              }}
                              className="absolute inset-0 w-7 h-7 rounded-full border-2 border-white"
                            ></motion.div>
                          </div>
                        </motion.div>

                        {/* Dot on main line - Hidden on mobile, lowest z-index */}
                        <div className="hidden md:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-white border-[2px] border-neutral-800 z-5"></div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.section>
    </div>
  );
};

export default Education;