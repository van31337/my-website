import { motion } from "framer-motion";
import "../styles/IsometricScene.scss";

// Isometric Server Rack
export const ServerRack = ({ delay = 0, status = "normal" }) => (
  <motion.div
    className={`iso-server-rack ${status}`}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.5 }}
  >
    <div className="rack-top" />
    <div className="rack-front">
      <div className="server-unit">
        <div className="led" />
        <div className="led" />
        <div className="led" />
        <div className="vents" />
      </div>
      <div className="server-unit">
        <div className="led" />
        <div className="led" />
        <div className="led" />
        <div className="vents" />
      </div>
      <div className="server-unit">
        <div className="led" />
        <div className="led" />
        <div className="led" />
        <div className="vents" />
      </div>
    </div>
    <div className="rack-side" />
  </motion.div>
);

// Isometric Database Cylinder
export const Database = ({ delay = 0, label, status = "normal" }) => (
  <motion.div
    className={`iso-database ${status}`}
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ delay, duration: 0.5, type: "spring" }}
  >
    <div className="db-top" />
    <div className="db-body">
      <div className="db-ring" />
      <div className="db-ring" />
      <div className="db-ring" />
    </div>
    <div className="db-bottom" />
    {label && <span className="db-label">{label}</span>}
  </motion.div>
);

// Data Flow Particles
export const DataFlow = ({ direction = "right", color = "green" }) => (
  <div className={`data-flow ${direction} ${color}`}>
    <div className="particle" />
    <div className="particle" />
    <div className="particle" />
    <div className="particle" />
    <div className="particle" />
  </div>
);

// Terminal Window
export const Terminal = ({ children, title = "terminal" }) => (
  <motion.div
    className="iso-terminal"
    initial={{ opacity: 0, x: -30 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.6 }}
  >
    <div className="terminal-header">
      <div className="terminal-buttons">
        <span className="btn red" />
        <span className="btn yellow" />
        <span className="btn green" />
      </div>
      <span className="terminal-title">{title}</span>
    </div>
    <div className="terminal-body">{children}</div>
  </motion.div>
);

// Alert/Error Badge
export const AlertBadge = ({ count, delay = 0 }) => (
  <motion.div
    className="alert-badge"
    initial={{ scale: 0 }}
    whileInView={{ scale: 1 }}
    transition={{ delay, type: "spring", stiffness: 500 }}
  >
    {count}
  </motion.div>
);

// Connection Line
export const ConnectionLine = ({ from, to, animated = true }) => (
  <svg className="connection-line" style={{ position: "absolute", width: "100%", height: "100%", pointerEvents: "none" }}>
    <motion.line
      x1={from.x}
      y1={from.y}
      x2={to.x}
      y2={to.y}
      stroke="#00ff00"
      strokeWidth="2"
      strokeDasharray="5,5"
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      transition={{ duration: 1 }}
    />
  </svg>
);

// Typing Animation Text
export const TypingText = ({ text, delay = 0 }) => (
  <motion.span
    className="typing-text"
    initial={{ width: 0 }}
    whileInView={{ width: "auto" }}
    transition={{ delay, duration: text.length * 0.05 }}
  >
    {text}
  </motion.span>
);

// Isometric Monitor
export const Monitor = ({ children, delay = 0 }) => (
  <motion.div
    className="iso-monitor"
    initial={{ opacity: 0, rotateY: -20 }}
    whileInView={{ opacity: 1, rotateY: 0 }}
    transition={{ delay, duration: 0.6 }}
  >
    <div className="monitor-screen">{children}</div>
    <div className="monitor-stand" />
    <div className="monitor-base" />
  </motion.div>
);

// Floating Metrics
export const MetricCard = ({ label, value, trend, delay = 0 }) => (
  <motion.div
    className={`metric-card ${trend}`}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.4 }}
  >
    <span className="metric-value">{value}</span>
    <span className="metric-label">{label}</span>
    {trend && <span className="metric-trend">{trend === "up" ? "↑" : "↓"}</span>}
  </motion.div>
);
