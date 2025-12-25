import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import "../styles/sections/HeroSection.scss";

const HeroSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);

  return (
    <section id="home" ref={ref} className="hero-section">
      <motion.div
        className="hero-content"
        style={{ y, opacity, scale }}
      >
        <motion.div
          className="hero-greeting"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="bracket">&lt;</span>
          Hello, World
          <span className="bracket">/&gt;</span>
        </motion.div>

        <motion.h1
          className="hero-name"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          I'm <span className="highlight">Van Tran</span>
        </motion.h1>

        <motion.p
          className="hero-title"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Database Administrator & Server Administrator
        </motion.p>

        <motion.div
          className="scroll-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <span>Scroll to explore</span>
          <div className="scroll-arrow">
            <motion.span
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              ↓
            </motion.span>
          </div>
        </motion.div>
      </motion.div>

      <div className="hero-decoration">
        <motion.div
          className="floating-code"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0],
          }}
          transition={{ duration: 6, repeat: Infinity }}
        >
          {'{ code: "life" }'}
        </motion.div>
        <motion.div
          className="floating-code code-2"
          animate={{
            y: [0, 20, 0],
            rotate: [0, -5, 0],
          }}
          transition={{ duration: 5, repeat: Infinity, delay: 1 }}
        >
          {'SELECT * FROM dreams'}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
