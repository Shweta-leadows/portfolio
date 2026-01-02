import chromeVideo from "../src/assets/chrome-extension.mp4";

export const navLinks = [
  { id: 1, title: "Services", href: "#services" },
  { id: 2, title: "Works", href: "#works" },
  { id: 3, title: "About", href: "#about" },
  { id: 4, title: "Contact", href: "#contact" },
];

export const heroContent = {
  role: "WEB DEVELOPER",
  name: "SHWETA KOHAD",
  description:
    "Open to job opportunities worldwide. Passionate about building polished, intuitive, and thoughtful digital experiences that leave a mark.",
  contactBtn: "CONTACT",
  experienceLabel: "CRAFTING WEB EXPERIENCES SINCE",
  experienceDate: "JUN'24",
  image: "src/sample-image.avif",
};

export const services = [
  {
    title: "Software Engineer",
    description:
      "From frontend interactions to backend APIs, I build complete web solutions. I work with modern stacks to deliver apps that are scalable, maintainable, and ready for real-world users.",
    technologies: [
      "React, Node.js, Express.js",
      "REST APIs, Firebase, Docker",
      "Git, GitHub, Postman",
    ],
  },
  {
    title: "UI/UX & Frontend",
    description:
      "Design is more than looks — it's about clarity and connection. I design and develop clean, responsive interfaces that feel intuitive across devices. My focus is on clarity, accessibility, and seamless user experiences.",
    technologies: [
      "Next.js, TailwindCSS, GSAP",
      "Figma to Code",
      "HTML, CSS, JavaScript",
    ],
  },
  {
    title: "Performance Optimization",
    description:
      "Speed matters. I optimize web applications for faster load times, better SEO, and improved user experience through code splitting, lazy loading, and performance monitoring.",
    technologies: [
      "Lighthouse, Web Vitals",
      "Code Splitting, Lazy Loading",
      "CDN Integration, Caching",
    ],
  },
];

export const skills = [
  "React",
  "JavaScript",
  "TypeScript",
  "HTML5",
  "CSS3",
  "Tailwind CSS",
  "Framer Motion",
  "Next.js",
  "Node.js",
  "Git",
  "Responsive Design",
  "UI/UX Design",
];

// data.js
export const projects = [
  {
    id: 1,
    title: "Nura E-commerce Website",
    description:
      "A modern e-commerce experience focused on clean UI, smooth animations, and intuitive user flows.",
    technologies: ["React", "Tailwind CSS", "Framer Motion"],
    media: chromeVideo,
    type: "video",
  },
  {
    id: 2,
    title: "Job Portal Dashboard",
    description:
      "A job management system with role-based dashboards, employee tracking, and hiring workflows.",
    technologies: ["React", "Node.js", "MongoDB"],
    media: chromeVideo,
    type: "video",
  },
  {
    id: 3,
    title: "Personal Portfolio",
    description:
      "A portfolio showcasing projects, skills, and experience with smooth scroll interactions.",
    technologies: ["React", "GSAP", "Tailwind CSS"],
    media: chromeVideo,
    type: "video",
  },
];
