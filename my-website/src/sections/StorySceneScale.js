import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { DataFlow } from "../components/IsometricScene";
import "../styles/sections/StoryScene.scss";

const StorySceneScale = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.5], [1.2, 1, 1]);

  // Create database grid data
  const databases = Array.from({ length: 24 }, (_, i) => ({
    id: i,
    delay: 0.1 + (i % 8) * 0.05 + Math.floor(i / 8) * 0.1,
  }));

  return (
    <section ref={ref} className="story-scene story-scene--scale">
      <motion.div className="scene-container" style={{ opacity, scale }}>
        {/* Scene Title */}
        <motion.div
          className="scene-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="scene-number">03</span>
          <h2 className="scene-title">The Scale</h2>
          <p className="scene-subtitle">Managing complexity at enterprise level</p>
        </motion.div>

        {/* Zoomed Out Infrastructure View */}
        <div className="scene-content scene-content--scale">
          {/* Stats Banner */}
          <motion.div
            className="scale-stats"
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <div className="stat-item">
              <span className="stat-value">500+</span>
              <span className="stat-label">Databases</span>
            </div>
            <div className="stat-divider" />
            <div className="stat-item">
              <span className="stat-value">8</span>
              <span className="stat-label">Production Servers</span>
            </div>
            <div className="stat-divider" />
            <div className="stat-item">
              <span className="stat-value">99.9%</span>
              <span className="stat-label">Uptime</span>
            </div>
            <div className="stat-divider" />
            <div className="stat-item">
              <span className="stat-value">4-8min</span>
              <span className="stat-label">Sync Latency</span>
            </div>
          </motion.div>

          {/* Visual Database Grid */}
          <motion.div
            className="database-matrix"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <div className="matrix-header">
              <span>se-mysql-66</span>
              <span>se-mysql-67</span>
              <span>se-mysql-68</span>
              <span>se-mysql-86</span>
              <span>se-mysql-87</span>
              <span>se-mysql-88</span>
              <span>se-mysql-89</span>
              <span>se-mysql-90</span>
            </div>
            <div className="matrix-grid">
              {databases.map((db) => (
                <motion.div
                  key={db.id}
                  className="matrix-cell"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: db.delay, type: "spring", stiffness: 300 }}
                >
                  <div className="cell-indicator" />
                </motion.div>
              ))}
            </div>
            <div className="matrix-label">
              Each cell represents ~20 databases being synchronized in real-time
            </div>
          </motion.div>

          {/* Data Flow Visualization */}
          <motion.div
            className="data-flow-visual"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 1, duration: 0.6 }}
          >
            <div className="flow-source">
              <div className="source-label">SQL Server</div>
              <div className="source-box">Source</div>
            </div>
            <div className="flow-pipeline">
              <DataFlow direction="right" />
              <span className="pipeline-label">BCP Export → CSV → MySQL Import</span>
              <DataFlow direction="right" />
            </div>
            <div className="flow-target">
              <div className="target-label">MySQL OLAP</div>
              <div className="target-grid">
                <div className="mini-db" />
                <div className="mini-db" />
                <div className="mini-db" />
                <div className="mini-db" />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Narrative */}
        <motion.p
          className="scene-narrative"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          From chaos to order. From alerts to insights.
          <span className="highlight"> This is what I build and maintain every day.</span>
        </motion.p>
      </motion.div>
    </section>
  );
};

export default StorySceneScale;
