import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { Terminal, DataFlow, MetricCard } from "../components/IsometricScene";
import "../styles/sections/StoryScene.scss";

const StorySceneDeepDive = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section ref={ref} className="story-scene story-scene--deepdive">
      <motion.div className="scene-container" style={{ opacity }}>
        {/* Scene Title */}
        <motion.div
          className="scene-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="scene-number">02</span>
          <h2 className="scene-title">The Deep Dive</h2>
          <p className="scene-subtitle">Tracing the root cause through layers of complexity</p>
        </motion.div>

        {/* Investigation Terminal */}
        <div className="scene-content scene-content--stacked">
          <motion.div
            className="investigation-flow"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            {/* Step 1: Check Replication */}
            <div className="investigation-step">
              <Terminal title="mysql@se-mysql-86">
                <div className="command">SHOW SLAVE STATUS\G</div>
                <div className="output">Slave_IO_Running: Yes</div>
                <div className="output">Slave_SQL_Running: Yes</div>
                <div className="output error">Seconds_Behind_Master: 847</div>
                <div className="output">Last_Error: Duplicate entry '1234' for key 'PRIMARY'</div>
              </Terminal>
              <motion.div
                className="step-indicator"
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ delay: 0.5, type: "spring" }}
              >
                <span className="step-num">1</span>
                <span className="step-label">Identify</span>
              </motion.div>
            </div>

            {/* Arrow */}
            <motion.div
              className="flow-arrow"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ delay: 0.7, duration: 0.4 }}
            >
              <DataFlow direction="right" />
            </motion.div>

            {/* Step 2: Analyze Logs */}
            <div className="investigation-step">
              <Terminal title="bash@se-mysql-86">
                <div className="command">grep -i "error" /var/log/mysql/error.log | tail -5</div>
                <div className="output">InnoDB: page_cleaner: 1000ms intended, 4500ms actual</div>
                <div className="output">Disk write latency exceeding threshold</div>
                <div className="output success">Root cause: Large transaction blocking</div>
              </Terminal>
              <motion.div
                className="step-indicator"
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ delay: 0.9, type: "spring" }}
              >
                <span className="step-num">2</span>
                <span className="step-label">Analyze</span>
              </motion.div>
            </div>

            {/* Arrow */}
            <motion.div
              className="flow-arrow"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ delay: 1.1, duration: 0.4 }}
            >
              <DataFlow direction="right" />
            </motion.div>

            {/* Step 3: Solution */}
            <div className="investigation-step">
              <Terminal title="mysql@se-mysql-86">
                <div className="command">STOP SLAVE; SET GLOBAL SQL_SLAVE_SKIP_COUNTER = 1;</div>
                <div className="command">START SLAVE;</div>
                <div className="output success">Query OK, 0 rows affected</div>
                <div className="command">SHOW SLAVE STATUS\G</div>
                <div className="output success">Seconds_Behind_Master: 0</div>
              </Terminal>
              <motion.div
                className="step-indicator success"
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ delay: 1.3, type: "spring" }}
              >
                <span className="step-num">3</span>
                <span className="step-label">Resolve</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Results */}
          <motion.div
            className="resolution-metrics"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1.5, duration: 0.6 }}
          >
            <MetricCard label="Latency" value="0s" trend="down" delay={1.6} />
            <MetricCard label="Uptime" value="99.9%" trend="up" delay={1.7} />
            <MetricCard label="Resolution" value="4min" delay={1.8} />
          </motion.div>
        </div>

        {/* Narrative */}
        <motion.p
          className="scene-narrative"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 2, duration: 0.8 }}
        >
          Systematic diagnosis. Precise execution.
          <span className="highlight"> Problem solved before sunrise.</span>
        </motion.p>
      </motion.div>
    </section>
  );
};

export default StorySceneDeepDive;
