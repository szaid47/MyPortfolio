import { link } from "framer-motion/client";
import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";      
import project4 from "../assets/projects/detection.png";   

export const HERO_CONTENT = `Hey, I’m Syed Zaheed — great to e-meet you! I’m a full stack developer and a computer science enthusiast who loves building cool and meaningful projects. I'm especially passionate about creating web apps using React and Next.js, whipping up data tools with Streamlit, and diving into CNN-based AI projects whenever I get the chance.
Hackathons are my go-to space for learning, building, and connecting with like-minded techies. When I’m not coding, you’ll probably find me watching Friends or geeking out over the latest phone and laptop launches. Let’s connect — my socials are just above! `;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "Feb 2025 - Mar 2025",
    role: "Data Analyst",
    company: "Infosys SpringBoard",
    description: `Worked on a project to analyze and visualize data using Python and Streamlit. Developed interactive dashboards to present insights and trends. Collaborated with a team to gather requirements and deliver a comprehensive data analysis solution.`,
    technologies: ["Python", "Streamlit", "PowerBi", "Ollama4"],
  },
  {
  year: "Sep 2024 - Oct 2024",
  role: "Data Entry Operator",
  company: "Flipkart",
  description: `Performed data entry and validation tasks to ensure accurate inventory and order processing. Worked with internal logistics tools to manage product details, barcodes, and shipment data. Collaborated with the warehouse team to streamline operations and maintain database consistency.`,
  technologies: ["Excel", "Flo (Flipkart Logistics Tool)"],
 },

  {
  year: "April 2024 - April 2025",
  role: "Chairperson IEEE Student Membership",  
  company: "",
  description: `Led the IEEE Student Membership body, organizing technical quizzes, functions, and recreational outings to foster community engagement and professional growth. Collaborated with team members to plan events, manage logistics, and boost active student participation in IEEE activities.`,
  technologies: ["Event Management", "Team Coordination", "Public Speaking"],
  },
  
];

export const PROJECTS = [
  {
    title: "Algo-Meet",
    image: project1,
    description:
      "AlgoMeet is an innovative online coding interview platform designed to provide a seamless and interactive experience for both interviewees and interviewers. Built using Next.js, the platform enables real-time coding interviews where candidates can share their screen and coding environment while their camera remains on for a more authentic interview experience.",
    technologies: ["Next.js", "Tailwind CSS", "React", "Node.js", "CONVEX","CLERK"],
    link: "https://algo-meet-ashen.vercel.app/",
  },
   {
    title: "Ocean-view - Sea Debris detection",
    image: project4,
    description:
      "An AI-powered underwater trash detection application that uses advanced computer vision to identify marine debris in images and videos. The system includes a modern React frontend and Python FastAPI backend.",
    technologies: ["React", "Tailwind CSS", "Python", "FastAPI", "OpenCV", "TensorFlow"],
    link: "https://github.com/szaid47/Ocean-View",
  },
  {
    title: "ShopEase - E-commerce Platform",
    image: project2,
    description:
      "ShopEase is a sleek e-commerce platform built with React, Node.js, and Stripe. It features product browsing, cart management, secure checkout, coupon-based discounts, and seamless Stripe integration for fast, reliable payments.",
    technologies: ["React", "TailwindCSS", "Stripe", "Redis", "Node.js","Express"],
    link: "https://shopease-ipll.onrender.com/",
  },
  {
    title: "Konvo - Chat Application",
    image: project3,
    description:
      "Konvo is a real-time chat application built with the MERN stack and Socket.io. It offers seamless one-on-one and group messaging with instant updates, user authentication, and a clean, responsive interface for smooth communication.",
    technologies: ["React", "Express", "MongoDb", "Node.js", "Socket.io"],
    link: "https://chat-app-mern-stack-3.onrender.com/",
  },
 
];

export const CONTACT = {
  address: "767 Fifth Avenue, New York, NY 10153 ",
  phoneNo: "+91 7411316147" ,
  email: "syedzaheed2004@gmail.com",
};
