import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { FaCode, FaMobile, FaGlobe, FaPlane, FaDatabase } from "react-icons/fa";
import { GlassCard } from "../components";
import "../styles/sections/ProjectsSection.scss";

const projects = [
  {
    icon: FaDatabase,
    title: "OLAP Data Sync System",
    description:
      "Enterprise data synchronization system managing 500+ MySQL databases across 8 production servers with real-time monitoring and 99.9% uptime.",
    tags: ["MySQL", "PowerShell", "Grafana", "ETL"],
  },
  {
    icon: FaCode,
    title: "SQL Query Optimizer",
    description:
      "Genetic algorithm-based query scheduler that evolves execution plans to minimize query time, improving database responsiveness.",
    tags: ["Python", "Genetic Algorithms", "SQL"],
  },
  {
    icon: FaDatabase,
    title: "Vector Database Implementation",
    description:
      "Custom PostgreSQL vector database powering Alberta Health Services virtual assistant system for semantic search.",
    tags: ["PostgreSQL", "Vector DB", "AI/ML"],
  },
  {
    icon: FaGlobe,
    title: "Portfolio Website",
    description:
      "Matrix-themed personal website with parallax scrolling, glassmorphism UI, and smooth animations.",
    tags: ["React", "Framer Motion", "SCSS"],
  },
  {
    icon: FaPlane,
    title: "Travel Agency RDBMS",
    description:
      "End-to-end Oracle database solution with 3NF schema design, RMAN backup, and role-based access control.",
    tags: ["Oracle", "PL/SQL", "RMAN"],
  },
  {
    icon: FaMobile,
    title: "Real-time Chat App",
    description:
      "Full-featured messaging application with private/group chats, media sharing, and WebSocket integration.",
    tags: ["React Native", "Firebase", "WebSocket"],
  },
];

const ProjectCard = ({ project, index, scrollYProgress, isInView }) => {
  const row = Math.floor(index / 2);
  const isEven = index % 2 === 0;

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [100 + row * 50, -50 - row * 30]
  );

  return (
    <motion.div
      className="project-wrapper"
      style={{ y }}
    >
      <GlassCard className="project-card" delay={0}>
        <motion.div
          initial={{ opacity: 0, x: isEven ? -50 : 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: index * 0.1 }}
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
        </motion.div>
      </GlassCard>
    </motion.div>
  );
};

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.1 });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  return (
    <section id="projects" ref={ref} className="projects-section">
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">Projects</h2>
        <p className="section-subtitle">Things I've built and worked on</p>
      </motion.div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.title}
            project={project}
            index={index}
            scrollYProgress={scrollYProgress}
            isInView={isInView}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
