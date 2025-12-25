import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { FaDownload, FaExternalLinkAlt } from "react-icons/fa";
import { GlassCard } from "../components";
import "../styles/sections/ResumeSection.scss";

const resumeUrl = "https://vans-website.s3.amazonaws.com/Awesome_CV.pdf";

const ResumeSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.9]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0.5]);

  return (
    <section id="resume" ref={ref} className="resume-section">
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">Resume</h2>
        <p className="section-subtitle">My professional experience and qualifications</p>
      </motion.div>

      <motion.div
        className="resume-container"
        style={{ scale, opacity }}
      >
        <GlassCard className="resume-card" hover={false} delay={0}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="resume-actions">
              <motion.a
                href={resumeUrl}
                download
                className="resume-btn primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaDownload /> Download Resume
              </motion.a>
              <motion.a
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="resume-btn secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaExternalLinkAlt /> View Full Screen
              </motion.a>
            </div>

            <div className="resume-preview">
              <object
                data={resumeUrl}
                type="application/pdf"
                width="100%"
                height="100%"
              >
                <div className="pdf-fallback">
                  <p>Your browser doesn't support embedded PDFs.</p>
                  <a href={resumeUrl} className="fallback-link">
                    <FaDownload /> Download Resume
                  </a>
                </div>
              </object>
            </div>
          </motion.div>
        </GlassCard>
      </motion.div>
    </section>
  );
};

export default ResumeSection;
