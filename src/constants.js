// ========================
// Skill Section Logos
// ========================
import htmlLogo from "./assets/tech_logo/html.png";
import cssLogo from "./assets/tech_logo/css.png";
import sassLogo from "./assets/tech_logo/sass.png";
import javascriptLogo from "./assets/tech_logo/javascript.png";
import reactjsLogo from "./assets/tech_logo/reactjs.png";
import nextjsLogo from "./assets/tech_logo/nextjs.png";
import tailwindcssLogo from "./assets/tech_logo/tailwindcss.png";
import gsapLogo from "./assets/tech_logo/gsap.png";
import materialuiLogo from "./assets/tech_logo/materialui.png";
import bootstrapLogo from "./assets/tech_logo/bootstrap.png";
import nodejsLogo from "./assets/tech_logo/nodejs.png";
import expressjsLogo from "./assets/tech_logo/express.png";
import mysqlLogo from "./assets/tech_logo/mysql.png";
import mongodbLogo from "./assets/tech_logo/mongodb.png";
import firebaseLogo from "./assets/tech_logo/firebase.png";
import cLogo from "./assets/tech_logo/c.png";
import cppLogo from "./assets/tech_logo/cpp.png";
import javaLogo from "./assets/tech_logo/java.png";
import pythonLogo from "./assets/tech_logo/python.png";
import typescriptLogo from "./assets/tech_logo/typescript.png";
import gitLogo from "./assets/tech_logo/git.png";
import githubLogo from "./assets/tech_logo/github.png";
import vscodeLogo from "./assets/tech_logo/vscode.png";
import postmanLogo from "./assets/tech_logo/postman.png";
import figmaLogo from "./assets/tech_logo/figma.png";
import netlifyLogo from "./assets/tech_logo/netlify.png";
import vercelLogo from "./assets/tech_logo/vercel.png";

// ========================
// Education Logos
// ========================
import ku from "./assets/education_logo/ku .jpg";
import nwu from "./assets/education_logo/nwu.jpg";
import kmpi from "./assets/education_logo/KMPI.jpg";
import digholia from "./assets/education_logo/digholia.jpg";

// Optional profile link
export const GITHUB_PROFILE = "https://github.com/naimaashraftithii";

// ========================
// SKILLS
// ========================
export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      { name: "Sass", logo: sassLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "TypeScript", logo: typescriptLogo },
      { name: "React JS", logo: reactjsLogo },
      { name: "Next JS", logo: nextjsLogo },
      { name: "Tailwind CSS", logo: tailwindcssLogo },
      { name: "Bootstrap", logo: bootstrapLogo },
      { name: "Material UI", logo: materialuiLogo },
      { name: "GSAP", logo: gsapLogo },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node JS", logo: nodejsLogo },
      { name: "Express JS", logo: expressjsLogo },
      { name: "MongoDB", logo: mongodbLogo },
      { name: "MySQL", logo: mysqlLogo },
      { name: "Firebase", logo: firebaseLogo },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "C", logo: cLogo },
      { name: "C++", logo: cppLogo },
      { name: "Java", logo: javaLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "Python", logo: pythonLogo },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "VS Code", logo: vscodeLogo },
      { name: "Postman", logo: postmanLogo },
      { name: "Netlify", logo: netlifyLogo },
      { name: "Vercel", logo: vercelLogo },
      { name: "Figma", logo: figmaLogo },
    ],
  },
];

// ========================
// EDUCATION
// ========================
export const education = [
  {
    id: 0,
    img: ku,
    school: "Khulna University, Khulna",
    date: "2024 – Present",
    grade: "CGPA: 3.47 out of 4.00",
    desc: "Pursuing M.Sc. in Computer Science and Engineering. Building strong foundations in advanced algorithms, distributed systems, and modern web technologies.",
    degree: "M.Sc. in Computer Science and Engineering",
  },
  {
    id: 1,
    img: nwu,
    school: "North Western University, Khulna",
    date: "2019 – 2023",
    grade: "CGPA: 3.48 out of 4.00",
    desc: "Completed B.Sc. in Computer Science and Engineering. Worked on multiple academic and personal projects in web development and software engineering.",
    degree: "B.Sc. in Computer Science and Engineering",
  },
  {
    id: 2,
    img: kmpi,
    school: "Khulna Mohila Polytechnic Institute, Khulna",
    date: "2015 – 2018",
    grade: "CGPA: 3.47 out of 4.00",
    desc: "Completed Diploma in Computer Science under BTEB with focus on programming, networking, and software fundamentals.",
    degree: "Diploma in Computer Science",
  },
  {
    id: 3,
    img: digholia,
    school: "Digholia M. A. Majid Secondary School, Khulna",
    date: "2015",
    grade: "GPA: 4.44 out of 5.00",
    desc: "Completed SSC in Science, focusing on Mathematics, Physics, and Chemistry.",
    degree: "Secondary School Certificate (SSC) – Science",
  },
];

// ========================
// PROJECTS
// ========================
export const projects = [
  {
    id: 0,
    title: "TravelEase – Car Rental Web App",
    description:
      "A full-stack car rental platform where users can browse vehicles, apply filters, and make secure bookings. Features a modern UI, smooth animations, and user authentication for a seamless experience.",
    image: "https://i.ibb.co.com/35JVwjQC/Travel-Easy.png",
    tags: ["React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "Firebase"],
    github: "https://github.com/naimaashraftithii/travelease-client",
    webapp: "https://frabjous-eclair-9a636d.netlify.app/",
  },
  {
    id: 1,
    title: "GreenNest – Indoor Plant Care & Store",
    description:
      "A single-page React app for browsing indoor plants, reading detailed care guides, and booking expert consultations. Features smooth UI, protected routes, and a nature-inspired design.",
    image: "https://i.ibb.co.com/Kpjjfrdc/Green-Nest.png",
    tags: ["React", "Tailwind CSS", "Firebase"],
    github: "https://github.com/naimaashraftithii/A9-Green-Nest.git",
    webapp: "https://greeenet.netlify.app/",
  },
  {
    id: 2,
    title: "EventHub – Event Management Platform",
    description:
      "A modern event management platform built using Next.js App Router and NextAuth. Users can create, edit, and manage events with fully secured authentication and responsive layouts.",
    image: "https://i.ibb.co.com/5WYshG7R/Event-Management.png",
    tags: ["Next.js", "NextAuth", "Node.js", "Express.js", "MongoDB"],
    github: "https://github.com/naimaashraftithii/eventhub-client",
    webapp: "https://eventhub-demo.vercel.app",
  },
  {
    id: 3,
    title: "CS — Ticket System",
    description:
      "A customer support dashboard for managing support tickets with features like loaders, badges, toast notifications, and clean UI components optimized for productivity.",
    image: "https://i.ibb.co.com/TDWzS1m9/CS-Ticket-System.png",
    tags: ["React", "Vite", "Tailwind CSS", "React Toastify", "React Icons"],
    github:
      "https://github.com/naimaashraftithii/a7-customersupportzone-explorereact.git",
    webapp: "https://dreamy-pasca-9cf65c.netlify.app/",
  },
  {
    id: 4,
    title: "HERO.IO — Modern App Store",
    description:
      "A mini app store platform where users can browse apps, view details, and install apps using localStorage. Includes skeleton loaders, animations, and multi-page navigation.",
    image: "https://i.ibb.co.com/dsytrS8s/HERO-IO.png",
    tags: ["React", "Vite", "Tailwind CSS", "DaisyUI", "React Router", "React Toastify"],
    github: "https://github.com/naimaashraftithii/A8-Hero-App-React.git",
    webapp: "https://zesty-fenglisu-d5e062.netlify.app/",
  },
];
