import { heroContent } from "../data";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Hero = () => {
  const heroRef = useRef(null);

  /* ----------------------------------
     SCROLL-BASED BLUR
  ---------------------------------- */
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const blur = useTransform(
    scrollYProgress,
    [0, 0.35],
    ["blur(0px)", "blur(12px)"]
  );
  const opacity = useTransform(scrollYProgress, [0, 0.35], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.35], [1, 0.95]);

  /* ----------------------------------
     ANIMATIONS
  ---------------------------------- */
  const revealVariants = {
    initial: { clipPath: "inset(0 0 100% 0)" },
    animate: {
      clipPath: "inset(0 0 0% 0)",
      transition: { duration: 1.2, ease: "easeInOut" },
    },
  };

  const revealFromBottomVariants = {
    initial: { clipPath: "inset(100% 0 0 0)" },
    animate: {
      clipPath: "inset(0% 0 0 0)",
      transition: { duration: 1.5, ease: "easeInOut", delay: 0.1 },
    },
  };

  const zoomInVariants = {
    initial: { scale: 0.95, opacity: 0 },
    animate: {
      scale: 1,
      opacity: 1,
      transition: { duration: 1.5, ease: "easeOut" },
    },
  };

  const zoomInDelayedVariants = {
    initial: { scale: 0.9, opacity: 0 },
    animate: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut", delay: 0.2 },
    },
  };

  return (
    <motion.section
      ref={heroRef}
      style={{ filter: blur, opacity, scale }}
      className="bg-[#e8e3da] px-6 sm:px-8 md:px-12 lg:px-16 pt-4 md:pt-5 pb-2 flex flex-col min-h-screen will-change-transform"
    >
      {/* NAME */}
      <h1
        className="uppercase text-[#0a0a0a] font-semibold leading-[1]
        text-[13vw] sm:text-[12vw] md:text-[11vw] text-center mb-6 sm:mb-8 md:mb-4 tracking-[-0.01em]"
        style={{ fontFamily: "Arial, sans-serif" }}
      >
        {heroContent.name}
      </h1>

      {/* CONTENT GRID */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 flex-1 relative">
        {/* LEFT TEXT */}
        <div className="md:col-span-4 flex flex-col justify-start pt-4 md:pt-[3vw] md:ml-6">
          <div className="max-w-[20rem] lg:max-w-md">
            <motion.p
              className="text-[1rem] sm:text-[1.1rem] md:text-[1.2rem] lg:text-[1.4rem] text-[#555] leading-[1.7] font-normal mb-6 sm:mb-8 md:mb-10"
              variants={zoomInVariants}
              initial="initial"
              animate="animate"
            >
              Open to job opportunities worldwide.
              <br />
              Passionate about building polished,
              <br />
              intuitive, and thoughtful digital
              <br />
              experiences that leave a mark.
            </motion.p>

            <motion.button
              className="
                px-7 sm:px-8
                py-3.5 sm:py-4
                rounded-full
                bg-[#2b2b2b]
                text-white
                tracking-[1.5px]
                text-[11px]
                sm:text-[12px]
                font-medium
                shadow-lg
                shadow-black/10
                hover:shadow-xl
                hover:shadow-black/20
                hover:bg-[#1a1a1a]
                hover:scale-105
                transition-all
                duration-300
                relative
                overflow-hidden
              "
              variants={zoomInDelayedVariants}
              initial="initial"
              animate="animate"
            >
              <span className="relative z-10">CONTACT ↗</span>
            </motion.button>
          </div>
        </div>

        {/* IMAGE */}
        <div className="md:col-span-4 flex justify-center items-start pt-8 md:pt-0">
          <motion.div
            className="
              relative
              w-full
              aspect-[3/3.9]
              max-w-[340px]
              sm:max-w-[360px]
              md:max-w-[380px]
              lg:max-w-[400px]
              rounded-[12px]
              overflow-hidden
              grayscale
              contrast-110
              shadow-2xl
              shadow-black/15
              ring-1
              ring-black/5
            "
            variants={revealVariants}
            initial="initial"
            animate="animate"
          >
            <img
              src={heroContent.image}
              alt={heroContent.name}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-out"
            />
          </motion.div>
        </div>

        {/* DATE */}
        <div className="
          static
          md:absolute
          md:right-[60px]
          lg:right-[80px]
          md:bottom-[60px]
          lg:bottom-[80px]
          text-center
          md:text-right
          z-[4]
          mt-8
          md:mt-0
        ">
          <span className="block text-[10px] sm:text-[11px] tracking-[2px] text-[#666] mb-2">
            CRAFTING WEB EXPERIENCES SINCE
          </span>

          <motion.strong
            className="
              block
              text-[2.5rem]
              sm:text-[2.8rem]
              md:text-[3rem]
              font-black
              text-[#1a1a1a]
            "
            variants={revealFromBottomVariants}
            initial="initial"
            animate="animate"
          >
            {heroContent.experienceDate}
          </motion.strong>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;