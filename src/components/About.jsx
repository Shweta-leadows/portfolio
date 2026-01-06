import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef } from "react";
import yourPhoto from "../assets/your-photo.jpg";

const About = () => {
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
        staggerChildren: 0.15,
        delayChildren: 0.2,
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

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <div ref={containerRef} className="relative min-h-[200vh]">
      <motion.section
        ref={sectionRef}
        style={{ opacity, scale, y }}
        id="about-section"
        className="sticky top-0 bg-black h-screen relative overflow-hidden rounded-t-[35px] flex items-center justify-center px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20"
      >
        {/* Decorative background elements */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute top-20 left-10 w-72 sm:w-80 md:w-96 h-72 sm:h-80 md:h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-72 sm:w-80 md:w-96 h-72 sm:h-80 md:h-96 bg-neutral-400 rounded-full blur-3xl"></div>
        </div>

        <motion.div
          ref={contentRef}
          className="w-full max-w-[1600px] mx-auto relative z-10 h-full flex items-center py-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center w-full">
            {/* LEFT SIDE - IMAGE */}
            <motion.div variants={imageVariants} className="order-1 flex items-center justify-center lg:justify-start">
              <div className="relative w-full max-w-[380px] lg:max-w-[420px] xl:max-w-[460px]">
                {/* Main Image - Fixed height */}
                <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[450px] lg:h-[500px] xl:h-[550px]">
                  <img
                    src={yourPhoto}
                    alt="About Me"
                    className="w-full h-full object-cover"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>

                {/* Decorative element */}
                <motion.div
                  initial={{ width: 0 }}
                  animate={isInView ? { width: "60%" } : { width: 0 }}
                  transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute -bottom-3 -left-3 h-full border-2 border-neutral-700 rounded-2xl -z-10"
                ></motion.div>
              </div>
            </motion.div>

            {/* RIGHT SIDE - CONTENT */}
            <div className="order-2 space-y-6 lg:space-y-8 flex flex-col justify-center">
              {/* Title */}
              <motion.div variants={titleVariants}>
                <h2 className="text-[#e8e3da] text-[2.5rem] sm:text-[3rem] md:text-[3.5rem] lg:text-[4rem] xl:text-[5rem] font-medium leading-[0.9] tracking-tight mb-3">
                  About Me
                </h2>
                <div className="h-1 w-16 bg-gradient-to-r from-neutral-500 to-transparent"></div>
              </motion.div>

              {/* Description */}
              <motion.div variants={textVariants} className="space-y-4 lg:space-y-5">
                <p className="text-neutral-300 text-sm md:text-base lg:text-lg leading-relaxed">
                  Hey there! I'm a passionate developer with over 2 years of experience 
                  building innovative web applications. I love transforming ideas into 
                  elegant, user-friendly digital experiences.
                </p>

                <p className="text-neutral-400 text-sm md:text-base leading-relaxed">
                  When I'm not coding, you'll find me exploring the latest tech trends, 
                  contributing to open-source projects, or enjoying a good cup of coffee 
                  while brainstorming my next big project.
                </p>

                <p className="text-neutral-400 text-sm md:text-base leading-relaxed">
                  I specialize in building scalable applications using modern technologies 
                  like React, Node.js, and Python. My goal is to create products that not 
                  only look great but also solve real-world problems.
                </p>
              </motion.div>

              {/* Stats or Highlights */}
              <motion.div
                variants={textVariants}
                className="grid grid-cols-2 gap-4 lg:gap-6 pt-2"
              >
                <div className="space-y-1">
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">2+</h3>
                  <p className="text-neutral-400 text-xs md:text-sm lg:text-base">Years Experience</p>
                </div>
                <div className="space-y-1">
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">15+</h3>
                  <p className="text-neutral-400 text-xs md:text-sm lg:text-base">Projects Completed</p>
                </div>
                <div className="space-y-1">
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">10+</h3>
                  <p className="text-neutral-400 text-xs md:text-sm lg:text-base">Technologies</p>
                </div>
                <div className="space-y-1">
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">100%</h3>
                  <p className="text-neutral-400 text-xs md:text-sm lg:text-base">Client Satisfaction</p>
                </div>
              </motion.div>

              {/* CTA Button */}
              <motion.div variants={textVariants}>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 lg:gap-3 px-6 lg:px-8 py-3 lg:py-4 bg-white text-black rounded-full font-medium text-xs md:text-sm lg:text-base hover:bg-neutral-200 transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  Let's Connect
                  <span className="text-lg lg:text-xl">→</span>
                </a>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </motion.section>
    </div>
  );
};

export default About;