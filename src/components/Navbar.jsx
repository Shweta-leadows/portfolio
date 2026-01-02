import { heroContent, navLinks } from "../data";
import { motion } from "framer-motion";

const Navbar = () => {
  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      animate="visible"
      className="
        sticky
        top-0
        z-[100]
        w-full
        flex
        items-center
        justify-between
        px-6
        sm:px-8
        md:px-12
        lg:px-16
        xl:px-24
        pt-6
        md:pt-8
        lg:pt-10
        pb-4
        md:pb-5
        uppercase
        text-[10px]
        md:text-[11px]
        tracking-[0.3em]
        text-[#666]
        bg-[#e8e3da]/95
        backdrop-blur-sm
        border-b
        border-[#d0c9bc]/40
      "
    >
      {/* LEFT */}
      <motion.div
        variants={itemVariants}
        className="text-[0.85rem] md:text-[0.95rem] font-medium tracking-[0.3px] uppercase text-[#1a1a1a] relative group"
      >
        {heroContent.role}
        <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#2a2a2a] group-hover:w-full transition-all duration-500 ease-out"></span>
      </motion.div>

      {/* RIGHT */}
      <motion.ul
        variants={navVariants}
        className="flex items-center gap-6 sm:gap-8 md:gap-10 lg:gap-12 list-none"
      >
        {navLinks.map((link) => (
          <motion.li key={link.id} variants={itemVariants}>
            <a
              href={link.href}
              className="
                text-[0.75rem]
                md:text-[0.8rem]
                font-medium
                tracking-[0.3px]
                text-[#666]
                hover:text-[#1a1a1a]
                transition-all
                duration-300
                relative
                group
                block
              "
            >
              {link.title}
              <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-[#2a2a2a] group-hover:w-full transition-all duration-300 ease-out"></span>
            </a>
          </motion.li>
        ))}
      </motion.ul>
    </motion.nav>
  );
};

export default Navbar;