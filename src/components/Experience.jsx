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

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.7, 1], [0, 1, 1, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.7, 1], [0.95, 1, 1, 1]);
  const y = useTransform(scrollYProgress, [0, 0.2, 0.7, 1], [100, 0, 0, 0]);

  const ITEM_OFFSET = 150;

  return (
    <div ref={containerRef} className="relative">
      {/* HEADER SECTION WITH STOPPING */}
      <div ref={headerHoldRef} className="relative h-[200vh]">
        <motion.section
          ref={sectionRef}
          style={{ opacity, scale, y }}
          id="experience-section"
          className="sticky top-0 bg-black rounded-t-[35px] min-h-screen relative overflow-hidden flex items-center"
        >
          {/* Monochromatic Decorative background elements */}
          <div className="absolute inset-0 opacity-[0.08] pointer-events-none">
            <motion.div 
              className="absolute top-20 left-10 w-[500px] h-[500px] bg-white rounded-full blur-3xl"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.05, 0.08, 0.05]
              }}
              transition={{ 
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div 
              className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-white rounded-full blur-3xl"
              animate={{ 
                scale: [1.2, 1, 1.2],
                opacity: [0.05, 0.08, 0.05]
              }}
              transition={{ 
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 4
              }}
            />
            <motion.div 
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-white/5 to-transparent rounded-full blur-2xl"
              animate={{ 
                scale: [1, 1.1, 1],
                opacity: [0.03, 0.06, 0.03]
              }}
              transition={{ 
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </div>

          {/* Subtle grid pattern */}
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }} />

          {/* Diagonal lines pattern */}
          <div className="absolute inset-0 opacity-[0.02]" style={{
            backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,0.1) 35px, rgba(255,255,255,0.1) 36px)`
          }} />

          {/* HERO - Mobile Layout */}
          <div className="w-full px-5 py-16 md:hidden relative z-10">
            <div className="space-y-8">
              {/* Tag */}
              <motion.div 
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/20 rounded-full"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <motion.span 
                  className="w-2 h-2 bg-white rounded-full"
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <span className="text-neutral-400 text-[0.65rem] tracking-wider font-medium uppercase">Professional Journey</span>
              </motion.div>

              {/* Title */}
              <h1 className="text-white text-[3rem] font-black leading-[0.9] tracking-tighter">
                EXPERIENCE
              </h1>

              {/* Since tag */}
              <span className="text-neutral-500 text-[0.7rem] tracking-widest font-medium uppercase block">Since 2022</span>

              {/* Description */}
              <p className="text-neutral-400 text-[0.95rem] leading-[1.6] font-light">
                I build and ship production-ready web applications, working closely with modern frontend frameworks and backend services.
              </p>

              {/* Stats Grid - Mobile */}
              <div className="grid grid-cols-3 gap-3 pt-2">
                <motion.div 
                  className="px-3 py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl text-center"
                  whileHover={{ scale: 1.02, y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="text-white text-[1.5rem] font-black tracking-tight leading-none mb-1">100%</div>
                  <div className="text-neutral-500 text-[0.6rem] font-semibold tracking-wider uppercase">Satisfaction</div>
                </motion.div>
                <motion.div 
                  className="px-3 py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl text-center"
                  whileHover={{ scale: 1.02, y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="text-white text-[1.5rem] font-black tracking-tight leading-none mb-1">15+</div>
                  <div className="text-neutral-500 text-[0.6rem] font-semibold tracking-wider uppercase">Projects</div>
                </motion.div>
                <motion.div 
                  className="px-3 py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl text-center"
                  whileHover={{ scale: 1.02, y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="text-white text-[1.5rem] font-black tracking-tight leading-none mb-1">3</div>
                  <div className="text-neutral-500 text-[0.6rem] font-semibold tracking-wider uppercase">Specialties</div>
                </motion.div>
              </div>

              {/* Tech stack - Mobile */}
              <div className="flex flex-wrap gap-2 pt-2">
                {['React', 'Node.js', 'TypeScript', 'MongoDB', 'Docker', 'AWS'].map((tech, i) => (
                  <motion.div
                    key={tech}
                    className="px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-neutral-300 text-[0.7rem] font-semibold"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + i * 0.05 }}
                  >
                    {tech}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Scroll indicator - Mobile */}
            <motion.div 
              className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50"
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <span className="text-white text-[0.65rem] tracking-[0.15em] font-light uppercase">Scroll</span>
              <motion.div 
                className="w-[1px] h-12 bg-gradient-to-b from-white via-white/50 to-transparent"
                animate={{ opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.div>
          </div>

          {/* HERO - Desktop Layout */}
          <div className="hidden md:block w-full px-6 md:px-16 lg:px-24 py-20 relative z-10">
            <div className="w-full max-w-[1600px] mx-auto">
              {/* Small tag above title */}
              <motion.div 
                className="inline-flex items-center gap-2 mb-8 px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/20 rounded-full"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <motion.span 
                  className="w-2 h-2 bg-white rounded-full"
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <span className="text-neutral-400 text-xs tracking-wider font-medium uppercase">Professional Journey</span>
              </motion.div>

              <h1 className="text-white text-[4rem] lg:text-[5rem] font-medium leading-[0.95] tracking-tight mb-16">
                EXPERIENCE
              </h1>

              <div className="grid grid-cols-1 md:grid-cols-[240px_1fr] gap-10 max-w-[1400px]">
                <div className="flex flex-col gap-4">
                  <span className="text-neutral-500 text-[0.75rem] tracking-widest pt-2 font-medium uppercase">Since 2022</span>
                  {/* Stats cards - monochrome */}
                  <div className="flex flex-col gap-3">
                    <motion.div 
                      className="px-5 py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                      whileHover={{ scale: 1.02, y: -2 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="text-white text-3xl font-bold tracking-tight">100%</div>
                      <div className="text-neutral-500 text-xs font-medium tracking-wider uppercase mt-1">Client Satisfaction</div>
                    </motion.div>
                    <motion.div 
                      className="px-5 py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                      whileHover={{ scale: 1.02, y: -2 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="text-white text-3xl font-bold tracking-tight">15+</div>
                      <div className="text-neutral-500 text-xs font-medium tracking-wider uppercase mt-1">Projects Delivered</div>
                    </motion.div>
                    <motion.div 
                      className="px-5 py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                      whileHover={{ scale: 1.02, y: -2 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="text-white text-3xl font-bold tracking-tight">3</div>
                      <div className="text-neutral-500 text-xs font-medium tracking-wider uppercase mt-1">Core Specialties</div>
                    </motion.div>
                  </div>
                </div>

                <div>
                  <p className="text-neutral-400 text-[1.15rem] md:text-[1.45rem] lg:text-[1.6rem] leading-[1.55] font-light max-w-[54ch] mb-10">
                    I build and ship production-ready web applications, working closely with modern frontend frameworks and backend services. I emphasize clean architecture, performance optimization, and creating intuitive user experiences that drive results.
                  </p>

                  {/* Tech stack - monochrome */}
                  <div className="flex flex-wrap gap-3">
                    {['React', 'Node.js', 'TypeScript', 'MongoDB', 'Docker', 'AWS'].map((tech, i) => (
                      <motion.div
                        key={tech}
                        className="px-5 py-2.5 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-neutral-300 text-sm font-medium hover:bg-white/10 hover:text-white hover:border-white/20 transition-all duration-300"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 + i * 0.05 }}
                        whileHover={{ scale: 1.05, y: -2 }}
                      >
                        {tech}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Large decorative number */}
            <motion.div 
              className="absolute bottom-20 right-6 md:right-16 lg:right-24 text-white/[0.03] text-[12rem] md:text-[16rem] lg:text-[20rem] font-black leading-none pointer-events-none select-none"
              animate={{ opacity: [0.02, 0.04, 0.02] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              15+
            </motion.div>

            {/* Scroll indicator */}
            <motion.div 
              className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-60"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <span className="text-white text-xs tracking-[0.15em] font-light uppercase">Scroll</span>
              <motion.div 
                className="w-[1px] h-16 bg-gradient-to-b from-white via-white/50 to-transparent"
                animate={{ opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.div>

            {/* Floating minimal shapes */}
            <motion.div
              className="absolute top-40 right-[12%] w-20 h-20 border border-white/10 rounded-lg backdrop-blur-sm"
              animate={{ 
                y: [0, -15, 0],
                rotate: [0, 45, 0],
                opacity: [0.1, 0.2, 0.1]
              }}
              transition={{ 
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute bottom-40 left-[8%] w-16 h-16 border border-white/10 rounded-full backdrop-blur-sm"
              animate={{ 
                y: [0, 15, 0],
                scale: [1, 1.1, 1],
                opacity: [0.1, 0.2, 0.1]
              }}
              transition={{ 
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </div>
        </motion.section>
      </div>

      {/* SERVICES STACK - Natural scroll with sticky overlap */}
      <div className="relative bg-black">
        {services.map((service, index) => (
          <ServiceItem
            key={index}
            service={service}
            index={index}
            ITEM_OFFSET={ITEM_OFFSET}
          />
        ))}

        {/* PUSH SPACE */}
        <div className="h-screen bg-black" />
      </div>
    </div>
  );
};

const ServiceItem = ({ service, index, ITEM_OFFSET }) => {
  const stickyTopOffset = index * ITEM_OFFSET;

  // Extract company name from title (text after "—")
  const getCompanyName = (title) => {
    const parts = title.split('—');
    if (parts.length > 1) {
      return parts[1].trim().replace('Technologies', 'Tech');
    }
    return title;
  };

  return (
    <>
      {/* Mobile Layout - Sticky with 100% overlap */}
      <div 
        className="block md:hidden sticky bg-black relative overflow-hidden"
        style={{
          top: '0px',
          zIndex: index + 1,
          marginTop: index === 0 ? '0' : '100vh', // Add full viewport spacing between sections
        }}
      >
        {/* Background gradient for depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] via-transparent to-white/[0.01] pointer-events-none" />
        
        {/* Subtle radial gradient */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-white/[0.02] rounded-full blur-3xl pointer-events-none" />
        
        {/* Decorative corner accents */}
        <div className="absolute top-0 left-0 w-32 h-32 border-t-2 border-l-2 border-white/5 rounded-tl-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-32 h-32 border-b-2 border-r-2 border-white/5 rounded-br-3xl pointer-events-none" />
        
        <div className="min-h-screen relative z-10 px-5 pt-24 pb-16 border-t border-white/10">
          <div className="max-w-[500px] mx-auto space-y-6">
            {/* Number & Title */}
            <div className="flex items-center gap-3">
              <motion.span 
                className="text-neutral-600 text-[1.1rem] font-light"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                ({String(index + 1).padStart(2, "0")})
              </motion.span>
              
              <motion.h3 
                className="text-white text-[1.4rem] font-black leading-[1.1] tracking-tight"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                {getCompanyName(service.title)}
              </motion.h3>
            </div>

            {/* Description Card */}
            <motion.div 
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="text-neutral-300 text-[0.88rem] leading-[1.6] font-light">
                {service.description}
              </p>
            </motion.div>

            {/* Technologies */}
            <motion.div 
              className="space-y-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="flex items-center gap-2">
                <div className="h-[1px] w-8 bg-white/20"></div>
                <span className="text-neutral-500 text-[0.6rem] tracking-[0.2em] uppercase font-bold">Technologies</span>
              </div>
              
              <div className="space-y-2.5 max-h-[50vh] overflow-y-auto pr-2">
                {service.technologies.map((tech, i) => (
                  <motion.div
                    key={i}
                    className="flex items-center gap-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl px-4 py-2.5"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + (i * 0.05), duration: 0.4 }}
                  >
                    <span className="text-neutral-600 font-mono text-[0.65rem] font-bold min-w-[1.5rem]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-neutral-200 text-[0.82rem] font-medium">
                      {tech}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Desktop Layout - Sticky behavior */}
      <div 
        className="hidden md:block sticky bg-black border-t border-white/10 relative overflow-hidden"
        style={{
          top: `${stickyTopOffset}px`,
          zIndex: index + 1,
          marginTop: index === 0 ? '0' : '100vh', // Add full viewport spacing between sections
        }}
      >
        {/* Background gradient for depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/[0.015] via-transparent to-white/[0.008] pointer-events-none" />
        
        {/* Subtle vignette effect */}
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/20 pointer-events-none" />
        
        {/* Decorative elements */}
        <motion.div 
          className="absolute top-10 right-10 w-40 h-40 border border-white/5 rounded-full"
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.03, 0.05, 0.03]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <div className="w-full px-6 md:px-16 lg:px-24 min-h-screen relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 max-w-[1600px] mx-auto">
            {/* NUMBER */}
            <div className="md:col-span-3 pt-10 md:pt-14">
              <motion.span 
                className="text-neutral-600 text-[2.5rem] md:text-[3.5rem] font-light inline-block hover:text-white transition-colors duration-300"
                whileHover={{ scale: 1.05, x: 5 }}
                transition={{ duration: 0.2 }}
              >
                ({String(index + 1).padStart(2, "0")})
              </motion.span>
            </div>

            {/* CONTENT */}
            <div className="md:col-span-9 pt-10 md:pt-14 pb-28">
              <h3 className="text-white text-[2rem] md:text-[2.8rem] lg:text-[3.2rem] font-medium leading-[1.1] tracking-tight mb-12">
                {service.title}
              </h3>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 md:gap-24">
                <p className="text-neutral-400 text-[1.1rem] md:text-[1.25rem] leading-[1.7] font-light">
                  {service.description}
                </p>

                <div className="space-y-5">
                  {service.technologies.map((tech, i) => (
                    <motion.div
                      key={i}
                      className="flex items-start gap-4 border-b border-white/10 pb-5 group cursor-pointer"
                      whileHover={{ x: 8, borderColor: "rgba(255,255,255,0.2)" }}
                      transition={{ duration: 0.2 }}
                    >
                      <span className="text-neutral-600 font-mono text-sm pt-1 group-hover:text-neutral-400 transition-colors">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-neutral-300 text-lg font-light group-hover:text-white transition-colors">
                        {tech}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;