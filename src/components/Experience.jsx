import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { services } from "../data";

const Experience = () => {
  const containerRef = useRef(null);
  const sectionRef = useRef(null);
  const headerHoldRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.95, 1, 1, 1]);
  const y = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [100, 0, 0, 0]);

  const ITEM_OFFSET = 150;

  return (
    <div ref={containerRef} className="relative">
      {/* HEADER SECTION WITH STOPPING */}
      <div ref={headerHoldRef} className="relative h-[200vh]">
        <motion.section
          ref={sectionRef}
          style={{ opacity, scale, y }}
          id="experience-section"
          className="sticky top-0 bg-black rounded-t-[35px] h-screen relative overflow-hidden"
        >
          {/* Decorative background elements */}
          <div className="absolute inset-0 opacity-5 pointer-events-none">
            <div className="absolute top-20 left-10 w-72 sm:w-80 md:w-96 h-72 sm:h-80 md:h-96 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-72 sm:w-80 md:w-96 h-72 sm:h-80 md:h-96 bg-neutral-400 rounded-full blur-3xl"></div>
          </div>

          {/* HERO */}
          <div className="px-6 md:px-16 lg:px-24 pt-28 md:pt-20 lg:pt-25 pb-10 relative z-10">
            <div className="w-full max-w-[1600px] mx-auto">
              <h1 className="text-white text-[3.2rem] md:text-[6.5rem] lg:text-[5rem] font-medium leading-[0.95] tracking-tight mb-16">
                EXPERIENCE
              </h1>

              <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-10 max-w-[1400px]">
                <span className="text-neutral-600 text-[0.8rem] tracking-wider pt-2" />
                <p className="text-neutral-400 text-[1.15rem] md:text-[1.45rem] lg:text-[1.6rem] leading-[1.55] font-light max-w-[54ch]">
                  With over 2 years of experience, I build and ship production-ready
                  web applications, working closely with modern frontend frameworks
                  and backend services. I emphasize clean architecture, performance
                  optimization, and creating intuitive user experiences.
                </p>
              </div>
            </div>
          </div>
        </motion.section>
      </div>

      {/* SERVICES STACK - Outside the motion section to preserve sticky behavior */}
      <div className="relative bg-black">
        {services.map((service, index) => (
          <ServiceItem
            key={index}
            service={service}
            index={index}
            ITEM_OFFSET={ITEM_OFFSET}
          />
        ))}

        {/* PUSH SPACE - This makes all items go up when scrolling past */}
        <div className="h-screen bg-black" />
      </div>
    </div>
  );
};

const ServiceItem = ({ service, index, ITEM_OFFSET }) => {
  const stickyTopOffset = index * ITEM_OFFSET;

  return (
    <div
      className="sticky top-0 min-h-screen bg-black border-t border-neutral-800"
      style={{
        top: `${stickyTopOffset}px`,
        zIndex: index + 1,
      }}
    >
      <div className="px-6 md:px-16 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 max-w-[1600px] mx-auto">
          {/* NUMBER */}
          <div className="md:col-span-3 pt-10 md:pt-14">
            <span className="text-[#888] text-[2rem] md:text-[3rem] font-light">
              ({String(index + 1).padStart(2, "0")})
            </span>
          </div>

          {/* CONTENT */}
          <div className="md:col-span-9 pt-10 md:pt-14 pb-28">
            <h3 className="text-white text-[2rem] md:text-[2.8rem] lg:text-[3.2rem] font-medium leading-[1.1] tracking-tight mb-12">
              {service.title}
            </h3>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 md:gap-24">
              <p className="text-[#999] text-[1.1rem] md:text-[1.25rem] leading-[1.6] font-normal">
                {service.description}
              </p>

              <div className="space-y-6">
                {service.technologies.map((tech, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-4 border-b border-[#333] pb-4"
                  >
                    <span className="text-[#555] font-mono text-sm pt-1">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[#ddd] text-lg font-light">
                      {tech}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;