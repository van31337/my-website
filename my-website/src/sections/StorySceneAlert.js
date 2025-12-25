import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { ServerRack, Database, Terminal, AlertBadge, DataFlow, MetricCard } from "../components/IsometricScene";
import "../styles/sections/StoryScene.scss";

const StorySceneAlert = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.8, 1, 1, 0.9]);

  return (
    <section ref={ref} className="story-scene story-scene--alert">
      <motion.div className="scene-container" style={{ opacity, scale }}>
        {/* Scene Title */}
        <motion.div
          className="scene-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="scene-number">01</span>
          <h2 className="scene-title">The Alert</h2>
          <p className="scene-subtitle">3:47 AM — Production systems need attention</p>
        </motion.div>

        {/* Main Scene Content */}
        <div className="scene-content">
          {/* Left: Terminal showing alerts */}
          <motion.div
            className="scene-left"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <Terminal title="alerts@se-mysql-86">
              <div className="terminal-line error">
                [CRITICAL] Replication lag detected: 847s behind master
              </div>
              <div className="terminal-line error">
                [CRITICAL] Disk usage at 94% on /var/lib/mysql
              </div>
              <div className="terminal-line warning">
                [WARNING] Query timeout: SELECT * FROM tbl_CompData...
              </div>
              <div className="terminal-line error">
                [CRITICAL] Connection pool exhausted (max: 150)
              </div>
              <div className="terminal-line">
                <span className="typing-cursor">Analyzing root cause...</span>
              </div>
            </Terminal>
          </motion.div>

          {/* Center: Server Infrastructure */}
          <motion.div
            className="scene-center"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <div className="infrastructure-grid">
              <div className="server-group">
                <ServerRack status="error" delay={0.6} />
                <AlertBadge count="3" delay={0.8} />
              </div>
              <div className="db-connections">
                <DataFlow direction="right" color="red" />
                <DataFlow direction="right" color="red" />
              </div>
              <div className="database-group">
                <Database label="MySQL-86" status="error" delay={0.7} />
                <Database label="MySQL-87" status="warning" delay={0.8} />
                <Database label="MySQL-88" status="syncing" delay={0.9} />
              </div>
            </div>
          </motion.div>

          {/* Right: Metrics Dashboard */}
          <motion.div
            className="scene-right"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <div className="metrics-stack">
              <MetricCard label="Latency" value="847s" trend="up" delay={0.5} />
              <MetricCard label="Disk" value="94%" trend="up" delay={0.6} />
              <MetricCard label="Connections" value="150" trend="up" delay={0.7} />
              <MetricCard label="Failed Queries" value="23" trend="up" delay={0.8} />
            </div>
          </motion.div>
        </div>

        {/* Narrative Text */}
        <motion.p
          className="scene-narrative"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1, duration: 0.8 }}
        >
          When critical systems fail at 3 AM, every second counts.
          <span className="highlight"> This is where I come in.</span>
        </motion.p>
      </motion.div>
    </section>
  );
};

export default StorySceneAlert;
