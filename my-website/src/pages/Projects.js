import { motion } from "framer-motion";
import { FaSpotify, FaCode, FaMobile, FaGlobe, FaPlane, FaDatabase } from "react-icons/fa";
import { GlassCard, PageWrapper } from "../components";
import "../styles/Projects.scss";

const projects = [
  {
    icon: FaSpotify,
    title: "Spotify API Dashboard",
    description:
      "A server that fetches and displays Spotify account information with a sleek Spotify-themed interface. Features real-time data visualization.",
    tags: ["Node.js", "REST API", "OAuth"],
  },
  {
    icon: FaCode,
    title: "ML Notebook Collection",
    description:
      "A comprehensive collection of Jupyter notebooks covering linear algebra fundamentals to advanced machine learning models for various problem domains.",
    tags: ["Python", "TensorFlow", "Scikit-learn"],
  },
  {
    icon: FaMobile,
    title: "React Native Chat App",
    description:
      "A WhatsApp-like messaging application supporting private and group chats with image sharing, emojis, and real-time messaging.",
    tags: ["React Native", "Firebase", "WebSocket"],
  },
  {
    icon: FaGlobe,
    title: "This Portfolio Website",
    description:
      "A Matrix-themed personal website built with React, featuring animated backgrounds, glassmorphism UI, and deployed on AWS.",
    tags: ["React", "AWS", "Framer Motion"],
  },
  {
    icon: FaPlane,
    title: "Travel Agency System",
    description:
      "A robust database application for travel agencies with optimized queries, hardware failure protection, and fast transaction processing.",
    tags: ["SQL Server", "Database Design", "Optimization"],
  },
  {
    icon: FaDatabase,
    title: "OLAP Sync System",
    description:
      "Production data synchronization system managing hundreds of databases across multiple MySQL servers with real-time monitoring.",
    tags: ["MySQL", "PowerShell", "Grafana"],
  },
];

const Projects = () => {
  return (
    <PageWrapper className="projects-page">
      <motion.div
        className="projects-header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="page-title">Projects</h1>
        <p className="page-subtitle">
          A collection of things I've built and worked on
        </p>
      </motion.div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <GlassCard
            key={project.title}
            delay={0.1 + index * 0.1}
            className="project-card"
          >
            <div className="project-icon">
              <project.icon />
            </div>
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <div className="project-tags">
              {project.tags.map((tag) => (
                <span key={tag} className="tag">
                  {tag}
                </span>
              ))}
            </div>
          </GlassCard>
        ))}
      </div>
    </PageWrapper>
  );
};

export default Projects;
