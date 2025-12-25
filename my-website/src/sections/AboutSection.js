import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { GlassCard } from "../components";
import "../styles/sections/AboutSection.scss";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [150, -50]);

  return (
    <section id="about" ref={ref} className="about-section">
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">Get to know me better</p>
      </motion.div>

      <div className="about-grid">
        <motion.div
          className="about-card-wrapper"
          style={{ y: y1 }}
        >
          <GlassCard className="about-card" delay={0}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="card-title">
                <span className="icon">💻</span> Professional
              </h3>
              <div className="card-body">
                <p>
                  <span className="bullet">▸</span>
                  Database Developer at Salary.com, managing 500+ MySQL databases across production servers.
                </p>
                <p>
                  <span className="bullet">▸</span>
                  Honor B.S. in Computer Science from University of Calgary + DBA certification from SAIT.
                </p>
                <p>
                  <span className="bullet">▸</span>
                  Expertise in ETL pipelines, performance tuning, and high-availability database systems.
                </p>
                <p>
                  <span className="bullet">▸</span>
                  Full-stack capable: React, Node.js, Python, AWS, Docker.
                </p>
              </div>
            </motion.div>
          </GlassCard>
        </motion.div>

        <motion.div
          className="about-card-wrapper"
          style={{ y: y2 }}
        >
          <GlassCard className="about-card" delay={0}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="card-title">
                <span className="icon">🎮</span> Personal
              </h3>
              <div className="card-body">
                <p>
                  <span className="bullet">▸</span>
                  Friends describe me as hilarious, friendly, and open-minded.
                </p>
                <p>
                  <span className="bullet">▸</span>
                  I love jokes, puns, and especially memes!
                </p>
                <p>
                  <span className="bullet">▸</span>
                  Always learning new technologies and staying up-to-date with industry trends.
                </p>
                <p>
                  <span className="bullet">▸</span>
                  Outside of work: gaming, exploring new coffee shops, and contributing to open source.
                </p>
              </div>
            </motion.div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
